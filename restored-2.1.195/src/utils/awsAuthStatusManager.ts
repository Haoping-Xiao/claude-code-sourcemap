// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d2r
// matched 2.1.88 source: src/utils/awsAuthStatusManager.ts
// class=modified  jaccard=0.4165  score=0.6277  fileCov=0.5531
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
class LD {
  static instance = null;
  status = {
    isAuthenticating: false,
    output: [],
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
      output: [...this.status.output],
    };
  }
  startAuthentication() {
    (this.clearDismissTimer(),
      (this.status = {
        isAuthenticating: true,
        output: [],
      }),
      this.changed.emit(this.getStatus()));
  }
  addOutput(e) {
    (this.status.output.push(e), this.changed.emit(this.getStatus()));
  }
  setError(e) {
    ((this.status.error = e), this.changed.emit(this.getStatus()));
  }
  endAuthentication(e) {
    if ((this.clearDismissTimer(), e))
      this.status = {
        isAuthenticating: false,
        output: [],
      };
    else
      ((this.status.isAuthenticating = false),
        (this.dismissTimer = setTimeout(() => this.dismiss(), Bdd)),
        this.dismissTimer.unref?.());
    this.changed.emit(this.getStatus());
  }
  dismiss() {
    (this.clearDismissTimer(),
      (this.status = {
        isAuthenticating: false,
        output: [],
      }),
      this.changed.emit(this.getStatus()));
  }
  subscribe = this.changed.subscribe;
  clearDismissTimer() {
    if (this.dismissTimer !== null) (clearTimeout(this.dismissTimer), (this.dismissTimer = null));
  }
  static reset() {
    if (LD.instance)
      (LD.instance.clearDismissTimer(), LD.instance.changed.clear(), (LD.instance = null));
  }
}
var Bdd = 15000;
