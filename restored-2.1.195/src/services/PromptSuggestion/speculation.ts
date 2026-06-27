// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y6e
// matched 2.1.88 source: src/services/PromptSuggestion/speculation.ts
// class=modified  jaccard=0.5192  score=0.7229  fileCov=0.6483
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var y6e = E(() => {
  Gst();
  ft();
  lze();
  dHl();
  ii();
  u_();
  lf();
  nC();
  Il();
  je();
  fn();
  At();
  oc();
  PB();
  ik();
  co();
  Hu();
  $I();
  _a();
  CLo();
  rKt = new Map();
});
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
function eJn(e) {
  return HP.join(YU(), "speculation", String(process.pid), e);
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
async function w_f(e, t, n) {
  let r = !0,
    o;
  try {
    o = await PN.realpath(n);
  } catch {
    return !1;
  }
  for (let s of t) {
    let i = HP.join(e, s),
      a = HP.join(n, s);
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
function tJn(e, t, n, r, o, s, i) {
  G("tengu_speculation", {
    speculation_id: e,
    outcome: $e(t),
    duration_ms: Date.now() - n,
    suggestion_length: r,
    tools_executed: xLo(o),
    completed: s !== null,
    boundary_type: s?.type,
    boundary_tool: C_f(s),
    boundary_detail: I_f(s),
    ...i,
  });
}
function xLo(e) {
  let t = e
    .filter(kLo)
    .flatMap((n) => n.message.content)
    .filter((n) => typeof n === "object" && n !== null && "type" in n);
  return On(t, (n) => n.type === "tool_result" && !n.is_error);
}
function C_f(e) {
  if (!e) return;
  switch (e.type) {
    case "bash":
    case "edit":
    case "denied_tool":
      return e.toolName;
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
function x_f(e) {
  let t = (s) =>
      typeof s === "object" &&
      s !== null &&
      s.type === "tool_result" &&
      typeof s.tool_use_id === "string",
    n = (s) => !s.is_error && !(typeof s.content === "string" && s.content.includes(Jv)),
    r = new Set(
      e
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
  return e
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
async function R_f(e, t, n, r, o) {
  try {
    let s = e.toolUseContext.getAppState(),
      i = cgo(s);
    if (i) {
      b$(`pipeline_${i}`);
      return;
    }
    let a = {
        ...e,
        messages: [
          ...e.messages,
          Rn({
            content: t,
          }),
          ...n,
        ],
      },
      l = c$(o);
    if (l.signal.aborted) return;
    let c = _jn(),
      { suggestion: u, generationRequestId: d } = await dgo(l, c, g6(a));
    if (l.signal.aborted) return;
    if (pgo(u, c)) return;
    (T(`[Speculation] Pipelined suggestion: "${u.slice(0, 50)}..."`),
      cze(r, () => ({
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
async function mgo(e, t, n, r = !1, o) {
  if (!fgo()) return;
  dfe(n);
  let s = gHl.randomUUID().slice(0, 8),
    i = c$(t.toolUseContext.abortController);
  if (i.signal.aborted) return;
  let a = Date.now(),
    l = {
      current: [],
    },
    c = {
      current: new Set(),
    },
    u = eJn(s),
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
    current: t,
  };
  (n((f) => ({
    ...f,
    speculation: {
      status: "active",
      id: s,
      abort: () => i.abort(),
      startTime: a,
      messagesRef: l,
      writtenPathsRef: c,
      boundary: null,
      suggestionLength: e.length,
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
          content: e,
        }),
      ],
      cacheSafeParams: o ?? g6(t),
      skipTranscript: !0,
      canUseTool: async (m, g) => {
        let h = T_f.has(m.name),
          y = v_f.has(m.name);
        if (h || y) {
          let _ = Bbt(m, g, Fr(t.toolUseContext));
          if (_) return Nbt(_.message, "speculation_network_path");
        }
        if (h) {
          let { mode: _, isBypassPermissionsModeAvailable: S } = Fr(t.toolUseContext);
          if (!(_ === "acceptEdits" || _ === "bypassPermissions" || (_ === "plan" && S))) {
            T(`[Speculation] Stopping at file edit: ${m.name}`);
            let v = "file_path" in g ? g.file_path : void 0;
            return (
              cze(n, () => ({
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
              cze(n, () => ({
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
              cze(n, () => ({
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
          cze(n, () => ({
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
              cze(n, (h) => ({
                toolUseCount: h.toolUseCount + g,
              }));
          }
        }
      },
    });
    if (i.signal.aborted) return;
    (cze(n, () => ({
      boundary: {
        type: "complete",
        completedAt: Date.now(),
        outputTokens: f.totalUsage.output_tokens,
      },
    })),
      T(`[Speculation] Complete: ${xLo(l.current)} tools`),
      R_f(p.current, e, l.current, n, i));
  } catch (f) {
    if ((i.abort(), f instanceof Error && f.name === "AbortError")) {
      (oKt(u), ILo(n));
      return;
    }
    (oKt(u),
      ke(f instanceof Error ? f : Error("Speculation failed")),
      tJn(s, "error", a, e.length, l.current, null, {
        error_type: f instanceof Error ? f.name : "Unknown",
        error_message: be(f).slice(0, 200),
        error_phase: We("start"),
        is_pipelined: r,
      }),
      Le("prompt_suggestion_speculate", "start_failed"),
      ILo(n));
  }
}
async function L_f(e, t, n) {
  if (e.status !== "active") return null;
  let {
      id: r,
      messagesRef: o,
      writtenPathsRef: s,
      abort: i,
      startTime: a,
      suggestionLength: l,
      isPipelined: c,
    } = e,
    u = o.current,
    d = eJn(r),
    p = Date.now();
  if ((i(), n > 0)) await w_f(d, s.current, CK());
  oKt(d);
  let f = e.boundary,
    m = Math.min(p, f?.completedAt ?? 1 / 0) - a;
  if (
    (t((g) => {
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
    tJn(r, "accepted", a, l, u, f, {
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
function dfe(e, t = "user_typed") {
  e((n) => {
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
      tJn(r, "aborted", s, a, l.current, i, {
        abort_reason: t,
        is_pipelined: c,
      }),
      o(),
      oKt(eJn(r)),
      {
        ...n,
        speculation: FDe,
      }
    );
  });
}
async function _Hl(e, t, n, r, o) {
  try {
    let { setMessages: s, readFileState: i, cwd: a } = o;
    n((y) => {
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
    let l = e.messagesRef.current,
      c = x_f(l),
      u = Rn({
        content: r,
        promptSource: "suggestion_accepted",
      });
    s((y) => [...y, u]);
    let d = await L_f(e, n, c.length),
      p = d?.boundary?.type === "complete";
    if (!p) {
      let y = c.findLastIndex((b) => b.type !== "assistant");
      c = c.slice(0, y + 1);
    }
    let f = d?.timeSavedMs ?? 0,
      m = t + f,
      g = k_f(c, d?.boundary ?? null, f, m);
    s((y) => [...y, ...c]);
    let h = Obt(c, a, V1);
    if (((i.current = Bct(i.current, h)), g)) s((y) => [...y, g]);
    if (
      (T(`[Speculation] ${d?.boundary?.type ?? "incomplete"}, injected ${c.length} messages`),
      p && e.pipelinedSuggestion)
    ) {
      let { text: y, promptId: b, generationRequestId: _ } = e.pipelinedSuggestion;
      (T(`[Speculation] Promoting pipelined suggestion: "${y.slice(0, 50)}..."`),
        n((A) => ({
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
        ...e.contextRef.current,
        messages: [
          ...e.contextRef.current.messages,
          Rn({
            content: r,
          }),
          ...c,
        ],
      };
      mgo(y, S, n, !0);
    }
    return {
      queryRequired: !p,
    };
  } catch (s) {
    return (
      ke(s instanceof Error ? s : Error("handleSpeculationAccept failed")),
      tJn(e.id, "error", e.startTime, e.suggestionLength, e.messagesRef.current, e.boundary, {
        error_type: s instanceof Error ? s.name : "Unknown",
        error_message: be(s).slice(0, 200),
        error_phase: We("accept"),
        is_pipelined: e.isPipelined,
      }),
      Le("prompt_suggestion_speculate", "accept_failed"),
      oKt(eJn(e.id)),
      ILo(n),
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
