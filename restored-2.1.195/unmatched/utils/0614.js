// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YSs
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0017  score=0.4327  fileCov=0.0017
// note: nearest: src/cli/print.ts (0.0017); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module YSs]
Dw = R(require("path")), Nkr = R(require("os")), _pn = R(require("process")), Zwe = Nkr.default.homedir(), Bkr = Nkr.default.tmpdir(), {
  env: UZe
} = _pn.default;
function eCe(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n) | 0;
  return t;
}
function XSs(e) {
  return Bun.hash(e).toString();
}
function JSs(e, t) {
  return Bun.hash(t, Bun.hash(e)).toString();
}
function ZSs(e) {
  let t = e.replace(/[^a-zA-Z0-9]/g, "-");
  if (t.length <= QSs) return t;
  return `${t.slice(0, QSs)}-${Math.abs(eCe(e)).toString(36)}`;
}
function Spn(e) {
  return ZSs(e);
}
var eRt,
  bpn,
  QSs = 200,
  LFe;