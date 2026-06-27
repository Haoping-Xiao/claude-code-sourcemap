// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N0e
// matched 2.1.88 source: node_modules/@smithy/util-base64/dist-cjs/index.js
// class=partial  jaccard=0.2205  score=1  fileCov=0.2205
// note: low-confidence suggestion: node_modules/@smithy/util-base64/dist-cjs/index.js; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var N0e = E(() => {
  kt();
  Yj();
  H0e();
  gPn = R(rt(), 1);
});
function Q6d(e) {
  let {
    style: t,
    ...n
  } = e;
  return {
    ...J6d[t ?? "default"],
    ...Z6d(n)
  };
}
function Z6d(e) {
  let t = {};
  for (let n in e) if (e[n] !== void 0) t[n] = e[n];
  return t;
}
function B0e(e, t = {}) {
  let n = Q6d(t),
    r = c => izd(c, n),
    o = c => c.map(r).join(n.chordSep);
  if (e.length === 0) return "";
  if (e.length === 1) return o(e[0]);
  let s = e.every(c => c.length === 1) ? e.map(c => c[0]) : void 0;
  if (!s) return e.map(o).join("/");
  let i = azd(s, n),
    l = s.every(c => rzd.has(c.key)) && (!!i || s.every(c => yPn(c, n).length === 0)) ? n.arrowSep : "/";
  if (i) {
    let c = s.map(u => r({
      ...u,
      ...ozd
    }));
    return czd(i, n) + c.join(l);
  }
  return s.map(r).join(l);
}
function vZr(e) {
  let t = [];
  if (e.ctrl) t.push("ctrl");
  if (e.shift) t.push("shift");
  if (e.alt || e.meta) t.push("alt");
  if (e.super) t.push("super");
  return t;
}
function hPn(e, t) {
  let n = nzd[e][t.modCase];
  return typeof n === "function" ? n(t.platform) : n;
}
function szd(e, t) {
  let n = ezd[e];
  if (n) return n[tzd[t.keyCase]];
  return t.charCase === "upper" ? e.toUpperCase() : e;
}
function B6i(e) {
  return e.shift && !e.ctrl && !e.alt && !e.meta && !e.super && e.key.length === 1 && e.key >= "a" && e.key <= "z";
}
function izd(e, t) {
  if (t.shiftAsCase && B6i(e)) return e.key.toUpperCase();
  let n = vZr(e),
    r = szd(e.key, t);
  if (t.caretCtrl && n.length === 1 && n[0] === "ctrl") return `^${r}`;
  if (t.modCase === "glyph") return n.map(o => hPn(o, t)).join("") + r;
  return [...n.map(o => hPn(o, t)), r].join(t.modSep);
}
function azd(e, t) {
  let [n, ...r] = e;
  if (!yPn(n, t).length) return;
  return r.every(s => lzd(n, s, t)) ? n : void 0;
}
function yPn(e, t) {
  if (t.shiftAsCase && B6i(e)) return [];
  return vZr(e);
}
function lzd(e, t, n) {
  let r = yPn(e, n),
    o = yPn(t, n);
  return r.length === o.length && r.every((s, i) => s === o[i]);
}
function czd(e, t) {
  let n = vZr(e);
  if (t.caretCtrl && n.length === 1 && n[0] === "ctrl") return "^";
  if (t.modCase === "glyph") return n.map(r => hPn(r, t)).join("");
  return n.map(r => hPn(r, t)).join(t.modSep) + t.modSep;
}
var J6d, ezd, tzd, nzd, rzd, ozd;