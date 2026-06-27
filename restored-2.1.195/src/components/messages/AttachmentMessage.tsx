// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qzn
// matched 2.1.88 source: src/components/messages/AttachmentMessage.tsx
// class=modified  jaccard=0.3697  score=0.501  fileCov=0.5853
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Qzn] deps: np, sA, co, Lyt, ql, Ail, ZCo, xil, Lil, Mil, Nil, eIo, Zil, nal, Gzn
((dal = R(lt(), 1)), (n3 = R(se(), 1)));
function AttachmentMessage(e) {
  let t = t_t.c(222),
    { attachment: n, addMargin: r, verbose: o, isTranscriptMode: s } = e;
  if (el() && n.type === "teammate_mailbox") {
    let i = n.messages,
      a,
      l,
      c,
      u;
    if (t[0] !== n.messages || t[1] !== s || t[2] !== o) {
      u = Symbol.for("react.early_return_sentinel");
      e: {
        let p = i.filter(Esf);
        if (p.length === 0) {
          u = null;
          break e;
        }
        let f = p.map(Ssf),
          m = o || s;
        ((a = U), (l = "column"), (c = m ? f.map(bsf) : YCo(f).map(_sf)));
      }
      ((t[0] = n.messages), (t[1] = s), (t[2] = o), (t[3] = a), (t[4] = l), (t[5] = c), (t[6] = u));
    } else ((a = t[3]), (l = t[4]), (c = t[5]), (u = t[6]));
    if (u !== Symbol.for("react.early_return_sentinel")) return u;
    let d;
    if (t[7] !== a || t[8] !== l || t[9] !== c)
      ((d = Ts.jsx(a, {
        flexDirection: l,
        children: c,
      })),
        (t[7] = a),
        (t[8] = l),
        (t[9] = c),
        (t[10] = d));
    else d = t[10];
    return d;
  }
  switch (n.type) {
    case "directory": {
      let i = n.displayPath + Zzn.sep,
        a;
      if (t[11] !== i)
        ((a = Ts.jsxs(tw, {
          children: [
            "Listed directory ",
            Ts.jsx(w, {
              bold: true,
              children: i,
            }),
          ],
        })),
          (t[11] = i),
          (t[12] = a));
      else a = t[12];
      return a;
    }
    case "file":
    case "already_read_file": {
      if (n.content.type === "notebook") {
        let c;
        if (t[13] !== n.displayPath)
          ((c = Ts.jsx(w, {
            bold: true,
            children: n.displayPath,
          })),
            (t[13] = n.displayPath),
            (t[14] = c));
        else c = t[14];
        let u;
        if (t[15] !== n.content.file.cells.length || t[16] !== c)
          ((u = Ts.jsxs(tw, {
            children: ["Read ", c, " (", n.content.file.cells.length, " cells)"],
          })),
            (t[15] = n.content.file.cells.length),
            (t[16] = c),
            (t[17] = u));
        else u = t[17];
        return u;
      }
      if (n.content.type === "file_unchanged") {
        let c;
        if (t[18] !== n.displayPath)
          ((c = Ts.jsxs(tw, {
            children: [
              "Read ",
              Ts.jsx(w, {
                bold: true,
                children: n.displayPath,
              }),
              " (unchanged)",
            ],
          })),
            (t[18] = n.displayPath),
            (t[19] = c));
        else c = t[19];
        return c;
      }
      let i;
      if (t[20] !== n.displayPath)
        ((i = Ts.jsx(w, {
          bold: true,
          children: n.displayPath,
        })),
          (t[20] = n.displayPath),
          (t[21] = i));
      else i = t[21];
      let a;
      if (
        t[22] !== n.content.file.numLines ||
        t[23] !== n.content.file.originalSize ||
        t[24] !== n.content.type ||
        t[25] !== n.truncated
      )
        ((a =
          n.content.type === "text"
            ? `${n.content.file.numLines}${n.truncated ? "+" : ""} lines`
            : Ra(n.content.file.originalSize)),
          (t[22] = n.content.file.numLines),
          (t[23] = n.content.file.originalSize),
          (t[24] = n.content.type),
          (t[25] = n.truncated),
          (t[26] = a));
      else a = t[26];
      let l;
      if (t[27] !== i || t[28] !== a)
        ((l = Ts.jsxs(tw, {
          children: ["Read ", i, " (", a, ")"],
        })),
          (t[27] = i),
          (t[28] = a),
          (t[29] = l));
      else l = t[29];
      return l;
    }
    case "compact_file_reference": {
      let i;
      if (t[30] !== n.displayPath)
        ((i = Ts.jsxs(tw, {
          children: [
            "Referenced file ",
            Ts.jsx(w, {
              bold: true,
              children: n.displayPath,
            }),
          ],
        })),
          (t[30] = n.displayPath),
          (t[31] = i));
      else i = t[31];
      return i;
    }
    case "pdf_reference": {
      let i;
      if (t[32] !== n.displayPath)
        ((i = Ts.jsx(w, {
          bold: true,
          children: n.displayPath,
        })),
          (t[32] = n.displayPath),
          (t[33] = i));
      else i = t[33];
      let a;
      if (t[34] !== n.pageCount || t[35] !== i)
        ((a = Ts.jsxs(tw, {
          children: ["Referenced PDF ", i, " (", n.pageCount, " pages)"],
        })),
          (t[34] = n.pageCount),
          (t[35] = i),
          (t[36] = a));
      else a = t[36];
      return a;
    }
    case "selected_lines_in_ide": {
      let i;
      if (t[37] === Symbol.for("react.memo_cache_sentinel"))
        ((i = Ts.jsx(w, {
          "aria-hidden": true,
          children: "\u29C9 ",
        })),
          (t[37] = i));
      else i = t[37];
      let a = n.lineEnd - n.lineStart + 1,
        l;
      if (t[38] !== a)
        ((l = Ts.jsx(w, {
          bold: true,
          children: a,
        })),
          (t[38] = a),
          (t[39] = l));
      else l = t[39];
      let c;
      if (t[40] !== n.displayPath)
        ((c = Ts.jsx(w, {
          bold: true,
          children: n.displayPath,
        })),
          (t[40] = n.displayPath),
          (t[41] = c));
      else c = t[41];
      let u;
      if (t[42] !== n.ideName || t[43] !== l || t[44] !== c)
        ((u = Ts.jsxs(tw, {
          children: [i, "Selected", " ", l, " ", "lines from ", c, " in", " ", n.ideName],
        })),
          (t[42] = n.ideName),
          (t[43] = l),
          (t[44] = c),
          (t[45] = u));
      else u = t[45];
      return u;
    }
    case "selected_lines_in_diff": {
      let i;
      if (t[46] === Symbol.for("react.memo_cache_sentinel"))
        ((i = Ts.jsx(w, {
          "aria-hidden": true,
          children: "\u29C9 ",
        })),
          (t[46] = i));
      else i = t[46];
      let a;
      if (t[47] !== n.lineCount)
        ((a = Ts.jsx(w, {
          bold: true,
          children: n.lineCount,
        })),
          (t[47] = n.lineCount),
          (t[48] = a));
      else a = t[48];
      let l;
      if (t[49] !== n.lineCount)
        ((l = bn(n.lineCount, "line")), (t[49] = n.lineCount), (t[50] = l));
      else l = t[50];
      let c;
      if (t[51] !== a || t[52] !== l)
        ((c = Ts.jsxs(tw, {
          children: [i, "Selected", " ", a, " ", l, " from diff view"],
        })),
          (t[51] = a),
          (t[52] = l),
          (t[53] = c));
      else c = t[53];
      return c;
    }
    case "nested_memory": {
      let i;
      if (t[54] !== n.displayPath)
        ((i = Ts.jsxs(tw, {
          children: [
            "Loaded ",
            Ts.jsx(w, {
              bold: true,
              children: n.displayPath,
            }),
          ],
        })),
          (t[54] = n.displayPath),
          (t[55] = i));
      else i = t[55];
      return i;
    }
    case "relevant_memories": {
      let i = r ? 1 : 0,
        a;
      if (t[56] === Symbol.for("react.memo_cache_sentinel"))
        ((a = Ts.jsx(U, {
          minWidth: 2,
        })),
          (t[56] = a));
      else a = t[56];
      let l;
      if (t[57] !== n.memories.length)
        ((l = Ts.jsx(w, {
          bold: true,
          children: n.memories.length,
        })),
          (t[57] = n.memories.length),
          (t[58] = l));
      else l = t[58];
      let c = n.memories.length === 1 ? "memory" : "memories",
        u;
      if (t[59] !== s)
        ((u =
          !s &&
          Ts.jsxs(Ts.Fragment, {
            children: [" ", Ts.jsx(NI, {})],
          })),
          (t[59] = s),
          (t[60] = u));
      else u = t[60];
      let d;
      if (t[61] !== l || t[62] !== c || t[63] !== u)
        ((d = Ts.jsxs(U, {
          flexDirection: "row",
          children: [
            a,
            Ts.jsxs(w, {
              dimColor: true,
              children: ["Recalled ", l, " ", c, u],
            }),
          ],
        })),
          (t[61] = l),
          (t[62] = c),
          (t[63] = u),
          (t[64] = d));
      else d = t[64];
      let p;
      if (t[65] !== n.memories || t[66] !== s || t[67] !== o)
        ((p =
          (o || s) &&
          n.memories.map((m) =>
            Ts.jsxs(
              U,
              {
                flexDirection: "column",
                children: [
                  Ts.jsx(qn, {
                    children: Ts.jsx(w, {
                      dimColor: true,
                      children: Ts.jsx(SN, {
                        filePath: m.path,
                        children: Zzn.basename(m.path),
                      }),
                    }),
                  }),
                  s &&
                    Ts.jsx(U, {
                      paddingLeft: 5,
                      children: Ts.jsx(w, {
                        children: Ts.jsx(bd, {
                          children: m.content,
                        }),
                      }),
                    }),
                ],
              },
              m.path,
            ),
          )),
          (t[65] = n.memories),
          (t[66] = s),
          (t[67] = o),
          (t[68] = p));
      else p = t[68];
      let f;
      if (t[69] !== i || t[70] !== d || t[71] !== p)
        ((f = Ts.jsxs(U, {
          flexDirection: "column",
          marginTop: i,
          children: [d, p],
        })),
          (t[69] = i),
          (t[70] = d),
          (t[71] = p),
          (t[72] = f));
      else f = t[72];
      return f;
    }
    case "context_tip": {
      let { tip: i } = n,
        a = r ? 1 : 0,
        l = i.action && !i.tip.includes(i.action) ? ` \u2192 ${i.action}` : "",
        c;
      if (t[73] !== l || t[74] !== i.tip)
        ((c = Ts.jsx(qn, {
          children: Ts.jsxs(w, {
            dimColor: true,
            children: ["Tip: ", i.tip, l],
          }),
        })),
          (t[73] = l),
          (t[74] = i.tip),
          (t[75] = c));
      else c = t[75];
      let u;
      if (t[76] !== a || t[77] !== c)
        ((u = Ts.jsx(U, {
          flexDirection: "column",
          marginTop: a,
          children: c,
        })),
          (t[76] = a),
          (t[77] = c),
          (t[78] = u));
      else u = t[78];
      return u;
    }
    case "dynamic_skill": {
      let i = n.skillNames.length,
        a;
      if (t[79] !== i) ((a = bn(i, "skill")), (t[79] = i), (t[80] = a));
      else a = t[80];
      let l;
      if (t[81] !== i || t[82] !== a)
        ((l = Ts.jsxs(w, {
          bold: true,
          children: [i, " ", a],
        })),
          (t[81] = i),
          (t[82] = a),
          (t[83] = l));
      else l = t[83];
      let c;
      if (t[84] !== n.displayPath)
        ((c = Ts.jsx(w, {
          bold: true,
          children: n.displayPath,
        })),
          (t[84] = n.displayPath),
          (t[85] = c));
      else c = t[85];
      let u;
      if (t[86] !== l || t[87] !== c)
        ((u = Ts.jsxs(tw, {
          children: ["Loaded", " ", l, " ", "from ", c],
        })),
          (t[86] = l),
          (t[87] = c),
          (t[88] = u));
      else u = t[88];
      return u;
    }
    case "skill_listing": {
      if (n.isInitial) return null;
      let i;
      if (t[89] !== n.skillCount)
        ((i = Ts.jsx(w, {
          bold: true,
          children: n.skillCount,
        })),
          (t[89] = n.skillCount),
          (t[90] = i));
      else i = t[90];
      let a;
      if (t[91] !== n.skillCount)
        ((a = bn(n.skillCount, "skill")), (t[91] = n.skillCount), (t[92] = a));
      else a = t[92];
      let l;
      if (t[93] !== i || t[94] !== a)
        ((l = Ts.jsxs(tw, {
          children: [i, " ", a, " available"],
        })),
          (t[93] = i),
          (t[94] = a),
          (t[95] = l));
      else l = t[95];
      return l;
    }
    case "agent_listing_delta": {
      if (n.isInitial || n.addedTypes.length === 0) return null;
      let i = n.addedTypes.length,
        a;
      if (t[96] !== i)
        ((a = Ts.jsx(w, {
          bold: true,
          children: i,
        })),
          (t[96] = i),
          (t[97] = a));
      else a = t[97];
      let l;
      if (t[98] !== i) ((l = bn(i, "type")), (t[98] = i), (t[99] = l));
      else l = t[99];
      let c;
      if (t[100] !== a || t[101] !== l)
        ((c = Ts.jsxs(tw, {
          children: [a, " agent ", l, " available"],
        })),
          (t[100] = a),
          (t[101] = l),
          (t[102] = c));
      else c = t[102];
      return c;
    }
    case "queued_command": {
      let i;
      if (t[103] !== n.prompt)
        ((i = typeof n.prompt === "string" ? n.prompt : lQ(n.prompt) || ""),
          (t[103] = n.prompt),
          (t[104] = i));
      else i = t[104];
      let a = i,
        l = n.imagePasteIds && n.imagePasteIds.length > 0,
        c;
      if (t[105] !== a)
        ((c = {
          text: a,
          type: "text",
        }),
          (t[105] = a),
          (t[106] = c));
      else c = t[106];
      let u;
      if (t[107] !== r || t[108] !== s || t[109] !== c || t[110] !== o)
        ((u = Ts.jsx(c6e, {
          addMargin: r,
          param: c,
          verbose: o,
          isTranscriptMode: s,
        })),
          (t[107] = r),
          (t[108] = s),
          (t[109] = c),
          (t[110] = o),
          (t[111] = u));
      else u = t[111];
      let d;
      if (t[112] !== n.imagePasteIds || t[113] !== l)
        ((d = l && n.imagePasteIds?.map(ysf)),
          (t[112] = n.imagePasteIds),
          (t[113] = l),
          (t[114] = d));
      else d = t[114];
      let p;
      if (t[115] !== u || t[116] !== d)
        ((p = Ts.jsxs(U, {
          flexDirection: "column",
          children: [u, d],
        })),
          (t[115] = u),
          (t[116] = d),
          (t[117] = p));
      else p = t[117];
      return p;
    }
    case "plan_file_reference": {
      let i;
      if (t[118] !== n.planFilePath)
        ((i = kd(n.planFilePath)), (t[118] = n.planFilePath), (t[119] = i));
      else i = t[119];
      let a;
      if (t[120] !== i)
        ((a = Ts.jsxs(tw, {
          children: ["Plan file referenced (", i, ")"],
        })),
          (t[120] = i),
          (t[121] = a));
      else a = t[121];
      return a;
    }
    case "invoked_skills": {
      if (n.skills.length === 0) return null;
      let i;
      if (t[122] !== n.skills)
        ((i = n.skills.map(hsf).join(", ")), (t[122] = n.skills), (t[123] = i));
      else i = t[123];
      let a = i,
        l;
      if (t[124] !== a)
        ((l = Ts.jsxs(tw, {
          children: ["Skills restored (", a, ")"],
        })),
          (t[124] = a),
          (t[125] = l));
      else l = t[125];
      return l;
    }
    case "diagnostics": {
      let i;
      if (t[126] !== n || t[127] !== s || t[128] !== o)
        ((i = Ts.jsx(cil, {
          attachment: n,
          verbose: o,
          isTranscriptMode: s,
        })),
          (t[126] = n),
          (t[127] = s),
          (t[128] = o),
          (t[129] = i));
      else i = t[129];
      return i;
    }
    case "mcp_resource": {
      let i;
      if (t[130] !== n.name)
        ((i = Ts.jsx(w, {
          bold: true,
          children: n.name,
        })),
          (t[130] = n.name),
          (t[131] = i));
      else i = t[131];
      let a;
      if (t[132] !== n.server || t[133] !== i)
        ((a = Ts.jsxs(tw, {
          children: ["Read MCP resource ", i, " from", " ", n.server],
        })),
          (t[132] = n.server),
          (t[133] = i),
          (t[134] = a));
      else a = t[134];
      return a;
    }
    case "command_permissions":
      return null;
    case "async_hook_response": {
      if (n.hookEvent === "SessionStart" && !o) return null;
      if (!o && !s) return null;
      let i;
      if (t[135] !== n.hookEvent)
        ((i = Ts.jsxs(tw, {
          children: [
            "Async hook ",
            Ts.jsx(w, {
              bold: true,
              children: n.hookEvent,
            }),
            " completed",
          ],
        })),
          (t[135] = n.hookEvent),
          (t[136] = i));
      else i = t[136];
      return i;
    }
    case "hook_blocking_error": {
      if (n.hookEvent === "Stop" || n.hookEvent === "SubagentStop") return null;
      let i;
      if (t[137] !== n.blockingError.blockingError)
        ((i = n.blockingError.blockingError.trim()),
          (t[137] = n.blockingError.blockingError),
          (t[138] = i));
      else i = t[138];
      let a = i,
        l;
      if (t[139] !== n.hookName)
        ((l = Ts.jsxs(tw, {
          color: "error",
          children: [n.hookName, " hook returned blocking error"],
        })),
          (t[139] = n.hookName),
          (t[140] = l));
      else l = t[140];
      let c;
      if (t[141] !== a)
        ((c = a
          ? Ts.jsx(tw, {
              color: "error",
              children: a,
            })
          : null),
          (t[141] = a),
          (t[142] = c));
      else c = t[142];
      let u;
      if (t[143] !== l || t[144] !== c)
        ((u = Ts.jsxs(Ts.Fragment, {
          children: [l, c],
        })),
          (t[143] = l),
          (t[144] = c),
          (t[145] = u));
      else u = t[145];
      return u;
    }
    case "hook_non_blocking_error": {
      if (n.hookEvent === "Stop" || n.hookEvent === "SubagentStop") return null;
      let i;
      if (t[146] !== n.stderr || t[147] !== n.stdout)
        ((i = Tsf(n.stderr, n.stdout)), (t[146] = n.stderr), (t[147] = n.stdout), (t[148] = i));
      else i = t[148];
      let a = i,
        l;
      if (t[149] !== n.hookName)
        ((l = Ts.jsxs(tw, {
          color: "error",
          children: [n.hookName, " hook error"],
        })),
          (t[149] = n.hookName),
          (t[150] = l));
      else l = t[150];
      let c;
      if (t[151] !== a)
        ((c = a
          ? Ts.jsx(tw, {
              color: "error",
              children: a,
            })
          : null),
          (t[151] = a),
          (t[152] = c));
      else c = t[152];
      let u;
      if (t[153] !== l || t[154] !== c)
        ((u = Ts.jsxs(Ts.Fragment, {
          children: [l, c],
        })),
          (t[153] = l),
          (t[154] = c),
          (t[155] = u));
      else u = t[155];
      return u;
    }
    case "hook_error_during_execution": {
      if (n.hookEvent === "Stop" || n.hookEvent === "SubagentStop") return null;
      let i;
      if (t[156] !== n.hookName)
        ((i = Ts.jsxs(tw, {
          children: [n.hookName, " hook warning"],
        })),
          (t[156] = n.hookName),
          (t[157] = i));
      else i = t[157];
      return i;
    }
    case "hook_success":
      return null;
    case "hook_stopped_continuation": {
      if (n.hookEvent === "Stop" || n.hookEvent === "SubagentStop") return null;
      let i;
      if (t[158] !== n.hookName || t[159] !== n.message)
        ((i = Ts.jsxs(tw, {
          color: "warning",
          children: [n.hookName, " hook stopped continuation: ", n.message],
        })),
          (t[158] = n.hookName),
          (t[159] = n.message),
          (t[160] = i));
      else i = t[160];
      return i;
    }
    case "hook_deferred_tool": {
      let i;
      if (t[161] !== n.hookName || t[162] !== n.toolName)
        ((i = Ts.jsxs(tw, {
          color: "warning",
          children: [
            n.hookName,
            " deferred ",
            n.toolName,
            " \xB7 resume with -p --resume to continue",
          ],
        })),
          (t[161] = n.hookName),
          (t[162] = n.toolName),
          (t[163] = i));
      else i = t[163];
      return i;
    }
    case "goal_status": {
      if (n.sentinel) return null;
      let i = n.failed === true,
        a;
      if (
        t[164] !== n.durationMs ||
        t[165] !== n.iterations ||
        t[166] !== n.met ||
        t[167] !== n.tokens ||
        t[168] !== i
      ) {
        if (((a = []), n.met || i)) {
          if (n.durationMs !== void 0) {
            let v;
            if (t[170] !== n.durationMs)
              ((v = Yi(n.durationMs, {
                mostSignificantOnly: true,
              })),
                (t[170] = n.durationMs),
                (t[171] = v));
            else v = t[171];
            a.push(v);
          }
          if (n.iterations !== void 0) {
            let v = n.iterations,
              C;
            if (t[172] !== n.iterations)
              ((C = bn(n.iterations, "turn")), (t[172] = n.iterations), (t[173] = C));
            else C = t[173];
            a.push(`${v} ${C}`);
          }
          if (n.tokens !== void 0) {
            let v;
            if (t[174] !== n.tokens) ((v = gl(n.tokens)), (t[174] = n.tokens), (t[175] = v));
            else v = t[175];
            a.push(`${v} tokens`);
          }
        }
        ((t[164] = n.durationMs),
          (t[165] = n.iterations),
          (t[166] = n.met),
          (t[167] = n.tokens),
          (t[168] = i),
          (t[169] = a));
      } else a = t[169];
      let l = a.length > 0 ? ` (${a.join(" \xB7 ")})` : "",
        c = i ? "error" : n.met ? "success" : "pending",
        u;
      if (t[176] !== c)
        ((u = Ts.jsx(Hs, {
          status: c,
          withSpace: true,
        })),
          (t[176] = c),
          (t[177] = u));
      else u = t[177];
      let d = i ? "error" : void 0,
        p = !n.met && !i,
        f = i
          ? "Goal could not be achieved"
          : n.met
            ? "Goal achieved"
            : "Goal not yet met\u2026 continuing",
        m;
      if (t[178] !== d || t[179] !== p || t[180] !== f)
        ((m = Ts.jsx(w, {
          color: d,
          dimColor: p,
          children: f,
        })),
          (t[178] = d),
          (t[179] = p),
          (t[180] = f),
          (t[181] = m));
      else m = t[181];
      let g;
      if (t[182] !== l)
        ((g = l
          ? Ts.jsx(w, {
              dimColor: true,
              children: l,
            })
          : null),
          (t[182] = l),
          (t[183] = g));
      else g = t[183];
      let h;
      if (t[184] !== o)
        ((h = !o
          ? Ts.jsxs(w, {
              children: [" ", Ts.jsx(NI, {})],
            })
          : null),
          (t[184] = o),
          (t[185] = h));
      else h = t[185];
      let y;
      if (t[186] !== u || t[187] !== m || t[188] !== g || t[189] !== h)
        ((y = Ts.jsxs(w, {
          children: [u, m, g, h],
        })),
          (t[186] = u),
          (t[187] = m),
          (t[188] = g),
          (t[189] = h),
          (t[190] = y));
      else y = t[190];
      let b;
      if (t[191] !== n.reason || t[192] !== i)
        ((b =
          i && n.reason
            ? Ts.jsx(U, {
                paddingLeft: 2,
                children: Ts.jsx(w, {
                  dimColor: true,
                  wrap: "wrap",
                  children: n.reason,
                }),
              })
            : null),
          (t[191] = n.reason),
          (t[192] = i),
          (t[193] = b));
      else b = t[193];
      let _;
      if (t[194] !== n.condition || t[195] !== o)
        ((_ = o
          ? Ts.jsx(U, {
              paddingLeft: 2,
              children: Ts.jsxs(w, {
                dimColor: true,
                wrap: "wrap",
                children: ["Goal: ", n.condition],
              }),
            })
          : null),
          (t[194] = n.condition),
          (t[195] = o),
          (t[196] = _));
      else _ = t[196];
      let S;
      if (t[197] !== n.reason || t[198] !== i || t[199] !== o)
        ((S =
          o && !i && n.reason
            ? Ts.jsx(U, {
                paddingLeft: 2,
                children: Ts.jsxs(w, {
                  dimColor: true,
                  wrap: "wrap",
                  children: ["Reason: ", n.reason],
                }),
              })
            : null),
          (t[197] = n.reason),
          (t[198] = i),
          (t[199] = o),
          (t[200] = S));
      else S = t[200];
      let A;
      if (t[201] !== b || t[202] !== _ || t[203] !== S || t[204] !== y)
        ((A = Ts.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [y, b, _, S],
        })),
          (t[201] = b),
          (t[202] = _),
          (t[203] = S),
          (t[204] = y),
          (t[205] = A));
      else A = t[205];
      return A;
    }
    case "hook_system_message": {
      let i;
      if (t[206] !== n.content || t[207] !== n.hookName)
        ((i = Ts.jsxs(tw, {
          children: [n.hookName, " says: ", n.content],
        })),
          (t[206] = n.content),
          (t[207] = n.hookName),
          (t[208] = i));
      else i = t[208];
      return i;
    }
    case "hook_permission_decision": {
      let i = n.decision === "allow" ? "Allowed" : "Denied",
        a;
      if (t[209] !== n.hookEvent)
        ((a = Ts.jsx(w, {
          bold: true,
          children: n.hookEvent,
        })),
          (t[209] = n.hookEvent),
          (t[210] = a));
      else a = t[210];
      let l;
      if (t[211] !== i || t[212] !== a)
        ((l = Ts.jsxs(tw, {
          children: [i, " by ", a, " hook"],
        })),
          (t[211] = i),
          (t[212] = a),
          (t[213] = l));
      else l = t[213];
      return l;
    }
    case "task_status": {
      let i;
      if (t[214] !== n)
        ((i = Ts.jsx(TaskStatusMessage, {
          attachment: n,
        })),
          (t[214] = n),
          (t[215] = i));
      else i = t[215];
      return i;
    }
    case "teammate_shutdown_batch": {
      let i;
      if (t[216] === Symbol.for("react.memo_cache_sentinel"))
        ((i = Ts.jsxs(w, {
          "aria-hidden": true,
          dimColor: true,
          children: [gc, " "],
        })),
          (t[216] = i));
      else i = t[216];
      let a = n.count,
        l;
      if (t[217] !== n.count) ((l = bn(n.count, "teammate")), (t[217] = n.count), (t[218] = l));
      else l = t[218];
      let c;
      if (t[219] !== n.count || t[220] !== l)
        ((c = Ts.jsxs(U, {
          flexDirection: "row",
          width: "100%",
          marginTop: 1,
          children: [
            i,
            Ts.jsxs(w, {
              dimColor: true,
              children: [a, " ", l, " shut down gracefully"],
            }),
          ],
        })),
          (t[219] = n.count),
          (t[220] = l),
          (t[221] = c));
      else c = t[221];
      return c;
    }
    default:
      return null;
  }
}
function hsf(e) {
  return e.name;
}
function ysf(e) {
  return Ts.jsx(
    Fzn,
    {
      imageId: e,
    },
    e,
  );
}
function _sf(e, t) {
  return e.kind === "panel"
    ? e.node
    : Ts.jsx(
        JCo,
        {
          displayName: e.displayName,
          count: e.count,
        },
        t,
      );
}
function bsf(e, t) {
  return e.kind === "panel"
    ? e.node
    : Ts.jsx(
        XCo,
        {
          displayName: e.displayName,
          inkColor: e.inkColor,
          content: e.content,
          summary: e.summary,
        },
        t,
      );
}
function Ssf(e, t) {
  let n = null;
  try {
    n = Ft(e.text);
  } catch {}
  let r = V6(e.color),
    o = e.summary
      ? Ts.jsxs(U, {
          children: [
            Ts.jsxs(w, {
              color: r,
              children: [
                "@",
                e.from,
                Ts.jsx(w, {
                  "aria-hidden": true,
                  children: nt.pointer,
                }),
              ],
            }),
            Ts.jsxs(w, {
              children: [" ", e.summary],
            }),
          ],
        })
      : null,
    s = Nzn(e.text);
  if (s)
    return {
      kind: "panel",
      node: Ts.jsxs(
        aIo.Fragment,
        {
          children: [o, s],
        },
        t,
      ),
    };
  let i = Qv(m8e(), e.text);
  if (i && !e.summary)
    return {
      kind: "panel",
      node: Ts.jsx(
        QCo,
        {
          displayName: e.from,
          inkColor: r,
          idleReason: i.idleReason,
        },
        t,
      ),
    };
  let a = Uzn(e.text, e.from);
  if (a)
    return {
      kind: "panel",
      node: Ts.jsxs(
        aIo.Fragment,
        {
          children: [o, a],
        },
        t,
      ),
    };
  let c =
    n?.type === "idle_notification" ||
    n?.type === "teammate_terminated" ||
    n?.type === "shutdown_approved"
      ? e.text
      : (gil(e.text) ?? e.text);
  return {
    kind: "text",
    displayName: e.from,
    inkColor: r,
    content: c,
    summary: e.summary,
  };
}
function Esf(e) {
  if (e.summary) return true;
  return !(Qv(pAe(), e.text) || Qv(h8e(), e.text));
}
function TaskStatusMessage(t0) {
  let t = t_t.c(4),
    { attachment: n } = t0;
  if (Ozn() && n.status === "killed") return null;
  if (el() && n.taskType === "in_process_teammate") {
    let o;
    if (t[0] !== n)
      ((o = Ts.jsx(TeammateTaskStatus, {
        attachment: n,
      })),
        (t[0] = n),
        (t[1] = o));
    else o = t[1];
    return o;
  }
  let r;
  if (t[2] !== n)
    ((r = Ts.jsx(GenericTaskStatus, {
      attachment: n,
    })),
      (t[2] = n),
      (t[3] = r));
  else r = t[3];
  return r;
}
function GenericTaskStatus(t0) {
  let t = t_t.c(6),
    { attachment: n } = t0,
    r =
      n.status === "completed"
        ? "completed in background"
        : n.status === "killed"
          ? "stopped"
          : n.status === "running"
            ? "still running in background"
            : n.status,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = Ts.jsxs(w, {
      "aria-hidden": true,
      dimColor: true,
      children: [gc, " "],
    })),
      (t[0] = o));
  else o = t[0];
  let s;
  if (t[1] !== n.description)
    ((s = Ts.jsx(w, {
      bold: true,
      children: n.description,
    })),
      (t[1] = n.description),
      (t[2] = s));
  else s = t[2];
  let i;
  if (t[3] !== r || t[4] !== s)
    ((i = Ts.jsxs(U, {
      flexDirection: "row",
      width: "100%",
      marginTop: 1,
      children: [
        o,
        Ts.jsxs(w, {
          dimColor: true,
          children: ['Task "', s, '" ', r],
        }),
      ],
    })),
      (t[3] = r),
      (t[4] = s),
      (t[5] = i));
  else i = t[5];
  return i;
}
function TeammateTaskStatus(t0) {
  let t = t_t.c(13),
    { attachment: n } = t0,
    r;
  if (t[0] !== n.taskId) ((r = (d) => d.tasks[n.taskId]), (t[0] = n.taskId), (t[1] = r));
  else r = t[1];
  let o = Ht(r);
  if (o?.type !== "in_process_teammate") {
    let d;
    if (t[2] !== n)
      ((d = Ts.jsx(GenericTaskStatus, {
        attachment: n,
      })),
        (t[2] = n),
        (t[3] = d));
    else d = t[3];
    return d;
  }
  let s;
  if (t[4] !== o.identity.color)
    ((s = V6(o.identity.color)), (t[4] = o.identity.color), (t[5] = s));
  else s = t[5];
  let i = s,
    a = n.status === "completed" ? "shut down gracefully" : n.status,
    l;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((l = Ts.jsxs(w, {
      "aria-hidden": true,
      dimColor: true,
      children: [gc, " "],
    })),
      (t[6] = l));
  else l = t[6];
  let c;
  if (t[7] !== i || t[8] !== o.identity.agentName)
    ((c = Ts.jsxs(w, {
      color: i,
      bold: true,
      dimColor: false,
      children: ["@", o.identity.agentName],
    })),
      (t[7] = i),
      (t[8] = o.identity.agentName),
      (t[9] = c));
  else c = t[9];
  let u;
  if (t[10] !== a || t[11] !== c)
    ((u = Ts.jsxs(U, {
      flexDirection: "row",
      width: "100%",
      marginTop: 1,
      children: [
        l,
        Ts.jsxs(w, {
          dimColor: true,
          children: ["Teammate", " ", c, " ", a],
        }),
      ],
    })),
      (t[10] = a),
      (t[11] = c),
      (t[12] = u));
  else u = t[12];
  return u;
}
function Tsf(e, t) {
  let n = e?.trim() ? e : t?.trim() ? t : "";
  if (!n) return "";
  let r = bi(
      n,
      `

Expected schema:`,
    ).trim(),
    o = 0,
    s = r.indexOf(`
`);
  while (s !== -1) {
    let a = r.slice(o, s).trim();
    if (a) return a.length > 200 ? a.slice(0, 200) + "\u2026" : a;
    ((o = s + 1),
      (s = r.indexOf(
        `
`,
        o,
      )));
  }
  let i = r.slice(o).trim();
  return i.length > 200 ? i.slice(0, 200) + "\u2026" : i;
}
function tw(e) {
  let t = t_t.c(4),
    { dimColor: n, children: r, color: o } = e,
    s = n === void 0 ? true : n,
    i;
  if (t[0] !== r || t[1] !== o || t[2] !== s)
    ((i = Ts.jsx(U, {
      children: Ts.jsx(qn, {
        children: Ts.jsx(w, {
          color: o,
          dimColor: s,
          wrap: "wrap",
          children: r,
        }),
      }),
    })),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s),
      (t[3] = i));
  else i = t[3];
  return i;
}
var t_t, Zzn, aIo, Ts;
