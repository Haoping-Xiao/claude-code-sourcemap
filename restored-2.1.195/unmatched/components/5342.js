// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mdc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mdc = E(() => {
  Yp();
  ED();
  Ye();
  Kv();
  sr();
  Cc();
  w7t();
  Bs();
  vi();
  Ko();
  pdc = R(lt(), 1), Gcr = R(rt(), 1), v3 = R(se(), 1);
});
async function oV(e) {
  if (!tyo()) return;
  if (e.hasDynamicMcpConfig || !e.pluginStateReliable || (await wim())) T("[mcp-policy-cold-start] waiting on remote managed-settings load"), await bVe();else T("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");
}
async function wim() {
  for (let e of _do) if (Object.keys(bT(e, {
    expandVars: !1
  }).servers).length > 0) return !0;
  if (Object.keys(SIn()).length > 0) return !0;
  if (Kdt()) return !0;
  try {
    if ((await mp()).enabled.length > 0) return !0;
  } catch {
    return !0;
  }
  return WE();
}