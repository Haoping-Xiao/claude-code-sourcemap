// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MHc
// matched 2.1.88 source: src/components/permissions/PermissionExplanation.tsx
// class=partial  jaccard=0.0718  score=0.2592  fileCov=0.0903
// note: low-confidence suggestion: src/components/permissions/PermissionExplanation.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var MHc = E(() => {
  Vl();
  Bs();
  Ko();
  X0();
  eKo();
  WTe();
  kHc();
  Ye();
  Un();
  kt();
  Du();
  uo();
  tWt();
  Wbt();
  DHc();
  cx = R(rt(), 1), qP = R(se(), 1);
});
function OHc(e) {
  let t = $Hc.c(27),
    {
      payload: n,
      answer: r
    } = e,
    o;
  if (t[0] !== n.fallbackModel || t[1] !== n.originalModel) o = Saa(n.originalModel, n.fallbackModel), t[0] = n.fallbackModel, t[1] = n.originalModel, t[2] = o;else o = t[2];
  let s = o,
    i;
  if (t[3] !== s.retry_fallback) i = {
    value: "retry_fallback",
    label: s.retry_fallback
  }, t[3] = s.retry_fallback, t[4] = i;else i = t[4];
  let a;
  if (t[5] !== s.edit_prompt) a = {
    value: "edit_prompt",
    label: s.edit_prompt
  }, t[5] = s.edit_prompt, t[6] = a;else a = t[6];
  let l;
  if (t[7] !== i || t[8] !== a) l = [i, a], t[7] = i, t[8] = a, t[9] = l;else l = t[9];
  let c = l,
    u;
  if (t[10] !== n.apiRefusalCategory || t[11] !== n.originalModel) u = baa(n.originalModel, n.apiRefusalCategory), t[10] = n.apiRefusalCategory, t[11] = n.originalModel, t[12] = u;else u = t[12];
  let d;
  if (t[13] !== u) d = YTe.jsx(sKn, {
    children: u
  }), t[13] = u, t[14] = d;else d = t[14];
  let p;
  if (t[15] !== n.guidanceText) p = n.guidanceText !== void 0 && YTe.jsx(U, {
    marginTop: 1,
    children: YTe.jsx(w, {
      color: "inactive",
      children: n.guidanceText
    })
  }), t[15] = n.guidanceText, t[16] = p;else p = t[16];
  let f;
  if (t[17] !== r) f = () => r("cancelled"), t[17] = r, t[18] = f;else f = t[18];
  let m;
  if (t[19] !== r || t[20] !== c || t[21] !== f) m = YTe.jsx(U, {
    marginTop: 1,
    children: YTe.jsx(Sr, {
      options: c,
      onChange: r,
      onCancel: f
    })
  }), t[19] = r, t[20] = c, t[21] = f, t[22] = m;else m = t[22];
  let g;
  if (t[23] !== d || t[24] !== p || t[25] !== m) g = YTe.jsx(Lf, {
    color: "warning",
    title: "Session paused",
    children: YTe.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      paddingX: 1,
      children: [d, p, m]
    })
  }), t[23] = d, t[24] = p, t[25] = m, t[26] = g;else g = t[26];
  return g;
}
var $Hc, YTe;