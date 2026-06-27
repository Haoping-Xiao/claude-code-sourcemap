// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QQo
// matched 2.1.88 source: node_modules/@smithy/smithy-client/dist-cjs/index.js
// class=new  jaccard=0.0194  score=0.0714  fileCov=0.0259
// note: nearest: node_modules/@smithy/smithy-client/dist-cjs/index.js (0.0194); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module QQo] (exports=QGc, module=rrn)
var QGc = {};
var rrn = {
  exports: QGc
};
(function () {
  var e, t, n, r, o, s, i, a, l;
  if (t = {}, a = this, typeof rrn !== "undefined" && rrn !== null && rrn.exports) rrn.exports = t;else a.ipaddr = t;
  i = function (c, u, d, p) {
    var f, m;
    if (c.length !== u.length) throw Error("ipaddr: cannot match CIDR for objects with different lengths");
    f = 0;
    while (p > 0) {
      if (m = d - p, m < 0) m = 0;
      if (c[f] >> m !== u[f] >> m) return false;
      p -= d, f += 1;
    }
    return true;
  }, t.subnetMatch = function (c, u, d) {
    var p, f, m, g, h;
    if (d == null) d = "unicast";
    for (m in u) {
      if (g = u[m], g[0] && !(g[0] instanceof Array)) g = [g];
      for (p = 0, f = g.length; p < f; p++) if (h = g[p], c.kind() === h[0].kind()) {
        if (c.match.apply(c, h)) return m;
      }
    }
    return d;
  }, t.IPv4 = function () {
    function c(u) {
      var d, p, f;
      if (u.length !== 4) throw Error("ipaddr: ipv4 octet count should be 4");
      for (d = 0, p = u.length; d < p; d++) if (f = u[d], !(0 <= f && f <= 255)) throw Error("ipaddr: ipv4 octet should fit in 8 bits");
      this.octets = u;
    }
    return c.prototype.kind = function () {
      return "ipv4";
    }, c.prototype.toString = function () {
      return this.octets.join(".");
    }, c.prototype.toNormalizedString = function () {
      return this.toString();
    }, c.prototype.toByteArray = function () {
      return this.octets.slice(0);
    }, c.prototype.match = function (u, d) {
      var p;
      if (d === void 0) p = u, u = p[0], d = p[1];
      if (u.kind() !== "ipv4") throw Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
      return i(this.octets, u.octets, 8, d);
    }, c.prototype.SpecialRanges = {
      unspecified: [[new c([0, 0, 0, 0]), 8]],
      broadcast: [[new c([255, 255, 255, 255]), 32]],
      multicast: [[new c([224, 0, 0, 0]), 4]],
      linkLocal: [[new c([169, 254, 0, 0]), 16]],
      loopback: [[new c([127, 0, 0, 0]), 8]],
      carrierGradeNat: [[new c([100, 64, 0, 0]), 10]],
      private: [[new c([10, 0, 0, 0]), 8], [new c([172, 16, 0, 0]), 12], [new c([192, 168, 0, 0]), 16]],
      reserved: [[new c([192, 0, 0, 0]), 24], [new c([192, 0, 2, 0]), 24], [new c([192, 88, 99, 0]), 24], [new c([198, 51, 100, 0]), 24], [new c([203, 0, 113, 0]), 24], [new c([240, 0, 0, 0]), 4]]
    }, c.prototype.range = function () {
      return t.subnetMatch(this, this.SpecialRanges);
    }, c.prototype.toIPv4MappedAddress = function () {
      return t.IPv6.parse("::ffff:" + this.toString());
    }, c.prototype.prefixLengthFromSubnetMask = function () {
      var u, d, p, f, m, g, h;
      h = {
        0: 8,
        128: 7,
        192: 6,
        224: 5,
        240: 4,
        248: 3,
        252: 2,
        254: 1,
        255: 0
      }, u = 0, m = false;
      for (d = p = 3; p >= 0; d = p += -1) if (f = this.octets[d], f in h) {
        if (g = h[f], m && g !== 0) return null;
        if (g !== 8) m = true;
        u += g;
      } else return null;
      return 32 - u;
    }, c;
  }(), n = "(0?\\d+|0x[a-f0-9]+)", r = {
    fourOctet: new RegExp("^" + n + "\\." + n + "\\." + n + "\\." + n + "$", "i"),
    longValue: new RegExp("^" + n + "$", "i")
  }, t.IPv4.parser = function (c) {
    var u, d, p, f, m;
    if (d = function (g) {
      if (g[0] === "0" && g[1] !== "x") return parseInt(g, 8);else return parseInt(g);
    }, u = c.match(r.fourOctet)) return function () {
      var g, h, y, b;
      y = u.slice(1, 6), b = [];
      for (g = 0, h = y.length; g < h; g++) p = y[g], b.push(d(p));
      return b;
    }();else if (u = c.match(r.longValue)) {
      if (m = d(u[1]), m > 4294967295 || m < 0) throw Error("ipaddr: address outside defined range");
      return function () {
        var g, h;
        h = [];
        for (f = g = 0; g <= 24; f = g += 8) h.push(m >> f & 255);
        return h;
      }().reverse();
    } else return null;
  }, t.IPv6 = function () {
    function c(u, d) {
      var p, f, m, g, h, y;
      if (u.length === 16) {
        this.parts = [];
        for (p = f = 0; f <= 14; p = f += 2) this.parts.push(u[p] << 8 | u[p + 1]);
      } else if (u.length === 8) this.parts = u;else throw Error("ipaddr: ipv6 part count should be 8 or 16");
      y = this.parts;
      for (m = 0, g = y.length; m < g; m++) if (h = y[m], !(0 <= h && h <= 65535)) throw Error("ipaddr: ipv6 part should fit in 16 bits");
      if (d) this.zoneId = d;
    }
    return c.prototype.kind = function () {
      return "ipv6";
    }, c.prototype.toString = function () {
      return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, "::");
    }, c.prototype.toRFC5952String = function () {
      var u, d, p, f, m;
      f = /((^|:)(0(:|$)){2,})/g, m = this.toNormalizedString(), u = 0, d = -1;
      while (p = f.exec(m)) if (p[0].length > d) u = p.index, d = p[0].length;
      if (d < 0) return m;
      return m.substring(0, u) + "::" + m.substring(u + d);
    }, c.prototype.toByteArray = function () {
      var u, d, p, f, m;
      u = [], m = this.parts;
      for (d = 0, p = m.length; d < p; d++) f = m[d], u.push(f >> 8), u.push(f & 255);
      return u;
    }, c.prototype.toNormalizedString = function () {
      var u, d, p;
      if (u = function () {
        var f, m, g, h;
        g = this.parts, h = [];
        for (f = 0, m = g.length; f < m; f++) d = g[f], h.push(d.toString(16));
        return h;
      }.call(this).join(":"), p = "", this.zoneId) p = "%" + this.zoneId;
      return u + p;
    }, c.prototype.toFixedLengthString = function () {
      var u, d, p;
      if (u = function () {
        var f, m, g, h;
        g = this.parts, h = [];
        for (f = 0, m = g.length; f < m; f++) d = g[f], h.push(d.toString(16).padStart(4, "0"));
        return h;
      }.call(this).join(":"), p = "", this.zoneId) p = "%" + this.zoneId;
      return u + p;
    }, c.prototype.match = function (u, d) {
      var p;
      if (d === void 0) p = u, u = p[0], d = p[1];
      if (u.kind() !== "ipv6") throw Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
      return i(this.parts, u.parts, 16, d);
    }, c.prototype.SpecialRanges = {
      unspecified: [new c([0, 0, 0, 0, 0, 0, 0, 0]), 128],
      linkLocal: [new c([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
      multicast: [new c([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
      loopback: [new c([0, 0, 0, 0, 0, 0, 0, 1]), 128],
      uniqueLocal: [new c([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
      ipv4Mapped: [new c([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
      rfc6145: [new c([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
      rfc6052: [new c([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
      "6to4": [new c([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
      teredo: [new c([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
      reserved: [[new c([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]]
    }, c.prototype.range = function () {
      return t.subnetMatch(this, this.SpecialRanges);
    }, c.prototype.isIPv4MappedAddress = function () {
      return this.range() === "ipv4Mapped";
    }, c.prototype.toIPv4Address = function () {
      var u, d, p;
      if (!this.isIPv4MappedAddress()) throw Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
      return p = this.parts.slice(-2), u = p[0], d = p[1], new t.IPv4([u >> 8, u & 255, d >> 8, d & 255]);
    }, c.prototype.prefixLengthFromSubnetMask = function () {
      var u, d, p, f, m, g, h;
      h = {
        0: 16,
        32768: 15,
        49152: 14,
        57344: 13,
        61440: 12,
        63488: 11,
        64512: 10,
        65024: 9,
        65280: 8,
        65408: 7,
        65472: 6,
        65504: 5,
        65520: 4,
        65528: 3,
        65532: 2,
        65534: 1,
        65535: 0
      }, u = 0, m = false;
      for (d = p = 7; p >= 0; d = p += -1) if (f = this.parts[d], f in h) {
        if (g = h[f], m && g !== 0) return null;
        if (g !== 16) m = true;
        u += g;
      } else return null;
      return 128 - u;
    }, c;
  }(), o = "(?:[0-9a-f]+::?)+", l = "%[0-9a-z]{1,}", s = {
    zoneIndex: new RegExp(l, "i"),
    native: new RegExp("^(::)?(" + o + ")?([0-9a-f]+)?(::)?(" + l + ")?$", "i"),
    transitional: new RegExp("^((?:" + o + ")|(?:::)(?:" + o + ")?)" + (n + "\\." + n + "\\." + n + "\\." + n) + ("(" + l + ")?$"), "i")
  }, e = function (c, u) {
    var d, p, f, m, g, h;
    if (c.indexOf("::") !== c.lastIndexOf("::")) return null;
    if (h = (c.match(s.zoneIndex) || [])[0], h) h = h.substring(1), c = c.replace(/%.+$/, "");
    d = 0, p = -1;
    while ((p = c.indexOf(":", p + 1)) >= 0) d++;
    if (c.substr(0, 2) === "::") d--;
    if (c.substr(-2, 2) === "::") d--;
    if (d > u) return null;
    g = u - d, m = ":";
    while (g--) m += "0:";
    if (c = c.replace("::", m), c[0] === ":") c = c.slice(1);
    if (c[c.length - 1] === ":") c = c.slice(0, -1);
    return u = function () {
      var y, b, _, S;
      _ = c.split(":"), S = [];
      for (y = 0, b = _.length; y < b; y++) f = _[y], S.push(parseInt(f, 16));
      return S;
    }(), {
      parts: u,
      zoneId: h
    };
  }, t.IPv6.parser = function (c) {
    var u, d, p, f, m, g, h;
    if (s.native.test(c)) return e(c, 8);else if (f = c.match(s.transitional)) {
      if (h = f[6] || "", u = e(f[1].slice(0, -1) + h, 6), u.parts) {
        g = [parseInt(f[2]), parseInt(f[3]), parseInt(f[4]), parseInt(f[5])];
        for (d = 0, p = g.length; d < p; d++) if (m = g[d], !(0 <= m && m <= 255)) return null;
        return u.parts.push(g[0] << 8 | g[1]), u.parts.push(g[2] << 8 | g[3]), {
          parts: u.parts,
          zoneId: u.zoneId
        };
      }
    }
    return null;
  }, t.IPv4.isIPv4 = t.IPv6.isIPv6 = function (c) {
    return this.parser(c) !== null;
  }, t.IPv4.isValid = function (c) {
    var u;
    try {
      return new this(this.parser(c)), true;
    } catch (d) {
      return u = d, false;
    }
  }, t.IPv4.isValidFourPartDecimal = function (c) {
    if (t.IPv4.isValid(c) && c.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) return true;else return false;
  }, t.IPv6.isValid = function (c) {
    var u, d;
    if (typeof c === "string" && c.indexOf(":") === -1) return false;
    try {
      return u = this.parser(c), new this(u.parts, u.zoneId), true;
    } catch (p) {
      return d = p, false;
    }
  }, t.IPv4.parse = function (c) {
    var u = this.parser(c);
    if (u === null) throw Error("ipaddr: string is not formatted like ip address");
    return new this(u);
  }, t.IPv6.parse = function (c) {
    var u = this.parser(c);
    if (u.parts === null) throw Error("ipaddr: string is not formatted like ip address");
    return new this(u.parts, u.zoneId);
  }, t.IPv4.parseCIDR = function (c) {
    var u, d, p;
    if (d = c.match(/^(.+)\/(\d+)$/)) {
      if (u = parseInt(d[2]), u >= 0 && u <= 32) return p = [this.parse(d[1]), u], Object.defineProperty(p, "toString", {
        value: function () {
          return this.join("/");
        }
      }), p;
    }
    throw Error("ipaddr: string is not formatted like an IPv4 CIDR range");
  }, t.IPv4.subnetMaskFromPrefixLength = function (c) {
    var u, d, p;
    if (c = parseInt(c), c < 0 || c > 32) throw Error("ipaddr: invalid IPv4 prefix length");
    p = [0, 0, 0, 0], d = 0, u = Math.floor(c / 8);
    while (d < u) p[d] = 255, d++;
    if (u < 4) p[u] = Math.pow(2, c % 8) - 1 << 8 - c % 8;
    return new this(p);
  }, t.IPv4.broadcastAddressFromCIDR = function (c) {
    var u, d, p, f, m, g;
    try {
      u = this.parseCIDR(c), f = u[0].toByteArray(), g = this.subnetMaskFromPrefixLength(u[1]).toByteArray(), m = [], p = 0;
      while (p < 4) m.push(parseInt(f[p], 10) | parseInt(g[p], 10) ^ 255), p++;
      return new this(m);
    } catch (h) {
      throw d = h, Error("ipaddr: the address does not have IPv4 CIDR format");
    }
  }, t.IPv4.networkAddressFromCIDR = function (c) {
    var u, d, p, f, m, g;
    try {
      u = this.parseCIDR(c), f = u[0].toByteArray(), g = this.subnetMaskFromPrefixLength(u[1]).toByteArray(), m = [], p = 0;
      while (p < 4) m.push(parseInt(f[p], 10) & parseInt(g[p], 10)), p++;
      return new this(m);
    } catch (h) {
      throw d = h, Error("ipaddr: the address does not have IPv4 CIDR format");
    }
  }, t.IPv6.parseCIDR = function (c) {
    var u, d, p;
    if (d = c.match(/^(.+)\/(\d+)$/)) {
      if (u = parseInt(d[2]), u >= 0 && u <= 128) return p = [this.parse(d[1]), u], Object.defineProperty(p, "toString", {
        value: function () {
          return this.join("/");
        }
      }), p;
    }
    throw Error("ipaddr: string is not formatted like an IPv6 CIDR range");
  }, t.isValid = function (c) {
    return t.IPv6.isValid(c) || t.IPv4.isValid(c);
  }, t.parse = function (c) {
    if (t.IPv6.isValid(c)) return t.IPv6.parse(c);else if (t.IPv4.isValid(c)) return t.IPv4.parse(c);else throw Error("ipaddr: the address has neither IPv6 nor IPv4 format");
  }, t.parseCIDR = function (c) {
    var u;
    try {
      return t.IPv6.parseCIDR(c);
    } catch (d) {
      u = d;
      try {
        return t.IPv4.parseCIDR(c);
      } catch (p) {
        throw u = p, Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
      }
    }
  }, t.fromByteArray = function (c) {
    var u = c.length;
    if (u === 4) return new t.IPv4(c);else if (u === 16) return new t.IPv6(c);else throw Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
  }, t.process = function (c) {
    var u = this.parse(c);
    if (u.kind() === "ipv6" && u.isIPv4MappedAddress()) return u.toIPv4Address();else return u;
  };
}).call(QGc);
function zgr() {
  return ut(process.env.CLAUDE_GATEWAY_ALLOW_LOOPBACK);
}
function eZo(e) {
  let t;
  try {
    t = Ygr.parse(e.replace(/^\[|\]$/g, ""));
  } catch {
    return false;
  }
  if (t.kind() === "ipv6") {
    let o = t;
    if (o.isIPv4MappedAddress()) t = o.toIPv4Address();else {
      let s = o.range();
      if (s === "linkLocal") return true;
      if (s === "loopback" || s === "unspecified") return !zgr();
      if (o.toNormalizedString() === "fd00:ec2:0:0:0:0:0:254") return true;
      return false;
    }
  }
  let n = t.toString(),
    r = t.range();
  if (r === "linkLocal") return true;
  if (r === "unspecified") return !zgr();
  if (r === "loopback") return !zgr();
  if (n === "100.100.100.200") return true;
  return false;
}
function UZ(e) {
  try {
    let t = new URL(e);
    if (t.protocol !== "https:" && t.protocol !== "http:") return false;
    let n = t.hostname.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.$/, "");
    if (y$m.has(n)) return false;
    return !eZo(n);
  } catch {
    return false;
  }
}
async function iwt(e, t) {
  if (!UZ(e)) throw Error(`${ZQo}: ${e}`);
  let n = new URL(e),
    r = n.hostname.replace(/^\[|\]$/g, "").replace(/\.$/, ""),
    o = {
      ...t,
      redirect: "manual"
    };
  if (Ygr.isValid(r)) return fetch(n, o);
  let s = await Kgr.promises.lookup(r, {
    all: true
  });
  if (s.length === 0) throw Object.assign(Error(`getaddrinfo ENOTFOUND ${r}`), {
    code: "ENOTFOUND"
  });
  for (let {
    address: c
  } of s) if (eZo(c)) throw Error(`${ZQo}: ${r} \u2192 ${c}`);
  let i = s.find(c => c.family === 4) ?? s[0],
    a = n.host;
  n.hostname = i.family === 6 ? `[${i.address}]` : i.address;
  let l = new Headers(o.headers);
  return l.set("host", a), fetch(n, {
    ...o,
    headers: l,
    ...(n.protocol === "https:" && {
      tls: {
        ...o.tls,
        serverName: r,
        checkServerIdentity: (c, u) => ZGc.checkServerIdentity(r, u)
      }
    })
  });
}
async function tWc() {
  if (zgr()) return;
  try {
    await fetch("http://169.254.169.254/", {
      signal: AbortSignal.timeout(200),
      redirect: "manual"
    }), gu("warn", "pod can reach cloud metadata endpoint (169.254.169.254); apply egress NetworkPolicy (see src/gateway/docs/docker/network-policy.yaml)");
  } catch {}
}
var Kgr,
  Ygr,
  ZGc,
  ZQo = "ECONNREFUSED_SSRF: blocked (cloud metadata / link-local)",
  y$m,
  eWc = (e, t, n) => {
    let r = typeof t === "function" ? {} : t,
      o = typeof t === "function" ? t : n;
    Kgr.lookup(e, {
      ...r,
      all: true
    }, (s, i) => {
      if (s) return o(s);
      if (i.length === 0) return o(Object.assign(Error(`getaddrinfo ENOTFOUND ${e}`), {
        code: "ENOTFOUND"
      }));
      for (let {
        address: l
      } of i) if (eZo(l)) return o(Error(`${ZQo}: ${e} \u2192 ${l}`));
      let a = i.find(l => l.family === 4) ?? i[0];
      if (r.all) return o(null, [a]);
      return o(null, a.address, a.family);
    });
  };