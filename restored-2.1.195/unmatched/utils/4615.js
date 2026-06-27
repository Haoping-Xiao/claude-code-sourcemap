// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sMl
// matched 2.1.88 source: src/state/onChangeAppState.ts
// class=new  jaccard=0.0378  score=0.0558  fileCov=0.1048
// note: nearest: src/state/onChangeAppState.ts (0.0378); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sMl = E(() => {
  Xr();
  oMl = ve(() => {
    let e = H.object({
        enable_email: H.boolean().nullish(),
        enable_push: H.boolean().nullish()
      }),
      t = H.object({
        bogosort: e.nullish(),
        code_requires_action: e.nullish()
      }),
      n = H.object({
        has_active_channel: H.boolean(),
        platforms: H.array(H.string()).nullish().transform(r => r ?? []),
        most_recent_token_refresh: H.string().nullish()
      });
    return H.object({
      account_id: H.number().nullish(),
      organization_id: H.number().nullish(),
      preferences: H.object({
        feature_preference: t.nullish()
      }).nullish(),
      push_reachability: n.nullish()
    });
  });
});
function dMl() {
  let e = Dr(),
    t = Dt();
  return {
    agentPushNotifEnabled: e.agentPushNotifEnabled ?? t.agentPushNotifEnabled,
    inputNeededNotifEnabled: e.inputNeededNotifEnabled ?? t.inputNeededNotifEnabled
  };
}
function QOo() {
  return bo();
}
async function J0f() {
  if (!QOo()) return {
    ok: !1,
    reason: "no_auth"
  };
  try {
    let e = await Os.get(pMl, {
      timeout: iMl
    });
    if (!e.ok) return {
      ok: !1,
      reason: "fetch_failed"
    };
    let t = oMl().safeParse(e.data);
    if (!t.success) return In("warn", "notif_prefs_fetch_parse_failed", {
      issues: t.error.issues.map(n => n.path.join(".")).join(",")
    }), {
      ok: !1,
      reason: "parse_failed"
    };
    return {
      ok: !0,
      prefs: t.data
    };
  } catch (e) {
    let {
      kind: t
    } = $A(e);
    return In("warn", "notif_prefs_fetch_failed", {
      kind: t
    }), {
      ok: !1,
      reason: "fetch_failed"
    };
  }
}
async function Q0f(e) {
  if (!QOo()) return;
  try {
    if (!(await Os.patch(pMl, e, {
      timeout: iMl
    })).ok) {
      It("notif_prefs_patch", "no_auth");
      return;
    }
    In("info", "notif_prefs_patch_ok", {}), xe("notif_prefs_patch");
  } catch (t) {
    let {
      kind: n
    } = $A(t);
    In("warn", "notif_prefs_patch_failed", {
      kind: n
    }), Le("notif_prefs_patch", "http_error");
  }
}
function ZOo() {
  let e = dMl(),
    t = {};
  if (typeof e.agentPushNotifEnabled === "boolean") t.bogosort = {
    enable_push: e.agentPushNotifEnabled
  };
  if (typeof e.inputNeededNotifEnabled === "boolean") t.code_requires_action = {
    enable_push: e.inputNeededNotifEnabled
  };
  if (Object.keys(t).length === 0) return;
  Q0f({
    preferences: {
      feature_preference: t
    }
  });
}
async function fMl() {
  if (!QOo()) {
    It("notif_prefs_hydrate", "no_auth"), b7t.setState(() => null), In("info", "notif_prefs_hydrate_skipped", {
      reason: "no_auth"
    });
    return;
  }
  let e = await J0f();
  if (!e.ok) {
    Le("notif_prefs_hydrate", e.reason), b7t.setState(() => null), In("info", "notif_prefs_hydrate_skipped", {
      reason: e.reason
    });
    return;
  }
  let t = e.prefs,
    n = t.push_reachability ?? null;
  if (b7t.setState(() => n), n) G("tengu_push_reachability", {
    has_active_channel: n.has_active_channel,
    platform_count: n.platforms.length
  });
  let r = t.preferences?.feature_preference,
    o = r?.bogosort?.enable_push,
    s = r?.code_requires_action?.enable_push,
    i = dMl(),
    a = {};
  if (i.agentPushNotifEnabled === void 0 && typeof o === "boolean") a.agentPushNotifEnabled = o;
  if (i.inputNeededNotifEnabled === void 0 && typeof s === "boolean") a.inputNeededNotifEnabled = s;
  if (In("info", "notif_prefs_hydrate_result", {
    has_active_channel: n?.has_active_channel,
    server_bogosort: o,
    server_code_requires_action: s,
    seeded: Object.keys(a).length > 0
  }), Object.keys(a).length === 0) {
    xe("notif_prefs_hydrate");
    return;
  }
  io("userSettings", a), aMl.emit(), xe("notif_prefs_hydrate");
}
var iMl = 1e4,
  b7t,
  aMl,
  lMl,
  cMl,
  uMl,
  pMl = "/api/claude_code/notification/preferences";