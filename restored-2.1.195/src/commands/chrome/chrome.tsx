// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IXl
// matched 2.1.88 source: src/commands/chrome/chrome.tsx
// class=modified  jaccard=0.2385  score=0.3551  fileCov=0.4206
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module IXl] deps: Xr, Vl, Ye, dn, er, je, At, Jt
((w4o = R(lt(), 1)),
  (D1e = R(rt(), 1)),
  (Z$ = R(se(), 1)),
  (f8f = ve(() =>
    H.object({
      deviceId: H.string(),
      name: H.string().default("Browser"),
      osPlatform: H.string().optional(),
    }),
  )));
function _8f(e) {
  let t = xXl.c(47),
    { onDone: n, isExtensionInstalled: r, configEnabled: o, isClaudeAISubscriber: s, isWSL: i } = e,
    a = Ht(T8f),
    [l, c] = nHt.useState(0),
    [u, d] = nHt.useState(o ?? false),
    [p, f] = nHt.useState(false),
    [m, g] = nHt.useState(r),
    [h, y] = nHt.useState("menu"),
    b;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((b = false), (t[0] = b));
  else b = t[0];
  let _ = b,
    S;
  if (t[1] !== a) ((S = a.find(H8f)), (t[1] = a), (t[2] = S));
  else S = t[2];
  let A = S,
    v = A !== void 0,
    C;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((C = Dt().chromeExtension?.pairedDeviceName), (t[3] = C));
  else C = t[3];
  let x = C,
    I;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((I = function (K) {
      if (_) ac(K);
      else JUt(K).catch(ke);
    }),
      (t[4] = I));
  else I = t[4];
  let k = I,
    D;
  if (t[5] !== u)
    ((D = function (K) {
      e: switch (K) {
        case "install-extension": {
          (c(A8f), f(true), k(g8f));
          break e;
        }
        case "reconnect": {
          (c(E8f),
            Kfe()
              .then((Z) => {
                if ((g(Z), Z)) f(false);
              })
              .catch(ke),
            k(y8f));
          break e;
        }
        case "manage-permissions": {
          (c(S8f), k(h8f));
          break e;
        }
        case "toggle-default": {
          let Z = !u;
          (gn((J) => ({
            ...J,
            claudeInChromeDefaultEnabled: Z,
          })),
            d(Z));
          break e;
        }
        case "select-browser":
          y("select-browser");
      }
    }),
      (t[5] = u),
      (t[6] = D));
  else D = t[6];
  let P = D,
    O;
  if (t[7] !== u || t[8] !== v || t[9] !== m) {
    O = [];
    let z = m ? "" : " (requires extension)";
    if (!m && !_) {
      let ee;
      if (t[11] === Symbol.for("react.memo_cache_sentinel"))
        ((ee = {
          label: "Install Chrome extension",
          value: "install-extension",
        }),
          (t[11] = ee));
      else ee = t[11];
      O.push(ee);
    }
    if (v) {
      let ee;
      if (t[12] === Symbol.for("react.memo_cache_sentinel"))
        ((ee = {
          label: "Select browser\u2026",
          value: "select-browser",
        }),
          (t[12] = ee));
      else ee = t[12];
      O.push(ee);
    }
    let K;
    if (t[13] === Symbol.for("react.memo_cache_sentinel"))
      ((K = hg.jsx(w, {
        children: "Manage permissions",
      })),
        (t[13] = K));
    else K = t[13];
    let Z;
    if (t[14] !== z)
      ((Z = {
        label: hg.jsxs(hg.Fragment, {
          children: [
            K,
            hg.jsx(w, {
              dimColor: true,
              children: z,
            }),
          ],
        }),
        value: "manage-permissions",
      }),
        (t[14] = z),
        (t[15] = Z));
    else Z = t[15];
    let J;
    if (t[16] === Symbol.for("react.memo_cache_sentinel"))
      ((J = hg.jsx(w, {
        children: "Reconnect extension",
      })),
        (t[16] = J));
    else J = t[16];
    let ne;
    if (t[17] !== z)
      ((ne = {
        label: hg.jsxs(hg.Fragment, {
          children: [
            J,
            hg.jsx(w, {
              dimColor: true,
              children: z,
            }),
          ],
        }),
        value: "reconnect",
      }),
        (t[17] = z),
        (t[18] = ne));
    else ne = t[18];
    let oe = `Enabled by default: ${u ? "Yes" : "No"}`,
      re;
    if (t[19] !== oe)
      ((re = {
        label: oe,
        value: "toggle-default",
      }),
        (t[19] = oe),
        (t[20] = re));
    else re = t[20];
    (O.push(Z, ne, re), (t[7] = u), (t[8] = v), (t[9] = m), (t[10] = O));
  } else O = t[10];
  let L = i || !s,
    M;
  if (t[21] !== n) ((M = () => n()), (t[21] = n), (t[22] = M));
  else M = t[22];
  let N;
  if (t[23] === Symbol.for("react.memo_cache_sentinel"))
    ((N = hg.jsx(w, {
      children:
        "Claude in Chrome works with the Chrome extension to let you control your browser directly from Claude Code. Navigate websites, fill forms, capture screenshots, record GIFs, and debug with console logs and network requests.",
    })),
      (t[23] = N));
  else N = t[23];
  let B;
  if (t[24] !== i)
    ((B =
      i &&
      hg.jsx(w, {
        color: "error",
        children: "Claude in Chrome is not supported in WSL at this time.",
      })),
      (t[24] = i),
      (t[25] = B));
  else B = t[25];
  let $;
  if (t[26] !== s)
    (($ =
      !s &&
      hg.jsx(w, {
        color: "error",
        children: "Claude in Chrome requires a claude.ai subscription.",
      })),
      (t[26] = s),
      (t[27] = $));
  else $ = t[27];
  let q;
  if (
    t[28] !== A ||
    t[29] !== P ||
    t[30] !== v ||
    t[31] !== L ||
    t[32] !== m ||
    t[33] !== n ||
    t[34] !== O ||
    t[35] !== l ||
    t[36] !== p ||
    t[37] !== h
  )
    ((q =
      !L &&
      hg.jsxs(hg.Fragment, {
        children: [
          !_ &&
            hg.jsxs(U, {
              flexDirection: "column",
              children: [
                hg.jsxs(w, {
                  children: [
                    "Status:",
                    " ",
                    v
                      ? hg.jsx(w, {
                          color: "success",
                          children: "Enabled",
                        })
                      : hg.jsx(w, {
                          color: "inactive",
                          children: "Disabled",
                        }),
                  ],
                }),
                hg.jsxs(w, {
                  children: [
                    "Extension:",
                    " ",
                    m
                      ? hg.jsx(w, {
                          color: "success",
                          children: "Installed",
                        })
                      : hg.jsx(w, {
                          color: "warning",
                          children: "Not detected",
                        }),
                  ],
                }),
                v && x
                  ? hg.jsxs(w, {
                      children: [
                        "Browser: ",
                        hg.jsx(w, {
                          color: "success",
                          children: x,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          h === "select-browser" && A
            ? hg.jsx(wXl, {
                chromeClient: A,
                onDone: (z) => {
                  if ((y("menu"), c(b8f), z)) n(z);
                },
              })
            : hg.jsx(
                Sr,
                {
                  options: O,
                  onChange: P,
                  hideIndexes: true,
                },
                l,
              ),
          p &&
            hg.jsxs(w, {
              color: "warning",
              children: ["Once installed, select ", '"Reconnect extension"', " to connect."],
            }),
          hg.jsxs(w, {
            children: [
              hg.jsx(w, {
                dimColor: true,
                children: "Usage: ",
              }),
              hg.jsx(w, {
                children: "claude --chrome",
              }),
              hg.jsx(w, {
                dimColor: true,
                children: " or ",
              }),
              hg.jsx(w, {
                children: "claude --no-chrome",
              }),
            ],
          }),
          hg.jsx(w, {
            dimColor: true,
            children:
              "Site-level permissions are inherited from the Chrome extension. Manage permissions in the Chrome extension settings to control which sites Claude can browse, click, and type on.",
          }),
        ],
      })),
      (t[28] = A),
      (t[29] = P),
      (t[30] = v),
      (t[31] = L),
      (t[32] = m),
      (t[33] = n),
      (t[34] = O),
      (t[35] = l),
      (t[36] = p),
      (t[37] = h),
      (t[38] = q));
  else q = t[38];
  let W;
  if (t[39] === Symbol.for("react.memo_cache_sentinel"))
    ((W = hg.jsx(qL, {
      url: "https://code.claude.com/docs/en/chrome",
    })),
      (t[39] = W));
  else W = t[39];
  let V;
  if (t[40] !== q || t[41] !== B || t[42] !== $)
    ((V = hg.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [N, B, $, q, W],
    })),
      (t[40] = q),
      (t[41] = B),
      (t[42] = $),
      (t[43] = V));
  else V = t[43];
  let Y;
  if (t[44] !== V || t[45] !== M)
    ((Y = hg.jsx(zn, {
      title: "Claude in Chrome (beta)",
      onCancel: M,
      color: "chromeYellow",
      children: V,
    })),
      (t[44] = V),
      (t[45] = M),
      (t[46] = Y));
  else Y = t[46];
  return Y;
}
function b8f(e) {
  return e + 1;
}
function S8f(e) {
  return e + 1;
}
function E8f(e) {
  return e + 1;
}
function A8f(e) {
  return e + 1;
}
function H8f(e) {
  return e.name === VD && e.type === "connected";
}
function T8f(e) {
  return e.mcp.clients;
}
var xXl,
  nHt,
  hg,
  g8f = "https://claude.ai/chrome",
  h8f = "https://clau.de/chrome/permissions",
  y8f = "https://clau.de/chrome/reconnect",
  call = async function (e) {
    let t = await Kfe().catch(
        (s) => (
          T(
            `[Claude in Chrome] Extension detection failed: ${s instanceof Error ? s.message : String(s)}`,
            {
              level: "error",
            },
          ),
          false
        ),
      ),
      n = Dt(),
      r = bo(),
      o = Oe.isWslEnvironment();
    return hg.jsx(_8f, {
      onDone: e,
      isExtensionInstalled: t,
      configEnabled: n.claudeInChromeDefaultEnabled,
      isClaudeAISubscriber: r,
      isWSL: o,
    });
  };
