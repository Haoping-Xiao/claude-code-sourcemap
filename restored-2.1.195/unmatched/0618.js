// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vn
// matched 2.1.88 source: src/utils/log.ts
// class=new  jaccard=0.0501  score=1  fileCov=0.0501
// note: nearest: src/utils/log.ts (0.0501); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vn = E(() => {
  Qi();
  ft();
  np();
  Epn();
  jZe();
  fn();
  At();
  qd();
  Jt();
  sr();
  Tpn = [];
  WZe = [];
  qag = Cn(() => process.argv.includes("--hard-fail"));
});
function qZe(e) {
  let t = [],
    n = !1;
  async function r() {
    if (n) return;
    if (t.length === 0) return;
    n = !0;
    while (t.length > 0) {
      let {
        args: o,
        resolve: s,
        reject: i,
        context: a
      } = t.shift();
      try {
        let l = await e.apply(a, o);
        s(l);
      } catch (l) {
        i(l);
      }
    }
    if (n = !1, t.length > 0) r();
  }
  return function (...o) {
    return new Promise((s, i) => {
      t.push({
        args: o,
        resolve: s,
        reject: i,
        context: this
      }), r();
    });
  };
}
function MDu(e, t, n) {
  if (n !== void 0 && !Die(e[t], n) || n === void 0 && !(t in e)) dwe(e, t, n);
}
var tRt;