// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GBo
// matched 2.1.88 source: src/commands/plugin/PluginOptionsFlow.tsx
// class=modified  jaccard=0.3237  score=0.5258  fileCov=0.4571
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GBo] deps: commands/plugin/PluginOptionsDialog.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs
((x2l = R(lt(), 1)), (k2l = R(rt(), 1)), (R2l = R(se(), 1)));
async function mXt(e) {
  let { enabled: t, disabled: n } = await OT();
  return EUn([...t, ...n], e);
}
function ENf(e) {
  return Object.keys(u3t(e)).length > 0 || ado(e).length > 0;
}
async function orr(e, t) {
  let n = await mXt(e);
  if (!n || !ENf(n)) return null;
  return {
    type: "plugin-options",
    plugin: n,
    pluginId: e,
    depNote: t?.suffix ?? "",
    alreadyInstalled: true,
    depsResolved: t?.changed ?? false,
  };
}
function srr(e) {
  let t = L2l.c(11),
    { viewState: n, onFinish: r } = e,
    { plugin: o, pluginId: s, depNote: i, alreadyInstalled: a, depsResolved: l } = n,
    c = a ? "Already installed" : "Installed",
    u = !a || Boolean(l),
    d;
  if (t[0] !== a || t[1] !== u || t[2] !== i || t[3] !== r || t[4] !== o || t[5] !== c)
    ((d = (f, m, g) => {
      e: switch (f) {
        case "configured": {
          let h = Boolean(g),
            y = u || h;
          r(
            `\u2713 ${h ? (a ? "Configured" : "Installed and configured") : c} ${fS(o)}${i}.${y ? " Run /reload-plugins to apply." : ""}`,
            y,
          );
          break e;
        }
        case "skipped": {
          let h = u || Boolean(g);
          r(`\u2713 ${c} ${fS(o)}${i}.${h ? " Run /reload-plugins to apply." : ""}`, h);
          break e;
        }
        case "error":
          r(`${c} but failed to save config: ${m}`, u || Boolean(g));
      }
    }),
      (t[0] = a),
      (t[1] = u),
      (t[2] = i),
      (t[3] = r),
      (t[4] = o),
      (t[5] = c),
      (t[6] = d));
  else d = t[6];
  let p;
  if (t[7] !== o || t[8] !== s || t[9] !== d)
    ((p = qBo.jsx(PluginOptionsFlow, {
      plugin: o,
      pluginId: s,
      onDone: d,
    })),
      (t[7] = o),
      (t[8] = s),
      (t[9] = d),
      (t[10] = p));
  else p = t[10];
  return p;
}
function PluginOptionsFlow({ plugin: e, pluginId: t, onDone: n }) {
  let [r] = t1e.useState(() => {
      let u = [],
        d = u3t(e);
      if (Object.keys(d).length > 0)
        u.push({
          key: "top-level",
          title: `Configure ${fS(e)}`,
          subtitle: "Plugin options",
          schema: d,
          load: () => m$(t),
          save: (f) => wdt(t, f, e.manifest.userConfig),
        });
      let p = ado(e);
      for (let f of p)
        u.push({
          key: `channel:${f.server}`,
          title: `Configure ${f.displayName}`,
          subtitle: `Plugin: ${fS(e)}`,
          schema: f.configSchema,
          load: () => rqe(t, f.server) ?? void 0,
          save: (m) => bUn(t, f.server, m, f.configSchema),
        });
      return u;
    }),
    [o, s] = t1e.useState(0),
    i = t1e.useRef(false),
    a = t1e.useRef(n);
  if (
    ((a.current = n),
    t1e.useEffect(() => {
      if (r.length === 0) a.current("skipped");
    }, [r.length]),
    r.length === 0)
  )
    return null;
  let current = r[o];
  async function c(u) {
    try {
      await current.save(u);
    } catch (p) {
      n("error", be(p), i.current);
      return;
    }
    if (Object.keys(u).length > 0) i.current = true;
    let d = o + 1;
    if (d < r.length) s(d);
    else n("configured", void 0, i.current);
  }
  return qBo.jsx(
    fXt,
    {
      title: current.title,
      subtitle: current.subtitle,
      configSchema: current.schema,
      initialValues: current.load(),
      onSave: c,
      onCancel: () => n("skipped", void 0, i.current),
    },
    current.key,
  );
}
var L2l, t1e, qBo;
