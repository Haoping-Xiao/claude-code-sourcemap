// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fso
// matched 2.1.88 source: node_modules/@azure/msal-node/dist/client/ClientCredentialClient.mjs
// class=new  jaccard=0.0313  score=0.1518  fileCov=0.0379
// note: nearest: node_modules/@azure/msal-node/dist/client/ClientCredentialClient.mjs (0.0313); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Fso = E(() => {
  Rc();
  c_();
  kM();
  Jt();
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
});
async function a1n() {
  if (!Us("allow_projects_tool")) return {
    ok: false,
    reason: "policy_disabled"
  };
  if (!Jl()) return {
    ok: false,
    reason: "wrong_provider"
  };
  if (Vi()) return {
    ok: false,
    reason: "essential_traffic_only"
  };
  let e = XS();
  if (e) return {
    ok: true,
    accessToken: e,
    expanded: false
  };
  await ch();
  let t = Ws();
  if (!t?.accessToken) return {
    ok: false,
    reason: "no_token"
  };
  if (jso(t.scopes)) return {
    ok: true,
    accessToken: t.accessToken,
    expanded: false
  };
  if (!t.refreshToken) return {
    ok: false,
    reason: "no_refresh"
  };
  try {
    return await p1t(async ({
      lockedTokens: n
    }) => {
      if (!n?.refreshToken) return {
        ok: false,
        reason: "no_refresh"
      };
      if (jso(n.scopes) && n.accessToken) return {
        ok: true,
        accessToken: n.accessToken,
        expanded: false
      };
      let r = await ite(n.refreshToken, {
        clientId: n.clientId,
        scopes: Uo([...Aae, ...cFe(n.scopes), Ysa, Xsa])
      });
      if (await jle(r), !jso(r.scopes)) return {
        ok: false,
        reason: "expand_failed",
        detail: "refresh succeeded but projects scopes not granted"
      };
      return {
        ok: true,
        accessToken: r.accessToken,
        expanded: true
      };
    });
  } catch (n) {
    return {
      ok: false,
      reason: "expand_failed",
      detail: be(n)
    };
  }
}
function jso(e) {
  return !!e && e.includes(Ysa) && e.includes(Xsa);
}
var Ysa = "user:projects:read",
  Xsa = "user:projects:write";