// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hNo
// matched 2.1.88 source: src/commands/install-github-app/CheckGitHubStep.tsx
// class=modified (alt of src/commands/install-github-app/CheckGitHubStep.tsx)  jaccard=0.3459  score=1  fileCov=0.3459
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var hNo = E(() => {
  cne();
  jh();
  dn();
  er();
  m0();
  hEt = R(rt(), 1);
});
function D1l(e) {
  let t = R1l.c(3),
    { children: n } = e,
    r = yEt.useRef(null),
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = {
      setHandler: (a) => {
        r.current = a;
      },
      tryDelete: (a) => r.current?.(a) ?? false,
    }),
      (t[0] = o));
  else o = t[0];
  let s = o,
    i;
  if (t[1] !== n)
    ((i = P1l.jsx(L1l.Provider, {
      value: s,
      children: n,
    })),
      (t[1] = n),
      (t[2] = i));
  else i = t[2];
  return i;
}
function nnr() {
  return yEt.useContext(L1l);
}
var R1l, yEt, P1l, L1l;
