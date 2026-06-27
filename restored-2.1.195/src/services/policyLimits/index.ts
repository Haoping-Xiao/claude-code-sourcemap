// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AVe
// matched 2.1.88 source: src/services/policyLimits/index.ts
// class=modified  jaccard=0.2639  score=0.3321  fileCov=0.5622
// note: deminified; 12 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var AVe = E(() => {
  PR();
  uee();
  d2r();
  je();
  vn();
  co();
  Ls();
  ft();
  oo();
  fn();
  At();
  NE();
  Ao();
  Mh();
  dn();
  Un();
  kt();
  H5e();
  Ijt();
  yje();
  tP();
  gSe();
  lZn();
  lZn();
  Eom = new Set([
    "repl_main_thread",
    "repl_main_thread:outputStyle:custom",
    "repl_main_thread:outputStyle:Proactive",
    "repl_main_thread:outputStyle:Explanatory",
    "repl_main_thread:outputStyle:Learning",
    "sdk",
    "agent:custom",
    "agent:default",
    "agent:builtin",
    "compact",
    "hook_agent",
    "hook_prompt",
    "side_question",
    "auto_mode",
    ...[],
  ]);
  tO = class tO extends Error {
    originalError;
    retryContext;
    constructor(e, t) {
      let n = be(e);
      super(n);
      this.originalError = e;
      this.retryContext = t;
      if (((this.name = "RetryError"), e instanceof Error && e.stack)) this.stack = e.stack;
    }
  };
  ((Tom = [
    "invalid_request_error",
    "authentication_error",
    "billing_error",
    "permission_error",
    "not_found_error",
    "request_too_large",
    "rate_limit_error",
    "timeout_error",
    "api_error",
    "overloaded_error",
  ]),
    (vom = new Set([401, 407, 429, 404, 403, 413])),
    (wom = [Oio, Djt, Nio, O1n, wcc, Pjt]));
});
var bWt = {};
_t(bWt, {
  waitForPolicyLimitsToLoad: () => waitForPolicyLimitsToLoad,
  stopBackgroundPolling: () => stopBackgroundPolling,
  startBackgroundPolling: () => startBackgroundPolling,
  shouldAwaitPolicyLimitsOnStartup: () => shouldAwaitPolicyLimitsOnStartup,
  refreshPolicyLimits: () => refreshPolicyLimits,
  recordPolicyLimitsStartupAwaitResult: () => recordPolicyLimitsStartupAwaitResult,
  logPolicyLimitsCacheStateAtFirstPrompt: () => logPolicyLimitsCacheStateAtFirstPrompt,
  loadPolicyLimits: () => loadPolicyLimits,
  initializePolicyLimitsLoadingPromise: () => initializePolicyLimitsLoadingPromise,
  clearPolicyLimitsCache: () => clearPolicyLimitsCache,
  _resetPolicyLimitsForTesting: () => Gom,
  POLICY_LIMITS_COLD_AWAIT_MS: () => POLICY_LIMITS_COLD_AWAIT_MS,
  FAIL_CLOSED_SHADOW_CACHE_TTL_MS: () => FAIL_CLOSED_SHADOW_CACHE_TTL_MS,
});
function Dcc() {
  try {
    return Math.max(0, Date.now() - Rcc.statSync(Ske()).mtimeMs);
  } catch {
    return;
  }
}
function recordPolicyLimitsStartupAwaitResult(e) {
  AVo = e;
}
function HVo() {
  if ((stopBackgroundPolling(), C_e(null), wme?.(), (YYe = null), (wme = null), KYe !== null))
    (clearTimeout(KYe), (KYe = null));
}
function Gom() {
  (HVo(),
    (yVo = !1),
    (tTt = "not_started"),
    (bVo = !1),
    (gcr = void 0),
    (AVo = "not_awaited"),
    (_Vo = !1));
}
function initializePolicyLimitsLoadingPromise() {
  if (YYe) return;
  if (SU())
    YYe = new Promise((e) => {
      ((wme = e),
        (KYe = setTimeout(
          (t) => {
            if (wme === t)
              (T("Policy limits: Loading promise timed out, resolving anyway"),
                wme(),
                (wme = null));
          },
          jom,
          e,
        )));
    });
}
function Wom() {
  return `${$s().BASE_API_URL}/api/claude_code/policy_limits`;
}
function SVo(e) {
  if (Array.isArray(e)) return e.map(SVo);
  if (e !== null && typeof e === "object") {
    let t = {};
    for (let [n, r] of Object.entries(e).sort(([o], [s]) => o.localeCompare(s))) t[n] = SVo(r);
    return t;
  }
  return e;
}
function qom(e) {
  let t = SVo(e),
    n = De(t);
  return `sha256:${kcc.createHash("sha256").update(n).digest("hex")}`;
}
function shouldAwaitPolicyLimitsOnStartup() {
  return SU() && bNt() === null;
}
async function waitForPolicyLimitsToLoad() {
  if (YYe) await YYe;
}
function Vom() {
  let e = null;
  try {
    e = Ty({
      skipRetrievingKeyFromApiKeyHelper: !0,
    }).key;
  } catch {}
  if (!e && iH()) return "wif";
  if (bo() && Ws()?.accessToken) return "oauth";
  return e ? "api_key" : "oauth";
}
async function zom(e) {
  let t = null;
  for (let n = 1; n <= hVo + 1; n++) {
    if (((t = await Kom(e)), (t.attempts = n), t.success)) return t;
    if (t.skipRetry) return t;
    if (n > hVo) return t;
    let r = TJ(n);
    (T(`Policy limits: Retry ${n}/${hVo} after ${r}ms`), await Nn(r));
  }
  return t;
}
async function Kom(e) {
  let t;
  try {
    t = await qCn();
    let n = await b1t();
    if (n.error)
      return {
        success: !1,
        error: "Authentication required for policy limits",
        errorCode: "auth_failed",
        authUnavailableReason: n.reasonCode,
        tokenRefreshOutcome: t,
        skipRetry: !0,
      };
    let r = Wom(),
      o = {
        ...n.headers,
        "User-Agent": dy(),
      };
    if (e) o["If-None-Match"] = `"${e}"`;
    let s = await po.get(r, {
      headers: o,
      timeout: Uom,
      validateStatus: (a) => a === 200 || a === 304 || a === 404,
    });
    if (s.status === 304)
      return (
        T("Policy limits: Using cached restrictions (304)"),
        {
          success: !0,
          response: null,
          etag: e,
        }
      );
    if (s.status === 404)
      return (
        T("Policy limits: No restrictions found (404)"),
        {
          success: !0,
          response: rKr,
          etag: void 0,
        }
      );
    let i = Lkn().safeParse(s.data);
    if (!i.success)
      return (
        T(`Policy limits: Invalid response format - ${i.error.message}`),
        {
          success: !1,
          error: "Invalid policy limits format",
          errorCode: "parse_failed",
        }
      );
    return (
      T("Policy limits: Fetched successfully"),
      {
        success: !0,
        response: i.data,
      }
    );
  } catch (n) {
    let { kind: r, status: o, message: s } = $A(n);
    switch ((T(`Policy limits: fetch failed (${r}${o ? ` ${o}` : ""}) \u2014 ${s}`), r)) {
      case "auth":
        return {
          success: !1,
          error: "Not authorized for policy limits",
          errorCode: "auth_failed",
          httpStatus: o,
          tokenRefreshOutcome: t,
          skipRetry: !0,
        };
      case "timeout":
        return {
          success: !1,
          error: "Policy limits request timeout",
          errorCode: "timeout",
        };
      case "network":
        return {
          success: !1,
          error: "Cannot connect to server",
          errorCode: "network_error",
        };
      default:
        return {
          success: !1,
          error: s,
          errorCode: "request_failed",
          httpStatus: o,
        };
    }
  }
}
async function Yom(e) {
  try {
    let t = Ske();
    (await XYe.writeFile(t, De(e, null, 2), {
      encoding: "utf-8",
      mode: 384,
    }),
      T(`Policy limits: Saved to ${t}`));
  } catch (t) {
    if (
      (T(`Policy limits: Failed to save - ${t instanceof Error ? t.message : "unknown error"}`),
      !_Vo)
    )
      ((_Vo = !0),
        G("tengu_policy_limits_cache_write_failed", {
          errno: $e(Xom(t)),
        }));
  }
}
function Xom(e) {
  let t = on(e);
  switch (t) {
    case "EACCES":
    case "EPERM":
    case "EROFS":
    case "ENOSPC":
    case "EDQUOT":
    case "ENOENT":
    case "ENOTDIR":
    case "EMFILE":
    case "ENFILE":
    case "EBUSY":
      return t;
    default:
      return "other";
  }
}
async function Mcc(e, t = !1) {
  let n = e === "policy_limits_load" && !bVo;
  if (n) bVo = !0;
  if (!SU()) return null;
  if (n) tTt = "in_flight";
  let r = bNt(),
    o = Dcc();
  if (r && !yNt()) C_e(r);
  let s = r ? qom(r) : void 0,
    i = Vom(),
    a = Date.now();
  try {
    let l = await zom(s);
    if (n)
      ((tTt = l.success ? "succeeded" : "failed"),
        (gcr = l.success ? void 0 : (l.errorCode ?? "request_failed")));
    let c = Date.now();
    if (
      (G("tengu_policy_limits_fetch", {
        duration_ms: c - a,
        ms_since_startup: c - Pcc,
        success: l.success,
        had_cache: r !== null,
        cache_age_ms: o,
        attempts: l.attempts,
        is_load: e === "policy_limits_load",
        awaited: t,
        auth_type: $e(i),
        error_code: Oo(l.errorCode),
        token_source: $e(aI().source),
        auth_unavailable_reason: Oo(l.authUnavailableReason),
        token_refresh_outcome: i === "oauth" ? Oo(l.tokenRefreshOutcome) : void 0,
        http_status: l.httpStatus,
      }),
      !l.success)
    ) {
      if (r)
        return (
          T("Policy limits: Using stale cache after fetch failure"),
          C_e(r),
          It(e, "stale_cache_used"),
          r
        );
      return (Le(e, l.errorCode ?? "request_failed"), null);
    }
    if (l.response === null && r) {
      (T("Policy limits: Cache still valid (304 Not Modified)"), C_e(r));
      try {
        let d = new Date();
        await XYe.utimes(Ske(), d, d);
      } catch {}
      return (xe(e), r);
    }
    let u = l.response ?? rKr;
    return (
      C_e(u),
      await Yom(u),
      T(
        Object.keys(u.restrictions).length > 0
          ? "Policy limits: Applied new restrictions successfully"
          : "Policy limits: No restrictions (cached empty)",
      ),
      xe(e),
      u
    );
  } catch {
    if (n && tTt === "in_flight") ((tTt = "failed"), (gcr = "unexpected_error"));
    if (r)
      return (
        T("Policy limits: Using stale cache after error"),
        C_e(r),
        It(e, "stale_cache_used"),
        r
      );
    return (Le(e, "unexpected_error"), null);
  }
}
function logPolicyLimitsCacheStateAtFirstPrompt() {
  if (yVo) return;
  yVo = !0;
  let e = _Nt(),
    t = e === void 0,
    n =
      e === "custom_base_url"
        ? _Nt({
            skipBaseUrlCheck: !0,
          }) === void 0
        : t,
    r = pW() !== null,
    o = t ? Dcc() : void 0,
    s = tTt,
    i = AVo,
    a = gcr,
    l = $e(lho());
  G("tengu_policy_limits_cache_state_at_first_prompt", {
    eligible: t,
    ineligible_reason: Oo(e),
    eligible_if_base_url_gate_removed: n,
    has_cache: r,
    cache_age_ms: o,
    would_fail_closed: t && (!r || (o ?? 1 / 0) > FAIL_CLOSED_SHADOW_CACHE_TTL_MS),
    ms_since_startup: Date.now() - Pcc,
    load_state: $e(s),
    startup_fetch_error_code: Oo(a),
    startup_await_result: $e(i),
    error_reporting_gate: l,
  });
}
async function loadPolicyLimits({ startupAwaited: e = !1 } = {}) {
  if (SU() && !YYe)
    YYe = new Promise((n) => {
      wme = n;
    });
  let t = wme;
  try {
    if ((await Mcc("policy_limits_load", e), SU())) startBackgroundPolling();
  } finally {
    if (t) {
      if ((t(), wme === t)) {
        if (((wme = null), KYe)) (clearTimeout(KYe), (KYe = null));
      }
    }
  }
}
async function refreshPolicyLimits() {
  if ((HVo(), initializePolicyLimitsLoadingPromise(), !SU())) return;
  try {
    await XYe.unlink(Ske());
  } catch {}
  (await loadPolicyLimits(), T("Policy limits: Refreshed after auth change"));
}
async function clearPolicyLimitsCache() {
  HVo();
  try {
    await XYe.unlink(Ske());
  } catch {}
}
async function Jom() {
  if (!SU()) return;
  let e = yNt(),
    t = e ? De(e) : null;
  try {
    await Mcc("policy_limits_poll");
    let n = yNt();
    if ((n ? De(n) : null) !== t) T("Policy limits: Changed during background poll");
  } catch {}
}
function startBackgroundPolling() {
  if (mcr !== null) return;
  if (!SU()) return;
  if (
    ((mcr = Dkn(() => void Jom(), Fom, {
      unref: !0,
    })),
    !xcc)
  )
    ((xcc = !0), Ci(stopBackgroundPolling));
}
function stopBackgroundPolling() {
  (mcr?.[Symbol.dispose](), (mcr = null));
}
var kcc,
  Rcc,
  XYe,
  Uom = 1e4,
  hVo = 5,
  Fom = 3600000,
  mcr = null,
  xcc = !1,
  YYe = null,
  wme = null,
  KYe = null,
  jom = 30000,
  POLICY_LIMITS_COLD_AWAIT_MS = 5000,
  FAIL_CLOSED_SHADOW_CACHE_TTL_MS = 86400000,
  yVo = !1,
  _Vo = !1,
  Pcc,
  tTt = "not_started",
  bVo = !1,
  gcr,
  AVo = "not_awaited";
