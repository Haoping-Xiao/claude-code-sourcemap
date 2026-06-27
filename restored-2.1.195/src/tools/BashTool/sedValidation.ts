// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jDe
// matched 2.1.88 source: src/tools/BashTool/sedValidation.ts
// class=modified  jaccard=0.5072  score=0.8964  fileCov=0.5388
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var jDe = E(() => {
  zqe();
  Yqe();
  ii();
  h6();
  dr();
  m1();
  FDe = {
    status: "idle",
  };
});
function p$a(e, t) {
  for (let n of e)
    if (n.startsWith("-") && !n.startsWith("--") && n.length > 2)
      for (let r = 1; r < n.length; r++) {
        let o = "-" + n[r];
        if (!t.includes(o)) return false;
      }
    else if (!t.includes(n)) return false;
  return true;
}
function l$a(e, t) {
  let n = oA(e);
  if (n[0] !== "sed") return false;
  let o = n.slice(1).filter((a) => a.startsWith("-") && a !== "--");
  if (
    !p$a(o, [
      "-n",
      "--quiet",
      "--silent",
      "-E",
      "--regexp-extended",
      "-r",
      "-z",
      "--zero-terminated",
      "--posix",
    ])
  )
    return false;
  let i = false;
  for (let a of o) {
    if (a === "-n" || a === "--quiet" || a === "--silent") {
      i = true;
      break;
    }
    if (a.startsWith("-") && !a.startsWith("--") && a.includes("n")) {
      i = true;
      break;
    }
  }
  if (!i) return false;
  if (t.length === 0) return false;
  for (let a of t) {
    let l = a.split(";");
    for (let c of l) if (!zRp(c.trim())) return false;
  }
  return true;
}
function zRp(e) {
  if (!e) return false;
  return /^(?:\d+|\d+,\d+)?p$/.test(e);
}
function c$a(e, t, n, r) {
  let o = r?.allowFileWrites ?? false;
  if (!o && n) return false;
  let s = oA(e);
  if (s[0] !== "sed") return false;
  let a = s.slice(1).filter((y) => y.startsWith("-") && y !== "--"),
    l = ["-E", "--regexp-extended", "-r", "--posix"];
  if (o) l.push("-i", "--in-place");
  if (!p$a(a, l)) return false;
  if (t.length !== 1) return false;
  let c = t[0].trim();
  if (!c.startsWith("s")) return false;
  let u = c.match(/^s\/(.*?)$/);
  if (!u) return false;
  let d = u[1],
    p = 0,
    f = -1,
    m = 0;
  while (m < d.length) {
    if (d[m] === "\\") {
      m += 2;
      continue;
    }
    if (d[m] === "/") (p++, (f = m));
    m++;
  }
  if (p !== 2) return false;
  let g = d.slice(f + 1);
  if (!/^[gpimIM]*[1-9]?[gpimIM]*$/.test(g)) return false;
  return true;
}
function Qpt(e, t) {
  let n = t?.allowFileWrites ?? false;
  if (vjn(e) || Bp(e)) return false;
  let r;
  try {
    r = XRp(e);
  } catch (l) {
    return false;
  }
  let o = KRp(e),
    s = false,
    i = false;
  if (n)
    ((s = l$a(e, r)),
      (i = c$a(e, r, o, {
        allowFileWrites: true,
      })));
  else ((s = l$a(e, r)), (i = c$a(e, r, o)));
  if (!s && !i) return false;
  for (let l of r) if (i && l.includes(";")) return false;
  for (let l of r) if (u$a(l)) return false;
  let a = YRp(e);
  if (a !== null) {
    if (a === f$a) return false;
    if (u$a(a)) return false;
    let l = a.trimStart();
    if (/^[sy][^a-zA-Z0-9]/.test(l)) return false;
    if (/^[\\$:={]/.test(l)) return false;
    if (/^\d+[ \t]*[,!~=aAcCdDegGhHiIlnNpPqQrRsStTwWxyz]/.test(l)) return false;
    if (/^[aAcCdDgGhHiIlnNpPqQtTwWxz=]([\s\\;]|$)/.test(l)) return false;
    if (/^[rR]([\s\\;/]|\.{1,2}\/|$)/.test(l)) return false;
    if (
      /^\/(?:[^/\\]|\\.)*\/[IMim]*[ \t]*([aAcCdDgGhHiIlnNpPqQtTwWxz=]([\s\\;]|$)|[rR]([\s\\;/]|\.{1,2}\/|$)|[sy][^a-zA-Z0-9]|[,!~])/.test(
        l,
      )
    )
      return false;
    let c = l.replace(/^(\.{1,2}\/)+/, "");
    if (l.includes(";") || l.includes("[") || l.includes("\\") || c.includes("..")) return false;
  }
  return true;
}
function KRp(e) {
  let t = oA(e);
  if (t[0] !== "sed") return false;
  let n = t.slice(1),
    r = 0,
    o = false;
  for (let s = 0; s < n.length; s++) {
    let i = n[s];
    if ((i === "-e" || i === "--expression") && s + 1 < n.length) {
      ((o = true), s++);
      continue;
    }
    if (i.startsWith("--expression=")) {
      o = true;
      continue;
    }
    if (i.startsWith("-e=")) {
      o = true;
      continue;
    }
    if (i.startsWith("-")) continue;
    if ((r++, o)) return true;
    if (r > 1) return true;
  }
  return false;
}
function YRp(e) {
  let t = oA(e);
  if (t[0] !== "sed") return null;
  let n = t.slice(1),
    r = [];
  for (let i = 0; i < n.length; i++) {
    let a = n[i];
    if (a === "-i" || /^-[Er]+i$/.test(a)) r.push(i);
  }
  if (r.length === 0) return null;
  if (r.length > 1) return f$a;
  let o = r[0],
    s = n[o + 1];
  if (s === void 0) return null;
  if (s === "" || s.startsWith(".") || s.startsWith("-")) return null;
  for (let i = o + 2; i < n.length; i++) {
    let a = n[i];
    if (a === "-e" || a === "--expression") return n[i + 1] ?? null;
    if (a.startsWith("--expression=")) return a.slice(13);
    if (a.startsWith("-")) continue;
    return a;
  }
  return null;
}
function XRp(e) {
  let t = [],
    n = oA(e);
  if (n[0] !== "sed") return t;
  let r = n.slice(1);
  if (r.some((o) => /^-e[wWe]/.test(o) || /^-w[eE]/.test(o)))
    throw Error("Dangerous flag combination detected");
  if (r.length === 0) throw Error("No sed arguments");
  try {
    let o = false,
      s = false;
    for (let i = 0; i < r.length; i++) {
      let a = r[i];
      if (typeof a !== "string") continue;
      if ((a === "-e" || a === "--expression") && i + 1 < r.length) {
        o = true;
        let l = r[i + 1];
        if (typeof l === "string") (t.push(l), i++);
        continue;
      }
      if (a.startsWith("--expression=")) {
        ((o = true), t.push(a.slice(13)));
        continue;
      }
      if (a.startsWith("-e=")) {
        ((o = true), t.push(a.slice(3)));
        continue;
      }
      if (a.startsWith("-")) continue;
      if (!o && !s) {
        (t.push(a), (s = true));
        continue;
      }
      break;
    }
  } catch (o) {
    throw Error(`Failed to parse sed command: ${o instanceof Error ? o.message : "Unknown error"}`);
  }
  return t;
}
function u$a(e) {
  let t = e.trim();
  if (!t) return false;
  if (/[^\x01-\x7F]/.test(t)) return true;
  if (t.includes("{") || t.includes("}")) return true;
  if (
    t.includes(`
`) ||
    t.includes("\r")
  )
    return true;
  let n = t.indexOf("#");
  if (n !== -1 && !(n > 0 && t[n - 1] === "s")) return true;
  if (/^!/.test(t) || /[/\d$]!/.test(t)) return true;
  if (/\d\s*~\s*\d|,\s*~\s*\d|\$\s*~\s*\d/.test(t)) return true;
  if (/^,/.test(t)) return true;
  if (/,\s*[+-]/.test(t)) return true;
  if (/s\\/.test(t) || /\\[|#%@]/.test(t)) return true;
  if (/\\\/.*[wW]/.test(t)) return true;
  if (/\/[^/]*\s+[wWeE]/.test(t)) return true;
  if (/^s\//.test(t) && !/^s\/[^/]*\/[^/]*\/[^/]*$/.test(t)) return true;
  if (/^s./.test(t) && /[wWeE]$/.test(t)) {
    if (!/^s([^\\\n]).*?\1.*?\1[^wWeE]*$/.test(t)) return true;
  }
  if (
    /^[wW]\s*\S+/.test(t) ||
    /^\d+\s*[wW]\s*\S+/.test(t) ||
    /^\$\s*[wW]\s*\S+/.test(t) ||
    /^\/[^/]*\/[IMim]*\s*[wW]\s*\S+/.test(t) ||
    /^\d+,\d+\s*[wW]\s*\S+/.test(t) ||
    /^\d+,\$\s*[wW]\s*\S+/.test(t) ||
    /^\/[^/]*\/[IMim]*,\/[^/]*\/[IMim]*\s*[wW]\s*\S+/.test(t)
  )
    return true;
  if (
    /^e/.test(t) ||
    /^\d+\s*e/.test(t) ||
    /^\$\s*e/.test(t) ||
    /^\/[^/]*\/[IMim]*\s*e/.test(t) ||
    /^\d+,\d+\s*e/.test(t) ||
    /^\d+,\$\s*e/.test(t) ||
    /^\/[^/]*\/[IMim]*,\/[^/]*\/[IMim]*\s*e/.test(t)
  )
    return true;
  let r = t.match(/s([^\\\n]).*?\1.*?\1(.*?)$/);
  if (r) {
    let s = r[2] || "";
    if (s.includes("w") || s.includes("W")) return true;
    if (s.includes("e") || s.includes("E")) return true;
  }
  if (t.match(/y([^\\\n])/)) {
    if (/[wWeE]/.test(t)) return true;
  }
  return false;
}
function m$a(e, t) {
  let n = By(e.command),
    r;
  for (let o of n) {
    let s = g$a(o);
    if (s === null) continue;
    let i = t.mode === "acceptEdits";
    if (((r ??= Sgo(e, t)), r.behavior === "ask")) return r;
    if (
      !Qpt(s, {
        allowFileWrites: i,
      })
    )
      return {
        behavior: "ask",
        message: "sed command requires approval (contains potentially dangerous operations)",
        decisionReason: {
          type: "other",
          reason:
            "sed command contains operations that require explicit approval (e.g., write commands, execute commands)",
          bashMissKind: "sed-dangerous",
        },
      };
  }
  return {
    behavior: "passthrough",
    message: "No dangerous sed operations detected",
  };
}
function bgo(e) {
  return g$a(e) !== null;
}
function g$a(e) {
  let t = e.trim();
  if (!t) return null;
  let n = JRp(t);
  if (n !== null) return n;
  if (A5(t).split(/\s+/)[0] === "sed") return Jpt(t);
  return null;
}
function JRp(e) {
  let t = (a) => (a.split(/\s+/)[0] === "sed" ? a : null);
  if (e.length > fEe) return t(Jpt(e));
  if (JGt(e)) return t(Jpt(e));
  let n = hL().parse(e);
  if (!n || QGt(n)) return t(Jpt(e));
  let r = n.children.filter((a) => a.type !== "comment");
  if (
    r.length !== 1 ||
    (r[0].type !== "command" &&
      !(r[0].type === "redirected_statement" && r[0].children.some((a) => a.type === "command")))
  )
    return t(Jpt(e));
  let o = Xbe(n, null);
  if (!o) return null;
  let s = o.children.find((a) => a.type === "command_name");
  if (!s) return null;
  let i = Buffer.from(e, "utf8").subarray(s.startIndex).toString("utf8");
  return t(Jpt(i));
}
function Jpt(e) {
  let t = e.trim();
  for (;;) {
    let n = QRp(A5(t));
    if (n === t) break;
    t = n;
  }
  return t;
}
function QRp(e) {
  let t = e;
  for (;;) {
    if (t.startsWith("<<<") && t[3] !== "<" && t[3] !== "(") {
      let i = t.slice(3),
        a = i.startsWith(" ") || i.startsWith("\t") ? i.trimStart() : i;
      if (!a) return t;
      let l = d$a(a);
      if (l === null) return t;
      t = a.slice(l).trimStart();
      continue;
    }
    let n =
      /^(?:\d*|&)(?:>>(?!\()|>\|(?!\()|>&(?!\()|<&(?!\()|<>(?!\()|>(?![>|&(])|<(?![<>&(]))/.exec(t);
    if (!n) return t;
    let r = t.slice(n[0].length),
      o = r.startsWith(" ") || r.startsWith("\t") ? r.trimStart() : r;
    if (!o) return t;
    let s = d$a(o);
    if (s === null) return t;
    t = o.slice(s).trimStart();
  }
}
function d$a(e) {
  let t = 0;
  while (t < e.length) {
    let n = e[t];
    if (n === " " || n === "\t") break;
    if (n === "\\" && t + 1 < e.length) {
      t += 2;
      continue;
    }
    if (n === "'") {
      let r = e.indexOf("'", t + 1);
      if (r === -1) return null;
      t = r + 1;
      continue;
    }
    if (n === '"') {
      let r = t + 1;
      for (;;) {
        if (r >= e.length) return null;
        if (e[r] === "\\" && r + 1 < e.length) {
          r += 2;
          continue;
        }
        if (e[r] === '"') break;
        r++;
      }
      t = r + 1;
      continue;
    }
    t++;
  }
  return t;
}
function Sgo(e, t, n) {
  let r = (o) => bgo(o) && !(n?.has(o.trim()) ?? false);
  if (e.command.length > fEe || JGt(e.command))
    return {
      behavior: "ask",
      message: "sed command requires approval (contains potentially dangerous operations)",
      decisionReason: {
        type: "other",
        reason:
          "sed command could not be statically validated (command is over-length or contains characters bash and the analyzer tokenize differently)",
        bashMissKind: "sed-dangerous",
      },
    };
  if (h$a(e.command, r))
    return {
      behavior: "ask",
      message: "sed command requires approval (contains potentially dangerous operations)",
      decisionReason: {
        type: "other",
        reason:
          "sed command carries redirect-borne content that cannot be statically validated (swallowed arguments, unanalyzable heredoc, or expansion in a redirect target)",
        bashMissKind: "sed-dangerous",
      },
    };
  return {
    behavior: "passthrough",
    message: "No redirect-borne sed risk detected",
  };
}
var f$a = "__SED_MULTIPLE_I_FLAGS__";
