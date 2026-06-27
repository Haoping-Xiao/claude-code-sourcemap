// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wHo
// matched 2.1.88 source: src/utils/permissions/yoloClassifier.ts
// class=new  jaccard=0.0048  score=0.0083  fileCov=0.0113
// note: nearest: src/utils/permissions/yoloClassifier.ts (0.0048); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wHo = E(() => {
  SC();
  lH();
  fh();
  u_();
  nC();
  WW();
  TX();
  HU();
  oo();
  fn();
  sF();
  Jt();
  Un();
  DXa = require("path");
  M9n = [{
    id: "mcp-discovery",
    situation: `User pastes data from external systems into the conversation \u2014 database output, API responses, Slack messages, error logs from monitoring tools, issue tracker content. They are manually bridging Claude and an external service. Also matches when Claude says it cannot access something ("I don't have access to your database/Slack/Jira") and the user has to provide the data manually. IMPORTANT: Do NOT match this when the user pastes code for review or refactoring \u2014 that is normal Claude Code usage.`,
    feature: "MCP connects Claude directly to databases, APIs, Slack, GitHub, Sentry, and other services.",
    action: "/mcp",
    when: e => e.mcpClients.length === 0
  }, {
    id: "mcp-expand",
    situation: "User already has MCP servers configured (see mcpServers in session_metadata) but is manually pasting data from a source those servers do not cover. They know MCP exists \u2014 they may not know it covers this service too.",
    feature: "You can add more MCP servers for services your current ones do not cover.",
    action: "/mcp",
    when: e => e.mcpClients.length >= 1
  }, {
    id: "mcp-cli-login",
    situation: 'An MCP server that needs authentication is failing \u2014 Claude or the MCP status shows it as unauthenticated / needs login / token expired \u2014 and the user is working over SSH or otherwise cannot complete the browser OAuth flow from this terminal. They may have tried /mcp and hit "could not open browser", or mention they are on a remote box. IMPORTANT: Do NOT match MCP errors unrelated to auth (server not found, bad config), or when the user is on a local desktop where the /mcp browser flow works.',
    feature: "`claude mcp login <name>` authenticates an MCP server from the CLI \u2014 add --no-browser to paste the callback URL manually over SSH.",
    action: "claude mcp login <name> --no-browser",
    when: e => !TF() && e.mcpClients.length >= 1
  }, {
    id: "web-docs-paste",
    situation: "User pastes a chunk of API documentation, a README, or a Stack Overflow answer from the web. The pasted content looks like prose documentation, usage examples, or Q&A-style text rather than their own project code. IMPORTANT: Do NOT match when the user pastes their own source code, local files, or terminal output.",
    feature: "Claude can fetch pages directly \u2014 just share the URL.",
    action: "Paste the URL instead of the page contents",
    when: e => e.toolNames.has(Sb)
  }, {
    id: "exploration-without-planning",
    situation: 'User asks Claude to "plan" a change or explore before editing, or Claude has read 10+ files understanding the codebase with no edits yet \u2014 and the user is not in plan mode.',
    feature: "Plan Mode lets Claude explore and analyze freely in read-only mode, then presents a plan for approval.",
    action: "Shift+Tab (cycle to Plan Mode)",
    when: e => e.permissionMode !== "plan" && !e.hasUsedPlanMode
  }, {
    id: "permission-fatigue",
    situation: "Claude has run many similar bash commands (npm/bun test, lint, build, etc.). Many sequential tool calls suggest manual approval of each one.",
    feature: "Permission rules let you auto-approve commands matching patterns you trust. Auto mode uses AI to approve safe operations.",
    action: "/permissions or Shift+Tab to auto mode",
    when: e => e.permissionMode === "default" || e.permissionMode === "acceptEdits"
  }, {
    id: "permission-param-match",
    situation: 'User has denied (or chosen "ask every time" for) the same tool-call pattern more than once while approving other calls of the same tool \u2014 e.g., rejecting Agent whenever it requests a specific model, or Bash whenever it wants to run in the background. They are manually filtering on a parameter value each time the prompt appears. IMPORTANT: Do NOT match a single one-off denial, or blanket denial of a tool regardless of parameters.',
    feature: "Deny and ask rules can match a tool input parameter \u2014 e.g., deny Agent(model:opus) or ask Bash(run_in_background:true) \u2014 so that specific pattern is auto-handled without prompting each time.",
    action: "/permissions, then add a Tool(param:value) deny or ask rule",
    when: e => e.permissionMode === "default" || e.permissionMode === "acceptEdits"
  }, {
    id: "undo-changes",
    situation: 'User expresses regret about changes Claude made. "That broke things," "undo that," "go back to before," or asking Claude to revert manually.',
    feature: "Claude automatically checkpoints every edit. You can restore conversation, code, or both to any previous state.",
    action: "Press Esc twice or type /rewind",
    when: vHo
  }, {
    id: "diff-request",
    situation: 'User asks "what did you change?", "show me the diff", "which files did you touch?", or "summarize your edits" after Claude has made edits. They want a summary of changes without scrolling back through the transcript.',
    feature: "/diff shows all uncommitted changes and per-turn diffs at a glance.",
    action: "/diff",
    when: e => XPe(e, ka, Wc, RI)
  }, {
    id: "correction-spiral",
    situation: 'User has corrected Claude multiple times in the current exchange. "No not like that," reverts, restarts, going back and forth without converging.',
    feature: "Starting fresh with a focused prompt is usually faster than correcting mid-stream when the conversation has gone off track.",
    action: "/clear",
    when: vHo
  }, {
    id: "image-description-friction",
    situation: 'User describes a visual problem in prose \u2014 "the button is misaligned", "the spacing looks off", "colors are wrong on dark mode", "this layout is broken" \u2014 without attaching an image. They are describing what something looks like rather than showing it, forcing Claude to guess at the actual appearance.',
    feature: "Claude reads images directly. A screenshot is worth a paragraph of description.",
    action: "Drag an image into the terminal or Ctrl+V to paste a screenshot",
    when: e => !K7p(e)
  }, {
    id: "long-running-wait",
    situation: "A test suite, build, or deployment just ran and took a long time. Bash command followed by extensive output, suggesting the user had to wait.",
    feature: "Long-running commands can be backgrounded so you can keep working while they run.",
    action: "Ctrl+B (next time a long command starts)",
    when: e => !e.hasUsedBackgroundTask && XPe(e, Co, Ss)
  }, {
    id: "context-filling-up",
    situation: "The transcript is very long (many turns). Claude has read many files. The user mentions Claude forgetting something from earlier. turnCount in session metadata is high.",
    feature: "Compact keeps what matters and frees context. Clear starts completely fresh. Subagents can investigate without consuming main context.",
    action: "/compact or /clear",
    when: e => P9n(e) > 15
  }, {
    id: "code-review-before-ship",
    situation: `User is wrapping up a coding task after Claude made substantial edits. They mention committing, pushing, creating a PR, "looks good let's ship", "I think we're done", or ask Claude to commit the changes. The implementation work is finished and they are about to finalize.`,
    feature: "/code-review runs three review agents on your changes \u2014 reuse, quality, efficiency \u2014 and fixes what they find before you commit.",
    action: "/code-review",
    when: e => !e.hasUsedCodeReview && vHo(e)
  }, {
    id: "manual-polling",
    situation: 'User has asked Claude to check the same status multiple times across recent turns \u2014 "is the deploy done?", "check CI again", "any update on the build?", "check once more". They are manually polling. Also matches when the user says "keep checking until X" or "check every few minutes" and Claude ran the check just once \u2014 Claude cannot poll on its own without /loop. IMPORTANT: Do NOT match a single status check, or checks Claude runs as part of a larger task it is driving (e.g., running tests while implementing a feature).',
    feature: "/loop runs any prompt or slash command on a recurring schedule \u2014 set it once and Claude keeps checking.",
    action: "/loop 5m <check>",
    when: () => !TF() && a$()
  }, {
    id: "goal-iterate-until",
    situation: `User says "keep going until X", "don't stop until X", "continue until X", or "loop until X" \u2014 they want Claude to persist toward a stated end-state. Also matches when the user has typed "continue" or "keep going" two or more times in the current exchange to nudge Claude past where it stopped. The distinguishing signal is iteration toward a *condition*, not polling a status (that is manual-polling).`,
    feature: "/goal sets an objective \u2014 Claude checks it after every response and keeps working until it's met.",
    action: "/goal <condition>",
    when: e => !e.hasActiveGoal && !e.areAllHooksDisabled
  }, {
    id: "remote-scheduling",
    situation: 'User describes wanting a task to run on a recurring schedule even when they are not at their machine \u2014 "every morning email me a summary", "check CI every day at 9am and open a PR if X", "overnight while I sleep", "run this weekly", "while I am away". The distinguishing signal is the task should keep running without keeping Claude open locally. IMPORTANT: Do NOT match when the user wants a recurring check only during this session (/loop handles that), or a single one-off reminder.',
    feature: "/schedule creates cloud agents that run on a cron schedule \u2014 they keep running after you close the terminal, can open PRs, and can reach connected services.",
    action: "/schedule",
    when: e => !ut(process.env.CLAUDE_CODE_REMOTE) && e.remoteSessionsAllowed && bo() && at("tengu_surreal_dali", !1)
  }, {
    id: "hooks-automation",
    situation: 'User asks Claude to "always run lint after editing", "before committing always do X", "every time you edit a test, also run it" \u2014 automation patterns phrased as standing instructions. The user is teaching Claude a rule to follow on every matching tool event rather than asking for a one-off action.',
    feature: "Hooks run commands automatically on tool events \u2014 no need to remind Claude each time.",
    action: "/hooks",
    when: e => !e.hasConfiguredHooks
  }, {
    id: "config-key-value",
    situation: "User opens the /config panel (or asks how to change a setting) for a panel setting \u2014 model, theme, verbose, thinking, output style, editor, or similar \u2014 and navigates the menu to flip one toggle. They are using the interactive panel for something the inline syntax does in one line. IMPORTANT: Do NOT match edits to hooks, permissions, env, statusLine, or other structured settings.json keys \u2014 those are not /config key=value keys.",
    feature: "/config key=value sets panel settings (model, theme, verbose, output style, \u2026) inline \u2014 no need to open the panel.",
    action: "/config <key>=<value>"
  }, {
    id: "repeated-workflow",
    situation: "User has done the same multi-step task pattern more than once \u2014 deploy sequence, review checklist, test procedure, or other workflow described from scratch.",
    feature: "Custom skills turn repeatable workflows into slash commands. Write once, invoke with /name.",
    action: 'Ask Claude: "turn this workflow into a reusable skill"',
    when: e => !XPe(e, nE)
  }, {
    id: "outside-working-dir",
    situation: "Claude says a file or path is outside the working directory or not accessible, and the user has to work around it \u2014 pasting file contents manually, copying the file into cwd, or asking Claude to use cat via Bash instead of Read.",
    feature: "You can grant Claude access to additional directories without changing your current working directory.",
    action: "/add-dir <path>"
  }, {
    id: "parallel-investigation",
    situation: 'User asks Claude to investigate something broad ("find all places where we handle auth", "trace the data flow"). The request would require reading many files and the main conversation already has substantial context.',
    feature: "Subagents run in isolated context, keeping the main conversation clean.",
    action: 'Ask Claude to "use a subagent to investigate this"',
    when: e => e.toolNames.has(ss)
  }, {
    id: "previous-session-reference",
    situation: `User mentions work from a previous session. "I was working on X yesterday" or "we discussed this before." Also matches when Claude says "I don't have context from our earlier conversation."`,
    feature: "Resume previous conversations with full context. Name sessions for easy retrieval.",
    action: "claude --continue or claude --resume",
    when: e => P9n(e) < 5
  }, {
    id: "at-mention-paths",
    situation: 'User has typed the same file path by hand in multiple turns (e.g. "src/components/foo/bar.tsx" appearing in two or more User messages), or Claude asked "which file do you mean" / "can you specify the path" and the user typed it out. The user is typing paths manually instead of using autocomplete. Do NOT match when paths already have an @ prefix \u2014 that means they are already using the feature.',
    feature: "Type @ in the prompt to fuzzy-search and autocomplete file paths \u2014 faster than typing and avoids typos.",
    action: "@ then start typing the filename"
  }, {
    id: "ide-copy-paste",
    situation: 'User mentions "in my editor", "in VS Code", "let me paste from my IDE", or pastes what looks like an editor selection with line numbers. They are manually bridging their editor and Claude.',
    feature: "The IDE extension shares your editor's context (open files, cursor, selection) automatically.",
    action: "/ide",
    when: e => !e.mcpClients.some(t => t.name === "ide")
  }, {
    id: "verbose-preference",
    situation: 'User has asked Claude to adjust its verbosity more than once \u2014 "be more concise", "shorter please", "too verbose", "less detail", or the opposite ("more detail", "explain more", "be thorough"). They keep restating a tone preference rather than getting it by default.',
    feature: "Output styles change Claude's default verbosity and tone persistently \u2014 set it once instead of repeating the request.",
    action: "/config (set output style)",
    when: e => !e.hasSetOutputStyle
  }, {
    id: "queue-while-working",
    situation: `After a long assistant turn with many tool calls, the user's next message is a correction or addition that did not depend on the final result \u2014 "actually, also do X", "wait, I meant Y", "oh and run Z too", "no, use the other file". They waited for Claude to finish before sending something they could have sent mid-turn. IMPORTANT: Do NOT match when the user's message clearly reacts to the final output (e.g. "that looks good" or a question about the result) \u2014 that is normal turn-taking.`,
    feature: "You can hit Enter while Claude is working to queue a follow-up or steer it mid-turn \u2014 no need to wait for it to finish.",
    action: "Hit Enter while Claude is working",
    when: e => e.promptQueueUseCount <= 3
  }, {
    id: "persistent-memory",
    situation: 'User restates a fact or preference about their project or setup that they have told Claude before \u2014 "as I mentioned", "like I said", "remember I use X", "I keep telling you" \u2014 or explicitly asks Claude to remember something for future sessions. They are trying to establish persistent context via conversation. IMPORTANT: Do NOT match tone/verbosity preferences (that is verbose-preference), per-tool-event rules (that is hooks-automation), or wanting to resume prior-session work (that is previous-session-reference).',
    feature: "# shortcut or /memory saves facts and preferences to CLAUDE.md so Claude remembers them across sessions.",
    action: "Type # to add a memory, or /memory to view and manage",
    when: e => !e.hasUserMemoryFile
  }, {
    id: "worktree-parallel-branches",
    situation: "User mentions switching branches to work on something else, stashing to change context, juggling multiple features at once, or wanting to run another Claude session on a different branch of the same repo. The friction is sequential branch-switching in one checkout.",
    feature: "Git worktrees give you multiple working directories from one repo \u2014 run a Claude session per branch without stashing or switching.",
    action: "git worktree add ../myrepo-feature <branch>",
    when: e => e.worktreeCount === 1
  }, {
    id: "push-notif-stepping-away",
    situation: `User says they will step away, check back later, or asks to be told when something finishes \u2014 "I'll check back in a bit", "ping me when done", "let me know when it's ready", "going to lunch, keep going" \u2014 after kicking off work that will take a while.`,
    feature: "Push notifications send a phone alert when long tasks finish, so you do not have to keep the terminal in view.",
    action: "Enable push notifications in /config",
    when: e => e.pushNotifEligible
  }, {
    id: "statusline-discovery",
    situation: `User asks about ambient session state that would normally be visible at a glance \u2014 current model, context window usage, total cost so far, working directory, git branch \u2014 and the answer appears in the assistant's prose. Also matches when the user repeatedly asks the same status-style question across turns ("which model is this again?", "how much have we spent?", "what branch am I on?").`,
    feature: "A custom status line displays model, cost, context %, cwd, git branch, and more beneath the input box \u2014 no need to ask.",
    action: "/statusline",
    when: e => !e.hasConfiguredStatusLine && !e.areAllHooksDisabled
  }, {
    id: "high-effort-low-yield",
    situation: "The most recent assistant response was short and direct \u2014 a brief answer, a small lookup, or a one-line confirmation \u2014 yet it was preceded by an extensive thinking block. The user is paying for deep reasoning on a question that did not need it.",
    feature: "Lower effort levels skip the heavy reasoning pass for routine turns and use far fewer tokens.",
    action: "/effort medium",
    when: e => e.subscriptionType === "pro" && (e.effort === "high" || e.effort === "xhigh" || e.effort === "max") && e.lastTurnOutputTokens > 0 && e.lastTurnOutputTokens < 500 && e.lastTurnThinkingTokens > 3 * e.lastTurnOutputTokens
  }, {
    id: "opus-on-pro-near-limit",
    situation: "The user is on a Pro plan, running Opus, and has burned through more than half of their usage window. They may not realize Opus consumes their limit roughly twice as fast as Sonnet for most tasks.",
    feature: "Sonnet 4.6 handles most coding tasks and uses your weekly limit roughly half as fast as Opus.",
    action: "/model",
    when: e => at("tengu_cobalt_heron", !1) && e.subscriptionType === "pro" && e.model.toLowerCase().includes("opus") && (e.pctLimitUsed ?? 0) > 0.5
  }, {
    id: "large-context-stale-files",
    situation: "The conversation context has grown very large \u2014 hundreds of thousands of tokens \u2014 and much of it is files and tool output from earlier in the session that the current work no longer references.",
    feature: "/compact summarizes the older context so each turn stops re-sending stale files.",
    action: "/compact",
    when: e => at("tengu_slate_moth", !1) && e.contextTokens > 300000 && e.staleFileTokens > 1e5
  }, {
    id: "pro-compact-threshold",
    situation: "The user is on a Pro plan, the conversation has grown past 200K tokens, and they have not configured a custom auto-compact window \u2014 they are running on the model default (typically the full context window or 1M). Each turn is re-sending more context than most coding sessions need.",
    feature: "Setting a 200K auto-compact window keeps sessions trimmed automatically \u2014 Claude summarizes earlier so each turn stays cheaper without manual /compact.",
    action: 'Set "autoCompactWindow": 200000 in settings.json',
    when: e => e.subscriptionType === "pro" && e.contextTokens > 200000 && e.autoCompactWindow === void 0
  }, {
    id: "side-question-during-work",
    situation: 'User asked an off-topic question mid-task \u2014 message starts with "btw", "quick question", "unrelated:", "side note:", or "real quick:". The transcript shows: many tool calls, then the tangential question, then Claude answered it. This IS friction even though Claude answered correctly \u2014 the side question consumed main-thread context and interrupted the task. Match this pattern; do not treat it as productive flow.',
    feature: "/btw asks a side question without interrupting the current work. Claude answers in a separate context and returns to what it was doing.",
    action: "/btw <question>",
    when: e => e.numStartups >= D9n && e.btwUseCount === 0
  }, {
    id: "background-agents-list",
    situation: `User mentions juggling many Claude sessions in parallel \u2014 "I have a bunch of tabs open", "running several of these at once", "lost track of which one", "this one can keep going while I do X", or says they will step away and check back on this session later. Also match when the user asks "which session was working on X?", "was this the tab where we did PR #N?", "where did we fix the Y bug?" \u2014 they are trying to recall what a session was about by asking inside it, which means they have lost the overview across sessions. The friction is overseeing many sessions, not coordinating between two of them (that is cross-session-coordination). Also match when the user kicks off long autonomous work and says "I'll come back to this" \u2014 they are treating the session as fire-and-forget.`,
    feature: "/bg detaches this session to run in the background, and `claude agents` shows every backgrounded session in one table with a status color \u2014 glance to see which ones need you, space to reply, enter to attach.",
    action: "/bg this session, then run `claude agents` in a new terminal",
    when: e => Kx() && e.numStartups >= D9n
  }, {
    id: "tmux-claude-agents",
    situation: "User is running Claude Code inside tmux with multiple tmux sessions active. They mention tmux panes/windows, switching between sessions, splitting work across terminals, or managing parallel workstreams by hand.",
    feature: "`claude agents` gives you one dashboard for background Claude sessions \u2014 launch, see status at a glance, and attach without juggling tmux panes yourself.",
    action: "run `claude agents` in a fresh terminal",
    when: e => Kx() && (e.tmuxSessionCount ?? 0) > 1
  }, {
    id: "too-many-subagents",
    situation: 'Multiple subagents or background work are running and the user wants them stopped \u2014 "kill those", "stop the agents", confusion about what is still running.',
    feature: "Ctrl+X Ctrl+K stops all running agents and background work at once.",
    action: "Ctrl+X Ctrl+K",
    when: e => e.numStartups >= D9n && XPe(e, ss)
  }, {
    id: "workflow-orchestration",
    situation: "Claude spawned several subagents (multiple Agent tool calls) for a structured multi-stage task \u2014 fan-out research then verify each finding, parallel analysis across dimensions, or iterative spawning until a condition is met. The user is manually chaining subagents through individual requests when the orchestration has clear control flow. Do NOT match when only one or two subagents were used for simple delegation \u2014 that is normal Agent tool usage.",
    feature: "Dynamic workflows let Claude write a script that orchestrates many agents for you. Mention the keyword ultracode or ask Claude to use a workflow directly.",
    action: 'Add ultracode to your next big request, or say "use a workflow for this"',
    when: e => JS() && e.numStartups >= D9n && XPe(e, ss) && !XPe(e, uC)
  }, {
    id: "workflow-size-control",
    situation: "A workflow ran this session (Workflow tool used) and it was large \u2014 many agents, long runtime, or heavy token use \u2014 or the user commented on a workflow's size, cost, speed, or token consumption. Do NOT match if no workflow ran this session, or if the workflow was small and the user expressed no concern.",
    feature: "You can control how big a workflow is just by prompting \u2014 ask for a small workflow or cap the number of agents.",
    action: 'Try "use a small workflow, 5 agents max"',
    when: e => JS() && XPe(e, uC)
  }];
});
async function FXa(e, t) {
  let n = () => {
    e.catch(() => {});
  };
  if (t.aborted) throw n(), new tf();
  let r = () => {};
  try {
    return await Promise.race([e, new Promise((o, s) => {
      r = () => s(new tf()), t.addEventListener("abort", r, {
        once: !0
      });
    })]);
  } catch (o) {
    throw n(), o;
  } finally {
    t.removeEventListener("abort", r);
  }
}
function $9n(e, t) {
  let n = e.find(r => r.type === "tool_use" && r.name === t);
  if (!n || n.type !== "tool_use") return null;
  return n;
}
function O9n(e, t) {
  let n = t.safeParse(e.input);
  if (!n.success) return null;
  return n.data;
}
var xVt = 60000,
  kVt = 120000,
  NXa = 60000,
  BXa = 4,
  UXa = "classify_result";