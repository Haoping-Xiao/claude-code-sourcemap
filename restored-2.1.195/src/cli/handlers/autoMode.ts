// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R5c
// matched 2.1.88 source: src/cli/handlers/autoMode.ts
// class=modified  jaccard=0.217  score=0.4359  fileCov=0.3017
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: autoModeDefaultsHandler, autoModeCritiqueHandler, autoModeConfigHandler
// [unwrapped __esm module R5c] deps: @mixmark-io/domino/lib/Document.js, utils/background/remote/remoteSession.ts, commands/commit-push-pr.ts, env-paths/index.js, dn, services/analytics/growthbook.ts, bridge/bridgeEnabled.ts, utils/semver.ts, tasks/RemoteAgentTask/RemoteAgentTask.tsx, screens/REPL.tsx, utils/errors.ts, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts, utils/agenticSessionSearch.ts, utils/teleport/api.ts, tasks/RemoteAgentTask/RemoteAgentTask.tsx, main.tsx
prn = class prn extends Error {
  reason;
  constructor(e, t) {
    super(t);
    this.reason = e;
    this.name = "PollFailure";
  }
};
a1m = {
  normal: "\uD83D\uDD34",
  nit: "\uD83D\uDFE1",
  pre_existing: "\uD83D\uDFE3",
};
async function L5c(e, t) {
  (e.render(
    pve.jsx(V_, {
      children: pve.jsx(w, {
        children: De(t, null, 2),
      }),
    }),
  ),
    await e.waitUntilExit());
}
async function autoModeDefaultsHandler(e) {
  (xe("cli_auto_mode_defaults"), await L5c(e, V6n()));
}
async function autoModeConfigHandler(e) {
  (xe("cli_auto_mode_config"), await L5c(e, iol(Ohe())));
}
async function autoModeCritiqueHandler(options, t) {
  let n = Ohe();
  if (!(ahr(n?.allow) || ahr(n?.soft_deny) || ahr(n?.hard_deny) || ahr(n?.environment))) {
    (options.render(
      pve.jsx(V_, {
        children: pve.jsx(w, {
          children: `No custom auto mode rules found.

Add rules to your settings file under autoMode.{allow, soft_deny, hard_deny, environment}.
Run \`claude auto-mode defaults\` to see the default rules for reference.`,
        }),
      }),
    ),
      await options.waitUntilExit());
    return;
  }
  let o = t.model ? zo(t.model) : As(),
    defaults = V6n(),
    i = aol(),
    a =
      formatRulesForCritique("allow", n?.allow ?? [], defaults.allow) +
      formatRulesForCritique("soft_deny", n?.soft_deny ?? [], defaults.soft_deny) +
      formatRulesForCritique("hard_deny", n?.hard_deny ?? [], defaults.hard_deny) +
      formatRulesForCritique("environment", n?.environment ?? [], defaults.environment);
  options.render(
    pve.jsxs(w, {
      children: [
        "Analyzing your auto mode rules\u2026",
        `

`,
      ],
    }),
  );
  let l;
  try {
    let u = (
      await yN({
        querySource: "auto_mode_critique",
        model: o,
        system: g1m,
        skipSystemPromptPrefix: true,
        max_tokens: 4096,
        messages: [
          {
            role: "user",
            content:
              `Here is the full classifier system prompt that the auto mode classifier receives:

<classifier_system_prompt>
` +
              i +
              `
</classifier_system_prompt>

Here are the user's custom rules (each section header notes whether they replace or extend the defaults):

` +
              a +
              `
Please critique these custom rules.`,
          },
        ],
      })
    ).content.find((d) => d.type === "text");
    l = u?.type === "text" ? u.text : "No critique was generated. Please try again.";
  } catch (c) {
    return (
      Le("cli_auto_mode_critique", "cli_auto_mode_critique_query_failed"),
      options.unmount(),
      ws("Failed to analyze rules: " + be(c))
    );
  }
  (xe("cli_auto_mode_critique"),
    options.render(
      pve.jsx(V_, {
        children: pve.jsx(w, {
          children: l,
        }),
      }),
    ),
    await options.waitUntilExit());
}
function ahr(e) {
  return (e ?? []).some((t) => t !== Syt);
}
function formatRulesForCritique(section, userRules, defaultRules) {
  let r = userRules.filter((a) => a !== Syt);
  if (r.length === 0) return "";
  let o = userRules.length !== r.length,
    s = r.map((a) => "- " + a).join(`
`),
    i = defaultRules.map((a) => "- " + a).join(`
`);
  return (
    "## " +
    section +
    (o
      ? ` (custom rules added alongside the defaults)
`
      : ` (custom rules replacing defaults)
`) +
    `Custom:
` +
    s +
    `

` +
    (o
      ? `Defaults also in effect:
`
      : `Defaults being replaced:
`) +
    i +
    `

`
  );
}
var pve,
  g1m = `You are an expert reviewer of auto mode classifier rules for Claude Code.

Claude Code has an "auto mode" that uses an AI classifier to decide whether tool calls should be auto-approved or require user confirmation. Users can write custom rules in four categories:

- **allow**: Actions the classifier should auto-approve
- **soft_deny**: Destructive/irreversible actions the classifier should block unless clear user intent authorizes them
- **hard_deny**: Security-boundary actions the classifier should block unconditionally (user intent does not clear these)
- **environment**: Context about the user's setup that helps the classifier make decisions

Your job is to critique the user's custom rules for clarity, completeness, and potential issues. The classifier is an LLM that reads these rules as part of its system prompt.

For each rule, evaluate:
1. **Clarity**: Is the rule unambiguous? Could the classifier misinterpret it?
2. **Completeness**: Are there gaps or edge cases the rule doesn't cover?
3. **Conflicts**: Do any of the rules conflict with each other?
4. **Actionability**: Is the rule specific enough for the classifier to act on?

Be concise and constructive. Only comment on rules that could be improved. If all rules look good, say so.`;
