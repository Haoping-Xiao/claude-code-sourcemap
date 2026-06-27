// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ago
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Ago = E(() => {
  rre();
  sN();
  ys();
  Hu();
  Yf();
  $I();
  Jbe();
  xue();
  S$();
  Tjn();
  b$a = require("os"), H5 = require("path");
  ZRp = /^"?\$(?:\{[A-Za-z_][A-Za-z0-9_]*\}|[A-Za-z_][A-Za-z0-9_]*)"?\/(?:\*|\$|\/|["']|$)/, eLp = /^(?:[A-Za-z_][A-Za-z0-9_]*\+?=[^\s]*\s+)*\\?(?:[^\s=]*\/)?(rm|rmdir)(?:\s|$)/;
  Zpt = {
    cd: e => {
      let t = SH(e);
      if (t.length === 0) return e.at(-1) === "-" ? ["-"] : [b$a.homedir()];
      return [t[0]];
    },
    ls: e => {
      let t = SH(e);
      return t.length > 0 ? t : ["."];
    },
    find: e => {
      let t = [],
        n = new Set(["-newer", "-anewer", "-cnewer", "-mnewer", "-samefile", "-path", "-wholename", "-ilname", "-lname", "-ipath", "-iwholename"]),
        r = /^-newer[acmBt][acmtB]$/,
        o = false,
        s = false;
      for (let i = 0; i < e.length; i++) {
        let a = e[i];
        if (!a) continue;
        if (s) {
          t.push(a);
          continue;
        }
        if (a === "--") {
          s = true;
          continue;
        }
        if (a.startsWith("-")) {
          if (["-H", "-L", "-P"].includes(a)) continue;
          if (o = true, n.has(a) || r.test(a)) {
            let l = e[i + 1];
            if (l) t.push(l), i++;
          }
          continue;
        }
        if (!o) t.push(a);
      }
      return t.length > 0 ? t : ["."];
    },
    mkdir: SH,
    touch: SH,
    rm: SH,
    rmdir: SH,
    mv: SH,
    cp: SH,
    cat: SH,
    head: SH,
    tail: SH,
    sort: SH,
    uniq: SH,
    wc: SH,
    cut: Ego(new Set(["-d", "--delimiter", "-f", "--fields", "-b", "--bytes", "-c", "--characters", "--output-delimiter"])),
    paste: Ego(new Set(["-d", "--delimiters"])),
    column: Ego(new Set(["-s", "--separator", "-o", "--output-separator", "-c", "--output-width"])),
    file: SH,
    stat: SH,
    diff: SH,
    awk: e => {
      let t = new Set(["-F", "--field-separator", "-v", "--assign", "-e", "--source"]),
        n = new Set(["-f", "--file", "-E", "--exec"]),
        r = [],
        o = false,
        s = false,
        i = false;
      for (let a = 0; a < e.length; a++) {
        let l = e[a];
        if (l === void 0 || l === null) continue;
        if (!o && !i && l === "--") {
          o = true;
          continue;
        }
        if (!o && !i && l !== "-" && l.startsWith("-")) {
          let c = l.indexOf("="),
            u = c >= 0 ? l.slice(0, c) : l;
          if (t.has(u)) {
            if (u === "-e" || u === "--source") s = true;
            if (c < 0) a++;
            continue;
          }
          if (n.has(u)) {
            if (s = true, c >= 0) r.push(l.slice(c + 1));else {
              let d = e[a + 1];
              if (d !== void 0) r.push(d), a++;
            }
            continue;
          }
          continue;
        }
        if (i && !o) {
          let c = E$a(l, ["-f", "--file", "-E", "--exec"]);
          if (c !== void 0) r.push(c);
        }
        if (i = true, !s) {
          s = true;
          continue;
        }
        r.push(l);
      }
      return r;
    },
    strings: SH,
    hexdump: SH,
    od: SH,
    base64: SH,
    nl: SH,
    sha256sum: SH,
    sha1sum: SH,
    md5sum: SH,
    tr: e => {
      let t = e.some(r => r === "-d" || r === "--delete" || r.startsWith("-") && r.includes("d"));
      return SH(e).slice(t ? 1 : 2);
    },
    grep: e => {
      let n = y$a(e, new Set(["-e", "--regexp", "-f", "--file", "--exclude", "--include", "--exclude-dir", "--include-dir", "-m", "--max-count", "-A", "--after-context", "-B", "--before-context", "-C", "--context"]));
      if (n.length === 0 && e.some(r => ["-r", "-R", "--recursive"].includes(r))) return ["."];
      return n;
    },
    rg: e => y$a(e, new Set(["-e", "--regexp", "-f", "--file", "-t", "--type", "-T", "--type-not", "-g", "--glob", "-m", "--max-count", "--max-depth", "-r", "--replace", "-A", "--after-context", "-B", "--before-context", "-C", "--context"]), ["."]),
    sed: e => {
      let t = [],
        n = false,
        r = false,
        o = false,
        s = false;
      for (let i = 0; i < e.length; i++) {
        if (n) {
          n = false;
          continue;
        }
        let a = e[i];
        if (!a) continue;
        if (!o && !s && a === "--") {
          o = true;
          continue;
        }
        if (!o && !s && a !== "-" && a.startsWith("-")) {
          if (["-f", "--file"].includes(a)) {
            let l = e[i + 1];
            if (l) t.push(l), n = true;
            r = true;
          } else if (["-e", "--expression"].includes(a)) n = true, r = true;else if (a.includes("e") || a.includes("f")) r = true;
          continue;
        }
        if (s = true, !r) {
          r = true;
          continue;
        }
        t.push(a);
      }
      return t;
    },
    jq: e => {
      let t = [],
        n = new Set(["-e", "--expression", "--arg", "--argjson", "--args", "--jsonargs", "-L", "--library-path", "--indent", "--tab"]),
        r = false,
        o = false;
      for (let s = 0; s < e.length; s++) {
        let i = e[s];
        if (i === void 0 || i === null) continue;
        if (!o && i === "--") {
          o = true;
          continue;
        }
        if (!o && i.startsWith("-")) {
          let a = i.indexOf("="),
            l = a >= 0 ? i.slice(0, a) : i;
          if (["-e", "--expression"].includes(l)) r = true;
          if (["-f", "--from-file"].includes(l)) {
            if (r = true, a >= 0) t.push(i.slice(a + 1));else {
              let c = e[s + 1];
              if (c !== void 0) t.push(c), s++;
            }
            continue;
          }
          if (["--slurpfile", "--rawfile"].includes(l)) {
            let c = e[s + 2];
            if (c !== void 0) t.push(c);
            s += 2;
            continue;
          }
          if (n.has(l) && a < 0) s++;
          continue;
        }
        if (!r) {
          r = true;
          continue;
        }
        t.push(i);
      }
      return t;
    },
    git: e => {
      if (e.length >= 1 && e[0] === "diff") {
        if (e.includes("--no-index")) return SH(e.slice(1));
      }
      return [];
    }
  }, A$a = Object.keys(Zpt), tLp = {
    cd: "change directories to",
    ls: "list files in",
    find: "search files in",
    mkdir: "create directories in",
    touch: "create or modify files in",
    rm: "remove files from",
    rmdir: "remove directories from",
    mv: "move files to/from",
    cp: "copy files to/from",
    cat: "concatenate files from",
    head: "read the beginning of files from",
    tail: "read the end of files from",
    sort: "sort contents of files from",
    uniq: "filter duplicate lines from files in",
    wc: "count lines/words/bytes in files from",
    cut: "extract columns from files in",
    paste: "merge files from",
    column: "format files from",
    tr: "transform text from files in",
    file: "examine file types in",
    stat: "read file stats from",
    diff: "compare files from",
    awk: "process text from files in",
    strings: "extract strings from files in",
    hexdump: "display hex dump of files from",
    od: "display octal dump of files from",
    base64: "encode/decode files from",
    nl: "number lines in files from",
    grep: "search for patterns in files from",
    rg: "search for patterns in files from",
    sed: "edit files in",
    git: "access files with git from",
    jq: "process JSON from files in",
    sha256sum: "compute SHA-256 checksums for files in",
    sha1sum: "compute SHA-1 checksums for files in",
    md5sum: "compute MD5 checksums for files in"
  }, Jqe = {
    cd: "read",
    ls: "read",
    find: "read",
    mkdir: "create",
    touch: "create",
    rm: "write",
    rmdir: "write",
    mv: "write",
    cp: "write",
    cat: "read",
    head: "read",
    tail: "read",
    sort: "read",
    uniq: "read",
    wc: "read",
    cut: "read",
    paste: "read",
    column: "read",
    tr: "read",
    file: "read",
    stat: "read",
    diff: "read",
    awk: "read",
    strings: "read",
    hexdump: "read",
    od: "read",
    base64: "read",
    nl: "read",
    grep: "read",
    rg: "read",
    sed: "write",
    git: "read",
    jq: "read",
    sha256sum: "read",
    sha1sum: "read",
    md5sum: "read"
  }, nLp = {
    mv: e => !e.some(t => t?.startsWith("-")),
    cp: e => !e.some(t => t?.startsWith("-")),
    cd: e => {
      let t = false,
        n = 0;
      for (let r of e) {
        if (!t) {
          if (r === "--") {
            t = true;
            continue;
          }
          if (r.startsWith("-") && r !== "-") continue;
          t = true;
        }
        n++;
      }
      return n <= 1;
    }
  };
  _$a = /^[A-Za-z0-9_.+-]+$/;
});
function fLp() {
  let e = pLp;
  if (Vt() === "windows") {
    let {
      xargs: t,
      ...n
    } = e;
    e = n;
  }
  return e;
}
function gLp(e) {
  let t = oA(e);
  if (t.length === 0) return false;
  let n,
    r = 0,
    o = fLp();
  for (let [s] of Object.entries(o)) {
    let i = s.split(" ");
    if (t.length >= i.length) {
      let a = true;
      for (let l = 0; l < i.length; l++) if (t[l] !== i[l]) {
        a = false;
        break;
      }
      if (a) {
        n = o[s], r = i.length;
        break;
      }
    }
  }
  if (!n) return false;
  if (t[0] === "git" && t[1] === "ls-remote") {
    if (t.some(i => i === "-o" || i === "--server-option" || i.startsWith("--server-option="))) return false;
    let s = false;
    for (let i = 2; i < t.length; i++) {
      let a = t[i];
      if (!a) continue;
      if (!s && a === "--") {
        s = true;
        continue;
      }
      if (s || a === "-" || !a.startsWith("-")) return false;
    }
  }
  for (let s = r; s < t.length; s++) {
    let i = t[s];
    if (!i) continue;
    if (i.includes("$")) return false;
    if (i.includes("{") && (i.includes(",") || i.includes(".."))) return false;
  }
  if (!hct(t, r, n, {
    commandName: t[0],
    rawCommand: e,
    xargsTargetCommands: t[0] === "xargs" ? mLp : void 0
  })) return false;
  if (n.regex && !n.regex.test(e)) return false;
  if (!n.regex && /`/.test(e)) return false;
  if (!n.regex && (t[0] === "rg" || t[0] === "grep" || t[0] === "egrep" || t[0] === "fgrep") && /[\n\r]/.test(e)) return false;
  if (n.additionalCommandIsDangerousCallback && n.additionalCommandIsDangerousCallback(e, t.slice(r))) return false;
  return true;
}
function hLp(e) {
  return new RegExp(`^${e}(?:\\s|$)[^<>()$\`|{}&;\\n\\r]*$`);
}
function HLp(e) {
  if (e.length === 0) return false;
  let t = e[0];
  if (ELp.has(t)) return e.length === 1;
  for (let r of ALp) if (e.length === r.length && e.every((o, s) => o === r[s])) return true;
  if (yLp.has(t)) return true;
  for (let r of _Lp) {
    let o = r.split(" ");
    if (e.length >= o.length && o.every((s, i) => e[i] === s)) {
      if (o[0] === "docker" && (kOn(e) || e.slice(o.length).some(Bp))) return false;
      return true;
    }
  }
  if (t === "echo") return true;
  let n = /^[-+]?(0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)$/;
  if (t === "printf") {
    if (e[1]?.startsWith("-") && e[1] !== "--") return false;
    let r = e[1] === "--" ? 2 : 1,
      o = e[r] ?? "";
    if (Bp(o)) return false;
    if (o.includes("$")) return false;
    let s = o.replace(/%%/g, "");
    if (/%[^%a-zA-Z]*(?:hh|ll|[lLhqjzZt])?\\[0-7xX]/.test(s) || /\\[uU]/.test(s)) return false;
    if (/%[-+ 0#']*[0-9.*]*(?:hh|ll|[lLhqjzZt])?[diouxXeEfFgGaAn]/.test(s) || /%[^%a-zA-Z]*\*/.test(s)) for (let i = r + 1; i < e.length; i++) {
      let a = e[i];
      if (a.includes("[") || a.includes("`") || a.includes("$(") || Bp(a) || !n.test(a)) return false;
    }
    return true;
  }
  if (t === "[[") {
    for (let r = 1; r < e.length; r++) {
      let o = e[r],
        s = e[r + 1];
      if ((o === "-v" || o === "-R" || o === "-t") && s !== void 0 && (s.includes("[") || Bp(s))) return false;
      if (o === "-t" && s !== void 0 && !BWe.test(s)) return false;
      if (gct.has(o)) {
        for (let i of [e[r - 1], e[r + 1]]) if (i !== void 0 && (i.includes("[") || !BWe.test(i))) return false;
      }
    }
    return true;
  }
  if (t === "ls") return true;
  if (t === "cd") return e.length <= 2;
  if (t === "find") {
    for (let r = 1; r < e.length; r++) {
      let o = e[r];
      if (bLp.has(o)) return false;
      if (SLp.has(o) || C2t.test(o)) {
        r++;
        continue;
      }
      if (Bp(o)) return false;
    }
    return true;
  }
  if (t === "history") return e.length === 1 || e.length === 2 && /^\d+$/.test(e[1]);
  if (t === "arch") return e.length === 1 || e.length === 2 && (e[1] === "-h" || e[1] === "--help");
  if (t === "ifconfig") return e.length === 1 || e.length === 2 && /^[a-zA-Z]/.test(e[1]);
  return null;
}
function vgo(e) {
  let t = false,
    n = false,
    r = false,
    o = false,
    s = false,
    i = false,
    a = true;
  for (let l = 0; l < e.length; l++) {
    let c = e[l];
    if (o) {
      o = false, a = false;
      continue;
    }
    if (c === "\\" && !t) {
      if (e[l + 1] === `
`) {
        l++;
        continue;
      }
      o = true;
      continue;
    }
    if (r) {
      if (c === "`") r = false, a = false;
      continue;
    }
    if (c === "`" && !t) {
      r = true, a = false;
      continue;
    }
    if (c === "#" && a && !t && !n) {
      while (l < e.length && e[l] !== `
`) l++;
      a = true;
      continue;
    }
    if (c === "'" && !n) {
      t = !t, a = false;
      continue;
    }
    if (c === '"' && !t) {
      n = !n, a = false;
      continue;
    }
    if (t) continue;
    if (c === "$") {
      let u = e[l + 1];
      if (u && /[A-Za-z_@*#?!$0-9-]/.test(u)) return "variable";
    }
    if (n) continue;
    if (c === " " || c === "\t" || c === `
` || c === "|" || c === "&" || c === ";" || c === "(" || c === ")" || c === "<" || c === ">") {
      i = false, a = true;
      continue;
    }
    if (a = false, c === "?" || c === "*") {
      s = true;
      continue;
    }
    if (c === "[") {
      i = true;
      continue;
    }
    if (c === "]" && i) s = true;
  }
  return s ? "glob" : false;
}
function wLp(e) {
  let t = e.trim();
  if (t.endsWith(" 2>&1")) t = t.slice(0, -5).trim();
  if (j0(t)) return false;
  if (vgo(t) === "variable") return false;
  if (gLp(t)) return true;
  for (let n of TLp) if (n.test(t)) {
    if (t.startsWith("find")) {
      let r = t.replace(/['"\\]/g, "");
      if (/-delete\b|-exec\b|-execdir\b|-ok\b|-okdir\b|-fprint0?\b|-fls\b|-fprintf\b|-files0-from\b/.test(r)) return false;
    }
    if (t.includes("git") && /\s-c[\s=]/.test(t)) return false;
    if (t.includes("git") && /\s--exec-path[\s=]/.test(t)) return false;
    if (t.includes("git") && /\s--config-env[\s=]/.test(t)) return false;
    return true;
  }
  return false;
}
function Tgo(e) {
  let t = pg.posix.normalize(e.replace(/\/+/g, "/"));
  return t = t.replace(/^\.?\//, "").toLowerCase().replace(/\u0131/g, "i").replace(/\u017f/g, "s"), C$a.some(n => n.test(t));
}
function CLp(e) {
  let t = mEe(oA(e));
  if (t.length === 0) return [];
  let n = t[0]?.replace(/[\\'"]/g, "");
  if (!n) return [];
  if (!(n in Jqe)) return [];
  let r = Jqe[n];
  if (r !== "write" && r !== "create" || I$a.has(n)) return [];
  let o = Zpt[n];
  if (!o) return [];
  return o(t.slice(1));
}
function ZGt(e) {
  let t = By(e);
  for (let r of t) {
    let o = r.trim(),
      s = CLp(o),
      a = mEe(oA(o))[0]?.replace(/[\\'"]/g, ""),
      l = a === "cp" || a === "mv",
      c = s.at(-1),
      u = c !== void 0 && (c === "." || c === "./" || c === "" || /^(?:\.\.\/)*\.\.\/?$/.test(c));
    for (let d of s) {
      if (Tgo(d)) return true;
      if (l && u && d !== c) {
        let p = d.replace(/\/+$/, "").split("/").pop() ?? "";
        if (Tgo(p)) return true;
      }
    }
  }
  let {
    redirections: n
  } = vde(e);
  for (let {
    target: r
  } of n) if (Tgo(r)) return true;
  return false;
}
function x$a(e, t) {
  return mSr(t) ? t : eae(e, t) ?? t;
}
function Ijn(e, t) {
  if (e === "") return false;
  if (e.startsWith("~")) {
    let n = LR(e);
    if (n.startsWith("~")) return true;
    return eft(n, t) || eft(e, t);
  }
  return eft(e, t);
}
function eft(e, t) {
  let n = qt();
  if ((!mSr(e) || true) && !Tw(e) && /(^|[/\\])\.\.(?:[/\\]|$)/.test(e)) {
    let p = /\/+/,
      f = pg.isAbsolute(e) ? pg.parse(e).root : "",
      m = f ? pg.parse(pg.resolve(t, e)).root : t,
      g = (f ? e.slice(f.length) : e).split(p),
      h = m;
    for (let y = 0; y < g.length; y++) {
      let b = g[y];
      if (b === "" || b === ".") continue;
      if (b === "..") {
        h = pg.dirname(h);
        continue;
      }
      if (h = h.endsWith(pg.sep) ? h + b : h + pg.sep + b, Tw(h)) break;
      try {
        if (n.lstatSync(h).isSymbolicLink() && g.slice(y + 1).includes("..")) return true;
      } catch {}
    }
  }
  let r = pg.resolve(t, e),
    o = x$a(n, r).normalize("NFC"),
    s = (eae(n, t) ?? t).normalize("NFC");
  function i(p) {
    let f = pg.relative(p, o);
    if (f === "" || f.startsWith(".." + pg.sep) || pg.isAbsolute(f)) return false;
    let m = f.split(pg.sep).join("/").toLowerCase().replace(/\u0131/g, "i").replace(/\u017f/g, "s");
    return C$a.some(g => g.test(m));
  }
  if (i(s)) return true;
  if (!pg.relative(s, o).startsWith(".." + pg.sep)) return false;
  let l = yr(),
    c = (eae(n, l) ?? l).normalize("NFC"),
    u = pg.relative(c, o);
  if (u === "" || u.startsWith(".." + pg.sep) || pg.isAbsolute(u)) return false;
  let d = s;
  do if (d = pg.dirname(d), i(d)) return true; while (d !== c && d !== pg.dirname(d));
  return false;
}
function xLp(e, t) {
  if (Ijn(e, t)) return true;
  for (let n = 1; n < e.length; n++) {
    let r = e[n],
      o = e[n - 1];
    if ((r === "/" || r === pg.sep) && o !== "/" && o !== pg.sep) {
      if (Ijn(e.slice(0, n), t)) return true;
    }
  }
  return false;
}
function kLp(e, t) {
  let n = e.toLowerCase();
  if (n === t.toLowerCase()) return true;
  let r = qt(),
    o = (eae(r, yr()) ?? yr()).normalize("NFC"),
    s = pg.relative(o, t);
  if (s === ".." || s.startsWith(".." + pg.sep) || pg.isAbsolute(s)) return false;
  let i = t;
  for (;;) {
    if (i.toLowerCase() === n) return true;
    if (i === o || i === pg.dirname(i)) return false;
    i = pg.dirname(i);
  }
}
function xjn(e, t) {
  for (let n of e) {
    if (!n) continue;
    for (let l of n.redirects) {
      if (ILp.has(l.op)) continue;
      if (Bp(l.target)) return true;
      if (Ijn(l.target, t)) return true;
    }
    let r = mEe(n.argv),
      o = r[0];
    if (o !== void 0 && Bp(o)) return true;
    if (!o || !(o in Jqe)) continue;
    let s = Jqe[o];
    if (s !== "write" && s !== "create" || I$a.has(o)) continue;
    let i = Zpt[o](r.slice(1)),
      a = o === "mkdir" && r.slice(1).some(l => /^-[^-]*p/.test(l) || l.startsWith("--p") && "--parents".startsWith(l));
    for (let l of i) {
      if (Bp(l)) return true;
      if (a ? xLp(l, t) : Ijn(l, t)) return true;
    }
    if ((o === "cp" || o === "mv") && i.length >= 1) {
      let l = r.slice(1),
        c = l.some(p => {
          if (/^-[^-]*t/.test(p)) return true;
          let f = p.indexOf("="),
            m = f >= 0 ? p.slice(0, f) : p;
          return m.startsWith("--t") && "--target-directory".startsWith(m);
        }),
        u = l.some(p => /^-[^-]*T/.test(p) || p.startsWith("--n") && "--no-target-directory".startsWith(p)),
        d = false;
      if (!c && i.length >= 2) {
        let p = i.at(-1),
          f = [p];
        if (p.startsWith("~")) {
          let m = LR(p);
          if (m.startsWith("~")) d = true;else f.push(m);
        }
        if (!d) {
          let m = qt(),
            g = (eae(m, t) ?? t).normalize("NFC");
          for (let h of f) {
            let y = pg.resolve(t, h),
              b = x$a(m, y).normalize("NFC");
            if (kLp(b, g)) {
              d = true;
              break;
            }
          }
        }
      }
      if (c || d) {
        let p = c ? i : i.slice(0, -1);
        if (u) return true;
        for (let f of p) {
          if (Kie(f) !== -1 || Bp(f)) return true;
          let m = pg.basename(f);
          if (m === "." || m === "..") return true;
          if (f.startsWith("~")) {
            let g = LR(f);
            if (g.startsWith("~")) return true;
            if (eft(pg.basename(g), t) || eft(m, t)) return true;
          } else if (eft(m, t)) return true;
        }
      }
    }
  }
  return false;
}
function LLp(e) {
  let t = e.slice();
  for (;;) if (t[0] === "command") {
    let n = 1;
    while (t[n] !== void 0 && /^-p+$/.test(t[n])) n++;
    if (t[n] === "--") n++;
    if (n >= t.length || t[n].startsWith("-")) return t;
    t = t.slice(n);
  } else if (t[0] === "builtin") {
    let n = t[1] === "--" ? 2 : 1;
    if (n >= t.length) return t;
    t = t.slice(n);
  } else if (t[0] === "noglob") {
    if (t.length <= 1) return t;
    t = t.slice(1);
  } else return t;
}
function DLp(e) {
  let t = e;
  while (w$a.test(t)) t = t.replace(w$a, "");
  return t;
}
function k$a(e) {
  if (e.type === "subshell" || e.type === "compound_statement") return true;
  for (let t of e.children) if (t && k$a(t)) return true;
  return false;
}
function R$a(e) {
  if (!PLp.has(e.type)) return false;
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "&") return true;
    if (R$a(t)) return true;
  }
  return false;
}
function kjn(e, t) {
  let {
      command: n
    } = e,
    r = hL().parse(n),
    o = r ? UWe(n, r) : {
      kind: "simple",
      commands: [],
      bareAssignmentNames: []
    };
  if (o.kind === "too-complex") return {
    behavior: "passthrough",
    message: `Not a simple read-only command: ${o.reason}`
  };
  if (r && k$a(r)) return {
    behavior: "passthrough",
    message: "Not a simple read-only command: contains a subshell"
  };
  if (r && R$a(r)) return {
    behavior: "passthrough",
    message: "Not a simple read-only command: `&` defers execution past approval-time checks"
  };
  let s = Yjt();
  if (o.bareAssignmentNames.some(d => !gEe(d) && (s === null || s.has(d)))) return {
    behavior: "passthrough",
    message: "Bare assignment to a non-allowlisted environment variable can alter behavior of subsequent commands"
  };
  let i = vgo(n);
  if (i === "variable") return {
    behavior: "passthrough",
    message: "Command contains unquoted variable expansion"
  };
  if (j0(n)) return {
    behavior: "ask",
    message: "Command contains Windows UNC path that could be vulnerable to WebDAV attacks"
  };
  let a = o.commands.some(d => Qqe(d.text));
  if ((t || o.commands.some(d => wde(d.text))) && a) return {
    behavior: "passthrough",
    message: "Compound commands with cd and git require permission checks for enhanced security"
  };
  let c = a && wRt();
  if (c) return {
    behavior: "passthrough",
    message: c === "bare-indicators" ? "The current directory has bare-repo indicators (HEAD/objects/refs outside a .git/ directory). Git may treat it as a git dir and run config/hooks from here, so git commands need approval." : "The .git file or symlink here redirects to a location Claude cannot verify is safe (it may have been planted by an untrusted archive). Git commands need approval."
  };
  if (a && ZGt(n)) return {
    behavior: "passthrough",
    message: "Compound commands that create git internal files and run git require permission checks for enhanced security"
  };
  if (a && xo.isSandboxingEnabled() && $t() !== yr()) return {
    behavior: "passthrough",
    message: "Git commands outside the original working directory require permission checks when sandbox is enabled"
  };
  if (o.commands.length > 0 && o.commands.every(d => {
    if (d.redirects.some(m => !RLp.has(m.op) && m.target !== "/dev/null" && !(m.op === ">&" && /^\d+$/.test(m.target)))) return false;
    if (d.redirects.some(m => /^\/dev\/(tcp|udp)\//.test(m.target))) return false;
    if (d.redirects.some(m => m.op === "<" && j0(m.target, true))) return false;
    if (Vt() === "windows" && d.redirects.some(m => m.op === "<" && /(?<![:\w])[\\/]{2,}[^ \t\r\n\f\v\\/]/.test(m.target))) return false;
    if (d.envVars.some(m => !gEe(m.name))) return false;
    if (d.argv.some(m => j0(m, true))) return false;
    if (Vt() === "windows" && d.argv.some(m => /(?<![:\w])[\\/]{2,}[^ \t\r\n\f\v\\/]/.test(m))) return false;
    let p = LLp(d.argv);
    if (vgo(d.text) === "glob" || i === "glob" && d.argv.some(m => /[*?]|\[.*\]/.test(m))) return vLp.has(p[0] ?? "");
    let f = HLp(p);
    if (f !== null) return f;
    return wLp(DLp(d.text));
  })) return {
    behavior: "allow",
    updatedInput: e
  };
  return {
    behavior: "passthrough",
    message: "Command is not read-only, requires further permission checks"
  };
}
var pg, v$a, Hgo, pLp, Ya_, mLp, wgo, yLp, _Lp, bLp, SLp, ELp, ALp, TLp, vLp, C$a, I$a, ILp, RLp, w$a, PLp;