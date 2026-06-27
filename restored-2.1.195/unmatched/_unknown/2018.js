// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XTi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XTi = Q(bCn => {
  Object.defineProperty(bCn, "__esModule", {
    value: true
  });
  bCn.PassThroughClient = void 0;
  var skd = F9();
  class YTi extends skd.AuthClient {
    async request(e) {
      return this.transporter.request(e);
    }
    async getAccessToken() {
      return {};
    }
    async getRequestHeaders() {
      return new Headers();
    }
  }
  bCn.PassThroughClient = YTi;
});