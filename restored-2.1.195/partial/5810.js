// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w7o
// matched 2.1.88 source: src/migrations/migrateLegacyOpusToCurrent.ts
// class=partial  jaccard=0.1125  score=0.4986  fileCov=0.1268
// note: low-confidence suggestion: src/migrations/migrateLegacyOpusToCurrent.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var w7o = E(() => {
  ghe();
  dre();
  ft();
  BI();
  Kv();
  jdt();
  g$();
  je();
  fn();
  vn();
  sG();
  Pxm = [500, 1500, 4000];
});
function $Oc(e = $xm) {
  if (fr() !== "firstParty") return;
  let t = yn("userSettings")?.model;
  if (!t) return;
  let n = ya(t);
  if (!Object.hasOwn(e, n)) return;
  let r = e[n];
  if (r === void 0) return;
  let o = n !== t;
  io("userSettings", {
    model: o ? `${r}[1m]` : r
  }), G("tengu_alias_migration", {
    from_model: Cf(n),
    to_model: Cf(r),
    has_1m: o
  });
}
var $xm;