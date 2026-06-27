// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lWc
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/dom.js
// class=new  jaccard=0.0115  score=0.7843  fileCov=0.0116
// note: nearest: node_modules/@xmldom/xmldom/lib/dom.js (0.0115); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lWc = E(() => {
  iWc = require("crypto"), b$m = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
});
function rZo(e) {
  if (e.includes("/")) {
    let [n, r] = mV.parseCIDR(e);
    if (n instanceof mV.IPv6 && n.isIPv4MappedAddress() && r >= 96) return [n.toIPv4Address(), r - 96];
    return [n, r];
  }
  let t = mV.parse(e);
  if (t instanceof mV.IPv6 && t.isIPv4MappedAddress()) return [t.toIPv4Address(), 32];
  return [t, t.kind() === "ipv6" ? 128 : 32];
}
function Zgr(e) {
  return e.map(rZo);
}
function tZo(e) {
  try {
    let t = mV.parse(e);
    if (t instanceof mV.IPv6 && t.isIPv4MappedAddress()) return t.toIPv4Address();
    return t;
  } catch {
    return null;
  }
}
function nZo(e, t) {
  for (let [n, r] of t) {
    if (e instanceof mV.IPv4 && n instanceof mV.IPv4 && e.match(n, r)) return true;
    if (e instanceof mV.IPv6 && n instanceof mV.IPv6 && e.match(n, r)) return true;
  }
  return false;
}
function cWc(e, t, n) {
  if (!e || n.length === 0) return e;
  let r = tZo(e);
  if (!r || !nZo(r, n)) return e;
  if (!t) return e;
  let o = t.split(",").map(s => s.trim()).filter(Boolean);
  for (let s = o.length - 1; s >= 0; s--) {
    let i = tZo(o[s]);
    if (!i) return e;
    if (!nZo(i, n)) return i.toString();
  }
  return e;
}
function oZo(e, t) {
  if (!e || t.length === 0) return false;
  let n = tZo(e);
  return n !== null && nZo(n, t);
}
var mV;