// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Tjn
// matched 2.1.88 source: src/tools/BashTool/pathValidation.ts
// class=modified  jaccard=0.0401  score=0.215  fileCov=0.047
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Tjn = E(() => {
  rre();
  Ybe();
  sN();
  xRe();
  S$();
});
function Xqe(e, t, n) {
  return {
    behavior: "ask",
    message: t,
    decisionReason: {
      type: "safetyCheck",
      reason: `Dangerous ${e} operation ${n}`,
      classifierApprovable: !1,
    },
    suggestions: [],
  };
}
function wjn(e, t, n, r, o) {
  let s = Zpt[e],
    i = s(t),
    { resolvedPath: a } = jd(qt(), n),
    l = a === n ? [n] : [n, a],
    c = Uo(
      [...l, ...(r ? jj(r) : [])].flatMap((u) => {
        let { resolvedPath: d } = jd(qt(), u);
        return d === u ? [u] : [u, d];
      }),
    );
  for (let u of i) {
    let d = LR(u),
      p = H5.isAbsolute(d) ? d : H5.resolve(n, d),
      f = p;
    for (let h = ""; h !== f; ) {
      h = f;
      let y = f.replace(/([\\/]\*+)+[\\/]*$/, "") || "/";
      if (y !== f) f = /[\\/]/.test(y) ? H5.normalize(y) : y;
    }
    let m = f !== p;
    if (o && m && !H5.isAbsolute(d) && /[\\/]\*$/.test(p))
      return Xqe(
        e,
        `Dangerous ${e} operation detected: '${p}'

This command changes directories before the removal, so the relative glob target cannot be statically resolved. This requires explicit approval and cannot be auto-allowed by permission rules.`,
        `on statically-unresolvable target: ${p}`,
      );
    let g = f;
    if (!H5.isAbsolute(d)) {
      let h = /[\\/]$/.test(n) ? n : n + H5.sep;
      if (f.startsWith(h)) g = f.slice(h.length);
      else if (f === n) g = "";
    }
    if (
      m &&
      (D2t(d) ||
        Bp(p) ||
        d.startsWith("~") ||
        /^[\\/]{2}/.test(d) ||
        (!H5.isAbsolute(d) && /(^|[\\/])\.\.([\\/]|$)/.test(d) && /[\\/]\*$/.test(p)) ||
        (e === "rmdir" &&
          /[\\/]\*$/.test(p) &&
          t.some((h) => /^--p/.test(h) || /^-[a-z]*p/.test(h))) ||
        (!H5.isAbsolute(d) && /\*[\\/]+$/.test(d) && /[\\/]\*$/.test(p)))
    )
      return Xqe(
        e,
        `Dangerous ${e} operation detected: '${p}'

This command's removal target cannot be statically resolved to a directory. This requires explicit approval and cannot be auto-allowed by permission rules.`,
        `on statically-unresolvable target: ${p}`,
      );
    if (!m || !/[*?[]/.test(g)) {
      let h = [f];
      if (f !== p) {
        let { resolvedPath: y } = jd(qt(), f);
        if (y !== f) h.push(y);
      }
      for (let y of h) {
        if (yct(y))
          return Xqe(
            e,
            `Dangerous ${e} operation detected: '${p}'

This command would remove a critical system directory. This requires explicit approval and cannot be auto-allowed by permission rules.`,
            `on critical path: ${p}`,
          );
        if ((m ? c : l).some((_) => dL(_, y)))
          return Xqe(
            e,
            `Dangerous ${e} operation detected: '${p}'

This command would remove a workspace directory (the working directory, an additional working directory, or one of their parent directories). This requires explicit approval and cannot be auto-allowed by permission rules.`,
            `on working directory or its ancestor: ${p}`,
          );
      }
    }
    if (m && /[\\/]\*$/.test(p)) {
      let h =
          On(p.split(/[\\/]+/), (b) => b && b !== ".") -
          On(f.split(/[\\/]+/), (b) => b && b !== "."),
        y = On(g.split(/[\\/]+/), (b) => /[*?[]/.test(b));
      if (h + y > 1)
        return Xqe(
          e,
          `Dangerous ${e} operation detected: '${p}'

This command's glob pattern traverses directories that cannot be statically enumerated. This requires explicit approval and cannot be auto-allowed by permission rules.`,
          `on statically-unresolvable target: ${p}`,
        );
    }
  }
  return {
    behavior: "passthrough",
    message: `No dangerous removals detected for ${e} command`,
  };
}
function S$a(e) {
  if (!e.includes("$") || !/\brm(?:dir)?\b/.test(e)) return null;
  for (let t of By(e)) {
    let n = t
      .replace(/\\\r?\n/g, " ")
      .replace(/`[^`]*`/g, " ")
      .trimStart();
    while (n.startsWith("(") || n.startsWith("{")) n = n.slice(1).trimStart();
    for (let r = ""; r !== n; )
      ((r = n), (n = n.replace(/\$\([^()]*\)/g, " ").replace(/(?<!\$)\([^()]*\)/g, " ")));
    n = n.replace(/(?<![<>&])&(?![<>&])/g, ";");
    for (let r of n.split(/[;|\n\r]|&&/)) {
      let o = r.trimStart(),
        s = o.match(eLp);
      if (s === null) continue;
      let i = s[1] === "rmdir" ? "rmdir" : "rm",
        a = o.slice(s[0].length).split(/\s+/);
      for (let l = 0; l < a.length; l++) {
        let c = a[l].replace(/[)\]}]+$/, "");
        if (c === "" || c.startsWith("-") || c.startsWith("'")) continue;
        if (/^[\d&]*[<>]/.test(c)) {
          if (/^(?:[0-9]+|&)?(?:>>?[|&]?|<<?<?|<>)$/.test(c)) l++;
          continue;
        }
        if (ZRp.test(c))
          return {
            command: i,
            target: c,
          };
      }
    }
  }
  return null;
}
function SH(e) {
  let t = [],
    n = !1,
    r = !1;
  for (let o of e)
    if (n || r) t.push(o);
    else if (o === "--") n = !0;
    else if (o === "-" || !o?.startsWith("-")) (t.push(o), (r = !0));
  return t;
}
function Ego(e) {
  return (t) => {
    let n = [],
      r = !1,
      o = !1;
    for (let s = 0; s < t.length; s++) {
      let i = t[s];
      if (i === void 0 || i === null) continue;
      if (r || o) n.push(i);
      else if (i === "--") r = !0;
      else if (i !== "-" && i.startsWith("-")) {
        if (e.has(i)) s++;
      } else (n.push(i), (o = !0));
    }
    return n;
  };
}
function y$a(e, t, n = []) {
  let r = [],
    o = !1,
    s = !1,
    i = !1;
  for (let a = 0; a < e.length; a++) {
    let l = e[a];
    if (l === void 0 || l === null) continue;
    if (!s && !i && l === "--") {
      s = !0;
      continue;
    }
    if (!s && !i && l !== "-" && l.startsWith("-")) {
      let c = l.indexOf("="),
        u = c >= 0 ? l.slice(0, c) : l;
      if (["-e", "--regexp", "-f", "--file"].includes(u)) {
        if (((o = !0), u === "-f" || u === "--file")) {
          let d = c >= 0 ? l.slice(c + 1) : e[a + 1];
          if (d) r.push(d);
        }
      }
      if (t.has(u) && c < 0) a++;
      continue;
    }
    if (i && !s) {
      let c = E$a(l, ["-f", "--file"]);
      if (c !== void 0) r.push(c);
    }
    if (((i = !0), !o)) {
      o = !0;
      continue;
    }
    r.push(l);
  }
  return r.length > 0 ? r : n;
}
function E$a(e, t) {
  if (!e.startsWith("-")) return;
  let n = e.indexOf("=");
  if (n >= 0) {
    if (t.includes(e.slice(0, n))) return e.slice(n + 1);
    return;
  }
  for (let r of t)
    if (r.length === 2 && r[0] === "-" && e.startsWith(r) && e !== r) return e.slice(2);
  return;
}
function rLp(e, t, n, r, o, s) {
  let i = Zpt[e],
    a = i(t),
    l = s ?? Jqe[e];
  if (l !== "read" && a.some((d) => Bp(d)))
    return {
      behavior: "ask",
      message: `${e} target contains command-substitution or untracked-variable output \u2014 the path is runtime-determined and cannot be validated`,
      decisionReason: {
        type: "other",
        reason: `${e} path argument is runtime-determined`,
        bashMissKind: "shell-expansion",
      },
    };
  let c = nLp[e];
  if (c && !c(t)) {
    if (e === "cd")
      return {
        behavior: "ask",
        message: `cd with two or more directory arguments requires manual approval. zsh's "cd OLD NEW" form substitutes OLD\u2192NEW in $PWD, producing a target path that cannot be statically validated.`,
        decisionReason: {
          type: "other",
          reason: "cd with two or more directory arguments",
          bashMissKind: "cd-multi-positional",
        },
      };
    return {
      behavior: "ask",
      message: `${e} with flags requires manual approval to ensure path safety. For security, Claude Code cannot automatically validate ${e} commands that use flags, as some flags like --target-directory=PATH can bypass path validation.`,
      decisionReason: {
        type: "other",
        reason: `${e} command with flags requires manual approval`,
        bashMissKind: "flag-validation",
      },
    };
  }
  if (o && l !== "read")
    return {
      behavior: "ask",
      message:
        "Commands that change directories and perform write operations require explicit approval to ensure paths are evaluated correctly. For security, Claude Code cannot automatically determine the final working directory when 'cd' is used in compound commands.",
      decisionReason: {
        type: "other",
        reason:
          "Compound command contains cd with write operation - manual approval required to prevent path resolution bypass",
        bashMissKind: "cd-compound-write",
      },
    };
  let u;
  for (let d of a) {
    let { allowed: p, resolvedPath: f, decisionReason: m, isInWorkingDir: g } = P2t(d, n, r, l);
    if (!p) {
      let h = Array.from(jj(r)),
        y = boo(h),
        b =
          m?.type === "other" || m?.type === "safetyCheck"
            ? m.reason
            : `${e} in '${f}' was blocked. For security, Claude Code may only ${tLp[e]} the allowed working directories for this session: ${y}.`;
      if (m?.type === "rule")
        return {
          behavior: "deny",
          message: b,
          decisionReason: m,
        };
      let _ = g === !0 && m === void 0,
        S = {
          behavior: "ask",
          message: b,
          blockedPath: f,
          decisionReason: m,
          bashAllowRuleOverridable: _,
        };
      if (_) {
        u ??= S;
        continue;
      }
      return S;
    }
  }
  if (u) return u;
  return {
    behavior: "passthrough",
    message: `Path validation passed for ${e} command`,
  };
}
function H$a(e, t) {
  return (n, r, o, s) => {
    let i = rLp(e, n, r, o, s, t);
    if (i.behavior === "deny") return i;
    if (e === "rm" || e === "rmdir") {
      let a = wjn(e, n, r, o, s);
      if (a.behavior !== "passthrough") return a;
    }
    if (i.behavior === "passthrough") return i;
    if (i.behavior === "ask") {
      let a = t ?? Jqe[e],
        l = [];
      if (i.blockedPath)
        if (a === "read") {
          let u = MB(i.blockedPath),
            d = v5e(u, "session");
          if (d) l.push(d);
        } else
          l.push({
            type: "addDirectories",
            directories: [MB(i.blockedPath)],
            destination: "session",
          });
      let c =
        o.mode === "plan" &&
        (o.prePlanMode === "auto" ||
          o.prePlanMode === "bypassPermissions" ||
          o.prePlanMode === "acceptEdits" ||
          o.prePlanMode === "dontAsk");
      if ((a === "write" || a === "create") && (o.mode === "default" || o.mode === "plan") && !c)
        l.push({
          type: "setMode",
          mode: "acceptEdits",
          destination: "session",
        });
      i.suggestions = l;
    }
    return i;
  };
}
function oLp(e) {
  return oA(e);
}
function sLp(e, t, n, r) {
  let o = A5(e),
    s = oLp(o);
  if (s.length === 0)
    return {
      behavior: "passthrough",
      message: "Empty command - no paths to validate",
    };
  let [i, ...a] = s,
    l = T$a(i);
  if (!l || !A$a.includes(l))
    return {
      behavior: "passthrough",
      message: `Command '${l}' is not a path-restricted command`,
    };
  let c = l === "sed" && Qpt(o) ? "read" : void 0;
  return H$a(l, c)(a, t, n, r);
}
function iLp(e, t, n, r) {
  let o = mEe(e.argv);
  if (o.length === 0)
    return {
      behavior: "passthrough",
      message: "Empty command - no paths to validate",
    };
  let [s, ...i] = o,
    a = T$a(s);
  if (!a || !A$a.includes(a))
    return {
      behavior: "passthrough",
      message: `Command '${a}' is not a path-restricted command`,
    };
  let l = a === "sed" && Qpt(A5(e.text)) ? "read" : void 0;
  return H$a(a, l)(i, t, n, r);
}
function T$a(e) {
  if (!e) return e;
  let t = e.replace(/^.*[\\/]/, "");
  return t === "rm" || t === "rmdir" ? t : e;
}
function aLp(e, t, n, r) {
  if (r && e.length > 0)
    return {
      behavior: "ask",
      message:
        "Commands that change directories and write via output redirection require explicit approval to ensure paths are evaluated correctly. For security, Claude Code cannot automatically determine the final working directory when 'cd' is used in compound commands.",
      decisionReason: {
        type: "other",
        reason:
          "Compound command contains cd with output redirection - manual approval required to prevent path resolution bypass",
        bashMissKind: "cd-compound-redirect",
      },
    };
  for (let { target: o } of e) {
    if (o === "/dev/null") continue;
    let { allowed: s, resolvedPath: i, decisionReason: a } = P2t(o, t, n, "create");
    if (!s) {
      let l = Array.from(jj(n)),
        c = boo(l),
        u =
          a?.type === "other" || a?.type === "safetyCheck"
            ? a.reason
            : a?.type === "rule"
              ? `Output redirection to '${i}' was blocked by a deny rule.`
              : `Output redirection to '${i}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${c}.`;
      if (a?.type === "rule")
        return {
          behavior: "deny",
          message: u,
          decisionReason: a,
        };
      return {
        behavior: "ask",
        message: u,
        blockedPath: i,
        decisionReason: a,
        suggestions: [
          {
            type: "addDirectories",
            directories: [MB(i)],
            destination: "session",
          },
        ],
      };
    }
  }
  return {
    behavior: "passthrough",
    message: "No unsafe redirections found",
  };
}
function Cjn(e, t, n, r, o, s) {
  if (!s && />>\s*>\s*\(|>\s*>\s*\(|<\s*\(/.test(e.command))
    return {
      behavior: "ask",
      message:
        "Process substitution (>(...) or <(...)) can execute arbitrary commands and requires manual approval",
      decisionReason: {
        type: "other",
        reason: "Process substitution requires manual approval",
        bashMissKind: "process-substitution",
      },
    };
  let i = o ? lLp(o) : void 0,
    {
      redirections: a,
      hasDangerousRedirection: l,
      dangerousRedirectionReason: c,
    } = i ?? vde(e.command);
  if (l) {
    let m;
    if (i !== void 0) {
      let h = [...i.denyCheckOutputRedirections, ...a];
      for (let y of h) {
        let b = [],
          _ = LR(y.target);
        if (_ !== y.target)
          b.push({
            path: _,
            cwdIndependent: !0,
          });
        if (!y.target.startsWith("~"))
          b.push({
            path: H5.resolve(t, y.target),
            cwdIndependent: H5.isAbsolute(y.target),
          });
        for (let S of b) {
          let A = i_(S.path);
          for (let v of A) {
            let C = Fv(v, n, "edit", "deny");
            if (C !== null) {
              if (S.cwdIndependent || !r)
                return {
                  behavior: "deny",
                  message: `Output redirection to '${v}' was blocked by a deny rule.`,
                  decisionReason: {
                    type: "rule",
                    rule: C,
                  },
                };
            }
          }
          if (
            m === void 0 ||
            (m.decisionReason?.type === "safetyCheck" && m.decisionReason.classifierApprovable)
          ) {
            let v = LRe(S.path, A);
            if (!v.safe && (m === void 0 || !v.classifierApprovable))
              m = {
                behavior: "ask",
                message: v.message,
                decisionReason: {
                  type: "safetyCheck",
                  reason: v.message,
                  classifierApprovable: v.classifierApprovable,
                },
              };
          }
        }
      }
    }
    if (m !== void 0) return m;
    let g =
      c === "network_device"
        ? "Redirect involving /dev/tcp or /dev/udp opens a network connection"
        : c === "unc_path"
          ? "Redirect target is a Windows UNC path \u2014 opening it triggers an SMB connection"
          : "Shell expansion syntax in paths requires manual approval";
    return {
      behavior: "ask",
      message: g,
      decisionReason: {
        type: "other",
        reason: g,
        bashMissKind:
          c === "network_device" || c === "unc_path" ? "net-redirect" : "shell-expansion",
      },
    };
  }
  let u;
  function d(m) {
    if (m.behavior === "deny") return m;
    if (m.behavior === "ask") {
      if (m.bashAllowRuleOverridable) {
        u ??= m;
        return;
      }
      return m;
    }
    return;
  }
  let p = aLp(a, t, n, r),
    f = d(p);
  if (f) return f;
  if (s)
    for (let m of s) {
      let g = d(iLp(m, t, n, r));
      if (g) return g;
    }
  else {
    let m = By(e.command);
    for (let g of m) {
      let h = d(sLp(g, t, n, r));
      if (h) return h;
    }
  }
  if (u) return u;
  return {
    behavior: "passthrough",
    message: "All path commands validated successfully",
  };
}
function lLp(e) {
  let t = [],
    n = [],
    r = !1,
    o;
  for (let s of e) {
    if (/^\/dev\/(tcp|udp)\//.test(s.target)) {
      ((r = !0), (o = "network_device"));
      continue;
    }
    if (j0(s.target.replace(/\\/g, "/"), !0)) {
      if (((r = !0), o !== "network_device")) o = "unc_path";
      continue;
    }
    if (
      (s.op === ">" ||
        s.op === ">|" ||
        s.op === "&>" ||
        s.op === ">>" ||
        s.op === "&>>" ||
        s.op === ">&") &&
      (s.target.startsWith("~") || Kie(s.target) !== -1)
    ) {
      if (((r = !0), o !== "network_device" && o !== "unc_path")) o = "shell_expansion";
      n.push({
        target: s.target,
        operator: s.op === ">>" || s.op === "&>>" ? ">>" : ">",
      });
      continue;
    }
    switch (s.op) {
      case ">":
      case ">|":
      case "&>":
        t.push({
          target: s.target,
          operator: ">",
        });
        break;
      case ">>":
      case "&>>":
        t.push({
          target: s.target,
          operator: ">>",
        });
        break;
      case ">&":
        if (!/^\d+$/.test(s.target))
          t.push({
            target: s.target,
            operator: ">",
          });
        break;
      case "<":
      case "<&":
      case "<<":
      case "<<<":
        break;
    }
  }
  return {
    redirections: t,
    hasDangerousRedirection: r,
    dangerousRedirectionReason: o,
    denyCheckOutputRedirections: n,
  };
}
function cLp(e) {
  let t = 1;
  while (t < e.length) {
    let n = e[t],
      r = e[t + 1];
    if (n === "--foreground" || n === "--preserve-status" || n === "--verbose") t++;
    else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(n)) t++;
    else if ((n === "--kill-after" || n === "--signal") && r && _$a.test(r)) t += 2;
    else if (n === "--") {
      t++;
      break;
    } else if (n.startsWith("--")) return -1;
    else if (n === "-v") t++;
    else if ((n === "-k" || n === "-s") && r && _$a.test(r)) t += 2;
    else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(n)) t++;
    else if (n.startsWith("-")) return -1;
    else break;
  }
  return t;
}
function uLp(e) {
  let t = 1;
  while (t < e.length) {
    let n = e[t];
    if (/^-[ioe]$/.test(n) && e[t + 1]) t += 2;
    else if (/^-[ioe]./.test(n)) t++;
    else if (/^--(input|output|error)=/.test(n)) t++;
    else if (n.startsWith("-")) return -1;
    else break;
  }
  return t > 1 && t < e.length ? t : -1;
}
function dLp(e) {
  let t = 1;
  while (t < e.length) {
    let n = e[t];
    if (n.includes("=") && !n.startsWith("-")) t++;
    else if (n === "-i" || n === "-0" || n === "-v") t++;
    else if (n === "-u" && e[t + 1]) t += 2;
    else if (n.startsWith("-")) return -1;
    else break;
  }
  return t < e.length ? t : -1;
}
function mEe(e) {
  let t = e;
  for (;;) {
    let n = t[0]?.replace(/^.*[\\/]/, ""),
      r =
        n === "time" ||
        n === "nohup" ||
        n === "timeout" ||
        n === "nice" ||
        n === "stdbuf" ||
        n === "env" ||
        n === "command"
          ? n
          : t[0];
    if (r === "time" || r === "nohup") t = t.slice(t[1] === "--" ? 2 : 1);
    else if (r === "timeout") {
      let o = cLp(t);
      if (o < 0 || !t[o] || !/^\d+(?:\.\d+)?[smhd]?$/.test(t[o])) return t;
      t = t.slice(o + 1);
    } else if (r === "nice") {
      if (t[1] === "-n" && t[2] && /^-?\d+$/.test(t[2])) t = t.slice(t[3] === "--" ? 4 : 3);
      else if (t[1] && /^-\d+$/.test(t[1])) t = t.slice(t[2] === "--" ? 3 : 2);
      else t = t.slice(t[1] === "--" ? 2 : 1);
    } else if (r === "stdbuf") {
      let o = uLp(t);
      if (o < 0) return t;
      t = t.slice(o);
    } else if (r === "env") {
      let o = dLp(t);
      if (o < 0) return t;
      t = t.slice(o);
    } else if (r === "command") {
      let o = 1;
      while (t[o] !== void 0 && /^-p+$/.test(t[o])) o++;
      if (t[o] === "--") o++;
      if (o >= t.length || t[o].startsWith("-")) return t;
      t = t.slice(o);
    } else if (t[0] === "builtin") {
      let o = t[1] === "--" ? 2 : 1;
      if (o >= t.length) return t;
      t = t.slice(o);
    } else if (t[0] === "noglob") {
      if (t.length <= 1) return t;
      t = t.slice(1);
    } else return t;
  }
}
var b$a, H5, ZRp, eLp, Zpt, A$a, tLp, Jqe, nLp, _$a;
