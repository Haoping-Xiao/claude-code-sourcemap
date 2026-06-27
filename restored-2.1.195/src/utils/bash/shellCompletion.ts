// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jhc
// matched 2.1.88 source: src/utils/bash/shellCompletion.ts
// class=modified  jaccard=0.4602  score=0.9266  fileCov=0.4776
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jhc] deps: ink/components/ClockContext.tsx, utils/debug.ts, fb, utils/task/framework.ts, context/notifications.tsx
BTe = R(rt(), 1);
function LTt(e) {
  return "'" + e[0].replaceAll("'", `'"'"'`) + "'";
}
function getCompletionTypeFromPrefix(prefix) {
  if (prefix.startsWith("$")) return "variable";
  if (prefix.includes("/") || prefix.startsWith("~") || prefix.startsWith(".")) return "file";
  return "command";
}
function Zdm(e, t) {
  let n = e.slice(0, t),
    r = n.match(/\$[a-zA-Z_][a-zA-Z0-9_]*$/);
  if (r)
    return {
      prefix: r[0],
      completionType: "variable",
    };
  let o = n.split(/\s+/),
    s = o.at(-1) || "",
    i = o.length === 1 && !n.includes(" "),
    a = getCompletionTypeFromPrefix(s);
  return {
    prefix: s,
    completionType: a !== "command" ? a : i ? "command" : "file",
  };
}
function getBashCompletionCommand(prefix, completionType) {
  if (completionType === "variable") {
    let n = prefix.slice(1);
    return `compgen -v ${LTt([n])} 2>/dev/null`;
  } else if (completionType === "file")
    return `compgen -f ${LTt([prefix])} 2>/dev/null | head -${l6o} | while IFS= read -r f; do [ -d "$f" ] && echo "$f/" || echo "$f "; done`;
  else return `compgen -c ${LTt([prefix])} 2>/dev/null`;
}
function getZshCompletionCommand(prefix, completionType) {
  if (completionType === "variable") {
    let n = prefix.slice(1);
    return `print -rl -- \${(k)parameters[(I)${LTt([n])}*]} 2>/dev/null`;
  } else if (completionType === "file")
    return `for f in ${LTt([prefix])}*(N[1,${l6o}]); do [[ -d "$f" ]] && echo "$f/" || echo "$f "; done`;
  else return `print -rl -- \${(k)commands[(I)${LTt([prefix])}*]} 2>/dev/null`;
}
async function npm(e, t, n, r, o) {
  let s;
  if (e === "bash") s = getBashCompletionCommand(t, n);
  else if (e === "zsh") s = getZshCompletionCommand(t, n);
  else return [];
  return (
    await (
      await Ede(s, r, "bash", {
        timeout: Jdm,
        sessionEnvVars: o,
      })
    ).result
  ).stdout
    .split(
      `
`,
    )
    .filter((l) => l.trim())
    .slice(0, l6o)
    .map((l) => ({
      id: l,
      displayText: l,
      description: void 0,
      metadata: {
        completionType: n,
      },
    }));
}
async function getShellCompletions(input, cursorOffset, abortSignal, r) {
  let o = Egt();
  if (o !== "bash" && o !== "zsh") return [];
  try {
    let { prefix: s, completionType: i } = Zdm(input, cursorOffset);
    if (!s) return [];
    return (await npm(o, s, i, abortSignal, r)).map((l) => ({
      ...l,
      metadata: {
        ...l.metadata,
        inputSnapshot: input,
      },
    }));
  } catch (s) {
    return (T(`Shell completion failed: ${s}`), []);
  }
}
var l6o = 15,
  Jdm = 1000;
