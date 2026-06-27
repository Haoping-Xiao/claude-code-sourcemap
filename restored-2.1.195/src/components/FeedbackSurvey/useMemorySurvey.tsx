// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K0c
// matched 2.1.88 source: src/components/FeedbackSurvey/useMemorySurvey.tsx
// class=modified  jaccard=0.3587  score=0.5277  fileCov=0.5282
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module K0c] deps: ft, yfe, W0c, V0c, aW, kt, Ye, fb, eKe, jc, er, wr, fn, co, Ao, qd, dr, aS, dYo, pYo, fYo, xtn, gYo
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
    at(Gvm, false) &&
    lu() &&
    !Fte() &&
    Us("allow_product_feedback") &&
    !Oe.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY
  );
}
function Q0c() {
  return false;
}
function Z0c(e) {
  for (let t of e) {
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
function eRc(e, t, n = false, { enabled: r = true, otherSurveyActive: o = false } = {}) {
  let s = nD.useRef(new Set()),
    i = nD.useRef(false),
    a = nD.useRef(e);
  a.current = e;
  let l = Ht((D) => D.lastMemoryEvaluation),
    [c, u] = nD.useState(null),
    d = nD.useRef(null),
    p = nD.useCallback((D, P, O) => {
      let L = d.current;
      (G(ufr, {
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
      (G(ufr, {
        event_type: We("transcript_prompt_appeared"),
        appearance_id: D,
        trigger: $e(dfr),
      }),
        Jc("feedback_survey", {
          event_type: "transcript_prompt_appeared",
          appearance_id: D,
          survey_type: "memory",
        }));
    }, []),
    b = nD.useCallback(async (D, P) => {
      if (
        (G(ufr, {
          event_type: `transcript_share_${P}`,
          appearance_id: D,
          trigger: $e(dfr),
        }),
        P === "dont_ask_again")
      )
        gn((O) => ({
          ...O,
          transcriptShareDismissed: true,
        }));
      if (P === "yes") {
        let O = await ifr(a.current, dfr, D);
        return (
          G(ufr, {
            event_type: We(O.success ? "transcript_share_submitted" : "transcript_share_failed"),
            appearance_id: D,
            trigger: $e(dfr),
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
    k = nD.useMemo(() => MI(e), [e]);
  return (
    nD.useEffect(() => {
      if (e.length === 0) {
        ((i.current = false), s.current.clear());
        return;
      }
      if (_ !== "closed" || t || n) return;
      if (o) return;
      if (!r || Q0c() || !J0c()) return;
      if (!k || s.current.has(k.uuid)) return;
      let D = zl(k.message.content, " ");
      if (!qvm.test(D)) return;
      if ((s.current.add(k.uuid), !i.current)) i.current = Z0c(e);
      if (!i.current) return;
      if (X0c() || Math.random() < Y0c()) v();
    }, [r, o, _, t, n, k, e, v]),
    nD.useEffect(() => {
      if (e.length === 0) {
        ((d.current = null), u(null));
        return;
      }
      if (_ !== "closed" || t || n) return;
      if (o) return;
      if (!r || !Q0c() || !J0c()) return;
      if (!k || !l) return;
      if (l.assistantUuid !== k.uuid) return;
      if (s.current.has(k.uuid)) return;
      s.current.add(k.uuid);
      let D = l.evaluation;
      if (!Vvm(D.classification)) return;
      if (!i.current) i.current = Z0c(a.current);
      if (!i.current) return;
      if (D.classification !== "harmed" && !X0c() && Math.random() >= Y0c()) return;
      ((d.current = D), u(D), v());
    }, [r, o, _, t, n, k, l, e.length, v]),
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
  Gvm = "tengu_dunwich_bell",
  ufr = "tengu_memory_survey_event",
  Wvm = "tengu_velvet_moth",
  dfr = "memory_survey",
  qvm;
