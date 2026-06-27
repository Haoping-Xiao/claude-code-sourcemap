// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NUl
// matched 2.1.88 source: src/commands/install-github-app/CheckExistingSecretStep.tsx
// class=modified  jaccard=0.3  score=0.3464  fileCov=0.6914
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NUl] deps: components/CustomSelect/select.tsx, utils/plugins/loadPluginCommands.ts, components/ConfigurableShortcutHint.tsx, components/ScrollKeybindingHandler.tsx, components/design-system/Ratchet.tsx, hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts
((MUl = R(lt(), 1)), ($Ul = R(rt(), 1)), (zL = R(se(), 1)));
function CheckExistingSecretStep(t0) {
  let t = BUl.c(42),
    {
      useExistingSecret: n,
      secretName: r,
      onToggleUseExistingSecret: o,
      onSecretNameChange: s,
      onSubmit: i,
    } = t0,
    [a, l] = UUl.useState(0),
    c = br(),
    [u] = na(),
    d;
  if (t[0] !== o) ((d = () => o(true)), (t[0] = o), (t[1] = d));
  else d = t[1];
  let p = d,
    f;
  if (t[2] !== o) ((f = () => o(false)), (t[2] = o), (t[3] = f));
  else f = t[3];
  let m = f,
    g;
  if (t[4] !== m || t[5] !== p || t[6] !== i)
    ((g = {
      "confirm:previous": p,
      "confirm:next": m,
      "confirm:yes": i,
    }),
      (t[4] = m),
      (t[5] = p),
      (t[6] = i),
      (t[7] = g));
  else g = t[7];
  let h;
  if (t[8] !== n)
    ((h = {
      context: "Confirmation",
      isActive: n,
    }),
      (t[8] = n),
      (t[9] = h));
  else h = t[9];
  No(g, h);
  let y;
  if (t[10] !== m || t[11] !== p)
    ((y = {
      "confirm:previous": p,
      "confirm:next": m,
    }),
      (t[10] = m),
      (t[11] = p),
      (t[12] = y));
  else y = t[12];
  let b = !n,
    _;
  if (t[13] !== b)
    ((_ = {
      context: "Confirmation",
      isActive: b,
    }),
      (t[13] = b),
      (t[14] = _));
  else _ = t[14];
  No(y, _);
  let S;
  if (t[15] === Symbol.for("react.memo_cache_sentinel"))
    ((S = NT.jsx(U, {
      marginBottom: 1,
      children: NT.jsx(LH, {
        subtitle: "Setup API key secret",
        children: "Install GitHub App",
      }),
    })),
      (t[15] = S));
  else S = t[15];
  let A;
  if (t[16] === Symbol.for("react.memo_cache_sentinel"))
    ((A = NT.jsx(U, {
      marginBottom: 1,
      children: NT.jsx(w, {
        color: "warning",
        children: "ANTHROPIC_API_KEY already exists in repository secrets!",
      }),
    })),
      (t[16] = A));
  else A = t[16];
  let v;
  if (t[17] === Symbol.for("react.memo_cache_sentinel"))
    ((v = NT.jsx(U, {
      marginBottom: 1,
      children: NT.jsx(w, {
        children: "Would you like to:",
      }),
    })),
      (t[17] = v));
  else v = t[17];
  let C;
  if (t[18] !== u || t[19] !== n)
    ((C = n ? Io("success", u)("> ") : "  "), (t[18] = u), (t[19] = n), (t[20] = C));
  else C = t[20];
  let x;
  if (t[21] !== C)
    ((x = NT.jsx(U, {
      marginBottom: 1,
      children: NT.jsxs(w, {
        children: [C, "Use the existing API key"],
      }),
    })),
      (t[21] = C),
      (t[22] = x));
  else x = t[22];
  let I;
  if (t[23] !== u || t[24] !== n)
    ((I = !n ? Io("success", u)("> ") : "  "), (t[23] = u), (t[24] = n), (t[25] = I));
  else I = t[25];
  let k;
  if (t[26] !== I)
    ((k = NT.jsx(U, {
      marginBottom: 1,
      children: NT.jsxs(w, {
        children: [I, "Create a new secret with a different name"],
      }),
    })),
      (t[26] = I),
      (t[27] = k));
  else k = t[27];
  let D;
  if (t[28] !== a || t[29] !== s || t[30] !== i || t[31] !== r || t[32] !== c || t[33] !== n)
    ((D =
      !n &&
      NT.jsxs(NT.Fragment, {
        children: [
          NT.jsx(U, {
            marginBottom: 1,
            children: NT.jsx(w, {
              children: "Enter new secret name (alphanumeric with underscores):",
            }),
          }),
          NT.jsx(Ta, {
            value: r,
            onChange: s,
            onSubmit: i,
            focus: true,
            placeholder: "e.g., CLAUDE_API_KEY",
            columns: c.columns,
            cursorOffset: a,
            onChangeCursorOffset: l,
            showCursor: true,
          }),
        ],
      })),
      (t[28] = a),
      (t[29] = s),
      (t[30] = i),
      (t[31] = r),
      (t[32] = c),
      (t[33] = n),
      (t[34] = D));
  else D = t[34];
  let P;
  if (t[35] !== x || t[36] !== k || t[37] !== D)
    ((P = NT.jsxs(U, {
      flexDirection: "column",
      borderStyle: "round",
      paddingX: 1,
      children: [S, A, v, x, k, D],
    })),
      (t[35] = x),
      (t[36] = k),
      (t[37] = D),
      (t[38] = P));
  else P = t[38];
  let O;
  if (t[39] === Symbol.for("react.memo_cache_sentinel"))
    ((O = NT.jsx(U, {
      marginLeft: 3,
      children: NT.jsx(w, {
        dimColor: true,
        children: NT.jsxs(Tn, {
          children: [
            NT.jsx(ht, {
              chord: ["up", "down"],
              action: "select",
            }),
            NT.jsx(ht, {
              chord: "enter",
              action: "continue",
            }),
          ],
        }),
      }),
    })),
      (t[39] = O));
  else O = t[39];
  let L;
  if (t[40] !== P)
    ((L = NT.jsxs(NT.Fragment, {
      children: [P, O],
    })),
      (t[40] = P),
      (t[41] = L));
  else L = t[41];
  return L;
}
var BUl, UUl, NT;
