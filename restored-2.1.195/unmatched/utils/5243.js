// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kYe
// matched 2.1.88 source: src/bridge/bridgeMain.ts
// class=new  jaccard=0.0098  score=0.1728  fileCov=0.0102
// note: nearest: src/bridge/bridgeMain.ts (0.0098); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kYe] deps: lH, dn, Un, kt, er, Lo, je, At, Hpe, ANo, Is, QEe, Jt, VQ, YOe, Gfe, qGo, WL, q$, YGo
_Z = require("fs/promises"), JGo = require("path"), AQt = R(Uj(), 1), EQt = require("timers/promises");
async function TQt() {
  let e = await eV({
    onStarting: HQt
  });
  if (e.ok || !e.askInstall) return e;
  if (!process.stdin.isTTY || !process.stderr.isTTY || Oe.isCI) return e;
  process.stderr.write(`No background daemon is running.
Installing it as a service keeps the background daemon running across reboot so 'claude agents' stays available.
`);
  let t = await $Jf("Install as a service now? [y/N/never, or 'once' just for now] ");
  switch (G("tengu_bg_daemon_cold_start_ask_answer", {
    answer_yes: t === "yes",
    answer_once: t === "once",
    answer_never: t === "never"
  }), t) {
    case "yes":
      {
        await F7t();
        let n = await j7t({
          jsonPath: Dq(),
          logPath: VOe()
        });
        if (!n.ok) return process.stderr.write(`Service install failed (${n.error}). Falling back to a transient ${mb()} for now.
`), eV({
          forceTransient: true,
          onStarting: HQt
        });
        return process.stderr.write(`Installed: ${n.servicePath}
Run 'claude daemon uninstall' to undo.
`), HQt(), (await q1e(bme)) ? {
          ok: true
        } : {
          ok: false,
          reason: `service installed but the daemon did not become reachable within ${bme / 1000}s \u2014 check 'claude daemon status'`
        };
      }
    case "once":
      return eV({
        forceTransient: true,
        onStarting: HQt
      });
    case "never":
      return gn(n => n.daemonInstallPromptDismissed ? n : {
        ...n,
        daemonInstallPromptDismissed: true
      }), eV({
        forceTransient: true,
        onStarting: HQt
      });
    case "no":
      return e;
  }
}
async function $Jf(e) {
  let t = Src.createInterface({
    input: process.stdin,
    output: process.stderr
  });
  try {
    let r = (await new Promise(o => {
      t.once("close", () => o("n")), t.question(e, o);
    })).trim().toLowerCase();
    if (r === "y" || r === "yes") return "yes";
    if (r === "once" || r === "o") return "once";
    if (r === "never") return "never";
    return "no";
  } finally {
    t.close();
  }
}
var Src,
  HQt = () => process.stderr.write(`Starting ${mb()}\u2026
`);