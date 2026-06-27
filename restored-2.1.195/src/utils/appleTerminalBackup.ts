// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HUt
// matched 2.1.88 source: src/utils/appleTerminalBackup.ts
// class=modified  jaccard=0.447  score=0.7142  fileCov=0.5444
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HUt] deps: Qi, dn, er, Lo, oc, ys
E8i = require("path");
H8i = Cn(() => {
  let e = Lg();
  if (e.hasCompletedProjectOnboarding || e.projectOnboardingSeenCount >= 4 || process.env.IS_DEMO)
    return false;
  return !A8i();
});
function r6d(e) {
  gn((t) => ({
    ...t,
    appleTerminalSetupInProgress: true,
    appleTerminalBackupPath: e,
  }));
}
function Wat() {
  gn((e) => ({
    ...e,
    appleTerminalSetupInProgress: false,
  }));
}
function o6d() {
  let e = Dt();
  return {
    inProgress: e.appleTerminalSetupInProgress ?? false,
    backupPath: e.appleTerminalBackupPath || null,
  };
}
function getTerminalPlistPath() {
  return w8i.join(v8i.homedir(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function backupTerminalPreferences() {
  let e = getTerminalPlistPath(),
    t = `${e}.bak`;
  try {
    let { code: n } = await $n("defaults", ["export", "com.apple.Terminal", e]);
    if (n !== 0) return null;
    try {
      await VQr.stat(e);
    } catch {
      return null;
    }
    return (await $n("defaults", ["export", "com.apple.Terminal", t]), r6d(t), t);
  } catch (n) {
    if (Vo(n)) return (T(`backupTerminalPreferences: config write failed: ${n}`), null);
    return (ke(n), null);
  }
}
async function checkAndRestoreTerminalBackup() {
  let { inProgress: e, backupPath: t } = o6d();
  if (!e)
    return {
      status: "no_backup",
    };
  if (!t)
    return (
      Wat(),
      {
        status: "no_backup",
      }
    );
  try {
    await VQr.stat(t);
  } catch {
    return (
      Wat(),
      {
        status: "no_backup",
      }
    );
  }
  let n = false;
  try {
    let { code: r } = await $n("defaults", ["import", "com.apple.Terminal", t]);
    if (r !== 0)
      return {
        status: "failed",
        backupPath: t,
      };
    return (
      (n = true),
      await $n("killall", ["cfprefsd"]),
      Wat(),
      {
        status: "restored",
      }
    );
  } catch (r) {
    if (Vo(r)) T(`checkAndRestoreTerminalBackup: config write failed: ${r}`);
    else ke(r);
    try {
      Wat();
    } catch {}
    return n
      ? {
          status: "restored",
        }
      : {
          status: "failed",
          backupPath: t,
        };
  }
}
var VQr, v8i, w8i;
