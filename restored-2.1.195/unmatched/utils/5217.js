// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xtc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0024  score=0.2956  fileCov=0.0024
// note: nearest: src/screens/REPL.tsx (0.0024); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Xtc]
x7f = {
  type: "local-jsx",
  name: "daemon",
  description: "Manage background services and routines",
  immediate: true,
  requires: {
    ink: true
  },
  load: () => Promise.resolve().then(() => (TGo(), HGo))
}, k7f = x7f;
function cQt() {
  return true;
}
function uQt(e) {
  return (e.voice?.enabled ?? e.voiceEnabled) === true;
}
function tar() {
  try {
    if (!eS()) return false;
    return WE();
  } catch {
    return false;
  }
}
function nar() {
  return Us("allow_voice_mode");
}
function AHt() {
  return tar() && cQt() && nar();
}