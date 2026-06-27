// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yXl
// matched 2.1.88 source: src/components/sandbox/SandboxSettings.tsx
// class=modified  jaccard=0.4047  score=0.5516  fileCov=0.6032
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yXl] deps: Ye, lg, Vl, hse, kP
((H4o = R(lt(), 1)), (BP = R(se(), 1)));
function SandboxSettings(e) {
  let t = T4o.c(29),
    { onComplete: n, depCheck: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = xo.isSandboxingEnabled()), (t[0] = o));
  else o = t[0];
  let s = o,
    i;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((i = xo.isAutoAllowBashIfSandboxedEnabled()), (t[1] = i));
  else i = t[1];
  let a = i,
    l = r.warnings.length > 0,
    c;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((c = jo()), (t[2] = c));
  else c = t[2];
  let d = c.sandbox?.network?.allowAllUnixSockets,
    p = l && !d,
    f;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((f = () => {
      if (!s) return "disabled";
      if (a) return "auto-allow";
      return "regular";
    }),
      (t[3] = f));
  else f = t[3];
  let m = f,
    g;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) ((g = aOn()), (t[4] = g));
  else g = t[4];
  let h = g,
    y = m(),
    b = h && y === "disabled" ? "regular" : y,
    _;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = [
      {
        label: "Sandbox BashTool, with auto-allow",
        value: "auto-allow",
      },
      {
        label: "Sandbox BashTool, with regular permissions",
        value: "regular",
      },
      ...(h
        ? []
        : [
            {
              label: "No Sandbox",
              value: "disabled",
            },
          ]),
    ]),
      (t[5] = _));
  else _ = t[5];
  let S = _,
    A,
    v;
  if (t[6] !== n)
    ((v = async function (z) {
      let K = z;
      e: switch (K) {
        case "auto-allow": {
          (await xo.setSandboxSettings({
            enabled: true,
            autoAllowBashIfSandboxed: true,
          }),
            n("\u2713 Sandbox enabled with auto-allow for bash commands"));
          break e;
        }
        case "regular": {
          (await xo.setSandboxSettings({
            enabled: true,
            autoAllowBashIfSandboxed: false,
          }),
            n("\u2713 Sandbox enabled with regular bash permissions"));
          break e;
        }
        case "disabled":
          (await xo.setSandboxSettings({
            enabled: false,
            autoAllowBashIfSandboxed: false,
          }),
            n("\u25CB Sandbox disabled"));
      }
    }),
      (t[6] = n),
      (t[7] = v));
  else v = t[7];
  let C = v,
    x;
  if (t[8] !== n)
    ((x = {
      "confirm:no": () =>
        n(void 0, {
          display: "skip",
        }),
    }),
      (t[8] = n),
      (t[9] = x));
  else x = t[9];
  let I;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((I = {
      context: "Settings",
    }),
      (t[10] = I));
  else I = t[10];
  No(x, I);
  let k;
  if (t[11] !== C || t[12] !== n || t[13] !== p)
    ((k = EA.jsx(
      sm,
      {
        title: "Mode",
        children: EA.jsx(SandboxModeTab, {
          showSocketWarning: p,
          options: S,
          currentMode: b,
          noSandboxHint: A,
          onSelect: C,
          onComplete: n,
        }),
      },
      "mode",
    )),
      (t[11] = C),
      (t[12] = n),
      (t[13] = p),
      (t[14] = k));
  else k = t[14];
  let D = k,
    P;
  if (t[15] !== n)
    ((P = EA.jsx(
      sm,
      {
        title: "Overrides",
        children: EA.jsx(hXl, {
          onComplete: n,
        }),
      },
      "overrides",
    )),
      (t[15] = n),
      (t[16] = P));
  else P = t[16];
  let O = P,
    L;
  if (t[17] === Symbol.for("react.memo_cache_sentinel"))
    ((L = EA.jsx(
      sm,
      {
        title: "Config",
        children: EA.jsx(pXl, {}),
      },
      "config",
    )),
      (t[17] = L));
  else L = t[17];
  let M = L,
    N = r.errors.length > 0,
    B;
  if (t[18] !== r || t[19] !== N || t[20] !== l || t[21] !== D || t[22] !== O)
    ((B = N
      ? [
          EA.jsx(
            sm,
            {
              title: "Dependencies",
              children: EA.jsx(A4o, {
                depCheck: r,
              }),
            },
            "dependencies",
          ),
        ]
      : [
          D,
          ...(l
            ? [
                EA.jsx(
                  sm,
                  {
                    title: "Dependencies",
                    children: EA.jsx(A4o, {
                      depCheck: r,
                    }),
                  },
                  "dependencies",
                ),
              ]
            : []),
          O,
          M,
        ]),
      (t[18] = r),
      (t[19] = N),
      (t[20] = l),
      (t[21] = D),
      (t[22] = O),
      (t[23] = B));
  else B = t[23];
  let $ = B,
    q;
  if (t[24] !== $)
    ((q = EA.jsx(cR, {
      title: "Sandbox",
      color: "permission",
      defaultTab: "Mode",
      children: $,
    })),
      (t[24] = $),
      (t[25] = q));
  else q = t[25];
  let W;
  if (t[26] === Symbol.for("react.memo_cache_sentinel"))
    ((W = EA.jsx(U, {
      marginTop: 1,
      children: EA.jsx(vb, {
        children:
          "\u2190/\u2192 to switch \xB7 \u2191/\u2193 to navigate \xB7 Enter to select \xB7 Esc to close",
      }),
    })),
      (t[26] = W));
  else W = t[26];
  let V;
  if (t[27] !== q)
    ((V = EA.jsxs(Fu, {
      color: "permission",
      children: [q, W],
    })),
      (t[27] = q),
      (t[28] = V));
  else V = t[28];
  return V;
}
function SandboxModeTab(e) {
  let t = T4o.c(19),
    {
      showSocketWarning: n,
      options: r,
      currentMode: o,
      noSandboxHint: s,
      onSelect: i,
      onComplete: a,
    } = e,
    { headerFocused: l, focusHeader: c } = tx(),
    u;
  if (t[0] !== n)
    ((u =
      n &&
      EA.jsx(U, {
        marginBottom: 1,
        children: EA.jsx(qk, {
          status: "warning",
          children: "Cannot block unix domain sockets (see Dependencies tab)",
        }),
      })),
      (t[0] = n),
      (t[1] = u));
  else u = t[1];
  let d;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((d = EA.jsx(U, {
      marginBottom: 1,
      children: EA.jsx(w, {
        bold: true,
        children: "Configure mode",
      }),
    })),
      (t[2] = d));
  else d = t[2];
  let p;
  if (t[3] !== a)
    ((p = () =>
      a(void 0, {
        display: "skip",
      })),
      (t[3] = a),
      (t[4] = p));
  else p = t[4];
  let f;
  if (t[5] !== o || t[6] !== c || t[7] !== l || t[8] !== i || t[9] !== r || t[10] !== p)
    ((f = EA.jsx(Sr, {
      options: r,
      defaultValue: o,
      defaultFocusValue: o,
      onChange: i,
      onCancel: p,
      onUpFromFirstItem: c,
      isDisabled: l,
    })),
      (t[5] = o),
      (t[6] = c),
      (t[7] = l),
      (t[8] = i),
      (t[9] = r),
      (t[10] = p),
      (t[11] = f));
  else f = t[11];
  let m;
  if (t[12] !== s)
    ((m =
      s &&
      EA.jsx(U, {
        marginTop: 1,
        children: EA.jsx(w, {
          dimColor: true,
          children: s,
        }),
      })),
      (t[12] = s),
      (t[13] = m));
  else m = t[13];
  let g;
  if (t[14] === Symbol.for("react.memo_cache_sentinel"))
    ((g = EA.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      gap: 1,
      children: [
        EA.jsxs(w, {
          dimColor: true,
          children: [
            EA.jsx(w, {
              bold: true,
              dimColor: true,
              children: "Auto-allow mode:",
            }),
            " ",
            "Commands will try to run in the sandbox automatically, and attempts to run outside of the sandbox fallback to regular permissions. Explicit ask/deny rules are always respected.",
          ],
        }),
        EA.jsx(qL, {
          url: "https://code.claude.com/docs/en/sandboxing",
        }),
      ],
    })),
      (t[14] = g));
  else g = t[14];
  let h;
  if (t[15] !== u || t[16] !== f || t[17] !== m)
    ((h = EA.jsxs(U, {
      flexDirection: "column",
      children: [u, d, f, m, g],
    })),
      (t[15] = u),
      (t[16] = f),
      (t[17] = m),
      (t[18] = h));
  else h = t[18];
  return h;
}
var T4o, EA;
