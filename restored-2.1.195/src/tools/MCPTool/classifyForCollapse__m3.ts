// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vbc
// matched 2.1.88 source: src/tools/MCPTool/classifyForCollapse.ts
// class=modified (alt of src/tools/MCPTool/classifyForCollapse.ts)  jaccard=0.002  score=0.0544  fileCov=0.002
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function zdr(e) {
  let t = e.tool,
    n = y0o(t);
  if (n !== void 0)
    return {
      dialog: n.dialog,
      descriptor: n.build(e),
    };
  if (z9t(t)) {
    let r = K9t(t, e.input);
    if (r !== null) {
      let o = e.remoteWorkspace === true,
        s = o && Tnl(t) && !e.signal?.aborted ? await READ_TOOLS(r) : void 0;
      return {
        dialog: fMe,
        descriptor: h6n({
          ...e,
          filePath: r,
          remoteWorkspace: o,
          remoteOldContent: s,
        }),
      };
    }
  }
  if (t === cl)
    return {
      dialog: _8e,
      descriptor: m6n({
        ...e,
        classifierState: "none",
        toolPermissionContext: e.toolPermissionContext,
      }),
    };
  return {
    dialog: kMe,
    descriptor: yP(e),
  };
}
async function READ_TOOLS(e) {
  if (!LO("fileRead")) return;
  try {
    let t = await vc(
      Ju().sendControlRequest({
        subtype: "read_file",
        path: e,
        max_bytes: _ur,
      }),
      fgm,
      "remote read_file timed out",
    );
    if (t.truncated === true) return;
    return t.contents;
  } catch (t) {
    let n = t instanceof Error ? t.message : String(t);
    if (n.includes("ENOENT") || n.includes("no such file")) return null;
    T(`buildForwardedPermissionDialog: remote read_file failed for ${e}: ${n}`, {
      level: "error",
    });
    return;
  }
}
var fgm = 10000; /* 1e4 */
