// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yhc
// matched 2.1.88 source: src/hooks/usePromptSuggestion.ts
// class=modified  jaccard=0.6666  score=0.9802  fileCov=0.6757
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Yhc] deps: Ye
Ome = R(rt(), 1);
function usePromptSuggestion({ inputValue: e, isAssistantResponding: t }) {
  let n = Ht((_) => _.promptSuggestion),
    r = Ho(),
    o = Pg(),
    { text: s, promptId: i, shownAt: a, acceptedAt: l, generationRequestId: c } = n,
    u = t || e.length > 0 ? null : s,
    d = s && a > 0,
    p = BTe.useRef(0),
    f = BTe.useRef(true),
    m = BTe.useRef(0);
  if (a > 0 && a !== m.current) ((m.current = a), (f.current = o), (p.current = 0));
  else if (a === 0) m.current = 0;
  if (e.length > 0 && p.current === 0 && d) p.current = Date.now();
  let g = BTe.useCallback(() => {
      (dfe(r),
        r((_) => ({
          ..._,
          promptSuggestion: {
            text: null,
            promptId: null,
            shownAt: 0,
            acceptedAt: 0,
            generationRequestId: null,
          },
        })));
    }, [r]),
    h = BTe.useCallback(() => {
      if (!d) return;
      r((_) => ({
        ..._,
        promptSuggestion: {
          ..._.promptSuggestion,
          acceptedAt: Date.now(),
        },
      }));
    }, [d, r]),
    y = BTe.useCallback(() => {
      r((_) => {
        if (_.promptSuggestion.shownAt !== 0 || !_.promptSuggestion.text) return _;
        return {
          ..._,
          promptSuggestion: {
            ..._.promptSuggestion,
            shownAt: Date.now(),
          },
        };
      });
    }, [r]),
    b = BTe.useCallback(
      (_, S) => {
        if (!d) return;
        let A = l > a,
          v = A || _ === s,
          C = v ? l || Date.now() : Date.now();
        if (
          (G("tengu_prompt_suggestion", {
            source: We("cli"),
            outcome: We(v ? "accepted" : "ignored"),
            prompt_id: Oo(i),
            ...(c && {
              generationRequestId: Hr(c),
            }),
            ...(v && {
              acceptMethod: We(A ? "tab" : "enter"),
            }),
            ...(v && {
              timeToAcceptMs: C - a,
            }),
            ...(!v && {
              timeToIgnoreMs: C - a,
            }),
            ...(p.current > 0 && {
              timeToFirstKeystrokeMs: p.current - a,
            }),
            wasFocusedWhenShown: f.current,
            similarity: Math.round((_.length / (s?.length || 1)) * 100) / 100,
            ...false,
          }),
          !S?.skipReset)
        )
          g();
      },
      [d, l, a, s, i, c, g],
    );
  return {
    suggestion: u,
    markAccepted: h,
    markShown: y,
    logOutcomeAtSubmission: b,
  };
}
var BTe;
