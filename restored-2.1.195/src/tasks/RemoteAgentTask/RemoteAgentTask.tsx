// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gP
// matched 2.1.88 source: src/tasks/RemoteAgentTask/RemoteAgentTask.tsx
// class=modified  jaccard=0.2977  score=0.5233  fileCov=0.4084
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gP = E(() => {
  ree();
  Hp();
  iu();
  ft();
  Un();
  kt();
  jc();
  Xr();
  SC();
  Kgo();
  cWt();
  SJ();
  sTo();
  Rc();
  S6();
  fb();
  ZE();
  d8n();
  H0();
  C5();
  og();
  oo();
  QSn();
  VDe();
  er();
  wpe();
  Lo();
  je();
  BR();
  fn();
  At();
  Bi();
  rit();
  es();
  sa();
  Mx();
  Rd();
  vn();
  co();
  Ao();
  Ls();
  iWe();
  _a();
  dr();
  Jt();
  Cv();
  b8n();
  Ide();
  CTo();
  ((wht = require("crypto")), (H8n = R(se(), 1)));
});
function VZa(e) {
  let t = e.findIndex(
    (o) => o.type === "system" && o.subtype === "task_notification" && o.status !== void 0,
  );
  if (t === -1) return null;
  let n = -1;
  for (let o = t + 1; o < e.length; o++)
    if (e[o].type === "result") {
      n = o;
      break;
    }
  if (n === -1) return null;
  for (let o = n - 1; o > t; o--) {
    let s = e[o];
    if (s.type === "assistant") {
      let i = s.message.content
        .filter((a) => a.type === "text")
        .map((a) => ("text" in a ? a.text : ""))
        .join(
          `
`,
        )
        .trim();
      if (i) return i;
    }
  }
  let r = e[t];
  return r.type === "system" && r.subtype === "task_notification"
    ? (r.summary ?? "Remote dynamic workflow completed")
    : "Remote dynamic workflow completed";
}
function VQp(e) {
  return qQp.includes(e ?? "");
}
async function KQp(e) {
  try {
    await OTo(e.taskId, e);
  } catch (t) {
    T(`persistRemoteAgentMetadata failed: ${String(t)}`);
  }
}
async function aAe(e) {
  try {
    await l9t(e);
  } catch (t) {
    T(`removeRemoteAgentMetadata failed: ${String(t)}`);
  }
}
async function Ipe({ allowBundle: e = !1, cwd: t } = {}) {
  let n = await DOa({
    allowBundle: e,
    cwd: t,
  });
  if (n.length > 0)
    return {
      eligible: !1,
      errors: n,
    };
  return {
    eligible: !0,
  };
}
function poe(e) {
  switch (e.type) {
    case "not_logged_in":
      return "Please run /login and sign in with your Claude.ai account (not Console).";
    case "not_in_git_repo":
      return `Cloud agents require a git repository (checked: ${e.cwd}). Initialize git or run from a git repository.`;
    case "no_git_remote":
      return "Cloud agents require a GitHub remote. Add one with `git remote add origin REPO_URL`.";
    case "github_app_not_installed":
      return `The Claude GitHub app must be installed on this repository first.
${aWt}`;
    case "policy_blocked":
      return "Cloud sessions are disabled by your organization's policy. Contact your organization admin to enable them.";
  }
}
function PTo(e, t, n, r, o) {
  if (!MTo(e, r)) return;
  if (n === "completed") xe("task_remote_agent");
  else if (n === "failed") Le("task_remote_agent", "task_remote_agent_failed");
  let s = n === "completed" ? "completed successfully" : n === "failed" ? "failed" : "was stopped",
    i = o
      ? `
<${YC}>${o}</${YC}>`
      : "",
    a = jm(e),
    l = `<${Oc}>
<${Dp}>${e}</${Dp}>${i}
<${Qwe}>remote_agent</${Qwe}>
<${pM}>${a}</${pM}>
<${up}>${n}</${up}>
<${Zu}>Remote task "${t}" ${s}</${Zu}>
</${Oc}>`;
  Ad({
    value: l,
    mode: "task-notification",
    agentId: ls(),
    priority: "next",
  });
}
function MTo(e, t) {
  let n = !1;
  return (
    t.update(e, (r) => {
      if (r.notified) return r;
      return (
        (n = !0),
        {
          ...r,
          notified: !0,
        }
      );
    }),
    n
  );
}
function YQp(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let s = e[o];
    if (s?.type === "system" && (s.subtype === "hook_progress" || s.subtype === "hook_response")) {
      let i = xl(s.stdout, IFe);
      if (i?.trim()) return i.trim();
    }
  }
  for (let o = e.length - 1; o >= 0; o--) {
    let s = e[o];
    if (s?.type !== "assistant") continue;
    let i = zl(
        s.message.content,
        `
`,
      ),
      a = xl(i, IFe);
    if (a?.trim()) return a.trim();
  }
  let t = e
      .filter(
        (o) =>
          o.type === "system" && (o.subtype === "hook_progress" || o.subtype === "hook_response"),
      )
      .map((o) => o.stdout)
      .join(""),
    n = xl(t, IFe);
  if (n?.trim()) return n.trim();
  return (
    e
      .filter((o) => o.type === "assistant")
      .map((o) =>
        zl(
          o.message.content,
          `
`,
        ),
      )
      .join(
        `
`,
      )
      .trim() || null
  );
}
function w8n(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "system" && (o.subtype === "hook_progress" || o.subtype === "hook_response")) {
      let s = xl(o.stdout, IFe);
      if (s?.trim()) return s.trim();
    }
  }
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type !== "assistant") continue;
    let s = zl(
        o.message.content,
        `
`,
      ),
      i = xl(s, IFe);
    if (i?.trim()) return i.trim();
  }
  let t = e
      .filter(
        (r) =>
          r.type === "system" && (r.subtype === "hook_progress" || r.subtype === "hook_response"),
      )
      .map((r) => r.stdout)
      .join(""),
    n = xl(t, IFe);
  if (n?.trim()) return n.trim();
  return null;
}
function JQp(e) {
  try {
    let t = Ft(e);
    if (t && typeof t === "object" && !Array.isArray(t)) {
      let n = t.error;
      if (typeof n === "string") return n;
    }
  } catch {}
  return null;
}
function $To(e) {
  try {
    let t = Ft(e);
    return Array.isArray(t) ? t.length : void 0;
  } catch {
    return;
  }
}
function QQp(e, t, n, r) {
  if (!MTo(e, n)) return;
  let o = $To(t);
  xe("task_remote_agent", {
    remote_task_type: We("ultrareview"),
    ...(o !== void 0 && {
      findings_count: o,
    }),
  });
  let i = `<${Oc}>
<${Dp}>${e}</${Dp}>
<${Qwe}>remote_agent</${Qwe}>
<${up}>completed</${up}>
<${Zu}>Cloud review completed</${Zu}>
</${Oc}>
The cloud review produced the following findings:

${t}${
    r
      ? `

The user launched this review with --fix: apply these findings to the local working tree now. Skip findings that are wrong or not worth fixing, and run the relevant checks after.`
      : ""
  }`;
  Ad({
    value: i,
    mode: "task-notification",
    agentId: ls(),
    priority: "next",
  });
}
function zZa(e, t, n, r) {
  if (!MTo(e, n)) return;
  Le("task_remote_agent", "task_remote_agent_review_failed", {
    remote_task_type: We("ultrareview"),
    reason: $e(t),
  });
  let o = r ? `: ${r.replace(/[<>]/g, "").slice(0, 200)}` : "",
    s = XQp[t] + o,
    i = `<${Oc}>
<${Dp}>${e}</${Dp}>
<${Qwe}>remote_agent</${Qwe}>
<${up}>failed</${up}>
<${Zu}>Cloud review failed: ${s}</${Zu}>
</${Oc}>
Cloud review did not produce output (${s}). Tell the user to retry /code-review ultra, or use /review for a local review instead.`;
  Ad({
    value: i,
    mode: "task-notification",
    agentId: ls(),
    priority: "next",
  });
}
function ZQp(e) {
  let t = oZp(e);
  if (t.length > 0) return t;
  return eZp(e);
}
function eZp(e) {
  let t = e.findLast(
    (o) =>
      o.type === "assistant" &&
      o.message.content.some((s) => s.type === "tool_use" && s.name === qDe.name),
  );
  if (!t) return [];
  let n = t.message.content.find((o) => o.type === "tool_use" && o.name === qDe.name)?.input;
  if (!n) return [];
  let r = qDe.inputSchema.safeParse(n);
  if (!r.success) return [];
  return r.data.todos;
}
function oZp(e) {
  let t = new Map(),
    n = new Map();
  for (let r of e)
    if (r.type === "assistant")
      for (let o of r.message.content) {
        if (o.type !== "tool_use") continue;
        if (o.name === cC) {
          let s = nZp().safeParse(o.input);
          if (!s.success) continue;
          t.set(o.id, {
            content: s.data.subject,
            activeForm: s.data.activeForm ?? s.data.subject,
            status: "pending",
          });
        } else if (o.name === ZD) {
          let s = uWt(o.input),
            i = rZp().safeParse(s?.input ?? o.input);
          if (!i.success) continue;
          let { taskId: a, status: l, subject: c, activeForm: u } = i.data;
          if (l === "deleted") {
            n.delete(a);
            continue;
          }
          let d = n.get(a);
          n.set(a, {
            content: c ?? d?.content ?? a,
            activeForm: u ?? d?.activeForm ?? c ?? a,
            status: l ?? d?.status ?? "pending",
          });
        }
      }
    else if (r.type === "user") {
      let o = r.message.content;
      if (typeof o === "string") continue;
      for (let s of o) {
        if (s.type !== "tool_result") continue;
        let i = t.get(s.tool_use_id);
        if (!i) continue;
        if (s.is_error) {
          t.delete(s.tool_use_id);
          continue;
        }
        let a = "";
        if (typeof s.content === "string") a = s.content;
        else if (Array.isArray(s.content)) a = zl(s.content);
        let l = a.match(tZp)?.[1];
        if (!l) continue;
        if ((t.delete(s.tool_use_id), !n.has(l))) n.set(l, i);
      }
    }
  return [...n.values(), ...t.values()];
}
function lAe(e) {
  let {
      remoteTaskType: t,
      session: n,
      command: r,
      context: o,
      toolUseId: s,
      isRemoteReview: i,
      applyFixesOnComplete: a,
      isUltraplan: l,
      isLongRunning: c,
      remoteTaskMetadata: u,
    } = e,
    d = iN("remote_agent");
  Iht(d);
  let p = {
    ...LT(d, "remote_agent", n.title, s),
    type: "remote_agent",
    remoteTaskType: t,
    status: "running",
    sessionId: n.id,
    command: r,
    title: n.title,
    todoList: [],
    log: [],
    isRemoteReview: i,
    applyFixesOnComplete: a,
    isUltraplan: l,
    isLongRunning: c,
    pollStartedAt: Date.now(),
    remoteTaskMetadata: u,
  };
  (o.taskRegistry.register(p),
    KQp({
      taskId: d,
      remoteTaskType: t,
      sessionId: n.id,
      title: n.title,
      command: r,
      spawnedAt: Date.now(),
      toolUseId: s,
      isUltraplan: l,
      isRemoteReview: i,
      applyFixesOnComplete: a,
      isLongRunning: c,
      remoteTaskMetadata: u,
    }));
  let f = KZa(d, o);
  return {
    taskId: d,
    sessionId: n.id,
    cleanup: f,
  };
}
async function a9t(e) {
  try {
    await yl("task_remote_agent_restore", () => sZp(e));
  } catch (t) {
    T(`restoreRemoteAgentTasks failed: ${String(t)}`);
  }
}
async function sZp(e) {
  let t = await NTo();
  if (t.length === 0) return;
  for (let n of t) {
    let r;
    try {
      r = (await b_e(n.sessionId)).session_status;
    } catch (s) {
      if (s instanceof Error && s.message.startsWith("Session not found:"))
        (T(`restoreRemoteAgentTasks: dropping ${n.taskId} (404: ${String(s)})`), aAe(n.taskId));
      else T(`restoreRemoteAgentTasks: skipping ${n.taskId} (recoverable: ${String(s)})`);
      continue;
    }
    if (r === "archived") {
      aAe(n.taskId);
      continue;
    }
    let o = {
      ...LT(n.taskId, "remote_agent", n.title, n.toolUseId),
      type: "remote_agent",
      remoteTaskType: VQp(n.remoteTaskType) ? n.remoteTaskType : "remote-agent",
      status: "running",
      sessionId: n.sessionId,
      command: n.command,
      title: n.title,
      todoList: [],
      log: [],
      isRemoteReview: n.isRemoteReview,
      applyFixesOnComplete: n.applyFixesOnComplete,
      isUltraplan: n.isUltraplan,
      isLongRunning: n.isLongRunning,
      startTime: n.spawnedAt,
      pollStartedAt: Date.now(),
      remoteTaskMetadata: n.remoteTaskMetadata,
    };
    (e.taskRegistry.register(o), Iht(n.taskId), KZa(n.taskId, e));
  }
}
function KZa(e, t) {
  let n = !0,
    r = 1000,
    o = 1800000,
    s = 5,
    i = 0,
    a = null,
    l = [],
    c = null,
    u = async () => {
      if (!n) return;
      try {
        let d = t.taskRegistry.get(e);
        if (!d || d.status !== "running") return;
        let p = await lMe(d.sessionId, a);
        a = p.lastEventId;
        let f = p.newEvents.length > 0;
        if (f) {
          l = [...l, ...p.newEvents];
          let I = p.newEvents.map((k) => {
            if (k.type === "assistant")
              return k.message.content
                .filter((D) => D.type === "text")
                .map((D) => ("text" in D ? D.text : "")).join(`
`);
            return De(k);
          }).join(`
`);
          if (I)
            YZa(
              e,
              I +
                `
`,
            );
        }
        if (p.sessionStatus === "archived") {
          (t.taskRegistry.update(e, (I) =>
            I.status === "running"
              ? {
                  ...I,
                  status: "completed",
                  endTime: Date.now(),
                }
              : I,
          ),
            PTo(e, d.title, "completed", t.taskRegistry, d.toolUseId),
            jy(e),
            aAe(e));
          return;
        }
        let m =
          d.remoteTaskType === "remote-workflow" ? async () => VZa(l) : zQp.get(d.remoteTaskType);
        if (m) {
          let I = await m(d.remoteTaskMetadata);
          if (I !== null) {
            (t.taskRegistry.update(e, (k) =>
              k.status === "running"
                ? {
                    ...k,
                    status: "completed",
                    endTime: Date.now(),
                  }
                : k,
            ),
              PTo(e, I, "completed", t.taskRegistry, d.toolUseId),
              jy(e),
              aAe(e));
            return;
          }
        }
        let g =
          d.isUltraplan || d.isLongRunning || m ? void 0 : l.findLast((I) => I.type === "result");
        if (d.isRemoteReview && f && c === null) c = w8n(p.newEvents);
        let h;
        if (d.isRemoteReview && f) {
          let I = `<${NZe}>`,
            k = `</${NZe}>`;
          for (let D of p.newEvents)
            if (
              D.type === "system" &&
              (D.subtype === "hook_progress" || D.subtype === "hook_response")
            ) {
              let P = D.stdout,
                O = P.lastIndexOf(k),
                L = O === -1 ? -1 : P.lastIndexOf(I, O);
              if (L !== -1 && O > L)
                try {
                  let M = Ft(P.slice(L + I.length, O));
                  h = {
                    stage: M.stage,
                    bugsFound: M.bugs_found ?? 0,
                    bugsVerified: M.bugs_verified ?? 0,
                    bugsRefuted: M.bugs_refuted ?? 0,
                  };
                } catch {}
            }
        }
        let y = l.some(
          (I) =>
            I.type === "assistant" ||
            (d.isRemoteReview &&
              I.type === "system" &&
              (I.subtype === "hook_progress" || I.subtype === "hook_response")),
        );
        if (p.sessionStatus === "idle" && !f && y) i++;
        else i = 0;
        let b = i >= s,
          _ = l.some(
            (I) =>
              I.type === "system" &&
              (I.subtype === "hook_started" ||
                I.subtype === "hook_progress" ||
                I.subtype === "hook_response") &&
              I.hook_event === "SessionStart",
          ),
          S = l.some((I) => I.type === "assistant"),
          A = d.isRemoteReview && (c !== null || (!_ && b && S)),
          v = d.isRemoteReview && Date.now() - d.pollStartedAt > o,
          C = g
            ? g.subtype === "success"
              ? "completed"
              : "failed"
            : A || v
              ? "completed"
              : l.length > 0
                ? "running"
                : "starting",
          x = !1;
        if (
          (t.taskRegistry.update(e, (I) => {
            if (I.status !== "running") return ((x = !0), I);
            if (!f && (C === "running" || C === "starting")) return I;
            return {
              ...I,
              status: C === "starting" ? "running" : C,
              log: l,
              todoList: f ? ZQp(l) : I.todoList,
              reviewProgress: h ?? I.reviewProgress,
              endTime: g || A || v ? Date.now() : void 0,
            };
          }),
          x)
        )
          return;
        if (g || A || v) {
          let I = g && g.subtype !== "success" ? "failed" : "completed";
          if (d.isRemoteReview) {
            let k = c ?? YQp(l),
              D = k ? JQp(k) : null;
            if (k && I === "completed" && D === null) {
              (QQp(e, k, t.taskRegistry, d.applyFixesOnComplete), jy(e), aAe(e));
              return;
            }
            t.taskRegistry.update(e, (O) => ({
              ...O,
              status: "failed",
            }));
            let P =
              D !== null
                ? "orchestrator_error"
                : g && g.subtype !== "success"
                  ? "session_error"
                  : v && !A
                    ? "poll_timeout"
                    : "no_review_output";
            (zZa(e, P, t.taskRegistry, D ?? void 0), jy(e), aAe(e));
            return;
          }
          (PTo(e, d.title, I, t.taskRegistry, d.toolUseId), jy(e), aAe(e));
          return;
        }
      } catch (d) {
        (T(`Remote session poll failed for task ${e}: ${String(d)}`, {
          level: "error",
        }),
          (i = 0));
        try {
          let p = t.taskRegistry.get(e);
          if (p?.isRemoteReview && p.status === "running" && Date.now() - p.pollStartedAt > o) {
            (t.taskRegistry.update(e, (f) => ({
              ...f,
              status: "failed",
              endTime: Date.now(),
            })),
              zZa(e, "poll_timeout_after_api_error", t.taskRegistry),
              jy(e),
              aAe(e));
            return;
          }
        } catch {}
      }
      if (n) setTimeout(u, r);
    };
  return (
    u(),
    () => {
      n = !1;
    }
  );
}
function xpe(e) {
  return dS(e, process.env.SESSION_INGRESS_URL, {
    from: "cli",
  });
}
var qQp, zQp, XQp, tZp, nZp, rZp, a8e;
