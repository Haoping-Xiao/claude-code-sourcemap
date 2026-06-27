// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ykl
// matched 2.1.88 source: src/tools/FileReadTool/FileReadTool.ts
// class=modified (alt of src/tools/FileReadTool/FileReadTool.ts)  jaccard=0.1201  score=0.306  fileCov=0.1651
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ykl] deps: utils/messages.ts, components/VirtualMessageList.tsx, ink/measure-text.ts, commands/add-dir/validation.ts, hooks/useTerminalSize.ts, utils/nativeInstaller/download.ts, utils/profilerBase.ts, utils/permissions/filesystem.ts, Task.ts
X_ = R(se(), 1);
function isBlockedDevicePath(filePath) {
  if (hCf.has(filePath)) return true;
  if (
    filePath.startsWith("/proc/") &&
    (filePath.endsWith("/fd/0") || filePath.endsWith("/fd/1") || filePath.endsWith("/fd/2"))
  )
    return true;
  if (/^\/proc\/[^/]+\/(environ|cmdline|auxv|maps|mem|stat)$/.test(filePath)) return true;
  return false;
}
function bCf(e) {
  let t = Wze.basename(e),
    n = /^(.+)([ \u202F])(AM|PM)(\.png)$/,
    r = t.match(n);
  if (!r) return;
  let o = r[2],
    s = o === " " ? _Cf : " ";
  return e.replace(`${o}${r[3]}${r[4]}`, `${s}${r[3]}${r[4]}`);
}
function detectSessionFileType(filePath) {
  let t = tr();
  if (!filePath.startsWith(t)) return null;
  let normalizedPath = filePath.split(IZn.win32.sep).join(IZn.posix.sep);
  if (normalizedPath.includes("/projects/") && normalizedPath.endsWith(".jsonl"))
    return "session_transcript";
  return null;
}
function HCf() {
  return pqe() ? JNi : oYr;
}
function TCf(e) {
  return Ypn({
    ...e,
    tabAwareSeparator: pqe(),
  });
}
function wCf(e) {
  let t = Zkl.get(e);
  if (t === void 0) return "";
  return Ura(t);
}
async function Xkl(e, t, n) {
  let r = n ?? jSe().maxTokens,
    o = Fra(e, t);
  if (!o || o <= r / 4) return;
  let i = (await Ukl(e)) ?? o;
  if (i > r) throw new ade(i, r);
}
function createImageResponse(buffer, mediaType, originalSize, dimensions) {
  return {
    type: "image",
    file: {
      base64: buffer.toString("base64"),
      type: `image/${mediaType}`,
      originalSize: originalSize,
      dimensions: dimensions,
    },
  };
}
function jMo(e) {
  return e.reason === "unknown"
    ? Error(e.message)
    : new mi(e.message, `PDF extraction failed (${e.reason})`);
}
async function callInner(
  file_path,
  fullFilePath,
  resolvedFilePath,
  ext,
  offset,
  limit,
  pages,
  maxSizeBytes,
  maxTokens,
  readFileState,
  context,
  messageId,
) {
  if (ext === "ipynb") {
    let L = await Qel(resolvedFilePath),
      M = De(L),
      N = Buffer.byteLength(M);
    if (N > maxSizeBytes) {
      let W = Su()
        ? `Use ${Co} with jq to read specific portions:
  cat "${file_path}" | jq '.cells[:20]' # First 20 cells
  cat "${file_path}" | jq '.cells[100:120]' # Cells 100-120
  cat "${file_path}" | jq '.cells | length' # Count total cells
  cat "${file_path}" | jq '.cells[] | select(.cell_type=="code") | .source' # All code sources`
        : `Use ${Ss} to read specific portions:
  Get-Content "${file_path}" | ConvertFrom-Json | Select-Object -ExpandProperty cells | Select-Object -First 20
  Get-Content "${file_path}" | ConvertFrom-Json | Select-Object -ExpandProperty cells | Select-Object -Skip 100 -First 20 # Cells 100-120
  (Get-Content "${file_path}" | ConvertFrom-Json).cells.Count # Count total cells
  Get-Content "${file_path}" | ConvertFrom-Json | Select-Object -ExpandProperty cells | Where-Object cell_type -eq code | Select-Object -ExpandProperty source`;
      throw Error(
        `Notebook content (${Ra(N)}) exceeds maximum allowed size (${Ra(maxSizeBytes)}). ${W}`,
      );
    }
    await Xkl(M, ext, maxTokens);
    let B = await qt().stat(resolvedFilePath);
    readFileState.set(fullFilePath, {
      content: M,
      timestamp: Math.floor(B.mtimeMs),
      offset: offset,
      limit: limit,
    });
    let $ = context.nestedMemoryAttachmentTriggers;
    if ($ && !$.includes(fullFilePath)) $.push(fullFilePath);
    let q = {
      type: "notebook",
      file: {
        filePath: file_path,
        cells: L,
      },
    };
    return (
      Soe({
        operation: "read",
        tool: "FileReadTool",
        filePath: fullFilePath,
        content: M,
      }),
      {
        data: q,
      }
    );
  }
  let p = Gh(context.options.mainLoopModel),
    f = false;
  if (ext === "")
    try {
      let L = qt();
      if ((await L.stat(resolvedFilePath)).isFile()) {
        let M = await L.readFileBytes(resolvedFilePath, 16);
        f = oX(M) !== null;
      }
    } catch {}
  if (Qkl.has(ext) || f) {
    let L = await readImageWithTokenBudget(resolvedFilePath, maxTokens, void 0, p),
      M = context.nestedMemoryAttachmentTriggers;
    if (M && !M.includes(fullFilePath)) M.push(fullFilePath);
    Soe({
      operation: "read",
      tool: "FileReadTool",
      filePath: fullFilePath,
      content: L.file.base64,
    });
    let N = L.file.dimensions ? Uat(L.file.dimensions) : null;
    return {
      data: L,
      ...(N && {
        newMessages: [
          Rn({
            content: N,
            isMeta: true,
          }),
        ],
      }),
    };
  }
  if (pit(ext)) {
    if (pages) {
      let W = rYr(pages),
        V = await NMo(resolvedFilePath, W ?? void 0);
      if (!V.success) throw jMo(V.error);
      (G("tengu_pdf_page_extraction", {
        success: true,
        pageCount: V.data.file.count,
        fileSize: V.data.file.originalSize,
        hasPageRange: true,
      }),
        Soe({
          operation: "read",
          tool: "FileReadTool",
          filePath: fullFilePath,
          content: `PDF pages ${pages}`,
        }));
      let z = (await CZn.readdir(V.data.file.outputDir)).filter((Z) => Z.endsWith(".jpg")).sort(),
        K = await Promise.all(
          z.map(async (Z) => {
            let J = Wze.join(V.data.file.outputDir, Z),
              ne = await CZn.readFile(J),
              { block: oe } = await FM({
                data: ne,
                mediaType: "jpeg",
                limits: p,
              });
            return oe;
          }),
        );
      return {
        data: V.data,
        ...(K.length > 0 && {
          newMessages: [
            Rn({
              content: K,
              isMeta: true,
            }),
          ],
        }),
      };
    }
    let L = await TZn(resolvedFilePath);
    if (L !== null && L > wDn)
      throw jMo({
        reason: "too_many_pages",
        message: `This PDF has ${L} pages, which is too many to read at once. Use the pages parameter to read specific page ranges (e.g., pages: "1-5"). Maximum ${Gce} pages per request.`,
      });
    let N = await qt().stat(resolvedFilePath);
    if (!dit() || N.size > Q9i) {
      let W = await NMo(resolvedFilePath);
      if (W.success)
        G("tengu_pdf_page_extraction", {
          success: true,
          pageCount: W.data.file.count,
          fileSize: W.data.file.originalSize,
        });
      else
        G("tengu_pdf_page_extraction", {
          success: false,
          available: W.error.reason !== "unavailable",
          fileSize: N.size,
        });
    }
    if (!dit())
      throw new mi(
        `Reading full PDFs is not supported with this model. Use a newer model (Sonnet 3.5 v2 or later), or use the pages parameter to read specific page ranges (e.g., pages: "1-5", maximum ${Gce} pages per request). Page extraction requires poppler-utils: install with \`brew install poppler\` on macOS or \`apt-get install poppler-utils\` on Debian/Ubuntu.`,
        "PDF unsupported on current model",
      );
    let $ = await jkl(resolvedFilePath);
    if (!$.success) throw jMo($.error);
    let q = $.data;
    return (
      Soe({
        operation: "read",
        tool: "FileReadTool",
        filePath: fullFilePath,
        content: q.file.base64,
      }),
      {
        data: q,
        newMessages: [
          Rn({
            content: [
              {
                type: "document",
                source: {
                  type: "base64",
                  media_type: "application/pdf",
                  data: q.file.base64,
                },
              },
            ],
            isMeta: true,
          }),
        ],
      }
    );
  }
  let m = offset === 0 ? 0 : offset - 1,
    {
      content: g,
      lineCount: h,
      totalLines: y,
      totalBytes: b,
      readBytes: _,
      mtimeMs: S,
    } = await mSt(
      resolvedFilePath,
      m,
      limit,
      limit === void 0 ? maxSizeBytes : void 0,
      context.abortController.signal,
    ),
    A = g,
    v = h,
    C = limit,
    x,
    I = (offset ?? 1) <= 1 && limit === void 0 && pages === void 0;
  try {
    await Xkl(g, ext, maxTokens);
  } catch (L) {
    if (L instanceof ade && I) {
      let M = g.split(`
`),
        N = Math.max(0.5, g.length / Math.max(1, L.tokenCount)),
        B = (Y) => Y.length / N,
        $ = Math.max(
          1,
          Math.min(
            M.length,
            Math.floor(((M.length * maxTokens) / Math.max(1, L.tokenCount)) * 0.85),
          ),
        ),
        q = M.slice(0, $).join(`
`);
      for (let Y = 0; Y < 6; Y++) {
        if (B(q) <= maxTokens || $ <= 1) break;
        (($ = Math.max(1, Math.floor($ * 0.7))),
          (q = M.slice(0, $).join(`
`)));
      }
      let W = false;
      if (B(q) > maxTokens || q.trim() === "") {
        let Y = Math.max(1, Math.floor(maxTokens * N * 0.85));
        for (let K = 0; K < 6; K++) {
          if (((q = g.slice(0, Y)), B(q) <= maxTokens)) break;
          Y = Math.max(1, Math.floor(Y * 0.7));
        }
        let z = q.charCodeAt(q.length - 1);
        if (z >= 55296 && z <= 56319) q = q.slice(0, -1);
        W = true;
      }
      ((A = q),
        (v = W
          ? hu(
              q,
              `
`,
            ) + 1
          : $),
        (C = v),
        (x =
          !W && v < y
            ? WNt +
              `showing lines 1-${v} of ${y} total (${L.tokenCount} tokens, cap ${maxTokens}). Call ${Ds} with offset=${v + 1} limit=${v} for the next page, or ${qc} to find a specific section. Do NOT answer from this page alone if the answer may be further in the file.]`
            : WNt +
              `showing the first ${q.length} of ${g.length} characters (${L.tokenCount} tokens, cap ${maxTokens}); this file has very long lines and cannot be paginated by line. Use ${qc} to find a specific section, or ${Ds} with offset/limit to page through it. Do NOT answer from this excerpt alone if the answer may be elsewhere in the file.]`));
    } else throw L;
  }
  readFileState.set(fullFilePath, {
    content: A,
    timestamp: Math.floor(S),
    offset: offset,
    limit: C,
    ...(x !== void 0 && {
      isPartialView: true,
    }),
  });
  let k = context.nestedMemoryAttachmentTriggers;
  if (k && !k.includes(fullFilePath)) k.push(fullFilePath);
  let D = {
    type: "text",
    file: {
      filePath: file_path,
      content: A,
      numLines: v,
      startLine: x !== void 0 ? Math.max(1, offset) : offset,
      totalLines: y,
      ...(x !== void 0 && {
        truncatedByTokenCap: true,
      }),
    },
  };
  if (Sze(fullFilePath)) Zkl.set(D, S);
  if (x !== void 0) e0l.set(D, x);
  Soe({
    operation: "read",
    tool: "FileReadTool",
    filePath: fullFilePath,
    content: A,
  });
  let P = detectSessionFileType(fullFilePath),
    O = jte(fullFilePath);
  return (
    G("tengu_session_file_read", {
      totalLines: y,
      readLines: v,
      totalBytes: b,
      readBytes: x !== void 0 ? Buffer.byteLength(A, "utf8") : _,
      offset: offset,
      ...(limit !== void 0 && {
        limit: limit,
      }),
      ...(O !== void 0 && {
        ext: O,
      }),
      ...(messageId !== void 0 && {
        messageID: Hr(messageId),
      }),
      is_session_transcript: P === "session_transcript",
    }),
    {
      data: D,
    }
  );
}
async function readImageWithTokenBudget(filePath, t = jSe().maxTokens, maxBytes, r) {
  let imageBuffer = await qt().readFileBytes(filePath, maxBytes),
    s = imageBuffer.length;
  if (s === 0) throw new mi(`Image file is empty: ${filePath}`, "Image file is empty");
  let i = oX(imageBuffer);
  if (i === null)
    throw new mi(
      `File has an image extension but its content is not a valid PNG/JPEG/GIF/WebP. Detected: ${K9i(imageBuffer)}. This usually means a download saved an error/login page instead of the image. Use \`file "${filePath}"\` to confirm, or read it as text with ${Co} (e.g. \`head -c 500\`).`,
      "Image extension but invalid magic bytes",
    );
  let a = i.split("/")[1] || "png",
    l;
  try {
    let f = await x0e(imageBuffer, s, a, r);
    l = createImageResponse(f.buffer, f.mediaType, s, f.dimensions);
  } catch (f) {
    if (f instanceof NU) throw f;
    (ke(f), (l = createImageResponse(imageBuffer, a, s)));
  }
  let c = l.file.dimensions,
    u = c?.displayWidth,
    d = c?.displayHeight,
    p;
  if (u && d) p = vDn(u, d);
  else {
    let f = RGe(imageBuffer);
    p = f ? vDn(f.width, f.height) : vDn(r.maxWidth, r.maxHeight);
  }
  if (p > t)
    try {
      let f = await p8i(imageBuffer, t, i);
      return {
        type: "image",
        file: {
          base64: f.base64,
          type: f.mediaType,
          originalSize: s,
        },
      };
    } catch (f) {
      T(`Image compression failed for ${filePath}: ${f instanceof Error ? f.message : String(f)}`, {
        level: "error",
      });
      try {
        let g = await (
          await lbe()
        )(imageBuffer)
          .resize(400, 400, {
            fit: "inside",
            withoutEnlargement: true,
          })
          .jpeg({
            quality: 20,
          })
          .toBuffer();
        return createImageResponse(g, "jpeg", s);
      } catch (m) {
        return (
          T(
            `Fallback image compression failed for ${filePath}: ${m instanceof Error ? m.message : String(m)}`,
            {
              level: "error",
            },
          ),
          createImageResponse(imageBuffer, a, s)
        );
      }
    }
  return l;
}
var CZn,
  Wze,
  IZn,
  hCf,
  _Cf,
  Qkl,
  ECf,
  ACf,
  Vg,
  Zkl,
  e0l,
  vCf = 512,
  mYt;
