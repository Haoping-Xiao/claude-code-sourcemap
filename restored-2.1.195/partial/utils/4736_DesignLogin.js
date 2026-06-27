// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gUl
// matched 2.1.88 source: src/commands/install-github-app/OAuthFlowStep.tsx
// class=partial  jaccard=0.166  score=0.2213  fileCov=0.3992
// note: low-confidence suggestion: src/commands/install-github-app/OAuthFlowStep.tsx; dir inferred from dep-graph -> utils; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var gUl = E(() => {
  xne();
  d1f = {
    name: "keybindings",
    description: "Open your keyboard shortcuts file",
    isEnabled: () => E8(),
    supportsNonInteractive: false,
    type: "local",
    load: () => Promise.resolve().then(() => (fUl(), pUl))
  }, mUl = d1f;
});
var bUl = {};
_t(bUl, {
  call: () => call,
  DesignLogin: () => DesignLogin
});
function DesignLogin({
  onDone: e
}) {
  let [t, n] = Y$.useState({
      state: "starting"
    }),
    [r] = Y$.useState(() => new I6()),
    [o, s] = Y$.useState(""),
    [i, a] = Y$.useState(0),
    [l, c] = Y$.useState(false),
    [u, d] = Y$.useState(false),
    p = ks(),
    f = Y$.useRef(new Set()),
    m = Y$.useRef(void 0),
    g = Y$.useRef(false),
    h = br(),
    y = Math.max(50, h.columns - yUl.length - 4);
  function b(v) {
    if (t.state === "success") {
      v.preventDefault(), e("Design-system access authorized.");
      return;
    }
    if (t.state !== "error") {
      if (v.key === "escape" || (v.ctrl || v.meta) && (v.key === "c" || v.key === "d")) v.preventDefault(), g.current = true, e("Design login cancelled.");
      return;
    }
    if (v.preventDefault(), v.key === "return" && t.toRetry) s(""), a(0), n({
      state: "about_to_retry",
      nextState: t.toRetry
    });else g.current = true, e("Design login cancelled.");
  }
  function _(v, C) {
    let [x, I] = v.split("#");
    if (!x || !I) {
      n({
        state: "error",
        message: "Invalid code. Please make sure the full code was copied",
        toRetry: {
          state: "waiting_for_login",
          url: C
        }
      }), T(`Design login: invalid pasted code for ${C}`);
      return;
    }
    G("tengu_design_oauth_manual_entry", {}), r.handleManualAuthCodeInput({
      authorizationCode: x,
      state: I
    });
  }
  let S = Y$.useCallback(async () => {
    if (f.current.forEach(v => v()), f.current.clear(), !Mzt()) {
      n({
        state: "error",
        message: "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client."
      });
      return;
    }
    try {
      let v = $s(),
        C = AXn(),
        x = await r.startOAuthFlow(async D => {
          n({
            state: "waiting_for_login",
            url: D
          }), f.current.add(p.setTimeout(() => c(true), 3000));
        }, {
          loginWithClaudeAi: true,
          oauthClient: {
            clientId: C,
            scopes: Hae
          },
          skipProfileFetch: true,
          successRedirectUrl: v.CLAUDEAI_SUCCESS_URL
        });
      if (g.current) {
        if (x.refreshToken) await t1(x.refreshToken, C);
        return;
      }
      n({
        state: "processing"
      });
      let I = await kRo(x, C);
      if (!I.ok) {
        n({
          state: "error",
          message: I.message,
          toRetry: {
            state: "starting"
          }
        });
        return;
      }
      if (g.current) {
        await t1(I.slot.refreshToken, I.slot.clientId);
        return;
      }
      let k = await SXn(I.slot);
      if (!k.success) {
        await t1(I.slot.refreshToken, I.slot.clientId), n({
          state: "error",
          message: k.warning ?? "Could not save the design credential to secure storage.",
          toRetry: {
            state: "starting"
          }
        });
        return;
      }
      G("tengu_design_oauth_login_success", {}), n({
        state: "success"
      }), f.current.add(p.setTimeout(() => e("Design-system access authorized."), 1500));
    } catch (v) {
      ke(v), G("tengu_design_oauth_login_error", {}), n({
        state: "error",
        message: be(v),
        toRetry: {
          state: "starting"
        }
      });
    }
  }, [p, r, e]);
  Y$.useEffect(() => {
    if (t.state === "starting") S();
  }, [t.state, S]), Pd(() => {
    if (t.state === "about_to_retry") c(t.nextState.state === "waiting_for_login"), n(t.nextState);
  }, t.state === "about_to_retry" ? 500 : null), Y$.useEffect(() => {
    if (o === "c" && t.state === "waiting_for_login" && l && !u) AI(t.url).then(v => {
      if (v) process.stdout.write(v);
      d(true), m.current?.(), m.current = p.setTimeout(() => d(false), 2000);
    }), s("");
  }, [p, o, t, l, u]), Y$.useEffect(() => {
    let v = f.current;
    return () => {
      r.cleanup(), v.forEach(C => C()), v.clear(), m.current?.();
    };
  }, [r]);
  let [A] = Y$.useState(() => Tbt() != null);
  return SS.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: b,
    children: [t.state !== "success" && SS.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      paddingBottom: 1,
      children: [SS.jsx(w, {
        bold: true,
        children: "Design login"
      }), SS.jsx(w, {
        dimColor: true,
        children: "Authorize design-system access (read and write your organization's claude.ai/design projects) with your claude.ai account. This is separate from this session's authentication and changes nothing else."
      }), A && SS.jsx(w, {
        dimColor: true,
        children: "A design credential is already stored \u2014 completing this flow replaces it."
      })]
    }), t.state === "waiting_for_login" && l && SS.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      paddingBottom: 1,
      children: [SS.jsxs(U, {
        paddingX: 1,
        children: [SS.jsxs(w, {
          dimColor: true,
          children: ["Browser didn't open? Use the url below to sign in", " "]
        }), u ? SS.jsx(w, {
          color: "success",
          children: "(Copied!)"
        }) : SS.jsx(w, {
          dimColor: true,
          children: SS.jsx(ht, {
            chord: "c",
            action: "copy",
            parens: true
          })
        })]
      }), SS.jsx(xs, {
        url: t.url,
        children: SS.jsx(w, {
          dimColor: true,
          children: t.url
        })
      })]
    }), SS.jsx(U, {
      paddingLeft: 1,
      flexDirection: "column",
      gap: 1,
      children: SS.jsx(p1f, {
        oauthStatus: t,
        showPastePrompt: l,
        pastedCode: o,
        setPastedCode: s,
        cursorOffset: i,
        setCursorOffset: a,
        textInputColumns: y,
        onSubmitCode: _
      })
    })]
  });
}
function p1f(e) {
  let t = hUl.c(23),
    {
      oauthStatus: n,
      showPastePrompt: r,
      pastedCode: o,
      setPastedCode: s,
      cursorOffset: i,
      setCursorOffset: a,
      textInputColumns: l,
      onSubmitCode: c
    } = e;
  switch (n.state) {
    case "starting":
      {
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) u = SS.jsx(Vc, {
          message: "Starting design login\u2026"
        }), t[0] = u;else u = t[0];
        return u;
      }
    case "waiting_for_login":
      {
        let u;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) u = SS.jsx(Vc, {
          message: "Waiting for browser authorization\u2026"
        }), t[1] = u;else u = t[1];
        let d;
        if (t[2] !== i || t[3] !== n.url || t[4] !== c || t[5] !== o || t[6] !== a || t[7] !== s || t[8] !== r || t[9] !== l) d = r && SS.jsxs(U, {
          children: [SS.jsx(w, {
            children: yUl
          }), SS.jsx(Ta, {
            value: o,
            onChange: s,
            onSubmit: f => c(f, n.url),
            cursorOffset: i,
            onChangeCursorOffset: a,
            columns: l
          })]
        }), t[2] = i, t[3] = n.url, t[4] = c, t[5] = o, t[6] = a, t[7] = s, t[8] = r, t[9] = l, t[10] = d;else d = t[10];
        let p;
        if (t[11] !== d) p = SS.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [u, d]
        }), t[11] = d, t[12] = p;else p = t[12];
        return p;
      }
    case "processing":
      {
        let u;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) u = SS.jsx(Vc, {
          message: "Saving design credential\u2026"
        }), t[13] = u;else u = t[13];
        return u;
      }
    case "success":
      {
        let u;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) u = SS.jsx(w, {
          color: "success",
          children: "Design-system access authorized. /design-sync can now reach your claude.ai/design projects."
        }), t[14] = u;else u = t[14];
        return u;
      }
    case "error":
      {
        let u;
        if (t[15] !== n.message) u = SS.jsx(w, {
          color: "error",
          children: n.message
        }), t[15] = n.message, t[16] = u;else u = t[16];
        let d = n.toRetry ? "Press Enter to retry, or any other key to cancel." : "Press any key to close.",
          p;
        if (t[17] !== d) p = SS.jsx(w, {
          dimColor: true,
          children: d
        }), t[17] = d, t[18] = p;else p = t[18];
        let f;
        if (t[19] !== u || t[20] !== p) f = SS.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          children: [u, p]
        }), t[19] = u, t[20] = p, t[21] = f;else f = t[21];
        return f;
      }
    case "about_to_retry":
      {
        let u;
        if (t[22] === Symbol.for("react.memo_cache_sentinel")) u = SS.jsx(w, {
          color: "permission",
          children: "Retrying\u2026"
        }), t[22] = u;else u = t[22];
        return u;
      }
  }
}
async function call(e) {
  return SS.jsx(DesignLogin, {
    onDone: t => e(t)
  });
}
var hUl,
  Y$,
  SS,
  yUl = "Paste code here if prompted > ";