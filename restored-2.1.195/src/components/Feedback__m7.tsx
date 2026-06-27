// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SJ
// matched 2.1.88 source: src/components/Feedback.tsx
// class=modified (alt of src/components/Feedback.tsx)  jaccard=0.0109  score=0.055  fileCov=0.0135
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: shutdownErrorTracking, isErrorTrackingCapReached, flushErrorTracking, enqueueErrorLog, _resetForTesting, DD_BROWSER_INTAKE
// [unwrapped __esm module SJ] deps: Hp, Qi, Rc, dn, Un, je, At, Ls, Is, qd, R9, Jt, sVe
UOa = require("os");
KDe = Cn(async () => {
  let e = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
  if (e) return e;
  return (await wl().readAsync())?.trustedDeviceToken;
});
var Zjn = 78,
  e4n = 75,
  SWt = 70;
function dPp() {
  return parseInt(process.env.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || "", 10) || lPp;
}
async function pPp(e) {
  let t = De(e),
    n = new URLSearchParams({
      ddsource: "browser",
      "dd-api-key": n4n,
      "dd-evp-origin": "browser",
      "dd-evp-origin-version": {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
      }.VERSION,
      "dd-request-id": jOa.randomUUID(),
    });
  try {
    await lb.post(`${DD_BROWSER_INTAKE}?${n}`, t, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: uPp,
    });
  } catch (r) {
    if (ab(r) && r.response)
      T(`dd-error-tracking: intake responded ${r.response.status} (batch=${e.length})`, {
        level: "warn",
      });
    else
      T(`dd-error-tracking: intake failed: ${be(r)}`, {
        level: "warn",
      });
  }
}
async function flushErrorTracking() {
  if (YDe.length === 0) return;
  let e = YDe;
  ((YDe = []), await pPp(e));
}
function fPp() {
  if (EJ) return;
  EJ = setTimeout(() => {
    ((EJ = null), flushErrorTracking());
  }, dPp()).unref();
}
function isErrorTrackingCapReached() {
  return EWt >= Sft;
}
function mPp(e) {
  return {
    ...e,
    message: `ErrorTrackingCapReached: per-process cap of ${Sft} hit, dropping further reports`,
    error: {
      kind: "ErrorTrackingCapReached",
      message: `per-process cap of ${Sft} hit`,
      stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`,
      fingerprint: "cap-reached-sentinel",
      handling: "handled",
    },
    error_frames: void 0,
  };
}
function enqueueErrorLog(e) {
  if (EWt >= Sft) return;
  if ((EWt++, EWt === Sft && !oho))
    ((oho = true),
      T(`dd-error-tracking: per-process report cap reached (${Sft}); dropping further reports`, {
        level: "warn",
      }),
      YDe.push(mPp(e)));
  else YDe.push(e);
  if (YDe.length >= cPp) {
    if (EJ) (clearTimeout(EJ), (EJ = null));
    flushErrorTracking();
  } else fPp();
}
async function shutdownErrorTracking() {
  if (EJ) (clearTimeout(EJ), (EJ = null));
  await flushErrorTracking();
}
function hPp() {
  if (EJ) (clearTimeout(EJ), (EJ = null));
  let e = YDe;
  return ((YDe = []), (EWt = 0), (oho = false), e);
}
var jOa,
  DD_BROWSER_INTAKE = "https://browser-intake-us5-datadoghq.com/api/v2/logs",
  lPp = 30000,
  cPp = 25,
  uPp = 10000 /* 1e4 */,
  Sft = 100,
  YDe,
  EJ = null,
  EWt = 0,
  oho = false;
