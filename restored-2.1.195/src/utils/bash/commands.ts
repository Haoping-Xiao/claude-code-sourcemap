// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sN
// matched 2.1.88 source: src/utils/bash/commands.ts
// class=modified  jaccard=0.0567  score=0.1097  fileCov=0.1051
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sN] deps: tlc, rre, Ybe, xRe
((Eqo = new Set(["program", "list", "pipeline"])),
  (rlc = new Set([
    "&&",
    "||",
    "|",
    ";",
    "&",
    "|&",
    `
`,
  ])));
Sqo = new Set([
  "command_substitution",
  "process_substitution",
  "expansion",
  "simple_expansion",
  "arithmetic_expansion",
]);
Onm = new Set(["ansi_c_string", "translated_string"]);
olc = new Set([
  "<",
  ">",
  ">>",
  "<<",
  "<<-",
  "<<<",
  "<&",
  ">&",
  "&>",
  "&>>",
  ">|",
  ">&-",
  "<&-",
  "file_descriptor",
  "heredoc_start",
  "heredoc_body",
  "heredoc_content",
  "heredoc_end",
]);
((Nnm = new Set(["word", "string", "raw_string", "number"])),
  (Bnm = /(?:^|[^\\])(?:\\\\)*[;|&<>]/),
  (Unm = /(?:^|[^\\])(?:\\\\)*\\$/));
((ilc = Zac({
  toolName: "Bash",
  policySpec: jnm,
  eventName: "tengu_bash_prefix",
  querySource: "bash_extract_prefix",
  preCheck: (e) =>
    Fnm(e)
      ? {
          commandPrefix: e,
        }
      : null,
})),
  (sSt = elc(ilc, By)));
function Wnm(e) {
  let n = jo().sandbox?.excludedCommands ?? [];
  if (n.length === 0) return false;
  let r;
  try {
    r = By(e);
  } catch {
    r = [e];
  }
  for (let o of r) {
    let i = [o.trim()],
      a = new Set(i),
      l = 0;
    while (l < i.length) {
      let c = i.length;
      for (let u = l; u < c; u++) {
        let d = i[u],
          p = rQn(d, Gnm);
        if (!a.has(p)) (i.push(p), a.add(p));
        let f = A5(d);
        if (!a.has(f)) (i.push(f), a.add(f));
      }
      l = c;
    }
    for (let c of n) {
      let u = oPo(c);
      for (let d of i)
        switch (u.type) {
          case "prefix":
            if (d === u.prefix || d.startsWith(u.prefix + " ")) return true;
            break;
          case "exact":
            if (d === u.command) return true;
            break;
          case "wildcard":
            if (Ize(u.pattern, d)) return true;
            break;
        }
    }
  }
  return false;
}
function N$(e) {
  if (bI() && fce()) return true;
  if (!xo.isSandboxingEnabled()) return false;
  if (e.dangerouslyDisableSandbox && xo.areUnsandboxedCommandsAllowed()) return false;
  if (!e.command) return false;
  if (Wnm(e.command)) return false;
  return true;
}
var Gnm;
