// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pzr
// matched 2.1.88 source: src/services/analytics/firstPartyEventLogger.ts
// class=modified  jaccard=0.416  score=0.7162  fileCov=0.4981
// note: deminified; 10 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: shutdown1PEventLogging, shouldSampleEvent, reinitialize1PEventLoggingIfConfigChanged, logGrowthBookExperimentTo1P, logEventTo1PAwaitable, logEventTo1PAsync, logEventTo1P, is1PEventLoggingEnabled, initialize1PEventLogging, getEventSamplingConfig, _reset1PStateForTesting, _getPreInitQueueForTesting
function getEventSamplingConfig() {
  return zx(eOd, {});
}
function shouldSampleEvent(e) {
  let n = getEventSamplingConfig()[e];
  if (!n) return null;
  let r = n.sample_rate;
  if (typeof r !== "number" || r < 0 || r > 1) return null;
  if (r >= 1) return null;
  if (r <= 0) return 0;
  return Math.random() < r ? r : 0;
}
function ROi() {
  return zx(tOd, {});
}
function nOd() {
  return A7;
}
function rOd() {
  ((Wte = null), (E_e = null), ($zr = null), (A7 = []));
}
async function shutdown1PEventLogging() {
  if (!E_e) return;
  try {
    await E_e.shutdown();
  } catch {}
}
function is1PEventLoggingEnabled() {
  return !Rj();
}
async function logEventTo1PAsync(e, t, n = {}) {
  try {
    let r = await mkn({
        model: n.model,
        betas: n.betas,
      }),
      o = {
        event_name: t,
        event_id: Mzr.randomUUID(),
        core_metadata: r,
        user_metadata: Xot(true),
        event_metadata: n,
      },
      s = oW();
    if (s) o.user_id = s;
    let i = new Date();
    e.emit({
      timestamp: i,
      observedTimestamp: i,
      body: t,
      attributes: o,
    });
  } catch (r) {}
}
function logEventTo1P(e, t = {}) {
  if (!is1PEventLoggingEnabled()) return;
  if (!Wte) {
    if (A7 !== null && A7.length < LOi)
      A7.push({
        eventName: e,
        metadata: t,
      });
    return;
  }
  if (S3e("firstParty")) return;
  logEventTo1PAsync(Wte, e, t);
}
async function logEventTo1PAwaitable(e, t = {}) {
  if (!is1PEventLoggingEnabled()) return;
  if (!Wte) {
    if (A7 !== null && A7.length < LOi)
      A7.push({
        eventName: e,
        metadata: t,
      });
    return;
  }
  if (S3e("firstParty")) return;
  return logEventTo1PAsync(Wte, e, t);
}
function oOd() {
  return "production";
}
function logGrowthBookExperimentTo1P(e) {
  if (!is1PEventLoggingEnabled()) return;
  if (!Wte || S3e("firstParty")) return;
  let t = oW(),
    { accountUuid: n, organizationUuid: r } = Xot(true),
    o = {
      event_type: "GrowthbookExperimentEvent",
      event_id: Mzr.randomUUID(),
      experiment_id: e.experimentId,
      variation_id: e.variationId,
      ...(t && {
        device_id: t,
      }),
      ...(n && {
        account_uuid: n,
      }),
      ...(r && {
        organization_uuid: r,
      }),
      ...(e.userAttributes && {
        session_id: e.userAttributes.sessionId,
        user_attributes: De({
          appVersion: e.userAttributes.appVersion,
        }),
      }),
      ...(e.experimentMetadata && {
        experiment_metadata: De(e.experimentMetadata),
      }),
      environment: oOd(),
    },
    s = new Date();
  Wte.emit({
    timestamp: s,
    observedTimestamp: s,
    body: "growthbook_experiment",
    attributes: o,
  });
}
function initialize1PEventLogging() {
  if ((pa("1p_event_logging_start"), !is1PEventLoggingEnabled())) {
    A7 = null;
    return;
  }
  let t = ROi();
  (($zr = t), pa("1p_event_after_growthbook_config"));
  let n = t.scheduledDelayMillis || LK(process.env.OTEL_LOGS_EXPORT_INTERVAL, sOd),
    r = t.maxExportBatchSize || iOd,
    o = t.maxQueueSize || aOd,
    s = Vt(),
    i = {
      [hkn.ATTR_SERVICE_NAME]: "claude-code",
      [hkn.ATTR_SERVICE_VERSION]: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
    };
  if (s === "wsl") {
    let c = OFe();
    if (c) i["wsl.version"] = c;
  }
  let a = xOi.resourceFromAttributes(i),
    l = new Dzr({
      maxBatchSize: r,
      skipAuth: t.skipAuth,
      maxAttempts: t.maxAttempts,
      path: t.path,
      baseUrl: t.baseUrl,
      isKilled: () => S3e("firstParty"),
    });
  if (
    ((E_e = new h3e({
      resource: a,
      processors: [
        new h_e(l, {
          scheduledDelayMillis: n,
          maxExportBatchSize: r,
          maxQueueSize: o,
        }),
      ],
    })),
    (Wte = E_e.getLogger(
      "com.anthropic.claude_code.events",
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
    )),
    A7 !== null)
  ) {
    let c = A7;
    A7 = null;
    for (let { eventName: u, metadata: d } of c) logEventTo1P(u, d);
  }
}
async function reinitialize1PEventLoggingIfConfigChanged() {
  if (!is1PEventLoggingEnabled() || !E_e) return;
  let e = ROi();
  if (L_(e, $zr)) return;
  let t = E_e,
    n = Wte;
  Wte = null;
  try {
    await t.forceFlush();
  } catch {}
  E_e = null;
  try {
    initialize1PEventLogging();
  } catch (r) {
    ((E_e = t), (Wte = n), ke(r));
    return;
  }
  t.shutdown().catch(() => {});
}
var xOi,
  hkn,
  Mzr,
  eOd = "tengu_event_sampling_config",
  tOd = "tengu_1p_event_batch_config",
  Wte = null,
  E_e = null,
  $zr = null,
  A7,
  LOi = 1024,
  sOd = 10000 /* 1e4 */,
  iOd = 200,
  aOd = 8192;
