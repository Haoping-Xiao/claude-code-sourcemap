// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w7o
// matched 2.1.88 source: src/migrations/migrateSonnet45ToSonnet46.ts
// class=partial  jaccard=0.1571  score=0.5526  fileCov=0.18
// note: low-confidence suggestion: src/migrations/migrateSonnet45ToSonnet46.ts; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module w7o] deps: ghe, dre, ft, BI, Kv, jdt, g$, je, fn, vn, sG
Pxm = [500, 1500, 4000];
function migrateSonnet45ToSonnet46(e = $xm) {
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