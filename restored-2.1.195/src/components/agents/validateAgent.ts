// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xYl
// matched 2.1.88 source: src/components/agents/validateAgent.ts
// class=modified  jaccard=0.6795  score=0.9081  fileCov=0.7297
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module xYl] deps: hooks/useTerminalSize.ts, utils/suggestions/directoryCompletion.ts, context/modalContext.tsx, components/CustomSelect/select.tsx, components/ConfigurableShortcutHint.tsx, @ant/computer-use-mcp/src/toolCalls.ts, vH, components/agents/ModelSelector.tsx
((CYl = R(lt(), 1)), (nTe = R(se(), 1)));
function validateAgentType(agentType) {
  if (!agentType) return "Agent type is required";
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/.test(agentType))
    return "Agent type must start and end with alphanumeric characters and contain only letters, numbers, and hyphens";
  if (agentType.length < 3) return "Agent type must be at least 3 characters long";
  if (agentType.length > 50) return "Agent type must be less than 50 characters";
  return null;
}
function validateAgent(agent, availableTools, existingAgents) {
  let r = [],
    o = [];
  if (!agent.agentType) r.push("Agent type is required");
  else {
    let i = validateAgentType(agent.agentType);
    if (i) r.push(i);
    let a = existingAgents.find(
      (l) => l.agentType === agent.agentType && l.source !== agent.source,
    );
    if (a) r.push(`Agent type "${agent.agentType}" already exists in ${jsr(a.source)}`);
  }
  if (!agent.whenToUse) r.push("Description (description) is required");
  else if (agent.whenToUse.length < 10)
    o.push("Description should be more descriptive (at least 10 characters)");
  else if (agent.whenToUse.length > 5000) o.push("Description is very long (over 5000 characters)");
  if (agent.tools !== void 0 && !Array.isArray(agent.tools)) r.push("Tools must be an array");
  else {
    if (agent.tools === void 0) o.push("Agent has access to all tools");
    else if (agent.tools.length === 0)
      o.push("No tools selected - agent will have very limited capabilities");
    let i = voe(agent, availableTools, false);
    if (i.invalidTools.length > 0) r.push(`Invalid tools: ${i.invalidTools.join(", ")}`);
    if (i.unavailableTools.length > 0)
      o.push(`Not available to subagents: ${i.unavailableTools.join(", ")}`);
  }
  let s = agent.getSystemPrompt();
  if (!s) r.push("System prompt is required");
  else if (s.length < 20) r.push("System prompt is too short (minimum 20 characters)");
  else if (s.length > 10000 /* 1e4 */)
    o.push("System prompt is very long (over 10,000 characters)");
  return {
    isValid: r.length === 0,
    errors: r,
    warnings: o,
  };
}
