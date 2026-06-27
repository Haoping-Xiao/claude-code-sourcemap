// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T3o
// matched 2.1.88 source: src/utils/errorLogSink.ts
// class=modified  jaccard=0.5311  score=0.9424  fileCov=0.5489
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: initializeErrorLogSink, getMCPLogsPath, getErrorsPath, _flushLogWritersForTesting, _clearLogWritersForTesting
// [unwrapped __esm module T3o] deps: utils/authFileDescriptor.ts, utils/fileRead.ts, utils/errors.ts, utils/fsOperations.ts, utils/completionCache.ts
((Iir = require("fs/promises")), (EZl = require("path")));
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
function extractServerMessage(data) {
  if (typeof data === "string") return data;
  if (data && typeof data === "object") {
    let t = data;
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
    let o = extractServerMessage(e.response?.data);
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
function logMCPErrorImpl(serverName, error) {
  T(`MCP server "${serverName}" ${error}`, {
    level: "error",
  });
  let n = getMCPLogsPath(serverName),
    o = {
      error: error instanceof Error ? error.stack || error.message : String(error),
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
    logMCPError: logMCPErrorImpl,
    logMCPDebug: yKf,
    getErrorsPath: getErrorsPath,
    getMCPLogsPath: getMCPLogsPath,
  }),
    T("Error log sink initialized"));
}
var qJt, AZl, WJt;
