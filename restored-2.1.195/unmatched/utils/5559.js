// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fAc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0047  score=0.1549  fileCov=0.0048
// note: nearest: src/screens/REPL.tsx (0.0047); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fAc] deps: utils/sessionStorage.ts, services/analytics/growthbook.ts, tools/AgentTool/loadAgentsDir.ts, utils/sequential.ts, tools/WebFetchTool/prompt.ts, hooks/useSettingsChange.ts
x7e = R(rt(), 1);
function fym(e, t) {
  let n = t.manifest.userConfig ? m$(Tre(t)) : void 0,
    r = o => {
      let s = vre(o, t);
      if (n) s = $Se(s, n);
      return gre(s).expanded;
    };
  return {
    name: e.name,
    command: r(e.command),
    description: e.description,
    when: e.when,
    pluginName: t.name,
    pluginRoot: t.path
  };
}
function mym(e) {
  let t = [],
    n = false;
  for (let r of e) {
    let o = r.monitors;
    if (!o) continue;
    for (let s of o) try {
      t.push(fym(s, r));
    } catch (i) {
      n = true, T(`plugin ${r.name}: failed to resolve monitor "${s.name}": ${i}`, {
        level: "error"
      });
    }
  }
  if (n) Le("plugin_load_monitors", "plugin_load_monitors_resolve_failed");else xe("plugin_load_monitors");
  return t;
}
function gym(e, t, n = sq, r = bwo(ywo, M6n)) {
  let o = 0;
  function s() {
    if (o === 0) return;
    n(e.description, `[plugin monitor "${e.name}" suppressed ${o} events \u2014 output rate exceeded]`, t.id), o = 0;
  }
  return {
    onBatch: i => {
      if (!r.tryConsume()) {
        o++;
        return;
      }
      s(), n(e.description, i, t.id);
    },
    onExit: s
  };
}
async function hym(e, t) {
  if (Mj()) return;
  if (HTe()) {
    T(`Skipping plugin monitor ${e.pluginName}:${e.name} - workspace trust not accepted`);
    return;
  }
  let n = {},
    r = gym(e, n),
    o = _wo(r.onBatch),
    s = await Ede(e.command, t.abortController.signal, XWe(), {
      preventCwdChanges: true,
      shouldUseSandbox: false,
      onStdout: o.onData
    });
  return n.id = s.taskOutput.taskId, await E$e({
    command: e.command,
    description: e.description,
    shellCommand: s,
    toolUseId: void 0,
    agentId: void 0,
    kind: "monitor"
  }, t), s.result.then(() => {
    o.flush(true), r.onExit();
  }), n.id;
}
async function Wzo(e, t, n, r = hym, o = pym) {
  if (lc("pluginMonitors")) return;
  if (!jW()) return;
  if (Ir()) return;
  let s = false;
  for (let i of mym(e)) {
    if (!t(i)) continue;
    let a = `${i.pluginName}:${i.name}`;
    if (o.has(a)) continue;
    o.add(a);
    try {
      if ((await r(i, n)) === void 0) o.delete(a);
    } catch (l) {
      o.delete(a), s = true, T(`plugin monitor ${a}: failed to arm: ${l}`, {
        level: "error"
      });
    }
  }
  if (s) It("plugin_arm_monitor", "plugin_arm_monitor_failed");else xe("plugin_arm_monitor");
}
var pym;