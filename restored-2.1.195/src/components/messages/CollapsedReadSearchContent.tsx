// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fIo
// matched 2.1.88 source: src/components/messages/CollapsedReadSearchContent.tsx
// class=modified  jaccard=0.5004  score=0.5975  fileCov=0.7547
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fIo] deps: @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, services/mockRateLimits.ts, utils/messages.ts, components/VirtualMessageList.tsx, native-ts/yoga-layout/index.ts, commands/add-dir/validation.ts, tools/ExitPlanModeTool/UI.tsx, components/messages/UserToolResultMessage/UserToolErrorMessage.tsx
((Ral = R(lt(), 1)), (cQ = R(se(), 1)));
function VerboseToolUse(t0) {
  let t = rKn.c(49),
    {
      content: content,
      tools: r,
      lookups: lookups,
      inProgressToolUseIDs: s,
      shouldAnimate: i,
      theme: a,
    } = t0,
    l,
    c,
    u,
    d,
    p,
    f,
    m,
    g,
    h,
    y,
    b;
  if (
    t[0] !== content.id ||
    t[1] !== content.input ||
    t[2] !== content.name ||
    t[3] !== s ||
    t[4] !== lookups ||
    t[5] !== i ||
    t[6] !== a ||
    t[7] !== r
  ) {
    y = Symbol.for("react.early_return_sentinel");
    e: {
      if (
        ((b = _l(r, content.name) ?? _l(xAe(), content.name)), !b || b.isTransparentWrapper?.())
      ) {
        y = null;
        break e;
      }
      let A;
      if (t[19] !== content.id || t[20] !== lookups.resolvedToolUseIDs)
        ((A = lookups.resolvedToolUseIDs.has(content.id)),
          (t[19] = content.id),
          (t[20] = lookups.resolvedToolUseIDs),
          (t[21] = A));
      else A = t[21];
      u = A;
      let v;
      if (t[22] !== content.id || t[23] !== lookups.erroredToolUseIDs)
        ((v = lookups.erroredToolUseIDs.has(content.id)),
          (t[22] = content.id),
          (t[23] = lookups.erroredToolUseIDs),
          (t[24] = v));
      else v = t[24];
      c = v;
      let C;
      if (t[25] !== content.id || t[26] !== s)
        ((C = s.has(content.id)), (t[25] = content.id), (t[26] = s), (t[27] = C));
      else C = t[27];
      let x = C;
      d = lookups.toolResultByToolUseID.get(content.id);
      let I = d?.type === "user" ? d.toolUseResult : void 0,
        k = b.outputSchema?.safeParse(I),
        D = k?.success ? k.data : void 0,
        P = b.inputSchema.safeParse(content.input),
        O = P.success ? P.data : void 0,
        L = b.userFacingName(O),
        M;
      if (t[28] !== content.input) ((M = Pae(content.input)), (t[28] = content.input), (t[29] = M));
      else M = t[29];
      let N = M,
        B =
          N !== null
            ? N
            : O
              ? b.renderToolUseMessage(O, {
                  theme: a,
                  verbose: true,
                })
              : null;
      ((l = U), (p = content.id), (f = "column"), (m = 1));
      let $ = i && x,
        q = !u,
        W;
      if (t[30] !== c || t[31] !== $ || t[32] !== q)
        ((W = Hi.jsx(koe, {
          shouldAnimate: $,
          isUnresolved: q,
          isError: c,
        })),
          (t[30] = c),
          (t[31] = $),
          (t[32] = q),
          (t[33] = W));
      else W = t[33];
      ((g = Hi.jsxs(U, {
        flexDirection: "row",
        children: [
          W,
          Hi.jsxs(w, {
            children: [
              Hi.jsx(w, {
                bold: true,
                children: L,
              }),
              B &&
                Hi.jsxs(w, {
                  children: ["(", B, ")"],
                }),
            ],
          }),
          O &&
            b.renderToolUseTag?.(O, {
              toolUseId: content.id,
              toolUseResult: I,
              progressMessages: lookups.progressMessagesByToolUseID.get(content.id),
            }),
        ],
      })),
        (h =
          u &&
          !c &&
          D !== void 0 &&
          Hi.jsx(U, {
            children: b.renderToolResultMessage?.(D, [], {
              verbose: true,
              tools: r,
              theme: a,
            }),
          })));
    }
    ((t[0] = content.id),
      (t[1] = content.input),
      (t[2] = content.name),
      (t[3] = s),
      (t[4] = lookups),
      (t[5] = i),
      (t[6] = a),
      (t[7] = r),
      (t[8] = l),
      (t[9] = c),
      (t[10] = u),
      (t[11] = d),
      (t[12] = p),
      (t[13] = f),
      (t[14] = m),
      (t[15] = g),
      (t[16] = h),
      (t[17] = y),
      (t[18] = b));
  } else
    ((l = t[8]),
      (c = t[9]),
      (u = t[10]),
      (d = t[11]),
      (p = t[12]),
      (f = t[13]),
      (m = t[14]),
      (g = t[15]),
      (h = t[16]),
      (y = t[17]),
      (b = t[18]));
  if (y !== Symbol.for("react.early_return_sentinel")) return y;
  let _;
  if (
    t[34] !== content.id ||
    t[35] !== c ||
    t[36] !== u ||
    t[37] !== d ||
    t[38] !== b ||
    t[39] !== r
  )
    ((_ =
      u &&
      c &&
      Hi.jsx(Nsf, {
        toolUseID: content.id,
        resultMsg: d,
        tool: b,
        tools: r,
      })),
      (t[34] = content.id),
      (t[35] = c),
      (t[36] = u),
      (t[37] = d),
      (t[38] = b),
      (t[39] = r),
      (t[40] = _));
  else _ = t[40];
  let S;
  if (
    t[41] !== l ||
    t[42] !== p ||
    t[43] !== f ||
    t[44] !== m ||
    t[45] !== g ||
    t[46] !== h ||
    t[47] !== _
  )
    ((S = Hi.jsxs(
      l,
      {
        flexDirection: f,
        marginTop: m,
        children: [g, h, _],
      },
      p,
    )),
      (t[41] = l),
      (t[42] = p),
      (t[43] = f),
      (t[44] = m),
      (t[45] = g),
      (t[46] = h),
      (t[47] = _),
      (t[48] = S));
  else S = t[48];
  return S;
}
function Nsf(e) {
  let t = rKn.c(11),
    { toolUseID: n, resultMsg: r, tool: o, tools: s } = e;
  if (r?.type !== "user") return null;
  let i, a;
  if (t[0] !== r.message.content || t[1] !== n) {
    let u;
    if (t[4] !== n)
      ((u = (d) => d.type === "tool_result" && d.tool_use_id === n), (t[4] = n), (t[5] = u));
    else u = t[5];
    ((i = r.message.content.find(u)),
      (a = i?.type !== "tool_result" || typeof i.content !== "string" || !nKn(i.content)),
      (t[0] = r.message.content),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a));
  } else ((i = t[2]), (a = t[3]));
  if (a) return null;
  let l;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) ((l = []), (t[6] = l));
  else l = t[6];
  let c;
  if (t[7] !== i || t[8] !== o || t[9] !== s)
    ((c = Hi.jsx(tKn, {
      param: i,
      tool: o,
      tools: s,
      verbose: true,
      progressMessagesForMessage: l,
      isTranscriptMode: true,
    })),
      (t[7] = i),
      (t[8] = o),
      (t[9] = s),
      (t[10] = c));
  else c = t[10];
  return c;
}
function CollapsedReadSearchContent({
  message: message,
  inProgressToolUseIDs: t,
  shouldAnimate: n,
  verbose: r,
  tools: o,
  lookups: lookups,
  isActiveGroup: i,
  addMargin: a = true,
}) {
  let {
      searchCount: l,
      readCount: c,
      listCount: u,
      replCount: d,
      memorySearchCount: p,
      memoryReadCount: f,
      memoryWriteCount: m,
      messages: g,
    } = message,
    [h] = na(),
    { columns: y } = br(),
    b = i_t(message),
    _ = b.some((ge) => lookups.erroredToolUseIDs.has(ge)),
    S = p > 0 || f > 0 || m > 0,
    A = val(message),
    v = s_t.useRef(0),
    C = s_t.useRef(0),
    x = s_t.useRef(0),
    I = s_t.useRef(0),
    k = s_t.useRef(0);
  ((v.current = Math.max(v.current, c)),
    (C.current = Math.max(C.current, l)),
    (x.current = Math.max(x.current, u)),
    (I.current = Math.max(I.current, message.mcpCallCount ?? 0)),
    (k.current = Math.max(k.current, message.bashCount ?? 0)));
  let D = message.otherToolCount ?? 0,
    P = message.editFileCount ?? 0,
    O = message.frameCount ?? 0,
    L = message.linesAdded ?? 0,
    M = message.linesRemoved ?? 0,
    N = v.current,
    B = C.current,
    $ = x.current,
    q = I.current,
    W = message.gitOpBashCount ?? 0,
    V = Ns() ? Math.max(0, k.current - W) : 0,
    Y = message.thoughtForMs ?? 0,
    z = Y > 0 || message.latestThinkingSummary !== void 0,
    K = B > 0 || N > 0 || $ > 0 || d > 0 || q > 0 || V > 0 || W > 0 || D > 0 || P > 0 || O > 0 || z,
    Z = message.readFilePaths,
    J = message.searchArgs,
    ne = message.latestDisplayHint;
  if (ne === void 0) {
    let ge = J?.at(-1),
      he = ge !== void 0 ? `"${ge}"` : void 0,
      ie = Z?.at(-1);
    ne = ie !== void 0 ? kd(ie) : he;
  }
  if (i)
    for (let ge of b) {
      if (!t.has(ge)) continue;
      let he = lookups.progressMessagesByToolUseID.get(ge)?.at(-1)?.data;
      if (he?.type === "repl_tool_call" && (he.phase === "start" || he.phase === "executing")) {
        let ie = he.toolInput;
        ne = ie.file_path ?? (ie.pattern ? `"${ie.pattern}"` : void 0) ?? ie.command ?? he.toolName;
      } else if (he?.type === "mcp_progress") {
        let { progress: ie, total: le, progressMessage: He } = he,
          ye = He?.replace(/\s+/g, " ").trim() || void 0,
          ue = ye && ye.length > 200 ? ye.slice(0, 199) + "\u2026" : ye;
        if (ie !== void 0 && le !== void 0 && le > 0) {
          let we = Math.round(Math.min(1, Math.max(0, ie / le)) * 100);
          ne = ue ? `${ue} (${we}%)` : `${we}%`;
        } else if (ue) ne = ue;
        else if (ie !== void 0) ne = `Processing\u2026 ${ie}`;
      }
    }
  let oe = yal(ne, Dsf),
    re = gal(i ? message.latestThinkingSummary : void 0, Psf),
    ee = i && re !== void 0,
    ce = ee ? re : oe;
  if (r) {
    let ge = [];
    for (let he of g)
      if (he.type === "assistant") ge.push(he);
      else if (he.type === "grouped_tool_use") ge.push(...he.messages);
    return Hi.jsxs(U, {
      flexDirection: "column",
      children: [
        ge.map((he) => {
          let ie = he.message.content[0];
          if (ie?.type === "thinking" && ie.thinking)
            return Hi.jsx(
              U,
              {
                marginTop: 1,
                children: Hi.jsx(Rzn, {
                  param: ie,
                  addMargin: false,
                  isTranscriptMode: true,
                  verbose: true,
                }),
              },
              he.uuid,
            );
          if (ie?.type !== "tool_use") return null;
          return Hi.jsx(
            VerboseToolUse,
            {
              content: ie,
              tools: o,
              lookups: lookups,
              inProgressToolUseIDs: t,
              shouldAnimate: n,
              theme: h,
            },
            ie.id,
          );
        }),
        message.hookInfos &&
          message.hookInfos.length > 0 &&
          Hi.jsxs(Hi.Fragment, {
            children: [
              Hi.jsxs(w, {
                dimColor: true,
                children: [
                  Hi.jsx(w, {
                    "aria-hidden": true,
                    children: "  \u23BF  ",
                  }),
                  "Ran ",
                  message.hookCount,
                  " ",
                  "PreToolUse ",
                  message.hookCount === 1 ? "hook" : "hooks",
                  " (",
                  vUe(message.hookTotalMs ?? 0),
                  ")",
                ],
              }),
              message.hookInfos.map((he, ie) =>
                Hi.jsxs(
                  w,
                  {
                    dimColor: true,
                    children: [
                      Hi.jsx(w, {
                        "aria-hidden": true,
                        children: "     \u23BF ",
                      }),
                      he.command,
                      " (",
                      vUe(he.durationMs ?? 0),
                      ")",
                    ],
                  },
                  `hook-${ie}`,
                ),
              ),
            ],
          }),
        message.relevantMemories?.map((he) =>
          Hi.jsxs(
            U,
            {
              flexDirection: "column",
              marginTop: 1,
              children: [
                Hi.jsxs(w, {
                  dimColor: true,
                  children: [
                    Hi.jsx(w, {
                      "aria-hidden": true,
                      children: "  \u23BF  ",
                    }),
                    "Recalled",
                    " ",
                    Pal.basename(he.path),
                  ],
                }),
                Hi.jsx(U, {
                  paddingLeft: 5,
                  children: Hi.jsx(w, {
                    children: Hi.jsx(bd, {
                      children: he.content,
                    }),
                  }),
                }),
              ],
            },
            he.path,
          ),
        ),
      ],
    });
  }
  if (!S && !A && !K) return null;
  let ae = "";
  if (Ns() && i) {
    let ge,
      he = 0;
    for (let ie of b) {
      if (!t.has(ie)) continue;
      let le = lookups.progressMessagesByToolUseID.get(ie)?.at(-1)?.data;
      if (le?.type !== "bash_progress" && le?.type !== "powershell_progress") continue;
      if (ge === void 0 || le.elapsedTimeSeconds > ge)
        ((ge = le.elapsedTimeSeconds), (he = le.totalLines));
    }
    if (ge !== void 0 && ge >= 2) {
      let ie = Yi(ge * 1000);
      ae = he > 0 ? ` (${ie} \xB7 ${he} ${he === 1 ? "line" : "lines"})` : ` (${ie})`;
    }
  }
  let nonMemParts = [];
  if (z) {
    let ge = i ? "Thinking" : "Thought",
      he;
    if (i && Ns()) {
      let ie = 0;
      for (let le = g.length - 1; le >= 0; le--) {
        let He = g[le];
        if (He?.type === "assistant" && He.message.content[0]?.type === "thinking") {
          let ye = Date.parse(He.timestamp);
          if (Number.isFinite(ye)) ie = ye;
          break;
        }
      }
      he = Hi.jsx(Bsf, {
        baseMs: Y,
        lastThinkingAtMs: ie,
      });
    } else
      he = Hi.jsx(w, {
        bold: true,
        children: Yi(Math.max(1000, Y)),
      });
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [ge, " for ", he],
        },
        "thought",
      ),
    );
  }
  if (P > 0) {
    let ge = nonMemParts.length === 0,
      he = i ? (ge ? "Editing" : "editing") : ge ? "Edited" : "edited";
    if (!ge)
      nonMemParts.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-edit",
        ),
      );
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [
            he,
            " ",
            Hi.jsx(w, {
              bold: true,
              children: P,
            }),
            " ",
            P === 1 ? "file" : "files",
            " ",
            Hi.jsx(d5, {
              added: L,
              removed: M,
            }),
          ],
        },
        "edit",
      ),
    );
  }
  function Ee(ge, he, ie) {
    let le = nonMemParts.length === 0;
    if (!le)
      nonMemParts.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          `comma-${ge}`,
        ),
      );
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [
            le ? he[0].toUpperCase() + he.slice(1) : he,
            ie != null &&
              Hi.jsxs(Hi.Fragment, {
                children: [" ", ie],
              }),
          ],
        },
        ge,
      ),
    );
  }
  if (Ns() && message.commits?.length) {
    let ge = {
      committed: "committed",
      amended: "amended commit",
      "cherry-picked": "cherry-picked",
    };
    for (let he of ["committed", "amended", "cherry-picked"]) {
      let ie = message.commits.filter((le) => le.kind === he).map((le) => le.sha);
      if (ie.length)
        Ee(
          he,
          ge[he],
          Hi.jsx(w, {
            bold: true,
            children: ie.join(", "),
          }),
        );
    }
  }
  if (Ns() && message.pushes?.length) {
    let ge = Uo(message.pushes.map((he) => he.branch));
    Ee(
      "push",
      "pushed to",
      Hi.jsx(w, {
        bold: true,
        children: ge.join(", "),
      }),
    );
  }
  if (Ns() && message.branches?.length) {
    let ge = {
      merged: "merged",
      rebased: "rebased onto",
    };
    for (let he of message.branches)
      Ee(
        `br-${he.action}-${he.ref}`,
        ge[he.action],
        Hi.jsx(w, {
          bold: true,
          children: he.ref,
        }),
      );
  }
  if (Ns() && message.prs?.length) {
    let ge = {
      created: "created",
      edited: "edited",
      merged: "merged",
      commented: "commented on",
      closed: "closed",
      ready: "marked ready",
      draft: "marked draft",
      "auto-merge-enabled": "enabled auto-merge on",
      "auto-merge-disabled": "disabled auto-merge on",
    };
    for (let he of message.prs)
      Ee(
        `pr-${he.action}-${he.number}`,
        ge[he.action],
        he.url
          ? Hi.jsx(u6e, {
              number: he.number,
              url: he.url,
              bold: true,
            })
          : Hi.jsxs(w, {
              bold: true,
              children: ["PR #", he.number],
            }),
      );
  }
  if (O > 0) Ee("frame", i ? "publishing" : "published", null);
  if (B > 0) {
    let ge = nonMemParts.length === 0,
      he = i ? (ge ? "Searching for" : "searching for") : ge ? "Searched for" : "searched for";
    if (!ge)
      nonMemParts.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-s",
        ),
      );
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [
            he,
            " ",
            Hi.jsx(w, {
              bold: true,
              children: B,
            }),
            " ",
            B === 1 ? "pattern" : "patterns",
          ],
        },
        "search",
      ),
    );
  }
  if (N > 0) {
    let ge = nonMemParts.length === 0,
      he = i ? (ge ? "Reading" : "reading") : ge ? "Read" : "read";
    if (!ge)
      nonMemParts.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-r",
        ),
      );
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [
            he,
            " ",
            Hi.jsx(w, {
              bold: true,
              children: N,
            }),
            " ",
            N === 1 ? "file" : "files",
          ],
        },
        "read",
      ),
    );
  }
  if ($ > 0) {
    let ge = nonMemParts.length === 0,
      he = i ? (ge ? "Listing" : "listing") : ge ? "Listed" : "listed";
    if (!ge)
      nonMemParts.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-l",
        ),
      );
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [
            he,
            " ",
            Hi.jsx(w, {
              bold: true,
              children: $,
            }),
            " ",
            $ === 1 ? "directory" : "directories",
          ],
        },
        "list",
      ),
    );
  }
  if (d > 0) {
    let ge = i ? "REPL'ing" : "REPL'd";
    if (nonMemParts.length > 0)
      nonMemParts.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-repl",
        ),
      );
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [
            ge,
            " ",
            Hi.jsx(w, {
              bold: true,
              children: d,
            }),
            " ",
            d === 1 ? "time" : "times",
          ],
        },
        "repl",
      ),
    );
  }
  if (q > 0) {
    let ge =
        message.mcpServerNames?.map((le) => le.replace(/^claude\.ai /, "")).join(", ") || "MCP",
      he = nonMemParts.length === 0,
      ie = i ? (he ? "Calling" : "calling") : he ? "Called" : "called";
    if (!he)
      nonMemParts.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-mcp",
        ),
      );
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [
            ie,
            " ",
            ge,
            q > 1 &&
              Hi.jsxs(Hi.Fragment, {
                children: [
                  " ",
                  Hi.jsx(w, {
                    bold: true,
                    children: q,
                  }),
                  " times",
                ],
              }),
          ],
        },
        "mcp",
      ),
    );
  }
  if (D > 0) {
    let ge = nonMemParts.length === 0,
      he = i ? (ge ? "Calling" : "calling") : ge ? "Called" : "called";
    if (!ge)
      nonMemParts.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-other",
        ),
      );
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [
            he,
            " ",
            Hi.jsx(w, {
              bold: true,
              children: D,
            }),
            " ",
            D === 1 ? "tool" : "tools",
          ],
        },
        "other",
      ),
    );
  }
  if (Ns() && V > 0) {
    let ge = nonMemParts.length === 0,
      he = i ? (ge ? "Running" : "running") : ge ? "Ran" : "ran";
    if (!ge)
      nonMemParts.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-bash",
        ),
      );
    nonMemParts.push(
      Hi.jsxs(
        w,
        {
          children: [
            he,
            " ",
            Hi.jsx(w, {
              bold: true,
              children: V,
            }),
            " shell",
            " ",
            V === 1 ? "command" : "commands",
          ],
        },
        "bash",
      ),
    );
  }
  let me = nonMemParts.length > 0,
    pe = [];
  if (f > 0) {
    let ge = !me && pe.length === 0,
      he = i ? (ge ? "Recalling" : "recalling") : ge ? "Recalled" : "recalled";
    if (!ge)
      pe.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-mr",
        ),
      );
    pe.push(
      Hi.jsxs(
        w,
        {
          children: [
            he,
            " ",
            Hi.jsx(w, {
              bold: true,
              children: f,
            }),
            " ",
            f === 1 ? "memory" : "memories",
          ],
        },
        "mem-read",
      ),
    );
  }
  if (p > 0) {
    let ge = !me && pe.length === 0,
      he = i ? (ge ? "Searching" : "searching") : ge ? "Searched" : "searched";
    if (!ge)
      pe.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-ms",
        ),
      );
    pe.push(
      Hi.jsx(
        w,
        {
          children: `${he} memories`,
        },
        "mem-search",
      ),
    );
  }
  if (m > 0) {
    let ge = !me && pe.length === 0,
      he = i ? (ge ? "Writing" : "writing") : ge ? "Wrote" : "wrote";
    if (!ge)
      pe.push(
        Hi.jsx(
          w,
          {
            children: ", ",
          },
          "comma-mw",
        ),
      );
    pe.push(
      Hi.jsxs(
        w,
        {
          children: [
            he,
            " ",
            Hi.jsx(w, {
              bold: true,
              children: m,
            }),
            " ",
            m === 1 ? "memory" : "memories",
          ],
        },
        "mem-write",
      ),
    );
  }
  return Hi.jsxs(U, {
    flexDirection: "column",
    marginTop: a ? 1 : 0,
    children: [
      Hi.jsxs(U, {
        flexDirection: "row",
        children: [
          i
            ? Hi.jsx(koe, {
                shouldAnimate: true,
                isUnresolved: true,
                isError: _,
              })
            : Hi.jsx(U, {
                minWidth: 2,
              }),
          Hi.jsxs(w, {
            dimColor: !i,
            children: [
              nonMemParts,
              pe,
              wal({
                message: message,
                isActiveGroup: i,
                hasPrecedingParts: me || pe.length > 0,
              }),
              i &&
                Hi.jsx(
                  w,
                  {
                    children: "\u2026",
                  },
                  "ellipsis",
                ),
              " ",
              Hi.jsx(NI, {}),
            ],
          }),
        ],
      }),
      i &&
        ce !== void 0 &&
        Hi.jsxs(U, {
          flexDirection: "row",
          children: [
            Hi.jsx(U, {
              width: 5,
              flexShrink: 0,
              children: Hi.jsx(w, {
                "aria-hidden": true,
                dimColor: true,
                children: "  \u23BF  ",
              }),
            }),
            Hi.jsx(U, {
              flexDirection: "column",
              flexGrow: 1,
              children: ee
                ? Hi.jsx(zg, {
                    dimColor: true,
                    italic: true,
                    children: Fsf(ce, y - Msf, $sf),
                  })
                : ce
                    .split(
                      `
`,
                    )
                    .map((ge, he, ie) =>
                      Hi.jsxs(
                        w,
                        {
                          dimColor: true,
                          children: [ge, he === ie.length - 1 && ae],
                        },
                        `hint-${he}`,
                      ),
                    ),
            }),
          ],
        }),
      message.hookTotalMs !== void 0 &&
        message.hookTotalMs > 0 &&
        Hi.jsxs(w, {
          dimColor: true,
          children: [
            Hi.jsx(w, {
              "aria-hidden": true,
              children: "  \u23BF  ",
            }),
            "Ran ",
            message.hookCount,
            " PreToolUse",
            " ",
            message.hookCount === 1 ? "hook" : "hooks",
            " (",
            vUe(message.hookTotalMs),
            ")",
          ],
        }),
      i &&
        message.pendingText &&
        Hi.jsxs(U, {
          flexDirection: "row",
          marginTop: 1,
          children: [
            Hi.jsx(U, {
              width: 2,
              flexShrink: 0,
              children: Hi.jsx(w, {
                "aria-hidden": true,
                dimColor: true,
                children: gc,
              }),
            }),
            Hi.jsx(U, {
              flexDirection: "column",
              flexGrow: 1,
              children: Hi.jsx(zg, {
                dimColor: true,
                children: message.pendingText,
              }),
            }),
          ],
        }),
    ],
  });
}
function Bsf(e) {
  let t = rKn.c(6),
    { baseMs: n, lastThinkingAtMs: r } = e,
    o = Ht(Usf),
    s;
  if (t[0] !== o) ((s = o ?? ls()), (t[0] = o), (t[1] = s));
  else s = t[1];
  let i = LMa(s);
  Kf(i !== null ? 1000 : null);
  let a = i !== null ? n + Math.min(mIo, Math.max(0, Date.now() - Math.max(i, r))) : n,
    l = Math.max(1000, a),
    c;
  if (t[2] !== l) ((c = Yi(l)), (t[2] = l), (t[3] = c));
  else c = t[3];
  let u;
  if (t[4] !== c)
    ((u = Hi.jsx(w, {
      bold: true,
      children: c,
    })),
      (t[4] = c),
      (t[5] = u));
  else u = t[5];
  return u;
}
function Usf(e) {
  return e.viewingAgentTaskId;
}
function Fsf(e, t, n) {
  if (t < 1) return e;
  let r = C1(e, t, "wrap").split(`
`);
  if (r.length <= n) return e;
  let o = r.slice(0, n).join("").replace(/\s+/g, " ").trim();
  while (
    o.length > 0 &&
    hu(
      C1(`${o}\u2026`, t, "wrap"),
      `
`,
    ) +
      1 >
      n
  ) {
    let s = o.length > 1 ? o.codePointAt(o.length - 2) : void 0;
    o = o.slice(0, s !== void 0 && s > 65535 ? -2 : -1);
  }
  return `${o.trimEnd()}\u2026`;
}
var rKn,
  Pal,
  s_t,
  Hi,
  Dsf = 700,
  Psf = 3000,
  Msf = 5,
  $sf = 10;
