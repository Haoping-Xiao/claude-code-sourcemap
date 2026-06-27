// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module izo
// matched 2.1.88 source: src/tools/PowerShellTool/PowerShellTool.tsx
// class=new  jaccard=0.0135  score=0.3242  fileCov=0.0139
// note: nearest: src/tools/PowerShellTool/PowerShellTool.tsx (0.0135); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var izo = E(() => {
  Hp();
  Rc();
  dn();
  je();
  Cv();
});
function qbc(e, t) {
  let n = _l(t, e);
  if (n) return n;
  return pgm(e);
}
function pgm(e) {
  function t(n) {
    throw Error(`Stub tool ${e}.${n} called \u2014 stub exists only for permission UI rendering.`);
  }
  return {
    name: e,
    isMcp: !1,
    isReadOnly: () => !1,
    isConcurrencySafe: () => !1,
    isEnabled: () => !1,
    inputSchema: ol.record(ol.string(), ol.unknown()),
    maxResultSizeChars: 0,
    userFacingName: () => e,
    description: async () => "",
    prompt: async () => t("prompt"),
    call: async () => t("call"),
    checkPermissions: async () => t("checkPermissions"),
    toAutoClassifierInput: () => "",
    mapToolResultToToolResultBlockParam: (n, r) => ({
      type: "tool_result",
      tool_use_id: r,
      content: ""
    }),
    renderToolUseMessage: n => {
      let r = Object.entries(n);
      if (r.length === 0) return "";
      return r.slice(0, 3).map(([o, s]) => {
        let i = typeof s === "string" ? Ja(s) : De(s);
        return `${Ja(o)}: ${i}`;
      }).join(", ");
    }
  };
}