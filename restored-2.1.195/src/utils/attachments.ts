// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b0l
// matched 2.1.88 source: src/utils/attachments.ts
// class=modified  jaccard=0.3191  score=0.6063  fileCov=0.4025
// note: deminified; 62 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: tryGetPDFReference, suppressNextSkillListing, startRelevantMemoryPrefetch, seedSentSkillNames, resetSentSkillNames, readMemoriesForSurfacing, parseAtMentionedFileLines, memoryHeader, memoryFilesToAttachments, logDiagnosticsInjected, getToolSearchUsageReminderAttachments, getTodoReminderMode, getSkillListingAttachments, getQueuedCommandAttachments, getPlanModeExitAttachment, getPlanModeAttachmentTurnCount, getMemoryUpdateAttachments, getMcpInstructionsDeltaAttachment, getDirector …
// [unwrapped __esm module b0l] deps: dn, je, At, Rd, Ao, Epe, Jt, RPo
MCf = `You are selecting memories that will be useful to Claude Code as it processes a user's query. The first message lists the available memory files with their filenames and descriptions; subsequent messages each contain one user query.

Return a list of filenames for the memories that will clearly be useful to Claude Code as it processes the user's query (up to 5). Only include memories that you are certain will be helpful based on their name and description.
- If you are unsure if a memory will be useful in processing the user's query, then do not include it in your list. Be selective and discerning.
- If there are no memories in the list that would clearly be useful, feel free to return an empty list.
- Be especially conservative with user-profile and project-overview memories ([user], [project]). These describe the user's ongoing focus, not what every question is about. A profile saying "works on DB performance" is NOT relevant to a question that merely contains the word "performance" unless the question is actually about that DB work. Match on what the question IS ABOUT, not on surface keyword overlap with who the user is.
- Do not re-select memories you already returned for an earlier query in this conversation.${PCf}
`;
function getTodoReminderMode() {
  let e = Oe.CLAUDE_CODE_TODO_REMINDER_MODE;
  if (e !== void 0) return e;
  return at("tengu_soft_slate_nudge", "baseline") === "off" ? "off" : "baseline";
}
async function getAttachments(e, t, n, r, o, s, i) {
  let a = Gh(t.options.mainLoopModel);
  if (
    ut(process.env.CLAUDE_CODE_DISABLE_ATTACHMENTS) ||
    Oe.CLAUDE_CODE_SIMPLE ||
    t.options.bareFork
  )
    return [...(await getQueuedCommandAttachments(r, a)), ...getAgentListingDeltaAttachment(t, o)];
  let l = Sl(),
    c = setTimeout((_) => _.abort(), 1000, l),
    u = {
      ...t,
      abortController: l,
    },
    d = !t.agentId,
    p = e
      ? [
          maybe("at_mentioned_files", () => processAtMentionedFiles(e, u)),
          maybe("mcp_resources", () => processMcpResourceAttachments(e, u)),
          maybe("agent_mentions", () =>
            Promise.resolve(processAgentMentions(e, t.options.agentDefinitions.activeAgents)),
          ),
        ]
      : [],
    f = await Promise.all(p),
    m = (() => {
      let _;
      return () => (_ ??= EH() ? gIf(o, t) : fIf(o, t));
    })(),
    g = [
      maybe("queued_commands", () => getQueuedCommandAttachments(r, a)),
      maybe("date_change", () => Promise.resolve(getDateChangeAttachments(o))),
      maybe("ultrathink_effort", () => Promise.resolve(getUltrathinkEffortAttachment(e))),
      maybe("deferred_tools_delta", () =>
        Promise.resolve(
          getDeferredToolsDeltaAttachment(
            t.options.tools,
            t.options.mainLoopModel,
            o,
            {
              callSite: d ? "attachments_main" : "attachments_subagent",
              querySource: s,
            },
            t.options.mcpClients.filter((_) => _.type === "pending").map((_) => _.name),
          ),
        ),
      ),
      maybe("agent_listing_delta", () => Promise.resolve(getAgentListingDeltaAttachment(t, o))),
      maybe("mcp_instructions_delta", () =>
        Promise.resolve(
          getMcpInstructionsDeltaAttachment(
            t.options.mcpClients,
            t.options.tools,
            t.options.mainLoopModel,
            o,
          ),
        ),
      ),
      maybe("changed_files", () => getChangedFiles(u)),
      maybe("nested_memory", () => oIf(u)),
      maybe("dynamic_skill", () => getDynamicSkillAttachments(u)),
      maybe("skill_listing", () => getSkillListingAttachments(u)),
      maybe("plan_mode", () => getPlanModeAttachments(e, o, t, i)),
      maybe("plan_mode_exit", () => getPlanModeExitAttachment(o, t)),
      maybe("auto_mode", () => WCf(o, t)),
      maybe("auto_mode_exit", () => qCf(o, t)),
      maybe("todo_reminders", m),
      ...(Jzr() !== null
        ? [
            maybe("tool_search_usage_reminder", () =>
              getToolSearchUsageReminderAttachments(o, t, async () => (await m()).length > 0),
            ),
          ]
        : []),
      ...(el()
        ? [
            maybe("teammate_mailbox", async () => bIf(t)),
            maybe("team_context", async () => getTeamContextAttachment(o ?? [])),
          ]
        : []),
      maybe("agent_pending_messages", async () => getAgentPendingMessageAttachments(t)),
      maybe("critical_system_reminder", () => Promise.resolve(YCf(t))),
      maybe("total_tokens_reminder", () =>
        Promise.resolve(e === null ? AIf(o ?? [], t.options.mainLoopModel) : []),
      ),
    ],
    h = d
      ? [
          ...(JS()
            ? [
                maybe("workflow_keyword_request", () =>
                  Promise.resolve(
                    i?.isRegularUserPrompt && !i.suppressWorkflowKeyword && Fkn()
                      ? zCf(i.preExpansionInput ?? e)
                      : [],
                  ),
                ),
                maybe("ultra_effort_enter", () =>
                  Promise.resolve(i?.isRegularUserPrompt ? KCf(o, t) : []),
                ),
              ]
            : []),
          maybe("ide_selection", async () => getSelectedLinesFromIDE(n, t)),
          maybe("ide_opened_file", async () => getOpenedFileFromIDE(n, t)),
          maybe("output_style", () => getOutputStyleAttachment()),
          maybe("diagnostics", async () => uIf(t)),
          maybe("lsp_diagnostics", async () => getLSPDiagnosticAttachments(t)),
          maybe("unified_tasks", async () => yIf(t)),
          maybe("async_hook_responses", async () => getAsyncHookResponseAttachments()),
          maybe("memory_update", () => Promise.resolve(getMemoryUpdateAttachments(t))),
          maybe("token_usage", async () =>
            Promise.resolve(EIf(o ?? [], t.options.mainLoopModel, t.options.autoCompactWindow)),
          ),
          maybe("budget_usd", async () => Promise.resolve(TIf(t.options.maxBudgetUsd))),
          maybe("output_token_usage", async () => Promise.resolve(HIf())),
        ]
      : [],
    [y, b] = await Promise.all([Promise.all(g), Promise.all(h)]);
  return (
    clearTimeout(c),
    [...f.flat(), ...y.flat(), ...b.flat()].filter((_) => _ !== void 0 && _ !== null)
  );
}
async function maybe(e, t) {
  let n = Date.now();
  try {
    let r = await t(),
      o = Date.now() - n;
    if (Math.random() < 0.05) {
      let s = r.filter((i) => i !== void 0 && i !== null).reduce((i, a) => i + De(a).length, 0);
      G("tengu_attachment_compute_duration", {
        label: e,
        duration_ms: o,
        attachment_size_bytes: s,
        attachment_count: r.length,
      });
    }
    return r;
  } catch (r) {
    let o = Date.now() - n;
    if (Math.random() < 0.05)
      G("tengu_attachment_compute_duration", {
        label: e,
        duration_ms: o,
        error: true,
      });
    if (r instanceof NU)
      T(`Attachment image resize failed in ${e}: ${r.message}`, {
        level: "error",
      });
    else ke(r);
    return (rG(`Attachment error in ${e}`, r), []);
  }
}
async function getQueuedCommandAttachments(e, t) {
  if (!e) return [];
  let n = e.filter((r) => BCf.has(r.mode));
  return Promise.all(
    n.map(async (r) => {
      let o = await FCf(r.pastedContents, t),
        s = r.value;
      if (o.length > 0)
        s = [
          {
            type: "text",
            text:
              typeof r.value === "string"
                ? r.value
                : zl(
                    r.value,
                    `
`,
                  ),
          },
          ...o,
        ];
      return {
        type: "queued_command",
        prompt: s,
        source_uuid: r.uuid,
        imagePasteIds: o0l(r.pastedContents),
        fileAttachments: r.fileAttachments,
        commandMode: r.mode,
        origin: r.origin,
        timestamp: r.timestamp,
        isMeta: r.isMeta,
        ...(r.verifiedSlackHumanTurn && {
          verifiedSlackHumanTurn: true,
        }),
      };
    }),
  ).then(UCf);
}
function UCf(e) {
  let t = (r) => r.verifiedSlackHumanTurn === true && YW(r.origin) && typeof r.prompt === "string",
    n = 0;
  while (n < e.length) {
    if (!t(e[n])) {
      n++;
      continue;
    }
    let r = n + 1;
    while (r < e.length && t(e[r])) r++;
    if (r - n >= 2) {
      let o = e.slice(n, r);
      o[0].batchedRelayPrompts = o.map((s) => s.prompt);
      for (let s = 1; s < o.length; s++) o[s].renderedByBatchHead = true;
    }
    n = r;
  }
  return e;
}
function getAgentPendingMessageAttachments(e) {
  let t = e.agentId;
  if (!t) return [];
  return CJn(t, e.taskRegistry).map((r) => ({
    type: "queued_command",
    prompt: r.text,
    source_uuid: r$o.randomUUID(),
    origin: r.origin,
    isMeta: r.isMeta,
  }));
}
async function FCf(e, t) {
  if (!e) return [];
  let n = Object.values(e).filter(qze);
  if (n.length === 0) return [];
  return await Promise.all(
    n.map(async (o) => {
      let { block: s } = await FM({
        data: o.content,
        mediaType: o.mediaType,
        limits: t,
      });
      return s;
    }),
  );
}
function getPlanModeAttachmentTurnCount(e) {
  let t = 0,
    n = false;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "user" && !o.isMeta && !P0l(o.message.content)) t++;
    else if (
      o?.type === "attachment" &&
      (o.attachment.type === "plan_mode" || o.attachment.type === "plan_mode_reentry")
    ) {
      n = true;
      break;
    } else if (o?.type === "attachment" && o.attachment.type === "plan_mode_exit") break;
  }
  return {
    turnCount: t,
    foundPlanModeAttachment: n,
  };
}
function jCf(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r?.type === "attachment") {
      if (r.attachment.type === "plan_mode_exit") break;
      if (r.attachment.type === "plan_mode") t++;
    }
  }
  return t;
}
async function getPlanModeAttachments(e, t, n, r) {
  if (Fr(n).mode !== "plan") return [];
  if (t && t.length > 0) {
    let { turnCount: u, foundPlanModeAttachment: d } = getPlanModeAttachmentTurnCount(t);
    if (d && u < PLAN_MODE_ATTACHMENT_CONFIG.TURNS_BETWEEN_ATTACHMENTS) return [];
  }
  L$e(Rt(), r?.planSlugSeed ?? e ?? void 0);
  let s = _P(n.agentId),
    i = bP(n.agentId),
    a = [];
  if (LCt() && i !== null)
    (a.push({
      type: "plan_mode_reentry",
      planFilePath: s,
    }),
      xK(false));
  let c =
    (jCf(t ?? []) + 1) % PLAN_MODE_ATTACHMENT_CONFIG.FULL_REMINDER_EVERY_N_ATTACHMENTS === 1
      ? "full"
      : "sparse";
  return (
    a.push({
      type: "plan_mode",
      reminderType: c,
      isSubAgent: !!n.agentId,
      planFilePath: s,
      planExists: i !== null,
      customInstructions: n.options.planModeInstructions,
    }),
    a
  );
}
async function getPlanModeExitAttachment(e, t) {
  if (Fr(t).mode === "plan") return (Vie(false), []);
  let { foundPlanModeAttachment: n } = getPlanModeAttachmentTurnCount(e ?? []);
  if (!zbr() && !n) return [];
  Vie(false);
  let r = _P(t.agentId),
    o = bP(t.agentId) !== null;
  return [
    {
      type: "plan_mode_exit",
      planFilePath: r,
      planExists: o,
    },
  ];
}
function getAutoModeAttachmentTurnCount(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n?.type !== "attachment") continue;
    if (n.attachment.type === "auto_mode") return true;
    if (n.attachment.type === "auto_mode_exit") return false;
  }
  return false;
}
async function WCf(e, t) {
  if (Fr(t).mode !== "auto") return [];
  if (ph(t.options.mainLoopModel)) return [];
  if (getAutoModeAttachmentTurnCount(e ?? [])) return [];
  return [
    {
      type: "auto_mode",
    },
  ];
}
async function qCf(e, t) {
  if (!Kbr()) return [];
  if ((B2(false), Fr(t).mode === "auto" || (NCf?.isAutoModeActive() ?? false))) return [];
  if (!getAutoModeAttachmentTurnCount(e ?? [])) return [];
  return [
    {
      type: "auto_mode_exit",
    },
  ];
}
function getDateChangeAttachments(e) {
  let t = Koo();
  if (oSr() !== t) NCt(t);
  if (sSe() === t) return [];
  for (let r of Py(e ?? [])) {
    if (r.type !== "attachment") continue;
    if (r.attachment.type === "date_change" && r.attachment.newDate === t) return [];
  }
  return [
    {
      type: "date_change",
      newDate: t,
    },
  ];
}
function getUltrathinkEffortAttachment(e) {
  if (!B4e() || !e || !kvi(e)) return [];
  return (
    G("tengu_ultrathink", {}),
    [
      {
        type: "ultrathink_effort",
      },
    ]
  );
}
function zCf(e) {
  if (!e || !y0l(e)) return [];
  return (
    G("tengu_workflow_keyword", {}),
    [
      {
        type: "workflow_keyword_request",
      },
    ]
  );
}
function KCf(e, t) {
  let n = Xte(t.options.mainLoopModel, gg(t), g7n(t)),
    r = "none",
    o = 0;
  if (e)
    for (let s = e.length - 1; s >= 0; s--) {
      let i = e[s];
      if (i === void 0) continue;
      if (i.type === "attachment") {
        if (i.attachment.type === "ultra_effort_enter") {
          r = "enter";
          break;
        }
        if (i.attachment.type === "ultra_effort_exit") {
          r = "exit";
          break;
        }
      } else if (i.type === "user" && !i.isMeta && !P0l(i.message.content)) o++;
    }
  if (n) {
    if (r !== "enter")
      return (
        G("tengu_ultra_effort", {
          is_enter: true,
          is_full: true,
        }),
        [
          {
            type: "ultra_effort_enter",
            reminderType: "full",
          },
        ]
      );
    if (o >= ULTRA_EFFORT_CONFIG.TURNS_BETWEEN_MAINTENANCE)
      return (
        G("tengu_ultra_effort", {
          is_enter: true,
          is_full: false,
        }),
        [
          {
            type: "ultra_effort_enter",
            reminderType: "sparse",
          },
        ]
      );
    return [];
  }
  if (r === "enter")
    return (
      G("tengu_ultra_effort", {
        is_enter: false,
      }),
      [
        {
          type: "ultra_effort_exit",
        },
      ]
    );
  return [];
}
function getDeferredToolsDeltaAttachment(e, t, n, r, o) {
  if (!o$()) return [];
  if (!CX(t)) return [];
  if (!F$e(e)) return [];
  let s = xMo(e, n ?? [], r, o);
  if (!s) return [];
  return [
    {
      type: "deferred_tools_delta",
      ...s,
    },
  ];
}
function getAgentListingDeltaAttachment(e, t) {
  if (!e.options.tools.some((p) => Ql(p, ss))) return [];
  let { activeAgents: n, allowedAgentTypes: r } = e.options.agentDefinitions,
    o = new Set();
  for (let p of e.options.tools) {
    let f = iDe(p);
    if (f) o.add(f);
  }
  let s = Fr(e),
    i = _$e(c$o(n, [...o]), s, ss);
  if (r) i = i.filter((p) => r.includes(p.agentType));
  let a = new Set();
  for (let p of t ?? []) {
    if (p.type !== "attachment") continue;
    if (p.attachment.type !== "agent_listing_delta") continue;
    for (let f of p.attachment.addedTypes) a.add(f);
    for (let f of p.attachment.removedTypes) a.delete(f);
  }
  let l = new Set(i.map((p) => p.agentType)),
    c = i.filter((p) => !a.has(p.agentType)),
    u = [];
  for (let p of a) if (!l.has(p)) u.push(p);
  if (c.length === 0 && u.length === 0) return [];
  (c.sort((p, f) => p.agentType.localeCompare(f.agentType)), u.sort());
  let d = ph(e.options.mainLoopModel);
  return [
    {
      type: "agent_listing_delta",
      addedTypes: c.map((p) => p.agentType),
      addedLines: c.map((p) => jhl(p, d)),
      removedTypes: u,
      isInitial: a.size === 0,
      showConcurrencyNote: Di() !== "pro",
    },
  ];
}
function getMcpInstructionsDeltaAttachment(e, t, n, r) {
  let o = [];
  if (o$() && CX(n) && F$e(t))
    o.push({
      serverName: VD,
      block: a0l,
    });
  o.push({
    serverName: S7,
    block: l0l,
  });
  let s = s0l(e, r ?? [], o);
  if (!s) return [];
  return [
    {
      type: "mcp_instructions_delta",
      ...s,
    },
  ];
}
function YCf(e) {
  let t = e.criticalSystemReminder_EXPERIMENTAL;
  if (!t) return [];
  return [
    {
      type: "critical_system_reminder",
      content: t,
    },
  ];
}
async function getOutputStyleAttachment() {
  let t = jo()?.outputStyle || "default";
  if (t === "default") return [];
  let n = await qZn();
  return [
    {
      type: "output_style",
      style: t,
      turnReminder: n?.turnReminder,
    },
  ];
}
async function getSelectedLinesFromIDE(e, t) {
  if (e?.source === "diff" && e.text)
    return [
      {
        type: "selected_lines_in_diff",
        lineCount: e.lineCount,
        content: e.text,
      },
    ];
  let n = R3t(t.options.mcpClients);
  if (!n || e?.lineStart === void 0 || !e.text || !e.filePath) return [];
  if (kSt(e.filePath, Fr(t))) return [];
  return [
    {
      type: "selected_lines_in_ide",
      ideName: n,
      lineStart: e.lineStart,
      lineEnd: e.lineStart + e.lineCount - 1,
      filename: e.filePath,
      content: e.text,
      displayPath: Nk.relative($t(), e.filePath),
    },
  ];
}
function getDirectoriesToProcess(e, t) {
  let n = Nk.dirname(Nk.resolve(e));
  if (!n.startsWith(t))
    try {
      let i = qt().realpathSync(n);
      if (i.startsWith(t)) n = i;
    } catch {}
  let r = [],
    o = n;
  while (o !== t && o !== Nk.parse(o).root) {
    if (o.startsWith(t)) r.push(o);
    o = Nk.dirname(o);
  }
  r.reverse();
  let s = [];
  o = t;
  while (o !== Nk.parse(o).root) (s.push(o), (o = Nk.dirname(o)));
  return (
    s.reverse(),
    {
      nestedDirs: r,
      cwdLevelDirs: s,
    }
  );
}
function isInstructionsMemoryType(e) {
  return e === "User" || e === "Project" || e === "Local" || e === "Managed";
}
function memoryFilesToAttachments(e, t, n) {
  let r = [],
    o = Sjt();
  for (let s of e) {
    if (t.loadedNestedMemoryPaths?.[s.path]) continue;
    if (!t.readFileState.has(s.path)) {
      if (
        (r.push({
          type: "nested_memory",
          path: s.path,
          content: s,
          displayPath: Nk.relative($t(), s.path),
        }),
        t.loadedNestedMemoryPaths)
      )
        t.loadedNestedMemoryPaths[s.path] = true;
      if (
        (t.readFileState.set(s.path, {
          content: s.contentDiffersFromDisk ? (s.rawContent ?? s.content) : s.content,
          timestamp: Date.now(),
          offset: void 0,
          limit: void 0,
          isPartialView: s.contentDiffersFromDisk,
          keepContent: true,
        }),
        o && isInstructionsMemoryType(s.type))
      ) {
        let i = s.globs ? "path_glob_match" : s.parent ? "include" : "nested_traversal";
        o5e(s.path, s.type, i, {
          globs: s.globs,
          triggerFilePath: n,
          parentFilePath: s.parent,
        });
      }
    }
  }
  return r;
}
async function getNestedMemoryAttachmentsForFile(e, t, n) {
  if (Oe.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return [];
  let r = [];
  try {
    if (!JU(e, n.toolPermissionContext)) return r;
    let o = new Set(),
      s = yr(),
      i = await Pso(e, o);
    r.push(...memoryFilesToAttachments(i, t, e));
    let { nestedDirs: a, cwdLevelDirs: l } = getDirectoriesToProcess(e, s),
      c = at("tengu_paper_halyard", false);
    for (let u of a) {
      let d = (await bjt(u, e, o)).filter(
        (p) => !c || (p.type !== "Project" && p.type !== "Local"),
      );
      r.push(...memoryFilesToAttachments(d, t, e));
    }
    for (let u of l) {
      let d = (await Mso(u, e, o)).filter(
        (p) => !c || (p.type !== "Project" && p.type !== "Local"),
      );
      r.push(...memoryFilesToAttachments(d, t, e));
    }
  } catch (o) {
    ke(o);
  }
  return r;
}
async function getOpenedFileFromIDE(e, t) {
  if (!e?.filePath || e.text) return [];
  let n = Fr(t);
  if (kSt(e.filePath, n)) return [];
  return [
    ...(await getNestedMemoryAttachmentsForFile(e.filePath, t, {
      toolPermissionContext: n,
    })),
    {
      type: "opened_file_in_ide",
      filename: e.filePath,
    },
  ];
}
async function processAtMentionedFiles(e, t) {
  let n = extractAtMentionedFiles(e);
  if (n.length === 0) return [];
  let r = Fr(t);
  return (
    await Promise.all(
      n.map(async (s) => {
        try {
          let { filename: i, lineStart: a, lineEnd: l } = parseAtMentionedFileLines(s);
          if (WZn(i, r.trustedNetworkDirectories))
            return (Le("input_file_at_mention", "denied"), null);
          let c = ds(i);
          if (kSt(c, r)) return (Le("input_file_at_mention", "denied"), null);
          try {
            if ((await RSt.stat(c)).isDirectory())
              try {
                let p = await RSt.readdir(c, {
                    withFileTypes: true,
                  }),
                  f = 1000,
                  m = p.length > 1000,
                  g = p.slice(0, 1000).map((y) => y.name);
                if (m) g.push(`\u2026 and ${p.length - 1000} more entries`);
                let h = g.join(`
`);
                return (
                  G("tengu_at_mention_extracting_directory_success", {}),
                  xe("input_dir_at_mention"),
                  x1({
                    mentionType: "directory",
                    success: true,
                  }),
                  {
                    type: "directory",
                    path: c,
                    content: h,
                    displayPath: Nk.relative($t(), c),
                  }
                );
              } catch {
                return (
                  G("tengu_at_mention_extracting_directory_error", {}),
                  Le("input_dir_at_mention", "readdir_failed"),
                  null
                );
              }
          } catch {}
          let u = await generateFileAttachment(
            c,
            t,
            "tengu_at_mention_extracting_filename_success",
            "tengu_at_mention_extracting_filename_error",
            "at-mention",
            {
              offset: a,
              limit: l && a ? l - a + 1 : void 0,
            },
          );
          if (u) xe("input_file_at_mention");
          return u;
        } catch {
          (G("tengu_at_mention_extracting_filename_error", {}),
            x1({
              mentionType: "file",
              success: false,
            }));
        }
      }),
    )
  ).filter(Boolean);
}
function processAgentMentions(e, t) {
  let n = extractAgentMentions(e);
  if (n.length === 0) return [];
  return n
    .map((o) => {
      let s = o.replace("agent-", ""),
        i = t.find((a) => a.agentType === s);
      if (!i)
        return (
          G("tengu_at_mention_agent_not_found", {}),
          x1({
            mentionType: "agent",
            success: false,
          }),
          null
        );
      return (
        G("tengu_at_mention_agent_success", {}),
        x1({
          mentionType: "agent",
          success: true,
        }),
        {
          type: "agent_mention",
          agentType: i.agentType,
        }
      );
    })
    .filter((o) => o !== null);
}
async function processMcpResourceAttachments(e, t) {
  let n = extractMcpResourceMentions(e);
  if (n.length === 0) return [];
  let r = t.options.mcpClients || [];
  return (
    await Promise.all(
      n.map(async (s) => {
        try {
          let [i, ...a] = s.split(":"),
            l = a.join(":");
          if (!i || !l)
            return (
              G("tengu_at_mention_mcp_resource_error", {}),
              x1({
                mentionType: "mcp_resource",
                success: false,
              }),
              null
            );
          let c = r.find((p) => p.name === i);
          if (!c || c.type !== "connected")
            return (
              G("tengu_at_mention_mcp_resource_error", {}),
              x1({
                mentionType: "mcp_resource",
                success: false,
              }),
              null
            );
          let d = (t.options.mcpResources?.[i] || []).find((p) => p.uri === l);
          if (!d)
            return (
              G("tengu_at_mention_mcp_resource_error", {}),
              x1({
                mentionType: "mcp_resource",
                success: false,
              }),
              null
            );
          try {
            let p = await c.client.readResource({
              uri: l,
            });
            return (
              G("tengu_at_mention_mcp_resource_success", {}),
              x1({
                mentionType: "mcp_resource",
                success: true,
              }),
              {
                type: "mcp_resource",
                server: i,
                uri: l,
                name: d.name || l,
                description: d.description,
                content: p,
              }
            );
          } catch (p) {
            return (
              G("tengu_at_mention_mcp_resource_error", {}),
              x1({
                mentionType: "mcp_resource",
                success: false,
              }),
              T(
                `MCP resource read failed for ${i} ${l}: ${p instanceof Error ? p.message : String(p)}`,
                {
                  level: "error",
                },
              ),
              null
            );
          }
        } catch {
          return (
            G("tengu_at_mention_mcp_resource_error", {}),
            x1({
              mentionType: "mcp_resource",
              success: false,
            }),
            null
          );
        }
      }),
    )
  ).filter((s) => s !== null);
}
async function getChangedFiles(e) {
  let t = VRe(e.readFileState);
  if (t.length === 0) return [];
  let n = Fr(e),
    o = (
      await Promise.all(
        t.map(async (i) => {
          let a = e.readFileState.get(i);
          if (!a) return null;
          if (a.offset !== void 0 || a.limit !== void 0) return null;
          let l = ds(i);
          if (kSt(l, n)) return null;
          try {
            if ((await FFe(l)) <= a.timestamp) return null;
            let u = {
              file_path: l,
            };
            if (!(await Vg.validateInput(u, e)).result) return null;
            let p = await Vg.call(u, e);
            if (p.data.type === "text") {
              if (p.data.file.truncatedByTokenCap === true) return null;
              if (Uue(a, p.data.file.content)) return null;
              let f = Rel(a.content, p.data.file.content);
              if (f === "") return null;
              return {
                type: "edited_text_file",
                filename: l,
                snippet: f,
              };
            }
            if (p.data.type === "image")
              try {
                let f = await GMo(l, void 0, void 0, Gh(e.options.mainLoopModel));
                return {
                  type: "edited_image_file",
                  filename: l,
                  content: f,
                };
              } catch (f) {
                return (
                  T(
                    `Failed to read changed image file ${l}: ${f instanceof Error ? f.message : String(f)}`,
                    {
                      level: "error",
                    },
                  ),
                  G("tengu_watched_file_compression_failed", {
                    ext: jte(l),
                    ...LM(f),
                  }),
                  null
                );
              }
            return null;
          } catch (c) {
            if (wn(c)) e.readFileState.delete(i);
            return null;
          }
        }),
      )
    ).filter((i) => i != null),
    s = 0;
  for (let i of o) {
    if (i.type !== "edited_text_file") continue;
    if (s >= rIf) i.snippet = "";
    else s += i.snippet.length;
  }
  return o;
}
async function oIf(e) {
  let { nestedMemoryAttachmentTriggers: t, pendingNestedMemoryTriggers: n } = e;
  if (t && n && !e.agentId) {
    for (let s of n) if (!t.includes(s)) t.push(s);
    n.length = 0;
  }
  if (Oe.CLAUDE_CODE_DISABLE_CLAUDE_MDS) {
    if (t) t.length = 0;
    return [];
  }
  if (!t || t.length === 0) return [];
  let r = Fr(e),
    o = [];
  for (let s of t) {
    let i = await getNestedMemoryAttachmentsForFile(s, e, {
      toolPermissionContext: r,
    });
    o.push(...i);
  }
  return ((t.length = 0), o);
}
async function getRelevantMemoryAttachments(e, t, n, r, o, s, i) {
  let a = extractAgentMentions(e).flatMap((h) => {
      let y = h.replace("agent-", ""),
        b = t.find((_) => _.agentType === y);
      return b?.memory ? [cit(y, b.memory)] : [];
    }),
    l = a.length > 0 ? a : [mm()],
    c = iIf(i, o),
    u = Promise.resolve([]);
  await dwl(o);
  let p = (
      await Promise.all(
        l.map((h, y) =>
          _0l(e, h, n, o, s, y === 0 ? c : u).catch(() => ({
            memories: [],
            knowledge: [],
          })),
        ),
      )
    )
      .flatMap((h) => h.memories)
      .filter((h) => !r.has(h.path) && !s.has(h.path))
      .slice(0, 5),
    f = await readMemoriesForSurfacing(p, o),
    m = [],
    g = [...f, ...m];
  if (g.length === 0) return [];
  return [
    {
      type: "relevant_memories",
      memories: g,
    },
  ];
}
async function extractAkiSearchTerms(e, t) {
  return [];
}
async function iIf(e, t) {
  try {
    return [];
  } catch {
    return [];
  }
}
function collectSurfacedMemories(e) {
  let t = new Set(),
    n = 0;
  for (let r of e)
    if (r.type === "attachment" && r.attachment.type === "relevant_memories")
      for (let o of r.attachment.memories) (t.add(o.path), (n += o.content.length));
  return {
    paths: t,
    totalBytes: n,
  };
}
async function readMemoriesForSurfacing(e, t) {
  return (
    await Promise.all(
      e.map(async ({ path: r, mtimeMs: o }) => {
        try {
          let s = await mSt(r, 0, ZMo, S0l, t, {
              truncateOnByteLimit: true,
            }),
            i = s.totalLines > ZMo || s.truncatedByBytes,
            a = i
              ? s.content +
                `

> This memory file was truncated (${s.truncatedByBytes ? `${S0l} byte limit` : `first ${ZMo} lines`}). Use the ${Ds} tool to view the complete file at: ${r}`
              : s.content;
          return {
            path: r,
            content: a,
            mtimeMs: o,
            header: memoryHeader(r, o),
            limit: i ? s.lineCount : void 0,
          };
        } catch {
          return null;
        }
      }),
    )
  ).filter((r) => r !== null);
}
function memoryHeader(e, t) {
  let n = Coo(t);
  return n
    ? `${n}

Memory: ${e}:`
    : `Memory: ${e}:`;
}
function startRelevantMemoryPrefetch(e, t, n, r) {
  let o = t.memorySelector;
  if (!o || t.agentId || !lu() || !at("tengu_moth_copse", false) || aIf.has(n)) return;
  let s = e.findLast((f) => f.type === "user" && !f.isMeta);
  if (!s) return;
  let i = P$(s);
  if (!i || !/\s/.test(i.trim())) return;
  let a = collectSurfacedMemories(e);
  if (a.totalBytes >= RELEVANT_MEMORIES_CONFIG.MAX_SESSION_BYTES) return;
  let l = c$(t.abortController),
    c = Date.now(),
    u = r && {
      ...r,
      toolUseContext: {
        ...t,
        abortController: l,
      },
      forkContextMessages: [...e],
    },
    d = getRelevantMemoryAttachments(
      i,
      t.options.agentDefinitions.activeAgents,
      o,
      t.readFileState,
      l.signal,
      a.paths,
      u,
    ).catch((f) => {
      if (!lh(f)) ke(f);
      return [];
    }),
    p = {
      promise: d,
      settledAt: null,
      consumedOnIteration: -1,
      [Symbol.dispose]() {
        l.abort();
        let f = o.lastUsage;
        G("tengu_memdir_prefetch_collected", {
          hidden_by_first_iteration: p.settledAt !== null && p.consumedOnIteration === 0,
          consumed_on_iteration: p.consumedOnIteration,
          latency_ms: (p.settledAt ?? Date.now()) - c,
          cache_read_input_tokens: f?.cacheReadInputTokens,
          cache_creation_input_tokens: f?.cacheCreationInputTokens,
          selector_turn_count: f?.turnCount,
        });
      },
    };
  return (
    d.finally(() => {
      p.settledAt = Date.now();
    }),
    p
  );
}
function isToolResultBlock(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    e.type === "tool_result" &&
    typeof e.tool_use_id === "string"
  );
}
function P0l(e) {
  return Array.isArray(e) && e.some(isToolResultBlock);
}
function filterDuplicateMemoryAttachments(e, t) {
  return e
    .map((n) => {
      if (n.type !== "relevant_memories") return n;
      let r = n.memories.filter((o) => !t.has(o.path));
      for (let o of r)
        t.set(o.path, {
          content: o.content,
          timestamp: o.mtimeMs,
          offset: void 0,
          limit: o.limit,
        });
      return r.length > 0
        ? {
            ...n,
            memories: r,
          }
        : null;
    })
    .filter((n) => n !== null);
}
async function getDynamicSkillAttachments(e) {
  let t = [],
    n = e.dynamicSkillDirTriggers;
  if (n && n.length > 0) {
    let r = await Promise.all(
      n.map(async (o) => {
        try {
          let i = (
              await RSt.readdir(o, {
                withFileTypes: true,
              })
            )
              .filter((l) => l.isDirectory() || l.isSymbolicLink())
              .map((l) => l.name),
            a = await Promise.all(
              i.map(async (l) => {
                try {
                  return (await RSt.stat(Nk.resolve(o, l, "SKILL.md")), l);
                } catch {
                  return null;
                }
              }),
            );
          return {
            skillDir: o,
            skillNames: a.filter((l) => l !== null),
          };
        } catch {
          return {
            skillDir: o,
            skillNames: [],
          };
        }
      }),
    );
    for (let { skillDir: o, skillNames: s } of r)
      if (s.length > 0)
        t.push({
          type: "dynamic_skill",
          skillDir: o,
          skillNames: s,
          displayPath: Nk.relative($t(), o),
        });
    n.length = 0;
  }
  return t;
}
function resetSentSkillNames() {
  (SYt.clear(), (jZn = false), (fHe = null));
}
function evictSentSkillNames(e) {
  for (let t of SYt.values()) for (let n of e) t.delete(n);
  if (fHe !== null) for (let t of e) fHe.delete(t);
}
function clearSentSkillNamesForAgent(e) {
  SYt.delete(e);
}
function suppressNextSkillListing() {
  jZn = true;
}
function seedSentSkillNames(e) {
  if (fHe === null) fHe = new Set();
  for (let t of e) fHe.add(t);
}
function computeSkillListingDelta(e, t) {
  let n = e ?? "",
    r = SYt.get(n);
  if (!r) ((r = new Set()), SYt.set(n, r));
  if (fHe !== null && e === void 0) {
    for (let i of t) if (fHe.has(i.name)) r.add(i.name);
    fHe = null;
  }
  if (jZn && e === void 0) {
    jZn = false;
    for (let i of t) r.add(i.name);
    return null;
  }
  let o = t.filter((i) => !r.has(i.name));
  if (o.length === 0) return null;
  let s = r.size === 0;
  for (let i of o) r.add(i.name);
  return {
    newSkills: o,
    isInitial: s,
  };
}
async function getSkillListingAttachments(e) {
  if (N2()) return [];
  if (OCf?.isSkillsAsToolsEnabled()) return [];
  if (!e.options.tools.some((u) => Ql(u, nE))) return [];
  let t = rc(),
    n = await aC(t),
    r = AYt(e.getMcp().commands),
    o = EYt(r.length > 0 ? yQ(oE([...n, ...r], "name")) : n);
  if (e.agentId === void 0) o = Due(o, RK());
  let s = computeSkillListingDelta(e.agentId, o);
  if (s === null) return [];
  let { newSkills: i, isInitial: a } = s;
  T(`Sending ${i.length} skills via attachment (${a ? "initial" : "dynamic"})`);
  let l = nH(e.options.mainLoopModel, OS());
  return [
    {
      type: "skill_listing",
      content: Too(i, l, (u) => P8e(u.name), rH(e.options.mainLoopModel)),
      skillCount: i.length,
      isInitial: a,
      names: i.map((u) => u.name),
    },
  ];
}
function extractAtMentionedFiles(e) {
  let t = /(^|[\s\u3002\u3001\uFF1F\uFF01])@"([^"]+)"/g,
    n = /(^|[\s\u3002\u3001\uFF1F\uFF01])@([^\s]+)\b/g,
    r = [],
    o = [],
    s;
  while ((s = t.exec(e)) !== null) if (s[2] && !s[2].endsWith(" (agent)")) r.push(s[2]);
  return (
    (e.match(n) || []).forEach((a) => {
      let l = a.slice(a.indexOf("@") + 1);
      if (!l.startsWith('"')) o.push(l);
    }),
    Uo([...r, ...o])
  );
}
function extractMcpResourceMentions(e) {
  let t = /(^|[\s\u3002\u3001\uFF1F\uFF01])@([^\s]+:[^\s]+)\b/g,
    n = e.match(t) || [];
  return Uo(n.map((r) => r.slice(r.indexOf("@") + 1)));
}
function extractAgentMentions(e) {
  let t = [],
    n = /(^|[\s\u3002\u3001\uFF1F\uFF01])@"([\w:.@-]+) \(agent\)"/g,
    r;
  while ((r = n.exec(e)) !== null) if (r[2]) t.push(r[2]);
  let o = /(^|[\s\u3002\u3001\uFF1F\uFF01])@(agent-[\w:.@-]+)/g,
    s = e.match(o) || [];
  for (let i of s) t.push(i.slice(i.indexOf("@") + 1));
  return Uo(t);
}
function parseAtMentionedFileLines(e) {
  let t = e.match(/^([^#]+)(?:#L(\d+)(?:-(\d+))?)?(?:#[^#]*)?$/);
  if (!t)
    return {
      filename: e,
    };
  let [, n, r, o] = t,
    s = r ? parseInt(r, 10) : void 0,
    i = o ? parseInt(o, 10) : s;
  return {
    filename: n ?? e,
    lineStart: s,
    lineEnd: i,
  };
}
function logDiagnosticsInjected(e, t) {
  G("tengu_lsp_diagnostics_injected", {
    diagnostics_chars: y5.formatDiagnosticsBlock(e).length,
    diagnostic_count: e.reduce((n, r) => n + r.diagnostics.length, 0),
    file_count: e.length,
    source: $e(t),
  });
}
async function uIf(e) {
  if (!e.options.tools.some((n) => Ql(n, Co) || Ql(n, Ss))) return [];
  let t = await tEe.getNewDiagnostics();
  if (t.length === 0) return [];
  return (
    logDiagnosticsInjected(t, "ide-mcp"),
    [
      {
        type: "diagnostics",
        files: t,
        isNew: true,
      },
    ]
  );
}
async function getLSPDiagnosticAttachments(e) {
  if (!e.options.tools.some((t) => Ql(t, Co) || Ql(t, Ss))) return [];
  T("LSP Diagnostics: getLSPDiagnosticAttachments called");
  try {
    let t = iLa();
    if (t.length === 0) return [];
    T(`LSP Diagnostics: Found ${t.length} pending diagnostic set(s)`);
    let n = t.map(
      ({ files: r }) => (
        logDiagnosticsInjected(r, "lsp"),
        {
          type: "diagnostics",
          files: r,
          isNew: true,
        }
      ),
    );
    if (t.length > 0)
      (aLa(), T(`LSP Diagnostics: Cleared ${t.length} delivered diagnostic(s) from registry`));
    return (T(`LSP Diagnostics: Returning ${n.length} diagnostic attachment(s)`), n);
  } catch (t) {
    let n = Zr(t);
    return (ke(Error(`Failed to get LSP diagnostic attachments: ${n.message}`)), []);
  }
}
async function* getAttachmentMessages(e, t, n, r, o, s, i, a) {
  let l = await getAttachments(e, t, n, r, s, i, a);
  if (l.length === 0) return;
  G("tengu_attachments", {
    attachment_types: l.map((c) => c.type),
  });
  for (let c of l) yield createAttachmentMessage(c, o);
}
async function tryGetPDFReference(e) {
  let t = Nk.parse(e).ext.toLowerCase();
  if (!pit(t)) return null;
  try {
    let [n, r] = await Promise.all([qt().stat(e), TZn(e)]),
      o = r ?? Math.ceil(n.size / 102400);
    if (o > wDn)
      return (
        G("tengu_pdf_reference_attachment", {
          pageCount: o,
          fileSize: n.size,
          hadPdfinfo: r !== null,
        }),
        {
          type: "pdf_reference",
          filename: e,
          pageCount: o,
          fileSize: n.size,
          displayPath: Nk.relative($t(), e),
        }
      );
  } catch {}
  return null;
}
async function generateFileAttachment(e, t, n, r, o, s) {
  let { offset: i, limit: a } = s ?? {};
  if (kSt(e, Fr(t))) return null;
  if (o === "at-mention" && !Xpn(e, jSe().maxSizeBytes)) {
    let c = Nk.parse(e).ext.toLowerCase();
    if (!pit(c))
      try {
        let u = await qt().stat(e);
        return (
          G("tengu_attachment_file_too_large", {
            size_bytes: u.size,
            mode: o,
          }),
          null
        );
      } catch {}
  }
  if (o === "at-mention") {
    let c = await tryGetPDFReference(e);
    if (c)
      return (
        G(n, {}),
        x1({
          mentionType: "file",
          success: true,
        }),
        c
      );
  }
  let l = t.readFileState.get(e);
  if (l && o === "at-mention")
    try {
      let c = await FFe(e);
      if (
        !l.isPartialView &&
        l.timestamp <= c &&
        c === l.timestamp &&
        (l.content !== "" || (l.contentLength ?? 0) === 0)
      ) {
        if ((G(n, {}), o === "at-mention"))
          x1({
            mentionType: "file",
            success: true,
          });
        return {
          type: "already_read_file",
          filename: e,
          displayPath: Nk.relative($t(), e),
          content: {
            type: "text",
            file: {
              filePath: e,
              content: l.content,
              numLines:
                hu(
                  l.content,
                  `
`,
                ) + 1,
              startLine: i ?? 1,
              totalLines:
                hu(
                  l.content,
                  `
`,
                ) + 1,
            },
          },
        };
      }
    } catch {}
  try {
    let c = {
      file_path: e,
      offset: i,
      limit: a,
    };
    async function u() {
      if (o === "compact")
        return {
          type: "compact_file_reference",
          filename: e,
          displayPath: Nk.relative($t(), e),
        };
      if (kSt(e, Fr(t))) return null;
      try {
        let p = {
            file_path: e,
            offset: i ?? 1,
            limit: fit,
          },
          f = await Vg.call(p, t);
        if ((G(n, {}), o === "at-mention"))
          x1({
            mentionType: "file",
            success: true,
          });
        return {
          type: "file",
          filename: e,
          content: f.data,
          truncated: true,
          displayPath: Nk.relative($t(), e),
        };
      } catch {
        if ((G(r, {}), o === "at-mention"))
          x1({
            mentionType: "file",
            success: false,
          });
        return null;
      }
    }
    if (!(await Vg.validateInput(c, t)).result) return null;
    try {
      let p = await Vg.call(c, t);
      if (p.data.type === "text" && p.data.file.truncatedByTokenCap === true) return await u();
      if ((G(n, {}), o === "at-mention"))
        x1({
          mentionType: "file",
          success: true,
        });
      return {
        type: "file",
        filename: e,
        content: p.data,
        displayPath: Nk.relative($t(), e),
      };
    } catch (p) {
      if (p instanceof ade || p instanceof WKt) return await u();
      throw p;
    }
  } catch {
    if ((G(r, {}), o === "at-mention"))
      x1({
        mentionType: "file",
        success: false,
      });
    return null;
  }
}
function createAttachmentMessage(
  e,
  t = {
    now: () => new Date().toISOString(),
    uuid: () => r$o.randomUUID(),
  },
) {
  return {
    attachment: e,
    type: "attachment",
    uuid: t.uuid(),
    timestamp: (e.type === "queued_command" && e.timestamp) || t.now(),
  };
}
function getTodoReminderTurnCounts(e) {
  let t = -1,
    n = -1,
    r = 0,
    o = 0;
  for (let s = e.length - 1; s >= 0; s--) {
    let i = e[s];
    if (i?.type === "assistant") {
      if (VZn(i)) continue;
      if (
        t === -1 &&
        "message" in i &&
        Array.isArray(i.message?.content) &&
        i.message.content.some((a) => a.type === "tool_use" && a.name === "TodoWrite")
      )
        t = s;
      if (t === -1) r++;
      if (n === -1) o++;
    } else if (n === -1 && i?.type === "attachment" && i.attachment.type === "todo_reminder") n = s;
    if (t !== -1 && n !== -1) break;
  }
  return {
    turnsSinceLastTodoWrite: r,
    turnsSinceLastReminder: o,
  };
}
async function fIf(e, t) {
  if (!t.options.tools.some((o) => Ql(o, s$))) return [];
  if (FZn && t.options.tools.some((o) => Ql(o, FZn))) return [];
  if (!e || e.length === 0) return [];
  if (getTodoReminderMode() === "off") return [];
  let { turnsSinceLastTodoWrite: n, turnsSinceLastReminder: r } = getTodoReminderTurnCounts(e);
  if (
    n >= TODO_REMINDER_CONFIG.TURNS_SINCE_WRITE &&
    r >= TODO_REMINDER_CONFIG.TURNS_BETWEEN_REMINDERS
  ) {
    let o = t.agentId ?? Rt(),
      i = t.getAppState().todos[o] ?? [];
    return [
      {
        type: "todo_reminder",
        content: i,
        itemCount: i.length,
      },
    ];
  }
  return [];
}
function getTaskReminderTurnCounts(e) {
  let t = -1,
    n = -1,
    r = 0,
    o = 0;
  for (let s = e.length - 1; s >= 0; s--) {
    let i = e[s];
    if (i?.type === "assistant") {
      if (VZn(i)) continue;
      if (
        t === -1 &&
        "message" in i &&
        Array.isArray(i.message?.content) &&
        i.message.content.some((a) => a.type === "tool_use" && (a.name === cC || a.name === ZD))
      )
        t = s;
      if (t === -1) r++;
      if (n === -1) o++;
    } else if (n === -1 && i?.type === "attachment" && i.attachment.type === "task_reminder") n = s;
    if (t !== -1 && n !== -1) break;
  }
  return {
    turnsSinceLastTaskManagement: r,
    turnsSinceLastReminder: o,
  };
}
async function gIf(e, t) {
  if (!EH()) return [];
  if (FZn && t.options.tools.some((o) => Ql(o, FZn))) return [];
  if (!t.options.tools.some((o) => Ql(o, ZD))) return [];
  if (!e || e.length === 0) return [];
  if (getTodoReminderMode() === "off") return [];
  let { turnsSinceLastTaskManagement: n, turnsSinceLastReminder: r } = getTaskReminderTurnCounts(e);
  if (
    n >= TODO_REMINDER_CONFIG.TURNS_SINCE_WRITE &&
    r >= TODO_REMINDER_CONFIG.TURNS_BETWEEN_REMINDERS
  ) {
    let o = await W4(yF());
    return [
      {
        type: "task_reminder",
        content: o,
        itemCount: o.length,
      },
    ];
  }
  return [];
}
function hIf(e) {
  let t = -1,
    n = -1,
    r = 0,
    o = 0;
  for (let s = e.length - 1; s >= 0; s--) {
    let i = e[s];
    if (i?.type === "assistant") {
      if (VZn(i)) continue;
      if (
        t === -1 &&
        "message" in i &&
        Array.isArray(i.message?.content) &&
        i.message.content.some((a) => a.type === "tool_use" && a.name === _h)
      )
        t = s;
      if (t === -1) r++;
      if (n === -1) o++;
    } else if (
      n === -1 &&
      i?.type === "attachment" &&
      i.attachment.type === "tool_search_usage_reminder"
    )
      n = s;
    if (t !== -1 && n !== -1) break;
  }
  return {
    turnsSinceLastToolSearch: r,
    turnsSinceLastReminder: o,
  };
}
async function getToolSearchUsageReminderAttachments(e, t, n) {
  let r = Jzr();
  if (r === null) return [];
  if (!e || e.length === 0) return [];
  let { turnsSinceLastToolSearch: o, turnsSinceLastReminder: s } = hIf(e);
  if (o < r.everyNTurns || s < r.everyNTurns) return [];
  let i = (u) => {
    if (s % r.everyNTurns === 0)
      G("tengu_juniper_shoal_shown", {
        delivered: false,
        skipReason: $e(u),
        everyNTurns: r.everyNTurns,
        turnsSinceLastReminder: s,
      });
    return [];
  };
  if (V2t() !== "tst") return i("mode_not_tst");
  if (!CX(t.options.mainLoopModel)) return i("model_unsupported");
  if (!F$e(t.options.tools)) return i("toolsearch_unavailable");
  let a = xQ(e),
    l = t.options.tools
      .filter((u) => y4(u) && !a.has(u.name))
      .map((u) => u.name)
      .sort();
  if (l.length === 0) return i("no_undiscovered_tools");
  let c = false;
  try {
    c = await n();
  } catch {
    c = false;
  }
  if (c) return i("task_reminder_same_turn");
  return (
    G("tengu_juniper_shoal_shown", {
      delivered: true,
      undiscoveredCount: l.length,
      listedCount: Math.min(l.length, r.maxNames),
      everyNTurns: r.everyNTurns,
      maxNames: r.maxNames,
    }),
    [
      {
        type: "tool_search_usage_reminder",
        undiscoveredToolNames: l.slice(0, r.maxNames),
        undiscoveredCount: l.length,
      },
    ]
  );
}
async function yIf(e) {
  let {
    attachments: t,
    updatedTaskOffsets: n,
    evictedTaskIds: r,
  } = await SHl(e.taskRegistry.all());
  return (
    e.taskRegistry.applyOffsetsAndEvict(n, r),
    t.map((o) => ({
      type: "task_status",
      taskId: o.taskId,
      taskType: o.taskType,
      status: o.status,
      description: o.description,
      deltaSummary: o.deltaSummary,
      outputFilePath: jm(o.taskId),
    }))
  );
}
function getMemoryUpdateAttachments(e) {
  let t = e.getAppState().pendingMemoryUpdates;
  if (t.length === 0) return [];
  e.setAppState((o) =>
    o.pendingMemoryUpdates.length === 0
      ? o
      : {
          ...o,
          pendingMemoryUpdates: [],
        },
  );
  let n = lu() && process.env.CLAUDE_COWORK_MEMORY_INDEX_CONTENT !== "" ? T_e() : null,
    r = (o) => o === n || e.readFileState.has(o) || e.loadedNestedMemoryPaths?.[o] === true;
  return t.map((o) => ({
    type: "memory_update",
    source: o.source,
    summary: o.summary,
    paths: o.paths,
    inContextPaths: o.paths.filter(r),
  }));
}
async function getAsyncHookResponseAttachments() {
  let e = await p0l();
  if (e.length === 0) return [];
  T(`Hooks: getAsyncHookResponseAttachments found ${e.length} responses`);
  let t = e.map(
    ({
      processId: n,
      response: r,
      hookName: o,
      hookEvent: s,
      toolName: i,
      pluginId: a,
      stdout: l,
      stderr: c,
      exitCode: u,
    }) => (
      T(`Hooks: Creating attachment for ${n} (${o}): ${De(r)}`),
      Hfe(r.metrics, a, s),
      {
        type: "async_hook_response",
        processId: n,
        hookName: o,
        hookEvent: s,
        toolName: i,
        response: r,
        stdout: l,
        stderr: c,
        exitCode: u,
      }
    ),
  );
  if (e.length > 0) {
    let n = e.map((r) => r.processId);
    (f0l(n), T(`Hooks: Removed ${n.length} delivered hooks from registry`));
  }
  return (T(`Hooks: getAsyncHookResponseAttachments found ${t.length} attachments`), t);
}
async function bIf(e) {
  if (!el()) return [];
  return [];
}
function getTeamContextAttachment(e) {
  let t = rp(),
    n = PD(),
    r = Oh();
  if (!t || !n) return [];
  if (e.some((l) => l.type === "assistant")) return [];
  let s = tr(),
    i = `${s}/teams/${t}/config.json`,
    a = `${s}/tasks/${t}/`;
  return [
    {
      type: "team_context",
      agentId: n,
      agentName: r || n,
      teamName: t,
      teamConfigPath: i,
      taskListPath: a,
    },
  ];
}
function EIf(e, t, n) {
  if (!ut(process.env.CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT)) return [];
  let r = are(t, n),
    o = OX(e);
  return [
    {
      type: "token_usage",
      used: o,
      total: r,
      remaining: r - o,
    },
  ];
}
function AIf(e, t) {
  let n = NZn();
  if (n === "off") return [];
  let r = n === "countdown" ? nH(t, OS()) - OX(e) : 0;
  return [
    {
      type: "total_tokens_reminder",
      text: BZn(n, r),
    },
  ];
}
function HIf() {
  return [];
}
function TIf(e) {
  if (e === void 0) return [];
  let t = jb(),
    n = e - t;
  return [
    {
      type: "budget_usd",
      used: t,
      total: e,
      remaining: n,
    },
  ];
}
function getContextEfficiencyAttachment(e, t) {
  return [];
}
function kSt(e, t) {
  if (WZn(e, t.trustedNetworkDirectories)) {
    if (!e$o.has(e) && e$o.size < wIf) (e$o.add(e), G("tengu_attachment_unc_read_blocked", {}));
    return true;
  }
  return Fv(e, t, "read", "deny") !== null;
}
var RSt,
  Nk,
  r$o,
  t$o = null,
  OCf = null,
  NCf,
  FZn,
  TODO_REMINDER_CONFIG,
  PLAN_MODE_ATTACHMENT_CONFIG,
  ULTRA_EFFORT_CONFIG,
  ZMo = 200,
  S0l = 4096,
  RELEVANT_MEMORIES_CONFIG,
  BCf,
  rIf = 16384,
  aIf,
  SYt,
  jZn = false,
  fHe = null,
  wIf = 1000,
  e$o;
