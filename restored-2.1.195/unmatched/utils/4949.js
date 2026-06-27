// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s9l
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0083  score=0.2918  fileCov=0.0084
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0083); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module s9l] deps: zod/v4/classic/schemas.js, utils/debug.ts, utils/fsOperations.ts, dn, services/mcp/officialRegistry.ts
r9l = ve(() => dt.object({
  action: dt.enum(["proceed", "confirm", "blocked"]),
  billing_note: dt.string().nullable().optional(),
  confirm: dt.object({
    title: dt.string().optional(),
    body: dt.string()
  }).nullable().optional(),
  blocked: dt.object({
    message: dt.string(),
    action_url: dt.string().nullable(),
    reason: dt.string().optional()
  }).nullable().optional()
}));
function Kor(e, t) {
  let n = e.trim(),
    r = n.split(/\s+/, 1)[0] ?? "",
    o = new Set(),
    s = n;
  for (let i of t) {
    let a = s.replace(new RegExp(`(?:^|\\s)--${wx(i)}(?=\\s|$)`, "g"), "");
    if (a !== s) o.add(i), s = a.trim();
  }
  return {
    rawFirstToken: r,
    flags: o,
    rest: s
  };
}