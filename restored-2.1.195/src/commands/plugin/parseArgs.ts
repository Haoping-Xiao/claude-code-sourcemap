// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w7l
// matched 2.1.88 source: src/commands/plugin/parseArgs.ts
// class=modified  jaccard=0.3569  score=0.4795  fileCov=0.5825
// note: deminified; 1 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var w7l = E(() => {
  PEt();
  xrr();
  v7l = R(se(), 1);
});
var C7l = {};
_t(C7l, {
  getPluginArgumentCompletions: () => getPluginArgumentCompletions,
});
async function getPluginArgumentCompletions(e, t) {
  if (e.length === 0)
    return ZAt(
      [
        {
          value: "list",
          description: "List installed plugins",
          isFinal: !0,
        },
        {
          value: "enable",
          description: "Enable an installed plugin",
        },
        {
          value: "disable",
          description: "Disable an installed plugin",
        },
        {
          value: "install",
          description: "Install a plugin from a marketplace",
        },
        {
          value: "uninstall",
          description: "Remove an installed plugin",
        },
        {
          value: "marketplace",
          description: "Manage plugin marketplaces",
        },
      ],
      t,
    );
  let n = e[0]?.toLowerCase();
  if (e.length === 1)
    switch (n) {
      case "enable":
      case "disable":
      case "uninstall": {
        let r = ex(),
          o = Object.entries(r.plugins).filter(([, i]) => i.some(_Oe));
        if (n === "enable" || n === "disable") {
          let i = Ese(),
            a = n === "disable";
          o = o.filter(([l]) => i.has(l) === a);
        }
        let s = o
          .map(([i, a]) => {
            let l = (a.find(_Oe) ?? a[0])?.version;
            return {
              value: i,
              description: ler(l),
              isFinal: !0,
            };
          })
          .sort((i, a) => i.value.localeCompare(a.value));
        return ZAt(s, t);
      }
      case "install":
      case "i": {
        if (t.includes("/") || t.includes("\\")) return [];
        return ZAt(await D9f(), t);
      }
      case "list":
      case "ls":
        return ZAt(k9f, t);
      case "marketplace":
      case "market":
        return ZAt(R9f, t);
      default:
        return [];
    }
  if (e.length === 2 && (n === "marketplace" || n === "market")) {
    let r = e[1]?.toLowerCase();
    if (r === "remove" || r === "rm" || r === "update") {
      let o = await wP(),
        s = Object.entries(o)
          .map(([i, a]) => ({
            value: i,
            description: zze(a.source),
            isFinal: !0,
          }))
          .sort((i, a) => i.value.localeCompare(a.value));
      return ZAt(s, t);
    }
  }
  return [];
}
async function D9f() {
  let e = await wP(),
    t = Object.keys(e).sort(),
    n = De(t.map((r) => [r, e[r]?.installLocation, e[r]?.lastUpdated]));
  if (f4o?.key !== n) {
    let r = await Promise.all(
        t.map(async (s) => ({
          name: s,
          marketplace: await Iq(s),
        })),
      ),
      o = [];
    for (let { name: s, marketplace: i } of r) {
      if (!i) continue;
      for (let a of i.plugins)
        o.push({
          pluginId: MQ(a.name, s),
          description: a.description,
        });
    }
    (o.sort((s, i) => s.pluginId.localeCompare(i.pluginId)),
      (f4o = {
        key: n,
        candidates: o,
      }));
  }
  return f4o.candidates
    .filter((r) => !b5(r.pluginId) && !GI(r.pluginId))
    .map((r) => ({
      value: r.pluginId,
      description: r.description,
      isFinal: !0,
    }));
}
function ZAt(e, t) {
  if (!t) return e;
  let n = t.toLowerCase(),
    r = [],
    o = [];
  for (let s of e) {
    let i = s.value.toLowerCase();
    if (i.startsWith(n)) r.push(s);
    else if (i.includes(n)) o.push(s);
  }
  return r.concat(o);
}
var k9f,
  R9f,
  f4o = null;
