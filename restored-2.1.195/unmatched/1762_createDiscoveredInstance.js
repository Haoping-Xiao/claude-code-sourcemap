// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rvn
// matched 2.1.88 source: node_modules/@azure/msal-common/dist/authority/Authority.mjs
// class=new  jaccard=0.0306  score=1  fileCov=0.0306
// note: nearest: node_modules/@azure/msal-common/dist/authority/Authority.mjs (0.0306); 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var rvn = E(() => {
  bGr();
  Wgi();
  Ixe();
  JR();
  oT();
  wGr();
  wxe();
  h$t();
  $Tn();
  Vgi();
  Kgi();
  Xgi();
  n7();
  Ete();
  Wye();
  tvn();
  C0();
  Bye(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  BD.reservedTenantDomains = new Set(["{tenant}", "{tenantid}", YG.COMMON, YG.CONSUMERS, YG.ORGANIZATIONS]);
});
var ovn = {};
_t(ovn, {
  createDiscoveredInstance: () => createDiscoveredInstance
});
async function createDiscoveredInstance(e, t, n, r, o, s, i) {
  i?.addQueueMeasurement(ao.AuthorityFactoryCreateDiscoveredInstance, s);
  let a = BD.transformCIAMAuthority(nvn(e)),
    l = new BD(a, t, n, r, o, s, i);
  try {
    return await dh(l.resolveEndpointsAsync.bind(l), ao.AuthorityResolveEndpointsAsync, o, i, s)(), l;
  } catch (c) {
    throw ts(Aj);
  }
}