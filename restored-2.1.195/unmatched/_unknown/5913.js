// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z2c
// matched 2.1.88 source: node_modules/node-forge/lib/rsa.js
// class=new  jaccard=0.0129  score=0.0698  fileCov=0.0155
// note: nearest: node_modules/node-forge/lib/rsa.js (0.0129); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var z2c = E(() => {
  oJo();
  rB();
  sJo();
  V2c = kDm;
});
async function Fvt(e, t, n) {
  var r;
  if (!eb(e)) throw new wh("Flattened JWS must be an object");
  if (e.protected === void 0 && e.header === void 0) throw new wh('Flattened JWS must have either of the "protected" or "header" members');
  if (e.protected !== void 0 && typeof e.protected !== "string") throw new wh("JWS Protected Header incorrect type");
  if (e.payload === void 0) throw new wh("JWS Payload missing");
  if (typeof e.signature !== "string") throw new wh("JWS Signature missing or incorrect type");
  if (e.header !== void 0 && !eb(e.header)) throw new wh("JWS Unprotected Header incorrect type");
  let o = {};
  if (e.protected) try {
    let h = VT(e.protected);
    o = JSON.parse(fx.decode(h));
  } catch (h) {
    throw new wh("JWS Protected Header is invalid");
  }
  if (!Jme(o, e.header)) throw new wh("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  let s = {
      ...o,
      ...e.header
    },
    i = Zme(wh, new Map([["b64", true]]), n === null || n === void 0 ? void 0 : n.crit, o, s),
    a = true;
  if (i.has("b64")) {
    if (a = o.b64, typeof a !== "boolean") throw new wh('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
  }
  let {
    alg: l
  } = s;
  if (typeof l !== "string" || !l) throw new wh('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  let c = n && vnn("algorithms", n.algorithms);
  if (c && !c.has(l)) throw new z7e('"alg" (Algorithm) Header Parameter not allowed');
  if (a) {
    if (typeof e.payload !== "string") throw new wh("JWS Payload must be a string");
  } else if (typeof e.payload !== "string" && !(e.payload instanceof Uint8Array)) throw new wh("JWS Payload must be a string or an Uint8Array instance");
  let u = false;
  if (typeof t === "function") t = await t(o, e), u = true;
  XNe(l, t, "verify");
  let d = oB(IS.encode((r = e.protected) !== null && r !== void 0 ? r : ""), IS.encode("."), typeof e.payload === "string" ? IS.encode(e.payload) : e.payload),
    p;
  try {
    p = VT(e.signature);
  } catch (h) {
    throw new wh("Failed to base64url decode the signature");
  }
  if (!(await V2c(l, t, p, d))) throw new Pvt();
  let m;
  if (a) try {
    m = VT(e.payload);
  } catch (h) {
    throw new wh("Failed to base64url decode the payload");
  } else if (typeof e.payload === "string") m = IS.encode(e.payload);else m = e.payload;
  let g = {
    payload: m
  };
  if (e.protected !== void 0) g.protectedHeader = o;
  if (e.header !== void 0) g.unprotectedHeader = e.header;
  if (u) return {
    ...g,
    key: t
  };
  return g;
}