// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d3n
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var d3n = Q(Lde => {
  Object.defineProperty(Lde, "__esModule", {
    value: true
  });
  Lde.createDenyListAttributesProcessor = Lde.createAllowListAttributesProcessor = Lde.createMultiAttributesProcessor = Lde.createNoopAttributesProcessor = void 0;
  class zBa {
    process(e, t) {
      return e;
    }
  }
  class KBa {
    _processors;
    constructor(e) {
      this._processors = e;
    }
    process(e, t) {
      let n = e;
      for (let r of this._processors) n = r.process(n, t);
      return n;
    }
  }
  class YBa {
    _allowedAttributeNames;
    constructor(e) {
      this._allowedAttributeNames = e;
    }
    process(e, t) {
      let n = {};
      return Object.keys(e).filter(r => this._allowedAttributeNames.includes(r)).forEach(r => n[r] = e[r]), n;
    }
  }
  class XBa {
    _deniedAttributeNames;
    constructor(e) {
      this._deniedAttributeNames = e;
    }
    process(e, t) {
      let n = {};
      return Object.keys(e).filter(r => !this._deniedAttributeNames.includes(r)).forEach(r => n[r] = e[r]), n;
    }
  }
  function M$p() {
    return B$p;
  }
  Lde.createNoopAttributesProcessor = M$p;
  function $$p(e) {
    return new KBa(e);
  }
  Lde.createMultiAttributesProcessor = $$p;
  function O$p(e) {
    return new YBa(e);
  }
  Lde.createAllowListAttributesProcessor = O$p;
  function N$p(e) {
    return new XBa(e);
  }
  Lde.createDenyListAttributesProcessor = N$p;
  var B$p = new zBa();
});