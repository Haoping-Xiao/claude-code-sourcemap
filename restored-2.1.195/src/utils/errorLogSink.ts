// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T3o
// matched 2.1.88 source: src/utils/errorLogSink.ts
// class=modified  jaccard=0.5311  score=0.9424  fileCov=0.5489
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var T3o = E(() => {
  db();
  Pw();
  At();
  Jt();
  zOe();
  ((Iir = require("fs/promises")), (EZl = require("path")));
});
var kir = {};
_t(kir, {
  initializeErrorLogSink: () => initializeErrorLogSink,
  getMCPLogsPath: () => getMCPLogsPath,
  getErrorsPath: () => getErrorsPath,
  _flushLogWritersForTesting: () => dKf,
  _clearLogWritersForTesting: () => pKf,
});
function getErrorsPath() {
  return qJt.join(LFe.errors(), AZl + ".jsonl");
}
function getMCPLogsPath(e) {
  return qJt.join(LFe.mcpLogs(e), AZl + ".jsonl");
}
function uKf(e) {
  let t = SJe(e);
  return {
    write(n) {
      t.write(
        De(n) +
          `
`,
      );
    },
    flush: t.flush,
    dispose: t.dispose,
  };
}
function dKf() {
  for (let e of WJt.values()) e.flush();
}
function pKf() {
  for (let e of WJt.values()) e.dispose();
  WJt.clear();
}
function w3o(e) {
  let t = WJt.get(e);
  if (!t) {
    let n = qJt.dirname(e),
      r = false;
    ((t = uKf({
      writeFn: (o) => {
        try {
          try {
            qt().appendFileSync(e, o);
          } catch {
            (qt().mkdirSync(n), qt().appendFileSync(e, o));
          }
        } catch (s) {
          if (!r)
            ((r = true),
              T(`Dropping log batch for ${e}: ${s instanceof Error ? s.message : String(s)}`));
        }
      },
      flushIntervalMs: 1000,
      maxBufferSize: 50,
    })),
      WJt.set(e, t),
      Ci(async () => t?.dispose()));
  }
  return t;
}
function fKf(e, t) {
  return;
}
function mKf(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    let t = e;
    if (typeof t.message === "string") return t.message;
    if (
      typeof t.error === "object" &&
      t.error &&
      "message" in t.error &&
      typeof t.error.message === "string"
    )
      return t.error.message;
  }
  return;
}
function gKf(e) {
  ($Ki(e), AWt(e));
  let t = e.stack || e.message,
    n = "";
  if (po.isAxiosError(e) && e.config?.url) {
    let r = [`url=${e.config.url}`];
    if (e.response?.status !== void 0) r.push(`status=${e.response.status}`);
    let o = mKf(e.response?.data);
    if (o) r.push(`body=${o}`);
    n = `[${r.join(",")}] `;
  }
  (T(`${e.name}: ${n}${t}`, {
    level: "error",
  }),
    fKf(getErrorsPath(), {
      error: `${n}${t}`,
    }));
}
function hKf(e, t) {
  T(`MCP server "${e}" ${t}`, {
    level: "error",
  });
  let n = getMCPLogsPath(e),
    o = {
      error: t instanceof Error ? t.stack || t.message : String(t),
      timestamp: new Date().toISOString(),
      sessionId: Rt(),
      cwd: qt().cwd(),
    };
  w3o(n).write(o);
}
function yKf(e, t) {
  T(`MCP server "${e}": ${t}`);
  let n = getMCPLogsPath(e),
    r = {
      debug: t,
      timestamp: new Date().toISOString(),
      sessionId: Rt(),
      cwd: qt().cwd(),
    };
  w3o(n).write(r);
}
function initializeErrorLogSink() {
  (oEs({
    logError: gKf,
    logMCPError: hKf,
    logMCPDebug: yKf,
    getErrorsPath: getErrorsPath,
    getMCPLogsPath: getMCPLogsPath,
  }),
    T("Error log sink initialized"));
}
var qJt, AZl, WJt;
