// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MZn
// matched 2.1.88 source: src/utils/ultraplan/keyword.ts
// class=modified  jaccard=0.2629  score=0.7581  fileCov=0.287
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var MZn = E(() => {
  je();
  E5e();
  Jt();
  PZn();
  Afe = new Map();
});
function YMo(e, t) {
  if (!new RegExp(t, "i").test(e)) return [];
  if (e.startsWith("/")) return [];
  let r = [],
    o = null,
    s = 0,
    i = (u) => !!u && /[\p{L}\p{N}_]/u.test(u);
  for (let u = 0; u < e.length; u++) {
    let d = e[u];
    if (o) {
      if (o === "[" && d === "[") {
        s = u;
        continue;
      }
      if (d !== m0l[o]) continue;
      if (o === "'" && i(e[u + 1])) continue;
      (r.push({
        start: s,
        end: u + 1,
      }),
        (o = null));
    } else if (
      (d === "<" && u + 1 < e.length && /[a-zA-Z/]/.test(e[u + 1])) ||
      (d === "'" && !i(e[u - 1])) ||
      (d !== "<" && d !== "'" && d in m0l)
    )
      ((o = d), (s = u));
  }
  let a = [],
    l = new RegExp(`\\b${t}\\b`, "gi"),
    c = e.matchAll(l);
  for (let u of c) {
    if (u.index === void 0) continue;
    let d = u.index,
      p = d + u[0].length;
    if (r.some((g) => d >= g.start && d < g.end)) continue;
    let f = e[d - 1],
      m = e[p];
    if (f === "/" || f === "\\" || f === "-") continue;
    if (m === "/" || m === "\\" || m === "-" || m === "?") continue;
    if (m === "." && i(e[p + 1])) continue;
    a.push({
      word: u[0],
      start: d,
      end: p,
    });
  }
  return a;
}
function $Zn(e) {
  return YMo(e, "ultraplan");
}
function g0l(e) {
  return YMo(e, "ultrareview");
}
function XMo(e) {
  return YMo(e, "ultracode");
}
function h0l(e) {
  return $Zn(e).length > 0;
}
function y0l(e) {
  return XMo(e).length > 0;
}
function OZn(e) {
  let [t] = $Zn(e);
  if (!t) return e;
  let n = e.slice(0, t.start),
    r = e.slice(t.end);
  if (!(n + r).trim()) return "";
  return ((n = n.replace(/\b(a)n(\s+)$/i, "$1$2")), n + t.word.slice(5) + r);
}
var m0l;
