// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uwo
// matched 2.1.88 source: src/tools/EnterPlanModeTool/EnterPlanModeTool.ts
// class=modified  jaccard=0.2834  score=0.4074  fileCov=0.4821
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uwo] deps: @modelcontextprotocol/sdk/dist/esm/types.js, services/analytics/index.ts, services/mockRateLimits.ts, Il, utils/permissions/shellRuleMatching.ts, utils/markdownConfigLoader.ts, tools/AskUserQuestionTool/prompt.ts, tools/ExitPlanModeTool/ExitPlanModeV2Tool.ts, ink/components/Box.tsx, nrl
((Ptf = ve(() => H.strictObject({}))),
  (Mtf = ve(() =>
    H.object({
      message: H.string().describe("Confirmation that plan mode was entered"),
    }),
  )),
  (v6n = ti({
    name: xX,
    searchHint: "switch to plan mode to design an approach before coding",
    maxResultSizeChars: 100000 /* 1e5 */,
    async description() {
      return "Requests permission to enter plan mode for complex tasks requiring exploration and design";
    },
    async prompt() {
      return Jnl();
    },
    get inputSchema() {
      return Ptf();
    },
    get outputSchema() {
      return Mtf();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: true,
    isEnabled() {
      return EP.isEnabled();
    },
    isConcurrencySafe() {
      return true;
    },
    isReadOnly() {
      return true;
    },
    renderToolUseMessage: Znl,
    renderToolResultMessage: erl,
    renderToolUseRejectedMessage: trl,
    async call(e, t) {
      if (t.agentId) throw Error("EnterPlanMode tool cannot be used in agent contexts");
      return (
        Lge(Fr(t).mode, "plan"),
        t.setToolPermissionContext((n) =>
          My(myt(n), {
            type: "setMode",
            mode: "plan",
            destination: "session",
          }),
        ),
        {
          data: {
            message:
              "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach.",
          },
        }
      );
    },
    mapToolResultToToolResultBlockParam({ message: e }, t) {
      return {
        type: "tool_result",
        content: `${e}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use ${mf} if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ${Xx} to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
        tool_use_id: t,
      };
    },
  })));
function srl(e) {
  let t = e.split("/");
  if (t[0] !== ".claude" || t.length < 3) return null;
  switch (t[1]) {
    case "skills":
      if (t.length === 4 && t[3] === "SKILL.md")
        return {
          kind: "skill",
          name: t[2],
        };
      return null;
    case "commands": {
      let n = t.at(-1);
      if (!n.endsWith(".md")) return null;
      if (/^skill\.md$/i.test(n))
        return t.length < 4
          ? null
          : {
              kind: "command",
              name: t.slice(2, -1).join(":"),
            };
      return {
        kind: "command",
        name: t.slice(2).join(":").slice(0, -3),
      };
    }
    default:
      return null;
  }
}
function o8t(e, t) {
  if (e !== "projectSettings" || !at("tengu_tussock_oriole", false)) return null;
  return irl?.find((n) => !n.byCurrentUser && n.name === t)?.author || null;
}
function arl() {
  if (cW()) dwo().catch(() => {});
  if (!at("tengu_tussock_oriole", false)) return false;
  return Lg().hasUnseenTeamArtifacts === true;
}
async function lrl() {
  let e = await dwo();
  if (e.length === 0) return [];
  let t = new Set(Lg().seenTeamArtifactPaths ?? []);
  return e.filter((n) => !n.byCurrentUser && !t.has(n.path));
}
async function crl() {
  let t = (await dwo()).filter((r) => !r.byCurrentUser).map((r) => r.path),
    n = new Set(t);
  pH((r) => {
    let o = r.seenTeamArtifactPaths ?? [],
      s = [...o.filter((a) => !n.has(a)), ...t].slice(-orl);
    if (
      s.length === o.length &&
      s.every((a, l) => a === o[l]) &&
      r.hasUnseenTeamArtifacts === false
    )
      return r;
    return {
      ...r,
      seenTeamArtifactPaths: s,
      hasUnseenTeamArtifacts: false,
    };
  });
}
function url(e) {
  let t = {
    skill: 0,
    command: 0,
  };
  for (let n of e) t[n.kind]++;
  (xe("tips_team_artifact_show"),
    G("tengu_team_artifact_tip_shown", {
      skill_count: t.skill,
      command_count: t.command,
      overflow_count: Math.max(0, e.length - rrl),
    }));
}
function L8e(e, t) {
  if (e !== "projectSettings") return {};
  return {
    via_team_tip: (Lg().seenTeamArtifactPaths ?? []).some((r) => srl(r)?.name === t),
  };
}
function drl(e) {
  let t = e.filter((i) => !i.byCurrentUser);
  if (t.length === 0) return "";
  let n = t.slice(0, rrl),
    r = n.map((i) => `/${i.name} (${i.author || "a teammate"})`),
    o = r.length === 1 ? r[0] : `${r.slice(0, -1).join(", ")} and ${r.at(-1)}`,
    s = t.length - n.length;
  return `New from your team: ${o}${s > 0 ? `, plus ${s} more` : ""}`;
}
var $tf,
  rrl = 3,
  orl = 100,
  dwo,
  irl;
