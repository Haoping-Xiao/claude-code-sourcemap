// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module znr
// matched 2.1.88 source: src/components/mcp/MCPToolDetailView.tsx
// class=modified  jaccard=0.3889  score=0.4951  fileCov=0.6445
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module znr] deps: @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, services/mcp/utils.ts, commands/mcp/mcp.tsx, services/mcp/xaa.ts, context/notifications.tsx, utils/errors.ts, services/teamMemorySync/secretScanner.ts, context/modalContext.tsx, components/ThemePicker.tsx, components/CustomSelect/select.tsx, components/design-system/Dialog.tsx, components/ConfigurableShortcutHint.tsx, undici/lib/mock/mock-agent.js, components/Settings/Status.tsx, @anthropic-ai/bedrock-sdk/client.mjs, components/mcp/MCPRemoteServerMenu.tsx
((Vnr = R(rt(), 1)), (ud = R(se(), 1)));
function MCPToolDetailView(t0) {
  let t = s2l.c(45),
    { tool: n, server: r, onBack: o } = t0,
    [s, i] = Knr.useState(""),
    a,
    l;
  if (t[0] !== r.name || t[1] !== n) {
    l = tmn(n.name, r.name);
    let N = n.userFacingName ? n.userFacingName({}) : l;
    ((a = nmn(N)), (t[0] = r.name), (t[1] = n), (t[2] = a), (t[3] = l));
  } else ((a = t[2]), (l = t[3]));
  let c = a,
    u;
  if (t[4] !== n) ((u = n.isReadOnly?.({}) ?? false), (t[4] = n), (t[5] = u));
  else u = t[5];
  let d = u,
    p;
  if (t[6] !== n) ((p = n.isDestructive?.({}) ?? false), (t[6] = n), (t[7] = p));
  else p = t[7];
  let f = p,
    m;
  if (t[8] !== n) ((m = n.isOpenWorld?.({}) ?? false), (t[8] = n), (t[9] = m));
  else m = t[9];
  let g = m,
    h,
    y;
  if (t[10] !== n)
    ((h = () => {
      (async function () {
        try {
          let $ = await n.description(
            {},
            {
              isNonInteractiveSession: false,
              toolPermissionContext: {
                mode: "default",
                additionalWorkingDirectories: new Map(),
                alwaysAllowRules: {},
                alwaysDenyRules: {},
                alwaysAskRules: {},
                isBypassPermissionsModeAvailable: false,
                mcpPermissionModeOverrides: {},
              },
              tools: [],
            },
          );
          i($);
        } catch {
          i("Failed to load description");
        }
      })();
    }),
      (y = [n]),
      (t[10] = n),
      (t[11] = h),
      (t[12] = y));
  else ((h = t[11]), (y = t[12]));
  Knr.useEffect(h, y);
  let b;
  if (t[13] !== d)
    ((b =
      d &&
      DH.jsx(w, {
        color: "success",
        children: " [read-only]",
      })),
      (t[13] = d),
      (t[14] = b));
  else b = t[14];
  let _;
  if (t[15] !== f)
    ((_ =
      f &&
      DH.jsx(w, {
        color: "error",
        children: " [destructive]",
      })),
      (t[15] = f),
      (t[16] = _));
  else _ = t[16];
  let S;
  if (t[17] !== g)
    ((S =
      g &&
      DH.jsx(w, {
        dimColor: true,
        children: " [open-world]",
      })),
      (t[17] = g),
      (t[18] = S));
  else S = t[18];
  let A;
  if (t[19] !== c || t[20] !== b || t[21] !== _ || t[22] !== S)
    ((A = DH.jsxs(DH.Fragment, {
      children: [c, b, _, S],
    })),
      (t[19] = c),
      (t[20] = b),
      (t[21] = _),
      (t[22] = S),
      (t[23] = A));
  else A = t[23];
  let v = A,
    C;
  if (t[24] === Symbol.for("react.memo_cache_sentinel"))
    ((C = DH.jsx(mr, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "go back",
    })),
      (t[24] = C));
  else C = t[24];
  let x;
  if (t[25] === Symbol.for("react.memo_cache_sentinel"))
    ((x = DH.jsx(w, {
      bold: true,
      children: "Tool name: ",
    })),
      (t[25] = x));
  else x = t[25];
  let I;
  if (t[26] !== l)
    ((I = DH.jsxs(U, {
      children: [
        x,
        DH.jsx(w, {
          dimColor: true,
          children: l,
        }),
      ],
    })),
      (t[26] = l),
      (t[27] = I));
  else I = t[27];
  let k;
  if (t[28] === Symbol.for("react.memo_cache_sentinel"))
    ((k = DH.jsx(w, {
      bold: true,
      children: "Full name: ",
    })),
      (t[28] = k));
  else k = t[28];
  let D;
  if (t[29] !== n.name)
    ((D = DH.jsxs(U, {
      children: [
        k,
        DH.jsx(w, {
          dimColor: true,
          children: n.name,
        }),
      ],
    })),
      (t[29] = n.name),
      (t[30] = D));
  else D = t[30];
  let P;
  if (t[31] !== s)
    ((P =
      s &&
      DH.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          DH.jsx(w, {
            bold: true,
            children: "Description:",
          }),
          DH.jsx(w, {
            wrap: "wrap",
            children: SUe(s, K1f),
          }),
        ],
      })),
      (t[31] = s),
      (t[32] = P));
  else P = t[32];
  let O;
  if (t[33] !== n.inputJSONSchema)
    ((O =
      n.inputJSONSchema &&
      n.inputJSONSchema.properties &&
      Object.keys(n.inputJSONSchema.properties).length > 0 &&
      DH.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          DH.jsx(w, {
            bold: true,
            children: "Parameters:",
          }),
          DH.jsx(U, {
            marginLeft: 2,
            flexDirection: "column",
            children: Object.entries(n.inputJSONSchema.properties).map((N) => {
              let [B, $] = N,
                W = n.inputJSONSchema?.required?.includes(B);
              return DH.jsxs(
                iE,
                {
                  children: [
                    B,
                    DH.jsx(mz, {
                      when: W ?? false,
                      children: "required",
                    }),
                    ":",
                    " ",
                    DH.jsx(w, {
                      dimColor: true,
                      children:
                        typeof $ === "object" && $ && "type" in $ ? String($.type) : "unknown",
                    }),
                    typeof $ === "object" &&
                      $ &&
                      "description" in $ &&
                      DH.jsxs(w, {
                        dimColor: true,
                        children: [" - ", SUe(String($.description), Y1f)],
                      }),
                  ],
                },
                B,
              );
            }),
          }),
        ],
      })),
      (t[33] = n.inputJSONSchema),
      (t[34] = O));
  else O = t[34];
  let L;
  if (t[35] !== I || t[36] !== D || t[37] !== P || t[38] !== O)
    ((L = DH.jsxs(U, {
      flexDirection: "column",
      children: [I, D, P, O],
    })),
      (t[35] = I),
      (t[36] = D),
      (t[37] = P),
      (t[38] = O),
      (t[39] = L));
  else L = t[39];
  let M;
  if (t[40] !== o || t[41] !== r.name || t[42] !== L || t[43] !== v)
    ((M = DH.jsx(zn, {
      title: v,
      subtitle: r.name,
      onCancel: o,
      inputGuide: C,
      children: L,
    })),
      (t[40] = o),
      (t[41] = r.name),
      (t[42] = L),
      (t[43] = v),
      (t[44] = M));
  else M = t[44];
  return M;
}
var s2l,
  Knr,
  DH,
  K1f = 1000,
  Y1f = 200;
