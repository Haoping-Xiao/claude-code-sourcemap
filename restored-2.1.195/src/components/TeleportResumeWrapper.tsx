// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d6l
// matched 2.1.88 source: src/components/TeleportResumeWrapper.tsx
// class=modified  jaccard=0.3196  score=0.4309  fileCov=0.5531
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: TeleportResumeWrapper
// [unwrapped __esm module d6l] deps: _i, Cv, Ye, ps, nk, je, BR, es, Cc, mE, Bs, Ko, CH, sTo
((kse = R(rt(), 1)), (Hm = R(se(), 1)));
function TeleportResumeWrapper(e) {
  let t = p6l.c(30),
    { onComplete: n, onCancel: r, onError: o, isEmbedded: s, source: i } = e,
    a = s === void 0 ? false : s,
    { resumeSession: l, isResuming: c, error: u, selectedSession: d } = a6l(i),
    p,
    f;
  if (t[0] !== i)
    ((p = () => {
      G("tengu_teleport_started", {
        source: $e(i),
      });
    }),
      (f = [i]),
      (t[0] = i),
      (t[1] = p),
      (t[2] = f));
  else ((p = t[1]), (f = t[2]));
  f6l.useEffect(p, f);
  let m;
  if (t[3] !== u || t[4] !== n || t[5] !== o || t[6] !== l)
    ((m = async (C) => {
      let x = await l(C);
      if (x) n(x);
      else if (u) {
        if (o) o(u.message, u.formattedMessage);
      }
    }),
      (t[3] = u),
      (t[4] = n),
      (t[5] = o),
      (t[6] = l),
      (t[7] = m));
  else m = t[7];
  let g = m,
    h;
  if (t[8] !== r)
    ((h = () => {
      (G("tengu_teleport_cancelled", {}), r());
    }),
      (t[8] = r),
      (t[9] = h));
  else h = t[9];
  let y = h,
    b = !!u && !o,
    _;
  if (t[10] !== b)
    ((_ = {
      context: "Global",
      isActive: b,
    }),
      (t[10] = b),
      (t[11] = _));
  else _ = t[11];
  $r("app:interrupt", y, _);
  let S;
  if (t[12] !== u || t[13] !== o) ((S = !!u && !o && Jj()), (t[12] = u), (t[13] = o), (t[14] = S));
  else S = t[14];
  let A;
  if (t[15] !== S)
    ((A = {
      context: "Confirmation",
      isActive: S,
    }),
      (t[15] = S),
      (t[16] = A));
  else A = t[16];
  if (($r("confirm:no", y, A), c && d)) {
    let C;
    if (t[17] === Symbol.for("react.memo_cache_sentinel"))
      ((C = qq.jsxs(U, {
        flexDirection: "row",
        children: [
          qq.jsx(Vu, {}),
          qq.jsx(w, {
            bold: true,
            children: "Resuming session\u2026",
          }),
        ],
      })),
        (t[17] = C));
    else C = t[17];
    let x;
    if (t[18] !== d.title)
      ((x = qq.jsxs(U, {
        flexDirection: "column",
        padding: 1,
        children: [
          C,
          qq.jsxs(w, {
            dimColor: true,
            children: ['Loading "', d.title, '"\u2026'],
          }),
        ],
      })),
        (t[18] = d.title),
        (t[19] = x));
    else x = t[19];
    return x;
  }
  if (u && !o) {
    let C;
    if (t[20] === Symbol.for("react.memo_cache_sentinel"))
      ((C = qq.jsx(w, {
        bold: true,
        color: "error",
        children: "Failed to resume session",
      })),
        (t[20] = C));
    else C = t[20];
    let x;
    if (t[21] !== u.message)
      ((x = qq.jsx(w, {
        dimColor: true,
        children: u.message,
      })),
        (t[21] = u.message),
        (t[22] = x));
    else x = t[22];
    let I;
    if (t[23] === Symbol.for("react.memo_cache_sentinel"))
      ((I = qq.jsx(U, {
        marginTop: 1,
        children: qq.jsx(w, {
          dimColor: true,
          italic: true,
          children: qq.jsx(ht, {
            chord: "escape",
            action: "cancel",
          }),
        }),
      })),
        (t[23] = I));
    else I = t[23];
    let k;
    if (t[24] !== x)
      ((k = qq.jsxs(U, {
        flexDirection: "column",
        padding: 1,
        children: [C, x, I],
      })),
        (t[24] = x),
        (t[25] = k));
    else k = t[25];
    return k;
  }
  let v;
  if (t[26] !== y || t[27] !== g || t[28] !== a)
    ((v = qq.jsx(u6l, {
      onSelect: g,
      onCancel: y,
      isEmbedded: a,
    })),
      (t[26] = y),
      (t[27] = g),
      (t[28] = a),
      (t[29] = v));
  else v = t[29];
  return v;
}
var p6l, f6l, qq;
