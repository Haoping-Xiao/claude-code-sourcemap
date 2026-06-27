// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Awo
// matched 2.1.88 source: src/utils/messages.ts
// class=new  jaccard=0.0109  score=0.217  fileCov=0.0113
// note: nearest: src/utils/messages.ts (0.0109); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Awo = E(() => {
  Ewo = ["compact_progress", "sdk_status", "stream_mode"], Ytf = new Set(Ewo);
});
function N8e(e) {
  return Jtf.has(e.type);
}
function Mrl(e) {
  if (N8e(e)) return !0;
  switch (e.type) {
    case "tombstone":
    case "tool_use_summary":
    case "notification":
    case "set_expanded_view":
    case "post_turn_summary":
    case "active_goal":
    case "set_in_progress_tool_use_ids":
    case "conversation_reset":
    case "hint_clears":
    case "interruptible_tool_in_progress":
    case "api_metrics":
    case "os_notification":
    case "open_message_selector":
    case "apply_flag_settings":
    case "command_lifecycle":
    case "refusal_continuation":
      return !0;
    case "user":
    case "assistant":
    case "attachment":
    case "progress":
    case "system":
      return !1;
    default:
      {
        let t = e;
        return !1;
      }
  }
}
var Xtf, Jtf;