// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Azo
// matched 2.1.88 source: src/utils/deepLink/registerProtocol.ts
// class=partial  jaccard=0.0887  score=0.6773  fileCov=0.0926
// note: low-confidence suggestion: src/utils/deepLink/registerProtocol.ts; 5 renamed
// ─────────────────────────────────────────────────────────────────────────
var Azo = E(() => {
  dn();
  je();
  fn();
  At();
  Bi();
  dr();
  _0();
  aEe();
  Zdr();
  lV = require("fs"), ISc = R(require("os")), Qse = R(require("path")), zen = Qse.join(ISc.homedir(), "Applications", Vgm), _zo = Qse.join(zen, "Contents", "MacOS", "claude");
  bzo = `HKEY_CURRENT_USER\\Software\\Classes\\${aV}`, kSc = `${bzo}\\shell\\open\\command`;
});
var rpr = {};
_t(rpr, {
  startBackgroundHousekeeping: () => startBackgroundHousekeeping,
  isLastCleanupSentinelFresh: () => isLastCleanupSentinelFresh,
  _resetHousekeepingStartedForTesting: () => ehm,
  TRANSCRIPT_HEARTBEAT_INTERVAL_MS: () => TRANSCRIPT_HEARTBEAT_INTERVAL_MS,
  STALE_CLEANUP_CATCHUP_DELAY_MS: () => STALE_CLEANUP_CATCHUP_DELAY_MS,
  DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION: () => DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION
});
async function isLastCleanupSentinelFresh() {
  try {
    let e = await npr.stat(Tzo.join(tr(), ".last-cleanup"));
    return Date.now() - e.mtimeMs < Zgm;
  } catch {
    return !1;
  }
}
function ehm() {
  Hzo = !1;
}
async function startBackgroundHousekeeping() {
  if (Hzo) return;
  Hzo = !0;
  {
    let {
      initExtractMemories: r
    } = await Promise.resolve().then(() => (VKt(), NQn));
    r();
  }
  if (zIl(), tjl(), Ax()) PSc(), ulr(), setInterval(ulr, TRANSCRIPT_HEARTBEAT_INTERVAL_MS).unref();
  let e = !0,
    t = !1;
  async function n() {
    if (Ax() && Ex() > Date.now() - 60000) {
      setTimeout(n, DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION).unref();
      return;
    }
    if (e) {
      if (!t) {
        if (t = !0, await isLastCleanupSentinelFresh()) {
          setTimeout(n, DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION).unref();
          return;
        }
      }
      e = !1, await ASc(), await npr.writeFile(Tzo.join(tr(), ".last-cleanup"), new Date().toISOString()).catch(r => gd(r) ? T(`.last-cleanup write failed: ${r.code} ${r.message}`, {
        level: "error"
      }) : ke(r));
    }
    if (Ax() && Ex() > Date.now() - 60000) {
      setTimeout(n, DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION).unref();
      return;
    }
    await tVt();
  }
  setTimeout(n, STALE_CLEANUP_CATCHUP_DELAY_MS).unref();
}
var npr,
  Tzo,
  Zgm = 86400000,
  DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION = 600000,
  STALE_CLEANUP_CATCHUP_DELAY_MS = 5000,
  TRANSCRIPT_HEARTBEAT_INTERVAL_MS = 3600000,
  Hzo = !1;