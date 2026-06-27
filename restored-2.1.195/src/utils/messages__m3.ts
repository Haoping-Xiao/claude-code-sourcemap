// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MEl
// matched 2.1.88 source: src/utils/messages.ts
// class=modified (alt of src/utils/messages.ts)  jaccard=0.0097  score=0.7227  fileCov=0.0097
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function buildMessageLookups(e) {
  if (e.type !== "user") return false;
  let t = e.message?.content;
  if (typeof t === "string") return $El.some((n) => t.startsWith(n));
  if (!Array.isArray(t)) return false;
  return (
    t.length > 0 &&
    t.every((n) => {
      let r =
        n.type === "text"
          ? n.text
          : n.type === "tool_result" && n.is_error === true
            ? n.content
            : void 0;
      return typeof r === "string" && $El.some((o) => r.startsWith(o));
    })
  );
}
var INTERRUPT_MESSAGE = "[Request interrupted by user]",
  INTERRUPT_MESSAGE_FOR_TOOL_USE = "[Request interrupted by user for tool use]",
  CANCEL_MESSAGE =
    "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.",
  $El;
