// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q5l
// matched 2.1.88 source: src/components/design-system/LoadingState.tsx
// class=partial  jaccard=0.2092  score=0.3791  fileCov=0.3182
// note: low-confidence suggestion: src/components/design-system/LoadingState.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var q5l = E(() => {
  Ye();
  Un();
  GY();
  er();
  zXt = R(rt(), 1), e2o = R(se(), 1);
  _4f = {
    tip: "",
    color: "dim"
  };
});
function K5l() {
  let e = Dr().companyAnnouncements;
  return !!e && e.some(t => t);
}
function Y5l(e) {
  if (Tor !== null) return Tor;
  let t = (Dr().companyAnnouncements ?? []).filter(r => r);
  if (t.length === 0) return null;
  let n = Dt().numStartups === 1 ? t[0] : t[Math.floor(Math.random() * t.length)];
  if (!n) return null;
  if (e) Tor = n;
  return n;
}
function b4f() {
  Tor = null;
}
function X5l() {
  let e = V5l.c(7),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = Lc(), e[0] = t;else t = e[0];
  let n = t,
    r = gVe(),
    [o] = z5l.useState(S4f),
    s;
  if (e[1] !== r || e[2] !== o) s = r ? Y5l(!0) : o, e[1] = r, e[2] = o, e[3] = s;else s = e[3];
  let i = s;
  if (!i) return null;
  let a;
  if (e[4] === Symbol.for("react.memo_cache_sentinel")) a = !process.env.IS_DEMO && n?.organizationName && KXt.jsxs(w, {
    dimColor: !0,
    children: ["Message from ", n.organizationName, ":"]
  }), e[4] = a;else a = e[4];
  let l;
  if (e[5] !== i) l = KXt.jsxs(U, {
    flexDirection: "column",
    children: [a, KXt.jsx(w, {
      children: i
    })]
  }), e[5] = i, e[6] = l;else l = e[6];
  return l;
}
function S4f() {
  return Y5l(!1);
}
var V5l,
  z5l,
  KXt,
  Tor = null;