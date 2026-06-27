// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XWr
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XWr = E(() => {
  Uhi(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
class ZG {
  static base64Encode(e, t) {
    return Buffer.from(e, t).toString(c1.BASE64);
  }
  static base64EncodeUrl(e, t) {
    return ZG.base64Encode(e, t).replace(/=/g, vo.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
  }
  static base64Decode(e) {
    return Buffer.from(e, c1.BASE64).toString("utf8");
  }
  static base64DecodeUrl(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    while (t.length % 4) t += "=";
    return ZG.base64Decode(t);
  }
}