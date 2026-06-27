// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qLn
// matched 2.1.88 source: src/context/voice.tsx
// class=modified  jaccard=0.435  score=0.9427  fileCov=0.4469
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: useVoiceState, useSetVoiceState, useGetVoiceState, VoiceProvider
// [unwrapped __esm module qLn] deps: @mixmark-io/domino/lib/Document.js, services/analytics/index.ts, utils/errors.ts, utils/file.ts, utils/task/diskOutput.ts
((Q5i = require("fs/promises")), (oUt = require("path")));
function VoiceProvider(e) {
  let t = KJr.c(3),
    { children: n } = e,
    [r] = E0e.useState(XWd),
    o;
  if (t[0] !== n || t[1] !== r)
    ((o = tqi.jsx(Z5i.Provider, {
      value: r,
      children: n,
    })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o));
  else o = t[2];
  return o;
}
function XWd() {
  return uL(KWd);
}
function useVoiceStore() {
  let e = E0e.useContext(Z5i);
  if (!e) throw Error("useVoiceState must be used within a VoiceProvider");
  return e;
}
function useVoiceState(e) {
  let t = KJr.c(3),
    n = useVoiceStore(),
    r;
  if (t[0] !== e || t[1] !== n) ((r = () => e(n.getState())), (t[0] = e), (t[1] = n), (t[2] = r));
  else r = t[2];
  let o = r;
  return E0e.useSyncExternalStore(n.subscribe, o, o);
}
function useSetVoiceState() {
  return useVoiceStore().setState;
}
function useGetVoiceState() {
  return useVoiceStore().getState;
}
var KJr, E0e, tqi, KWd, Z5i;
