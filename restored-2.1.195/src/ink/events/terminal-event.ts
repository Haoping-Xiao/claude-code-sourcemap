// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qit
// matched 2.1.88 source: src/ink/events/terminal-event.ts
// class=modified  jaccard=0.5507  score=1  fileCov=0.5507
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qit]
yne = class yne extends Qte {
  type;
  timeStamp;
  bubbles;
  cancelable;
  _target = null;
  _currentTarget = null;
  _eventPhase = "none";
  _propagationStopped = false;
  _defaultPrevented = false;
  constructor(e, t) {
    super();
    ((this.type = e),
      (this.timeStamp = performance.now()),
      (this.bubbles = t?.bubbles ?? true),
      (this.cancelable = t?.cancelable ?? true));
  }
  get target() {
    return this._target;
  }
  get currentTarget() {
    return this._currentTarget;
  }
  get eventPhase() {
    return this._eventPhase;
  }
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  stopPropagation() {
    this._propagationStopped = true;
  }
  stopImmediatePropagation() {
    (super.stopImmediatePropagation(), (this._propagationStopped = true));
  }
  preventDefault() {
    if (this.cancelable) this._defaultPrevented = true;
  }
  consume() {
    (this.preventDefault(), this.stopImmediatePropagation());
  }
  _setTarget(e) {
    this._target = e;
  }
  _setCurrentTarget(e) {
    this._currentTarget = e;
  }
  _setEventPhase(e) {
    this._eventPhase = e;
  }
  _isPropagationStopped() {
    return this._propagationStopped;
  }
  _isImmediatePropagationStopped() {
    return this.didStopImmediatePropagation();
  }
  _prepareForTarget(e) {}
};
var n0e;
