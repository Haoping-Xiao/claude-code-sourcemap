// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HVr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var HVr = Q(jwn => {
  Object.defineProperty(jwn, "__esModule", {
    value: true
  });
  jwn.LoginTicket = void 0;
  class NHi {
    envelope;
    payload;
    constructor(e, t) {
      this.envelope = e, this.payload = t;
    }
    getEnvelope() {
      return this.envelope;
    }
    getPayload() {
      return this.payload;
    }
    getUserId() {
      let e = this.getPayload();
      if (e && e.sub) return e.sub;
      return null;
    }
    getAttributes() {
      return {
        envelope: this.getEnvelope(),
        payload: this.getPayload()
      };
    }
  }
  jwn.LoginTicket = NHi;
});