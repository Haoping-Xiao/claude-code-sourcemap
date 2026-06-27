// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L6t
// matched 2.1.88 source: src/services/mcp/channelAllowlist.ts
// class=modified  jaccard=0.4451  score=1  fileCov=0.4451
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var L6t = E(() => {
  kt();
  Du();
  G1();
  S$();
  Il();
  je();
  sp();
  co();
  $I();
  __();
  Gy();
  xYn();
  kgo();
  U_t();
});
var Gfl = {};
_t(Gfl, {
  isChannelsEnabled: () => isChannelsEnabled,
  isChannelAllowlisted: () => isChannelAllowlisted,
  getChannelAllowlist: () => getChannelAllowlist,
});
function getChannelAllowlist() {
  let e = at("tengu_harbor_ledger", []),
    t = kdf().safeParse(e);
  return t.success ? t.data : [];
}
function isChannelsEnabled() {
  return at("tengu_harbor", !1);
}
function isChannelAllowlisted(e) {
  if (!e) return !1;
  let { name: t, marketplace: n } = Qo(e);
  if (!n) return !1;
  return getChannelAllowlist().some((r) => r.plugin === t && r.marketplace === n);
}
var kdf;
