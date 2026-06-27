// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CLo
// matched 2.1.88 source: src/utils/queryHelpers.ts
// class=partial  jaccard=0.2004  score=0.315  fileCov=0.3553
// note: low-confidence suggestion: src/utils/queryHelpers.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var CLo = E(() => {
  QXn();
  ii();
});
function ZXn(e, t = null) {
  if (!e) return !1;
  if (e.type === "assistant") {
    let n = EU(e.message.content);
    return n?.type === "text" || n?.type === "thinking" || n?.type === "redacted_thinking";
  }
  if (e.type === "user") {
    let n = e.message.content;
    if (Array.isArray(n) && n.length > 0 && n.every(r => "type" in r && r.type === "tool_result")) return !0;
  }
  return t === "end_turn";
}
function* __t(e, t) {
  switch (e.type) {
    case "assistant":
      {
        let n = e.supersedesUuids;
        for (let r of mS([e])) {
          if (!Koe(r)) continue;
          let o = n;
          n = void 0;
          let s = $bt(r.message.content, t);
          yield {
            type: "assistant",
            message: r.message,
            parent_tool_use_id: null,
            session_id: Rt(),
            uuid: r.uuid,
            error: r.error,
            ...(r.requestId !== void 0 && {
              request_id: r.requestId
            }),
            ...(o !== void 0 && o.length > 0 && {
              supersedes: o
            }),
            ...(s.length > 0 && {
              tool_use_meta: s
            })
          };
        }
        return;
      }
    case "progress":
      if (e.data.type === "agent_progress" || e.data.type === "skill_progress") {
        let n = e.data.agentType,
          r = e.data.description;
        for (let o of mS([e.data.message])) switch (o.type) {
          case "assistant":
            if (!Koe(o)) break;
            {
              let s = $bt(o.message.content, t);
              yield {
                type: "assistant",
                message: o.message,
                parent_tool_use_id: e.parentToolUseID,
                session_id: Rt(),
                uuid: o.uuid,
                error: o.error,
                ...(o.requestId !== void 0 && {
                  request_id: o.requestId
                }),
                ...(n !== void 0 && {
                  subagent_type: n
                }),
                ...(r !== void 0 && {
                  task_description: r
                }),
                ...(s.length > 0 && {
                  tool_use_meta: s
                })
              };
            }
            break;
          case "user":
            yield {
              type: "user",
              message: o.message,
              parent_tool_use_id: e.parentToolUseID,
              session_id: Rt(),
              uuid: o.uuid,
              timestamp: o.timestamp,
              isSynthetic: o.isMeta || o.isVisibleInTranscriptOnly,
              tool_use_result: o.toolUseResult,
              ...(o.origin && {
                origin: o.origin
              }),
              ...(n !== void 0 && {
                subagent_type: n
              }),
              ...(r !== void 0 && {
                task_description: r
              })
            };
            break;
        }
      } else if (e.data.type === "repl_tool_call") yield {
        type: "tool_progress",
        tool_use_id: e.toolUseID,
        tool_name: "REPL",
        parent_tool_use_id: e.parentToolUseID,
        elapsed_time_seconds: 0,
        repl_call: {
          inner_tool_name: e.data.toolName,
          inner_tool_input: e.data.toolInput,
          inner_tool_use_id: e.data.toolUseId,
          phase: e.data.phase
        },
        session_id: Rt(),
        uuid: e.uuid
      };else if (e.data.type === "bash_progress" || e.data.type === "powershell_progress") {
        if (!ut(process.env.CLAUDE_CODE_REMOTE) && !process.env.CLAUDE_CODE_CONTAINER_ID) break;
        let n = e.parentToolUseID,
          r = Date.now(),
          o = rKt.get(n) || 0;
        if (r - o >= E_f) {
          if (rKt.size >= S_f) {
            let i = rKt.keys().next().value;
            if (i !== void 0) rKt.delete(i);
          }
          rKt.set(n, r), yield {
            type: "tool_progress",
            tool_use_id: e.toolUseID,
            tool_name: e.data.type === "bash_progress" ? "Bash" : "PowerShell",
            parent_tool_use_id: e.parentToolUseID,
            elapsed_time_seconds: e.data.elapsedTimeSeconds,
            task_id: e.data.taskId,
            session_id: Rt(),
            uuid: e.uuid
          };
        }
      }
      break;
    case "user":
      for (let n of mS([e])) yield {
        type: "user",
        message: n.message,
        parent_tool_use_id: null,
        session_id: Rt(),
        uuid: n.uuid,
        timestamp: n.timestamp,
        isSynthetic: n.isMeta || n.isVisibleInTranscriptOnly,
        tool_use_result: n.mcpMeta ? {
          content: n.toolUseResult,
          ...n.mcpMeta
        } : n.toolUseResult,
        ...(n.origin && {
          origin: n.origin
        })
      };
      return;
    default:
  }
}
async function* fHl(e, t, n, r) {
  let o = !Z3(),
    s = Fr(r).mode;
  if (s !== e.permissionMode) T(`Deferred tool resume: permissionMode mismatch (deferred under '${e.permissionMode}', resuming under '${s}'). --resume does not restore permissionMode \u2014 pass --permission-mode ${e.permissionMode} to match.`, {
    level: "warn"
  });
  let i = n.findLast(l => l.type === "assistant" && Array.isArray(l.message.content) && l.message.content.some(c => c.type === "tool_use" && c.id === e.toolUseID));
  if (!i || i.type !== "assistant") {
    T(`Deferred tool resume: tool_use ${e.toolUseID} not found in transcript`, {
      level: "warn"
    });
    return;
  }
  let a = i.message.content.find(l => l.type === "tool_use" && l.id === e.toolUseID);
  if (!a) return;
  T(`Deferred tool resume: re-emitting ${e.toolName} (${e.toolUseID}) through PreToolUse`);
  for await (let l of wLo([a], [i], t, r)) {
    if (tz(l)) continue;
    if (l.message) {
      if (n.push(l.message), o) await nz(n);
      yield {
        ...l.message,
        session_id: Rt(),
        parent_tool_use_id: null
      };
    }
  }
}
async function* mHl(e, t, n, r) {
  let o = !Z3(),
    {
      permissionResult: s,
      assistantMessage: i
    } = e,
    {
      toolUseID: a
    } = s;
  if (!a) {
    T("handleOrphanedPermission: dropping orphaned permission \u2014 permissionResult is missing toolUseID", {
      level: "warn"
    });
    return;
  }
  let l = i.message.content,
    c;
  if (Array.isArray(l)) {
    for (let y of l) if (y.type === "tool_use" && y.id === a) {
      c = y;
      break;
    }
  }
  if (!c) {
    T(`handleOrphanedPermission: dropping orphaned permission for toolUseID=${a} \u2014 assistant message ${i.message.id} has no matching tool_use block`, {
      level: "warn"
    });
    return;
  }
  let u = c.name;
  if (!_l(t, u, r.options.toolAliases)) {
    T(`handleOrphanedPermission: dropping orphaned permission for toolUseID=${a} \u2014 tool "${u}" not found in active tools (${t.length} available)`, {
      level: "warn"
    });
    return;
  }
  let p;
  if (s.behavior === "allow") {
    let y = s.updatedInput;
    if (y && Object.keys(y).length > 0) p = y;else T(`Orphaned permission for ${u}: updatedInput is missing or empty, falling back to original tool input`, {
      level: "warn"
    });
    let b = s.updatedPermissions;
    if (Array.isArray(b)) try {
      r.setToolPermissionContext(_ => T4(_, b)), Y8(b);
    } catch (_) {
      T(`Orphaned permission for ${u}: malformed updatedPermissions ignored: ${_}`, {
        level: "warn"
      });
    }
  }
  let f = async () => ({
    ...s,
    updatedInput: p,
    decisionReason: {
      type: "mode",
      mode: "default"
    }
  });
  if (!n.some(y => y.type === "assistant" && Array.isArray(y.message.content) && y.message.content.some(b => b.type === "tool_use" && "id" in b && b.id === a))) {
    if (n.push(i), o) await nz(n);
  }
  let g = $bt(i.message.content, t);
  yield {
    ...i,
    session_id: Rt(),
    parent_tool_use_id: null,
    ...(g.length > 0 && {
      tool_use_meta: g
    })
  };
  for await (let y of wLo([c], [i], f, r)) {
    if (tz(y)) continue;
    if (y.message) {
      if (n.push(y.message), o) await nz(n);
      yield {
        ...y.message,
        session_id: Rt(),
        parent_tool_use_id: null
      };
    }
  }
}
function Obt(e, t, n = b_f) {
  let r = QU(n),
    o = new Map(),
    s = new Map(),
    i = new Map();
  for (let a of e) if (a.type === "assistant" && Array.isArray(a.message.content)) for (let l of a.message.content) {
    if (l.type !== "tool_use") continue;
    try {
      if (l.name === Ds) {
        let c = l.input;
        if (typeof c?.file_path === "string" && c.offset === void 0 && c.limit === void 0) o.set(l.id, ds(c.file_path, t));
      } else if (l.name === Wc) {
        let c = l.input;
        if (typeof c?.file_path === "string" && typeof c.content === "string") s.set(l.id, {
          filePath: ds(c.file_path, t),
          content: c.content
        });
      } else if (l.name === ka) {
        let c = l.input;
        if (typeof c?.file_path === "string") i.set(l.id, ds(c.file_path, t));
      }
    } catch (c) {
      T(`extractReadFilesFromMessages: skipping malformed ${l.name} tool_use: ${c}`);
    }
  }
  for (let a of e) if (a.type === "user" && Array.isArray(a.message.content)) {
    for (let l of a.message.content) if (l.type === "tool_result" && l.tool_use_id) {
      let c = o.get(l.tool_use_id);
      if (c && l.is_error !== !0 && typeof l.content === "string" && !A0n(l.content)) {
        let p = l.content.startsWith("<system-reminder>" + WNt),
          m = l.content.replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, "").split(`
`).map(sAs).join(`
`).trim();
        if (a.timestamp) {
          let g = new Date(a.timestamp).getTime();
          r.set(c, {
            content: m,
            timestamp: g,
            offset: 1,
            limit: void 0,
            ...(p && {
              isPartialView: !0
            })
          });
        }
      }
      let u = s.get(l.tool_use_id);
      if (u && l.is_error !== !0 && a.timestamp) {
        let p = new Date(a.timestamp).getTime();
        r.set(u.filePath, {
          content: u.content,
          timestamp: p,
          offset: void 0,
          limit: void 0
        });
      }
      let d = i.get(l.tool_use_id);
      if (d && l.is_error !== !0) try {
        let {
          content: p
        } = Bee(d);
        r.set(d, {
          content: p,
          timestamp: Fee(d),
          offset: void 0,
          limit: void 0
        });
      } catch (p) {
        T(`extractReadFilesFromMessages: skipping Edit disk read for ${d}: ${be(p)}`);
      }
    }
  }
  return r;
}
var b_f = 10,
  S_f = 100,
  E_f = 30000,
  rKt;