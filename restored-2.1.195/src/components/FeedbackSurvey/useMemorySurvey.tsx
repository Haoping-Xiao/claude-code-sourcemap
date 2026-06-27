// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K0c
// matched 2.1.88 source: src/components/FeedbackSurvey/useMemorySurvey.tsx
// class=modified  jaccard=0.3587  score=0.5277  fileCov=0.5282
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module K0c] deps: services/analytics/index.ts, jwa/index.js, hooks/useTimeout.ts, components/EffortIndicator.ts, types/generated/google/protobuf/timestamp.ts, utils/debug.ts, hooks/useTerminalSize.ts, fb, utils/sessionStorage.ts, utils/semver.ts, utils/config.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/messages.ts, utils/agentContext.ts, utils/log.ts, utils/settings/settings.ts, utils/telemetry/pluginTelemetry.ts, components/FeedbackSurvey/submitTranscriptShare.ts, utils/sessionStorage.ts, components/FeedbackSurvey/useFeedbackSurvey.tsx, utils/crypto.ts, components/FeedbackSurvey/useFeedbackSurvey.tsx
MC = R(rt(), 1);
function Y0c() {
  return at(Wvm, 0.2);
}
function X0c() {
  return false;
}
function Vvm(e) {
  return e === "helped" || e === "harmed" || e === "neutral";
}
function J0c() {
  return (
    at(MEMORY_SURVEY_GATE, false) &&
    lu() &&
    !Fte() &&
    Us("allow_product_feedback") &&
    !Oe.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY
  );
}
function Q0c() {
  return false;
}
function hasMemoryFileRead(messages) {
  for (let t of messages) {
    if (t.type !== "assistant") continue;
    let n = t.message.content;
    if (!Array.isArray(n)) continue;
    for (let r of n) {
      if (r.type !== "tool_use" || r.name !== Ds) continue;
      let o = r.input;
      if (typeof o.file_path === "string" && Eze(o.file_path)) return true;
    }
  }
  return false;
}
function useMemorySurvey(
  messages,
  isLoading,
  n = false,
  { enabled: r = true, otherSurveyActive: o = false } = {},
) {
  let s = nD.useRef(new Set()),
    i = nD.useRef(false),
    a = nD.useRef(messages);
  a.current = messages;
  let l = Ht((D) => D.lastMemoryEvaluation),
    [c, u] = nD.useState(null),
    d = nD.useRef(null),
    p = nD.useCallback((D, P, O) => {
      let L = d.current;
      (G(MEMORY_SURVEY_EVENT, {
        event_type: $e(D),
        appearance_id: P,
        response: Oo(O),
        judge_classification: Oo(L?.classification),
        judge_evidence_type: L?.evidence_type,
      }),
        Jc("feedback_survey", {
          event_type: D,
          appearance_id: P,
          response: O,
          survey_type: "memory",
        }));
    }, []),
    f = nD.useCallback((D) => p("appeared", D), [p]),
    m = nD.useCallback((D) => p("timeout", D), [p]),
    g = nD.useCallback((D, P) => p("responded", D, P), [p]),
    h = nD.useCallback((D) => false, []),
    y = nD.useCallback((D) => {
      (G(MEMORY_SURVEY_EVENT, {
        event_type: We("transcript_prompt_appeared"),
        appearance_id: D,
        trigger: $e(TRANSCRIPT_SHARE_TRIGGER),
      }),
        Jc("feedback_survey", {
          event_type: "transcript_prompt_appeared",
          appearance_id: D,
          survey_type: "memory",
        }));
    }, []),
    b = nD.useCallback(async (D, P) => {
      if (
        (G(MEMORY_SURVEY_EVENT, {
          event_type: `transcript_share_${P}`,
          appearance_id: D,
          trigger: $e(TRANSCRIPT_SHARE_TRIGGER),
        }),
        P === "dont_ask_again")
      )
        gn((O) => ({
          ...O,
          transcriptShareDismissed: true,
        }));
      if (P === "yes") {
        let O = await ifr(a.current, TRANSCRIPT_SHARE_TRIGGER, D);
        return (
          G(MEMORY_SURVEY_EVENT, {
            event_type: We(O.success ? "transcript_share_submitted" : "transcript_share_failed"),
            appearance_id: D,
            trigger: $e(TRANSCRIPT_SHARE_TRIGGER),
            error_code: O.errorCode,
          }),
          O.success
        );
      }
      return false;
    }, []),
    {
      state: _,
      lastResponse: S,
      appearanceId: A,
      open: v,
      handleSelect: C,
      handleUndo: x,
      handleTranscriptSelect: I,
    } = BNe({
      otherSurveyActive: o,
      hideThanksAfterMs: Fvm,
      autoDismissAfterMs: jvm,
      onOpen: f,
      onSelect: g,
      onAutoDismiss: m,
      shouldShowTranscriptPrompt: h,
      onTranscriptPromptShown: y,
      onTranscriptSelect: b,
    }),
    k = nD.useMemo(() => MI(messages), [messages]);
  return (
    nD.useEffect(() => {
      if (messages.length === 0) {
        ((i.current = false), s.current.clear());
        return;
      }
      if (_ !== "closed" || isLoading || n) return;
      if (o) return;
      if (!r || Q0c() || !J0c()) return;
      if (!k || s.current.has(k.uuid)) return;
      let D = zl(k.message.content, " ");
      if (!qvm.test(D)) return;
      if ((s.current.add(k.uuid), !i.current)) i.current = hasMemoryFileRead(messages);
      if (!i.current) return;
      if (X0c() || Math.random() < Y0c()) v();
    }, [r, o, _, isLoading, n, k, messages, v]),
    nD.useEffect(() => {
      if (messages.length === 0) {
        ((d.current = null), u(null));
        return;
      }
      if (_ !== "closed" || isLoading || n) return;
      if (o) return;
      if (!r || !Q0c() || !J0c()) return;
      if (!k || !l) return;
      if (l.assistantUuid !== k.uuid) return;
      if (s.current.has(k.uuid)) return;
      s.current.add(k.uuid);
      let D = l.evaluation;
      if (!Vvm(D.classification)) return;
      if (!i.current) i.current = hasMemoryFileRead(a.current);
      if (!i.current) return;
      if (D.classification !== "harmed" && !X0c() && Math.random() >= Y0c()) return;
      ((d.current = D), u(D), v());
    }, [r, o, _, isLoading, n, k, l, messages.length, v]),
    {
      state: _,
      lastResponse: S,
      appearanceId: A,
      evaluation: c,
      handleSelect: C,
      handleUndo: x,
      handleTranscriptSelect: I,
    }
  );
}
var nD,
  Fvm = 5000,
  jvm = 60000,
  MEMORY_SURVEY_GATE = "tengu_dunwich_bell",
  MEMORY_SURVEY_EVENT = "tengu_memory_survey_event",
  Wvm = "tengu_velvet_moth",
  TRANSCRIPT_SHARE_TRIGGER = "memory_survey",
  qvm;
