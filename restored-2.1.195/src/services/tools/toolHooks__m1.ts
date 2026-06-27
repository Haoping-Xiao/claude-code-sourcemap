// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fyl
// matched 2.1.88 source: src/services/tools/toolHooks.ts
// class=modified (alt of src/services/tools/toolHooks.ts)  jaccard=0.0468  score=0.3846  fileCov=0.0506
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Fyl] deps: utils/shell/prefix.ts, services/api/errors.ts, utils/settings/constants.ts, utils/messages.ts, utils/agentContext.ts, utils/fsOperations.ts
Uyl = require("crypto");
function runPostToolUseHooks(toolUseContext, tool, toolUseID, messageId) {
  if (toolUseContext !== ka && toolUseContext !== Wc) return null;
  if (
    typeof toolUseID !== "object" ||
    toolUseID === null ||
    !("file_path" in toolUseID) ||
    typeof toolUseID.file_path !== "string"
  )
    return null;
  try {
    let o = ds(toolUseID.file_path),
      s = messageId.get(o);
    if (!s || s.offset !== void 0 || s.limit !== void 0) return null;
    let i = Fee(o);
    if (i <= s.timestamp) return null;
    let a = Bee(o);
    if (
      (messageId.set(o, {
        content: a.content,
        timestamp: i,
        offset: void 0,
        limit: void 0,
      }),
      Uue(s, a.content))
    )
      return null;
    return (
      T(`PostToolUse hook modified ${o} after ${toolUseContext} \u2014 re-synced readFileState`, {
        level: "info",
      }),
      ai({
        type: "hook_additional_context",
        content: [
          `PostToolUse hook modified ${o} after your edit (likely a formatter). Your next Edit will not fail with a stale-file error, but if its old_string targets a region the hook reformatted, Read the file first.`,
        ],
        hookName: `PostToolUse:${toolUseContext}`,
        toolUseID: tool,
        hookEvent: "PostToolUse",
      })
    );
  } catch {
    return null;
  }
}
