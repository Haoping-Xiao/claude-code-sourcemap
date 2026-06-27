// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gso
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0025  score=0.0749  fileCov=0.0026
// note: nearest: src/screens/REPL.tsx (0.0025); dir inferred from dep-graph -> utils; 4 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: safeInline, getProjectContextBlock, formatProjectContext, describeSyncSource
async function getProjectContextBlock() {
  let e = process.env.CLAUDE_PROJECT_UUID?.trim();
  if (!e) return null;
  try {
    return await vc(Qip(e), Xip, "project context fetch timed out");
  } catch (t) {
    return T(`project context fetch failed: ${be(t)}`, {
      level: "warn"
    }), null;
  }
}
async function Qip(e) {
  let t = await a1n();
  if (!t.ok) return T(`project context skipped: ${t.reason}`, {
    level: "verbose"
  }), null;
  return formatProjectContext(await ZRe(e));
}
function safeInline(e) {
  return e.replace(/[\r\n]+/g, " ").replace(/`/g, "'");
}
function Jsa(e) {
  let t = e.slice(0, Zsa),
    n = e.length - t.length;
  return t.join(`
`) + (n > 0 ? `
- \u2026 and ${n} more \u2014 call \`project_info\` for the full list` : "");
}
function describeSyncSource(e) {
  let t = Yip[e.type ?? ""] ?? safeInline(e.type ?? "source"),
    n = safeInline(De(e.config)),
    r = [...n],
    o = r.length > Qsa ? `${r.slice(0, Qsa).join("")}\u2026` : n;
  return `${t}: \`${o}\``;
}
function formatProjectContext(e) {
  let t = e.documents.map(a => a.file_name).filter(a => a !== null),
    n = (e.files ?? []).filter(a => a.file_name !== null),
    r = e.sync_sources ?? [],
    o = r.slice(0, Zsa),
    s = r.length - o.length,
    i = o.map(a => `- ${describeSyncSource(a)}`).join(`
`) + (s > 0 ? `
- \u2026 and ${s} more \u2014 call \`project_info\` for the full list` : "");
  return [`This session is attached to the Project **"${safeInline(e.name)}"**.`, "", ...(e.description ? ["## Project description", e.description, ""] : []), ...(e.prompt_template ? ["## Project instructions", e.prompt_template, ""] : []), `## Project docs (${t.length})`, Jsa(t.map(a => `- \`${safeInline(a)}\``)) || "(none yet)", "", ...(n.length > 0 ? [`## Project files (${n.length})`, Jsa(n.map(a => `- \`${safeInline(a.file_name)}\` (${safeInline(a.file_kind)})`)), ""] : []), ...(r.length > 0 ? [`## Synced sources (${r.length})`, i, "These are synced automatically \u2014 use the matching connector tool (Google Drive, GitHub, etc.) to read them.", ""] : []), "## When to use the Projects tool", "- **Before answering questions about anything in the doc list above**, read or search the relevant doc with `project_read` or `project_search`. Do not Glob/Grep the local filesystem for these \u2014 they live in the project, not on disk.", "- **When you produce something durable and relevant to this project** \u2014 a new doc, an update to an existing one, a captured decision or finding the user or their team would look for here later \u2014 write it to the project with `project_write`. The project is what they see across Claude products. Be selective: write things that belong alongside the existing docs, not every artifact or note.", "- **To edit a project doc**, `project_read` it, make the change, and `project_write` the full updated content back to the same path. There is no in-place patch.", "- **You don't have to use the project for everything.** If the request is unrelated to it, answer normally without reading or writing the project."].join(`
`);
}
var Zsa = 50,
  Yip,
  Xip = 5000,
  Qsa = 200;