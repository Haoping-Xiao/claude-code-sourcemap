// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ayc
// matched 2.1.88 source: src/utils/suggestions/shellHistoryCompletion.ts
// class=modified  jaccard=0.3203  score=0.6162  fileCov=0.4001
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ayc] deps: fuse.js/dist/fuse.mjs, utils/suggestions/commandSuggestions.ts, utils/sessionStorage.ts, services/analytics/growthbook.ts, services/mcp/client.ts, ink/Ansi.tsx, main.tsx, tools/AgentTool/runAgent.ts, @growthbook/growthbook/dist/esm/mongrule.mjs
syc = /[:_-]/g;
spm = new Set(["add-dir", "resume", "plugin", "plugins", "marketplace"]);
async function getShellHistoryCommands() {
  let e = Date.now();
  if (m7e && e - lyc < fpm) return m7e;
  let t = [],
    n = new Set();
  try {
    for await (let r of QDn()) {
      if (r.display && r.display.startsWith("!")) {
        let o = r.display.slice(1).trim();
        if (o && !n.has(o)) (n.add(o), t.push(o));
      }
      if (t.length >= 50) break;
    }
  } catch (r) {
    T(`Failed to read shell history: ${r}`);
  }
  return ((m7e = t), (lyc = e), t);
}
function cyc(e) {
  if (!m7e) return;
  let t = m7e.indexOf(e);
  if (t !== -1) m7e.splice(t, 1);
  m7e.unshift(e);
}
async function uyc(e) {
  if (!e || e.length < 2) return null;
  if (!e.trim()) return null;
  let n = await getShellHistoryCommands();
  for (let r of n)
    if (r.startsWith(e) && r !== e)
      return {
        fullCommand: r,
        suffix: r.slice(e.length),
      };
  return null;
}
var m7e = null,
  lyc = 0,
  fpm = 60000;
