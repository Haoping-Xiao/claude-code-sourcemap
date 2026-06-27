// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CNi
// matched 2.1.88 source: src/memdir/memoryTypes.ts
// class=modified (alt of src/memdir/memoryTypes.ts)  jaccard=0.0203  score=0.1255  fileCov=0.0236
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var uH = "MEMORY.md",
  D7 = 200,
  bce = 25000,
  P_e =
    "This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",
  a0n =
    "Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";
function l0n(e, t) {
  let { frontmatter: n, content: r } = Bm(e, t);
  return {
    frontmatter: mNd(n),
    body: r,
  };
}
function xNi(e, t) {
  let n = Object.fromEntries(
      [["node_type", pNd], ...Object.entries(e.metadata).filter(([s]) => s !== "node_type")].filter(
        ([, s]) => s != null,
      ),
    ),
    r = {
      name: gNd(e.name ?? ""),
      ...(e.description !== null && {
        description: e.description,
      }),
      metadata: n,
    },
    o = t.replace(/^\n+/, "");
  return `---
${Pkn(r)}---

${o}`;
}
function kNi(e) {
  return [
    "```markdown",
    "---",
    "name: {{short-kebab-case-slug}}",
    "description: {{one-line summary \u2014 used to decide relevance in future conversations, so be specific}}",
    "metadata:",
    `  type: {{${e.join(", ")}}}`,
    "---",
    "",
    "{{memory content \u2014 for feedback/project types, structure as: rule/fact, then **Why:** and **How to apply:** lines. Link related memories with [[their-name]].}}",
    "```",
    "",
    ...zKr,
  ];
}
var uNd,
  dNd,
  pNd = "memory",
  VKr = (e) => (typeof e === "string" && e.length > 0 ? e : null),
  fNd = (e) => typeof e === "object" && e !== null && !Array.isArray(e),
  mNd = (e) => {
    let t = fNd(e.metadata) ? e.metadata : {},
      n = Object.entries(e).reduce((r, [o, s]) => {
        if (uNd.includes(o) || s == null) return r;
        return ((r[o] = s), r);
      }, {});
    return {
      name: VKr(e.name),
      description: VKr(e.description),
      metadata: Object.freeze({
        ...n,
        ...t,
      }),
    };
  },
  c0n = (e, t) => VKr(e.metadata[t]),
  INi = (e, t) => ({
    ...e,
    metadata: Object.freeze({
      ...e.metadata,
      ...t,
    }),
  }),
  gNd = (e) =>
    dNd.test(e)
      ? e
      : e
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, ""),
  zKr;
