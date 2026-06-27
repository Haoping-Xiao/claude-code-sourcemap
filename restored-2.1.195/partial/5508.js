// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module azo
// matched 2.1.88 source: src/hooks/useRemoteSession.ts
// class=partial  jaccard=0.0626  score=0.4587  fileCov=0.0676
// note: low-confidence suggestion: src/hooks/useRemoteSession.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var azo = E(() => {
  S7n();
  id();
  RN();
  je();
  een();
  U8n();
  F8n();
  Qvo();
  y6n();
  g6n();
});
function Kdr({
  sessionKey: e,
  sendResponse: t,
  requestDialog: n,
  toolRegistry: r,
  toolPermissionContext: o,
  canInterruptTurn: s
}) {
  let i = Yz.useRef(t);
  i.current = t;
  let a = Yz.useRef(n);
  a.current = n;
  let l = Yz.useRef(r);
  l.current = r;
  let c = Yz.useRef(o);
  c.current = o;
  let u = Yz.useRef(s);
  u.current = s;
  let [d] = na(),
    p = Yz.useRef(d);
  p.current = d;
  let f = Yz.useRef(new Map()),
    m = Yz.useCallback(h => {
      if (h.request.subtype !== "can_use_tool") return;
      let {
          request: y,
          request_id: b
        } = h,
        _ = f.current,
        S = qbc(y.tool_name, l.current),
        A = y.description ?? `${y.tool_name} requires permission`,
        v = new AbortController();
      _.set(b, v), zdr({
        tool: S,
        input: y.input,
        description: A,
        toolUseID: y.tool_use_id,
        permissionResult: {
          behavior: "ask",
          message: A,
          suggestions: y.permission_suggestions,
          blockedPath: y.blocked_path
        },
        assistantMessage: dE({
          content: [{
            type: "tool_use",
            id: y.tool_use_id,
            name: y.tool_name,
            input: y.input
          }]
        }),
        theme: p.current,
        toolPermissionContext: c.current,
        remoteWorkspace: vl(),
        signal: v.signal
      }).then(({
        dialog: C,
        descriptor: x
      }) => {
        if (!_.has(b)) return Promise.resolve({
          behavior: "cancelled"
        });
        return a.current(C, x, {
          signal: v.signal,
          queueBehind: !0
        });
      }).then(C => {
        if (!_.delete(b)) return;
        switch (C.behavior) {
          case "allow":
            i.current(b, {
              behavior: "allow",
              updatedInput: C.updatedInput,
              ...(C.permissionUpdates?.length && {
                updatedPermissions: C.permissionUpdates
              }),
              toolUseID: y.tool_use_id
            });
            return;
          case "deny":
            {
              let x = u.current && HYn({
                feedback: C.feedback,
                contentBlocks: C.contentBlocks,
                isSubagent: !!y.agent_id
              });
              i.current(b, {
                behavior: "deny",
                message: C.feedback ?? "User denied permission",
                ...(x && {
                  interrupt: !0
                }),
                toolUseID: y.tool_use_id
              });
              return;
            }
          case "cancelled":
            i.current(b, {
              behavior: "deny",
              message: "User aborted",
              ...(u.current && {
                interrupt: !0
              }),
              toolUseID: y.tool_use_id
            });
            return;
        }
      }).catch(C => {
        if (!_.delete(b)) return;
        i.current(b, {
          behavior: "deny",
          message: `Permission dialog failed: ${C instanceof Error ? C.message : String(C)}`,
          toolUseID: y.tool_use_id
        });
      });
    }, []),
    g = Yz.useCallback(h => {
      let y = f.current.get(h);
      if (y) f.current.delete(h), y.abort();
    }, []);
  return Yz.useEffect(() => {
    let h = f.current;
    return () => {
      for (let [y, b] of h) h.delete(y), i.current(y, {
        behavior: "deny",
        message: "Permission dispatcher unmounted"
      }), b.abort();
    };
  }, [e]), {
    dispatch: m,
    cancel: g
  };
}
var Yz;