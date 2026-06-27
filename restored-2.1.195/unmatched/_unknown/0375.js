// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nds
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nds = Q((rQm, Ods) => {
  var {
      isUUID: Mru
    } = aCr(),
    $ru = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,
    Oru = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
  function Nru(e) {
    return Oru.indexOf(e) !== -1;
  }
  function lCr(e) {
    if (e.secure === true) return true;else if (e.secure === false) return false;else if (e.scheme) return e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S");else return false;
  }
  function Pds(e) {
    if (!e.host) e.error = e.error || "HTTP URIs must have a host.";
    return e;
  }
  function Mds(e) {
    let t = String(e.scheme).toLowerCase() === "https";
    if (e.port === (t ? 443 : 80) || e.port === "") e.port = void 0;
    if (!e.path) e.path = "/";
    return e;
  }
  function Bru(e) {
    return e.secure = lCr(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
  }
  function Uru(e) {
    if (e.port === (lCr(e) ? 443 : 80) || e.port === "") e.port = void 0;
    if (typeof e.secure === "boolean") e.scheme = e.secure ? "wss" : "ws", e.secure = void 0;
    if (e.resourceName) {
      let [t, n] = e.resourceName.split("?");
      e.path = t && t !== "/" ? t : void 0, e.query = n, e.resourceName = void 0;
    }
    return e.fragment = void 0, e;
  }
  function Fru(e, t) {
    if (!e.path) return e.error = "URN can not be parsed", e;
    let n = e.path.match($ru);
    if (n) {
      let r = t.scheme || e.scheme || "urn";
      e.nid = n[1].toLowerCase(), e.nss = n[2];
      let o = `${r}:${t.nid || e.nid}`,
        s = cCr(o);
      if (e.path = void 0, s) e = s.parse(e, t);
    } else e.error = e.error || "URN can not be parsed.";
    return e;
  }
  function jru(e, t) {
    if (e.nid === void 0) throw Error("URN without nid cannot be serialized");
    let n = t.scheme || e.scheme || "urn",
      r = e.nid.toLowerCase(),
      o = `${n}:${t.nid || r}`,
      s = cCr(o);
    if (s) e = s.serialize(e, t);
    let i = e,
      a = e.nss;
    return i.path = `${r || t.nid}:${a}`, t.skipEscape = true, i;
  }
  function Gru(e, t) {
    let n = e;
    if (n.uuid = n.nss, n.nss = void 0, !t.tolerant && (!n.uuid || !Mru(n.uuid))) n.error = n.error || "UUID is not valid.";
    return n;
  }
  function Wru(e) {
    let t = e;
    return t.nss = (e.uuid || "").toLowerCase(), t;
  }
  var $ds = {
      scheme: "http",
      domainHost: true,
      parse: Pds,
      serialize: Mds
    },
    qru = {
      scheme: "https",
      domainHost: $ds.domainHost,
      parse: Pds,
      serialize: Mds
    },
    pun = {
      scheme: "ws",
      domainHost: true,
      parse: Bru,
      serialize: Uru
    },
    Vru = {
      scheme: "wss",
      domainHost: pun.domainHost,
      parse: pun.parse,
      serialize: pun.serialize
    },
    zru = {
      scheme: "urn",
      parse: Fru,
      serialize: jru,
      skipNormalize: true
    },
    Kru = {
      scheme: "urn:uuid",
      parse: Gru,
      serialize: Wru,
      skipNormalize: true
    },
    fun = {
      http: $ds,
      https: qru,
      ws: pun,
      wss: Vru,
      urn: zru,
      "urn:uuid": Kru
    };
  Object.setPrototypeOf(fun, null);
  function cCr(e) {
    return e && (fun[e] || fun[e.toLowerCase()]) || void 0;
  }
  Ods.exports = {
    wsIsSecure: lCr,
    SCHEMES: fun,
    isValidSchemeName: Nru,
    getSchemeHandler: cCr
  };
});