// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xil
// matched 2.1.88 source: src/components/messages/UserCommandMessage.tsx
// class=modified  jaccard=0.3787  score=0.5254  fileCov=0.5755
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xil = E(() => {
  qzn();
  co();
  OI();
  ((wil = R(lt(), 1)), (Iil = R(se(), 1)));
});
function Ril(e) {
  let t = kil.c(19),
    { addMargin: n, param: r } = e,
    { text: o } = r,
    s;
  if (t[0] !== o) ((s = xl(o, zC)), (t[0] = o), (t[1] = s));
  else s = t[1];
  let i = s,
    a;
  if (t[2] !== o) ((a = xl(o, "command-args")), (t[2] = o), (t[3] = a));
  else a = t[3];
  let l = a,
    c = xl(o, "skill-format") === "true";
  if (!i) return null;
  if (c) {
    let h = n ? 1 : 0,
      y;
    if (t[4] === Symbol.for("react.memo_cache_sentinel"))
      ((y = Vpe.jsxs(w, {
        color: "subtle",
        children: [nt.pointer, " "],
      })),
        (t[4] = y));
    else y = t[4];
    let b;
    if (t[5] !== i)
      ((b = Vpe.jsxs(w, {
        children: [
          y,
          Vpe.jsxs(w, {
            color: "text",
            children: ["Skill(", i, ")"],
          }),
        ],
      })),
        (t[5] = i),
        (t[6] = b));
    else b = t[6];
    let _;
    if (t[7] !== h || t[8] !== b)
      ((_ = Vpe.jsx(U, {
        flexDirection: "column",
        marginTop: h,
        backgroundColor: "userMessageBackground",
        paddingRight: 1,
        children: b,
      })),
        (t[7] = h),
        (t[8] = b),
        (t[9] = _));
    else _ = t[9];
    return _;
  }
  let u;
  if (t[10] !== l || t[11] !== i)
    ((u = [i, l].filter(Boolean)), (t[10] = l), (t[11] = i), (t[12] = u));
  else u = t[12];
  let d = `/${u.join(" ")}`,
    p = n ? 1 : 0,
    f;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((f = Vpe.jsxs(w, {
      color: "subtle",
      children: [nt.pointer, " "],
    })),
      (t[13] = f));
  else f = t[13];
  let m;
  if (t[14] !== d)
    ((m = Vpe.jsxs(w, {
      children: [
        f,
        Vpe.jsx(w, {
          color: "text",
          children: d,
        }),
      ],
    })),
      (t[14] = d),
      (t[15] = m));
  else m = t[15];
  let g;
  if (t[16] !== p || t[17] !== m)
    ((g = Vpe.jsx(U, {
      flexDirection: "column",
      marginTop: p,
      backgroundColor: "userMessageBackground",
      paddingRight: 1,
      children: m,
    })),
      (t[16] = p),
      (t[17] = m),
      (t[18] = g));
  else g = t[18];
  return g;
}
var kil, Vpe;
