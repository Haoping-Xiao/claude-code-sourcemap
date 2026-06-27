// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WEl
// matched 2.1.88 source: src/tools/SendMessageTool/SendMessageTool.ts
// class=modified  jaccard=0.2248  score=0.6212  fileCov=0.2605
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: inFlightTeammateResumes, SendMessageTool, SendMessagePreconditionError
// [unwrapped __esm module WEl] deps: commands/add-dir/validation.ts, hooks/useTerminalSize.ts, utils/fsOperations.ts
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
async function handleMessage(recipientName, content, summary, context) {
  let appState = context.getAppState(),
    s = rp(appState.teamContext);
  if (!s)
    return {
      data: {
        success: false,
        message: `No agent named '${recipientName}' is currently addressable. Spawn a new one or use the agent ID.`,
      },
    };
  if (recipientName !== Hd) {
    if (
      !Object.values(appState.teamContext?.teammates ?? {}).some((u) => u.name === recipientName)
    ) {
      let u = await hoe(s);
      if (u !== null && !u.members.some((d) => d.name === recipientName))
        return {
          data: {
            success: false,
            message: `No teammate named '${recipientName}' is currently on team '${s}'. Spawn one with ${ss}({name: '${recipientName}'}) \u2014 or message the lead to do so.`,
          },
        };
    }
  }
  let i = $Xn(context),
    a = Sv();
  await fg(
    recipientName,
    {
      from: i,
      text: content,
      summary: summary,
      timestamp: new Date().toISOString(),
      color: a,
    },
    s,
  );
  let l = Iyf(appState, recipientName);
  return {
    data: {
      success: true,
      message: `Message sent to ${recipientName}'s inbox`,
      routing: {
        sender: i,
        senderColor: a,
        target: `@${recipientName}`,
        targetColor: l,
        summary: summary,
        content: content,
      },
    },
  };
}
async function handleShutdownRequest(targetName, reason, context) {
  let appState = context.getAppState(),
    o = rp(appState.teamContext),
    s = $Xn(context),
    i = nrt("shutdown", targetName),
    a = jht({
      requestId: i,
      from: s,
      reason: reason,
    });
  return (
    await fg(
      targetName,
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
        message: `Shutdown request sent to ${targetName}. Request ID: ${i}`,
        request_id: i,
        target: targetName,
      },
    }
  );
}
async function handleShutdownApproval(requestId, context) {
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
    requestId: requestId,
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
      let l = context.getAppState(),
        c = uAe(r, l.tasks);
      if (c?.abortController)
        (c.abortController.abort(),
          T(`[SendMessageTool] Aborted controller for in-process teammate ${o}`));
      else T(`[SendMessageTool] Warning: Could not find task/abortController for ${o}`);
    }
  } else {
    if (r) {
      let l = context.getAppState(),
        c = uAe(r, l.tasks);
      if (c?.abortController)
        return (
          T(`[SendMessageTool] Fallback: Found in-process task for ${o} via AppState, aborting`),
          c.abortController.abort(),
          {
            data: {
              success: true,
              message: `Shutdown approved (fallback path). Agent ${o} is now exiting.`,
              request_id: requestId,
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
      request_id: requestId,
    },
  };
}
async function handleShutdownRejection(requestId, reason) {
  let n = rp(),
    r = Oh() || "teammate",
    o = QTo({
      requestId: requestId,
      from: r,
      reason: reason,
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
        message: `Shutdown rejected. Reason: "${reason}". Continuing to work.`,
        request_id: requestId,
      },
    }
  );
}
async function handlePlanApproval(recipientName, requestId, context, r) {
  let appState = r.getAppState(),
    s = appState.teamContext?.teamName;
  if (!wM(appState.teamContext))
    throw new SendMessagePreconditionError(
      "Only the team lead can approve plans. Teammates cannot approve their own or other plans.",
    );
  let i = $x(Fr(r).mode),
    a = i === "plan" ? "default" : i,
    l = {
      type: "plan_approval_response",
      requestId: requestId,
      approved: true,
      ...(context !== void 0 && {
        feedback: context,
      }),
      timestamp: new Date().toISOString(),
      permissionMode: a,
    };
  return (
    await fg(
      recipientName,
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
        message: `Plan approved for ${recipientName}. They will receive the approval and can proceed with implementation.`,
        request_id: requestId,
      },
    }
  );
}
async function handlePlanRejection(recipientName, requestId, feedback, context) {
  let appState = context.getAppState(),
    s = appState.teamContext?.teamName;
  if (!wM(appState.teamContext))
    throw new SendMessagePreconditionError(
      "Only the team lead can reject plans. Teammates cannot reject their own or other plans.",
    );
  let i = {
    type: "plan_approval_response",
    requestId: requestId,
    approved: false,
    feedback: feedback,
    timestamp: new Date().toISOString(),
  };
  return (
    await fg(
      recipientName,
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
        message: `Plan rejected for ${recipientName} with feedback: "${feedback}"`,
        request_id: requestId,
      },
    }
  );
}
var qEl, inFlightTeammateResumes, vyf, VEl, wyf, SendMessagePreconditionError, SendMessageTool;
