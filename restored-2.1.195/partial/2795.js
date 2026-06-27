// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Esa
// matched 2.1.88 source: node_modules/picomatch/lib/parse.js
// class=partial  jaccard=0.073  score=0.0778  fileCov=0.5451
// note: low-confidence suggestion: node_modules/picomatch/lib/parse.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Esa = Q((Jxy, Ssa) => {
  var pjt = cjt(),
    G8 = ujt(),
    {
      MAX_LENGTH: r1n,
      POSIX_REGEX_SOURCE: _ip,
      REGEX_NON_SPECIAL_CHARS: bip,
      REGEX_SPECIAL_CHARS_BACKREF: Sip,
      REPLACEMENTS: ysa
    } = pjt,
    Eip = (e, t) => {
      if (typeof t.expandRange === "function") return t.expandRange(...e, t);
      e.sort();
      let n = `[${e.join("-")}]`;
      try {
        new RegExp(n);
      } catch (r) {
        return e.map(o => G8.escapeRegex(o)).join("..");
      }
      return n;
    },
    Nct = (e, t) => `Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,
    _sa = e => {
      let t = [],
        n = 0,
        r = 0,
        o = 0,
        s = "",
        i = !1;
      for (let a of e) {
        if (i === !0) {
          s += a, i = !1;
          continue;
        }
        if (a === "\\") {
          s += a, i = !0;
          continue;
        }
        if (a === '"') {
          o = o === 1 ? 0 : 1, s += a;
          continue;
        }
        if (o === 0) {
          if (a === "[") n++;else if (a === "]" && n > 0) n--;else if (n === 0) {
            if (a === "(") r++;else if (a === ")" && r > 0) r--;else if (a === "|" && r === 0) {
              t.push(s), s = "";
              continue;
            }
          }
        }
        s += a;
      }
      return t.push(s), t;
    },
    Aip = e => {
      let t = !1;
      for (let n of e) {
        if (t === !0) {
          t = !1;
          continue;
        }
        if (n === "\\") {
          t = !0;
          continue;
        }
        if (/[?*+@!()[\]{}]/.test(n)) return !1;
      }
      return !0;
    },
    bsa = e => {
      let t = e.trim(),
        n = !0;
      while (n === !0) if (n = !1, /^@\([^\\()[\]{}|]+\)$/.test(t)) t = t.slice(2, -1), n = !0;
      if (!Aip(t)) return;
      return t.replace(/\\(.)/g, "$1");
    },
    Hip = e => {
      let t = e.map(bsa).filter(Boolean);
      for (let n = 0; n < t.length; n++) for (let r = n + 1; r < t.length; r++) {
        let o = t[n],
          s = t[r],
          i = o[0];
        if (!i || o !== i.repeat(o.length) || s !== i.repeat(s.length)) continue;
        if (o === s || o.startsWith(s) || s.startsWith(o)) return !0;
      }
      return !1;
    },
    Cso = (e, t = !0) => {
      if (e[0] !== "+" && e[0] !== "*" || e[1] !== "(") return;
      let n = 0,
        r = 0,
        o = 0,
        s = !1;
      for (let i = 1; i < e.length; i++) {
        let a = e[i];
        if (s === !0) {
          s = !1;
          continue;
        }
        if (a === "\\") {
          s = !0;
          continue;
        }
        if (a === '"') {
          o = o === 1 ? 0 : 1;
          continue;
        }
        if (o === 1) continue;
        if (a === "[") {
          n++;
          continue;
        }
        if (a === "]" && n > 0) {
          n--;
          continue;
        }
        if (n > 0) continue;
        if (a === "(") {
          r++;
          continue;
        }
        if (a === ")") {
          if (r--, r === 0) {
            if (t === !0 && i !== e.length - 1) return;
            return {
              type: e[0],
              body: e.slice(2, i),
              end: i
            };
          }
        }
      }
    },
    Tip = e => {
      let t = 0,
        n = [];
      while (t < e.length) {
        let o = Cso(e.slice(t), !1);
        if (!o || o.type !== "*") return;
        let s = _sa(o.body).map(a => a.trim());
        if (s.length !== 1) return;
        let i = bsa(s[0]);
        if (!i || i.length !== 1) return;
        n.push(i), t += o.end + 1;
      }
      if (n.length < 1) return;
      return `${n.length === 1 ? G8.escapeRegex(n[0]) : `[${n.map(o => G8.escapeRegex(o)).join("")}]`}*`;
    },
    vip = e => {
      let t = 0,
        n = e.trim(),
        r = Cso(n);
      while (r) t++, n = r.body.trim(), r = Cso(n);
      return t;
    },
    wip = (e, t) => {
      if (t.maxExtglobRecursion === !1) return {
        risky: !1
      };
      let n = typeof t.maxExtglobRecursion === "number" ? t.maxExtglobRecursion : pjt.DEFAULT_MAX_EXTGLOB_RECURSION,
        r = _sa(e).map(o => o.trim());
      if (r.length > 1) {
        if (r.some(o => o === "") || r.some(o => /^[*?]+$/.test(o)) || Hip(r)) return {
          risky: !0
        };
      }
      for (let o of r) {
        let s = Tip(o);
        if (s) return {
          risky: !0,
          safeOutput: s
        };
        if (vip(o) > n) return {
          risky: !0
        };
      }
      return {
        risky: !1
      };
    },
    Iso = (e, t) => {
      if (typeof e !== "string") throw TypeError("Expected a string");
      e = ysa[e] || e;
      let n = {
          ...t
        },
        r = typeof n.maxLength === "number" ? Math.min(r1n, n.maxLength) : r1n,
        o = e.length;
      if (o > r) throw SyntaxError(`Input length: ${o}, exceeds maximum allowed length: ${r}`);
      let s = {
          type: "bos",
          value: "",
          output: n.prepend || ""
        },
        i = [s],
        a = n.capture ? "" : "?:",
        l = pjt.globChars(n.windows),
        c = pjt.extglobChars(l),
        {
          DOT_LITERAL: u,
          PLUS_LITERAL: d,
          SLASH_LITERAL: p,
          ONE_CHAR: f,
          DOTS_SLASH: m,
          NO_DOT: g,
          NO_DOT_SLASH: h,
          NO_DOTS_SLASH: y,
          QMARK: b,
          QMARK_NO_DOT: _,
          STAR: S,
          START_ANCHOR: A
        } = l,
        v = oe => `(${a}(?:(?!${A}${oe.dot ? m : u}).)*?)`,
        C = n.dot ? "" : g,
        x = n.dot ? b : _,
        I = n.bash === !0 ? v(n) : S;
      if (n.capture) I = `(${I})`;
      if (typeof n.noext === "boolean") n.noextglob = n.noext;
      let k = {
        input: e,
        index: -1,
        start: 0,
        dot: n.dot === !0,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: !1,
        negated: !1,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: !1,
        tokens: i
      };
      e = G8.removePrefix(e, k), o = e.length;
      let D = [],
        P = [],
        O = [],
        L = s,
        M,
        N = () => k.index === o - 1,
        B = k.peek = (oe = 1) => e[k.index + oe],
        $ = k.advance = () => e[++k.index] || "",
        q = () => e.slice(k.index + 1),
        W = (oe = "", re = 0) => {
          k.consumed += oe, k.index += re;
        },
        V = oe => {
          k.output += oe.output != null ? oe.output : oe.value, W(oe.value);
        },
        Y = () => {
          let oe = 1;
          while (B() === "!" && (B(2) !== "(" || B(3) === "?")) $(), k.start++, oe++;
          if (oe % 2 === 0) return !1;
          return k.negated = !0, k.start++, !0;
        },
        z = oe => {
          k[oe]++, O.push(oe);
        },
        K = oe => {
          k[oe]--, O.pop();
        },
        Z = oe => {
          if (L.type === "globstar") {
            let re = k.braces > 0 && (oe.type === "comma" || oe.type === "brace"),
              ee = oe.extglob === !0 || D.length && (oe.type === "pipe" || oe.type === "paren");
            if (oe.type !== "slash" && oe.type !== "paren" && !re && !ee) k.output = k.output.slice(0, -L.output.length), L.type = "star", L.value = "*", L.output = I, k.output += L.output;
          }
          if (D.length && oe.type !== "paren") D[D.length - 1].inner += oe.value;
          if (oe.value || oe.output) V(oe);
          if (L && L.type === "text" && oe.type === "text") {
            L.output = (L.output || L.value) + oe.value, L.value += oe.value;
            return;
          }
          oe.prev = L, i.push(oe), L = oe;
        },
        J = (oe, re) => {
          let ee = {
            ...c[re],
            conditions: 1,
            inner: ""
          };
          ee.prev = L, ee.parens = k.parens, ee.output = k.output, ee.startIndex = k.index, ee.tokensIndex = i.length;
          let ce = (n.capture ? "(" : "") + ee.open;
          z("parens"), Z({
            type: oe,
            value: re,
            output: k.output ? "" : f
          }), Z({
            type: "paren",
            extglob: !0,
            value: $(),
            output: ce
          }), D.push(ee);
        },
        ne = oe => {
          let re = e.slice(oe.startIndex, k.index + 1),
            ee = e.slice(oe.startIndex + 2, k.index),
            ce = wip(ee, n);
          if ((oe.type === "plus" || oe.type === "star") && ce.risky) {
            let Ee = ce.safeOutput ? (oe.output ? "" : f) + (n.capture ? `(${ce.safeOutput})` : ce.safeOutput) : void 0,
              me = i[oe.tokensIndex];
            me.type = "text", me.value = re, me.output = Ee || G8.escapeRegex(re);
            for (let pe = oe.tokensIndex + 1; pe < i.length; pe++) i[pe].value = "", i[pe].output = "", delete i[pe].suffix;
            k.output = oe.output + me.output, k.backtrack = !0, Z({
              type: "paren",
              extglob: !0,
              value: M,
              output: ""
            }), K("parens");
            return;
          }
          let ae = oe.close + (n.capture ? ")" : ""),
            de;
          if (oe.type === "negate") {
            let Ee = I;
            if (oe.inner && oe.inner.length > 1 && oe.inner.includes("/")) Ee = v(n);
            if (Ee !== I || N() || /^\)+$/.test(q())) ae = oe.close = `)$))${Ee}`;
            if (oe.inner.includes("*") && (de = q()) && /^\.[^\\/.]+$/.test(de)) {
              let me = Iso(de, {
                ...t,
                fastpaths: !1
              }).output;
              ae = oe.close = `)${me})${Ee})`;
            }
            if (oe.prev.type === "bos") k.negatedExtglob = !0;
          }
          Z({
            type: "paren",
            extglob: !0,
            value: M,
            output: ae
          }), K("parens");
        };
      if (n.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(e)) {
        let oe = !1,
          re = e.replace(Sip, (ee, ce, ae, de, Ee, me) => {
            if (de === "\\") return oe = !0, ee;
            if (de === "?") {
              if (ce) return ce + de + (Ee ? b.repeat(Ee.length) : "");
              if (me === 0) return x + (Ee ? b.repeat(Ee.length) : "");
              return b.repeat(ae.length);
            }
            if (de === ".") return u.repeat(ae.length);
            if (de === "*") {
              if (ce) return ce + de + (Ee ? I : "");
              return I;
            }
            return ce ? ee : `\\${ee}`;
          });
        if (oe === !0) if (n.unescape === !0) re = re.replace(/\\/g, "");else re = re.replace(/\\+/g, ee => ee.length % 2 === 0 ? "\\\\" : ee ? "\\" : "");
        if (re === e && n.contains === !0) return k.output = e, k;
        return k.output = G8.wrapOutput(re, k, t), k;
      }
      while (!N()) {
        if (M = $(), M === "\x00") continue;
        if (M === "\\") {
          let ee = B();
          if (ee === "/" && n.bash !== !0) continue;
          if (ee === "." || ee === ";") continue;
          if (!ee) {
            M += "\\", Z({
              type: "text",
              value: M
            });
            continue;
          }
          let ce = /^\\+/.exec(q()),
            ae = 0;
          if (ce && ce[0].length > 2) {
            if (ae = ce[0].length, k.index += ae, ae % 2 !== 0) M += "\\";
          }
          if (n.unescape === !0) M = $();else M += $();
          if (k.brackets === 0) {
            Z({
              type: "text",
              value: M
            });
            continue;
          }
        }
        if (k.brackets > 0 && (M !== "]" || L.value === "[" || L.value === "[^")) {
          if (n.posix !== !1 && M === ":") {
            let ee = L.value.slice(1);
            if (ee.includes("[")) {
              if (L.posix = !0, ee.includes(":")) {
                let ce = L.value.lastIndexOf("["),
                  ae = L.value.slice(0, ce),
                  de = L.value.slice(ce + 2),
                  Ee = _ip[de];
                if (Ee) {
                  if (L.value = ae + Ee, k.backtrack = !0, $(), !s.output && i.indexOf(L) === 1) s.output = f;
                  continue;
                }
              }
            }
          }
          if (M === "[" && B() !== ":" || M === "-" && B() === "]") M = `\\${M}`;
          if (M === "]" && (L.value === "[" || L.value === "[^")) M = `\\${M}`;
          if (n.posix === !0 && M === "!" && L.value === "[") M = "^";
          L.value += M, V({
            value: M
          });
          continue;
        }
        if (k.quotes === 1 && M !== '"') {
          M = G8.escapeRegex(M), L.value += M, V({
            value: M
          });
          continue;
        }
        if (M === '"') {
          if (k.quotes = k.quotes === 1 ? 0 : 1, n.keepQuotes === !0) Z({
            type: "text",
            value: M
          });
          continue;
        }
        if (M === "(") {
          z("parens"), Z({
            type: "paren",
            value: M
          });
          continue;
        }
        if (M === ")") {
          if (k.parens === 0 && n.strictBrackets === !0) throw SyntaxError(Nct("opening", "("));
          let ee = D[D.length - 1];
          if (ee && k.parens === ee.parens + 1) {
            ne(D.pop());
            continue;
          }
          Z({
            type: "paren",
            value: M,
            output: k.parens ? ")" : "\\)"
          }), K("parens");
          continue;
        }
        if (M === "[") {
          if (n.nobracket === !0 || !q().includes("]")) {
            if (n.nobracket !== !0 && n.strictBrackets === !0) throw SyntaxError(Nct("closing", "]"));
            M = `\\${M}`;
          } else z("brackets");
          Z({
            type: "bracket",
            value: M
          });
          continue;
        }
        if (M === "]") {
          if (n.nobracket === !0 || L && L.type === "bracket" && L.value.length === 1) {
            Z({
              type: "text",
              value: M,
              output: `\\${M}`
            });
            continue;
          }
          if (k.brackets === 0) {
            if (n.strictBrackets === !0) throw SyntaxError(Nct("opening", "["));
            Z({
              type: "text",
              value: M,
              output: `\\${M}`
            });
            continue;
          }
          K("brackets");
          let ee = L.value.slice(1);
          if (L.posix !== !0 && ee[0] === "^" && !ee.includes("/")) M = `/${M}`;
          if (L.value += M, V({
            value: M
          }), n.literalBrackets === !1 || G8.hasRegexChars(ee)) continue;
          let ce = G8.escapeRegex(L.value);
          if (k.output = k.output.slice(0, -L.value.length), n.literalBrackets === !0) {
            k.output += ce, L.value = ce;
            continue;
          }
          L.value = `(${a}${ce}|${L.value})`, k.output += L.value;
          continue;
        }
        if (M === "{" && n.nobrace !== !0) {
          z("braces");
          let ee = {
            type: "brace",
            value: M,
            output: "(",
            outputIndex: k.output.length,
            tokensIndex: k.tokens.length
          };
          P.push(ee), Z(ee);
          continue;
        }
        if (M === "}") {
          let ee = P[P.length - 1];
          if (n.nobrace === !0 || !ee) {
            Z({
              type: "text",
              value: M,
              output: M
            });
            continue;
          }
          let ce = ")";
          if (ee.dots === !0) {
            let ae = i.slice(),
              de = [];
            for (let Ee = ae.length - 1; Ee >= 0; Ee--) {
              if (i.pop(), ae[Ee].type === "brace") break;
              if (ae[Ee].type !== "dots") de.unshift(ae[Ee].value);
            }
            ce = Eip(de, n), k.backtrack = !0;
          }
          if (ee.comma !== !0 && ee.dots !== !0) {
            let ae = k.output.slice(0, ee.outputIndex),
              de = k.tokens.slice(ee.tokensIndex);
            ee.value = ee.output = "\\{", M = ce = "\\}", k.output = ae;
            for (let Ee of de) k.output += Ee.output || Ee.value;
          }
          Z({
            type: "brace",
            value: M,
            output: ce
          }), K("braces"), P.pop();
          continue;
        }
        if (M === "|") {
          if (D.length > 0) D[D.length - 1].conditions++;
          Z({
            type: "text",
            value: M
          });
          continue;
        }
        if (M === ",") {
          let ee = M,
            ce = P[P.length - 1];
          if (ce && O[O.length - 1] === "braces") ce.comma = !0, ee = "|";
          Z({
            type: "comma",
            value: M,
            output: ee
          });
          continue;
        }
        if (M === "/") {
          if (L.type === "dot" && k.index === k.start + 1) {
            k.start = k.index + 1, k.consumed = "", k.output = "", i.pop(), L = s;
            continue;
          }
          Z({
            type: "slash",
            value: M,
            output: p
          });
          continue;
        }
        if (M === ".") {
          if (k.braces > 0 && L.type === "dot") {
            if (L.value === ".") L.output = u;
            let ee = P[P.length - 1];
            L.type = "dots", L.output += M, L.value += M, ee.dots = !0;
            continue;
          }
          if (k.braces + k.parens === 0 && L.type !== "bos" && L.type !== "slash") {
            Z({
              type: "text",
              value: M,
              output: u
            });
            continue;
          }
          Z({
            type: "dot",
            value: M,
            output: u
          });
          continue;
        }
        if (M === "?") {
          if (!(L && L.value === "(") && n.noextglob !== !0 && B() === "(" && B(2) !== "?") {
            J("qmark", M);
            continue;
          }
          if (L && L.type === "paren") {
            let ce = B(),
              ae = M;
            if (L.value === "(" && !/[!=<:]/.test(ce) || ce === "<" && !/<([!=]|\w+>)/.test(q())) ae = `\\${M}`;
            Z({
              type: "text",
              value: M,
              output: ae
            });
            continue;
          }
          if (n.dot !== !0 && (L.type === "slash" || L.type === "bos")) {
            Z({
              type: "qmark",
              value: M,
              output: _
            });
            continue;
          }
          Z({
            type: "qmark",
            value: M,
            output: b
          });
          continue;
        }
        if (M === "!") {
          if (n.noextglob !== !0 && B() === "(") {
            if (B(2) !== "?" || !/[!=<:]/.test(B(3))) {
              J("negate", M);
              continue;
            }
          }
          if (n.nonegate !== !0 && k.index === 0) {
            Y();
            continue;
          }
        }
        if (M === "+") {
          if (n.noextglob !== !0 && B() === "(" && B(2) !== "?") {
            J("plus", M);
            continue;
          }
          if (L && L.value === "(" || n.regex === !1) {
            Z({
              type: "plus",
              value: M,
              output: d
            });
            continue;
          }
          if (L && (L.type === "bracket" || L.type === "paren" || L.type === "brace") || k.parens > 0) {
            Z({
              type: "plus",
              value: M
            });
            continue;
          }
          Z({
            type: "plus",
            value: d
          });
          continue;
        }
        if (M === "@") {
          if (n.noextglob !== !0 && B() === "(" && B(2) !== "?") {
            Z({
              type: "at",
              extglob: !0,
              value: M,
              output: ""
            });
            continue;
          }
          Z({
            type: "text",
            value: M
          });
          continue;
        }
        if (M !== "*") {
          if (M === "$" || M === "^") M = `\\${M}`;
          let ee = bip.exec(q());
          if (ee) M += ee[0], k.index += ee[0].length;
          Z({
            type: "text",
            value: M
          });
          continue;
        }
        if (L && (L.type === "globstar" || L.star === !0)) {
          L.type = "star", L.star = !0, L.value += M, L.output = I, k.backtrack = !0, k.globstar = !0, W(M);
          continue;
        }
        let oe = q();
        if (n.noextglob !== !0 && /^\([^?]/.test(oe)) {
          J("star", M);
          continue;
        }
        if (L.type === "star") {
          if (n.noglobstar === !0) {
            W(M);
            continue;
          }
          let ee = L.prev,
            ce = ee.prev,
            ae = ee.type === "slash" || ee.type === "bos",
            de = ce && (ce.type === "star" || ce.type === "globstar");
          if (n.bash === !0 && (!ae || oe[0] && oe[0] !== "/")) {
            Z({
              type: "star",
              value: M,
              output: ""
            });
            continue;
          }
          let Ee = k.braces > 0 && (ee.type === "comma" || ee.type === "brace"),
            me = D.length && (ee.type === "pipe" || ee.type === "paren");
          if (!ae && ee.type !== "paren" && !Ee && !me) {
            Z({
              type: "star",
              value: M,
              output: ""
            });
            continue;
          }
          while (oe.slice(0, 3) === "/**") {
            let pe = e[k.index + 4];
            if (pe && pe !== "/") break;
            oe = oe.slice(3), W("/**", 3);
          }
          if (ee.type === "bos" && N()) {
            L.type = "globstar", L.value += M, L.output = v(n), k.output = L.output, k.globstar = !0, W(M);
            continue;
          }
          if (ee.type === "slash" && ee.prev.type !== "bos" && !de && N()) {
            k.output = k.output.slice(0, -(ee.output + L.output).length), ee.output = `(?:${ee.output}`, L.type = "globstar", L.output = v(n) + (n.strictSlashes ? ")" : "|$)"), L.value += M, k.globstar = !0, k.output += ee.output + L.output, W(M);
            continue;
          }
          if (ee.type === "slash" && ee.prev.type !== "bos" && oe[0] === "/") {
            let pe = oe[1] !== void 0 ? "|$" : "";
            k.output = k.output.slice(0, -(ee.output + L.output).length), ee.output = `(?:${ee.output}`, L.type = "globstar", L.output = `${v(n)}${p}|${p}${pe})`, L.value += M, k.output += ee.output + L.output, k.globstar = !0, W(M + $()), Z({
              type: "slash",
              value: "/",
              output: ""
            });
            continue;
          }
          if (ee.type === "bos" && oe[0] === "/") {
            L.type = "globstar", L.value += M, L.output = `(?:^|${p}|${v(n)}${p})`, k.output = L.output, k.globstar = !0, W(M + $()), Z({
              type: "slash",
              value: "/",
              output: ""
            });
            continue;
          }
          k.output = k.output.slice(0, -L.output.length), L.type = "globstar", L.output = v(n), L.value += M, k.output += L.output, k.globstar = !0, W(M);
          continue;
        }
        let re = {
          type: "star",
          value: M,
          output: I
        };
        if (n.bash === !0) {
          if (re.output = ".*?", L.type === "bos" || L.type === "slash") re.output = C + re.output;
          Z(re);
          continue;
        }
        if (L && (L.type === "bracket" || L.type === "paren") && n.regex === !0) {
          re.output = M, Z(re);
          continue;
        }
        if (k.index === k.start || L.type === "slash" || L.type === "dot") {
          if (L.type === "dot") k.output += h, L.output += h;else if (n.dot === !0) k.output += y, L.output += y;else k.output += C, L.output += C;
          if (B() !== "*") k.output += f, L.output += f;
        }
        Z(re);
      }
      while (k.brackets > 0) {
        if (n.strictBrackets === !0) throw SyntaxError(Nct("closing", "]"));
        k.output = G8.escapeLast(k.output, "["), K("brackets");
      }
      while (k.parens > 0) {
        if (n.strictBrackets === !0) throw SyntaxError(Nct("closing", ")"));
        k.output = G8.escapeLast(k.output, "("), K("parens");
      }
      while (k.braces > 0) {
        if (n.strictBrackets === !0) throw SyntaxError(Nct("closing", "}"));
        k.output = G8.escapeLast(k.output, "{"), K("braces");
      }
      if (n.strictSlashes !== !0 && (L.type === "star" || L.type === "bracket")) Z({
        type: "maybe_slash",
        value: "",
        output: `${p}?`
      });
      if (k.backtrack === !0) {
        k.output = "";
        for (let oe of k.tokens) if (k.output += oe.output != null ? oe.output : oe.value, oe.suffix) k.output += oe.suffix;
      }
      return k;
    };
  Iso.fastpaths = (e, t) => {
    let n = {
        ...t
      },
      r = typeof n.maxLength === "number" ? Math.min(r1n, n.maxLength) : r1n,
      o = e.length;
    if (o > r) throw SyntaxError(`Input length: ${o}, exceeds maximum allowed length: ${r}`);
    e = ysa[e] || e;
    let {
        DOT_LITERAL: s,
        SLASH_LITERAL: i,
        ONE_CHAR: a,
        DOTS_SLASH: l,
        NO_DOT: c,
        NO_DOTS: u,
        NO_DOTS_SLASH: d,
        STAR: p,
        START_ANCHOR: f
      } = pjt.globChars(n.windows),
      m = n.dot ? u : c,
      g = n.dot ? d : c,
      h = n.capture ? "" : "?:",
      y = {
        negated: !1,
        prefix: ""
      },
      b = n.bash === !0 ? ".*?" : p;
    if (n.capture) b = `(${b})`;
    let _ = C => {
        if (C.noglobstar === !0) return b;
        return `(${h}(?:(?!${f}${C.dot ? l : s}).)*?)`;
      },
      S = C => {
        switch (C) {
          case "*":
            return `${m}${a}${b}`;
          case ".*":
            return `${s}${a}${b}`;
          case "*.*":
            return `${m}${b}${s}${a}${b}`;
          case "*/*":
            return `${m}${b}${i}${a}${g}${b}`;
          case "**":
            return m + _(n);
          case "**/*":
            return `(?:${m}${_(n)}${i})?${g}${a}${b}`;
          case "**/*.*":
            return `(?:${m}${_(n)}${i})?${g}${b}${s}${a}${b}`;
          case "**/.*":
            return `(?:${m}${_(n)}${i})?${s}${a}${b}`;
          default:
            {
              let x = /^(.*?)\.(\w+)$/.exec(C);
              if (!x) return;
              let I = S(x[1]);
              if (!I) return;
              return I + s + x[2];
            }
        }
      },
      A = G8.removePrefix(e, y),
      v = S(A);
    if (v && n.strictSlashes !== !0) v += `${i}?`;
    return v;
  };
  Ssa.exports = Iso;
});