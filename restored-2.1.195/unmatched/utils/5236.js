// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module znc
// matched 2.1.88 source: src/commands/insights.ts
// class=new  jaccard=0.014  score=0.1987  fileCov=0.0148
// note: nearest: src/commands/insights.ts (0.014); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module znc] deps: ft, Un, kt, GXn, jc, er, je, At, Bi, sa, jS, Jt, Wnc
qnc = require("fs/promises"), uar = require("path");
eJf = `

**Sharing** \u2014 call the ${zzt} tool twice:

1. **Right after rendering the draft code block** (still in step 5, before the Review questions). Call with \`mode='check'\` \u2014 this uploads the draft to an existing guide (or creates a new one). Either way you get a \`share_url\` and \`short_code\`. Instead of the \`---\` / \`**Review**\` header from step 5, bridge directly from the link into the numbered questions (no horizontal rule):

   Here's a draft \u2014 a few quick questions to finish it up:

   <share URL>

   Then ask the three numbered questions from step 5 as normal. Save the \`short_code\` from the tool result \u2014 you'll need it in step 2.

2. **After the user answers the Review questions** and you've updated ONBOARDING.md, call it again with \`mode='update'\` and the \`short_code\` from step 1 to refresh the same link. Replace step 5's "drop it in your team docs" close with:

   Here's your onboarding guide: <updated URL>

   Send this to teammates and they'll get a guided walkthrough when they open it in Claude Code.

If the tool returns 'unavailable' at any point, skip that call and use the manual close from step 5 instead.`, tJf = ["Edit(ONBOARDING.md)", "Bash(ls *)", zzt], nJf = {
  type: "prompt",
  name: "team-onboarding",
  description: "Help teammates ramp on Claude Code with a guide from your usage",
  allowedTools: tJf,
  contentLength: 0,
  isEnabled: () => Us("allow_team_onboarding"),
  isHidden: false,
  progressMessage: "scanning usage data",
  effort: "low",
  requires: {
    workspace: true
  },
  userFacingName() {
    return "team-onboarding";
  },
  source: "builtin",
  disableModelInvocation: true,
  async getPromptForCommand() {
    let e = at("tengu_flint_harbor_prompt", {}),
      t = typeof e?.prompt === "string" ? e.prompt : ZXf,
      n = typeof e?.guideTemplate === "string" ? e.guideTemplate : QXf,
      r = typeof e?.windowDays === "number" ? Math.min(Math.max(Math.floor(e.windowDays), 1), 365) : KXf;
    G("tengu_team_onboarding_invoked", {
      window_days: r
    }), gn(c => ({
      ...c,
      teamOnboardingLastUsedAt: Date.now()
    }));
    let {
        usageData: o,
        sessionCount: s,
        slashCommandCount: i,
        mcpServerCount: a
      } = await JXf(r),
      l = t.replaceAll("{{WINDOW_DAYS}}", String(r)).replaceAll("{{GUIDE_TEMPLATE}}", n).replaceAll("{{USAGE_DATA}}", o) + (xbt() ? eJf : "");
    return G("tengu_team_onboarding_generated", {
      session_count: s,
      slash_command_count: i,
      mcp_server_count: a,
      window_days: r
    }), [{
      type: "text",
      text: l
    }];
  }
}, rJf = nJf;
function gQt() {
  let e = new Set(),
    t = "";
  return {
    feed(n, r) {
      let o = t ? t + n : n;
      Ync.lastIndex = 0;
      let s,
        i = 0,
        a = false;
      while ((s = Ync.exec(o)) !== null) {
        let u = s[2] === "h";
        for (let d of s[1].split(";")) {
          let p = Number(d);
          if (Knc.has(p) && e.has(p) !== u) {
            if (u) e.add(p), r?.(p);else e.delete(p);
            a = true;
          }
        }
        i = s.index + s[0].length;
      }
      let l = o.slice(Math.max(i, o.length - 16)),
        c = l.lastIndexOf("\x1B");
      return t = c >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(l.slice(c)) ? l.slice(c) : "", a;
    },
    seed(n) {
      for (let r of n) if (Knc.has(r)) e.add(r);
    },
    snapshot() {
      return [...e];
    }
  };
}
var Knc, Ync;