// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rys
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rys = E(() => {
  I0t();
  tys = eys.prototype;
  tys.append = function (t, n) {
    this._pairs.push([t, n]);
  };
  tys.toString = function (t) {
    let n = t ? function (r) {
      return t.call(this, r, Zhs);
    } : Zhs;
    return this._pairs.map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "").join("&");
  };
  nys = eys;
});
function dbu(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function pFe(e, t, n) {
  if (!t) return e;
  let r = n && n.encode || dbu,
    o = or.isFunction(n) ? {
      serialize: n
    } : n,
    s = o && o.serialize,
    i;
  if (s) i = s(t, o);else i = or.isURLSearchParams(t) ? t.toString() : new nys(t, o).toString(r);
  if (i) {
    let a = e.indexOf("#");
    if (a !== -1) e = e.slice(0, a);
    e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}