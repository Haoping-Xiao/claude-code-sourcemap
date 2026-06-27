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
      if (e.isPrefix !== true) e.depth = e.isGlobstar ? 1 / 0 : 1;
    },
    yip = (e, t) => {
      let n = t || {},
        r = e.length - 1,
        o = n.parts === true || n.scanToEnd === true,
        s = [],
        i = [],
        a = [],
        l = e,
        c = -1,
        u = 0,
        d = 0,
        p = false,
        f = false,
        m = false,
        g = false,
        h = false,
        y = false,
        b = false,
        _ = false,
        S = false,
        A = false,
        v = 0,
        C,
        x,
        I = {
          value: "",
          depth: 0,
          isGlob: false
        },
        k = () => c >= r,
        D = () => l.charCodeAt(c + 1),
        P = () => (C = x, l.charCodeAt(++c));
      while (c < r) {
        x = P();
        let B;
        if (x === djt) {
          if (b = I.backslashes = true, x = P(), x === vso) y = true;
          continue;
        }
        if (y === true || x === vso) {
          v++;
          while (k() !== true && (x = P())) {
            if (x === djt) {
              b = I.backslashes = true, P();
              continue;
            }
            if (x === vso) {
              v++;
              continue;
            }
            if (y !== true && x === Hso && (x = P()) === Hso) {
              if (p = I.isBrace = true, m = I.isGlob = true, A = true, o === true) continue;
              break;
            }
            if (y !== true && x === pip) {
              if (p = I.isBrace = true, m = I.isGlob = true, A = true, o === true) continue;
              break;
            }
            if (x === gip) {
              if (v--, v === 0) {
                y = false, p = I.isBrace = true, A = true;
                break;
              }
            }
          }
          if (o === true) continue;
          break;
        }
        if (x === msa) {
          if (s.push(c), i.push(I), I = {
            value: "",
            depth: 0,
            isGlob: false
          }, A === true) continue;
          if (C === Hso && c === u + 1) {
            u += 2;
            continue;
          }
          d = c + 1;
          continue;
        }
        if (n.noext !== true) {
          if ((x === mip || x === dip || x === Aso || x === usa || x === Tso) === true && D() === wso) {
            if (m = I.isGlob = true, g = I.isExtglob = true, A = true, x === Tso && c === u) S = true;
            if (o === true) {
              while (k() !== true && (x = P())) {
                if (x === djt) {
                  b = I.backslashes = true, x = P();
                  continue;
                }
                if (x === dsa) {
                  m = I.isGlob = true, A = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (x === Aso) {
          if (C === Aso) h = I.isGlobstar = true;
          if (m = I.isGlob = true, A = true, o === true) continue;
          break;
        }
        if (x === usa) {
          if (m = I.isGlob = true, A = true, o === true) continue;
          break;
        }
        if (x === fip) {
          while (k() !== true && (B = P())) {
            if (B === djt) {
              b = I.backslashes = true, P();
              continue;
            }
            if (B === hip) {
              f = I.isBracket = true, m = I.isGlob = true, A = true;
              break;
            }
          }
          if (o === true) continue;
          break;
        }
        if (n.nonegate !== true && x === Tso && c === u) {
          _ = I.negated = true, u++;
          continue;
        }
        if (n.noparen !== true && x === wso) {
          if (m = I.isGlob = true, o === true) {
            while (k() !== true && (x = P())) {
              if (x === wso) {
                b = I.backslashes = true, x = P();
                continue;
              }
              if (x === dsa) {
                A = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (m === true) {
          if (A = true, o === true) continue;
          break;
        }
      }
      if (n.noext === true) g = false, m = false;
      let O = l,
        L = "",
        M = "";
      if (u > 0) L = l.slice(0, u), l = l.slice(u), d -= u;
      if (O && m === true && d > 0) O = l.slice(0, d), M = l.slice(d);else if (m === true) O = "", M = l;else O = l;
      if (O && O !== "" && O !== "/" && O !== l) {
        if (psa(O.charCodeAt(O.length - 1))) O = O.slice(0, -1);
      }
      if (n.unescape === true) {
        if (M) M = csa.removeBackslashes(M);
        if (O && b === true) O = csa.removeBackslashes(O);
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
      if (n.tokens === true) {
        if (N.maxDepth = 0, !psa(x)) i.push(I);
        N.tokens = i;
      }
      if (n.parts === true || n.tokens === true) {
        let B;
        for (let $ = 0; $ < s.length; $++) {
          let q = B ? B + 1 : u,
            W = s[$],
            V = e.slice(q, W);
          if (n.tokens) {
            if ($ === 0 && u !== 0) i[$].isPrefix = true, i[$].value = L;else i[$].value = V;
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