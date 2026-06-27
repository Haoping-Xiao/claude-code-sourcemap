// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sA
// matched 2.1.88 source: src/services/PromptSuggestion/promptSuggestion.ts
// class=modified  jaccard=0.5673  score=0.8278  fileCov=0.6432
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function _jn() {
  return "user_intent";
}
function shouldEnablePromptSuggestion() {
  let e = process.env.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (ml(e))
    return (
      G("tengu_prompt_suggestion_init", {
        enabled: false,
        source: We("env"),
      }),
      false
    );
  if (ut(e))
    return (
      G("tengu_prompt_suggestion_init", {
        enabled: true,
        source: We("env"),
      }),
      true
    );
  if (!at("tengu_chomp_inflection", false))
    return (
      G("tengu_prompt_suggestion_init", {
        enabled: false,
        source: We("growthbook"),
      }),
      false
    );
  if (Ir())
    return (
      G("tengu_prompt_suggestion_init", {
        enabled: false,
        source: We("non_interactive"),
      }),
      false
    );
  if (el() && wf())
    return (
      G("tengu_prompt_suggestion_init", {
        enabled: false,
        source: We("swarm_teammate"),
      }),
      false
    );
  let t = Dr()?.promptSuggestionEnabled !== false;
  return (
    G("tengu_prompt_suggestion_init", {
      enabled: t,
      source: We("setting"),
    }),
    t
  );
}
function Sjn() {
  let e = Oe.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
  if (e !== void 0) return e;
  return Dr()?.promptSuggestionEnabled !== false;
}
function KMa() {
  if (Kqe) (Kqe.abort(), (Kqe = null));
}
function getSuggestionSuppressReason(appState) {
  if (!appState.promptSuggestionEnabled) return "disabled";
  if (appState.pendingWorkerRequest || appState.pendingSandboxRequest) return "pending_permission";
  if (appState.elicitation.queue.length > 0) return "elicitation_active";
  if (appState.toolPermissionContext.mode === "plan") return "plan_mode";
  if (ck.status !== "allowed") return "rate_limit";
  return null;
}
async function tryGenerateSuggestion(
  abortController,
  messages,
  getAppState,
  cacheSafeParams,
  source,
) {
  if (abortController.signal.aborted)
    return (logSuggestionSuppressed("aborted", void 0, void 0, source), null);
  if (On(messages, (f) => f.type === "assistant") < 2)
    return (logSuggestionSuppressed("early_conversation", void 0, void 0, source), null);
  let i = MI(messages);
  if (i?.isApiErrorMessage)
    return (logSuggestionSuppressed("last_response_error", void 0, void 0, source), null);
  let a = getParentCacheSuppressReason(i);
  if (a) return (logSuggestionSuppressed(a, void 0, void 0, source), null);
  let l = getAppState(),
    c = getSuggestionSuppressReason(l);
  if (c) return (logSuggestionSuppressed(c, void 0, void 0, source), null);
  let u = _jn(),
    { suggestion: d, generationRequestId: p } = await generateSuggestion(
      abortController,
      u,
      cacheSafeParams,
    );
  if (abortController.signal.aborted)
    return (logSuggestionSuppressed("aborted", void 0, void 0, source), null);
  if (!d) return (logSuggestionSuppressed("empty", void 0, u, source), null);
  if (shouldFilterSuggestion(d, u, source)) return null;
  return {
    suggestion: d,
    promptId: u,
    generationRequestId: p,
  };
}
async function executePromptSuggestion(context, t) {
  if (!context.querySource?.startsWith("repl_main_thread")) return;
  let n = N7(),
    r = Js(),
    o = r && t?.tempo === "blocked" && !t.block;
  if (r ? n !== "focused" && !o : n === "blurred") {
    logSuggestionSuppressed(r ? "bg_unattached" : "unfocused", void 0, void 0, "cli");
    return;
  }
  Kqe = new AbortController();
  let s = Kqe,
    i = g6(context);
  try {
    let a = await tryGenerateSuggestion(
      s,
      context.messages,
      context.toolUseContext.getAppState,
      i,
      "cli",
    );
    if (!a) return;
    if (
      (context.toolUseContext.setAppState((l) => ({
        ...l,
        promptSuggestion: {
          text: a.suggestion,
          promptId: a.promptId,
          shownAt: 0,
          acceptedAt: 0,
          generationRequestId: a.generationRequestId,
        },
      })),
      o)
    )
      LRp(a.suggestion, t?.needs).catch(ke);
    if ((!r || N7() === "focused") && fgo() && a.suggestion)
      mgo(a.suggestion, context, context.toolUseContext.setAppState, false, i);
  } catch (a) {
    if (a instanceof Error && (a.name === "AbortError" || a.name === "APIUserAbortError")) {
      logSuggestionSuppressed("aborted", void 0, void 0, "cli");
      return;
    }
    (Le("prompt_suggestion_generate", "api_error"), ke(Zr(a)));
  } finally {
    if (Kqe === s) Kqe = null;
  }
}
async function LRp(e, t) {
  if (xc(e) !== e) return;
  let n = _c(XE());
  sS(n);
  let r = await zi(n);
  if (r?.tempo !== "blocked" || r.needs !== t || r.suggestedReply === e) return;
  await Kd(n, {
    ...r,
    suggestedReply: e,
  });
}
function getParentCacheSuppressReason(lastAssistantMessage) {
  if (!lastAssistantMessage) return null;
  let t = lastAssistantMessage.message.usage,
    n = t.input_tokens ?? 0,
    r = t.cache_creation_input_tokens ?? 0,
    o = t.output_tokens ?? 0;
  return n + r + o > DRp ? "cache_cold" : null;
}
async function generateSuggestion(abortController, promptId, cacheSafeParams) {
  let r = MRp[promptId],
    o = async () => ({
      behavior: "deny",
      message: "No tools needed for suggestion",
      decisionReason: {
        type: "other",
        reason: "suggestion only",
      },
    }),
    s = await dk({
      promptMessages: [
        Rn({
          content: r,
        }),
      ],
      cacheSafeParams: cacheSafeParams,
      canUseTool: o,
      querySource: "prompt_suggestion",
      forkLabel: "prompt_suggestion",
      overrides: {
        abortController: abortController,
      },
      skipTranscript: true,
      skipCacheWrite: true,
    }),
    i = s.messages.find((l) => l.type === "assistant"),
    a = i?.type === "assistant" ? (i.requestId ?? null) : null;
  for (let l of s.messages) {
    if (l.type !== "assistant") continue;
    let c = l.message.content.find((u) => u.type === "text");
    if (c?.type === "text") {
      let u = c.text
        .trim()
        .replace(/^<(suggestion|response|output|answer|result)>([\s\S]*)<\/\1>$/i, (d, p, f) =>
          f.includes(`</${p.toLowerCase()}>`) || f.includes(`</${p.toUpperCase()}>`) ? d : f,
        )
        .replace(
          /^\s*(suggested\s+(response|reply|input|prompt)|suggestion|response|reply|answer|output|result)\s*:\s*/i,
          "",
        )
        .trim();
      if (u)
        return (
          xe("prompt_suggestion_generate"),
          {
            suggestion: u,
            generationRequestId: a,
          }
        );
    }
  }
  return (
    xe("prompt_suggestion_generate"),
    {
      suggestion: null,
      generationRequestId: a,
    }
  );
}
function shouldFilterSuggestion(suggestion, promptId, source) {
  if (!suggestion) return (logSuggestionSuppressed("empty", void 0, promptId, source), true);
  let r = suggestion.toLowerCase(),
    o = suggestion.trim().split(/\s+/).length,
    s = [
      ["done", () => r === "done"],
      [
        "meta_text",
        () =>
          r === "nothing found" ||
          r === "nothing found." ||
          r.startsWith("nothing to suggest") ||
          r.startsWith("no suggestion") ||
          /\bsilence is\b|\bstay(s|ing)? silent\b/.test(r) ||
          /^\W*silence\W*$/.test(r),
      ],
      ["meta_wrapped", () => /^\(.*\)$|^\[.*\]$/.test(suggestion)],
      [
        "error_message",
        () =>
          r.startsWith("api error:") ||
          r.startsWith("prompt is too long") ||
          r.startsWith("request timed out") ||
          r.startsWith("invalid api key") ||
          r.startsWith("image was too large"),
      ],
      ["prefixed_label", () => /^\w+:\s/.test(suggestion)],
      [
        "too_few_words",
        () => {
          if (o >= 2) return false;
          if (suggestion.startsWith("/")) return false;
          return !new Set([
            "yes",
            "yeah",
            "yep",
            "yea",
            "yup",
            "sure",
            "ok",
            "okay",
            "push",
            "commit",
            "deploy",
            "stop",
            "continue",
            "check",
            "exit",
            "quit",
            "no",
          ]).has(r);
        },
      ],
      ["too_many_words", () => o > 12],
      ["too_long", () => suggestion.length >= 100],
      ["multiple_sentences", () => /[.!?]\s+[A-Z]/.test(suggestion)],
      ["has_formatting", () => /[\n*]|\*\*/.test(suggestion)],
      [
        "evaluative",
        () =>
          /thanks|thank you|looks good|sounds good|that works|that worked|that's all|nice|great|perfect|makes sense|awesome|excellent/.test(
            r,
          ),
      ],
      [
        "claude_voice",
        () =>
          /^(let me|i'll|i've|i'm|i can|i would|i think|i notice|here's|here is|here are|that's|this is|this will|you can|you should|you could|sure,|of course|certainly)/i.test(
            suggestion,
          ),
      ],
    ];
  for (let [i, a] of s)
    if (a()) return (logSuggestionSuppressed(i, suggestion, promptId, source), true);
  return false;
}
function logSuggestionOutcome(suggestion, userInput, emittedAt, promptId, generationRequestId) {
  let s = Math.round((userInput.length / (suggestion.length || 1)) * 100) / 100,
    i = userInput === suggestion,
    a = Math.max(0, Date.now() - emittedAt);
  G("tengu_prompt_suggestion", {
    source: We("sdk"),
    outcome: We(i ? "accepted" : "ignored"),
    prompt_id: $e(promptId),
    ...(generationRequestId && {
      generationRequestId: Hr(generationRequestId),
    }),
    ...(i && {
      timeToAcceptMs: a,
    }),
    ...(!i && {
      timeToIgnoreMs: a,
    }),
    similarity: s,
    ...false,
  });
}
function logSuggestionSuppressed(reason, suggestion, promptId, source) {
  let o = promptId ?? _jn();
  G("tengu_prompt_suggestion", {
    ...(source && {
      source: $e(source),
    }),
    outcome: We("suppressed"),
    reason: reason,
    prompt_id: $e(o),
    ...false,
  });
}
var Kqe = null,
  DRp = 10000 /* 1e4 */,
  zMa = `[SUGGESTION MODE: Suggest what the user might naturally type next into Claude Code.]

FIRST: Look at the user's recent messages and original request.

Your job is to predict what THEY would type - not what you think they should do.

THE TEST: Would they think "I was just about to type that"?

EXAMPLES:
User asked "fix the bug and run tests", bug is fixed \u2192 "run the tests"
After code written \u2192 "try it out"
Claude offers options \u2192 suggest the one the user would likely pick, based on conversation
Claude asks to continue \u2192 "yes" or "go ahead"
Task complete, obvious follow-up \u2192 "commit this" or "push it"
After error or misunderstanding \u2192 silence (let them assess/correct)

Be specific: "run the tests" beats "continue".

NEVER SUGGEST:
- Evaluative ("looks good", "thanks")
- Questions ("what about...?")
- Claude-voice ("Let me...", "I'll...", "Here's...")
- New ideas they didn't ask about
- Multiple sentences

Stay silent if the next step isn't obvious from what the user said.

Stay silent if a suggestion could be unsafe or inappropriate \u2014 including any sensitive topic (security incidents, credentials, harm, private data). Even when the user is doing legitimate security or cybersecurity work, do not predict potentially unsafe actions.

Format: 2-12 words, match the user's style. Or nothing.

Reply with ONLY the suggestion, no quotes or explanation.`,
  MRp;
