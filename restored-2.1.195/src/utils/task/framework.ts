// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ypt
// matched 2.1.88 source: src/utils/task/framework.ts
// class=modified  jaccard=0.2474  score=0.4451  fileCov=0.3578
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ypt = E(() => {
  ft();
  jDe();
  S$();
  eWt();
  fp();
  er();
  Il();
  je();
  At();
  ik();
  q0();
  es();
  vn();
  co();
  Yf();
  y6e();
  y_();
  _a();
  _m();
  Jt();
  dn();
  kt();
  Yqe();
  ((gHl = require("crypto")),
    (hHl = require("fs")),
    (PN = require("fs/promises")),
    (HP = require("path")),
    (T_f = new Set(["Edit", "Write", "NotebookEdit"])),
    (v_f = new Set(["Read", "Glob", "Grep", "ToolSearch", "LSP", "TaskGet", "TaskList"])));
});
function DLo(e, t) {
  if (e === void 0 || e.size === 0) return e;
  let n;
  for (let [r, o] of e) if (o === t) (n ??= new Map(e)).delete(r);
  return n ?? e;
}
function $L(e, t) {
  return {
    register(n) {
      M_f(n, t);
    },
    update(n, r) {
      D_f(n, t, r);
    },
    updateTranscript(n, r) {
      t((o) => {
        let s = o.transcripts?.[n] ?? {
            messages: [],
            inProgressToolUseIDs: new Set(),
          },
          i = r(s);
        if (i === s) return o;
        return {
          ...o,
          transcripts: {
            ...o.transcripts,
            [n]: i,
          },
        };
      });
    },
    getTranscript(n) {
      return e().transcripts[n];
    },
    remove(n) {
      (fjn(n),
        t((r) => {
          if (!(n in r.tasks)) return r;
          let { [n]: o, ...s } = r.tasks,
            i = r.transcripts ?? {},
            { [n]: a, ...l } = i;
          return {
            ...r,
            tasks: s,
            transcripts: n in i ? l : i,
            agentNameRegistry: DLo(r.agentNameRegistry, n),
          };
        }));
    },
    evictTerminal(n) {
      $_f(n, t);
    },
    applyOffsetsAndEvict(n, r) {
      O_f(t, n, r);
    },
    get(n) {
      return e().tasks[n];
    },
    all() {
      return e().tasks;
    },
    abortSpeculation() {
      dfe(t);
    },
  };
}
function D_f(e, t, n) {
  let r = null;
  if (
    (t((o) => {
      let s = o.tasks?.[e];
      if (!s) return o;
      let i = n(s);
      if (i === s) return o;
      return (
        (r = P_f(s, i)),
        {
          ...o,
          tasks: {
            ...o.tasks,
            [e]: i,
          },
        }
      );
    }),
    r !== null)
  )
    zv({
      type: "system",
      subtype: "task_updated",
      task_id: e,
      patch: r,
    });
}
function P_f(e, t) {
  let n = {};
  if (t.status !== e.status) n.status = t.status;
  if (t.description !== e.description) n.description = t.description;
  if (t.endTime !== e.endTime) n.end_time = t.endTime;
  if (t.totalPausedMs !== e.totalPausedMs) n.total_paused_ms = t.totalPausedMs;
  let r = "error" in e ? e.error : void 0,
    o = "error" in t ? t.error : void 0;
  if (o !== r && o !== void 0) n.error = o;
  let s = "isBackgrounded" in e ? e.isBackgrounded : void 0,
    i = "isBackgrounded" in t ? t.isBackgrounded : void 0;
  if (i !== s && i !== void 0) n.is_backgrounded = i;
  return Object.keys(n).length > 0 ? n : null;
}
function M_f(e, t) {
  let n = !1;
  if (
    (t((r) => {
      let o = r.tasks[e.id];
      n = o !== void 0;
      let s =
        o && "retain" in o
          ? {
              ...e,
              retain: o.retain,
              startTime: o.startTime,
              diskLoaded: o.diskLoaded,
              pendingMessages: o.pendingMessages,
              keepaliveReasons: o.keepaliveReasons,
              ownerAgentId: o.ownerAgentId,
              parentAgentId: o.parentAgentId,
              spawnDepth: o.spawnDepth,
            }
          : e;
      return {
        ...r,
        tasks: {
          ...r.tasks,
          [e.id]: s,
        },
      };
    }),
    n)
  )
    return;
  zv({
    type: "system",
    subtype: "task_started",
    task_id: e.id,
    tool_use_id: e.toolUseId,
    description: e.description,
    subagent_type: "agentType" in e ? e.agentType : void 0,
    task_type: e.type,
    workflow_name: "workflowName" in e ? e.workflowName : void 0,
    prompt: "prompt" in e ? e.prompt : void 0,
    skip_transcript: e.skipTranscript,
  });
}
function $_f(e, t) {
  let n = !1;
  if (
    (t((r) => {
      let o = r.tasks?.[e];
      if (!o) return r;
      if (!AC(o.status)) return r;
      if (!o.notified) return r;
      if ("retain" in o && (o.evictAfter ?? 1 / 0) > Date.now()) return r;
      if ("retain" in o && (o.keepaliveReasons?.size ?? 0) > 0) return r;
      if (o.type === "local_workflow" && (o.evictAfter ?? 0) > Date.now()) return r;
      n = !0;
      let { [e]: s, ...i } = r.tasks,
        a = r.transcripts ?? {},
        { [e]: l, ...c } = a;
      return {
        ...r,
        tasks: i,
        transcripts: e in a ? c : a,
        agentNameRegistry: DLo(r.agentNameRegistry, e),
      };
    }),
    n)
  )
    fjn(e);
}
function Ubt(e) {
  let t = e.tasks ?? {};
  return Object.values(t).filter((n) => n.status === "running");
}
async function SHl(e) {
  let t = [],
    n = {},
    r = [];
  for (let o of Object.values(e)) {
    if (o.notified)
      switch (o.status) {
        case "completed":
        case "failed":
        case "killed":
          r.push(o.id);
          continue;
        case "pending":
          continue;
        case "running":
          break;
      }
    if (o.status === "running") {
      let s = await EHl(o.id, o.outputOffset);
      if (s.content) n[o.id] = s.newOffset;
    }
  }
  return {
    attachments: t,
    updatedTaskOffsets: n,
    evictedTaskIds: r,
  };
}
function O_f(e, t, n) {
  let r = Object.keys(t);
  if (r.length === 0 && n.length === 0) return;
  let o = [];
  e((s) => {
    let i = !1,
      a = {
        ...s.tasks,
      };
    for (let u of r) {
      let d = a[u];
      if (d?.status === "running")
        ((a[u] = {
          ...d,
          outputOffset: t[u],
        }),
          (i = !0));
    }
    for (let u of n) {
      let d = a[u];
      if (!d || !AC(d.status) || !d.notified) continue;
      if ("retain" in d && (d.evictAfter ?? 1 / 0) > Date.now()) continue;
      if ("retain" in d && (d.keepaliveReasons?.size ?? 0) > 0) continue;
      if (d.type === "local_workflow" && (d.evictAfter ?? 0) > Date.now()) continue;
      (delete a[u], o.push(u), (i = !0));
    }
    if (!i) return s;
    let l = s.agentNameRegistry,
      c;
    for (let u of o)
      if (((l = DLo(l, u)), s.transcripts && u in s.transcripts))
        ((c ??= {
          ...s.transcripts,
        }),
          delete c[u]);
    return {
      ...s,
      tasks: a,
      agentNameRegistry: l,
      ...(c && {
        transcripts: c,
      }),
    };
  });
  for (let s of o) fjn(s);
}
var Oht = 3000,
  nfe = 30000,
  bHl = 30000;
