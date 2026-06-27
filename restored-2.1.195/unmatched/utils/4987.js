// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N8l
// matched 2.1.88 source: src/utils/markdownConfigLoader.ts
// class=new  jaccard=0.0395  score=0.2445  fileCov=0.0451
// note: nearest: src/utils/markdownConfigLoader.ts (0.0395); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var N8l = E(() => {
  je();
  Rd();
  co();
  _a();
  Jt();
  i$();
  D6e();
  Gko();
  $8l = require("path");
});
function S5f(e, t) {
  if (e === "user") return gJt.join(tr(), "workflows");
  let n = Tu(t);
  if (n === null) return gJt.join(t, ".claude", "workflows");
  let r = O6e("workflows", t)[0];
  if (r !== void 0) return r;
  return gJt.join(n, ".claude", "workflows");
}
async function B8l(e) {
  let t = N_e(e.name),
    n = S5f(e.scope, e.cwd),
    r = gJt.join(n, `${t}.js`);
  await dsr.mkdir(n, {
    recursive: !0,
    mode: 448
  });
  try {
    await dsr.writeFile(r, e.script, {
      encoding: "utf8",
      mode: 384,
      flag: e.overwrite ? "w" : "wx"
    });
  } catch (i) {
    if (on(i) === "EEXIST") throw Error(`Dynamic workflow "${t}" already exists at ${r}. Use a different name or overwrite.`);
    throw i;
  }
  s7n();
  let [{
    clearCommandMemoizationCaches: o
  }, {
    resetSentSkillNames: s
  }] = await Promise.all([Promise.resolve().then(() => (Zf(), fjo)), Promise.resolve().then(() => (Vv(), j0l))]);
  return o(), s(), G("tengu_workflow_saved", {
    scope: $e(e.scope),
    overwrite: e.overwrite,
    script_size_chars: e.script.length
  }), {
    name: t,
    path: r,
    scope: e.scope
  };
}
var dsr, gJt;