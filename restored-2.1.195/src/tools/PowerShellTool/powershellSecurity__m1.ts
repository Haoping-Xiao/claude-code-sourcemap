// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ofc
// matched 2.1.88 source: src/tools/PowerShellTool/powershellSecurity.ts
// class=modified (alt of src/tools/PowerShellTool/powershellSecurity.ts)  jaccard=0.0057  score=0.012  fileCov=0.0107
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ofc] deps: dn, je, u9, Mh, Jt, sr, qpc
Elm = {
  openTimeoutMs: 10000 /* 1e4 */,
  openMaxAttempts: 3,
  openBackoffBaseMs: 100,
  sendHighWater: 4194304,
  sendLowWater: 1048576,
  drainPollMs: 50,
  pendingBytesCap: 33554432,
  poolMax: 4,
  poolIdleTtlMs: 10000 /* 1e4 */,
  poolMaxAgeMs: 2700000,
  finGraceMs: 1500,
};
function lfc(e, t) {
  let n = t?.trim();
  if (n?.includes("javax.net.ssl.trustStore=")) return n;
  let r = `-Djavax.net.ssl.trustStore=${e} -Djavax.net.ssl.trustStorePassword=${VZt} -Djavax.net.ssl.trustStoreType=PKCS12`;
  return n ? `${r} ${n}` : r;
}
async function checkDownloadUtilities(parsed) {
  let t = [],
    n = {
      failureCodes: t,
    },
    r = Fz.join(parsed.stateDir, "agent-proxy-ca.crt");
  try {
    (await fw.mkdir(parsed.stateDir, {
      recursive: true,
    }),
      await fw.writeFile(r, parsed.ccrCa, "utf8"));
  } catch (i) {
    return (
      T(`[agent-proxy] tool trust setup skipped: cannot write CA file: ${be(i)}`, {
        level: "warn",
      }),
      Le("agent_proxy_tool_trust", "ca_file_write_failed"),
      n
    );
  }
  let o = await ifc(parsed.keytoolBin, Ulm),
    s = await ifc(parsed.certutilBin, () => Gf("certutil"));
  if (
    (await Promise.all([
      (async () => {
        if (!o) {
          T("[agent-proxy] no keytool found; skipping JVM truststore");
          return;
        }
        let i = await Flm(o, r, Fz.join(parsed.stateDir, "java-truststore.p12"), t);
        if (!i) return;
        if (Blm.test(i)) {
          (T(
            `[agent-proxy] truststore path contains JVM-unsafe characters; not emitting JAVA_TOOL_OPTIONS: ${i}`,
            {
              level: "warn",
            },
          ),
            t.push("jvm_unsafe_truststore_path"));
          return;
        }
        ((n.javaTrustStorePath = i), await jlm(i, parsed.bazelrcPath ?? "/etc/bazel.bazelrc", t));
      })(),
      (async () => {
        if (!s) {
          T("[agent-proxy] certutil not found; skipping NSS trust for browsers");
          return;
        }
        await Glm(
          r,
          parsed.nssDbDirs ?? [
            Fz.join(Q9o.homedir(), ".pki", "nssdb"),
            Fz.join(Ore(), "pki", "nssdb"),
          ],
          s,
          t,
        );
      })(),
      Wlm(parsed.caBundlePath, parsed.botoConfigPath ?? Fz.join(Q9o.homedir(), ".boto"), t),
      qlm(parsed, parsed.profileDPath ?? "/etc/profile.d/ccr-agent-proxy-ca.sh", t).then((i) => {
        n.profileDPath = i;
      }),
    ]),
    t.length === 0)
  )
    xe("agent_proxy_tool_trust");
  else It("agent_proxy_tool_trust", t[0]);
  return n;
}
async function ifc(e, t) {
  if (e)
    return fw.realpath(e).catch(() => {
      return;
    });
  return (await t()) ?? void 0;
}
async function Ulm() {
  let e = [await Gf("keytool"), Oe.JAVA_HOME ? Fz.join(Oe.JAVA_HOME, "bin", "keytool") : void 0],
    t;
  for (let n of e) {
    if (!n) continue;
    let r = await fw.realpath(n).catch(() => {
      return;
    });
    if (!r) continue;
    if (((t ??= r), await ufc(r))) return r;
  }
  return t;
}
async function ufc(e) {
  let t = Fz.dirname(Fz.dirname(e));
  for (let n of [
    Fz.join(t, "lib", "security", "cacerts"),
    Fz.join(t, "jre", "lib", "security", "cacerts"),
  ]) {
    let r = await fw.realpath(n).catch(() => {
      return;
    });
    if (r) return r;
  }
  return;
}
async function Flm(e, t, n, r) {
  let o = await ufc(e);
  if (!o) {
    (T(`[agent-proxy] no JDK cacerts found near ${e}; skipping JVM truststore`),
      r.push("jdk_cacerts_not_found"));
    return;
  }
  let s = `${n}.tmp`;
  await fw.unlink(s).catch(() => {});
  let i = await pTt(e, [
    "-importkeystore",
    "-noprompt",
    "-srckeystore",
    o,
    "-srcstorepass",
    VZt,
    "-destkeystore",
    s,
    "-deststoretype",
    "PKCS12",
    "-deststorepass",
    VZt,
  ]);
  if (!i.ok) {
    (T(`[agent-proxy] keytool importkeystore failed: ${i.detail}`, {
      level: "warn",
    }),
      r.push("java_truststore_seed_failed"),
      await fw.unlink(s).catch(() => {}));
    return;
  }
  let a = await pTt(e, [
    "-importcert",
    "-noprompt",
    "-trustcacerts",
    "-alias",
    "ccr-agent-proxy",
    "-file",
    t,
    "-keystore",
    s,
    "-storetype",
    "PKCS12",
    "-storepass",
    VZt,
  ]);
  if (!a.ok) {
    (T(`[agent-proxy] keytool importcert failed: ${a.detail}`, {
      level: "warn",
    }),
      r.push("java_truststore_import_failed"),
      await fw.unlink(s).catch(() => {}));
    return;
  }
  try {
    await fw.rename(s, n).catch(async () => {
      (await fw.writeFile(n, await fw.readFile(s)), await fw.unlink(s).catch(() => {}));
    });
  } catch (l) {
    (T(`[agent-proxy] could not move JVM truststore into place: ${be(l)}`, {
      level: "warn",
    }),
      r.push("java_truststore_publish_failed"));
    return;
  }
  return (T(`[agent-proxy] JVM truststore built at ${n}`), n);
}
async function jlm(e, t, n) {
  let r = `${sfc}
# Bazel's repository downloader runs on its embedded JDK and ignores
# JAVA_TOOL_OPTIONS; carry the agent-proxy truststore via startup options.
startup --host_jvm_args=-Djavax.net.ssl.trustStore=${e} --host_jvm_args=-Djavax.net.ssl.trustStorePassword=${VZt} --host_jvm_args=-Djavax.net.ssl.trustStoreType=PKCS12
${J9o}
`,
    o;
  try {
    o = await fw.readFile(t, "utf8");
  } catch (u) {
    if (!wn(u)) {
      (T(`[agent-proxy] could not read ${t}: ${be(u)}`), n.push("bazelrc_write_failed"));
      return;
    }
    o = "";
  }
  let s = o.indexOf(sfc),
    i = o.indexOf(J9o),
    l = (
      s >= 0 && i > s ? o.slice(0, s) + o.slice(i + J9o.length).replace(/^\n/, "") : o
    ).trimEnd(),
    c = l
      ? `${l}

${r}`
      : r;
  if (c === o) return;
  try {
    (await fw.writeFile(t, c, "utf8"), T(`[agent-proxy] wrote Bazel trust block to ${t}`));
  } catch (u) {
    (T(`[agent-proxy] could not write ${t}: ${be(u)}`), n.push("bazelrc_write_failed"));
  }
}
async function Glm(e, t, n, r) {
  for (let o of t) {
    if (
      !(await fw
        .mkdir(o, {
          recursive: true,
        })
        .then(
          () => true,
          (c) => (T(`[agent-proxy] could not create NSS dir ${o}: ${be(c)}`), false),
        ))
    ) {
      r.push("nss_add_failed");
      continue;
    }
    let i = `sql:${o}`;
    await pTt(n, ["-D", "-d", i, "-n", "ccr-agent-proxy"]);
    let a = ["-A", "-d", i, "-t", "C,,", "-n", "ccr-agent-proxy", "-i", e],
      l = await pTt(n, a);
    if (!l.ok) (await pTt(n, ["-N", "--empty-password", "-d", i]), (l = await pTt(n, a)));
    if (l.ok) T(`[agent-proxy] MITM CA added to NSS DB at ${o}`);
    else (T(`[agent-proxy] certutil -A failed for ${o}: ${l.detail}`), r.push("nss_add_failed"));
  }
}
async function Wlm(e, t, n) {
  let r = `[Boto]
ca_certificates_file = ${e}
`;
  try {
    (await fw.writeFile(t, r, {
      flag: "wx",
      mode: 420,
    }),
      T(`[agent-proxy] wrote ${t} for gsutil trust`));
  } catch (o) {
    if (on(o) === "EEXIST") return;
    (T(`[agent-proxy] could not write ${t}: ${be(o)}`), n.push("boto_write_failed"));
  }
}
async function qlm(e, t, n) {
  if (!e.hasSystemCa) {
    await fw.unlink(t).catch(() => {});
    return;
  }
  let r = [
    "# Managed by Claude Code (CCR agent-proxy). Re-exports CA-trust env",
    "# vars for login shells that start from a scrubbed environment. Each",
    "# export is set-if-absent so an explicit value in the shell wins.",
    "# HTTPS_PROXY is intentionally NOT set here: the relay port is",
    "# ephemeral and persisting it would break all HTTPS in login shells",
    "# once the relay process exits. Scrubbed login shells dial direct.",
    `if [ -r ${dfc(e.caBundlePath)} ]; then`,
  ];
  for (let s of [...Y6t, ...X6t]) r.push("  " + afc(s, e.caBundlePath));
  for (let [s, i] of Object.entries(B6e)) r.push("  " + afc(s, i));
  r.push("fi");
  let o =
    r.join(`
`) +
    `
`;
  try {
    return (
      await fw.mkdir(Fz.dirname(t), {
        recursive: true,
      }),
      await fw.writeFile(t, o, {
        mode: 420,
      }),
      T(`[agent-proxy] wrote ${t} for login-shell trust`),
      t
    );
  } catch (s) {
    (T(`[agent-proxy] could not write ${t}: ${be(s)}`), n.push("profile_d_write_failed"));
    return;
  }
}
function afc(e, t) {
  return `if [ -z "\${${e}:-}" ]; then ${e}=${dfc(t)}; fi; export ${e}`;
}
function dfc(e) {
  return `'${e.replace(/'/g, "'\\''")}'`;
}
async function pTt(e, t) {
  let n = await $n(e, t, {
    timeout: 20000,
    preserveOutputOnError: true,
    useCwd: false,
  });
  if (n.code === 0)
    return {
      ok: true,
      stdout: n.stdout,
      detail: "",
    };
  return {
    ok: false,
    stdout: n.stdout,
    detail: `${n.error ?? `exit ${n.code}`} ${n.stderr.slice(0, 200)}`.trim(),
  };
}
var fw,
  Q9o,
  Fz,
  VZt = "changeit",
  Blm,
  sfc = "# >>> ccr-agent-proxy (managed by Claude Code) >>>",
  J9o = "# <<< ccr-agent-proxy <<<";
