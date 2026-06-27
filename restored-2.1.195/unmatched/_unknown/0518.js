// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I0t
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/awsclient.js
// class=new  jaccard=0.0251  score=0.2903  fileCov=0.0268
// note: nearest: node_modules/google-auth-library/build/src/auth/awsclient.js (0.0251); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module I0t] deps: axios/lib/utils.js, axios/lib/core/AxiosError.js, axios/lib/helpers/toFormData.js
cbu = or.toFlatObject(or, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
zwe = ubu;
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