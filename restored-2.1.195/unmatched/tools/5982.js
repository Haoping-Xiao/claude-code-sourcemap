// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oBe
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0223  score=0.235  fileCov=0.024
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0223); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oBe] deps: NZ
D3c = Symbol();
function B3(e) {
  if (!GMm(e) || Object.prototype.toString.call(e) !== "[object Object]") return false;
  if (Object.getPrototypeOf(e) === null) return true;
  let t = e;
  while (Object.getPrototypeOf(t) !== null) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function sBe(...e) {
  let t = e.filter(Boolean);
  if (t.length === 0 || t.length === 1) return true;
  let n;
  for (let r of t) {
    let o = Object.keys(r);
    if (!n || n.size === 0) {
      n = new Set(o);
      continue;
    }
    for (let s of o) {
      if (n.has(s)) return false;
      n.add(s);
    }
  }
  return true;
}
var GMm = e => typeof e === "object" && e !== null,
  Wnn = e => B3(e) && typeof e.kty === "string",
  M3c = e => e.kty !== "oct" && (e.kty === "AKP" && typeof e.priv === "string" || typeof e.d === "string"),
  $3c = e => e.kty !== "oct" && e.d === void 0 && e.priv === void 0,
  O3c = e => e.kty === "oct" && typeof e.k === "string";
function N3c(e, t) {
  if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) throw TypeError(`Invalid key size for alg: ${t}`);
}
function B3c(e, t, n) {
  if (e instanceof Uint8Array) return crypto.subtle.importKey("raw", e, "AES-KW", true, [n]);
  return iK(e, t, n), e;
}
async function qnn(e, t, n) {
  let r = await B3c(t, e, "wrapKey");
  N3c(r, e);
  let o = await crypto.subtle.importKey("raw", n, {
    hash: "SHA-256",
    name: "HMAC"
  }, true, ["sign"]);
  return new Uint8Array(await crypto.subtle.wrapKey("raw", o, r, "AES-KW"));
}
async function Vnn(e, t, n) {
  let r = await B3c(t, e, "unwrapKey");
  N3c(r, e);
  let o = await crypto.subtle.unwrapKey("raw", n, r, "AES-KW", {
    hash: "SHA-256",
    name: "HMAC"
  }, true, ["sign"]);
  return new Uint8Array(await crypto.subtle.exportKey("raw", o));
}
var AQo = () => {};
function HQo(e) {
  return iD(Rgr(e.length), e);
}
async function qMm(e, t, n) {
  let r = t >> 3,
    o = 32,
    s = Math.ceil(r / 32),
    i = new Uint8Array(s * 32);
  for (let a = 1; a <= s; a++) {
    let l = new Uint8Array(4 + e.length + n.length);
    l.set(Rgr(a), 0), l.set(e, 4), l.set(n, 4 + e.length);
    let c = await P3c("sha256", l);
    i.set(c, (a - 1) * 32);
  }
  return i.slice(0, r);
}
async function TQo(e, t, n, r, o = new Uint8Array(), s = new Uint8Array()) {
  iK(e, "ECDH"), iK(t, "ECDH", "deriveBits");
  let i = HQo(aD(n)),
    a = HQo(o),
    l = HQo(s),
    c = Rgr(r),
    u = new Uint8Array(),
    d = iD(i, a, l, c, u),
    p = new Uint8Array(await crypto.subtle.deriveBits({
      name: e.algorithm.name,
      public: e
    }, t, VMm(e)));
  return qMm(p, r, d);
}
function VMm(e) {
  if (e.algorithm.name === "X25519") return 256;
  return Math.ceil(parseInt(e.algorithm.namedCurve.slice(-3), 10) / 8) << 3;
}
function vQo(e) {
  switch (e.algorithm.namedCurve) {
    case "P-256":
    case "P-384":
    case "P-521":
      return true;
    default:
      return e.algorithm.name === "X25519";
  }
}