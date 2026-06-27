// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y6e
// matched 2.1.88 source: src/services/PromptSuggestion/speculation.ts
// class=modified  jaccard=0.5102  score=0.7923  fileCov=0.589
// note: deminified; 11 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module y6e] deps: Gst, ft, lze, dHl, ii, u_, lf, nC, Il, je, fn, At, oc, PB, ik, co, Hu, $I, _a, CLo
rKt = new Map();
function oKt(e) {
  hHl.rm(
    e,
    {
      recursive: !0,
      force: !0,
      maxRetries: 3,
      retryDelay: 100,
    },
    () => {},
  );
}
function getOverlayPath(id) {
  return HP.join(YU(), "speculation", String(process.pid), id);
}
function Nbt(e, t) {
  return {
    behavior: "deny",
    message: e,
    decisionReason: {
      type: "other",
      reason: t,
    },
  };
}
async function copyOverlayToMain(overlayPath, writtenPaths, cwd) {
  let r = !0,
    o;
  try {
    o = await PN.realpath(cwd);
  } catch {
    return !1;
  }
  for (let s of writtenPaths) {
    let i = HP.join(overlayPath, s),
      a = HP.join(cwd, s);
    try {
      try {
        if ((await PN.lstat(i)).isSymbolicLink()) {
          ((r = !1), T(`[Speculation] Skipping symlink source ${s} in overlay`));
          continue;
        }
      } catch {
        ((r = !1), T(`[Speculation] Failed to copy ${s} to main`));
        continue;
      }
      let l = HP.dirname(a),
        c = null;
      for (;;)
        try {
          c = await PN.realpath(l);
          break;
        } catch {
          let d = HP.dirname(l);
          if (d === l) break;
          l = d;
        }
      if (c === null || (c !== o && !c.startsWith(o + HP.sep))) {
        ((r = !1), T(`[Speculation] Skipping ${s}: parent dir escapes cwd via symlink`));
        continue;
      }
      await PN.mkdir(HP.dirname(a), {
        recursive: !0,
      });
      let u;
      try {
        u = await PN.lstat(a);
      } catch {}
      if (u?.isSymbolicLink())
        try {
          await PN.unlink(a);
        } catch {
          ((r = !1), T(`[Speculation] Failed to unlink symlink at ${s}`));
          continue;
        }
      await PN.copyFile(i, a);
    } catch {
      ((r = !1), T(`[Speculation] Failed to copy ${s} to main`));
    }
  }
  return r;
}
function logSpeculation(id, outcome, startTime, suggestionLength, messages, boundary, extras) {
  G("tengu_speculation", {
    speculation_id: id,
    outcome: $e(outcome),
    duration_ms: Date.now() - startTime,
    suggestion_length: suggestionLength,
    tools_executed: countToolsInMessages(messages),
    completed: boundary !== null,
    boundary_type: boundary?.type,
    boundary_tool: getBoundaryTool(boundary),
    boundary_detail: I_f(boundary),
    ...extras,
  });
}
function countToolsInMessages(messages) {
  let t = messages
    .filter(kLo)
    .flatMap((n) => n.message.content)
    .filter((n) => typeof n === "object" && n !== null && "type" in n);
  return On(t, (n) => n.type === "tool_result" && !n.is_error);
}
function getBoundaryTool(boundary) {
  if (!boundary) return;
  switch (boundary.type) {
    case "bash":
    case "edit":
    case "denied_tool":
      return boundary.toolName;
    case "complete":
      return;
  }
}
function I_f(e) {
  if (!e) return;
  switch (e.type) {
    case "bash":
      return e.command.slice(0, 200);
    case "edit":
      return e.filePath;
    case "denied_tool":
      return e.detail;
    case "complete":
      return;
  }
}
function kLo(e) {
  return e.type === "user" && "message" in e && Array.isArray(e.message.content);
}
function prepareMessagesForInjection(messages) {
  let t = (s) =>
      typeof s === "object" &&
      s !== null &&
      s.type === "tool_result" &&
      typeof s.tool_use_id === "string",
    n = (s) => !s.is_error && !(typeof s.content === "string" && s.content.includes(Jv)),
    r = new Set(
      messages
        .filter(kLo)
        .flatMap((s) => s.message.content)
        .filter(t)
        .filter(n)
        .map((s) => s.tool_use_id),
    ),
    o = (s) =>
      s.type !== "thinking" &&
      s.type !== "redacted_thinking" &&
      !(s.type === "tool_use" && !r.has(s.id)) &&
      !(s.type === "tool_result" && !r.has(s.tool_use_id)) &&
      !(s.type === "text" && (s.text === _N || s.text === Jv));
  return messages
    .map((s) => {
      if (!("message" in s) || !Array.isArray(s.message.content)) return s;
      let i = s.message.content.filter(o);
      if (i.length === s.message.content.length) return s;
      if (i.length === 0) return null;
      if (!i.some((l) => l.type !== "text" || (l.text !== void 0 && l.text.trim() !== "")))
        return null;
      return {
        ...s,
        message: {
          ...s.message,
          content: i,
        },
      };
    })
    .filter((s) => s !== null);
}
function k_f(e, t, n, r) {
  return null;
}
function cze(e, t) {
  e((n) => {
    if (n.speculation.status !== "active") return n;
    let r = n.speculation,
      o = t(r);
    if (!Object.entries(o).some(([i, a]) => r[i] !== a)) return n;
    return {
      ...n,
      speculation: {
        ...r,
        ...o,
      },
    };
  });
}
function ILo(e) {
  e((t) => {
    if (t.speculation.status === "idle") return t;
    return {
      ...t,
      speculation: FDe,
    };
  });
}
function fgo() {
  return (T("[Speculation] enabled=false"), !1);
}
async function generatePipelinedSuggestion(
  context,
  suggestionText,
  speculatedMessages,
  setAppState,
  parentAbortController,
) {
  try {
    let s = context.toolUseContext.getAppState(),
      i = cgo(s);
    if (i) {
      b$(`pipeline_${i}`);
      return;
    }
    let a = {
        ...context,
        messages: [
          ...context.messages,
          Rn({
            content: suggestionText,
          }),
          ...speculatedMessages,
        ],
      },
      l = c$(parentAbortController);
    if (l.signal.aborted) return;
    let c = _jn(),
      { suggestion: u, generationRequestId: d } = await dgo(l, c, g6(a));
    if (l.signal.aborted) return;
    if (pgo(u, c)) return;
    (T(`[Speculation] Pipelined suggestion: "${u.slice(0, 50)}..."`),
      cze(setAppState, () => ({
        pipelinedSuggestion: {
          text: u,
          promptId: c,
          generationRequestId: d,
        },
      })));
  } catch (s) {
    if (s instanceof Error && s.name === "AbortError") return;
    T(`[Speculation] Pipelined suggestion failed: ${be(s)}`);
  }
}
async function startSpeculation(suggestionText, context, setAppState, r = !1, cacheSafeParams) {
  if (!fgo()) return;
  abortSpeculation(setAppState);
  let s = gHl.randomUUID().slice(0, 8),
    i = c$(context.toolUseContext.abortController);
  if (i.signal.aborted) return;
  let a = Date.now(),
    l = {
      current: [],
    },
    c = {
      current: new Set(),
    },
    u = getOverlayPath(s),
    d = CK();
  try {
    await PN.mkdir(u, {
      recursive: !0,
    });
  } catch {
    T("[Speculation] Failed to create overlay directory");
    return;
  }
  let p = {
    current: context,
  };
  (setAppState((f) => ({
    ...f,
    speculation: {
      status: "active",
      id: s,
      abort: () => i.abort(),
      startTime: a,
      messagesRef: l,
      writtenPathsRef: c,
      boundary: null,
      suggestionLength: suggestionText.length,
      toolUseCount: 0,
      isPipelined: r,
      contextRef: p,
    },
  })),
    T(`[Speculation] Starting speculation ${s}`));
  try {
    let f = await dk({
      promptMessages: [
        Rn({
          content: suggestionText,
        }),
      ],
      cacheSafeParams: cacheSafeParams ?? g6(context),
      skipTranscript: !0,
      canUseTool: async (m, g) => {
        let h = T_f.has(m.name),
          y = v_f.has(m.name);
        if (h || y) {
          let _ = Bbt(m, g, Fr(context.toolUseContext));
          if (_) return Nbt(_.message, "speculation_network_path");
        }
        if (h) {
          let { mode: _, isBypassPermissionsModeAvailable: S } = Fr(context.toolUseContext);
          if (!(_ === "acceptEdits" || _ === "bypassPermissions" || (_ === "plan" && S))) {
            T(`[Speculation] Stopping at file edit: ${m.name}`);
            let v = "file_path" in g ? g.file_path : void 0;
            return (
              cze(setAppState, () => ({
                boundary: {
                  type: "edit",
                  toolName: m.name,
                  filePath: v ?? "",
                  completedAt: Date.now(),
                },
              })),
              i.abort(),
              Nbt("Speculation paused: file edit requires permission", "speculation_edit_boundary")
            );
          }
        }
        if (h || y) {
          let _ = "notebook_path" in g ? "notebook_path" : "path" in g ? "path" : "file_path",
            S = g[_];
          if (S) {
            let A = HP.relative(d, S);
            if (HP.isAbsolute(A) || A.startsWith("..")) {
              if (h)
                return (
                  T(`[Speculation] Denied ${m.name}: path outside cwd: ${S}`),
                  Nbt(
                    "Write outside cwd not allowed during speculation",
                    "speculation_write_outside_root",
                  )
                );
              return {
                behavior: "allow",
                updatedInput: g,
                decisionReason: {
                  type: "other",
                  reason: "speculation_read_outside_root",
                },
              };
            }
            if (h) {
              if (!c.current.has(A)) {
                let v = HP.join(u, A);
                await PN.mkdir(HP.dirname(v), {
                  recursive: !0,
                });
                try {
                  await PN.copyFile(HP.join(d, A), v);
                } catch {}
                c.current.add(A);
              }
              g = {
                ...g,
                [_]: HP.join(u, A),
              };
            } else if (c.current.has(A))
              g = {
                ...g,
                [_]: HP.join(u, A),
              };
            return (
              T(`[Speculation] ${h ? "Write" : "Read"} ${S} -> ${g[_]}`),
              {
                behavior: "allow",
                updatedInput: g,
                decisionReason: {
                  type: "other",
                  reason: "speculation_file_access",
                },
              }
            );
          }
          if (y)
            return {
              behavior: "allow",
              updatedInput: g,
              decisionReason: {
                type: "other",
                reason: "speculation_read_default_cwd",
              },
            };
        }
        if (W1.includes(m.name)) {
          let _ = "command" in g && typeof g.command === "string" ? g.command : "";
          if ("run_in_background" in g && g.run_in_background === !0)
            return (
              T(`[Speculation] Stopping at backgrounded ${m.name}: ${_.slice(0, 50)}`),
              cze(setAppState, () => ({
                boundary: {
                  type: "bash",
                  toolName: m.name,
                  command: `[backgrounded] ${_}`,
                  completedAt: Date.now(),
                },
              })),
              i.abort(),
              Nbt("Speculation paused: backgrounded shell", "speculation_bash_background")
            );
          let S = m.inputSchema.safeParse({
              command: _,
            }),
            A =
              m.name === Co
                ? kjn(
                    {
                      command: _,
                    },
                    sKt(_),
                  ).behavior === "allow"
                : S.success && m.isReadOnly(S.data);
          if (!_ || !A)
            return (
              T(`[Speculation] Stopping at ${m.name}: ${_.slice(0, 50) || "missing command"}`),
              cze(setAppState, () => ({
                boundary: {
                  type: "bash",
                  toolName: m.name,
                  command: _,
                  completedAt: Date.now(),
                },
              })),
              i.abort(),
              Nbt("Speculation paused: shell boundary", "speculation_bash_boundary")
            );
          return {
            behavior: "allow",
            updatedInput: g,
            decisionReason: {
              type: "other",
              reason: "speculation_readonly_bash",
            },
          };
        }
        T(`[Speculation] Stopping at denied tool: ${m.name}`);
        let b = String(
          ("url" in g && g.url) ||
            ("file_path" in g && g.file_path) ||
            ("path" in g && g.path) ||
            ("command" in g && g.command) ||
            "",
        ).slice(0, 200);
        return (
          cze(setAppState, () => ({
            boundary: {
              type: "denied_tool",
              toolName: m.name,
              detail: b,
              completedAt: Date.now(),
            },
          })),
          i.abort(),
          Nbt(`Tool ${m.name} not allowed during speculation`, "speculation_unknown_tool")
        );
      },
      querySource: "speculation",
      forkLabel: "speculation",
      maxTurns: A_f,
      overrides: {
        abortController: i,
        requireCanUseTool: !0,
      },
      onMessage: (m) => {
        if (m.type === "assistant" || m.type === "user") {
          if ((l.current.push(m), l.current.length >= H_f)) i.abort();
          if (kLo(m)) {
            let g = On(m.message.content, (h) => h.type === "tool_result" && !h.is_error);
            if (g > 0)
              cze(setAppState, (h) => ({
                toolUseCount: h.toolUseCount + g,
              }));
          }
        }
      },
    });
    if (i.signal.aborted) return;
    (cze(setAppState, () => ({
      boundary: {
        type: "complete",
        completedAt: Date.now(),
        outputTokens: f.totalUsage.output_tokens,
      },
    })),
      T(`[Speculation] Complete: ${countToolsInMessages(l.current)} tools`),
      generatePipelinedSuggestion(p.current, suggestionText, l.current, setAppState, i));
  } catch (f) {
    if ((i.abort(), f instanceof Error && f.name === "AbortError")) {
      (oKt(u), ILo(setAppState));
      return;
    }
    (oKt(u),
      ke(f instanceof Error ? f : Error("Speculation failed")),
      logSpeculation(s, "error", a, suggestionText.length, l.current, null, {
        error_type: f instanceof Error ? f.name : "Unknown",
        error_message: be(f).slice(0, 200),
        error_phase: We("start"),
        is_pipelined: r,
      }),
      Le("prompt_suggestion_speculate", "start_failed"),
      ILo(setAppState));
  }
}
async function acceptSpeculation(state, setAppState, cleanMessageCount) {
  if (state.status !== "active") return null;
  let {
      id: r,
      messagesRef: o,
      writtenPathsRef: s,
      abort: i,
      startTime: a,
      suggestionLength: l,
      isPipelined: c,
    } = state,
    u = o.current,
    d = getOverlayPath(r),
    p = Date.now();
  if ((i(), cleanMessageCount > 0)) await copyOverlayToMain(d, s.current, CK());
  oKt(d);
  let f = state.boundary,
    m = Math.min(p, f?.completedAt ?? 1 / 0) - a;
  if (
    (setAppState((g) => {
      if (g.speculation.status === "active" && g.speculation.boundary)
        ((f = g.speculation.boundary), (m = Math.min(p, f.completedAt ?? 1 / 0) - a));
      return {
        ...g,
        speculation: FDe,
        speculationSessionTimeSavedMs: g.speculationSessionTimeSavedMs + m,
      };
    }),
    T(
      f === null
        ? `[Speculation] Accept ${r}: still running, using ${u.length} messages`
        : `[Speculation] Accept ${r}: already complete`,
    ),
    logSpeculation(r, "accepted", a, l, u, f, {
      message_count: u.length,
      time_saved_ms: m,
      is_pipelined: c,
    }),
    m > 0 && !u3())
  ) {
    let g = {
      type: "speculation-accept",
      timestamp: new Date().toISOString(),
      timeSavedMs: m,
    };
    LLo(() =>
      PN.appendFile(
        em(),
        De(g) +
          `
`,
        {
          mode: 384,
        },
      ).then(() => {
        RLo(em(), [g]);
      }),
    ).catch(() => {
      T("[Speculation] Failed to write speculation-accept to transcript");
    });
  }
  return (
    xe("prompt_suggestion_speculate"),
    {
      messages: u,
      boundary: f,
      timeSavedMs: m,
    }
  );
}
function abortSpeculation(setAppState, t = "user_typed") {
  setAppState((n) => {
    if (n.speculation.status !== "active") return n;
    let {
      id: r,
      abort: o,
      startTime: s,
      boundary: i,
      suggestionLength: a,
      messagesRef: l,
      isPipelined: c,
    } = n.speculation;
    return (
      T(`[Speculation] Aborting ${r} (${t})`),
      logSpeculation(r, "aborted", s, a, l.current, i, {
        abort_reason: t,
        is_pipelined: c,
      }),
      o(),
      oKt(getOverlayPath(r)),
      {
        ...n,
        speculation: FDe,
      }
    );
  });
}
async function handleSpeculationAccept(
  speculationState,
  speculationSessionTimeSavedMs,
  setAppState,
  input,
  deps,
) {
  try {
    let { setMessages: s, readFileState: i, cwd: a } = deps;
    setAppState((y) => {
      if (y.promptSuggestion.text === null && y.promptSuggestion.promptId === null) return y;
      return {
        ...y,
        promptSuggestion: {
          text: null,
          promptId: null,
          shownAt: 0,
          acceptedAt: 0,
          generationRequestId: null,
        },
      };
    });
    let l = speculationState.messagesRef.current,
      c = prepareMessagesForInjection(l),
      u = Rn({
        content: input,
        promptSource: "suggestion_accepted",
      });
    s((y) => [...y, u]);
    let d = await acceptSpeculation(speculationState, setAppState, c.length),
      p = d?.boundary?.type === "complete";
    if (!p) {
      let y = c.findLastIndex((b) => b.type !== "assistant");
      c = c.slice(0, y + 1);
    }
    let f = d?.timeSavedMs ?? 0,
      m = speculationSessionTimeSavedMs + f,
      g = k_f(c, d?.boundary ?? null, f, m);
    s((y) => [...y, ...c]);
    let h = Obt(c, a, V1);
    if (((i.current = Bct(i.current, h)), g)) s((y) => [...y, g]);
    if (
      (T(`[Speculation] ${d?.boundary?.type ?? "incomplete"}, injected ${c.length} messages`),
      p && speculationState.pipelinedSuggestion)
    ) {
      let { text: y, promptId: b, generationRequestId: _ } = speculationState.pipelinedSuggestion;
      (T(`[Speculation] Promoting pipelined suggestion: "${y.slice(0, 50)}..."`),
        setAppState((A) => ({
          ...A,
          promptSuggestion: {
            text: y,
            promptId: b,
            shownAt: Date.now(),
            acceptedAt: 0,
            generationRequestId: _,
          },
        })));
      let S = {
        ...speculationState.contextRef.current,
        messages: [
          ...speculationState.contextRef.current.messages,
          Rn({
            content: input,
          }),
          ...c,
        ],
      };
      startSpeculation(y, S, setAppState, !0);
    }
    return {
      queryRequired: !p,
    };
  } catch (s) {
    return (
      ke(s instanceof Error ? s : Error("handleSpeculationAccept failed")),
      logSpeculation(
        speculationState.id,
        "error",
        speculationState.startTime,
        speculationState.suggestionLength,
        speculationState.messagesRef.current,
        speculationState.boundary,
        {
          error_type: s instanceof Error ? s.name : "Unknown",
          error_message: be(s).slice(0, 200),
          error_phase: We("accept"),
          is_pipelined: speculationState.isPipelined,
        },
      ),
      Le("prompt_suggestion_speculate", "accept_failed"),
      oKt(getOverlayPath(speculationState.id)),
      ILo(setAppState),
      {
        queryRequired: !0,
      }
    );
  }
}
var gHl,
  hHl,
  PN,
  HP,
  A_f = 20,
  H_f = 100,
  T_f,
  v_f,
  yHl = 30000;
