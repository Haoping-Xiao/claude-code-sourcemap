// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ykl
// matched 2.1.88 source: src/tools/FileReadTool/FileReadTool.ts
// class=modified (alt of src/tools/FileReadTool/FileReadTool.ts)  jaccard=0.1201  score=0.306  fileCov=0.1651
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ykl] deps: co, E5, vMe, ql, Ye, oc, es, KI, bH
X_ = R(se(), 1);
function yCf(e) {
  if (hCf.has(e)) return true;
  if (e.startsWith("/proc/") && (e.endsWith("/fd/0") || e.endsWith("/fd/1") || e.endsWith("/fd/2")))
    return true;
  if (/^\/proc\/[^/]+\/(environ|cmdline|auxv|maps|mem|stat)$/.test(e)) return true;
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
function SCf(e) {
  let t = tr();
  if (!e.startsWith(t)) return null;
  let n = e.split(IZn.win32.sep).join(IZn.posix.sep);
  if (n.includes("/projects/") && n.endsWith(".jsonl")) return "session_transcript";
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
function wZn(e, t, n, r) {
  return {
    type: "image",
    file: {
      base64: e.toString("base64"),
      type: `image/${t}`,
      originalSize: n,
      dimensions: r,
    },
  };
}
function jMo(e) {
  return e.reason === "unknown"
    ? Error(e.message)
    : new mi(e.message, `PDF extraction failed (${e.reason})`);
}
async function Jkl(e, t, n, r, o, s, i, a, l, c, u, d) {
  if (r === "ipynb") {
    let L = await Qel(n),
      M = De(L),
      N = Buffer.byteLength(M);
    if (N > a) {
      let W = Su()
        ? `Use ${Co} with jq to read specific portions:
  cat "${e}" | jq '.cells[:20]' # First 20 cells
  cat "${e}" | jq '.cells[100:120]' # Cells 100-120
  cat "${e}" | jq '.cells | length' # Count total cells
  cat "${e}" | jq '.cells[] | select(.cell_type=="code") | .source' # All code sources`
        : `Use ${Ss} to read specific portions:
  Get-Content "${e}" | ConvertFrom-Json | Select-Object -ExpandProperty cells | Select-Object -First 20
  Get-Content "${e}" | ConvertFrom-Json | Select-Object -ExpandProperty cells | Select-Object -Skip 100 -First 20 # Cells 100-120
  (Get-Content "${e}" | ConvertFrom-Json).cells.Count # Count total cells
  Get-Content "${e}" | ConvertFrom-Json | Select-Object -ExpandProperty cells | Where-Object cell_type -eq code | Select-Object -ExpandProperty source`;
      throw Error(`Notebook content (${Ra(N)}) exceeds maximum allowed size (${Ra(a)}). ${W}`);
    }
    await Xkl(M, r, l);
    let B = await qt().stat(n);
    c.set(t, {
      content: M,
      timestamp: Math.floor(B.mtimeMs),
      offset: o,
      limit: s,
    });
    let $ = u.nestedMemoryAttachmentTriggers;
    if ($ && !$.includes(t)) $.push(t);
    let q = {
      type: "notebook",
      file: {
        filePath: e,
        cells: L,
      },
    };
    return (
      Soe({
        operation: "read",
        tool: "FileReadTool",
        filePath: t,
        content: M,
      }),
      {
        data: q,
      }
    );
  }
  let p = Gh(u.options.mainLoopModel),
    f = false;
  if (r === "")
    try {
      let L = qt();
      if ((await L.stat(n)).isFile()) {
        let M = await L.readFileBytes(n, 16);
        f = oX(M) !== null;
      }
    } catch {}
  if (Qkl.has(r) || f) {
    let L = await GMo(n, l, void 0, p),
      M = u.nestedMemoryAttachmentTriggers;
    if (M && !M.includes(t)) M.push(t);
    Soe({
      operation: "read",
      tool: "FileReadTool",
      filePath: t,
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
  if (pit(r)) {
    if (i) {
      let W = rYr(i),
        V = await NMo(n, W ?? void 0);
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
          filePath: t,
          content: `PDF pages ${i}`,
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
    let L = await TZn(n);
    if (L !== null && L > wDn)
      throw jMo({
        reason: "too_many_pages",
        message: `This PDF has ${L} pages, which is too many to read at once. Use the pages parameter to read specific page ranges (e.g., pages: "1-5"). Maximum ${Gce} pages per request.`,
      });
    let N = await qt().stat(n);
    if (!dit() || N.size > Q9i) {
      let W = await NMo(n);
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
    let $ = await jkl(n);
    if (!$.success) throw jMo($.error);
    let q = $.data;
    return (
      Soe({
        operation: "read",
        tool: "FileReadTool",
        filePath: t,
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
  let m = o === 0 ? 0 : o - 1,
    {
      content: g,
      lineCount: h,
      totalLines: y,
      totalBytes: b,
      readBytes: _,
      mtimeMs: S,
    } = await mSt(n, m, s, s === void 0 ? a : void 0, u.abortController.signal),
    A = g,
    v = h,
    C = s,
    x,
    I = (o ?? 1) <= 1 && s === void 0 && i === void 0;
  try {
    await Xkl(g, r, l);
  } catch (L) {
    if (L instanceof ade && I) {
      let M = g.split(`
`),
        N = Math.max(0.5, g.length / Math.max(1, L.tokenCount)),
        B = (Y) => Y.length / N,
        $ = Math.max(
          1,
          Math.min(M.length, Math.floor(((M.length * l) / Math.max(1, L.tokenCount)) * 0.85)),
        ),
        q = M.slice(0, $).join(`
`);
      for (let Y = 0; Y < 6; Y++) {
        if (B(q) <= l || $ <= 1) break;
        (($ = Math.max(1, Math.floor($ * 0.7))),
          (q = M.slice(0, $).join(`
`)));
      }
      let W = false;
      if (B(q) > l || q.trim() === "") {
        let Y = Math.max(1, Math.floor(l * N * 0.85));
        for (let K = 0; K < 6; K++) {
          if (((q = g.slice(0, Y)), B(q) <= l)) break;
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
              `showing lines 1-${v} of ${y} total (${L.tokenCount} tokens, cap ${l}). Call ${Ds} with offset=${v + 1} limit=${v} for the next page, or ${qc} to find a specific section. Do NOT answer from this page alone if the answer may be further in the file.]`
            : WNt +
              `showing the first ${q.length} of ${g.length} characters (${L.tokenCount} tokens, cap ${l}); this file has very long lines and cannot be paginated by line. Use ${qc} to find a specific section, or ${Ds} with offset/limit to page through it. Do NOT answer from this excerpt alone if the answer may be elsewhere in the file.]`));
    } else throw L;
  }
  c.set(t, {
    content: A,
    timestamp: Math.floor(S),
    offset: o,
    limit: C,
    ...(x !== void 0 && {
      isPartialView: true,
    }),
  });
  let k = u.nestedMemoryAttachmentTriggers;
  if (k && !k.includes(t)) k.push(t);
  let D = {
    type: "text",
    file: {
      filePath: e,
      content: A,
      numLines: v,
      startLine: x !== void 0 ? Math.max(1, o) : o,
      totalLines: y,
      ...(x !== void 0 && {
        truncatedByTokenCap: true,
      }),
    },
  };
  if (Sze(t)) Zkl.set(D, S);
  if (x !== void 0) e0l.set(D, x);
  Soe({
    operation: "read",
    tool: "FileReadTool",
    filePath: t,
    content: A,
  });
  let P = SCf(t),
    O = jte(t);
  return (
    G("tengu_session_file_read", {
      totalLines: y,
      readLines: v,
      totalBytes: b,
      readBytes: x !== void 0 ? Buffer.byteLength(A, "utf8") : _,
      offset: o,
      ...(s !== void 0 && {
        limit: s,
      }),
      ...(O !== void 0 && {
        ext: O,
      }),
      ...(d !== void 0 && {
        messageID: Hr(d),
      }),
      is_session_transcript: P === "session_transcript",
    }),
    {
      data: D,
    }
  );
}
async function GMo(e, t = jSe().maxTokens, n, r) {
  let o = await qt().readFileBytes(e, n),
    s = o.length;
  if (s === 0) throw new mi(`Image file is empty: ${e}`, "Image file is empty");
  let i = oX(o);
  if (i === null)
    throw new mi(
      `File has an image extension but its content is not a valid PNG/JPEG/GIF/WebP. Detected: ${K9i(o)}. This usually means a download saved an error/login page instead of the image. Use \`file "${e}"\` to confirm, or read it as text with ${Co} (e.g. \`head -c 500\`).`,
      "Image extension but invalid magic bytes",
    );
  let a = i.split("/")[1] || "png",
    l;
  try {
    let f = await x0e(o, s, a, r);
    l = wZn(f.buffer, f.mediaType, s, f.dimensions);
  } catch (f) {
    if (f instanceof NU) throw f;
    (ke(f), (l = wZn(o, a, s)));
  }
  let c = l.file.dimensions,
    u = c?.displayWidth,
    d = c?.displayHeight,
    p;
  if (u && d) p = vDn(u, d);
  else {
    let f = RGe(o);
    p = f ? vDn(f.width, f.height) : vDn(r.maxWidth, r.maxHeight);
  }
  if (p > t)
    try {
      let f = await p8i(o, t, i);
      return {
        type: "image",
        file: {
          base64: f.base64,
          type: f.mediaType,
          originalSize: s,
        },
      };
    } catch (f) {
      T(`Image compression failed for ${e}: ${f instanceof Error ? f.message : String(f)}`, {
        level: "error",
      });
      try {
        let g = await (
          await lbe()
        )(o)
          .resize(400, 400, {
            fit: "inside",
            withoutEnlargement: true,
          })
          .jpeg({
            quality: 20,
          })
          .toBuffer();
        return wZn(g, "jpeg", s);
      } catch (m) {
        return (
          T(
            `Fallback image compression failed for ${e}: ${m instanceof Error ? m.message : String(m)}`,
            {
              level: "error",
            },
          ),
          wZn(o, a, s)
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
