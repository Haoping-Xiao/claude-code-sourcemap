// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MEt
// matched 2.1.88 source: src/utils/plugins/pluginStartupCheck.ts
// class=modified  jaccard=0.4993  score=0.8443  fileCov=0.5499
// note: deminified; 7 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module MEt] deps: Ye, gm
((f2l = R(lt(), 1)), (OKe = R(se(), 1)));
var h2l = {};
_t(h2l, {
  settingSourceToScope: () => settingSourceToScope,
  isPersistableScope: () => isPersistableScope,
  installSelectedPlugins: () => installSelectedPlugins,
  getPluginEditableScopes: () => getPluginEditableScopes,
  getInstalledPlugins: () => getInstalledPlugins,
  findMissingPlugins: () => findMissingPlugins,
  checkEnabledPlugins: () => checkEnabledPlugins,
});
async function checkEnabledPlugins() {
  let e = Dr(),
    t = [],
    n = tWe();
  for (let [r, o] of Object.entries(n)) if (r.includes("@") && o) t.push(r);
  if (e.enabledPlugins)
    for (let [r, o] of Object.entries(e.enabledPlugins)) {
      if (!r.includes("@")) continue;
      let s = t.indexOf(r);
      if (o) {
        if (s === -1) t.push(r);
      } else if (s !== -1) t.splice(s, 1);
    }
  return t;
}
function getPluginEditableScopes() {
  let e = new Map(),
    t = tWe();
  for (let [r, o] of Object.entries(t)) {
    if (!r.includes("@")) continue;
    if (o === true) e.set(r, "flag");
    else if (o === false) e.delete(r);
  }
  let n = [
    {
      scope: "managed",
      source: "policySettings",
    },
    {
      scope: "user",
      source: "userSettings",
    },
    {
      scope: "project",
      source: "projectSettings",
    },
    {
      scope: "local",
      source: "localSettings",
    },
    {
      scope: "flag",
      source: "flagSettings",
    },
  ];
  for (let { scope: r, source: o } of n) {
    let s = yn(o);
    if (!s?.enabledPlugins) continue;
    for (let [i, a] of Object.entries(s.enabledPlugins)) {
      if (!i.includes("@")) continue;
      if (i in t && t[i] !== a) T(`Plugin ${i} from --add-dir (${t[i]}) overridden by ${o} (${a})`);
      if (a === true) e.set(i, r);
      else if (a === false) e.delete(i);
    }
  }
  return (
    T(
      `Found ${e.size} enabled plugins with scopes: ${Array.from(e.entries())
        .map(([r, o]) => `${r}(${o})`)
        .join(", ")}`,
    ),
    e
  );
}
function isPersistableScope(e) {
  return e !== "flag";
}
function settingSourceToScope(e) {
  return leo[e];
}
async function getInstalledPlugins() {
  I$o().catch((n) => {
    if (gd(n) || n instanceof SyntaxError)
      T(`Plugin sync skipped (fs/parse error): ${be(n)}`, {
        level: "error",
      });
    else ke(n);
  });
  let e = MYt(),
    t = Object.keys(e.plugins);
  return (T(`Found ${t.length} installed plugins`), t);
}
async function findMissingPlugins(e) {
  try {
    let t = await getInstalledPlugins(),
      n = e.filter((s) => !t.includes(s));
    return (
      await Promise.all(
        n.map(async (s) => {
          try {
            let i = await EL(s);
            return {
              pluginId: s,
              found: i !== null && i !== void 0,
            };
          } catch (i) {
            return (
              T(`Failed to check plugin ${s} in marketplace: ${i}`),
              {
                pluginId: s,
                found: false,
              }
            );
          }
        }),
      )
    )
      .filter(({ found: s }) => s)
      .map(({ pluginId: s }) => s);
  } catch (t) {
    return (ke(t), []);
  }
}
async function installSelectedPlugins(e, t, n = "user") {
  let r = n !== "user" ? $t() : void 0,
    o = KD(n),
    s = yn(o),
    i = {
      ...s?.enabledPlugins,
    },
    a = [],
    l = [];
  for (let c = 0; c < e.length; c++) {
    let u = e[c];
    if (!u) continue;
    if (t) t(u, c + 1, e.length);
    try {
      let d = await EL(u);
      if (!d) {
        l.push({
          name: u,
          error: "Plugin not found in any marketplace",
        });
        continue;
      }
      let { entry: p, marketplaceInstallLocation: f } = d;
      if (!eLt(p.source)) await NYt(u, p, n, r);
      else
        NRl(
          {
            pluginId: u,
            installPath: m2l.join(f, p.source),
            version: p.version,
          },
          n,
          r,
        );
      ((i[u] = true), a.push(u));
    } catch (d) {
      let p = d instanceof Error ? d.message : String(d);
      (l.push({
        name: u,
        error: p,
      }),
        T(`Failed to install plugin ${u}: ${p}`, {
          level: "error",
        }));
    }
  }
  return (
    io(o, {
      ...s,
      enabledPlugins: i,
    }),
    {
      installed: a,
      failed: l,
    }
  );
}
var m2l;
