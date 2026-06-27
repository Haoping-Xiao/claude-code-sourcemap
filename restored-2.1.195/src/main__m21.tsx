// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iUc
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0025  score=0.1637  fileCov=0.0026
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iUc] deps: M8o
oUc = require("url");
function fLm(e) {
  let t = e,
    n = t.subtype;
  if (e.type === "result" || (e.type === "system" && n === "init"))
    return e.type === "result"
      ? {
          ...e,
          result: void 0,
          permission_denials: void 0,
          structured_output: void 0,
          deferred_tool_use: void 0,
          errors: void 0,
        }
      : e;
  if (e.type === "system" && n === "task_started")
    return {
      type: "system",
      subtype: n,
      task_id: t.task_id,
      task_type: t.task_type,
    };
  if (e.type === "system" && n === "task_updated") {
    let r = t.patch;
    return {
      type: "system",
      subtype: n,
      task_id: t.task_id,
      patch: {
        status: r?.status,
      },
    };
  }
  if (e.type === "system" && n === "task_notification")
    return {
      type: "system",
      subtype: n,
      task_id: t.task_id,
    };
  if (e.type === "user")
    return {
      type: e.type,
      subtype: n,
    };
  if (e.type === "assistant") {
    let r = t.message?.content;
    if (Array.isArray(r)) {
      let o = r.find((s) => s && typeof s === "object" && s.type === "tool_use" && s.name === yh);
      if (o) {
        let s = o.input;
        return {
          type: "assistant",
          subtype: n,
          message: {
            content: [
              {
                type: "tool_use",
                name: yh,
                input: {
                  delaySeconds: s?.delaySeconds,
                },
              },
            ],
          },
        };
      }
    }
    return {
      type: e.type,
      subtype: n,
    };
  }
  return;
}
function main(e) {
  for (let t of e) {
    if (t === "--") return false;
    if (t === "--resume" || t === "-r" || t.startsWith("--resume=")) return true;
  }
  return false;
}
var aUc, lUc, kvt;
