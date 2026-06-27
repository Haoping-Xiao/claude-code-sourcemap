// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OAc
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/entities.js
// class=new  jaccard=0.0063  score=0.7107  fileCov=0.0063
// note: nearest: node_modules/@xmldom/xmldom/lib/entities.js (0.0063); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var OAc = E(() => {
  w4();
  _i();
  Tc();
  Xge();
  Ye();
  eVe();
  e8t();
  t0e();
  sr();
  Yzo = R(lt(), 1), eie = R(se(), 1), eK = {
    topLeft: "\u250C",
    topRight: "\u2510",
    bottomLeft: "\u2514",
    bottomRight: "\u2518",
    horizontal: "\u2500",
    vertical: "\u2502",
    teeLeft: "\u251C",
    teeRight: "\u2524"
  };
});
function XTt(e) {
  let t = NAc.c(39),
    {
      questions: n,
      currentQuestionIndex: r,
      answers: o,
      hideSubmitTab: s
    } = e,
    i = s === void 0 ? !1 : s,
    {
      columns: a
    } = br(),
    l;
  if (t[0] !== a || t[1] !== r || t[2] !== i || t[3] !== n) {
    e: {
      let h = i ? "" : ` ${nt.tick} Submit `,
        y = rn("\u2190 ") + rn(" \u2192") + rn(h),
        b = a - y;
      if (b <= 0) {
        let O;
        if (t[5] !== r || t[6] !== n) {
          let L;
          if (t[8] !== r) L = (M, N) => {
            let B = M?.header || `Q${N + 1}`;
            return N === r ? B.slice(0, 3) : "";
          }, t[8] = r, t[9] = L;else L = t[9];
          O = n.map(L), t[5] = r, t[6] = n, t[7] = O;
        } else O = t[7];
        l = O;
        break e;
      }
      let _ = n.map(Bym);
      if (_.map(Nym).reduce(Oym, 0) <= b) {
        l = _;
        break e;
      }
      let v = _[r] || "",
        C = 4 + rn(v),
        x = Math.min(C, b / 2),
        I = b - x,
        k = n.length - 1,
        D = Math.max(6, Math.floor(I / Math.max(k, 1))),
        P;
      if (t[10] !== r || t[11] !== x || t[12] !== D) P = (O, L) => {
        if (L === r) {
          let M = x - 2 - 2;
          return Rs(O, M);
        } else {
          let M = D - 2 - 2;
          return Rs(O, M);
        }
      }, t[10] = r, t[11] = x, t[12] = D, t[13] = P;else P = t[13];
      l = _.map(P);
    }
    t[0] = a, t[1] = r, t[2] = i, t[3] = n, t[4] = l;
  } else l = t[4];
  let c = l,
    u = n.length === 1 && i,
    d;
  if (t[14] !== r || t[15] !== u) d = !u && KTe.jsxs(w, {
    color: r === 0 ? "inactive" : void 0,
    children: ["\u2190", " "]
  }), t[14] = r, t[15] = u, t[16] = d;else d = t[16];
  let p;
  if (t[17] !== o || t[18] !== r || t[19] !== n || t[20] !== c) {
    let h;
    if (t[22] !== o || t[23] !== r || t[24] !== c) h = (y, b) => {
      let _ = b === r,
        A = y?.question && !!o[y.question] ? nt.checkboxOn : nt.checkboxOff,
        v = c[b] || y?.header || `Q${b + 1}`;
      return KTe.jsx(U, {
        children: KTe.jsxs(pE, {
          color: _ ? "permission" : void 0,
          padded: !0,
          children: [A, " ", v]
        })
      }, y?.question || `question-${b}`);
    }, t[22] = o, t[23] = r, t[24] = c, t[25] = h;else h = t[25];
    p = n.map(h), t[17] = o, t[18] = r, t[19] = n, t[20] = c, t[21] = p;
  } else p = t[21];
  let f;
  if (t[26] !== r || t[27] !== i || t[28] !== n.length) f = !i && KTe.jsx(U, {
    children: KTe.jsxs(pE, {
      color: r === n.length ? "permission" : void 0,
      padded: !0,
      children: [nt.tick, " Submit"]
    })
  }, "submit"), t[26] = r, t[27] = i, t[28] = n.length, t[29] = f;else f = t[29];
  let m;
  if (t[30] !== r || t[31] !== u || t[32] !== n.length) m = !u && KTe.jsxs(w, {
    color: r === n.length ? "inactive" : void 0,
    children: [" ", "\u2192"]
  }), t[30] = r, t[31] = u, t[32] = n.length, t[33] = m;else m = t[33];
  let g;
  if (t[34] !== d || t[35] !== p || t[36] !== f || t[37] !== m) g = KTe.jsxs(U, {
    flexDirection: "row",
    marginBottom: 1,
    children: [d, p, f, m]
  }), t[34] = d, t[35] = p, t[36] = f, t[37] = m, t[38] = g;else g = t[38];
  return g;
}
function Oym(e, t) {
  return e + t;
}
function Nym(e) {
  return 4 + rn(e);
}
function Bym(e, t) {
  return e?.header || `Q${t + 1}`;
}
var NAc, KTe;