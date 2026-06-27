// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M9o
// matched 2.1.88 source: src/utils/iTermBackup.ts
// class=modified  jaccard=0.7948  score=1  fileCov=0.7948
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var M9o = E(() => {
  k9o();
  Ycr();
  vn();
  co();
  dr();
  dn();
});
function Xcr() {
  gn((e) => ({
    ...e,
    iterm2SetupInProgress: !1,
  }));
}
function Kim() {
  let e = Dt();
  return {
    inProgress: e.iterm2SetupInProgress ?? !1,
    backupPath: e.iterm2BackupPath || null,
  };
}
function Yim() {
  return Odc.join($dc.homedir(), "Library", "Preferences", "com.googlecode.iterm2.plist");
}
async function Ndc() {
  let { inProgress: e, backupPath: t } = Kim();
  if (!e)
    return {
      status: "no_backup",
    };
  if (!t)
    return (
      Xcr(),
      {
        status: "no_backup",
      }
    );
  try {
    await Jcr.stat(t);
  } catch {
    return (
      Xcr(),
      {
        status: "no_backup",
      }
    );
  }
  try {
    return (
      await Jcr.copyFile(t, Yim()),
      Xcr(),
      {
        status: "restored",
      }
    );
  } catch (n) {
    return (
      T(`Failed to restore iTerm2 settings with: ${n}`, {
        level: "error",
      }),
      Xcr(),
      {
        status: "failed",
        backupPath: t,
      }
    );
  }
}
var Jcr, $dc, Odc;
