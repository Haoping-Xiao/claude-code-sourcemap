// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K0
// matched 2.1.88 source: src/utils/mcpOutputStorage.ts
// class=modified  jaccard=0.468  score=0.5717  fileCov=0.7206
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: persistBinaryContent, isSubagentTruncationPromptEnabled, isBinaryContentType, getLargeOutputInstructions, getFormatDescription, getBinaryBlobSavedMessage, extensionForMimeType
// [unwrapped __esm module K0] deps: ft, Un, kt, Du, db, je, At, es, jS, Jt
QUn = require("path");
function isSubagentTruncationPromptEnabled() {
  let e = process.env.MCP_TRUNCATION_PROMPT_OVERRIDE;
  return e ? e !== "legacy" : at("tengu_mcp_subagent_prompt", !1);
}
function getFormatDescription(type, schema) {
  switch (type) {
    case "toolResult":
      return "Plain text";
    case "structuredContent":
      return schema ? `JSON with schema: ${schema}` : "JSON";
    case "contentArray":
      return schema ? `JSON array with schema: ${schema}` : "JSON array";
  }
}
function getLargeOutputInstructions(e, t, n, r, o) {
  let i = `Error: result (${o !== void 0 ? `${t.toLocaleString()} characters across ${o.count.toLocaleString()} ${o.count === 1 ? "line" : "lines"}` : `${t.toLocaleString()} characters`}) exceeds maximum allowed tokens. Output has been saved to ${e}.
Format: ${n}
`,
    a = Math.floor(jSe().maxTokens * 4 * 0.8),
    l = 8,
    c = o !== void 0 && o.count > 1 && o.maxLen <= a,
    u = c ? Math.max(1, Math.floor(a / (o.maxLen + 8))) : void 0;
  if (!isSubagentTruncationPromptEnabled()) {
    let m = o !== void 0 && !c;
    return (
      i +
      `Use offset and limit parameters to read specific portions of the file, search within it for specific content, and jq to make structured queries.
REQUIREMENTS FOR SUMMARIZATION/ANALYSIS/REVIEW:
` +
      wvp(e, r, m)
    );
  }
  let d, p, f;
  if (o === void 0)
    ((d = `- For targeted queries (find a value, filter by field): use jq on the file directly.
`),
      (p = `first probe the structure (e.g., jq 'type, length, keys?' ${e}), then extract slices with jq or python \u2014 Read's line-based offset/limit will not chunk this file.`),
      (f = `${e} is ${n}; probe the structure with jq (type/length/keys), then extract and read the content in full with jq or python, then summarize and quote any key findings verbatim.`));
  else if (!c) {
    let m = a.toLocaleString();
    ((d = `- For targeted searches (find a string): use grep on the file directly.
`),
      (p = `the file's lines are too long for Read's offset/limit. Slice by character range via Bash instead \u2014 e.g. python3 -c "print(open('${e}').read()[A:B])" in ~${m}-char spans until you have read 100% of it.`),
      (f = `Slice ${e} in ~${m}-char spans via python (read()[A:B]) until you have read all ${t.toLocaleString()} characters, then summarize and quote any key findings verbatim.`));
  } else
    ((d = `- For targeted searches (find a line, locate a string): use grep on the file directly.
`),
      (p = `read ${e} in chunks of ~${u} lines using offset/limit until you have read 100% of it.`),
      (f = `Read ${e} in chunks of ~${u} lines using offset/limit until you have read all ${o.count.toLocaleString()} lines, then summarize and quote any key findings verbatim.`));
  return (
    i +
    d +
    `- For analysis or summarization that requires reading the full content: ${p}
- If the ${ss} tool is available, do this inside a subagent so the full output stays out of your main context. Give it the instruction above verbatim, and be explicit about what it must return \u2014 e.g. "${f}" A vague "summarize this" may lose detail.
`
  );
}
function wvp(rawOutputPath, contentLength, formatDescription) {
  let r = contentLength
      ? `- If you receive truncation warnings when reading the file ("[N lines truncated]"), reduce the chunk size until you have read 100% of the content without truncation ***DO NOT PROCEED UNTIL YOU HAVE DONE THIS***. Bash output is limited to ${contentLength.toLocaleString()} chars.
`
      : `- If you receive truncation warnings when reading the file, reduce the chunk size until you have read 100% of the content without truncation.
`,
    o = formatDescription
      ? `- Note: this file's lines are too long for Read's offset/limit chunking. If a shell tool is available, slice by character range (e.g. python read()[A:B], dd, or cut -c) instead.
`
      : "";
  return (
    `- You MUST read the content from the file at ${rawOutputPath} in sequential chunks until 100% of the content has been read.
` +
    o +
    r +
    `- Before producing ANY summary or analysis, you MUST explicitly describe what portion of the content you have read. ***If you did not read the entire content, you MUST explicitly state this.***
- If after a few attempts you cannot read the file (file not found, lines too long for Read's offset/limit, no shell access), STOP retrying. Summarize what you were able to read, explicitly state which portion you could not read and why, and proceed.
`
  );
}
function extensionForMimeType(mimeType) {
  if (!mimeType) return "bin";
  switch (bi(mimeType, ";").trim().toLowerCase()) {
    case "application/pdf":
      return "pdf";
    case "application/json":
      return "json";
    case "text/csv":
      return "csv";
    case "text/plain":
      return "txt";
    case "text/html":
      return "html";
    case "text/markdown":
      return "md";
    case "application/zip":
      return "zip";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "docx";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "xlsx";
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return "pptx";
    case "application/msword":
      return "doc";
    case "application/vnd.ms-excel":
      return "xls";
    case "audio/mpeg":
      return "mp3";
    case "audio/wav":
      return "wav";
    case "audio/ogg":
      return "ogg";
    case "video/mp4":
      return "mp4";
    case "video/webm":
      return "webm";
    case "image/png":
      return "png";
    case "image/jpeg":
      return "jpg";
    case "image/gif":
      return "gif";
    case "image/webp":
      return "webp";
    case "image/svg+xml":
      return "svg";
    default:
      return "bin";
  }
}
function isBinaryContentType(contentType) {
  if (!contentType) return !1;
  let t = bi(contentType, ";").trim().toLowerCase();
  if (t.startsWith("text/")) return !1;
  if (t.endsWith("+json") || t === "application/json") return !1;
  if (t.endsWith("+xml") || t === "application/xml") return !1;
  if (t.startsWith("application/javascript")) return !1;
  if (t === "application/x-www-form-urlencoded") return !1;
  return !0;
}
async function persistBinaryContent(bytes, mimeType, persistId) {
  await GSe();
  let r = extensionForMimeType(mimeType),
    o = HIa.join(lde(), `${persistId}.${r}`);
  try {
    await qs().writeBytes(o, bytes);
  } catch (s) {
    let i = Zr(s);
    return (
      T(`Failed to persist binary content to ${o}: ${i.message}`, {
        level: "error",
      }),
      {
        error: i.message,
      }
    );
  }
  return (
    G("tengu_binary_content_persisted", {
      mimeType: mimeType ?? "unknown",
      sizeBytes: bytes.length,
      ext: r,
    }),
    {
      filepath: o,
      size: bytes.length,
      ext: r,
    }
  );
}
function getBinaryBlobSavedMessage(filepath, mimeType, size, sourceDescription) {
  return `${sourceDescription}Binary content (${mimeType || "unknown type"}, ${Ra(size)}) saved to ${filepath}`;
}
var HIa;
