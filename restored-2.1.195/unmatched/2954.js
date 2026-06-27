// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pfa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Pfa = Q((WUy, Dfa) => {
  function qpp(e) {
    return {
      name: "FIX",
      contains: [{
        begin: /[^\u2401\u0001]+/,
        end: /[\u2401\u0001]/,
        excludeEnd: !0,
        returnBegin: !0,
        returnEnd: !1,
        contains: [{
          begin: /([^\u2401\u0001=]+)/,
          end: /=([^\u2401\u0001=]+)/,
          returnEnd: !0,
          returnBegin: !1,
          className: "attr"
        }, {
          begin: /=/,
          end: /([\u2401\u0001])/,
          excludeEnd: !0,
          excludeBegin: !0,
          className: "string"
        }]
      }],
      case_insensitive: !0
    };
  }
  Dfa.exports = qpp;
});