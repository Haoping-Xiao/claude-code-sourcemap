// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uur
// matched 2.1.88 source: src/query.ts
// class=modified (alt of src/query.ts)  jaccard=0.0308  score=0.3483  fileCov=0.0327
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var uur = E(() => {
  xfc = [
    "blocking_limit",
    "rapid_refill_breaker",
    "prompt_too_long",
    "image_error",
    "model_error",
    "aborted_streaming",
    "aborted_tools",
    "stop_hook_prevented",
    "hook_stopped",
    "tool_deferred",
    "max_turns",
    "background_requested",
    "completed",
  ];
});
function kfc(e) {
  return {
    commands: e.commands ?? [],
    agents: e.agents ?? [],
    output_style: e.outputStyle ?? "default",
    available_output_styles: e.availableOutputStyles ?? ["default"],
    models: e.models ?? [],
    ...(e.unavailableModels &&
      e.unavailableModels.length > 0 && {
        unavailable_models: e.unavailableModels,
      }),
    account: e.account ?? {
      apiProvider: "firstParty",
    },
    pid: e.pid ?? process.pid,
  };
}
function dur(e) {
  if (e.length === 0) return;
  return {
    type: "system",
    subtype: "memory_recall",
    mode: "select",
    memories: e.map((t) => ({
      path: t.path,
      scope: mvl(t.path) ?? "personal",
    })),
    uuid: Rfc.randomUUID(),
    session_id: Rt(),
  };
}
var Rfc;
