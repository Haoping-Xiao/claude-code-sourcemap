// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KAc
// matched 2.1.88 source: src/components/permissions/AskUserQuestionPermissionRequest/AskUserQuestionPermissionRequest.tsx
// class=modified  jaccard=0.2666  score=0.489  fileCov=0.3697
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KAc]
xNe = R(rt(), 1);
qym = {
  currentQuestionIndex: 0,
  answers: {},
  questionStates: {},
  isInTextInput: false,
};
function YAc(e) {
  let t = Xzo.c(5),
    n = G_(),
    r;
  if (t[0] !== n.syntaxHighlightingDisabled)
    ((r = n.syntaxHighlightingDisabled ? null : GDe()),
      (t[0] = n.syntaxHighlightingDisabled),
      (t[1] = r));
  else r = t[1];
  let o = r,
    s;
  if (t[2] !== o || t[3] !== e)
    ((s = atn.jsx(zym, {
      ...e,
      highlight: o,
    })),
      (t[2] = o),
      (t[3] = e),
      (t[4] = s));
  else s = t[4];
  return s;
}
function zym(e) {
  let t = Xzo.c(83),
    { payload: n, answer: r, highlight: o } = e,
    s = n.questions,
    i = n.metadataSource,
    [a] = na(),
    l = Vym;
  for (let Ve of s)
    for (let Ze of Ve.options) {
      if (!Ze.preview) continue;
      let Be = S6n(Ze.preview, a, o);
      for (let Me of Be.split(`
`))
        l = Math.max(l, rn(Me));
    }
  let c = l,
    u;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((u = {}), (t[0] = u));
  else u = t[0];
  let [d, p] = bpr.useState(u),
    f = bpr.useRef(0),
    m = Ho(),
    g;
  if (t[1] !== m)
    ((g = function (Ze, Be, Me, Ue, tt, bt) {
      f.current = f.current + 1;
      let Ke = f.current,
        Et = {
          id: Ke,
          type: "image",
          content: Be,
          mediaType: Me || "image/png",
          filename: Ue || "Pasted image",
          dimensions: tt,
        };
      (hTt(Et, m),
        yTt(Et, m),
        p((ct) => ({
          ...ct,
          [Ze]: {
            ...(ct[Ze] ?? {}),
            [Ke]: Et,
          },
        })));
    }),
      (t[1] = m),
      (t[2] = g));
  else g = t[2];
  let h = g,
    y;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((y = (Ve, Ze) => {
      p((Be) => {
        let Me = {
          ...(Be[Ve] ?? {}),
        };
        return (
          delete Me[Ze],
          {
            ...Be,
            [Ve]: Me,
          }
        );
      });
    }),
      (t[3] = y));
  else y = t[3];
  let b = y,
    _;
  if (t[4] !== d) ((_ = Object.values(d).flatMap(Qym).filter(Jym)), (t[4] = d), (t[5] = _));
  else _ = t[5];
  let S = _,
    A = Ht(Xym),
    v = kH(),
    C;
  if (t[6] !== v) ((C = Gh(v)), (t[6] = v), (t[7] = C));
  else C = t[7];
  let x = C,
    I = A === "plan",
    k;
  if (t[8] !== I) ((k = I ? _P() : void 0), (t[8] = I), (t[9] = k));
  else k = t[9];
  let D = k,
    P = zAc(),
    {
      currentQuestionIndex: O,
      answers: L,
      questionStates: M,
      isInTextInput: N,
      nextQuestion: B,
      prevQuestion: $,
      updateQuestionState: q,
      setAnswer: W,
      setTextInputMode: V,
    } = P;
  Wh("ask-user-question-text-input", N);
  let Y = O < (s?.length || 0) ? s?.[O] : null,
    z = O === (s?.length || 0),
    K;
  if (t[10] !== L || t[11] !== s)
    ((K = s?.every((Ve) => Ve?.question && !!L[Ve.question]) ?? false),
      (t[10] = L),
      (t[11] = s),
      (t[12] = K));
  else K = t[12];
  let Z = K,
    J = s.length === 1 && !s[0]?.multiSelect,
    ne;
  if (t[13] !== r || t[14] !== I || t[15] !== i || t[16] !== s.length)
    ((ne = () => {
      if (i)
        G("tengu_ask_user_question_rejected", {
          source_hash: Dd(i),
          questionCount: s.length,
          isInPlanMode: I,
        });
      r({
        behavior: "deny",
      });
    }),
      (t[13] = r),
      (t[14] = I),
      (t[15] = i),
      (t[16] = s.length),
      (t[17] = ne));
  else ne = t[17];
  let oe = ne,
    re;
  if (
    t[18] !== S ||
    t[19] !== r ||
    t[20] !== L ||
    t[21] !== x ||
    t[22] !== I ||
    t[23] !== i ||
    t[24] !== M ||
    t[25] !== s
  )
    ((re = async () => {
      let Ve = await e_m({
        questions: s,
        answers: L,
        questionStates: M,
        imageAttachments: S,
        imageLimits: x,
      });
      if (i)
        G("tengu_ask_user_question_respond_to_claude", {
          source_hash: Dd(i),
          questionCount: s.length,
          isInPlanMode: I,
        });
      r(Ve);
    }),
      (t[18] = S),
      (t[19] = r),
      (t[20] = L),
      (t[21] = x),
      (t[22] = I),
      (t[23] = i),
      (t[24] = M),
      (t[25] = s),
      (t[26] = re));
  else re = t[26];
  let ee = re,
    ce;
  if (
    t[27] !== S ||
    t[28] !== r ||
    t[29] !== x ||
    t[30] !== I ||
    t[31] !== i ||
    t[32] !== n.input ||
    t[33] !== M ||
    t[34] !== s
  )
    ((ce = async (Ve) => {
      let Ze = await Zym({
        questions: s,
        answersToSubmit: Ve,
        questionStates: M,
        input: n.input,
        imageAttachments: S,
        imageLimits: x,
      });
      if (i)
        G("tengu_ask_user_question_accepted", {
          source_hash: Dd(i),
          questionCount: s.length,
          answerCount: Object.keys(Ve).length,
          isInPlanMode: I,
        });
      r(Ze);
    }),
      (t[27] = S),
      (t[28] = r),
      (t[29] = x),
      (t[30] = I),
      (t[31] = i),
      (t[32] = n.input),
      (t[33] = M),
      (t[34] = s),
      (t[35] = ce));
  else ce = t[35];
  let ae = ce,
    de;
  if (t[36] !== L || t[37] !== d || t[38] !== s.length || t[39] !== W || t[40] !== ae)
    ((de = (Ve, Ze, Be, Me) => {
      let Ue = Me === void 0 ? true : Me,
        tt,
        bt = Array.isArray(Ze);
      if (bt) tt = Ze.join(", ");
      else if (Be)
        tt = Object.values(d[Ve] ?? {}).filter(Yym).length > 0 ? `${Be} (Image attached)` : Be;
      else if (Ze === "__other__")
        tt = Object.values(d[Ve] ?? {}).filter(Kym).length > 0 ? "(Image attached)" : Ze;
      else tt = Ze;
      let Ke = s.length === 1;
      if (!bt && Ke && Ue) {
        let Et = {
          ...L,
          [Ve]: tt,
        };
        ae(Et).catch(ke);
        return;
      }
      W(Ve, tt, Ue);
    }),
      (t[36] = L),
      (t[37] = d),
      (t[38] = s.length),
      (t[39] = W),
      (t[40] = ae),
      (t[41] = de));
  else de = t[41];
  let Ee = de,
    me;
  if (t[42] !== L || t[43] !== oe || t[44] !== ae)
    ((me = function (Ze) {
      if (Ze === "cancel") {
        oe();
        return;
      }
      if (Ze === "submit") ae(L).catch(ke);
    }),
      (t[42] = L),
      (t[43] = oe),
      (t[44] = ae),
      (t[45] = me));
  else me = t[45];
  let pe = me,
    ge = J ? (s?.length || 1) - 1 : s?.length || 0,
    he;
  if (t[46] !== O || t[47] !== $)
    ((he = () => {
      if (O > 0) $();
    }),
      (t[46] = O),
      (t[47] = $),
      (t[48] = he));
  else he = t[48];
  let ie = he,
    le;
  if (t[49] !== O || t[50] !== ge || t[51] !== B)
    ((le = () => {
      if (O < ge) B();
    }),
      (t[49] = O),
      (t[50] = ge),
      (t[51] = B),
      (t[52] = le));
  else le = t[52];
  let He = le,
    ye;
  if (t[53] !== He || t[54] !== ie)
    ((ye = {
      "tabs:previous": ie,
      "tabs:next": He,
    }),
      (t[53] = He),
      (t[54] = ie),
      (t[55] = ye));
  else ye = t[55];
  let ue = !(N && !z),
    we;
  if (t[56] !== ue)
    ((we = {
      context: "Tabs",
      isActive: ue,
    }),
      (t[56] = ue),
      (t[57] = we));
  else we = t[57];
  No(ye, we);
  let Ce;
  if (
    t[58] !== Z ||
    t[59] !== L ||
    t[60] !== Y ||
    t[61] !== O ||
    t[62] !== c ||
    t[63] !== oe ||
    t[64] !== pe ||
    t[65] !== Ee ||
    t[66] !== ee ||
    t[67] !== He ||
    t[68] !== ie ||
    t[69] !== J ||
    t[70] !== z ||
    t[71] !== B ||
    t[72] !== h ||
    t[73] !== d ||
    t[74] !== n.permissionResult ||
    t[75] !== D ||
    t[76] !== M ||
    t[77] !== s ||
    t[78] !== V ||
    t[79] !== q
  )
    ((Ce = Y
      ? atn.jsx(jAc, {
          question: Y,
          questions: s,
          currentQuestionIndex: O,
          answers: L,
          questionStates: M,
          hideSubmitTab: J,
          minContentWidth: c,
          planFilePath: D,
          onUpdateQuestionState: q,
          onAnswer: Ee,
          onTextInputFocus: V,
          onCancel: oe,
          onSubmit: B,
          onTabPrev: ie,
          onTabNext: He,
          onRespondToClaude: ee,
          onImagePaste: (Ve, Ze, Be, Me, Ue) => h(Y.question, Ve, Ze, Be, Me, Ue),
          pastedContents: d[Y.question] ?? {},
          onRemoveImage: (Ve) => b(Y.question, Ve),
        })
      : z
        ? atn.jsx(qAc, {
            questions: s,
            currentQuestionIndex: O,
            answers: L,
            allQuestionsAnswered: Z,
            permissionResult: n.permissionResult,
            onFinalResponse: pe,
          })
        : null),
      (t[58] = Z),
      (t[59] = L),
      (t[60] = Y),
      (t[61] = O),
      (t[62] = c),
      (t[63] = oe),
      (t[64] = pe),
      (t[65] = Ee),
      (t[66] = ee),
      (t[67] = He),
      (t[68] = ie),
      (t[69] = J),
      (t[70] = z),
      (t[71] = B),
      (t[72] = h),
      (t[73] = d),
      (t[74] = n.permissionResult),
      (t[75] = D),
      (t[76] = M),
      (t[77] = s),
      (t[78] = V),
      (t[79] = q),
      (t[80] = Ce));
  else Ce = t[80];
  let Ie;
  if (t[81] !== Ce)
    ((Ie = atn.jsx(Eat, {
      children: Ce,
    })),
      (t[81] = Ce),
      (t[82] = Ie));
  else Ie = t[82];
  return Ie;
}
function Kym(e) {
  return e.type === "image";
}
function Yym(e) {
  return e.type === "image";
}
function Xym(e) {
  return e.toolPermissionContext.mode;
}
function Jym(e) {
  return e.type === "image";
}
function Qym(e) {
  return Object.values(e);
}
async function Zym(e) {
  let { questions: t, answersToSubmit: n, questionStates: r, input: o } = e,
    s = {};
  for (let l of t) {
    let c = n[l.question],
      u = XAc(l) ? r[l.question]?.textInputValue : void 0,
      p = (c ? l.options.find((f) => f.label === c) : void 0)?.preview;
    if (p || u?.trim())
      s[l.question] = {
        ...(p && {
          preview: p,
        }),
        ...(u?.trim() && {
          notes: u.trim(),
        }),
      };
  }
  let i = {
      ...o,
      answers: n,
      annotations: s,
    },
    a = await JAc(e.imageAttachments, e.imageLimits);
  return {
    behavior: "allow",
    updatedInput: i,
    ...(a &&
      a.length > 0 && {
        contentBlocks: a,
      }),
  };
}
async function e_m(e) {
  let { questions: t, answers: n, questionStates: r } = e,
    s = `The user wants to clarify these questions.
    This means they may have additional information, context or questions for you.
    Take their response into account and then reformulate the questions if appropriate.
    Start by asking them what they would like to clarify.

    Questions asked:
${t_m(t, n, r)}`,
    i = await JAc(e.imageAttachments, e.imageLimits);
  return {
    behavior: "deny",
    feedback: s,
    ...(i &&
      i.length > 0 && {
        contentBlocks: i,
      }),
  };
}
function t_m(e, t, n) {
  return e.map((r) => {
    let o = t[r.question],
      s = XAc(r) ? n[r.question]?.textInputValue?.trim() : void 0,
      i = [`- "${r.question}"`];
    if ((i.push(o ? `  Answer: ${o}` : "  (No answer provided)"), s)) i.push(`  User notes: ${s}`);
    return i.join(`
`);
  }).join(`
`);
}
function XAc(e) {
  return !e.multiSelect && e.options.some((t) => t.preview);
}
async function JAc(e, t) {
  if (e.length === 0) return;
  return Promise.all(
    e.map(async (n) => {
      let { block: r } = await FM({
        data: n.content,
        mediaType: n.mediaType,
        limits: t,
      });
      return r;
    }),
  );
}
var Xzo,
  bpr,
  atn,
  Vym = 40;
