// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lT
// matched 2.1.88 source: src/utils/permissions/permissionSetup.ts
// class=modified (alt of src/utils/permissions/permissionSetup.ts)  jaccard=0.0754  score=0.3586  fileCov=0.0871
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function C1i(e) {
  let t = TU(e.cli.effort);
  if (t !== void 0) return t;
  if (e.settings.ultracode === true) return "xhigh";
  return Tke(e.settings.effortLevel);
}
function QOd() {
  let e = at("tengu_auto_mode_config", k1i);
  return e !== k1i && e?.enabled === "disabled";
}
function D1i(e) {
  let { cli: t, env: n, settings: r, agentFrontmatter: o } = e,
    s = t.permissionMode,
    i = t.dangerouslySkipPermissions,
    a = o?.permissionMode;
  if (ut(n.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
    let h = i || (s && s !== "default") || (a && a !== "default"),
      y =
        "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " +
        "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    return {
      mode: "default",
      notification: h ? y : void 0,
      fromAutoFallback: false,
    };
  }
  let l = at("tengu_disable_bypass_permissions_mode", false),
    c = r.permissions?.disableBypassPermissionsMode === "disable",
    u = l || c,
    d = QOd(),
    p = [],
    f;
  if (i)
    if (L1i("bypassPermissions")) ((f = R1i), p.push("default"));
    else p.push("bypassPermissions");
  if (s) {
    let h = jO(s);
    if (L1i(h)) ((f = R1i), p.push("default"));
    else if (h === "auto") {
      if (d)
        T("auto mode circuit breaker active (cached) \u2014 falling back to default", {
          level: "warn",
        });
      else p.push("auto");
    } else p.push(h);
  }
  if (a)
    if (a === "auto" && d)
      T("agent frontmatter requested auto mode but circuit breaker active \u2014 falling through", {
        level: "warn",
      });
    else p.push(a);
  if (r.permissions?.defaultMode) {
    let h = r.permissions.defaultMode;
    if (ut(n.CLAUDE_CODE_REMOTE) && !["acceptEdits", "plan", "default", "auto"].includes(h))
      (T(
        `settings defaultMode "${h}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`,
        {
          level: "warn",
        },
      ),
        G("tengu_ccr_unsupported_default_mode_ignored", {
          mode_hash: Dd(h),
        }));
    else if (h === "auto") {
      if (
        !["policySettings", "userSettings", "flagSettings"].some(
          (b) => yn(b)?.permissions?.defaultMode === "auto",
        )
      )
        (T(
          'settings defaultMode "auto" ignored \u2014 only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)',
          {
            level: "warn",
          },
        ),
          G("tengu_settings_auto_mode_untrusted_source_ignored", {}));
      else if (d)
        T("auto mode circuit breaker active (cached) \u2014 falling back to default", {
          level: "warn",
        });
      else p.push("auto");
    } else p.push(h);
  }
  let m;
  for (let h of p) {
    if (h === "bypassPermissions" && u) {
      if (l)
        (T("bypassPermissions mode is disabled by feature gate", {
          level: "warn",
        }),
          (f = "Bypass permissions mode was disabled by your organization policy"));
      else
        (T("bypassPermissions mode is disabled by settings", {
          level: "warn",
        }),
          (f = "Bypass permissions mode was disabled by settings"));
      continue;
    }
    m = {
      mode: h,
      notification: f,
    };
    break;
  }
  let g = false;
  if (!m) {
    let h = "default";
    if (
      !d &&
      r.permissions?.disableAutoMode !== "disable" &&
      r.disableAutoMode !== "disable" &&
      at("tengu_harbor_willow", false) &&
      (!t.isNonInteractiveSession || at("tengu_moss_anchor", false))
    )
      ((h = "auto"), (g = true));
    m = {
      mode: h,
      notification: f,
    };
  }
  return {
    mode: m.mode,
    notification: m.notification,
    fromAutoFallback: g,
  };
}
function P1i(e) {
  let t =
    e.cli.fallbackModel?.split(",") ??
    (Array.isArray(e.settings.fallbackModel) ? e.settings.fallbackModel : void 0);
  if (t === void 0) return;
  let n = new Set(),
    r = [];
  for (let o of t) {
    let s = typeof o === "string" ? o.trim() : "";
    if (s === "") continue;
    let i = zo(s === "default" ? Ey() : s);
    if (n.has(i)) continue;
    if (!xa(i)) continue;
    if ((n.add(i), r.push(i), r.length === ZOd)) break;
  }
  return r.length > 0 ? r : void 0;
}
function M1i(e) {
  let { cli: t, env: n, settings: r, agentFrontmatter: o } = e,
    s = t.model === "default" ? Ey() : t.model,
    i = s,
    a = o?.model,
    l;
  if (!s && a && a !== "inherit") ((l = a), (s = zo(a)), (i = a));
  let c = false,
    u = s;
  if (u === void 0) ((u = n.ANTHROPIC_MODEL || r.model || void 0), (i = u));
  let d;
  if (u && !xa(u)) {
    let m = l !== void 0 && !c ? l : u;
    if (!(m.trim().toLowerCase() === "default" || U2r(m)) && !c) d = m;
    ((u = void 0), (i = void 0), (s = void 0));
  }
  let p = u || null,
    f = zo(p ?? Ey());
  return {
    effectiveModel: s,
    initialMainLoopModel: p,
    resolvedInitialModel: f,
    rawModelRequest: i || null,
    restrictedModel: d,
  };
}
function $1i(e) {
  let t = e.cli.systemPrompt,
    n = e.cli.appendSystemPrompt,
    r = lCs();
  if (r)
    n = n
      ? `${n}

${r}`
      : r;
  return {
    systemPrompt: t,
    appendSystemPrompt: n,
  };
}
function L1i(e) {
  if (!Js()) return false;
  if (e === "bypassPermissions") return !uj() && !Dt().bypassPermissionsModeAccepted;
  if (e === "auto") return !RG();
  return false;
}
var k1i,
  ZOd = 3,
  R1i =
    "Permission mode downgraded to default \u2014 bypass/auto requires accepting the disclaimer interactively first";
