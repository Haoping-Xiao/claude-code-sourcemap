// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aCr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aCr = Q((nQm, Dds) => {
  var Eru = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),
    xds = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u),
    sCr = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu),
    kds = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu),
    Aru = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
  function iCr(e) {
    let t = "",
      n = 0,
      r = 0;
    for (r = 0; r < e.length; r++) {
      if (n = e[r].charCodeAt(0), n === 48) continue;
      if (!(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
      t += e[r];
      break;
    }
    for (r += 1; r < e.length; r++) {
      if (n = e[r].charCodeAt(0), !(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
      t += e[r];
    }
    return t;
  }
  var Hru = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function Ids(e) {
    return e.length = 0, true;
  }
  function Tru(e, t, n) {
    if (e.length) {
      let r = iCr(e);
      if (r !== "") t.push(r);else return n.error = true, false;
      e.length = 0;
    }
    return true;
  }
  function vru(e) {
    let t = 0,
      n = {
        error: false,
        address: "",
        zone: ""
      },
      r = [],
      o = [],
      s = false,
      i = false,
      a = Tru;
    for (let l = 0; l < e.length; l++) {
      let c = e[l];
      if (c === "[" || c === "]") continue;
      if (c === ":") {
        if (s === true) i = true;
        if (!a(o, r, n)) break;
        if (++t > 7) {
          n.error = true;
          break;
        }
        if (l > 0 && e[l - 1] === ":") s = true;
        r.push(":");
        continue;
      } else if (c === "%") {
        if (!a(o, r, n)) break;
        a = Ids;
      } else {
        o.push(c);
        continue;
      }
    }
    if (o.length) if (a === Ids) n.zone = o.join("");else if (i) r.push(o.join(""));else r.push(iCr(o));
    return n.address = r.join(""), n;
  }
  function Rds(e) {
    if (wru(e, ":") < 2) return {
      host: e,
      isIPV6: false
    };
    let t = vru(e);
    if (!t.error) {
      let {
        address: n,
        address: r
      } = t;
      if (t.zone) n += "%" + t.zone, r += "%25" + t.zone;
      return {
        host: n,
        isIPV6: true,
        escapedHost: r
      };
    } else return {
      host: e,
      isIPV6: false
    };
  }
  function wru(e, t) {
    let n = 0;
    for (let r = 0; r < e.length; r++) if (e[r] === t) n++;
    return n;
  }
  function Cru(e) {
    let t = e,
      n = [],
      r = -1,
      o = 0;
    while (o = t.length) {
      if (o === 1) {
        if (t === ".") break;else if (t === "/") {
          n.push("/");
          break;
        } else {
          n.push(t);
          break;
        }
      } else if (o === 2) {
        if (t[0] === ".") {
          if (t[1] === ".") break;else if (t[1] === "/") {
            t = t.slice(2);
            continue;
          }
        } else if (t[0] === "/") {
          if (t[1] === "." || t[1] === "/") {
            n.push("/");
            break;
          }
        }
      } else if (o === 3) {
        if (t === "/..") {
          if (n.length !== 0) n.pop();
          n.push("/");
          break;
        }
      }
      if (t[0] === ".") {
        if (t[1] === ".") {
          if (t[2] === "/") {
            t = t.slice(3);
            continue;
          }
        } else if (t[1] === "/") {
          t = t.slice(2);
          continue;
        }
      } else if (t[0] === "/") {
        if (t[1] === ".") {
          if (t[2] === "/") {
            t = t.slice(2);
            continue;
          } else if (t[2] === ".") {
            if (t[3] === "/") {
              if (t = t.slice(3), n.length !== 0) n.pop();
              continue;
            }
          }
        }
      }
      if ((r = t.indexOf("/", 1)) === -1) {
        n.push(t);
        break;
      } else n.push(t.slice(0, r)), t = t.slice(r);
    }
    return n.join("");
  }
  var Iru = {
      "@": "%40",
      "/": "%2F",
      "?": "%3F",
      "#": "%23",
      ":": "%3A"
    },
    xru = /[@/?#:]/g,
    kru = /[@/?#]/g;
  function Lds(e, t) {
    let n = t ? kru : xru;
    return n.lastIndex = 0, e.replace(n, r => Iru[r]);
  }
  function Rru(e, t = false) {
    if (e.indexOf("%") === -1) return e;
    let n = "";
    for (let r = 0; r < e.length; r++) {
      if (e[r] === "%" && r + 2 < e.length) {
        let o = e.slice(r + 1, r + 3);
        if (sCr(o)) {
          let s = o.toUpperCase(),
            i = String.fromCharCode(parseInt(s, 16));
          if (t && kds(i)) n += i;else n += "%" + s;
          r += 2;
          continue;
        }
      }
      n += e[r];
    }
    return n;
  }
  function Lru(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) {
      if (e[n] === "%" && n + 2 < e.length) {
        let r = e.slice(n + 1, n + 3);
        if (sCr(r)) {
          let o = r.toUpperCase(),
            s = String.fromCharCode(parseInt(o, 16));
          if (s !== "." && kds(s)) t += s;else t += "%" + o;
          n += 2;
          continue;
        }
      }
      if (Aru(e[n])) t += e[n];else t += escape(e[n]);
    }
    return t;
  }
  function Dru(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) {
      if (e[n] === "%" && n + 2 < e.length) {
        let r = e.slice(n + 1, n + 3);
        if (sCr(r)) {
          t += "%" + r.toUpperCase(), n += 2;
          continue;
        }
      }
      t += escape(e[n]);
    }
    return t;
  }
  function Pru(e) {
    let t = [];
    if (e.userinfo !== void 0) t.push(e.userinfo), t.push("@");
    if (e.host !== void 0) {
      let n = unescape(e.host);
      if (!xds(n)) {
        let r = Rds(n);
        if (r.isIPV6 === true) n = `[${r.escapedHost}]`;else n = Lds(n, false);
      }
      t.push(n);
    }
    if (typeof e.port === "number" || typeof e.port === "string") t.push(":"), t.push(String(e.port));
    return t.length ? t.join("") : void 0;
  }
  Dds.exports = {
    nonSimpleDomain: Hru,
    recomposeAuthority: Pru,
    reescapeHostDelimiters: Lds,
    normalizePercentEncoding: Rru,
    normalizePathEncoding: Lru,
    escapePreservingEscapes: Dru,
    removeDotSegments: Cru,
    isIPv4: xds,
    isUUID: Eru,
    normalizeIPv6: Rds,
    stringArrayToHexStripped: iCr
  };
});