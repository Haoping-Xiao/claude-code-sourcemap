// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jml
// matched 2.1.88 source: node_modules/undici/lib/web/fileapi/filereader.js
// class=new  jaccard=0.0453  score=0.1571  fileCov=0.0598
// note: nearest: node_modules/undici/lib/web/fileapi/filereader.js (0.0453); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jml = E(() => {
  WAe();
  yml();
  k6e();
  Lml();
  U6t();
  F6t = R(require("vm"));
});
async function Gml(e, t, n, r = {}) {
  let o = Date.now(),
    s = [],
    i = p => {
      if (p.type === "progress" && p.data.type === "workflow_log" && s.length < apf) s.push(p.data.message);
      r.onProgress?.(p);
    },
    a = r.journal ? await r.journal.load() : void 0,
    l = Fml(t, n, i, r.workflowRunId, r.onAgentController, r.args, r.seedPhaseTitles, r.tokenBudget, r.journal, a),
    c = OYn(l.vmContext),
    u = t.abortController?.signal,
    d;
  try {
    let p = e.runInContext(l.vmContext, {
        timeout: r.syncTimeoutMs ?? YYn
      }),
      f = z_t(l.vmContext)(p);
    f.catch(() => {});
    let g = (u ? await Promise.race([f, new Promise((b, _) => {
      let S = () => _(Error("Workflow aborted"));
      if (u.aborted) S();else u.addEventListener("abort", S), d = () => u.removeEventListener("abort", S);
    })]) : await f).v;
    if (typeof g === "function") throw Error("workflow result cannot be a function");
    let h = g !== null && typeof g === "object" ? l.hooks.sanitizeVMValue(g) : g,
      y;
    try {
      y = sM(h);
    } catch (b) {
      if (h === null || typeof h !== "object") throw b;
      y = JSON.parse(De(h, (_, S) => typeof S === "function" ? void 0 : S) ?? "null");
    }
    return De(y), {
      result: y,
      agentCount: l.hooks.getAgentCount(),
      logs: s,
      failures: l.hooks.getFailures(),
      durationMs: Date.now() - o
    };
  } catch (p) {
    let {
      name: f,
      message: m,
      stack: g
    } = c(p);
    if (g) T(`Workflow script error stack trace:
${g}`, {
      level: "error"
    });
    let h;
    if (g) {
      let y = g.split(`
`),
        b = y.slice(1).filter(_ => _.trim().startsWith("at "));
      h = b.length <= 5 ? g : [y[0] ?? "", ...b.slice(0, 5)].join(`
`);
    } else h = m ? `${f}: ${m}` : f;
    return {
      result: null,
      agentCount: l.hooks.getAgentCount(),
      logs: s,
      failures: l.hooks.getFailures(),
      durationMs: Date.now() - o,
      error: h
    };
  } finally {
    d?.();
  }
}
var apf = 1000;