// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qGo
// matched 2.1.88 source: node_modules/open/index.js
// class=new  jaccard=0.0585  score=0.1503  fileCov=0.0873
// note: nearest: node_modules/open/index.js (0.0585); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qGo] deps: lH, OM, q7, ag, Un, kt, je, At, vn, Is, jS, ih, Jt, har, WL, urc, q$, ESt
wHt = require("fs/promises"), prc = require("net"), frc = require("string_decoder");
AJf = /\x1b\[(?:<\d+;\d+;\d+[Mm]|M[\s\S]{3}|I|O|\??\d+;\d+(?:;\d+)*R|[?>]\d+(?:;\d+)*c|\?\d+(?:;\d+)*\$y|\?997;[12]n|\?\d+u)|\x1bP[^\x1b]*\x1b\\|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g;
async function Sar(e) {
  let {
      cmd: t,
      prefixArgs: n
    } = CF(),
    r = [t, ...n, ...e],
    o = xJf();
  if (Vt() === "windows") {
    let l = await TJf(r, o);
    if (l.ok) return {
      err: null
    };
    T(`daemon: WMI spawn failed (${l.reason}); falling back to direct spawn \u2014 daemon will not survive SSH/terminal close`, {
      level: "warn"
    }), G("tengu_bg_daemon_wmi_fallback", {
      timeout: l.reason === "timeout",
      enoent: l.reason === "enoent",
      rc: l.rc
    });
  }
  let s = await bar.mkdtemp(zGo.join(grc.tmpdir(), "cc-daemon-")).catch(() => null),
    i = s ? zGo.join(s, "stderr.log") : void 0,
    a = i ? await bar.open(i, "w").catch(() => null) : null;
  try {
    let l = await VGo(r, o, a?.fd),
      c = on(l);
    if (c === "ENOENT" || c === "EACCES") {
      let u = CF({
        pinToCurrentBinary: true
      });
      if (u.cmd !== t) {
        G("tengu_bg_daemon_spawn_execpath_fallback", {
          errno_enoent: c === "ENOENT",
          errno_eacces: c === "EACCES"
        });
        let d = await VGo([u.cmd, ...u.prefixArgs, ...e], o, a?.fd);
        if (on(d) !== "ENOENT") return {
          err: d,
          stderrPath: i
        };
        let p = await l8n();
        if (G("tengu_bg_daemon_spawn_versions_fallback", {
          found: p !== null
        }), p !== null && p !== u.cmd) return {
          err: await VGo([p, ...e], o, a?.fd),
          stderrPath: i
        };
        return {
          err: d,
          stderrPath: i
        };
      }
    }
    return {
      err: l,
      stderrPath: i
    };
  } finally {
    await a?.close().catch(() => {});
  }
}
async function VGo(e, t, n) {
  let r = null;
  try {
    let o = KGo.spawn(e[0], e.slice(1), {
      detached: true,
      stdio: ["ignore", "ignore", n ?? "ignore"],
      windowsHide: true,
      env: t
    });
    o.once("error", s => {
      r = s;
    }), o.unref();
  } catch (o) {
    r = o;
  }
  return await new Promise(o => setImmediate(o)), r;
}
function TJf(e, t) {
  let n;
  try {
    n = vJf(wJf(e));
  } catch (s) {
    return Promise.resolve({
      ok: false,
      reason: be(s)
    });
  }
  let r = Buffer.from(n, "utf16le").toString("base64"),
    o = process.env.SYSTEMROOT || "C:\\Windows";
  return new Promise(s => {
    let i = false,
      a = u => {
        if (i) return;
        i = true, clearTimeout(c), s(u);
      },
      l = KGo.spawn(`${o}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`, ["-NoProfile", "-NonInteractive", "-EncodedCommand", r], {
        stdio: "ignore",
        windowsHide: true,
        env: t
      });
    l.once("error", u => a({
      ok: false,
      reason: on(u) === "ENOENT" ? "enoent" : be(u)
    })), l.once("exit", u => {
      if (u === 0) a({
        ok: true
      });else a({
        ok: false,
        reason: `Win32_Process.Create rc=${u}`,
        rc: u ?? void 0
      });
    });
    let c = setTimeout((u, d) => {
      d.kill(), u({
        ok: false,
        reason: "timeout"
      });
    }, 5000, a, l);
    c.unref();
  });
}
function vJf(e) {
  return ['$ErrorActionPreference = "Stop"', '$e = [string[]](Get-ChildItem Env: | ForEach-Object { "$($_.Name)=$($_.Value)" })', "$s = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ EnvironmentVariables = $e; ShowWindow = [uint16]0; CreateFlags = [uint32]8 }", `$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = ${IJf(e)}; CurrentDirectory = $env:USERPROFILE; ProcessStartupInformation = $s }`, "exit $r.ReturnValue"].join(`
`);
}
function wJf(e) {
  return e.map(CJf).join(" ");
}
function CJf(e) {
  if (e.length > 0 && !/[\s"]/.test(e)) return e;
  let t = '"',
    n = 0;
  while (n < e.length) {
    let r = 0;
    while (e[n] === "\\") r++, n++;
    if (n === e.length) t += "\\".repeat(r * 2);else if (e[n] === '"') t += "\\".repeat(r * 2 + 1) + '"', n++;else t += "\\".repeat(r) + e[n], n++;
  }
  return t + '"';
}
function IJf(e) {
  if (/[\u2018\u2019\u201A\u201B]/.test(e)) throw Error("unsupported Unicode single-quote in command line");
  return `'${e.replaceAll("'", "''")}'`;
}
function xJf() {
  let e = {
    ...process.env,
    INVOCATION_ID: ""
  };
  if (delete e.CLAUDECODE, delete e.CLAUDE_CODE_SESSION_ID, delete e.CLAUDE_CODE_CHILD_SESSION, Vt() !== "macos" && process.env.CLAUDE_CODE_OAUTH_TOKEN) {
    if (!!wl().read()?.claudeAiOauth?.refreshToken) delete e.CLAUDE_CODE_OAUTH_TOKEN, delete e.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR;
  }
  return e;
}
var KGo, bar, grc, zGo;