// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jur
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jur = E(() => {
  vn();
  Xr();
  dn();
  Lo();
  aE();
  ehc = R(require("path")), wen = R(rt(), 1), sdm = ve(() => H.object({
    method: H.literal(odm),
    params: H.object({
      filePath: H.string(),
      lineStart: H.number().optional(),
      lineEnd: H.number().optional()
    })
  }));
});
function $me() {
  let e = Ht(r => uQt(r.settings)),
    t = Ht(r => r.authVersion),
    n = Gur.useMemo(() => e && tar(), [t, e]);
  return Gur.useEffect(() => {
    if (thc) return;
    thc = !0, G("tengu_voice_init_gate", {
      user_intent_store: e,
      user_intent_disk: uQt(Dr()),
      has_voice_auth: tar(),
      voice_mode_allowed: nar(),
      auth_version: t
    });
  }, []), n && cQt() && nar();
}
var Gur,
  thc = !1;