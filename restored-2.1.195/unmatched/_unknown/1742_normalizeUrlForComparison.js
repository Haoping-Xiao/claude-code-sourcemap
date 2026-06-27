// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Krt
// class=new  (no 2.1.88 match)
// note: 4 renamed
// ─────────────────────────────────────────────────────────────────────────
var Krt = E(() => {
  JR();
  C0(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
var u1 = {};
_t(u1, {
  stripLeadingHashOrQuery: () => stripLeadingHashOrQuery,
  normalizeUrlForComparison: () => normalizeUrlForComparison,
  mapToQueryString: () => mapToQueryString,
  getDeserializedResponse: () => getDeserializedResponse
});
function Rgi(e) {
  if (!e) return e;
  let t = e.toLowerCase();
  if (sH.endsWith(t, "?")) t = t.slice(0, -1);else if (sH.endsWith(t, "?/")) t = t.slice(0, -2);
  if (!sH.endsWith(t, "/")) t += "/";
  return t;
}
function stripLeadingHashOrQuery(e) {
  if (e.startsWith("#/")) return e.substring(2);else if (e.startsWith("#") || e.startsWith("?")) return e.substring(1);
  return e;
}
function getDeserializedResponse(e) {
  if (!e || e.indexOf("=") < 0) return null;
  try {
    let t = stripLeadingHashOrQuery(e),
      n = Object.fromEntries(new URLSearchParams(t));
    if (n.code || n.ear_jwe || n.error || n.error_description || n.state) return n;
  } catch (t) {
    throw ts(Mje);
  }
  return null;
}
function mapToQueryString(e, t = !0, n) {
  let r = [];
  return e.forEach((o, s) => {
    if (!t && n && s in n) r.push(`${s}=${o}`);else r.push(`${s}=${encodeURIComponent(o)}`);
  }), r.join("&");
}
function normalizeUrlForComparison(e) {
  if (!e) return e;
  let t = e.split("#")[0];
  try {
    let n = new URL(t),
      r = n.origin + n.pathname + n.search;
    return Rgi(r);
  } catch (n) {
    return Rgi(t);
  }
}