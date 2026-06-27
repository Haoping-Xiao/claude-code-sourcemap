// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nya
// matched 2.1.88 source: node_modules/highlight.js/lib/languages/r.js
// class=new  jaccard=0.0579  score=0.1847  fileCov=0.0777
// note: nearest: node_modules/highlight.js/lib/languages/r.js (0.0579); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nya = Q((A2y, tya) => {
  function Sgp(e) {
    if (!e) return null;
    if (typeof e === "string") return e;
    return e.source;
  }
  function Egp(e) {
    return Plo("(?=", e, ")");
  }
  function Plo(...e) {
    return e.map(n => Sgp(n)).join("");
  }
  function Agp(e) {
    let t = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
      n = /[a-zA-Z][a-zA-Z_0-9]*/;
    return {
      name: "R",
      illegal: /->/,
      keywords: {
        $pattern: t,
        keyword: "function if in break next repeat else for while",
        literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
      },
      compilerExtensions: [(r, o) => {
        if (!r.beforeMatch) return;
        if (r.starts) throw Error("beforeMatch cannot be used with starts");
        let s = Object.assign({}, r);
        Object.keys(r).forEach(i => {
          delete r[i];
        }), r.begin = Plo(s.beforeMatch, Egp(s.begin)), r.starts = {
          relevance: 0,
          contains: [Object.assign(s, {
            endsParent: !0
          })]
        }, r.relevance = 0, delete s.beforeMatch;
      }],
      contains: [e.COMMENT(/#'/, /$/, {
        contains: [{
          className: "doctag",
          begin: "@examples",
          starts: {
            contains: [{
              begin: /\n/
            }, {
              begin: /#'\s*(?=@[a-zA-Z]+)/,
              endsParent: !0
            }, {
              begin: /#'/,
              end: /$/,
              excludeBegin: !0
            }]
          }
        }, {
          className: "doctag",
          begin: "@param",
          end: /$/,
          contains: [{
            className: "variable",
            variants: [{
              begin: t
            }, {
              begin: /`(?:\\.|[^`\\])+`/
            }],
            endsParent: !0
          }]
        }, {
          className: "doctag",
          begin: /@[a-zA-Z]+/
        }, {
          className: "meta-keyword",
          begin: /\\[a-zA-Z]+/
        }]
      }), e.HASH_COMMENT_MODE, {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [e.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\(/,
          end: /\)(-*)"/
        }), e.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\{/,
          end: /\}(-*)"/
        }), e.END_SAME_AS_BEGIN({
          begin: /[rR]"(-*)\[/,
          end: /\](-*)"/
        }), e.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\(/,
          end: /\)(-*)'/
        }), e.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\{/,
          end: /\}(-*)'/
        }), e.END_SAME_AS_BEGIN({
          begin: /[rR]'(-*)\[/,
          end: /\](-*)'/
        }), {
          begin: '"',
          end: '"',
          relevance: 0
        }, {
          begin: "'",
          end: "'",
          relevance: 0
        }]
      }, {
        className: "number",
        relevance: 0,
        beforeMatch: /([^a-zA-Z0-9._])/,
        variants: [{
          match: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/
        }, {
          match: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/
        }, {
          match: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/
        }]
      }, {
        begin: "%",
        end: "%"
      }, {
        begin: Plo(n, "\\s+<-\\s+")
      }, {
        begin: "`",
        end: "`",
        contains: [{
          begin: /\\./
        }]
      }]
    };
  }
  tya.exports = Agp;
});