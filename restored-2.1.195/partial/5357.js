// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tpc
// matched 2.1.88 source: src/utils/plugins/pluginBlocklist.ts
// class=partial  jaccard=0.2022  score=0.3232  fileCov=0.3506
// note: low-confidence suggestion: src/utils/plugins/pluginBlocklist.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var tpc = E(() => {
  dn();
  gb();
  j_e();
});
function yam(e, t, n) {
  let r = new Set(t.plugins.map(i => i.name)),
    o = `@${n}`,
    s = [];
  for (let i of Object.keys(e.plugins)) {
    if (!i.endsWith(o)) continue;
    let a = i.slice(0, -o.length),
      l = t.renames && FSt(a, t.renames, r)?.kind === "renamed";
    if (!r.has(a) && !l) s.push(i);
  }
  return s;
}
async function nur() {
  await mjl();
  let e = ex(),
    t = QEt(),
    n = await wP(),
    r = [];
  for (let o of Object.keys(n)) try {
    let s = await G$(o);
    if (!s.forceRemoveDeletedPlugins) continue;
    let i = yam(e, s, o);
    for (let a of i) {
      if (a in t) continue;
      let l = e.plugins[a] ?? [];
      if (!l.some(u => u.scope === "user" || u.scope === "project" || u.scope === "local")) continue;
      for (let u of l) {
        let {
          scope: d
        } = u;
        if (d !== "user" && d !== "project" && d !== "local") continue;
        try {
          let p = await OHe(a, d);
          G("tengu_plugin_delisted_enforcement", {
            outcome: p.success ? We("uninstalled") : We("uninstall-failed"),
            scope: $e(d),
            ...(!p.success && {
              error_kind: $e(lX(p.message))
            }),
            ...e4(a, R0())
          });
        } catch (p) {
          T(`Failed to auto-uninstall delisted plugin ${a} from ${d}: ${be(p)}`, {
            level: "error"
          }), G("tengu_plugin_delisted_enforcement", {
            outcome: We("uninstall-failed"),
            scope: $e(d),
            error_kind: $e(lX(p)),
            ...e4(a, R0())
          });
        }
      }
      await gjl(a), r.push(a);
    }
  } catch (s) {
    T(`Failed to check for delisted plugins in "${o}": ${be(s)}`, {
      level: "warn"
    }), G("tengu_plugin_delisted_enforcement", {
      outcome: We("scan-failed"),
      error_kind: $e(lX(s)),
      _PROTO_marketplace_name: o,
      is_official_marketplace: zD(o)
    });
  }
  return r;
}