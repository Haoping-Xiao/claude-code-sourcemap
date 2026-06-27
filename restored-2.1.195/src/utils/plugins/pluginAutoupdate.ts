// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XEt
// matched 2.1.88 source: src/utils/plugins/pluginAutoupdate.ts
// class=modified  jaccard=0.2132  score=0.3309  fileCov=0.3746
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module XEt] deps: ft, glt, je, fn, At, ys, Hu, vq, vbe, _k, lE, e1e, B1, $g, vfe, Xh, i5, WI, NKe, OYt, ZC, dr, sr, I8
((Ase = require("path")), (jEt = R(Uj(), 1)));
((JL = ["user", "project", "local"]),
  (r1e = {
    user: 0,
    project: 1,
    local: 2,
  }),
  (UKe = ["user", "project", "local", "managed"]));
function ejl(e) {
  if (((hrr = e), hXt !== null)) (e(hXt.updated, hXt.blocked), (hXt = null));
  return () => {
    hrr = null;
  };
}
async function UNf() {
  let e = await om(),
    t = f3(),
    n = new Set();
  for (let [r, o] of Object.entries(e)) {
    if (!_H(o.source)) continue;
    if (khe(r, o, t[r]?.autoUpdate)) n.add(r.toLowerCase());
  }
  return n;
}
async function FNf(e, t, n) {
  let r = false,
    o = false,
    s = null;
  for (let { scope: i } of t)
    try {
      let a = await YEt(e, i);
      if (a.success && !a.alreadyUpToDate && !a.skipped)
        ((r = true), T(`Plugin autoupdate: updated ${e} from ${a.oldVersion} to ${a.newVersion}`));
      else if (a.skipped) {
        if ((T(`Plugin autoupdate: ${e} ${a.message}`), a.blockedBy && a.blockedBy.length > 0)) {
          let l = a.blockedBy.map((u) => Qo(u).name),
            c = a.blockedBy.filter((u) => n.has(u)).map((u) => Qo(u).name);
          s = {
            type: "autoupdate-blocked-by-pinner",
            source: e,
            plugin: Qo(e).name,
            heldAt: a.oldVersion,
            blockedBy: l,
            disabledPinners: c,
          };
        }
      } else if (!a.alreadyUpToDate)
        ((o = true),
          T(`Plugin autoupdate: failed to update ${e}: ${a.message}`, {
            level: "warn",
          }));
    } catch (a) {
      ((o = true),
        T(`Plugin autoupdate: error updating ${e}: ${be(a)}`, {
          level: "warn",
        }));
    }
  return {
    updated: r ? e : null,
    blocked: s,
    failed: o,
  };
}
async function tUo(e) {
  let t = BL(),
    n = Object.keys(t.plugins);
  if (n.length === 0)
    return {
      updated: [],
      blocked: [],
      updateFailedCount: 0,
    };
  let { disabled: r } = await mp(),
    o = new Set(r.map((c) => c.source)),
    s = await Promise.allSettled(
      n.map(async (c) => {
        let { marketplace: u } = Qo(c);
        if (!u || !e.has(u.toLowerCase())) return null;
        let d = t.plugins[c];
        if (!d || d.length === 0) return null;
        let p = d.filter(_Oe);
        if (p.length === 0) return null;
        return FNf(c, p, o);
      }),
    ),
    i = [],
    a = [],
    l = 0;
  for (let c of s) {
    if (c.status !== "fulfilled" || c.value === null) continue;
    if (c.value.updated !== null) i.push(c.value.updated);
    if (c.value.blocked !== null) a.push(c.value.blocked);
    if (c.value.failed) l++;
  }
  return {
    updated: i,
    blocked: a,
    updateFailedCount: l,
  };
}
async function jNf(e) {
  return tUo(e);
}
function tjl() {
  return (async () => {
    if (o1e()) {
      T("Plugin autoupdate: skipped (auto-updater disabled)");
      return;
    }
    let e = Date.now(),
      t = {
        marketplaces_refreshed: 0,
        marketplace_refresh_failed: 0,
        plugins_updated: 0,
        plugin_update_failed: 0,
        plugins_blocked_by_pin: 0,
      };
    try {
      let n = await UNf();
      if (n.size === 0) return;
      let r = Math.floor(Math.random() * BNf);
      (await Nn(r, void 0, {
        unref: true,
      }),
        (e = Date.now()));
      let o = at("tengu_plugin_autoupdate_allow_credential_helper", false),
        s = await Promise.allSettled(
          Array.from(n).map(async (p) => {
            try {
              return (
                await ise(p, void 0, {
                  disableCredentialHelper: !o,
                }),
                true
              );
            } catch (f) {
              return (
                T(`Plugin autoupdate: failed to refresh marketplace ${p}: ${be(f)}`, {
                  level: "warn",
                }),
                false
              );
            }
          }),
        );
      ((t.marketplace_refresh_failed = On(s, (p) => p.status !== "fulfilled" || !p.value)),
        (t.marketplaces_refreshed = n.size - t.marketplace_refresh_failed));
      let i = s.filter((p) => p.status === "rejected");
      if (i.length > 0)
        T(`Plugin autoupdate: ${i.length} marketplace refresh(es) failed`, {
          level: "warn",
        });
      T("Plugin autoupdate: checking installed plugins");
      let { updated: a, blocked: l, updateFailedCount: c } = await jNf(n);
      if (
        ((t.plugins_updated = a.length),
        (t.plugin_update_failed = c),
        (t.plugins_blocked_by_pin = l.length),
        a.length > 0)
      )
        PI("autoupdate dep-resolution");
      let { errors: u } = await mp(),
        d = await MHe(
          u.filter((p) => {
            if (p.type !== "dependency-unsatisfied") return false;
            let f = Qo(p.source).marketplace;
            return f !== void 0 && n.has(f.toLowerCase());
          }),
        );
      if (d.installed.length > 0)
        (T(
          `Plugin autoupdate: resolved ${d.installed.length} missing plugin dependencies: ${d.installed.join(", ")}`,
        ),
          a.push(...d.installed));
      if (a.length > 0 || l.length > 0)
        if (hrr) hrr(a, l);
        else
          hXt = {
            updated: a,
            blocked: l,
          };
      G("tengu_plugin_autoupdate_pass", {
        outcome:
          t.marketplace_refresh_failed > 0 || t.plugin_update_failed > 0 ? We("partial") : We("ok"),
        ...t,
        duration_ms: Date.now() - e,
      });
    } catch (n) {
      (T(`Plugin autoupdate: failed: ${be(n)}`, {
        level: "error",
      }),
        G("tengu_plugin_autoupdate_pass", {
          outcome: We("failed"),
          error_kind: $e(lX(n)),
          ...t,
          duration_ms: Date.now() - e,
        }));
    }
  })();
}
var BNf = 600000,
  hrr = null,
  hXt = null;
