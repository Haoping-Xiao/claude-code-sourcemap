// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fso
// matched 2.1.88 source: src/bridge/remoteBridgeCore.ts
// class=modified (alt of src/bridge/remoteBridgeCore.ts)  jaccard=0.0082  score=0.0883  fileCov=0.0089
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Fso] deps: Rc, c_, kM, Jt
Fct = class Fct extends Error {
  action;
  status;
  body;
  constructor(e, t, n) {
    super(`Projects API: ${e} failed (HTTP ${t})${Kip(n)}`);
    this.action = e;
    this.status = t;
    this.body = n;
    this.name = "ProjectsApiError";
  }
};
async function initEnvLessBridgeCore() {
  if (!Us("allow_projects_tool"))
    return {
      ok: false,
      reason: "policy_disabled",
    };
  if (!Jl())
    return {
      ok: false,
      reason: "wrong_provider",
    };
  if (Vi())
    return {
      ok: false,
      reason: "essential_traffic_only",
    };
  let e = XS();
  if (e)
    return {
      ok: true,
      accessToken: e,
      expanded: false,
    };
  await ch();
  let t = Ws();
  if (!t?.accessToken)
    return {
      ok: false,
      reason: "no_token",
    };
  if (jso(t.scopes))
    return {
      ok: true,
      accessToken: t.accessToken,
      expanded: false,
    };
  if (!t.refreshToken)
    return {
      ok: false,
      reason: "no_refresh",
    };
  try {
    return await p1t(async ({ lockedTokens: n }) => {
      if (!n?.refreshToken)
        return {
          ok: false,
          reason: "no_refresh",
        };
      if (jso(n.scopes) && n.accessToken)
        return {
          ok: true,
          accessToken: n.accessToken,
          expanded: false,
        };
      let r = await ite(n.refreshToken, {
        clientId: n.clientId,
        scopes: Uo([...Aae, ...cFe(n.scopes), Ysa, Xsa]),
      });
      if ((await jle(r), !jso(r.scopes)))
        return {
          ok: false,
          reason: "expand_failed",
          detail: "refresh succeeded but projects scopes not granted",
        };
      return {
        ok: true,
        accessToken: r.accessToken,
        expanded: true,
      };
    });
  } catch (n) {
    return {
      ok: false,
      reason: "expand_failed",
      detail: be(n),
    };
  }
}
function jso(e) {
  return !!e && e.includes(Ysa) && e.includes(Xsa);
}
var Ysa = "user:projects:read",
  Xsa = "user:projects:write";
