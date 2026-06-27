// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kxl
// matched 2.1.88 source: src/query/config.ts
// class=modified  jaccard=0.4528  score=1  fileCov=0.4528
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kxl] deps: services/analytics/index.ts, services/autoDream/config.ts, vendor/image-processor-src/index.ts, services/analytics/metadata.ts, dn, utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts, utils/ShellCommand.ts, services/mockRateLimits.ts, tools/SyntheticOutputTool/SyntheticOutputTool.ts, services/PromptSuggestion/speculation.ts, utils/headlessProfiler.ts, utils/debug.ts, utils/errors.ts, utils/hooks/registerSkillHooks.ts, utils/worktree.ts, utils/messages.ts, fast-xml-parser/lib/fxp.cjs, utils/tasks.ts, utils/concurrentSessions.ts, services/analytics/index.ts, constants/systemPromptSections.ts, utils/claudeInChrome/common.ts, services/autoDream/autoDream.ts, services/PromptSuggestion/promptSuggestion.ts, utils/concurrentSessions.ts, Il, @anthropic-ai/sdk/internal/utils/uuid.mjs, cli/print.ts
((Gvf = (VKt(), ro(NQn))),
  (XPo = (KQn(), ro(zQn))),
  (rYt = (gjn(), ro(rgo))),
  (vxl = (l3(), ro(CQ))),
  (Bze = (f4(), ro(URe))));
function Dxl() {
  return {
    sessionId: Rt(),
    gates: {
      emitToolUseSummaries: ut(process.env.CLAUDE_CODE_EMIT_TOOL_USE_SUMMARIES),
      isAnt: false,
      fastModeEnabled: !ut(process.env.CLAUDE_CODE_DISABLE_FAST_MODE),
    },
  };
}
