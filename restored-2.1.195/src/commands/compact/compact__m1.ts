// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iao
// matched 2.1.88 source: src/commands/compact/compact.ts
// class=modified (alt of src/commands/compact/compact.ts)  jaccard=0.0665  score=0.1259  fileCov=0.1235
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Iao = E(() => {
  ((Qcp = `Your task is to create a detailed summary of the RECENT portion of the conversation \u2014 the messages that follow earlier retained context. The earlier messages are being kept intact and do NOT need to be summarized. Focus your summary on what was discussed, learned, and accomplished in the recent messages only.

${`Before providing your final summary, wrap your analysis in <analysis> tags to organize your thoughts and ensure you've covered all necessary points. In your analysis process:

1. Analyze the recent messages chronologically. For each section thoroughly identify:
   - The user's explicit requests and intents
   - Your approach to addressing the user's requests
   - Key decisions, technical concepts and code patterns
   - Specific details like:
     - file names
     - full code snippets
     - function signatures
     - file edits
   - Errors that you ran into and how you fixed them
   - Pay special attention to specific user feedback that you received, especially if the user told you to do something differently.
   - Note any security-relevant instructions or constraints the user stated (e.g., sensitive files or data to avoid, operations that must not be performed, credential or secret handling rules). These MUST be preserved verbatim in the summary so they continue to apply after compaction.
2. Double-check for technical accuracy and completeness, addressing each required element thoroughly.`}

Your summary should include the following sections:

1. Primary Request and Intent: Capture the user's explicit requests and intents from the recent messages
2. Key Technical Concepts: List important technical concepts, technologies, and frameworks discussed recently.
3. Files and Code Sections: Enumerate specific files and code sections examined, modified, or created. Include full code snippets where applicable and include a summary of why this file read or edit is important.
4. Errors and fixes: List errors encountered and how they were fixed.
5. Problem Solving: Document problems solved and any ongoing troubleshooting efforts.
6. All user messages: List ALL user messages from the recent portion that are not tool results. Preserve any security-relevant instructions or constraints verbatim so they remain in effect after compaction.
7. Pending Tasks: Outline any pending tasks from the recent messages.
8. Current Work: Describe precisely what was being worked on immediately before this summary request.
9. Optional Next Step: List the next step related to the most recent work. Include direct quotes from the most recent conversation.

Here's an example of how your output should be structured:

<example>
<analysis>
[Your thought process, ensuring all points are covered thoroughly and accurately]
</analysis>

<summary>
1. Primary Request and Intent:
   [Detailed description]

2. Key Technical Concepts:
   - [Concept 1]
   - [Concept 2]

3. Files and Code Sections:
   - [File Name 1]
      - [Summary of why this file is important]
      - [Important Code Snippet]

4. Errors and fixes:
    - [Error description]:
      - [How you fixed it]

5. Problem Solving:
   [Description]

6. All user messages:
    - [Detailed non tool use user message]

7. Pending Tasks:
   - [Task 1]

8. Current Work:
   [Precise description of current work]

9. Optional Next Step:
   [Optional Next step to take]

</summary>
</example>

Please provide your summary based on the RECENT messages only (after the retained earlier context), following this structure and ensuring precision and thoroughness in your response.
`),
    (kca =
      `

REMINDER: Do NOT call any tools. Respond with plain text only \u2014 ` +
      "an <analysis> block followed by a <summary> block. Tool calls will be rejected and you will fail the task."));
});
async function eup(e, t, n, r) {
  let o = bNn(n),
    s = Rn({
      content: o,
    }),
    i;
  try {
    i = await dk({
      promptMessages: [s],
      cacheSafeParams: {
        ...t,
        forkContextMessages: r ? kao(e) : e,
      },
      canUseTool: Rao(),
      querySource: "compact",
      forkLabel: "reactive-compact",
      maxTurns: 1,
      fallbackModel: ENn(
        t.toolUseContext.options.mainLoopModel,
        t.toolUseContext.options.fallbackModel,
      ),
      skipTranscript: !0,
      skipCacheWrite: !0,
    });
  } catch (d) {
    let p = be(d);
    if (K1(p))
      T(`Reactive compact API call failed: ${p}`, {
        level: "error",
      });
    else ke(d);
    return {
      ok: !1,
      reason: "error",
      detail: p,
      status: void 0,
      isTimeout: !1,
    };
  }
  if (t.toolUseContext.abortController.signal.aborted)
    return {
      ok: !1,
      reason: "aborted",
    };
  let a = MI(i.messages);
  if (!a)
    return (
      ke(
        Error(
          `Reactive compact: no assistant message in summarization response (${i.messages.length} messages, types: ${i.messages.map((d) => d.type).join(", ")})`,
        ),
      ),
      {
        ok: !1,
        reason: "error",
        detail: "no assistant message in summarization response",
        status: void 0,
        isTimeout: !1,
      }
    );
  if (hSe(a))
    return {
      ok: !1,
      reason: "prompt_too_long",
      tokenGap: iut(a),
    };
  if (Kaa(a)) {
    let d = qv(e) - Pte;
    return {
      ok: !1,
      reason: "prompt_too_long",
      tokenGap: d > 0 ? d : void 0,
      viaCreditsBoundary: !0,
    };
  }
  if (M1n(a))
    return {
      ok: !1,
      reason: "media_too_large",
    };
  if (a.isApiErrorMessage) {
    let d = K8(a) ?? "API error";
    return (
      T(`Reactive compact: summarization returned API error: ${d}`, {
        level: "error",
      }),
      {
        ok: !1,
        reason: "error",
        detail: d,
        status: a.apiErrorStatus,
        isTimeout: d === aut,
      }
    );
  }
  let l = _Nn(i.messages);
  if (!l)
    return (
      ke(Error("Reactive compact: empty summary text in summarization response")),
      {
        ok: !1,
        reason: "error",
        detail: "summarization produced empty response",
        status: void 0,
        isTimeout: !1,
      }
    );
  let c = em(),
    u = LI() && Y2t(t.toolUseContext.getReplContexts(), t.toolUseContext.agentId);
  return {
    ok: !0,
    summaryText: l,
    forkAssistantMessageCount: On(
      i.messages,
      (d) => d.type === "assistant" && !d.isApiErrorMessage,
    ),
    totalUsage: i.totalUsage,
    messages: [
      Rn({
        content: Kjt(l, !0, c, void 0, u),
        isCompactSummary: !0,
        isVisibleInTranscriptOnly: !0,
      }),
    ],
  };
}
function Lca(e, t, n) {
  let r = 0,
    o = 0;
  for (let s = t - 1; s >= 0; s--) if (((r += e[s]), o++, r >= n)) break;
  if (o >= t - 1) return Math.max(1, Math.floor(t / 2));
  return o;
}
function tup(e, t, n) {
  if (e === void 0)
    return {
      mode: "gap_unparseable",
      step: 1,
    };
  return {
    mode: "gap_guided",
    step: Lca(t, n, e),
  };
}
async function SNn(e, t, n) {
  let r = zjt(e),
    o = r.length;
  if (o < 2)
    return (
      T("Reactive compact: fewer than 2 groups, nothing to compact", {
        level: "info",
      }),
      {
        ok: !1,
        reason: "too_few_groups",
        attempts: 0,
        totalGroups: o,
      }
    );
  let s = t.toolUseContext.abortController.signal,
    i = 1,
    a = 0,
    l = void 0,
    c,
    u = !1,
    d = !1;
  if (n?.initialTokenGap !== void 0 && o > 3) {
    c = r.map((f) => qv(f));
    let p = n.initialTokenGap - (c[o - 1] ?? 0);
    if (p > 0) {
      let f = Lca(c, o - 1, p);
      ((i = 1 + f),
        (l = {
          mode: "seeded",
          step: f,
          tokenGap: n.initialTokenGap,
        }));
    }
  }
  while (i < o) {
    if (s.aborted)
      return {
        ok: !1,
        reason: "aborted",
        attempts: a,
        totalGroups: o,
      };
    a++;
    let p = o - i,
      f = r.slice(0, p),
      m = r.slice(p),
      g = f.flat();
    if (!g.some((b) => b.type === "assistant")) {
      if (
        (T("Reactive compact: no assistant messages in summarize set, bailing", {
          level: "info",
        }),
        d)
      )
        G("tengu_compact_credits_clamp_rescue", {
          outcome: We("failed"),
          attempts: a - 1,
        });
      return {
        ok: !1,
        reason: a > 1 ? "exhausted" : "too_few_groups",
        attempts: a - 1,
        totalGroups: o,
      };
    }
    G("tengu_reactive_compact_attempt", {
      attempt: a,
      groupsToSummarize: f.length,
      groupsToPreserve: m.length,
      messagesToSummarize: g.length,
      strippedMedia: u,
      stepMode: Oo(l?.mode),
      stepSize: l?.step,
      tokenGap: l?.tokenGap,
    });
    let h = await eup(g, t, n?.customInstructions, u);
    if (h.ok) {
      if (d)
        G("tengu_compact_credits_clamp_rescue", {
          outcome: We("ok"),
          attempts: a,
        });
      return {
        ok: !0,
        result: {
          summaryMessages: h.messages,
          summaryText: h.summaryText,
          messagesToPreserve: m.flat(),
          attempt: a,
          totalUsage: h.totalUsage,
          forkAssistantMessageCount: h.forkAssistantMessageCount,
          groupsPreserved: i,
          totalGroups: o,
        },
      };
    }
    switch (h.reason) {
      case "aborted":
        return {
          ok: !1,
          reason: "aborted",
          attempts: a,
          totalGroups: o,
        };
      case "error":
        if (d)
          G("tengu_compact_credits_clamp_rescue", {
            outcome: We("failed"),
            attempts: a,
          });
        return {
          ok: !1,
          reason: "error",
          attempts: a,
          totalGroups: o,
          detail: h.detail,
          status: h.status,
          isTimeout: h.isTimeout,
        };
      case "media_too_large":
        if (!u) {
          ((u = !0),
            a--,
            T("Reactive compact: summarize hit media-size error, retrying stripped", {
              level: "info",
            }));
          continue;
        }
        return {
          ok: !1,
          reason: "media_unstrippable",
          attempts: a,
          totalGroups: o,
        };
      case "prompt_too_long":
        break;
    }
    if (h.viaCreditsBoundary) d = !0;
    c ??= r.map((b) => qv(b));
    let y = tup(h.tokenGap, c, p);
    ((l = {
      ...y,
      tokenGap: h.tokenGap,
    }),
      (i += y.step),
      T(
        `Reactive compact: attempt ${a} hit prompt-too-long (gap=${h.tokenGap ?? "?"} \u2192 ${y.mode} step ${y.step}), next preserves ${i}/${o}`,
        {
          level: "info",
        },
      ));
  }
  if (d)
    G("tengu_compact_credits_clamp_rescue", {
      outcome: We("failed"),
      attempts: a,
    });
  return {
    ok: !1,
    reason: "exhausted",
    attempts: a,
    totalGroups: o,
  };
}
