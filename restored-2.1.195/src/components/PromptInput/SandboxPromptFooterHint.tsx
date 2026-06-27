// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ihc
// matched 2.1.88 source: src/components/PromptInput/SandboxPromptFooterHint.tsx
// class=modified  jaccard=0.4749  score=0.6699  fileCov=0.6199
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ihc = E(() => {
  iu();
  Xa();
  ZS();
  Ye();
  uo();
  es();
  cne();
  Pne();
  ((bNe = R(rt(), 1)),
    (xen = R(se(), 1)),
    (whc = _dm / Jur),
    (Sdm = {
      r: 0,
      g: 0,
      b: 0,
    }));
});
function khc() {
  let e = xhc.c(7),
    [t, n] = xTt.useState(0),
    r = xTt.useRef(null),
    o = ks(),
    s = Uu("app:toggleTranscript", "Global", "ctrl+o"),
    i,
    a;
  if (e[0] !== o)
    ((i = () => {
      if (!xo.isSandboxingEnabled()) return;
      let u = xo.getSandboxViolationStore(),
        d = u.getTotalCount(),
        p = u.subscribe(() => {
          let f = u.getTotalCount(),
            m = f - d;
          if (m > 0) {
            if ((n(m), (d = f), r.current)) r.current();
            r.current = o.setTimeout(() => n(0), 5000);
          }
        });
      return () => {
        if ((p(), r.current)) r.current();
      };
    }),
      (a = [o]),
      (e[0] = o),
      (e[1] = i),
      (e[2] = a));
  else ((i = e[1]), (a = e[2]));
  if ((xTt.useEffect(i, a), !xo.isSandboxingEnabled() || t === 0)) return null;
  let l = t === 1 ? "operation" : "operations",
    c;
  if (e[3] !== s || e[4] !== t || e[5] !== l)
    ((c = Qur.jsx(U, {
      paddingX: 0,
      paddingY: 0,
      children: Qur.jsxs(w, {
        color: "inactive",
        wrap: "truncate",
        children: [
          "\u29C8 Sandbox blocked ",
          t,
          " ",
          l,
          " \xB7",
          " ",
          s,
          " for details \xB7 /sandbox to disable",
        ],
      }),
    })),
      (e[3] = s),
      (e[4] = t),
      (e[5] = l),
      (e[6] = c));
  else c = e[6];
  return c;
}
var xhc, xTt, Qur;
