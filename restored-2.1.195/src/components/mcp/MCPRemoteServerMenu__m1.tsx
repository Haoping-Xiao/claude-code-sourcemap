// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pdo
// matched 2.1.88 source: src/components/mcp/MCPRemoteServerMenu.tsx
// class=modified (alt of src/components/mcp/MCPRemoteServerMenu.tsx)  jaccard=0.0566  score=0.4724  fileCov=0.0604
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function _Tp(e) {
  if (!po.isAxiosError(e)) return false;
  let t = e.response?.status;
  if (t !== void 0) return t >= 500 && t < 600;
  return e.code !== void 0 && yTp.has(e.code);
}
function fdo() {
  let e = oqe;
  return ((oqe = void 0), e);
}
function xUn() {
  let e = fdo();
  if (!e) return;
  let t = e.level === "error" ? wt.red(e.message) : wt.yellow(`\u26A0 ${e.message}`);
  process.stderr.write(`${t}
`);
}
function bTp(e) {
  let t = {};
  for (let n of e ?? []) {
    let r = XRt().safeParse(n.effective_max_permission);
    if (r.success) t[n.name] = r.data;
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function STp(e) {
  try {
    return new URL(e).href.replace(/\/+$/, "");
  } catch {
    return e;
  }
}
function HCa() {
  (rDe.cache.clear?.(), (oqe = void 0));
}
function mdo(e) {
  gn((t) => {
    let n = t.claudeAiMcpEverConnected ?? [];
    if (n.includes(e)) return t;
    return {
      ...t,
      claudeAiMcpEverConnected: [...n, e],
    };
  });
}
function sqe(e) {
  return (Dt().claudeAiMcpEverConnected ?? []).includes(e);
}
function kUn() {
  return new Set(Dt().claudeAiMcpEverConnected ?? []);
}
function OSe() {
  return `${$s().CLAUDE_AI_ORIGIN}/customize/connectors`;
}
function oDe(e) {
  let t = Lc()?.organizationUuid;
  if (!t || !e.id) return null;
  let n = $s().CLAUDE_AI_ORIGIN,
    r = e.id.startsWith("mcprs") ? "mcpsrv" + e.id.slice(5) : e.id,
    o = encodeURIComponent(process.env.CLAUDE_CODE_ENTRYPOINT || "cli");
  return `${n}/api/organizations/${t}/mcp/start-auth/${r}?product_surface=${o}`;
}
var ECa = 5000,
  ACa = 3,
  mTp = 500,
  gTp = 3,
  hTp = 12000,
  yTp,
  oqe,
  rDe;
