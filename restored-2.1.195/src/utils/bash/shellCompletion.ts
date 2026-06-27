// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Jhc
// matched 2.1.88 source: src/utils/bash/shellCompletion.ts
// class=modified  jaccard=0.4602  score=0.9266  fileCov=0.4776
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Jhc] deps: a0e, kt, fb, Ypt, uo
BTe = R(rt(), 1);
function LTt(e) {
  return "'" + e[0].replaceAll("'", `'"'"'`) + "'";
}
function Qdm(e) {
  if (e.startsWith("$")) return "variable";
  if (e.includes("/") || e.startsWith("~") || e.startsWith(".")) return "file";
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
    a = Qdm(s);
  return {
    prefix: s,
    completionType: a !== "command" ? a : i ? "command" : "file",
  };
}
function epm(e, t) {
  if (t === "variable") {
    let n = e.slice(1);
    return `compgen -v ${LTt([n])} 2>/dev/null`;
  } else if (t === "file")
    return `compgen -f ${LTt([e])} 2>/dev/null | head -${l6o} | while IFS= read -r f; do [ -d "$f" ] && echo "$f/" || echo "$f "; done`;
  else return `compgen -c ${LTt([e])} 2>/dev/null`;
}
function tpm(e, t) {
  if (t === "variable") {
    let n = e.slice(1);
    return `print -rl -- \${(k)parameters[(I)${LTt([n])}*]} 2>/dev/null`;
  } else if (t === "file")
    return `for f in ${LTt([e])}*(N[1,${l6o}]); do [[ -d "$f" ]] && echo "$f/" || echo "$f "; done`;
  else return `print -rl -- \${(k)commands[(I)${LTt([e])}*]} 2>/dev/null`;
}
async function npm(e, t, n, r, o) {
  let s;
  if (e === "bash") s = epm(t, n);
  else if (e === "zsh") s = tpm(t, n);
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
async function Qhc(e, t, n, r) {
  let o = Egt();
  if (o !== "bash" && o !== "zsh") return [];
  try {
    let { prefix: s, completionType: i } = Zdm(e, t);
    if (!s) return [];
    return (await npm(o, s, i, n, r)).map((l) => ({
      ...l,
      metadata: {
        ...l.metadata,
        inputSnapshot: e,
      },
    }));
  } catch (s) {
    return (T(`Shell completion failed: ${s}`), []);
  }
}
var l6o = 15,
  Jdm = 1000;
