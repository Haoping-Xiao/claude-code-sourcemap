// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iFl
// matched 2.1.88 source: src/services/mcp/auth.ts
// class=modified (alt of src/services/mcp/auth.ts)  jaccard=0.009  score=0.0496  fileCov=0.0109
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iFl] deps: si, Ye, ps
((oFl = R(lt(), 1)), (mR = R(se(), 1)));
function cFl({ onSuccess: e, onCancel: t }) {
  let [n, r] = ZF.useState({
      state: "starting",
    }),
    [o] = ZF.useState(() => new I6()),
    [s, i] = ZF.useState(""),
    [a, l] = ZF.useState(0),
    [c, u] = ZF.useState(false),
    [d, p] = ZF.useState(false),
    f = ks(),
    m = ZF.useRef(new Set()),
    g = ZF.useRef(void 0),
    h = br(),
    y = Math.max(50, h.columns - lFl.length - 4);
  function b(A) {
    if (n.state !== "error") return;
    if ((A.preventDefault(), A.key === "return" && n.toRetry))
      (i(""),
        l(0),
        r({
          state: "about_to_retry",
          nextState: n.toRetry,
        }));
    else t();
  }
  async function _(A, v) {
    try {
      let [C, x] = A.split("#");
      if (!C || !x) {
        r({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: {
            state: "waiting_for_login",
            url: v,
          },
        });
        return;
      }
      (G("tengu_oauth_manual_entry", {}),
        o.handleManualAuthCodeInput({
          authorizationCode: C,
          state: x,
        }));
    } catch (C) {
      (ke(C),
        r({
          state: "error",
          message: be(C),
          toRetry: {
            state: "waiting_for_login",
            url: v,
          },
        }));
    }
  }
  let S = ZF.useCallback(async () => {
    (m.current.forEach((A) => A()), m.current.clear());
    try {
      let A = await o.startOAuthFlow(
        async (v) => {
          (r({
            state: "waiting_for_login",
            url: v,
          }),
            m.current.add(f.setTimeout(() => u(true), 3000)));
        },
        {
          loginWithClaudeAi: true,
          inferenceOnly: true,
          expiresIn: lFe,
        },
      );
      (r({
        state: "processing",
      }),
        await jle(A),
        m.current.add(
          f.setTimeout(() => {
            (r({
              state: "success",
              token: A.accessToken,
            }),
              m.current.add(f.setTimeout(() => e(A.accessToken), 1000)));
          }, 100),
        ));
    } catch (A) {
      let v = be(A);
      (r({
        state: "error",
        message: v,
        toRetry: {
          state: "starting",
        },
      }),
        T(`OAuth flow failed in install-github-app: ${v}`, {
          level: "error",
        }),
        G("tengu_oauth_error", {
          ...LM(A),
        }));
    }
  }, [f, o, e]);
  return (
    ZF.useEffect(() => {
      if (n.state === "starting") S();
    }, [n.state, S]),
    Pd(
      () => {
        if (n.state === "about_to_retry")
          (u(n.nextState.state === "waiting_for_login"), r(n.nextState));
      },
      n.state === "about_to_retry" ? 500 : null,
    ),
    ZF.useEffect(() => {
      if (s === "c" && n.state === "waiting_for_login" && c && !d)
        (AI(n.url).then((A) => {
          if (A) process.stdout.write(A);
          (p(true), g.current?.(), (g.current = f.setTimeout(() => p(false), 2000)));
        }),
          i(""));
    }, [f, s, n, c, d]),
    ZF.useEffect(() => {
      let A = m.current;
      return () => {
        (o.cleanup(), A.forEach((v) => v()), A.clear(), g.current?.());
      };
    }, [o]),
    ry.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: b,
      children: [
        n.state === "starting" &&
          ry.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            paddingBottom: 1,
            children: [
              ry.jsx(w, {
                bold: true,
                children: "Create Authentication Token",
              }),
              ry.jsx(w, {
                dimColor: true,
                children: "Creating a long-lived token for GitHub Actions",
              }),
            ],
          }),
        n.state !== "success" &&
          n.state !== "starting" &&
          n.state !== "processing" &&
          ry.jsxs(
            U,
            {
              flexDirection: "column",
              gap: 1,
              paddingBottom: 1,
              children: [
                ry.jsx(w, {
                  bold: true,
                  children: "Create Authentication Token",
                }),
                ry.jsx(w, {
                  dimColor: true,
                  children: "Creating a long-lived token for GitHub Actions",
                }),
              ],
            },
            "header",
          ),
        n.state === "waiting_for_login" &&
          c &&
          ry.jsxs(
            U,
            {
              flexDirection: "column",
              gap: 1,
              paddingBottom: 1,
              children: [
                ry.jsxs(U, {
                  paddingX: 1,
                  children: [
                    ry.jsxs(w, {
                      dimColor: true,
                      children: ["Browser didn't open? Use the url below to sign in", " "],
                    }),
                    d
                      ? ry.jsx(w, {
                          color: "success",
                          children: "(Copied!)",
                        })
                      : ry.jsx(w, {
                          dimColor: true,
                          children: ry.jsx(ht, {
                            chord: "c",
                            action: "copy",
                            parens: true,
                          }),
                        }),
                  ],
                }),
                ry.jsx(xs, {
                  url: n.url,
                  children: ry.jsx(w, {
                    dimColor: true,
                    children: n.url,
                  }),
                }),
              ],
            },
            "urlToCopy",
          ),
        ry.jsx(U, {
          paddingLeft: 1,
          flexDirection: "column",
          gap: 1,
          children: ry.jsx(performMCPOAuthFlow, {
            oauthStatus: n,
            showPastePrompt: c,
            pastedCode: s,
            setPastedCode: i,
            cursorOffset: a,
            setCursorOffset: l,
            textInputColumns: y,
            onSubmitCode: _,
          }),
        }),
      ],
    })
  );
}
function performMCPOAuthFlow(serverName) {
  let t = aFl.c(25),
    {
      oauthStatus: n,
      showPastePrompt: r,
      pastedCode: o,
      setPastedCode: s,
      cursorOffset: i,
      setCursorOffset: a,
      textInputColumns: l,
      onSubmitCode: c,
    } = serverName;
  switch (n.state) {
    case "starting": {
      let u;
      if (t[0] === Symbol.for("react.memo_cache_sentinel"))
        ((u = ry.jsx(Vc, {
          message: "Starting authentication\u2026",
        })),
          (t[0] = u));
      else u = t[0];
      return u;
    }
    case "waiting_for_login": {
      let u;
      if (t[1] !== r)
        ((u =
          !r &&
          ry.jsx(Vc, {
            message: "Opening browser to sign in with your Claude account\u2026",
          })),
          (t[1] = r),
          (t[2] = u));
      else u = t[2];
      let d;
      if (
        t[3] !== i ||
        t[4] !== n.url ||
        t[5] !== c ||
        t[6] !== o ||
        t[7] !== a ||
        t[8] !== s ||
        t[9] !== r ||
        t[10] !== l
      )
        ((d =
          r &&
          ry.jsxs(U, {
            children: [
              ry.jsx(w, {
                children: lFl,
              }),
              ry.jsx(Ta, {
                value: o,
                onChange: s,
                onSubmit: (f) => c(f, n.url),
                cursorOffset: i,
                onChangeCursorOffset: a,
                columns: l,
              }),
            ],
          })),
          (t[3] = i),
          (t[4] = n.url),
          (t[5] = c),
          (t[6] = o),
          (t[7] = a),
          (t[8] = s),
          (t[9] = r),
          (t[10] = l),
          (t[11] = d));
      else d = t[11];
      let p;
      if (t[12] !== u || t[13] !== d)
        ((p = ry.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [u, d],
        })),
          (t[12] = u),
          (t[13] = d),
          (t[14] = p));
      else p = t[14];
      return p;
    }
    case "processing": {
      let u;
      if (t[15] === Symbol.for("react.memo_cache_sentinel"))
        ((u = ry.jsx(Vc, {
          message: "Processing authentication\u2026",
        })),
          (t[15] = u));
      else u = t[15];
      return u;
    }
    case "success": {
      let u;
      if (t[16] === Symbol.for("react.memo_cache_sentinel"))
        ((u = ry.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [
            ry.jsx(w, {
              color: "success",
              children: "\u2713 Authentication token created successfully!",
            }),
            ry.jsx(w, {
              dimColor: true,
              children: "Using token for GitHub Actions setup\u2026",
            }),
          ],
        })),
          (t[16] = u));
      else u = t[16];
      return u;
    }
    case "error": {
      let u;
      if (t[17] !== n.message)
        ((u = ry.jsxs(w, {
          color: "error",
          children: ["OAuth error: ", n.message],
        })),
          (t[17] = n.message),
          (t[18] = u));
      else u = t[18];
      let d;
      if (t[19] !== n.toRetry)
        ((d = n.toRetry
          ? ry.jsx(w, {
              dimColor: true,
              children: "Press Enter to try again, or any other key to cancel",
            })
          : ry.jsx(w, {
              dimColor: true,
              children: "Press any key to return to API key selection",
            })),
          (t[19] = n.toRetry),
          (t[20] = d));
      else d = t[20];
      let p;
      if (t[21] !== u || t[22] !== d)
        ((p = ry.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [u, d],
        })),
          (t[21] = u),
          (t[22] = d),
          (t[23] = p));
      else p = t[23];
      return p;
    }
    case "about_to_retry": {
      let u;
      if (t[24] === Symbol.for("react.memo_cache_sentinel"))
        ((u = ry.jsx(U, {
          flexDirection: "column",
          gap: 1,
          children: ry.jsx(w, {
            color: "permission",
            children: "Retrying\u2026",
          }),
        })),
          (t[24] = u));
      else u = t[24];
      return u;
    }
    default:
      return null;
  }
}
var aFl,
  ZF,
  ry,
  lFl = "Paste code here if prompted > ";
