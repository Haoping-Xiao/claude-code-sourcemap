// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PVt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var PVt = E(() => {
  db();
  fd();
  je();
  fn();
  At();
  Fh();
  Jt();
  TL_ = PHo * 60000;
});
class Ape {
  activeOperations = new Set();
  lastUserActivityTime = 0;
  lastCLIRecordedTime;
  isCLIActive = !1;
  USER_ACTIVITY_TIMEOUT_MS = 5000;
  getNow;
  getActiveTimeCounter;
  static instance = null;
  constructor(e) {
    this.getNow = e?.getNow ?? (() => Date.now()), this.getActiveTimeCounter = e?.getActiveTimeCounter ?? V_r, this.lastCLIRecordedTime = this.getNow();
  }
  static getInstance() {
    if (!Ape.instance) Ape.instance = new Ape();
    return Ape.instance;
  }
  static resetInstance() {
    Ape.instance = null;
  }
  static createInstance(e) {
    return Ape.instance = new Ape(e), Ape.instance;
  }
  recordUserActivity() {
    if (!this.isCLIActive && this.lastUserActivityTime !== 0) {
      let t = (this.getNow() - this.lastUserActivityTime) / 1000;
      if (t > 0) {
        let n = this.USER_ACTIVITY_TIMEOUT_MS / 1000;
        if (t < n) {
          let r = this.getActiveTimeCounter();
          if (r) r.add(t, {
            type: "user"
          });
        }
      }
    }
    this.lastUserActivityTime = this.getNow();
  }
  startCLIActivity(e) {
    if (this.activeOperations.has(e)) this.endCLIActivity(e);
    let t = this.activeOperations.size === 0;
    if (this.activeOperations.add(e), t) this.isCLIActive = !0, this.lastCLIRecordedTime = this.getNow();
  }
  endCLIActivity(e) {
    if (this.activeOperations.delete(e), this.activeOperations.size === 0) {
      let t = this.getNow(),
        n = (t - this.lastCLIRecordedTime) / 1000;
      if (n > 0) {
        let r = this.getActiveTimeCounter();
        if (r) r.add(n, {
          type: "cli"
        });
      }
      this.lastCLIRecordedTime = t, this.isCLIActive = !1;
    }
  }
  async trackOperation(e, t) {
    this.startCLIActivity(e);
    try {
      return await t();
    } finally {
      this.endCLIActivity(e);
    }
  }
  getActivityStates() {
    return {
      isUserActive: (this.getNow() - this.lastUserActivityTime) / 1000 < this.USER_ACTIVITY_TIMEOUT_MS / 1000,
      isCLIActive: this.isCLIActive,
      activeOperationCount: this.activeOperations.size
    };
  }
}
var VJ;