// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nal
// matched 2.1.88 source: src/utils/messages.ts
// class=modified (alt of src/utils/messages.ts)  jaccard=0.0049  score=0.2124  fileCov=0.005
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: UserChannelMessage
// [unwrapped __esm module nal] deps: @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts
((eal = R(lt(), 1)), (IAe = R(se(), 1)));
function dsf(e) {
  let t = e.lastIndexOf(":");
  return t === -1 ? e : e.slice(t + 1);
}
function UserChannelMessage(e) {
  let t = oal.c(36),
    { addMargin: n, param: r } = e,
    { text: o } = r,
    s,
    i,
    a,
    l,
    c,
    u,
    d,
    p,
    f,
    m,
    g;
  if (t[0] !== n || t[1] !== o) {
    m = Symbol.for("react.early_return_sentinel");
    e: {
      let _ = o,
        S = "";
      if (_.startsWith(Vte)) {
        let N = _.indexOf(`
`);
        if (N !== -1 && _.startsWith(kFe, N + 1)) ((S = _.slice(0, N)), (_ = _.slice(N + 1)));
      }
      let A = _.lastIndexOf(Jzn) + Jzn.length;
      if (A > Jzn.length - 1) {
        let N = _.slice(A);
        if (usf.includes(N)) _ = _.slice(0, A);
      }
      let v = lsf.exec(_);
      if (!v) {
        let N = n ? 1 : 0,
          B;
        if (t[13] !== o) ((B = o.trim()), (t[13] = o), (t[14] = B));
        else B = t[14];
        let $;
        if (t[15] !== B)
          (($ = GMe.jsx(w, {
            children: B,
          })),
            (t[15] = B),
            (t[16] = $));
        else $ = t[16];
        let q;
        if (t[17] !== $ || t[18] !== N)
          ((q = GMe.jsx(U, {
            marginTop: N,
            children: $,
          })),
            (t[17] = $),
            (t[18] = N),
            (t[19] = q));
        else q = t[19];
        m = q;
        break e;
      }
      let [C, x, I] = v,
        k = x === void 0 ? "" : x,
        D = csf.exec(I ?? "")?.[1],
        P = TLe(k);
      if (S === `${Vte}${P} while you were working:` || S === `${Vte}${P}:`) S = "";
      let O = _.slice(C.length),
        L = O.trimEnd();
      if (L.endsWith(ral)) O = L.slice(0, -ral.length);
      let M = `${S ? `${S} ` : ""}${O}`.trim().replace(/\s+/g, " ");
      if (
        ((g = Rs(M, psf)),
        (a = U),
        (f = n ? 1 : 0),
        (i = w),
        t[20] === Symbol.for("react.memo_cache_sentinel"))
      )
        ((d = GMe.jsx(w, {
          color: "suggestion",
          children: Vvs,
        })),
          (t[20] = d));
      else d = t[20];
      ((p = " "), (s = w), (l = true), (c = dsf(TLe(k))), (u = D ? ` \xB7 ${TLe(D)}` : ""));
    }
    ((t[0] = n),
      (t[1] = o),
      (t[2] = s),
      (t[3] = i),
      (t[4] = a),
      (t[5] = l),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d),
      (t[9] = p),
      (t[10] = f),
      (t[11] = m),
      (t[12] = g));
  } else
    ((s = t[2]),
      (i = t[3]),
      (a = t[4]),
      (l = t[5]),
      (c = t[6]),
      (u = t[7]),
      (d = t[8]),
      (p = t[9]),
      (f = t[10]),
      (m = t[11]),
      (g = t[12]));
  if (m !== Symbol.for("react.early_return_sentinel")) return m;
  let h;
  if (t[21] !== s || t[22] !== l || t[23] !== c || t[24] !== u)
    ((h = GMe.jsxs(s, {
      dimColor: l,
      children: [c, u, ":"],
    })),
      (t[21] = s),
      (t[22] = l),
      (t[23] = c),
      (t[24] = u),
      (t[25] = h));
  else h = t[25];
  let y;
  if (t[26] !== i || t[27] !== d || t[28] !== p || t[29] !== h || t[30] !== g)
    ((y = GMe.jsxs(i, {
      children: [d, p, h, " ", g],
    })),
      (t[26] = i),
      (t[27] = d),
      (t[28] = p),
      (t[29] = h),
      (t[30] = g),
      (t[31] = y));
  else y = t[31];
  let b;
  if (t[32] !== a || t[33] !== y || t[34] !== f)
    ((b = GMe.jsx(a, {
      marginTop: f,
      children: y,
    })),
      (t[32] = a),
      (t[33] = y),
      (t[34] = f),
      (t[35] = b));
  else b = t[35];
  return b;
}
var oal,
  GMe,
  lsf,
  Jzn,
  ral,
  csf,
  usf,
  psf = 60;
