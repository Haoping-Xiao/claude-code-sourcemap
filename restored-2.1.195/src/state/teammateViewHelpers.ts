// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s8l
// matched 2.1.88 source: src/state/teammateViewHelpers.ts
// class=modified  jaccard=0.3352  score=0.6544  fileCov=0.4074
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module s8l]
((o5f = {
  type: "local-jsx",
  name: "status",
  description:
    "Show Claude Code status including version, model, account, API connectivity, and tool statuses",
  immediate: true,
  load: () => Promise.resolve().then(() => (r8l(), t8l)),
}),
  (o8l = o5f));
function ejo(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "local_agent";
}
function tjo(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    (e.type === "local_agent" || e.type === "in_process_teammate")
  );
}
function njo(e) {
  if (e.type === "in_process_teammate")
    return {
      ...e,
      evictAfter: e.isIdle ? Date.now() + i8l : void 0,
    };
  return {
    ...e,
    retain: false,
    diskLoaded: false,
    evictAfter: AC(e.status) ? Date.now() + i8l : void 0,
  };
}
function Hz(e, t) {
  (G("tengu_transcript_view_enter", {}),
    t((n) => {
      let r = n.tasks[e],
        o = n.viewingAgentTaskId,
        s = o !== void 0 ? n.tasks[o] : void 0,
        i = o !== void 0 && o !== e && tjo(s),
        a = tjo(r) && ((ejo(r) && !r.retain) || r.evictAfter !== void 0),
        l = n.viewingAgentTaskId !== e || n.viewSelectionMode !== "viewing-agent";
      if (!a && !l && !i) return n;
      let c = n.tasks;
      if (i || a) {
        if (
          ((c = {
            ...n.tasks,
          }),
          i)
        )
          c[o] = njo(s);
        if (a)
          c[e] = ejo(r)
            ? {
                ...r,
                retain: true,
                evictAfter: void 0,
              }
            : {
                ...r,
                evictAfter: void 0,
              };
      }
      return {
        ...n,
        viewingAgentTaskId: e,
        viewSelectionMode: "viewing-agent",
        tasks: c,
      };
    }));
}
function Wq(e) {
  (G("tengu_transcript_view_exit", {}),
    e((t) => {
      let n = t.viewingAgentTaskId,
        r = {
          ...t,
          viewingAgentTaskId: void 0,
          viewSelectionMode: "none",
        };
      if (n === void 0) return t.viewSelectionMode === "none" ? t : r;
      let o = t.tasks[n];
      if (!tjo(o)) return r;
      return {
        ...r,
        tasks: {
          ...t.tasks,
          [n]: njo(o),
        },
      };
    }));
}
function a8l(e, t) {
  t((n) => {
    let r = n.tasks[e];
    if (!ejo(r)) return n;
    if (r.status === "running") return n;
    if (r.evictAfter === 0) return n;
    let o = n.viewingAgentTaskId === e;
    return {
      ...n,
      tasks: {
        ...n.tasks,
        [e]: {
          ...njo(r),
          evictAfter: 0,
        },
      },
      ...(o && {
        viewingAgentTaskId: void 0,
        viewSelectionMode: "none",
      }),
    };
  });
}
var i8l = 30000;
