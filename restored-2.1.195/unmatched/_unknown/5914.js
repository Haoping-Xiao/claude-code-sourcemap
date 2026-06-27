// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sgr
// matched 2.1.88 source: node_modules/jsonwebtoken/verify.js
// class=new  jaccard=0.0392  score=0.3968  fileCov=0.0416
// note: nearest: node_modules/jsonwebtoken/verify.js (0.0392); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function igr(e, t, n) {
  if (e instanceof Uint8Array) e = fx.decode(e);
  if (typeof e !== "string") throw new wh("Compact JWS must be a string or Uint8Array");
  let {
    0: r,
    1: o,
    2: s,
    length: i
  } = e.split(".");
  if (i !== 3) throw new wh("Invalid Compact JWS");
  let a = await Fvt({
      payload: o,
      protected: r,
      signature: s
    }, t, n),
    l = {
      payload: a.payload,
      protectedHeader: a.protectedHeader
    };
  if (typeof t === "function") return {
    ...l,
    key: a.key
  };
  return l;
}