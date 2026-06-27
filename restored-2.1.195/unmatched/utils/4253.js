// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xYn
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0204  score=0.1412  fileCov=0.0233
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0204); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var xYn = E(() => {
  kt();
  CYn();
  QH();
  odf = ["userSettings", "projectSettings", "localSettings", "flagSettings", "cliArg", "session"];
});
function udf(e) {
  return cdf.has(e);
}
function Vm(e, t) {
  if (e.length <= t) return e;
  let n = t - 1;
  if (ddf(e.charCodeAt(n - 1))) n--;
  return e.slice(0, n) + "\u2026";
}
function ddf(e) {
  return e >= 55296 && e <= 56319;
}
function c$e(e, t) {
  let n = null,
    r = 0,
    o = 0;
  while (o < t) {
    let s = e.indexOf("```", o),
      i = e.indexOf("~~~", o),
      a = s === -1 ? i : i === -1 ? s : Math.min(s, i);
    if (a === -1 || a >= t) break;
    let l = e[a],
      c = a - 1,
      u = 0;
    while (c >= 0 && e[c] === " " && u < 3) c--, u++;
    let d = c < 0 || e[c] === `
`,
      p = 3;
    o = a + 3;
    while (e[o] === l) o++, p++;
    if (!d) continue;
    if (n === null) n = l, r = p;else if (n === l && p >= r) n = null, r = 0;
  }
  return n !== null;
}
function $fl(e, t = "") {
  switch (e) {
    case "authentication_failed":
      return {
        state: "blocked",
        needs: "login required \u2014 run /login"
      };
    case "oauth_org_not_allowed":
      return {
        state: "blocked",
        needs: "org disabled OAuth \u2014 use API key or ask admin"
      };
    case "billing_error":
      return {
        state: "blocked",
        needs: "usage limit reached \u2014 check plan"
      };
    case "rate_limit":
      return {
        state: "blocked",
        needs: "rate limited \u2014 wait and retry"
      };
    case "overloaded":
      return {
        state: "blocked",
        needs: "API overloaded \u2014 wait and retry"
      };
    case "server_error":
      return {
        state: "blocked",
        needs: "API unavailable \u2014 retry"
      };
    case "invalid_request":
      return /\b(too long|too large|exceeds|token limit|prompt is too long)\b/i.test(t) ? {
        state: "blocked",
        needs: "request too large \u2014 /compact or trim"
      } : {
        state: "blocked",
        needs: "invalid API request \u2014 see detail"
      };
    case "max_output_tokens":
      return null;
    case void 0:
      return {
        state: "blocked",
        needs: "API error \u2014 see detail"
      };
    case "unknown":
    default:
      return {
        state: "failed",
        needs: "API error"
      };
  }
}
function hdf(e, t, n) {
  let r;
  for (let [o, s] of [["failed", pdf], ["blocked", fdf], ["blocked", mdf], ["blocked", gdf]]) for (let i of t.matchAll(s)) {
    if (c$e(e, n + i.index)) continue;
    if (!r || i.index > r.index) r = {
      state: o,
      capture: i[1].trim(),
      index: i.index,
      end: i.index + i[0].length
    };
  }
  return r;
}
function Ofl(e) {
  let t = e.trim();
  if (!t) return "empty";
  if (c$e(t, t.length)) return "code-fence";
  let n = t.slice(-800),
    r = t.length - n.length;
  for (let s of n.matchAll(/(?:^|\n)\s*result:\s*\S/gi)) if (!c$e(t, r + s.index)) return "result-line";
  for (let s of n.matchAll(/(?:^|\n)\s*failed:\s*\S/gi)) if (!c$e(t, r + s.index)) return "failed-line";
  if (/[?\uFF1F]\s*$/.test(t)) return "trailing-q";
  let o = t.slice(-200);
  if (/(?:^|\n)\s*(?:[-*\u2022]|\d+\.|[|])\s/.test(o)) return "list-or-table";
  return "declarative";
}
function Nfl(e) {
  let t = e.trim();
  if (!t) return null;
  let n = t.slice(-800),
    r;
  for (let f of n.matchAll(/(?:^|\n)\s*result:\s*(.+?)\s*(?:\n|$)/gi)) if (!c$e(t, t.length - n.length + f.index)) r = f;
  let o = n,
    s = t.length - n.length;
  if (r) {
    let f = r.index + r[0].length;
    o = n.slice(f), s = t.length - n.length + f;
  }
  let i = hdf(t, o, s);
  if (r && !i) {
    let f = Vm(r[1], Xy);
    if ([...o.matchAll(/(?:^|\n)\s*next:\s*\S/gi)].some(g => !c$e(t, s + g.index))) return {
      branch: "result-then-next",
      state: "working",
      tempo: "idle",
      detail: f,
      output: {
        result: f
      }
    };
    return {
      branch: "result-marker",
      state: "done",
      tempo: "idle",
      detail: f,
      output: {
        result: f
      }
    };
  }
  if (i?.state === "failed") return {
    branch: "failed-marker",
    state: "failed",
    tempo: "idle",
    detail: Vm(i.capture, Xy),
    output: {}
  };
  if (i?.state === "blocked") {
    let f = o.slice(i.end);
    if (On(f.split(/\n\s*\n/), m => m.trim().length > 0) >= 3) return null;
    if (!/\bnothing (?:needed|required) from you\b|\bno(?: user)? action (?:needed|required)\b/i.test(o)) {
      let m = Vm(i.capture, Xy);
      return {
        branch: "blocked-marker",
        state: "blocked",
        tempo: "blocked",
        needs: m,
        detail: m
      };
    }
    if (r) {
      let m = Vm(r[1], Xy);
      return {
        branch: "blocked-disclaimed",
        state: "done",
        tempo: "idle",
        detail: m,
        output: {
          result: m
        }
      };
    }
    return null;
  }
  if (/[?\uFF1F]\s*$/.test(n) && n.replace(/[?\uFF1F\s]+$/, "").length >= 4) {
    let f = Math.max(n.lastIndexOf(`
`), n.lastIndexOf(". "), n.lastIndexOf("! "), n.lastIndexOf("? ", n.length - 2));
    if (!c$e(t, t.length - n.length + f)) {
      let m = Vm(n.slice(f + 1).trim(), Xy);
      if (ydf.test(m)) return null;
      return {
        branch: "trailing-q",
        state: "blocked",
        tempo: "blocked",
        needs: m,
        detail: m
      };
    }
  }
  let a = Math.max(0, n.lastIndexOf(". "), n.lastIndexOf("! "), n.lastIndexOf("? "), n.lastIndexOf(`
`)),
    l = n.slice(a).replace(/^[.!?\s]+/, ""),
    c = c$e(t, t.length - n.length + a),
    u = /\b(?:waiting (?:for|on)|pending)\s+(?:the\s+)?(?:CI|build|tests?|reviewer|deploy(?:ment)?|workflow|checks?|rollout|merge queue)\b/i.exec(l);
  if (u && !c) return {
    branch: "wait-external",
    state: "working",
    tempo: "idle",
    detail: Vm(u[0], Xy),
    output: {}
  };
  let d = /\b(?:awaiting|waiting (?:for|on)|pending)\s+(?:your\s+(?:feedback|input|decision|response|approval|direction|guidance|go-ahead)|you\b|the user\b)/i.exec(l);
  if (d && !c) {
    let f = Vm(l.slice(d.index).trim(), Xy);
    return {
      branch: "awaiting-user",
      state: "blocked",
      tempo: "blocked",
      needs: f,
      detail: f
    };
  }
  let p = /\b(please (?:run|provide|confirm|clarify|choose|let me know)|let me know (?:which|what|how|when)|which (?:option|approach|one)|should I (?:proceed|continue|use))\b/i.exec(l);
  if (p && !c) {
    let f = Vm(l.slice(p.index).trim(), Xy);
    return {
      branch: "ask-verb",
      state: "blocked",
      tempo: "blocked",
      needs: f,
      detail: f
    };
  }
  if (!c && /\b(not logged in|please run \/login|authentication failed|invalid api key|oauth token (?:expired|revoked)|credit balance (?:is )?too low|usage limit reached|mcp (?:server )?(?:authentication|auth|authorization|unauthorized)|mcp (?:server )?(?:credential|token) (?:missing|expired|invalid)|401 unauthorized|403 forbidden|token (?:has )?expired|bad credentials|gh auth login|gcloud auth login|aws (?:sso )?login)\b/i.test(l)) return {
    branch: "auth-prose",
    state: "blocked",
    tempo: "blocked",
    needs: Vm(l, Xy),
    detail: "authentication required"
  };
  if (!c && _df.test(l) && !bdf.test(l)) return {
    branch: "working-verb",
    state: "working",
    tempo: "active",
    detail: Vm(l, Xy),
    output: {}
  };
  if (!c && Sdf.test(l)) return {
    branch: "agents-status",
    state: "working",
    tempo: "idle",
    detail: Vm(l, Xy)
  };
  if (!c && Edf.test(l)) return {
    branch: "will-check-back",
    state: "working",
    tempo: "idle",
    detail: Vm(l, Xy)
  };
  if (!c && Adf.test(l)) {
    let f = Vm(l, Xy);
    return {
      branch: "cant-proceed",
      state: "blocked",
      tempo: "blocked",
      detail: f,
      needs: f
    };
  }
  if (!c && Hdf.test(l)) return {
    branch: "giving-up",
    state: "failed",
    tempo: "idle",
    detail: Vm(l, Xy)
  };
  if (!c && Tdf.test(l)) {
    let f = Vm(l, Xy);
    return {
      branch: "pushed-committed",
      state: "done",
      tempo: "idle",
      detail: f,
      output: {
        result: f
      }
    };
  }
  if (!c && vdf.test(l)) return {
    branch: "ready-for",
    state: "done",
    tempo: "idle",
    detail: Vm(l, Xy)
  };
  if (!c && wdf.test(l)) {
    let f = Vm(l, Xy);
    return {
      branch: "verdict-marker",
      state: "done",
      tempo: "idle",
      detail: f,
      output: {
        result: f
      }
    };
  }
  if (!c && Cdf.test(l)) {
    let f = Vm(l, Xy);
    return {
      branch: "please-do-x",
      state: "blocked",
      tempo: "blocked",
      detail: f,
      needs: f
    };
  }
  if (!c && Idf.test(l)) {
    let f = Vm(l, Xy);
    return {
      branch: "stopping-here",
      state: "blocked",
      tempo: "blocked",
      detail: f,
      needs: f
    };
  }
  return null;
}
function Cko(e) {
  let t = e.split(`
`).map(n => n.trim()).findLast(Boolean);
  return {
    branch: "heuristic",
    state: "working",
    tempo: "idle",
    detail: t ? Vm(t, Xy) : "\u2014"
  };
}
function Ufl(e) {
  let {
    tail: t,
    prev: n,
    latestAsk: r,
    toolSummary: o,
    minsInState: s
  } = e;
  return `Current state: ${n} (for ${s}m)
Tool calls so far: ${o || "none"}${r ? `
User's most recent ask: "${r}"` : ""}

Assistant message tail (last ${t.length} chars):
${t}`;
}
function Ffl(e) {
  let t = e.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, ""),
    n = t.indexOf("{"),
    r = t.lastIndexOf("}");
  if (n < 0 || r < 0) return null;
  let o;
  try {
    o = Ft(t.slice(n, r + 1));
  } catch {
    return null;
  }
  let s = idf().safeParse(o);
  return s.success ? s.data : null;
}
function x6t(e) {
  return typeof e === "string" && e ? e : void 0;
}
function k6t(e, t, n) {
  let r = x6t(e.state),
    o = r && Object.hasOwn(adf, r) ? r : n?.state ?? t,
    s = x6t(e.tempo),
    i = udf(o) ? "idle" : s === "active" || s === "idle" || s === "blocked" ? s : n?.tempo ?? "active",
    a = {},
    l = e.output ?? n?.output;
  if (l && typeof l === "object") for (let [u, d] of Object.entries(l)) {
    let p = x6t(d);
    if (p && Object.hasOwn(ldf, u)) a[u] = Vm(p, Xy);
  }
  let c = x6t(e.needs) ?? (i === "blocked" ? n?.needs : void 0);
  return {
    state: o,
    detail: x6t(e.detail) ?? n?.detail ?? "",
    tempo: i,
    needs: c,
    output: a,
    branch: n?.branch
  };
}
var idf,
  adf,
  ldf,
  Xy = 800,
  Mfl = 2000,
  cdf,
  pdf,
  fdf,
  mdf,
  gdf,
  ydf,
  _df,
  bdf,
  Sdf,
  Edf,
  Adf,
  Hdf,
  Tdf,
  vdf,
  wdf,
  Cdf,
  Idf,
  Bfl = `A user kicked off a Claude Code agent to do a coding task and walked away. Read the tail of what the agent just said and decide which of four states it's in, so the system knows whether to notify the user.

The classification drives a phone notification: "blocked" pings the user to come back; everything else doesn't. So the question you're really answering is: does the user need to come back right now, and if not, is the work finished or still going? A false "blocked" is an annoying interruption for nothing. A false "done" or "working" when the agent is actually stuck waiting on the user means the work sits idle until they happen to check.

THE FOUR STATES

  "done" \u2014 the agent answered the ask or delivered the thing, and isn't planning to do anything else unprompted. This is the most common end-of-turn state in interactive sessions. There doesn't have to be a PR, commit, or file \u2014 if the user asked a question and the tail is the answer (not a plan to find one), that's done. Explanations, analyses, recommendations, "here's what I found", "the cause is X", "no change needed", and "files at <path>" closings are all done.

  "working" \u2014 the agent intends to keep going without being asked: it said "now let me\u2026", "next I'll\u2026", "running\u2026", "checking\u2026", or it's waiting on something it kicked off (CI, build, subagent, deploy, timer). Look for explicit forward intent or a named external wait.

  "blocked" \u2014 the agent cannot continue without the user. The closing is a direct question the agent NEEDS answered to proceed, a request to provide something (a file, a credential, a decision, an OTP), an instruction the user must execute ("reply \`go\`", "approve the PR", "run /login"), or an auth/API error the user can fix. Test: would the user replying or acting unblock it?

  "failed" \u2014 the agent gave up because the task is structurally impossible as framed: wrong repo, the feature doesn't exist, the premise is false, every approach exhausted with nothing the user could hand over to unblock it. Rare. If the agent names a specific missing resource, that's "blocked", not "failed" \u2014 the user CAN unblock it.

THE HARD BOUNDARIES

Done vs working: a closing that explains, summarizes, reports findings, or shows what was changed \u2014 without saying it's about to do more \u2014 is "done". Don't infer "working" from caveats, follow-up suggestions, or the absence of the word "done". Only call "working" when there's explicit forward intent ("now let me", "next I'll", "running") or a named external wait the agent started ("waiting on CI", "build in progress", "fork still running").

Done vs blocked \u2014 optional offers vs gates: after delivering, agents often close with an offer to do more: "let me know if you want X", "if you'd like, I can also Y", "ping me and I'll Z", "say the word and I'll update", "want me to dig into that?", "tell me the IDs and I'll re-home", "happy to do the latter if you want", "shall I also\u2026?". These are "done" \u2014 the deliverable shipped; the offer is extra. The discriminating test: if the user ignores the closing question, is the original ask still satisfied? Yes \u2192 done. No \u2192 blocked.

The exception is when the question is about WHETHER or HOW to ship the work the user asked for \u2014 which PR to put it in, apply it or not, push or hold, which approach to take. Then the deliverable isn't landed without the answer, so that's "blocked". "Found the fix. Want me to add it to this PR or open a new one?" \u2192 blocked (delivery isn't decided). "Fixed it in this PR. Want me to also clean up the old helper while I'm here?" \u2192 done (delivery is complete; the extra is tangential).

Working vs done vs blocked \u2014 when the closing mentions waiting on something: the discriminator is whether the AGENT ITSELF will do more.
  \u2022 Agent says it will act ("I'll report when X lands", "next check in 5 min", "shepherding CI", "will re-poll", "checking back", "N agents in flight \u2014 I'll consolidate") \u2192 "working". The agent owns the next step, regardless of what it's waiting on.
  \u2022 Agent won't act, and there's a user-addressed gate with no re-poll ("reply \`go\` to merge", "awaiting your approval", "which approach do you want?") \u2192 "blocked". Only the user can move it forward.
  \u2022 Agent won't act, and the wait is on a third party or passive trigger ("auto-merge armed, awaiting stamp", "posted to #stamps", "CI will run") \u2192 "done". The agent's part is over; whatever happens next happens without it.
A closing with both ("Awaiting your \`go\`. Next check in 20m") is "working" \u2014 the agent will re-check on its own; \`go\` is an optional accelerator, not a hard gate.

Stickiness: you're told the previous state. Don't move done\u2192working or failed\u2192working unless the agent explicitly restarted. Moving working\u2192done is the normal end-of-turn outcome \u2014 lean "done" when the closing is declarative with no future-tense plan.

EXPLICIT MARKERS \u2014 these are unambiguous, treat them as ground truth:
  \u2022 "No response requested." / "No action needed." / "Nothing needed from you." \u2192 done
  \u2022 "result: <text>" on its own line \u2192 done (and <text> is output.result)
  \u2022 "Next check in <time>" / "Shepherding CI" / "I'll report when X lands" / "checking back" \u2192 working
  \u2022 "Reply \`go\` to <verb>" / "Awaiting your \`go\`" (with no re-poll mentioned) \u2192 blocked
  \u2022 "Giving up." / "The task is not actionable." \u2192 failed
  \u2022 "blocked: <reason>" / "I'm blocked: <reason>" on its own line \u2192 blocked

API/AUTH/INFRA ERRORS \u2192 always "blocked" (transient or user-fixable), never "failed". Set needs to the fix. Covers:
  \u2022 Anthropic API: "401", "Invalid API key", "Please run /login", "rate limited", "overloaded", "529", "credit balance too low", "usage limit reached"
  \u2022 MCP servers: "OAuth token expired/revoked", "vault credential missing", "MCP authentication failed", "MCP unauthorized"
  \u2022 External services: "gh auth login", "gcloud auth login", "aws sso login", "bad credentials", "token expired", GitLab/GitHub PAT errors, Stripe/Slack 401
  \u2022 Any prose naming a specific re-auth or re-login step

OTHER DISAMBIGUATION:
  \u2022 Agent hit an error but is retrying or investigating ("let me try again", "checking the logs") \u2192 "working"
  \u2022 Agent stopped and names a SPECIFIC missing thing the user could supply (file, env var, credential, OTP, path, decision) \u2192 "blocked", even if phrased as "can't proceed" or "stopping here"
  \u2022 Scope notes, caveats, or FYIs after a delivered finding ("note: Y is untested", "out of scope but worth flagging") \u2192 "done"
  \u2022 A summary of options or a recommendation ("B is the right call", "I'd take option 1") with no question \u2192 "done" (the recommendation IS the deliverable)
  \u2022 Imperative to the user that's a recommendation, not a gate ("Ship the seek + scale.", "Run the migration when ready.") \u2192 "done" \u2014 the agent isn't waiting on it

EXAMPLES (tail \u2192 classification)

"Reading config files to understand the setup."
\u2192 {"state":"working","detail":"reading config files to map the setup","tempo":"active","output":{}}

"Found it in auth.ts:88. Now let me check if the same pattern appears elsewhere."
\u2192 {"state":"working","detail":"found pattern at auth.ts:88; scanning for other occurrences","tempo":"active","output":{}}

"Waiting for CI to finish (~8 min)."
\u2192 {"state":"working","detail":"waiting on CI (~8 min)","tempo":"idle","output":{}}

"CI green on PR #31030. Reply \`go\` to merge."
\u2192 {"state":"blocked","detail":"PR #31030 CI green; awaiting user go-ahead to merge","tempo":"blocked","needs":"reply \`go\` to merge","output":{}}
  (no agent re-poll; only the user's \`go\` moves it forward \u2192 blocked)

"Awaiting your \`go\`. Next check in 20m."
\u2192 {"state":"working","detail":"PR awaiting go-ahead; agent re-checking in 20m","tempo":"idle","output":{}}
  (agent will re-poll on its own; \`go\` is an optional accelerator \u2192 working)

"Auto-merge armed on PR #4821. Posted to #stamps. Awaiting stamp."
\u2192 {"state":"done","detail":"PR #4821 auto-merge armed; posted to #stamps","tempo":"idle","output":{"result":"PR #4821 ready, auto-merge armed"}}
  (GitHub merges, not the agent; agent's part is over \u2192 done)

"Babysit tick \u2014 PR #40689. All CI green, threads resolved. Awaiting human approval. Next check via cron in ~5 min."
\u2192 {"state":"working","detail":"PR #40689 green, awaiting approval; next cron check ~5 min","tempo":"idle","output":{}}
  ("next check via cron" = agent will re-poll \u2192 working)

"Here's how the auth flow works: the token is validated in middleware.ts:42 before each request."
\u2192 {"state":"done","detail":"auth flow: token validated in middleware.ts:42 per request","tempo":"idle","output":{"result":"token validated in middleware.ts:42"}}
  (answered a question \u2014 no PR/commit/file required for "done")

"Indentation is now consistent at all four call sites (RepoPicker, both EnvironmentPicker sites, BranchPicker, SessionView). CI's swift-format should find nothing left to reflow."
\u2192 {"state":"done","detail":"indentation fixed at 4 call sites; swift-format clean","tempo":"idle","output":{"result":"indentation consistent across RepoPicker/EnvironmentPicker/BranchPicker/SessionView"}}

"At 30-40k rows there's no hint that gets you there without a new index \u2014 and at that point the column is strictly cheaper than a (session_uuid, source, sequence_num DESC) index."
\u2192 {"state":"done","detail":"analysis: dedicated column cheaper than composite index at 30-40k rows","tempo":"idle","output":{"result":"recommend dedicated column over composite index"}}
  (pure analysis closing, no question, no forward intent \u2014 done)

"No response requested."
\u2192 {"state":"done","detail":"completed; no response requested","tempo":"idle","output":{}}

"Both PRs remain bot-clean. Continue your e2e test on the restarted localhost:4000 (now pointed at local CCR)."
\u2192 {"state":"done","detail":"both PRs bot-clean; localhost:4000 restarted pointing at local CCR","tempo":"idle","output":{}}
  ("Continue your test" is advice TO the user, not the agent's plan \u2192 done)

"Both subagents updated to use \`ack_seq\`. They're still running \u2014 I'll report PR URLs when each completes."
\u2192 {"state":"working","detail":"2 subagents running with ack_seq rename; will report PR URLs","tempo":"idle","output":{}}
  ("I'll report when each completes" = agent will act on results \u2192 working)

"Searching internal knowledge for the org ID \u2014 I'll report back when the search completes."
\u2192 {"state":"working","detail":"searching internal KB for org ID","tempo":"active","output":{}}

"Wrote the chart to plots/venn.png; script is at scripts/venn.R."
\u2192 {"state":"done","detail":"venn chart written to plots/venn.png (script: scripts/venn.R)","tempo":"idle","output":{"result":"plots/venn.png + scripts/venn.R"}}

"Fixed the regex; tests pass. If you want, I can also open a follow-up PR to clean up the old helper."
\u2192 {"state":"done","detail":"regex fixed in parser.ts, all tests green","tempo":"idle","output":{"result":"regex fixed, tests pass"}}
  (deliverable shipped; offer is tangential extra \u2192 done)

"Throughput drop confirmed \u2014 ~16K/min notifications being dropped from pod capacity. Ship the seek + scale. Want me to dig into the upstream volume change too?"
\u2192 {"state":"done","detail":"confirmed ~16K/min notif drop from pod capacity; recommend seek+scale","tempo":"idle","output":{"result":"~16K/min drop, pod capacity \u2014 ship seek+scale"}}
  (finding + recommendation delivered; trailing question is optional extra \u2192 done)

"Not applied \u2014 say the word and I'll update both widgets."
\u2192 {"state":"done","detail":"widget query change drafted; not applied pending go-ahead","tempo":"idle","output":{}}
  ("say the word and I'll" = optional offer \u2192 done)

"B is the right call \u2014 it lands in the table the chart already reads, and avoids the migration."
\u2192 {"state":"done","detail":"recommend option B (reuses existing table, avoids migration)","tempo":"idle","output":{"result":"recommendation: option B"}}

"PR opened: https://github.com/acme/repo/pull/123\\nresult: fixed auth race in auth.ts, PR #123"
\u2192 {"state":"done","detail":"opened PR #123: fixed auth race","tempo":"idle","output":{"result":"fixed auth race in auth.ts, PR #123"}}

"I found the bug in auth.ts:42. Want me to fix it or just report?"
\u2192 {"state":"blocked","detail":"found null-check bug at auth.ts:42; awaiting fix-vs-report","tempo":"blocked","needs":"fix it or just report?","output":{}}
  (agent has NOT delivered the fix; can't proceed without the answer \u2192 blocked)

"Found the fix \u2014 it's a 3-line change to the retry handler. Want me to add it to this PR or open a new one?"
\u2192 {"state":"blocked","detail":"3-line retry-handler fix ready; awaiting which PR","tempo":"blocked","needs":"add to this PR or open a new one?","output":{}}
  (question is about HOW to ship the asked-for work \u2192 blocked)

"Added the analytics enum + conditional at the .withScreenAnalyticsLogging call site. Want me to also add the missing screen tag for the empty-state view while I'm here? It's a ~5-line change."
\u2192 {"state":"done","detail":"analytics enum + conditional added at .withScreenAnalyticsLogging","tempo":"idle","output":{"result":"analytics logging wired at SessionView"}}
  (asked-for work delivered; the "while I'm here" extra is tangential \u2192 done)

"I can't proceed \u2014 the repo requires GITHUB_TOKEN and it's not set."
\u2192 {"state":"blocked","detail":"missing GITHUB_TOKEN; cannot clone","tempo":"blocked","needs":"set GITHUB_TOKEN env var","output":{}}

"Can't run the tests \u2014 needs the openapi.yaml file which isn't in this checkout. Stopping here."
\u2192 {"state":"blocked","detail":"missing openapi.yaml; cannot run tests","tempo":"blocked","needs":"provide config/openapi.yaml","output":{}}
  ("stopping" + names a specific missing resource \u2192 blocked, not failed)

"API Error: 401 Invalid API key \xB7 Please run /login"
\u2192 {"state":"blocked","detail":"API auth failed (401)","tempo":"blocked","needs":"run /login","output":{}}

"The build is broken on main and I can't reproduce locally. Giving up."
\u2192 {"state":"failed","detail":"cannot reproduce build failure; logs uninformative","tempo":"idle","output":{}}
  (no specific resource would unblock; exhausted approaches \u2192 failed)

CONTRASTIVE PAIRS \u2014 same surface shape, different state

  "Tests pass. Let me know if you also want the docs updated."  \u2192 done
  "Tests written but I haven't run them. Let me know which env to use."  \u2192 blocked
  (first: deliverable shipped, offer is extra. second: deliverable not verified, needs the env to proceed)

  "Waiting for CI (~8 min)."  \u2192 working
  "CI green. Awaiting your \`go\` to merge."  \u2192 blocked
  (first: only external wait. second: user gate)

  "Want me to also clean up the old helper?"  \u2192 done
  "Want me to apply this fix or just report it?"  \u2192 blocked
  (first: tangential extra after delivery. second: how to deliver the asked-for work)

  "I'll re-pull metrics when the timer fires and confirm it drained."  \u2192 working
  "I'll re-pull metrics once you confirm the timer fired."  \u2192 blocked
  (first: agent owns the next step. second: user owns it)

OUTPUT \u2014 respond with ONLY this JSON, no code fences:
{"state":"<working|blocked|done|failed>","detail":"<one line>","tempo":"<active|idle|blocked>","needs":"<when blocked: the exact ask; omit otherwise>","output":{"result":"<one-sentence deliverable headline, \u2264180 chars; omit when working>"}}

"detail" is what shows on the user's phone lock screen \u2014 write it like a colleague's Slack message: name the concrete thing (file, function, error, number, finding) and what happened to it. "fixed auth race in middleware.ts, tests green" not "completed task"; "waiting on CI for #4821" not "working"; "confirmed 16K/min drop from pod capacity" not "investigated issue".

"tempo": "active" = computing; "idle" = waiting on external (CI, timer, reviewer); "blocked" = waiting on user.

"needs": when blocked, the exact action the user should take, copied as closely as possible from the tail \u2014 they'll act on this text without reading the transcript. Omit otherwise.

"output.result": one-sentence headline naming a finished deliverable (direct answer, URL/path the agent produced, command the user should run). If the tail has \`result:\` on its own line, that line IS the result. Omit ({}) when still working, or when it would just restate the state.
`;