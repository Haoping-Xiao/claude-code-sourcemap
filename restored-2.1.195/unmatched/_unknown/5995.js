// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jnn
// matched 2.1.88 source: node_modules/undici/lib/web/fetch/util.js
// class=new  jaccard=0.0245  score=0.1144  fileCov=0.0303
// note: nearest: node_modules/undici/lib/web/fetch/util.js (0.0245); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Qnn(e, t) {
  if (t !== void 0 && (!Array.isArray(t) || t.some(n => typeof n !== "string"))) throw TypeError(`"${e}" option must be an array of strings`);
  if (!t) return;
  return new Set(t);
}
function aBe(e, t, n) {
  switch (e.substring(0, 2)) {
    case "A1":
    case "A2":
    case "di":
    case "HS":
    case "PB":
      i$m(e, t, n);
      break;
    default:
      a$m(e, t, n);
  }
}
var rwt = e => e?.[Symbol.toStringTag],
  LQo = (e, t, n) => {
    if (t.use !== void 0) {
      let r;
      switch (n) {
        case "sign":
        case "verify":
          r = "sig";
          break;
        case "encrypt":
        case "decrypt":
          r = "enc";
          break;
      }
      if (t.use !== r) throw TypeError(`Invalid key for this operation, its "use" must be "${r}" when present`);
    }
    if (t.alg !== void 0 && t.alg !== e) throw TypeError(`Invalid key for this operation, its "alg" must be "${e}" when present`);
    if (Array.isArray(t.key_ops)) {
      let r;
      switch (true) {
        case n === "sign" || n === "verify":
        case e === "dir":
        case e.includes("CBC-HS"):
          r = n;
          break;
        case e.startsWith("PBES2"):
          r = "deriveBits";
          break;
        case /^A\d{3}(?:GCM)?(?:KW)?$/.test(e):
          if (!e.includes("GCM") && e.endsWith("KW")) r = n === "encrypt" ? "wrapKey" : "unwrapKey";else r = n;
          break;
        case n === "encrypt" && e.startsWith("RSA"):
          r = "wrapKey";
          break;
        case n === "decrypt":
          r = e.startsWith("RSA") ? "unwrapKey" : "deriveBits";
          break;
      }
      if (r && t.key_ops?.includes?.(r) === false) throw TypeError(`Invalid key for this operation, its "key_ops" must include "${r}" when present`);
    }
    return true;
  },
  i$m = (e, t, n) => {
    if (t instanceof Uint8Array) return;
    if (Wnn(t)) {
      if (O3c(t) && LQo(e, t, n)) return;
      throw TypeError('JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present');
    }
    if (!EQo(t)) throw TypeError(bQo(e, t, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
    if (t.type !== "secret") throw TypeError(`${rwt(t)} instances for symmetric algorithms must be of type "secret"`);
  },
  a$m = (e, t, n) => {
    if (Wnn(t)) switch (n) {
      case "decrypt":
      case "sign":
        if (M3c(t) && LQo(e, t, n)) return;
        throw TypeError("JSON Web Key for this operation must be a private JWK");
      case "encrypt":
      case "verify":
        if ($3c(t) && LQo(e, t, n)) return;
        throw TypeError("JSON Web Key for this operation must be a public JWK");
    }
    if (!EQo(t)) throw TypeError(bQo(e, t, "CryptoKey", "KeyObject", "JSON Web Key"));
    if (t.type === "secret") throw TypeError(`${rwt(t)} instances for asymmetric algorithms must not be of type "secret"`);
    if (t.type === "public") switch (n) {
      case "sign":
        throw TypeError(`${rwt(t)} instances for asymmetric algorithm signing must be of type "private"`);
      case "decrypt":
        throw TypeError(`${rwt(t)} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (t.type === "private") switch (n) {
      case "verify":
        throw TypeError(`${rwt(t)} instances for asymmetric algorithm verifying must be of type "public"`);
      case "encrypt":
        throw TypeError(`${rwt(t)} instances for asymmetric algorithm encryption must be of type "public"`);
    }
  };
var Znn = () => {};
function mGc(e) {
  if (typeof globalThis[e] === "undefined") throw new nh(`JWE "zip" (Compression Algorithm) Header Parameter requires the ${e} API.`);
}
async function gGc(e) {
  mGc("CompressionStream");
  let t = new CompressionStream("deflate-raw"),
    n = t.writable.getWriter();
  n.write(e).catch(() => {}), n.close().catch(() => {});
  let r = [],
    o = t.readable.getReader();
  for (;;) {
    let {
      value: s,
      done: i
    } = await o.read();
    if (i) break;
    r.push(s);
  }
  return iD(...r);
}
async function hGc(e, t) {
  mGc("DecompressionStream");
  let n = new DecompressionStream("deflate-raw"),
    r = n.writable.getWriter();
  r.write(e).catch(() => {}), r.close().catch(() => {});
  let o = [],
    s = 0,
    i = n.readable.getReader();
  for (;;) {
    let {
      value: a,
      done: l
    } = await i.read();
    if (l) break;
    if (o.push(a), s += a.byteLength, t !== 1 / 0 && s > t) throw new Ac("Decompressed plaintext exceeded the configured limit");
  }
  return iD(...o);
}