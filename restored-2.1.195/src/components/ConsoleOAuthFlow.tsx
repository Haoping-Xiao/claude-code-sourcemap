// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K9e
// matched 2.1.88 source: src/components/ConsoleOAuthFlow.tsx
// class=modified  jaccard=0.2302  score=0.3454  fileCov=0.4083
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: ConsoleOAuthFlow
// [unwrapped __esm module K9e] deps: utils/process.ts, commander/lib/command.js
((vQa = require("child_process")),
  (wQa = require("fs")),
  (CQa = require("os")),
  (IQa = require("tty")));
function ConsoleOAuthFlow({
  onDone: e,
  onAuthSuccess: t,
  startingMessage: n,
  mode: r = "login",
  forceLoginMethod: o,
  urlOutdent: s = 0,
}) {
  let a = (YE() ? gbe : 0) + s,
    l = jo() || {},
    c = yn("policySettings"),
    u = Bet($he()),
    d = u && c?.forceLoginMethod === "gateway",
    p = u ? c?.forceLoginGatewayUrl : void 0,
    f = l.forceLoginMethod === "gateway" && !d ? void 0 : l.forceLoginMethod,
    m = o ?? f,
    g = m === "gateway" || p !== void 0,
    h =
      m === "claudeai"
        ? "Login method pre-selected: Subscription Plan (Claude Pro/Max)"
        : m === "console"
          ? "Login method pre-selected: API usage billing (Anthropic Console)"
          : null,
    y = null,
    b = Z7(),
    _ = ks(),
    [S, A] = k$.useState(() => {
      if (r === "setup-token")
        return {
          state: "ready_to_start",
        };
      if (m === "claudeai" || m === "console")
        return {
          state: "ready_to_start",
        };
      if (g)
        return {
          state: "gateway_setup",
        };
      return {
        state: "idle",
      };
    }),
    [v, C] = k$.useState(""),
    [x, I] = k$.useState(0),
    [k] = k$.useState(() => new I6()),
    [D, P] = k$.useState(() => r === "setup-token" || m === "claudeai"),
    O = l.forceLoginMethod !== void 0 && D !== (l.forceLoginMethod === "claudeai"),
    L = typeof l.forceLoginOrgUUID === "string" && !O ? l.forceLoginOrgUUID : void 0,
    [M, N] = k$.useState(false),
    [B, $] = k$.useState(false),
    q = br().columns - PASTE_HERE_MSG.length - 1;
  (k$.useEffect(() => {
    if (m === "claudeai") G("tengu_oauth_claudeai_forced", {});
    else if (m === "console") G("tengu_oauth_console_forced", {});
    else if (g && true && r !== "setup-token") G("tengu_oauth_gateway_forced", {});
  }, [m, g, r]),
    Pd(
      () => {
        if (S.state === "about_to_retry") A(S.nextState);
      },
      S.state === "about_to_retry" ? 1000 : null,
      [S],
    ),
    $r(
      "confirm:yes",
      () => {
        (G(S.state === "gateway_done" ? "tengu_oauth_gateway_done" : "tengu_oauth_success", {
          loginWithClaudeAi: D,
        }),
          e());
      },
      {
        context: "Confirmation",
        isActive: (S.state === "success" && r !== "setup-token") || S.state === "gateway_done",
      },
    ));
  let W = TW();
  ($r(
    "confirm:yes",
    () => {
      (gn((K) => ({
        ...K,
        hasCompletedOnboarding: true,
        lastOnboardingVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION,
      })),
        W.exit(),
        Promise.resolve()
          .then(() => (K9e(), z9e))
          .then((K) => K.execRelaunch()));
    },
    {
      context: "Confirmation",
      isActive: S.state === "bedrock_done" || S.state === "vertex_done",
    },
  ),
    $r(
      "confirm:yes",
      () =>
        A({
          state: "platform_setup",
        }),
      {
        context: "Confirmation",
        isActive: S.state === "aws_refresh_done",
      },
    ),
    $r(
      "confirm:yes",
      () => {
        if (S.state === "error" && S.toRetry)
          (C(""),
            A({
              state: "about_to_retry",
              nextState: S.toRetry,
            }));
      },
      {
        context: "Confirmation",
        isActive: S.state === "error" && !!S.toRetry,
      },
    ),
    k$.useEffect(() => {
      if (v === "c" && S.state === "waiting_for_login" && M && !B)
        (AI(S.url).then((K) => {
          if (K) process.stdout.write(K);
          ($(true), _.setTimeout(() => $(false), 2000));
        }),
          C(""));
    }, [v, S, M, B, _]));
  async function V(K, Z) {
    try {
      let [J, ne] = K.split("#");
      if (!J || !ne) {
        A({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: {
            state: "waiting_for_login",
            url: Z,
          },
        });
        return;
      }
      (G("tengu_oauth_manual_entry", {}),
        k.handleManualAuthCodeInput({
          authorizationCode: J,
          state: ne,
        }));
    } catch (J) {
      (ke(J),
        A({
          state: "error",
          message: be(J),
          toRetry: {
            state: "waiting_for_login",
            url: Z,
          },
        }));
    }
  }
  let Y = k$.useCallback(async () => {
      try {
        G("tengu_oauth_flow_start", {
          loginWithClaudeAi: D,
        });
        let K = await k
          .startOAuthFlow(
            async (Z) => {
              (A({
                state: "waiting_for_login",
                url: Z,
              }),
                _.setTimeout(() => N(true), 3000));
            },
            {
              loginWithClaudeAi: D,
              inferenceOnly: r === "setup-token",
              expiresIn: r === "setup-token" ? lFe : void 0,
              orgUUID: L,
            },
          )
          .catch((Z) => {
            let J = Z.message.includes("Token exchange failed"),
              ne = dLe(Z);
            throw (
              A({
                state: "error",
                message:
                  ne ??
                  (J
                    ? "Failed to exchange authorization code for access token. Please try again."
                    : Z.message),
                toRetry:
                  r === "setup-token"
                    ? {
                        state: "ready_to_start",
                      }
                    : {
                        state: "idle",
                      },
              }),
              G("tengu_oauth_token_exchange_error", {
                ...LM(Z),
                ssl_error: ne !== null,
              }),
              Z
            );
          });
        if (r === "setup-token")
          (A({
            state: "success",
            token: K.accessToken,
          }),
            t?.());
        else {
          await P9e(K);
          let Z = await Wle();
          if (!Z.valid) throw Error(Z.message);
          (A({
            state: "success",
          }),
            t?.(),
            bpe(
              {
                message: "Claude Code login successful",
                notificationType: "auth_success",
              },
              b,
            ));
        }
      } catch (K) {
        let Z = be(K),
          J = dLe(K);
        (A({
          state: "error",
          message: J ?? Z,
          toRetry: {
            state: r === "setup-token" ? "ready_to_start" : "idle",
          },
        }),
          G("tengu_oauth_error", {
            ...LM(K),
            ssl_error: J !== null,
          }));
      }
    }, [k, D, r, L, b, _, t]),
    z = k$.useRef(false);
  return (
    k$.useEffect(() => {
      if (S.state === "ready_to_start" && !z.current)
        ((z.current = true),
          process.nextTick(
            (K, Z) => {
              K().finally(() => {
                Z.current = false;
              });
            },
            Y,
            z,
          ));
    }, [S.state, Y]),
    Pd(
      () => {
        (G("tengu_oauth_success", {
          loginWithClaudeAi: D,
        }),
          e());
      },
      r === "setup-token" && S.state === "success" ? 500 : null,
      [r, S, D, e],
    ),
    k$.useEffect(
      () => () => {
        k.cleanup();
      },
      [k],
    ),
    Ai.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        S.state === "waiting_for_login" &&
          M &&
          Ai.jsxs(
            U,
            {
              flexDirection: "column",
              gap: 1,
              paddingBottom: 1,
              children: [
                Ai.jsxs(U, {
                  children: [
                    Ai.jsxs(w, {
                      dimColor: true,
                      children: ["Browser didn't open? Use the url below to sign in", " "],
                    }),
                    B
                      ? Ai.jsx(w, {
                          color: "success",
                          children: "(Copied!)",
                        })
                      : Ai.jsx(w, {
                          dimColor: true,
                          children: Ai.jsx(ht, {
                            chord: "c",
                            action: "copy",
                            parens: true,
                          }),
                        }),
                  ],
                }),
                Ai.jsx(U, {
                  marginX: a ? -a : void 0,
                  children: Ai.jsx(xs, {
                    url: S.url,
                    children: Ai.jsx(w, {
                      dimColor: true,
                      children: S.url,
                    }),
                  }),
                }),
              ],
            },
            "urlToCopy",
          ),
        r === "setup-token" &&
          S.state === "success" &&
          S.token &&
          Ai.jsxs(
            U,
            {
              flexDirection: "column",
              gap: 1,
              paddingTop: 1,
              children: [
                Ai.jsx(w, {
                  color: "success",
                  children: "\u2713 Long-lived authentication token created successfully!",
                }),
                Ai.jsxs(U, {
                  flexDirection: "column",
                  gap: 1,
                  children: [
                    Ai.jsx(w, {
                      children: "Your OAuth token (valid for 1 year):",
                    }),
                    Ai.jsx(w, {
                      color: "warning",
                      children: S.token,
                    }),
                    Ai.jsx(w, {
                      dimColor: true,
                      children: "Store this token securely. You won't be able to see it again.",
                    }),
                    Ai.jsx(w, {
                      dimColor: true,
                      children: "Use this token by setting: export CLAUDE_CODE_OAUTH_TOKEN=<token>",
                    }),
                  ],
                }),
              ],
            },
            "tokenOutput",
          ),
        Ai.jsx(U, {
          flexDirection: "column",
          gap: 1,
          children: Ai.jsx(OAuthStatusMessage, {
            oauthStatus: S,
            mode: r,
            startingMessage: n,
            forcedMethodMessage: h,
            gatewayUnsupportedWarning: null,
            forceLoginGatewayUrl: p,
            gatewayScreenLocked: m === "gateway",
            showPastePrompt: M,
            pastedCode: v,
            setPastedCode: C,
            cursorOffset: x,
            setCursorOffset: I,
            textInputColumns: q,
            handleSubmitCode: V,
            setOAuthStatus: A,
            setLoginWithClaudeAi: P,
            onAuthSuccess: t,
          }),
        }),
      ],
    })
  );
}
function qJp(e) {
  let t = rTo.c(4),
    { onComplete: n } = e,
    r;
  if (t[0] !== n)
    ((r = () => {
      let i = q4e();
      if (!i) {
        n(false);
        return;
      }
      if (u1t() && !ad()) {
        n(false);
        return;
      }
      let a = new AbortController();
      return (
        GCn(i, a.signal).then((l) => {
          if (a.signal.aborted) return;
          if (l) (Fle(), Kot());
          n(l);
        }),
        () => a.abort()
      );
    }),
      (t[0] = n),
      (t[1] = r));
  else r = t[1];
  let o;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((o = []), (t[2] = o));
  else o = t[2];
  k$.useEffect(r, o);
  let s;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((s = Ai.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        Ai.jsxs(U, {
          children: [
            Ai.jsx(Vu, {}),
            Ai.jsx(w, {
              children: "Running awsAuthRefresh\u2026",
            }),
          ],
        }),
        Ai.jsx(A9n, {}),
      ],
    })),
      (t[3] = s));
  else s = t[3];
  return s;
}
function OAuthStatusMessage(t0) {
  let t = rTo.c(85),
    {
      oauthStatus: n,
      mode: r,
      startingMessage: o,
      forcedMethodMessage: s,
      gatewayUnsupportedWarning: i,
      forceLoginGatewayUrl: a,
      gatewayScreenLocked: l,
      showPastePrompt: c,
      pastedCode: u,
      setPastedCode: d,
      cursorOffset: p,
      setCursorOffset: f,
      textInputColumns: m,
      handleSubmitCode: g,
      setOAuthStatus: h,
      setLoginWithClaudeAi: y,
      onAuthSuccess: b,
    } = t0;
  switch (n.state) {
    case "idle": {
      let _ = o
          ? o
          : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.",
        S;
      if (t[0] !== _)
        ((S = Ai.jsx(w, {
          bold: true,
          children: _,
        })),
          (t[0] = _),
          (t[1] = S));
      else S = t[1];
      let A;
      if (t[2] !== i)
        ((A =
          i &&
          Ai.jsx(w, {
            color: "warning",
            children: i,
          })),
          (t[2] = i),
          (t[3] = A));
      else A = t[3];
      let v;
      if (t[4] === Symbol.for("react.memo_cache_sentinel"))
        ((v = Ai.jsx(w, {
          children: "Select login method:",
        })),
          (t[4] = v));
      else v = t[4];
      let C;
      if (t[5] === Symbol.for("react.memo_cache_sentinel"))
        ((C = {
          label: Ai.jsxs(w, {
            children: [
              "Claude account with subscription \xB7",
              " ",
              Ai.jsx(w, {
                dimColor: true,
                children: "Pro, Max, Team, or Enterprise",
              }),
              false,
            ],
          }),
          value: "claudeai",
        }),
          (t[5] = C));
      else C = t[5];
      let x;
      if (t[6] === Symbol.for("react.memo_cache_sentinel"))
        ((x = {
          label: Ai.jsxs(w, {
            children: [
              "Anthropic Console account \xB7",
              " ",
              Ai.jsx(w, {
                dimColor: true,
                children: "API usage billing",
              }),
            ],
          }),
          value: "console",
        }),
          (t[6] = x));
      else x = t[6];
      let I;
      if (t[7] === Symbol.for("react.memo_cache_sentinel"))
        ((I = [
          C,
          x,
          {
            label: Ai.jsxs(w, {
              children: [
                "3rd-party platform \xB7",
                " ",
                Ai.jsx(w, {
                  dimColor: true,
                  children: "Amazon Bedrock, Microsoft Foundry, or Vertex AI",
                }),
              ],
            }),
            value: "platform",
          },
        ]),
          (t[7] = I));
      else I = t[7];
      let k;
      if (t[8] !== y || t[9] !== h)
        ((k = Ai.jsx(U, {
          children: Ai.jsx(Sr, {
            options: I,
            onChange: (P) => {
              if (P === "platform")
                (G("tengu_oauth_platform_selected", {}),
                  h({
                    state: "platform_setup",
                  }));
              else if (
                (h({
                  state: "ready_to_start",
                }),
                P === "claudeai")
              )
                (G("tengu_oauth_claudeai_selected", {}), y(true));
              else (G("tengu_oauth_console_selected", {}), y(false));
            },
          }),
        })),
          (t[8] = y),
          (t[9] = h),
          (t[10] = k));
      else k = t[10];
      let D;
      if (t[11] !== S || t[12] !== A || t[13] !== k)
        ((D = Ai.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [S, A, v, k],
        })),
          (t[11] = S),
          (t[12] = A),
          (t[13] = k),
          (t[14] = D));
      else D = t[14];
      return D;
    }
    case "gateway_setup": {
      {
        let _;
        if (t[15] !== b || t[16] !== h)
          ((_ = () => {
            (b?.(),
              h({
                state: "gateway_done",
              }));
          }),
            (t[15] = b),
            (t[16] = h),
            (t[17] = _));
        else _ = t[17];
        let S;
        if (t[18] !== h)
          ((S = () =>
            h({
              state: "idle",
            })),
            (t[18] = h),
            (t[19] = S));
        else S = t[19];
        let A;
        if (t[20] !== a || t[21] !== l || t[22] !== _ || t[23] !== S)
          ((A = Ai.jsx(KJa, {
            initialUrl: a,
            screenLocked: l,
            onDone: _,
            onCancel: S,
          })),
            (t[20] = a),
            (t[21] = l),
            (t[22] = _),
            (t[23] = S),
            (t[24] = A));
        else A = t[24];
        return A;
      }
      return null;
    }
    case "gateway_done": {
      let _;
      if (t[25] === Symbol.for("react.memo_cache_sentinel"))
        ((_ = Ai.jsx(w, {
          color: "success",
          children: "Connected to Cloud gateway.",
        })),
          (t[25] = _));
      else _ = t[25];
      let S;
      if (t[26] === Symbol.for("react.memo_cache_sentinel"))
        ((S = Ai.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          marginTop: 1,
          children: [
            _,
            Ai.jsxs(w, {
              dimColor: true,
              children: [
                "Press ",
                Ai.jsx(w, {
                  bold: true,
                  children: "Enter",
                }),
                " to continue.",
              ],
            }),
          ],
        })),
          (t[26] = S));
      else S = t[26];
      return S;
    }
    case "platform_setup": {
      let _;
      if (t[27] === Symbol.for("react.memo_cache_sentinel")) ((_ = q4e()), (t[27] = _));
      else _ = t[27];
      let S = _,
        A;
      if (t[28] === Symbol.for("react.memo_cache_sentinel"))
        ((A = Ai.jsx(w, {
          bold: true,
          children: "Using 3rd-party platforms",
        })),
          (t[28] = A));
      else A = t[28];
      let v, C;
      if (t[29] === Symbol.for("react.memo_cache_sentinel"))
        ((v = {
          label: Ai.jsxs(w, {
            children: [
              "Amazon Bedrock \xB7 ",
              Ai.jsx(w, {
                dimColor: true,
                children: "interactive setup",
              }),
            ],
          }),
          value: "bedrock",
        }),
          (C = S
            ? [
                {
                  label: Ai.jsxs(w, {
                    children: [
                      "Claude Platform on AWS \xB7",
                      " ",
                      Ai.jsx(w, {
                        dimColor: true,
                        children: "refresh credentials",
                      }),
                    ],
                  }),
                  value: "aws_refresh",
                },
              ]
            : []),
          (t[29] = v),
          (t[30] = C));
      else ((v = t[29]), (C = t[30]));
      let x;
      if (t[31] === Symbol.for("react.memo_cache_sentinel"))
        ((x = {
          label: Ai.jsxs(w, {
            children: [
              "Microsoft Foundry \xB7 ",
              Ai.jsx(w, {
                dimColor: true,
                children: "opens docs",
              }),
            ],
          }),
          value: "foundry",
        }),
          (t[31] = x));
      else x = t[31];
      let I;
      if (t[32] === Symbol.for("react.memo_cache_sentinel"))
        ((I = [
          v,
          ...C,
          x,
          {
            label: Ai.jsxs(w, {
              children: [
                "Google Vertex AI \xB7 ",
                Ai.jsx(w, {
                  dimColor: true,
                  children: "interactive setup",
                }),
              ],
            }),
            value: "vertex",
          },
          {
            label: "Go back",
            value: "back",
          },
        ]),
          (t[32] = I));
      else I = t[32];
      let k;
      if (t[33] !== h)
        ((k = Ai.jsx(Sr, {
          options: I,
          onChange: (O) => {
            e: switch (O) {
              case "bedrock": {
                (G("tengu_oauth_bedrock_wizard_launched", {}),
                  h({
                    state: "bedrock_wizard",
                  }));
                break e;
              }
              case "aws_refresh": {
                (G("tengu_oauth_aws_refresh_launched", {}),
                  h({
                    state: "aws_refresh_running",
                  }));
                break e;
              }
              case "foundry": {
                (G("tengu_oauth_platform_docs_opened", {
                  platform: We("foundry"),
                }),
                  ac("https://code.claude.com/docs/en/microsoft-foundry"),
                  h({
                    state: "idle",
                  }));
                break e;
              }
              case "vertex": {
                (G("tengu_oauth_vertex_wizard_launched", {}),
                  h({
                    state: "vertex_wizard",
                  }));
                break e;
              }
              default:
                h({
                  state: "idle",
                });
            }
          },
          onCancel: () =>
            h({
              state: "idle",
            }),
        })),
          (t[33] = h),
          (t[34] = k));
      else k = t[34];
      let D;
      if (t[35] === Symbol.for("react.memo_cache_sentinel"))
        ((D = Ai.jsxs(w, {
          dimColor: true,
          children: [
            "Foundry: ",
            Ai.jsx(xs, {
              url: "https://code.claude.com/docs/en/microsoft-foundry",
              children: "https://code.claude.com/docs/en/microsoft-foundry",
            }),
          ],
        })),
          (t[35] = D));
      else D = t[35];
      let P;
      if (t[36] !== k)
        ((P = Ai.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [A, k, D],
        })),
          (t[36] = k),
          (t[37] = P));
      else P = t[37];
      return P;
    }
    case "aws_refresh_running": {
      let _;
      if (t[38] !== h)
        ((_ = Ai.jsx(qJp, {
          onComplete: (S) =>
            h({
              state: "aws_refresh_done",
              ok: S,
            }),
        })),
          (t[38] = h),
          (t[39] = _));
      else _ = t[39];
      return _;
    }
    case "aws_refresh_done": {
      let _;
      if (t[40] !== n.ok)
        ((_ = n.ok
          ? Ai.jsx(w, {
              color: "success",
              children: "AWS credentials refreshed.",
            })
          : Ai.jsx(w, {
              color: "error",
              children:
                "awsAuthRefresh failed. Check the command in your settings and try running it in a separate terminal.",
            })),
          (t[40] = n.ok),
          (t[41] = _));
      else _ = t[41];
      let S;
      if (t[42] === Symbol.for("react.memo_cache_sentinel"))
        ((S = Ai.jsxs(w, {
          dimColor: true,
          children: [
            "Press ",
            Ai.jsx(w, {
              bold: true,
              children: "Enter",
            }),
            " to continue.",
          ],
        })),
          (t[42] = S));
      else S = t[42];
      let A;
      if (t[43] !== _)
        ((A = Ai.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [_, S],
        })),
          (t[43] = _),
          (t[44] = A));
      else A = t[44];
      return A;
    }
    case "bedrock_wizard": {
      let _;
      if (t[45] !== h)
        ((_ = Ai.jsx(J9n, {
          onComplete: (S) =>
            h({
              state: "bedrock_done",
              message: S,
            }),
          onCancel: () =>
            h({
              state: "platform_setup",
            }),
        })),
          (t[45] = h),
          (t[46] = _));
      else _ = t[46];
      return _;
    }
    case "bedrock_done":
    case "vertex_done": {
      let _;
      if (t[47] !== n.message)
        ((_ = Ai.jsx(w, {
          color: "success",
          children: n.message,
        })),
          (t[47] = n.message),
          (t[48] = _));
      else _ = t[48];
      let S;
      if (t[49] === Symbol.for("react.memo_cache_sentinel"))
        ((S = Ai.jsxs(w, {
          dimColor: true,
          children: [
            "Press ",
            Ai.jsx(w, {
              bold: true,
              children: "Enter",
            }),
            " to restart Claude Code.",
          ],
        })),
          (t[49] = S));
      else S = t[49];
      let A;
      if (t[50] !== _)
        ((A = Ai.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [_, S],
        })),
          (t[50] = _),
          (t[51] = A));
      else A = t[51];
      return A;
    }
    case "vertex_wizard": {
      let _;
      if (t[52] !== h)
        ((_ = Ai.jsx(o8n, {
          onComplete: (S) =>
            h({
              state: "vertex_done",
              message: S,
            }),
          onCancel: () =>
            h({
              state: "platform_setup",
            }),
        })),
          (t[52] = h),
          (t[53] = _));
      else _ = t[53];
      return _;
    }
    case "waiting_for_login": {
      let _;
      if (t[54] !== s)
        ((_ =
          s &&
          Ai.jsx(U, {
            children: Ai.jsx(w, {
              dimColor: true,
              children: s,
            }),
          })),
          (t[54] = s),
          (t[55] = _));
      else _ = t[55];
      let S;
      if (t[56] !== c)
        ((S =
          !c &&
          Ai.jsxs(U, {
            children: [
              Ai.jsx(Vu, {}),
              Ai.jsx(w, {
                children: "Opening browser to sign in\u2026",
              }),
            ],
          })),
          (t[56] = c),
          (t[57] = S));
      else S = t[57];
      let A;
      if (
        t[58] !== p ||
        t[59] !== g ||
        t[60] !== n.url ||
        t[61] !== u ||
        t[62] !== f ||
        t[63] !== d ||
        t[64] !== c ||
        t[65] !== m
      )
        ((A =
          c &&
          Ai.jsxs(U, {
            children: [
              Ai.jsx(w, {
                children: PASTE_HERE_MSG,
              }),
              Ai.jsx(Ta, {
                value: u,
                onChange: d,
                onSubmit: (C) => g(C, n.url),
                cursorOffset: p,
                onChangeCursorOffset: f,
                columns: m,
                mask: "*",
              }),
            ],
          })),
          (t[58] = p),
          (t[59] = g),
          (t[60] = n.url),
          (t[61] = u),
          (t[62] = f),
          (t[63] = d),
          (t[64] = c),
          (t[65] = m),
          (t[66] = A));
      else A = t[66];
      let v;
      if (t[67] !== _ || t[68] !== S || t[69] !== A)
        ((v = Ai.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [_, S, A],
        })),
          (t[67] = _),
          (t[68] = S),
          (t[69] = A),
          (t[70] = v));
      else v = t[70];
      return v;
    }
    case "creating_api_key": {
      let _;
      if (t[71] === Symbol.for("react.memo_cache_sentinel"))
        ((_ = Ai.jsx(U, {
          flexDirection: "column",
          gap: 1,
          children: Ai.jsxs(U, {
            children: [
              Ai.jsx(Vu, {}),
              Ai.jsx(w, {
                children: "Creating API key for Claude Code\u2026",
              }),
            ],
          }),
        })),
          (t[71] = _));
      else _ = t[71];
      return _;
    }
    case "about_to_retry": {
      let _;
      if (t[72] === Symbol.for("react.memo_cache_sentinel"))
        ((_ = Ai.jsx(U, {
          flexDirection: "column",
          gap: 1,
          children: Ai.jsx(w, {
            color: "permission",
            children: "Retrying\u2026",
          }),
        })),
          (t[72] = _));
      else _ = t[72];
      return _;
    }
    case "success": {
      let _;
      if (t[73] !== r || t[74] !== n.token)
        ((_ =
          r === "setup-token" && n.token
            ? null
            : Ai.jsxs(Ai.Fragment, {
                children: [
                  Lc()?.emailAddress
                    ? Ai.jsxs(w, {
                        dimColor: true,
                        children: [
                          "Logged in as",
                          " ",
                          Ai.jsx(w, {
                            children: Lc()?.emailAddress,
                          }),
                        ],
                      })
                    : null,
                  Ai.jsxs(w, {
                    color: "success",
                    children: [
                      "Login successful. Press ",
                      Ai.jsx(w, {
                        bold: true,
                        children: "Enter",
                      }),
                      " to continue\u2026",
                    ],
                  }),
                ],
              })),
          (t[73] = r),
          (t[74] = n.token),
          (t[75] = _));
      else _ = t[75];
      let S;
      if (t[76] !== _)
        ((S = Ai.jsx(U, {
          flexDirection: "column",
          children: _,
        })),
          (t[76] = _),
          (t[77] = S));
      else S = t[77];
      return S;
    }
    case "error": {
      let _;
      if (t[78] !== n.message)
        ((_ = Ai.jsxs(w, {
          color: "error",
          children: ["OAuth error: ", n.message],
        })),
          (t[78] = n.message),
          (t[79] = _));
      else _ = t[79];
      let S;
      if (t[80] !== n.toRetry)
        ((S =
          n.toRetry &&
          Ai.jsx(U, {
            marginTop: 1,
            children: Ai.jsxs(w, {
              color: "permission",
              children: [
                "Press ",
                Ai.jsx(w, {
                  bold: true,
                  children: "Enter",
                }),
                " to retry.",
              ],
            }),
          })),
          (t[80] = n.toRetry),
          (t[81] = S));
      else S = t[81];
      let A;
      if (t[82] !== _ || t[83] !== S)
        ((A = Ai.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [_, S],
        })),
          (t[82] = _),
          (t[83] = S),
          (t[84] = A));
      else A = t[84];
      return A;
    }
    default:
      return null;
  }
}
var rTo,
  k$,
  Ai,
  PASTE_HERE_MSG = "Paste code here if prompted > ";
