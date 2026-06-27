// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xge
// matched 2.1.88 source: src/utils/truncate.ts
// class=partial  jaccard=0.1687  score=0.7776  fileCov=0.1773
// note: low-confidence suggestion: src/utils/truncate.ts; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xge = E(() => {
  R7c = /\x1b\[[34]8;[25];/;
  lAr = /\x1b\[([\d;]*)m/g, L7c = /^(3[0-79]|9[0-7])$/, D7c = /^(4[0-79]|10[0-7])$/;
});
function JJe(e, t) {
  if (rn(e) <= t) return e;
  if (t <= 0) return "\u2026";
  if (t < 5) return Rs(e, t);
  let n = e.lastIndexOf("/"),
    r = n >= 0 ? e.slice(n) : e,
    o = n >= 0 ? e.slice(0, n) : "",
    s = rn(r);
  if (s >= t - 1) return UV(e, t);
  let i = t - 1 - s;
  return rae(o, i) + "\u2026" + r;
}
function Rs(e, t) {
  if (rn(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let n = 0,
    r = "";
  for (let {
    segment: o
  } of BS().segment(e)) {
    let s = rn(o);
    if (n + s > t - 1) break;
    r += o, n += s;
  }
  return r + "\u2026";
}
function UV(e, t) {
  if (rn(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let n = [...BS().segment(e)],
    r = 0,
    o = n.length;
  for (let s = n.length - 1; s >= 0; s--) {
    let i = rn(n[s].segment);
    if (r + i > t - 1) break;
    r += i, o = s;
  }
  return "\u2026" + n.slice(o).map(s => s.segment).join("");
}
function rae(e, t) {
  if (rn(e) <= t) return e;
  if (t <= 0) return "";
  let n = 0,
    r = "";
  for (let {
    segment: o
  } of BS().segment(e)) {
    let s = rn(o);
    if (n + s > t) break;
    r += o, n += s;
  }
  return r;
}
function $a(e, t, n = false) {
  let r = e;
  if (n) {
    let o = e.indexOf(`
`);
    if (o !== -1) {
      if (r = e.substring(0, o), rn(r) + 1 > t) return Rs(r, t);
      return `${r}\u2026`;
    }
  }
  if (rn(r) <= t) return r;
  return Rs(r, t);
}
function Yin(e, t) {
  let n = [],
    r = "",
    o = 0;
  for (let {
    segment: s
  } of BS().segment(e)) {
    let i = rn(s);
    if (o + i <= t) r += s, o += i;else {
      if (r) n.push(r);
      r = s, o = i;
    }
  }
  if (r) n.push(r);
  return n;
}