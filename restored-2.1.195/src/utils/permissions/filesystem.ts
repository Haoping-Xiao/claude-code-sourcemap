// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KI
// matched 2.1.88 source: src/utils/permissions/filesystem.ts
// class=modified  jaccard=0.1764  score=0.3882  fileCov=0.2443
// note: deminified; 37 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: untypeDenyReasonForAskPropagation, toPosixPath, relativePath, patternWithRoot, pathInWorkingPath, pathInAllowedWorkingPath, normalizeTrustedSymlink, normalizePatternsToPath, normalizeCaseForComparison, matchingRuleForInput, matchingAllowRuleForAllPaths, matchesPathRule, isUntrustedUncPath, isScratchpadEnabled, isClaudeSettingsPath, getScratchpadDir, getResolvedWorkingDirPaths, getProjectTempDir, getFileReadIgnorePatterns, getClaudeTempDirName, getClaudeTempDir, getClaudeSkillSco …
// [unwrapped __esm module KI] deps: Qi, ft, db, Lo, je, fn, At, iYr, ys, vn, dr, Ost
(($sc = require("crypto")), (Lz = require("path")));
gS = Cn(function () {
  let n = Dr().plansDirectory,
    r;
  if (n) {
    let o = $t(),
      s = Lz.resolve(o, n);
    if (!s.startsWith(o + Lz.sep) && s !== o)
      (T(`plansDirectory must be within project root: ${n}`, {
        level: "error",
      }),
        (r = Lz.join(tr(), "plans")));
    else r = s;
  } else r = Lz.join(tr(), "plans");
  try {
    qt().mkdirSync(r);
  } catch (o) {
    T(`Failed to create plans directory ${r}: ${o}`, {
      level: "error",
    });
  }
  return r;
});
function normalizeCaseForComparison(e) {
  return e
    .toLowerCase()
    .replace(/\u0131/g, "i")
    .replace(/\u017f/g, "s");
}
function getClaudeSkillScope(e) {
  let t = ds(e),
    n = normalizeCaseForComparison(t),
    r = [
      {
        dir: ds(Rl.join(yr(), ".claude", "skills")),
        prefix: "/.claude/skills/",
      },
      {
        dir: ds(Rl.join(sZt.homedir(), ".claude", "skills")),
        prefix: "~/.claude/skills/",
      },
    ];
  for (let { dir: o, prefix: s } of r) {
    let i = normalizeCaseForComparison(o);
    for (let a of [Rl.sep, "/"])
      if (n.startsWith(i + a.toLowerCase())) {
        let l = t.slice(o.length + a.length),
          c = l.indexOf("/"),
          u = Rl.sep === "\\" ? l.indexOf("\\") : -1,
          d = c === -1 ? u : u === -1 ? c : Math.min(c, u);
        if (d <= 0) return null;
        let p = l.slice(0, d);
        if (!p || p === "." || p.includes("..")) return null;
        if (/[*?[\]]/.test(p) || p.includes("\\")) return null;
        let f = l.slice(d + 1).split(/[/\\]/);
        if (w7(p) === ".claude" || f.some((m) => w7(m) === ".claude")) return null;
        return {
          skillName: p,
          pattern: s + p + "/**",
        };
      }
  }
  return null;
}
function relativePath(e, t) {
  if (Vt() === "windows") {
    let n = TD(e),
      r = TD(t);
    return Rl.posix.relative(n, r);
  }
  return Rl.posix.relative(e, t);
}
function toPosixPath(e) {
  if (Vt() === "windows") return TD(e);
  return e;
}
function fem() {
  let e = fv.map((t) => xg(t)).filter((t) => t !== void 0);
  if (Vt() === "wsl" && Vee()) e.push(Rl.join(NO, "managed-settings.json"));
  return e;
}
function isClaudeSettingsPath(e) {
  let t = ds(e),
    n = normalizeCaseForComparison(t);
  if (
    n.endsWith(`${Rl.sep}.claude${Rl.sep}settings.json`) ||
    n.endsWith(`${Rl.sep}.claude${Rl.sep}settings.local.json`)
  )
    return true;
  return fem().some((r) => normalizeCaseForComparison(r) === n);
}
function mem(e) {
  if (isClaudeSettingsPath(e)) return true;
  let t = Rl.join(yr(), ".claude", "commands"),
    n = Rl.join(yr(), ".claude", "agents"),
    r = Rl.join(yr(), ".claude", "skills");
  return pathInWorkingPath(e, t) || pathInWorkingPath(e, n) || pathInWorkingPath(e, r);
}
function qsc(e) {
  let t = jAt();
  if (!t) return false;
  let n = Rl.normalize(e);
  if (Rl.dirname(n) !== Rl.normalize(gS())) return false;
  let r = Rl.basename(n);
  return r === `${t}.md` || (r.startsWith(`${t}-agent-`) && r.endsWith(".md"));
}
function gem(e) {
  let t = Rl.normalize(e);
  return t.startsWith(b0n()) && t.endsWith(".js");
}
function hem(e) {
  let t = Jh($t()),
    n = Rl.normalize(e);
  return n === t || n.startsWith(t + Rl.sep);
}
function isScratchpadEnabled() {
  if (at("tengu_scratch", false)) return true;
  {
    let { isArtifactToolEligible: e } = (Nue(), ro(KOn));
    return e();
  }
  return false;
}
function getClaudeTempDirName() {
  if (Vt() === "windows") return "claude";
  return `claude-${process.getuid?.() ?? 0}`;
}
function getProjectTempDir() {
  return Rl.join(getClaudeTempDir(), LE(yr())) + Rl.sep;
}
function getScratchpadDir() {
  return _em(Rt());
}
async function ensureScratchpadDir() {
  if (!isScratchpadEnabled()) return null;
  let e = getScratchpadDir();
  if (e === null) return null;
  return (
    await qt().mkdir(e, {
      mode: 448,
    }),
    e
  );
}
function Vsc(e) {
  if (!isScratchpadEnabled()) return false;
  let t = getScratchpadDir();
  if (t === null) return false;
  let n = Rl.normalize(e),
    r = normalizeCaseForComparison(n),
    o = normalizeCaseForComparison(t),
    s = o + Rl.sep;
  return r === o || (r.startsWith(s) && !H3e(r, s, DANGEROUS_FILES_LC));
}
function zsc(e) {
  let t = normalizeCaseForComparison(Rl.normalize(e)),
    n = normalizeCaseForComparison(Rl.join(tr(), "jobs") + Rl.sep);
  if (!t.startsWith(n)) return false;
  let o = t.slice(n.length).split(Rl.sep);
  return o.length === 2 && o[1].startsWith("adopt.json");
}
function Ksc(e) {
  if (process.env.CLAUDE_CODE_SESSION_KIND !== "bg") return false;
  let t = process.env.CLAUDE_JOB_DIR;
  if (!t) return false;
  let n = Rl.join(tr(), "jobs") + Rl.sep,
    r = Rl.normalize(t);
  if (!r.startsWith(n)) return false;
  let o = r + Rl.sep + "tmp" + Rl.sep;
  if (!normalizeCaseForComparison(e).startsWith(normalizeCaseForComparison(o))) return false;
  return !H3e(e, o, DANGEROUS_FILES_LC);
}
function eNe(e, t) {
  if (!t || t.size === 0) return false;
  for (let n of t.values())
    for (let r of n) {
      if (Fc(e) !== Fc(r)) continue;
      if (pathInWorkingPath(e, r)) return true;
    }
  return false;
}
function isUntrustedUncPath(e, t) {
  return Fc(e) && !qp(e) && !eNe(e, t);
}
function Ysc(e) {
  let t = 0;
  for (let n of getResolvedWorkingDirPaths(yr())) {
    let r = ds(n).split(Rl.sep);
    if (r.length > 1 && r.at(-1) === "") r.pop();
    let o = 0;
    while (
      o < r.length &&
      o < e.length &&
      (e[o] === r[o] ||
        (o === 0 && /^[a-z]:$/i.test(e[o]) && e[o].toLowerCase() === r[o].toLowerCase()))
    )
      o++;
    if (o === r.length) {
      let s = o;
      for (let i = 0; i < o; i++)
        if (w7(r[i]) === ".claude" && w7(r[i + 1] ?? "") !== "worktrees") {
          s = i;
          break;
        }
      if (s > t) t = s;
    }
  }
  return t;
}
function Bsc(e) {
  let t = ds(e).split(Rl.sep),
    n = Ysc(t),
    r = 0;
  for (let o = n; o < t.length; o++) if (w7(t[o]) === ".claude") r++;
  return r;
}
function bem(e, t) {
  let n = t.startsWith("~/.claude/") ? sZt.homedir() : t.startsWith("/.claude/") ? yr() : null;
  if (n === null) return false;
  let r = ds(Rl.join(n, ".claude")).split(Rl.sep);
  if (r.length > 1 && r.at(-1) === "") r.pop();
  let o = ds(e).split(Rl.sep);
  for (let s = 0; s < r.length; s++)
    if (
      o[s] !== r[s] &&
      !(s === 0 && /^[a-z]:$/i.test(o[s] ?? "") && o[s].toLowerCase() === r[s].toLowerCase())
    )
      return false;
  for (let s = r.length; s < o.length; s++) if (w7(o[s]) === ".claude") return true;
  return false;
}
function Sem(e, t, n) {
  let o = ds(e).split(Rl.sep),
    s = o.at(-1);
  if (Fc(e) && !qp(e) && !eNe(e, n)) return true;
  let i = false,
    a = Ysc(o);
  for (let l = 0; l < o.length; l++) {
    let c = o[l],
      u = w7(c);
    for (let d of DANGEROUS_DIRECTORIES) {
      if (u !== normalizeCaseForComparison(d)) continue;
      if (d === ".claude") {
        let p = l >= a;
        if (i) return true;
        let f = o[l + 1],
          m = f ? w7(f) : void 0;
        if (t && m) {
          if (m === "skills" || m === "agents" || m === "commands") {
            if (p) i = true;
            break;
          }
          if (m === "scheduled_tasks.json" && l + 1 === o.length - 1) break;
        }
        if (m === "worktrees") {
          if (p) i = true;
          break;
        }
      }
      return true;
    }
  }
  for (let l of DANGEROUS_DIRECTORY_PATHS) {
    let c = l.split("/");
    for (let u = 0; u + c.length <= o.length; u++)
      if (c.every((d, p) => w7(o[u + p]) === normalizeCaseForComparison(d))) return true;
  }
  if (s) {
    let l = w7(s);
    if (DANGEROUS_FILES.some((c) => normalizeCaseForComparison(c) === l)) return true;
  }
  return false;
}
function Alr(e, t) {
  if (Vt() === "windows" || Vt() === "wsl") {
    if (e.indexOf(":", 2) !== -1) return true;
  }
  if (/~\d/.test(e)) return true;
  if (
    e.startsWith("\\\\?\\") ||
    e.startsWith("\\\\.\\") ||
    e.startsWith("//?/") ||
    e.startsWith("//./")
  )
    return true;
  let n = e.split(/[/\\]/);
  for (let r of n) {
    if (r === "" || r === "." || r === "..") continue;
    if (/[.\s]+$/.test(r)) return true;
  }
  if (/\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i.test(e)) return true;
  if (/(^|\/|\\)\.{3,}(\/|\\|$)/.test(e)) return true;
  if (j0(e, true) && !qp(e) && !eNe(e, t)) return true;
  return false;
}
function checkPathSafetyForAutoEdit(e, t, n, r, o) {
  let s = n || r,
    i = t ?? i_(e);
  for (let a of i)
    if (Alr(a, o))
      return {
        safe: false,
        message: `Claude requested permissions to write to ${e}, which contains a suspicious Windows path pattern that requires manual approval.`,
        classifierApprovable: false,
      };
  for (let a of i)
    if (s) {
      if (isClaudeSettingsPath(a))
        return {
          safe: false,
          message: `Claude requested permissions to write to ${e}, but you haven't granted it yet.`,
          classifierApprovable: true,
        };
    } else if (mem(a))
      return {
        safe: false,
        message: `Claude requested permissions to write to ${e}, but you haven't granted it yet.`,
        classifierApprovable: true,
      };
  for (let a of i)
    if (Sem(a, s, o))
      return {
        safe: false,
        message: `Claude requested permissions to edit ${e} which is a sensitive file.`,
        classifierApprovable: true,
      };
  return {
    safe: true,
  };
}
function allWorkingDirectories(e) {
  return new Set([yr(), ...e.additionalWorkingDirectories.keys()]);
}
function pathInAllowedWorkingPath(e, t, n) {
  let r = n ?? i_(e),
    o = Array.from(allWorkingDirectories(t)).flatMap((s) => getResolvedWorkingDirPaths(s));
  return r.every((s) =>
    o.some((i) =>
      pathInWorkingPath(s, i, {
        caseFold: false,
      }),
    ),
  );
}
function pathInWorkingPath(
  e,
  t,
  { caseFold: n } = {
    caseFold: true,
  },
) {
  let r = ds(e),
    o = ds(t),
    s = r.replace(/^\/private\/var\//, "/var/").replace(/^\/private\/tmp(\/|$)/, "/tmp$1"),
    i = o.replace(/^\/private\/var\//, "/var/").replace(/^\/private\/tmp(\/|$)/, "/tmp$1"),
    a = n
      ? relativePath(normalizeCaseForComparison(i), normalizeCaseForComparison(s))
      : relativePath(i, s);
  if (a === "") return true;
  if (kae(a)) return false;
  return !Rl.posix.isAbsolute(a);
}
function Eem(e) {
  switch (e) {
    case "cliArg":
    case "command":
    case "session":
    case "toolsNarrowing":
    case "mcpServerPolicy":
      return ds(yr());
    case "userSettings":
    case "policySettings":
    case "projectSettings":
    case "localSettings":
    case "flagSettings":
      return a2e(e);
  }
}
function E5o(e) {
  return Rl.posix.join(Tme, e);
}
function Aem({ patternRoot: e, pattern: t, rootPath: n }) {
  let r = Rl.posix.join(e, t),
    o = normalizeCaseForComparison(e),
    s = normalizeCaseForComparison(n);
  if (o === s) return E5o(t);
  else if (normalizeCaseForComparison(r).startsWith(`${s}${Tme}`)) {
    let i = r.slice(n.length);
    return E5o(i);
  } else {
    let i = Rl.posix.relative(s, o);
    if (!i || i.startsWith(`..${Tme}`) || i === "..") return null;
    else {
      let a = Rl.posix.join(i, t);
      return E5o(a);
    }
  }
}
function Usc(e) {
  if (Vt() !== "windows") return e;
  let t = Rl.posix.normalize(toPosixPath(e));
  return t.length > 1 && t.endsWith("/") ? t.slice(0, -1) : t;
}
function normalizePatternsToPath(e, t) {
  let n = new Set(e.get(null) ?? []),
    r = Usc(t);
  for (let [o, s] of e.entries()) {
    if (o === null) continue;
    let i = Usc(o);
    for (let a of s) {
      let l = Aem({
        patternRoot: i,
        pattern: a,
        rootPath: r,
      });
      if (l) n.add(l);
    }
  }
  return Array.from(n);
}
function getFileReadIgnorePatterns(e) {
  let t = Xsc(e, "read", "deny"),
    n = new Map();
  for (let [r, o] of t.entries()) n.set(r, Array.from(o.keys()));
  return n;
}
function patternWithRoot(e, t) {
  if (
    Vt() === "windows" &&
    (e.startsWith("~\\") || (e.startsWith("\\") && e[1] !== "!" && e[1] !== "#"))
  )
    e = e.replaceAll("\\", "/");
  if (e.startsWith(`${Tme}${Tme}`)) {
    let r = e.slice(1);
    if (Vt() === "windows" && r.match(/^\/[a-z]\//i)) {
      let o = r[1]?.toUpperCase() ?? "C",
        s = r.slice(2),
        i = `${o}:\\`;
      return {
        relativePattern: s.startsWith("/") ? s : "/" + s,
        root: i,
      };
    }
    return {
      relativePattern: r,
      root: Tme,
    };
  } else if (Vt() === "windows" && e.match(/^[A-Za-z]:[/\\]/)) {
    let r = e[0].toUpperCase(),
      o = e.slice(2).replaceAll("\\", "/");
    return {
      relativePattern: o.startsWith("/") ? o : "/" + o,
      root: `${r}:\\`,
    };
  } else if (e.startsWith(`~${Tme}`))
    return {
      relativePattern: e.slice(1),
      root: sZt.homedir().normalize("NFC"),
    };
  else if (e.startsWith(Tme))
    return {
      relativePattern: e,
      root: Eem(t),
    };
  let n = e;
  if (e.startsWith(`.${Tme}`)) n = e.slice(2);
  return {
    relativePattern: n,
    root: null,
  };
}
function Xsc(e, t, n) {
  let r = (() => {
      switch (t) {
        case "edit":
          return ka;
        case "read":
          return Ds;
      }
    })(),
    o = Goe(e, r, n),
    s = new Map();
  for (let [i, a] of o.entries()) {
    let { relativePattern: l, root: c } = patternWithRoot(i, a.source),
      u = l.replace(/\/{2,}/g, "/"),
      d = s.get(c);
    if (d === void 0) ((d = new Map()), s.set(c, d));
    d.set(u, a);
  }
  return s;
}
function matchingRuleForInput(e, t, n, r) {
  let o = ds(e);
  if (Vt() === "windows" && o.includes("\\")) o = TD(o);
  let s = Xsc(t, n, r),
    i = Vt() === "windows" && r !== "allow",
    a = o ?? $t(),
    l = i ? normalizeCaseForComparison(a) : a;
  for (let [c, u] of s.entries()) {
    let d = Array.from(u.keys()).map((h) => {
        let y = h;
        if (y.endsWith("/**")) {
          let b = y.slice(0, -3);
          y = /[^/]/.test(b) ? b : "/**";
        }
        return y;
      }),
      p = A5o.default().add(d),
      f = c ?? $t(),
      m = relativePath(i ? normalizeCaseForComparison(f) : f, l);
    if (!m || m === ".." || m.startsWith(`..${Tme}`)) continue;
    let g = p.test(m);
    if (g.ignored && g.rule) {
      let h = g.rule.pattern,
        y = h + "/**";
      if (u.has(y)) return u.get(y) ?? null;
      return u.get(h) ?? null;
    }
  }
  return null;
}
function matchesPathRule(e, t) {
  let n = ds(t);
  if (Vt() === "windows" && n.includes("\\")) n = TD(n);
  let { relativePattern: r, root: o } = patternWithRoot(e, "session"),
    s = r.replace(/\/{2,}/g, "/");
  if (s.endsWith("/**")) {
    let d = s.slice(0, -3);
    s = /[^/]/.test(d) ? d : "/**";
  }
  let i = Vt() === "windows",
    a = o ?? $t(),
    l = relativePath(i ? normalizeCaseForComparison(a) : a, i ? normalizeCaseForComparison(n) : n);
  if (l && l !== ".." && !l.startsWith("../") && A5o.default().add(s).test(l).ignored) return true;
  let c = e.trim(),
    u = !Mao(c) && !c.endsWith(":*");
  if (c.startsWith("*") || u) return X8(e, t);
  return false;
}
function normalizeTrustedSymlink(e) {
  for (let [t, n] of Hem()) if (e === t || e.startsWith(t + Rl.sep)) return n + e.slice(t.length);
  return e;
}
function Tem(e) {
  return (
    !!e &&
    (e.startsWith(m0n.slice(0, -2)) || e.startsWith(g0n.slice(0, -2))) &&
    !e.includes("..") &&
    e.endsWith("/**")
  );
}
function matchingAllowRuleForAllPaths(e, t, n) {
  let r = null;
  for (let o of e) {
    let s = matchingRuleForInput(o, t, n, "allow");
    if (!s) {
      let i = normalizeTrustedSymlink(o);
      if (i !== o) s = matchingRuleForInput(i, t, n, "allow");
    }
    if (!s) return null;
    r ??= s;
  }
  return r;
}
function checkReadNetworkPathSafety(e, t, n, r) {
  if (typeof e.getPath !== "function") return null;
  let o = e.getPath(t),
    s = n.trustedNetworkDirectories;
  if (Tw(o) && !eNe(o, s))
    return {
      behavior: "ask",
      message: `Claude requested permissions to read from ${o}, which is under the /net automount map and could trigger a DNS lookup and NFS mount to a remote host.`,
      decisionReason: {
        type: "other",
        reason: "Automount -hosts path detected (defense-in-depth check)",
      },
    };
  let i = r ?? i_(o);
  for (let a of i) {
    if (Fc(a) && !qp(a) && !eNe(a, s))
      return {
        behavior: "ask",
        message: `Claude requested permissions to read from ${o}, which appears to be a UNC path that could access network resources.`,
        decisionReason: {
          type: "other",
          reason: "UNC path detected (defense-in-depth check)",
        },
      };
    if (Tw(a) && !eNe(a, s))
      return {
        behavior: "ask",
        message: `Claude requested permissions to read from ${o}, which is under the /net automount map and could trigger a DNS lookup and NFS mount to a remote host.`,
        decisionReason: {
          type: "other",
          reason: "Automount -hosts path detected (defense-in-depth check)",
        },
      };
  }
  if (e.name === wu) {
    let a = t.pattern;
    if (typeof a === "string" && Fc(a) && !qp(a) && !eNe(a, s))
      return {
        behavior: "ask",
        message: `Claude requested permissions to glob ${a}, which appears to be a UNC pattern that could access network resources.`,
        decisionReason: {
          type: "other",
          reason: "UNC glob pattern detected (defense-in-depth check)",
        },
      };
    if (typeof a === "string" && Tw(a) && !eNe(a, s))
      return {
        behavior: "ask",
        message: `Claude requested permissions to glob ${a}, which is under the /net automount map and could trigger a DNS lookup and NFS mount to a remote host.`,
        decisionReason: {
          type: "other",
          reason: "Automount -hosts glob pattern detected (defense-in-depth check)",
        },
      };
  }
  for (let a of i)
    if (Alr(a, s))
      return {
        behavior: "ask",
        message: `Claude requested permissions to read from ${o}, which contains a suspicious Windows path pattern that requires manual approval.`,
        decisionReason: {
          type: "other",
          reason:
            "Path contains suspicious Windows-specific patterns (alternate data streams, short names, long path prefixes, or three or more consecutive dots) that require manual verification",
        },
      };
  return null;
}
function checkReadPermissionForTool(e, t, n) {
  if (typeof e.getPath !== "function")
    return {
      behavior: "ask",
      message: `Claude requested permissions to use ${e.name}, but you haven't granted it yet.`,
    };
  let r = e.getPath(t),
    o = i_(r),
    s = checkReadNetworkPathSafety(e, t, n, o);
  if (s) return s;
  for (let p of o) {
    let f = matchingRuleForInput(p, n, "read", "deny");
    if (f)
      return {
        behavior: "deny",
        message: `Permission to read ${r} has been denied.`,
        decisionReason: {
          type: "rule",
          rule: f,
        },
      };
  }
  for (let p of o) {
    let f = matchingRuleForInput(p, n, "read", "ask");
    if (f)
      return {
        behavior: "ask",
        message: `Claude requested permissions to read from ${r}, but you haven't granted it yet.`,
        decisionReason: {
          type: "rule",
          rule: f,
        },
      };
  }
  let i =
      n.mode === "plan"
        ? {
            ...n,
            mode: "default",
          }
        : n,
    a = checkWritePermissionForTool(e, t, i, o);
  if (a.behavior === "allow") return a;
  if (pathInAllowedWorkingPath(r, n, o))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "mode",
        mode: "default",
      },
    };
  let c = ds(r),
    u = checkReadableInternalPath(c, t, o);
  if (u.behavior !== "passthrough") return u;
  let d = matchingAllowRuleForAllPaths(o, n, "read");
  if (d)
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "rule",
        rule: d,
      },
    };
  return {
    behavior: "ask",
    message: `Claude requested permissions to read from ${r}, but you haven't granted it yet.`,
    suggestions: generateSuggestions(r, "read", n, o),
    decisionReason: {
      type: "workingDir",
      reason: "Path is outside allowed working directories",
    },
  };
}
function checkWritePermissionForTool(e, t, n, r) {
  if (typeof e.getPath !== "function")
    return {
      behavior: "ask",
      message: `Claude requested permissions to use ${e.name}, but you haven't granted it yet.`,
    };
  let o = e.getPath(t),
    s = r ?? i_(o);
  for (let f of s) {
    let m = matchingRuleForInput(f, n, "edit", "deny");
    if (m)
      return {
        behavior: "deny",
        message: `Permission to edit ${o} has been denied.`,
        decisionReason: {
          type: "rule",
          rule: m,
        },
      };
  }
  let i = ds(o);
  if (C7(i) && bD())
    return {
      behavior: "deny",
      message: "Cannot write to memory while it is paused. Run /pause-memory to resume automemory.",
      decisionReason: {
        type: "safetyCheck",
        reason: H5o,
        classifierApprovable: false,
      },
    };
  if (s.some(zsc))
    return {
      behavior: "deny",
      message:
        "adopt.json is the bg-fork handoff carrier and is managed by the harness; it cannot be written directly",
      decisionReason: {
        type: "safetyCheck",
        reason: "adopt.json is a code-execution surface for the fork",
        classifierApprovable: false,
      },
    };
  let a = (n.alwaysAllowRules.session ?? []).filter((f) => {
      let m = Ig(f).ruleContent;
      return Tem(m) && !s.some((g) => bem(g, m ?? ""));
    }),
    l =
      a.length > 0
        ? matchingAllowRuleForAllPaths(
            s,
            {
              ...n,
              alwaysAllowRules: {
                session: a,
              },
            },
            "edit",
          )
        : null;
  if (
    l &&
    n.mode !== "plan" &&
    !s.some((f) => Alr(f, n.trustedNetworkDirectories)) &&
    !s.some((f) => Bsc(f) > 1)
  )
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "rule",
        rule: l,
      },
    };
  for (let f of s) {
    let m = matchingRuleForInput(f, n, "edit", "ask");
    if (m)
      return {
        behavior: "ask",
        message: `Claude requested permissions to write to ${o}, but you haven't granted it yet.`,
        decisionReason: {
          type: "rule",
          rule: m,
        },
      };
  }
  let c = checkEditableInternalPath(i, t, s);
  if (c.behavior !== "passthrough") return c;
  let u = checkPathSafetyForAutoEdit(o, s, void 0, n.isRemoteMode, n.trustedNetworkDirectories);
  if (!u.safe) {
    let f = s.some((g) => Bsc(g) > 1 || Alr(g, n.trustedNetworkDirectories))
        ? null
        : getClaudeSkillScope(o),
      m = f
        ? [
            {
              type: "addRules",
              rules: [
                {
                  toolName: ka,
                  ruleContent: f.pattern,
                },
              ],
              behavior: "allow",
              destination: "session",
            },
          ]
        : generateSuggestions(o, "write", n, s);
    return {
      behavior: "ask",
      message: u.message,
      suggestions: m,
      decisionReason: {
        type: "safetyCheck",
        reason: u.message,
        classifierApprovable: u.classifierApprovable,
      },
    };
  }
  if (n.mode === "plan")
    return {
      behavior: "ask",
      message: `Cannot write to ${o} while in plan mode.`,
      decisionReason: {
        type: "mode",
        mode: "plan",
      },
    };
  let d = pathInAllowedWorkingPath(o, n, s);
  if (n.mode === "acceptEdits" && d)
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "mode",
        mode: n.mode,
      },
    };
  let p = matchingAllowRuleForAllPaths(s, n, "edit");
  if (p)
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "rule",
        rule: p,
      },
    };
  return {
    behavior: "ask",
    message: `Claude requested permissions to write to ${o}, but you haven't granted it yet.`,
    suggestions: generateSuggestions(o, "write", n, s),
    decisionReason: !d
      ? {
          type: "workingDir",
          reason: "Path is outside allowed working directories",
        }
      : void 0,
  };
}
function generateSuggestions(e, t, n, r) {
  let o = !pathInAllowedWorkingPath(e, n, r);
  if (t === "read" && o) {
    let a = MB(e);
    return i_(a)
      .map((u) => v5e(u, "session"))
      .filter((u) => u !== void 0);
  }
  let s =
      n.mode === "plan" &&
      (n.prePlanMode === "auto" ||
        n.prePlanMode === "bypassPermissions" ||
        n.prePlanMode === "acceptEdits" ||
        n.prePlanMode === "dontAsk"),
    i = (n.mode === "default" || n.mode === "plan") && !s;
  if (t === "write" || t === "create") {
    let a = i
      ? [
          {
            type: "setMode",
            mode: "acceptEdits",
            destination: "session",
          },
        ]
      : [];
    if (o) {
      let l = MB(e),
        c = i_(l);
      a.push({
        type: "addDirectories",
        directories: c,
        destination: "session",
      });
    }
    return a;
  }
  return i
    ? [
        {
          type: "setMode",
          mode: "acceptEdits",
          destination: "session",
        },
      ]
    : [];
}
function vem(e) {
  for (let t of [$t(), yr(), rc(), tr(), ace(), sZt.homedir()])
    for (let n of getResolvedWorkingDirPaths(t)) {
      if (n === t) continue;
      if (e === n || e.startsWith(n + Rl.sep)) return t + e.slice(n.length);
    }
  return normalizeTrustedSymlink(e);
}
function Jsc(e, t, n) {
  let r;
  for (let o of e) {
    let s = t(o, n);
    if (s.behavior === "passthrough") {
      let i = vem(o);
      if (i !== o) s = t(i, n);
    }
    if (s.behavior === "deny") return s;
    if (s.behavior !== "allow")
      return {
        behavior: "passthrough",
        message: "",
      };
    r ??= s;
  }
  return (
    r ?? {
      behavior: "passthrough",
      message: "",
    }
  );
}
function untypeDenyReasonForAskPropagation(e) {
  if (e?.type !== "safetyCheck") return e;
  return {
    type: "other",
    reason: e.reason,
  };
}
function checkEditableInternalPath(e, t, n) {
  if (n && n.length > 0) return Jsc(n, checkEditableInternalPath, t);
  let r = Rl.normalize(e);
  if (qsc(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Plan files for current session are allowed for writing",
      },
    };
  if (gem(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Workflow script files for current session are allowed for writing",
      },
    };
  if (Vsc(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Scratchpad files for current session are allowed for writing",
      },
    };
  if (Ksc(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Job tmp/ subtree for current bg session is allowed for writing",
      },
    };
  if (r.endsWith(".md") && N3e(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Agent memory files are allowed for writing",
      },
    };
  if (C7(r) && bD())
    return {
      behavior: "deny",
      message: "Cannot write to memory while it is paused. Run /pause-memory to resume automemory.",
      decisionReason: {
        type: "safetyCheck",
        reason: H5o,
        classifierApprovable: false,
      },
    };
  if (!Ikn() && r.endsWith(".md") && fNt(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "auto memory files are allowed for writing",
      },
    };
  if (r === Rl.join(yr(), ".claude", "launch.json"))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Preview launch config is allowed for writing",
      },
    };
  if (zsc(r))
    return {
      behavior: "deny",
      message:
        "adopt.json is the bg-fork handoff carrier and is managed by the harness; it cannot be written directly",
      decisionReason: {
        type: "safetyCheck",
        reason: "adopt.json is a code-execution surface for the fork",
        classifierApprovable: false,
      },
    };
  return {
    behavior: "passthrough",
    message: "",
  };
}
function checkReadableInternalPath(e, t, n) {
  if (n && n.length > 0) return Jsc(n, checkReadableInternalPath, t);
  let r = Rl.normalize(e);
  if (C7(r) && bD())
    return {
      behavior: "deny",
      message: "Cannot read memory while it is paused. Run /pause-memory to resume automemory.",
      decisionReason: {
        type: "safetyCheck",
        reason: H5o,
        classifierApprovable: false,
      },
    };
  if (hem(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Project directory files are allowed for reading",
      },
    };
  if (qsc(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Plan files for current session are allowed for reading",
      },
    };
  let o = lde(),
    s = o.endsWith(Rl.sep) ? o : o + Rl.sep;
  if (r === o || r.startsWith(s))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Tool result files are allowed for reading",
      },
    };
  if (Vsc(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Scratchpad files for current session are allowed for reading",
      },
    };
  if (Ksc(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Job tmp/ subtree for current bg session is allowed for reading",
      },
    };
  let i = getProjectTempDir();
  if (r.startsWith(i))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Project temp directory files are allowed for reading",
      },
    };
  if (N3e(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Agent memory files are allowed for reading",
      },
    };
  if (fNt(r))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "auto memory files are allowed for reading",
      },
    };
  let a = Rl.join(tr(), "tasks") + Rl.sep;
  if (r === a.slice(0, -1) || r.startsWith(a))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Task files are allowed for reading",
      },
    };
  let l = Rl.join(tr(), "teams") + Rl.sep;
  if (r === l.slice(0, -1) || r.startsWith(l))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Team files are allowed for reading",
      },
    };
  let c = getBundledSkillsRoot() + Rl.sep;
  if (r.startsWith(c))
    return {
      behavior: "allow",
      updatedInput: t,
      decisionReason: {
        type: "other",
        reason: "Bundled skill reference files are allowed for reading",
      },
    };
  return {
    behavior: "passthrough",
    message: "",
  };
}
var Fsc,
  A5o,
  sZt,
  Rl,
  H5o = "memory access blocked by /pause-memory",
  DANGEROUS_FILES,
  DANGEROUS_FILES_LC,
  DANGEROUS_DIRECTORIES,
  DANGEROUS_DIRECTORY_PATHS,
  Tme,
  getClaudeTempDir,
  getChildProcessTmpDir,
  getBundledSkillsRoot,
  _em,
  getResolvedWorkingDirPaths,
  Hem;
