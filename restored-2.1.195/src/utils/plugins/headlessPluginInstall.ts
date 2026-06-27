// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OUc
// matched 2.1.88 source: src/utils/plugins/headlessPluginInstall.ts
// class=modified  jaccard=0.5086  score=0.8985  fileCov=0.5397
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OUc] deps: je, Jt, lE, ZC, dOe
((fXo = require("fs/promises")), (Rmr = require("path")));
async function installPluginsForHeadless(e) {
  let t = az();
  T(`installPluginsForHeadless: starting${t ? " (zip cache mode)" : ""}`);
  let n = await ser();
  if (n) (gOe(), PI("headlessPluginInstall: seed marketplaces registered"));
  if (t) (await qt().mkdir(nRl()), await qt().mkdir(rRl()));
  let r = Object.keys(f3()).length,
    o = {
      marketplaces_installed: 0,
      delisted_count: 0,
    },
    s = n;
  try {
    if (r === 0) T("installPluginsForHeadless: no marketplaces declared");
    else {
      let a = await pet(
        "headless_marketplace_reconcile",
        () =>
          Ufr({
            skip: t ? (c, u) => !iRl(u) : void 0,
            onProgress: (c) => {
              if (c.type === "installed")
                (e?.({
                  status: "installed",
                  name: c.name,
                }),
                  T(`installPluginsForHeadless: installed marketplace ${c.name}`));
              else if (c.type === "failed")
                (e?.({
                  status: "failed",
                  name: c.name,
                  error: c.error,
                }),
                  T(
                    `installPluginsForHeadless: failed to install marketplace ${c.name}: ${c.error}`,
                  ));
            },
          }),
        (c) => ({
          installed_count: c.installed.length,
          updated_count: c.updated.length,
          failed_count: c.failed.length,
          skipped_count: c.skipped.length,
        }),
      );
      if (a.skipped.length > 0)
        T(
          `installPluginsForHeadless: skipped ${a.skipped.length} marketplace(s) unsupported by zip cache: ${a.skipped.join(", ")}`,
        );
      let l = a.installed.length + a.updated.length;
      if (l > 0) (gOe(), PI("headlessPluginInstall: marketplaces reconciled"), (s = true));
      o.marketplaces_installed = l;
    }
    if (t) await $Uc();
    let i = await nur();
    if (((o.delisted_count = i.length), i.length > 0)) s = true;
    if (s) PI("headlessPluginInstall: plugins changed");
    return s;
  } catch (i) {
    return (
      T(`installPluginsForHeadless: failed: ${be(i)}`, {
        level: "error",
      }),
      false
    );
  } finally {
    G("tengu_headless_plugin_install", o);
  }
}
