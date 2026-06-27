// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BFo
// matched 2.1.88 source: src/utils/transcriptSearch.ts
// class=modified  jaccard=0.781  score=1  fileCov=0.781
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BFo] deps: one, jh
Ojf = new Set([0, 1, 2, 9, 99, 777]);
jXt = [];
function aor(e) {
  let t = UWl.get(e);
  if (t !== void 0) return t;
  let n = computeSearchText(e).toLowerCase();
  return (UWl.set(e, n), n);
}
function computeSearchText(e) {
  let t = "";
  switch (e.type) {
    case "user": {
      let o = e.message.content;
      if (typeof o === "string") t = BWl.has(o) ? "" : o;
      else {
        let s = [];
        for (let i of o)
          if (i.type === "text") {
            if (!BWl.has(i.text)) s.push(i.text);
          } else if (i.type === "tool_result") s.push(toolResultSearchText(e.toolUseResult));
        t = s.join(`
`);
      }
      break;
    }
    case "assistant": {
      let o = e.message.content;
      if (Array.isArray(o))
        t = o.flatMap((s) => {
          if (s.type === "text") return [s.text];
          if (s.type === "tool_use") return [toolUseSearchText(s.input)];
          return [];
        }).join(`
`);
      break;
    }
    case "attachment": {
      if (e.attachment.type === "relevant_memories")
        t = e.attachment.memories.map((o) => o.content).join(`
`);
      else if (
        e.attachment.type === "queued_command" &&
        e.attachment.commandMode !== "task-notification" &&
        !e.attachment.isMeta
      ) {
        let o = e.attachment.prompt;
        t =
          typeof o === "string"
            ? o
            : o.flatMap((s) => (s.type === "text" ? [s.text] : [])).join(`
`);
      }
      break;
    }
    case "collapsed_read_search": {
      if (e.relevantMemories)
        t = e.relevantMemories.map((o) => o.content).join(`
`);
      break;
    }
    default:
      break;
  }
  let n = t,
    r = n.indexOf("<system-reminder>");
  while (r >= 0) {
    let o = n.indexOf(SYSTEM_REMINDER_CLOSE, r);
    if (o < 0) break;
    ((n = n.slice(0, r) + n.slice(o + SYSTEM_REMINDER_CLOSE.length)),
      (r = n.indexOf("<system-reminder>")));
  }
  return n;
}
function toolUseSearchText(e) {
  if (!e || typeof e !== "object") return "";
  let t = e,
    n = [];
  for (let r of [
    "command",
    "pattern",
    "file_path",
    "path",
    "prompt",
    "description",
    "query",
    "url",
    "skill",
  ]) {
    let o = t[r];
    if (typeof o === "string") n.push(o);
  }
  for (let r of ["args", "files"]) {
    let o = t[r];
    if (Array.isArray(o) && o.every((s) => typeof s === "string")) n.push(o.join(" "));
  }
  return n.join(`
`);
}
function toolResultSearchText(e) {
  if (!e || typeof e !== "object") return typeof e === "string" ? e : "";
  let t = e;
  if (typeof t.stdout === "string") {
    let r = typeof t.stderr === "string" ? t.stderr : "";
    return (
      t.stdout +
      (r
        ? `
` + r
        : "")
    );
  }
  if (t.file && typeof t.file === "object" && typeof t.file.content === "string")
    return t.file.content;
  let n = [];
  for (let r of ["content", "output", "result", "text", "message"]) {
    let o = t[r];
    if (typeof o === "string") n.push(o);
  }
  for (let r of ["filenames", "lines", "results"]) {
    let o = t[r];
    if (Array.isArray(o) && o.every((s) => typeof s === "string"))
      n.push(
        o.join(`
`),
      );
  }
  return n.join(`
`);
}
var SYSTEM_REMINDER_CLOSE = "</system-reminder>",
  BWl,
  UWl;
