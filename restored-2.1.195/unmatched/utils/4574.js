// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dDl
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dDl = E(() => {
  tOo = {
    isEnabled: () => !1,
    isHidden: !0,
    name: "stub"
  };
});
function qSt(e, t, n, r) {
  let o = new nOo(),
    s = c => {
      if (c.length > 0) o.push(De(c).slice(1, -1));
    };
  o.push('{"content":"'), s("{");
  let i = !0,
    a = c => {
      if (!i) s(",");
      i = !1, s(De(c) + ":");
    };
  for (let [c, u] of Object.entries(e)) {
    if (u === void 0) continue;
    if (t.has(c) && Array.isArray(u)) {
      a(c), s("[");
      for (let d = 0; d < u.length; d++) {
        if (d > 0) s(",");
        s(De(u[d]));
      }
      s("]");
    } else if (n.has(c) && u !== null && typeof u === "object") {
      a(c), s("{");
      let d = Object.entries(u);
      for (let p = 0; p < d.length; p++) {
        let [f, m] = d[p] ?? ["", void 0];
        if (p > 0) s(",");
        if (s(De(f) + ":["), Array.isArray(m)) for (let g = 0; g < m.length; g++) {
          if (g > 0) s(",");
          s(De(m[g]));
        }
        s("]");
      }
      s("}");
    } else a(c), s(De(u));
  }
  s("}"), o.push('"');
  let l = r?.extraOuterFields;
  if (l) for (let [c, u] of Object.entries(l)) o.push(`,${De(c)}:${De(u)}`);
  return o.push("}"), o.toBuffer();
}
var nOo;