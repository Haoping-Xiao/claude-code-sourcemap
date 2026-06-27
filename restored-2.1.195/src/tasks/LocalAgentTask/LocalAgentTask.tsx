// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vDo
// matched 2.1.88 source: src/tasks/LocalAgentTask/LocalAgentTask.tsx
// class=modified  jaccard=0.323  score=0.5413  fileCov=0.4447
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vDo] deps: ih
wJn = Mi();
function J6n() {
  return {
    toolUseCount: 0,
    latestInputTokens: 0,
    cumulativeOutputTokens: 0,
    recentActivities: [],
  };
}
function Gwo(e) {
  return e.latestInputTokens + e.cumulativeOutputTokens;
}
function Q6n(e, t, n, r) {
  if (t.type === "progress" && t.data.type === "repl_tool_call" && t.data.phase === "start") {
    let { toolName: s, toolInput: i } = t.data,
      a = r ? Aze(s, i, r) : void 0;
    if (
      (e.recentActivities.push({
        toolName: s,
        input: i,
        activityDescription: n?.(s, i),
        isSearch: a?.isSearch,
        isRead: a?.isRead,
      }),
      e.recentActivities.length > Pvl)
    )
      e.recentActivities.shift();
    return;
  }
  if (t.type !== "assistant") return;
  let o = t.message.usage;
  ((e.latestInputTokens =
    o.input_tokens + (o.cache_creation_input_tokens ?? 0) + (o.cache_read_input_tokens ?? 0)),
    (e.cumulativeOutputTokens += o.output_tokens));
  for (let s of t.message.content) {
    if (s.type !== "tool_use") continue;
    if ((e.toolUseCount++, s.name === Ip)) continue;
    if (s.name === Fm) continue;
    let i = s.input,
      a = r ? Aze(s.name, i, r) : void 0;
    e.recentActivities.push({
      toolName: s.name,
      input: i,
      activityDescription: n?.(s.name, i),
      isSearch: a?.isSearch,
      isRead: a?.isRead,
    });
  }
  while (e.recentActivities.length > Pvl) e.recentActivities.shift();
}
function g8t(e) {
  return {
    toolUseCount: e.toolUseCount,
    tokenCount: Gwo(e),
    lastActivity: e.recentActivities.at(-1),
    recentActivities: [...e.recentActivities],
  };
}
function Z6n(e) {
  return (t, n) => _l(e, t)?.getActivityDescription?.(n) ?? void 0;
}
function Xoe(e) {
  return e.keepaliveReasons ?? new Set();
}
function EEf(e, t) {
  (CDo.delete(e), bAe(e, wDo, t));
  let n = t.get(e);
  if (El(n) && n.status === "completed" && Xoe(n).size === 0) (jy(e), IJn(e, t));
}
function sw(e) {
  return e.status === "completed" && Xoe(e).size > 0;
}
function IDo(e, t) {
  if (e.retain) return;
  if (t.park && (e.keepaliveReasons?.size ?? 0) > 0) return;
  return Date.now() + nfe;
}
function El(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "local_agent";
}
function Vhl(e, t) {
  if (!e) return;
  let n = t.get(e);
  return El(n) && n.agentType !== "main-session" ? e : void 0;
}
function MF(e) {
  return El(e) && e.agentType !== "main-session";
}
function VAe(e, t, n) {
  if (!e) return;
  n.update(e, (r) => {
    if (!El(r) || Xoe(r).has(t)) return r;
    return {
      ...r,
      keepaliveReasons: new Set(Xoe(r)).add(t),
    };
  });
}
function bAe(e, t, n) {
  if (!e) return;
  n.update(e, (r) => {
    if (!El(r) || !Xoe(r).has(t)) return r;
    let o = new Set(Xoe(r));
    o.delete(t);
    let s = o.size === 0 && AC(r.status) && !r.retain;
    return {
      ...r,
      keepaliveReasons: o,
      ...(s &&
        r.evictAfter === void 0 && {
          evictAfter: Date.now() + nfe,
        }),
    };
  });
}
function hcl(e, t) {
  if (!e) return false;
  let n = t.get(e);
  return El(n) && Xoe(n).size > 0;
}
function Cyt(e, t) {
  if (!e) return false;
  let n = t.get(e);
  if (!El(n)) return false;
  for (let r of Xoe(n)) if (r.startsWith("agent:")) return true;
  return false;
}
function ezn(e, t) {
  let n = t.get(e);
  if (!El(n)) return;
  let r = new Set();
  for (let o of qX())
    if (o.mode === "task-notification" && o.agentId === Bu(e) && o.taskId) r.add(o.taskId);
  for (let o of Xoe(n)) {
    if (!o.startsWith("agent:")) continue;
    let s = o.slice(6);
    if (r.has(s)) continue;
    let i = t.get(s);
    if (!i || (El(i) && i.notified)) bAe(e, o, t);
  }
}
function oze(e, t, n, r = {}) {
  let o = {
    text: t,
    origin: r.origin,
    isMeta: r.isMeta ?? false,
  };
  n.update(e, (s) => ({
    ...s,
    pendingMessages: [...s.pendingMessages, o],
  }));
}
function PXn(e, t, n) {
  n.updateTranscript(e, (r) => ({
    ...r,
    messages: [...r.messages, t],
  }));
}
function CJn(e, t) {
  let n = t.get(e);
  if (!El(n) || n.pendingMessages.length === 0) return [];
  let r = n.pendingMessages;
  return (
    t.update(e, (o) => ({
      ...o,
      pendingMessages: [],
    })),
    r
  );
}
function q8e({
  taskId: e,
  description: t,
  status: n,
  killedBy: r,
  error: o,
  taskRegistry: s,
  finalMessage: i,
  usage: a,
  toolUseId: l,
  worktreePath: c,
  worktreeBranch: u,
  ownerAgentId: d,
}) {
  let p = false,
    f = false,
    m;
  (s.update(e, (I) => {
    if (((f = true), (m = I.ownerAgentId), I.notified)) return I;
    return (
      (p = true),
      {
        ...I,
        notified: true,
      }
    );
  }),
    (m ??= d));
  let g = m ? s.get(m) : void 0,
    y = (El(g) && sw(g) && !Ir()) || (El(g) && g.status === "running");
  if (!(p && y)) bAe(m, `agent:${e}`, s);
  if (!p) {
    T(
      `[enqueueAgentNotification] skipped taskId=${e} status=${n} taskPresent=${f} reason=${f ? "already-notified" : "task-not-in-registry"}`,
      {
        level: f ? "debug" : "warn",
      },
    );
    return;
  }
  s.abortSpeculation();
  let b =
      n === "completed"
        ? `Agent "${t}" finished`
        : n === "failed"
          ? `Agent "${t}" failed: ${o || "Unknown error"}`
          : r === "parent"
            ? `Agent "${t}" was stopped by Claude`
            : r === "user"
              ? `Agent "${t}" was stopped by user`
              : `Agent "${t}" was stopped`,
    _ = jm(e),
    S = l
      ? `
<${YC}>${l}</${YC}>`
      : "",
    A = i
      ? `
<result>${ec(i)}</result>`
      : "",
    v = a
      ? `
<usage><subagent_tokens>${a.totalTokens}</subagent_tokens><tool_uses>${a.toolUses}</tool_uses><duration_ms>${a.durationMs}</duration_ms></usage>`
      : "",
    C = c
      ? `
<${Mkr}><${$kr}>${c}</${$kr}>${u ? `<${Okr}>${u}</${Okr}>` : ""}</${Mkr}>`
      : "",
    x = `<${Oc}>
<${Dp}>${e}</${Dp}>${S}
<${pM}>${_}</${pM}>
<${up}>${n}</${up}>
<${Zu}>${ec(b)}</${Zu}>
<note>A task-notification fires each time this agent stops with no live background children of its own. The user can send it another message and resume it, so the same task-id may notify more than once.</note>${A}${v}${C}
</${Oc}>`;
  Ad({
    value: x,
    mode: "task-notification",
    priority: "next",
    agentId: y && m ? Bu(m) : ls(),
    taskId: e,
  });
}
function IJn(e, t) {
  let n = t.get(e);
  if (El(n) && sw(n) && !Ir()) return;
  let r = ALe((o) => {
    if (o.mode !== "task-notification" || o.agentId !== Bu(e)) return false;
    let s = o.taskId ? t.get(o.taskId) : void 0;
    return El(s) && s.ownerAgentId === e;
  });
  for (let o of r)
    Ad({
      ...o,
      agentId: ls(),
    });
}
function HAe(e, t, n = "user") {
  let r = t.get(e);
  if (El(r) && sw(r) && !r.notified) {
    let s = r.result;
    q8e({
      taskId: e,
      description: r.description,
      status: "killed",
      killedBy: n,
      taskRegistry: t,
      finalMessage: s
        ? s.content.map((i) => i.text).join(`
`)
        : void 0,
      usage: s
        ? {
            totalTokens: s.totalTokens,
            toolUses: s.totalToolUseCount,
            durationMs: s.totalDurationMs,
          }
        : void 0,
      toolUseId: r.toolUseId,
      ownerAgentId: r.ownerAgentId,
    });
  }
  let o = false;
  if (
    (t.update(e, (s) => {
      if (s.status !== "running" && !sw(s)) return s;
      return (
        (o = true),
        s.abortController?.abort(),
        {
          ...s,
          status: "killed",
          killedBy: n,
          notified: s.notified || sw(s),
          endTime: Date.now(),
          keepaliveReasons: new Set(),
          evictAfter: IDo(s, {
            park: false,
          }),
          abortController: void 0,
          selectedAgent: void 0,
        }
      );
    }),
    o)
  )
    (IJn(e, t), jy(e));
}
function Mvl(e, t, n = "user") {
  for (let [r, o] of Object.entries(e)) if (El(o) && sw(o)) HAe(r, t, n);
  for (let [r, o] of Object.entries(e))
    if (o.type === "local_agent" && o.status === "running") HAe(r, t, n);
}
function Iyt(e, t) {
  t.update(e, (n) => {
    if (n.notified) return n;
    return {
      ...n,
      notified: true,
    };
  });
}
function vol(e, t, n) {
  let r = false;
  if (
    (n.update(e, (o) => {
      if (o.status !== "running") return o;
      let s = o.progress;
      if (
        s &&
        s.toolUseCount === t.toolUseCount &&
        s.tokenCount === t.tokenCount &&
        s.lastActivity === t.lastActivity &&
        (s.summary ?? t.summary) === s.summary &&
        AEf(s.recentActivities, t.recentActivities)
      )
        return o;
      let i = s?.summary;
      return (
        (r = true),
        {
          ...o,
          progress: i
            ? {
                ...t,
                summary: i,
              }
            : t,
        }
      );
    }),
    !r)
  )
    return;
  n.updateTranscript(e, (o) => {
    let s = o.progress;
    if (s?.tokenCount === t.tokenCount && s.toolUseCount === t.toolUseCount) return o;
    return {
      ...o,
      progress: {
        tokenCount: t.tokenCount,
        toolUseCount: t.toolUseCount,
      },
    };
  });
}
function AEf(e, t) {
  if (e === t) return true;
  if (!e || !t || e.length !== t.length) return false;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return false;
  return true;
}
function Url(e, t, n) {
  let r = null;
  if (
    (n.update(e, (o) => {
      if (o.status !== "running") return o;
      return (
        (r = {
          tokenCount: o.progress?.tokenCount ?? 0,
          toolUseCount: o.progress?.toolUseCount ?? 0,
          startTime: o.startTime,
          toolUseId: o.toolUseId,
          agentType: o.agentType,
        }),
        {
          ...o,
          progress: {
            ...o.progress,
            toolUseCount: o.progress?.toolUseCount ?? 0,
            tokenCount: o.progress?.tokenCount ?? 0,
            summary: t,
          },
        }
      );
    }),
    r && Jve())
  ) {
    let { tokenCount: o, toolUseCount: s, startTime: i, toolUseId: a, agentType: l } = r;
    vyt({
      taskId: e,
      toolUseId: a,
      description: t,
      subagentType: l,
      startTime: i,
      totalTokens: o,
      toolUses: s,
      summary: t,
    });
  }
}
function wol(e, t) {
  let n = e.agentId,
    r = false,
    o = false,
    s = false,
    i = false,
    a = false;
  if (
    (t.update(n, (l) => {
      if (l.status !== "running") return l;
      r = true;
      for (let d of Xoe(l))
        if (d !== wDo) {
          a = true;
          break;
        }
      let c = i ? new Set(Xoe(l)).add(wDo) : l.keepaliveReasons,
        u = {
          ...l,
          status: "completed",
          result: e,
          endTime: Date.now(),
          keepaliveReasons: c,
          evictAfter: IDo(
            {
              retain: l.retain,
              keepaliveReasons: c,
            },
            {
              park: true,
            },
          ),
          abortController: void 0,
          selectedAgent: void 0,
        };
      return ((o = sw(u) && !Ir()), (s = (u.pendingMessages?.length ?? 0) > 0), u);
    }),
    r && !o)
  )
    (jy(n), xe("task_local_agent"), IJn(n, t));
  else if (r && i && !a) xe("task_local_agent");
  if (r && s) wJn.emit(n);
  if (r && i) {
    let l = CDo.get(n);
    if (l) clearTimeout(l);
    let c = setTimeout(EEf, bHl, n, t);
    (c.unref?.(), CDo.set(n, c));
  }
}
function X6n(e, t, n) {
  let r = false;
  if (
    (n.update(e, (o) => {
      if (o.status !== "running") return o;
      return (
        (r = true),
        {
          ...o,
          status: "failed",
          error: t,
          endTime: Date.now(),
          evictAfter: IDo(o, {
            park: false,
          }),
          abortController: void 0,
          selectedAgent: void 0,
        }
      );
    }),
    jy(e),
    r)
  )
    (Le("task_local_agent", "task_local_agent_failed"), IJn(e, n));
}
function ubt({
  agentId: e,
  ownerAgentId: t,
  parentAgentId: n,
  spawnDepth: r,
  description: o,
  prompt: s,
  selectedAgent: i,
  taskRegistry: a,
  parentAbortController: l,
  toolUseId: c,
  cwd: u,
}) {
  ZAe(e, uk(Bu(e)));
  let d = l ? c$(l) : Sl(),
    p = {
      ...LT(e, "local_agent", o, c),
      type: "local_agent",
      status: "running",
      agentId: e,
      ownerAgentId: t,
      parentAgentId: n,
      spawnDepth: r,
      prompt: s,
      cwd: u,
      selectedAgent: i,
      agentType: i.agentType ?? "general-purpose",
      abortController: d,
      retrieved: false,
      lastReportedToolCount: 0,
      lastReportedTokenCount: 0,
      isBackgrounded: true,
      isIdle: false,
      pendingMessages: [],
      retain: false,
      diskLoaded: false,
      keepaliveReasons: new Set(),
    };
  return (a.register(p), p);
}
function $vl(e, t) {
  let n = LT(e.agentId, "local_agent", e.description ?? "(resumed agent)", e.toolUseId),
    r = {
      ...n,
      startTime: e.startTime ?? n.startTime,
      type: "local_agent",
      status: "completed",
      agentId: e.agentId,
      ownerAgentId: e.parentAgentId ?? ls(),
      parentAgentId: e.parentAgentId,
      spawnDepth: e.spawnDepth,
      prompt: "",
      agentType: e.agentType ?? "general-purpose",
      retrieved: false,
      lastReportedToolCount: 0,
      lastReportedTokenCount: 0,
      isBackgrounded: true,
      isIdle: false,
      pendingMessages: [],
      retain: false,
      diskLoaded: false,
      keepaliveReasons: new Set(),
    };
  t.register(r);
}
function zhl({
  agentId: e,
  ownerAgentId: t,
  parentAgentId: n,
  spawnDepth: r,
  description: o,
  prompt: s,
  selectedAgent: i,
  taskRegistry: a,
  autoBackgroundMs: l,
  toolUseId: c,
  cwd: u,
}) {
  ZAe(e, uk(Bu(e)));
  let d = Sl(),
    p = {
      ...LT(e, "local_agent", o, c),
      type: "local_agent",
      status: "running",
      agentId: e,
      ownerAgentId: t,
      parentAgentId: n,
      spawnDepth: r,
      prompt: s,
      cwd: u,
      selectedAgent: i,
      agentType: i.agentType ?? "general-purpose",
      abortController: d,
      retrieved: false,
      lastReportedToolCount: 0,
      lastReportedTokenCount: 0,
      isBackgrounded: false,
      isIdle: false,
      pendingMessages: [],
      retain: false,
      diskLoaded: false,
      keepaliveReasons: new Set(),
    },
    f,
    m = new Promise((h) => {
      f = h;
    });
  (Jbt.set(e, f), a.register(p));
  let g;
  if (l !== void 0 && l > 0) {
    let h = setTimeout(
      (y, b) => {
        y.update(b, (S) => {
          if (S.isBackgrounded) return S;
          return {
            ...S,
            isBackgrounded: true,
          };
        });
        let _ = Jbt.get(b);
        if (_) (_(), Jbt.delete(b));
      },
      l,
      a,
      e,
    );
    g = () => clearTimeout(h);
  }
  return {
    taskId: e,
    backgroundSignal: m,
    cancelAutoBackground: g,
    abortController: d,
  };
}
function izt(e, t) {
  let n = t.get(e);
  if (!El(n) || n.isBackgrounded || (AC(n.status) && !sw(n))) return false;
  t.update(e, (o) => ({
    ...o,
    isBackgrounded: true,
  }));
  let r = Jbt.get(e);
  if (r) (r(), Jbt.delete(e));
  return true;
}
function Khl(e, t) {
  Jbt.delete(e);
  let n = t.get(e);
  if (!El(n) || n.isBackgrounded || Cyt(e, t)) return;
  t.remove(e);
}
var Pvl = 5,
  wDo = "flag:idle-window",
  CDo,
  G7n,
  Jbt;
