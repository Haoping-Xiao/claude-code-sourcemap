// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kqn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Kqn = Q(ppe => {
  Object.defineProperty(ppe, "__esModule", {
    value: !0
  });
  ppe.createDenyListAttributesProcessor = ppe.createAllowListAttributesProcessor = ppe.createMultiAttributesProcessor = ppe.createNoopAttributesProcessor = void 0;
  class j8a {
    process(e, t) {
      return e;
    }
  }
  class G8a {
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
  class W8a {
    _allowedAttributeNames;
    constructor(e) {
      this._allowedAttributeNames = new Set(e);
    }
    process(e, t) {
      let n = {};
      for (let r in e) if (Object.prototype.hasOwnProperty.call(e, r) && this._allowedAttributeNames.has(r)) n[r] = e[r];
      return n;
    }
  }
  class q8a {
    _deniedAttributeNames;
    constructor(e) {
      this._deniedAttributeNames = new Set(e);
    }
    process(e, t) {
      let n = {};
      for (let r in e) if (Object.prototype.hasOwnProperty.call(e, r) && !this._deniedAttributeNames.has(r)) n[r] = e[r];
      return n;
    }
  }
  function g6p() {
    return b6p;
  }
  ppe.createNoopAttributesProcessor = g6p;
  function h6p(e) {
    return new G8a(e);
  }
  ppe.createMultiAttributesProcessor = h6p;
  function y6p(e) {
    return new W8a(e);
  }
  ppe.createAllowListAttributesProcessor = y6p;
  function _6p(e) {
    return new q8a(e);
  }
  ppe.createDenyListAttributesProcessor = _6p;
  var b6p = new j8a();
});