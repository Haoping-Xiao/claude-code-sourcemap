// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gYo
// matched 2.1.88 source: src/components/FeedbackSurvey/useFeedbackSurvey.tsx
// class=modified  jaccard=0.4854  score=0.8497  fileCov=0.531
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gYo = E(() => {
  fn();
});
function z0c(e, t, n, r = "session", o = false, s = false) {
  let i = MC.useRef("unknown");
  i.current = MI(e)?.message?.id || "unknown";
  let [a, l] = MC.useState(() => ({
      timeLastShown: null,
      timeLastShownAtClock: null,
      submitCountAtLastAppearance: null,
    })),
    c = Itn("tengu_feedback_survey_config", afr),
    u = Itn("tengu_bad_survey_transcript_ask_config", lfr),
    d = Itn("tengu_fine_survey_transcript_ask_config", lfr),
    p = Itn("tengu_good_survey_transcript_ask_config", lfr),
    f = Dr().feedbackSurveyRate,
    m = ks(),
    g = MC.useRef(m.now()),
    h = MC.useRef(n),
    y = MC.useRef(n);
  y.current = n;
  let b = MC.useRef(e);
  b.current = e;
  let _ = ofr(),
    S = MC.useRef(_);
  S.current = _;
  let A = MC.useRef(false),
    v = MC.useRef(null),
    C = q0c(t),
    x = bSt(),
    I = MC.useMemo(() => {
      let [ne] = pcr(e, 1).messages;
      if (!ne) return false;
      return /^[ \t]*\d{1,2}[.)][ \t]/m.test(ne);
    }, [e]),
    k = MC.useCallback(
      (ne) => {
        let oe = Date.now(),
          re = m.now();
        if (
          (l((ee) => {
            if (ee.timeLastShown === oe && ee.submitCountAtLastAppearance === ne) return ee;
            return {
              timeLastShown: oe,
              timeLastShownAtClock: re,
              submitCountAtLastAppearance: ne,
            };
          }),
          Dt().feedbackSurveyState?.lastShownTime !== oe)
        )
          gn((ee) => ({
            ...ee,
            feedbackSurveyState: {
              lastShownTime: oe,
            },
          }));
      },
      [m],
    ),
    D = MC.useCallback(
      (ne) => {
        (k(y.current),
          G("tengu_feedback_survey_event", {
            ...S.current,
            event_type: We("appeared"),
            appearance_id: Hr(ne),
            last_assistant_message_id: Hr(i.current),
            survey_type: $e(r),
            prompt_index: Psn(),
          }),
          Jc("feedback_survey", {
            event_type: "appeared",
            appearance_id: ne,
            survey_type: r,
            enabled_via_override: y_e(),
          }));
      },
      [k, r],
    ),
    P = MC.useCallback(
      (ne, oe) => {
        (k(y.current),
          G("tengu_feedback_survey_event", {
            ...S.current,
            event_type: We("responded"),
            appearance_id: Hr(ne),
            response: $e(oe),
            last_assistant_message_id: Hr(i.current),
            survey_type: $e(r),
            prompt_index: Psn(),
          }),
          Jc("feedback_survey", {
            event_type: "responded",
            appearance_id: ne,
            response: oe,
            survey_type: r,
            enabled_via_override: y_e(),
          }));
      },
      [k, r],
    ),
    O = MC.useCallback(
      (ne) => {
        if (ne !== "bad" && ne !== "fine" && ne !== "good") return false;
        if (Vi()) return false;
        if (!Us("allow_product_feedback")) return false;
        if (Zze().kind === "disabled") return false;
        if (cfr()) return true;
        if (Dt().transcriptShareDismissed) return false;
        let oe = ne === "bad" ? u.probability : ne === "fine" ? d.probability : p.probability;
        return Math.random() <= oe;
      },
      [u.probability, d.probability, p.probability],
    ),
    L = MC.useCallback(
      (ne, oe) => {
        let re =
          oe === "good"
            ? "good_feedback_survey"
            : oe === "fine"
              ? "fine_feedback_survey"
              : "bad_feedback_survey";
        (G("tengu_feedback_survey_event", {
          ...S.current,
          event_type: We("transcript_prompt_appeared"),
          appearance_id: Hr(ne),
          last_assistant_message_id: Hr(i.current),
          survey_type: $e(r),
          trigger: $e(re),
        }),
          Jc("feedback_survey", {
            event_type: "transcript_prompt_appeared",
            appearance_id: ne,
            survey_type: r,
            enabled_via_override: y_e(),
          }));
      },
      [r],
    ),
    M = MC.useCallback(
      async (ne, oe, re) => {
        let ee =
          re === "good"
            ? "good_feedback_survey"
            : re === "fine"
              ? "fine_feedback_survey"
              : "bad_feedback_survey";
        if (
          (G("tengu_feedback_survey_event", {
            ...S.current,
            event_type: `transcript_share_${oe}`,
            appearance_id: Hr(ne),
            last_assistant_message_id: Hr(i.current),
            survey_type: $e(r),
            trigger: $e(ee),
          }),
          oe === "dont_ask_again")
        )
          gn((ce) => ({
            ...ce,
            transcriptShareDismissed: true,
          }));
        if (oe === "yes") {
          let ce = await ifr(b.current, ee, ne);
          return (
            G("tengu_feedback_survey_event", {
              ...S.current,
              event_type: We(ce.success ? "transcript_share_submitted" : "transcript_share_failed"),
              appearance_id: ne,
              trigger: $e(ee),
              error_code: ce.errorCode,
            }),
            ce
          );
        }
        return false;
      },
      [r],
    ),
    {
      state: N,
      lastResponse: B,
      appearanceId: $,
      transcriptBundlePath: q,
      open: W,
      handleSelect: V,
      handleUndo: Y,
      handleTranscriptSelect: z,
    } = BNe({
      otherSurveyActive: s,
      hideThanksAfterMs: c.hideThanksAfterMs,
      onOpen: D,
      onSelect: P,
      shouldShowTranscriptPrompt: O,
      onTranscriptPromptShown: L,
      onTranscriptSelect: M,
    }),
    K = As(),
    Z = MC.useMemo(() => {
      if (c.onForModels.length === 0) return false;
      if (c.onForModels.includes("*")) return true;
      return c.onForModels.includes(K);
    }, [c.onForModels, K]),
    J = MC.useMemo(() => {
      if (N !== "closed") return false;
      if (t) return false;
      if (!C) return false;
      if (x) return false;
      if (I) return false;
      if (o) return false;
      if (s) return false;
      if (Oe.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) return false;
      if (Fte()) return false;
      if (!Us("allow_product_feedback")) return false;
      if (ut(process.env.CLAUDE_FORCE_DISPLAY_SURVEY) && !a.timeLastShown) return true;
      if (!Z) return false;
      let ne = m.now();
      if (a.timeLastShownAtClock !== null) {
        if (ne - a.timeLastShownAtClock < c.minTimeBetweenFeedbackMs) return false;
        if (
          a.submitCountAtLastAppearance !== null &&
          n < a.submitCountAtLastAppearance + c.minUserTurnsBetweenFeedback
        )
          return false;
      } else {
        if (ne - g.current < c.minTimeBeforeFeedbackMs) return false;
        if (n < h.current + c.minUserTurnsBeforeFeedback) return false;
      }
      if (v.current !== n) ((v.current = n), (A.current = Math.random() <= (f ?? c.probability)));
      if (!A.current) return false;
      let oe = Dt().feedbackSurveyState;
      if (oe?.lastShownTime) {
        if (Date.now() - oe.lastShownTime < c.minTimeBetweenGlobalFeedbackMs) return false;
      }
      return true;
    }, [
      m,
      N,
      t,
      C,
      x,
      I,
      o,
      s,
      Z,
      a.timeLastShown,
      a.timeLastShownAtClock,
      a.submitCountAtLastAppearance,
      n,
      c.minTimeBetweenFeedbackMs,
      c.minTimeBetweenGlobalFeedbackMs,
      c.minUserTurnsBetweenFeedback,
      c.minTimeBeforeFeedbackMs,
      c.minUserTurnsBeforeFeedback,
      c.probability,
      f,
    ]);
  return (
    MC.useEffect(() => {
      if (J) W();
    }, [J, W]),
    {
      state: N,
      lastResponse: B,
      appearanceId: $,
      transcriptBundlePath: q,
      handleSelect: V,
      handleUndo: Y,
      handleTranscriptSelect: z,
    }
  );
}
var MC;
