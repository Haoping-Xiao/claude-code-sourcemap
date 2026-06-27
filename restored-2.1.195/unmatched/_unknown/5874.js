// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YP
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var YP = E(() => {
  RXo();
  IS = new TextEncoder(), fx = new TextDecoder();
});
var Fmr = e => {
    let t = e;
    if (typeof t === "string") t = IS.encode(t);
    let n = 32768,
      r = [];
    for (let o = 0; o < t.length; o += n) r.push(String.fromCharCode.apply(null, t.subarray(o, o + n)));
    return btoa(r.join(""));
  },
  xS = e => Fmr(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
  DXo = e => {
    let t = atob(e),
      n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
    return n;
  },
  VT = e => {
    let t = e;
    if (t instanceof Uint8Array) t = fx.decode(t);
    t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
    try {
      return DXo(t);
    } catch (n) {
      throw TypeError("The input to be decoded is not correctly encoded.");
    }
  };