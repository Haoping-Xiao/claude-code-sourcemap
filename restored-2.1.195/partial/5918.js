// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module agr
// matched 2.1.88 source: node_modules/@typespec/ts-http-runtime/dist/esm/util/typeGuards.js
// class=partial  jaccard=0.2101  score=0.2101  fileCov=1
// note: low-confidence suggestion: node_modules/@typespec/ts-http-runtime/dist/esm/util/typeGuards.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var agr = E(() => {
  wm();
  YP();
  aJo();
});
async function J2c(e, t, n) {
  var r;
  let o = await igr(e, t, n);
  if (((r = o.protectedHeader.crit) === null || r === void 0 ? void 0 : r.includes("b64")) && o.protectedHeader.b64 === !1) throw new sD("JWTs MUST NOT use unencoded payload");
  let i = {
    payload: Wvt(o.protectedHeader, o.payload, n),
    protectedHeader: o.protectedHeader
  };
  if (typeof t === "function") return {
    ...i,
    key: o.key
  };
  return i;
}