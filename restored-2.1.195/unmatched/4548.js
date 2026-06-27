// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vfe
// matched 2.1.88 source: node_modules/@opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js
// class=new  jaccard=0.0497  score=0.0878  fileCov=0.1028
// note: nearest: node_modules/@opentelemetry/sdk-trace-base/build/src/BasicTracerProvider.js (0.0497); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vfe = E(() => {
  kt();
  Du();
  Lo();
  je();
  At();
  ys();
  vf();
  dr();
  I8();
  aS();
  II();
  vq();
  vbe();
  _k();
  o8();
  lE();
  x$o();
  B1();
  $g();
  Xh();
  i5();
  WI();
  OYt();
  ZC();
  dOe();
  $Rl = require("crypto"), BSt = require("fs/promises"), xq = require("path");
});
function FSt(e, t, n) {
  if (!Object.hasOwn(t, e)) return null;
  let r = new Set(),
    o = e;
  for (let s = 0; s < _xf; s++) {
    if (r.has(o)) return {
      kind: "unresolved",
      reason: "cycle"
    };
    r.add(o);
    let i = Object.hasOwn(t, o) ? t[o] : void 0;
    if (i === void 0) return n.has(o) ? {
      kind: "renamed",
      to: o,
      chainDepth: s
    } : {
      kind: "unresolved",
      reason: "target-missing"
    };
    if (i === null) return {
      kind: "removed",
      chainDepth: s + 1
    };
    o = i;
  }
  return {
    kind: "unresolved",
    reason: "chain-too-deep"
  };
}
function FRl(e) {
  if (e.length === 0) return;
  let t = 0,
    n = 0,
    r = new Set($w());
  for (let o of OO) {
    if (!r.has(o)) continue;
    let s = yn(o),
      i = s?.enabledPlugins,
      a = s?.pluginConfigs;
    if (!i && !a) continue;
    let l = {},
      c = {};
    for (let {
      oldId: d,
      newId: p
    } of e) {
      if (i && d in i) {
        if (l[d] = void 0, p !== null && !(p in i) && !(p in l)) l[p] = i[d];
      }
      if (a && d in a) {
        if (c[d] = void 0, p !== null && !(p in a) && !(p in c)) c[p] = a[d];
      }
    }
    if (Object.keys(l).length === 0 && Object.keys(c).length === 0) continue;
    let {
      error: u
    } = io(o, {
      ...(Object.keys(l).length > 0 && {
        enabledPlugins: l
      }),
      ...(Object.keys(c).length > 0 && {
        pluginConfigs: c
      })
    });
    if (u) n++, T(`migrateRenamedPluginsInSettings: failed to update ${o}: ${u.message}`, {
      level: "warn"
    });else t++;
  }
  if (t > 0 && n === 0) xe("plugin_rename_migration");else if (t > 0) It("plugin_rename_migration", "partial_settings_write");else if (n > 0) Le("plugin_rename_migration", "settings_write_failed");else It("plugin_rename_migration", "no_editable_scope");
}
var _xf = 16;