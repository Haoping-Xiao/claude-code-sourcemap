// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wOc
// matched 2.1.88 source: src/utils/hooks/hooksSettings.ts
// class=new  jaccard=0.0469  score=0.3954  fileCov=0.0505
// note: nearest: src/utils/hooks/hooksSettings.ts (0.0469); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var wOc = E(() => {
  Ld();
  je();
});
function IOc(e, t) {
  if (Mj()) return;
  if (lc("hooks")) return;
  let n = sg(),
    r = N_(),
    o = new Set();
  for (let i of fv) {
    if (r && i !== "policySettings") continue;
    let a = xg(i);
    if (a) {
      let c = COc.resolve(a);
      if (o.has(c)) continue;
      o.add(c);
    }
    let l = yn(i)?.hooks;
    if (!l) continue;
    for (let [c, u] of Object.entries(l)) for (let d of u) for (let p of d.hooks) Jc("hook_registered", {
      hook_event: c,
      hook_type: p.type,
      hook_source: i,
      safe_mode: String(Tl()),
      ...(n && d.matcher && {
        hook_matcher: d.matcher
      })
    });
  }
  let s = r && !Tl() ? R7() : null;
  for (let i of e) {
    if (!i.hooksConfig) continue;
    if (r && !s?.has(i.source)) continue;
    let {
        marketplace: a
      } = Qo(i.repository),
      l = Q0e(eWe(i.name, a, t)) || n;
    for (let [c, u] of Object.entries(i.hooksConfig)) for (let d of u) for (let p of d.hooks) Jc("hook_registered", {
      hook_event: c,
      hook_type: p.type,
      hook_source: "pluginHook",
      safe_mode: String(Tl()),
      "plugin.name": l ? i.name : Qj,
      plugin_id_hash: Abe(i.name, a),
      ...(n && d.matcher && {
        hook_matcher: d.matcher
      })
    });
  }
}
var COc;