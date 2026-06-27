// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $pe
// matched 2.1.88 source: src/tools/FileReadTool/FileReadTool.ts
// class=modified  jaccard=0.5043  score=0.8687  fileCov=0.5459
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $pe] deps: @modelcontextprotocol/sdk/dist/esm/types.js, utils/imageResizer.ts, constants/files.ts, services/analytics/growthbook.ts, utils/debug.ts, services/analytics/firstPartyEventLoggingExporter.ts, U1, utils/pdf.ts, skills/loadSkillsDir.ts, services/mockRateLimits.ts, Il, utils/fsOperations.ts, utils/debug.ts, main.tsx, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/nativeInstaller/download.ts, utils/gitDiff.ts, utils/profilerBase.ts, utils/fsOperations.ts, utils/imageResizer.ts, utils/sequential.ts, utils/teamMemoryOps.ts, utils/messages.ts, hooks/usePasteHandler.ts, components/permissions/NotebookEditPermissionRequest/NotebookEditToolDiff.tsx, utils/file.ts, tools/FileReadTool/UI.tsx, tools/FileReadTool/prompt.ts, utils/task/diskOutput.ts, utils/readFileInRange.ts, components/FallbackToolUseErrorMessage.tsx, tools/SyntheticOutputTool/SyntheticOutputTool.ts, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts, tools/PowerShellTool/PowerShellTool.tsx, ADn, utils/toolResultStorage.ts, tools/GlobTool/prompt.ts, tools/FileReadTool/FileReadTool.ts
((CZn = require("fs/promises")),
  (Wze = R(require("path"))),
  (IZn = require("path")),
  (hCf = new Set([
    "/dev/zero",
    "/dev/random",
    "/dev/urandom",
    "/dev/full",
    "/dev/stdin",
    "/dev/tty",
    "/dev/console",
    "/dev/stdout",
    "/dev/stderr",
    "/dev/fd/0",
    "/dev/fd/1",
    "/dev/fd/2",
  ])));
_Cf = String.fromCharCode(8239);
Qkl = new Set(["png", "jpg", "jpeg", "gif", "webp"]);
((ECf = ve(() =>
  H.strictObject({
    file_path: H.string().describe("The absolute path to the file to read"),
    offset: hF(H.number().int().nonnegative().optional()).describe(
      "The line number to start reading from. Only provide if the file is too large to read at once",
    ),
    limit: hF(H.number().int().positive().optional()).describe(
      "The number of lines to read. Only provide if the file is too large to read at once.",
    ),
    pages: H.string()
      .optional()
      .describe(
        `Page range for PDF files (e.g., "1-5", "3", "10-20"). Only applicable to PDF files. Maximum ${Gce} pages per request.`,
      ),
  }),
)),
  (ACf = ve(() => {
    let e = H.enum(["image/jpeg", "image/png", "image/gif", "image/webp"]);
    return H.discriminatedUnion("type", [
      H.object({
        type: H.literal("text"),
        file: H.object({
          filePath: H.string().describe("The path to the file that was read"),
          content: H.string().describe("The content of the file"),
          numLines: H.number().describe("Number of lines in the returned content"),
          startLine: H.number().describe("The starting line number"),
          totalLines: H.number().describe("Total number of lines in the file"),
          truncatedByTokenCap: H.boolean()
            .optional()
            .describe(
              "True when a whole-file read was auto-paginated because it exceeded the token cap (the content is a partial first page). A programmatic signal for internal consumers; survives output reconstruction (unlike the render-time banner).",
            ),
        }),
      }),
      H.object({
        type: H.literal("image"),
        file: H.object({
          base64: H.string().describe("Base64-encoded image data"),
          type: e.describe("The MIME type of the image"),
          originalSize: H.number().describe("Original file size in bytes"),
          dimensions: H.object({
            originalWidth: H.number().optional().describe("Original image width in pixels"),
            originalHeight: H.number().optional().describe("Original image height in pixels"),
            displayWidth: H.number()
              .optional()
              .describe("Displayed image width in pixels (after resizing)"),
            displayHeight: H.number()
              .optional()
              .describe("Displayed image height in pixels (after resizing)"),
          })
            .optional()
            .describe("Image dimension info for coordinate mapping"),
        }),
      }),
      H.object({
        type: H.literal("notebook"),
        file: H.object({
          filePath: H.string().describe("The path to the notebook file"),
          cells: H.array(H.any()).describe("Array of notebook cells"),
        }),
      }),
      H.object({
        type: H.literal("pdf"),
        file: H.object({
          filePath: H.string().describe("The path to the PDF file"),
          base64: H.string().describe("Base64-encoded PDF data"),
          originalSize: H.number().describe("Original file size in bytes"),
        }),
      }),
      H.object({
        type: H.literal("parts"),
        file: H.object({
          filePath: H.string().describe("The path to the PDF file"),
          originalSize: H.number().describe("Original file size in bytes"),
          count: H.number().describe("Number of pages extracted"),
          outputDir: H.string().describe("Directory containing extracted page images"),
        }),
      }),
      H.object({
        type: H.literal("file_unchanged"),
        file: H.object({
          filePath: H.string().describe("The path to the file"),
        }),
      }),
    ]);
  })),
  (Vg = ti({
    name: Ds,
    ruleContentField: "file_path",
    searchHint: "read files, images, PDFs, notebooks",
    maxResultSizeChars: 1 / 0,
    strict: true,
    async description() {
      return XNi;
    },
    async prompt({ model: e }) {
      let t = jSe(),
        n = t.includeMaxSizeInPrompt
          ? `. Files larger than ${Ra(t.maxSizeBytes)} will return an error; use offset and limit for larger files`
          : "",
        r = t.targetedRangeNudge ? ZNi : QNi;
      return eBi(e, HCf(), n, r);
    },
    get inputSchema() {
      return ECf();
    },
    coerceInput: Gkl,
    get outputSchema() {
      return ACf();
    },
    userFacingName: Kkl,
    getToolUseSummary: FMo,
    getActivityDescription(e) {
      let t = FMo(e);
      return t ? `Reading ${t}` : "Reading file";
    },
    isConcurrencySafe() {
      return true;
    },
    isReadOnly() {
      return true;
    },
    toAutoClassifierInput(e) {
      return e.file_path;
    },
    isSearchOrReadCommand() {
      return {
        isSearch: false,
        isRead: true,
      };
    },
    getPath({ file_path: e }) {
      return e || $t();
    },
    backfillObservableInput(e) {
      if (typeof e.file_path === "string") e.file_path = ds(e.file_path);
    },
    async preparePermissionMatcher({ file_path: e }) {
      return (t) => mAe(t, e);
    },
    async checkPermissions(e, t) {
      return ZJ(Vg, e, Fr(t));
    },
    renderToolUseMessage: Wkl,
    renderToolUseTag: qkl,
    renderToolResultMessage: Vkl,
    extractSearchText() {
      return "";
    },
    stripForStorage(e) {
      if (typeof e !== "object" || e === null) return e;
      switch (e.type) {
        case "text":
          if (e.file.content === "") return e;
          return {
            ...e,
            file: {
              ...e.file,
              content: "",
            },
          };
        case "image":
          if (e.file.base64 === "") return e;
          return {
            ...e,
            file: {
              ...e.file,
              base64: "",
            },
          };
        case "pdf":
          if (e.file.base64 === "") return e;
          return {
            ...e,
            file: {
              ...e.file,
              base64: "",
            },
          };
        case "notebook": {
          let { cells: t } = e.file;
          if (t.length === 0 || t[0] == null) return e;
          return {
            ...e,
            file: {
              ...e.file,
              cells: Array(t.length),
            },
          };
        }
        default:
          return e;
      }
    },
    renderToolUseErrorMessage: zkl,
    async validateInput({ file_path: e, pages: t }, n) {
      if (t !== void 0) {
        let a = rYr(t);
        if (!a)
          return {
            result: false,
            message: `Invalid pages parameter: "${t}". Use formats like "1-5", "3", or "10-20". Pages are 1-indexed.`,
            errorCode: 7,
          };
        if ((a.lastPage === 1 / 0 ? Gce + 1 : a.lastPage - a.firstPage + 1) > Gce)
          return {
            result: false,
            message: `Page range "${t}" exceeds maximum of ${Gce} pages per request. Please use a smaller range.`,
            errorCode: 8,
          };
      }
      let r = ds(e);
      if (Fv(r, Fr(n), "read", "deny") !== null)
        return {
          result: false,
          message: "File is in a directory that is denied by your permission settings.",
          errorCode: 1,
        };
      if (r.startsWith("\\\\") || r.startsWith("//"))
        return {
          result: true,
        };
      let i = Wze.extname(r).toLowerCase();
      if (mRt(r) && !pit(i) && !Qkl.has(i.slice(1)))
        return {
          result: false,
          message: `This tool cannot read binary files. The file appears to be a binary ${i} file. Please use appropriate tools for binary file analysis.`,
          errorCode: 4,
        };
      if (yCf(r))
        return {
          result: false,
          message: `Cannot read '${e}': this device file would block or produce infinite output.`,
          errorCode: 9,
        };
      return {
        result: true,
      };
    },
    async call({ file_path: e, offset: t = 1, limit: n = void 0, pages: r }, o, s, i) {
      let { readFileState: a, fileReadingLimits: l } = o,
        c = jSe(),
        u = l?.maxSizeBytes ?? c.maxSizeBytes,
        d = l?.maxTokens ?? c.maxTokens;
      if (l !== void 0)
        G("tengu_file_read_limits_override", {
          hasMaxTokens: l.maxTokens !== void 0,
          hasMaxSizeBytes: l.maxSizeBytes !== void 0,
        });
      let p = Wze.extname(e).toLowerCase().slice(1),
        f = ds(e),
        m = a.get(f);
      if (m)
        G("tengu_file_read_reread", {
          priorOp: We(m.offset === void 0 ? "edit_write" : "read"),
        });
      let h = at("tengu_read_dedup_killswitch", false) ? void 0 : a.get(f);
      if (h && !h.isPartialView && h.offset !== void 0) {
        if (h.offset === t && h.limit === n)
          try {
            if ((await FFe(f)) === h.timestamp) {
              let S = jte(f);
              return (
                G("tengu_file_read_dedup", {
                  ...(S !== void 0 && {
                    ext: S,
                  }),
                }),
                {
                  data: {
                    type: "file_unchanged",
                    file: {
                      filePath: e,
                    },
                  },
                }
              );
            }
          } catch {}
      }
      let y = $t();
      if (!Oe.CLAUDE_CODE_SIMPLE) {
        let b = await iyt([f], y);
        if (b.length > 0) {
          let _ = o.dynamicSkillDirTriggers;
          if (_) {
            for (let S of b) if (!_.includes(S)) _.push(S);
          }
          ayt(b).catch(() => {});
        }
        lyt([f], y);
      }
      try {
        return await Jkl(e, f, f, p, t, n, r, u, d, a, o, i?.message.id);
      } catch (b) {
        if (on(b) === "ENOENT") {
          let S = bCf(f);
          if (S)
            try {
              return await Jkl(e, f, S, p, t, n, r, u, d, a, o, i?.message.id);
            } catch (x) {
              if (!wn(x)) throw x;
            }
          let A = lCe(f),
            v = await pY(f),
            C = `File does not exist. ${$B} ${$t()}.`;
          if (v) C += ` Did you mean ${v}?`;
          else if (A) C += ` Did you mean ${A}?`;
          throw new mi(C, "File does not exist");
        }
        throw b;
      }
    },
    mapToolResultToToolResultBlockParam(e, t) {
      switch (e.type) {
        case "image":
          return {
            tool_use_id: t,
            type: "tool_result",
            content: [
              {
                type: "image",
                source: {
                  type: "base64",
                  data: e.file.base64,
                  media_type: e.file.type,
                },
              },
            ],
          };
        case "notebook":
          return Zel(e.file.cells, t);
        case "pdf":
          return {
            tool_use_id: t,
            type: "tool_result",
            content: `PDF file read: ${e.file.filePath} (${Ra(e.file.originalSize)})`,
          };
        case "parts":
          return {
            tool_use_id: t,
            type: "tool_result",
            content: `PDF pages extracted: ${e.file.count} page(s) from ${e.file.filePath} (${Ra(e.file.originalSize)})`,
          };
        case "file_unchanged":
          return {
            tool_use_id: t,
            type: "tool_result",
            content: YNi(),
          };
        case "text": {
          let n;
          if (e.file.content) {
            let r = e0l.get(e);
            if (r !== void 0) {
              if (mYt.size >= vCf) {
                let o = mYt.keys().next().value;
                if (o !== void 0) mYt.delete(o);
              }
              mYt.set(t, r);
            } else r = mYt.get(t);
            n =
              (r
                ? `<system-reminder>${r}</system-reminder>

`
                : "") +
              wCf(e) +
              TCf(e.file);
          } else
            n =
              e.file.totalLines === 0
                ? "<system-reminder>Warning: the file exists but the contents are empty.</system-reminder>"
                : `<system-reminder>Warning: the file exists but is shorter than the provided offset (${e.file.startLine}). The file has ${e.file.totalLines} lines.</system-reminder>`;
          return {
            tool_use_id: t,
            type: "tool_result",
            content: n,
          };
        }
      }
    },
  })));
((Zkl = new WeakMap()), (e0l = new WeakMap()), (mYt = new Map()));
function xZn(e, t) {
  let n = e ? t[e] : void 0,
    r = uE(n) ? n : void 0,
    o = !r && El(n) ? n : void 0;
  return {
    teammate: r,
    localAgent: o,
  };
}
function r0l({
  viewingAgentTaskId: e,
  tasks: t,
  transcripts: n,
  mainIsBusy: r,
  mainConversationId: o,
}) {
  let { teammate: s, localAgent: i } = xZn(e, t),
    a = s ?? i;
  if (!a || !e) {
    let c = n[ls()];
    return {
      task: void 0,
      isMain: true,
      isTeammate: false,
      messages: c?.messages ?? t0l,
      inProgressToolUseIDs: c?.inProgressToolUseIDs ?? n0l,
      conversationKey: o,
      isLoading: r,
    };
  }
  let l = n[e];
  return {
    task: a,
    isMain: false,
    isTeammate: !!s,
    messages: l?.messages ?? t0l,
    inProgressToolUseIDs: l?.inProgressToolUseIDs ?? n0l,
    conversationKey: e,
    isLoading: a.status === "running" && !a.isIdle,
  };
}
var t0l, n0l;
