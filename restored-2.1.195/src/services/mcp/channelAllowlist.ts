// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module L6t
// matched 2.1.88 source: src/services/mcp/channelAllowlist.ts
// class=modified  jaccard=0.4928  score=1  fileCov=0.4928
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
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
  return at("tengu_harbor", false);
}
function isChannelAllowlisted(e) {
  if (!e) return false;
  let { name: t, marketplace: n } = Qo(e);
  if (!n) return false;
  return getChannelAllowlist().some((r) => r.plugin === t && r.marketplace === n);
}
var kdf;
