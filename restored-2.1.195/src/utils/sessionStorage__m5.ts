// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p0c
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=modified (alt of src/utils/sessionStorage.ts)  jaccard=0.0076  score=0.3937  fileCov=0.0077
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module p0c] deps: services/analytics/index.ts, constants/systemPromptSections.ts, tools/FileReadTool/FileReadTool.ts, components/mcp/ElicitationDialog.tsx, utils/claudeInChrome/common.ts, services/analytics/growthbook.ts, utils/debug.ts, utils/debugFilter.ts, utils/debug.ts, RE, utils/errors.ts, utils/sequential.ts, main.tsx, utils/plugins/loadPluginAgents.ts, utils/plans.ts, constants/prompts.ts, main.tsx, services/vcr.ts, utils/sessionStorage.ts
((c0c = require("crypto")), (rvt = require("fs/promises")), (u0c = require("path")));
function f0c(e, t, n) {
  let r = () => {
    try {
      return t(e.getState());
    } catch {
      return false;
    }
  };
  if (r()) return Promise.resolve(true);
  return new Promise((o) => {
    let s = setTimeout(() => {
        (i(), o(false));
      }, n.timeoutMs),
      i = e.subscribe(() => {
        if (r()) (clearTimeout(s), i(), o(true));
      });
  });
}
function m0c() {
  let e = M2() ?? aj(yr());
  return ovt.join(e, Rt(), "mcp-tasks");
}
function getAgentMetadataPath(agentId) {
  return ovt.join(m0c(), `mcp-task-${agentId}.meta.json`);
}
async function h0c(e, t) {
  let n = getAgentMetadataPath(e);
  (await qs().mkdir(ovt.dirname(n)), await qs().write(n, De(t)));
}
async function y0c(e) {
  let t = getAgentMetadataPath(e);
  try {
    await qs().delete(t);
  } catch (n) {
    if (Vo(n)) return;
    throw n;
  }
}
async function _0c() {
  let e = m0c(),
    t;
  try {
    t = await qs().list(e);
  } catch (r) {
    if (Vo(r)) return [];
    throw r;
  }
  let n = [];
  for (let r of t) {
    if (!r.endsWith(".meta.json")) continue;
    try {
      let o = await qs().read(ovt.join(e, r));
      n.push(Ft(o));
    } catch (o) {
      T(`listMcpTaskMetadata: skipping ${r}: ${String(o)}`);
    }
  }
  return n;
}
var ovt;
