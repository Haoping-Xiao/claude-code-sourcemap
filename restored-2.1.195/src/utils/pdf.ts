// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q8
// matched 2.1.88 source: src/utils/pdf.ts
// class=modified  jaccard=0.4127  score=0.5579  fileCov=0.6133
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function pCf(e) {
  let { firstPage: t, lastPage: n } = e ?? {};
  if (t === void 0) return "page range";
  if (n === void 0 || n === 1 / 0) return `pages ${t}-`;
  if (t === n) return `page ${t}`;
  return `pages ${t}-${n}`;
}
async function readPDF(filePath) {
  try {
    let r = (await qt().stat(filePath)).size;
    if (r === 0)
      return {
        success: false,
        error: {
          reason: "empty",
          message: `PDF file is empty: ${filePath}`,
        },
      };
    if (r > yUt)
      return {
        success: false,
        error: {
          reason: "too_large",
          message: `PDF file exceeds maximum allowed size of ${Ra(yUt)}.`,
        },
      };
    let o = await lOe.readFile(filePath);
    if (!o.subarray(0, 5).toString("ascii").startsWith("%PDF-"))
      return {
        success: false,
        error: {
          reason: "corrupted",
          message: `File is not a valid PDF (missing %PDF- header): ${filePath}`,
        },
      };
    let i = o.toString("base64");
    return {
      success: true,
      data: {
        type: "pdf",
        file: {
          filePath: filePath,
          base64: i,
          originalSize: r,
        },
      },
    };
  } catch (t) {
    if (Vo(t)) throw t;
    return {
      success: false,
      error: {
        reason: "unknown",
        message: be(t),
      },
    };
  }
}
async function getPDFPageCount(filePath) {
  let { code: t, stdout: n } = await $n("pdfinfo", [filePath], {
    timeout: 10000 /* 1e4 */,
    useCwd: false,
  });
  if (t !== 0) return null;
  let r = /^Pages:\s+(\d+)/m.exec(n);
  if (!r) return null;
  let o = parseInt(r[1], 10);
  return isNaN(o) ? null : o;
}
function fCf(e) {
  let t = e === "win32" ? 0 : ($Mo.constants.O_NONBLOCK ?? 0);
  return $Mo.constants.O_RDONLY | t;
}
async function isPdftoppmAvailable() {
  if (HZn !== void 0) return HZn;
  let { code: e, stderr: t } = await $n("pdftoppm", ["-v"], {
    timeout: 5000,
    useCwd: false,
  });
  return ((HZn = e === 0 || t.length > 0), HZn);
}
async function extractPDFPages(filePath, options) {
  try {
    let n = await lOe.open(filePath, fCf("linux")),
      r = await n.stat().finally(() => n.close());
    if (!r.isFile())
      return {
        success: false,
        error: {
          reason: "corrupted",
          message: `Path is not a regular file: ${filePath}`,
        },
      };
    let o = r.size;
    if (o === 0)
      return {
        success: false,
        error: {
          reason: "empty",
          message: `PDF file is empty: ${filePath}`,
        },
      };
    if (o > FQr)
      return {
        success: false,
        error: {
          reason: "too_large",
          message: `PDF file exceeds maximum allowed size for text extraction (${Ra(FQr)}).`,
        },
      };
    if (!(await isPdftoppmAvailable()))
      return {
        success: false,
        error: {
          reason: "unavailable",
          message:
            "pdftoppm is not installed. Install poppler-utils (e.g. `brew install poppler` or `apt-get install poppler-utils`) to enable PDF page rendering.",
        },
      };
    let i = Fkl.randomUUID(),
      a = OMo.join(lde(), `pdf-${i}`);
    await lOe.mkdir(a, {
      recursive: true,
    });
    let l = OMo.join(a, "page"),
      c = ["-jpeg", "-r", "100"];
    if (options?.firstPage) c.push("-f", String(options.firstPage));
    if (options?.lastPage && options.lastPage !== 1 / 0) c.push("-l", String(options.lastPage));
    c.push(filePath, l);
    let { code: u, stderr: d } = await $n("pdftoppm", c, {
      timeout: 120000,
      useCwd: false,
    });
    if (u !== 0) {
      if (/password/i.test(d))
        return {
          success: false,
          error: {
            reason: "password_protected",
            message: "PDF is password-protected. Please provide an unprotected version.",
          },
        };
      let h = /Wrong page range given.*last page \((\d+)\)/i.exec(d);
      if (h && Number(h[1]) >= 1) {
        let S = Number(h[1]),
          A = Math.min(S, Gce);
        return {
          success: false,
          error: {
            reason: "page_out_of_range",
            message: `Requested ${pCf(options)} is outside the document (PDF has ${S} ${bn(S, "page")}). Use a range within 1-${S}, maximum ${Gce} pages per request (e.g. pages: "1-${A}").`,
          },
        };
      }
      let y = /Syntax Error(?: \(\d+\))?: Couldn't (?:find trailer dictionary|read xref table)/i;
      if (/damaged|corrupt|invalid/i.test(d) || y.test(d))
        return {
          success: false,
          error: {
            reason: "corrupted",
            message: "PDF file is corrupted or invalid.",
          },
        };
      let b = d.split(`
`),
        _ = b[0] ?? "";
      if (
        ((_.startsWith("I/O Error: ") && _.includes(`'${filePath}'`)) ||
          _.startsWith("Permission Error: ")) &&
        !b.some((S) => /^(Command Line Error|Internal Error)(?: \(\d+\))?: /.test(S))
      )
        return {
          success: false,
          error: {
            reason: "pdftoppm_input_error",
            message: `Could not render PDF: ${_}`,
          },
        };
      return {
        success: false,
        error: {
          reason: "unknown",
          message: `pdftoppm failed: ${d}`,
        },
      };
    }
    let f = (await lOe.readdir(a)).filter((h) => h.endsWith(".jpg")).sort();
    if (f.length === 0)
      return {
        success: false,
        error: {
          reason: "corrupted",
          message: "pdftoppm produced no output pages. The PDF may be invalid.",
        },
      };
    let g = f.length;
    return {
      success: true,
      data: {
        type: "parts",
        file: {
          filePath: filePath,
          originalSize: o,
          outputDir: a,
          count: g,
        },
      },
    };
  } catch (n) {
    if (Vo(n) && n.path === filePath) throw n;
    return {
      success: false,
      error: {
        reason: "unknown",
        message: be(n),
      },
    };
  }
}
var Fkl, $Mo, lOe, OMo, HZn;
