// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zMl
// matched 2.1.88 source: src/components/LanguagePicker.tsx
// class=partial  jaccard=0.2063  score=0.3528  fileCov=0.332
// note: low-confidence suggestion: src/components/LanguagePicker.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zMl = E(() => {
  G4();
  Ye();
  gb();
  Lo();
  fn();
  Vl();
  vi();
  qMl = R(lt(), 1), I7t = R(rt(), 1), AHe = R(se(), 1);
});
function YMl(e) {
  let t = KMl.c(13),
    {
      initialLanguage: n,
      onComplete: r,
      onCancel: o
    } = e,
    [s, i] = b1o.useState(n),
    [a, l] = b1o.useState((n ?? "").length),
    c;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) c = {
    context: "Settings"
  }, t[0] = c;else c = t[0];
  $r("confirm:no", o, c);
  let u;
  if (t[1] !== s || t[2] !== r) u = function () {
    let _ = s?.trim();
    r(_ || void 0);
  }, t[1] = s, t[2] = r, t[3] = u;else u = t[3];
  let d = u,
    p;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) p = OOe.jsx(w, {
    children: "Enter your preferred response and voice language:"
  }), t[4] = p;else p = t[4];
  let f;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) f = OOe.jsx(w, {
    children: nt.pointer
  }), t[5] = f;else f = t[5];
  let m = s ?? "",
    g;
  if (t[6] !== a || t[7] !== d || t[8] !== m) g = OOe.jsxs(U, {
    flexDirection: "row",
    gap: 1,
    children: [f, OOe.jsx(Ta, {
      value: m,
      onChange: i,
      onSubmit: d,
      focus: !0,
      showCursor: !0,
      placeholder: `e.g., Japanese, \u65E5\u672C\u8A9E, Espa\xF1ol${nt.ellipsis}`,
      columns: 60,
      cursorOffset: a,
      onChangeCursorOffset: l
    })]
  }), t[6] = a, t[7] = d, t[8] = m, t[9] = g;else g = t[9];
  let h;
  if (t[10] === Symbol.for("react.memo_cache_sentinel")) h = OOe.jsx(w, {
    dimColor: !0,
    children: "Leave empty for default (English)"
  }), t[10] = h;else h = t[10];
  let y;
  if (t[11] !== g) y = OOe.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [p, g, h]
  }), t[11] = g, t[12] = y;else y = t[12];
  return y;
}
var KMl, b1o, OOe;