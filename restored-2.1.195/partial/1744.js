// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ixe
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/authority/AuthorityMetadata.mjs
// class=partial  jaccard=0.1328  score=1  fileCov=0.1328
// note: low-confidence suggestion: node_modules/@azure/msal-common/dist/authority/AuthorityMetadata.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ixe = E(() => {
  wxe();
  Cxe();
  oT();
  r4e();
  Bye(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
function Mgi(e, t) {
  let n,
    r = e.canonicalAuthority;
  if (r) {
    let o = new sf(r).getUrlComponents().HostNameAndPort;
    n = Dgi(o, e.cloudDiscoveryMetadata?.metadata, Ej.CONFIG, t) || Dgi(o, TGr.metadata, Ej.HARDCODED_VALUES, t) || e.knownAuthorities;
  }
  return n || [];
}
function Dgi(e, t, n, r) {
  if (r?.trace(`getAliasesFromMetadata called with source: ${n}`), e && t) {
    let o = _$t(t, e);
    if (o) return r?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${n}, returning aliases`), o.aliases;else r?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${n}`);
  }
  return null;
}
function $gi(e) {
  return _$t(TGr.metadata, e);
}
function _$t(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r.aliases.includes(t)) return r;
  }
  return null;
}
var Pgi, HGr, TGr, vGr;