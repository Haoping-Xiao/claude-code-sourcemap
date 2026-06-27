// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oo
// matched 2.1.88 source: src/utils/http.ts
// class=modified  jaccard=0.3375  score=0.3672  fileCov=0.8067
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var oo = E(() => {
  iu();
  Qi();
  Rc();
  dn();
  kt();
  ste();
  Ls();
  ft();
  Tnt();
  ole();
  H0();
  W2e();
  xnt();
  db();
  QSn();
  Rnt();
  d2r();
  aAn();
  Vw();
  er();
  je();
  Lx();
  wr();
  fn();
  At();
  Bi();
  BCn();
  vn();
  SG();
  OB();
  R9();
  urt();
  S9();
  dr();
  Jt();
  t1t();
  ((q9r = require("child_process")), (l1t = require("fs/promises")), (V9r = require("path")));
  ((Vvi = Cn(() => {
    (T(
      `An Anthropic profile (~/.config/anthropic) is configured, but a claude.ai login exists \u2014 using the claude.ai login. Set ANTHROPIC_PROFILE=<name> to use the profile instead.${""}`,
      {
        level: "warn",
      },
    ),
      queueMicrotask(() => G("tengu_wif_implicit_profile_skipped_stored_login", {})));
  })),
    (zvi = Cn(() => {
      let e = _9() ?? "profile",
        t = e === "profile-implicit" && V2e() === "user_oauth";
      T(
        `Using Anthropic profile auth (${e}); ${t ? "a claude.ai login (/login) would take precedence over it" : "this takes precedence over any stored claude.ai login"}`,
        {
          level: "info",
        },
      );
    })));
  K9r = new Set(["claude-desktop", "local-agent", "claude-vscode"]);
  BG = Ahe(
    async () => {
      let e = performance.now();
      T("[API:auth] AWS credential resolve start");
      let t = await p0d(),
        n = await m0d();
      if (t || n) await coi();
      return (
        T(`[API:auth] AWS credential resolve done in ${Math.round(performance.now() - e)}ms`),
        n
      );
    },
    (e) => {
      let t = e?.expiration,
        n = t === void 0 ? void 0 : t - Date.now();
      if (n === void 0 || n <= jvi + u0d) return c0d;
      return n - jvi;
    },
  );
  N4e = Ahe(async () => await y0d(), h0d);
  V4e = Cn(() => {
    if (md()) return null;
    let e = Dt();
    if (!e.primaryApiKey) return null;
    return {
      key: e.primaryApiKey,
      source: "/login managed key",
    };
  });
  FCn = new Set();
  Ws = Cn(() => {
    if (md()) return null;
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN)
      return {
        accessToken: process.env.CLAUDE_CODE_OAUTH_TOKEN,
        refreshToken: null,
        expiresAt: null,
        scopes: Gvi(),
        subscriptionType: process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE || null,
        rateLimitTier: process.env.CLAUDE_CODE_RATE_LIMIT_TIER || null,
      };
    let e = b9();
    if (e)
      return {
        accessToken: e,
        refreshToken: null,
        expiresAt: null,
        scopes: Ebr() ?? Gvi(),
        subscriptionType: process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE || null,
        rateLimitTier: process.env.CLAUDE_CODE_RATE_LIMIT_TIER || null,
      };
    try {
      let r = wl().read()?.claudeAiOauth;
      if (!r?.accessToken) return null;
      return r;
    } catch (t) {
      return (ke(t), null);
    }
  });
  U9r = new Map();
  nL = oRt(async () => {
    if (md()) return null;
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN || b9()) return Ws();
    try {
      let n = (await wl().readAsync())?.claudeAiOauth;
      if (!n?.accessToken) return null;
      return n;
    } catch (e) {
      return (ke(e), null);
    }
  });
  g1t = oRt(async () => {
    if (md()) return null;
    let e = Dt();
    if (!e.primaryApiKey) return null;
    return {
      key: e.primaryApiKey,
      source: "/login managed key",
    };
  });
  ((lwi = ["EACCES", "EPERM", "EBUSY", "EIO", "EISDIR", "ELOOP"]),
    (V0d = new RegExp(`\\b(${lwi.join("|")})\\b`)));
  cwi = class cwi extends Error {};
});
var eii = {};
_t(eii, {
  withOAuth401Retry: () => withOAuth401Retry,
  getWebFetchUserAgent: () => getWebFetchUserAgent,
  getUserAgent: () => getUserAgent,
  getMCPUserAgent: () => getMCPUserAgent,
  getClientPlatform: () => _x,
  getAuthHeadersAsync: () => getAuthHeadersAsync,
  getAuthHeaders: () => getAuthHeaders,
});
function getUserAgent() {
  let e = process.env.CLAUDE_AGENT_SDK_VERSION
      ? `, agent-sdk/${process.env.CLAUDE_AGENT_SDK_VERSION}`
      : "",
    t = process.env.CLAUDE_AGENT_SDK_CLIENT_APP
      ? `, client-app/${process.env.CLAUDE_AGENT_SDK_CLIENT_APP}`
      : "",
    n = wAn(),
    r = n ? `, workload/${n}` : "";
  return `claude-cli/${
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION
  } (external, ${process.env.CLAUDE_CODE_ENTRYPOINT ?? "cli"}${e}${t}${r})`;
}
function getMCPUserAgent() {
  let e = [];
  if (process.env.CLAUDE_CODE_ENTRYPOINT) e.push(process.env.CLAUDE_CODE_ENTRYPOINT);
  if (process.env.CLAUDE_AGENT_SDK_VERSION)
    e.push(`agent-sdk/${process.env.CLAUDE_AGENT_SDK_VERSION}`);
  if (process.env.CLAUDE_AGENT_SDK_CLIENT_APP)
    e.push(`client-app/${process.env.CLAUDE_AGENT_SDK_CLIENT_APP}`);
  let t = e.length > 0 ? ` (${e.join(", ")})` : "";
  return `claude-code/${
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
    }.VERSION
  }${t}`;
}
function getWebFetchUserAgent() {
  return `Claude-User (${dy()}; +https://support.anthropic.com/)`;
}
async function getAuthHeadersAsync() {
  if (!lI() && iH())
    try {
      let { getWIFCredentials: e, getWIFTokenCache: t } = await Promise.resolve().then(
          () => (yje(), kjr),
        ),
        [n, r] = await Promise.all([t(), e()]);
      if (n !== null)
        return {
          headers: {
            ...r?.extraHeaders,
            Authorization: `Bearer ${await n.getToken()}`,
            "anthropic-beta": kw,
          },
        };
    } catch (e) {
      return (
        T(`WIF auth header resolution failed: ${e instanceof Error ? e.message : String(e)}`, {
          level: "error",
        }),
        {
          headers: {},
          error: e instanceof Error ? e.message : String(e),
          reasonCode: "wif_error",
        }
      );
    }
  return getAuthHeaders();
}
function getAuthHeaders() {
  if (g7())
    return {
      headers: {},
      error: "Anthropic auth not used on third-party providers",
      reasonCode: "third_party",
    };
  if (bo()) {
    let t = Ws();
    if (!t?.accessToken)
      return {
        headers: {},
        error: "No OAuth token available",
        reasonCode: "no_oauth_token",
      };
    return {
      headers: {
        Authorization: `Bearer ${t.accessToken}`,
        "anthropic-beta": kw,
      },
    };
  }
  if (fr() === "gateway")
    return {
      headers: {},
      error: "Not available when using a Cloud gateway",
      reasonCode: "gateway",
    };
  let e = lI();
  if (!e)
    return {
      headers: {},
      error: "No API key available",
      reasonCode: "no_api_key",
    };
  return {
    headers: {
      "x-api-key": e,
    },
  };
}
async function withOAuth401Retry(e, t) {
  try {
    return await e();
  } catch (n) {
    if (!po.isAxiosError(n)) throw n;
    let r = n.response?.status;
    if (
      !(
        r === 401 ||
        (t?.also403Revoked &&
          r === 403 &&
          typeof n.response?.data === "string" &&
          n.response.data.includes("OAuth token has been revoked"))
      )
    )
      throw n;
    let s = Ws()?.accessToken;
    if (!s) throw n;
    return (await ZB(s), await e());
  }
}
