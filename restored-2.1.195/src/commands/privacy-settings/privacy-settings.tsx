// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Yjo
// matched 2.1.88 source: src/commands/privacy-settings/privacy-settings.tsx
// class=modified  jaccard=0.3169  score=0.4029  fileCov=0.5973
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module Yjo] deps: kt, Ye, vft, mE, Bs, vi, Ko
((AJt = R(lt(), 1)), (fYe = R(rt(), 1)), (Al = R(se(), 1)));
async function call(e) {
  if (!(await Tft())) return (e(tKl), null);
  let [n, r] = await Promise.all([Fre(), JDe()]);
  if (!n.success) return (e(tKl), null);
  let o = n.data,
    s = r.success ? r.data : null;
  async function i(l) {
    if (l === "escape" || l === "defer") {
      e("Privacy settings dialog dismissed", {
        display: "system",
      });
      return;
    }
    await a();
  }
  async function a() {
    let l = await Fre();
    if (!l.success) {
      e("Unable to retrieve updated privacy settings", {
        display: "system",
      });
      return;
    }
    let c = l.data,
      u = c.grove_enabled ? "true" : "false";
    if (
      (e(`"Help improve our AI models" set to ${u}.`),
      o.grove_enabled !== null && o.grove_enabled !== c.grove_enabled)
    )
      G("tengu_grove_policy_toggled", {
        state: c.grove_enabled,
        location: We("settings"),
      });
  }
  if (o.grove_enabled !== null)
    return Xjo.jsx(Kjo, {
      settings: o,
      domainExcluded: s?.domain_excluded,
      onDone: a,
    });
  return Xjo.jsx(zjo, {
    showIfAlreadyViewed: true,
    onDone: i,
    location: "settings",
  });
}
var Xjo,
  tKl =
    "Review and manage your privacy settings at https://claude.ai/settings/data-privacy-controls";
