// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SG
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/symbols.js
// class=partial  jaccard=0.1476  score=0.2002  fileCov=0.3599
// note: low-confidence suggestion: node_modules/undici/lib/web/fetch/symbols.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var SG = E(() => {
  YZe();
  je();
  Jt();
  lPu = new Set();
});
function uPu() {
  return !1;
}
function UEs(e) {
  try {
    return jEs.lstatSync(e, {
      throwIfNoEntry: !1
    }) === void 0;
  } catch {
    return !1;
  }
}
function fPu(e) {
  let t = e.toLowerCase().replace(/.*[\\/]/, "").replace(/[. ]+$/, ""),
    n = t.lastIndexOf(".");
  return n > 0 && pPu.has(t.slice(n));
}
function Xkr(e, t = !1) {
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
        windowsHide: !0,
        env: process.env
      }).trim().split(/\r?\n/).filter(Boolean),
      a = process.cwd(),
      l = !1;
    for (let c of i) {
      if (UEs(c)) continue;
      if ($sn(c, a)) {
        l = !0;
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
  if (e === null || typeof e !== "object") return !1;
  let t = "status" in e ? e.status : void 0,
    n = "signal" in e ? e.signal : void 0,
    r = "code" in e ? e.code : void 0;
  return t === 1 && !n && !r;
}
function JZe(e, t = !1) {
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