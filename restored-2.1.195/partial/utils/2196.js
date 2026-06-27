// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Cv
// matched 2.1.88 source: src/utils/teleport/api.ts
// class=partial  jaccard=0.1584  score=0.3764  fileCov=0.2147
// note: low-confidence suggestion: src/utils/teleport/api.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Cv] deps: Hp, Rc, H0, Gx, Xr, dn, oo, je, BR, At, vn, Ls, Jt
_zr = require("crypto"), oOi = [2000, 4000, 8000, 16000], yzr = oOi.length;
k$d = ve(() => ol.object({
  id: ol.string(),
  title: ol.string(),
  description: ol.string(),
  status: ol.enum(["idle", "working", "waiting", "completed", "archived", "cancelled", "rejected"]),
  repo: ol.object({
    name: ol.string(),
    owner: ol.object({
      login: ol.string()
    }),
    default_branch: ol.string().optional()
  }).nullable(),
  turns: ol.array(ol.string()),
  created_at: ol.string(),
  updated_at: ol.string()
}));
function R$d(e) {
  let t = $s();
  switch (e) {
    case "api":
      return t.BASE_API_URL;
    case "claude-ai":
      return t.CLAUDE_AI_ORIGIN;
    case "mcp-proxy":
      return t.MCP_PROXY_URL;
    case "frame":
      return t.BASE_API_URL;
    case "ccr-session":
      {
        let n = process.argv.indexOf("--sdk-url"),
          r = n >= 0 ? process.argv[n + 1] : void 0;
        if (!r) throw Error("ccr-session host requires --sdk-url");
        return r.replace(/\/$/, "");
      }
  }
}
async function fetchCodeSessionsFromSessionsAPI(e, t, n, r = {}, o = false) {
  if (!r.bypassEssentialTrafficOnly && true && Vi()) return {
    ok: false,
    reason: "essential-traffic-only"
  };
  if (fr() !== "firstParty") return {
    ok: false,
    reason: "data-residency"
  };
  let i = {},
    a = t,
    l = null;
  if (r.auth === "teleport-org") {
    if (await ch(), WCn()) return {
      ok: false,
      reason: "no-auth",
      detail: "OAuth refresh token is no longer valid; run /login to re-authenticate"
    };
    if (!Ws()?.accessToken) return {
      ok: false,
      reason: "no-auth",
      detail: "No OAuth token in keychain"
    };
    let {
      accessToken: u,
      orgUUID: d
    } = await Lj();
    l = u, i = {
      ...aH(u),
      "x-organization-uuid": d
    }, a = t.replace(":orgUUID", d);
  } else if (r.auth === "session-jwt") {
    let u = XS();
    if (!u) return {
      ok: false,
      reason: "no-auth",
      detail: "No session access token"
    };
    i = {
      Authorization: `Bearer ${u}`
    };
  } else if (r.auth !== "none") {
    if (r.refreshOAuth) try {
      await ch();
    } catch (d) {
      T(`firstPartyApi: refreshOAuth failed (${d instanceof Error ? d.message : d}); proceeding with cached token`);
    }
    let u = r.auth === "async" ? await b1t() : K9();
    if (u.error && r.auth !== "optional") return {
      ok: false,
      reason: "no-auth",
      detail: u.error
    };
    i = u.headers;
  }
  let c;
  try {
    c = await po.request({
      method: e,
      baseURL: R$d(r.host ?? "api"),
      url: a,
      data: n,
      timeout: r.timeout ?? 15000,
      signal: r.signal,
      responseType: r.responseType,
      validateStatus: r.validateStatus,
      maxContentLength: r.maxContentLength,
      maxBodyLength: r.maxBodyLength,
      headers: {
        "User-Agent": m7(),
        ...i,
        ...r.headers
      }
    });
  } catch (u) {
    if (l !== null && !o && !r.isBackground && po.isAxiosError(u) && u.response?.status === 401) {
      let d = await aOi(l);
      if (d === "retry") return fetchCodeSessionsFromSessionsAPI(e, t, n, r, true);
      if (d !== null) return d;
    }
    throw u;
  }
  if (l !== null && c.status === 401 && !o && !r.isBackground) {
    let u = await aOi(l);
    if (u === "retry") return fetchCodeSessionsFromSessionsAPI(e, t, n, r, true);
    if (u !== null) return u;
  }
  return {
    ok: true,
    data: c.data,
    status: c.status,
    response: c
  };
}
async function aOi(e) {
  if (await ZB(e)) return "retry";
  if (WCn()) return {
    ok: false,
    reason: "no-auth",
    detail: "OAuth refresh token is no longer valid; run /login to re-authenticate"
  };
  return null;
}
var Os;