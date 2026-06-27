// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mdc
// matched 2.1.88 source: src/services/mcp/config.ts
// class=new  jaccard=0.0106  score=0.3443  fileCov=0.0108
// note: nearest: src/services/mcp/config.ts (0.0106); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mdc] deps: utils/gracefulShutdown.ts, utils/stringUtils.ts, hooks/useTerminalSize.ts, services/mcp/utils.ts, services/teamMemorySync/secretScanner.ts, context/modalContext.tsx, w7t, components/CustomSelect/select.tsx, components/design-system/Dialog.tsx, components/ConfigurableShortcutHint.tsx
pdc = R(lt(), 1), Gcr = R(rt(), 1), v3 = R(se(), 1);
async function oV(e) {
  if (!tyo()) return;
  if (e.hasDynamicMcpConfig || !e.pluginStateReliable || (await wim())) T("[mcp-policy-cold-start] waiting on remote managed-settings load"), await bVe();else T("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");
}
async function wim() {
  for (let e of _do) if (Object.keys(bT(e, {
    expandVars: false
  }).servers).length > 0) return true;
  if (Object.keys(SIn()).length > 0) return true;
  if (Kdt()) return true;
  try {
    if ((await mp()).enabled.length > 0) return true;
  } catch {
    return true;
  }
  return WE();
}