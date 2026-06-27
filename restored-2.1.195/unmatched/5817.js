// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YOc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var YOc = E(() => {
  dn();
  kt();
  Ao();
  dr();
});
function XOc() {
  let e = !1;
  if (gn(t => {
    let n = t.replBridgeEnabled;
    if (n === void 0) return t;
    if (t.remoteControlAtStartup !== void 0) return t;
    let r = {
      ...t,
      remoteControlAtStartup: Boolean(n)
    };
    return delete r.replBridgeEnabled, e = !0, r;
  }), e) xe("migration_repl_bridge_to_remote_control");
}