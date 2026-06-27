// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z0o
// matched 2.1.88 source: src/utils/mcpOutputStorage.ts
// class=modified (alt of src/utils/mcpOutputStorage.ts)  jaccard=0.2914  score=0.535  fileCov=0.3902
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var z0o = E(() => {
  Lo();
  fn();
  At();
  oc();
  DGe();
  Hu();
  ((z7n = require("fs/promises")),
    (v$e = require("path")),
    (dmf = {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".gif": "image/gif",
      ".webp": "image/webp",
      ".svg": "image/svg+xml",
      ".bmp": "image/bmp",
      ".ico": "image/x-icon",
      ".heic": "image/heic",
      ".heif": "image/heif",
      ".avif": "image/avif",
      ".tif": "image/tiff",
      ".tiff": "image/tiff",
      ".mp4": "video/mp4",
      ".m4v": "video/x-m4v",
      ".mov": "video/quicktime",
      ".webm": "video/webm",
      ".avi": "video/x-msvideo",
      ".mkv": "video/x-matroska",
      ".mp3": "audio/mpeg",
      ".m4a": "audio/mp4",
      ".wav": "audio/wav",
      ".ogg": "audio/ogg",
      ".aac": "audio/aac",
      ".flac": "audio/flac",
      ".pdf": "application/pdf",
      ".txt": "text/plain",
      ".log": "text/plain",
      ".md": "text/markdown",
      ".json": "application/json",
      ".csv": "text/csv",
      ".html": "text/html",
      ".htm": "text/html",
      ".xml": "application/xml",
      ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ".zip": "application/zip",
    }));
});
var CQ = {};
_t(CQ, {
  shouldToolsListOptInToBrief: () => shouldToolsListOptInToBrief,
  isBriefEntitled: () => isBriefEntitled,
  isBriefEnabled: () => isBriefEnabled,
  getBriefEnforceText: () => getBriefEnforceText,
});
function isBriefEntitled() {
  return Oe.CLAUDE_CODE_BRIEF || T7("tengu_kairos_brief", false, fmf);
}
function shouldToolsListOptInToBrief(e) {
  if (!e.includes(j1) && !e.includes(z2t)) return false;
  if (Jxe()) return false;
  return isBriefEntitled();
}
function isBriefEnabled() {
  return (qie() && isBriefEntitled()) || L9r();
}
function getBriefEnforceText() {
  let e = at("tengu_kairos_brief_stop_hook_text", "");
  return typeof e === "string" && e.length > 0 ? e : gmf;
}
var fmf = 300000,
  gmf;
