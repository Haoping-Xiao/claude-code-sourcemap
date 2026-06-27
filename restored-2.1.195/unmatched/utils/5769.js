// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aMc
// matched 2.1.88 source: src/utils/permissions/permissionSetup.ts
// class=new  jaccard=0.0083  score=0.2294  fileCov=0.0085
// note: nearest: src/utils/permissions/permissionSetup.ts (0.0083); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module aMc] deps: utils/debug.ts, utils/debug.ts, main.tsx, utils/platform.ts
bvt = require("path"), QYo = require("util");
CIm = [/MaxListenersExceededWarning.*AbortSignal/, /MaxListenersExceededWarning.*EventTarget/];
function lMc(e) {
  let t = {},
    n = Rt();
  return {
    unsubscribe: oee((o, s) => {
      if (o === n) return;
      let i = n;
      n = o, G("tengu_session_start", {
        previous_session_id: Hr(i),
        source: $e(s),
        permissionMode: e.permissionMode,
        dangerouslySkipPermissionsPassed: e.dangerouslySkipPermissionsPassed,
        modeIsBypass: e.modeIsBypass,
        print: e.print,
        ...t
      });
    }),
    updateContext(o) {
      t = {
        ...t,
        ...o
      };
    }
  };
}