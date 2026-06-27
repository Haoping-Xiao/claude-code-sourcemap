// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E$o
// matched 2.1.88 source: src/utils/plugins/marketplaceManager.ts
// class=modified  jaccard=0.5438  score=0.7447  fileCov=0.6684
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function oer() {
  return $d.join(kI(), "known_marketplaces.json");
}
function mOe() {
  return $d.join(kI(), "marketplaces");
}
function gOe() {
  (G$.cache?.clear?.(), rer.clear());
}
function f3() {
  let e = {},
    t = {
      ...tWe(),
      ...(Dr().enabledPlugins ?? {}),
    };
  for (let [o, s] of Object.entries(t))
    if (s && Qo(o).marketplace === xI) {
      e[xI] = {
        source: Alt,
        sourceIsFallback: !0,
      };
      break;
    }
  let n = ter(),
    r = n ? (Dr().extraKnownMarketplaces ?? {}) : QIf();
  return {
    ...e,
    ...(n ? yeo() : {}),
    ...r,
  };
}
function QIf() {
  let e = {};
  for (let t of $w()) {
    if (JIf.has(t)) continue;
    let n = yn(t)?.extraKnownMarketplaces;
    if (n) e = ZV(e, n, SY);
  }
  return e;
}
function ZIf(e) {
  if (yn("policySettings")?.extraKnownMarketplaces?.[e]?.autoUpdate !== void 0)
    return "managed settings (managed-settings.json)";
  if (yn("flagSettings")?.extraKnownMarketplaces?.[e]?.autoUpdate !== void 0)
    return "the --settings flag";
  if (yeo()[e]?.autoUpdate !== void 0 && Dr().extraKnownMarketplaces?.[e] === void 0)
    return "an --add-dir directory's settings";
  return null;
}
function exf(e) {
  let t = ["localSettings", "projectSettings", "userSettings"];
  for (let n of t) if (yn(n)?.extraKnownMarketplaces?.[e]) return n;
  return null;
}
function RYt(e, t, n = "userSettings") {
  let o = {
    ...(yn(n) ?? {}).extraKnownMarketplaces,
  };
  ((o[e] = t),
    io(n, {
      extraKnownMarketplaces: o,
    }));
}
async function om() {
  let e = qt(),
    t = oer();
  try {
    let n = await e.readFile(t, {
        encoding: "utf-8",
      }),
      r = Ft(n),
      o = Pet().safeParse(r);
    if (!o.success) {
      let s = `Marketplace configuration file is corrupted: ${o.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ")}`;
      throw (
        T(s, {
          level: "error",
        }),
        new _B(s, t, r)
      );
    }
    return o.data;
  } catch (n) {
    if (wn(n)) return {};
    if (n instanceof _B) throw n;
    let r = `Failed to load marketplace configuration: ${be(n)}`;
    throw (
      T(r, {
        level: "error",
      }),
      Error(r)
    );
  }
}
async function wP() {
  try {
    return await om();
  } catch {
    return {};
  }
}
async function sse(e) {
  let t = Pet().safeParse(e),
    n = oer();
  if (!t.success) throw new _B(`Invalid marketplace config: ${t.error.message}`, n, e);
  let r = qt(),
    o = $d.join(n, "..");
  (await r.mkdir(o), oj(n, De(t.data, null, 2)));
}
async function ser() {
  let e = kue();
  if (e.length === 0) return !1;
  let t = await om(),
    n = new Set(),
    r = 0;
  for (let o of e) {
    let s = await txf(o);
    if (!s) continue;
    for (let [i, a] of Object.entries(s)) {
      if (n.has(i)) continue;
      let l = await nxf(o, i);
      if (!l) {
        T(`Seed marketplace '${i}' not found under ${o}/marketplaces/, skipping`, {
          level: "warn",
        });
        continue;
      }
      n.add(i);
      let c = {
        source: a.source,
        installLocation: l,
        lastUpdated: a.lastUpdated,
        autoUpdate: !1,
      };
      if (L_(t[i], c)) continue;
      ((t[i] = c), r++);
    }
  }
  if (r > 0) return (await sse(t), T(`Synced ${r} marketplace(s) from seed dir(s)`), !0);
  return !1;
}
async function txf(e) {
  let t = $d.join(e, "known_marketplaces.json");
  try {
    let n = await qt().readFile(t, {
        encoding: "utf-8",
      }),
      r = Pet().safeParse(Ft(n));
    if (!r.success)
      return (
        T(`Seed known_marketplaces.json invalid at ${e}: ${r.error.message}`, {
          level: "warn",
        }),
        null
      );
    return r.data;
  } catch (n) {
    if (!wn(n))
      T(`Failed to read seed known_marketplaces.json at ${e}: ${n}`, {
        level: "warn",
      });
    return null;
  }
}
async function nxf(e, t) {
  let n = $d.join(e, "marketplaces", t),
    r = $d.join(e, "marketplaces", `${t}.json`);
  for (let o of [n, r])
    try {
      return (await kYt(o), o);
    } catch {}
  return null;
}
function hOe(e) {
  return kue().find((t) => e === t || e.startsWith(t + $d.sep));
}
function hHe() {
  let e = process.env.CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS;
  if (e) {
    let t = parseInt(e, 10);
    if (!isNaN(t) && t > 0) return t;
  }
  return rxf;
}
async function hRl(e, t) {
  await Gr(go(), ["--git-dir=.git", "remote", "set-url", "origin", t], {
    cwd: e,
    stdin: "ignore",
  });
}
async function oxf(e, t, n) {
  T(`git pull: cwd=${e} ref=${t ?? "default"}`);
  let r = {
      ...R8(),
      ...(n?.skipLfs && {
        GIT_LFS_SKIP_SMUDGE: "1",
      }),
    },
    o = n?.disableCredentialHelper ? ["-c", "credential.helper="] : [];
  if (t) {
    if (t.startsWith("-"))
      return {
        code: 1,
        stderr: `Invalid ref "${t}": refs cannot start with "-"`,
      };
    let i = await Gr(go(), [...o, "fetch", "origin", t], {
      cwd: e,
      timeout: hHe(),
      stdin: "ignore",
      env: r,
    });
    if (i.code !== 0) return ner(i);
    let a = await Gr(go(), [...o, "checkout", t], {
      cwd: e,
      timeout: hHe(),
      stdin: "ignore",
      env: r,
    });
    if (a.code !== 0) return ner(a);
    let l = await Gr(go(), [...o, "pull", "origin", t], {
      cwd: e,
      timeout: hHe(),
      stdin: "ignore",
      env: r,
    });
    if (l.code !== 0) return ner(l);
    return (await fRl(e, o, r, n?.sparsePaths), l);
  }
  let s = await Gr(go(), [...o, "pull", "origin", "HEAD"], {
    cwd: e,
    timeout: hHe(),
    stdin: "ignore",
    env: r,
  });
  if (s.code !== 0) return ner(s);
  return (await fRl(e, o, r, n?.sparsePaths), s);
}
async function fRl(e, t, n, r) {
  if (r && r.length > 0) return;
  if (
    !(await qt()
      .stat($d.join(e, ".gitmodules"))
      .then(
        () => !0,
        () => !1,
      ))
  )
    return;
  let s = await Gr(
    go(),
    [
      "-c",
      "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes",
      ...t,
      "submodule",
      "update",
      "--init",
      "--recursive",
      "--depth",
      "1",
    ],
    {
      cwd: e,
      timeout: hHe(),
      stdin: "ignore",
      env: n,
    },
  );
  if (s.code !== 0)
    T(`git submodule update failed (non-fatal): ${s.stderr}`, {
      level: "warn",
    });
}
function ner(e) {
  if (e.code === 0) return e;
  if (e.error?.includes("timed out")) {
    let t = Math.round(hHe() / 1000);
    return {
      ...e,
      stderr: `Git pull timed out after ${t}s. Try increasing the timeout via CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS environment variable.

Original error: ${e.stderr}`,
    };
  }
  if (e.stderr.includes("REMOTE HOST IDENTIFICATION HAS CHANGED"))
    return {
      ...e,
      stderr: `SSH host key for this marketplace's git host has changed (server key rotation or possible MITM). Remove the stale entry with: ssh-keygen -R <host>
Then connect once manually to accept the new key.

Original error: ${e.stderr}`,
    };
  if (e.stderr.includes("Host key verification failed"))
    return {
      ...e,
      stderr: `SSH host key verification failed while updating marketplace. The host key is not in your known_hosts file. Connect once manually to add it (e.g., ssh -T git@<host>), or remove and re-add the marketplace with an HTTPS URL.

Original error: ${e.stderr}`,
    };
  if (
    e.stderr.includes("Permission denied (publickey)") ||
    e.stderr.includes("Could not read from remote repository")
  )
    return {
      ...e,
      stderr: `SSH authentication failed while updating marketplace. Please ensure your SSH keys are configured.

Original error: ${e.stderr}`,
    };
  if (e.stderr.includes("timed out") || e.stderr.includes("Could not resolve host"))
    return {
      ...e,
      stderr: `Network error while updating marketplace. Please check your internet connection.

Original error: ${e.stderr}`,
    };
  return e;
}
async function yRl() {
  try {
    let e = await $n(
        "ssh",
        [
          "-T",
          "-o",
          "BatchMode=yes",
          "-o",
          "ConnectTimeout=2",
          "-o",
          "StrictHostKeyChecking=yes",
          "git@github.com",
        ],
        {
          timeout: 3000,
        },
      ),
      t =
        e.code === 1 &&
        (e.stderr?.includes("successfully authenticated") ||
          e.stdout?.includes("successfully authenticated"));
    return (T(`SSH config check: code=${e.code} configured=${t}`), t);
  } catch (e) {
    return (
      T(`SSH configuration check failed: ${be(e)}`, {
        level: "warn",
      }),
      !1
    );
  }
}
function sxf(e) {
  return (
    e.includes("Authentication failed") ||
    e.includes("could not read Username") ||
    e.includes("terminal prompts disabled") ||
    e.includes("403") ||
    e.includes("401")
  );
}
function mRl(e) {
  if (e.includes("://")) return null;
  return e.match(/^[^@]+@([^:]+):/)?.[1] ?? null;
}
async function ixf(e, t, n, r, o) {
  let s = r && r.length > 0,
    i = {
      ...R8(),
      ...(o && {
        GIT_LFS_SKIP_SMUDGE: "1",
      }),
    },
    a = [
      "-c",
      "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes",
      "clone",
      "--depth",
      "1",
    ];
  if (s) a.push("--filter=blob:none", "--no-checkout");
  else a.push("--recurse-submodules", "--shallow-submodules");
  if (n) a.push("--branch", n);
  a.push("--", e, t);
  let l = hHe();
  T(`git clone: url=${Kze(e)} ref=${n ?? "default"} timeout=${l}ms`);
  let c = await Gr(go(), a, {
      timeout: l,
      stdin: "ignore",
      env: i,
    }),
    u = Kze(e);
  if (e !== u) {
    if (c.error) c.error = c.error.replaceAll(e, u);
    if (c.stderr) c.stderr = c.stderr.replaceAll(e, u);
  }
  if (c.code === 0) {
    if (s) {
      let d = await Gr(go(), ["sparse-checkout", "set", "--cone", "--", ...r], {
        cwd: t,
        timeout: l,
        stdin: "ignore",
        env: i,
      });
      if (d.code !== 0)
        return {
          code: d.code,
          stderr: `git sparse-checkout set failed: ${d.stderr}`,
        };
      let p = await Gr(go(), ["checkout", "HEAD"], {
        cwd: t,
        timeout: l,
        stdin: "ignore",
        env: i,
      });
      if (p.code !== 0)
        return {
          code: p.code,
          stderr: `git checkout after sparse-checkout failed: ${p.stderr}`,
        };
    }
    return (T(`git clone succeeded: ${Kze(e)}`), c);
  }
  if (
    (T(
      `git clone failed: url=${Kze(e)} code=${c.code} error=${c.error ?? "none"} stderr=${c.stderr}`,
      {
        level: "warn",
      },
    ),
    c.error?.includes("timed out"))
  )
    return {
      ...c,
      stderr: `Git clone timed out after ${Math.round(l / 1000)}s. The repository may be too large for the current timeout. Set CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS to increase it (e.g., 300000 for 5 minutes).

Original error: ${c.stderr}`,
    };
  if (c.stderr) {
    if (c.stderr.includes("REMOTE HOST IDENTIFICATION HAS CHANGED")) {
      let d = mRl(e),
        p = d ? `ssh-keygen -R ${d}` : "ssh-keygen -R <host>";
      return {
        ...c,
        stderr: `SSH host key has changed (server key rotation or possible MITM). Remove the stale known_hosts entry:
  ${p}
Then connect once manually to verify and accept the new key.

Original error: ${c.stderr}`,
      };
    }
    if (c.stderr.includes("Host key verification failed")) {
      let d = mRl(e),
        p = d ? `ssh -T git@${d}` : "ssh -T git@<host>";
      return {
        ...c,
        stderr: `SSH host key is not in your known_hosts file. To add it, connect once manually (this will show the fingerprint for you to verify):
  ${p}

Or use an HTTPS URL instead (recommended for public repos).

Original error: ${c.stderr}`,
      };
    }
    if (
      c.stderr.includes("Permission denied (publickey)") ||
      c.stderr.includes("Could not read from remote repository")
    )
      return {
        ...c,
        stderr: `SSH authentication failed. Please ensure your SSH keys are configured for GitHub, or use an HTTPS URL instead.

Original error: ${c.stderr}`,
      };
    if (sxf(c.stderr))
      return {
        ...c,
        stderr: `HTTPS authentication failed. Please ensure your credential helper is configured (e.g., gh auth login).

Original error: ${c.stderr}`,
      };
    if (
      c.stderr.includes("timed out") ||
      c.stderr.includes("timeout") ||
      c.stderr.includes("Could not resolve host")
    )
      return {
        ...c,
        stderr: `Network error or timeout while cloning repository. Please check your internet connection and try again.

Original error: ${c.stderr}`,
      };
  }
  if (!c.stderr)
    return {
      code: c.code,
      stderr:
        c.error ||
        `git clone exited with code ${c.code} (no stderr output). Run with --debug to see the full command.`,
    };
  return c;
}
function Cq(e, t) {
  if (!e) return;
  try {
    e(t);
  } catch (n) {
    T(`Progress callback error: ${be(n)}`, {
      level: "warn",
    });
  }
}
async function axf(e, t, n) {
  let r = {
    ...R8(),
    ...(n && {
      GIT_LFS_SKIP_SMUDGE: "1",
    }),
  };
  if (t && t.length > 0)
    return Gr(go(), ["sparse-checkout", "set", "--cone", "--", ...t], {
      cwd: e,
      timeout: hHe(),
      stdin: "ignore",
      env: r,
    });
  let o = await Gr(go(), ["config", "--get", "core.sparseCheckout"], {
    cwd: e,
    stdin: "ignore",
    env: r,
  });
  if (o.code === 0 && o.stdout.trim() === "true")
    return {
      code: 1,
      stderr:
        "sparsePaths removed from config but repository is sparse; re-cloning for full checkout",
    };
  return {
    code: 0,
    stderr: "",
  };
}
async function Tfe(e, t, n, r, o, s) {
  let i = qt(),
    a = Math.round(hHe() / 1000);
  Cq(o, `Refreshing marketplace cache (timeout: ${a}s)\u2026`);
  let l = await axf(t, r, s?.skipLfs);
  if (l.code === 0) {
    let m = performance.now(),
      g = await oxf(t, n, {
        disableCredentialHelper: s?.disableCredentialHelper,
        sparsePaths: r,
        skipLfs: s?.skipLfs,
      });
    if (
      (YD(
        "marketplace_pull",
        e,
        g.code === 0 ? "success" : "failure",
        performance.now() - m,
        g.code === 0 ? void 0 : k8(g.stderr),
      ),
      g.code === 0)
    )
      return;
    if (ut(process.env.CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE)) {
      let h = $d.join(t, ".claude-plugin", "marketplace.json");
      if (
        await i.stat(h).then(
          () => !0,
          () => !1,
        )
      ) {
        T(
          `git pull failed, keeping existing clone (CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE): ${g.stderr}`,
          {
            level: "warn",
          },
        );
        return;
      }
    }
    T(`git pull failed, will re-clone: ${g.stderr}`, {
      level: "warn",
    });
  } else T(`sparse-checkout reconcile requires re-clone: ${l.stderr}`);
  let c = `${t}.bak`,
    u = !1;
  try {
    await i.rename(c, t);
  } catch (m) {
    if (!wn(m)) {
      let g = $d.join(t, ".claude-plugin", "marketplace.json");
      if (
        !(await i.stat(g).then(
          () => !0,
          () => !1,
        ))
      )
        (await i
          .rm(t, {
            recursive: !0,
            force: !0,
          })
          .catch(() => {}),
          await i.rename(c, t));
    }
  }
  try {
    await i.rm(c, {
      recursive: !0,
      force: !0,
    });
  } catch (m) {
    throw Error(`Failed to clean up stale marketplace backup directory. Please manually delete the directory at ${c} and try again.

Technical details: ${be(m)}`);
  }
  try {
    (await i.rename(t, c),
      (u = !0),
      T(`Found stale marketplace directory at ${t}, moving aside to allow re-clone`, {
        level: "warn",
      }),
      Cq(o, "Found stale directory, cleaning up and re-cloning\u2026"));
  } catch (m) {
    if (!wn(m))
      throw Error(`Failed to clean up existing marketplace directory. Please manually delete the directory at ${t} and try again.

Technical details: ${be(m)}`);
  }
  let d = n ? ` (ref: ${n})` : "";
  Cq(o, `Cloning repository (timeout: ${a}s): ${Kze(e)}${d}`);
  let p = performance.now(),
    f = await ixf(e, t, n, r, s?.skipLfs);
  if (
    (YD(
      "marketplace_clone",
      e,
      f.code === 0 ? "success" : "failure",
      performance.now() - p,
      f.code === 0 ? void 0 : k8(f.stderr),
    ),
    f.code !== 0)
  ) {
    try {
      await i.rm(t, {
        recursive: !0,
        force: !0,
      });
    } catch {}
    if (u)
      try {
        await i.rename(c, t);
      } catch {}
    throw new mi(
      `Failed to clone marketplace repository: ${f.stderr}`,
      `Failed to clone marketplace repository: ${k8(f.stderr)} (exit ${f.code})`,
    );
  }
  if (u)
    try {
      await i.rm(c, {
        recursive: !0,
        force: !0,
      });
    } catch {}
  Cq(o, "Clone complete, validating marketplace\u2026");
}
function lxf(e) {
  return xw(e, () => "***REDACTED***");
}
function Kze(e) {
  try {
    let t = new URL(e);
    if ((t.protocol === "http:" || t.protocol === "https:") && (t.username || t.password)) {
      if (t.username) t.username = "***";
      if (t.password) t.password = "***";
      return t.toString();
    }
  } catch {}
  return e;
}
async function _Rl(e, t, n, r) {
  let o = qt(),
    s = Kze(e);
  if (
    (Cq(r, `Downloading marketplace from ${s}`),
    T(`Downloading marketplace from URL: ${s}`),
    n && Object.keys(n).length > 0)
  )
    T(`Using custom headers: ${De(lxf(n))}`);
  let i = {
      ...n,
      "User-Agent": "Claude-Code-Plugin-Manager",
    },
    a,
    l = performance.now();
  try {
    a = await lb.get(e, {
      timeout: 1e4,
      headers: i,
    });
  } catch (d) {
    if ((YD("marketplace_url", e, "failure", performance.now() - l, k8(d)), ab(d))) {
      if (d.code === "ECONNREFUSED" || d.code === "ENOTFOUND")
        throw Error(`Could not connect to ${s}. Please check your internet connection and verify the URL is correct.

Technical details: ${d.message}`);
      if (d.code === "ETIMEDOUT")
        throw Error(`Request timed out while downloading marketplace from ${s}. The server may be slow or unreachable.

Technical details: ${d.message}`);
      if (d.response)
        throw Error(`HTTP ${d.response.status} error while downloading marketplace from ${s}. The marketplace file may not exist at this URL.

Technical details: ${d.message}`);
    }
    throw Error(`Failed to download marketplace from ${s}: ${be(d)}`);
  }
  Cq(r, "Validating marketplace data");
  let c = bY()
    .extend({
      plugins: H.array(H.unknown()),
    })
    .safeParse(a.data);
  if (!c.success)
    throw (
      YD("marketplace_url", e, "failure", performance.now() - l, "invalid_schema"),
      new _B(
        `Invalid marketplace schema from URL: ${c.error.issues.map((d) => `${d.path.join(".")}: ${d.message}`).join(", ")}`,
        s,
        a.data,
      )
    );
  (YD("marketplace_url", e, "success", performance.now() - l),
    Cq(r, "Saving marketplace to cache"));
  let u = $d.join(t, "..");
  (await o.mkdir(u), oj(t, De(a.data, null, 2)));
}
function cxf(e) {
  let n = (
    e.source === "github"
      ? e.repo.replaceAll("/", "-")
      : e.source === "npm"
        ? e.package.replace("@", "").replaceAll("/", "-")
        : e.source === "file"
          ? $d.basename(e.path).replace(".json", "")
          : e.source === "directory"
            ? $d.basename(e.path)
            : "temp_" + Date.now()
  ).replace(/[^a-zA-Z0-9\-_]/g, "-");
  return n === "" ? "temp_" + Date.now() : n;
}
async function A$o(e, t) {
  let r = await qt().readFile(e, {
      encoding: "utf-8",
    }),
    o;
  try {
    o = Ft(r);
  } catch (i) {
    throw new _B(`Invalid JSON in ${e}: ${be(i)}`, e, r);
  }
  let s = t.safeParse(o);
  if (!s.success)
    throw new _B(
      `Invalid schema: ${e} ${s.error?.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ")}`,
      e,
      o,
    );
  return s.data;
}
async function H$o(e, t) {
  if (!_H(e)) throw Error(`Marketplace source '${mHe(e)}' is blocked by enterprise policy.`);
  let n = qt(),
    r = mOe();
  await n.mkdir(r);
  let o,
    s,
    i = !1,
    a = cxf(e);
  try {
    switch (e.source) {
      case "url": {
        ((o = $d.join(r, `${a}.json`)), (i = !0), await _Rl(e.url, o, e.headers, t), (s = o));
        break;
      }
      case "github": {
        let f = `git@${JH}:${e.repo}.git`,
          m = `https://github.com/${e.repo}.git`;
        if (((o = $d.join(r, a)), (i = !0), eRe())) {
          (Cq(t, `Cloning via HTTPS: ${m}`),
            await hRl(o, m),
            await Tfe(m, o, e.ref, e.sparsePaths, t, {
              skipLfs: e.skipLfs,
            }),
            (s = $d.join(o, e.path || ".claude-plugin/marketplace.json")));
          break;
        }
        let g = null;
        if (await yRl()) {
          Cq(t, `Cloning via SSH: ${f}`);
          try {
            await Tfe(f, o, e.ref, e.sparsePaths, t, {
              skipLfs: e.skipLfs,
            });
          } catch (y) {
            ((g = Zr(y)),
              T(`SSH clone failed for ${e.repo}: ${g.message}`, {
                level: "error",
              }),
              Cq(t, `SSH clone failed, retrying with HTTPS: ${m}`),
              T(
                `SSH clone failed for ${e.repo} despite SSH being configured, falling back to HTTPS`,
                {
                  level: "info",
                },
              ),
              await n.rm(o, {
                recursive: !0,
                force: !0,
              }));
            try {
              (await Tfe(m, o, e.ref, e.sparsePaths, t, {
                skipLfs: e.skipLfs,
              }),
                (g = null));
            } catch (b) {
              ((g = Zr(b)),
                T(
                  `Failed to clone marketplace repo ${e.repo} via HTTPS after SSH fallback: ${g.message}`,
                  {
                    level: "error",
                  },
                ));
            }
          }
        } else {
          (Cq(t, `SSH not configured, cloning via HTTPS: ${m}`),
            T(`SSH not configured for GitHub, using HTTPS for ${e.repo}`, {
              level: "info",
            }));
          try {
            await Tfe(m, o, e.ref, e.sparsePaths, t, {
              skipLfs: e.skipLfs,
            });
          } catch (y) {
            ((g = Zr(y)),
              T(`HTTPS git clone failed for marketplace ${e.repo}: ${g.message}`, {
                level: "error",
              }),
              Cq(t, `HTTPS clone failed, retrying with SSH: ${f}`),
              T(`HTTPS clone failed for ${e.repo} (${g.message}), falling back to SSH`, {
                level: "info",
              }),
              await n.rm(o, {
                recursive: !0,
                force: !0,
              }));
            try {
              (await Tfe(f, o, e.ref, e.sparsePaths, t, {
                skipLfs: e.skipLfs,
              }),
                (g = null));
            } catch (b) {
              ((g = Zr(b)),
                T(`SSH clone fallback also failed for ${e.repo}: ${g.message}`, {
                  level: "error",
                }));
            }
          }
        }
        if (g) throw g;
        s = $d.join(o, e.path || ".claude-plugin/marketplace.json");
        break;
      }
      case "git": {
        ((o = $d.join(r, a)),
          (i = !0),
          await Tfe(e.url, o, e.ref, e.sparsePaths, t, {
            skipLfs: e.skipLfs,
          }),
          (s = $d.join(o, e.path || ".claude-plugin/marketplace.json")));
        break;
      }
      case "npm":
        throw Error("NPM marketplace sources not yet implemented");
      case "file": {
        let f = $d.resolve(e.path);
        ((s = f), (o = $d.dirname($d.dirname(f))), (i = !1));
        break;
      }
      case "directory": {
        let f = $d.resolve(e.path);
        ((s = $d.join(f, ".claude-plugin", "marketplace.json")), (o = f), (i = !1));
        break;
      }
      case "settings": {
        ((o = $d.join(r, e.name)),
          (s = $d.join(o, ".claude-plugin", "marketplace.json")),
          (i = !1),
          await n.mkdir($d.dirname(s)),
          await gRl.writeFile(
            s,
            De(
              {
                name: e.name,
                owner: e.owner ?? {
                  name: "settings",
                },
                plugins: e.plugins,
              },
              null,
              2,
            ),
          ));
        break;
      }
      default:
        throw Error("Unsupported marketplace source type");
    }
    T(`Reading marketplace from ${s}`);
    let l;
    try {
      l = await A$o(s, bY());
    } catch (f) {
      if (wn(f)) throw Error(`Marketplace file not found at ${s}`);
      throw Error(`Failed to parse marketplace file at ${s}: ${be(f)}`);
    }
    let c = ZRr(l.name, e);
    if (c) throw Error(c);
    let u = $d.join(r, l.name),
      d = $d.resolve(u),
      p = $d.resolve(r);
    if (!d.startsWith(p + $d.sep))
      throw Error(`Marketplace name '${l.name}' resolves to a path outside the cache directory`);
    if (o !== u && !s9(e)) {
      let f = !1;
      try {
        let [m, g] = await Promise.all([n.stat(o), n.stat(u)]);
        f = m.dev === g.dev && m.ino === g.ino && m.ino !== 0;
      } catch {}
      if (f) ((o = u), (i = !1));
      else
        try {
          try {
            t?.("Cleaning up old marketplace cache\u2026");
          } catch (m) {
            T(`Progress callback error: ${be(m)}`, {
              level: "warn",
            });
          }
          (await n.rm(u, {
            recursive: !0,
            force: !0,
          }),
            await n.rename(o, u),
            (o = u),
            (i = !1));
        } catch (m) {
          let g = be(m);
          throw Error(`Failed to finalize marketplace cache. Please manually delete the directory at ${u} if it exists and try again.

Technical details: ${g}`);
        }
    }
    return {
      marketplace: l,
      cachePath: o,
    };
  } catch (l) {
    if (i && o && !s9(e))
      try {
        await n.rm(o, {
          recursive: !0,
          force: !0,
        });
      } catch (c) {
        T(`Warning: Failed to clean up temporary marketplace cache at ${o}: ${be(c)}`, {
          level: "warn",
        });
      }
    throw l;
  }
}
async function yOe(e, t) {
  let n = e;
  if (s9(e) && !$d.isAbsolute(e.path))
    n = {
      ...e,
      path: $d.resolve(e.path),
    };
  if (!_H(n)) {
    if (Ppt(n)) throw Error(`Marketplace source '${mHe(n)}' is blocked by enterprise policy.`);
    let c = _5() || [],
      u = Emo(),
      d = O2n(n),
      p = `Marketplace source '${mHe(n)}'`;
    if (d) p += ` (${d})`;
    if (((p += " is blocked by enterprise policy."), c.length > 0))
      p += ` Allowed sources: ${c.map((f) => mHe(f)).join(", ")}`;
    else p += " No external marketplaces are allowed.";
    if (n.source === "github" && u.length > 0)
      p += `

Tip: The shorthand "${n.repo}" assumes github.com. For internal GitHub Enterprise, use the full URL:
  git@your-github-host.com:${n.repo}.git`;
    throw Error(p);
  }
  let r = await om();
  for (let [c, u] of Object.entries(r))
    if (L_(u.source, n))
      return (
        T(`Source already materialized as '${c}', skipping clone`),
        {
          name: c,
          alreadyMaterialized: !0,
          resolvedSource: n,
        }
      );
  let { marketplace: o, cachePath: s } = await H$o(n, t),
    i = ZRr(o.name, n);
  if (i) throw Error(i);
  let a = await om(),
    l = a[o.name];
  if (l) {
    let c = hOe(l.installLocation);
    if (c)
      throw Error(
        `Marketplace '${o.name}' is seed-managed (${c}). To use a different source, ask your admin to update the seed, or use a different marketplace name.`,
      );
    if (
      (T(`Marketplace '${o.name}' exists with different source \u2014 overwriting`), !s9(l.source))
    ) {
      let u = $d.resolve(mOe()),
        d = $d.resolve(l.installLocation),
        p = $d.resolve(s);
      if (d === p);
      else if (d === u || d.startsWith(u + $d.sep))
        await qt().rm(l.installLocation, {
          recursive: !0,
          force: !0,
        });
      else
        T(
          `Skipping cleanup of old installLocation (${l.installLocation}) \u2014 ` +
            `outside ${u}. The path is corrupted; leaving it alone and overwriting the config entry.`,
          {
            level: "warn",
          },
        );
    }
  }
  return (
    (a[o.name] = {
      source: n,
      installLocation: s,
      lastUpdated: new Date().toISOString(),
    }),
    await sse(a),
    T(`Added marketplace source: ${o.name}`),
    {
      name: o.name,
      alreadyMaterialized: !1,
      resolvedSource: n,
    }
  );
}
async function OSt(e, t) {
  let n = await om();
  if (!n[e]) throw Error(`Marketplace '${e}' not found`);
  let r = n[e],
    o = hOe(r.installLocation),
    s = teo(e)
      ? ` To stop using its plugins: claude plugin disable <plugin>@${e}`
      : " To stop using its plugins, disable each one in /plugin.";
  if (o && t === void 0)
    throw Error(
      `Marketplace '${e}' is registered from the read-only seed directory (${o}) and will be re-registered on next startup.${s}`,
    );
  let i = !1;
  if (t !== void 0) {
    if (!yn(t)?.extraKnownMarketplaces?.[e]) {
      let u = o
        ? `It is registered from the read-only seed directory.${s}`
        : "Omit --scope to remove it from all scopes.";
      throw Error(`Marketplace '${e}' is not declared in ${FPn(t)} settings. ${u}`);
    }
    i =
      Boolean(o) ||
      OO.some((u) => u !== t && yn(u)?.extraKnownMarketplaces?.[e]) ||
      Boolean(yn("policySettings")?.extraKnownMarketplaces?.[e]);
  }
  if (!i) {
    (delete n[e], await sse(n));
    let u = qt(),
      d = mOe(),
      p = $d.join(d, e);
    (await u.rm(p, {
      recursive: !0,
      force: !0,
    }),
      await u.rm(`${p}.bak`, {
        recursive: !0,
        force: !0,
      }));
    let f = $d.join(d, `${e}.json`);
    await u.rm(f, {
      force: !0,
    });
  }
  let a = !i;
  for (let u of OO) {
    let d = t === void 0 || u === t;
    if (!d && !a) continue;
    let p = yn(u);
    if (!p) continue;
    let f = !1,
      m = {};
    if (d && p.extraKnownMarketplaces?.[e]) {
      let g = {
        ...p.extraKnownMarketplaces,
      };
      ((g[e] = void 0), (m.extraKnownMarketplaces = g), (f = !0));
    }
    if (a && p.enabledPlugins) {
      let g = `@${e}`,
        h = {
          ...p.enabledPlugins,
        },
        y = !1;
      for (let b in h) if (b.endsWith(g)) ((h[b] = void 0), (y = !0));
      if (y) ((m.enabledPlugins = h), (f = !0));
    }
    if (f) {
      let g = io(u, m);
      if (g.error)
        T(`Failed to clean up marketplace '${e}' from ${u} settings: ${g.error.message}`, {
          level: "error",
        });
      else T(`Cleaned up marketplace '${e}' from ${u} settings`);
    }
  }
  if (i) {
    T(
      `Removed marketplace '${e}' declaration from ${t}; still declared in another scope, keeping state layer and installed plugins`,
    );
    return;
  }
  let { orphanedPaths: l, removedPluginIds: c } = ARl(e);
  for (let u of l) await pOe(u);
  for (let u of c) (await Cdt(u), await Sct(u));
  (Slt(c), T(`Removed marketplace source: ${e}`));
}
async function kYt(e) {
  let t = $d.join(e, ".claude-plugin", "marketplace.json");
  try {
    return await A$o(t, bY());
  } catch (n) {
    if (n instanceof _B) throw n;
    let r = on(n);
    if (r !== "ENOENT" && r !== "ENOTDIR") throw n;
  }
  return await A$o(e, bY());
}
async function Iq(e) {
  let t = qt(),
    n = oer();
  try {
    let r = await t.readFile(n, {
        encoding: "utf-8",
      }),
      s = Ft(r)[e];
    if (!s) return null;
    return await kYt(s.installLocation);
  } catch (r) {
    if (wn(r)) return null;
    return (
      T(`Failed to read cached marketplace ${e}: ${be(r)}`, {
        level: "warn",
      }),
      null
    );
  }
}
async function T$o(e) {
  let { name: t, marketplace: n } = Qo(e);
  if (!t || !n) return null;
  let r = qt(),
    o = oer();
  try {
    let s = await r.readFile(o, {
        encoding: "utf-8",
      }),
      a = Ft(s)[n];
    if (!a) return null;
    let l = await Iq(n);
    if (!l) return null;
    let c = l.plugins.find((u) => u.name === t);
    if (!c) return null;
    return {
      entry: c,
      marketplaceInstallLocation: a.installLocation,
    };
  } catch {
    return null;
  }
}
async function EL(e) {
  let t = await T$o(e);
  if (t) return t;
  let { name: n, marketplace: r } = Qo(e);
  if (!n || !r) return null;
  try {
    let s = (await om())[r];
    if (!s) return null;
    let a = (await G$(r)).plugins.find((l) => l.name === n);
    if (!a) return null;
    return {
      entry: a,
      marketplaceInstallLocation: s.installLocation,
    };
  } catch (o) {
    return (
      T(`Could not find plugin ${e}: ${be(o)}`, {
        level: "debug",
      }),
      null
    );
  }
}
async function bRl() {
  let e = await om();
  for (let [t, n] of Object.entries(e)) {
    if (hOe(n.installLocation)) {
      T(`Skipping seed-managed marketplace '${t}' in bulk refresh`);
      continue;
    }
    if (n.source.source === "settings") continue;
    if (!_H(n.source)) {
      T(`Skipping policy-blocked marketplace '${t}' in bulk refresh`);
      continue;
    }
    let r = !1;
    if (t === xI) {
      if ((await xYt(n.installLocation, mOe())) !== null) {
        (xe("plugin_official_marketplace_fetch"), (e[t].lastUpdated = new Date().toISOString()));
        continue;
      }
      if (!at("tengu_plugin_official_mkt_git_fallback", !0)) {
        (Le("plugin_official_marketplace_fetch", "gcs_failed_fallback_disabled"),
          T("Skipping official marketplace bulk refresh: GCS failed, git fallback disabled"));
        continue;
      }
      r = !0;
    }
    try {
      let { cachePath: o } = await H$o(n.source);
      if (((e[t].lastUpdated = new Date().toISOString()), (e[t].installLocation = o), r))
        It("plugin_official_marketplace_fetch", "gcs_failed_git_fallback");
    } catch (o) {
      if (r) Le("plugin_official_marketplace_fetch", "gcs_and_git_failed");
      T(`Failed to refresh marketplace ${t}: ${be(o)}`, {
        level: "error",
      });
    }
  }
  await sse(e);
}
function ise(e, t, n) {
  let r = `${e}:${n?.disableCredentialHelper ? 1 : 0}`,
    o = rer.get(r);
  if (o) {
    if (t) o.listeners.push(t);
    return o.promise;
  }
  let s = t ? [t] : [],
    a = uxf(
      e,
      (l) => {
        for (let c of s) Cq(c, l);
      },
      n,
    ).finally(() => rer.delete(r));
  return (
    rer.set(r, {
      promise: a,
      listeners: s,
    }),
    a
  );
}
async function uxf(e, t, n) {
  let r = await om(),
    o = r[e];
  if (!o)
    throw Error(
      `Marketplace '${e}' not found. Available marketplaces: ${Object.keys(r).join(", ")}`,
    );
  if (!_H(o.source))
    throw Error(`Marketplace source '${mHe(o.source)}' is blocked by enterprise policy.`);
  if (n?.skipIfRecent && o.lastUpdated) {
    let i = Date.now() - new Date(o.lastUpdated).getTime();
    if (i >= 0 && i < 30000) {
      T(`Skipping refresh for marketplace '${e}' \u2014 refreshed ${Math.round(i / 1000)}s ago`);
      return;
    }
  }
  if ((G$.cache?.delete?.(e), o.source.source === "settings")) {
    T(`Skipping refresh for settings-sourced marketplace '${e}' \u2014 no upstream`);
    return;
  }
  let s = !1;
  try {
    let { installLocation: i, source: a } = o,
      l = hOe(i);
    if (l)
      throw Error(
        `Marketplace '${e}' is seed-managed (${l}) and its content is controlled by the seed image. To update: ask your admin to update the seed.`,
      );
    if (!s9(a)) {
      let c = $d.resolve(mOe()),
        u = $d.resolve(i);
      if (u !== c && !u.startsWith(c + $d.sep)) {
        let d = xy("plugin marketplace remove", e);
        throw Error(
          `Marketplace '${e}' has a corrupted installLocation (${i}) \u2014 expected a path inside ${c}. This can happen after cross-platform path writes or manual edits to known_marketplaces.json. ${d ? `Run \`${d}\`` : "Remove the entry"} and re-add it.`,
        );
      }
    }
    if (e === xI) {
      if ((await xYt(i, mOe())) !== null) {
        (xe("plugin_official_marketplace_fetch"),
          (r[e] = {
            ...o,
            lastUpdated: new Date().toISOString(),
          }),
          await sse(r));
        return;
      }
      if (!at("tengu_plugin_official_mkt_git_fallback", !0))
        throw (
          Le("plugin_official_marketplace_fetch", "gcs_failed_fallback_disabled"),
          Error("Official marketplace GCS fetch failed and git fallback is disabled")
        );
      ((s = !0),
        T("Official marketplace GCS failed; falling back to git", {
          level: "warn",
        }));
    }
    if (a.source === "github" || a.source === "git") {
      let c = {
        ...n,
        skipLfs: a.skipLfs,
      };
      if (a.source === "github") {
        let u = `git@${JH}:${a.repo}.git`,
          d = `https://github.com/${a.repo}.git`;
        if (eRe()) (await hRl(i, d), await Tfe(d, i, a.ref, a.sparsePaths, t, c));
        else {
          let p = await yRl(),
            f = p ? u : d,
            m = p ? d : u;
          try {
            await Tfe(f, i, a.ref, a.sparsePaths, t, c);
          } catch {
            (T(
              `Marketplace refresh failed with ${p ? "SSH" : "HTTPS"} for ${a.repo}, falling back to ${p ? "HTTPS" : "SSH"}`,
              {
                level: "info",
              },
            ),
              await Tfe(m, i, a.ref, a.sparsePaths, t, c));
          }
        }
      } else await Tfe(a.url, i, a.ref, a.sparsePaths, t, c);
      try {
        await kYt(i);
      } catch {
        let u = a.source === "github" ? a.repo : Kze(a.url),
          d =
            e === "claude-code-plugins"
              ? `We've deprecated "claude-code-plugins" in favor of "claude-plugins-official".`
              : "This marketplace may have been deprecated or moved to a new location.",
          p = xy("plugin marketplace remove", e);
        throw Error(
          `The marketplace.json file is no longer present in this repository.

${d}
Source: ${u}` +
            (p
              ? `

You can remove this marketplace with: ${p}`
              : `

You can remove this marketplace from /plugin or by editing known_marketplaces.json.`),
        );
      }
    } else if (a.source === "url") await _Rl(a.url, i, a.headers, t);
    else if (s9(a)) (Cq(t, "Validating local marketplace"), await kYt(i));
    else throw Error("Unsupported marketplace source type for refresh");
    if (((r[e].lastUpdated = new Date().toISOString()), await sse(r), s))
      It("plugin_official_marketplace_fetch", "gcs_failed_git_fallback");
    T(`Successfully refreshed marketplace: ${e}`);
  } catch (i) {
    if (s) Le("plugin_official_marketplace_fetch", "gcs_and_git_failed");
    let a = i instanceof Error ? i.message : String(i);
    throw (
      T(`Failed to refresh marketplace ${e}: ${a}`, {
        level: "error",
      }),
      Error(`Failed to refresh marketplace '${e}': ${a}`)
    );
  }
}
async function SRl(e, t) {
  let n = await om(),
    r = n[e];
  if (!r)
    throw Error(
      `Marketplace '${e}' not found. Available marketplaces: ${Object.keys(n).join(", ")}`,
    );
  let o = hOe(r.installLocation);
  if (o)
    throw Error(
      `Marketplace '${e}' is seed-managed (${o}) and auto-update is always disabled for seed content. To update: ask your admin to update the seed.`,
    );
  let s = ZIf(e);
  if (s !== null)
    throw Error(
      `Auto-update for '${e}' is set by ${s} and can't be changed here. Update that settings source (or ask your admin to) instead.`,
    );
  if (r.autoUpdate === t) return;
  ((n[e] = {
    ...r,
    autoUpdate: t,
  }),
    await sse(n));
  let i = exf(e);
  if (i) {
    let a = yn(i)?.extraKnownMarketplaces?.[e];
    if (a)
      RYt(
        e,
        {
          source: a.source,
          autoUpdate: t,
        },
        i,
      );
  }
  T(`Set autoUpdate=${t} for marketplace: ${e}`);
}
async function ERl(e) {
  let t = f3();
  if (Object.keys(t).length === 0) return !1;
  let n;
  if (e) n = e;
  else
    try {
      n = await om();
    } catch (o) {
      return (
        T(`syncDeclaredAutoUpdateToJson: failed to load known_marketplaces.json: ${be(o)}`, {
          level: "error",
        }),
        !1
      );
    }
  let r = !1;
  for (let [o, s] of Object.entries(t)) {
    if (s.autoUpdate === void 0) continue;
    let i = n[o];
    if (!i || hOe(i.installLocation)) continue;
    if (i.autoUpdate === s.autoUpdate) continue;
    ((n[o] = {
      ...i,
      autoUpdate: s.autoUpdate,
    }),
      (r = !0),
      T(`Synced autoUpdate=${s.autoUpdate} from settings for marketplace: ${o}`));
  }
  if (r) await sse(n);
  return r;
}
var gRl,
  $d,
  JIf,
  rxf = 120000,
  G$,
  rer;
