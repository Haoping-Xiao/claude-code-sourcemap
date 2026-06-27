// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sYl
// matched 2.1.88 source: src/components/agents/agentFileUtils.ts
// class=modified  jaccard=0.5955  score=0.8722  fileCov=0.6524
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var sYl = E(() => {
  cme = {
    FOLDER_NAME: ".claude",
    AGENTS_DIR: "agents",
  };
});
function RVf(e, t, n, r, o, s, i, a) {
  let l = t
      .replaceAll("\\", "\\\\")
      .replaceAll('"', '\\"')
      .replaceAll(
        `
`,
        "\\\\n",
      ),
    u =
      n === void 0 || (n.length === 1 && n[0] === "*")
        ? ""
        : `
tools: ${n.join(", ")}`,
    d = s
      ? `
model: ${s}`
      : "",
    p =
      a !== void 0
        ? `
effort: ${a}`
        : "",
    f = o
      ? `
color: ${o}`
      : "",
    m = i
      ? `
memory: ${i}`
      : "";
  return `---
name: "${e}"
description: "${l}"${u}${d}${p}${f}${m}
---

${r}
`;
}
function $sr(e) {
  switch (e) {
    case "flagSettings":
      throw Error(`Cannot get directory path for ${e} agents`);
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
      return $sr(e);
  }
}
function o4o(e) {
  let t = $sr(e.source);
  return Lse.join(t, `${e.agentType}.md`);
}
function Osr(e) {
  if (e.source === "built-in") return "Built-in";
  if (e.source === "plugin") throw Error("Cannot get file path for plugin agents");
  let t = e.filename || e.agentType;
  if (e.baseDir) return Lse.join(e.baseDir, `${t}.md`);
  let n = $sr(e.source);
  return Lse.join(n, `${t}.md`);
}
function aYl(e) {
  if (e.source === "built-in") return "Built-in";
  let t = iYl(e.source);
  return Lse.join(t, `${e.agentType}.md`);
}
function lYl(e) {
  if (Sh(e)) return "Built-in";
  if (sfe(e)) return `Plugin: ${e.plugin || "Unknown"}`;
  if (e.source === "flagSettings") return "CLI argument";
  let t = iYl(e.source),
    n = e.filename || e.agentType;
  return Lse.join(t, `${n}.md`);
}
async function LVf(e) {
  let t = $sr(e);
  return (await qt().mkdir(t), t);
}
async function cYl(e, t, n, r, o, s = true, i, a, l, c) {
  if (e === "built-in") throw Error("Cannot save built-in agents");
  await LVf(e);
  let u = o4o({
      source: e,
      agentType: t,
    }),
    d = RVf(t, n, r, o, i, a, l, c);
  try {
    await pYl(u, d, s ? "wx" : "w");
  } catch (p) {
    if (on(p) === "EEXIST") throw Error(`Agent file already exists: ${u}`);
    throw p;
  }
}
async function uYl(e, t) {
  if (e.source === "built-in") throw Error("Cannot update built-in agents");
  let n = Osr(e),
    r = await qAt.readFile(n, "utf-8"),
    { frontmatter: o, content: s } = Bm(r, n),
    i = {
      ...o,
    };
  if ("tools" in t) {
    let a = t.tools;
    if (a === void 0 || (a.length === 1 && a[0] === "*")) delete i.tools;
    else i.tools = a.join(", ");
  }
  if ("color" in t)
    if (t.color) i.color = t.color;
    else delete i.color;
  if ("model" in t)
    if (t.model) i.model = t.model;
    else delete i.model;
  await pYl(
    n,
    `---
${Pkn(i)}---
${s}`,
  );
}
async function dYl(e) {
  if (e.source === "built-in") throw Error("Cannot delete built-in agents");
  let t = Osr(e);
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
