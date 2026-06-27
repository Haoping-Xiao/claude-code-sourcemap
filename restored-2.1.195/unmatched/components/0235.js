// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tc
// matched 2.1.88 source: node_modules/marked/lib/marked.esm.js
// class=new  jaccard=0.0105  score=0.3782  fileCov=0.0107
// note: nearest: node_modules/marked/lib/marked.esm.js (0.0105); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Tc = E(() => {
  k7c = {
    ambiguousIsNarrow: true
  };
});
function SB(e, t, n) {
  if (!(t > 0)) return e;
  let r = Bun.wrapAnsi(e, t, n);
  if (R7c.test(e) && r.includes(`
`)) return P7c(r);
  return r;
}
function P7c(e) {
  let t = "",
    n = "",
    r = "",
    o = 0;
  lAr.lastIndex = 0;
  let s;
  while ((s = lAr.exec(e)) !== null) {
    t += Iis(e.slice(o, s.index), n, r), t += s[0], o = lAr.lastIndex;
    let i = s[1];
    if (i === "" || i === "0") n = "", r = "";else if (i.startsWith("38;")) n = s[0];else if (L7c.test(i)) n = "";else if (i.startsWith("48;")) r = s[0];else if (D7c.test(i)) r = "";
  }
  return t += Iis(e.slice(o), n, r), t;
}
function Iis(e, t, n) {
  if (e === "" || t === "" && n === "") return e;
  let r = "",
    o = 0;
  for (let s = 0; s < e.length; s++) if (e.charCodeAt(s) === 10) {
    if (r += e.slice(o, s), t) r += "\x1B[39m";
    if (n) r += "\x1B[49m";
    r += `
` + t + n, o = s + 1;
  }
  return r += e.slice(o), r;
}
var R7c, lAr, L7c, D7c;