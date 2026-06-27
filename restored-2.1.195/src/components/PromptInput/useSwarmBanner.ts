// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hbc
// matched 2.1.88 source: src/components/PromptInput/useSwarmBanner.ts
// class=modified  jaccard=0.366  score=0.7568  fileCov=0.4148
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hbc] deps: utils/textHighlighting.ts, hooks/useTerminalSize.ts, components/Settings/Config.tsx, utils/signal.ts, utils/thinking.ts, ink/render-border.ts
Pdr = R(rt(), 1);
function useSwarmBanner() {
  let e = Ht((g) => g.teamContext),
    t = Ht((g) => g.standaloneAgentContext),
    n = Ht((g) => g.agent);
  Ht((g) => g.viewingAgentTaskId);
  let r = Dc(),
    [o] = na(),
    [s, i] = GTt.useState(null),
    a = t?.prideGradient,
    l = GTt.useMemo(() => (a && Tbc ? Tbc(a, o) : a), [a, o]);
  GTt.useEffect(() => {
    coe().then(i);
  }, []);
  let state = r.getState();
  if (wf() && !oU()) {
    let g = Oh();
    if (g && rp())
      return {
        text: `@${g}`,
        bgColor: Mdr(e?.selfAgentColor ?? Sv()),
      };
  }
  if (e?.teammates && Object.keys(e.teammates).length > 1) {
    let g = cOe(state),
      h = Mdr(g?.identity.color),
      y = U6e(),
      b = x0o()?.isNative ?? false;
    if (s === false && !y && !b)
      return {
        text: `View teammates: \`tmux -L ${wVt()} a\``,
        bgColor: h,
      };
    if ((s === true || y || b) && g)
      return {
        text: `@${g.identity.agentName}`,
        bgColor: h,
      };
  }
  let active = gYt(state);
  if (active.type === "named_agent") {
    let g = active.task,
      h;
    for (let [y, b] of state.agentNameRegistry)
      if (b === g.id) {
        h = y;
        break;
      }
    return {
      text: h ? `@${h}` : g.description,
      bgColor: JEe(g.agentType) ?? "cyan_FOR_SUBAGENTS_ONLY",
    };
  }
  let p = n ? state.agentDefinitions.activeAgents.find((g) => g.agentType === n) : void 0,
    f = oPl(state),
    m = t?.color;
  if (f || m || l)
    return {
      text: f || n || "",
      bgColor: Mdr(
        mht({
          userOverride: m,
          agentDefinitionColor: p?.color,
        }),
      ),
      gradient: l,
    };
  if (n)
    return {
      text: n,
      bgColor: Mdr(p?.color, "promptBorder"),
    };
  return null;
}
function Mdr(e, t = "cyan_FOR_SUBAGENTS_ONLY") {
  return e && Ky.includes(e) ? C$[e] : t;
}
var GTt,
  Tbc = void 0;
