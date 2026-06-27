// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Fso
// matched 2.1.88 source: src/bridge/remoteBridgeCore.ts
// class=new  jaccard=0.0083  score=0.0715  fileCov=0.0093
// note: nearest: src/bridge/remoteBridgeCore.ts (0.0083); 0 renamed
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
    ok: !1,
    reason: "policy_disabled"
  };
  if (!Jl()) return {
    ok: !1,
    reason: "wrong_provider"
  };
  if (Vi()) return {
    ok: !1,
    reason: "essential_traffic_only"
  };
  let e = XS();
  if (e) return {
    ok: !0,
    accessToken: e,
    expanded: !1
  };
  await ch();
  let t = Ws();
  if (!t?.accessToken) return {
    ok: !1,
    reason: "no_token"
  };
  if (jso(t.scopes)) return {
    ok: !0,
    accessToken: t.accessToken,
    expanded: !1
  };
  if (!t.refreshToken) return {
    ok: !1,
    reason: "no_refresh"
  };
  try {
    return await p1t(async ({
      lockedTokens: n
    }) => {
      if (!n?.refreshToken) return {
        ok: !1,
        reason: "no_refresh"
      };
      if (jso(n.scopes) && n.accessToken) return {
        ok: !0,
        accessToken: n.accessToken,
        expanded: !1
      };
      let r = await ite(n.refreshToken, {
        clientId: n.clientId,
        scopes: Uo([...Aae, ...cFe(n.scopes), Ysa, Xsa])
      });
      if (await jle(r), !jso(r.scopes)) return {
        ok: !1,
        reason: "expand_failed",
        detail: "refresh succeeded but projects scopes not granted"
      };
      return {
        ok: !0,
        accessToken: r.accessToken,
        expanded: !0
      };
    });
  } catch (n) {
    return {
      ok: !1,
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