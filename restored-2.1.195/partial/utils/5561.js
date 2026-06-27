// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yAc
// matched 2.1.88 source: src/commands/btw/btw.tsx
// class=partial  jaccard=0.0814  score=0.6269  fileCov=0.0856
// note: low-confidence suggestion: src/commands/btw/btw.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yAc = E(() => {
  uo();
  gq();
  mAc();
  M8e();
  gAc = R(rt(), 1);
});
function bAc() {
  let e = _Ac.c(14),
    t = Ht(yym);
  if (!t) return null;
  let n;
  if (e[0] !== t.identity.color) n = V6(t.identity.color), e[0] = t.identity.color, e[1] = n;else n = e[1];
  let r = n,
    o;
  if (e[2] === Symbol.for("react.memo_cache_sentinel")) o = Bme.jsx(w, {
    children: "Viewing "
  }), e[2] = o;else o = e[2];
  let s;
  if (e[3] !== r || e[4] !== t.identity.agentName) s = Bme.jsxs(w, {
    color: r,
    bold: !0,
    children: ["@", t.identity.agentName]
  }), e[3] = r, e[4] = t.identity.agentName, e[5] = s;else s = e[5];
  let i;
  if (e[6] === Symbol.for("react.memo_cache_sentinel")) i = Bme.jsxs(w, {
    dimColor: !0,
    children: [" \xB7 ", Bme.jsx(ht, {
      chord: "escape",
      action: "return",
      format: {
        keyCase: "lower"
      }
    })]
  }), e[6] = i;else i = e[6];
  let a;
  if (e[7] !== s) a = Bme.jsxs(U, {
    children: [o, s, i]
  }), e[7] = s, e[8] = a;else a = e[8];
  let l;
  if (e[9] !== t.prompt) l = Bme.jsx(w, {
    dimColor: !0,
    children: t.prompt
  }), e[9] = t.prompt, e[10] = l;else l = e[10];
  let c;
  if (e[11] !== a || e[12] !== l) c = Bme.jsx(cP, {
    children: Bme.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [a, l]
    })
  }), e[11] = a, e[12] = l, e[13] = c;else c = e[13];
  return c;
}
function yym(e) {
  return cOe(e);
}
var _Ac, Bme;