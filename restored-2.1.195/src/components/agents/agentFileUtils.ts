// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sYl
// matched 2.1.88 source: src/components/agents/agentFileUtils.ts
// class=modified  jaccard=0.459  score=0.6312  fileCov=0.6272
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sYl]
cme = {
  FOLDER_NAME: ".claude",
  AGENTS_DIR: "agents",
};
function formatAgentAsMarkdown(
  agentType,
  whenToUse,
  tools,
  systemPrompt,
  color,
  model,
  memory,
  effort,
) {
  let l = whenToUse
      .replaceAll("\\", "\\\\")
      .replaceAll('"', '\\"')
      .replaceAll(
        `
`,
        "\\\\n",
      ),
    u =
      tools === void 0 || (tools.length === 1 && tools[0] === "*")
        ? ""
        : `
tools: ${tools.join(", ")}`,
    d = model
      ? `
model: ${model}`
      : "",
    p =
      effort !== void 0
        ? `
effort: ${effort}`
        : "",
    f = color
      ? `
color: ${color}`
      : "",
    m = memory
      ? `
memory: ${memory}`
      : "";
  return `---
name: "${agentType}"
description: "${l}"${u}${d}${p}${f}${m}
---

${systemPrompt}
`;
}
function getAgentDirectoryPath(location) {
  switch (location) {
    case "flagSettings":
      throw Error(`Cannot get directory path for ${location} agents`);
    case "userSettings":
      return Lse.join(tr(), cme.AGENTS_DIR);
    case "projectSettings":
      return Lse.join($t(), cme.FOLDER_NAME, cme.AGENTS_DIR);
    case "policySettings":
      return Lse.join(QC(), cme.FOLDER_NAME, cme.AGENTS_DIR);
    case "localSettings":
      return Lse.join($t(), cme.FOLDER_NAME, cme.AGENTS_DIR);
  }
}
function iYl(e) {
  switch (e) {
    case "projectSettings":
      return Lse.join(".", cme.FOLDER_NAME, cme.AGENTS_DIR);
    default:
      return getAgentDirectoryPath(e);
  }
}
function o4o(e) {
  let t = getAgentDirectoryPath(e.source);
  return Lse.join(t, `${e.agentType}.md`);
}
function getActualAgentFilePath(agent) {
  if (agent.source === "built-in") return "Built-in";
  if (agent.source === "plugin") throw Error("Cannot get file path for plugin agents");
  let t = agent.filename || agent.agentType;
  if (agent.baseDir) return Lse.join(agent.baseDir, `${t}.md`);
  let n = getAgentDirectoryPath(agent.source);
  return Lse.join(n, `${t}.md`);
}
function aYl(e) {
  if (e.source === "built-in") return "Built-in";
  let t = iYl(e.source);
  return Lse.join(t, `${e.agentType}.md`);
}
function getActualRelativeAgentFilePath(agent) {
  if (Sh(agent)) return "Built-in";
  if (sfe(agent)) return `Plugin: ${agent.plugin || "Unknown"}`;
  if (agent.source === "flagSettings") return "CLI argument";
  let t = iYl(agent.source),
    n = agent.filename || agent.agentType;
  return Lse.join(t, `${n}.md`);
}
async function LVf(e) {
  let t = getAgentDirectoryPath(e);
  return (await qt().mkdir(t), t);
}
async function saveAgentToFile(
  source,
  agentType,
  whenToUse,
  tools,
  systemPrompt,
  s = true,
  color,
  model,
  memory,
  effort,
) {
  if (source === "built-in") throw Error("Cannot save built-in agents");
  await LVf(source);
  let u = o4o({
      source: source,
      agentType: agentType,
    }),
    d = formatAgentAsMarkdown(
      agentType,
      whenToUse,
      tools,
      systemPrompt,
      color,
      model,
      memory,
      effort,
    );
  try {
    await pYl(u, d, s ? "wx" : "w");
  } catch (p) {
    if (on(p) === "EEXIST") throw Error(`Agent file already exists: ${u}`);
    throw p;
  }
}
async function updateAgentFile(agent, newWhenToUse) {
  if (agent.source === "built-in") throw Error("Cannot update built-in agents");
  let n = getActualAgentFilePath(agent),
    r = await qAt.readFile(n, "utf-8"),
    { frontmatter: o, content: s } = Bm(r, n),
    i = {
      ...o,
    };
  if ("tools" in newWhenToUse) {
    let a = newWhenToUse.tools;
    if (a === void 0 || (a.length === 1 && a[0] === "*")) delete i.tools;
    else i.tools = a.join(", ");
  }
  if ("color" in newWhenToUse)
    if (newWhenToUse.color) i.color = newWhenToUse.color;
    else delete i.color;
  if ("model" in newWhenToUse)
    if (newWhenToUse.model) i.model = newWhenToUse.model;
    else delete i.model;
  await pYl(
    n,
    `---
${Pkn(i)}---
${s}`,
  );
}
async function deleteAgentFromFile(agent) {
  if (agent.source === "built-in") throw Error("Cannot delete built-in agents");
  let t = getActualAgentFilePath(agent);
  try {
    await qAt.unlink(t);
  } catch (n) {
    if (on(n) !== "ENOENT") throw n;
  }
}
async function pYl(e, t, n = "w") {
  let r = await qAt.open(e, n);
  try {
    (await r.writeFile(t, {
      encoding: "utf-8",
    }),
      await r.datasync());
  } finally {
    await r.close();
  }
}
var qAt, Lse;
