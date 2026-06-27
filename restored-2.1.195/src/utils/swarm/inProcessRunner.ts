// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sbt
// matched 2.1.88 source: src/utils/swarm/inProcessRunner.ts
// class=modified  jaccard=0.3849  score=0.6551  fileCov=0.4827
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: TEAMMATE_SYSTEM_PROMPT_ADDENDUM
// [unwrapped __esm module sbt] deps: je, H7n
rbt = new Map();
z6t = new Map();
function Ygl(e) {
  _0o = e;
}
function Xgl() {
  return _0o;
}
function Jgl() {
  _0o = null;
}
var _0o = null;
var TEAMMATE_SYSTEM_PROMPT_ADDENDUM = `
# Agent Teammate Communication

IMPORTANT: You are running as an agent in a team. To communicate with anyone on your team, use the SendMessage tool with \`to: "<name>"\` to send messages to specific teammates.

Just writing a response in text is not visible to others on your team - you MUST use the SendMessage tool.

The user interacts primarily with the team lead. Your work is coordinated through the task system and teammate messaging.
`;
function uff(e, t, n, r) {
  return async (o, s, i, a, l, c) => {
    let u = c ?? (await lbt(o, s, i, a, l, void 0, r));
    if (u.behavior !== "ask") return u;
    let d = u.updatedInput ?? s;
    if (t.signal.aborted)
      return {
        behavior: "ask",
        message: AQ,
      };
    let p = Fr(i),
      f = () =>
        o.description(d, {
          isNonInteractiveSession: i.options.isNonInteractiveSession,
          toolPermissionContext: p,
          tools: i.options.tools,
        });
    if (i.requestDialog !== void 0) {
      let g = Xgl(),
        y = LYn(
          o,
          s,
          i,
          a,
          l,
          (A) => {
            g?.(A, {
              preserveMode: true,
            });
          },
          r,
        ),
        b = await N8n({
          ctx: y,
          ...{},
          updatedInput: u.updatedInput,
          suggestions: u.suggestions,
          permissionMode: p.mode,
        });
      if (b) return b;
      if (t.signal.aborted)
        return {
          behavior: "ask",
          message: AQ,
        };
      let _ = await f();
      if (t.signal.aborted)
        return {
          behavior: "ask",
          message: AQ,
        };
      let S = Date.now();
      try {
        return await new Promise((A) => {
          b7n(
            {
              ctx: y,
              description: _,
              result: u,
              awaitAutomatedChecksBeforeDialog: true,
            },
            A,
          );
        });
      } finally {
        n(Date.now() - S);
      }
    }
    let m = await f();
    if (t.signal.aborted)
      return {
        behavior: "ask",
        message: AQ,
      };
    return new Promise((g) => {
      let h = d7n({
        toolName: o.name,
        toolUseId: l,
        input: d,
        description: m,
        permissionSuggestions: u.suggestions,
        workerId: e.agentId,
        workerName: e.agentName,
        workerColor: e.color,
        teamName: e.teamName,
      });
      (T7n({
        requestId: h.id,
        toolUseId: l,
        onAllow(S, A, v, C) {
          (_(), Y8(A));
          let x = S && Object.keys(S).length > 0 ? S : d;
          g({
            behavior: "allow",
            updatedInput: x,
            userModified: false,
            ...(C &&
              C.length > 0 && {
                contentBlocks: C,
              }),
          });
        },
        onReject(S, A) {
          _();
          let v = S ? `${DYn}${S}` : AQ;
          g({
            behavior: "ask",
            message: v,
            contentBlocks: A,
          });
        },
      }),
        p7n(h));
      let y = setInterval(
          async (S, A, v, C, x) => {
            if (S.signal.aborted) {
              (A(),
                v({
                  behavior: "ask",
                  message: AQ,
                }));
              return;
            }
            let I = await dAe(C.agentName, C.teamName);
            for (let k of I)
              if (k && !k.read) {
                let D = g8e(k.text);
                if (D && D.request_id === x.id) {
                  if ((await b9t(C.agentName, C.teamName, k), k.from !== Hd)) {
                    T(
                      `[InProcessRunner] Ignoring permission response from non-team-lead: ${k.from}`,
                      {
                        level: "warn",
                      },
                    );
                    continue;
                  }
                  if (D.subtype === "success")
                    obt({
                      requestId: D.request_id,
                      decision: "approved",
                      updatedInput: D.response?.updated_input,
                      permissionUpdates: D.response?.permission_updates,
                    });
                  else
                    obt({
                      requestId: D.request_id,
                      decision: "rejected",
                      feedback: D.error,
                    });
                  return;
                }
              }
          },
          cff,
          t,
          _,
          g,
          e,
          h,
        ),
        b = () => {
          (_(),
            g({
              behavior: "ask",
              message: AQ,
            }));
        };
      t.signal.addEventListener("abort", b, {
        once: true,
      });
      function _() {
        (clearInterval(y), Ggl(h.id), t.signal.removeEventListener("abort", b));
      }
    });
  };
}
function ofe(e, t, n) {
  n.update(e, (r) => (r.type === "in_process_teammate" ? t(r) : r));
}
async function dff(e, t, n, r) {
  await fg(
    Hd,
    {
      from: e,
      text: t,
      timestamp: new Date().toISOString(),
      color: n,
    },
    r,
  );
}
async function Zgl(e, t, n, r) {
  let o = E9t(e, r);
  await dff(e, De(o), t, n);
}
function pff(e) {
  let t = new Set(e.filter((n) => n.status !== "completed").map((n) => n.id));
  return e.find((n) => {
    if (n.status !== "pending") return false;
    if (n.owner) return false;
    return n.blockedBy.every((r) => !t.has(r));
  });
}
function fff(e) {
  let t = `Complete all open tasks. Start with task #${e.id}: 

 ${e.subject}`;
  if (e.description)
    t += `

${e.description}`;
  return t;
}
async function ehl(e, t) {
  try {
    let n = await W4(e),
      r = pff(n);
    if (!r) return;
    let o = await vOa(e, r.id, t);
    if (!o.success) {
      T(`[inProcessRunner] Failed to claim task #${r.id}: ${o.reason}`);
      return;
    }
    return (
      await hEe(e, r.id, {
        status: "in_progress",
      }),
      T(`[inProcessRunner] Claimed task #${r.id}: ${r.subject}`),
      fff(r)
    );
  } catch (n) {
    T(`[inProcessRunner] Error checking task list: ${n}`);
    return;
  }
}
async function mff(e, t, n, r, o, s, i) {
  T(`[inProcessRunner] ${e.agentName} starting poll loop (abort=${t.signal.aborted})`);
  let l = Date.now(),
    c = 0;
  while (!t.signal.aborted) {
    if (c > 0) await Nn(500);
    c++;
    let u = r(),
      d = u.tasks[n];
    if (d && d.type === "in_process_teammate" && d.pendingUserMessages.length > 0) {
      let m = d.pendingUserMessages[0];
      return (
        ofe(
          n,
          (g) => ({
            ...g,
            pendingUserMessages: g.pendingUserMessages.slice(1),
          }),
          o,
        ),
        T(`[inProcessRunner] ${e.agentName} found pending user message (poll #${c})`),
        {
          type: "new_message",
          message: m.text,
          origin: m.origin,
          from: "user",
        }
      );
    }
    if (d && d.type === "in_process_teammate" && d.shutdownRequested && i)
      return {
        type: "aborted",
      };
    if ((d?.type === "in_process_teammate" && d.awaitingPlanApproval) || u.viewingAgentTaskId === n)
      l = Date.now();
    if (t.signal.aborted)
      return (
        T(`[inProcessRunner] ${e.agentName} aborted while waiting (poll #${c})`),
        {
          type: "aborted",
        }
      );
    if (i) continue;
    T(`[inProcessRunner] ${e.agentName} poll #${c}: checking mailbox`);
    try {
      let m = await dAe(e.agentName, e.teamName),
        g = -1,
        h = null;
      for (let A = 0; A < m.length; A++) {
        let v = m[A];
        if (v && !v.read) {
          let C = Ght(v.text);
          if (C) {
            ((g = A), (h = C));
            break;
          }
        }
      }
      if (g !== -1) {
        let A = m[g],
          v = On(m.slice(0, g), (C) => !C.read);
        return (
          T(
            `[inProcessRunner] ${e.agentName} received shutdown request from ${h?.from} (prioritized over ${v} unread messages)`,
          ),
          await b9t(e.agentName, e.teamName, A),
          {
            type: "shutdown_request",
            request: h,
            originalMessage: A.text,
          }
        );
      }
      let y = [],
        b = [];
      for (let A of m) {
        if (!A || A.read) continue;
        if (kF(A.text)) y.push(A);
        else b.push(A);
      }
      let _ = null;
      if (y.length > 0) {
        for (let A of y) {
          let v = Wht(A.text);
          if (v && A.from === Hd) {
            if (knl(n, v, o))
              (T(
                `[inProcessRunner] ${e.agentName} applied lead plan_approval_response: approved=${v.approved}`,
              ),
                (_ = x9t(v)));
            else
              T(
                `[inProcessRunner] ${e.agentName} ignoring stale plan_approval_response (not awaiting approval)`,
              );
            continue;
          }
          let C = qht(A.text);
          if (C && A.from === Hd) {
            let x = owo(C.mode);
            (T(`[inProcessRunner] ${e.agentName} applying lead mode_set_request: ${x}`),
              ofe(
                n,
                (I) =>
                  I.permissionMode === x
                    ? I
                    : {
                        ...I,
                        permissionMode: x,
                      },
                o,
              ),
              await Mht(e.teamName, e.agentName, x));
          } else
            T(
              `[inProcessRunner] ${e.agentName} dropping protocol frame from ${A.from}: ${A.text.substring(0, 80)}`,
              {
                level: "warn",
              },
            );
        }
        await f8e(e.agentName, e.teamName, y);
      }
      if (_)
        return {
          type: "new_message",
          message: _,
          from: Hd,
        };
      let S = b.find((A) => A.from === Hd) ?? b[0];
      if (S)
        return (
          T(`[inProcessRunner] ${e.agentName} received new message from ${S.from}`),
          await b9t(e.agentName, e.teamName, S),
          {
            type: "new_message",
            message: S.text,
            from: S.from,
            color: S.color,
            summary: S.summary,
          }
        );
    } catch (m) {
      T(`[inProcessRunner] ${e.agentName} poll error: ${m}`);
    }
    let f = await ehl(s, e.agentName);
    if (f)
      return {
        type: "new_message",
        message: f,
        from: "task-list",
      };
  }
  return (
    T(`[inProcessRunner] ${e.agentName} exiting poll loop (abort=${t.signal.aborted}, polls=${c})`),
    {
      type: "aborted",
    }
  );
}
async function gff(e) {
  let {
      identity: t,
      taskId: n,
      prompt: r,
      description: o,
      agentDefinition: s,
      teammateContext: i,
      toolUseContext: a,
      abortController: l,
      model: c,
      systemPrompt: u,
      systemPromptMode: d,
      allowedTools: p,
      allowPermissionPrompts: f,
      invokingRequestId: m,
      standalone: g = false,
      resumeMessages: h,
      resumeReplacementState: y,
      initialFrom: b,
    } = e,
    { setAppState: _, taskRegistry: S } = a,
    A = Ade(n);
  T(`[inProcessRunner] Starting agent loop for ${t.agentId}`);
  let v = {
      agentId: t.agentId,
      parentAgentId: a.agentId,
      depth: qG(a.agentContext),
      parentSessionId: t.parentSessionId,
      agentName: t.agentName,
      teamName: t.teamName,
      agentColor: t.color,
      planModeRequired: t.planModeRequired,
      isTeamLead: false,
      agentType: "teammate",
      invokingRequestId: m,
      invocationKind: "spawn",
      invocationEmitted: false,
    },
    { tools: C, mainLoopModel: x } = a.rootToolSurface,
    I;
  if (d === "replace" && u) I = u;
  else {
    let W = [...(await DL(C, x)), TEAMMATE_SYSTEM_PROMPT_ADDENDUM];
    if (s) {
      let V = s.getSystemPrompt();
      if (V)
        W.push(`
# Custom Agent Instructions
${V}`);
      if (s.memory)
        G("tengu_agent_memory_loaded", {
          ...false,
          scope: $e(s.memory),
          source: We("in-process-teammate"),
        });
    }
    if (d === "append" && u) W.push(u);
    I = W.join(`
`);
  }
  let k = {
      agentType: t.agentName,
      whenToUse: `In-process teammate: ${t.agentName}`,
      getSystemPrompt: () => I,
      tools: s?.tools ? Uo([...s.tools, Ly, cC, kX, yL, ZD]) : ["*"],
      source: "projectSettings",
      permissionMode: "default",
      ...(s?.model && {
        model: s.model,
      }),
    },
    D = h ? [...h] : [],
    P = new Set(h?.map((q) => q.uuid)),
    O = {
      taskKind: "in_process_teammate",
      teamName: t.teamName,
      color: t.color,
      planModeRequired: t.planModeRequired,
      ...(s && {
        customAgentType: s.agentType,
      }),
      ...(c && {
        model: c,
      }),
    },
    L = Uht({
      from: b ?? Hd,
      text: r,
      summary: o,
    }),
    M = L,
    N = void 0,
    B = false,
    $ = false;
  if (!g) await ehl(t.parentSessionId, t.agentName);
  try {
    S.updateTranscript(n, (z) => {
      let K = z.messages;
      if (h) for (let Z of h.slice(-U9n)) K = JPe(K, Z);
      return {
        ...z,
        messages: JPe(
          K,
          Rn({
            content: L,
          }),
        ),
      };
    });
    let q = a.contentReplacementState ? (y ?? w3t()) : void 0,
      W = Fie();
    while (!l.signal.aborted && !B) {
      T(`[inProcessRunner] ${t.agentId} processing prompt: ${M.substring(0, 50)}...`);
      let z = Sl();
      ofe(
        n,
        (ye) => ({
          ...ye,
          currentWorkAbortController: z,
        }),
        S,
      );
      let K = Rn({
          content: M,
          origin: N,
        }),
        Z = [K],
        J = D,
        ne = eA(D, rH(x));
      if (ne > Ajt(x, a.options.autoCompactWindow)) {
        T(`[inProcessRunner] ${t.agentId} compacting history (${ne} tokens)`);
        let ye = {
          ...a,
          abortController: l,
          agentId: Bu(t.agentId),
          readFileState: aSe(a.readFileState),
          memorySelector: pLe(),
          loadedNestedMemoryPaths: {},
          onCompactEvent: void 0,
        };
        try {
          let ue = await w7n(
            D,
            ye,
            {
              systemPrompt: Sc([]),
              userContext: {},
              systemContext: {},
              toolUseContext: ye,
              forkContextMessages: D,
            },
            true,
            void 0,
            true,
          );
          if (((J = PAe(ue)), q)) q = w3t();
          ((D.length = 0),
            D.push(...J),
            P.clear(),
            S.updateTranscript(n, (we) => ({
              ...we,
              messages: [...J, K],
            })));
        } catch (ue) {
          if (ue instanceof Error && ue.message.startsWith(abt))
            (T(
              `[inProcessRunner] ${t.agentId} compaction blocked by PreCompact hook; continuing uncompacted`,
            ),
              ($ = true));
          else if (l.signal.aborted || (ue instanceof Error && ue.message === t3)) {
            (T(`[inProcessRunner] ${t.agentId} aborted during compaction`), (B = true));
            break;
          } else throw ue;
        }
      }
      let oe = J.length > 0 ? [...J] : void 0;
      D.push(K);
      let re = J6n(),
        ee = Z6n(C),
        ce = [],
        de = a.getAppState().tasks[n],
        Ee = de && de.type === "in_process_teammate" ? de.permissionMode : "default",
        me = {
          ...k,
          permissionMode: Ee,
        },
        pe = false,
        ge = null;
      if (
        (await RAn(i, async () =>
          x9(v, async () => {
            (ofe(
              n,
              (ye) => ({
                ...ye,
                status: "running",
                isIdle: false,
                evictAfter: void 0,
              }),
              S,
            ),
              S.updateTranscript(n, (ye) => ({
                ...ye,
                turnStartTime: Date.now(),
              })),
              A.setMode("responding"));
            for await (let ye of o3({
              agentDefinition: me,
              promptMessages: Z,
              toolUseContext: a,
              canUseTool: uff(
                t,
                z,
                (ue) => {
                  ofe(
                    n,
                    (we) => ({
                      ...we,
                      totalPausedMs: (we.totalPausedMs ?? 0) + ue,
                    }),
                    S,
                  );
                },
                qMe(_),
              ),
              isAsync: true,
              canShowPermissionPrompts: f ?? true,
              forkContextMessages: oe,
              querySource: "agent:custom",
              override: {
                abortController: z,
                agentContext: v,
                onRetryStatus: A.setRetryStatus,
                ...(t.resumableAgentId && {
                  agentId: t.resumableAgentId,
                }),
              },
              ...(t.resumableAgentId && {
                recordedUuids: P,
                name: t.agentName,
                description: o,
                extraMetadata: {
                  ...O,
                  permissionMode: Ee,
                },
              }),
              model: c,
              preserveToolUseResults: true,
              availableTools: C,
              allowedTools: p,
              contentReplacementState: q,
              stickyBetas: W,
              isTeammate: true,
              teammateContext: i,
            })) {
              if (l.signal.aborted) {
                T(`[inProcessRunner] ${t.agentId} lifecycle aborted`);
                break;
              }
              if (z.signal.aborted) {
                if (
                  (T(`[inProcessRunner] ${t.agentId} current work aborted (Escape pressed)`),
                  ye.type === "assistant" || ye.type === "user")
                )
                  (ce.push(ye), D.push(ye), (ge = Bpe(D, ye, ge)));
                pe = true;
                break;
              }
              if (ye.type === "spinner_mode") {
                A.setMode(ye.mode);
                continue;
              }
              if (ye.type === "api_metrics") continue;
              if (ye.type === "set_in_progress_tool_use_ids") {
                if (ye.op.action !== "remove") continue;
                let we = ye.op.ids;
                S.updateTranscript(n, (Ce) => {
                  let Ie = new Set(Ce.inProgressToolUseIDs),
                    Ve = false;
                  for (let Ze of we) if (Ie.delete(Ze)) Ve = true;
                  return Ve
                    ? {
                        ...Ce,
                        inProgressToolUseIDs: Ie,
                      }
                    : Ce;
                });
                continue;
              }
              (ce.push(ye), D.push(ye), (ge = Bpe(D, ye, ge)), Q6n(re, ye, ee, C));
              let ue = g8t(re);
              (ofe(
                n,
                (we) => ({
                  ...we,
                  progress: ue,
                }),
                S,
              ),
                S.updateTranscript(n, (we) => {
                  let Ce = we.inProgressToolUseIDs;
                  if (ye.type === "assistant") {
                    for (let Ie of ye.message.content)
                      if (Ie.type === "tool_use") Ce = new Set([...Ce, Ie.id]);
                  } else if (ye.type === "user") {
                    let Ie = ye.message.content;
                    if (Array.isArray(Ie)) {
                      for (let Ve of Ie)
                        if (typeof Ve === "object" && "type" in Ve && Ve.type === "tool_result")
                          ((Ce = new Set(Ce)), Ce.delete(Ve.tool_use_id));
                    }
                  }
                  return {
                    ...we,
                    messages: ZXa(we.messages, ye),
                    inProgressToolUseIDs: Ce,
                  };
                }));
            }
            return {
              success: true,
              messages: ce,
            };
          }),
        ).finally(() => {
          if (ge) (D.push(...ge.preserved), (ge = null));
        }),
        ofe(
          n,
          (ye) => ({
            ...ye,
            currentWorkAbortController: void 0,
          }),
          S,
        ),
        l.signal.aborted)
      )
        break;
      if (pe) {
        T(`[inProcessRunner] ${t.agentId} work interrupted, returning to idle`);
        let ye = jl({
          content: t3,
        });
        S.updateTranscript(n, (ue) => ({
          ...ue,
          messages: JPe(ue.messages, ye),
        }));
      }
      let ie = a.getAppState().tasks[n],
        le = ie?.type === "in_process_teammate" && ie.isIdle;
      if (
        (ofe(
          n,
          (ye) => (
            ye.onIdleCallbacks?.forEach((ue) => ue()),
            {
              ...ye,
              isIdle: true,
              evictAfter: Date.now() + nfe,
              onIdleCallbacks: [],
            }
          ),
          S,
        ),
        !le && !g)
      )
        await Zgl(t.agentName, t.color, t.teamName, {
          idleReason: pe ? "interrupted" : "available",
          summary: R9t(D),
        });
      else T(`[inProcessRunner] Skipping duplicate idle notification for ${t.agentName}`);
      T(`[inProcessRunner] ${t.agentId} finished prompt, waiting for next`);
      let He = await mff(t, l, n, a.getAppState, S, t.parentSessionId, g);
      switch (He.type) {
        case "shutdown_request":
          (T(`[inProcessRunner] ${t.agentId} received shutdown request - passing to model`),
            (M = Uht({
              from: He.request?.from || "team-lead",
              text: He.originalMessage,
            })),
            (N = void 0),
            WTo(
              n,
              Rn({
                content: M,
              }),
              S,
            ));
          break;
        case "new_message":
          if (
            (T(`[inProcessRunner] ${t.agentId} received new message from ${He.from}`),
            He.from === "user")
          )
            ((M = He.message), (N = He.origin));
          else
            ((M = Uht({
              from: He.from,
              text: He.message,
              color: He.color,
              summary: He.summary,
            })),
              (N = void 0),
              WTo(
                n,
                Rn({
                  content: M,
                }),
                S,
              ));
          break;
        case "aborted":
          (T(`[inProcessRunner] ${t.agentId} aborted while waiting`), (B = true));
          break;
        case "idle_timeout":
          if ((T(`[inProcessRunner] ${t.agentId} idle timeout \u2014 exiting loop`), !g))
            (a.agentLifecycle.setTeammate(t.agentId, void 0), m9t(t.teamName, t.agentId));
          B = true;
          break;
      }
    }
    let V = false,
      Y;
    if (
      (ofe(
        n,
        (z) => {
          if (z.status !== "running") return ((V = true), z);
          return (
            (Y = z.toolUseId),
            z.onIdleCallbacks?.forEach((K) => K()),
            {
              ...z,
              status: "completed",
              notified: true,
              endTime: Date.now(),
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
              onIdleCallbacks: [],
            }
          );
        },
        S,
      ),
      !V)
    )
      S.updateTranscript(n, (z) => ({
        ...z,
        messages: z.messages.length ? [z.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set(),
      }));
    if ((jy(n), S.evictTerminal(n), !V))
      xf(n, "completed", {
        toolUseId: Y,
        summary: t.agentId,
      });
    if ((_qe(t.agentId), $)) It("swarm_in_process_run", "compact_blocked_by_hook");
    else xe("swarm_in_process_run");
    return {
      success: true,
      messages: D,
    };
  } catch (q) {
    let W = q instanceof Error ? q.message : "Unknown error";
    T(`[inProcessRunner] Agent ${t.agentId} failed: ${W}`);
    let V = false,
      Y;
    if (
      (ofe(
        n,
        (z) => {
          if (z.status !== "running") return ((V = true), z);
          return (
            (Y = z.toolUseId),
            z.onIdleCallbacks?.forEach((K) => K()),
            {
              ...z,
              status: "failed",
              notified: true,
              error: W,
              isIdle: true,
              endTime: Date.now(),
              onIdleCallbacks: [],
              pendingUserMessages: [],
              abortController: void 0,
              currentWorkAbortController: void 0,
            }
          );
        },
        S,
      ),
      !V)
    )
      S.updateTranscript(n, (z) => ({
        ...z,
        messages: z.messages.length ? [z.messages.at(-1)] : [],
        inProgressToolUseIDs: new Set(),
      }));
    if ((jy(n), S.evictTerminal(n), !V))
      xf(n, "failed", {
        toolUseId: Y,
        summary: t.agentId,
      });
    if (!g)
      await Zgl(t.agentName, t.color, t.teamName, {
        idleReason: "failed",
        completedStatus: "failed",
        failureReason: W,
      });
    return (
      _qe(t.agentId),
      Le("swarm_in_process_run", "agent_loop_failed"),
      {
        success: false,
        error: W,
        messages: D,
      }
    );
  }
}
function ibt(e) {
  let t = e.identity.agentId;
  gff(e).catch((n) => {
    T(`[inProcessRunner] Unhandled error in ${t}: ${n}`);
  });
}
var cff = 500;
