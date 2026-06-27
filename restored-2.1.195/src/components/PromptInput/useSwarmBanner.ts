// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hbc
// matched 2.1.88 source: src/components/PromptInput/useSwarmBanner.ts
// class=modified  jaccard=0.366  score=0.7568  fileCov=0.4148
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hbc] deps: RUt, Ye, Fh, nne, m1, f0e
Pdr = R(rt(), 1);
function $dr() {
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
  let c = r.getState();
  if (wf() && !oU()) {
    let g = Oh();
    if (g && rp())
      return {
        text: `@${g}`,
        bgColor: Mdr(e?.selfAgentColor ?? Sv()),
      };
  }
  if (e?.teammates && Object.keys(e.teammates).length > 1) {
    let g = cOe(c),
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
  let d = gYt(c);
  if (d.type === "named_agent") {
    let g = d.task,
      h;
    for (let [y, b] of c.agentNameRegistry)
      if (b === g.id) {
        h = y;
        break;
      }
    return {
      text: h ? `@${h}` : g.description,
      bgColor: JEe(g.agentType) ?? "cyan_FOR_SUBAGENTS_ONLY",
    };
  }
  let p = n ? c.agentDefinitions.activeAgents.find((g) => g.agentType === n) : void 0,
    f = oPl(c),
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
