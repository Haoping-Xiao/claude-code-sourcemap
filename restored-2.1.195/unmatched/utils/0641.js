// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SG
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0039  score=0.2991  fileCov=0.004
// note: nearest: src/screens/REPL.tsx (0.0039); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SG] deps: lru-cache/dist/esm/index.js, utils/debug.ts, utils/fsOperations.ts
lPu = new Set();
function uPu() {
  return false;
}
function UEs(e) {
  try {
    return jEs.lstatSync(e, {
      throwIfNoEntry: false
    }) === void 0;
  } catch {
    return false;
  }
}
function fPu(e) {
  let t = e.toLowerCase().replace(/.*[\\/]/, "").replace(/[. ]+$/, ""),
    n = t.lastIndexOf(".");
  return n > 0 && pPu.has(t.slice(n));
}
function Xkr(e, t = false) {
  let n = XZe.get(e);
  if (n !== void 0) if (n !== null) {
    if (!UEs(n)) return n;
    XZe.delete(e);
  } else {
    if (!t) return n;
    XZe.delete(e);
  }
  let r = process.env.SYSTEMROOT || "C:\\Windows",
    o = GEs.join(r, "System32", "where.exe");
  try {
    let i = FEs.execFileSync(o, [e], {
        stdio: "pipe",
        encoding: "utf8",
        timeout: dPu,
        windowsHide: true,
        env: process.env
      }).trim().split(/\r?\n/).filter(Boolean),
      a = process.cwd(),
      l = false;
    for (let c of i) {
      if (UEs(c)) continue;
      if ($sn(c, a)) {
        l = true;
        continue;
      }
      if (!fPu(c)) continue;
      return XZe.set(e, c), c;
    }
    if (i.length > 0 && !l) XZe.set(e, null);
    return null;
  } catch (s) {
    if (mPu(s)) XZe.set(e, null);
    return null;
  }
}
function mPu(e) {
  if (e === null || typeof e !== "object") return false;
  let t = "status" in e ? e.status : void 0,
    n = "signal" in e ? e.signal : void 0,
    r = "code" in e ? e.code : void 0;
  return t === 1 && !n && !r;
}
function JZe(e, t = false) {
  if (!uPu()) return e;
  if (e.includes("/") || e.includes("\\")) return e;
  return Xkr(e, t);
}
var FEs,
  jEs,
  GEs,
  XZe,
  dPu = 5000,
  pPu;