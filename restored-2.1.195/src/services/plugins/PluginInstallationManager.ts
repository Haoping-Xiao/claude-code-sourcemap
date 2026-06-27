// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $Yo
// matched 2.1.88 source: src/services/plugins/PluginInstallationManager.ts
// class=modified  jaccard=0.3576  score=0.5033  fileCov=0.5527
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $Yo] deps: lodash-es/_createBaseFor.js, services/analytics/index.ts, utils/debug.ts, utils/errors.ts, utils/nativeInstaller/download.ts, utils/git.ts, utils/plugins/installedPluginsManager.ts, utils/plugins/schemas.ts
Bfr = require("path");
function OYo(e, t, n, r) {
  e((o) => ({
    ...o,
    plugins: {
      ...o.plugins,
      installationStatus: {
        ...o.plugins.installationStatus,
        marketplaces: o.plugins.installationStatus.marketplaces.map((s) =>
          s.name === t
            ? {
                ...s,
                status: n,
                error: r,
              }
            : s,
        ),
      },
    },
  }));
}
async function SCm(e = new Set()) {
  let t = new Set();
  if (o1e()) return t;
  try {
    let n = await MBo();
    if (n.length === 0) return t;
    let r = await wP(),
      o = f3(),
      s = new Map(),
      i = new Map();
    for (let a of n) {
      let { name: l, marketplace: c } = Qo(a),
        u = c ? r[c] : void 0;
      if (
        !l ||
        !c ||
        !u ||
        U0(c) ||
        e.has(c) ||
        u.source.source === "settings" ||
        !_H(u.source) ||
        hOe(u.installLocation) !== void 0 ||
        !khe(c, u, o[c]?.autoUpdate)
      )
        continue;
      let d = i.get(c);
      if (d === void 0) ((d = await Iq(c)), i.set(c, d));
      if (d === null) continue;
      if (!d.plugins.some((p) => p.name === l)) {
        let p = s.get(c);
        if (p) p.push(a);
        else s.set(c, [a]);
      }
    }
    if (s.size === 0) return t;
    (T(
      `refresh-on-miss: ${s.size} marketplace(s) have enabled plugins missing from local catalog; refreshing`,
    ),
      await Nn(Math.floor(Math.random() * bCm), void 0, {
        unref: true,
      }));
    for (let [a, l] of s) {
      let c;
      try {
        await ise(a, void 0, {
          skipIfRecent: true,
        });
      } catch (p) {
        ((c = p),
          T(`refresh-on-miss: failed to refresh marketplace '${a}': ${be(p)}`, {
            level: "warn",
          }));
      }
      let u = c !== void 0 ? null : await Iq(a),
        d = false;
      for (let p of l) {
        let { name: f } = Qo(p),
          m = u !== null && u.plugins.some((h) => h.name === f);
        d ||= m;
        let g = c !== void 0 ? "refresh_failed" : m ? "resolved" : "still_missing";
        (T(`refresh-on-miss: ${p} \u2192 ${g}`),
          G("tengu_plugin_refresh_on_miss", {
            outcome: $e(g),
            ...(c !== void 0 && {
              error_kind: $e(lX(c)),
            }),
            ...e4(p),
          }));
      }
      if (d) t.add(a);
    }
  } catch (n) {
    T(`refresh-on-miss: unexpected error: ${be(n)}`, {
      level: "warn",
    });
  }
  return t;
}
async function performBackgroundPluginInstallations(setAppState) {
  T("performBackgroundPluginInstallations called");
  try {
    let t = f3(),
      n = await om().catch(() => ({})),
      r = MYo(t, n),
      o = [...r.missing, ...r.sourceChanged.map((a) => a.name)];
    if (
      (setAppState((a) => ({
        ...a,
        plugins: {
          ...a.plugins,
          installationStatus: {
            marketplaces: o.map((l) => ({
              name: l,
              status: "pending",
            })),
            plugins: [],
          },
        },
      })),
      o.length > 0)
    )
      T(`Installing ${o.length} marketplace(s) in background`);
    let s = await Ufr({
      onProgress: (a) => {
        switch (a.type) {
          case "installing":
            OYo(setAppState, a.name, "installing");
            break;
          case "installed":
            OYo(setAppState, a.name, "installed");
            break;
          case "failed":
            OYo(setAppState, a.name, "failed", a.error);
            break;
        }
      },
    });
    if (s.installed.length > 0 || s.updated.length > 0 || s.failed.length > 0) {
      let a = {
        installed_count: s.installed.length,
        updated_count: s.updated.length,
        failed_count: s.failed.length,
        up_to_date_count: s.upToDate.length,
      };
      (G("tengu_marketplace_background_install", a),
        In("info", "tengu_marketplace_background_install", a));
    }
    let i = await SCm(new Set([...s.installed, ...s.updated]));
    if (s.installed.length > 0 || i.size > 0) {
      (gOe(),
        T(
          `Auto-refreshing plugins (installed: ${s.installed.length}, stale-refreshed: ${i.size})`,
        ));
      try {
        await iTe(setAppState);
      } catch (a) {
        (T(`Auto-refresh failed, falling back to needsRefresh: ${a}`, {
          level: "error",
        }),
          PI("performBackgroundPluginInstallations: auto-refresh failed"),
          setAppState((l) => {
            if (l.plugins.needsRefresh) return l;
            return {
              ...l,
              plugins: {
                ...l.plugins,
                needsRefresh: true,
              },
            };
          }),
          It("plugin_marketplace_bg_install", "auto_refresh_failed"));
        return;
      }
    } else if (s.updated.length > 0)
      (gOe(),
        PI("performBackgroundPluginInstallations: marketplaces reconciled"),
        setAppState((a) => {
          if (a.plugins.needsRefresh) return a;
          return {
            ...a,
            plugins: {
              ...a.plugins,
              needsRefresh: true,
            },
          };
        }));
    if (s.failed.length > 0) It("plugin_marketplace_bg_install", "reconcile_partial_failure");
    else xe("plugin_marketplace_bg_install");
  } catch (t) {
    (ke(t), Le("plugin_marketplace_bg_install", "reconcile_error"));
  }
}
var bCm = 5000;
