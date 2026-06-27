// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fyl
// matched 2.1.88 source: src/services/tools/toolHooks.ts
// class=modified (alt of src/services/tools/toolHooks.ts)  jaccard=0.0468  score=0.3846  fileCov=0.0506
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Fyl] deps: ZE, tP, Rd, co, Ao, Jt
Uyl = require("crypto");
function Z7n(e, t, n, r) {
  if (e !== ka && e !== Wc) return null;
  if (typeof n !== "object" || n === null || !("file_path" in n) || typeof n.file_path !== "string")
    return null;
  try {
    let o = ds(n.file_path),
      s = r.get(o);
    if (!s || s.offset !== void 0 || s.limit !== void 0) return null;
    let i = Fee(o);
    if (i <= s.timestamp) return null;
    let a = Bee(o);
    if (
      (r.set(o, {
        content: a.content,
        timestamp: i,
        offset: void 0,
        limit: void 0,
      }),
      Uue(s, a.content))
    )
      return null;
    return (
      T(`PostToolUse hook modified ${o} after ${e} \u2014 re-synced readFileState`, {
        level: "info",
      }),
      ai({
        type: "hook_additional_context",
        content: [
          `PostToolUse hook modified ${o} after your edit (likely a formatter). Your next Edit will not fail with a stale-file error, but if its old_string targets a region the hook reformatted, Read the file first.`,
        ],
        hookName: `PostToolUse:${e}`,
        toolUseID: t,
        hookEvent: "PostToolUse",
      })
    );
  } catch {
    return null;
  }
}
