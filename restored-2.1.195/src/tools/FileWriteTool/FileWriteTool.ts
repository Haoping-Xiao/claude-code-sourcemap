// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ppe
// matched 2.1.88 source: src/tools/FileWriteTool/FileWriteTool.ts
// class=modified  jaccard=0.3908  score=0.6302  fileCov=0.5071
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ppe = E(() => {
  kt();
  Xr();
  Xao();
  Un();
  Pqe();
  _pt();
  yde();
  C5e();
  ymo();
  rq();
  ii();
  j9t();
  Il();
  Lo();
  je();
  Dpe();
  fn();
  At();
  oc();
  Y4();
  a6n();
  PB();
  ik();
  ys();
  G9t();
  k0();
  Ao();
  Hu();
  Yf();
  u_();
  W9t();
  lf();
  nC();
  Ltl();
  ((wMe = require("path")),
    (Cef = ve(() =>
      H.strictObject({
        file_path: H.string().describe(
          "The absolute path to the file to write (must be absolute, not relative)",
        ),
        content: H.string().describe("The content to write to the file"),
      }),
    )),
    (Ief = ve(() =>
      H.object({
        type: H.enum(["create", "update"]).describe(
          "Whether a new file was created or an existing file was updated",
        ),
        filePath: H.string().describe("The path to the file that was written"),
        content: H.string().describe("The content that was written to the file"),
        structuredPatch: H.array(Ovo()).describe("Diff patch showing the changes"),
        originalFile: H.string()
          .nullable()
          .describe("The original file content before the write (null for new files)"),
        gitDiff: Nvo().optional(),
        userModified: H.boolean()
          .optional()
          .describe(
            "True when the user edited the proposed content in the permission dialog before accepting",
          ),
      }),
    )),
    (dA = ti({
      name: Wc,
      ruleContentField: "file_path",
      searchHint: "create or overwrite files",
      maxResultSizeChars: 1e5,
      strict: !0,
      async description() {
        return "Write a file to the local filesystem.";
      },
      userFacingName: wtl,
      getToolUseSummary: jvo,
      getActivityDescription(e) {
        let t = jvo(e);
        return t ? `Writing ${t}` : "Writing file";
      },
      async prompt({ model: e }) {
        return pKi(e);
      },
      renderToolUseMessage: Itl,
      isResultTruncated: Ctl,
      get inputSchema() {
        return Cef();
      },
      get outputSchema() {
        return Ief();
      },
      stripForStorage(e) {
        if (typeof e !== "object" || e === null) return e;
        if (e.type !== "update") return e;
        if (e.content === "" && (e.originalFile ?? "") === "") return e;
        return {
          ...e,
          content: "",
          originalFile: null,
        };
      },
      toAutoClassifierInput(e) {
        return `${e.file_path}: ${e.content}`;
      },
      getPath(e) {
        return e.file_path;
      },
      inputsEquivalent(e, t) {
        if (e.file_path !== t.file_path) return !1;
        if (e.content === t.content) return !0;
        return e.content.replace(/\n+$/, "") === t.content.replace(/\n+$/, "");
      },
      backfillObservableInput(e) {
        if (typeof e.file_path === "string") e.file_path = ds(e.file_path);
      },
      async preparePermissionMatcher({ file_path: e }) {
        return (t) => mAe(t, e);
      },
      async checkPermissions(e, t) {
        let n = ds(e.file_path);
        return (net(t.toolUseId, n, i_(n)), CMe(dA, e, Fr(t)));
      },
      renderToolUseRejectedMessage: xtl,
      renderToolUseErrorMessage: ktl,
      renderToolResultMessage: Rtl,
      extractSearchText() {
        return "";
      },
      async validateInput({ file_path: e, content: t }, n) {
        let r = ds(e),
          o = tyt(r, n);
        if (o)
          return {
            result: !1,
            message: o,
            errorCode: 7,
          };
        if (n.agentId && /^(REPORT|SUMMARY|FINDINGS|ANALYSIS).*\.md$/i.test(wMe.basename(r)))
          return (
            G("tengu_subagent_md_report_blocked", {
              contentBytes: Buffer.byteLength(t),
            }),
            {
              result: !1,
              message:
                "Subagents should return findings as text, not write report files. Include this content in your final response instead.",
              errorCode: 5,
            }
          );
        let s = L2n(r, t);
        if (s)
          return {
            result: !1,
            message: s,
            errorCode: 0,
          };
        if (Fv(r, Fr(n), "edit", "deny") !== null)
          return {
            result: !1,
            message: "File is in a directory that is denied by your permission settings.",
            errorCode: 1,
          };
        if (r.startsWith("\\\\") || r.startsWith("//"))
          return {
            result: !0,
          };
        let a = qt(),
          l;
        try {
          let d = await a.stat(r);
          if (((l = d.mtimeMs), iet(d.mode)))
            return {
              result: !1,
              message: set,
              errorCode: 6,
            };
        } catch (d) {
          if (wn(d))
            return {
              result: !0,
            };
          throw d;
        }
        let c = n.readFileState.get(r);
        if (!c || c.isPartialView) {
          let d = mo(nq(n)),
            p = XOt(d),
            f = !c && (at("tengu_velvet_mallet", !1) || at(Not("tengu_velvet_mallet", d), !1));
          if (
            (G("tengu_write_tool_not_read_hypothetical", {
              wouldHaveResult: c && Math.floor(l) > c.timestamp ? We("errorCode3") : We("success"),
              isPartialView: c?.isPartialView === !0,
              isFilePathAbsolute: wMe.isAbsolute(e),
              guardSkipped: f,
              modelBucket: $e(p),
            }),
            !f)
          )
            return {
              result: !1,
              message: "File has not been read yet. Read it first before writing to it.",
              errorCode: 2,
            };
          return {
            result: !0,
          };
        }
        if (Math.floor(l) > c.timestamp) {
          let d = (c.offset ?? 1) <= 1 && c.limit === void 0,
            p = !1;
          if (d) {
            let m = (await a.readFileBytes(r)).toString("utf8").replaceAll(
              `\r
`,
              `
`,
            );
            p = Uue(c, m);
          }
          if (!p)
            return {
              result: !1,
              message:
                "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
              errorCode: 3,
            };
        }
        return {
          result: !0,
        };
      },
      async call({ file_path: e, content: t }, n, r, o) {
        let {
            options: s,
            permissionLayers: i,
            readFileState: a,
            userModified: l,
            getFileHistoryState: c,
            applyFileHistoryOp: u,
            dynamicSkillDirTriggers: d,
          } = n,
          p = ds(e),
          f = wMe.dirname(p),
          m = ret(n, p),
          g = $t(),
          h = await iyt([p], g);
        if (h.length > 0) {
          if (d) {
            for (let A of h) if (!d.includes(A)) d.push(A);
          }
          ayt(h).catch(() => {});
        }
        if ((lyt([p], g), await tEe.beforeFileEdited(p), K_())) await eAe(c, u, p, o.uuid);
        let y = await iCe(p, async () => {
            let A;
            try {
              A = Bee(p);
            } catch (I) {
              if (wn(I)) A = null;
              else throw I;
            }
            if (A !== null) {
              let I = a.get(p);
              if (!I) {
                if (
                  !(
                    at("tengu_velvet_mallet", !1) ||
                    at(
                      Not(
                        "tengu_velvet_mallet",
                        mo(
                          nq({
                            options: s,
                            permissionLayers: i,
                          }),
                        ),
                      ),
                      !1,
                    )
                  )
                )
                  throw new O_e(h0n);
              } else if (Fee(p) > I.timestamp) {
                if (!((I.offset ?? 1) <= 1 && I.limit === void 0 && Uue(I, A.content)))
                  throw new O_e(y0n);
              }
            }
            let v = A?.encoding ?? "utf8",
              C = A?.content ?? null;
            ((t = MNn(p, t)), sCe(p, m), await qt().mkdir(f));
            let x = await aCe(p, t, v, "LF");
            return (
              a.set(p, {
                content: t,
                timestamp: x,
                offset: void 0,
                limit: void 0,
              }),
              C
            );
          }),
          b = IDe();
        if (b)
          (u2n(p),
            d2n(p),
            b.changeFile(p, t).catch((A) => {
              T(`LSP: Failed to notify server of file change for ${p}: ${A.message}`, {
                level: "error",
              });
            }),
            b.saveFile(p).catch((A) => {
              T(`LSP: Failed to notify server of file save for ${p}: ${A.message}`, {
                level: "error",
              });
            }));
        if ((ELe(p, y, t), p.endsWith(`${wMe.sep}CLAUDE.md`))) G("tengu_write_claudemd", {});
        let _;
        if (ut(process.env.CLAUDE_CODE_REMOTE)) {
          let A = Date.now(),
            v = await u6n(p);
          if (v) _ = v;
          G("tengu_tool_use_diff_computed", {
            isWriteTool: !0,
            durationMs: Date.now() - A,
            hasDiff: !!v,
          });
        }
        if (y) {
          let A = yMe({
              filePath: e,
              oldContent: y,
              newContent: t,
              convertTabs: !0,
            }),
            v = {
              type: "update",
              filePath: e,
              content: t,
              structuredPatch: A,
              originalFile: y,
              userModified: l ?? !1,
              ...(_ && {
                gitDiff: _,
              }),
            };
          return (
            $9t(A, o.message.model),
            Soe({
              operation: "write",
              tool: "FileWriteTool",
              filePath: p,
              type: "update",
            }),
            {
              data: v,
            }
          );
        }
        let S = {
          type: "create",
          filePath: e,
          content: t,
          structuredPatch: [],
          originalFile: null,
          userModified: l ?? !1,
          ...(_ && {
            gitDiff: _,
          }),
        };
        return (
          $9t([], o.message.model, t),
          Soe({
            operation: "write",
            tool: "FileWriteTool",
            filePath: p,
            type: "create",
          }),
          {
            data: S,
          }
        );
      },
      mapToolResultToToolResultBlockParam({ filePath: e, type: t, userModified: n }, r) {
        let o = n ? " The user modified your proposed content before accepting it." : "",
          s = n ? "" : E0n;
        switch (t) {
          case "create":
            return {
              tool_use_id: r,
              type: "tool_result",
              content: `File created successfully at: ${e}${o}${s}`,
            };
          case "update":
            return {
              tool_use_id: r,
              type: "tool_result",
              content: `The file ${e} has been updated successfully.${o}${s}`,
            };
        }
      },
    })));
});
function kef() {
  return {
    cachedExclusions: null,
  };
}
async function cyt(e) {
  let t = Ptl,
    n = PF.normalize(PF.join(kI(), "cache"));
  if (e && !Ref(e, n)) return [];
  if (t.cachedExclusions !== null) return t.cachedExclusions;
  try {
    let r = await Aue(
      ["--files", "--hidden", "--no-ignore", "--max-depth", "4", "--glob", xef],
      n,
      new AbortController().signal,
    );
    return (
      (t.cachedExclusions = r.map((o) => {
        let s = PF.dirname(o);
        return `!**/${(PF.isAbsolute(s) ? PF.relative(n, s) : s).replaceAll("\\", "/")}/**`;
      })),
      t.cachedExclusions
    );
  } catch {
    return ((t.cachedExclusions = []), t.cachedExclusions);
  }
}
function Mtl() {
  Ptl.cachedExclusions = null;
}
function Ref(e, t) {
  let n = Dtl(e),
    r = Dtl(t);
  return (
    n === r || n === PF.sep || r === PF.sep || n.startsWith(r + PF.sep) || r.startsWith(n + PF.sep)
  );
}
function Dtl(e) {
  return PF.normalize(e);
}
var PF,
  xef = ".orphaned_at",
  Ptl;
