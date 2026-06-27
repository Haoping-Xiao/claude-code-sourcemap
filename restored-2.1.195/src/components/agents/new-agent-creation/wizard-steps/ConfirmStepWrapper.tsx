// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DYl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/ConfirmStepWrapper.tsx
// class=modified  jaccard=0.5094  score=0.8309  fileCov=0.5683
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DYl] deps: hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, services/analytics/metadata.ts, tools/FileEditTool/constants.ts, utils/profilerBase.ts, utils/systemPrompt.ts, context/modalContext.tsx, components/StructuredDiff/Fallback.tsx, components/CustomSelect/select.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, @ant/computer-use-mcp/src/toolCalls.ts, vH, skills/bundled/keybindings.ts, components/agents/new-agent-creation/wizard-steps/ConfirmStep.tsx
((RYl = R(lt(), 1)), (Xp = R(se(), 1)));
function ConfirmStepWrapper({ tools: e, existingAgents: t, onComplete: n }) {
  let { wizardData: wizardData } = Eu(),
    [o, s] = JAt.useState(null),
    i = Ho(),
    a = JAt.useCallback(
      async (u) => {
        if (!wizardData?.finalAgent) return;
        try {
          if (
            (await cYl(
              wizardData.location,
              wizardData.finalAgent.agentType,
              wizardData.finalAgent.whenToUse,
              wizardData.finalAgent.tools,
              wizardData.finalAgent.getSystemPrompt(),
              true,
              wizardData.finalAgent.color,
              wizardData.finalAgent.model,
              wizardData.finalAgent.memory,
            ),
            i((p) => {
              if (!wizardData.finalAgent) return p;
              let f = p.agentDefinitions.allAgents.concat(wizardData.finalAgent);
              return {
                ...p,
                agentDefinitions: {
                  ...p.agentDefinitions,
                  activeAgents: YF(f),
                  allAgents: f,
                },
              };
            }),
            u)
          ) {
            let p = o4o({
              source: wizardData.location,
              agentType: wizardData.finalAgent.agentType,
            });
            await yz(p);
          }
          G("tengu_agent_created", {
            agent_type: wizardData.finalAgent.agentType,
            generation_method: wizardData.wasGenerated ? "generated" : "manual",
            source: wizardData.location,
            tool_count: wizardData.finalAgent.tools?.length ?? "all",
            has_custom_model: !!wizardData.finalAgent.model,
            has_custom_color: !!wizardData.finalAgent.color,
            has_memory: !!wizardData.finalAgent.memory,
            memory_scope: wizardData.finalAgent.memory ?? "none",
            ...(u && {
              opened_in_editor: true,
            }),
          });
          let d = u
            ? `Created agent: ${wt.bold(wizardData.finalAgent.agentType)} and opened in editor. If you made edits, restart to load the latest version.`
            : `Created agent: ${wt.bold(wizardData.finalAgent.agentType)}`;
          n(d);
        } catch (d) {
          s(d instanceof Error ? d.message : "Failed to save agent");
        }
      },
      [wizardData, n, i],
    ),
    l = JAt.useCallback(() => a(false), [a]),
    c = JAt.useCallback(() => a(true), [a]);
  return MYl.jsx(LYl, {
    tools: e,
    existingAgents: t,
    onSave: l,
    onSaveAndEdit: c,
    error: o,
  });
}
var JAt, MYl;
