// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qNo
// matched 2.1.88 source: src/hooks/notifs/useMcpConnectivityStatus.tsx
// class=partial  jaccard=0.1285  score=0.7122  fileCov=0.1356
// note: low-confidence suggestion: src/hooks/notifs/useMcpConnectivityStatus.tsx; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module qNo] deps: hooks/useTerminalSize.ts, components/ValidationErrorsList.tsx, components/AgentProgressLine.tsx
jNl = R(lt(), 1), Mq = R(se(), 1);
function VL(e, t) {
  if (t <= 0) return;
  T(`${t} setup ${bn(t, "issue")}: ${e} (run /doctor for details)`, {
    level: "info"
  });
}
function _temp(client, t) {
  if (client.config.type === "claudeai-proxy") return t(client.name);
  return client.config.type !== "sse-ide" && client.config.type !== "ws-ide";
}
function GNl(e, t) {
  return On(e, n => n.type === "needs-auth" && _temp(n, t));
}
function WNl(e, t) {
  let n = [];
  for (let r of e) {
    if (r.type !== "failed" && r.type !== "needs-auth") continue;
    if (_temp(r, t)) n.push(r);
  }
  return n;
}