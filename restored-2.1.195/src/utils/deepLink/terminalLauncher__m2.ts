// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p8r
// matched 2.1.88 source: src/utils/deepLink/terminalLauncher.ts
// class=modified (alt of src/utils/deepLink/terminalLauncher.ts)  jaccard=0.0275  score=0.1185  fileCov=0.0345
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module p8r]
uwi = new Set([
  "--prefill",
  "--prefill-b64",
  "--deep-link-repo",
  "--deep-link-last-fetch",
  "--deep-link-cwd-b64",
  "--handle-uri",
  "--settings",
  "--managed-settings",
  "--setting-sources",
  "--team-name",
  "--agent-id",
  "--agent-name",
  "--agent-color",
  "--parent-session-id",
  "--agent-type",
  "--model",
  "--agent",
  "--routine",
  "--effort",
  "--permission-mode",
  "--session-id",
]);
function pwi(e) {
  let t = f8r;
  return ((f8r = e), t);
}
class fwi {
  #e;
  isEnabled() {
    if (this.#e !== void 0) return this.#e;
    let e;
    if (dwi("--ax-screen-reader")) e = true;
    else {
      let t = Oe.CLAUDE_AX_SCREEN_READER;
      e = t !== void 0 ? t : Dr().axScreenReader === true;
    }
    if (!e) return (this.#e = false);
    return (this.#e = f8r?.(K0d, true) ?? true);
  }
  reset() {
    this.#e = void 0;
  }
}
function UD() {
  return mwi.isEnabled();
}
function tke() {
  if (mwi.isEnabled())
    return {
      CLAUDE_AX_SCREEN_READER: "1",
    };
  return {};
}
var K0d = "tengu_ax_screen_reader",
  f8r = null,
  mwi;
