// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hba
// matched 2.1.88 source: node_modules/highlight.js/lib/core.js
// class=new  jaccard=0.019  score=0.0522  fileCov=0.0289
// note: nearest: node_modules/highlight.js/lib/core.js (0.019); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Hba = Q((hjy, Aba) => {
  function Ylo(e) {
    if (e instanceof Map) e.clear = e.delete = e.set = function () {
      throw Error("map is read-only");
    };else if (e instanceof Set) e.add = e.clear = e.delete = function () {
      throw Error("set is read-only");
    };
    return Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function (t) {
      var n = e[t];
      if (typeof n == "object" && !Object.isFrozen(n)) Ylo(n);
    }), e;
  }
  var fba = Ylo,
    zhp = Ylo;
  fba.default = zhp;
  class zlo {
    constructor(e) {
      if (e.data === void 0) e.data = {};
      this.data = e.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function Vut(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function LLe(e, ...t) {
    let n = Object.create(null);
    for (let r in e) n[r] = e[r];
    return t.forEach(function (r) {
      for (let o in r) n[o] = r[o];
    }), n;
  }
  var Khp = "</span>",
    aba = e => !!e.kind;
  class mba {
    constructor(e, t) {
      this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
    }
    addText(e) {
      this.buffer += Vut(e);
    }
    openNode(e) {
      if (!aba(e)) return;
      let t = e.kind;
      if (!e.sublanguage) t = `${this.classPrefix}${t}`;
      this.span(t);
    }
    closeNode(e) {
      if (!aba(e)) return;
      this.buffer += Khp;
    }
    value() {
      return this.buffer;
    }
    span(e) {
      this.buffer += `<span class="${e}">`;
    }
  }
  class Xlo {
    constructor() {
      this.rootNode = {
        children: []
      }, this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(e) {
      this.top.children.push(e);
    }
    openNode(e) {
      let t = {
        kind: e,
        children: []
      };
      this.add(t), this.stack.push(t);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
      return;
    }
    closeAllNodes() {
      while (this.closeNode());
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e) {
      return this.constructor._walk(e, this.rootNode);
    }
    static _walk(e, t) {
      if (typeof t === "string") e.addText(t);else if (t.children) e.openNode(t), t.children.forEach(n => this._walk(e, n)), e.closeNode(t);
      return e;
    }
    static _collapse(e) {
      if (typeof e === "string") return;
      if (!e.children) return;
      if (e.children.every(t => typeof t === "string")) e.children = [e.children.join("")];else e.children.forEach(t => {
        Xlo._collapse(t);
      });
    }
  }
  class gba extends Xlo {
    constructor(e) {
      super();
      this.options = e;
    }
    addKeyword(e, t) {
      if (e === "") return;
      this.openNode(t), this.addText(e), this.closeNode();
    }
    addText(e) {
      if (e === "") return;
      this.add(e);
    }
    addSublanguage(e, t) {
      let n = e.root;
      n.kind = t, n.sublanguage = !0, this.add(n);
    }
    toHTML() {
      return new mba(this, this.options).value();
    }
    finalize() {
      return !0;
    }
  }
  function Yhp(e) {
    return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m");
  }
  function S4t(e) {
    if (!e) return null;
    if (typeof e === "string") return e;
    return e.source;
  }
  function Xhp(...e) {
    return e.map(n => S4t(n)).join("");
  }
  function Jhp(...e) {
    return "(" + e.map(n => S4t(n)).join("|") + ")";
  }
  function Qhp(e) {
    return new RegExp(e.toString() + "|").exec("").length - 1;
  }
  function Zhp(e, t) {
    let n = e && e.exec(t);
    return n && n.index === 0;
  }
  var eyp = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function typ(e, t = "|") {
    let n = 0;
    return e.map(r => {
      n += 1;
      let o = n,
        s = S4t(r),
        i = "";
      while (s.length > 0) {
        let a = eyp.exec(s);
        if (!a) {
          i += s;
          break;
        }
        if (i += s.substring(0, a.index), s = s.substring(a.index + a[0].length), a[0][0] === "\\" && a[1]) i += "\\" + String(Number(a[1]) + o);else if (i += a[0], a[0] === "(") n++;
      }
      return i;
    }).map(r => `(${r})`).join(t);
  }
  var nyp = /\b\B/,
    hba = "[a-zA-Z]\\w*",
    Jlo = "[a-zA-Z_]\\w*",
    Qlo = "\\b\\d+(\\.\\d+)?",
    yba = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    _ba = "\\b(0b[01]+)",
    ryp = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    oyp = (e = {}) => {
      let t = /^#![ ]*\//;
      if (e.binary) e.begin = Xhp(t, /.*\b/, e.binary, /\b.*/);
      return LLe({
        className: "meta",
        begin: t,
        end: /$/,
        relevance: 0,
        "on:begin": (n, r) => {
          if (n.index !== 0) r.ignoreMatch();
        }
      }, e);
    },
    E4t = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    },
    syp = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [E4t]
    },
    iyp = {
      className: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [E4t]
    },
    bba = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    dBn = function (e, t, n = {}) {
      let r = LLe({
        className: "comment",
        begin: e,
        end: t,
        contains: []
      }, n);
      return r.contains.push(bba), r.contains.push({
        className: "doctag",
        begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
        relevance: 0
      }), r;
    },
    ayp = dBn("//", "$"),
    lyp = dBn("/\\*", "\\*/"),
    cyp = dBn("#", "$"),
    uyp = {
      className: "number",
      begin: Qlo,
      relevance: 0
    },
    dyp = {
      className: "number",
      begin: yba,
      relevance: 0
    },
    pyp = {
      className: "number",
      begin: _ba,
      relevance: 0
    },
    fyp = {
      className: "number",
      begin: Qlo + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    myp = {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        className: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [E4t, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [E4t]
        }]
      }]
    },
    gyp = {
      className: "title",
      begin: hba,
      relevance: 0
    },
    hyp = {
      className: "title",
      begin: Jlo,
      relevance: 0
    },
    yyp = {
      begin: "\\.\\s*" + Jlo,
      relevance: 0
    },
    _yp = function (e) {
      return Object.assign(e, {
        "on:begin": (t, n) => {
          n.data._beginMatch = t[1];
        },
        "on:end": (t, n) => {
          if (n.data._beginMatch !== t[1]) n.ignoreMatch();
        }
      });
    },
    uBn = Object.freeze({
      __proto__: null,
      MATCH_NOTHING_RE: nyp,
      IDENT_RE: hba,
      UNDERSCORE_IDENT_RE: Jlo,
      NUMBER_RE: Qlo,
      C_NUMBER_RE: yba,
      BINARY_NUMBER_RE: _ba,
      RE_STARTERS_RE: ryp,
      SHEBANG: oyp,
      BACKSLASH_ESCAPE: E4t,
      APOS_STRING_MODE: syp,
      QUOTE_STRING_MODE: iyp,
      PHRASAL_WORDS_MODE: bba,
      COMMENT: dBn,
      C_LINE_COMMENT_MODE: ayp,
      C_BLOCK_COMMENT_MODE: lyp,
      HASH_COMMENT_MODE: cyp,
      NUMBER_MODE: uyp,
      C_NUMBER_MODE: dyp,
      BINARY_NUMBER_MODE: pyp,
      CSS_NUMBER_MODE: fyp,
      REGEXP_MODE: myp,
      TITLE_MODE: gyp,
      UNDERSCORE_TITLE_MODE: hyp,
      METHOD_GUARD: yyp,
      END_SAME_AS_BEGIN: _yp
    });
  function byp(e, t) {
    if (e.input[e.index - 1] === ".") t.ignoreMatch();
  }
  function Syp(e, t) {
    if (!t) return;
    if (!e.beginKeywords) return;
    if (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = byp, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0) e.relevance = 0;
  }
  function Eyp(e, t) {
    if (!Array.isArray(e.illegal)) return;
    e.illegal = Jhp(...e.illegal);
  }
  function Ayp(e, t) {
    if (!e.match) return;
    if (e.begin || e.end) throw Error("begin & end are not supported with match");
    e.begin = e.match, delete e.match;
  }
  function Hyp(e, t) {
    if (e.relevance === void 0) e.relevance = 1;
  }
  var Typ = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
    vyp = "keyword";
  function Sba(e, t, n = vyp) {
    let r = {};
    if (typeof e === "string") o(n, e.split(" "));else if (Array.isArray(e)) o(n, e);else Object.keys(e).forEach(function (s) {
      Object.assign(r, Sba(e[s], t, s));
    });
    return r;
    function o(s, i) {
      if (t) i = i.map(a => a.toLowerCase());
      i.forEach(function (a) {
        let l = a.split("|");
        r[l[0]] = [s, wyp(l[0], l[1])];
      });
    }
  }
  function wyp(e, t) {
    if (t) return Number(t);
    return Cyp(e) ? 0 : 1;
  }
  function Cyp(e) {
    return Typ.includes(e.toLowerCase());
  }
  function Iyp(e, {
    plugins: t
  }) {
    function n(a, l) {
      return new RegExp(S4t(a), "m" + (e.case_insensitive ? "i" : "") + (l ? "g" : ""));
    }
    class r {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      addRule(a, l) {
        l.position = this.position++, this.matchIndexes[this.matchAt] = l, this.regexes.push([l, a]), this.matchAt += Qhp(a) + 1;
      }
      compile() {
        if (this.regexes.length === 0) this.exec = () => null;
        let a = this.regexes.map(l => l[1]);
        this.matcherRe = n(typ(a), !0), this.lastIndex = 0;
      }
      exec(a) {
        this.matcherRe.lastIndex = this.lastIndex;
        let l = this.matcherRe.exec(a);
        if (!l) return null;
        let c = l.findIndex((d, p) => p > 0 && d !== void 0),
          u = this.matchIndexes[c];
        return l.splice(0, c), Object.assign(l, u);
      }
    }
    class o {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      getMatcher(a) {
        if (this.multiRegexes[a]) return this.multiRegexes[a];
        let l = new r();
        return this.rules.slice(a).forEach(([c, u]) => l.addRule(c, u)), l.compile(), this.multiRegexes[a] = l, l;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(a, l) {
        if (this.rules.push([a, l]), l.type === "begin") this.count++;
      }
      exec(a) {
        let l = this.getMatcher(this.regexIndex);
        l.lastIndex = this.lastIndex;
        let c = l.exec(a);
        if (this.resumingScanAtSamePosition()) if (c && c.index === this.lastIndex) ;else {
          let u = this.getMatcher(0);
          u.lastIndex = this.lastIndex + 1, c = u.exec(a);
        }
        if (c) {
          if (this.regexIndex += c.position + 1, this.regexIndex === this.count) this.considerAll();
        }
        return c;
      }
    }
    function s(a) {
      let l = new o();
      if (a.contains.forEach(c => l.addRule(c.begin, {
        rule: c,
        type: "begin"
      })), a.terminatorEnd) l.addRule(a.terminatorEnd, {
        type: "end"
      });
      if (a.illegal) l.addRule(a.illegal, {
        type: "illegal"
      });
      return l;
    }
    function i(a, l) {
      let c = a;
      if (a.isCompiled) return c;
      [Ayp].forEach(d => d(a, l)), e.compilerExtensions.forEach(d => d(a, l)), a.__beforeBegin = null, [Syp, Eyp, Hyp].forEach(d => d(a, l)), a.isCompiled = !0;
      let u = null;
      if (typeof a.keywords === "object") u = a.keywords.$pattern, delete a.keywords.$pattern;
      if (a.keywords) a.keywords = Sba(a.keywords, e.case_insensitive);
      if (a.lexemes && u) throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
      if (u = u || a.lexemes || /\w+/, c.keywordPatternRe = n(u, !0), l) {
        if (!a.begin) a.begin = /\B|\b/;
        if (c.beginRe = n(a.begin), a.endSameAsBegin) a.end = a.begin;
        if (!a.end && !a.endsWithParent) a.end = /\B|\b/;
        if (a.end) c.endRe = n(a.end);
        if (c.terminatorEnd = S4t(a.end) || "", a.endsWithParent && l.terminatorEnd) c.terminatorEnd += (a.end ? "|" : "") + l.terminatorEnd;
      }
      if (a.illegal) c.illegalRe = n(a.illegal);
      if (!a.contains) a.contains = [];
      if (a.contains = [].concat(...a.contains.map(function (d) {
        return xyp(d === "self" ? a : d);
      })), a.contains.forEach(function (d) {
        i(d, c);
      }), a.starts) i(a.starts, l);
      return c.matcher = s(c), c;
    }
    if (!e.compilerExtensions) e.compilerExtensions = [];
    if (e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = LLe(e.classNameAliases || {}), i(e);
  }
  function Eba(e) {
    if (!e) return !1;
    return e.endsWithParent || Eba(e.starts);
  }
  function xyp(e) {
    if (e.variants && !e.cachedVariants) e.cachedVariants = e.variants.map(function (t) {
      return LLe(e, {
        variants: null
      }, t);
    });
    if (e.cachedVariants) return e.cachedVariants;
    if (Eba(e)) return LLe(e, {
      starts: e.starts ? LLe(e.starts) : null
    });
    if (Object.isFrozen(e)) return LLe(e);
    return e;
  }
  var kyp = "10.7.3";
  function Ryp(e) {
    return Boolean(e || e === "");
  }
  function Lyp(e) {
    let t = {
      props: ["language", "code", "autodetect"],
      data: function () {
        return {
          detectedLanguage: "",
          unknownLanguage: !1
        };
      },
      computed: {
        className() {
          if (this.unknownLanguage) return "";
          return "hljs " + this.detectedLanguage;
        },
        highlighted() {
          if (!this.autoDetect && !e.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, Vut(this.code);
          let r = {};
          if (this.autoDetect) r = e.highlightAuto(this.code), this.detectedLanguage = r.language;else r = e.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language;
          return r.value;
        },
        autoDetect() {
          return !this.language || Ryp(this.autodetect);
        },
        ignoreIllegals() {
          return !0;
        }
      },
      render(r) {
        return r("pre", {}, [r("code", {
          class: this.className,
          domProps: {
            innerHTML: this.highlighted
          }
        })]);
      }
    };
    return {
      Component: t,
      VuePlugin: {
        install(r) {
          r.component("highlightjs", t);
        }
      }
    };
  }
  var Dyp = {
    "after:highlightElement": ({
      el: e,
      result: t,
      text: n
    }) => {
      let r = lba(e);
      if (!r.length) return;
      let o = document.createElement("div");
      o.innerHTML = t.value, t.value = Pyp(r, lba(o), n);
    }
  };
  function Klo(e) {
    return e.nodeName.toLowerCase();
  }
  function lba(e) {
    let t = [];
    return function n(r, o) {
      for (let s = r.firstChild; s; s = s.nextSibling) if (s.nodeType === 3) o += s.nodeValue.length;else if (s.nodeType === 1) {
        if (t.push({
          event: "start",
          offset: o,
          node: s
        }), o = n(s, o), !Klo(s).match(/br|hr|img|input/)) t.push({
          event: "stop",
          offset: o,
          node: s
        });
      }
      return o;
    }(e, 0), t;
  }
  function Pyp(e, t, n) {
    let r = 0,
      o = "",
      s = [];
    function i() {
      if (!e.length || !t.length) return e.length ? e : t;
      if (e[0].offset !== t[0].offset) return e[0].offset < t[0].offset ? e : t;
      return t[0].event === "start" ? e : t;
    }
    function a(u) {
      function d(p) {
        return " " + p.nodeName + '="' + Vut(p.value) + '"';
      }
      o += "<" + Klo(u) + [].map.call(u.attributes, d).join("") + ">";
    }
    function l(u) {
      o += "</" + Klo(u) + ">";
    }
    function c(u) {
      (u.event === "start" ? a : l)(u.node);
    }
    while (e.length || t.length) {
      let u = i();
      if (o += Vut(n.substring(r, u[0].offset)), r = u[0].offset, u === e) {
        s.reverse().forEach(l);
        do c(u.splice(0, 1)[0]), u = i(); while (u === e && u.length && u[0].offset === r);
        s.reverse().forEach(a);
      } else {
        if (u[0].event === "start") s.push(u[0].node);else s.pop();
        c(u.splice(0, 1)[0]);
      }
    }
    return o + Vut(n.substr(r));
  }
  var cba = {},
    qlo = e => {
      console.error(e);
    },
    uba = (e, ...t) => {
      console.log(`WARN: ${e}`, ...t);
    },
    KX = (e, t) => {
      if (cba[`${e}/${t}`]) return;
      console.log(`Deprecated as of ${e}. ${t}`), cba[`${e}/${t}`] = !0;
    },
    Vlo = Vut,
    dba = LLe,
    pba = Symbol("nomatch"),
    Myp = function (e) {
      let t = Object.create(null),
        n = Object.create(null),
        r = [],
        o = !0,
        s = /(^(<[^>]+>|\t|)+|\n)/gm,
        i = "Could not find the language '{}', did you forget to load/include a language module?",
        a = {
          disableAutodetect: !0,
          name: "Plain text",
          contains: []
        },
        l = {
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          tabReplace: null,
          useBR: !1,
          languages: null,
          __emitter: gba
        };
      function c(z) {
        return l.noHighlightRe.test(z);
      }
      function u(z) {
        let K = z.className + " ";
        K += z.parentNode ? z.parentNode.className : "";
        let Z = l.languageDetectRe.exec(K);
        if (Z) {
          let J = M(Z[1]);
          if (!J) uba(i.replace("{}", Z[1])), uba("Falling back to no-highlight mode for this block.", z);
          return J ? Z[1] : "no-highlight";
        }
        return K.split(/\s+/).find(J => c(J) || M(J));
      }
      function d(z, K, Z, J) {
        let ne = "",
          oe = "";
        if (typeof K === "object") ne = z, Z = K.ignoreIllegals, oe = K.language, J = void 0;else KX("10.7.0", "highlight(lang, code, ...args) has been deprecated."), KX("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), oe = z, ne = K;
        let re = {
          code: ne,
          language: oe
        };
        W("before:highlight", re);
        let ee = re.result ? re.result : p(re.language, re.code, Z, J);
        return ee.code = re.code, W("after:highlight", ee), ee;
      }
      function p(z, K, Z, J) {
        function ne(Me, Ue) {
          let tt = ie.case_insensitive ? Ue[0].toLowerCase() : Ue[0];
          return Object.prototype.hasOwnProperty.call(Me.keywords, tt) && Me.keywords[tt];
        }
        function oe() {
          if (!ye.keywords) {
            we.addText(Ce);
            return;
          }
          let Me = 0;
          ye.keywordPatternRe.lastIndex = 0;
          let Ue = ye.keywordPatternRe.exec(Ce),
            tt = "";
          while (Ue) {
            tt += Ce.substring(Me, Ue.index);
            let bt = ne(ye, Ue);
            if (bt) {
              let [Ke, Et] = bt;
              if (we.addText(tt), tt = "", Ie += Et, Ke.startsWith("_")) tt += Ue[0];else {
                let ct = ie.classNameAliases[Ke] || Ke;
                we.addKeyword(Ue[0], ct);
              }
            } else tt += Ue[0];
            Me = ye.keywordPatternRe.lastIndex, Ue = ye.keywordPatternRe.exec(Ce);
          }
          tt += Ce.substr(Me), we.addText(tt);
        }
        function re() {
          if (Ce === "") return;
          let Me = null;
          if (typeof ye.subLanguage === "string") {
            if (!t[ye.subLanguage]) {
              we.addText(Ce);
              return;
            }
            Me = p(ye.subLanguage, Ce, !0, ue[ye.subLanguage]), ue[ye.subLanguage] = Me.top;
          } else Me = m(Ce, ye.subLanguage.length ? ye.subLanguage : null);
          if (ye.relevance > 0) Ie += Me.relevance;
          we.addSublanguage(Me.emitter, Me.language);
        }
        function ee() {
          if (ye.subLanguage != null) re();else oe();
          Ce = "";
        }
        function ce(Me) {
          if (Me.className) we.openNode(ie.classNameAliases[Me.className] || Me.className);
          return ye = Object.create(Me, {
            parent: {
              value: ye
            }
          }), ye;
        }
        function ae(Me, Ue, tt) {
          let bt = Zhp(Me.endRe, tt);
          if (bt) {
            if (Me["on:end"]) {
              let Ke = new zlo(Me);
              if (Me["on:end"](Ue, Ke), Ke.isMatchIgnored) bt = !1;
            }
            if (bt) {
              while (Me.endsParent && Me.parent) Me = Me.parent;
              return Me;
            }
          }
          if (Me.endsWithParent) return ae(Me.parent, Ue, tt);
        }
        function de(Me) {
          if (ye.matcher.regexIndex === 0) return Ce += Me[0], 1;else return Be = !0, 0;
        }
        function Ee(Me) {
          let Ue = Me[0],
            tt = Me.rule,
            bt = new zlo(tt),
            Ke = [tt.__beforeBegin, tt["on:begin"]];
          for (let Et of Ke) {
            if (!Et) continue;
            if (Et(Me, bt), bt.isMatchIgnored) return de(Ue);
          }
          if (tt && tt.endSameAsBegin) tt.endRe = Yhp(Ue);
          if (tt.skip) Ce += Ue;else {
            if (tt.excludeBegin) Ce += Ue;
            if (ee(), !tt.returnBegin && !tt.excludeBegin) Ce = Ue;
          }
          return ce(tt), tt.returnBegin ? 0 : Ue.length;
        }
        function me(Me) {
          let Ue = Me[0],
            tt = K.substr(Me.index),
            bt = ae(ye, Me, tt);
          if (!bt) return pba;
          let Ke = ye;
          if (Ke.skip) Ce += Ue;else {
            if (!(Ke.returnEnd || Ke.excludeEnd)) Ce += Ue;
            if (ee(), Ke.excludeEnd) Ce = Ue;
          }
          do {
            if (ye.className) we.closeNode();
            if (!ye.skip && !ye.subLanguage) Ie += ye.relevance;
            ye = ye.parent;
          } while (ye !== bt.parent);
          if (bt.starts) {
            if (bt.endSameAsBegin) bt.starts.endRe = bt.endRe;
            ce(bt.starts);
          }
          return Ke.returnEnd ? 0 : Ue.length;
        }
        function pe() {
          let Me = [];
          for (let Ue = ye; Ue !== ie; Ue = Ue.parent) if (Ue.className) Me.unshift(Ue.className);
          Me.forEach(Ue => we.openNode(Ue));
        }
        let ge = {};
        function he(Me, Ue) {
          let tt = Ue && Ue[0];
          if (Ce += Me, tt == null) return ee(), 0;
          if (ge.type === "begin" && Ue.type === "end" && ge.index === Ue.index && tt === "") {
            if (Ce += K.slice(Ue.index, Ue.index + 1), !o) {
              let bt = Error("0 width match regex");
              throw bt.languageName = z, bt.badRule = ge.rule, bt;
            }
            return 1;
          }
          if (ge = Ue, Ue.type === "begin") return Ee(Ue);else if (Ue.type === "illegal" && !Z) {
            let bt = Error('Illegal lexeme "' + tt + '" for mode "' + (ye.className || "<unnamed>") + '"');
            throw bt.mode = ye, bt;
          } else if (Ue.type === "end") {
            let bt = me(Ue);
            if (bt !== pba) return bt;
          }
          if (Ue.type === "illegal" && tt === "") return 1;
          if (Ze > 1e5 && Ze > Ue.index * 3) throw Error("potential infinite loop, way more iterations than matches");
          return Ce += tt, tt.length;
        }
        let ie = M(z);
        if (!ie) throw qlo(i.replace("{}", z)), Error('Unknown language: "' + z + '"');
        let le = Iyp(ie, {
            plugins: r
          }),
          He = "",
          ye = J || le,
          ue = {},
          we = new l.__emitter(l);
        pe();
        let Ce = "",
          Ie = 0,
          Ve = 0,
          Ze = 0,
          Be = !1;
        try {
          ye.matcher.considerAll();
          for (;;) {
            if (Ze++, Be) Be = !1;else ye.matcher.considerAll();
            ye.matcher.lastIndex = Ve;
            let Me = ye.matcher.exec(K);
            if (!Me) break;
            let Ue = K.substring(Ve, Me.index),
              tt = he(Ue, Me);
            Ve = Me.index + tt;
          }
          return he(K.substr(Ve)), we.closeAllNodes(), we.finalize(), He = we.toHTML(), {
            relevance: Math.floor(Ie),
            value: He,
            language: z,
            illegal: !1,
            emitter: we,
            top: ye
          };
        } catch (Me) {
          if (Me.message && Me.message.includes("Illegal")) return {
            illegal: !0,
            illegalBy: {
              msg: Me.message,
              context: K.slice(Ve - 100, Ve + 100),
              mode: Me.mode
            },
            sofar: He,
            relevance: 0,
            value: Vlo(K),
            emitter: we
          };else if (o) return {
            illegal: !1,
            relevance: 0,
            value: Vlo(K),
            emitter: we,
            language: z,
            top: ye,
            errorRaised: Me
          };else throw Me;
        }
      }
      function f(z) {
        let K = {
          relevance: 0,
          emitter: new l.__emitter(l),
          value: Vlo(z),
          illegal: !1,
          top: a
        };
        return K.emitter.addText(z), K;
      }
      function m(z, K) {
        K = K || l.languages || Object.keys(t);
        let Z = f(z),
          J = K.filter(M).filter(B).map(ce => p(ce, z, !1));
        J.unshift(Z);
        let ne = J.sort((ce, ae) => {
            if (ce.relevance !== ae.relevance) return ae.relevance - ce.relevance;
            if (ce.language && ae.language) {
              if (M(ce.language).supersetOf === ae.language) return 1;else if (M(ae.language).supersetOf === ce.language) return -1;
            }
            return 0;
          }),
          [oe, re] = ne,
          ee = oe;
        return ee.second_best = re, ee;
      }
      function g(z) {
        if (!(l.tabReplace || l.useBR)) return z;
        return z.replace(s, K => {
          if (K === `
`) return l.useBR ? "<br>" : K;else if (l.tabReplace) return K.replace(/\t/g, l.tabReplace);
          return K;
        });
      }
      function h(z, K, Z) {
        let J = K ? n[K] : Z;
        if (z.classList.add("hljs"), J) z.classList.add(J);
      }
      let y = {
          "before:highlightElement": ({
            el: z
          }) => {
            if (l.useBR) z.innerHTML = z.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, `
`);
          },
          "after:highlightElement": ({
            result: z
          }) => {
            if (l.useBR) z.value = z.value.replace(/\n/g, "<br>");
          }
        },
        b = /^(<[^>]+>|\t)+/gm,
        _ = {
          "after:highlightElement": ({
            result: z
          }) => {
            if (l.tabReplace) z.value = z.value.replace(b, K => K.replace(/\t/g, l.tabReplace));
          }
        };
      function S(z) {
        let K = null,
          Z = u(z);
        if (c(Z)) return;
        W("before:highlightElement", {
          el: z,
          language: Z
        }), K = z;
        let J = K.textContent,
          ne = Z ? d(J, {
            language: Z,
            ignoreIllegals: !0
          }) : m(J);
        if (W("after:highlightElement", {
          el: z,
          result: ne,
          text: J
        }), z.innerHTML = ne.value, h(z, Z, ne.language), z.result = {
          language: ne.language,
          re: ne.relevance,
          relavance: ne.relevance
        }, ne.second_best) z.second_best = {
          language: ne.second_best.language,
          re: ne.second_best.relevance,
          relavance: ne.second_best.relevance
        };
      }
      function A(z) {
        if (z.useBR) KX("10.3.0", "'useBR' will be removed entirely in v11.0"), KX("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
        l = dba(l, z);
      }
      let v = () => {
        if (v.called) return;
        v.called = !0, KX("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead."), document.querySelectorAll("pre code").forEach(S);
      };
      function C() {
        KX("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), x = !0;
      }
      let x = !1;
      function I() {
        if (document.readyState === "loading") {
          x = !0;
          return;
        }
        document.querySelectorAll("pre code").forEach(S);
      }
      function k() {
        if (x) I();
      }
      if (typeof window < "u" && window.addEventListener) window.addEventListener("DOMContentLoaded", k, !1);
      function D(z, K) {
        let Z = null;
        try {
          Z = K(e);
        } catch (J) {
          if (qlo("Language definition for '{}' could not be registered.".replace("{}", z)), !o) throw J;else qlo(J);
          Z = a;
        }
        if (!Z.name) Z.name = z;
        if (t[z] = Z, Z.rawDefinition = K.bind(null, e), Z.aliases) N(Z.aliases, {
          languageName: z
        });
      }
      function P(z) {
        delete t[z];
        for (let K of Object.keys(n)) if (n[K] === z) delete n[K];
      }
      function O() {
        return Object.keys(t);
      }
      function L(z) {
        KX("10.4.0", "requireLanguage will be removed entirely in v11."), KX("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
        let K = M(z);
        if (K) return K;
        throw Error("The '{}' language is required, but not loaded.".replace("{}", z));
      }
      function M(z) {
        return z = (z || "").toLowerCase(), t[z] || t[n[z]];
      }
      function N(z, {
        languageName: K
      }) {
        if (typeof z === "string") z = [z];
        z.forEach(Z => {
          n[Z.toLowerCase()] = K;
        });
      }
      function B(z) {
        let K = M(z);
        return K && !K.disableAutodetect;
      }
      function $(z) {
        if (z["before:highlightBlock"] && !z["before:highlightElement"]) z["before:highlightElement"] = K => {
          z["before:highlightBlock"](Object.assign({
            block: K.el
          }, K));
        };
        if (z["after:highlightBlock"] && !z["after:highlightElement"]) z["after:highlightElement"] = K => {
          z["after:highlightBlock"](Object.assign({
            block: K.el
          }, K));
        };
      }
      function q(z) {
        $(z), r.push(z);
      }
      function W(z, K) {
        let Z = z;
        r.forEach(function (J) {
          if (J[Z]) J[Z](K);
        });
      }
      function V(z) {
        return KX("10.2.0", "fixMarkup will be removed entirely in v11.0"), KX("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), g(z);
      }
      function Y(z) {
        return KX("10.7.0", "highlightBlock will be removed entirely in v12.0"), KX("10.7.0", "Please use highlightElement now."), S(z);
      }
      Object.assign(e, {
        highlight: d,
        highlightAuto: m,
        highlightAll: I,
        fixMarkup: V,
        highlightElement: S,
        highlightBlock: Y,
        configure: A,
        initHighlighting: v,
        initHighlightingOnLoad: C,
        registerLanguage: D,
        unregisterLanguage: P,
        listLanguages: O,
        getLanguage: M,
        registerAliases: N,
        requireLanguage: L,
        autoDetection: B,
        inherit: dba,
        addPlugin: q,
        vuePlugin: Lyp(e).VuePlugin
      }), e.debugMode = function () {
        o = !1;
      }, e.safeMode = function () {
        o = !0;
      }, e.versionString = kyp;
      for (let z in uBn) if (typeof uBn[z] === "object") fba(uBn[z]);
      return Object.assign(e, uBn), e.addPlugin(y), e.addPlugin(Dyp), e.addPlugin(_), e;
    },
    $yp = Myp({});
  Aba.exports = $yp;
});
function zut() {
  if (Zlo) return Zlo;
  let e = Hba(),
    t = "default" in e && e.default ? e.default : e;
  return _da(t), Zlo = t, t;
}
function Oyp(e) {
  return e.default ?? e;
}
function I4(e) {
  let t = zut(),
    n = e.toLowerCase(),
    r = Object.prototype.hasOwnProperty.call(Glo, n) ? n : Object.prototype.hasOwnProperty.call(Wlo, n) ? Wlo[n] : null;
  if (r !== null) {
    if (vba.has(r)) return null;
    if (!Tba.has(r)) {
      let o = Glo[r];
      if (typeof o !== "function") return null;
      try {
        t.registerLanguage(r, Oyp(o()));
      } catch (s) {
        return vba.add(r), ke(s), null;
      }
      Tba.add(r);
      for (let s of sba[r] ?? []) I4(s);
    }
    return r;
  }
  return t.getLanguage(n) ? n : null;
}
var Zlo = null,
  Tba,
  vba;