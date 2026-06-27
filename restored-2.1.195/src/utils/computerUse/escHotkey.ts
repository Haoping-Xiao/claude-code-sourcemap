// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KFn
// matched 2.1.88 source: src/utils/computerUse/escHotkey.ts
// class=modified  jaccard=0.3946  score=0.6557  fileCov=0.4978
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var KFn = E(() => {
  je();
  lRa = class lRa extends Error {
    constructor(e) {
      super(`computer-use native call exceeded ${e}ms`);
    }
  };
  ((cRa = iRa), (uRa = aRa));
});
function dRa(e) {
  if (uGt) return true;
  if (!U4().hotkey.registerEscape(e))
    return (
      T("[cu-esc] registerEscape returned false", {
        level: "warn",
      }),
      It("computeruse_esc_register", "tap_create_failed"),
      false
    );
  return (cRa(), (uGt = true), T("[cu-esc] registered"), xe("computeruse_esc_register"), true);
}
function pRa() {
  if (!uGt) return;
  try {
    U4().hotkey.unregister();
  } finally {
    (uRa(), (uGt = false), T("[cu-esc] unregistered"));
  }
}
function ofo() {
  if (!uGt) return;
  U4().hotkey.notifyExpectedEscape();
}
var uGt = false;
