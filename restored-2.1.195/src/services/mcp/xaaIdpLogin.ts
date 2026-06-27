// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R8r
// matched 2.1.88 source: src/services/mcp/xaaIdpLogin.ts
// class=modified  jaccard=0.5547  score=0.7298  fileCov=0.6981
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var R8r = E(() => {
  Is();
  ((Lwi = require("http")),
    (HRd =
      Vt() === "windows"
        ? {
            min: 39152,
            max: 49151,
          }
        : {
            min: 49152,
            max: 65535,
          }));
});
function y7() {
  return ut(process.env.CLAUDE_CODE_ENABLE_XAA);
}
function Kle() {
  return Dr().xaaIdp;
}
function p_e(e) {
  try {
    let t = new URL(e);
    return (
      (t.pathname = t.pathname.replace(/\/+$/, "")),
      (t.host = t.host.toLowerCase()),
      t.toString()
    );
  } catch {
    return e.replace(/\/+$/, "");
  }
}
async function Q4e(e) {
  let r = (await wl().readAsync())?.mcpXaaIdp?.[p_e(e)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= wRd * 1000) return;
  return r.idToken;
}
async function Owi(e, t, n) {
  await wl().mutate((r) => ({
    ...r,
    mcpXaaIdp: {
      ...r.mcpXaaIdp,
      [p_e(e)]: {
        idToken: t,
        expiresAt: n,
      },
    },
  }));
}
async function Nwi(e, t) {
  let n = Uwi(t),
    r = n ? n * 1000 : Date.now() + 3600000;
  return (await Owi(e, t, r), r);
}
async function ske(e) {
  let t = p_e(e);
  try {
    await wl().mutate((n) => {
      if (!n.mcpXaaIdp?.[t]) return n;
      let r = {
        ...n.mcpXaaIdp,
      };
      return (
        delete r[t],
        {
          ...n,
          mcpXaaIdp: r,
        }
      );
    });
  } catch (n) {
    sn("xaa", `clearIdpIdToken(${t}) failed: ${be(n)}`);
  }
}
async function Bwi(e, t) {
  try {
    return await wl().mutate((n) => ({
      ...n,
      mcpXaaIdpConfig: {
        ...n.mcpXaaIdpConfig,
        [p_e(e)]: {
          clientSecret: t,
        },
      },
    }));
  } catch (n) {
    return {
      success: !1,
      warning: be(n),
    };
  }
}
async function rst(e) {
  return (await wl().readAsync())?.mcpXaaIdpConfig?.[p_e(e)]?.clientSecret;
}
async function fIn(e) {
  let t = p_e(e);
  try {
    await wl().mutate((n) => {
      if (!n.mcpXaaIdpConfig?.[t]) return n;
      let r = {
        ...n.mcpXaaIdpConfig,
      };
      return (
        delete r[t],
        {
          ...n,
          mcpXaaIdpConfig: r,
        }
      );
    });
  } catch (n) {
    sn("xaa", `clearIdpClientSecret(${t}) failed: ${be(n)}`);
  }
}
async function mIn(e) {
  let t = e.endsWith("/") ? e : e + "/",
    n = new URL(".well-known/openid-configuration", t),
    r = await fetch(n, {
      ...kg({
        url: String(n),
      }),
      headers: {
        Accept: "application/json",
      },
      signal: AbortSignal.timeout($wi),
    });
  if (!r.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${n}`);
  let o;
  try {
    o = await r.json();
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${n} (captive portal or proxy?)`);
  }
  let s = YCn.safeParse(o);
  if (!s.success) throw Error(`XAA IdP: invalid OIDC metadata: ${s.error.message}`);
  if (new URL(s.data.token_endpoint).protocol !== "https:")
    throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${s.data.token_endpoint}`);
  return s.data;
}
function Uwi(e) {
  let t = e.split(".");
  if (t.length !== 3) return;
  try {
    let n = Ft(Buffer.from(t[1], "base64url").toString("utf-8"));
    return typeof n.exp === "number" ? n.exp : void 0;
  } catch {
    return;
  }
}
function CRd(e, t, n, r) {
  let o = null,
    s = null,
    i = null,
    a = () => {
      if ((o?.removeAllListeners(), o?.on("error", () => {}), o?.close(), (o = null), s))
        (clearTimeout(s), (s = null));
      if (n && i) (n.removeEventListener("abort", i), (i = null));
    };
  return new Promise((l, c) => {
    let u = !1,
      d = (f) => {
        if (u) return;
        ((u = !0), a(), l(f));
      },
      p = (f) => {
        if (u) return;
        ((u = !0), a(), c(f));
      };
    if (n) {
      if (((i = () => p(Error("XAA IdP: login cancelled"))), n.aborted)) {
        i();
        return;
      }
      n.addEventListener("abort", i, {
        once: !0,
      });
    }
    ((o = Pwi.createServer((f, m) => {
      let g = Mwi.parse(f.url || "", !0);
      if (g.pathname !== "/callback") {
        (m.writeHead(404), m.end());
        return;
      }
      let h = g.query.code,
        y = g.query.state,
        b = g.query.error;
      if (b) {
        let _ = g.query.error_description;
        (m.writeHead(400, {
          "Content-Type": "text/html",
        }),
          m.end(
            zle({
              ok: !1,
              heading: "Sign-in failed",
              message: "Close this tab and try again from Claude Code.",
              detail: `${b}: ${_ ?? ""}`,
            }),
          ),
          p(Error(`XAA IdP: ${b}${_ ? ` \u2014 ${_}` : ""}`)));
        return;
      }
      if (y !== t) {
        (m.writeHead(400, {
          "Content-Type": "text/html",
        }),
          m.end(
            zle({
              ok: !1,
              heading: "Sign-in failed",
              message: "State mismatch. Close this tab and try again.",
            }),
          ),
          p(Error("XAA IdP: state mismatch (possible CSRF)")));
        return;
      }
      if (!h) {
        (m.writeHead(400, {
          "Content-Type": "text/html",
        }),
          m.end(
            zle({
              ok: !1,
              heading: "Sign-in failed",
              message: "No authorization code received. Close this tab and try again.",
            }),
          ),
          p(Error("XAA IdP: callback missing code")));
        return;
      }
      (m.writeHead(200, {
        "Content-Type": "text/html",
      }),
        m.end(
          zle({
            ok: !0,
            heading: "Sign-in complete",
            message: "You can close this tab and return to Claude Code.",
          }),
        ),
        d(h));
    })),
      o.on("error", (f) => {
        if (f.code === "EADDRINUSE") {
          let m =
            Vt() === "windows" ? `netstat -ano | findstr :${e}` : `lsof -ti:${e} -sTCP:LISTEN`;
          p(
            Error(
              `XAA IdP: callback port ${e} is already in use. Run \`${m}\` to find the holder.`,
            ),
          );
        } else p(Error(`XAA IdP: callback server failed: ${f.message}`));
      }),
      o.listen(e, "127.0.0.1", () => {
        try {
          r();
        } catch (f) {
          p(Zr(f));
        }
      }),
      o.unref(),
      (s = setTimeout((f) => f(Error("XAA IdP: login timed out")), vRd, p)),
      s.unref());
  });
}
async function gIn(e) {
  return yl("mcp_xaa_idp_login", async () => {
    let { idpIssuer: t, idpClientId: n } = e,
      r = await Q4e(t);
    if (r) return (sn("xaa", `Using cached id_token for ${t}`), r);
    sn("xaa", `No cached id_token for ${t}; starting OIDC login`);
    let o = await mIn(t),
      s = e.callbackPort ?? (await pIn()),
      i = T1t(s),
      a = Dwi.randomBytes(32).toString("base64url"),
      l = {
        client_id: n,
        ...(e.idpClientSecret && {
          client_secret: e.idpClientSecret,
        }),
      },
      { authorizationUrl: c, codeVerifier: u } = await H8r(t, {
        metadata: o,
        clientInformation: l,
        redirectUrl: i,
        scope: "openid",
        state: a,
      }),
      d = await CRd(s, a, e.abortSignal, () => {
        if ((e.onAuthorizationUrl(c.toString()), !e.skipBrowserOpen))
          (sn("xaa", "Opening browser to IdP authorization endpoint"), ac(c.toString()));
      }),
      p = await xwi(t, {
        metadata: o,
        clientInformation: l,
        authorizationCode: d,
        codeVerifier: u,
        redirectUri: i,
        fetchFn: (g, h) =>
          fetch(g, {
            ...h,
            ...kg({
              url: String(g),
            }),
            signal: AbortSignal.timeout($wi),
          }),
      });
    if (!p.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let f = Uwi(p.id_token),
      m = f ? f * 1000 : Date.now() + (p.expires_in ?? 3600) * 1000;
    try {
      (await Owi(t, p.id_token, m),
        sn("xaa", `Cached id_token for ${t} (expires ${new Date(m).toISOString()})`));
    } catch (g) {
      sn("xaa", `id_token cache write failed: ${be(g)}`);
    }
    return p.id_token;
  });
}
var Dwi,
  Pwi,
  Mwi,
  vRd = 300000,
  $wi = 30000,
  wRd = 60;
