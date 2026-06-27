// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aJo
// matched 2.1.88 source: node_modules/@mixmark-io/domino/lib/style_parser.js
// class=partial  jaccard=0.125  score=1  fileCov=0.125
// note: low-confidence suggestion: node_modules/@mixmark-io/domino/lib/style_parser.js; dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module aJo]
RDm = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
var X2c = e => e.toLowerCase().replace(/^application\//, ""),
  LDm = (e, t) => {
    if (typeof e === "string") return t.includes(e);
    if (Array.isArray(e)) return t.some(Set.prototype.has.bind(new Set(e)));
    return false;
  },
  Wvt = (e, t, n = {}) => {
    let {
      typ: r
    } = n;
    if (r && (typeof e.typ !== "string" || X2c(e.typ) !== X2c(r))) throw new iB('unexpected "typ" JWT header value', "typ", "check_failed");
    let o;
    try {
      o = JSON.parse(fx.decode(t));
    } catch (f) {}
    if (!eb(o)) throw new sD("JWT Claims Set must be a top-level JSON object");
    let {
      requiredClaims: s = [],
      issuer: i,
      subject: a,
      audience: l,
      maxTokenAge: c
    } = n;
    if (c !== void 0) s.push("iat");
    if (l !== void 0) s.push("aud");
    if (a !== void 0) s.push("sub");
    if (i !== void 0) s.push("iss");
    for (let f of new Set(s.reverse())) if (!(f in o)) throw new iB(`missing required "${f}" claim`, f, "missing");
    if (i && !(Array.isArray(i) ? i : [i]).includes(o.iss)) throw new iB('unexpected "iss" claim value', "iss", "check_failed");
    if (a && o.sub !== a) throw new iB('unexpected "sub" claim value', "sub", "check_failed");
    if (l && !LDm(o.aud, typeof l === "string" ? [l] : l)) throw new iB('unexpected "aud" claim value', "aud", "check_failed");
    let u;
    switch (typeof n.clockTolerance) {
      case "string":
        u = Gvt(n.clockTolerance);
        break;
      case "number":
        u = n.clockTolerance;
        break;
      case "undefined":
        u = 0;
        break;
      default:
        throw TypeError("Invalid clockTolerance option type");
    }
    let {
        currentDate: d
      } = n,
      p = jvt(d || new Date());
    if ((o.iat !== void 0 || c) && typeof o.iat !== "number") throw new iB('"iat" claim must be a number', "iat", "invalid");
    if (o.nbf !== void 0) {
      if (typeof o.nbf !== "number") throw new iB('"nbf" claim must be a number', "nbf", "invalid");
      if (o.nbf > p + u) throw new iB('"nbf" claim timestamp check failed', "nbf", "check_failed");
    }
    if (o.exp !== void 0) {
      if (typeof o.exp !== "number") throw new iB('"exp" claim must be a number', "exp", "invalid");
      if (o.exp <= p - u) throw new hnn('"exp" claim timestamp check failed', "exp", "check_failed");
    }
    if (c) {
      let f = p - o.iat,
        m = typeof c === "number" ? c : Gvt(c);
      if (f - u > m) throw new hnn('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
      if (f < 0 - u) throw new iB('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
    }
    return o;
  };