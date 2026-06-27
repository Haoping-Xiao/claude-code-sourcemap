// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tRc
// matched 2.1.88 source: src/components/FeedbackSurvey/usePostCompactSurvey.tsx
// class=modified  jaccard=0.4709  score=0.8911  fileCov=0.4996
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var tRc = E(() => {
  aW();
  Un();
  kt();
  Uh();
  jc();
  uo();
  lf();
  er();
  wr();
  fn();
  Xbt();
  co();
  qd();
  aS();
  pYo();
  xtn();
  gYo();
  nD = R(rt(), 1);
  qvm = /\bmemor(?:y|ies)\b/i;
});
function Xvm(e, t) {
  let n = e.findIndex((r) => r.uuid === t);
  if (n === -1) return false;
  for (let r = n + 1; r < e.length; r++) {
    let o = e[r];
    if (o && (o.type === "user" || o.type === "assistant")) return true;
  }
  return false;
}
function rRc(e, t, n, r) {
  let o = nRc.c(25),
    s = n === void 0 ? false : n,
    i;
  if (o[0] !== r) ((i = r === void 0 ? {} : r), (o[0] = r), (o[1] = i));
  else i = o[1];
  let { enabled: a } = i,
    l = a === void 0 ? true : a,
    [c, u] = UNe.useState(null),
    d;
  if (o[2] === Symbol.for("react.memo_cache_sentinel")) ((d = new Set()), (o[2] = d));
  else d = o[2];
  let p = UNe.useRef(d),
    f = UNe.useRef(null),
    m = ewm,
    g = Zvm,
    h;
  if (o[3] === Symbol.for("react.memo_cache_sentinel"))
    ((h = {
      hideThanksAfterMs: zvm,
      onOpen: m,
      onSelect: g,
    }),
      (o[3] = h));
  else h = o[3];
  let {
      state: y,
      lastResponse: b,
      appearanceId: _,
      open: S,
      handleSelect: A,
      handleUndo: v,
    } = BNe(h),
    C,
    x;
  if (o[4] !== l)
    ((C = () => {
      if (!l) return;
      u(at(Kvm, false));
    }),
      (x = [l]),
      (o[4] = l),
      (o[5] = C),
      (o[6] = x));
  else ((C = o[5]), (x = o[6]));
  UNe.useEffect(C, x);
  let I;
  if (o[7] !== e) ((I = new Set(e.filter(Qvm).map(Jvm))), (o[7] = e), (o[8] = I));
  else I = o[8];
  let k = I,
    D,
    P;
  if (
    o[9] !== k ||
    o[10] !== l ||
    o[11] !== c ||
    o[12] !== s ||
    o[13] !== t ||
    o[14] !== e ||
    o[15] !== S ||
    o[16] !== y
  )
    ((P = () => {
      if (!l) return;
      if (y !== "closed" || t) return;
      if (s) return;
      if (c !== true) return;
      if (Fte()) return;
      if (!Us("allow_product_feedback")) return;
      if (Oe.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) return;
      if (f.current !== null) {
        if (Xvm(e, f.current)) {
          if (((f.current = null), Math.random() < Yvm)) S();
          return;
        }
      }
      let L = Array.from(k).filter((M) => !p.current.has(M));
      if (L.length > 0) ((p.current = new Set(k)), (f.current = L.at(-1)));
    }),
      (D = [l, k, y, t, s, c, e, S]),
      (o[9] = k),
      (o[10] = l),
      (o[11] = c),
      (o[12] = s),
      (o[13] = t),
      (o[14] = e),
      (o[15] = S),
      (o[16] = y),
      (o[17] = D),
      (o[18] = P));
  else ((D = o[17]), (P = o[18]));
  UNe.useEffect(P, D);
  let O;
  if (o[19] !== _ || o[20] !== A || o[21] !== v || o[22] !== b || o[23] !== y)
    ((O = {
      state: y,
      lastResponse: b,
      appearanceId: _,
      handleSelect: A,
      handleUndo: v,
    }),
      (o[19] = _),
      (o[20] = A),
      (o[21] = v),
      (o[22] = b),
      (o[23] = y),
      (o[24] = O));
  else O = o[24];
  return O;
}
function Jvm(e) {
  return e.uuid;
}
function Qvm(e) {
  return pA(e);
}
function Zvm(e, t) {
  (G("tengu_post_compact_survey_event", {
    event_type: We("responded"),
    appearance_id: e,
    response: $e(t),
  }),
    Jc("feedback_survey", {
      event_type: "responded",
      appearance_id: e,
      response: t,
      survey_type: "post_compact",
    }));
}
function ewm(e) {
  (G("tengu_post_compact_survey_event", {
    event_type: We("appeared"),
    appearance_id: e,
  }),
    Jc("feedback_survey", {
      event_type: "appeared",
      appearance_id: e,
      survey_type: "post_compact",
    }));
}
var nRc,
  UNe,
  zvm = 5000,
  Kvm = "tengu_post_compact_survey",
  Yvm = 0.2;
