// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O5
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var O5 = Q(zre => {
  Object.defineProperty(zre, "__esModule", {
    value: !0
  });
  zre.EndpointMap = void 0;
  zre.isTcpSubchannelAddress = v5t;
  zre.subchannelAddressEqual = GGn;
  zre.subchannelAddressToString = Qja;
  zre.stringToSubchannelAddress = oFp;
  zre.endpointEqual = sFp;
  zre.endpointToString = iFp;
  zre.endpointHasAddress = Zja;
  var Jja = require("net");
  function v5t(e) {
    return "port" in e;
  }
  function GGn(e, t) {
    if (!e && !t) return !0;
    if (!e || !t) return !1;
    if (v5t(e)) return v5t(t) && e.host === t.host && e.port === t.port;else return !v5t(t) && e.path === t.path;
  }
  function Qja(e) {
    if (v5t(e)) {
      if ((0, Jja.isIPv6)(e.host)) return "[" + e.host + "]:" + e.port;else return e.host + ":" + e.port;
    } else return e.path;
  }
  var rFp = 443;
  function oFp(e, t) {
    if ((0, Jja.isIP)(e)) return {
      host: e,
      port: t !== null && t !== void 0 ? t : rFp
    };else return {
      path: e
    };
  }
  function sFp(e, t) {
    if (e.addresses.length !== t.addresses.length) return !1;
    for (let n = 0; n < e.addresses.length; n++) if (!GGn(e.addresses[n], t.addresses[n])) return !1;
    return !0;
  }
  function iFp(e) {
    return "[" + e.addresses.map(Qja).join(", ") + "]";
  }
  function Zja(e, t) {
    for (let n of e.addresses) if (GGn(n, t)) return !0;
    return !1;
  }
  function T5t(e, t) {
    if (e.addresses.length !== t.addresses.length) return !1;
    for (let n of e.addresses) {
      let r = !1;
      for (let o of t.addresses) if (GGn(n, o)) {
        r = !0;
        break;
      }
      if (!r) return !1;
    }
    return !0;
  }
  class e4a {
    constructor() {
      this.map = new Set();
    }
    get size() {
      return this.map.size;
    }
    getForSubchannelAddress(e) {
      for (let t of this.map) if (Zja(t.key, e)) return t.value;
      return;
    }
    deleteMissing(e) {
      let t = [];
      for (let n of this.map) {
        let r = !1;
        for (let o of e) if (T5t(o, n.key)) r = !0;
        if (!r) t.push(n.value), this.map.delete(n);
      }
      return t;
    }
    get(e) {
      for (let t of this.map) if (T5t(e, t.key)) return t.value;
      return;
    }
    set(e, t) {
      for (let n of this.map) if (T5t(e, n.key)) {
        n.value = t;
        return;
      }
      this.map.add({
        key: e,
        value: t
      });
    }
    delete(e) {
      for (let t of this.map) if (T5t(e, t.key)) {
        this.map.delete(t);
        return;
      }
    }
    has(e) {
      for (let t of this.map) if (T5t(e, t.key)) return !0;
      return !1;
    }
    clear() {
      this.map.clear();
    }
    *keys() {
      for (let e of this.map) yield e.key;
    }
    *values() {
      for (let e of this.map) yield e.value;
    }
    *entries() {
      for (let e of this.map) yield [e.key, e.value];
    }
  }
  zre.EndpointMap = e4a;
});