// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wAo
// matched 2.1.88 source: src/utils/nativeInstaller/pidLock.ts
// class=modified  jaccard=0.4315  score=0.8329  fileCov=0.4724
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module wAo] deps: dn, kt, Du, w4t, Rx, CZe, je, At, Bi, ys, Oza, Jt, CAo, uAo
((Uza = require("crypto")), (xVn = require("fs/promises")), (Fza = require("path")));
kVn = class kVn extends Error {
  constructor() {
    super("Download stalled: no data received for 120 seconds");
    this.name = "StallTimeoutError";
  }
};
function $Pe() {
  return !ml(void 0);
}
function LVn(e) {
  if (e <= 1) return false;
  try {
    return (process.kill(e, 0), true);
  } catch {
    return false;
  }
}
function lKp(e, t) {
  if (!LVn(e)) return false;
  if (e === process.pid) return true;
  try {
    let n = z2r(e);
    if (!n) return true;
    let r = n.toLowerCase(),
      o = t.toLowerCase();
    return r.includes("claude") || r.includes(o);
  } catch {
    return true;
  }
}
function x9e(e) {
  let t = qt();
  try {
    let n = t.readFileSync(e, {
      encoding: "utf8",
    });
    if (!n || n.trim() === "") return null;
    let r = Ft(n);
    if (typeof r.pid !== "number" || !r.version || !r.execPath) return null;
    return r;
  } catch {
    return null;
  }
}
function Zqt(e) {
  let t = x9e(e);
  if (!t) return false;
  let { pid: n, execPath: r } = t;
  if (!LVn(n)) return false;
  if (!lKp(n, r))
    return (
      T(`Lock PID ${n} is running but does not appear to be Claude - treating as stale`),
      false
    );
  let o = qt();
  try {
    let s = o.statSync(e);
    if (Date.now() - s.mtimeMs > aKp) {
      if (!LVn(n)) return false;
    }
  } catch {}
  return true;
}
function cKp(e, t) {
  oj(e, De(t, null, 2));
}
async function Wza(e, t) {
  let n = qt(),
    r = Qqt.basename(e);
  if (Zqt(t)) {
    let s = x9e(t);
    return (T(`Cannot acquire lock for ${r} - held by PID ${s?.pid}`), null);
  }
  let o = {
    pid: process.pid,
    version: r,
    execPath: process.execPath,
    acquiredAt: Date.now(),
  };
  try {
    if ((cKp(t, o), x9e(t)?.pid !== process.pid)) return null;
    return (
      T(`Acquired PID lock for ${r} (PID ${process.pid})`),
      () => {
        try {
          if (x9e(t)?.pid === process.pid) (n.unlinkSync(t), T(`Released PID lock for ${r}`));
        } catch (i) {
          T(`Failed to release lock for ${r}: ${i}`);
        }
      }
    );
  } catch (s) {
    return (T(`Failed to acquire lock for ${r}: ${s}`), null);
  }
}
async function qza(e, t) {
  let n = await Wza(e, t);
  if (!n) return false;
  let r = () => {
    try {
      n();
    } catch {}
  };
  return (process.on("exit", r), process.on("SIGINT", r), process.on("SIGTERM", r), true);
}
async function Vza(e, t, n) {
  let r = await Wza(e, t);
  if (!r) return false;
  try {
    return (await n(), true);
  } finally {
    r();
  }
}
function zza(e) {
  let t = qt(),
    n = [];
  try {
    let r = t.readdirStringSync(e).filter((o) => o.endsWith(".lock"));
    for (let o of r) {
      let s = Qqt.join(e, o),
        i = x9e(s);
      if (i)
        n.push({
          version: i.version,
          pid: i.pid,
          isProcessRunning: LVn(i.pid),
          execPath: i.execPath,
          acquiredAt: new Date(i.acquiredAt),
          lockFilePath: s,
        });
    }
  } catch (r) {
    if (wn(r)) return n;
    ke(Zr(r));
  }
  return n;
}
function DVn(e) {
  let t = qt(),
    n = 0;
  try {
    let r = t.readdirStringSync(e).filter((o) => o.endsWith(".lock"));
    for (let o of r) {
      let s = Qqt.join(e, o);
      try {
        if (t.lstatSync(s).isDirectory())
          (t.rmSync(s, {
            recursive: true,
            force: true,
          }),
            n++,
            T(`Cleaned up legacy directory lock: ${o}`));
        else if (!Zqt(s)) (t.unlinkSync(s), n++, T(`Cleaned up stale lock: ${o}`));
      } catch {}
    }
  } catch (r) {
    if (wn(r)) return 0;
    T(`Failed to readdir locks directory: ${Zr(r).message}`, {
      level: "error",
    });
  }
  return n;
}
var Qqt,
  aKp = 7200000;
