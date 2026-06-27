// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QJt
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0121  score=0.1413  fileCov=0.013
// note: nearest: src/cli/print.ts (0.0121); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var QJt = E(() => {
  Xr();
  dn();
  Pw();
  vX();
  N8();
  fn();
  YS();
  Rd();
  Jt();
  oje();
  T3o();
  qec = require("fs/promises"), Vec = require("path"), gHt = ["dontAsk", "auto", "default", "acceptEdits", "plan", "bypassPermissions"], Y3o = ve(() => H.object({
    id: H.string().min(1),
    cron: H.string().refine(e => F1(e) !== null, {
      message: "invalid 5-field cron expression"
    }),
    prompt: H.string().min(1),
    directory: H.string().min(1),
    enabled: H.boolean().default(true),
    permissionMode: H.enum(gHt).default("dontAsk"),
    model: H.string().optional(),
    runTimeoutMinutes: H.number().positive().max(zec).default(30),
    maxQueued: H.number().int().positive().default(1)
  }).strict()), X3o = ve(() => H.object({
    tasks: H.array(Y3o()).default([]).refine(e => new Set(e.map(t => t.id)).size === e.length, {
      message: "task ids must be unique"
    }),
    maxConcurrent: H.number().int().positive().default(1)
  }).strict());
});
function xYf(e) {
  return typeof e === "object" && e !== null && "type" in e && (e.type === "token_update" || e.type === "auth_401_result");
}
function kYf(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "auth_401";
}
function Zec(e, t, n = () => true) {
  let r,
    o = false,
    s = null,
    i = new Set(),
    a = null,
    l = null;
  function c() {
    return l ??= Promise.resolve().then(() => (oo(), pU));
  }
  function u(I) {
    let k = {
      type: "token_update",
      accessToken: I
    };
    for (let D of i) try {
      D.send(k);
    } catch {}
  }
  async function d() {
    let k = await (await c()).getClaudeAIOAuthTokensAsync();
    if (k?.accessToken && k.accessToken !== r?.accessToken) r = {
      accessToken: k.accessToken,
      scopes: k.scopes,
      subscriptionType: k.subscriptionType ?? null,
      rateLimitTier: k.rateLimitTier ?? null
    }, u(r.accessToken);
    m(k?.expiresAt ?? null);
  }
  let p;
  function f(I) {
    if (p = I, a || e.aborted) return;
    if (s) clearTimeout(s), s = null;
    t("auth: no token found, will re-check keychain every 30s"), a = setInterval(function () {
      c().then(async D => {
        D.clearOAuthTokenCache();
        let P = await D.getClaudeAIOAuthTokensAsync(),
          O;
        if (P?.accessToken && P.accessToken !== p && P.expiresAt && P.expiresAt > Date.now()) O = "auth: token found via keychain re-check";else if (P?.refreshToken && (await D.checkAndRefreshOAuthTokenIfNeeded())) O = "auth: token refreshed via keychain re-check retry";
        if (O) {
          if (await d(), r && a) clearInterval(a), a = null, t(O);
        }
      }).catch(D => t(`auth: keychain re-check error: ${D}`));
    }, DYf), a.unref();
  }
  function m(I) {
    if (s) clearTimeout(s), s = null;
    if (!I || e.aborted) return;
    let k = Math.min(Math.max(I - Date.now() - Uir, 5000), PYf);
    t(`auth: scheduling proactive refresh in ${Math.round(k / 1000)}s`), s = setTimeout(g, k), s.unref();
  }
  async function g() {
    if (e.aborted) return;
    try {
      t("auth: proactive refresh starting");
      let I = await c(),
        k = r?.accessToken,
        D = await I.checkAndRefreshOAuthTokenIfNeeded();
      I.clearOAuthTokenCache();
      let P = await I.getClaudeAIOAuthTokensAsync(),
        O = P?.expiresAt ?? null,
        L = O === null || O > Date.now() + RYf;
      if (P?.accessToken && (D || P.accessToken !== k || L) && (O === null || O > Date.now() + Uir)) {
        await d(), t(D ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
        return;
      }
      if (P?.accessToken && O !== null && O > Date.now()) {
        t("auth: proactive refresh failed, retrying in ~60s (token still valid)"), m(Date.now() + 60000 + Uir);
        return;
      }
      t("auth: proactive refresh failed, signalling re-auth required");
      let M = P?.accessToken ?? k;
      r = void 0, await b(), f(M);
    } catch (I) {
      t(`auth: proactive refresh error: ${I}`), m(Date.now() + 60000 + Uir);
    }
  }
  async function h(I) {
    if (o) return t("auth: 401 ignored (3P provider active, no OAuth)"), false;
    t("auth: handling 401");
    let k = await c();
    if (await k.handleOAuth401Error(I)) return k.clearOAuthTokenCache(), await d(), t("auth: 401 recovery succeeded"), true;
    t("auth: 401 recovery failed, signalling re-auth required"), r = void 0, await b(), k.clearOAuthTokenCache();
    let P = await k.getClaudeAIOAuthTokensAsync();
    if (P?.accessToken !== void 0 && P.accessToken !== I) return await d(), true;
    return f(I), false;
  }
  let y = null;
  function b() {
    if (y) return y;
    return y = _().finally(() => {
      y = null;
    }), y;
  }
  async function _() {
    let I = await c();
    if (I.getAnthropicApiKey()) {
      t("auth: browser login skipped (API key auth available)");
      return;
    }
    if (I.isUsing3PServices() && !n()) {
      t("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return;
    }
    let k = tr(),
      D = Q3o.join(k, "daemon-auth-cooldown"),
      P = Q3o.join(k, "daemon-auth-status.json");
    try {
      let O = await qs().read(D),
        L = parseInt(O, 10);
      if (!Number.isNaN(L) && Date.now() - L < LYf) {
        t("auth: browser login skipped (cooldown)");
        return;
      }
    } catch (O) {
      if (!wn(O)) t(`auth: cooldown read error: ${O}`);
    }
    try {
      await qs().mkdir(k), await qs().write(D, String(Date.now()));
    } catch (O) {
      t(`auth: cooldown write error: ${O}`);
    }
    try {
      let {
        execFileNoThrow: O
      } = await Promise.resolve().then(() => (Bi(), ETs));
      O("notify-send", ["Claude", "Your Claude assistant needs re-authentication"]);
    } catch {}
    try {
      await qs().write(P, De({
        status: "auth_required",
        since: Date.now()
      }));
    } catch (O) {
      t(`auth: status write error: ${O}`);
    }
    t("auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh");
  }
  function S(I) {
    if (!kYf(I)) return;
    h(I.failedToken).then(k => {
      for (let D of i) try {
        let P = {
          type: "auth_401_result",
          refreshed: k,
          requestId: I.requestId
        };
        D.send(P);
      } catch {}
    }).catch(k => {
      t(`auth: 401 handler error: ${k}`);
      for (let D of i) try {
        let P = {
          type: "auth_401_result",
          refreshed: false,
          requestId: I.requestId
        };
        D.send(P);
      } catch {}
    });
  }
  function A(I) {
    if (i.add(I), I.on("message", S), r) try {
      let k = {
        type: "token_update",
        accessToken: r.accessToken
      };
      I.send(k);
    } catch {}
  }
  function v(I) {
    I.removeListener("message", S), i.delete(I);
  }
  let C = (async () => {
    if (e.aborted) return;
    try {
      let I = await c(),
        k = await I.getClaudeAIOAuthTokensAsync();
      if (!k?.accessToken && I.isUsing3PServices()) {
        o = true, t("auth: 3P provider active, skipping OAuth refresh loop");
        return;
      }
      if (k?.accessToken) r = {
        accessToken: k.accessToken,
        scopes: k.scopes,
        subscriptionType: k.subscriptionType ?? null,
        rateLimitTier: k.rateLimitTier ?? null
      }, m(k.expiresAt ?? null);
      await I.checkAndRefreshOAuthTokenIfNeeded(), await d();
    } catch (I) {
      t(`auth: init error: ${I}`);
    }
  })();
  return C.then(() => {
    if (e.aborted || r || o) return;
    f();
  }), e.addEventListener("abort", () => {
    if (s) clearTimeout(s), s = null;
    if (a) clearInterval(a), a = null;
  }, {
    once: true
  }), {
    ready: C,
    getAccessToken() {
      return r?.accessToken;
    },
    getAuthSnapshot() {
      return r;
    },
    attachWorker: A,
    detachWorker: v,
    dispose: x,
    [Symbol.dispose]: x
  };
  function x() {
    if (s) clearTimeout(s), s = null;
    if (a) clearInterval(a), a = null;
    for (let I of i) I.removeListener("message", S);
    i.clear();
  }
}
function etc(e) {
  if (typeof process.send === "function") {
    let s = function (i) {
        let a = o.get(i);
        if (a) o.delete(i), a.resolve(false);
      },
      r = e;
    process.on("message", i => {
      if (!xYf(i)) return;
      if (i.type === "token_update") r = i.accessToken;
    });
    let o = new Map();
    return process.on("message", i => {
      if (typeof i === "object" && i !== null && "type" in i && i.type === "auth_401_result") {
        let a = i,
          l = o.get(a.requestId);
        if (l) clearTimeout(l.timer), o.delete(a.requestId), l.resolve(a.refreshed);
      }
    }), process.channel?.unref(), {
      getAccessToken() {
        return r;
      },
      reportAuth401(i) {
        let a = Qec.randomUUID(),
          l = {
            type: "auth_401",
            failedToken: i,
            requestId: a
          };
        return new Promise(c => {
          let u = setTimeout(s, 30000, a);
          u.unref(), o.set(a, {
            resolve: c,
            timer: u
          });
          try {
            process.send(l);
          } catch {
            clearTimeout(u), o.delete(a), c(false);
          }
        });
      }
    };
  }
  let t = null;
  async function n() {
    return t ??= await Promise.resolve().then(() => (oo(), pU));
  }
  return n(), {
    getAccessToken() {
      return t?.getClaudeAIOAuthTokens()?.accessToken;
    },
    async reportAuth401(r) {
      return (await n()).handleOAuth401Error(r);
    }
  };
}
var Qec,
  Q3o,
  RYf = 300000,
  Uir = 240000,
  LYf = 300000,
  DYf = 30000,
  PYf = 86400000;