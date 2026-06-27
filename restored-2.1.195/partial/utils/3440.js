// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S4n
// matched 2.1.88 source: src/commands/clear/conversation.ts
// class=partial  jaccard=0.0622  score=0.5852  fileCov=0.0651
// note: low-confidence suggestion: src/commands/clear/conversation.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module S4n] deps: tools/WebFetchTool/prompt.ts, utils/settings/settings.ts
b4n = R(rt(), 1);
function vT(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "local_bash";
}
function clearConversation(e) {
  for (let t of Object.values(e)) {
    if (t.status !== "running") continue;
    try {
      if (vT(t)) t.shellCommand?.kill(), t.shellCommand?.cleanup();else if ("abortController" in t) t.abortController?.abort();
      xf(t.id, "stopped", {
        toolUseId: t.toolUseId,
        summary: t.description
      }), jy(t.id);
    } catch (n) {
      ke(n);
    }
  }
}