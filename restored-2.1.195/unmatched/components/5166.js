// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VQl
// matched 2.1.88 source: src/entrypoints/sdk/controlSchemas.ts
// class=new  jaccard=0.0123  score=0.1158  fileCov=0.0136
// note: nearest: src/entrypoints/sdk/controlSchemas.ts (0.0123); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VQl = E(() => {
  Ozf = {
    type: "local-jsx",
    name: "wellbeing",
    aliases: ["breaks", "break-reminder", "downtime"],
    description: "Configure optional break reminders and quiet-hours nudges",
    isEnabled: () => false,
    immediate: true,
    requires: {
      ink: true
    },
    load: () => Promise.resolve().then(() => (qQl(), GQl))
  }, g3o = Ozf;
});
function zQl(e) {
  let t = Ju();
  if (!t) return null;
  if (!NA()) return " (applied locally \u2014 this remote transport can\u2019t update the remote session)";
  return t.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      viewMode: e ? "focus" : null
    }
  }).catch(ke), null;
}
var Nzf, h3o;