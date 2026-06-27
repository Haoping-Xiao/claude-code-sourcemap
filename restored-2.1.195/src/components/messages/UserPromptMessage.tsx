// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yil
// matched 2.1.88 source: src/components/messages/UserPromptMessage.tsx
// class=modified  jaccard=0.2519  score=1  fileCov=0.2519
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Yil = E(() => {
  si();
  nIo();
  Ye();
  oIo();
  m1();
  LW();
  ((Xzn = R(lt(), 1)), (fE = R(se(), 1)));
});
function Qil(e) {
  let t = Jil.c(23),
    { addMargin: n, param: r, isTranscriptMode: o, timestamp: s } = e,
    { text: i } = r,
    a = Ht(osf),
    l = Ht(rsf),
    c = Oe.CLAUDE_CODE_BRIEF,
    u;
  if (t[0] !== a || t[1] !== o || t[2] !== l)
    ((u = qie() && (c || at("tengu_kairos_brief", false)) && a && !o && !l),
      (t[0] = a),
      (t[1] = o),
      (t[2] = l),
      (t[3] = u));
  else u = t[3];
  let d = u,
    p;
  e: {
    if (i.length <= tsf) {
      p = i;
      break e;
    }
    let S;
    if (t[4] !== i) ((S = i.slice(0, Xil)), (t[4] = i), (t[5] = S));
    else S = t[5];
    let A = S,
      v,
      C,
      x;
    if (t[6] !== i)
      ((x = i.slice(-nsf)),
        (v = hu(
          i,
          `
`,
          Xil,
        )),
        (C = hu(
          x,
          `
`,
        )),
        (t[6] = i),
        (t[7] = v),
        (t[8] = C),
        (t[9] = x));
    else ((v = t[7]), (C = t[8]), (x = t[9]));
    let I = v - C,
      k;
    if (t[10] !== A || t[11] !== I || t[12] !== x)
      ((k = {
        head: A,
        hiddenLines: I,
        tail: x,
      }),
        (t[10] = A),
        (t[11] = I),
        (t[12] = x),
        (t[13] = k));
    else k = t[13];
    p = k;
  }
  let f = p;
  if (!i) return (ke(Error("No content found in user prompt message")), null);
  let m = n ? 1 : 0,
    g = d ? void 0 : "userMessageBackground",
    h = d ? 0 : 1,
    y = d ? s : void 0,
    b;
  if (t[14] !== f || t[15] !== y || t[16] !== d)
    ((b = iIo.jsx(Kil, {
      text: f,
      useBriefLayout: d,
      timestamp: y,
    })),
      (t[14] = f),
      (t[15] = y),
      (t[16] = d),
      (t[17] = b));
  else b = t[17];
  let _;
  if (t[18] !== m || t[19] !== g || t[20] !== h || t[21] !== b)
    ((_ = iIo.jsx(U, {
      flexDirection: "column",
      marginTop: m,
      backgroundColor: g,
      paddingRight: h,
      children: b,
    })),
      (t[18] = m),
      (t[19] = g),
      (t[20] = h),
      (t[21] = b),
      (t[22] = _));
  else _ = t[22];
  return _;
}
function rsf(e) {
  return e.viewingAgentTaskId;
}
function osf(e) {
  return e.isBriefOnly;
}
var Jil,
  iIo,
  tsf = 10000 /* 1e4 */,
  Xil = 2500,
  nsf = 2500;
