// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DJi
// matched 2.1.88 source: src/bridge/bridgeMain.ts
// class=modified (alt of src/bridge/bridgeMain.ts)  jaccard=0.0032  score=0.0332  fileCov=0.0036
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DJi] deps: RFt, SWe
((CJi = R(Uto(), 1)), (IJi = require("child_process")), (Rbe = R(require("path"))));
xJi = `_${Math.random().toString(36).slice(2, 11)}_SBX`;
function NJi(e) {
  if (e === void 0)
    return {
      kind: "cmd",
    };
  let t = P8.win32.basename(e).toLowerCase();
  if (t === "bash" || t === "bash.exe" || t === "sh" || t === "sh.exe") {
    if (!P8.win32.isAbsolute(e))
      throw Error(
        `binShell bash path must be absolute (got ${JSON.stringify(e)}); pass the resolved Git Bash install path`,
      );
    return {
      kind: "bash",
      path: e,
    };
  }
  switch (e.toLowerCase()) {
    case "pwsh":
    case "pwsh.exe":
      return {
        kind: "pwsh",
      };
    case "powershell":
    case "powershell.exe":
      return {
        kind: "powershell",
      };
    case "cmd":
    case "cmd.exe":
      return {
        kind: "cmd",
      };
    default:
      throw Error(
        `unrecognised binShell ${JSON.stringify(e)}: expected 'cmd' | 'powershell' | 'pwsh' or an absolute path to bash.exe/sh.exe`,
      );
  }
}
function PQd() {
  let e = P8.dirname(
    $Ji.fileURLToPath(
      "file:///home/runner/work/claude-cli-internal/claude-cli-internal/node_modules/@anthropic-ai/sandbox-runtime/dist/sandbox/windows-sandbox-utils.js",
    ),
  );
  return P8.resolve(e, "..", "..");
}
function Yto() {
  let e = process.env.SRT_WIN_PATH;
  if (e && Kto.existsSync(e)) return e;
  let t = PQd(),
    n = MQd.x64,
    r = [];
  if (n) r.push(P8.join(t, "vendor", "srt-win", n, "srt-win.exe"));
  r.push(
    P8.join(t, "vendor", "srt-win-src", "target", "release", "srt-win.exe"),
    P8.join(t, "vendor", "srt-win", "target", "release", "srt-win.exe"),
  );
  for (let o of r) if (Kto.existsSync(o)) return o;
  throw Error(
    `srt-win.exe not found. Set SRT_WIN_PATH or build with \`cargo build --release --manifest-path vendor/srt-win-src/Cargo.toml\`. Looked in: ${[e, ...r].filter(Boolean).join(", ")}`,
  );
}
function BJi(e) {
  if (e.groupSid) return ["--group-sid", e.groupSid];
  return ["--name", e.groupName ?? e$n];
}
function $Qd(e) {
  let t = Yto(),
    n = MJi.spawnSync(t, e, {
      encoding: "utf8",
      timeout: 15000,
    });
  if (n.error) throw Error(`srt-win ${e[0]}: spawn failed: ${n.error.message}`);
  return {
    status: n.status,
    stdout: (n.stdout ?? "").trim(),
    stderr: (n.stderr ?? "").trim(),
  };
}
function UJi(e) {
  let t = $Qd(e);
  if (t.status !== 0)
    throw Error(`srt-win ${e.join(" ")} exited ${t.status}: ${t.stderr || t.stdout}`);
  try {
    return JSON.parse(t.stdout);
  } catch (n) {
    throw Error(
      `srt-win ${e.join(" ")}: unparseable JSON output ${JSON.stringify(t.stdout)}: ${n.message}`,
    );
  }
}
function OQd(e) {
  return UJi(["group", "status", ...BJi(e)]);
}
function NQd(e = {}) {
  let t = ["wfp", "status"];
  if (e.sublayerGuid) t.push("--sublayer-guid", e.sublayerGuid);
  let n = UJi(t);
  return {
    state: n.state,
    filters: n.filters,
    ...(n.port_range && {
      portRange: n.port_range,
    }),
  };
}
function FJi(e) {
  let n = [Yto(), "exec", ...BJi(e.group)];
  if (e.sublayerGuid) n.push("--sublayer-guid", e.sublayerGuid);
  n.push("--");
  let r = process.env.SystemRoot ?? "C:\\Windows",
    o = e.binShell ?? {
      kind: "cmd",
    };
  switch (o.kind) {
    case "bash":
      n.push(o.path, "-c", e.command);
      break;
    case "pwsh":
      n.push("pwsh.exe", "-NoProfile", "-Command", e.command);
      break;
    case "powershell":
      n.push(
        P8.join(r, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"),
        "-NoProfile",
        "-Command",
        e.command,
      );
      break;
    case "cmd":
      n.push(P8.join(r, "System32", "cmd.exe"), "/d", "/s", "/c", e.command);
      break;
  }
  let s = BQd(jlt(e.httpProxyPort, e.socksProxyPort, void 0, e.proxyAuthToken));
  delete s.TMPDIR;
  let i = {
    ...process.env,
    ...s,
  };
  return {
    argv: n,
    env: i,
  };
}
function BQd(e) {
  let t = {};
  for (let n of e) {
    let r = n.indexOf("=");
    if (r === -1) continue;
    t[n.slice(0, r)] = n.slice(r + 1);
  }
  return t;
}
function PJi(e, t, n) {
  if (n === "created-not-on-token")
    return (
      "The discriminator group exists but is not yet in this session's token. LOG OUT and back in to pick up the new group membership (it enters TokenGroups at logon). Network is not disrupted " +
      "meanwhile \u2014 WFP filter-0 PERMITs traffic while the group is absent " +
      "from your token."
    );
  let r = e.groupSid ? `--group-sid ${e.groupSid}` : `--name ${e.groupName ?? e$n}`,
    o = t ? ` --sublayer-guid ${t}` : "";
  return (
    `Windows sandbox needs a one-time install (one UAC prompt):
  npx sandbox-runtime windows-install
` +
    "  \u2014 or call installWindowsSandbox(), or run " +
    `\`srt-win.exe install ${r}${o}\` directly \u2014
` +
    `then LOG OUT and back in (the group SID enters TokenGroups at logon).
Network is not disrupted before the logout: while the group is absent from your token, WFP filter-0 PERMITs all traffic.`
  );
}
function jJi(e, t) {
  let n = [],
    r = [],
    o;
  try {
    o = Yto();
  } catch (a) {
    return {
      errors: [a.message],
      warnings: r,
    };
  }
  Bo(`[Sandbox Windows] using srt-win at ${o}`);
  let s;
  try {
    s = OQd(e);
  } catch (a) {
    return (
      n.push(`srt-win group status failed: ${a.message}`),
      {
        errors: n,
        warnings: r,
      }
    );
  }
  if (s.state !== "ready")
    n.push(
      `Discriminator group is ${s.state}` +
        (s.sid ? ` (sid=${s.sid})` : "") +
        ". " +
        PJi(e, t, s.state),
    );
  if (s.warning) r.push(s.warning);
  let i;
  try {
    i = NQd({
      sublayerGuid: t,
    });
  } catch (a) {
    return (
      n.push(`srt-win wfp status failed: ${a.message}`),
      {
        errors: n,
        warnings: r,
      }
    );
  }
  if (i.state !== "installed") {
    if (s.state === "ready")
      n.push(
        `WFP filters not installed under sublayer ${t ?? "(default)"}. ` + PJi(e, t, "absent"),
      );
  } else if (i.portRange)
    Bo(
      `[Sandbox Windows] WFP installed: ${i.filters} filters, proxy port range ${i.portRange[0]}-${i.portRange[1]}`,
    );
  return {
    errors: n,
    warnings: r,
  };
}
var Kto,
  P8,
  MJi,
  $Ji,
  e$n = "sandbox-runtime-net",
  OJi,
  MQd;
