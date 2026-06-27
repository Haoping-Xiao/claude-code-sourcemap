// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D3e
// matched 2.1.88 source: node_modules/ignore/index.js
// class=partial  jaccard=0.0603  score=1  fileCov=0.0603
// note: low-confidence suggestion: node_modules/ignore/index.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var D3e = Q((VVh, r0n) => {
  function uNi(e) {
    return Array.isArray(e) ? e : [e];
  }
  var H1d = void 0,
    OKr = "",
    lNi = " ",
    $Kr = "\\",
    T1d = /^\s+$/,
    v1d = /(?:[^\\]|^)\\$/,
    w1d = /^\\!/,
    C1d = /^\\#/,
    I1d = /\r?\n/g,
    x1d = /^\.{0,2}\/|^\.{1,2}$/,
    k1d = /\/$/,
    oit = "/",
    dNi = "node-ignore";
  if (typeof Symbol !== "undefined") dNi = Symbol.for("node-ignore");
  var pNi = dNi,
    sit = (e, t, n) => (Object.defineProperty(e, t, {
      value: n
    }), n),
    R1d = /([0-z])-([0-z])/g,
    fNi = () => false,
    L1d = e => e.replace(R1d, (t, n, r) => n.charCodeAt(0) <= r.charCodeAt(0) ? t : OKr),
    D1d = e => {
      let {
        length: t
      } = e;
      return e.slice(0, t - t % 2);
    },
    P1d = [[/^\uFEFF/, () => OKr], [/((?:\\\\)*?)(\\?\s+)$/, (e, t, n) => t + (n.indexOf("\\") === 0 ? lNi : OKr)], [/(\\+?)\s/g, (e, t) => {
      let {
        length: n
      } = t;
      return t.slice(0, n - n % 2) + lNi;
    }], [/[\\$.|*+(){^]/g, e => `\\${e}`], [/(?!\\)\?/g, () => "[^/]"], [/^\//, () => "^"], [/\//g, () => "\\/"], [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"], [/^(?=[^^])/, function () {
      return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
    }], [/\\\/\\\*\\\*(?=\\\/|$)/g, (e, t, n) => t + 6 < n.length ? "(?:\\/[^\\/]+)*" : "\\/.+"], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (e, t, n) => {
      let r = n.replace(/\\\*/g, "[^\\/]*");
      return t + r;
    }], [/\\\\\\(?=[$.|*+(){^])/g, () => $Kr], [/\\\\/g, () => $Kr], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (e, t, n, r, o) => t === $Kr ? `\\[${n}${D1d(r)}${o}` : o === "]" ? r.length % 2 === 0 ? `[${L1d(n)}${r}]` : "[]" : "[]"], [/(?:[^*])$/, e => /\/$/.test(e) ? `${e}$` : `${e}(?=$|\\/$)`]],
    M1d = /(^|\\\/)?\\\*$/,
    DNt = "regex",
    t0n = "checkRegex",
    cNi = "_",
    $1d = {
      [DNt](e, t) {
        return `${t ? `${t}[^/]+` : "[^/]*"}(?=$|\\/$)`;
      },
      [t0n](e, t) {
        return `${t ? `${t}[^/]*` : "[^/]*"}(?=$|\\/$)`;
      }
    },
    O1d = e => P1d.reduce((t, [n, r]) => t.replace(n, r.bind(e)), e),
    n0n = e => typeof e === "string",
    N1d = e => e && n0n(e) && !T1d.test(e) && !v1d.test(e) && e.indexOf("#") !== 0,
    B1d = e => e.split(I1d).filter(Boolean);
  class mNi {
    constructor(e, t, n, r, o, s) {
      this.pattern = e, this.mark = t, this.negative = o, sit(this, "body", n), sit(this, "ignoreCase", r), sit(this, "regexPrefix", s);
    }
    get regex() {
      let e = cNi + DNt;
      if (this[e]) return this[e];
      return this._make(DNt, e);
    }
    get checkRegex() {
      let e = cNi + t0n;
      if (this[e]) return this[e];
      return this._make(t0n, e);
    }
    _make(e, t) {
      let n = this.regexPrefix.replace(M1d, $1d[e]),
        r = this.ignoreCase ? new RegExp(n, "i") : new RegExp(n);
      return sit(this, t, r);
    }
  }
  var U1d = ({
    pattern: e,
    mark: t
  }, n) => {
    let r = false,
      o = e;
    if (o.indexOf("!") === 0) r = true, o = o.substr(1);
    o = o.replace(w1d, "!").replace(C1d, "#");
    let s = O1d(o);
    return new mNi(e, t, o, n, r, s);
  };
  class gNi {
    constructor(e) {
      this._ignoreCase = e, this._rules = [];
    }
    _add(e) {
      if (e && e[pNi]) {
        this._rules = this._rules.concat(e._rules._rules), this._added = true;
        return;
      }
      if (n0n(e)) e = {
        pattern: e
      };
      if (N1d(e.pattern)) {
        let t = U1d(e, this._ignoreCase);
        this._added = true, this._rules.push(t);
      }
    }
    add(e) {
      return this._added = false, uNi(n0n(e) ? B1d(e) : e).forEach(this._add, this), this._added;
    }
    test(e, t, n) {
      let r = false,
        o = false,
        s;
      this._rules.forEach(a => {
        let {
          negative: l
        } = a;
        if (o === l && r !== o || l && !r && !o && !t) return;
        if (!a[n].test(e)) return;
        r = !l, o = l, s = l ? H1d : a;
      });
      let i = {
        ignored: r,
        unignored: o
      };
      if (s) i.rule = s;
      return i;
    }
  }
  var F1d = (e, t) => {
      throw new t(e);
    },
    R_e = (e, t, n) => {
      if (!n0n(e)) return n(`path must be a string, but got \`${t}\``, TypeError);
      if (!e) return n("path must not be empty", TypeError);
      if (R_e.isNotRelative(e)) return n(`path should be a \`path.relative()\`d string, but got "${t}"`, RangeError);
      return true;
    },
    hNi = e => x1d.test(e);
  R_e.isNotRelative = hNi;
  R_e.convert = e => e;
  class yNi {
    constructor({
      ignorecase: e = true,
      ignoreCase: t = e,
      allowRelativePaths: n = false
    } = {}) {
      sit(this, pNi, true), this._rules = new gNi(t), this._strictPathCheck = !n, this._initCache();
    }
    _initCache() {
      this._ignoreCache = Object.create(null), this._testCache = Object.create(null);
    }
    add(e) {
      if (this._rules.add(e)) this._initCache();
      return this;
    }
    addPattern(e) {
      return this.add(e);
    }
    _test(e, t, n, r) {
      let o = e && R_e.convert(e);
      return R_e(o, e, this._strictPathCheck ? F1d : fNi), this._t(o, t, n, r);
    }
    checkIgnore(e) {
      if (!k1d.test(e)) return this.test(e);
      let t = e.split(oit).filter(Boolean);
      if (t.pop(), t.length) {
        let n = this._t(t.join(oit) + oit, this._testCache, true, t);
        if (n.ignored) return n;
      }
      return this._rules.test(e, false, t0n);
    }
    _t(e, t, n, r) {
      if (e in t) return t[e];
      if (!r) r = e.split(oit).filter(Boolean);
      if (r.pop(), !r.length) return t[e] = this._rules.test(e, n, DNt);
      let o = this._t(r.join(oit) + oit, t, n, r);
      return t[e] = o.ignored ? o : this._rules.test(e, n, DNt);
    }
    ignores(e) {
      return this._test(e, this._ignoreCache, false).ignored;
    }
    createFilter() {
      return e => !this.ignores(e);
    }
    filter(e) {
      return uNi(e).filter(this.createFilter());
    }
    test(e) {
      return this._test(e, this._testCache, true);
    }
  }
  var NKr = e => new yNi(e),
    j1d = e => R_e(e && R_e.convert(e), e, fNi),
    G1d = () => {
      let e = n => /^\\\\\?\\/.test(n) || /["<>|\u0000-\u001F]+/u.test(n) ? n : n.replace(/\\/g, "/");
      R_e.convert = e;
      let t = /^[a-z]:\//i;
      R_e.isNotRelative = n => t.test(n) || hNi(n);
    };
  r0n.exports = NKr;
  NKr.default = NKr;
  r0n.exports.isPathValid = j1d;
  sit(r0n.exports, Symbol.for("setupWindows"), G1d);
});
function lc(e, t) {
  if (Tl() && !q1d[e]) return true;
  if (md() && !t?.explicitlyRequested) return W1d[e];
  return false;
}
function gce() {
  return Boolean(Oe.CLAUDE_CODE_DISABLE_CLAUDE_MDS || lc("claudeMd", {
    explicitlyRequested: c0().length > 0
  }));
}
var W1d, q1d;