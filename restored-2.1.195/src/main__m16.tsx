// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pMc
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.004  score=0.1826  fileCov=0.0041
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function run({
  cwd: e,
  toolPermissionContext: t,
  applyCoordinatorFilter: n,
  agentsJson: r,
  agentSetting: o,
  commandsPromise: s,
  agentDefsPromise: i,
  deferCommands: a,
  onToolsLoaded: l,
}) {
  let c = F$(t);
  if (n && true && Gv()) {
    let { applyCoordinatorToolFilter: y } = await Promise.resolve().then(() => (TJt(), ZKl));
    c = y(c);
  }
  (l?.(), s?.catch(() => {}), i?.catch(() => {}));
  let u = s ?? mA(e);
  if (a) u.catch(() => {});
  let [d, p] = await Promise.all([a ? Promise.resolve([]) : u, i ?? CP(e)]),
    f = [];
  if (
    r &&
    !lc("agents", {
      explicitlyRequested: true,
    })
  )
    try {
      let y = Ia(r);
      if (y) f = WYt(y, "flagSettings");
    } catch (y) {
      ke(y);
    }
  else if (r)
    T("--agents: ignored in safe mode (user-supplied custom agents are disabled)", {
      level: "warn",
    });
  let m = [...p.allAgents, ...f],
    g = {
      ...p,
      allAgents: m,
      activeAgents: YF(m),
    },
    h = ZYo(g.activeAgents, o);
  return (
    kK(h?.agentType),
    {
      tools: c,
      commands: d,
      agentDefinitions: g,
      mainThreadAgentDefinition: h,
      cliAgents: f,
      deferredCommandsPromise: a ? u : void 0,
    }
  );
}
function mMc(e) {
  return e && Oe.CLAUDE_CODE_SYNC_PLUGIN_INSTALL;
}
function ZYo(e, t) {
  if (!t) return;
  let n = e.find((r) => r.agentType === t) ?? e.find((r) => r.agentType.endsWith(`:${t}`));
  if (!n)
    T(
      `Warning: agent "${t}" not found. Available agents: ${e.map((r) => r.agentType).join(", ")}. Using default behavior.`,
    );
  return n;
}
