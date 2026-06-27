// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KFn
// matched 2.1.88 source: src/utils/computerUse/escHotkey.ts
// class=modified  jaccard=0.3583  score=0.4866  fileCov=0.5762
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
  if (uGt) return !0;
  if (!U4().hotkey.registerEscape(e))
    return (
      T("[cu-esc] registerEscape returned false", {
        level: "warn",
      }),
      It("computeruse_esc_register", "tap_create_failed"),
      !1
    );
  return (cRa(), (uGt = !0), T("[cu-esc] registered"), xe("computeruse_esc_register"), !0);
}
function pRa() {
  if (!uGt) return;
  try {
    U4().hotkey.unregister();
  } finally {
    (uRa(), (uGt = !1), T("[cu-esc] unregistered"));
  }
}
function ofo() {
  if (!uGt) return;
  U4().hotkey.notifyExpectedEscape();
}
var uGt = !1;
