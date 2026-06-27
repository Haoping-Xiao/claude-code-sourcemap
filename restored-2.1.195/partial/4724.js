// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rBo
// matched 2.1.88 source: src/components/agents/ColorPicker.tsx
// class=partial  jaccard=0.1004  score=0.1787  fileCov=0.1863
// note: low-confidence suggestion: src/components/agents/ColorPicker.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rBo = E(() => {
  sJr();
  Ye();
  xne();
  N0e();
  nk();
  id();
  Un();
  NE();
  Ko();
  NOe();
  $Bl = R(lt(), 1), Jd = R(se(), 1);
  RHe = {
    keyCase: "lower",
    modSep: " + "
  };
});
function NBl() {
  let e = OBl.c(8),
    {
      rows: t
    } = br(),
    n = t < UOf,
    r = n ? 0 : 1,
    o = n ? 0 : 1,
    s;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) s = ZQ.jsx(U, {
    flexShrink: 0,
    children: ZQ.jsx(w, {
      children: "Claude understands your codebase, makes edits with your permission, and executes commands \u2014 right from your terminal."
    })
  }), e[0] = s;else s = e[0];
  let i;
  if (e[1] !== n) i = !n && ZQ.jsx(U, {
    children: ZQ.jsxs(w, {
      dimColor: !0,
      children: ["New here? Run ", ZQ.jsx(w, {
        color: "suggestion",
        children: "/powerup"
      }), " to learn the features most people miss."]
    })
  }), e[1] = n, e[2] = i;else i = e[2];
  let a;
  if (e[3] === Symbol.for("react.memo_cache_sentinel")) a = ZQ.jsxs(U, {
    flexDirection: "column",
    children: [ZQ.jsx(U, {
      flexShrink: 0,
      children: ZQ.jsx(w, {
        bold: !0,
        children: "Shortcuts"
      })
    }), ZQ.jsx(Dnr, {
      gap: 2,
      fixedWidth: !0
    })]
  }), e[3] = a;else a = e[3];
  let l;
  if (e[4] !== r || e[5] !== o || e[6] !== i) l = ZQ.jsxs(U, {
    flexDirection: "column",
    paddingY: r,
    gap: o,
    children: [s, i, a]
  }), e[4] = r, e[5] = o, e[6] = i, e[7] = l;else l = e[7];
  return l;
}
var OBl,
  ZQ,
  UOf = 44;