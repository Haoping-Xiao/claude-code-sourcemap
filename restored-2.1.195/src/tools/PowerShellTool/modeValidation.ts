// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nTl
// matched 2.1.88 source: src/tools/PowerShellTool/modeValidation.ts
// class=modified  jaccard=0.1216  score=0.3029  fileCov=0.1689
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nTl] deps: bde, Wbt, dze
Sbf = new Set(["set-content", "add-content", "remove-item", "clear-content"]);
Ebf = new Set(["symboliclink", "junction", "hardlink"]);
function lJn(e, t) {
  for (let n of t) if (n === e || (e.length > 1 && n.startsWith(e))) return true;
  return false;
}
function YLo(e) {
  if (Vt() !== "windows") return e;
  return e
    .split(/([/\\])/)
    .map((t, n) => {
      if (n % 2 !== 0) return t;
      return iJn(t);
    })
    .join("");
}
function pJn(e) {
  return Mk(hq(e));
}
function KLo(e) {
  if (/['"\u2018-\u201F]/.test(e)) return true;
  let t = pJn(e);
  return (
    t.includes(",") ||
    t.startsWith("(") ||
    t.startsWith("[") ||
    t.includes("`") ||
    t.includes("@(") ||
    t.startsWith("@") ||
    t.includes("$")
  );
}
function cJn(e) {
  let t = e.length;
  if (t <= zLo) return e.map((r) => `'${r}'`).join(", ");
  return `${e
    .slice(0, zLo)
    .map((r) => `'${r}'`)
    .join(", ")}, and ${t - zLo} more`;
}
function mJn(e) {
  if (e === "~" || e.startsWith("~/") || e.startsWith("~\\")) return oTl.homedir() + e.slice(1);
  return e;
}
function cKt(e) {
  let t = Mk(e),
    n = t.indexOf("::");
  if (n >= 0) t = t.slice(n + 2);
  if (((t = mJn(t).replace(/\\/g, "/")), $N.isAbsolute(t))) t = $N.normalize(t);
  return yct(t);
}
function mze(e) {
  return {
    behavior: "deny",
    message: `Remove-Item on system path '${e}' is blocked. This path is protected from removal.`,
    decisionReason: {
      type: "safetyCheck",
      reason: "Removal targets a protected system path",
      classifierApprovable: false,
    },
  };
}
function Hbf(e, t, n, r) {
  let o = n === "read" ? "read" : "edit",
    s = r ?? i_(e);
  for (let l of s) {
    let c = Fv(l, t, o, "deny");
    if (c !== null)
      return {
        allowed: false,
        decisionReason: {
          type: "rule",
          rule: c,
        },
      };
  }
  if (n !== "read") {
    let l = jWe(e, {}, s);
    if (l.behavior === "deny")
      return {
        allowed: false,
        decisionReason: FWe(l.decisionReason),
      };
    if (l.behavior === "allow")
      return {
        allowed: true,
        decisionReason: l.decisionReason,
      };
  }
  if (n !== "read") {
    let l = LRe(e, s, void 0, t.isRemoteMode, t.trustedNetworkDirectories);
    if (!l.safe)
      return {
        allowed: false,
        decisionReason: {
          type: "safetyCheck",
          reason: l.message,
          classifierApprovable: l.classifierApprovable,
        },
      };
  }
  let i = JU(e, t, s);
  if (i) {
    if (n === "read" || t.mode === "acceptEdits")
      return {
        allowed: true,
      };
  }
  if (n === "read") {
    let l = GWe(e, {}, s);
    if (l.behavior === "deny")
      return {
        allowed: false,
        decisionReason: FWe(l.decisionReason),
      };
    if (l.behavior === "allow")
      return {
        allowed: true,
        decisionReason: l.decisionReason,
      };
  }
  if (n !== "read" && !i && Soo(e))
    return {
      allowed: true,
      decisionReason: {
        type: "other",
        reason: "Path is in sandbox write allowlist",
      },
    };
  let a = DRe(s, t, o);
  if (a !== null)
    return {
      allowed: true,
      decisionReason: {
        type: "rule",
        rule: a,
      },
    };
  return {
    allowed: false,
  };
}
function fJn(e, t, n, r) {
  if (!e || e.includes("\x00")) return null;
  let o = mJn(YLo(e)),
    s = $N.isAbsolute(o) ? o : $N.resolve(t, o),
    { resolvedPath: i } = jd(qt(), s),
    l = Fv(i, n, r === "read" ? "read" : "edit", "deny");
  return l
    ? {
        resolvedPath: i,
        rule: l,
      }
    : null;
}
function uJn(e, t, n, r) {
  let s = mJn(Mk(e)).replaceAll("\\", "/");
  if (/^~[^/]/.test(s))
    return {
      allowed: false,
      resolvedPath: s,
      decisionReason: {
        type: "other",
        reason:
          "Paths beginning with ~user cannot be statically validated and require manual approval",
      },
    };
  if (s.includes("`")) {
    let d = MN(s),
      p = fJn(d, t, n, r);
    if (p)
      return {
        allowed: false,
        resolvedPath: p.resolvedPath,
        decisionReason: {
          type: "rule",
          rule: p.rule,
        },
      };
    return {
      allowed: false,
      resolvedPath: s,
      decisionReason: {
        type: "other",
        reason:
          "Backtick escape characters in paths cannot be statically validated and require manual approval",
      },
    };
  }
  if (s.includes("::")) {
    let d = s.slice(s.indexOf("::") + 2),
      p = fJn(d, t, n, r);
    if (p)
      return {
        allowed: false,
        resolvedPath: p.resolvedPath,
        decisionReason: {
          type: "rule",
          rule: p.rule,
        },
      };
    return {
      allowed: false,
      resolvedPath: s,
      decisionReason: {
        type: "other",
        reason:
          "Module-qualified provider paths (::) cannot be statically validated and require manual approval",
      },
    };
  }
  if (Vt() === "windows" && /^[a-z]:(?![/\\])/i.test(s))
    return {
      allowed: false,
      resolvedPath: s,
      decisionReason: {
        type: "other",
        reason: `Path '${s}' is drive-relative (resolves against the per-drive current directory, which cannot be statically validated) and requires manual approval`,
      },
    };
  if (((s = YLo(s)), s.startsWith("//") || /DavWWWRoot/i.test(s) || /@SSL@/i.test(s)))
    return {
      allowed: false,
      resolvedPath: s,
      decisionReason: {
        type: "other",
        reason:
          "UNC paths are blocked because they can trigger network requests and credential leakage",
      },
    };
  if (s.includes("$") || s.includes("%"))
    return {
      allowed: false,
      resolvedPath: s,
      decisionReason: {
        type: "other",
        reason: "Variable expansion syntax in paths requires manual approval",
      },
    };
  if ((Vt() === "windows" ? /^[a-z0-9]{2,}:/i : /^[a-z0-9]+:/i).test(s))
    return {
      allowed: false,
      resolvedPath: s,
      decisionReason: {
        type: "other",
        reason: `Path '${s}' uses a non-filesystem provider and requires manual approval`,
      },
    };
  if (D2t(s)) {
    let d = fJn(s, t, n, r);
    if (d)
      return {
        allowed: false,
        resolvedPath: d.resolvedPath,
        decisionReason: {
          type: "rule",
          rule: d.rule,
        },
      };
    return {
      allowed: false,
      resolvedPath: $N.resolve(t, s),
      decisionReason: {
        type: "other",
        reason:
          "Path contains '..' traversal after a directory segment, which may follow a symlink outside the working directory",
      },
    };
  }
  if (Kie(s) !== -1) {
    if (r === "write" || r === "create")
      return {
        allowed: false,
        resolvedPath: s,
        decisionReason: {
          type: "other",
          reason:
            "Glob patterns are not allowed in write operations. Please specify an exact file path.",
        },
      };
    if (kae(s)) {
      let h = $N.isAbsolute(s) ? s : $N.resolve(t, s),
        { resolvedPath: y } = jd(qt(), h),
        b = r === "read" ? "read" : "edit";
      for (let _ of i_(y)) {
        let S = Fv(_, n, b, "deny");
        if (S !== null)
          return {
            allowed: false,
            resolvedPath: y,
            decisionReason: {
              type: "rule",
              rule: S,
            },
          };
      }
      return {
        allowed: false,
        resolvedPath: y,
        decisionReason: {
          type: "other",
          reason:
            "Glob patterns in paths cannot be statically validated \u2014 symlinks inside the glob expansion are not examined. Requires manual approval.",
        },
      };
    }
    let d = Tbf(s),
      p = $N.isAbsolute(d) ? d : $N.resolve(t, d),
      { resolvedPath: f } = jd(qt(), p),
      g = Fv(f, n, r === "read" ? "read" : "edit", "deny");
    if (g !== null)
      return {
        allowed: false,
        resolvedPath: f,
        decisionReason: {
          type: "rule",
          rule: g,
        },
      };
    return {
      allowed: false,
      resolvedPath: f,
      decisionReason: {
        type: "other",
        reason:
          "Glob patterns in paths cannot be statically validated \u2014 symlinks inside the glob expansion are not examined. Requires manual approval.",
      },
    };
  }
  let a = $N.isAbsolute(s) ? s : $N.resolve(t, s),
    { resolvedPath: l, isCanonical: c } = jd(qt(), a),
    u = Hbf(l, n, r, c ? [l] : void 0);
  return {
    allowed: u.allowed,
    resolvedPath: l,
    decisionReason: u.decisionReason,
  };
}
function Tbf(e) {
  let t = Kie(e);
  if (t === -1) return e;
  let n = e.substring(0, t),
    r = Math.max(n.lastIndexOf("/"), n.lastIndexOf("\\"));
  if (r === -1) return ".";
  return n.substring(0, r + 1) || "/";
}
function rTl(e) {
  let t = zm(e.name),
    n = dJn[t];
  if (!n)
    return {
      paths: [],
      operationType: "read",
      hasUnvalidatablePathArg: false,
      optionalWrite: false,
    };
  let r = [...n.knownSwitches, ...NLo],
    o = [...n.knownValueParams, ...BLo],
    s = [],
    i = e.args,
    a = e.elementTypes,
    l = false,
    c = 0,
    u = n.positionalSkip ?? 0;
  function d(p) {
    if (!a) return;
    let f = a[p + 1];
    if (f && !vbf.has(f)) l = true;
  }
  for (let p = 0; p < i.length; p++) {
    let f = i[p];
    if (!f) continue;
    let m = a ? a[p + 1] : void 0;
    if (LDe(f, m)) {
      let g = "-" + f.slice(1),
        h = g.indexOf(":", 1),
        b = (h > 0 ? g.substring(0, h) : g).toLowerCase();
      if (lJn(b, n.pathParams)) {
        let _;
        if (h > 0) {
          let S = f.substring(h + 1);
          if (KLo(S)) l = true;
          _ = pJn(S);
        } else {
          let S = i[p + 1],
            A = a ? a[p + 2] : void 0;
          if (S && !LDe(S, A)) ((_ = S), d(p + 1), p++);
        }
        if (_) s.push(_);
      } else if (n.leafOnlyPathParams && lJn(b, n.leafOnlyPathParams)) {
        let _;
        if (h > 0) {
          let S = f.substring(h + 1);
          if (KLo(S)) l = true;
          _ = pJn(S);
        } else {
          let S = i[p + 1],
            A = a ? a[p + 2] : void 0;
          if (S && !LDe(S, A)) ((_ = S), d(p + 1), p++);
        }
        if (_ !== void 0)
          if (_.includes("/") || _.includes("\\") || _ === "." || _ === "..") l = true;
          else s.push(_);
      } else if (lJn(b, r));
      else if (lJn(b, o)) {
        if (h > 0) {
          if (KLo(f.substring(h + 1))) l = true;
        } else {
          let _ = i[p + 1],
            S = a ? a[p + 2] : void 0;
          if (_ && !LDe(_, S)) (d(p + 1), p++);
        }
      } else if (((l = true), h > 0)) {
        let _ = f.substring(h + 1);
        s.push(pJn(_));
      }
      continue;
    }
    if (c < u) {
      c++;
      continue;
    }
    (c++, d(p), s.push(f));
  }
  return {
    paths: s,
    operationType: n.operationType,
    hasUnvalidatablePathArg: l,
    optionalWrite: n.optionalWrite ?? false,
  };
}
function sTl(e, t, n, r = false) {
  if (!t.valid)
    return {
      behavior: "passthrough",
      message: "Cannot validate paths for unparsed command",
    };
  let o;
  for (let s of t.statements) {
    let i = Cbf(s, n, r);
    if (i.behavior === "deny") return i;
    if (i.behavior === "ask" && !o) o = i;
  }
  return (
    o ?? {
      behavior: "passthrough",
      message: "All path constraints validated successfully",
    }
  );
}
function Cbf(e, t, n = false) {
  let r = $t(),
    o;
  if (n)
    o = {
      behavior: "ask",
      message:
        "Compound command changes working directory (Set-Location/Push-Location/Pop-Location/New-PSDrive) \u2014 relative paths cannot be validated against the original cwd and require manual approval",
      decisionReason: {
        type: "other",
        reason:
          "Compound command contains cd with path operation \u2014 manual approval required to prevent path resolution bypass",
      },
    };
  let s = false,
    i,
    a = false;
  for (let l of e.commands) {
    if (l.elementType !== "CommandAst") {
      ((s = true), (i = l.text));
      continue;
    }
    let { paths: c, operationType: u, hasUnvalidatablePathArg: d, optionalWrite: p } = rTl(l),
      f = zm(l.name),
      m = dJn[f] !== void 0,
      g = a;
    if (!wbf.has(f)) a = true;
    if (s) {
      let y = zm(l.name);
      if (i !== void 0) {
        let b = Mk(i),
          _ = fJn(b, r, t, u);
        if (_)
          return {
            behavior: "deny",
            message: `${y} targeting '${_.resolvedPath}' was blocked by a deny rule`,
            decisionReason: {
              type: "rule",
              rule: _.rule,
            },
          };
      }
      o ??= {
        behavior: "ask",
        message: `${y} receives its path from a pipeline expression source that cannot be statically validated and requires manual approval`,
      };
    }
    if (d) {
      let y = zm(l.name);
      o ??= {
        behavior: "ask",
        message: `${y} uses a parameter or complex path expression (array literal, subexpression, unknown parameter, etc.) that cannot be statically validated and requires manual approval`,
      };
    }
    if (u !== "read" && !p && c.length === 0 && dJn[zm(l.name)]) {
      let y = zm(l.name);
      o ??= {
        behavior: "ask",
        message: `${y} is a write operation but no target path could be determined; requires manual approval`,
      };
      continue;
    }
    if (g && m)
      o ??= {
        behavior: "ask",
        message: `${f} may receive a path from an upstream pipeline command whose output cannot be statically validated and requires manual approval`,
      };
    let h = zm(l.name) === "remove-item";
    if (h) {
      if (
        l.args.some((b) => {
          let _ = (b.length > 0 ? "-" + b.slice(1) : b).toLowerCase(),
            S = _.indexOf(":"),
            A = S > 0 ? _.slice(0, S) : _;
          return A.length >= 2 && "-recurse".startsWith(A);
        })
      ) {
        let b = ym(r);
        for (let _ of c) {
          let S = mJn(YLo(_)).replace(/\\/g, "/"),
            A = $N.isAbsolute(S) ? $N.resolve(S) : $N.resolve(r, S),
            v = ym(A);
          if (v === b || b.startsWith(v + "/") || b.startsWith(v + "\\")) {
            o ??= {
              behavior: "ask",
              message: `Remove-Item -Recurse targeting '${_}' would delete the working directory including .git and .claude \u2014 requires manual approval`,
            };
            break;
          }
        }
      }
    }
    for (let y of c) {
      if (h && cKt(y)) return mze(y);
      let { allowed: b, resolvedPath: _, decisionReason: S } = uJn(y, r, t, u);
      if (h && yct(_)) return mze(_);
      if (!b) {
        let A = zm(l.name),
          v = Array.from(jj(t)),
          C = cJn(v),
          x =
            S?.type === "other" || S?.type === "safetyCheck"
              ? S.reason
              : `${A} targeting '${_}' was blocked. For security, Claude Code may only access files in the allowed working directories for this session: ${C}.`;
        if (S?.type === "rule")
          return {
            behavior: "deny",
            message: x,
            decisionReason: S,
          };
        let I = [];
        if (_)
          if (u === "read") {
            let k = v5e(MB(_), "session");
            if (k) I.push(k);
          } else
            I.push({
              type: "addDirectories",
              directories: [MB(_)],
              destination: "session",
            });
        if ((u === "write" || u === "create") && (t.mode === "default" || t.mode === "plan"))
          I.push({
            type: "setMode",
            mode: "acceptEdits",
            destination: "session",
          });
        o ??= {
          behavior: "ask",
          message: x,
          blockedPath: _,
          decisionReason: S,
          suggestions: I,
        };
      }
    }
  }
  if (e.nestedCommands)
    for (let l of e.nestedCommands) {
      let { paths: c, operationType: u, hasUnvalidatablePathArg: d, optionalWrite: p } = rTl(l);
      if (d) {
        let m = zm(l.name);
        o ??= {
          behavior: "ask",
          message: `${m} uses a parameter or complex path expression (array literal, subexpression, unknown parameter, etc.) that cannot be statically validated and requires manual approval`,
        };
      }
      if (u !== "read" && !p && c.length === 0 && dJn[zm(l.name)]) {
        let m = zm(l.name);
        o ??= {
          behavior: "ask",
          message: `${m} is a write operation but no target path could be determined; requires manual approval`,
        };
        continue;
      }
      let f = zm(l.name) === "remove-item";
      for (let m of c) {
        if (f && cKt(m)) return mze(m);
        let { allowed: g, resolvedPath: h, decisionReason: y } = uJn(m, r, t, u);
        if (f && yct(h)) return mze(h);
        if (!g) {
          let b = zm(l.name),
            _ = Array.from(jj(t)),
            S = cJn(_),
            A =
              y?.type === "other" || y?.type === "safetyCheck"
                ? y.reason
                : `${b} targeting '${h}' was blocked. For security, Claude Code may only access files in the allowed working directories for this session: ${S}.`;
          if (y?.type === "rule")
            return {
              behavior: "deny",
              message: A,
              decisionReason: y,
            };
          let v = [];
          if (h)
            if (u === "read") {
              let C = v5e(MB(h), "session");
              if (C) v.push(C);
            } else
              v.push({
                type: "addDirectories",
                directories: [MB(h)],
                destination: "session",
              });
          if ((u === "write" || u === "create") && (t.mode === "default" || t.mode === "plan"))
            v.push({
              type: "setMode",
              mode: "acceptEdits",
              destination: "session",
            });
          o ??= {
            behavior: "ask",
            message: A,
            blockedPath: h,
            decisionReason: y,
            suggestions: v,
          };
        }
      }
      if (s)
        o ??= {
          behavior: "ask",
          message: `${zm(l.name)} appears inside a control-flow or chain statement where piped expression sources cannot be statically validated and requires manual approval`,
        };
    }
  if (e.nestedCommands) {
    for (let l of e.nestedCommands)
      if (l.redirections)
        for (let c of l.redirections) {
          if (c.isMerging) continue;
          if (!c.target) continue;
          if (Opt(c.target)) continue;
          let { allowed: u, resolvedPath: d, decisionReason: p } = uJn(c.target, r, t, "create");
          if (!u) {
            let f = Array.from(jj(t)),
              m = cJn(f),
              g =
                p?.type === "other" || p?.type === "safetyCheck"
                  ? p.reason
                  : `Output redirection to '${d}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${m}.`;
            if (p?.type === "rule")
              return {
                behavior: "deny",
                message: g,
                decisionReason: p,
              };
            o ??= {
              behavior: "ask",
              message: g,
              blockedPath: d,
              decisionReason: p,
              suggestions: [
                {
                  type: "addDirectories",
                  directories: [MB(d)],
                  destination: "session",
                },
              ],
            };
          }
        }
  }
  if (e.redirections)
    for (let l of e.redirections) {
      if (l.isMerging) continue;
      if (!l.target) continue;
      if (Opt(l.target)) continue;
      let { allowed: c, resolvedPath: u, decisionReason: d } = uJn(l.target, r, t, "create");
      if (!c) {
        let p = Array.from(jj(t)),
          f = cJn(p),
          m =
            d?.type === "other" || d?.type === "safetyCheck"
              ? d.reason
              : `Output redirection to '${u}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${f}.`;
        if (d?.type === "rule")
          return {
            behavior: "deny",
            message: m,
            decisionReason: d,
          };
        o ??= {
          behavior: "ask",
          message: m,
          blockedPath: u,
          decisionReason: d,
          suggestions: [
            {
              type: "addDirectories",
              directories: [MB(u)],
              destination: "session",
            },
          ],
        };
      }
    }
  return (
    o ?? {
      behavior: "passthrough",
      message: "All path constraints validated successfully",
    }
  );
}
var oTl,
  $N,
  zLo = 5,
  dJn,
  vbf,
  wbf;
