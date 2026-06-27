// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DYl
// matched 2.1.88 source: src/components/agents/new-agent-creation/wizard-steps/ConfirmStepWrapper.tsx
// class=modified  jaccard=0.5094  score=0.8309  fileCov=0.5683
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DYl] deps: Ye, ps, Uh, M7, es, kpe, Cc, lJ, Bs, f_, Ko, wb, vH, VAt, d4o
((RYl = R(lt(), 1)), (Xp = R(se(), 1)));
function PYl({ tools: e, existingAgents: t, onComplete: n }) {
  let { wizardData: r } = Eu(),
    [o, s] = JAt.useState(null),
    i = Ho(),
    a = JAt.useCallback(
      async (u) => {
        if (!r?.finalAgent) return;
        try {
          if (
            (await cYl(
              r.location,
              r.finalAgent.agentType,
              r.finalAgent.whenToUse,
              r.finalAgent.tools,
              r.finalAgent.getSystemPrompt(),
              true,
              r.finalAgent.color,
              r.finalAgent.model,
              r.finalAgent.memory,
            ),
            i((p) => {
              if (!r.finalAgent) return p;
              let f = p.agentDefinitions.allAgents.concat(r.finalAgent);
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
              source: r.location,
              agentType: r.finalAgent.agentType,
            });
            await yz(p);
          }
          G("tengu_agent_created", {
            agent_type: r.finalAgent.agentType,
            generation_method: r.wasGenerated ? "generated" : "manual",
            source: r.location,
            tool_count: r.finalAgent.tools?.length ?? "all",
            has_custom_model: !!r.finalAgent.model,
            has_custom_color: !!r.finalAgent.color,
            has_memory: !!r.finalAgent.memory,
            memory_scope: r.finalAgent.memory ?? "none",
            ...(u && {
              opened_in_editor: true,
            }),
          });
          let d = u
            ? `Created agent: ${wt.bold(r.finalAgent.agentType)} and opened in editor. If you made edits, restart to load the latest version.`
            : `Created agent: ${wt.bold(r.finalAgent.agentType)}`;
          n(d);
        } catch (d) {
          s(d instanceof Error ? d.message : "Failed to save agent");
        }
      },
      [r, n, i],
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
