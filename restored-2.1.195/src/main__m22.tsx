// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QGo
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0024  score=0.0619  fileCov=0.0024
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module QGo] deps: lH, kt, er, wr, VQ, zOe, YOe, kYe
Src = require("readline");
function Erc(e) {
  let t = "--cloud",
    n =
      "\nTo reattach to a cloud session, pass its id: `claude --cloud <session-id>` (find IDs at claude.ai/code).";
  if (e.print && !e.hasPool && !e.isCloudAttach)
    return `Error: ${t} cannot be combined with --print.
Cloud sessions are interactive only. Drop --print, or drop ${t} to run locally.`;
  if (e.nonInteractive && !e.hasPool && !e.isCloudAttach)
    return `Error: ${t} requires an interactive terminal.
Non-interactive invocations (piped stdout, --init-only, --sdk-url) run locally and would silently ignore ${t}. Drop ${t}, or run from a TTY.`;
  if (e.continue) return `Error: ${t} cannot be combined with --continue.${n}`;
  if (e.hasConnect || e.hasSSH || e.hasAssistant || e.hasTeleport) {
    let r = e.hasConnect
      ? "a cc:// connect URL"
      : e.hasSSH
        ? "`claude ssh`"
        : e.hasAssistant
          ? "`claude assistant`"
          : "--teleport";
    return `Error: ${t} cannot be combined with ${r} \u2014 both select a remote backend; pick one.`;
  }
  if (e.resume || e.fromPr) {
    let r = e.resume ? "--resume" : "--from-pr";
    return `Error: ${t} cannot be combined with ${r}.${n}`;
  }
  return null;
}
function ZGo(e) {
  return "--bg and --cloud are different backends. Use `claude --cloud '<task>'` directly to start a cloud session.";
}
function eWo(e) {
  return e.some(
    (t) =>
      t === "--cloud" || t.startsWith("--cloud=") || t === "--remote" || t.startsWith("--remote="),
  );
}
function LYe(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r === "--") {
      for (let o = n; o < e.length; o++) t.push(e[o]);
      break;
    }
    if (r.startsWith("--cloud=") || r.startsWith("--remote=")) continue;
    if (r === "--cloud" || r === "--remote") {
      if (e[n + 1] !== void 0 && !e[n + 1].startsWith("-")) n++;
      continue;
    }
    t.push(r);
  }
  return t;
}
var Arc = "allow_routines",
  Hrc = "Routines are disabled by your organization's policy.";
async function Aar(e, t) {
  if (t.launch.mode !== "exec" || !e) return null;
  try {
    let n = await nR(XQ(e), 8192);
    if (n == null) return null;
    let r = JSON.parse(n);
    if (typeof r?.code !== "number") return null;
    let o =
        Ja(typeof r.tail === "string" ? r.tail : "")
          .replace(
            /\r\n?/g,
            `
`,
          )
          .split(
            `
`,
          )
          .findLast((l) => l.trim())
          ?.trim() ?? "",
      s = Vm(xc(o), Xy);
    if (r.code === 0)
      return {
        state: "done",
        detail: s || "(no output)",
        code: 0,
      };
    let i = typeof r.signal === "string" ? r.signal : void 0;
    if (i === "SIGINT" || i === "SIGQUIT")
      return {
        state: "stopped",
        detail: "stopped",
        code: r.code,
      };
    let a = i ? `${i} (${r.code})` : `exit ${r.code}`;
    return {
      state: "crashed",
      detail: s ? `${a} \u2014 ${s}` : a,
      signal: i,
      code: r.code,
    };
  } catch {
    return null;
  }
}
