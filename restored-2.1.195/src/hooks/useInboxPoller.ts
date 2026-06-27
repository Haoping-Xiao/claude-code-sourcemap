// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aYo
// matched 2.1.88 source: src/hooks/useInboxPoller.ts
// class=modified  jaccard=0.4615  score=0.7346  fileCov=0.5538
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var aYo = E(() => {
  ft();
  np();
  dn();
  WW();
  F2t();
  N8();
  je();
  vn();
  bm();
  tA();
  OI();
  ((_vm = new RegExp(`<${Dp}>([^<]+)</${Dp}>`, "g")), (bvm = `<${Oc}>`), (Svm = `<${up}>`));
});
function efr(e) {
  if (oU()) return;
  if (wf()) return Oh();
  if (wM(e.teamContext)) {
    if (!cje(e.teamContext)) return;
    let { leadAgentId: t, teammates: n } = e.teamContext;
    return n[t]?.name || "team-lead";
  }
  return;
}
function Ivm(e) {
  let t = e.startsWith("mcp__");
  return {
    name: e,
    userFacingName: () => (t ? `${e} (MCP)` : e),
    renderToolUseMessage: () => e,
    isMcp: t,
  };
}
function H0c({
  enabled: e,
  isLoading: t,
  focusedInputDialog: n,
  onSubmitMessage: r,
  requestDialog: o,
}) {
  let s = r,
    i = Dc(),
    a = Ho(),
    l = Z7(),
    c = ONe.useRef(new Set()),
    u = ONe.useCallback(async () => {
      if (!e) return;
      let m = i.getState(),
        g = efr(m);
      if (!g) return;
      let h = await p8e(g, m.teamContext?.teamName);
      if (h.length === 0) return;
      T(`[InboxPoller] Found ${h.length} unread message(s)`);
      let y = new Set();
      if (wf() && KPt())
        for (let L of h) {
          let M = Wht(L.text);
          if (M && L.from === Hd) {
            if (i.getState().toolPermissionContext.mode !== "plan") {
              T("[InboxPoller] Ignoring plan approval response while not in plan mode");
              continue;
            }
            if (
              (y.add(L),
              T(
                `[InboxPoller] Received plan approval response from team-lead: approved=${M.approved}`,
              ),
              M.approved)
            ) {
              let N = M.permissionMode ?? "default",
                B = lYo(N, m.toolPermissionContext, a);
              if (!B.ok)
                (T(
                  `[InboxPoller] Refusing inherited mode ${N} from plan approval: ${B.error}; exiting plan mode to default`,
                  {
                    level: "warn",
                  },
                ),
                  lYo("default", m.toolPermissionContext, a));
              (await u8e(B.ok ? B.mode : "default", m.teamContext?.teamName),
                T(
                  `[InboxPoller] Plan approved by team lead, exited plan mode to ${B.ok ? B.mode : "default"}`,
                ));
            } else
              T(
                `[InboxPoller] Plan rejected by team lead: ${M.feedback || "No feedback provided"}`,
              );
          } else if (M)
            T(`[InboxPoller] Ignoring plan approval response from non-team-lead: ${L.from}`);
        }
      let b = () => {
          f8e(g, m.teamContext?.teamName, h);
        },
        _ = [],
        S = [],
        A = [],
        v = [],
        C = [],
        x = [],
        I = [],
        k = [],
        D = [];
      for (let L of h) {
        let M = A9t(L.text),
          N = g8e(L.text),
          B = M8n(L.text),
          $ = H9t(L.text),
          q = Ght(L.text),
          W = fAe(L.text),
          V = qht(L.text),
          Y = C9t(L.text);
        if (M) _.push(L);
        else if (N) S.push(L);
        else if (B) A.push(L);
        else if ($) v.push(L);
        else if (q) C.push(L);
        else if (W) x.push(L);
        else if (evo(L.text))
          T(
            "[InboxPoller] Dropping team_permission_update message: permission rules are never accepted from the inbox",
            {
              level: "warn",
            },
          );
        else if (V) I.push(L);
        else if (Y) k.push(L);
        else if (kF(L.text)) {
          let z = Wht(L.text);
          if (z && y.has(L))
            D.push({
              ...L,
              text: x9t(z),
            });
          else
            T(
              `[InboxPoller] Dropping unrouted protocol frame from ${L.from}: ${L.text.substring(0, 80)}`,
              {
                level: "warn",
              },
            );
        } else D.push(L);
      }
      if (_.length > 0 && wM(m.teamContext)) {
        T(`[InboxPoller] Found ${_.length} permission request(s)`);
        let L = m.teamContext?.teamName;
        for (let N of _) {
          let B = A9t(N.text);
          if (!B) continue;
          if (c.current.has(B.request_id)) continue;
          c.current.add(B.request_id);
          let $ = _l(c3(), B.tool_name) ?? Ivm(B.tool_name),
            { dialog: q, descriptor: W } = await zdr({
              tool: $,
              input: B.input,
              description: B.description,
              toolUseID: B.tool_use_id,
              permissionResult: {
                behavior: "ask",
                message: B.description,
              },
              assistantMessage: dE({
                content: "",
              }),
              theme: "dark",
              requestSource: {
                type: "subagent",
                agentName: B.agent_id,
              },
              toolPermissionContext: m.toolPermissionContext,
            });
          o(q, W, {
            queueBehind: !0,
          }).then((V) => {
            switch ((c.current.delete(B.request_id), V.behavior)) {
              case "allow":
                f7n(
                  B.agent_id,
                  {
                    decision: "approved",
                    resolvedBy: "leader",
                    updatedInput: V.updatedInput,
                    permissionUpdates: V.permissionUpdates,
                  },
                  B.request_id,
                  L,
                );
                return;
              case "deny":
                f7n(
                  B.agent_id,
                  {
                    decision: "rejected",
                    resolvedBy: "leader",
                    feedback: V.feedback,
                  },
                  B.request_id,
                  L,
                );
                return;
              case "cancelled":
                f7n(
                  B.agent_id,
                  {
                    decision: "rejected",
                    resolvedBy: "leader",
                  },
                  B.request_id,
                  L,
                );
                return;
            }
          });
        }
        let M = A9t(_[0]?.text ?? "");
        if (M && !t && !n)
          bpe(
            {
              message: `${M.agent_id} needs permission for ${M.tool_name}`,
              notificationType: "worker_permission_prompt",
            },
            l,
          );
      }
      if (S.length > 0 && wf()) {
        T(`[InboxPoller] Found ${S.length} permission response(s)`);
        for (let L of S) {
          let M = g8e(L.text);
          if (!M) continue;
          if (L.from !== Hd) {
            T(`[InboxPoller] Ignoring permission response from non-team-lead: ${L.from}`, {
              level: "warn",
            });
            continue;
          }
          if (Wgl(M.request_id))
            if (
              (T(`[InboxPoller] Processing permission response for ${M.request_id}: ${M.subtype}`),
              M.subtype === "success")
            )
              obt({
                requestId: M.request_id,
                decision: "approved",
                updatedInput: M.response?.updated_input,
                permissionUpdates: M.response?.permission_updates,
              });
            else
              obt({
                requestId: M.request_id,
                decision: "rejected",
                feedback: M.error,
              });
        }
      }
      if (A.length > 0 && wM(m.teamContext)) {
        T(`[InboxPoller] Found ${A.length} sandbox permission request(s)`);
        let { mode: L, isBypassPermissionsModeAvailable: M } = m.toolPermissionContext,
          N = ket(L, M),
          B = m.teamContext?.teamName;
        async function $(W) {
          switch (N) {
            case "allow":
              return !0;
            case "deny":
              return !1;
            case "classify":
              return Tyt(
                W,
                void 0,
                [],
                c3(),
                m.toolPermissionContext,
                new AbortController().signal,
                {
                  isSubagentLoop: !1,
                },
              );
            case "ask":
              return null;
          }
        }
        let q = [];
        for (let W of A) {
          let V = M8n(W.text);
          if (!V) continue;
          if (!V.hostPattern?.host) {
            T("[InboxPoller] Invalid sandbox permission request: missing hostPattern.host");
            continue;
          }
          let Y = await $(V.hostPattern.host);
          if (Y !== null) {
            (T(
              `[InboxPoller] Auto-resolving sandbox request ${V.requestId} (mode=${L}, allow=${Y})`,
            ),
              m7n(V.workerName, V.requestId, V.hostPattern.host, Y, B));
            continue;
          }
          q.push({
            requestId: V.requestId,
            workerId: V.workerId,
            workerName: V.workerName,
            workerColor: V.workerColor,
            host: V.hostPattern.host,
            createdAt: V.createdAt,
          });
        }
        if (q.length > 0) {
          a((V) => ({
            ...V,
            workerSandboxPermissions: {
              ...V.workerSandboxPermissions,
              queue: [...V.workerSandboxPermissions.queue, ...q],
            },
          }));
          let W = q[0];
          if (W && !t && !n)
            bpe(
              {
                message: `${W.workerName} needs network access to ${W.host}`,
                notificationType: "worker_permission_prompt",
              },
              l,
            );
        }
      }
      if (v.length > 0 && wf()) {
        T(`[InboxPoller] Found ${v.length} sandbox permission response(s)`);
        for (let L of v) {
          let M = H9t(L.text);
          if (!M) continue;
          if (L.from !== Hd) {
            T(`[InboxPoller] Ignoring sandbox permission response from non-team-lead: ${L.from}`, {
              level: "warn",
            });
            continue;
          }
          if (zgl(M.requestId))
            (T(
              `[InboxPoller] Processing sandbox permission response for ${M.requestId}: allow=${M.allow}`,
            ),
              Kgl({
                requestId: M.requestId,
                host: M.host,
                allow: M.allow,
              }),
              a((N) => ({
                ...N,
                pendingSandboxRequest: null,
              })));
        }
      }
      if (I.length > 0 && wf()) {
        T(`[InboxPoller] Found ${I.length} mode set request(s)`);
        for (let L of I) {
          if (L.from !== Hd) {
            T(`[InboxPoller] Ignoring mode set request from non-team-lead: ${L.from}`);
            continue;
          }
          let M = qht(L.text);
          if (!M) {
            T(`[InboxPoller] Failed to parse mode set request: ${L.text.substring(0, 100)}`);
            continue;
          }
          T(`[InboxPoller] Applying mode change from team-lead: ${M.mode}`);
          let N = lYo(M.mode, m.toolPermissionContext, a),
            B = m.teamContext?.teamName;
          if (!N.ok) {
            (T(`[InboxPoller] Refusing mode set request for ${M.mode}: ${N.error}`, {
              level: "warn",
            }),
              await u8e($x(i.getState().toolPermissionContext.mode), B));
            continue;
          }
          await u8e(N.mode, B);
        }
      }
      if (k.length > 0 && wM(m.teamContext)) {
        T(`[InboxPoller] Found ${k.length} plan approval request(s), auto-approving`);
        let L = m.teamContext?.teamName,
          M = $x(m.toolPermissionContext.mode),
          N = M === "plan" ? "default" : M;
        for (let B of k) {
          let $ = C9t(B.text);
          if (!$) continue;
          let q = {
            type: "plan_approval_response",
            requestId: $.requestId,
            approved: !0,
            timestamp: new Date().toISOString(),
            permissionMode: N,
          };
          (fg(
            B.from,
            {
              from: Hd,
              text: De(q),
              timestamp: new Date().toISOString(),
            },
            L,
          ),
            T(`[InboxPoller] Auto-approved plan from ${B.from} (request ${$.requestId})`),
            D.push(B));
        }
      }
      if (C.length > 0 && wf()) {
        T(`[InboxPoller] Found ${C.length} shutdown request(s)`);
        for (let L of C) D.push(L);
      }
      if (x.length > 0 && wM(m.teamContext)) {
        T(`[InboxPoller] Found ${x.length} shutdown approval(s)`);
        for (let L of x) {
          let M = fAe(L.text);
          if (!M) continue;
          if (M.paneId && M.backendType)
            (async () => {
              try {
                await R7n();
                let B = await coe(),
                  q = await ezt(M.backendType)?.killPane(M.paneId, !B);
                T(`[InboxPoller] Killed pane ${M.paneId} for ${M.from}: ${q}`);
              } catch (B) {
                T(`[InboxPoller] Failed to kill pane for ${M.from}: ${B}`);
              }
            })();
          let N = M.from;
          if (N && m.teamContext?.teammates) {
            let B = Object.entries(m.teamContext.teammates).find(([, $]) => $.name === N)?.[0];
            if (B) {
              let $ = m.teamContext?.teamName;
              if ($)
                c8e($, {
                  agentId: B,
                  name: N,
                });
              let { notificationMessage: q } = $
                ? await gft($, B, N, "shutdown")
                : {
                    notificationMessage: `${N} has shut down.`,
                  };
              (a((W) => {
                if (!W.teamContext?.teammates) return W;
                if (!(B in W.teamContext.teammates)) return W;
                let { [B]: V, ...Y } = W.teamContext.teammates,
                  z = {
                    ...W.tasks,
                  };
                for (let [K, Z] of Object.entries(z))
                  if (uE(Z) && Z.identity.agentId === B)
                    z[K] = {
                      ...Z,
                      status: "completed",
                      endTime: Date.now(),
                      notified: !0,
                      evictAfter: Date.now() + Oht,
                    };
                return {
                  ...W,
                  tasks: z,
                  teamContext: {
                    ...W.teamContext,
                    teammates: Y,
                  },
                  inbox: {
                    messages: [
                      ...W.inbox.messages,
                      {
                        id: cYo.randomUUID(),
                        from: "system",
                        text: De({
                          type: "teammate_terminated",
                          message: q,
                        }),
                        timestamp: new Date().toISOString(),
                        status: "pending",
                      },
                    ],
                  },
                };
              }),
                T(`[InboxPoller] Removed ${N} (${B}) from teamContext`));
            }
          }
          D.push(L);
        }
      }
      if (D.length === 0) {
        b();
        return;
      }
      let P = Fht(D, {
          recipientIsLead: wM(m.teamContext),
        }),
        O = () => {
          a((L) => ({
            ...L,
            inbox: {
              messages: [
                ...L.inbox.messages,
                ...D.map((M) => ({
                  id: cYo.randomUUID(),
                  from: M.from,
                  text: M.text,
                  timestamp: M.timestamp,
                  status: "pending",
                  color: M.color,
                  summary: M.summary,
                })),
              ],
            },
          }));
        };
      if (!t && !n) {
        if ((T("[InboxPoller] Session idle, submitting immediately"), !s(P)))
          (T("[InboxPoller] Submission rejected, queuing for later delivery"), O());
      } else (T("[InboxPoller] Session busy, queuing for later delivery"), O());
      b();
    }, [e, t, n, s, a, l, i, o]);
  ONe.useEffect(() => {
    if (!e) return;
    if (t || n) return;
    let m = i.getState();
    if (!efr(m)) return;
    let h = m.inbox.messages.filter((S) => S.status === "pending"),
      y = m.inbox.messages.filter((S) => S.status === "processed");
    if (y.length > 0) {
      T(`[InboxPoller] Cleaning up ${y.length} processed message(s) that were delivered mid-turn`);
      let S = new Set(y.map((A) => A.id));
      a((A) => ({
        ...A,
        inbox: {
          messages: A.inbox.messages.filter((v) => !S.has(v.id)),
        },
      }));
    }
    if (h.length === 0) return;
    T(`[InboxPoller] Session idle, delivering ${h.length} pending message(s)`);
    let b = Fht(h, {
      recipientIsLead: wM(m.teamContext),
    });
    if (s(b)) {
      let S = new Set(h.map((A) => A.id));
      a((A) => ({
        ...A,
        inbox: {
          messages: A.inbox.messages.filter((v) => !S.has(v.id)),
        },
      }));
    } else T("[InboxPoller] Submission rejected, keeping messages queued");
  }, [e, t, n, s, a, i]);
  let d = Ht((m) => !!efr(m));
  Gc(() => void u(), e && d ? Cvm : null);
  let f = ONe.useRef(!1);
  ONe.useEffect(() => {
    if (!e) return;
    if (f.current) return;
    if (efr(i.getState())) ((f.current = !0), u());
  }, [e, u, i]);
}
function lYo(e, t, n) {
  let r = jO(e),
    o = xet(r) ? r : jO($x(r)),
    s = o === "bypassPermissions",
    i = Zpe(
      o,
      s
        ? {
            ...t,
            isBypassPermissionsModeAvailable: !0,
          }
        : t,
      (a) =>
        n((l) => {
          let c = l.toolPermissionContext,
            u =
              c.isBypassPermissionsModeAvailable === s
                ? c
                : {
                    ...c,
                    isBypassPermissionsModeAvailable: s,
                  },
            d = a(u);
          return d === c
            ? l
            : {
                ...l,
                toolPermissionContext: d,
              };
        }),
    );
  return i.ok
    ? {
        ok: !0,
        mode: o,
      }
    : i;
}
var cYo,
  ONe,
  Cvm = 1000;
