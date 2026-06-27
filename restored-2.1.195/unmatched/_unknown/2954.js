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
        excludeEnd: true,
        returnBegin: true,
        returnEnd: false,
        contains: [{
          begin: /([^\u2401\u0001=]+)/,
          end: /=([^\u2401\u0001=]+)/,
          returnEnd: true,
          returnBegin: false,
          className: "attr"
        }, {
          begin: /=/,
          end: /([\u2401\u0001])/,
          excludeEnd: true,
          excludeBegin: true,
          className: "string"
        }]
      }],
      case_insensitive: true
    };
  }
  Dfa.exports = qpp;
});