// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uee
// matched 2.1.88 source: node_modules/gtoken/build/src/index.js
// class=new  jaccard=0.0423  score=0.2204  fileCov=0.0498
// note: nearest: node_modules/gtoken/build/src/index.js (0.0423); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uee = E(() => {
  p0();
  Uzc = new Set(["error", "error_description", "error_uri"]);
  nf = class nf extends ui {
    constructor(e, t = null, n = null, r = null) {
      super(e);
      this.statusCode = t, this.body = n, this.requestId = r;
    }
  };
});
function dee() {
  return Math.floor(Date.now() / 1000);
}
class aUe {
  constructor(e, t) {
    this.cached = null, this.pendingRefresh = null, this.nextForce = false, this.lastAdvisoryError = 0, this.provider = e, this.onAdvisoryRefreshError = t;
  }
  async getToken() {
    let e = this.nextForce;
    this.nextForce = false;
    let t = this.cached;
    if (e || t == null) return (await this.refresh(e)).token;
    if (t.expiresAt == null) return t.token;
    let n = t.expiresAt - dee();
    if (n > nos) return t.token;
    if (n > owe) return this.backgroundRefresh(), t.token;
    return (await this.refresh()).token;
  }
  invalidate() {
    this.cached = null, this.nextForce = true;
  }
  refresh(e = false) {
    if (this.pendingRefresh && !e) return this.pendingRefresh;
    return this.doRefresh(e);
  }
  backgroundRefresh() {
    if (this.pendingRefresh) return;
    if (dee() - this.lastAdvisoryError < ros) return;
    this.doRefresh().catch(e => {
      this.lastAdvisoryError = dee(), this.onAdvisoryRefreshError?.(e);
    });
  }
  doRefresh(e = false) {
    return this.pendingRefresh = this.provider(e ? {
      forceRefresh: true
    } : void 0).then(t => (this.cached = t, this.pendingRefresh = null, t), t => {
      throw this.pendingRefresh = null, t;
    }), this.pendingRefresh;
  }
}