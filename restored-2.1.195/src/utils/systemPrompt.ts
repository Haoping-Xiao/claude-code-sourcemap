// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kpe
// matched 2.1.88 source: src/utils/systemPrompt.ts
// class=modified  jaccard=0.2617  score=0.5198  fileCov=0.3452
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kpe] deps: has-flag/index.js, utils/debug.ts, services/teamMemorySync/secretScanner.ts, utils/model/modelOptions.ts, utils/model/bedrock.ts, utils/agentContext.ts, utils/model/model.ts, utils/status.tsx
gF_ = [...hye, "inherit"];
function Rht(e) {
  let t = e.replace(/[^A-Za-z0-9._:/@[\]-]/g, "");
  if (t.length === 0) return "(unrecognized model name)";
  return t.length > 128 ? `${t.slice(0, 128)}\u2026` : t;
}
function moe(e, t) {
  return `Model "${Rht(e)}" is restricted by your organization's settings. Using ${Rht(t)} instead.`;
}
function buildEffectiveSystemPrompt({
  mainThreadAgentDefinition: e,
  toolUseContext: t,
  customSystemPrompt: n,
  defaultSystemPrompt: r,
  appendSystemPrompt: o,
  overrideSystemPrompt: s,
}) {
  if (s) return Sc([s]);
  if (Gv() && !e) {
    let { getCoordinatorSystemPrompt: a } = (l$(), ro(qW));
    return Sc([a(), ...(o ? [o] : [])]);
  }
  let i = e
    ? Sh(e)
      ? e.getSystemPrompt({
          toolUseContext: {
            options: t.options,
          },
        })
      : e.getSystemPrompt()
    : void 0;
  if (e?.memory)
    G("tengu_agent_memory_loaded", {
      ...false,
      scope: $e(e.memory),
      source: We("main-thread"),
    });
  if (i && e?.appendSystemPrompt)
    return Sc([...(typeof n === "string" ? [n] : Array.isArray(n) ? n : r), i, ...(o ? [o] : [])]);
  return Sc([
    ...(i ? [i] : typeof n === "string" ? [n] : Array.isArray(n) ? n : r),
    ...(o ? [o] : []),
  ]);
}
