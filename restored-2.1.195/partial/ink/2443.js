// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _5i
// matched 2.1.88 source: src/ink/Ansi.tsx
// class=partial  jaccard=0.0996  score=1  fileCov=0.0996
// note: low-confidence suggestion: src/ink/Ansi.tsx; dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _5i = E(() => {
  y5i();
});
function LWd(e) {
  let n = new MLn().feed(e),
    r = [],
    o;
  for (let s of n) {
    if (s.type === "link") {
      if (s.action.type === "start") o = s.action.url;else o = void 0;
      continue;
    }
    if (s.type === "text") {
      let i = s.graphemes.map(c => c.value).join("");
      if (!i) continue;
      let a = DWd(s.style);
      if (o) a.hyperlink = o;
      let l = r.at(-1);
      if (l && MWd(l.props, a)) l.text += i;else r.push({
        text: i,
        props: a
      });
    }
  }
  return r;
}
function DWd(e) {
  let t = {};
  if (e.bold) t.bold = !0;
  if (e.dim) t.dim = !0;
  if (e.italic) t.italic = !0;
  if (e.underline !== "none") t.underline = !0;
  if (e.strikethrough) t.strikethrough = !0;
  if (e.inverse) t.inverse = !0;
  let n = b5i(e.fg);
  if (n) t.color = n;
  let r = b5i(e.bg);
  if (r) t.backgroundColor = r;
  return t;
}
function b5i(e) {
  switch (e.type) {
    case "named":
      return PWd[e.name];
    case "indexed":
      return `ansi256(${e.index})`;
    case "rgb":
      return `rgb(${e.r},${e.g},${e.b})`;
    case "default":
      return;
  }
}
function MWd(e, t) {
  return e.color === t.color && e.backgroundColor === t.backgroundColor && e.bold === t.bold && e.dim === t.dim && e.italic === t.italic && e.underline === t.underline && e.strikethrough === t.strikethrough && e.inverse === t.inverse && e.hyperlink === t.hyperlink;
}
function $Wd(e) {
  return e.color !== void 0 || e.backgroundColor !== void 0 || e.dim === !0 || e.bold === !0 || e.italic === !0 || e.underline === !0 || e.strikethrough === !0 || e.inverse === !0 || e.hyperlink !== void 0;
}
function OWd(e) {
  return e.color !== void 0 || e.backgroundColor !== void 0 || e.dim === !0 || e.bold === !0 || e.italic === !0 || e.underline === !0 || e.strikethrough === !0 || e.inverse === !0;
}
function S5i(e) {
  let t = OJr.c(14),
    n,
    r,
    o,
    s;
  if (t[0] !== e) ({
    bold: n,
    dim: o,
    children: r,
    ...s
  } = e), t[0] = e, t[1] = n, t[2] = r, t[3] = o, t[4] = s;else n = t[1], r = t[2], o = t[3], s = t[4];
  if (o) {
    let a;
    if (t[5] !== r || t[6] !== s) a = Cne.jsx(nS, {
      ...s,
      dim: !0,
      children: r
    }), t[5] = r, t[6] = s, t[7] = a;else a = t[7];
    return a;
  }
  if (n) {
    let a;
    if (t[8] !== r || t[9] !== s) a = Cne.jsx(nS, {
      ...s,
      bold: !0,
      children: r
    }), t[8] = r, t[9] = s, t[10] = a;else a = t[10];
    return a;
  }
  let i;
  if (t[11] !== r || t[12] !== s) i = Cne.jsx(nS, {
    ...s,
    children: r
  }), t[11] = r, t[12] = s, t[13] = i;else i = t[13];
  return i;
}
var OJr, E5i, Cne, bd, PWd;