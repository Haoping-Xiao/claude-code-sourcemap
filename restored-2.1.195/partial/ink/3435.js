// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module F1a
// matched 2.1.88 source: src/ink/events/terminal-event.ts
// class=partial  jaccard=0.1552  score=0.3432  fileCov=0.2208
// note: low-confidence suggestion: src/ink/events/terminal-event.ts; dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module F1a] deps: qit
Bho = class Bho extends yne {
  action;
  sourceEvent;
  isChordCompletion;
  origin;
  constructor(e, t) {
    super("action", {
      bubbles: true,
      cancelable: true
    });
    this.action = e, this.sourceEvent = t?.sourceEvent ?? null, this.isChordCompletion = t?.isChordCompletion ?? false, this.origin = t?.origin ?? "single";
  }
  consume() {
    this.stopPropagation(), this.sourceEvent?.preventDefault(), this.sourceEvent?.stopImmediatePropagation();
  }
  get consumed() {
    return this._isPropagationStopped();
  }
};
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