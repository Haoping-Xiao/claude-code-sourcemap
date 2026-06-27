// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xMe
// matched 2.1.88 source: src/tools/FileEditTool/FileEditTool.ts
// class=modified  jaccard=0.4645  score=0.7025  fileCov=0.5783
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var xMe = E(() => {
  kt();
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
  wr();
  fn();
  At();
  oc();
  Y4();
  a6n();
  PB();
  ik();
  es();
  ys();
  G9t();
  k0();
  Ao();
  Hu();
  dyt();
  Yf();
  rvl();
  lf();
  u_();
  ivl();
  W9t();
  hDo();
  bMe();
  ((oHe = require("path")),
    (xH = ti({
      name: ka,
      ruleContentField: "file_path",
      searchHint: "modify file contents in place",
      maxResultSizeChars: 100000 /* 1e5 */,
      strict: true,
      async description() {
        return "A tool for editing files";
      },
      async prompt({ model: e }) {
        return svl(e);
      },
      userFacingName: TJn,
      getToolUseSummary: gDo,
      getActivityDescription(e) {
        let t = gDo(e);
        return t ? `Editing ${t}` : "Editing file";
      },
      get inputSchema() {
        return d6n();
      },
      get outputSchema() {
        return Bvo();
      },
      coerceInput: ovl,
      stripForStorage(e) {
        if (typeof e !== "object" || e === null) return e;
        if ((e.originalFile ?? "") === "") return e;
        return {
          ...e,
          originalFile: "",
        };
      },
      toAutoClassifierInput(e) {
        return `${e.file_path}: ${e.new_string}`;
      },
      getPath(e) {
        return e.file_path;
      },
      backfillObservableInput(e) {
        if (typeof e.file_path === "string") e.file_path = ds(e.file_path);
      },
      async preparePermissionMatcher({ file_path: e }) {
        return (t) => mAe(t, e);
      },
      async checkPermissions(e, t) {
        let n = ds(e.file_path);
        return (net(t.toolUseId, n, i_(n)), CMe(xH, e, Fr(t)));
      },
      renderToolUseMessage: avl,
      renderToolResultMessage: lvl,
      renderToolUseRejectedMessage: cvl,
      renderToolUseErrorMessage: uvl,
      async validateInput(e, t) {
        let { file_path: n, old_string: r, new_string: o, replace_all: s = false } = e,
          i = ds(n),
          a = tyt(i, t);
        if (a)
          return {
            result: false,
            message: a,
            errorCode: 12,
          };
        let l = L2n(i, o);
        if (l)
          return {
            result: false,
            message: l,
            errorCode: 0,
          };
        if (r === o)
          return {
            result: false,
            behavior: "ask",
            message: "No changes to make: old_string and new_string are exactly the same.",
            errorCode: 1,
          };
        if (Fv(i, Fr(t), "edit", "deny") !== null)
          return {
            result: false,
            behavior: "ask",
            message: "File is in a directory that is denied by your permission settings.",
            errorCode: 2,
          };
        if (i.startsWith("\\\\") || i.startsWith("//"))
          return {
            result: true,
          };
        let u = qt();
        try {
          let { size: y, mode: b } = await u.stat(i);
          if (y > dvl)
            return {
              result: false,
              behavior: "ask",
              message: `File is too large to edit (${Ra(y)}). Maximum editable file size is ${Ra(dvl)}.`,
              errorCode: 10,
            };
          if (iet(b))
            return {
              result: false,
              behavior: "ask",
              message: set,
              errorCode: 11,
            };
        } catch (y) {
          if (!wn(y)) throw y;
        }
        let d;
        try {
          let y = await u.readFileBytes(i),
            b = y.length >= 2 && y[0] === 255 && y[1] === 254 ? "utf16le" : "utf8";
          d = y.toString(b).replaceAll(
            `\r
`,
            `
`,
          );
        } catch (y) {
          if (wn(y)) d = null;
          else throw y;
        }
        if (d === null) {
          if (r === "")
            return {
              result: true,
            };
          let y = lCe(i),
            b = await pY(i),
            _ = `File does not exist. ${$B} ${$t()}.`;
          if (b) _ += ` Did you mean ${b}?`;
          else if (y) _ += ` Did you mean ${y}?`;
          return {
            result: false,
            behavior: "ask",
            message: _,
            errorCode: 4,
          };
        }
        if (r === "") {
          if (d.trim() !== "")
            return {
              result: false,
              behavior: "ask",
              message: "Cannot create new file - file already exists.",
              errorCode: 3,
            };
          return {
            result: true,
          };
        }
        if (i.endsWith(".ipynb"))
          return {
            result: false,
            behavior: "ask",
            message: `File is a Jupyter Notebook. Use the ${RI} to edit this file.`,
            errorCode: 5,
          };
        let p = t.readFileState.get(i);
        if (!p || p.isPartialView) {
          let y = mo(nq(t)),
            b = XOt(y),
            _ = at("tengu_velvet_hammer", false) || at(Not("tengu_velvet_hammer", y), false);
          if (
            (G("tengu_edit_tool_not_read_hypothetical", {
              wouldHaveResult: tEf(d, r, s),
              isPartialView: p?.isPartialView === true,
              isFilePathAbsolute: oHe.isAbsolute(n),
              guardSkipped: _,
              modelBucket: $e(b),
            }),
            !_)
          )
            return {
              result: false,
              behavior: "ask",
              message: "File has not been read yet. Read it first before writing to it.",
              meta: {
                isFilePathAbsolute: String(oHe.isAbsolute(n)),
              },
              errorCode: 6,
            };
        }
        if (p) {
          if (Fee(i) > p.timestamp)
            if ((p.offset ?? 1) <= 1 && p.limit === void 0 && Uue(p, d));
            else {
              let _ = yDo(d, r, s),
                S = pvl(_);
              if (
                (G("tengu_edit_tool_stale_read", {
                  wouldHaveResult: fvl(_),
                  recovered: S,
                }),
                !S)
              )
                return {
                  result: false,
                  behavior: "ask",
                  message:
                    "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
                  errorCode: 7,
                };
            }
        }
        let f = d,
          m = _Me(f, r);
        if (!m) {
          let y = wel(r)
            ? `
(note: Edit also tried swapping \\uXXXX escapes and their characters; neither form matched, so the mismatch is likely elsewhere in old_string. Re-read the file and copy the exact surrounding text.)`
            : "";
          return {
            result: false,
            behavior: "ask",
            message: `String to replace not found in file.
String: ${r}${y}`,
            meta: {
              isFilePathAbsolute: String(oHe.isAbsolute(n)),
            },
            errorCode: 8,
          };
        }
        let g = f.split(m).length - 1;
        if (g > 1 && !s)
          return {
            result: false,
            behavior: "ask",
            message: `Found ${g} matches of the string to replace, but replace_all is false. To replace all occurrences, set replace_all to true. To replace only one occurrence, please provide more context to uniquely identify the instance.
String: ${r}`,
            meta: {
              isFilePathAbsolute: String(oHe.isAbsolute(n)),
              actualOldString: m,
            },
            errorCode: 9,
          };
        let h = nvl(i, f, () => (s ? f.replaceAll(m, o) : f.replace(m, o)));
        if (h !== null) return h;
        return {
          result: true,
          meta: {
            actualOldString: m,
          },
        };
      },
      inputsEquivalent(e, t) {
        return Pel(
          {
            file_path: e.file_path,
            edits: [
              {
                old_string: e.old_string,
                new_string: e.new_string,
                replace_all: e.replace_all ?? false,
              },
            ],
          },
          {
            file_path: t.file_path,
            edits: [
              {
                old_string: t.old_string,
                new_string: t.new_string,
                replace_all: t.replace_all ?? false,
              },
            ],
          },
        );
      },
      async call(e, t, n, r) {
        let {
            options: o,
            permissionLayers: s,
            readFileState: i,
            userModified: a,
            getFileHistoryState: l,
            applyFileHistoryOp: c,
            dynamicSkillDirTriggers: u,
          } = t,
          { file_path: d, old_string: p, new_string: f, replace_all: m = false } = e,
          g = qt(),
          h = ds(d),
          y = ret(t, h),
          b = $t();
        if (!Oe.CLAUDE_CODE_SIMPLE) {
          let D = await iyt([h], b);
          if (D.length > 0) {
            if (u) {
              for (let P of D) if (!u.includes(P)) u.push(P);
            }
            ayt(D).catch(() => {});
          }
          lyt([h], b);
        }
        if ((await tEe.beforeFileEdited(h), K_())) await eAe(l, c, h, r.uuid);
        let {
            originalFileContents: _,
            actualOldString: S,
            updatedFile: A,
            patch: v,
            staleRecovered: C,
          } = await iCe(h, async () => {
            let { content: D, fileExists: P, encoding: O, lineEndings: L } = ZSf(h),
              M =
                P &&
                eEf({
                  absoluteFilePath: h,
                  fileContents: D,
                  lastRead: i.get(h),
                  oldString: p,
                  replaceAll: m,
                  model: mo(
                    nq({
                      options: o,
                      permissionLayers: s,
                    }),
                  ),
                }),
              N = _Me(D, p) || p,
              B = Cel(p, N, Yht(p, N, f)),
              $ = O9t({
                filePath: h,
                fileContents: D,
                oldString: N,
                newString: B,
                replaceAll: m,
              }),
              q = MNn(h, $.updatedFile),
              W =
                q === $.updatedFile
                  ? $.patch
                  : yMe({
                      filePath: h,
                      oldContent: D,
                      newContent: q,
                      convertTabs: true,
                    });
            (sCe(h, y), await g.mkdir(oHe.dirname(h)));
            let V = await aCe(h, q, O, L);
            return (
              i.set(h, {
                content: q,
                timestamp: V,
                offset: void 0,
                limit: void 0,
              }),
              {
                originalFileContents: D,
                actualOldString: N,
                updatedFile: q,
                patch: W,
                staleRecovered: M,
              }
            );
          }),
          x = IDe();
        if (x)
          (u2n(h),
            d2n(h),
            x.changeFile(h, A).catch((D) => {
              T(`LSP: Failed to notify server of file change for ${h}: ${D.message}`, {
                level: "error",
              });
            }),
            x.saveFile(h).catch((D) => {
              T(`LSP: Failed to notify server of file save for ${h}: ${D.message}`, {
                level: "error",
              });
            }));
        if ((ELe(h, _, A), h.endsWith(`${oHe.sep}CLAUDE.md`))) G("tengu_write_claudemd", {});
        ($9t(v, r.message.model),
          Soe({
            operation: "edit",
            tool: "FileEditTool",
            filePath: h,
          }),
          G("tengu_edit_string_lengths", {
            oldStringBytes: Buffer.byteLength(p, "utf8"),
            newStringBytes: Buffer.byteLength(f, "utf8"),
            replaceAll: m,
          }));
        let I;
        if (ut(process.env.CLAUDE_CODE_REMOTE)) {
          let D = Date.now(),
            P = await u6n(h);
          if (P) I = P;
          G("tengu_tool_use_diff_computed", {
            isEditTool: true,
            durationMs: Date.now() - D,
            hasDiff: !!P,
          });
        }
        return {
          data: {
            filePath: d,
            oldString: S,
            newString: f,
            originalFile: _,
            structuredPatch: v,
            userModified: a ?? false,
            replaceAll: m,
            ...(C && {
              staleRecovered: true,
            }),
            ...(I && {
              gitDiff: I,
            }),
          },
        };
      },
      mapToolResultToToolResultBlockParam(e, t) {
        let { filePath: n, userModified: r, replaceAll: o, staleRecovered: s } = e,
          i = r ? ".  The user modified your proposed changes before accepting them. " : "",
          a = s
            ? " (note: the file had been modified on disk since you last read it \u2014 the edit applied cleanly, but the file contains other changes not in your context. Read it before edits that depend on surrounding content.)"
            : r
              ? ""
              : E0n;
        if (o)
          return {
            tool_use_id: t,
            type: "tool_result",
            content: `The file ${n} has been updated${i}. All occurrences were successfully replaced.${a}`,
          };
        return {
          tool_use_id: t,
          type: "tool_result",
          content: `The file ${n} has been updated successfully${i}.${a}`,
        };
      },
    })));
});
function xAe() {
  if (_Do) return _Do;
  let { PowerShellTool: e } = (Jzt(), ro(Xzt));
  return (_Do = [Vg, dA, xH, Z4, L$, cl, e, oq]);
}
var _Do;
