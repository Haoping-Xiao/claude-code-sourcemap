// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p8r
// matched 2.1.88 source: src/tools/shared/spawnMultiAgent.ts
// class=partial  jaccard=0.0879  score=0.3191  fileCov=0.1082
// note: low-confidence suggestion: src/tools/shared/spawnMultiAgent.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var p8r = E(() => {
  uwi = new Set(["--prefill", "--prefill-b64", "--deep-link-repo", "--deep-link-last-fetch", "--deep-link-cwd-b64", "--handle-uri", "--settings", "--managed-settings", "--setting-sources", "--team-name", "--agent-id", "--agent-name", "--agent-color", "--parent-session-id", "--agent-type", "--model", "--agent", "--routine", "--effort", "--permission-mode", "--session-id"]);
});
function pwi(e) {
  let t = f8r;
  return f8r = e, t;
}
class fwi {
  #e;
  isEnabled() {
    if (this.#e !== void 0) return this.#e;
    let e;
    if (dwi("--ax-screen-reader")) e = !0;else {
      let t = Oe.CLAUDE_AX_SCREEN_READER;
      e = t !== void 0 ? t : Dr().axScreenReader === !0;
    }
    if (!e) return this.#e = !1;
    return this.#e = f8r?.(K0d, !0) ?? !0;
  }
  reset() {
    this.#e = void 0;
  }
}
function UD() {
  return mwi.isEnabled();
}
function tke() {
  if (mwi.isEnabled()) return {
    CLAUDE_AX_SCREEN_READER: "1"
  };
  return {};
}
var K0d = "tengu_ax_screen_reader",
  f8r = null,
  mwi;