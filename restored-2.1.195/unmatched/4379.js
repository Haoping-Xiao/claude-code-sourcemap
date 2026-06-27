// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zSl
// matched 2.1.88 source: node_modules/proper-lockfile/lib/lockfile.js
// class=new  jaccard=0.0191  score=0.0252  fileCov=0.0727
// note: nearest: node_modules/proper-lockfile/lib/lockfile.js (0.0191); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var zSl = E(() => {
  c_();
  Cv();
  Hbt = class Hbt extends Error {
    method;
    status;
    body;
    telemetryMessage;
    constructor(e, t, n) {
      super(`Design API ${e} failed: HTTP ${t} ${Dhf(n)}`);
      this.method = e;
      this.status = t;
      this.body = n;
      this.name = "DesignRpcError", this.telemetryMessage = `Design API ${e} failed: HTTP ${t}`;
    }
  };
  VSl = class VSl extends Hbt {
    constructor(e, t, n) {
      super(e, t, n);
      this.name = "DesignAuthError";
    }
  };
});
function Tbt() {
  try {
    return wl().read()?.designOauth ?? null;
  } catch (e) {
    return T(`Failed to read design OAuth tokens: ${be(e)}`, {
      level: "error"
    }), null;
  }
}
async function SXn(e, t) {
  try {
    let n = !1,
      r = await wl().mutate(o => {
        if (t?.onlyIf && !t.onlyIf(o.designOauth)) return n = !0, o;
        return {
          ...o,
          designOauth: e
        };
      });
    return n ? {
      ...r,
      raced: !0
    } : r;
  } catch (n) {
    return T(`Failed to save design OAuth tokens: ${be(n)}`, {
      level: "error"
    }), {
      success: !1,
      warning: "Failed to save design OAuth tokens"
    };
  }
}
async function bXn(e) {
  try {
    await wl().mutate(t => {
      if (!t.designOauth) return t;
      if (!e(t.designOauth)) return t;
      let n = {
        ...t
      };
      return delete n.designOauth, n;
    });
  } catch (t) {
    T(`Failed to clear design OAuth tokens: ${be(t)}`, {
      level: "error"
    });
  }
}
async function $hf(e) {
  let t = BY();
  await YSl.mkdir(t, {
    recursive: !0
  });
  let n = XSl.join(t, Phf),
    r,
    o = 0;
  while (!r) {
    o++;
    try {
      r = await Ay(n, {
        lockfilePath: n,
        realpath: !1,
        stale: 1e4,
        onCompromised: s => T(`Design OAuth refresh lock compromised: ${s.message}`, {
          level: "error"
        })
      });
    } catch (s) {
      if (s.code === "ELOCKED") {
        if (o < Mhf) {
          await Nn(1000 + Math.random() * 1000);
          continue;
        }
        throw Error("Design OAuth lock contention: another process is holding the refresh lock");
      }
      throw s;
    }
  }
  try {
    return await e();
  } finally {
    try {
      await r();
    } catch (s) {
      T(`Design OAuth refresh lock release failed: ${be(s)}`, {
        level: "error"
      });
    }
  }
}
async function KSl() {
  let e = wl();
  return e.invalidateCache?.(), (await e.readAsync())?.designOauth ?? null;
}
async function EXn() {
  let e = Tbt();
  if (!e?.accessToken) return {
    ok: !1,
    reason: "needs_design_login"
  };
  if (!ate(e.expiresAt)) return {
    ok: !0,
    accessToken: e.accessToken
  };
  try {
    return await $hf(async () => {
      let t = await KSl();
      if (!t?.accessToken) return {
        ok: !1,
        reason: "needs_design_login"
      };
      if (!ate(t.expiresAt)) return {
        ok: !0,
        accessToken: t.accessToken
      };
      if (!t.refreshToken) {
        let n = t.refreshToken;
        return await bXn(r => r.refreshToken === n), {
          ok: !1,
          reason: "needs_design_login"
        };
      }
      if (!Array.isArray(t.scopes) || t.scopes.length === 0) {
        let n = t.refreshToken;
        return await bXn(r => r.refreshToken === n), {
          ok: !1,
          reason: "needs_design_login"
        };
      }
      try {
        let n = await ite(t.refreshToken, {
          clientId: t.clientId,
          scopes: t.scopes,
          skipProfileFetch: !0
        });
        if (!n.refreshToken || !n.expiresAt) {
          if (n.refreshToken && n.refreshToken !== t.refreshToken) await t1(n.refreshToken, t.clientId);
          return {
            ok: !1,
            reason: "design_refresh_failed",
            detail: "refresh response missing refresh_token or expiry"
          };
        }
        if (!Hae.every(s => n.scopes.includes(s))) {
          if (n.refreshToken) await t1(n.refreshToken, t.clientId);
          let s = t.refreshToken;
          return await bXn(i => i.refreshToken === s), {
            ok: !1,
            reason: "needs_design_login",
            detail: "refresh response missing design scopes"
          };
        }
        let r = t.refreshToken,
          o = await SXn({
            accessToken: n.accessToken,
            refreshToken: n.refreshToken,
            expiresAt: n.expiresAt,
            scopes: n.scopes.filter(s => Hae.some(i => i === s)),
            clientId: t.clientId
          }, {
            onlyIf: s => s?.refreshToken === r
          });
        if (o.raced) {
          await t1(n.refreshToken, t.clientId);
          let s = await KSl();
          return s?.accessToken && !ate(s.expiresAt) ? {
            ok: !0,
            accessToken: s.accessToken
          } : {
            ok: !1,
            reason: "needs_design_login"
          };
        }
        if (!o.success) T("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", {
          level: "error"
        });
        return {
          ok: !0,
          accessToken: n.accessToken
        };
      } catch (n) {
        if (NIe(n)) {
          let r = t.refreshToken;
          return await bXn(o => o.refreshToken === r), {
            ok: !1,
            reason: "needs_design_login",
            detail: "design authorization expired"
          };
        }
        return {
          ok: !1,
          reason: "design_refresh_failed",
          detail: be(n)
        };
      }
    });
  } catch (t) {
    return {
      ok: !1,
      reason: "design_refresh_failed",
      detail: be(t)
    };
  }
}
function AXn() {
  return Oe.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? $s().DESIGN_CLIENT_ID;
}
function Mzt() {
  return !AXn().startsWith("00000000-");
}
async function kRo(e, t) {
  let n = Hae.filter(r => !e.scopes.includes(r));
  if (n.length > 0) {
    if (e.refreshToken) await t1(e.refreshToken, t);
    return {
      ok: !1,
      message: `The authorization server did not grant the design scopes (missing: ${n.join(", ")}) \u2014 the Claude Design app registration may be incomplete or out of date.`
    };
  }
  if (!e.refreshToken || !e.expiresAt) {
    if (e.refreshToken) await t1(e.refreshToken, t);
    return {
      ok: !1,
      message: "The token response was missing a refresh token or expiry \u2014 cannot store a usable design credential."
    };
  }
  return {
    ok: !0,
    slot: {
      accessToken: e.accessToken,
      refreshToken: e.refreshToken,
      expiresAt: e.expiresAt,
      scopes: e.scopes.filter(r => Hae.some(o => o === r)),
      clientId: t
    }
  };
}
function RRo() {
  return Oe.isSSH() || Oe.CLAUDE_CODE_REMOTE === !0 || da();
}
async function JSl(e) {
  if (e?.aborted) return {
    ok: !1,
    message: "Design login was interrupted."
  };
  if (!Mzt()) return {
    ok: !1,
    message: "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client."
  };
  if (RRo()) return {
    ok: !1,
    message: "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead \u2014 it supports pasting the authorization code manually."
  };
  let t = AXn(),
    n = new I6(),
    r = !1,
    o = !1,
    s;
  try {
    let i = n.startOAuthFlow(async () => {}, {
      loginWithClaudeAi: !0,
      oauthClient: {
        clientId: t,
        scopes: Hae
      },
      skipProfileFetch: !0,
      successRedirectUrl: $s().CLAUDEAI_SUCCESS_URL
    });
    i.then(u => {
      if (o && u.refreshToken) t1(u.refreshToken, t);
    }).catch(() => {});
    let a = await Promise.race([i, new Promise((u, d) => {
        s = setTimeout(() => {
          r = !0, o = !0, d(Error("design login timed out"));
        }, Ohf), e?.addEventListener("abort", () => {
          o = !0, d(Error("design login interrupted"));
        }, {
          once: !0
        });
      })]),
      l = await kRo(a, t);
    if (!l.ok) return {
      ok: !1,
      message: l.message
    };
    if (!(await SXn(l.slot)).success) return await t1(l.slot.refreshToken, l.slot.clientId), {
      ok: !1,
      message: "Could not save the design credential to secure storage. Retry, or run /design-login."
    };
    return {
      ok: !0,
      accessToken: l.slot.accessToken
    };
  } catch (i) {
    if (o = !0, e?.aborted) return {
      ok: !1,
      message: "Design login was interrupted."
    };
    if (r) return {
      ok: !1,
      message: "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow."
    };
    return {
      ok: !1,
      message: `The browser authorization failed (${be(i)}). Run /design-login to retry with the manual flow.`
    };
  } finally {
    if (s !== void 0) clearTimeout(s);
    n.cleanup();
  }
}
var YSl,
  XSl,
  Phf = ".design_oauth_refresh.lock",
  Mhf = 5,
  Ohf = 300000;