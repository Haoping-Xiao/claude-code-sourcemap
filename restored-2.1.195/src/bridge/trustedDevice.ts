// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sVe
// matched 2.1.88 source: src/bridge/trustedDevice.ts
// class=modified  jaccard=0.3061  score=0.3552  fileCov=0.6888
// note: deminified; 15 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: untrustedDeviceHint, recoverFromUntrustedDevice, readStoredTrustedDeviceToken, isTrustedDeviceUnenrolled, isTrustedDeviceGateEnabled, isTrustedDeviceActiveForOrg, isProactiveEnrollmentDisabled, getTrustedDeviceUnenrolledReason, getTrustedDeviceToken, getAttestationFilterPolicy, enrollTrustedDeviceIfNeeded, enrollTrustedDevice, clearTrustedDeviceTokenCache, clearTrustedDeviceToken, _resetEnrollBackoffForTesting, PROACTIVE_ENROLLMENT_DISABLED_MESSAGE
// [unwrapped __esm module sVe] deps: Xr, dn, je, At
((QDp = [
  "UNSPECIFIED",
  "ABSENT",
  "VERIFIED",
  "VERIFIED_BY_GATE",
  "INVALID",
  "UNCHECKED",
  "VERIFIED_KEYLESS_DEVICE",
  "SERVICE_VOUCHED",
]),
  (ZDp = ["UNSPECIFIED", "ABSENT", "VERIFIED", "VERIFIED_BY_GATE", "INVALID", "UNCHECKED"]));
Ygo = ["VERIFIED", "VERIFIED_KEYLESS_DEVICE", "VERIFIED_BY_GATE"];
((Kjn = {
  enforce: false,
  acceptLevel: "VERIFIED",
  acceptStatuses: new Set(),
}),
  (nPp = ["UNSPECIFIED", "ABSENT", "INVALID", "UNCHECKED"]),
  (rPp = ve(() =>
    H.object({
      accept_level: H.enum(Ygo).default("VERIFIED"),
      accept_statuses: H.array(H.enum(nPp)).default([]),
    }),
  )));
function isProactiveEnrollmentDisabled() {
  return at(FOa, false);
}
function sPp() {
  return (_F(), ro(bWt));
}
function Qgo() {
  return (jc(), ro(SNt));
}
function isTrustedDeviceGateEnabled() {
  if (!at(Xjn, false)) return false;
  return Qgo().isPolicyAllowed(mWt);
}
function isTrustedDeviceActiveForOrg() {
  if (!at(Xjn, false)) return false;
  return Qgo().isPolicyEnforced(mWt);
}
function getAttestationFilterPolicy() {
  if (!at("tengu_bridge_attestation_enforce", false)) return Kjn;
  if (!isTrustedDeviceActiveForOrg()) return Kjn;
  let t = at("tengu_bridge_attestation_enforce_config", {});
  return OOa(t);
}
async function getTrustedDeviceToken() {
  if (!isTrustedDeviceGateEnabled()) return;
  return readStoredTrustedDeviceToken();
}
async function isTrustedDeviceUnenrolled() {
  if (!isTrustedDeviceActiveForOrg()) return false;
  if (await readStoredTrustedDeviceToken()) return false;
  return true;
}
async function getTrustedDeviceUnenrolledReason() {
  if (!(await isTrustedDeviceUnenrolled())) return null;
  if (isProactiveEnrollmentDisabled()) return PROACTIVE_ENROLLMENT_DISABLED_MESSAGE;
  return "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.";
}
function clearTrustedDeviceTokenCache() {
  readStoredTrustedDeviceToken.cache?.clear?.();
}
function aPp() {
  Jgo = 0;
}
async function recoverFromUntrustedDevice(e) {
  if (!isTrustedDeviceGateEnabled()) return;
  clearTrustedDeviceTokenCache();
  let t = await getTrustedDeviceToken();
  if (!t || t === e) {
    if (Date.now() - Jgo >= oPp)
      ((Jgo = Date.now()),
        await enrollTrustedDevice({
          serverRequested: true,
        }),
        (t = await getTrustedDeviceToken()));
  }
  if (!t || t === e) return;
  return (
    T(
      "[trusted-device] Token changed after untrusted_device 403 (cache bust or lazy enrollment); caller will retry",
    ),
    t
  );
}
function untrustedDeviceHint() {
  if (isProactiveEnrollmentDisabled()) return PROACTIVE_ENROLLMENT_DISABLED_MESSAGE;
  return "this device is not enrolled as a trusted device; run /login to enroll";
}
async function enrollTrustedDeviceIfNeeded() {
  if (!(await isTrustedDeviceUnenrolled())) return;
  if (isProactiveEnrollmentDisabled()) return;
  (T("[trusted-device] Not enrolled, attempting lazy enrollment with OAuth token"),
    await enrollTrustedDevice());
}
function clearTrustedDeviceToken() {
  let { isClaudeAISubscriber: e } = (oo(), ro(pU));
  if (!Jl() || !e()) return;
  if (isProactiveEnrollmentDisabled()) return;
  (readStoredTrustedDeviceToken.cache?.clear?.(),
    wl()
      .mutate((t) =>
        t.trustedDeviceToken
          ? {
              ...t,
              trustedDeviceToken: void 0,
            }
          : t,
      )
      .catch(() => {}));
}
async function enrollTrustedDevice({ serverRequested: e = false } = {}) {
  let {
    isClaudeAISubscriber: t,
    getClaudeAIOAuthTokens: n,
    checkAndRefreshOAuthTokenIfNeeded: r,
  } = (oo(), ro(pU));
  if (!Jl() || !t()) return;
  try {
    if (!(await _U(Xjn))) {
      T(`[trusted-device] Gate ${Xjn} is off, skipping enrollment`);
      return;
    }
    if (isProactiveEnrollmentDisabled()) {
      T(`[trusted-device] Proactive enrollment disabled via ${FOa}, skipping`);
      return;
    }
    if (process.env.CLAUDE_TRUSTED_DEVICE_TOKEN) {
      T(
        "[trusted-device] CLAUDE_TRUSTED_DEVICE_TOKEN env var is set, skipping enrollment (env var takes precedence)",
      );
      return;
    }
    await sPp().waitForPolicyLimitsToLoad();
    let o = Qgo();
    if (!(e ? o.isPolicyAllowed(mWt) : o.isPolicyEnforced(mWt))) {
      T(`[trusted-device] Org has not enabled ${mWt}, skipping enrollment`);
      return;
    }
    if (Vi()) {
      T("[trusted-device] Essential traffic only, skipping enrollment");
      return;
    }
    await r();
    let i = n()?.accessToken;
    if (!i) {
      T("[trusted-device] No OAuth token, skipping enrollment");
      return;
    }
    let a = $s().BASE_API_URL,
      l;
    try {
      l = await po.post(
        `${a}/api/auth/trusted_devices`,
        {
          display_name: `Claude Code on ${UOa.hostname()} \xB7 ${Mpn("linux")}`,
        },
        {
          headers: {
            Authorization: `Bearer ${i}`,
            "Content-Type": "application/json",
          },
          timeout: 10000 /* 1e4 */,
          validateStatus: (u) => u < 500,
        },
      );
    } catch (u) {
      (T(`[trusted-device] Enrollment request failed: ${be(u)}`),
        Le("bridge_trusted_device_enroll", "request_failed"));
      return;
    }
    if (l.status !== 200 && l.status !== 201) {
      (T(`[trusted-device] Enrollment failed ${l.status}: ${De(l.data).slice(0, 200)}`),
        Le("bridge_trusted_device_enroll", "http_error"));
      return;
    }
    let c = l.data?.device_token;
    if (!c || typeof c !== "string") {
      (T("[trusted-device] Enrollment response missing device_token field"),
        Le("bridge_trusted_device_enroll", "missing_token"));
      return;
    }
    try {
      let u = await wl().mutate((d) => ({
        ...d,
        trustedDeviceToken: c,
      }));
      if (!u.success) {
        (T(`[trusted-device] Failed to persist token: ${u.warning ?? "unknown"}`),
          Le("bridge_trusted_device_enroll", "storage_failed"));
        return;
      }
      (readStoredTrustedDeviceToken.cache?.clear?.(),
        T(`[trusted-device] Enrolled device_id=${l.data.device_id ?? "unknown"}`),
        xe("bridge_trusted_device_enroll"));
    } catch (u) {
      (T(`[trusted-device] Storage write failed: ${be(u)}`),
        Le("bridge_trusted_device_enroll", "storage_failed"));
    }
  } catch (o) {
    (T(`[trusted-device] Enrollment error: ${be(o)}`),
      Le("bridge_trusted_device_enroll", "unexpected_error"));
  }
}
var UOa,
  Xjn = "tengu_sessions_elevated_auth_enforcement",
  mWt = "require_trusted_devices",
  FOa = "tengu_sessions_elevated_auth_disable_proactive_enrollment",
  oPp = 300000,
  Jgo = 0,
  PROACTIVE_ENROLLMENT_DISABLED_MESSAGE =
    "Your organization requires Trusted Devices for Remote Control, but enrollment is temporarily disabled. Please try again later, or contact your administrator.",
  readStoredTrustedDeviceToken;
