// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Odn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function Axr(e) {
  if (typeof e !== "string") return false;
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Hxr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function mFe(e, t, n) {
  let r = !Axr(t);
  if (e && (r || n === false)) return Hxr(e, t);
  return t;
}
var Ndn = () => {};
function xbu(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function Eys(e) {
  var t = (typeof e === "string" ? xbu(e) : e) || {},
    n = t.protocol,
    r = t.host,
    o = t.port;
  if (typeof r !== "string" || !r || typeof n !== "string") return "";
  if (n = n.split(":", 1)[0], r = r.replace(/:\d*$/, ""), o = parseInt(o) || Ibu[n] || 0, !kbu(r, o)) return "";
  var s = Txr(n + "_proxy") || Txr("all_proxy");
  if (s && s.indexOf("://") === -1) s = n + "://" + s;
  return s;
}
function kbu(e, t) {
  var n = Txr("no_proxy").toLowerCase();
  if (!n) return true;
  if (n === "*") return false;
  return n.split(/[,\s]/).every(function (r) {
    if (!r) return true;
    var o = r.match(/^(.+):(\d+)$/),
      s = o ? o[1] : r,
      i = o ? parseInt(o[2]) : 0;
    if (i && i !== t) return true;
    if (!/^[.*]/.test(s)) return e !== s;
    if (s.charAt(0) === "*") s = s.slice(1);
    return !e.endsWith(s);
  });
}
function Txr(e) {
  return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}
var Ibu;