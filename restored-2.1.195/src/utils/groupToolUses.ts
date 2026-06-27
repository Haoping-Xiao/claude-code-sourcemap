// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CWl
// matched 2.1.88 source: src/utils/groupToolUses.ts
// class=modified  jaccard=0.2987  score=0.3874  fileCov=0.5661
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function IWl(e) {
  return e.type === "system" && e.subtype === "stop_hook_summary" && e.hookLabel !== void 0;
}
function xWl(e) {
  let t = [],
    n = 0;
  while (n < e.length) {
    let r = e[n];
    if (IWl(r)) {
      let o = r.hookLabel,
        s = [];
      while (n < e.length) {
        let i = e[n];
        if (!IWl(i) || i.hookLabel !== o) break;
        (s.push(i), n++);
      }
      if (s.length === 1) t.push(r);
      else
        t.push({
          ...r,
          hookCount: s.reduce((i, a) => i + a.hookCount, 0),
          hookInfos: s.flatMap((i) => i.hookInfos),
          hookErrors: s.flatMap((i) => i.hookErrors),
          hookAdditionalContext: s.flatMap((i) => i.hookAdditionalContext ?? []),
          preventedContinuation: s.some((i) => i.preventedContinuation),
          hasOutput: s.some((i) => i.hasOutput),
          totalDurationMs: Math.max(...s.map((i) => i.totalDurationMs ?? 0)),
        });
    } else (t.push(r), n++);
  }
  return t;
}
function kWl(e) {
  return (
    e.type === "attachment" &&
    e.attachment.type === "task_status" &&
    e.attachment.taskType === "in_process_teammate" &&
    e.attachment.status === "completed"
  );
}
function RWl(e) {
  let t = [],
    n = 0;
  while (n < e.length) {
    let r = e[n];
    if (kWl(r)) {
      let o = 0;
      while (n < e.length && kWl(e[n])) (o++, n++);
      if (o === 1) t.push(r);
      else
        t.push({
          type: "attachment",
          uuid: r.uuid,
          timestamp: r.timestamp,
          attachment: {
            type: "teammate_shutdown_batch",
            count: o,
          },
        });
    } else (t.push(r), n++);
  }
  return t;
}
function $jf(e) {
  let t = LWl.get(e);
  if (!t)
    ((t = new Set(e.filter((n) => n.renderGroupedToolUse).map((n) => n.name))), LWl.set(e, t));
  return t;
}
function DWl(e) {
  if (e.type === "assistant" && e.message.content[0]?.type === "tool_use") {
    let t = e.message.content[0];
    return {
      messageId: e.message.id,
      toolUseId: t.id,
      toolName: t.name,
    };
  }
  return null;
}
function PWl(e, t, n = false) {
  if (n)
    return {
      messages: e,
    };
  let r = $jf(t),
    o = new Map();
  for (let u of e) {
    if (u.type !== "assistant") continue;
    let d = u.message.content[0];
    if (d?.type !== "tool_use" || !r.has(d.name)) continue;
    let p = `${u.message.id}:${d.name}`,
      f = o.get(p) ?? [];
    (f.push(u), o.set(p, f));
  }
  let s = new Map(),
    i = new Set();
  for (let [u, d] of o)
    if (d.length >= 2) {
      s.set(u, d);
      for (let p of d) {
        let f = DWl(p);
        if (f) i.add(f.toolUseId);
      }
    }
  if (s.size === 0)
    return {
      messages: e,
    };
  let a = new Map();
  for (let u of e)
    if (u.type === "user") {
      for (let d of u.message.content)
        if (d.type === "tool_result" && i.has(d.tool_use_id)) a.set(d.tool_use_id, u);
    }
  let l = [],
    c = new Set();
  for (let u of e) {
    let d = DWl(u);
    if (d) {
      let p = `${d.messageId}:${d.toolName}`,
        f = s.get(p);
      if (f) {
        if (!c.has(p)) {
          c.add(p);
          let m = f[0],
            g = [];
          for (let y of f) {
            let b = y.message.content[0].id,
              _ = a.get(b);
            if (_) g.push(_);
          }
          let h = {
            type: "grouped_tool_use",
            toolName: d.toolName,
            messages: f,
            results: g,
            displayMessage: m,
            uuid: `grouped-${m.uuid}`,
            timestamp: m.timestamp,
            messageId: d.messageId,
          };
          l.push(h);
        }
        continue;
      }
    }
    if (u.type === "user") {
      let p = u.message.content.filter((f) => f.type === "tool_result");
      if (p.length > 0) {
        if (p.every((m) => i.has(m.tool_use_id))) continue;
      }
    }
    l.push(u);
  }
  return {
    messages: l,
  };
}
var LWl;
