// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CUc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
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