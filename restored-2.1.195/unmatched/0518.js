// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I0t
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var I0t = E(() => {
  XH();
  KV();
  uxr();
  cbu = or.toFlatObject(or, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  zwe = ubu;
});
function Zhs(e) {
  let t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (r) {
    return t[r];
  });
}
function eys(e, t) {
  this._pairs = [], e && zwe(e, this, t);
}
var tys, nys;