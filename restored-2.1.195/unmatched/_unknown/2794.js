// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hsa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hsa = Q((Xxy, gsa) => {
  var csa = ujt(),
    {
      CHAR_ASTERISK: Aso,
      CHAR_AT: dip,
      CHAR_BACKWARD_SLASH: djt,
      CHAR_COMMA: pip,
      CHAR_DOT: Hso,
      CHAR_EXCLAMATION_MARK: Tso,
      CHAR_FORWARD_SLASH: msa,
      CHAR_LEFT_CURLY_BRACE: vso,
      CHAR_LEFT_PARENTHESES: wso,
      CHAR_LEFT_SQUARE_BRACKET: fip,
      CHAR_PLUS: mip,
      CHAR_QUESTION_MARK: usa,
      CHAR_RIGHT_CURLY_BRACE: gip,
      CHAR_RIGHT_PARENTHESES: dsa,
      CHAR_RIGHT_SQUARE_BRACKET: hip
    } = cjt(),
    psa = e => e === msa || e === djt,
    fsa = e => {
      if (e.isPrefix !== !0) e.depth = e.isGlobstar ? 1 / 0 : 1;
    },
    yip = (e, t) => {
      let n = t || {},
        r = e.length - 1,
        o = n.parts === !0 || n.scanToEnd === !0,
        s = [],
        i = [],
        a = [],
        l = e,
        c = -1,
        u = 0,
        d = 0,
        p = !1,
        f = !1,
        m = !1,
        g = !1,
        h = !1,
        y = !1,
        b = !1,
        _ = !1,
        S = !1,
        A = !1,
        v = 0,
        C,
        x,
        I = {
          value: "",
          depth: 0,
          isGlob: !1
        },
        k = () => c >= r,
        D = () => l.charCodeAt(c + 1),
        P = () => (C = x, l.charCodeAt(++c));
      while (c < r) {
        x = P();
        let B;
        if (x === djt) {
          if (b = I.backslashes = !0, x = P(), x === vso) y = !0;
          continue;
        }
        if (y === !0 || x === vso) {
          v++;
          while (k() !== !0 && (x = P())) {
            if (x === djt) {
              b = I.backslashes = !0, P();
              continue;
            }
            if (x === vso) {
              v++;
              continue;
            }
            if (y !== !0 && x === Hso && (x = P()) === Hso) {
              if (p = I.isBrace = !0, m = I.isGlob = !0, A = !0, o === !0) continue;
              break;
            }
            if (y !== !0 && x === pip) {
              if (p = I.isBrace = !0, m = I.isGlob = !0, A = !0, o === !0) continue;
              break;
            }
            if (x === gip) {
              if (v--, v === 0) {
                y = !1, p = I.isBrace = !0, A = !0;
                break;
              }
            }
          }
          if (o === !0) continue;
          break;
        }
        if (x === msa) {
          if (s.push(c), i.push(I), I = {
            value: "",
            depth: 0,
            isGlob: !1
          }, A === !0) continue;
          if (C === Hso && c === u + 1) {
            u += 2;
            continue;
          }
          d = c + 1;
          continue;
        }
        if (n.noext !== !0) {
          if ((x === mip || x === dip || x === Aso || x === usa || x === Tso) === !0 && D() === wso) {
            if (m = I.isGlob = !0, g = I.isExtglob = !0, A = !0, x === Tso && c === u) S = !0;
            if (o === !0) {
              while (k() !== !0 && (x = P())) {
                if (x === djt) {
                  b = I.backslashes = !0, x = P();
                  continue;
                }
                if (x === dsa) {
                  m = I.isGlob = !0, A = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (x === Aso) {
          if (C === Aso) h = I.isGlobstar = !0;
          if (m = I.isGlob = !0, A = !0, o === !0) continue;
          break;
        }
        if (x === usa) {
          if (m = I.isGlob = !0, A = !0, o === !0) continue;
          break;
        }
        if (x === fip) {
          while (k() !== !0 && (B = P())) {
            if (B === djt) {
              b = I.backslashes = !0, P();
              continue;
            }
            if (B === hip) {
              f = I.isBracket = !0, m = I.isGlob = !0, A = !0;
              break;
            }
          }
          if (o === !0) continue;
          break;
        }
        if (n.nonegate !== !0 && x === Tso && c === u) {
          _ = I.negated = !0, u++;
          continue;
        }
        if (n.noparen !== !0 && x === wso) {
          if (m = I.isGlob = !0, o === !0) {
            while (k() !== !0 && (x = P())) {
              if (x === wso) {
                b = I.backslashes = !0, x = P();
                continue;
              }
              if (x === dsa) {
                A = !0;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (m === !0) {
          if (A = !0, o === !0) continue;
          break;
        }
      }
      if (n.noext === !0) g = !1, m = !1;
      let O = l,
        L = "",
        M = "";
      if (u > 0) L = l.slice(0, u), l = l.slice(u), d -= u;
      if (O && m === !0 && d > 0) O = l.slice(0, d), M = l.slice(d);else if (m === !0) O = "", M = l;else O = l;
      if (O && O !== "" && O !== "/" && O !== l) {
        if (psa(O.charCodeAt(O.length - 1))) O = O.slice(0, -1);
      }
      if (n.unescape === !0) {
        if (M) M = csa.removeBackslashes(M);
        if (O && b === !0) O = csa.removeBackslashes(O);
      }
      let N = {
        prefix: L,
        input: e,
        start: u,
        base: O,
        glob: M,
        isBrace: p,
        isBracket: f,
        isGlob: m,
        isExtglob: g,
        isGlobstar: h,
        negated: _,
        negatedExtglob: S
      };
      if (n.tokens === !0) {
        if (N.maxDepth = 0, !psa(x)) i.push(I);
        N.tokens = i;
      }
      if (n.parts === !0 || n.tokens === !0) {
        let B;
        for (let $ = 0; $ < s.length; $++) {
          let q = B ? B + 1 : u,
            W = s[$],
            V = e.slice(q, W);
          if (n.tokens) {
            if ($ === 0 && u !== 0) i[$].isPrefix = !0, i[$].value = L;else i[$].value = V;
            fsa(i[$]), N.maxDepth += i[$].depth;
          }
          if ($ !== 0 || V !== "") a.push(V);
          B = W;
        }
        if (B && B + 1 < e.length) {
          let $ = e.slice(B + 1);
          if (a.push($), n.tokens) i[i.length - 1].value = $, fsa(i[i.length - 1]), N.maxDepth += i[i.length - 1].depth;
        }
        N.slashes = s, N.parts = a;
      }
      return N;
    };
  gsa.exports = yip;
});