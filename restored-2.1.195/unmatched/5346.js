// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sdc
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0106  score=0.347  fileCov=0.0108
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0106); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Sdc = E(() => {
  gdn();
  kt();
  Ye();
  Ox();
  dr();
  Cc();
  w7t();
  Bs();
  vi();
  Ko();
  A9o();
  _dc = R(rt(), 1), sV = R(se(), 1);
});
async function T9o() {
  let {
    serverNames: e,
    pluginServerNames: t
  } = await v9o();
  return {
    pendingServers: e.filter(r => aqe(r) === "pending"),
    pluginServerNames: t
  };
}
async function v9o() {
  let {
      servers: e
    } = bT("project"),
    t = Object.keys(e),
    n = new Set(t),
    r = new Set(),
    {
      enabled: o
    } = await mp(),
    s = o.filter(_lt);
  for (let i of s) {
    let a = await TUn(i);
    if (!a) continue;
    for (let l of Object.keys(a)) {
      if (n.has(l) || r.has(l)) continue;
      t.push(l), r.add(l);
    }
  }
  return {
    serverNames: t,
    pluginServerNames: r,
    rootServers: e
  };
}
async function Edc(e, t) {
  let {
    pendingServers: n,
    pluginServerNames: r
  } = t ?? (await T9o());
  if (n.length === 0) return {
    persistFailed: !1
  };
  let o;
  o = await Cim(n.map(s => ACe(s, r.has(s))));
  try {
    return await new Promise(s => {
      let i = a => void s(a);
      if (n.length === 1 && n[0] !== void 0) {
        let a = n[0];
        e.render(QYe.jsx(AH, {
          children: QYe.jsx(TT, {
            children: QYe.jsx(hdc, {
              serverName: a,
              isPluginServer: r.has(a),
              onDone: i
            })
          })
        }));
      } else e.render(QYe.jsx(AH, {
        children: QYe.jsx(TT, {
          children: QYe.jsx(bdc, {
            serverNames: n,
            pluginServerNames: r,
            onDone: i
          })
        })
      }));
    });
  } finally {
    await Iim(o);
  }
}
async function Cim(e) {
  {
    if (!Js()) return;
    let t = process.env.CLAUDE_JOB_DIR;
    if (!t) return;
    let n = await zi(t);
    if (!n) return;
    let r = e.length,
      o = bn(r, "server"),
      s = bn(r, "needs", "need");
    try {
      return await Kd(t, {
        ...n,
        state: "blocked",
        detail: `${r} new MCP ${o} ${s} approval`,
        tempo: "blocked",
        needs: `approve ${r} new project MCP ${o} (${e.join(", ")}) \u2014 attach to respond`,
        updatedAt: new Date().toISOString()
      }), {
        state: n.state,
        tempo: n.tempo,
        needs: n.needs,
        detail: n.detail
      };
    } catch (i) {
      Xf(i);
    }
  }
  return;
}
async function Iim(e) {
  {
    if (!e || !Js()) return;
    let t = process.env.CLAUDE_JOB_DIR;
    if (!t) return;
    let n = await zi(t);
    if (!n || n.state !== "blocked") return;
    try {
      await Kd(t, {
        ...n,
        ...e,
        block: void 0,
        updatedAt: new Date().toISOString()
      });
    } catch (r) {
      Xf(r);
    }
  }
}
var QYe;