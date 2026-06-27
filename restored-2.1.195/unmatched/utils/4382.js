// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rEl
// matched 2.1.88 source: src/utils/teleport/api.ts
// class=new  jaccard=0.0251  score=0.1258  fileCov=0.0304
// note: nearest: src/utils/teleport/api.ts (0.0251); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rEl] deps: Xr
ZSl = require("crypto"), Nhf = ve(() => H.object({
  projectId: H.string(),
  writes: H.array(H.string()),
  deletes: H.array(H.string()),
  localDir: H.string().optional()
})), eEl = new Map(), Bhf = /^plan_[a-z0-9]{1,16}_[a-f0-9]{12}$/;
async function MRo() {
  if (!Jl()) return {
    ok: !1,
    reason: "wrong_provider"
  };
  if (Vi()) return {
    ok: !1,
    reason: "essential_traffic_only"
  };
  await ch();
  let e = Ws();
  if (!e?.accessToken) return DRo();
  if (Nzt(e.scopes)) return {
    ok: !0,
    accessToken: e.accessToken,
    expanded: !1
  };
  if (!e.refreshToken) return DRo();
  if (PRo) {
    let r = await EXn();
    return r.ok ? {
      ok: !0,
      accessToken: r.accessToken,
      expanded: !1
    } : {
      ok: !1,
      reason: "expand_failed",
      detail: "prior expansion attempt this session failed; not retrying"
    };
  }
  let t = await (async () => {
    try {
      return await p1t(async ({
        lockedTokens: r
      }) => {
        if (!r?.refreshToken) return DRo();
        if (Nzt(r.scopes) && r.accessToken) return {
          ok: !0,
          accessToken: r.accessToken,
          expanded: !1
        };
        let o = await ite(r.refreshToken, {
          clientId: r.clientId,
          scopes: Uo([...Aae, ...cFe(r.scopes), oEl, sEl])
        });
        if (await jle(o), !Nzt(o.scopes)) return PRo = !0, {
          ok: !1,
          reason: "expand_failed",
          detail: "refresh succeeded but design scopes not granted"
        };
        return {
          ok: !0,
          accessToken: o.accessToken,
          expanded: !0
        };
      });
    } catch (r) {
      return {
        ok: !1,
        reason: "expand_failed",
        detail: be(r)
      };
    }
  })();
  if (t.ok || t.reason !== "expand_failed") return t;
  let n = await EXn();
  if (n.ok) return T(`Design-scope expansion failed (${t.detail ?? "no detail"}); using the stored design credential instead.`), {
    ok: !0,
    accessToken: n.accessToken,
    expanded: !1
  };
  return t;
}
async function DRo() {
  let e = await EXn();
  if (e.ok) return {
    ok: !0,
    accessToken: e.accessToken,
    expanded: !1
  };
  return {
    ok: !1,
    reason: e.reason,
    detail: e.detail
  };
}
function Nzt(e) {
  return !!e && e.includes(oEl) && e.includes(sEl);
}
function iEl() {
  if (!Jl() || Vi() || PRo) return !1;
  let e = Ws();
  return !!e?.accessToken && !!e.refreshToken && !Nzt(e.scopes);
}
function $Ro() {
  if (!Jl() || Vi()) return !1;
  let e = Ws();
  if (e?.accessToken) {
    if (Nzt(e.scopes) || e.refreshToken) return !1;
  }
  return !Tbt()?.accessToken;
}
var oEl = "user:design:read",
  sEl = "user:design:write",
  PRo = !1;