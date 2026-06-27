// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Azo
// matched 2.1.88 source: src/utils/deepLink/registerProtocol.ts
// class=modified (alt of src/utils/deepLink/registerProtocol.ts)  jaccard=0.077  score=0.3499  fileCov=0.0899
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: startBackgroundHousekeeping, isLastCleanupSentinelFresh, _resetHousekeepingStartedForTesting, TRANSCRIPT_HEARTBEAT_INTERVAL_MS, STALE_CLEANUP_CATCHUP_DELAY_MS, DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION
// [unwrapped __esm module Azo] deps: dn, je, fn, At, Bi, dr, _0, aEe, Zdr
((lV = require("fs")),
  (ISc = R(require("os"))),
  (Qse = R(require("path"))),
  (zen = Qse.join(ISc.homedir(), "Applications", Vgm)),
  (_zo = Qse.join(zen, "Contents", "MacOS", "claude")));
((bzo = `HKEY_CURRENT_USER\\Software\\Classes\\${aV}`), (kSc = `${bzo}\\shell\\open\\command`));
async function isLastCleanupSentinelFresh() {
  try {
    let e = await npr.stat(Tzo.join(tr(), ".last-cleanup"));
    return Date.now() - e.mtimeMs < Zgm;
  } catch {
    return false;
  }
}
function ehm() {
  Hzo = false;
}
async function startBackgroundHousekeeping() {
  if (Hzo) return;
  Hzo = true;
  {
    let { initExtractMemories: r } = await Promise.resolve().then(() => (VKt(), NQn));
    r();
  }
  if ((zIl(), tjl(), Ax()))
    (PSc(), ulr(), setInterval(ulr, TRANSCRIPT_HEARTBEAT_INTERVAL_MS).unref());
  let e = true,
    t = false;
  async function n() {
    if (Ax() && Ex() > Date.now() - 60000) {
      setTimeout(n, DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION).unref();
      return;
    }
    if (e) {
      if (!t) {
        if (((t = true), await isLastCleanupSentinelFresh())) {
          setTimeout(n, DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION).unref();
          return;
        }
      }
      ((e = false),
        await ASc(),
        await npr.writeFile(Tzo.join(tr(), ".last-cleanup"), new Date().toISOString()).catch((r) =>
          gd(r)
            ? T(`.last-cleanup write failed: ${r.code} ${r.message}`, {
                level: "error",
              })
            : ke(r),
        ));
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
  Hzo = false;
