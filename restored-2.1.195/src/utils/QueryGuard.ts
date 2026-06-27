// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pmc
// matched 2.1.88 source: src/utils/QueryGuard.ts
// class=modified  jaccard=0.632  score=0.9352  fileCov=0.661
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Pmc] deps: fd, je, At, Is
Imc = require("child_process");
class T8o {
  _status = "idle";
  _generation = 0;
  _changed = Mi();
  reserve() {
    if (this._status !== "idle") return false;
    return ((this._status = "dispatching"), this._notify(), true);
  }
  cancelReservation() {
    if (this._status !== "dispatching") return;
    ((this._status = "idle"), this._notify());
  }
  tryStart() {
    if (this._status === "running") return null;
    return ((this._status = "running"), ++this._generation, this._notify(), this._generation);
  }
  end(e) {
    if (this._generation !== e) return false;
    if (this._status !== "running") return false;
    return ((this._status = "idle"), this._notify(), true);
  }
  forceEnd() {
    if (this._status === "idle") return;
    ((this._status = "idle"), ++this._generation, this._notify());
  }
  get isActive() {
    return this._status !== "idle";
  }
  get generation() {
    return this._generation;
  }
  subscribe = this._changed.subscribe;
  getSnapshot = () => this._status !== "idle";
  _notify() {
    (pSr(this._status !== "idle"), this._changed.emit());
  }
}
