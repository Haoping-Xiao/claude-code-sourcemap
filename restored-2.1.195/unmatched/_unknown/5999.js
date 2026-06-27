// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EGc
// matched 2.1.88 source: node_modules/jsonwebtoken/verify.js
// class=new  jaccard=0.0466  score=0.1595  fileCov=0.0617
// note: nearest: node_modules/jsonwebtoken/verify.js (0.0466); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function AGc(e, t, n) {
  if (!B3(e)) throw new jH("Flattened JWS must be an object");
  if (e.protected === void 0 && e.header === void 0) throw new jH('Flattened JWS must have either of the "protected" or "header" members');
  if (e.protected !== void 0 && typeof e.protected !== "string") throw new jH("JWS Protected Header incorrect type");
  if (e.payload === void 0) throw new jH("JWS Payload missing");
  if (typeof e.signature !== "string") throw new jH("JWS Signature missing or incorrect type");
  if (e.header !== void 0 && !B3(e.header)) throw new jH("JWS Unprotected Header incorrect type");
  let r = {};
  if (e.protected) try {
    let h = ege(e.protected);
    r = JSON.parse(oK.decode(h));
  } catch {
    throw new jH("JWS Protected Header is invalid");
  }
  if (!sBe(r, e.header)) throw new jH("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  let o = {
      ...r,
      ...e.header
    },
    s = iBe(jH, new Map([["b64", true]]), n?.crit, r, o),
    i = true;
  if (s.has("b64")) {
    if (i = r.b64, typeof i !== "boolean") throw new jH('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
  }
  let {
    alg: a
  } = o;
  if (typeof a !== "string" || !a) throw new jH('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  let l = n && Qnn("algorithms", n.algorithms);
  if (l && !l.has(a)) throw new Xvt('"alg" (Algorithm) Header Parameter value not allowed');
  if (i) {
    if (typeof e.payload !== "string") throw new jH("JWS Payload must be a string");
  } else if (typeof e.payload !== "string" && !(e.payload instanceof Uint8Array)) throw new jH("JWS Payload must be a string or an Uint8Array instance");
  let c = false;
  if (typeof t === "function") t = await t(r, e), c = true;
  aBe(a, t, "verify");
  let u = iD(e.protected !== void 0 ? aD(e.protected) : new Uint8Array(), aD("."), typeof e.payload === "string" ? i ? aD(e.payload) : rXe.encode(e.payload) : e.payload),
    d = N3(e.signature, "signature", jH),
    p = await rge(t, a);
  if (!(await Y3c(a, p, d, u))) throw new SQo();
  let m;
  if (i) m = N3(e.payload, "payload", jH);else if (typeof e.payload === "string") m = rXe.encode(e.payload);else m = e.payload;
  let g = {
    payload: m
  };
  if (e.protected !== void 0) g.protectedHeader = r;
  if (e.header !== void 0) g.unprotectedHeader = e.header;
  if (c) return {
    ...g,
    key: p
  };
  return g;
}