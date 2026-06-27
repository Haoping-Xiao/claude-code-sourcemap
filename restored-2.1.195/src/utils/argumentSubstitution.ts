// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bqe
// matched 2.1.88 source: src/utils/argumentSubstitution.ts
// class=modified  jaccard=0.2947  score=0.6492  fileCov=0.3505
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
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
function substituteArguments(content, args, n = true, r = [], o) {
  if (args === void 0 || args === null) return content;
  let s = (p) => {
      let f = (p ?? "").replaceAll(_mo, "");
      return o ? o(f) : f;
    },
    i = bmo(args),
    a = r
      .map((p, f) => ({
        name: p,
        i: f,
      }))
      .filter((p) => Boolean(p.name))
      .sort((p, f) => f.name.length - p.name.length),
    l = ["\\d", "ARGUMENTS", ...a.map(({ name: p }) => `${wx(p)}(?![\\[\\w])`)].join("|"),
    c = content.replace(new RegExp(`(?<!\\\\)\\\\\\$(?=${l})`, "g"), _mo),
    u = c !== content;
  content = c;
  let d = false;
  for (let { name: p, i: f } of a)
    content = content.replace(
      new RegExp(`\\$${wx(p)}(?![\\[\\w])`, "g"),
      () => ((d = true), s(i[f])),
    );
  if (
    ((content = content.replace(/\$ARGUMENTS\[(\d+)\]/g, (p, f) => {
      d = true;
      let m = parseInt(f, 10);
      return s(i[m]);
    })),
    (content = content.replace(/\$(\d+)(?!\w)/g, (p, f) => {
      d = true;
      let m = parseInt(f, 10);
      return s(i[m]);
    })),
    (content = content.replaceAll("$ARGUMENTS", () => ((d = true), s(args)))),
    !d && n && args)
  )
    content =
      content +
      `

ARGUMENTS: ${s(args)}`;
  if (u) content = content.replaceAll(_mo, "$");
  return content;
}
var _mo = "\uFFFF";
