// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c9t
// matched 2.1.88 source: src/utils/model/agent.ts
// class=modified  jaccard=0.2632  score=0.5855  fileCov=0.3234
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function BTo() {
  return "inherit";
}
function getAgentModel(agentModel, parentModel, toolSpecifiedModel, permissionMode, o) {
  let s = () =>
      VR({
        permissionMode: permissionMode ?? "default",
        mainLoopModel: parentModel,
        exceeds200kTokens: false,
      }),
    i = (p, f = p) => {
      iZp(p);
      let m = s();
      if (ya(zo(f)).toLowerCase() !== ya(zo(m)).toLowerCase()) o?.(p, m);
      return m;
    },
    a = process.env.CLAUDE_CODE_SUBAGENT_MODEL;
  if (a) {
    if (a === "inherit") return s();
    let p = zo(a);
    if (!xa(p)) return i(a);
    return p;
  }
  let l = PSn(parentModel),
    c = (p, f) => {
      if (l && l_(p) === "bedrock") {
        if (PSn(f)) return p;
        return PIe(p, l);
      }
      return p;
    };
  if (toolSpecifiedModel) {
    if (toolSpecifiedModel === "inherit") return s();
    if (QZa(toolSpecifiedModel, parentModel)) return parentModel;
    let p = c(JZa(zo(toolSpecifiedModel)), toolSpecifiedModel);
    if (!xa(p)) return i(toolSpecifiedModel, p);
    return p;
  }
  let u = agentModel ?? BTo();
  if (u === "inherit") return s();
  if (QZa(u, parentModel)) return parentModel;
  let d = c(JZa(zo(u)), u);
  if (!xa(d)) return i(u, d);
  return d;
}
function iZp(e) {
  T(
    `Subagent model "${e}" is not in the availableModels allowlist; inheriting the parent model instead`,
    {
      level: "warn",
    },
  );
}
function JZa(e) {
  let n = mo(e).includes("opus") && I9(e);
  if (nT() && !Sy(e) && n) return iI(e + "[1m]");
  return e;
}
function QZa(e, t) {
  let n = mo(t);
  switch (e.toLowerCase()) {
    case "fable":
      return n.includes("fable");
    case "opus":
      return n.includes("opus");
    case "sonnet":
      return n.includes("sonnet");
    case "haiku":
      return n.includes("haiku");
    default:
      return false;
  }
}
function getAgentModelDisplay(model) {
  if (!model) return "Inherit from parent (default)";
  if (model === "inherit") return "Inherit from parent";
  return Cx(model);
}
function getAgentModelOptions() {
  let e = [];
  if ((fle() || !td() || fr() === "anthropicAws") && xa(tje()))
    e.push({
      value: "fable",
      label: "Fable",
      description: "Most capable for your hardest and longest-running tasks",
    });
  if (xa(jx()))
    e.push({
      value: "sonnet",
      label: "Sonnet",
      description: "Efficient for routine tasks",
    });
  if (xa(O_()))
    e.push({
      value: "opus",
      label: "Opus",
      description: "Best for everyday, complex tasks",
    });
  if (xa(WG()))
    e.push({
      value: "haiku",
      label: "Haiku",
      description: "Fastest for quick answers",
    });
  return (
    e.push({
      value: "inherit",
      label: "Inherit from parent",
      description: "Use the same model as the main conversation",
    }),
    e
  );
}
var gF_;
