// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uta
// matched 2.1.88 source: node_modules/undici/lib/mock/mock-utils.js
// class=new  jaccard=0.0246  score=1  fileCov=0.0246
// note: nearest: node_modules/undici/lib/mock/mock-utils.js (0.0246); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uta] deps: Qne, SX
rtp = Rno(M1, bX, SRe, Jne, zFt);
function pta(...e) {
  let t = new Map();
  for (let n of e) {
    let r = otp(n) || Array.isArray(n) ? n : [n];
    for (let o of r) {
      let s = t.get(o.name);
      if (s === void 0) s = [], t.set(o.name, s);
      s.push(o);
    }
  }
  return new fta(new Map(Array(...t.entries()).map(([n, r]) => [n, stp(n, r)])));
}
function otp(e) {
  return typeof e === "object" && e !== null && dta in e;
}
function stp(e, t) {
  let n = [];
  for (let r of t) {
    for (let o = 0; o < n.length; o++) if (r.id === n[o].id) {
      n.splice(o, 1);
      break;
    }
    n.push(r);
  }
  return new mta(e, n);
}
var dta, fta, mta;