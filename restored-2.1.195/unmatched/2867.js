// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OI
// matched 2.1.88 source: node_modules/fast-xml-parser/lib/fxp.cjs
// class=new  jaccard=0.0172  score=0.6225  fileCov=0.0174
// note: nearest: node_modules/fast-xml-parser/lib/fxp.cjs (0.0172); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var OI = E(() => {
  Sup = /&(?:amp|lt|gt);/g, gua = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">"
  };
  Eup = /&(?:amp|lt|gt|quot|apos);/g, Aup = {
    ...gua,
    "&quot;": '"',
    "&apos;": "'"
  };
});
function PNn(e) {
  let t = e.indexOf(`
`),
    n = (t === -1 ? e : e.slice(0, t)).trim();
  if (!n.startsWith("#") || n.startsWith("#!")) return;
  if (t !== -1 && Hup(e.slice(t + 1))) return;
  let r = n.replace(/^#+\s*/, "");
  if (!r || Tup(r)) return;
  return r;
}
function Hup(e) {
  for (let t of e.split(`
`)) {
    let n = t.trim();
    if (n === "") continue;
    if (n.startsWith("#")) continue;
    return !0;
  }
  return !1;
}
function Tup(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 32 || n >= 127 && n <= 159) return !0;
  }
  return !1;
}
function vup(e) {
  if (!e.endsWith(".md")) return !1;
  if ($_e(e)) return !1;
  return C7(e);
}
function MNn(e, t) {
  if (!vup(e) || !I_e.test(t)) return t;
  let {
    frontmatter: n,
    body: r
  } = l0n(t);
  if (c0n(n, "originSessionId") !== null) return t;
  return xNi(INi(n, {
    originSessionId: Rt()
  }), r);
}