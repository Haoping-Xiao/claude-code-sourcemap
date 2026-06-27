// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BIo
// matched 2.1.88 source: node_modules/zod/v4/classic/schemas.js
// class=new  jaccard=0.0088  score=0.3956  fileCov=0.0089
// note: nearest: node_modules/zod/v4/classic/schemas.js (0.0088); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BIo] deps: axios/lib/axios.js, zod/v4/classic/schemas.js, utils/debug.ts, RE, utils/errors.ts, utils/status.tsx, utils/teleport/api.ts
gaf = ve(() => dt.object({
  url: dt.string().optional().default(""),
  destination_url: dt.string().nullable().optional(),
  title: dt.string().optional().default(""),
  text: dt.string().optional().default(""),
  content_type: dt.string().nullable().optional(),
  error: dt.object({
    error_type: dt.string(),
    error_message: dt.string()
  }).nullable().optional()
}));
function Mcl(e, t) {
  if (_af.has(e)) return true;
  let n = baf.get(e);
  if (n) {
    if (/%(25)*(2f|5c|2e)/i.test(t)) return false;
    for (let r of n) if (t === r || t.startsWith(r + "/")) return true;
  }
  return false;
}
var yaf, _af, baf;