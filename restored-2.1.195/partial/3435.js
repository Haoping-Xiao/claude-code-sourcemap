// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F1a
// matched 2.1.88 source: src/hooks/useCommandKeybindings.tsx
// class=partial  jaccard=0.0995  score=0.1824  fileCov=0.1794
// note: low-confidence suggestion: src/hooks/useCommandKeybindings.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var F1a = E(() => {
  qit();
  Bho = class Bho extends yne {
    action;
    sourceEvent;
    isChordCompletion;
    origin;
    constructor(e, t) {
      super("action", {
        bubbles: !0,
        cancelable: !0
      });
      this.action = e, this.sourceEvent = t?.sourceEvent ?? null, this.isChordCompletion = t?.isChordCompletion ?? !1, this.origin = t?.origin ?? "single";
    }
    consume() {
      this.stopPropagation(), this.sourceEvent?.preventDefault(), this.sourceEvent?.stopImmediatePropagation();
    }
    get consumed() {
      return this._isPropagationStopped();
    }
  };
});
function yVe(e) {
  let t = e.startsWith("command:") ? "command:custom" : e,
    n = Date.now(),
    r = j1a.get(t);
  if (r !== void 0 && n - r < YPp) return;
  j1a.set(t, n), G("tengu_keybinding_fired", {
    action_id: t
  });
}
var YPp = 1000,
  j1a;