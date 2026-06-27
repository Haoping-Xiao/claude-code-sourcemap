// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oRc
// matched 2.1.88 source: src/utils/words.ts
// class=modified (alt of src/utils/words.ts)  jaccard=0.0018  score=0.0313  fileCov=0.002
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oRc] deps: aW, Un, kt, jc, wr, co, aS, xtn
((nRc = R(lt(), 1)), (UNe = R(rt(), 1)));
function ADJECTIVES(e) {
  return e === "instruction_following" ? "instruction_following" : "generic";
}
function awm(e) {
  if (!/^\d+$/.test(e)) return;
  let t = parseInt(e, 10);
  return t > 0 ? t : void 0;
}
function iRc(e, t, n, r, o, s) {
  let i = sRc.c(29),
    a = o === void 0 ? false : o,
    l;
  if (i[0] !== s) ((l = s === void 0 ? {} : s), (i[0] = s), (i[1] = l));
  else l = i[1];
  let { enabled: c, otherSurveyActive: u } = l,
    d = c === void 0 ? true : c,
    p = u === void 0 ? false : u,
    [f, m] = Wme.useState(void 0),
    [g, h] = Wme.useState("generic"),
    y = Wme.useRef(false),
    b = Wme.useRef(r),
    _ = Wme.useRef(null),
    S;
  if (i[2] === Symbol.for("react.memo_cache_sentinel"))
    ((S = (V) => {
      let Y = _.current;
      (G("tengu_long_context_survey_event", {
        event_type: We("appeared"),
        question_variant: $e(Y?.variant ?? "generic"),
        appearance_id: Hr(V),
        threshold: Y?.threshold,
        token_count_at_trigger: Y?.tokenCount,
        last_assistant_message_id: Hr(Y?.lastAssistantId),
      }),
        Jc("feedback_survey", {
          event_type: "appeared",
          appearance_id: V,
          survey_type: "long_context",
        }));
    }),
      (i[2] = S));
  else S = i[2];
  let A = S,
    v;
  if (i[3] === Symbol.for("react.memo_cache_sentinel"))
    ((v = (V, Y) => {
      let z = _.current;
      (G("tengu_long_context_survey_event", {
        event_type: We("responded"),
        question_variant: $e(z?.variant ?? "generic"),
        appearance_id: Hr(V),
        response: $e(Y),
        threshold: z?.threshold,
        token_count_at_trigger: z?.tokenCount,
        last_assistant_message_id: Hr(z?.lastAssistantId),
      }),
        Jc("feedback_survey", {
          event_type: "responded",
          appearance_id: V,
          response: Y,
          survey_type: "long_context",
        }));
    }),
      (i[3] = v));
  else v = i[3];
  let C = v,
    x;
  if (i[4] !== p)
    ((x = {
      hideThanksAfterMs: twm,
      otherSurveyActive: p,
      onOpen: A,
      onSelect: C,
    }),
      (i[4] = p),
      (i[5] = x));
  else x = i[5];
  let {
      state: I,
      lastResponse: k,
      appearanceId: D,
      open: P,
      handleSelect: O,
      handleUndo: L,
    } = BNe(x),
    M,
    N;
  if (i[6] !== d)
    ((M = () => {
      if (!d) return;
      (m(awm(at(nwm, ""))), h(ADJECTIVES(at(rwm, ""))));
    }),
      (N = [d]),
      (i[6] = d),
      (i[7] = M),
      (i[8] = N));
  else ((M = i[7]), (N = i[8]));
  Wme.useEffect(M, N);
  let B, $;
  if (
    i[9] !== e ||
    i[10] !== d ||
    i[11] !== a ||
    i[12] !== n ||
    i[13] !== t ||
    i[14] !== P ||
    i[15] !== p ||
    i[16] !== I ||
    i[17] !== r ||
    i[18] !== f ||
    i[19] !== g
  )
    ((B = () => {
      if (!d || y.current) return;
      if (I !== "closed" || n || a) return;
      if (f === void 0) return;
      if (Fte()) return;
      if (!Us("allow_product_feedback")) return;
      if (Oe.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY) return;
      if (r <= b.current) return;
      if (e < f) return;
      if (p) return;
      if (
        ((y.current = true),
        (_.current = {
          threshold: f,
          tokenCount: e,
          variant: g,
          lastAssistantId: MI(t)?.message?.id,
        }),
        Math.random() < owm)
      )
        P();
    }),
      ($ = [d, I, n, r, a, p, f, g, e, t, P]),
      (i[9] = e),
      (i[10] = d),
      (i[11] = a),
      (i[12] = n),
      (i[13] = t),
      (i[14] = P),
      (i[15] = p),
      (i[16] = I),
      (i[17] = r),
      (i[18] = f),
      (i[19] = g),
      (i[20] = B),
      (i[21] = $));
  else ((B = i[20]), ($ = i[21]));
  Wme.useEffect(B, $);
  let q = swm[g],
    W;
  if (i[22] !== D || i[23] !== O || i[24] !== L || i[25] !== k || i[26] !== I || i[27] !== q)
    ((W = {
      state: I,
      lastResponse: k,
      appearanceId: D,
      question: q,
      handleSelect: O,
      handleUndo: L,
    }),
      (i[22] = D),
      (i[23] = O),
      (i[24] = L),
      (i[25] = k),
      (i[26] = I),
      (i[27] = q),
      (i[28] = W));
  else W = i[28];
  return W;
}
var sRc,
  Wme,
  twm = 5000,
  nwm = "tengu_long_context_survey_threshold",
  rwm = "tengu_long_context_survey_question_variant",
  owm = 0.2,
  swm;
