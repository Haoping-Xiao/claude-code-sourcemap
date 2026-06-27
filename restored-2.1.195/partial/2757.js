// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rre
// matched 2.1.88 source: src/utils/bash/ast.ts
// class=partial  jaccard=0.1266  score=0.8974  fileCov=0.1284
// note: low-confidence suggestion: src/utils/bash/ast.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rre = E(() => {
  _1();
  Ybe();
  xRe();
  dra = require("os"), pra = new Set(["program", "list", "pipeline", "redirected_statement"]), Gro = new Set(["&&", "||", "|", ";", "&", "|&", `
`]);
  ora = /[ \t\n*?[]/, _rp = /^-[ioe]$/, brp = /^-[ioe]./, Srp = /^--(input|output|error)=/, Wro = new Set(["HOME", "PWD", "OLDPWD", "USER", "LOGNAME", "SHELL", "PATH", "HOSTNAME", "UID", "EUID", "PPID", "RANDOM", "SECONDS", "LINENO", "TMPDIR", "BASH_VERSION", "BASHPID", "SHLVL", "HISTFILE", "IFS"]), Erp = new Set(["?", "$", "!", "#", "0", "-"]), mra = new Set(["command_substitution", "process_substitution", "expansion", "simple_expansion", "brace_expression", "subshell", "compound_statement", "for_statement", "while_statement", "until_statement", "if_statement", "case_statement", "function_definition", "test_command", "ansi_c_string", "translated_string", "herestring_redirect", "heredoc_redirect"]), Arp = [...mra];
  sra = {
    ">": ">",
    ">>": ">>",
    "<": "<",
    ">&": ">&",
    "<&": "<&",
    ">|": ">|",
    "&>": "&>",
    "&>>": "&>>",
    "<<<": "<<<"
  }, qro = /\{[^\s]*(,|\.\.)[^\s]*\}/, Vro = /\{[^{]*\\}/, zro = /\{[^}]*\\\{/, too = /[\x00-\x08\x0B-\x1F\x7F]/, noo = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/, Hrp = /[\u00A0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]/, roo = /\\[ \t]|(?:^|[^ \t\\])(?:\\\\)*\\\n|[ \t](?:\\\\)+\\\n/, ooo = /(?:^|[^\\])(?:\\\\)*[`$]/, soo = /(?:^|[^\\])(?:\\\\)*['"]/, EOn = /~\[/, AOn = /(?:^|[\s;&|])=[a-zA-Z_]/, ioo = /<\d*-\d*>/, Trp = /\{[^}]*['"]/;
  ira = String.fromCharCode(36);
  Xro = new Set(["command", "builtin", "noglob", "nocorrect", "time"]), _ra = new Set(["declare", "typeset", "local", "export", "readonly"]), bra = new Set([":", "break", "continue", "return", "exit", "shift", "times", "set", "export", "readonly", "unset"]);
  Lrp = /^(?:[0-9]+|0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[-+*/%^&|~!<>=?:(),]+|<<|>>|\*\*|&&|\|\||[<>=!]=|\$\(\(|\)\))$/;
  Era = new Set(["_", "RANDOM", "SECONDS", "LINENO", "BASH_COMMAND", "FUNCNAME", "EPOCHSECONDS", "EPOCHREALTIME", "SRANDOM", "BASHPID", "REPLY", "reply", "PIPESTATUS", "pipestatus", "BASH_SOURCE", "DIRSTACK", "GROUPS", "BASH_ARGV", "BASH_ARGC", "BASH_SUBSHELL", "BASH_LINENO", "BASH_REMATCH", "MATCH", "match", "MBEGIN", "MEND", "mbegin", "mend", "OPTARG", "OPTIND", "argv", "FIGNORE", "fignore", "PSVAR", "psvar", "WATCH", "watch", "HISTCHARS", "histchars", "PS1", "PROMPT", "prompt", "PS2", "PROMPT2", "PS3", "PROMPT3", "PS4", "PROMPT4", "RPS1", "RPROMPT", "RPS2", "RPROMPT2"]);
  TOn = new Set(["zmodload", "emulate", "sysopen", "sysread", "syswrite", "sysseek", "zpty", "ztcp", "zsocket", "zf_rm", "zf_mv", "zf_ln", "zf_chmod", "zf_chown", "zf_mkdir", "zf_rmdir", "zf_chgrp", "repeat", "foreach", "zcompile", "setopt", "unsetopt", "disable", "shopt"]), coo = new Set(["-exec", "-execdir", "-ok", "-okdir", "-delete", "-fprint", "-fprint0", "-fprintf", "-fls", "-files0-from"]), w2t = new Set(["-name", "-iname", "-path", "-ipath", "-lname", "-ilname", "-regex", "-iregex", "-wholename", "-iwholename", "-samefile", "-newer", "-anewer", "-cnewer", "-mnewer", "-perm", "-user", "-group", "-uid", "-gid", "-size", "-type", "-xtype", "-fstype", "-inum", "-links", "-used", "-context", "-amin", "-cmin", "-mmin", "-atime", "-ctime", "-mtime", "-mindepth", "-maxdepth", "-printf", "-regextype", "-D", "-f", "-flags", "-Bnewer", "-Btime", "-Bmin", "-files0-from", "-xattrname"]), C2t = /^-newer[aBcm][aBcmt]$/, vOn = new Set(["eval", "source", ".", "exec", "nocorrect", "fc", "coproc", "trap", "enable", "mapfile", "readarray", "hash", "bind", "complete", "compgen", "alias", "let"]), v2t = new Set(["watch", "ionice", "chrt", "setsid", "taskset", "strace", "ltrace", "script", "flock", "unshare", "nsenter"]);
  uoo = {
    test: new Set(["-v", "-R", "-t"]),
    "[": new Set(["-v", "-R", "-t"]),
    "[[": new Set(["-v", "-R", "-t"]),
    printf: new Set(["-v"]),
    read: new Set(["-a"]),
    unset: new Set(["-v"]),
    wait: new Set(["-p"])
  }, gct = new Set(["-eq", "-ne", "-lt", "-le", "-gt", "-ge"]), BWe = /^-?(0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[0-9]+)$/, doo = new Set(["read", "unset"]), lra = new Set(["declare", "typeset", "local", "export", "readonly", "private", "float", "integer"]), I2t = new Set(["declare", "typeset", "local", "export", "readonly", "print", "getopts", "set", "zparseopts", "zformat", "zstyle", "autoload", "shift", "exit", "return", "break", "continue", "bye", "logout", "vared", "private", "getln", "zregexparse", "float", "integer"]), poo = new Set(["pipefail", "errexit", "nounset", "xtrace", "noglob", "noclobber", "verbose", "monitor", "notify", "vi", "emacs", "errtrace", "functrace", "hashall", "physical", "ignoreeof"]), foo = new Set(["e", "u", "x", "f", "C", "v", "m", "b", "E", "T", "h", "P", "n"]), Mrp = new Set(["path", "home", "tmpprefix", "bash_env", "env", "cdpath", "globignore", "shell", "fpath", "bash_loadables_path", "module_path", "manpath", "mailpath", "readnullcmd", "nullcmd", "histfile", "zdotdir", "functions", "commands", "aliases", "galiases", "saliases", "lang", "language", "lc_all", "lc_ctype", "lc_collate", "lc_messages", "lc_numeric", "lc_time", "histchars", "textdomain", "textdomaindir"]), moo = new Set(["RANDOM", "SECONDS", "LINENO", "OPTIND", "MAILCHECK", "HISTCMD", "SRANDOM", "EPOCHSECONDS", "EPOCHREALTIME", "COLUMNS", "LINES", "SHLVL", "ERRNO", "TMOUT", "HISTSIZE", "SAVEHIST", "TRY_BLOCK_ERROR", "TRY_BLOCK_INTERRUPT", "KEYTIMEOUT", "LISTMAX", "LOGCHECK", "PERIOD", "FUNCNEST", "UID", "EUID", "GID", "EGID", "ZLE_RPROMPT_INDENT", "MBEGIN", "MEND", "PPID", "ARGC", "ZSH_SUBSHELL", "TTYIDLE", "status"]);
  fct = new Set(["-p", "-d", "-n", "-N", "-t", "-u", "-i"]), cra = new Set(["-t", "-n", "-N"]), ura = /^(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/, $rp = /^[A-Za-z_][A-Za-z0-9_]*\[/, Orp = new Set(["-f", "-C", "-x", "-X", "-u"]), eoo = /\/proc\/.*\/environ/, SOn = /\n\s*#/;
});
function Nrp(e) {
  return e.includes("signature");
}
function Urp(e) {
  if (e === "") return !1;
  if (e.includes("%")) return !1;
  if (e.startsWith("format:") || e.startsWith("tformat:")) return !1;
  return !Brp.has(e);
}
function RRe(e) {
  let t = n => Bp(n) || Ira.test(n) || Nrp(n);
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (Ira.test(r)) return !0;
    for (let o of ["--format", "--pretty", "--sort"]) {
      let s;
      if (r === o && n + 1 < e.length) s = e[n + 1];else if (r.startsWith(`${o}=`)) s = r.slice(o.length + 1);
      if (s === void 0) continue;
      if (t(s)) return !0;
      if (o !== "--sort" && Urp(s)) return !0;
    }
  }
  return !1;
}
function N1(e, t) {
  for (let n of t) {
    if (!n) continue;
    let r = n;
    if (n.startsWith("-")) {
      let s = n.indexOf("=");
      if (s === -1) continue;
      if (r = n.slice(s + 1), !r) continue;
    }
    if (Bp(r)) return !0;
    if (!r.includes("/") && !r.includes("://") && !r.includes("@")) continue;
    if (r.includes("://")) return !0;
    if (r.includes("@")) return !0;
    if ((r.match(/\//g) || []).length >= 2) return !0;
  }
  return !1;
}
function kOn(e) {
  return e.some(t => {
    if (Rra.some(r => t === r || t.startsWith(`${r}=`) || r.length === 2 && t.length > 2 && t.startsWith(r))) return !0;
    let n = t.match(/^-([A-Za-z]+)/)?.[1];
    if (n !== void 0 && n.length >= 2) {
      for (let r of n) if (Frp.has(r)) return !0;
    }
    return !1;
  });
}
function j0(e, t = !1) {
  if (Vt() !== "windows") return !1;
  if (t && /^[\\/]{2}/.test(e)) return !0;
  if (/\\\\[^ \t\r\n\f\v\\/]+(?:@(?:\d+|ssl))?(?:[\\/]|$|\s)/i.test(e)) return !0;
  if (/(?<!:)\/\/[^ \t\r\n\f\v\\/]+(?:@(?:\d+|ssl))?(?:[\\/]|$|\s)/i.test(e)) return !0;
  if ((t ? /(?<![:\w])\/\\{1,}[^ \t\r\n\f\v\\/]+[\\/]/ : /\/\\{2,}[^ \t\r\n\f\v\\/]/).test(e)) return !0;
  if ((t ? /(?<![:\w])\\{1,}\/[^ \t\r\n\f\v\\/]+[\\/]/ : /\\{2,}\/[^ \t\r\n\f\v\\/]/).test(e)) return !0;
  if (/@SSL@\d+/i.test(e) || /@\d+@SSL/i.test(e)) return !0;
  if (/DavWWWRoot/i.test(e)) return !0;
  if (/^\\\\(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[\\/]/.test(e) || /^\/\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[\\/]/.test(e)) return !0;
  if (/^\\\\(\[[\da-fA-F:]+\])[\\/]/.test(e) || /^\/\/(\[[\da-fA-F:]+\])[\\/]/.test(e)) return !0;
  return !1;
}
function kra(e, t) {
  switch (t) {
    case "none":
      return !1;
    case "number":
      return /^\d+$/.test(e);
    case "string":
      return !0;
    case "char":
      return e.length === 1;
    case "{}":
      return e === "{}";
    case "EOF":
      return e === "EOF";
    default:
      return !1;
  }
}
function hct(e, t, n, r) {
  let o = t;
  while (o < e.length) {
    let s = e[o];
    if (!s) {
      o++;
      continue;
    }
    if (r?.xargsTargetCommands && r.commandName === "xargs" && (!s.startsWith("-") || s === "--")) {
      if (s === "--" && o + 1 < e.length) o++, s = e[o];
      if (s && r.xargsTargetCommands.includes(s)) break;
      return !1;
    }
    if (s === "--") {
      if (n.respectsDoubleDash !== !1) {
        o++;
        break;
      }
      o++;
      continue;
    }
    if (s.startsWith("-") && s.length > 1 && xra.test(s)) {
      let i = s.includes("="),
        [a, ...l] = s.split("="),
        c = l.join("=");
      if (!a) return !1;
      let u = n.safeFlags[a];
      if (!u) {
        if (r?.commandName === "git" && a.match(/^-\d+$/)) {
          o++;
          continue;
        }
        if ((r?.commandName === "grep" || r?.commandName === "egrep" || r?.commandName === "fgrep" || r?.commandName === "rg") && a.startsWith("-") && !a.startsWith("--") && a.length > 2) {
          let d = a.substring(0, 2),
            p = a.substring(2);
          if (n.safeFlags[d] && /^\d+$/.test(p)) {
            let f = n.safeFlags[d];
            if (f === "number" || f === "string") if (kra(p, f)) {
              o++;
              continue;
            } else return !1;
          }
        }
        if (a.startsWith("-") && !a.startsWith("--") && a.length > 2) {
          for (let d = 1; d < a.length; d++) {
            let p = "-" + a[d],
              f = n.safeFlags[p];
            if (!f) return !1;
            if (f !== "none") return !1;
          }
          o++;
          continue;
        } else return !1;
      }
      if (u === "none") {
        if (i) return !1;
        o++;
      } else {
        let d;
        if (i) d = c, o++;else {
          if (o + 1 >= e.length || e[o + 1] && e[o + 1].startsWith("-") && e[o + 1].length > 1 && xra.test(e[o + 1])) return !1;
          d = e[o + 1] || "", o += 2;
        }
        if (fra(d)) return !1;
        if (u === "string" && d.startsWith("-")) if (a === "--sort" && r?.commandName === "git" && d.match(/^-[a-zA-Z]/)) ;else return !1;
        if (!kra(d, u)) return !1;
      }
    } else {
      if (Bp(s)) return !1;
      o++;
    }
  }
  return !0;
}
var x2t, wOn, COn, IOn, xOn, k2t, goo, hoo, Ira, Brp, R2t, L2t, Rra, Frp, ROn, Lra, Dra, LOn, xra;