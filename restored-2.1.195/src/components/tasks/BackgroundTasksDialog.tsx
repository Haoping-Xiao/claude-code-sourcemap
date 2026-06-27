// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gsr
// matched 2.1.88 source: src/components/tasks/BackgroundTasksDialog.tsx
// class=modified  jaccard=0.3175  score=0.5158  fileCov=0.4523
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gsr = E(() => {
  si();
  Xa();
  tC();
  Tc();
  Ye();
  ps();
  tfe();
  Qko();
  Uoe();
  N8l();
  n0o();
  c7n();
  $7();
  es();
  sr();
  g0();
  vi();
  B_();
  mjo();
  ((sme = R(lt(), 1)), (OP = R(rt(), 1)), (aa = R(se(), 1)));
  hJt = ["all", "running", "queued", "failed", "done", "skipped", "interrupted"];
  _jo = {
    queued: "Queued",
    running: "Running",
    done: "Completed",
    failed: "Failed",
    skipped: "Skipped",
    interrupted: "Stopped",
  };
});
function Sjo(e) {
  return e !== "mcp_task" && e !== "monitor_ws";
}
function B5f(e, t) {
  return Object.values(e ?? {})
    .filter(wH)
    .filter((r) => !(r.type === "local_agent" && r.id === t));
}
function Ssr({ onDone: e, toolUseContext: t, initialDetailTaskId: n, onBack: r }) {
  let o = Ht((K) => K.tasks),
    s = Ht((K) => K.foregroundedTaskId),
    i = Ho(),
    a = $T(),
    l = Uu("chat:killAgents", "Chat", "ctrl+x ctrl+k"),
    c = o,
    u = xse.useRef(false),
    [d, p] = xse.useState(() => {
      if (n)
        return (
          (u.current = true),
          {
            mode: "detail",
            itemId: n,
          }
        );
      let K = B5f(c, s);
      if (K.length === 1 && Sjo(K[0].type))
        return (
          (u.current = true),
          {
            mode: "detail",
            itemId: K[0].id,
          }
        );
      return {
        mode: "list",
      };
    }),
    [f, m] = xse.useState(0);
  Wh("background-tasks-dialog");
  let {
      bashTasks: g,
      remoteSessions: h,
      agentTasks: y,
      teammateTasks: b,
      workflowTasks: _,
      mcpMonitors: S,
      mcpTasks: A,
      dreamTasks: v,
      allSelectableItems: C,
    } = xse.useMemo(() => {
      let J = Object.values(c ?? {})
          .filter(wH)
          .map(U5f)
          .sort((pe, ge) => {
            let he = pe.status,
              ie = ge.status;
            if (he === "running" && ie !== "running") return -1;
            if (he !== "running" && ie === "running") return 1;
            let le = "task" in pe ? pe.task.startTime : 0;
            return ("task" in ge ? ge.task.startTime : 0) - le;
          }),
        ne = J.filter((pe) => pe.type === "local_bash"),
        oe = J.filter((pe) => pe.type === "remote_agent"),
        re = J.filter((pe) => pe.type === "local_agent" && pe.id !== s),
        ee = J.filter((pe) => pe.type === "local_workflow"),
        ce = J.filter((pe) => pe.type === "monitor_mcp" || pe.type === "monitor_ws"),
        ae = J.filter((pe) => pe.type === "mcp_task"),
        de = J.filter((pe) => pe.type === "dream"),
        Ee = J.filter((pe) => pe.type === "in_process_teammate"),
        me =
          Ee.length > 0
            ? [
                {
                  id: "__leader__",
                  type: "leader",
                  label: `@${Hd}`,
                  status: "running",
                },
              ]
            : [];
      return {
        bashTasks: ne,
        remoteSessions: oe,
        agentTasks: re,
        workflowTasks: ee,
        mcpMonitors: ce,
        mcpTasks: ae,
        dreamTasks: de,
        teammateTasks: [...me, ...Ee],
        allSelectableItems: [...me, ...Ee, ...ne, ...ce, ...ae, ...oe, ...re, ...ee, ...de],
      };
    }, [c, s]),
    x = C[f] ?? null;
  No(
    {
      "confirm:previous": () => m((K) => Math.max(0, K - 1)),
      "confirm:next": () => m((K) => Math.min(C.length - 1, K + 1)),
      "confirm:yes": () => {
        let K = C[f];
        if (K) {
          if (K.type === "leader")
            (Wq(i),
              e("Viewing leader", {
                display: "system",
              }));
          else if (Sjo(K.type))
            p({
              mode: "detail",
              itemId: K.id,
            });
        }
      },
    },
    {
      context: "Confirmation",
      isActive: d.mode === "list",
    },
  );
  let I = (K) => {
    if (d.mode !== "list") return;
    if (K.key === "left") {
      (K.preventDefault(),
        e("Background dialog dismissed", {
          display: "skip",
        }));
      return;
    }
    let Z = C[f];
    if (!Z) return;
    if (K.key === "x" && !K.ctrl && !K.meta) {
      if ((K.preventDefault(), Z.type === "local_bash" && Z.status === "running")) k(Z.id);
      else if (Z.type === "local_agent" && Z.status === "running") D(Z.id);
      else if (Z.type === "in_process_teammate" && Z.status === "running") P(Z.id);
      else if (Z.type === "local_workflow" && Z.status === "running" && hsr) hsr(Z.id, a);
      else if (Z.type === "monitor_mcp" && Z.status === "running" && ysr) ysr(Z.id, a);
      else if (Z.type === "monitor_ws" && Z.status === "running") _Ae(Z.id, a);
      else if (Z.type === "mcp_task" && Z.status === "running" && e6l) e6l(Z.id, a, i);
      else if (Z.type === "dream" && Z.status === "running") O(Z.id);
      else if (Z.type === "remote_agent" && Z.status === "running")
        if (Z.task.isUltraplan) q2o(Z.id, Z.task.sessionId, a, i);
        else if (Z.task.isRemoteReview) V2o(Z.id, Z.task.sessionId, a, i);
        else L(Z.id);
    }
    if (K.key === "f" && !K.ctrl && !K.meta) {
      if (Z.type === "in_process_teammate" && Z.status === "running")
        (K.preventDefault(),
          Hz(Z.id, i),
          e("Viewing teammate", {
            display: "system",
          }));
      else if (Z.type === "leader")
        (K.preventDefault(),
          Wq(i),
          e("Viewing leader", {
            display: "system",
          }));
    }
  };
  function k(K) {
    return W7n.kill(K, a, i);
  }
  function D(K) {
    let Z = a.get(K);
    if (El(Z) && (Z.status === "running" || sw(Z))) ife(K, a);
    return G7n.kill(K, a, i, "user");
  }
  function P(K) {
    return iel.kill(K, a, i);
  }
  function O(K) {
    return F7n.kill(K, a, i);
  }
  function L(K) {
    return a8e.kill(K, a, i);
  }
  let M = xse.useEffectEvent(e);
  xse.useEffect(() => {
    if (d.mode !== "list") {
      let Z = (c ?? {})[d.itemId];
      if (!Z || (Z.type !== "local_workflow" && !wH(Z)))
        if (u.current)
          M("Background dialog dismissed", {
            display: "skip",
          });
        else
          p({
            mode: "list",
          });
    }
    let K = C.length;
    if (f >= K && K > 0) m(K - 1);
  }, [d, c, f, C, M]);
  let N = () => {
      if (r) r();
      else if (u.current && C.length <= 1)
        e("Background dialog dismissed", {
          display: "skip",
        });
      else
        ((u.current = false),
          p({
            mode: "list",
          }));
    },
    B = On(y, (K) => K.status === "running") > 1;
  if (d.mode !== "list" && c) {
    let K = c[d.itemId];
    if (!K) return null;
    switch (K.type) {
      case "local_bash":
        return Ba.jsx(
          P8l,
          {
            shell: K,
            onDone: e,
            onKillShell: () => void k(K.id),
            onBack: N,
          },
          `shell-${K.id}`,
        );
      case "local_agent":
        return Ba.jsx(
          p8l,
          {
            agent: K,
            onDone: e,
            onKillAgent: () => void D(K.id),
            onBack: N,
            killAllAgentsShortcut: B ? l : void 0,
          },
          `agent-${K.id}`,
        );
      case "remote_agent":
        return Ba.jsx(
          L8l,
          {
            session: K,
            onDone: e,
            toolUseContext: t,
            onBack: N,
            onKill:
              K.status !== "running"
                ? void 0
                : K.isUltraplan
                  ? () => void q2o(K.id, K.sessionId, a, i)
                  : K.isRemoteReview
                    ? () => void V2o(K.id, K.sessionId, a, i)
                    : () => void L(K.id),
          },
          `session-${K.id}`,
        );
      case "in_process_teammate":
        return Ba.jsx(
          T8l,
          {
            teammate: K,
            onDone: e,
            onKill: K.status === "running" ? () => void P(K.id) : void 0,
            onBack: N,
            onForeground:
              K.status === "running"
                ? () => {
                    (Hz(K.id, i),
                      e("Viewing teammate", {
                        display: "system",
                      }));
                  }
                : void 0,
          },
          `teammate-${K.id}`,
        );
      case "local_workflow":
        if (!Y8l) return null;
        return Ba.jsx(
          Y8l,
          {
            workflow: K,
            onDone: e,
            onKill: K.status === "running" && hsr ? () => hsr(K.id, a) : void 0,
            onPause: K.status === "running" && X8l ? () => X8l(K.id, a) : void 0,
            onSkipAgent: K.status === "running" && J8l ? (Z) => J8l(K.id, Z, a) : void 0,
            onRetryAgent: K.status === "running" && Q8l ? (Z) => Q8l(K.id, Z, a) : void 0,
            onBack: N,
          },
          `workflow-${K.id}`,
        );
      case "monitor_mcp":
        if (!Z8l) return null;
        return Ba.jsx(
          Z8l,
          {
            task: K,
            onKill: K.status === "running" && ysr ? () => ysr(K.id, a) : void 0,
            onBack: N,
          },
          `monitor-mcp-${K.id}`,
        );
      case "dream":
        return Ba.jsx(
          E8l,
          {
            task: K,
            onDone: () =>
              e("Background dialog dismissed", {
                display: "skip",
              }),
            onBack: N,
            onKill: K.status === "running" ? () => void O(K.id) : void 0,
          },
          `dream-${K.id}`,
        );
    }
  }
  let $ = On(g, (K) => K.status === "running"),
    q =
      On(h, (K) => K.status === "running" || K.status === "pending") +
      On(y, (K) => K.status === "running"),
    W = On(b, (K) => K.status === "running"),
    V = Wwe(
      [
        ...(W > 0
          ? [
              Ba.jsxs(
                w,
                {
                  children: [W, " ", W !== 1 ? "agents" : "agent"],
                },
                "teammates",
              ),
            ]
          : []),
        ...($ > 0
          ? [
              Ba.jsxs(
                w,
                {
                  children: [$, " ", $ !== 1 ? "active shells" : "active shell"],
                },
                "shells",
              ),
            ]
          : []),
        ...(q > 0
          ? [
              Ba.jsxs(
                w,
                {
                  children: [q, " ", q !== 1 ? "active agents" : "active agent"],
                },
                "agents",
              ),
            ]
          : []),
      ],
      (K) =>
        Ba.jsx(
          w,
          {
            children: " \xB7 ",
          },
          `separator-${K}`,
        ),
    ),
    Y = [
      Ba.jsx(
        ht,
        {
          chord: ["up", "down"],
          action: "select",
        },
        "upDown",
      ),
      ...(!x || Sjo(x.type)
        ? [
            Ba.jsx(
              ht,
              {
                chord: "enter",
                action: "view",
              },
              "enter",
            ),
          ]
        : []),
      ...(x?.type === "in_process_teammate" && x.status === "running"
        ? [
            Ba.jsx(
              ht,
              {
                chord: "f",
                action: "foreground",
              },
              "foreground",
            ),
          ]
        : []),
      ...((x?.type === "local_bash" ||
        x?.type === "local_agent" ||
        x?.type === "in_process_teammate" ||
        x?.type === "local_workflow" ||
        x?.type === "monitor_mcp" ||
        x?.type === "monitor_ws" ||
        x?.type === "mcp_task" ||
        x?.type === "dream" ||
        x?.type === "remote_agent") &&
      x.status === "running"
        ? [
            Ba.jsx(
              ht,
              {
                chord: "x",
                action: "stop",
              },
              "kill",
            ),
            ...(x.type === "local_agent" && B
              ? [
                  Ba.jsx(
                    ht,
                    {
                      chord: l,
                      action: "stop all agents",
                      format: {
                        keyCase: "lower",
                      },
                    },
                    "kill-all",
                  ),
                ]
              : []),
          ]
        : []),
      Ba.jsx(
        ht,
        {
          chord: ["left", "escape"],
          action: "close",
        },
        "esc",
      ),
    ];
  return Ba.jsx(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: I,
    children: Ba.jsx(zn, {
      title: "Background",
      subtitle: Ba.jsx(Ba.Fragment, {
        children: V,
      }),
      onCancel: () =>
        e("Background dialog dismissed", {
          display: "skip",
        }),
      color: "background",
      inputGuide: Ba.jsx(Tn, {
        children: Y,
      }),
      children:
        C.length === 0
          ? Ba.jsx(Fl, {
              children: "No tasks currently running",
            })
          : Ba.jsxs(U, {
              flexDirection: "column",
              children: [
                b.length > 0 &&
                  Ba.jsxs(U, {
                    flexDirection: "column",
                    children: [
                      (g.length > 0 || h.length > 0 || y.length > 0) &&
                        Ba.jsxs(w, {
                          dimColor: true,
                          children: [
                            Ba.jsxs(w, {
                              bold: true,
                              children: ["  ", "Agents"],
                            }),
                            " (",
                            On(b, (K) => K.type !== "leader"),
                            ")",
                          ],
                        }),
                      Ba.jsx(U, {
                        flexDirection: "column",
                        children: Ba.jsx(F5f, {
                          teammateTasks: b,
                          currentSelectionId: x?.id,
                        }),
                      }),
                    ],
                  }),
                g.length > 0 &&
                  Ba.jsxs(U, {
                    flexDirection: "column",
                    marginTop: b.length > 0 ? 1 : 0,
                    children: [
                      (b.length > 0 || h.length > 0 || y.length > 0) &&
                        Ba.jsxs(w, {
                          dimColor: true,
                          children: [
                            Ba.jsxs(w, {
                              bold: true,
                              children: ["  ", "Shells"],
                            }),
                            " (",
                            g.length,
                            ")",
                          ],
                        }),
                      Ba.jsx(U, {
                        flexDirection: "column",
                        children: g.map((K) =>
                          Ba.jsx(
                            JHe,
                            {
                              item: K,
                              isSelected: K.id === x?.id,
                            },
                            K.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                S.length > 0 &&
                  Ba.jsxs(U, {
                    flexDirection: "column",
                    marginTop: b.length > 0 || g.length > 0 ? 1 : 0,
                    children: [
                      Ba.jsxs(w, {
                        dimColor: true,
                        children: [
                          Ba.jsxs(w, {
                            bold: true,
                            children: ["  ", "Monitors"],
                          }),
                          " (",
                          S.length,
                          ")",
                        ],
                      }),
                      Ba.jsx(U, {
                        flexDirection: "column",
                        children: S.map((K) =>
                          Ba.jsx(
                            JHe,
                            {
                              item: K,
                              isSelected: K.id === x?.id,
                            },
                            K.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                A.length > 0 &&
                  Ba.jsxs(U, {
                    flexDirection: "column",
                    marginTop: b.length > 0 || g.length > 0 || S.length > 0 ? 1 : 0,
                    children: [
                      Ba.jsxs(w, {
                        dimColor: true,
                        children: [
                          Ba.jsxs(w, {
                            bold: true,
                            children: ["  ", "MCP tasks"],
                          }),
                          " (",
                          A.length,
                          ")",
                        ],
                      }),
                      Ba.jsx(U, {
                        flexDirection: "column",
                        children: A.map((K) =>
                          Ba.jsx(
                            JHe,
                            {
                              item: K,
                              isSelected: K.id === x?.id,
                            },
                            K.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                h.length > 0 &&
                  Ba.jsxs(U, {
                    flexDirection: "column",
                    marginTop: b.length > 0 || g.length > 0 || S.length > 0 || A.length > 0 ? 1 : 0,
                    children: [
                      Ba.jsxs(w, {
                        dimColor: true,
                        children: [
                          Ba.jsxs(w, {
                            bold: true,
                            children: ["  ", "Cloud agents"],
                          }),
                          " (",
                          h.length,
                          ")",
                        ],
                      }),
                      Ba.jsx(U, {
                        flexDirection: "column",
                        children: h.map((K) =>
                          Ba.jsx(
                            JHe,
                            {
                              item: K,
                              isSelected: K.id === x?.id,
                            },
                            K.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                y.length > 0 &&
                  Ba.jsxs(U, {
                    flexDirection: "column",
                    marginTop:
                      b.length > 0 || g.length > 0 || S.length > 0 || A.length > 0 || h.length > 0
                        ? 1
                        : 0,
                    children: [
                      Ba.jsxs(w, {
                        dimColor: true,
                        children: [
                          Ba.jsxs(w, {
                            bold: true,
                            children: ["  ", "Local agents"],
                          }),
                          " (",
                          y.length,
                          ")",
                        ],
                      }),
                      Ba.jsx(U, {
                        flexDirection: "column",
                        children: y.map((K) =>
                          Ba.jsx(
                            JHe,
                            {
                              item: K,
                              isSelected: K.id === x?.id,
                            },
                            K.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                _.length > 0 &&
                  Ba.jsxs(U, {
                    flexDirection: "column",
                    marginTop:
                      b.length > 0 ||
                      g.length > 0 ||
                      S.length > 0 ||
                      A.length > 0 ||
                      h.length > 0 ||
                      y.length > 0
                        ? 1
                        : 0,
                    children: [
                      Ba.jsxs(w, {
                        dimColor: true,
                        children: [
                          Ba.jsxs(w, {
                            bold: true,
                            children: ["  ", "Dynamic workflows"],
                          }),
                          " (",
                          _.length,
                          ")",
                        ],
                      }),
                      Ba.jsx(U, {
                        flexDirection: "column",
                        children: _.map((K) =>
                          Ba.jsx(
                            JHe,
                            {
                              item: K,
                              isSelected: K.id === x?.id,
                            },
                            K.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                v.length > 0 &&
                  Ba.jsx(U, {
                    flexDirection: "column",
                    marginTop:
                      b.length > 0 ||
                      g.length > 0 ||
                      S.length > 0 ||
                      A.length > 0 ||
                      h.length > 0 ||
                      y.length > 0 ||
                      _.length > 0
                        ? 1
                        : 0,
                    children: Ba.jsx(U, {
                      flexDirection: "column",
                      children: v.map((K) =>
                        Ba.jsx(
                          JHe,
                          {
                            item: K,
                            isSelected: K.id === x?.id,
                          },
                          K.id,
                        ),
                      ),
                    }),
                  }),
              ],
            }),
    }),
  });
}
function U5f(e) {
  switch (e.type) {
    case "local_bash":
      return {
        id: e.id,
        type: "local_bash",
        label: e.kind === "monitor" ? e.description : e.command,
        status: e.status,
        task: e,
      };
    case "remote_agent":
      return {
        id: e.id,
        type: "remote_agent",
        label: e.title,
        status: e.status,
        task: e,
      };
    case "local_agent":
      return {
        id: e.id,
        type: "local_agent",
        label: e.description,
        status: e.status,
        task: e,
      };
    case "in_process_teammate":
      return {
        id: e.id,
        type: "in_process_teammate",
        label: `@${e.identity.agentName}`,
        status: e.status,
        task: e,
      };
    case "local_workflow":
      return {
        id: e.id,
        type: "local_workflow",
        label: e.summary ?? e.description,
        status: e.status,
        task: e,
      };
    case "monitor_mcp":
      return {
        id: e.id,
        type: "monitor_mcp",
        label: e.description,
        status: e.status,
        task: e,
      };
    case "monitor_ws":
      return {
        id: e.id,
        type: "monitor_ws",
        label: e.description,
        status: e.status,
        task: e,
      };
    case "mcp_task":
      return {
        id: e.id,
        type: "mcp_task",
        label: e.description,
        status: e.status,
        task: e,
      };
    case "dream":
      return {
        id: e.id,
        type: "dream",
        label: e.description,
        status: e.status,
        task: e,
      };
  }
}
function JHe(e) {
  let t = Ejo.c(14),
    { item: n, isSelected: r } = e,
    { columns: o } = br(),
    s = Math.max(30, o - 26),
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((i = j8()), (t[0] = i));
  else i = t[0];
  let a = i,
    l = a && r,
    c = r ? nt.pointer + " " : "  ",
    u;
  if (t[1] !== l || t[2] !== c)
    ((u = Ba.jsx(w, {
      dimColor: l,
      children: c,
    })),
      (t[1] = l),
      (t[2] = c),
      (t[3] = u));
  else u = t[3];
  let d = r && !a ? "suggestion" : void 0,
    p;
  if (t[4] !== n.task || t[5] !== n.type || t[6] !== s)
    ((p =
      n.type === "leader"
        ? Ba.jsxs(w, {
            children: ["@", Hd],
          })
        : Ba.jsx(_8l, {
            task: n.task,
            maxActivityWidth: s,
          })),
      (t[4] = n.task),
      (t[5] = n.type),
      (t[6] = s),
      (t[7] = p));
  else p = t[7];
  let f;
  if (t[8] !== d || t[9] !== p)
    ((f = Ba.jsx(w, {
      color: d,
      children: p,
    })),
      (t[8] = d),
      (t[9] = p),
      (t[10] = f));
  else f = t[10];
  let m;
  if (t[11] !== u || t[12] !== f)
    ((m = Ba.jsxs(U, {
      flexDirection: "row",
      children: [u, f],
    })),
      (t[11] = u),
      (t[12] = f),
      (t[13] = m));
  else m = t[13];
  return m;
}
function F5f(e) {
  let t = Ejo.c(3),
    { teammateTasks: n, currentSelectionId: r } = e,
    o;
  if (t[0] !== r || t[1] !== n) {
    let s = n.filter(G5f),
      i = n.filter(j5f),
      a = new Map();
    for (let c of i) {
      let u = c.task.identity.teamName,
        d = a.get(u);
      if (d) d.push(c);
      else a.set(u, [c]);
    }
    let l = [...a.entries()];
    ((o = Ba.jsx(Ba.Fragment, {
      children: l.map((c) => {
        let [u, d] = c,
          p = d.length + s.length;
        return Ba.jsxs(
          U,
          {
            flexDirection: "column",
            children: [
              Ba.jsxs(w, {
                dimColor: true,
                children: ["  ", "Team: ", u, " (", p, ")"],
              }),
              s.map((f) =>
                Ba.jsx(
                  JHe,
                  {
                    item: f,
                    isSelected: f.id === r,
                  },
                  `${f.id}-${u}`,
                ),
              ),
              d.map((f) =>
                Ba.jsx(
                  JHe,
                  {
                    item: f,
                    isSelected: f.id === r,
                  },
                  f.id,
                ),
              ),
            ],
          },
          u,
        );
      }),
    })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = o));
  } else o = t[2];
  return o;
}
function j5f(e) {
  return e.type === "in_process_teammate";
}
function G5f(e) {
  return e.type === "leader";
}
var Ejo,
  xse,
  Ba,
  Y8l,
  bsr,
  hsr,
  X8l,
  J8l,
  Q8l,
  N5f = null,
  ysr,
  Z8l = null,
  e6l = null;
