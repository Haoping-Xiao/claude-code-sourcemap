// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ffo
// matched 2.1.88 source: src/utils/computerUse/hostAdapter.ts
// class=modified  jaccard=0.5035  score=0.8613  fileCov=0.548
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
class ERa {
  silly(e, ...t) {
    T(upt.format(e, ...t), {
      level: "debug",
    });
  }
  debug(e, ...t) {
    T(upt.format(e, ...t), {
      level: "debug",
    });
  }
  info(e, ...t) {
    T(upt.format(e, ...t), {
      level: "info",
    });
  }
  warn(e, ...t) {
    T(upt.format(e, ...t), {
      level: "warn",
    });
  }
  error(e, ...t) {
    T(upt.format(e, ...t), {
      level: "error",
    });
  }
}
function ZFn() {
  if (QFn) return QFn;
  return (
    (QFn = {
      serverName: S7,
      logger: new ERa(),
      executor: pfo({
        getMouseAnimationEnabled: () => JFn().mouseAnimation,
        getHideBeforeActionEnabled: () => JFn().hideBeforeAction,
      }),
      ensureOsPermissions: async () => {
        let e = U4(),
          t = e.tcc.checkAccessibility(),
          n = e.tcc.checkScreenRecording();
        return t && n
          ? {
              granted: true,
            }
          : {
              granted: false,
              accessibility: t,
              screenRecording: n,
            };
      },
      isDisabled: () => !XFn(),
      getSubGates: JFn,
      getAutoUnhideEnabled: () => true,
      cropRawPatch: () => null,
    }),
    QFn
  );
}
var upt, QFn;
