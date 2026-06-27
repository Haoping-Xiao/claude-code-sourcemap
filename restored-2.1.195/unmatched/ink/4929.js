// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rVl
// matched 2.1.88 source: src/components/Stats.tsx
// class=new  jaccard=0.0135  score=0.2764  fileCov=0.014
// note: nearest: src/components/Stats.tsx (0.0135); dir inferred from dep-graph -> ink; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rVl] deps: ink/termio/tokenize.ts, ink/render-node-to-output.ts, ink/parse-keypress.ts, hooks/useTerminalSize.ts
U3f = R(lt(), 1), tVl = R(rt(), 1), nVl = R(se(), 1), WZS = F3f * j3f;
function A2o() {
  let e = E2o.c(2),
    t = sVl.useSyncExternalStore(cat, wWi),
    n;
  if (e[0] !== t) n = t ? qHe.jsx(W3f, {}) : null, e[0] = t, e[1] = n;else n = e[1];
  return n;
}
function W3f() {
  let e = E2o.c(2),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = Y3f(G3f), e[0] = t;else t = e[0];
  let n = t,
    r;
  if (e[1] === Symbol.for("react.memo_cache_sentinel")) r = qHe.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [qHe.jsx(w, {
      dimColor: true,
      children: "\u2500\u2500 scroll test \u2014 disappears when you close the dialog \u2500\u2500"
    }), n.map(q3f)]
  }), e[1] = r;else r = e[1];
  return r;
}
function q3f(e, t) {
  return qHe.jsxs(w, {
    dimColor: true,
    children: ["  ", e.num, e.text && qHe.jsxs(qHe.Fragment, {
      children: ["  ", e.indent, e.text]
    })]
  }, t);
}
function Y3f(e) {
  let t = z3f ??= V3f.trim().split(/\s+/),
    n = String(e).length,
    r = [],
    o = 0,
    s = 0;
  while (r.length < e) {
    let i = oVl[s % oVl.length];
    s++;
    let a = " ".repeat(i.indent);
    for (let l = 0; l < i.lines && r.length < e; l++) {
      let u = l === i.lines - 1 ? 12 + s * 11 % 28 : K3f,
        d = [],
        p = 0;
      while (p < u) {
        let f = t[o % t.length];
        d.push(f), p += f.length + 1, o++;
      }
      r.push({
        num: String(r.length + 1).padStart(n),
        text: d.join(" "),
        indent: a
      });
    }
    if (r.length < e) r.push({
      num: String(r.length + 1).padStart(n),
      text: "",
      indent: ""
    });
  }
  return r;
}
var E2o,
  sVl,
  qHe,
  G3f = 200,
  V3f = "Vivere omnes beate volunt sed ad pervidendum quid sit quod beatam vitam efficiat caligant et adeo non est facile consequi beatam vitam ut eo quisque ab ea longius recedat quo ad illam concitatius fertur si via lapsus est quae ubi in contrarium ducit ipsa velocitas maioris intervalli causa fit proponendum est itaque primum quid sit quod adpetamus tunc circumspiciendum qua contendere illo celerrime possimus intellecturi in ipso itinere si modo rectum erit quantum cotidie profligetur quantoque propius ab eo simus ad quod nos cupiditas naturalis inpellit quam diu quidem passim vagamur non ducem secuti sed fremitum et clamorem dissonum in diversa vocantium conteretur vita inter errores brevis etiam si dies noctesque bonae menti laboremus decernatur itaque et quo tendamus et qua non sine perito aliquo cui explorata sint ea in quae procedimus quoniam quidem non eadem hic quae in ceteris peregrinationibus condicio est in illis comprensus aliquis limes et interrogati incolae non patiuntur errare at hic tritissima quaeque via et celeberrima maxime decipit nihil ergo magis praestandum est quam ne pecorum ritu sequamur antecedentium gregem pergentes non quo eundum est sed quo itur atqui nulla res nos maioribus malis implicat quam quod ad rumorem componimur optima rati ea quae magno adsensu recepta sunt quodque exempla nobis pro bonis multa sunt nec ad rationem sed ad similitudinem vivimus ",
  z3f,
  K3f = 56,
  oVl;