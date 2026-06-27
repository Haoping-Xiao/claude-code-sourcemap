// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fGe
// matched 2.1.88 source: src/ink/components/AppContext.ts
// class=modified  jaccard=0.1813  score=0.1813  fileCov=1
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fGe]
((_Gi = R(rt(), 1)),
  (bGi = _Gi.createContext({
    exit() {},
    focusManager: null,
    rootNode: null,
    dispatchPasteEvent() {},
  })));
bGi.displayName = "InternalAppContext";
J7 = bGi;
var $U = 16;
function EGi(e) {
  let t = SGi.c(6),
    { children: n } = e,
    r = BBt.useSyncExternalStore(K3e, Sit),
    o = BBt.useSyncExternalStore(K3e, N7),
    s;
  if (t[0] !== r || t[1] !== o)
    ((s = {
      isTerminalFocused: r,
      terminalFocusState: o,
    }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s));
  else s = t[2];
  let i = s,
    a;
  if (t[3] !== n || t[4] !== i)
    ((a = AGi.jsx(XXr.Provider, {
      value: i,
      children: n,
    })),
      (t[3] = n),
      (t[4] = i),
      (t[5] = a));
  else a = t[5];
  return a;
}
var SGi, BBt, AGi, XXr, JXr;
