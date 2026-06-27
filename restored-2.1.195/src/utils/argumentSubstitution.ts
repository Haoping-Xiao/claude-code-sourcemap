// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bqe
// matched 2.1.88 source: src/utils/argumentSubstitution.ts
// class=modified  jaccard=0.2947  score=0.6492  fileCov=0.3505
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function bmo(e) {
  if (!e || !e.trim()) return [];
  let t = oA(e);
  return t.length > 0 ? t : e.split(/\s+/).filter(Boolean);
}
function P2n(e) {
  if (!e) return [];
  let t = (n) => typeof n === "string" && n.trim() !== "" && !/^\d+$/.test(n);
  if (Array.isArray(e)) return e.filter(t);
  if (typeof e === "string") return e.split(/\s+/).filter(t);
  return [];
}
function KDa(e, t) {
  let n = e.slice(t.length);
  if (n.length === 0) return;
  return n.map((r) => `[${r}]`).join(" ");
}
function Rpt(e, t, n = true, r = [], o) {
  if (t === void 0 || t === null) return e;
  let s = (p) => {
      let f = (p ?? "").replaceAll(_mo, "");
      return o ? o(f) : f;
    },
    i = bmo(t),
    a = r
      .map((p, f) => ({
        name: p,
        i: f,
      }))
      .filter((p) => Boolean(p.name))
      .sort((p, f) => f.name.length - p.name.length),
    l = ["\\d", "ARGUMENTS", ...a.map(({ name: p }) => `${wx(p)}(?![\\[\\w])`)].join("|"),
    c = e.replace(new RegExp(`(?<!\\\\)\\\\\\$(?=${l})`, "g"), _mo),
    u = c !== e;
  e = c;
  let d = false;
  for (let { name: p, i: f } of a)
    e = e.replace(new RegExp(`\\$${wx(p)}(?![\\[\\w])`, "g"), () => ((d = true), s(i[f])));
  if (
    ((e = e.replace(/\$ARGUMENTS\[(\d+)\]/g, (p, f) => {
      d = true;
      let m = parseInt(f, 10);
      return s(i[m]);
    })),
    (e = e.replace(/\$(\d+)(?!\w)/g, (p, f) => {
      d = true;
      let m = parseInt(f, 10);
      return s(i[m]);
    })),
    (e = e.replaceAll("$ARGUMENTS", () => ((d = true), s(t)))),
    !d && n && t)
  )
    e =
      e +
      `

ARGUMENTS: ${s(t)}`;
  if (u) e = e.replaceAll(_mo, "$");
  return e;
}
var _mo = "\uFFFF";
