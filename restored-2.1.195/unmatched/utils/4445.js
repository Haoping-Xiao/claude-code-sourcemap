// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zvl
// matched 2.1.88 source: src/utils/bash/ast.ts
// class=new  jaccard=0.0375  score=0.2861  fileCov=0.0414
// note: nearest: src/utils/bash/ast.ts (0.0375); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zvl] deps: rre, Ybe
qvl = new Set(["&&", "||", "|", ";", "&", "|&", `
`]), REf = new Set([...qvl, "comment", "string_content", "simple_expansion", "variable_name", "special_variable_name"]), LEf = new Set([...qvl, "comment", "$(", "`", "<(", ">(", ")"]), jvl = new Set([...v2t, ...vOn, ...Object.keys(uoo), ...doo, ...TOn, ...I2t, "find", "jobs", "setpriv", "setarch", "linux32", "linux64", "arch", "xargs", "parallel", "su", "runuser", "pkexec", "chroot", "time", "command", "builtin", "noglob", "env", "nice", "nohup", "sudo", "doas", "stdbuf", "timeout", "bash", "sh", "zsh", "dash", "ksh", "fish", "ash", "mksh", "csh", "tcsh", "busybox", "python", "python2", "python3", "perl", "ruby", "node", "nodejs", "deno", "bun", "php", "lua", "awk", "gawk", "valgrind", "unbuffer", "rlwrap", "fakeroot", "fakechroot", "proot", "firejail", "caffeinate", "taskpolicy", "systemd-run", "expect", "socat", "screen", "tmux", "mawk", "nawk", "cmd", "powershell", "pwsh", "wsl"]);
PEf = new Set(['"', "string_content", "command_substitution"]), Gvl = new Set(["simple_expansion", "expansion", "command_substitution", "process_substitution"]), MEf = new Set(["word", "string", "concatenation", "number"]), $Ef = /^[\w./+-]+$/;
function RJn(e) {
  let t = e.find(n => n.name === y8t);
  return {
    codeReview: e.some(n => n.name === woe),
    verify: e.some(n => n.name === Y8e),
    simplify: t !== void 0 && t.loadedFrom !== "bundled",
    commit: e.some(n => n.name === Vwo),
    pr: e.some(n => n.name === zwo)
  };
}
function EKt(e) {
  return "";
}