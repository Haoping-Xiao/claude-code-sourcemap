// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nbe
// matched 2.1.88 source: src/state/AppState.tsx
// class=modified (alt of src/state/AppState.tsx)  jaccard=0.1308  score=0.5138  fileCov=0.1492
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nbe] deps: tne
((KJr = R(lt(), 1)),
  (E0e = R(rt(), 1)),
  (tqi = R(se(), 1)),
  (KWd = {
    voiceState: "idle",
    voiceError: null,
    voiceInterimTranscript: "",
    voiceAudioLevels: [],
    voiceWarmingUp: false,
    awaitingVoiceSubmitDoubleTap: false,
  }),
  (Z5i = E0e.createContext(null)));
function XJr() {
  let e = A0e.useContext(vat);
  if (!e)
    throw ReferenceError(
      "useAppState/useSetAppState cannot be called outside of an <AppStateProvider />",
    );
  return e;
}
function Ht(e) {
  let t = XJr(),
    n = () => {
      let r = t.getState();
      return e(r);
    };
  return A0e.useSyncExternalStore(t.subscribe, n, n);
}
function Ho() {
  return XJr().setState;
}
function Dc() {
  return XJr();
}
function dT(e) {
  let t = A0e.useContext(vat);
  return A0e.useSyncExternalStore(t ? t.subscribe : JWd, () => (t ? e(t.getState()) : void 0));
}
var A0e,
  vat,
  JWd = () => () => {};
