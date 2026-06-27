// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pfr
// matched 2.1.88 source: src/components/FeedbackSurvey/FeedbackSurveyView.tsx
// class=modified  jaccard=0.3842  score=0.6916  fileCov=0.4636
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var pfr = E(() => {
  Ye();
  Yj();
  ps();
  ((qme = R(rt(), 1)),
    (dRc = new Map([
      ["&", "1"],
      ["\xE9", "2"],
      ['"', "3"],
      ["'", "4"],
      ["(", "5"],
      ["-", "6"],
      ["\xA7", "6"],
      ["\xE8", "7"],
      ["_", "8"],
      ["\xE7", "9"],
      ["\xE0", "0"],
    ])));
});
function hYo(e, t = false) {
  if (e === "4") return t;
  return e === "0" || e === "1" || e === "2" || e === "3";
}
function ffr(e) {
  let t = hRc.c(25),
    {
      onSelect: n,
      inputValue: r,
      setInputValue: o,
      message: s,
      messageBold: i,
      mountDelayMs: a,
      showNotSure: l,
    } = e,
    c = s === void 0 ? pwm : s,
    u = i === void 0 ? true : i,
    d = l === void 0 ? false : l,
    p;
  if (t[0] !== d) ((p = d ? [...mRc, uwm, gRc] : [...mRc, gRc]), (t[0] = d), (t[1] = p));
  else p = t[1];
  let f = p,
    m;
  if (t[2] !== d) ((m = (v) => hYo(v, d)), (t[2] = d), (t[3] = m));
  else m = t[3];
  let g;
  if (t[4] !== n) ((g = (v) => n(fRc[v])), (t[4] = n), (t[5] = g));
  else g = t[5];
  let h;
  if (t[6] !== r || t[7] !== a || t[8] !== o || t[9] !== m || t[10] !== g)
    ((h = {
      inputValue: r,
      setInputValue: o,
      isValidDigit: m,
      onDigit: g,
      mountDelayMs: a,
    }),
      (t[6] = r),
      (t[7] = a),
      (t[8] = o),
      (t[9] = m),
      (t[10] = g),
      (t[11] = h));
  else h = t[11];
  lvt(h);
  let y;
  if (t[12] === Symbol.for("react.memo_cache_sentinel"))
    ((y = FNe.jsx(U, {
      minWidth: 2,
      children: FNe.jsx(w, {
        color: "ansi:cyan",
        children: "\u25CF",
      }),
    })),
      (t[12] = y));
  else y = t[12];
  let b;
  if (t[13] !== c || t[14] !== u)
    ((b = FNe.jsxs(U, {
      children: [
        y,
        FNe.jsx(w, {
          bold: u,
          wrap: "wrap",
          children: c,
        }),
      ],
    })),
      (t[13] = c),
      (t[14] = u),
      (t[15] = b));
  else b = t[15];
  let _;
  if (t[16] !== n || t[17] !== o)
    ((_ = (v) => {
      (o(""), n(fRc[v]));
    }),
      (t[16] = n),
      (t[17] = o),
      (t[18] = _));
  else _ = t[18];
  let S;
  if (t[19] !== f || t[20] !== _)
    ((S = FNe.jsx(cRc, {
      options: f,
      optionWidth: dwm,
      onSelect: _,
    })),
      (t[19] = f),
      (t[20] = _),
      (t[21] = S));
  else S = t[21];
  let A;
  if (t[22] !== S || t[23] !== b)
    ((A = FNe.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [b, S],
    })),
      (t[22] = S),
      (t[23] = b),
      (t[24] = A));
  else A = t[24];
  return A;
}
var hRc,
  FNe,
  fRc,
  mRc,
  uwm,
  gRc,
  dwm = 10,
  pwm = "How is Claude doing this session? (optional)";
