// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nrn
// matched 2.1.88 source: node_modules/jsonwebtoken/verify.js
// class=new  jaccard=0.0175  score=0.3585  fileCov=0.018
// note: nearest: node_modules/jsonwebtoken/verify.js (0.0175); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nrn] deps: AR, sK
IGc = CGc * 60, MQo = IGc * 24, l$m = MQo * 7, c$m = MQo * 365.25, u$m = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
async function $Qo(e, t, n) {
  let r = await TGc(e, t, n);
  if (r.protectedHeader.crit?.includes("b64") && r.protectedHeader.b64 === false) throw new oXe("JWTs MUST NOT use unencoded payload");
  let s = {
    payload: Fgr(r.protectedHeader, r.payload, n),
    protectedHeader: r.protectedHeader
  };
  if (typeof t === "function") return {
    ...s,
    key: r.key
  };
  return s;
}