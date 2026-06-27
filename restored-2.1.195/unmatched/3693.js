// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module f5a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var f5a = Q(r5n => {
  Object.defineProperty(r5n, "__esModule", {
    value: !0
  });
  r5n.StatusBuilder = void 0;
  class p5a {
    constructor() {
      this.code = null, this.details = null, this.metadata = null;
    }
    withCode(e) {
      return this.code = e, this;
    }
    withDetails(e) {
      return this.details = e, this;
    }
    withMetadata(e) {
      return this.metadata = e, this;
    }
    build() {
      let e = {};
      if (this.code !== null) e.code = this.code;
      if (this.details !== null) e.details = this.details;
      if (this.metadata !== null) e.metadata = this.metadata;
      return e;
    }
  }
  r5n.StatusBuilder = p5a;
});