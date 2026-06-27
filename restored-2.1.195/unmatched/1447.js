// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d2r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var d2r = E(() => {
  je();
});
class LD {
  static instance = null;
  status = {
    isAuthenticating: !1,
    output: []
  };
  changed = Mi();
  dismissTimer = null;
  static getInstance() {
    if (!LD.instance) LD.instance = new LD();
    return LD.instance;
  }
  getStatus() {
    return {
      ...this.status,
      output: [...this.status.output]
    };
  }
  startAuthentication() {
    this.clearDismissTimer(), this.status = {
      isAuthenticating: !0,
      output: []
    }, this.changed.emit(this.getStatus());
  }
  addOutput(e) {
    this.status.output.push(e), this.changed.emit(this.getStatus());
  }
  setError(e) {
    this.status.error = e, this.changed.emit(this.getStatus());
  }
  endAuthentication(e) {
    if (this.clearDismissTimer(), e) this.status = {
      isAuthenticating: !1,
      output: []
    };else this.status.isAuthenticating = !1, this.dismissTimer = setTimeout(() => this.dismiss(), Bdd), this.dismissTimer.unref?.();
    this.changed.emit(this.getStatus());
  }
  dismiss() {
    this.clearDismissTimer(), this.status = {
      isAuthenticating: !1,
      output: []
    }, this.changed.emit(this.getStatus());
  }
  subscribe = this.changed.subscribe;
  clearDismissTimer() {
    if (this.dismissTimer !== null) clearTimeout(this.dismissTimer), this.dismissTimer = null;
  }
  static reset() {
    if (LD.instance) LD.instance.clearDismissTimer(), LD.instance.changed.clear(), LD.instance = null;
  }
}
var Bdd = 15000;