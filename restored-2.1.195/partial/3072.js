// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A_a
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/twig.js
// class=partial  jaccard=0.2141  score=0.4855  fileCov=0.277
// note: low-confidence suggestion: node_modules/highlight.js/lib/languages/twig.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var A_a = Q((ejy, E_a) => {
  function Ahp(e) {
    var t = {
        className: "params",
        begin: "\\(",
        end: "\\)"
      },
      n = "attribute block constant cycle date dump include max min parent random range source template_from_string",
      r = {
        beginKeywords: n,
        keywords: {
          name: n
        },
        relevance: 0,
        contains: [t]
      },
      o = {
        begin: /\|[A-Za-z_]+:?/,
        keywords: "abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode",
        contains: [r]
      },
      s = "apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with";
    return s = s + " " + s.split(" ").map(function (i) {
      return "end" + i;
    }).join(" "), {
      name: "Twig",
      aliases: ["craftcms"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [e.COMMENT(/\{#/, /#\}/), {
        className: "template-tag",
        begin: /\{%/,
        end: /%\}/,
        contains: [{
          className: "name",
          begin: /\w+/,
          keywords: s,
          starts: {
            endsWithParent: !0,
            contains: [o, r],
            relevance: 0
          }
        }]
      }, {
        className: "template-variable",
        begin: /\{\{/,
        end: /\}\}/,
        contains: ["self", o, r]
      }]
    };
  }
  E_a.exports = Ahp;
});