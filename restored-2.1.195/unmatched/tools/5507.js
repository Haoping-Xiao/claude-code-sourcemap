// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vbc
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0043  score=0.2181  fileCov=0.0044
// note: nearest: src/cli/print.ts (0.0043); dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
async function zdr(e) {
  let t = e.tool,
    n = y0o(t);
  if (n !== void 0) return {
    dialog: n.dialog,
    descriptor: n.build(e)
  };
  if (z9t(t)) {
    let r = K9t(t, e.input);
    if (r !== null) {
      let o = e.remoteWorkspace === true,
        s = o && Tnl(t) && !e.signal?.aborted ? await mgm(r) : void 0;
      return {
        dialog: fMe,
        descriptor: h6n({
          ...e,
          filePath: r,
          remoteWorkspace: o,
          remoteOldContent: s
        })
      };
    }
  }
  if (t === cl) return {
    dialog: _8e,
    descriptor: m6n({
      ...e,
      classifierState: "none",
      toolPermissionContext: e.toolPermissionContext
    })
  };
  return {
    dialog: kMe,
    descriptor: yP(e)
  };
}
async function mgm(e) {
  if (!LO("fileRead")) return;
  try {
    let t = await vc(Ju().sendControlRequest({
      subtype: "read_file",
      path: e,
      max_bytes: _ur
    }), fgm, "remote read_file timed out");
    if (t.truncated === true) return;
    return t.contents;
  } catch (t) {
    let n = t instanceof Error ? t.message : String(t);
    if (n.includes("ENOENT") || n.includes("no such file")) return null;
    T(`buildForwardedPermissionDialog: remote read_file failed for ${e}: ${n}`, {
      level: "error"
    });
    return;
  }
}
var fgm = 10000 /* 1e4 */;