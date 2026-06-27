// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u7o
// matched 2.1.88 source: src/utils/preflightChecks.tsx
// class=modified  jaccard=0.353  score=0.5297  fileCov=0.5141
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module u7o] deps: services/analytics/index.ts, utils/debug.ts, utils/debug.ts, utils/agentContext.ts, utils/status.tsx
PZ = {
  fable: "Fable",
  sonnet: "Sonnet",
  opus: "Opus",
  haiku: "Haiku",
};
async function checkEndpoints() {
  try {
    let e = $s(),
      t = new URL(e.TOKEN_URL),
      n = [`${e.BASE_API_URL}/api/hello`, `${t.origin}/v1/oauth/hello`],
      r = async (i) => {
        try {
          let a = await po.get(i, {
            headers: {
              "User-Agent": m7(),
            },
          });
          if (a.status !== 200)
            return {
              success: false,
              error: `Failed to connect to ${new URL(i).hostname}: Status ${a.status}`,
            };
          return {
            success: true,
          };
        } catch (a) {
          let l = new URL(i).hostname,
            c = dLe(a);
          return {
            success: false,
            error: `Failed to connect to ${l}: ${a instanceof Error ? a.code || a.message : String(a)}`,
            sslHint: c ?? void 0,
          };
        }
      },
      s = (await Promise.all(n.map(r))).find((i) => !i.success);
    if (s)
      G("tengu_preflight_check_failed", {
        isConnectivityError: false,
        hasErrorMessage: !!s.error,
        isSSLError: !!s.sslHint,
      });
    return (
      s || {
        success: true,
      }
    );
  } catch (e) {
    return (
      ke(e),
      G("tengu_preflight_check_failed", {
        isConnectivityError: true,
      }),
      {
        success: false,
        error: `Connectivity check error: ${e instanceof Error ? e.code || e.message : String(e)}`,
      }
    );
  }
}
function PreflightStep(t0) {
  let t = kMc.c(14),
    { onSuccess: n } = t0,
    [r, o] = Svt.useState(null),
    [s, i] = Svt.useState(true),
    a = Pd(1000) && s,
    l,
    c;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((l = () => {
      (async function () {
        let h = await checkEndpoints();
        (o(h), i(false));
      })();
    }),
      (c = []),
      (t[0] = l),
      (t[1] = c));
  else ((l = t[0]), (c = t[1]));
  Svt.useEffect(l, c);
  let u;
  if (t[2] !== n || t[3] !== r?.success)
    ((u = () => {
      if (r?.success) n();
    }),
      (t[2] = n),
      (t[3] = r?.success),
      (t[4] = u));
  else u = t[4];
  let d;
  if (t[5] !== n || t[6] !== r) ((d = [r, n]), (t[5] = n), (t[6] = r), (t[7] = d));
  else d = t[7];
  (Svt.useEffect(u, d), Pd(zIm, r && !r.success ? 100 : null));
  let p;
  if (t[8] !== s || t[9] !== r || t[10] !== a)
    ((p =
      s && a
        ? E2.jsxs(U, {
            paddingLeft: 1,
            children: [
              E2.jsx(Vu, {}),
              E2.jsx(w, {
                children: "Checking connectivity...",
              }),
            ],
          })
        : !r?.success &&
          !s &&
          E2.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              E2.jsx(w, {
                color: "error",
                children: "Unable to connect to Anthropic services",
              }),
              E2.jsx(w, {
                color: "error",
                children: r?.error,
              }),
              r?.sslHint
                ? E2.jsxs(U, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                      E2.jsx(w, {
                        children: r.sslHint,
                      }),
                      E2.jsx(w, {
                        color: "suggestion",
                        children: "See https://code.claude.com/docs/en/network-config",
                      }),
                    ],
                  })
                : E2.jsxs(U, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                      E2.jsx(w, {
                        children: "Please check your internet connection and network settings.",
                      }),
                      E2.jsxs(w, {
                        children: [
                          "Note: Claude Code might not be available in your country. Check supported countries at",
                          " ",
                          E2.jsx(w, {
                            color: "suggestion",
                            children: "https://anthropic.com/supported-countries",
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          })),
      (t[8] = s),
      (t[9] = r),
      (t[10] = a),
      (t[11] = p));
  else p = t[11];
  let f;
  if (t[12] !== p)
    ((f = E2.jsx(U, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1,
      children: p,
    })),
      (t[12] = p),
      (t[13] = f));
  else f = t[13];
  return f;
}
function zIm() {
  (sv("preflight_endpoint"), process.exit(1));
}
var kMc, Svt, E2;
