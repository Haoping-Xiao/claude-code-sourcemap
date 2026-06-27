// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qd
// matched 2.1.88 source: src/utils/log.ts
// class=modified  jaccard=0.2368  score=0.8415  fileCov=0.2478
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function getLogDisplayTitle(e, t) {
  let n = e.firstPrompt?.startsWith(`<${Cae}>`),
    r = e.firstPrompt ? FZe(e.firstPrompt) : "",
    o = r && !n,
    s =
      e.agentName ||
      e.customTitle ||
      e.aiTitle ||
      e.summary ||
      (o ? r : void 0) ||
      t ||
      (n ? "Autonomous session" : void 0) ||
      (e.sessionId ? e.sessionId.slice(0, 8) : "") ||
      "";
  return Apn(s).trim();
}
function rEs(e) {
  return e.toISOString().replace(/[:.]/g, "-");
}
function PDu(e) {
  if (Tpn.length >= DDu) Tpn.shift();
  Tpn.push(e);
}
function attachErrorLogSink(e) {
  if (Nee !== null) return;
  if (((Nee = e), WZe.length > 0)) {
    let t = [...WZe];
    WZe.length = 0;
    for (let n of t)
      switch (n.type) {
        case "error":
          Nee.logError(n.error);
          break;
        case "mcpError":
          Nee.logMCPError(n.serverName, n.error);
          break;
        case "mcpDebug":
          Nee.logMCPDebug(n.serverName, n.message);
          break;
      }
  }
}
function ke(e) {
  let t = Zr(e);
  try {
    if (
      ut(process.env.CLAUDE_CODE_USE_BEDROCK) ||
      ut(process.env.CLAUDE_CODE_USE_VERTEX) ||
      ut(process.env.CLAUDE_CODE_USE_FOUNDRY) ||
      ut(process.env.CLAUDE_CODE_USE_ANTHROPIC_AWS) ||
      ut(process.env.CLAUDE_CODE_USE_MANTLE) ||
      process.env.DISABLE_ERROR_REPORTING ||
      Vi()
    )
      return;
    let r = {
      error: t.stack || t.message,
      timestamp: new Date().toISOString(),
    };
    if ((PDu(r), Nee === null)) {
      WZe.push({
        type: "error",
        error: t,
      });
      return;
    }
    Nee.logError(t);
  } catch {}
}
function PFe() {
  return [...Tpn];
}
function au(e, t) {
  try {
    if (Nee === null) {
      WZe.push({
        type: "mcpError",
        serverName: e,
        error: t,
      });
      return;
    }
    Nee.logMCPError(e, t);
  } catch {}
}
function sn(e, t) {
  try {
    if (Nee === null) {
      WZe.push({
        type: "mcpDebug",
        serverName: e,
        message: t,
      });
      return;
    }
    Nee.logMCPDebug(e, t);
  } catch {}
}
function captureAPIRequest(e, t) {
  if (!t || !t.startsWith("repl_main_thread")) return;
  let { messages: n, ...r } = e;
  (xbr(r), Rbr(null));
}
var DDu = 100,
  Tpn,
  WZe,
  Nee = null,
  qag;
