// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dWa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dWa = Q(Q5t => {
  Object.defineProperty(Q5t, "__esModule", {
    value: true
  });
  Q5t.SubchannelPool = void 0;
  Q5t.getSubchannelPool = z3p;
  var U3p = Xja(),
    F3p = YGa(),
    j3p = O5(),
    G3p = q4(),
    W3p = uWa(),
    q3p = 10000 /* 1e4 */;
  class UWn {
    constructor() {
      this.pool = Object.create(null), this.cleanupTimer = null;
    }
    unrefUnusedSubchannels() {
      let e = true;
      for (let t in this.pool) {
        let r = this.pool[t].filter(o => !o.subchannel.unrefIfOneRef());
        if (r.length > 0) e = false;
        this.pool[t] = r;
      }
      if (e && this.cleanupTimer !== null) clearInterval(this.cleanupTimer), this.cleanupTimer = null;
    }
    ensureCleanupTask() {
      var e, t;
      if (this.cleanupTimer === null) this.cleanupTimer = setInterval(() => {
        this.unrefUnusedSubchannels();
      }, q3p), (t = (e = this.cleanupTimer).unref) === null || t === void 0 || t.call(e);
    }
    getOrCreateSubchannel(e, t, n, r) {
      this.ensureCleanupTask();
      let o = (0, G3p.uriToString)(e);
      if (o in this.pool) {
        let i = this.pool[o];
        for (let a of i) if ((0, j3p.subchannelAddressEqual)(t, a.subchannelAddress) && (0, U3p.channelOptionsEqual)(n, a.channelArguments) && r._equals(a.channelCredentials)) return a.subchannel;
      }
      let s = new F3p.Subchannel(e, t, n, r, new W3p.Http2SubchannelConnector(e));
      if (!(o in this.pool)) this.pool[o] = [];
      return this.pool[o].push({
        subchannelAddress: t,
        channelArguments: n,
        channelCredentials: r,
        subchannel: s
      }), s.ref(), s;
    }
  }
  Q5t.SubchannelPool = UWn;
  var V3p = new UWn();
  function z3p(e) {
    if (e) return V3p;else return new UWn();
  }
});