// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _F
// matched 2.1.88 source: src/bridge/bridgeEnabled.ts
// class=modified  jaccard=0.1017  score=0.1121  fileCov=0.5217
// note: deminified; 23 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: isRunningInRemoteEnvironment, isRemoteControlInternalEventsEnabled, isRemoteControlHardDisabled, isPreviewHmrEnabled, isPolicyLimitsCacheLoaded, isPersistentRemoteSessionEnabled, isCseShimEnabled, isCcrV2SendEventsEnabled, isCcrMirrorEnabled, isBridgeEnabledBlocking, isBridgeEnabled, hasBridgeEntitlement, getRemoteControlPolicyVerdict, getCcrAutoConnectDefault, getBridgeGrowthBookDebugLines, getBridgeEntitlementBlocker, getBridgeDoctorInfo, getBridgeDisabledReason, getBridgeAuth …
// [unwrapped __esm module _F] deps: Hp, Rc, oo, fd, je, At, Gx, Jt, dn, kt, AVe, cho, jc, oKr
((kcc = require("crypto")), (Rcc = require("fs")), (XYe = require("fs/promises")));
Pcc = Date.now();
function hasBridgeEntitlement() {
  return Jl() && rTt() && at("tengu_ccr_bridge", !1);
}
function getBridgeEntitlementBlocker() {
  if (hasBridgeEntitlement()) return null;
  if (!Ecr()) return "not_signed_in";
  if (!rTt()) return "api_key_auth";
  if (!Acr()) return "no_profile_scope";
  return "not_in_rollout";
}
function Scr() {
  return !1;
}
function isRemoteControlHardDisabled() {
  return a0()?.settings.disableRemoteControl === !0;
}
function isBridgeEnabled() {
  if (Scr()) return !0;
  if (isRemoteControlHardDisabled()) return !1;
  return !isRunningInRemoteEnvironment() && hasBridgeEntitlement();
}
async function isBridgeEnabledBlocking() {
  if (Scr()) return !0;
  if (isRemoteControlHardDisabled()) return !1;
  return Jl() && !isRunningInRemoteEnvironment() && rTt() && (await _U("tengu_ccr_bridge"));
}
async function getBridgeDisabledReason() {
  if (Scr()) return null;
  if (!Jl()) return "Remote Control is only available when using Claude via api.anthropic.com.";
  if (isRunningInRemoteEnvironment())
    return "Remote Control is not available inside a cloud session.";
  if (isRemoteControlHardDisabled())
    return "Remote Control is disabled by your organization's policy (managed setting `disableRemoteControl`).";
  if (!Ecr())
    return "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.";
  if (!rTt())
    return describeAuthPrecedenceBlocker({
      prefix: "Remote Control requires claude.ai subscription auth.",
      suffix: "to use Remote Control.",
    });
  if (!Acr())
    return "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.";
  if (!CVo()?.organizationUuid)
    return "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.";
  await Bcc();
  let e = getRemoteControlPolicyVerdict();
  if (e === "unavailable")
    return "Couldn't verify your organization's Remote Control policy. Retry, or run `claude doctor` for details.";
  if (e === "denied") {
    let t = ale();
    if (t.length > 0)
      return `Remote Control isn't available for your organization due to its compliance policy (${t.join(", ")}).`;
    return "Remote Control is disabled by your organization's policy. Contact your organization admin for access.";
  }
  if (!uW()) {
    let t = Hpn();
    if (t)
      return `Remote Control requires feature-flag evaluation, which is disabled because ${t} is set. Unset it (or run in a shell without it) to use Remote Control.`;
    if (Oe.DISABLE_GROWTHBOOK)
      return "Remote Control requires feature-flag evaluation, which is disabled because DISABLE_GROWTHBOOK is set. Unset it (or run in a shell without it) to use Remote Control.";
    return "Remote Control requires feature-flag evaluation, which is unavailable in this environment.";
  }
  if (!(await _U("tengu_ccr_bridge"))) {
    if (!hke()) {
      if ((ice(), await _U("tengu_ccr_bridge"))) return null;
      if (!hke())
        return "Couldn't verify Remote Control eligibility \u2014 the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details.";
    }
    return "Remote Control is not yet enabled for your account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details.";
  }
  return null;
}
function getBridgeAuthDebugInfo() {
  if (!vO()) return "";
  let e = (t) => (t ? "set" : "unset");
  try {
    let t = Ws(),
      n = [
        "CLAUDE_CODE_USE_BEDROCK",
        "CLAUDE_CODE_USE_VERTEX",
        "CLAUDE_CODE_USE_FOUNDRY",
        "CLAUDE_CODE_USE_ANTHROPIC_AWS",
        "CLAUDE_CODE_USE_MANTLE",
      ].filter((r) => ut(process.env[r]));
    return [
      "",
      "[debug] Remote Control auth state:",
      `  isBareMode=${md()}`,
      `  hasOAuthAccessToken=${!!t?.accessToken}`,
      `  oauthScopes=${t?.scopes?.join(",") ?? "none"}`,
      `  hasClaudeAIInferenceScope=${Ecr()}`,
      `  isClaudeAISubscriber=${rTt()}`,
      `  hasProfileScope=${Acr()}`,
      `  oauthAccount.organizationUuid=${CVo()?.organizationUuid ? "set" : "unset"}`,
      `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`,
      `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`,
      `  apiKeyHelper=${rL() ? "set" : "unset"}`,
      `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`,
      `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`,
      `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`,
      `  3P env=${n.length ? n.join(",") : "none"}`,
      ...getBridgeGrowthBookDebugLines(),
    ].join(`
`);
  } catch (t) {
    return `
[debug] failed to collect auth state: ${t}`;
  }
}
function getBridgeGrowthBookDebugLines() {
  let e = (r) => (r ? "set" : "unset"),
    t = dNt(),
    n = Zom();
  return [
    `  isGrowthBookEnabled=${uW()}`,
    `  telemetryDisabledBy=${Hpn() ?? "none"}`,
    `  DISABLE_GROWTHBOOK=${e(process.env.DISABLE_GROWTHBOOK)}`,
    `  hasFreshGrowthBookFeatures=${hke()}`,
    `  growthBookFeaturesLoaded=${Object.keys(t).length}`,
    `  growthBookLastFetched=${n ? `${esm(Date.now() - n)} ago` : "never"}`,
    `  tengu_ccr_bridge=${String(t.tengu_ccr_bridge ?? "unset")}`,
  ];
}
async function getBridgeDoctorInfo() {
  if (isRunningInRemoteEnvironment() && !Scr())
    return {
      disabledReason: null,
      inRemoteSession: !0,
      checks: [],
    };
  (ice(), await Bcc());
  let e = await getBridgeDisabledReason(),
    t = Hpn() ?? (Oe.DISABLE_GROWTHBOOK ? "DISABLE_GROWTHBOOK" : null),
    n = Jl(),
    r = !isRemoteControlHardDisabled(),
    o = Ecr(),
    s = rTt(),
    i = Acr(),
    a = !!CVo()?.organizationUuid,
    l = getRemoteControlPolicyVerdict(),
    c = uW(),
    u = await _U("tengu_ccr_bridge"),
    d = hke(),
    p = [
      {
        label: n
          ? "Connected to the Anthropic API (api.anthropic.com)"
          : "Not connected to the Anthropic API (api.anthropic.com)",
        ok: n,
      },
      {
        label: r
          ? "Not disabled by org policy (disableRemoteControl)"
          : "Disabled by org policy (disableRemoteControl)",
        ok: r,
      },
      {
        label: o ? "Signed in to claude.ai" : "Not signed in to claude.ai",
        ok: o,
      },
      {
        label: s ? "claude.ai subscription active" : "claude.ai subscription auth not active",
        ok: s,
      },
      {
        label: i
          ? "Sign-in includes the user:profile scope"
          : "Sign-in is missing the user:profile scope",
        ok: i,
      },
      {
        label: a ? "Organization resolved" : "Organization not resolved",
        ok: a,
      },
      {
        label:
          l === "allowed"
            ? "Org policy allows Remote Control (allow_remote_control)"
            : l === "unavailable"
              ? "Org policy could not be verified (allow_remote_control)"
              : "Org policy does not allow Remote Control (allow_remote_control)",
        ok: l === "allowed",
        detail: ale().join(", ") || void 0,
      },
      {
        label: c ? "Feature-flag evaluation enabled" : "Feature-flag evaluation disabled",
        ok: c,
        detail: t ? `disabled by ${t}` : void 0,
      },
      {
        label: u
          ? "Remote Control rollout enabled for this account"
          : d
            ? "Remote Control rollout not enabled for this account"
            : "Remote Control rollout could not be verified for this account",
        ok: u,
        detail: d ? void 0 : "no server response this session",
      },
    ];
  return {
    disabledReason: e,
    inRemoteSession: !1,
    checks: p,
  };
}
function Zom() {
  try {
    return Dt().cachedGrowthBookFeaturesAt;
  } catch {
    return;
  }
}
function esm(e) {
  let t = Math.round(e / 1000);
  if (t < 120) return `${t}s`;
  let n = Math.round(t / 60);
  if (n < 120) return `${n}m`;
  let r = Math.round(n / 60);
  if (r < 48) return `${r}h`;
  return `${Math.round(r / 24)}d`;
}
function describeAuthPrecedenceBlocker({ prefix: e, suffix: t }) {
  try {
    let { source: n } = Ty({
      skipRetrievingKeyFromApiKeyHelper: !0,
    });
    if (n === "ANTHROPIC_API_KEY")
      return `${e} ANTHROPIC_API_KEY is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${t}`;
    if (n === "apiKeyHelper")
      return `${e} apiKeyHelper is configured, so this session is using API-key auth \u2014 unset it ${t}`;
    if (process.env.ANTHROPIC_AUTH_TOKEN)
      return `${e} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${t}`;
    let { source: r } = aI(),
      o = W4e(r);
    if (r !== "none" && o) return `${e} This session is using ${r} auth \u2014 ${o}`;
    if (process.env.ANTHROPIC_UNIX_SOCKET)
      return `${e} ANTHROPIC_UNIX_SOCKET is set (claude ssh remote), and the local proxy is API-key-authed.`;
  } catch {}
  return `${e} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${t}`;
}
function Ecr() {
  try {
    return Boolean(Ws()?.scopes?.includes(xB));
  } catch {
    return !1;
  }
}
function rTt() {
  try {
    return bo();
  } catch {
    return !1;
  }
}
function Acr() {
  try {
    return cI();
  } catch {
    return !1;
  }
}
function CVo() {
  try {
    return Dt().oauthAccount;
  } catch {
    return;
  }
}
function tsm() {
  nTt = void 0;
}
async function Bcc() {
  try {
    if (pW() !== null) return;
  } catch {}
  let e = await Promise.resolve().then(() => (_F(), bWt));
  if ((e.initializePolicyLimitsLoadingPromise(), nTt === void 0)) {
    let t = e.loadPolicyLimits();
    (t
      .catch(() => {})
      .finally(() => {
        try {
          if (pW() === null) nTt = void 0;
        } catch {
          nTt = void 0;
        }
      }),
      (nTt = vc(t, e.POLICY_LIMITS_COLD_AWAIT_MS, "bridge_diagnostic_policy_limits").catch(
        () => {},
      )));
  }
  await nTt;
}
function getRemoteControlPolicyVerdict() {
  try {
    return Us("allow_remote_control") ? "allowed" : "denied";
  } catch {
    return "unavailable";
  }
}
function isPolicyLimitsCacheLoaded() {
  if (!SU()) return !0;
  return pW() !== null;
}
function nsm() {
  try {
    return a0()?.settings.autoUploadSessions ?? Dt().autoUploadSessions;
  } catch {
    return;
  }
}
function isRunningInRemoteEnvironment() {
  return ut(process.env.CLAUDE_CODE_REMOTE) || da();
}
function isCseShimEnabled() {
  return at("tengu_bridge_repl_v2_cse_shim_enabled", !0);
}
function isCcrV2SendEventsEnabled() {
  return at("tengu_ccr_v2_send_events_cli", !1);
}
function checkBridgeMinVersion() {
  let e = zx("tengu_bridge_min_version", {
    minVersion: "0.0.0",
  });
  if (
    e.minVersion &&
    qte(
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      e.minVersion,
    )
  )
    return `Your version of Claude Code (${
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION
    }) is too old for Remote Control.
Version ${e.minVersion} or higher is required. Run \`claude update\` to update.`;
  return null;
}
function getCcrAutoConnectDefault() {
  if (isRunningInRemoteEnvironment()) return !1;
  if (isPersistentRemoteSessionEnabled()) return !0;
  let e = aKr("remote_control_at_startup");
  if (e !== void 0) return e;
  return at("tengu_cobalt_harbor", !1);
}
function isPersistentRemoteSessionEnabled() {
  return !1;
}
function isRemoteControlInternalEventsEnabled() {
  return at("tengu_amber_relay", !1);
}
function isCcrMirrorEnabled() {
  return !1;
}
function isPreviewHmrEnabled() {
  return at("tengu_bridge_vivid", !1);
}
function applyRemoteControlToAppState(e, t) {
  if (e.replBridgeOutboundOnly && !t) return e;
  if (e.replBridgeEnabled === t && !e.replBridgeOutboundOnly) return e;
  return {
    ...e,
    replBridgeEnabled: t,
    replBridgeOutboundOnly: !1,
  };
}
function applyAutoUploadSessionsToAppState(e, t) {
  if (e.replBridgeEnabled && !e.replBridgeOutboundOnly) return e;
  if (e.replBridgeEnabled === t && e.replBridgeOutboundOnly === t) return e;
  return {
    ...e,
    replBridgeEnabled: t,
    replBridgeOutboundOnly: t,
  };
}
var nTt;
