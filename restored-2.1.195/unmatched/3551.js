// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s2a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var s2a = Q(j3n => {
  Object.defineProperty(j3n, "__esModule", {
    value: !0
  });
  j3n.hexToBinary = void 0;
  function o2a(e) {
    if (e >= 48 && e <= 57) return e - 48;
    if (e >= 97 && e <= 102) return e - 87;
    return e - 55;
  }
  function i1p(e) {
    let t = new Uint8Array(e.length / 2),
      n = 0;
    for (let r = 0; r < e.length; r += 2) {
      let o = o2a(e.charCodeAt(r)),
        s = o2a(e.charCodeAt(r + 1));
      t[n++] = o << 4 | s;
    }
    return t;
  }
  j3n.hexToBinary = i1p;
});