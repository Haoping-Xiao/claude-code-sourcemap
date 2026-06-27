// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S5c
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0093  score=0.2337  fileCov=0.0096
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0093); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: printAgentsJson
// [unwrapped __esm module S5c] deps: services/analytics/index.ts, components/ThemePicker.tsx, hooks/useTerminalSize.ts, utils/mailbox.ts, dn, utils/renderOptions.ts, utils/fileRead.ts, utils/config.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/git.ts, utils/file.ts, utils/path.ts, utils/fsOperations.ts, utils/tasks.ts, main.tsx
xZo = require("fs"), dve = require("fs/promises"), pO = require("path"), ihr = require("readline"), cXe = R(se(), 1), zOm = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
async function printAgentsJson(e, t) {
  let n = e ? await jA(cwt.resolve(e)) : void 0;
  function r(d) {
    if (!n) return true;
    let p = cwt.relative(n, d);
    return p.split(/[/\\]/, 1)[0] !== ".." && !cwt.isAbsolute(p);
  }
  let [o, s, i] = await Promise.all([e8e(), aX(), Tar()]),
    a = new Map();
  for (let d of o) if (d.kind === "bg" && d.jobId) a.set(d.jobId, d);
  let l = new Set(i.shorts);
  for (let d of a.keys()) l.add(d);
  let c = [],
    u = new Set();
  for (let d of KUt(s, l)) {
    let p = a.get(d.id);
    if (p) u.add(p.pid);
    if (!r(ybe(d.state))) continue;
    let f = n1m(d.state, p?.status);
    if (!t && !p && f !== "working" && f !== "blocked") continue;
    let m = E5c(p?.name ?? d.state.name ?? xc(d.state.displayIntent ?? d.state.intent));
    c.push({
      ...(p && {
        pid: p.pid
      }),
      id: d.id,
      cwd: p?.cwd ?? d.state.cwd,
      kind: "background",
      startedAt: p?.startedAt ?? Date.parse(d.state.createdAt),
      sessionId: p?.sessionId ?? d.state.sessionId,
      ...(m && {
        name: m
      }),
      ...(p?.status && {
        status: A5c(p.status)
      }),
      ...(p?.status === "waiting" && p.waitingFor && {
        waitingFor: p.waitingFor
      }),
      state: f
    });
  }
  for (let d of o) {
    if (d.kind !== "interactive" && d.kind !== "bg" || u.has(d.pid)) continue;
    if (d.kind === "bg" && d.jobId) continue;
    if (!r(d.cwd)) continue;
    let p = d.name && E5c(d.name);
    c.push({
      pid: d.pid,
      cwd: d.cwd,
      kind: d.kind === "bg" ? "background" : "interactive",
      startedAt: d.startedAt,
      ...(d.sessionId && {
        sessionId: d.sessionId
      }),
      ...(p && {
        name: p
      }),
      ...(d.status && {
        status: A5c(d.status)
      }),
      ...(d.status === "waiting" && d.waitingFor && {
        waitingFor: d.waitingFor
      })
    });
  }
  c.sort((d, p) => d.startedAt - p.startedAt), await V1e(De(c, null, 2) + `
`), xe("cli_agents_json");
}
function E5c(e) {
  return e.replace(/[\x00-\x08\x0E-\x1F\x7F-\x9F]/g, "").replace(/\s+/g, " ").trim();
}
function A5c(e) {
  return e === "idle" ? "idle" : e === "waiting" ? "waiting" : "busy";
}
function n1m(e, t) {
  if (t === "busy") return "working";
  let n = tue(e.state);
  if (Vh(e) && !(n === "success" && KGe(e))) return n === "success" ? "done" : n === "failure" ? "failed" : "stopped";
  if (e.tempo === "blocked" || t === "waiting") return "blocked";
  return "working";
}
var cwt;