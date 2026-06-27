// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aRc
// matched 2.1.88 source: src/components/FullscreenLayout.tsx
// class=new  jaccard=0.0397  score=0.3314  fileCov=0.0432
// note: nearest: src/components/FullscreenLayout.tsx (0.0397); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aRc = E(() => {
  aW();
  Un();
  kt();
  jc();
  fb();
  wr();
  co();
  aS();
  xtn();
  sRc = R(lt(), 1), Wme = R(rt(), 1), swm = {
    generic: void 0,
    instruction_following: "How well is Claude following the instructions you gave earlier in this conversation? (optional)"
  };
});
function cRc(e) {
  let t = lRc.c(10),
    {
      options: n,
      optionWidth: r,
      onSelect: o,
      marginTop: s
    } = e,
    i;
  if (t[0] !== o || t[1] !== r || t[2] !== n) {
    let l;
    if (t[4] !== o || t[5] !== r) l = c => {
      let {
        key: u,
        label: d
      } = c;
      return P7e.jsx(U, {
        width: r,
        children: P7e.jsx(mat, {
          tabIndex: -1,
          onAction: () => o(u),
          children: p => {
            let {
              hovered: f
            } = p;
            return P7e.jsxs(w, {
              backgroundColor: f ? "userMessageBackgroundHover" : void 0,
              children: [P7e.jsx(w, {
                color: "ansi:cyan",
                children: u
              }), ": ", d]
            });
          }
        })
      }, u);
    }, t[4] = o, t[5] = r, t[6] = l;else l = t[6];
    i = n.map(l), t[0] = o, t[1] = r, t[2] = n, t[3] = i;
  } else i = t[3];
  let a;
  if (t[7] !== s || t[8] !== i) a = P7e.jsx(U, {
    marginLeft: 2,
    marginTop: s,
    children: i
  }), t[7] = s, t[8] = i, t[9] = a;else a = t[9];
  return a;
}
var lRc, P7e;