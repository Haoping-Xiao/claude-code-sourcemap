// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y5r
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var y5r = Q((fkh, Uyi) => {
  var ASd = uot();
  Uyi.exports = function (e, t) {
    t = t || {};
    var n = ASd.decode(e, t);
    if (!n) return null;
    var r = n.payload;
    if (typeof r === "string") try {
      var o = JSON.parse(r);
      if (o !== null && typeof o === "object") r = o;
    } catch (s) {}
    if (t.complete === true) return {
      header: n.header,
      payload: r,
      signature: n.signature
    };
    return r;
  };
});