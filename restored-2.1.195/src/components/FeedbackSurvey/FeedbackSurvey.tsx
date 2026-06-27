// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TRc
// matched 2.1.88 source: src/components/FeedbackSurvey/FeedbackSurvey.tsx
// class=modified  jaccard=0.2695  score=0.3158  fileCov=0.6477
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module TRc] deps: Xa, Ye, hse, pfr
((ARc = R(lt(), 1)),
  (tK = R(se(), 1)),
  (gwm = ["y", "n", "d"]),
  (ERc = {
    y: "yes",
    n: "no",
    d: "dont_ask_again",
  }),
  (hwm = [
    {
      key: "y",
      label: "Yes",
      width: 10,
    },
    {
      key: "n",
      label: "No",
      width: 10,
    },
    {
      key: "d",
      label: "Don't ask again",
    },
  ]));
function FeedbackSurvey(t0) {
  let t = _Yo.c(33),
    {
      state: n,
      lastResponse: r,
      handleSelect: o,
      handleUndo: s,
      handleTranscriptSelect: i,
      inputValue: a,
      setInputValue: l,
      onRequestFeedback: c,
      appearanceId: u,
      surveyType: d,
      message: p,
      memoryEvaluation: f,
      showNotSure: m,
      transcriptBundlePath: g,
    } = t0,
    h = m === void 0 ? false : m;
  if (n === "closed") return null;
  if (n === "pending") {
    let _;
    if (t[0] !== s || t[1] !== r)
      ((_ = $C.jsx(bwm, {
        lastResponse: r,
        onUndo: s,
      })),
        (t[0] = s),
        (t[1] = r),
        (t[2] = _));
    else _ = t[2];
    return _;
  }
  if (n === "thanks") {
    let _;
    if (t[3] !== u || t[4] !== a || t[5] !== r || t[6] !== c || t[7] !== l || t[8] !== d)
      ((_ = $C.jsx(FeedbackSurveyThanks, {
        lastResponse: r,
        inputValue: a,
        setInputValue: l,
        onRequestFeedback: c,
        appearanceId: u,
        surveyType: d,
      })),
        (t[3] = u),
        (t[4] = a),
        (t[5] = r),
        (t[6] = c),
        (t[7] = l),
        (t[8] = d),
        (t[9] = _));
    else _ = t[9];
    return _;
  }
  if (n === "submitted") {
    if (g) {
      let S;
      if (t[10] === Symbol.for("react.memo_cache_sentinel"))
        ((S = $C.jsxs(w, {
          color: "success",
          children: ["\u2713", " Transcript bundle saved"],
        })),
          (t[10] = S));
      else S = t[10];
      let A;
      if (t[11] !== g)
        ((A = $C.jsx(w, {
          dimColor: true,
          wrap: "wrap",
          children: g,
        })),
          (t[11] = g),
          (t[12] = A));
      else A = t[12];
      let v;
      if (t[13] === Symbol.for("react.memo_cache_sentinel"))
        ((v = $C.jsx(w, {
          wrap: "wrap",
          children:
            "Send this file to your Anthropic account representative or attach it to your support request.",
        })),
          (t[13] = v));
      else v = t[13];
      let C;
      if (t[14] !== A)
        ((C = $C.jsxs(U, {
          marginTop: 1,
          flexDirection: "column",
          children: [S, A, v],
        })),
          (t[14] = A),
          (t[15] = C));
      else C = t[15];
      return C;
    }
    let _;
    if (t[16] === Symbol.for("react.memo_cache_sentinel"))
      ((_ = $C.jsx(U, {
        marginTop: 1,
        children: $C.jsxs(w, {
          color: "success",
          children: ["\u2713", " Thanks for sharing your transcript!"],
        }),
      })),
        (t[16] = _));
    else _ = t[16];
    return _;
  }
  if (n === "submitting") {
    let _;
    if (t[17] === Symbol.for("react.memo_cache_sentinel"))
      ((_ = $C.jsx(U, {
        marginTop: 1,
        children: $C.jsxs(w, {
          dimColor: true,
          children: ["Sharing transcript", "\u2026"],
        }),
      })),
        (t[17] = _));
    else _ = t[17];
    return _;
  }
  if (n === "transcript_prompt") {
    if (!i) return null;
    if (a && !mfr(a.toLowerCase())) return null;
    let _;
    if (t[18] !== i || t[19] !== a || t[20] !== l)
      ((_ = $C.jsx(HRc, {
        onSelect: i,
        inputValue: a,
        setInputValue: l,
      })),
        (t[18] = i),
        (t[19] = a),
        (t[20] = l),
        (t[21] = _));
    else _ = t[21];
    return _;
  }
  let y = a.length === 1 ? pRc(a) : a;
  if (y && !hYo(y, h)) return null;
  if (f) {
    let _;
    if (t[22] !== o || t[23] !== a || t[24] !== f || t[25] !== l)
      ((_ = $C.jsx(bRc, {
        evaluation: f,
        onSelect: o,
        inputValue: a,
        setInputValue: l,
      })),
        (t[22] = o),
        (t[23] = a),
        (t[24] = f),
        (t[25] = l),
        (t[26] = _));
    else _ = t[26];
    return _;
  }
  let b;
  if (t[27] !== o || t[28] !== a || t[29] !== p || t[30] !== l || t[31] !== h)
    ((b = $C.jsx(ffr, {
      onSelect: o,
      inputValue: a,
      setInputValue: l,
      message: p,
      showNotSure: h,
    })),
      (t[27] = o),
      (t[28] = a),
      (t[29] = p),
      (t[30] = l),
      (t[31] = h),
      (t[32] = b));
  else b = t[32];
  return b;
}
function bwm(e) {
  let t = _Yo.c(7),
    { lastResponse: n, onUndo: r } = e,
    o;
  if (t[0] !== r)
    ((o = (c, u) => {
      if (u.escape) return (r(), true);
    }),
      (t[0] = r),
      (t[1] = o));
  else o = t[1];
  Zat(o);
  let s = n && n !== "dismissed" ? _wm[n] : "",
    i;
  if (t[2] !== s)
    ((i = $C.jsx(w, {
      color: "text",
      children: s,
    })),
      (t[2] = s),
      (t[3] = i));
  else i = t[3];
  let a;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((a = $C.jsx(ht, {
      chord: "escape",
      action: "undo",
    })),
      (t[4] = a));
  else a = t[4];
  let l;
  if (t[5] !== i)
    ((l = $C.jsx(U, {
      marginTop: 1,
      children: $C.jsxs(w, {
        dimColor: true,
        children: ["Feedback: ", i, " \xB7", " ", a],
      }),
    })),
      (t[5] = i),
      (t[6] = l));
  else l = t[6];
  return l;
}
function FeedbackSurveyThanks({
  lastResponse: e,
  inputValue: t,
  setInputValue: n,
  onRequestFeedback: r,
  appearanceId: o,
  surveyType: s,
}) {
  let i = e && e !== "dismissed" ? e : null,
    a = i ? "/feedback" : null,
    l = Oe.DISABLE_FEEDBACK_COMMAND || Oe.DISABLE_BUG_COMMAND,
    u = Boolean(r && i && !(a === "/feedback" && l)),
    d = ofr(),
    p = vRc.useRef(d);
  return (
    (p.current = d),
    lvt({
      inputValue: t,
      setInputValue: n,
      isValidDigit: Swm,
      enabled: u,
      once: true,
      mountDelayMs: 0,
      onDigit: () => {
        if (
          (G("tengu_feedback_survey_event", {
            ...p.current,
            event_type: We("followup_accepted"),
            response: Oo(e),
            ...(o && {
              appearance_id: o,
            }),
            ...(s && {
              survey_type: $e(s),
            }),
          }),
          i && a === "/feedback" && o && s)
        )
          wDl({
            appearanceId: o,
            response: i,
            surveyType: s,
            setAt: Date.now(),
          });
        if (a) r?.(a);
      },
    }),
    $C.jsxs(U, {
      marginTop: 1,
      flexDirection: "column",
      children: [
        $C.jsx(w, {
          color: "success",
          children: "Thanks for the feedback!",
        }),
        u && i && a
          ? $C.jsxs(w, {
              dimColor: true,
              children: [
                "(Optional) Press [",
                $C.jsx(w, {
                  color: "ansi:cyan",
                  children: "1",
                }),
                "] to",
                " ",
                Ewm[i],
                " \xB7 ",
                a,
              ],
            })
          : l
            ? null
            : $C.jsx(w, {
                dimColor: true,
                children: "Use /feedback to share detailed feedback anytime.",
              }),
      ],
    })
  );
}
var _Yo,
  vRc,
  $C,
  _wm,
  Swm = (e) => e === "1",
  Ewm;
