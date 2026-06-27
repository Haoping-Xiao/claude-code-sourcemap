// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aMc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aMc = E(() => {
  kt();
  je();
  wr();
  Is();
  bvt = require("path"), QYo = require("util");
  CIm = [/MaxListenersExceededWarning.*AbortSignal/, /MaxListenersExceededWarning.*EventTarget/];
});
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