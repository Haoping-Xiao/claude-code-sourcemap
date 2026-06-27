// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module j6l
// matched 2.1.88 source: src/commands/theme/theme.tsx
// class=modified  jaccard=0.1544  score=0.202  fileCov=0.3958
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module j6l] deps: utils/hooks/sessionHooks.ts, @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, utils/systemTheme.ts, utils/debug.ts, services/teamMemorySync/secretScanner.ts, utils/theme.ts, components/diff/DiffDialog.tsx, components/CustomSelect/select.tsx, node-forge/lib/asn1.js, components/ConfigurableShortcutHint.tsx, components/design-system/Dialog.tsx, components/ScrollKeybindingHandler.tsx
((kjo = R(lt(), 1)),
  (U6l = require("path")),
  (Tz = R(rt(), 1)),
  (Nf = R(se(), 1)),
  (cqf = NRr + NRr));
function ThemePickerCommand(t0) {
  let t = G6l.c(25),
    { onDone: n } = t0,
    [r, o] = na(),
    { customThemes: s } = jke(),
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((i = {
      kind: "picker",
    }),
      (t[0] = i));
  else i = t[0];
  let [a, l] = W6l.useState(i),
    c;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) ((c = lc("themes")), (t[1] = c));
  else c = t[1];
  let u = c,
    d = Fke(),
    p;
  if (t[2] !== d) ((p = fW(d)), (t[2] = d), (t[3] = p));
  else p = t[3];
  let f = p;
  if (a.kind === "editor") {
    let _;
    if (t[4] !== n || t[5] !== o)
      ((_ = (v) => {
        (o(V3e(v.slug)), n(`Using custom theme "${v.name}"`));
      }),
        (t[4] = n),
        (t[5] = o),
        (t[6] = _));
    else _ = t[6];
    let S;
    if (t[7] === Symbol.for("react.memo_cache_sentinel"))
      ((S = () =>
        l({
          kind: "picker",
        })),
        (t[7] = S));
    else S = t[7];
    let A;
    if (t[8] !== r || t[9] !== a.initial || t[10] !== _)
      ((A = _Jt.jsx(F6l, {
        initial: a.initial,
        defaultBase: r,
        onDone: _,
        onCancel: S,
      })),
        (t[8] = r),
        (t[9] = a.initial),
        (t[10] = _),
        (t[11] = A));
    else A = t[11];
    return A;
  }
  let m;
  if (t[12] !== s || t[13] !== n || t[14] !== o)
    ((m = (_) => {
      (o(_),
        n(
          fW(_)
            ? `Using custom theme "${s.find((S) => V3e(S.slug) === _)?.name ?? _}"`
            : `Theme set to ${_}`,
        ));
    }),
      (t[12] = s),
      (t[13] = n),
      (t[14] = o),
      (t[15] = m));
  else m = t[15];
  let g;
  if (t[16] === Symbol.for("react.memo_cache_sentinel"))
    ((g = u
      ? void 0
      : (_) =>
          l({
            kind: "editor",
            initial: _,
          })),
      (t[16] = g));
  else g = t[16];
  let h;
  if (t[17] !== f)
    ((h = u
      ? `Custom themes are disabled in safe mode \u2014 ${qH()} to create or edit them${f ? `. Your saved theme "${f}" is a custom theme; selecting a preset here replaces it` : ""}`
      : ""),
      (t[17] = f),
      (t[18] = h));
  else h = t[18];
  let y;
  if (t[19] !== n)
    ((y = () => {
      n("Theme picker dismissed", {
        display: "system",
      });
    }),
      (t[19] = n),
      (t[20] = y));
  else y = t[20];
  let b;
  if (t[21] !== m || t[22] !== h || t[23] !== y)
    ((b = _Jt.jsx(Fu, {
      color: "permission",
      children: _Jt.jsx(lEt, {
        onThemeSelect: m,
        onCustomTheme: g,
        helpText: h,
        onCancel: y,
        skipExitHandling: true,
      }),
    })),
      (t[21] = m),
      (t[22] = h),
      (t[23] = y),
      (t[24] = b));
  else b = t[24];
  return b;
}
var G6l,
  W6l,
  _Jt,
  call = async (e, t) =>
    _Jt.jsx(ThemePickerCommand, {
      onDone: e,
    });
