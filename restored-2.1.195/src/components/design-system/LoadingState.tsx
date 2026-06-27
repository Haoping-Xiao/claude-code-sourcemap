// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bsl
// matched 2.1.88 source: src/components/design-system/LoadingState.tsx
// class=modified  jaccard=0.3182  score=1  fileCov=0.3182
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Bsl = E(() => {
  pre();
  xjt();
  Xa();
  _i();
  Ye();
  tP();
  wr();
  co();
  uzn();
  Ao();
  bjr();
  Q8();
  Lyt();
  dzn();
  AN();
  ql();
  Osl();
  ((D8t = R(lt(), 1)), (xzn = R(rt(), 1)), (ld = R(se(), 1)));
});
function Rzn(e) {
  let t = Usl.c(7),
    { param: n, addMargin: r, isTranscriptMode: o, verbose: s } = e,
    { thinking: i } = n,
    a = r === void 0 ? false : r;
  if (!i) return null;
  let l = o || s,
    c = a ? 1 : 0,
    u;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((u = UMe.jsx(U, {
      minWidth: 2,
      children: UMe.jsx(w, {
        dimColor: true,
        italic: true,
        children: Nvs,
      }),
    })),
      (t[0] = u));
  else u = t[0];
  let d;
  if (t[1] !== l || t[2] !== i)
    ((d = UMe.jsx(U, {
      flexDirection: "column",
      flexGrow: 1,
      children: l
        ? UMe.jsx(zg, {
            dimColor: true,
            children: i.trim(),
          })
        : UMe.jsx(w, {
            dimColor: true,
            italic: true,
            children: i.trim().replace(/\s+/g, " "),
          }),
    })),
      (t[1] = l),
      (t[2] = i),
      (t[3] = d));
  else d = t[3];
  let p;
  if (t[4] !== c || t[5] !== d)
    ((p = UMe.jsxs(U, {
      flexDirection: "row",
      marginTop: c,
      width: "100%",
      children: [u, d],
    })),
      (t[4] = c),
      (t[5] = d),
      (t[6] = p));
  else p = t[6];
  return p;
}
var Usl, UMe;
