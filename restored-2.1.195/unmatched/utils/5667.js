// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ckc
// matched 2.1.88 source: src/ink/styles.ts
// class=new  jaccard=0.0278  score=0.3467  fileCov=0.0294
// note: nearest: src/ink/styles.ts (0.0278); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ckc] deps: Bs, Ye, er, Cp, DE, dr
skc = R(lt(), 1), $Ne = R(se(), 1);
function dkc(e) {
  let t = ukc.c(18),
    {
      questions: n,
      ageLabel: r,
      ageColor: o
    } = e,
    s = n[0];
  if (!s) return null;
  let i;
  if (t[0] !== o || t[1] !== r) i = aO.jsx(w, {
    color: o,
    children: r
  }), t[0] = o, t[1] = r, t[2] = i;else i = t[2];
  let a;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) a = aO.jsx(w, {
    children: " "
  }), t[3] = a;else a = t[3];
  let l;
  if (t[4] !== s.question) l = aO.jsx(U, {
    flexGrow: 1,
    width: 0,
    children: aO.jsx(w, {
      bold: true,
      wrap: "truncate",
      children: s.question
    })
  }), t[4] = s.question, t[5] = l;else l = t[5];
  let c;
  if (t[6] !== n.length) c = n.length > 1 && aO.jsx(U, {
    flexShrink: 0,
    paddingLeft: 1,
    children: aO.jsxs(w, {
      dimColor: true,
      children: ["+", n.length - 1, " more \xB7 enter to open"]
    })
  }), t[6] = n.length, t[7] = c;else c = t[7];
  let u;
  if (t[8] !== i || t[9] !== l || t[10] !== c) u = aO.jsxs(U, {
    children: [i, a, l, c]
  }), t[8] = i, t[9] = l, t[10] = c, t[11] = u;else u = t[11];
  let d;
  if (t[12] !== s.options) d = s.options.map(dTm), t[12] = s.options, t[13] = d;else d = t[13];
  let p;
  if (t[14] === Symbol.for("react.memo_cache_sentinel")) p = aO.jsx(U, {
    paddingLeft: 5,
    children: aO.jsx(w, {
      dimColor: true,
      children: "or type your own answer below"
    })
  }), t[14] = p;else p = t[14];
  let f;
  if (t[15] !== u || t[16] !== d) f = aO.jsxs(U, {
    flexDirection: "column",
    children: [u, d, p]
  }), t[15] = u, t[16] = d, t[17] = f;else f = t[17];
  return f;
}
function dTm(e, t) {
  return aO.jsxs(U, {
    paddingLeft: 2,
    children: [aO.jsx(U, {
      width: 3,
      flexShrink: 0,
      children: aO.jsxs(w, {
        dimColor: true,
        children: [t + 1, "."]
      })
    }), aO.jsx(U, {
      flexGrow: 1,
      width: 0,
      children: aO.jsxs(w, {
        wrap: "truncate",
        children: [e.label, e.description && aO.jsxs(w, {
          dimColor: true,
          children: [" \xB7 ", e.description]
        })]
      })
    })]
  }, e.label);
}
function pkc(e, t) {
  let n = t?.[0];
  if (!n || e < "1" || e > "9") return null;
  let r = Number(e) - 1;
  return n.options[r]?.label ?? null;
}
var ukc, aO;