// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rbo
// matched 2.1.88 source: node_modules/protobufjs/src/tokenize.js
// class=vendor  jaccard=0.1196  score=0.1784  fileCov=0.2661
// note: identified by fingerprint: protobufjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module Rbo] (exports=DS_, module=q3a)
var DS_ = {};
var q3a = {
  exports: DS_
};
q3a.exports = W3a;
var kbo = /[\s{}=;:[\],'"()<>]/g,
  ijp = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
  ajp = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
  ljp = /^ *[*/]+ */,
  cjp = /^\s*\*?\/*/,
  ujp = /\n/g,
  djp = /\s/,
  pjp = /\\(.?)/g,
  fjp = {
    "0": "\x00",
    r: "\r",
    n: `
`,
    t: "\t"
  };
function G3a(e) {
  return e.replace(pjp, function (t, n) {
    switch (n) {
      case "\\":
      case "":
        return n;
      default:
        return fjp[n] || "";
    }
  });
}
W3a.unescape = G3a;
function W3a(e, t) {
  e = e.toString();
  var n = 0,
    r = e.length,
    o = 1,
    s = 0,
    i = {},
    a = [],
    l = null;
  function c(S) {
    return Error("illegal " + S + " (line " + o + ")");
  }
  function u() {
    var S = l === "'" ? ajp : ijp;
    S.lastIndex = n - 1;
    var A = S.exec(e);
    if (!A) throw c("string");
    return n = S.lastIndex, h(l), l = null, G3a(A[1]);
  }
  function d(S) {
    return e.charAt(S);
  }
  function p(S, A, v) {
    var C = {
        type: e.charAt(S++),
        lineEmpty: false,
        leading: v
      },
      x;
    if (t) x = 2;else x = 3;
    var I = S - x,
      k;
    do if (--I < 0 || (k = e.charAt(I)) === `
`) {
      C.lineEmpty = true;
      break;
    } while (k === " " || k === "\t");
    var D = e.substring(S, A).split(ujp);
    for (var P = 0; P < D.length; ++P) D[P] = D[P].replace(t ? cjp : ljp, "").trim();
    C.text = D.join(`
`).trim(), i[o] = C, s = o;
  }
  function f(S) {
    var A = m(S),
      v = e.substring(S, A),
      C = /^\s*\/\//.test(v);
    return C;
  }
  function m(S) {
    var A = S;
    while (A < r && d(A) !== `
`) A++;
    return A;
  }
  function g() {
    if (a.length > 0) return a.shift();
    if (l) return u();
    var S,
      A,
      v,
      C,
      x,
      I = n === 0;
    do {
      if (n === r) return null;
      S = false;
      while (djp.test(v = d(n))) {
        if (v === `
`) I = true, ++o;
        if (++n === r) return null;
      }
      if (d(n) === "/") {
        if (++n === r) throw c("comment");
        if (d(n) === "/") {
          if (!t) {
            x = d(C = n + 1) === "/";
            while (d(++n) !== `
`) if (n === r) return null;
            if (++n, x) p(C, n - 1, I), I = true;
            ++o, S = true;
          } else {
            if (C = n, x = false, f(n - 1)) {
              x = true;
              do {
                if (n = m(n), n === r) break;
                if (n++, !I) break;
              } while (f(n));
            } else n = Math.min(r, m(n) + 1);
            if (x) p(C, n, I), I = true;
            o++, S = true;
          }
        } else if ((v = d(n)) === "*") {
          C = n + 1, x = t || d(C) === "*";
          do {
            if (v === `
`) ++o;
            if (++n === r) throw c("comment");
            A = v, v = d(n);
          } while (A !== "*" || v !== "/");
          if (++n, x) p(C, n - 2, I), I = true;
          S = true;
        } else return "/";
      }
    } while (S);
    var k = n;
    kbo.lastIndex = 0;
    var D = kbo.test(d(k++));
    if (!D) while (k < r && !kbo.test(d(k))) ++k;
    var P = e.substring(n, n = k);
    if (P === '"' || P === "'") l = P;
    return P;
  }
  function h(S) {
    a.push(S);
  }
  function y() {
    if (!a.length) {
      var S = g();
      if (S === null) return null;
      h(S);
    }
    return a[0];
  }
  function b(S, A) {
    var v = y(),
      C = v === S;
    if (C) return g(), true;
    if (!A) throw c("token '" + v + "', '" + S + "' expected");
    return false;
  }
  function _(S) {
    var A = null,
      v;
    if (S === void 0) {
      if (v = i[o - 1], delete i[o - 1], v && (t || v.type === "*" || v.lineEmpty)) A = v.leading ? v.text : null;
    } else {
      if (s < S) y();
      if (v = i[S], delete i[S], v && !v.lineEmpty && (t || v.type === "/")) A = v.leading ? null : v.text;
    }
    return A;
  }
  return Object.defineProperty({
    next: g,
    peek: y,
    push: h,
    skip: b,
    cmnt: _
  }, "line", {
    get: function () {
      return o;
    }
  });
}