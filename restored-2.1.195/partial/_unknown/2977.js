// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kma
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/ini.js
// class=partial  jaccard=0.1967  score=0.2517  fileCov=0.4739
// note: low-confidence suggestion: node_modules/highlight.js/lib/languages/ini.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module kma] (exports=fFy, module=xma)
var fFy = {};
var xma = {
  exports: fFy
};
function Cma(e) {
  if (!e) return null;
  if (typeof e === "string") return e;
  return e.source;
}
function xfp(e) {
  return Ima("(?=", e, ")");
}
function Ima(...e) {
  return e.map(n => Cma(n)).join("");
}
function kfp(...e) {
  return "(" + e.map(n => Cma(n)).join("|") + ")";
}
function Rfp(e) {
  let t = {
      className: "number",
      relevance: 0,
      variants: [{
        begin: /([+-]+)?[\d]+_[\d_]+/
      }, {
        begin: e.NUMBER_RE
      }]
    },
    n = e.COMMENT();
  n.variants = [{
    begin: /;/,
    end: /$/
  }, {
    begin: /#/,
    end: /$/
  }];
  let r = {
      className: "variable",
      variants: [{
        begin: /\$[\w\d"][\w\d_]*/
      }, {
        begin: /\$\{(.*?)\}/
      }]
    },
    o = {
      className: "literal",
      begin: /\bon|off|true|false|yes|no\b/
    },
    s = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [{
        begin: "'''",
        end: "'''",
        relevance: 10
      }, {
        begin: '"""',
        end: '"""',
        relevance: 10
      }, {
        begin: '"',
        end: '"'
      }, {
        begin: "'",
        end: "'"
      }]
    },
    i = {
      begin: /\[/,
      end: /\]/,
      contains: [n, o, r, s, t, "self"],
      relevance: 0
    },
    u = kfp(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/),
    d = Ima(u, "(\\s*\\.\\s*", u, ")*", xfp(/\s*=\s*[^#\s]/));
  return {
    name: "TOML, also INI",
    aliases: ["toml"],
    case_insensitive: true,
    illegal: /\S/,
    contains: [n, {
      className: "section",
      begin: /\[+/,
      end: /\]+/
    }, {
      begin: d,
      className: "attr",
      starts: {
        end: /$/,
        contains: [n, i, o, r, s, t]
      }
    }]
  };
}
xma.exports = Rfp;