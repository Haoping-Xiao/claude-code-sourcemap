// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I0c
// matched 2.1.88 source: src/components/SessionBackgroundHint.tsx
// class=modified  jaccard=0.2798  score=0.5393  fileCov=0.3677
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module I0c] deps: dom-mutator/dist/dom-mutator.cjs.production.min.js, screens/REPL.tsx, utils/concurrentSessions.ts, utils/ide.ts
((v0c = R(lt(), 1)), (w0c = R(rt(), 1)));
function SessionBackgroundHint(t0) {
  let t = x0c.c(15),
    { onBackgroundSession: n, isLoading: r } = t0,
    o = Dc(),
    s = $T(),
    [i, a] = k0c.useState(false),
    l = Kj(a, n, kvm),
    c;
  if (t[0] !== o || t[1] !== l || t[2] !== r || t[3] !== s)
    ((c = () => {
      if (Oe.CLAUDE_CODE_DISABLE_BACKGROUND_TASKS) return;
      let C = o.getState();
      if (kDo(C)) {
        if ((j$e(s), !Dt().hasUsedBackgroundTask)) gn(xvm);
      } else if (ut("false") && r) l();
    }),
      (t[0] = o),
      (t[1] = l),
      (t[2] = r),
      (t[3] = s),
      (t[4] = c));
  else c = t[4];
  let u = c,
    d = Ht(kDo),
    p;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) ((p = ut("false")), (t[5] = p));
  else p = t[5];
  let f = p,
    m;
  if (t[6] !== d || t[7] !== r)
    ((m = Ju() === null && (d || (f && r))), (t[6] = d), (t[7] = r), (t[8] = m));
  else m = t[8];
  let g = m,
    h;
  if (t[9] !== g || t[10] !== u)
    ((h = {
      handler: u,
      isActive: g,
    }),
      (t[9] = g),
      (t[10] = u),
      (t[11] = h));
  else h = t[11];
  let { cohesionFixes: y, gateOnShortcut: b } = ujn(h),
    _ = Uu("task:background", "Task", "ctrl+b"),
    S = y ? b : Oe.terminal === "tmux" && _ === "ctrl+b" ? "ctrl+b ctrl+b" : _;
  if (!r || !i || (y && S === "")) return null;
  let A;
  if (t[12] === Symbol.for("react.memo_cache_sentinel"))
    ((A = {
      keyCase: "lower",
    }),
      (t[12] = A));
  else A = t[12];
  let v;
  if (t[13] !== S)
    ((v = tfr.jsx(U, {
      paddingLeft: 2,
      children: tfr.jsx(w, {
        dimColor: true,
        children: tfr.jsx(ht, {
          chord: S,
          action: "background",
          format: A,
        }),
      }),
    })),
      (t[13] = S),
      (t[14] = v));
  else v = t[14];
  return v;
}
function xvm(e) {
  return e.hasUsedBackgroundTask
    ? e
    : {
        ...e,
        hasUsedBackgroundTask: true,
      };
}
function kvm() {}
var x0c, k0c, tfr;
