// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xYl
// matched 2.1.88 source: src/components/agents/validateAgent.ts
// class=modified  jaccard=0.7886  score=0.9363  fileCov=0.8333
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xYl = E(() => {
  Ye();
  ps();
  Cc();
  Bs();
  Ko();
  wb();
  vH();
  i4o();
  ((CYl = R(lt(), 1)), (nTe = R(se(), 1)));
});
function u4o(e) {
  if (!e) return "Agent type is required";
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/.test(e))
    return "Agent type must start and end with alphanumeric characters and contain only letters, numbers, and hyphens";
  if (e.length < 3) return "Agent type must be at least 3 characters long";
  if (e.length > 50) return "Agent type must be less than 50 characters";
  return null;
}
function kYl(e, t, n) {
  let r = [],
    o = [];
  if (!e.agentType) r.push("Agent type is required");
  else {
    let i = u4o(e.agentType);
    if (i) r.push(i);
    let a = n.find((l) => l.agentType === e.agentType && l.source !== e.source);
    if (a) r.push(`Agent type "${e.agentType}" already exists in ${jsr(a.source)}`);
  }
  if (!e.whenToUse) r.push("Description (description) is required");
  else if (e.whenToUse.length < 10)
    o.push("Description should be more descriptive (at least 10 characters)");
  else if (e.whenToUse.length > 5000) o.push("Description is very long (over 5000 characters)");
  if (e.tools !== void 0 && !Array.isArray(e.tools)) r.push("Tools must be an array");
  else {
    if (e.tools === void 0) o.push("Agent has access to all tools");
    else if (e.tools.length === 0)
      o.push("No tools selected - agent will have very limited capabilities");
    let i = voe(e, t, !1);
    if (i.invalidTools.length > 0) r.push(`Invalid tools: ${i.invalidTools.join(", ")}`);
    if (i.unavailableTools.length > 0)
      o.push(`Not available to subagents: ${i.unavailableTools.join(", ")}`);
  }
  let s = e.getSystemPrompt();
  if (!s) r.push("System prompt is required");
  else if (s.length < 20) r.push("System prompt is too short (minimum 20 characters)");
  else if (s.length > 1e4) o.push("System prompt is very long (over 10,000 characters)");
  return {
    isValid: r.length === 0,
    errors: r,
    warnings: o,
  };
}
