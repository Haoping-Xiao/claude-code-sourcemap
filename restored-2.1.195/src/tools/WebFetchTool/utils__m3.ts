// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vGc
// matched 2.1.88 source: src/tools/WebFetchTool/utils.ts
// class=modified (alt of src/tools/WebFetchTool/utils.ts)  jaccard=0.0188  score=0.05  fileCov=0.0291
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function ern(e) {
  let t = u$m.exec(e);
  if (!t || (t[4] && t[1])) throw TypeError("Invalid time period format");
  let n = parseFloat(t[2]),
    r = t[3].toLowerCase(),
    o;
  switch (r) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      o = Math.round(n);
      break;
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      o = Math.round(n * CGc);
      break;
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      o = Math.round(n * IGc);
      break;
    case "day":
    case "days":
    case "d":
      o = Math.round(n * MQo);
      break;
    case "week":
    case "weeks":
    case "w":
      o = Math.round(n * l$m);
      break;
    default:
      o = Math.round(n * c$m);
      break;
  }
  if (t[1] === "-" || t[4] === "ago") return -o;
  return o;
}
function sXe(e, t) {
  if (!Number.isFinite(t)) throw TypeError(`Invalid ${e} input`);
  return t;
}
function Fgr(e, t, n = {}) {
  let r;
  try {
    r = JSON.parse(oK.decode(t));
  } catch {}
  if (!B3(r)) throw new oXe("JWT Claims Set must be a top-level JSON object");
  let { typ: o } = n;
  if (o && (typeof e.typ !== "string" || wGc(e.typ) !== wGc(o)))
    throw new H2('unexpected "typ" JWT header value', r, "typ", "check_failed");
  let { requiredClaims: s = [], issuer: i, subject: a, audience: l, maxTokenAge: c } = n,
    u = [...s];
  if (c !== void 0) u.push("iat");
  if (l !== void 0) u.push("aud");
  if (a !== void 0) u.push("sub");
  if (i !== void 0) u.push("iss");
  for (let m of new Set(u.reverse()))
    if (!(m in r)) throw new H2(`missing required "${m}" claim`, r, m, "missing");
  if (i && !(Array.isArray(i) ? i : [i]).includes(r.iss))
    throw new H2('unexpected "iss" claim value', r, "iss", "check_failed");
  if (a && r.sub !== a) throw new H2('unexpected "sub" claim value', r, "sub", "check_failed");
  if (l && !d$m(r.aud, typeof l === "string" ? [l] : l))
    throw new H2('unexpected "aud" claim value', r, "aud", "check_failed");
  let d;
  switch (typeof n.clockTolerance) {
    case "string":
      d = ern(n.clockTolerance);
      break;
    case "number":
      d = n.clockTolerance;
      break;
    case "undefined":
      d = 0;
      break;
    default:
      throw TypeError("Invalid clockTolerance option type");
  }
  let { currentDate: p } = n,
    f = lBe(p || new Date());
  if ((r.iat !== void 0 || c) && typeof r.iat !== "number")
    throw new H2('"iat" claim must be a number', r, "iat", "invalid");
  if (r.nbf !== void 0) {
    if (typeof r.nbf !== "number")
      throw new H2('"nbf" claim must be a number', r, "nbf", "invalid");
    if (r.nbf > f + d) throw new H2('"nbf" claim timestamp check failed', r, "nbf", "check_failed");
  }
  if (r.exp !== void 0) {
    if (typeof r.exp !== "number")
      throw new H2('"exp" claim must be a number', r, "exp", "invalid");
    if (r.exp <= f - d)
      throw new Pgr('"exp" claim timestamp check failed', r, "exp", "check_failed");
  }
  if (c) {
    let m = f - r.iat,
      g = typeof c === "number" ? c : ern(c);
    if (m - d > g)
      throw new Pgr(
        '"iat" claim timestamp check failed (too far in the past)',
        r,
        "iat",
        "check_failed",
      );
    if (m < 0 - d)
      throw new H2(
        '"iat" claim timestamp check failed (it should be in the past)',
        r,
        "iat",
        "check_failed",
      );
  }
  return r;
}
class trn {
  #e;
  constructor(e) {
    if (!B3(e)) throw TypeError("JWT Claims Set MUST be an object");
    this.#e = structuredClone(e);
  }
  data() {
    return rXe.encode(JSON.stringify(this.#e));
  }
  get iss() {
    return this.#e.iss;
  }
  set iss(e) {
    this.#e.iss = e;
  }
  get sub() {
    return this.#e.sub;
  }
  set sub(e) {
    this.#e.sub = e;
  }
  get aud() {
    return this.#e.aud;
  }
  set aud(e) {
    this.#e.aud = e;
  }
  set jti(e) {
    this.#e.jti = e;
  }
  set nbf(e) {
    if (typeof e === "number") this.#e.nbf = sXe("setNotBefore", e);
    else if (e instanceof Date) this.#e.nbf = sXe("setNotBefore", lBe(e));
    else this.#e.nbf = lBe(new Date()) + ern(e);
  }
  set exp(e) {
    if (typeof e === "number") this.#e.exp = sXe("setExpirationTime", e);
    else if (e instanceof Date) this.#e.exp = sXe("setExpirationTime", lBe(e));
    else this.#e.exp = lBe(new Date()) + ern(e);
  }
  set iat(e) {
    if (e === void 0) this.#e.iat = lBe(new Date());
    else if (e instanceof Date) this.#e.iat = sXe("setIssuedAt", lBe(e));
    else if (typeof e === "string") this.#e.iat = sXe("setIssuedAt", lBe(new Date()) + ern(e));
    else this.#e.iat = sXe("setIssuedAt", e);
  }
}
var lBe = (e) => Math.floor(e.getTime() / 1000),
  CGc = 60,
  IGc,
  MQo,
  l$m,
  c$m,
  u$m,
  wGc = (e) => {
    if (e.includes("/")) return e.toLowerCase();
    return `application/${e.toLowerCase()}`;
  },
  d$m = (e, t) => {
    if (typeof e === "string") return t.includes(e);
    if (Array.isArray(e)) return t.some(Set.prototype.has.bind(new Set(e)));
    return false;
  };
