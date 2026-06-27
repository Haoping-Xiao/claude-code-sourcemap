// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $wc
// matched 2.1.88 source: src/skills/bundled/scheduleRemoteAgents.ts
// class=modified  jaccard=0.2586  score=0.3908  fileCov=0.4333
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: registerScheduleRemoteAgentsSkill
// [unwrapped __esm module $wc] deps: ft, rSe, Un, jc, G1, wX, sre, WW, tSe, Ld, fn, AA
R7e = (KWe(), ro(zWe));
((VEm = /^\d+[smhd]$/),
  (zEm =
    /^every\s+(\d+)\s*(s|sec|secs|second|seconds|m|min|mins|minute|minutes|h|hr|hrs|hour|hours|d|day|days)\s*$/i));
YEm = `Usage: /loop [interval] <prompt>

Run a prompt or slash command on a recurring interval.

Intervals: Ns, Nm, Nh, Nd (e.g. 5m, 30m, 2h, 1d). Minimum granularity is 1 minute.
If no interval is specified, defaults to ${ZTt}.

Examples:
  /loop 5m /babysit-prs
  /loop 30m check the deploy
  /loop 1h /standup 1
  /loop check the deploy          (defaults to ${ZTt})
  /loop check the deploy every 20m`;
var Bwc = {};
function rAm(e) {
  if (!e.startsWith("mcpsrv_")) return null;
  let r = e.slice(7).slice(2),
    o = 0n;
  for (let i of r) {
    let a = nAm.indexOf(i);
    if (a === -1) return null;
    o = o * 58n + BigInt(a);
  }
  let s = o.toString(16).padStart(32, "0");
  return `${s.slice(0, 8)}-${s.slice(8, 12)}-${s.slice(12, 16)}-${s.slice(16, 20)}-${s.slice(20, 32)}`;
}
function oAm(e) {
  let t = [];
  for (let n of e) {
    if (n.type !== "connected") continue;
    if (n.config.type !== "claudeai-proxy") continue;
    let r = rAm(n.config.id);
    if (!r) continue;
    t.push({
      uuid: r,
      name: n.name,
      url: n.config.url,
    });
  }
  return t;
}
function sAm(e) {
  return e
    .replace(/^claude[.\s-]ai[.\s-]/i, "")
    .replace(/[^a-zA-Z0-9_-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
function iAm(e) {
  if (e.length === 0)
    return "No connected MCP connectors found. The user may need to connect servers at https://claude.ai/customize/connectors";
  let t = ["Connected connectors (available for routines):"];
  for (let n of e) {
    let r = sAm(n.name);
    t.push(`- ${n.name} (connector_uuid: ${n.uuid}, name: ${r}, url: ${n.url})`);
  }
  return t.join(`
`);
}
function Nwc(e) {
  return `\u26A0 Heads-up:
${e.map((n) => `- ${n}`).join(`
`)}`;
}
async function aAm() {
  let e = await gY();
  if (!e) return null;
  let t = Dae(e);
  if (!t) return null;
  return `https://${t.host}/${t.owner}/${t.name}`;
}
function lAm(e) {
  let {
      userTimezone: t,
      nowUtcIso: n,
      nowLocal: r,
      oneOffEnabled: o,
      connectorsInfo: s,
      gitRepoUrl: i,
      environmentsInfo: a,
      createdEnvironment: l,
      setupNotes: c,
      needsGitHubAccessReminder: u,
      userArgs: d,
    } = e,
    p =
      d && c.length > 0
        ? `
## Setup Notes

${Nwc(c)}
`
        : "",
    f =
      c.length > 0
        ? `${Nwc(c)}

${Owc}`
        : Owc,
    m = d
      ? "The user has already told you what they want (see User Request at the bottom). Skip the initial question and go directly to the matching workflow."
      : `Your FIRST action must be a single ${mf} tool call (no preamble). Use this EXACT string for the \`question\` field \u2014 do not paraphrase or shorten it:

${De(f)}

Set \`header: "Action"\` and offer the four actions (create/list/update/run) as options. After the user picks, follow the matching workflow below.`;
  return `# Schedule Cloud Agents

You are helping the user schedule, update, list, or run **cloud** Claude Code agents. These are NOT local cron jobs \u2014 each routine spawns a fully isolated cloud session (CCR) in Anthropic's cloud infrastructure${o ? ", either on a recurring cron schedule or once at a specific time" : " on a recurring cron schedule"}. The agent runs in a sandboxed environment with its own git checkout, tools, and optional MCP connections.

## First Step

${m}
${p}

## What You Can Do

Use the \`${eze}\` tool (load it first with \`ToolSearch select:${eze}\`; auth is handled in-process \u2014 do not use curl):

- \`{action: "list"}\` \u2014 list all routines
- \`{action: "get", trigger_id: "..."}\` \u2014 fetch one routine
- \`{action: "create", body: {...}}\` \u2014 create a routine
- \`{action: "update", trigger_id: "...", body: {...}}\` \u2014 partial update
- \`{action: "run", trigger_id: "..."}\` \u2014 run a routine now

(Note: the API uses \`trigger_id\` as the parameter name, but the user-facing term is "routine".)

You CANNOT delete routines. If the user asks to delete, direct them to: https://claude.ai/code/routines

## Create body shape

For a recurring schedule:

\`\`\`json
{
  "name": "AGENT_NAME",
  "cron_expression": "CRON_EXPR",
  "enabled": true,
  "job_config": {
    "ccr": {
      "environment_id": "ENVIRONMENT_ID",
      "session_context": {
        "model": "claude-sonnet-4-6",
        "sources": [
          {"git_repository": {"url": "${i || "https://github.com/ORG/REPO"}"}}
        ],
        "allowed_tools": ["Bash", "Read", "Write", "Edit", "Glob", "Grep"]
      },
      "events": [
        {"data": {
          "uuid": "<lowercase v4 uuid>",
          "session_id": "",
          "type": "user",
          "parent_tool_use_id": null,
          "message": {"content": "PROMPT_HERE", "role": "user"}
        }}
      ]
    }
  }
}
\`\`\`

${o ? 'For a one-time run, replace `"cron_expression": "CRON_EXPR"` with `"run_once_at": "YYYY-MM-DDTHH:MM:SSZ"` (RFC3339 UTC, must be in the future). Everything else is identical.\n\n' : ""}Generate a fresh lowercase UUID for \`events[].data.uuid\` yourself.

## Available MCP Connectors

These are the user's currently connected claude.ai MCP connectors:

${s}

When attaching connectors to a routine, use the \`connector_uuid\` and \`name\` shown above (the name is already sanitized to only contain letters, numbers, hyphens, and underscores), and the connector's URL. The \`name\` field in \`mcp_connections\` must only contain \`[a-zA-Z0-9_-]\` \u2014 dots and spaces are NOT allowed.

**Important:** Infer what services the agent needs from the user's description. For example, if they say "check Datadog and Slack me errors," the agent needs both Datadog and Slack connectors. Cross-reference against the list above and warn if any required service isn't connected. If a needed connector is missing, direct the user to https://claude.ai/customize/connectors to connect it first.

## Environments

Every routine requires an \`environment_id\` in the job config. This determines where the cloud agent runs. Ask the user which environment to use.

${a}

Use the \`id\` value as the \`environment_id\` in \`job_config.ccr.environment_id\`.
${
  l
    ? `
**Note:** A new environment \`${l.name}\` (id: \`${l.environment_id}\`) was just created for the user because they had none. Use this id for \`job_config.ccr.environment_id\` and mention the creation when you confirm the routine config.
`
    : ""
}

## API Field Reference

### Create Routine \u2014 Required Fields
- \`name\` (string) \u2014 A descriptive name
${o ? "- Exactly ONE of:\n  - `cron_expression` (string) \u2014 5-field cron in UTC. **Minimum interval is 1 hour.**\n  - `run_once_at` (string) \u2014 RFC3339 UTC timestamp. Must be in the future. Fires once, then auto-disables." : "- `cron_expression` (string) \u2014 5-field cron in UTC. **Minimum interval is 1 hour.**"}
- \`job_config\` (object) \u2014 Session configuration (see structure above)

### Create Routine \u2014 Optional Fields
- \`enabled\` (boolean, default: true)
- \`mcp_connections\` (array) \u2014 MCP servers to attach:
  \`\`\`json
  [{"connector_uuid": "uuid", "name": "server-name", "url": "https://..."}]
  \`\`\`

### Update Routine \u2014 Optional Fields
All fields optional (partial update):
- \`name\`, \`cron_expression\`${o ? ", `run_once_at`" : ""}, \`enabled\`, \`job_config\`
- \`mcp_connections\` \u2014 Replace MCP connections
- \`clear_mcp_connections\` (boolean) \u2014 Remove all MCP connections

### Cron Expression Examples

The user's local timezone is **${t}**. Cron expressions${o ? " and `run_once_at` timestamps" : ""} are always in UTC. When the user says a local time, convert it to UTC but confirm with them: "9am ${t} = Xam UTC, so the cron would be \`0 X * * 1-5\`."${o ? ' For one-time runs, the same conversion applies \u2014 "run this at 3pm" \u2192 `"run_once_at": "YYYY-MM-DDTHH:00:00Z"` with their 3pm converted to UTC.' : ""}

- \`0 9 * * 1-5\` \u2014 Every weekday at 9am **UTC**
- \`0 */2 * * *\` \u2014 Every 2 hours
- \`0 0 * * *\` \u2014 Daily at midnight **UTC**
- \`30 14 * * 1\` \u2014 Every Monday at 2:30pm **UTC**
- \`0 8 1 * *\` \u2014 First of every month at 8am **UTC**

Minimum interval is 1 hour. \`*/30 * * * *\` will be rejected.
${
  o
    ? `
### Current Time (for one-off runs)

When /schedule was invoked it was **${r}** (${t}) / **${n}** UTC. Treat this as an approximate anchor only \u2014 the conversation may have been running for a while since then.

**Before computing any \`run_once_at\` value, you MUST re-check the current time** by running \`date -u +%Y-%m-%dT%H:%M:%SZ\` via the Bash tool. Do not guess or infer today's date from conversation context. Resolve relative requests ("tomorrow at 9am", "in 3 hours", "next Monday") against the freshly fetched time, then echo the resolved local time AND the UTC timestamp back to the user for confirmation before creating the routine. If the resolved time is already in the past, ask the user to clarify rather than silently rolling forward.
`
    : ""
}
## Workflow

### CREATE a new routine:

1. **Understand the goal** \u2014 Ask what they want the cloud agent to do. What repo(s)? What task? Remind them that the agent runs in the cloud \u2014 it won't have access to their local machine, local files, or local environment variables.
2. **Craft the prompt** \u2014 Help them write an effective agent prompt. Good prompts are:
   - Specific about what to do and what success looks like
   - Clear about which files/areas to focus on
   - Explicit about what actions to take (open PRs, commit, just analyze, etc.)
3. **Set the schedule** \u2014 Ask when and how often. The user's timezone is ${t}. When they say a time (e.g., "every morning at 9am"), assume they mean their local time and convert to UTC for the cron expression. Always confirm the conversion: "9am ${t} = Xam UTC."${o ? ' If they want a one-time run (e.g., "once at 3pm", "tomorrow morning", "remind me to check X later"), use `run_once_at` instead of `cron_expression` \u2014 same timezone conversion applies. **First re-check the current time with `date -u` via Bash** (the reference time above may be stale in a long conversation), resolve the relative phrase against that fresh value, and confirm the resulting absolute timestamp with the user.' : ""}
4. **Choose the model** \u2014 Default to \`claude-sonnet-4-6\`. Tell the user which model you're defaulting to and ask if they want a different one.
5. **Validate connections** \u2014 Infer what services the agent will need from the user's description. For example, if they say "check Datadog and Slack me errors," the agent needs both Datadog and Slack MCP connectors. Cross-reference with the connectors list above. If any are missing, warn the user and link them to https://claude.ai/customize/connectors to connect first.${i ? ` The default git repo is already set to \`${i}\`. Ask the user if this is the right repo or if they need a different one.` : " Ask which git repos the cloud agent needs cloned into its environment."}
6. **Review and confirm** \u2014 Show the full configuration before creating. Let them adjust.
7. **Create it** \u2014 Call \`${eze}\` with \`action: "create"\` and show the result. The response includes the routine ID. Always output a link at the end: \`https://claude.ai/code/routines/{ROUTINE_ID}\`

### UPDATE a routine:

1. List routines first so they can pick one
2. Ask what they want to change
3. Show current vs proposed value
4. Confirm and update

### LIST routines:

1. Fetch and display in a readable format
2. Show: name, schedule (human-readable), enabled/disabled, next run, repo(s)

### RUN NOW:

1. List routines if they haven't specified which one
2. Confirm which routine
3. Execute and confirm

## Important Notes

- These are CLOUD agents \u2014 they run in Anthropic's cloud, not on the user's machine. They cannot access local files, local services, or local environment variables.
- Always convert cron to human-readable when displaying
${o ? '- When listing routines, `ended_reason: "run_once_fired"` means a one-shot already ran (shows as "Ran" in the web UI). The user can re-arm it by updating with a new `run_once_at`.\n' : ""}- Default to \`enabled: true\` unless user says otherwise
- Accept GitHub URLs in any format (https://github.com/org/repo, org/repo, etc.) and normalize to the full HTTPS URL (without .git suffix)
- The prompt is the most important part \u2014 spend time getting it right. The cloud agent starts with zero context, so the prompt must be self-contained.
- To delete a routine, direct users to https://claude.ai/code/routines
${u ? `- If the user's request seems to require GitHub repo access (e.g. cloning a repo, opening PRs, reading code), remind them that ${at("tengu_cobalt_lantern", false) && Us("allow_quick_web_setup") ? "they should run /web-setup to connect their GitHub account (or install the Claude GitHub App on the repo as an alternative) \u2014 otherwise the cloud agent won't be able to access it" : "they need the Claude GitHub App installed on the repo \u2014 otherwise the cloud agent won't be able to access it"}.` : ""}
${
  d
    ? `
## User Request

The user said: "${d}"

Start by understanding their intent and working through the appropriate workflow above.`
    : ""
}`;
}
function registerScheduleRemoteAgentsSkill() {
  Nd({
    name: "schedule",
    menuDescription: "Create and manage routines: cloud agents on a schedule",
    aliases: ["routines"],
    description:
      "Create, update, list, or run scheduled cloud agents (routines) that execute on a cron schedule.",
    whenToUse: () => {
      if (at("tengu_orchid_mantis", false))
        return 'When the user wants to schedule a recurring or one-time cloud agent ("run this every Monday", "open a cleanup PR for X in 2 weeks"), or to manage existing routines.';
      return `When the user wants to schedule a recurring cloud agent, set up automated tasks, create a cron job for Claude Code, or manage their scheduled agents/routines.${at("tengu_mocha_barista", false) ? ' Also use when the user wants a one-time scheduled run ("run this once at 3pm", "remind me to check X tomorrow").' : ""}`;
    },
    userInvocable: true,
    isEnabled: () =>
      Jl() &&
      bo() &&
      !ut(process.env.CLAUDE_CODE_REMOTE) &&
      at("tengu_surreal_dali", false) &&
      Us("allow_remote_sessions"),
    allowedTools: [eze, mf, "Bash(date *)"],
    async getPromptForCommand(e, t) {
      if (!WE())
        return [
          {
            type: "text",
            text: "You need to authenticate with a claude.ai account first. API accounts are not supported. Run /login, then try /schedule again.",
          },
        ];
      let n;
      try {
        n = await Ure();
      } catch (b) {
        return (
          T(`[schedule] Failed to fetch environments: ${b}`, {
            level: "warn",
          }),
          [
            {
              type: "text",
              text: "We're having trouble connecting with your remote claude.ai account to set up a scheduled task. Please try /schedule again in a few minutes.",
            },
          ]
        );
      }
      let r = null;
      if (n.length === 0)
        try {
          ((r = await yft()), (n = [r]));
        } catch (b) {
          return (
            T(`[schedule] Failed to create environment: ${b}`, {
              level: "warn",
            }),
            [
              {
                type: "text",
                text: "No remote environments found, and we could not create one automatically. Visit https://claude.ai/code to set one up, then run /schedule again.",
              },
            ]
          );
        }
      let o = [],
        s = false,
        i = await $O();
      if (i === null)
        o.push(
          "Not in a git repo \u2014 you'll need to specify a repo URL manually (or skip repos entirely).",
        );
      else if ($m(i.host)) {
        let { hasAccess: b } = await LOa(i.owner, i.name);
        if (!b) {
          s = true;
          let S =
            at("tengu_cobalt_lantern", false) && Us("allow_quick_web_setup")
              ? `GitHub not connected for ${i.owner}/${i.name} \u2014 run /web-setup to sync your GitHub credentials, or install the Claude GitHub App at https://claude.ai/code/onboarding?magic=github-app-setup.`
              : `Claude GitHub App not installed on ${i.owner}/${i.name} \u2014 install at https://claude.ai/code/onboarding?magic=github-app-setup if your routine needs this repo.`;
          o.push(S);
        }
      }
      let a = oAm(t.options.mcpClients);
      if (a.length === 0)
        o.push(
          "No MCP connectors \u2014 connect at https://claude.ai/customize/connectors if needed.",
        );
      let l = Intl.DateTimeFormat().resolvedOptions().timeZone,
        c = new Date(),
        u = c.toISOString(),
        d = c.toLocaleString("en-US", {
          timeZone: l,
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        p = at("tengu_mocha_barista", false),
        f = iAm(a),
        m = await aAm(),
        g = ["Available environments:"];
      for (let b of n) g.push(`- ${b.name} (id: ${b.environment_id}, kind: ${b.kind})`);
      let h = g.join(`
`);
      return [
        {
          type: "text",
          text: lAm({
            userTimezone: l,
            nowUtcIso: u,
            nowLocal: d,
            oneOffEnabled: p,
            connectorsInfo: f,
            gitRepoUrl: m,
            environmentsInfo: h,
            createdEnvironment: r,
            setupNotes: o,
            needsGitHubAccessReminder: s,
            userArgs: e,
          }),
        },
      ];
    },
  });
}
var nAm = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  Owc = "What would you like to do with scheduled cloud agents?";
