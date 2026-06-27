// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zHo
// matched 2.1.88 source: src/components/mcp/MCPListPanel.tsx
// class=new  jaccard=0.0398  score=0.0658  fileCov=0.0915
// note: nearest: src/components/mcp/MCPListPanel.tsx (0.0398); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zHo = E(() => {
  wb();
  aXa();
  uXa();
  fXa();
  yXa();
  DJa();
  FJa();
  WJa();
  VJa();
  X9n = R(rt(), 1), VHo = R(se(), 1);
});
function HJp(e) {
  let t = on(e) ?? on(e?.cause),
    n = be(e);
  if (!(t !== void 0 && AJp.has(t) || /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(n))) return null;
  return "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust " + "store by default on the native binary and Node \u226522.15, so if the CA is " + "already installed there, upgrade to a current runtime. Otherwise set " + "NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting \u2014 " + "e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` \u2014 or add it under " + "`env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json).";
}
function zJa(e, t, n) {
  if (t) {
    try {
      if (new URL(t).origin === new URL(e).origin) return t;
    } catch {}
    T(`[gateway-login] ignoring advertised endpoint ${t} (not same-origin with ${e}); using ${n}`);
  }
  return `${e}${n}`;
}
function KJa({
  onDone: e,
  onCancel: t,
  initialUrl: n,
  screenLocked: r
}) {
  let [o, s] = ght.useState({
      state: "url_input"
    }),
    i = n ?? void 0,
    a = ght.useRef(0);
  ght.useEffect(() => () => {
    a.current += 1;
  }, []);
  let l = r ? () => s({
    state: "url_input"
  }) : t;
  function c() {
    a.current += 1, l();
  }
  async function u(g) {
    let h = ++a.current;
    s({
      state: "connecting"
    });
    try {
      let y = OCn(g);
      if (await $vi(y), h !== a.current) return;
      let b = await lb.get(`${y}/.well-known/oauth-authorization-server`, {
        timeout: 1e4
      });
      if (h !== a.current) return;
      let _ = TJp().safeParse(b.data),
        S = _.success ? _.data : void 0,
        A = {
          deviceAuthorizationEndpoint: zJa(y, S?.device_authorization_endpoint, "/oauth/device_authorization"),
          tokenEndpoint: zJa(y, S?.token_endpoint, "/oauth/token")
        },
        {
          hostname: v,
          fingerprint: C
        } = await ZOt(y);
      if (h !== a.current) return;
      let x = await e1t(v);
      if (h !== a.current) return;
      if (x === C) await d(y, A);else s({
        state: "trust_prompt",
        url: y,
        hostname: v,
        fingerprint: C,
        previouslyPinned: x,
        endpoints: A
      });
    } catch (y) {
      if (h !== a.current) return;
      let b = HJp(y);
      s(b ? {
        state: "error",
        message: b,
        detail: be(y)
      } : {
        state: "error",
        message: be(y)
      });
    }
  }
  async function d(g, h) {
    let y = ++a.current;
    s({
      state: "connecting"
    });
    try {
      let {
        data: b
      } = await lb.post(h.deviceAuthorizationEndpoint, "", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        timeout: 1e4
      });
      if (y !== a.current) return;
      let _ = vJp().safeParse(b);
      if (!_.success) throw Error("gateway device authorization endpoint returned malformed response");
      let S = _.data;
      ac(S.verification_uri_complete ?? S.verification_uri), s({
        state: "polling",
        url: g,
        userCode: S.user_code,
        verificationUri: S.verification_uri
      }), await p(g, h.tokenEndpoint, S.device_code, S.interval ?? 5, y);
    } catch (b) {
      if (y !== a.current) return;
      s({
        state: "error",
        message: be(b)
      });
    }
  }
  async function p(g, h, y, b, _) {
    let S = Math.max(1, b);
    while (_ === a.current) {
      if (await Nn(S * 1000), _ !== a.current) return;
      try {
        let {
          data: A
        } = await lb.post(h, new URLSearchParams({
          grant_type: EJp,
          device_code: y
        }).toString(), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          timeout: 1e4
        });
        if (_ !== a.current) return;
        let v = Tjr().safeParse(A);
        if (!v.success) throw Error("gateway token endpoint returned malformed response");
        await f(g, h, v.data, _);
        return;
      } catch (A) {
        if (_ !== a.current) return;
        let v = vjr(A);
        if (v === "authorization_pending") continue;
        if (v === "slow_down") {
          S += 5;
          continue;
        }
        if (v === "expired_token") {
          s({
            state: "error",
            message: "Sign-in timed out before the browser flow completed. Try again."
          });
          return;
        }
        if (v === "access_denied") {
          s({
            state: "error",
            message: "Sign-in was denied in the browser."
          });
          return;
        }
        s({
          state: "error",
          message: be(A)
        });
        return;
      }
    }
  }
  async function f(g, h, y, b) {
    let _ = {
        url: g,
        jwt: y.access_token,
        expiresAt: Date.now() + y.expires_in * 1000,
        tokenEndpoint: h,
        ...(y.refresh_token && {
          idpRefreshToken: y.refresh_token
        })
      },
      {
        hostname: S,
        fingerprint: A
      } = await ZOt(g);
    if (b !== a.current) return;
    let v = await e1t(S);
    if (b !== a.current) return;
    if (v !== A) {
      s({
        state: "error",
        message: `TLS certificate for ${S} changed during sign-in. Aborting without storing credentials.`
      });
      return;
    }
    try {
      await Jsi(_);
    } catch (C) {
      if (b !== a.current) return;
      let x = be(C);
      T(`[gateway-login] secureStorage write failed: ${x}`, {
        level: "error"
      }), s({
        state: "error",
        message: x
      });
      return;
    }
    if (b !== a.current) return;
    e();
  }
  let m = o.state === "url_input";
  switch ($r("confirm:yes", () => {
    if (i) u(i);
  }, {
    context: "Confirmation",
    isActive: m
  }), $r("confirm:no", r ? () => {} : t, {
    context: "Confirmation",
    isActive: m
  }), o.state) {
    case "url_input":
      if (!i) return Of.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [Of.jsx(w, {
          bold: !0,
          children: "Cloud gateway"
        }), Of.jsx(w, {
          color: "warning",
          children: "Gateway login is required by your organization's policy, but no gateway URL is configured. Contact your IT administrator."
        })]
      });
      return Of.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [Of.jsx(w, {
          bold: !0,
          children: "Cloud gateway"
        }), Of.jsx(w, {
          children: "Your organization's gateway URL (set by managed settings):"
        }), Of.jsx(U, {
          borderDimColor: !0,
          borderStyle: "round",
          paddingLeft: 1,
          children: Of.jsx(w, {
            children: i
          })
        }), Of.jsxs(w, {
          dimColor: !0,
          children: ["Press Enter to connect", r ? "" : " \xB7 Esc to cancel"]
        })]
      });
    case "polling":
      return Of.jsx(wJp, {
        userCode: o.userCode,
        verificationUri: o.verificationUri,
        onCancel: c
      });
    case "connecting":
      return Of.jsx(CJp, {
        label: "Connecting to gateway\u2026",
        onCancel: c
      });
    case "trust_prompt":
      return Of.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [Of.jsxs(w, {
          bold: !0,
          children: ["Trust gateway ", Of.jsx(w, {
            color: "suggestion",
            children: o.hostname
          }), "?"]
        }), o.previouslyPinned ? Of.jsx(w, {
          color: "warning",
          children: "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation."
        }) : Of.jsx(w, {
          children: "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway."
        }), Of.jsxs(w, {
          dimColor: !0,
          children: ["Certificate fingerprint (SHA-256): ", o.fingerprint.slice(0, 16), "\u2026"]
        }), Of.jsx(Kl, {
          confirmLabel: "Yes, trust this gateway",
          cancelLabel: r ? "No, go back" : "No, cancel login",
          focus: "cancel",
          onConfirm: () => {
            let g = a.current;
            Nvi(o.hostname, o.fingerprint).then(() => {
              if (g !== a.current) return;
              return d(o.url, o.endpoints);
            }).catch(h => {
              if (g !== a.current) return;
              s({
                state: "error",
                message: be(h)
              });
            });
          },
          onCancel: c
        })]
      });
    case "error":
      return Of.jsx(IJp, {
        message: o.message,
        detail: o.detail,
        onCancel: l
      });
  }
}
function wJp(e) {
  let t = Q9n.c(13),
    {
      userCode: n,
      verificationUri: r,
      onCancel: o
    } = e,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) s = {
    context: "Confirmation"
  }, t[0] = s;else s = t[0];
  $r("confirm:no", o, s);
  let i, a;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) i = Of.jsx(w, {
    bold: !0,
    children: "Cloud gateway \xB7 sign in"
  }), a = Of.jsx(w, {
    children: "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:"
  }), t[1] = i, t[2] = a;else i = t[1], a = t[2];
  let l;
  if (t[3] !== n) l = Of.jsx(U, {
    borderDimColor: !0,
    borderStyle: "round",
    paddingX: 2,
    children: Of.jsx(w, {
      bold: !0,
      color: "suggestion",
      children: n
    })
  }), t[3] = n, t[4] = l;else l = t[4];
  let c;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) c = Of.jsx(w, {
    dimColor: !0,
    children: "Browser didn't open? Visit:"
  }), t[5] = c;else c = t[5];
  let u;
  if (t[6] !== r) u = Of.jsxs(U, {
    flexDirection: "column",
    children: [c, Of.jsx(w, {
      dimColor: !0,
      wrap: "wrap",
      children: r
    })]
  }), t[6] = r, t[7] = u;else u = t[7];
  let d, p;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) d = Of.jsxs(U, {
    gap: 1,
    children: [Of.jsx(Vu, {}), Of.jsx(w, {
      dimColor: !0,
      children: "Waiting for sign-in to complete in your browser\u2026"
    })]
  }), p = Of.jsx(w, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), t[8] = d, t[9] = p;else d = t[8], p = t[9];
  let f;
  if (t[10] !== l || t[11] !== u) f = Of.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [i, a, l, u, d, p]
  }), t[10] = l, t[11] = u, t[12] = f;else f = t[12];
  return f;
}
function CJp(e) {
  let t = Q9n.c(7),
    {
      label: n,
      onCancel: r
    } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) o = {
    context: "Confirmation"
  }, t[0] = o;else o = t[0];
  $r("confirm:no", r, o);
  let s;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) s = Of.jsx(Vu, {}), t[1] = s;else s = t[1];
  let i;
  if (t[2] !== n) i = Of.jsxs(U, {
    gap: 1,
    children: [s, Of.jsx(w, {
      children: n
    })]
  }), t[2] = n, t[3] = i;else i = t[3];
  let a;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) a = Of.jsx(w, {
    dimColor: !0,
    children: "Press Esc to cancel"
  }), t[4] = a;else a = t[4];
  let l;
  if (t[5] !== i) l = Of.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [i, a]
  }), t[5] = i, t[6] = l;else l = t[6];
  return l;
}
function IJp(e) {
  let t = Q9n.c(9),
    {
      message: n,
      detail: r,
      onCancel: o
    } = e,
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) s = {
    context: "Confirmation"
  }, t[0] = s;else s = t[0];
  $r("confirm:no", o, s);
  let i;
  if (t[1] !== n) i = Of.jsxs(w, {
    color: "error",
    children: ["Error: ", n]
  }), t[1] = n, t[2] = i;else i = t[2];
  let a;
  if (t[3] !== r) a = r && Of.jsx(w, {
    dimColor: !0,
    children: r
  }), t[3] = r, t[4] = a;else a = t[4];
  let l;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) l = Of.jsx(w, {
    dimColor: !0,
    children: "Press Esc to go back"
  }), t[5] = l;else l = t[5];
  let c;
  if (t[6] !== i || t[7] !== a) c = Of.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [i, a, l]
  }), t[6] = i, t[7] = a, t[8] = c;else c = t[8];
  return c;
}
var Q9n,
  ght,
  Of,
  EJp = "urn:ietf:params:oauth:grant-type:device_code",
  AJp,
  TJp,
  vJp;