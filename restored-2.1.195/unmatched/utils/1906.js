// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nEi
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nEi = E(() => {
  Zb();
  VWr();
  fot();
  Y$t();
  mwn();
  tEi();
  $vn();
  Tv();
  Pvn(); /*! @azure/msal-node v3.8.1 2025-10-29 */
  Qvd = [pp.SERVICE_FABRIC];
});
class J5r {
  constructor(e, t) {
    this.client = e, this.partitionManager = t;
  }
  async beforeCacheAccess(e) {
    let t = await this.partitionManager.getKey(),
      n = await this.client.get(t);
    e.tokenCache.deserialize(n);
  }
  async afterCacheAccess(e) {
    if (e.cacheHasChanged) {
      let t = e.tokenCache.getKVStore(),
        n = Object.values(t).filter(o => QR.isAccountEntity(o)),
        r;
      if (n.length > 0) {
        let o = n[0];
        r = await this.partitionManager.extractKey(o);
      } else r = await this.partitionManager.getKey();
      await this.client.set(r, e.tokenCache.serialize());
    }
  }
}