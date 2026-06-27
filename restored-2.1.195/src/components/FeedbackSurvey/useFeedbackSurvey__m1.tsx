// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fYo
// matched 2.1.88 source: src/components/FeedbackSurvey/useFeedbackSurvey.tsx
// class=modified (alt of src/components/FeedbackSurvey/useFeedbackSurvey.tsx)  jaccard=0.1908  score=0.5324  fileCov=0.2292
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fYo]
((afr = {
  minTimeBeforeFeedbackMs: 600000,
  minTimeBetweenFeedbackMs: 3600000,
  minTimeBetweenGlobalFeedbackMs: 100000000 /* 1e8 */,
  minUserTurnsBeforeFeedback: 5,
  minUserTurnsBetweenFeedback: 10,
  hideThanksAfterMs: 5000,
  onForModels: ["*"],
  probability: 0.005,
}),
  (lfr = {
    probability: 0,
  }));
function BNe({
  hideThanksAfterMs: e,
  otherSurveyActive: t = false,
  autoDismissAfterMs: n,
  onOpen: r,
  onSelect: o,
  onAutoDismiss: s,
  shouldShowTranscriptPrompt: i,
  onTranscriptPromptShown: a,
  onTranscriptSelect: l,
}) {
  let c = ks(),
    [u, d] = tD.useState("closed"),
    [p, f] = tD.useState(null),
    [m, g] = tD.useState(null),
    h = tD.useRef(mYo.randomUUID()),
    y = tD.useRef(null),
    b = tD.useRef(null);
  tD.useEffect(
    () => () => {
      b.current?.();
    },
    [],
  );
  let _ = tD.useCallback(() => {
      (d("thanks"),
        c.setTimeout(() => {
          (d("closed"), f(null));
        }, e));
    }, [c, e]),
    S = tD.useCallback(() => {
      (d("submitted"), c.setTimeout(() => d("closed"), e));
    }, [c, e]),
    A = tD.useCallback(() => {
      if (u !== "closed") return;
      (d("open"), (h.current = mYo.randomUUID()), r(h.current));
    }, [u, r]);
  tD.useEffect(() => {
    if (t && u === "open") d("closed");
  }, [t, u]);
  let v = tD.useRef(s);
  ((v.current = s),
    Pd(
      () => {
        (d("closed"), f(null), v.current?.(h.current));
      },
      u === "open" && n ? n : null,
      [u, n],
    ));
  let C = tD.useCallback(
      (D) => {
        if (((b.current = null), o(h.current, D), D === "dismissed")) (d("closed"), f(null));
        else if (i?.(D)) (d("transcript_prompt"), a?.(h.current, D));
        else _();
      },
      [_, o, i, a],
    ),
    x = tD.useCallback(
      (D) => {
        if ((f(D), (y.current = D), D === "dismissed")) {
          C(D);
          return;
        }
        (d("pending"), (b.current = c.setTimeout(() => C(D), Uvm)));
      },
      [c, C],
    ),
    I = tD.useCallback(() => {
      (b.current?.(), (b.current = null), f(null), (y.current = null), d("open"));
    }, []),
    k = tD.useCallback(
      (D) => {
        switch (D) {
          case "yes":
            (d("submitting"),
              (async () => {
                try {
                  let P = await l?.(h.current, D, y.current),
                    { success: O, bundlePath: L } =
                      typeof P === "object"
                        ? P
                        : {
                            success: P ?? false,
                            bundlePath: void 0,
                          };
                  if (O) (g(L ?? null), S());
                  else _();
                } catch {
                  _();
                }
              })());
            break;
          case "no":
          case "dont_ask_again":
            (l?.(h.current, D, y.current), _());
            break;
        }
      },
      [_, S, l],
    );
  return {
    state: u,
    lastResponse: p,
    appearanceId: h.current,
    transcriptBundlePath: m,
    open: A,
    handleSelect: x,
    handleUndo: I,
    handleTranscriptSelect: k,
  };
}
var mYo,
  tD,
  Uvm = 3000;
