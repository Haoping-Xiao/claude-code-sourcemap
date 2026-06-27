// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A_c
// matched 2.1.88 source: src/components/PromptInput/HistorySearchInput.tsx
// class=modified  jaccard=0.2563  score=0.3544  fileCov=0.4807
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module A_c] deps: OTt, _i, Ye, uo, S_, je, PM, b_c
Nen = R(rt(), 1);
function Nfm(e) {
  let t = H_c.c(12),
    { value: n, onChange: r, historyFailedMatch: o } = e,
    s = o ? "no matching prompt:" : "search prompts:",
    i;
  if (t[0] !== s)
    ((i = BTt.jsx(w, {
      dimColor: true,
      children: s,
    })),
      (t[0] = s),
      (t[1] = i));
  else i = t[1];
  let a = rn(n) + 1,
    l;
  if (t[2] !== r || t[3] !== a || t[4] !== n)
    ((l = BTt.jsx(Ta, {
      value: n,
      onChange: r,
      cursorOffset: n.length,
      onChangeCursorOffset: Bfm,
      columns: a,
      focus: true,
      showCursor: true,
      multiline: false,
      dimColor: true,
    })),
      (t[2] = r),
      (t[3] = a),
      (t[4] = n),
      (t[5] = l));
  else l = t[5];
  let c;
  if (t[6] !== n)
    ((c =
      V$() &&
      n === "" &&
      BTt.jsx(w, {
        dimColor: true,
        children: "esc i / for slash commands",
      })),
      (t[6] = n),
      (t[7] = c));
  else c = t[7];
  let u;
  if (t[8] !== i || t[9] !== l || t[10] !== c)
    ((u = BTt.jsxs(U, {
      gap: 1,
      children: [i, l, c],
    })),
      (t[8] = i),
      (t[9] = l),
      (t[10] = c),
      (t[11] = u));
  else u = t[11];
  return u;
}
function Bfm() {}
var H_c, BTt, T_c;
