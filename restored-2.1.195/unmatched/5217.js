// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xtc
// matched 2.1.88 source: src/utils/concurrentSessions.ts
// class=new  jaccard=0.0515  score=0.2555  fileCov=0.0606
// note: nearest: src/utils/concurrentSessions.ts (0.0515); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Xtc = E(() => {
  x7f = {
    type: "local-jsx",
    name: "daemon",
    description: "Manage background services and routines",
    immediate: !0,
    requires: {
      ink: !0
    },
    load: () => Promise.resolve().then(() => (TGo(), HGo))
  }, k7f = x7f;
});
function cQt() {
  return !0;
}
function uQt(e) {
  return (e.voice?.enabled ?? e.voiceEnabled) === !0;
}
function tar() {
  try {
    if (!eS()) return !1;
    return WE();
  } catch {
    return !1;
  }
}
function nar() {
  return Us("allow_voice_mode");
}
function AHt() {
  return tar() && cQt() && nar();
}