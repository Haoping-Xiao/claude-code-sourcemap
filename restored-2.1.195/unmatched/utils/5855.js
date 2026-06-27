// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CUc
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0024  score=0.4084  fileCov=0.0024
// note: nearest: src/cli/print.ts (0.0024); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CUc = E(() => {
  je();
  Yp();
});
function IUc(e, t, n, r) {
  return async o => {
    let s = t();
    switch (ket(s.mode, s.isBypassPermissionsModeAvailable)) {
      case "allow":
        return true;
      case "deny":
        return false;
      case "classify":
        return Tyt(o.host, o.port, n(), r(), s, new AbortController().signal, {
          isSubagentLoop: aje(void 0),
          recordPresumed: true
        });
      case "ask":
        return e(o);
    }
  };
}