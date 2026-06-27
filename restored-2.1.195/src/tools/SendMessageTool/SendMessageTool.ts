// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WEl
// matched 2.1.88 source: src/tools/SendMessageTool/SendMessageTool.ts
// class=modified  jaccard=0.2248  score=0.6212  fileCov=0.2605
// note: deminified; 3 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: inFlightTeammateResumes, SendMessageTool, SendMessagePreconditionError
// [unwrapped __esm module WEl] deps: ql, Ye, Jt
GRo = R(se(), 1);
function Cyf() {
  return el() ? VEl() : wyf();
}
function Iyf(e, t) {
  let n = e.teamContext?.teammates;
  if (!n) return;
  for (let r of Object.values(n)) if ("name" in r && r.name === t) return r.color;
  return;
}
function zEl(e, t) {
  let n = e.agentContext;
  if (n?.agentType === "teammate" && n.agentName) return n.agentName;
  let r = e.getAppState();
  for (let [s, i] of r.agentNameRegistry) if (i === t) return s;
  let o = r.tasks[t];
  if (El(o)) return o.agentType;
  if (uE(o)) return o.identity.agentName;
  return t;
}
function $Xn(e) {
  if (e.agentId) return zEl(e, e.agentId);
  return Oh() || (wf() ? "teammate" : Hd);
}
async function xyf(e, t, n, r) {
  let o = r.getAppState(),
    s = rp(o.teamContext);
  if (!s)
    return {
      data: {
        success: false,
        message: `No agent named '${e}' is currently addressable. Spawn a new one or use the agent ID.`,
      },
    };
  if (e !== Hd) {
    if (!Object.values(o.teamContext?.teammates ?? {}).some((u) => u.name === e)) {
      let u = await hoe(s);
      if (u !== null && !u.members.some((d) => d.name === e))
        return {
          data: {
            success: false,
            message: `No teammate named '${e}' is currently on team '${s}'. Spawn one with ${ss}({name: '${e}'}) \u2014 or message the lead to do so.`,
          },
        };
    }
  }
  let i = $Xn(r),
    a = Sv();
  await fg(
    e,
    {
      from: i,
      text: t,
      summary: n,
      timestamp: new Date().toISOString(),
      color: a,
    },
    s,
  );
  let l = Iyf(o, e);
  return {
    data: {
      success: true,
      message: `Message sent to ${e}'s inbox`,
      routing: {
        sender: i,
        senderColor: a,
        target: `@${e}`,
        targetColor: l,
        summary: n,
        content: t,
      },
    },
  };
}
async function kyf(e, t, n) {
  let r = n.getAppState(),
    o = rp(r.teamContext),
    s = $Xn(n),
    i = nrt("shutdown", e),
    a = jht({
      requestId: i,
      from: s,
      reason: t,
    });
  return (
    await fg(
      e,
      {
        from: s,
        text: De(a),
        timestamp: new Date().toISOString(),
        color: Sv(),
      },
      o,
    ),
    {
      data: {
        success: true,
        message: `Shutdown request sent to ${e}. Request ID: ${i}`,
        request_id: i,
        target: e,
      },
    }
  );
}
async function Ryf(e, t) {
  let n = rp(),
    r = PD(),
    o = Oh() || "teammate";
  T(`[SendMessageTool] handleShutdownApproval: teamName=${n}, agentId=${r}, agentName=${o}`);
  let s, i;
  if (n) {
    let l = await hoe(n);
    if (l && r) {
      let c = l.members.find((u) => u.agentId === r);
      if (c) ((s = c.tmuxPaneId), (i = c.backendType));
    }
  }
  let a = JTo({
    requestId: e,
    from: o,
    paneId: s,
    backendType: i,
  });
  if (
    (await fg(
      Hd,
      {
        from: o,
        text: De(a),
        timestamp: new Date().toISOString(),
        color: Sv(),
      },
      n,
    ),
    i === "in-process")
  ) {
    if ((T(`[SendMessageTool] In-process teammate ${o} approving shutdown - signaling abort`), r)) {
      let l = t.getAppState(),
        c = uAe(r, l.tasks);
      if (c?.abortController)
        (c.abortController.abort(),
          T(`[SendMessageTool] Aborted controller for in-process teammate ${o}`));
      else T(`[SendMessageTool] Warning: Could not find task/abortController for ${o}`);
    }
  } else {
    if (r) {
      let l = t.getAppState(),
        c = uAe(r, l.tasks);
      if (c?.abortController)
        return (
          T(`[SendMessageTool] Fallback: Found in-process task for ${o} via AppState, aborting`),
          c.abortController.abort(),
          {
            data: {
              success: true,
              message: `Shutdown approved (fallback path). Agent ${o} is now exiting.`,
              request_id: e,
            },
          }
        );
    }
    setImmediate(async () => {
      await ki(0, "other");
    });
  }
  return {
    data: {
      success: true,
      message: `Shutdown approved. Sent confirmation to team-lead. Agent ${o} is now exiting.`,
      request_id: e,
    },
  };
}
async function Lyf(e, t) {
  let n = rp(),
    r = Oh() || "teammate",
    o = QTo({
      requestId: e,
      from: r,
      reason: t,
    });
  return (
    await fg(
      Hd,
      {
        from: r,
        text: De(o),
        timestamp: new Date().toISOString(),
        color: Sv(),
      },
      n,
    ),
    {
      data: {
        success: true,
        message: `Shutdown rejected. Reason: "${t}". Continuing to work.`,
        request_id: e,
      },
    }
  );
}
async function Dyf(e, t, n, r) {
  let o = r.getAppState(),
    s = o.teamContext?.teamName;
  if (!wM(o.teamContext))
    throw new SendMessagePreconditionError(
      "Only the team lead can approve plans. Teammates cannot approve their own or other plans.",
    );
  let i = $x(Fr(r).mode),
    a = i === "plan" ? "default" : i,
    l = {
      type: "plan_approval_response",
      requestId: t,
      approved: true,
      ...(n !== void 0 && {
        feedback: n,
      }),
      timestamp: new Date().toISOString(),
      permissionMode: a,
    };
  return (
    await fg(
      e,
      {
        from: Hd,
        text: De(l),
        timestamp: new Date().toISOString(),
      },
      s,
    ),
    {
      data: {
        success: true,
        message: `Plan approved for ${e}. They will receive the approval and can proceed with implementation.`,
        request_id: t,
      },
    }
  );
}
async function Pyf(e, t, n, r) {
  let o = r.getAppState(),
    s = o.teamContext?.teamName;
  if (!wM(o.teamContext))
    throw new SendMessagePreconditionError(
      "Only the team lead can reject plans. Teammates cannot reject their own or other plans.",
    );
  let i = {
    type: "plan_approval_response",
    requestId: t,
    approved: false,
    feedback: n,
    timestamp: new Date().toISOString(),
  };
  return (
    await fg(
      e,
      {
        from: Hd,
        text: De(i),
        timestamp: new Date().toISOString(),
      },
      s,
    ),
    {
      data: {
        success: true,
        message: `Plan rejected for ${e} with feedback: "${n}"`,
        request_id: t,
      },
    }
  );
}
var qEl, inFlightTeammateResumes, vyf, VEl, wyf, SendMessagePreconditionError, SendMessageTool;
