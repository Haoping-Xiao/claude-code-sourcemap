// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TYo
// matched 2.1.88 source: src/services/tips/tipRegistry.ts
// class=modified  jaccard=0.3729  score=0.532  fileCov=0.5549
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TYo] deps: iu, Qi, Lo, je, Y4, dr, lUo, SC, rze, UOo, R0e, f0e, gor, Xa, ZS, kne, WW, HU, oo, x4o, Ld, er, wAe, gb, NOo, kRc, wr, fn, ik, uf, sa, PM, xLe, aE, pq, Ao, Ls, Is, _k, lE, oWe, WI, PEt, _a, dQt, dn, Un, m_t, ZKe, GXn, uHt, s8t, dht
((RRc = Cn(() => $Oo())),
  (wwm = /\.(html?|css|s[ac]ss|less|[jt]sx|vue|svelte|astro|png|jpe?g|gif|svg|webp|avif|ico)$/i),
  (Cwm = new Set([
    "vite",
    "next",
    "nuxt",
    "astro",
    "gatsby",
    "ng",
    "parcel",
    "webpack-dev-server",
    "serve",
    "http-server",
    "live-server",
    "browser-sync",
  ])));
Iwm = ["c4e-desktop", "c4e-remote-sessions", "c4e-ultrareview"];
((MRc = [
  {
    id: "team-artifacts",
    priority: 4,
    content: async () => {
      let e = await lrl().catch(
        (t) => (
          It(
            "tips_team_artifact_show",
            t instanceof Error ? "content_scan_error" : "content_unknown_error",
          ),
          []
        ),
      );
      if (e.length === 0) return "";
      return (url(e), crl(), drl(e));
    },
    cooldownSessions: 1,
    isRelevant: async () => arl(),
  },
  {
    id: "fotw-campaign",
    priority: 4,
    content: async () => {
      let e = fQ();
      if (!e?.command) return "";
      let t = DAe();
      if (!t) return "";
      let n = Yy(t.amountMinorUnits, t.currency, "fit"),
        r = e.tipBlurb ? `/${e.command} ${e.tipBlurb}` : `/${e.command}`,
        o = e.tips?.[L9n("fotw-campaign") % e.tips.length] ?? "";
      if (o) return `${o} Try it for ${n} in usage credits.`;
      return `${e.titleLabel ?? "Feature of the week:"} ${r}. Try it for ${n} in usage credits.`;
    },
    cooldownSessions: 1,
    isRelevant: async () => QMe(),
  },
  {
    id: "fotw-campaign-upsell",
    priority: 4,
    content: async () => {
      let e = fQ();
      if (!e?.command) return "";
      let t = e.tips?.[L9n("fotw-campaign-upsell") % e.tips.length] ?? "";
      if (t) return t;
      let n = e.tipBlurb ? `/${e.command} ${e.tipBlurb}` : `/${e.command}`;
      return `${e.titleLabel ?? "Feature of the week:"} ${n}.`;
    },
    cooldownSessions: 1,
    isRelevant: async () => f_t(),
  },
  {
    id: "powerup-onboarding",
    priority: 3,
    providerAgnostic: !0,
    content: async (e) =>
      `New to Claude Code? Run ${Io("suggestion", e.theme)("/powerup")} for a quick interactive tutorial`,
    cooldownSessions: 1,
    async isRelevant() {
      let e = Dt();
      if (e.numStartups >= 10) return !1;
      if (e.powerupsUnlocked?.length) return !1;
      return at("tengu_alder_compass", !1);
    },
  },
  {
    id: "new-user-warmup",
    priority: 2,
    providerAgnostic: !0,
    content: async () =>
      "Start with small features or bug fixes, tell Claude to propose a plan, and verify its suggested edits",
    cooldownSessions: 3,
    async isRelevant() {
      return Dt().numStartups < 10;
    },
  },
  {
    id: "plan-mode-for-complex-tasks",
    priority: 2,
    providerAgnostic: !0,
    content: async () =>
      `Use Plan Mode to prepare for a complex request before making changes. Press ${eC("chat:cycleMode", "Chat", "shift+tab")} twice to enable.`,
    cooldownSessions: 5,
    isRelevant: async () => {
      let e = Dt();
      return (e.lastPlanModeUse ? (Date.now() - e.lastPlanModeUse) / 86400000 : 1 / 0) > 7;
    },
  },
  {
    id: "default-permission-mode-config",
    providerAgnostic: !0,
    content: async () => "Use /config to change your default permission mode (including Plan Mode)",
    cooldownSessions: 10,
    isRelevant: async () => {
      try {
        let e = Dt(),
          t = jo(),
          n = Boolean(e.lastPlanModeUse),
          r = Boolean(t?.permissions?.defaultMode);
        return n && !r;
      } catch (e) {
        return (
          T(`Failed to check default-permission-mode-config tip relevance: ${e}`, {
            level: "warn",
          }),
          !1
        );
      }
    },
  },
  {
    id: "git-worktrees",
    providerAgnostic: !0,
    content: async () => "Use git worktrees to run multiple Claude sessions in parallel.",
    cooldownSessions: 10,
    isRelevant: async () => {
      try {
        let e = Dt();
        return (await dCe()) <= 1 && e.numStartups > 50;
      } catch (e) {
        return !1;
      }
    },
  },
  {
    id: "color-when-multi-clauding",
    providerAgnostic: !0,
    content: async () =>
      "Running multiple Claude sessions? Use /color and /rename to tell them apart at a glance.",
    cooldownSessions: 10,
    isRelevant: async () => {
      if (tZt()) return !1;
      return (await QPt()) >= 2;
    },
  },
  {
    id: "agents-view-multiclauding",
    priority: 3,
    providerAgnostic: !0,
    maxLifetimeShows: 5,
    cooldownSessions: 1,
    content: async (e) => {
      let t = Io("suggestion", e.theme);
      return `Running multiple Claude sessions? Run ${t("claude agents")} to see them all in one place \xB7 or press ${t(CG)} twice on an empty prompt when Claude is idle`;
    },
    isRelevant: async () => {
      if (!$$e()) return !1;
      let e = Dt();
      if (e.leftArrowOpensAgents === !1) return !1;
      if (Js()) return !1;
      if (e.hasOpenedAgentsView || e.hasUsedAgentsFleet) return !1;
      return (await QPt()) >= 2;
    },
  },
  {
    id: "terminal-setup",
    providerAgnostic: !0,
    content: async () =>
      Oe.terminal === "Apple_Terminal"
        ? "Run /terminal-setup to enable convenient terminal integration like Option + Enter for new line and more"
        : "Run /terminal-setup to enable convenient terminal integration like Shift + Enter for new line and more",
    cooldownSessions: 10,
    async isRelevant() {
      if (!PGe()) return !1;
      let e = Dt();
      if (Oe.terminal === "Apple_Terminal") return !e.optionAsMetaKeyInstalled;
      return !e.shiftEnterKeyBindingInstalled;
    },
  },
  {
    id: "vscode-gpu-accel-garbled-glyphs",
    providerAgnostic: !0,
    maxLifetimeShows: 5,
    content: async () =>
      "Corrupted terminal glyphs? Disable terminal GPU acceleration in settings or run /terminal-setup",
    cooldownSessions: 8,
    async isRelevant() {
      return yb();
    },
  },
  {
    id: "shift-enter",
    providerAgnostic: !0,
    content: async () =>
      Oe.terminal === "Apple_Terminal"
        ? "Press Option+Enter to send a multi-line message"
        : "Press Shift+Enter to send a multi-line message",
    cooldownSessions: 10,
    async isRelevant() {
      let e = Dt();
      return Boolean(
        (Oe.terminal === "Apple_Terminal"
          ? e.optionAsMetaKeyInstalled
          : e.shiftEnterKeyBindingInstalled) && e.numStartups > 3,
      );
    },
  },
  {
    id: "shift-enter-setup",
    providerAgnostic: !0,
    content: async () =>
      Oe.terminal === "Apple_Terminal"
        ? "Run /terminal-setup to enable Option+Enter for new lines"
        : "Run /terminal-setup to enable Shift+Enter for new lines",
    cooldownSessions: 10,
    async isRelevant() {
      if (!PGe()) return !1;
      let e = Dt();
      return !(Oe.terminal === "Apple_Terminal"
        ? e.optionAsMetaKeyInstalled
        : e.shiftEnterKeyBindingInstalled);
    },
  },
  {
    id: "memory-command",
    providerAgnostic: !0,
    content: async () => "Use /memory to view and manage Claude memory",
    cooldownSessions: 15,
    async isRelevant() {
      return Dt().memoryUsageCount <= 0;
    },
  },
  {
    id: "theme-command",
    providerAgnostic: !0,
    content: async () => "Use /theme to change the color theme",
    cooldownSessions: 20,
    isRelevant: async () => !0,
  },
  {
    id: "colorterm-truecolor",
    providerAgnostic: !0,
    content: async () => "Try setting environment variable COLORTERM=truecolor for richer colors",
    cooldownSessions: 30,
    isRelevant: async () => !process.env.COLORTERM && wt.level < 3,
  },
  {
    id: "powershell-tool-env",
    providerAgnostic: !0,
    content: async () =>
      "Set CLAUDE_CODE_USE_POWERSHELL_TOOL=1 to enable the PowerShell tool (preview)",
    cooldownSessions: 10,
    isRelevant: async () =>
      Vt() === "windows" && process.env.CLAUDE_CODE_USE_POWERSHELL_TOOL === void 0,
  },
  {
    id: "status-line",
    providerAgnostic: !0,
    content: async () =>
      "Use /statusline to set up a custom status line that will display beneath the input box",
    cooldownSessions: 25,
    isRelevant: async () => !N_() && jo().statusLine === void 0,
  },
  {
    id: "prompt-queue",
    providerAgnostic: !0,
    content: async () => "Hit Enter to queue up additional messages while Claude is working.",
    cooldownSessions: 5,
    async isRelevant() {
      return Dt().promptQueueUseCount <= 3;
    },
  },
  {
    id: "enter-to-steer-in-relatime",
    providerAgnostic: !0,
    content: async () => "Send messages to Claude while it works to steer Claude in real-time",
    cooldownSessions: 20,
    isRelevant: async () => !0,
  },
  {
    id: "todo-list",
    providerAgnostic: !0,
    content: async () =>
      "Ask Claude to create a todo list when working on complex tasks to track progress and remain on track",
    cooldownSessions: 20,
    isRelevant: async () => !0,
  },
  {
    id: "vscode-command-install",
    providerAgnostic: !0,
    content: async () =>
      `Open the Command Palette (Cmd+Shift+P) and run "Shell Command: Install '${Oe.terminal === "vscode" ? "code" : Oe.terminal}' command in PATH" to enable IDE integration`,
    cooldownSessions: 0,
    async isRelevant() {
      if (!k3t()) return !1;
      if (Vt() !== "macos") return !1;
      switch (Oe.terminal) {
        case "vscode":
          return !(await bxa());
        case "cursor":
          return !(await yxa());
        case "windsurf":
          return !(await _xa());
        default:
          return !1;
      }
    },
  },
  {
    id: "ide-upsell-external-terminal",
    providerAgnostic: !0,
    content: async () => "Connect Claude to your IDE \xB7 /ide",
    cooldownSessions: 4,
    async isRelevant() {
      if (uF()) return !1;
      if ((await uFn()).length !== 0) return !1;
      return (await Sxa()).length > 0;
    },
  },
  {
    id: "install-github-app",
    content: async () =>
      "Run /install-github-app to tag @claude right from your Github issues and PRs",
    cooldownSessions: 10,
    isRelevant: async () => !Dt().githubActionSetupCount,
  },
  {
    id: "install-slack-app",
    content: async () => "Run /install-slack-app to use Claude in Slack",
    cooldownSessions: 10,
    isRelevant: async () => !Dt().slackAppInstallCount,
  },
  {
    id: "permissions",
    providerAgnostic: !0,
    content: async () => "Use /permissions to pre-approve and pre-deny bash, edit, and MCP tools",
    cooldownSessions: 10,
    async isRelevant() {
      return Dt().numStartups > 10;
    },
  },
  {
    id: "drag-and-drop-images",
    providerAgnostic: !0,
    content: async () => "Did you know you can drag and drop image files into your terminal?",
    cooldownSessions: 10,
    isRelevant: async () => !Oe.isSSH(),
  },
  {
    id: "paste-images-mac",
    providerAgnostic: !0,
    content: async () => "Paste images into Claude Code using control+v (not cmd+v!)",
    cooldownSessions: 10,
    isRelevant: async () => Vt() === "macos",
  },
  {
    id: "double-esc",
    providerAgnostic: !0,
    content: async () => "Double-tap esc to rewind the conversation to a previous point in time",
    cooldownSessions: 10,
    isRelevant: async () => !K_(),
  },
  {
    id: "double-esc-code-restore",
    providerAgnostic: !0,
    content: async () =>
      "Double-tap esc to rewind the code and/or conversation to a previous point in time",
    cooldownSessions: 10,
    isRelevant: async () => K_(),
  },
  {
    id: "continue",
    providerAgnostic: !0,
    content: async () => "Run claude --continue or claude --resume to resume a conversation",
    cooldownSessions: 10,
    isRelevant: async () => !0,
  },
  {
    id: "rename-conversation",
    providerAgnostic: !0,
    content: async () =>
      "Name your conversations with /rename to find them easily in /resume later",
    cooldownSessions: 15,
    isRelevant: async () => VHe() && Dt().numStartups > 10,
  },
  {
    id: "custom-commands",
    providerAgnostic: !0,
    content: async () =>
      "Create skills by adding .md files to .claude/skills/ in your project or ~/.claude/skills/ for skills that work in any project",
    cooldownSessions: 15,
    async isRelevant() {
      let e = Dt();
      return !lc("skills") && e.numStartups > 10 && !(await SYo("skills"));
    },
  },
  {
    id: "shift-tab",
    providerAgnostic: !0,
    content: async () =>
      `Hit ${eC("chat:cycleMode", "Chat", "shift+tab")} to cycle between default mode, auto-accept edit mode, and plan mode`,
    cooldownSessions: 10,
    isRelevant: async () => !0,
  },
  {
    id: "image-paste",
    providerAgnostic: !0,
    content: async () =>
      `Use ${eC("chat:imagePaste", "Chat", "ctrl+v")} to paste images from your clipboard`,
    cooldownSessions: 20,
    isRelevant: async () => !0,
  },
  {
    id: "custom-agents",
    providerAgnostic: !0,
    content: async () =>
      "Use /agents to optimize specific tasks. Eg. Software Architect, Code Writer, Code Reviewer",
    cooldownSessions: 15,
    async isRelevant() {
      let e = Dt();
      return !lc("agents") && e.numStartups > 5 && !(await SYo("agents"));
    },
  },
  {
    id: "agent-flag",
    providerAgnostic: !0,
    content: async () =>
      "Use --agent <agent_name> to directly start a conversation with a subagent",
    cooldownSessions: 15,
    async isRelevant() {
      let e = Dt();
      return !lc("agents") && e.numStartups > 5 && (await SYo("agents"));
    },
  },
  {
    id: "desktop-app",
    content: async () =>
      "Run Claude Code locally or remotely using the Claude desktop app: clau.de/desktop",
    cooldownSessions: 15,
    isRelevant: async () => tEt() && !P1e() && !(await RRc()),
  },
  {
    id: "desktop-shortcut",
    content: async (e) =>
      `Continue your session in Claude Code Desktop with ${Io("suggestion", e.theme)("/desktop")}`,
    cooldownSessions: 15,
    isRelevant: async () => tEt() && bYo().enable_shortcut_tip,
  },
  {
    id: "desktop-contextual",
    priority: 1,
    content: async (e) => {
      let t = Io("suggestion", e.theme);
      if (await RRc())
        return `Working on UI? See a live preview in Claude Code Desktop \xB7 run ${t("/desktop")}`;
      return `Working on UI? Claude Code Desktop has live preview and inline images \xB7 ${t("clau.de/desktop")}`;
    },
    cooldownSessions: 15,
    isRelevant: async (e) => {
      if (!tEt()) return !1;
      if (!bYo().enable_contextual_tip) return !1;
      return LRc(e);
    },
  },
  {
    id: "claude-design-contextual",
    priority: 1,
    content: async (e) =>
      `Use Claude Design to mock up screens before you build \xB7 ${sP(
        "https://claude.ai/design?utm_source=claude_code&utm_medium=tip&utm_campaign=tengu_cedar_plume",
        "claude.ai/design",
        {
          themeName: e.theme,
        },
      )}`,
    cooldownSessions: 15,
    isRelevant: async (e) => {
      if (!bo()) return !1;
      if (!LRc(e)) return !1;
      return at("tengu_cedar_plume", !1);
    },
  },
  {
    id: "web-app",
    content: async () => "Run tasks in the cloud while you keep coding locally \xB7 clau.de/web",
    cooldownSessions: 15,
    isRelevant: async () => !P1e(),
  },
  {
    id: "remote-control",
    content: async (e) => {
      let t = Io("suggestion", e.theme);
      return `Control this session from ${sP(
        "https://claude.com/download#mobile",
        "the Claude mobile app",
        {
          themeName: e.theme,
        },
      )} \xB7 run ${t("/remote-control")}`;
    },
    cooldownSessions: 15,
    isRelevant: async () => xC() && !Dt().hasUsedRemoteControl && !Lfe(),
  },
  {
    id: "push-notif",
    content: async (e) =>
      `Get pinged on your phone when long tasks finish \xB7 enable push notifications in ${Io("suggestion", e.theme)("/config")}`,
    cooldownSessions: 15,
    isRelevant: async () => Tir(),
  },
  {
    id: "voice-mode",
    content: async () => "Use /voice to enable push-to-talk dictation",
    cooldownSessions: 10,
    isRelevant: async () =>
      AHt() &&
      Dr().voiceEnabled === void 0 &&
      !nv() &&
      !ut(process.env.CLAUDE_CODE_REMOTE) &&
      !Oe.isSSH(),
  },
  {
    id: "no-flicker",
    providerAgnostic: !0,
    content: async () =>
      "Try the new fullscreen renderer \u2014 flicker-free output, mouse support, auto-copy on select \xB7 /tui fullscreen",
    cooldownSessions: 10,
    isRelevant: async () => !Ns() && Dr().tui === void 0 && mor(),
  },
  {
    id: "console-api-key",
    content: async (e) =>
      `Build your AI product with Claude API. Run ${Io("suggestion", e.theme)("/claude-api")} to get started`,
    cooldownSessions: 15,
    isRelevant: async () => {
      if (!bo() || !mle()) return !1;
      let e = Dt();
      if (e.primaryApiKey) return !1;
      if (e.customApiKeyResponses?.approved?.length) return !1;
      if (process.env.ANTHROPIC_API_KEY) return !1;
      if (e.numStartups <= 10) return !1;
      return at("tengu_kestrel_arch", "off") === "on";
    },
  },
  {
    id: "c4e-desktop",
    content: async (e) =>
      `Run Claude Code locally or remotely using the Claude desktop app \u2014 ${EYo(e)}`,
    cooldownSessions: 15,
    isRelevant: async () => {
      if (!P1e() || AYo("c4e-desktop")) return !1;
      return !1;
    },
  },
  {
    id: "c4e-remote-sessions",
    content: async (e) => `Run tasks in the cloud while you keep coding locally \u2014 ${EYo(e)}`,
    cooldownSessions: 15,
    isRelevant: async () => P1e() && !AYo("c4e-remote-sessions"),
  },
  {
    id: "c4e-ultrareview",
    content: async (e) =>
      `/ultrareview runs a deep, multi-agent review of your changes \u2014 ${EYo(e)}`,
    cooldownSessions: 15,
    isRelevant: async () => P1e() && !AYo("c4e-ultrareview"),
  },
  {
    id: "opusplan-mode-reminder",
    providerAgnostic: !0,
    content: async () =>
      `Your default model setting is Opus Plan Mode. Press ${eC("chat:cycleMode", "Chat", "shift+tab")} twice to activate Plan Mode and plan with Claude Opus.`,
    cooldownSessions: 2,
    async isRelevant() {
      let e = Dt(),
        n = GG() === "opusplan",
        r = e.lastPlanModeUse ? (Date.now() - e.lastPlanModeUse) / 86400000 : 1 / 0;
      return n && r > 3;
    },
  },
  {
    id: "frontend-design-plugin",
    priority: 1,
    providerAgnostic: !0,
    content: async (e) => `Working with HTML/CSS? Install the frontend-design plugin:
${Io("suggestion", e.theme)(`/plugin install frontend-design@${xI}`)}`,
    cooldownSessions: 3,
    isRelevant: async (e) =>
      PRc("frontend-design", e, {
        filesRead: ["**/*.html", "**/*.css", "**/*.htm"],
      }),
  },
  {
    id: "subagent-fanout-nudge",
    providerAgnostic: !0,
    content: async (e) =>
      `Say ${Io("suggestion", e.theme)('"fan out subagents"')} and Claude sends a team. Each one digs deep so nothing gets missed.`,
    cooldownSessions: 3,
    isRelevant: async () => !bo(),
  },
  {
    id: "dynamic-workflows",
    providerAgnostic: !0,
    content: async (e) =>
      `Dynamic workflows let Claude write a script that orchestrates many agents for you. Mention the keyword ${Io("suggestion", e.theme)("ultracode")} or ask Claude to use a workflow directly.`,
    cooldownSessions: 3,
    isRelevant: async () => JS(),
  },
  {
    id: "loop-command-nudge",
    providerAgnostic: !0,
    content: async (e) =>
      `${Io("suggestion", e.theme)("/loop")} runs any prompt on a recurring schedule. Great for monitoring deploys, babysitting PRs, or polling status.`,
    cooldownSessions: 3,
    isRelevant: async () => {
      if (TF()) return !1;
      if (!a$()) return !1;
      return !bo();
    },
  },
  {
    id: "plugin-disuse-review",
    providerAgnostic: !0,
    content: async (e) => {
      let t = Io("suggestion", e.theme),
        n = await _Xt(),
        r = n[0];
      if (!r) return "";
      if (n.length === 1)
        return `You haven't used the ${wt.bold(r.name)} plugin in a while. It still adds startup and context cost \u2014 review it with ${t("/plugin")}`;
      return `You have ${n.length} plugins you haven't used in a while. They still add startup and context cost \u2014 review them with ${t("/plugin")}`;
    },
    cooldownSessions: 30,
    isRelevant: async () => (await _Xt()).length > 0,
  },
  {
    id: "goal-command-nudge",
    content: async (e) =>
      `Set an objective with ${Io("suggestion", e.theme)("/goal")} \u2014 Claude keeps working until it's met`,
    cooldownSessions: 3,
    isRelevant: async () => K4e(),
  },
  {
    id: "guest-passes",
    content: async (e) => {
      let t = Io("claude", e.theme),
        n = SAt();
      return n
        ? `Share Claude Code and earn ${t(bAt(n))} in usage credits \xB7 ${t("/passes")}`
        : `You have free guest passes to share \xB7 ${t("/passes")}`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      if (Dt().hasVisitedPasses) return !1;
      let { eligible: t } = _At();
      return t;
    },
  },
  {
    id: "feedback-command",
    content: async () => "Use /feedback to help us improve!",
    cooldownSessions: 15,
    async isRelevant() {
      return Dt().numStartups > 5;
    },
  },
  {
    id: "team-onboarding-share",
    content: async (e) =>
      `Run ${Io("suggestion", e.theme)("/team-onboarding")} to turn your Claude usage into an onboarding guide \u2014 share it with your team in one link`,
    cooldownSessions: 5,
    async isRelevant() {
      let e = Dt();
      if (e.numStartups < 15) return !1;
      if (
        e.teamOnboardingLastUsedAt !== void 0 &&
        Date.now() - e.teamOnboardingLastUsedAt < 2592000000
      )
        return !1;
      return xbt();
    },
  },
]),
  (kwm = []));
function $Rc(e) {
  if (e.length === 0) return;
  if (e.length === 1) return e[0];
  let t = e.map((n) => ({
    tip: n,
    sessions: Spe(n.id),
  }));
  return (
    t.sort((n, r) => {
      if (n.sessions !== r.sessions) return r.sessions - n.sessions;
      return (r.tip.priority ?? 0) - (n.tip.priority ?? 0);
    }),
    t[0]?.tip
  );
}
async function ORc(e) {
  if (jo().spinnerTipsEnabled === !1) return;
  let t = await yfr(e);
  if (t.length === 0) return;
  return $Rc(t);
}
async function NRc(e) {
  if (jo().spinnerTipsEnabled === !1) return;
  if (zPe(Dr().spinnerTipsOverride)) return;
  let t = await HYo();
  if (t.length === 0) return;
  let n = [];
  for (let r of t) {
    if (!r.pluginId) continue;
    if (kXa(r.pluginId) >= Lwm) continue;
    if (Spe(r.id) < r.cooldownSessions) continue;
    if (await r.isRelevant(e)) n.push(r);
  }
  return $Rc(n);
}
function _fr(e, t = "spinner") {
  (uht(e.id, e.pluginId), xe(t === "startup" ? "tips_startup_show" : "tips_spinner_show"));
  let n =
    e.id.startsWith("marketplace-plugin:") && e.id.includes("@")
      ? "marketplace-plugin:org-marketplace"
      : e.id;
  G("tengu_tip_shown", {
    tipIdLength: n,
    cooldownSessions: e.cooldownSessions,
    surface: $e(t),
  });
}
var Lwm = 2;
