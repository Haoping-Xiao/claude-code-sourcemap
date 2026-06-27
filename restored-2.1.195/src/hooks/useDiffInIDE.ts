// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Sfl
// matched 2.1.88 source: src/hooks/useDiffInIDE.ts
// class=modified  jaccard=0.306  score=0.7892  fileCov=0.3332
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function computeEditsFromContents(filePath, oldContent, newContent, editMode) {
  let o = editMode === "single",
    s = yMe({
      filePath: filePath,
      oldContent: oldContent,
      newContent: newContent,
      singleHunk: o,
    });
  if (s.length === 0) return [];
  if (o && s.length > 1) ke(Error(`Unexpected number of hunks: ${s.length}. Expected 1 hunk.`));
  return Lel(s);
}
async function showDiffInIDE(file_path, edits, toolUseContext, tabName) {
  let o = false,
    s = ds(file_path),
    i = "";
  try {
    i = XC(s);
  } catch (c) {
    if (!wn(c)) throw c;
  }
  async function a() {
    if (o) return;
    o = true;
    try {
      await closeTabInIDE(tabName, l);
    } catch (c) {
      T(`Failed to close diff tab in IDE: ${c instanceof Error ? c.message : String(c)}`, {
        level: "error",
      });
    }
    (process.off("beforeExit", a),
      toolUseContext.abortController.signal.removeEventListener("abort", a));
  }
  (toolUseContext.abortController.signal.addEventListener("abort", a), process.on("beforeExit", a));
  let l = p5(toolUseContext.options.mcpClients);
  try {
    let { updatedFile: c } = Evo({
      filePath: s,
      fileContents: i,
      edits: edits,
    });
    if (!l || l.type !== "connected") throw Error("IDE client not available");
    let u = s,
      d = l.config.ideRunningInWindows === true;
    if (Vt() === "wsl" && d && process.env.WSL_DISTRO_NAME)
      u = await new I0e(process.env.WSL_DISTRO_NAME).toIDEPath(s);
    let p = await Rre(
        "openDiff",
        {
          old_file_path: u,
          new_file_path: u,
          new_file_contents: c,
          tab_name: tabName,
        },
        l,
      ),
      f = Array.isArray(p) ? p : [p];
    if (isSaveMessage(f))
      return (
        a(),
        {
          oldContent: i,
          newContent: f[1].text,
        }
      );
    else if (isClosedMessage(f))
      return (
        a(),
        {
          oldContent: i,
          newContent: c,
        }
      );
    else if (isRejectedMessage(f))
      return (
        a(),
        {
          oldContent: i,
          newContent: i,
        }
      );
    throw Error("Not accepted");
  } catch (c) {
    throw (
      T(`Failed to show diff in IDE: ${c instanceof Error ? c.message : String(c)}`, {
        level: "error",
      }),
      a(),
      c
    );
  }
}
async function closeTabInIDE(tabName, ideClient) {
  try {
    if (!ideClient || ideClient.type !== "connected") throw Error("IDE client not available");
    (await Rre(
      "close_tab",
      {
        tab_name: tabName,
      },
      ideClient,
    ),
      xe("ide_close_diff_tab"));
  } catch (n) {
    (T(`Failed to close diff tab in IDE: ${n instanceof Error ? n.message : String(n)}`, {
      level: "error",
    }),
      It("ide_close_diff_tab", "ide_close_diff_tab_failed"));
  }
}
function isClosedMessage(data) {
  return (
    Array.isArray(data) &&
    typeof data[0] === "object" &&
    data[0] !== null &&
    "type" in data[0] &&
    data[0].type === "text" &&
    "text" in data[0] &&
    data[0].text === "TAB_CLOSED"
  );
}
function isRejectedMessage(data) {
  return (
    Array.isArray(data) &&
    typeof data[0] === "object" &&
    data[0] !== null &&
    "type" in data[0] &&
    data[0].type === "text" &&
    "text" in data[0] &&
    data[0].text === "DIFF_REJECTED"
  );
}
function isSaveMessage(data) {
  return (
    Array.isArray(data) &&
    data[0]?.type === "text" &&
    data[0].text === "FILE_SAVED" &&
    typeof data[1].text === "string"
  );
}
var AYn;
