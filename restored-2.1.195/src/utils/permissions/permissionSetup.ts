// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gy
// matched 2.1.88 source: src/utils/permissions/permissionSetup.ts
// class=modified  jaccard=0.3702  score=0.6074  fileCov=0.4866
// note: deminified; 31 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: verifyAutoModeGateAccess, transitionPlanAutoMode, transitionPermissionMode, stripDangerousPermissionsForAutoMode, shouldPlanUseAutoMode, shouldDisableBypassPermissions, setPermissionModeWithGuards, restoreDangerousPermissions, removeDangerousPermissions, prepareContextForPlanMode, parseToolListFromCLI, parseBaseToolsFromCLI, isYoloEquivStripEnabledForEntrypoint, isOverlyBroadPowerShellAllowRule, isOverlyBroadBashAllowRule, isDefaultPermissionModeAuto, isDangerousTaskPermission,  …
// [unwrapped __esm module Gy] deps: Uge, Sae, Ox, fh, eit, N6e, tWt, NB, sN, je, At, vn, lg, vf, sr, rcr, clc, CYn, DFn, DE, $I, QH, fre, ft, Un, kt, Du, fb, Il, Lo, RE, fn, sp, co, jG, dr, Jt, Mp, pMo, Hoe
((kqo = (xqo(), ro(ylc))),
  (Znm = (Eoe(), ro(Ope))),
  (erm = (u0o(), ro(c0o))),
  (Rqo = [...fv, "cliArg", "command", "session", "toolsNarrowing", "mcpServerPolicy"]),
  (trm = new Set([])));
function Fqo(e) {
  if (fv.includes(e)) {
    let t = xg(e);
    if (t) {
      let n = Clc.relative($t(), t);
      return n.length < t.length ? n : t;
    }
  }
  return e;
}
function findDangerousClassifierPermissions(rules, cliAllowedTools) {
  let n = [];
  for (let r of rules)
    if (r.ruleBehavior === "allow" && C6e(r.ruleValue.toolName, r.ruleValue.ruleContent)) {
      let o = r.ruleValue.ruleContent
        ? `${r.ruleValue.toolName}(${r.ruleValue.ruleContent})`
        : `${r.ruleValue.toolName}(*)`;
      n.push({
        ruleValue: r.ruleValue,
        source: r.source,
        ruleDisplay: o,
        sourceDisplay: Fqo(r.source),
      });
    }
  for (let r of cliAllowedTools) {
    let o = r.match(/^([^(]+)(?:\(([^)]*)\))?$/);
    if (o) {
      let s = o[1].trim(),
        i = o[2]?.trim();
      if (C6e(s, i))
        n.push({
          ruleValue: {
            toolName: s,
            ruleContent: i,
          },
          source: "cliArg",
          ruleDisplay: i ? r : `${s}(*)`,
          sourceDisplay: "--allowed-tools",
        });
    }
  }
  return n;
}
function Gqo(e) {
  return e === void 0 || /^[\s*]+$/.test(e);
}
function crm(e) {
  if (e.toolName === Ss) return "powershell";
  let t = e.ruleContent;
  if (t === void 0 || Gqo(t)) return "bare";
  if (C6t(t, vYn)) return "cluster";
  if (C6t(t, TYn)) return "network";
  return "ace";
}
function isOverlyBroadBashAllowRule(e, t = false) {
  if (e.toolName !== Co) return false;
  let n = e.ruleContent;
  if (n === void 0 || Gqo(n)) return true;
  return t && C6t(n, lrm);
}
function isOverlyBroadPowerShellAllowRule(e) {
  return e.toolName === Ss && Gqo(e.ruleContent);
}
function isYoloEquivStripEnabledForEntrypoint() {
  let e = at("tengu_ant_yolo_equiv_strip_config", {});
  if (!e.enabled) return false;
  let t = Oe.CLAUDE_CODE_ENTRYPOINT ?? "cli";
  if (e.includeEntrypoints) return e.includeEntrypoints.includes(t);
  return !(e.excludeEntrypoints ?? []).includes(t);
}
function findOverlyBroadBashPermissions(e, t, n = false) {
  let r = [];
  for (let o of e)
    if (o.ruleBehavior === "allow" && isOverlyBroadBashAllowRule(o.ruleValue, n))
      r.push({
        ruleValue: o.ruleValue,
        source: o.source,
        ruleDisplay: o.ruleValue.ruleContent
          ? `${o.ruleValue.toolName}(${o.ruleValue.ruleContent})`
          : `${o.ruleValue.toolName}(*)`,
        sourceDisplay: Fqo(o.source),
      });
  for (let o of t) {
    let s = Ig(o);
    if (isOverlyBroadBashAllowRule(s, n))
      r.push({
        ruleValue: s,
        source: "cliArg",
        ruleDisplay: s.ruleContent ? `${s.toolName}(${s.ruleContent})` : `${s.toolName}(*)`,
        sourceDisplay: "--allowed-tools",
      });
  }
  return r;
}
function findOverlyBroadPowerShellPermissions(e, t) {
  let n = [];
  for (let r of e)
    if (r.ruleBehavior === "allow" && isOverlyBroadPowerShellAllowRule(r.ruleValue))
      n.push({
        ruleValue: r.ruleValue,
        source: r.source,
        ruleDisplay: `${Ss}(*)`,
        sourceDisplay: Fqo(r.source),
      });
  for (let r of t) {
    let o = Ig(r);
    if (isOverlyBroadPowerShellAllowRule(o))
      n.push({
        ruleValue: o,
        source: "cliArg",
        ruleDisplay: `${Ss}(*)`,
        sourceDisplay: "--allowed-tools",
      });
  }
  return n;
}
function drm(e) {
  return OO.includes(e) || e === "session" || e === "cliArg";
}
function removeDangerousPermissions(e, t, n = false) {
  let r = new Map();
  for (let s of t) {
    if (!n && !drm(s.source)) continue;
    let i = s.source,
      a = r.get(i) || [];
    (a.push(s.ruleValue), r.set(i, a));
  }
  let o = e;
  for (let [s, i] of r)
    o = My(o, {
      type: "removeRules",
      rules: i,
      behavior: "allow",
      destination: s,
    });
  return o;
}
function stripDangerousPermissionsForAutoMode(context) {
  let t = [];
  for (let [o, s] of Object.entries(context.alwaysAllowRules)) {
    if (!s) continue;
    for (let i of s) {
      let a = Ig(i);
      t.push({
        source: o,
        ruleBehavior: "allow",
        ruleValue: a,
      });
    }
  }
  let n = findDangerousClassifierPermissions(t, []);
  if (n.length === 0)
    return context.strippedDangerousRules !== void 0
      ? context
      : {
          ...context,
          strippedDangerousRules: {},
        };
  for (let o of n)
    T(
      `Ignoring dangerous permission ${o.ruleDisplay} from ${o.sourceDisplay} (bypasses classifier)`,
    );
  let r = {};
  for (let [o, s] of Object.entries(context.strippedDangerousRules ?? {})) if (s) r[o] = [...s];
  for (let o of n) {
    let s = Pp(o.ruleValue),
      i = (r[o.source] ??= []);
    if (!i.includes(s)) i.push(s);
  }
  return {
    ...removeDangerousPermissions(context, n, true),
    strippedDangerousRules: r,
  };
}
function restoreDangerousPermissions(e) {
  let t = e.strippedDangerousRules;
  if (!t) return e;
  let n = e;
  for (let [r, o] of Object.entries(t)) {
    if (!o || o.length === 0) continue;
    n = My(n, {
      type: "addRules",
      rules: o.map(Ig),
      behavior: "allow",
      destination: r,
    });
  }
  return {
    ...n,
    strippedDangerousRules: void 0,
  };
}
function transitionPermissionMode(fromMode, toMode, context, r) {
  if (fromMode === toMode) return context;
  if (
    (Ebe({
      from: fromMode,
      to: toMode,
      trigger: r,
    }),
    Lge(fromMode, toMode),
    Asn(fromMode, toMode),
    fromMode === "plan" && toMode !== "plan")
  )
    xK(true);
  {
    if (toMode === "plan" && fromMode !== "plan") return prepareContextForPlanMode(context);
    let o = fromMode === "auto" || (fromMode === "plan" && (nO?.isAutoModeActive() ?? false)),
      s = toMode === "auto";
    if (s && !o) {
      if (!isAutoModeGateEnabled())
        throw Error("Cannot transition to auto mode: gate is not enabled");
      (nO?.setAutoModeActive(true), (context = stripDangerousPermissionsForAutoMode(context)));
    } else if (o && !s)
      (nO?.setAutoModeActive(false), B2(true), (context = restoreDangerousPermissions(context)));
  }
  if (fromMode === "plan" && toMode !== "plan" && context.prePlanMode)
    return {
      ...context,
      prePlanMode: void 0,
    };
  return context;
}
function setPermissionModeWithGuards(e, t, n, r) {
  if (e === "bypassPermissions") {
    if (wU())
      return {
        ok: false,
        error:
          "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration",
      };
    if (!t.isBypassPermissionsModeAvailable)
      return {
        ok: false,
        error:
          "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions",
      };
  }
  if (e === "auto" && !isAutoModeGateEnabled()) {
    let o = getAutoModeUnavailableReason();
    return {
      ok: false,
      error: o
        ? `Cannot set permission mode to auto: ${getAutoModeUnavailableNotification(o)}`
        : "Cannot set permission mode to auto",
    };
  }
  return (
    n((o) => {
      if (o.mode === e) return o;
      return {
        ...transitionPermissionMode(o.mode, e, o, r),
        mode: e,
      };
    }),
    setImmediate(() => {
      wke.emit();
    }),
    {
      ok: true,
      mode: e,
    }
  );
}
function parseBaseToolsFromCLI(e) {
  let t = e.join(" ").trim();
  if (fLo(t)) return mLo();
  let r = parseToolListFromCLI(e);
  if (r.includes("preset:default"))
    return c3()
      .map((o) => o.name)
      .concat(r.filter((o) => o !== "preset:default"));
  return r;
}
function prm({ processPwd: e, originalCwd: t }) {
  let { resolvedPath: n, isSymlink: r } = jd(qt(), e);
  return r ? n === Ilc.resolve(t) : false;
}
function initialPermissionModeFromCLI({
  permissionModeCli: e,
  dangerouslySkipPermissions: t,
  agentPermissionMode: n,
}) {
  if (bI()) {
    let o = t || (e && e !== "default") || (n && n !== "default"),
      s =
        "Permission mode forced to default \u2014 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " +
        "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
    if (o)
      process.stderr.write(`\u26A0 ${s}
`);
    return {
      mode: "default",
      notification: o ? s : void 0,
    };
  }
  let r = D1i({
    cli: {
      permissionMode: e,
      dangerouslySkipPermissions: t,
      isNonInteractiveSession: Ir(),
    },
    env: {
      ...process.env,
      CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: void 0,
    },
    settings: jo() || {},
    agentFrontmatter: n
      ? {
          permissionMode: n,
        }
      : void 0,
  });
  if ((nO?.setAutoModeFromFallback(r.fromAutoFallback), r.mode === "auto"))
    nO?.setAutoModeActive(true);
  return {
    mode: r.mode,
    notification: r.notification,
  };
}
function parseToolListFromCLI(e) {
  if (e.length === 0) return [];
  let t = [];
  for (let n of e) {
    if (!n) continue;
    let r = "",
      o = false;
    for (let s of n)
      switch (s) {
        case "(":
          ((o = true), (r += s));
          break;
        case ")":
          ((o = false), (r += s));
          break;
        case ",":
          if (o) r += s;
          else {
            if (r.trim()) t.push(r.trim());
            r = "";
          }
          break;
        case " ":
          if (o) r += s;
          else if (r.trim()) (t.push(r.trim()), (r = ""));
          break;
        default:
          r += s;
      }
    if (r.trim()) t.push(r.trim());
  }
  return t;
}
async function initializeToolPermissionContext({
  allowedToolsCli: e,
  disallowedToolsCli: t,
  baseToolsCli: n,
  permissionMode: r,
  allowDangerouslySkipPermissions: o,
  addDirs: s,
  bgSessionPermissionRules: i,
}) {
  let a = [],
    l = parseToolListFromCLI(e)
      .map(($) => Pp(Ig($)))
      .filter(($) => {
        let q = amn(Ig($).toolName);
        if (q)
          return (
            a.push(`Ignoring --allowedTools rule "${$}": ${q.error}. ${q.suggestion}.`),
            false
          );
        return true;
      }),
    c = Uo([...parseToolListFromCLI(t), ...ncr()]),
    u = !!n && n.length > 0 && fLo(n.join(" ").trim()) !== null,
    d = n && !u ? parseToolListFromCLI(n).map(wD) : [];
  dbr([wu, qc].some(($) => d.includes($) || l.some((q) => Ig(q).toolName === $)));
  let p = [];
  if (n && n.length > 0) {
    let $ = parseBaseToolsFromCLI(n),
      q = new Set($.map(wD)),
      V = (u ? mLo() : c3().map((Y) => Y.name)).filter((Y) => !q.has(Y));
    if (!u) {
      for (let Y of [Ss, wu, qc]) if (!q.has(Y) && !V.includes(Y)) V.push(Y);
    }
    p = V;
  }
  let f = new Map(),
    m = process.env.PWD;
  if (
    m &&
    m !== yr() &&
    prm({
      originalCwd: yr(),
      processPwd: m,
    })
  )
    f.set(m, {
      path: m,
      source: "session",
    });
  let g = at("tengu_disable_bypass_permissions_mode", false),
    y = (jo() || {}).permissions?.disableBypassPermissionsMode === "disable",
    b = (r === "bypassPermissions" || o) && !g && !y,
    _ = Cut(),
    S = [...c, ...p].map(Ig),
    A = S.some(($) => $.toolName === Co && $.ruleContent === void 0),
    C =
      S.some(($) => $.toolName === Co) ||
      _.some(($) => $.ruleBehavior === "deny" && $.ruleValue.toolName === Co),
    x =
      ut(process.env.CLAUDE_CODE_USE_POWERSHELL_TOOL) ||
      parseToolListFromCLI(n ?? [])
        .map(wD)
        .includes(Ss) ||
      l.some(($) => Ig($).toolName === Ss) ||
      S.some(($) => $.toolName === Ss) ||
      _.some(($) => $.ruleValue.toolName === Ss);
  if (Vt() === "windows" && Su() && C && !x) c = [...c, Ss];
  let I = [];
  if (!ut(process.env.CLAUDE_CODE_REMOTE) && process.env.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
    let $ = [
      ...findOverlyBroadBashPermissions(_, l, true),
      ...findOverlyBroadPowerShellPermissions(_, l),
    ];
    if ($.length > 0) {
      let q = $.map((Y) => crm(Y.ruleValue)),
        W = false,
        V = false;
      G("tengu_ant_overly_broad_bash_detected", {
        count: $.length,
        categories: Uo(q).sort().join(","),
        yoloEquivEnabled: W,
        willStrip: I.length,
        entrypoint: Oe.CLAUDE_CODE_ENTRYPOINT ?? "cli",
        ...false,
      });
    }
  }
  let k = [];
  if (r === "auto") k = findDangerousClassifierPermissions(_, l);
  let D = Nqo(
      {
        mode: r,
        additionalWorkingDirectories: f,
        alwaysAllowRules: {
          cliArg: l,
          ...(i && {
            session: i.allow,
          }),
        },
        alwaysDenyRules: {
          cliArg: c,
          ...(i && {
            session: i.deny,
          }),
          ...(p.length > 0 && {
            toolsNarrowing: p,
          }),
        },
        alwaysAskRules: {},
        mcpPermissionModeOverrides: {},
        isBypassPermissionsModeAvailable: b,
        ...(($) => ({
          isAutoModeAvailable: $,
          canAutoClassifierRun: $,
          chromeClassifierFloorEnabled:
            Oe.CLAUDE_CHROME_CLASSIFIER_FLOOR ?? at("tengu_cowork_chrome_automode_default", false),
        }))(isAutoModeGateEnabled()),
        isRemoteMode: Oe.CLAUDE_CODE_REMOTE || da(),
      },
      _,
    ),
    P = c3(),
    O = new Set([...P.map(($) => $.name), Co, Ss, wu, qc]),
    L = new Map([
      [Co, "command"],
      [Ss, "command"],
      [wu, "path"],
      [qc, "path"],
      ...P.filter(($) => $.ruleContentField).map(($) => [$.name, $.ruleContentField]),
    ]);
  for (let $ of [...cz(D), ...kHe(D)]) {
    if ($.source === "toolsNarrowing" || $.source === "session") continue;
    let { toolName: q, ruleContent: W } = $.ruleValue;
    if (HCe(q) || q.includes("_") || rmn(q).length > 0 || O.has(q)) {
      let V = L.get(q);
      if (V && W !== void 0) {
        let Y = W.indexOf(":");
        if (Y > 0 && W.slice(0, Y).trim() === V)
          a.push(
            `Permission ${$.ruleBehavior} rule "${Pp($.ruleValue)}" targets ${V} as a raw string and will not match \u2014 use ${q}(${"\u2026"}) for ${q}'s own matcher.`,
          );
      }
      continue;
    }
    a.push(
      `Permission ${$.ruleBehavior} rule "${Pp($.ruleValue)}" matches no known tool \u2014 check for typos.`,
    );
  }
  let M = [
      ...Iut().map(($) => ({
        dir: $,
        destination: "localSettings",
      })),
      ...s.map(($) => ({
        dir: $,
        destination: "cliArg",
      })),
    ],
    N = await Promise.all(
      M.map(async ({ dir: $, destination: q }) => ({
        destination: q,
        result: await Aat($, D),
      })),
    ),
    B = new Map();
  for (let { result: $, destination: q } of N)
    if ($.resultType === "success") {
      if (
        ((D = My(D, {
          type: "addDirectories",
          directories: [$.absolutePath],
          destination: q,
        })),
        q === "cliArg")
      ) {
        let W = T4n($.absolutePath);
        if (W.length > 0) {
          B.set($.absolutePath, W);
          let V = W.filter((Y) => Y !== $.absolutePath);
          if (V.length > 0)
            D = My(D, {
              type: "addDirectories",
              directories: V,
              destination: q,
            });
        }
      }
    } else if ($.resultType !== "alreadyInWorkingDirectory" && $.resultType !== "pathNotFound")
      a.push(Hat($));
  if (B.size > 0)
    D = {
      ...D,
      trustedNetworkDirectories: B,
    };
  return {
    toolPermissionContext: D,
    warnings: a,
    dangerousPermissions: k,
    overlyBroadBashPermissions: I,
  };
}
function getAutoModeUnavailableNotification(reason) {
  let t;
  switch (reason) {
    case "settings":
      t = "auto mode disabled by settings";
      break;
    case "circuit-breaker":
      t = "auto mode is unavailable for your plan";
      break;
    case "provider":
      t = "auto mode requires CLAUDE_CODE_ENABLE_AUTO_MODE=1";
      break;
    case "model":
      t = "auto mode unavailable for this model";
      break;
  }
  return t;
}
async function verifyAutoModeGateAccess(currentContext, fastMode) {
  let n = await v7("tengu_auto_mode_config", {}),
    r = parseAutoModeEnabledState(n?.enabled),
    o = Vqo();
  if (!(nO?.isAutoModeCircuitBroken() ?? false))
    nO?.setAutoModeCircuitBroken(r === "disabled" || o);
  let s = As(),
    i = !!n?.disableFastMode && (!!fastMode || false),
    a = a_e(s) && !i,
    l = false;
  if (r !== "disabled" && !o && a)
    l =
      r === "enabled" ||
      hasAutoModeOptInAnySource() ||
      currentContext.mode === "auto" ||
      currentContext.prePlanMode === "auto";
  let c = r !== "disabled" && !o && a;
  T(
    `[auto-mode] verifyAutoModeGateAccess: enabledState=${r} disabledBySettings=${o} model=${s} modelSupported=${a} disableFastModeBreakerFires=${i} carouselAvailable=${l} canEnterAuto=${c}`,
  );
  let u = nO?.getAutoModeFlagCli() ?? false,
    d = (b, _) => {
      if (b.isAutoModeAvailable !== _)
        T(`[auto-mode] verifyAutoModeGateAccess setAvailable: ${b.isAutoModeAvailable} -> ${_}`);
      return b.isAutoModeAvailable === _ && b.canAutoClassifierRun === c
        ? b
        : {
            ...b,
            isAutoModeAvailable: _,
            canAutoClassifierRun: c,
          };
    };
  if (c)
    return {
      updateContext: (b) => d(b, l),
    };
  let p;
  if (o)
    ((p = "settings"),
      T("auto mode disabled: disableAutoMode in settings", {
        level: "warn",
      }));
  else if (r === "disabled")
    ((p = "circuit-breaker"),
      T('auto mode disabled: tengu_auto_mode_config.enabled === "disabled" (circuit breaker)', {
        level: "warn",
      }));
  else if (!Fot(fr()))
    ((p = "provider"),
      T(`auto mode disabled: provider ${fr()} requires the CLAUDE_CODE_ENABLE_AUTO_MODE opt-in`, {
        level: "warn",
      }));
  else
    ((p = "model"),
      T(`auto mode disabled: model ${As()} does not support auto mode`, {
        level: "warn",
      }));
  let f = getAutoModeUnavailableNotification(p),
    m = (b) => {
      let _ = b.mode === "auto";
      T(
        `[auto-mode] kickOutOfAutoIfNeeded applying: ctx.mode=${b.mode} ctx.prePlanMode=${b.prePlanMode} reason=${p}`,
      );
      let S = b.mode === "plan" && (b.prePlanMode === "auto" || !!b.strippedDangerousRules);
      if (!_ && !S) return d(b, false);
      if (_)
        return (
          nO?.setAutoModeActive(false),
          B2(true),
          Ebe({
            from: "auto",
            to: "default",
            trigger: "auto_gate_denied",
          }),
          {
            ...My(restoreDangerousPermissions(b), {
              type: "setMode",
              mode: "default",
              destination: "session",
            }),
            isAutoModeAvailable: false,
            canAutoClassifierRun: false,
          }
        );
      return (
        nO?.setAutoModeActive(false),
        B2(true),
        {
          ...restoreDangerousPermissions(b),
          prePlanMode: b.prePlanMode === "auto" ? "default" : b.prePlanMode,
          isAutoModeAvailable: false,
          canAutoClassifierRun: false,
        }
      );
    },
    g = currentContext.mode === "auto",
    h =
      currentContext.mode === "plan" &&
      (currentContext.prePlanMode === "auto" || !!currentContext.strippedDangerousRules);
  if (!(g || h || u))
    return {
      updateContext: m,
    };
  if (g || h)
    return {
      updateContext: m,
      notification: f,
    };
  return {
    updateContext: m,
    notification: currentContext.isAutoModeAvailable ? f : void 0,
  };
}
function shouldDisableBypassPermissions() {
  return Vzr("tengu_disable_bypass_permissions_mode");
}
function Vqo() {
  let e = jo() || {};
  return e.disableAutoMode === "disable" || e.permissions?.disableAutoMode === "disable";
}
function isAutoModeGateEnabled() {
  if (nO?.isAutoModeCircuitBroken() ?? false) return false;
  if (Vqo()) return false;
  if (!a_e(As())) return false;
  return true;
}
function getAutoModeUnavailableReason() {
  if (Vqo()) return "settings";
  if (nO?.isAutoModeCircuitBroken() ?? false) return "circuit-breaker";
  if (!Fot(fr())) return "provider";
  if (!a_e(As())) return "model";
  return null;
}
function parseAutoModeEnabledState(value) {
  if (value === "enabled" || value === "disabled" || value === "opt-in") return value;
  return frm;
}
function getAutoModeEnabledState() {
  return getAutoModeEnabledStateWithSource().value;
}
function getAutoModeEnabledStateWithSource() {
  let t = at("tengu_auto_mode_config", {})?.enabled,
    n = parseAutoModeEnabledState(t);
  return {
    value: n,
    src: t === n ? "gb" : "default",
  };
}
function getAutoModeEnabledStateIfCached() {
  let e = at("tengu_auto_mode_config", wlc);
  if (e === wlc) return;
  return parseAutoModeEnabledState(e?.enabled);
}
function hasAutoModeOptInAnySource() {
  if (nO?.getAutoModeFlagCli() ?? false) return true;
  return RG();
}
function createDisabledBypassPermissionsContext(currentContext) {
  let t = currentContext;
  if (currentContext.mode === "bypassPermissions")
    t = My(currentContext, {
      type: "setMode",
      mode: "default",
      destination: "session",
    });
  return {
    ...t,
    isBypassPermissionsModeAvailable: false,
  };
}
async function checkAndDisableBypassPermissions(currentContext) {
  if (!currentContext.isBypassPermissionsModeAvailable) return;
  if (!(await shouldDisableBypassPermissions())) return;
  (T("bypassPermissions mode is being disabled by feature gate (async check)", {
    level: "warn",
  }),
    ki(1, "bypass_permissions_disabled"));
}
function isDefaultPermissionModeAuto() {
  return (jo() || {}).permissions?.defaultMode === "auto";
}
function shouldPlanUseAutoMode() {
  return RG() && isAutoModeGateEnabled() && OLr();
}
function prepareContextForPlanMode(context) {
  let t = context.mode;
  if (t === "plan") return context;
  {
    let n = shouldPlanUseAutoMode();
    if (t === "auto") {
      if (n)
        return {
          ...context,
          prePlanMode: "auto",
        };
      return (
        nO?.setAutoModeActive(false),
        B2(true),
        {
          ...restoreDangerousPermissions(context),
          prePlanMode: "auto",
        }
      );
    }
    if (n && t !== "bypassPermissions")
      return (
        nO?.setAutoModeActive(true),
        {
          ...stripDangerousPermissionsForAutoMode(context),
          prePlanMode: t,
        }
      );
  }
  return (
    T(`[prepareContextForPlanMode] plain plan entry, prePlanMode=${t}`, {
      level: "info",
    }),
    {
      ...context,
      prePlanMode: t,
    }
  );
}
function transitionPlanAutoMode(e) {
  if (e.mode === "auto") return stripDangerousPermissionsForAutoMode(e);
  if (e.mode !== "plan") return e;
  if (!e.prePlanMode || e.prePlanMode === "bypassPermissions") return e;
  let t = shouldPlanUseAutoMode(),
    n = nO?.isAutoModeActive() ?? false;
  if (t && n) return stripDangerousPermissionsForAutoMode(e);
  if (!t && !n) return e;
  if (t) return (nO?.setAutoModeActive(true), B2(false), stripDangerousPermissionsForAutoMode(e));
  return (nO?.setAutoModeActive(false), B2(true), restoreDangerousPermissions(e));
}
var Clc,
  Ilc,
  nO,
  lrm,
  frm = "opt-in",
  wlc;
