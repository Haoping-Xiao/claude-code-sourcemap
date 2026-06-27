// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FJa
// matched 2.1.88 source: src/utils/status.tsx
// class=modified (alt of src/utils/status.tsx)  jaccard=0.01  score=0.0602  fileCov=0.0119
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module FJa] deps: hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, services/teamMemorySync/secretScanner.ts, context/modalContext.tsx, keybindings/useShortcutDisplay.ts, components/CustomSelect/select.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, @smithy/types/dist-cjs/index.js, components/ScrollKeybindingHandler.tsx, @ant/computer-use-mcp/src/toolCalls.ts, vH, components/PromptInput/PromptInput.tsx, @modelcontextprotocol/sdk/dist/esm/client/auth.js
((qHo = R(lt(), 1)), (nMe = R(rt(), 1)), (eR = R(se(), 1)));
function buildAPIProviderProperties() {
  let e = jJa.c(17),
    { goBack: t, goNext: n, updateWizardData: r, wizardData: o } = Eu(),
    [s, i] = K9n.useState(o.region ?? "us-east-1"),
    [a, l] = K9n.useState(s.length),
    [c, u] = K9n.useState(null),
    d;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((d = {
      context: "Settings",
    }),
      (e[0] = d));
  else d = e[0];
  $r("confirm:no", t, d);
  let p;
  if (e[1] !== n || e[2] !== r || e[3] !== s)
    ((p = () => {
      let S = s.trim();
      if (!S) {
        u("Region is required");
        return;
      }
      (u(null),
        r({
          region: S,
        }),
        n());
    }),
      (e[1] = n),
      (e[2] = r),
      (e[3] = s),
      (e[4] = p));
  else p = e[4];
  let f = p,
    m;
  if (e[5] === Symbol.for("react.memo_cache_sentinel"))
    ((m = O6.jsxs(Tn, {
      children: [
        O6.jsx(ht, {
          chord: "enter",
          action: "continue",
        }),
        O6.jsx(mr, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back",
        }),
      ],
    })),
      (e[5] = m));
  else m = e[5];
  let g, h;
  if (e[6] === Symbol.for("react.memo_cache_sentinel"))
    ((g = O6.jsx(w, {
      children: "Where your Bedrock models are enabled.",
    })),
      (h = O6.jsx(w, {
        dimColor: true,
        children:
          "Claude Code reads this from AWS_REGION, not ~/.aws/config \u2014 set it explicitly even if your profile has a region.",
      })),
      (e[6] = g),
      (e[7] = h));
  else ((g = e[6]), (h = e[7]));
  let y;
  if (e[8] !== a || e[9] !== f || e[10] !== s)
    ((y = O6.jsx(U, {
      marginTop: 1,
      children: O6.jsx(Ta, {
        value: s,
        onChange: i,
        onSubmit: f,
        placeholder: "us-east-1",
        columns: 40,
        cursorOffset: a,
        onChangeCursorOffset: l,
        focus: true,
        showCursor: true,
      }),
    })),
      (e[8] = a),
      (e[9] = f),
      (e[10] = s),
      (e[11] = y));
  else y = e[11];
  let b;
  if (e[12] !== c)
    ((b =
      c &&
      O6.jsx(U, {
        marginTop: 1,
        children: O6.jsx(Va, {
          error: c,
        }),
      })),
      (e[12] = c),
      (e[13] = b));
  else b = e[13];
  let _;
  if (e[14] !== y || e[15] !== b)
    ((_ = O6.jsx(Pc, {
      subtitle: "AWS region",
      footerText: m,
      children: O6.jsxs(U, {
        flexDirection: "column",
        children: [g, h, y, b],
      }),
    })),
      (e[14] = y),
      (e[15] = b),
      (e[16] = _));
  else _ = e[16];
  return _;
}
var jJa, K9n, O6;
