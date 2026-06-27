// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sp
// matched 2.1.88 source: src/utils/worktree.ts
// class=modified  jaccard=0.2653  score=0.4289  fileCov=0.4102
// note: deminified; 32 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: worktreeBranchName, validateWorktreeSlug, unlockAgentWorktree, unlinkWorktreeReparsePoints, symlinkDirectories, stripGitProgress, restoreWorktreeSession, resolveExistingWorktreeTarget, removeAgentWorktree, reapJobWorktreeIfSafe, persistWorktreeSession, parsePRReference, listRegisteredWorktrees, killTmuxSession, keepWorktree, isWorktreeWriteDestUnsafe, isTmuxAvailable, hasWorktreeChanges, getTmuxInstallInstructions, getCurrentWorktreeSession, getAgentWorktreeChanges, generateTmux …
// [unwrapped __esm module sp] deps: ft, oc, ojn, jqe, Lo, qmo, E5e, _1, z2n, $pt, Cp, Is, Ls, qd, sj, kDe, _m, ejn, i5, B1, o8, ft, er, ZYt, PM, _a, dr, kt, dn, Du, I8, aS, II, $g, ZC, Un, m5, D5o, K0, iu, WAt, je, Mm, sr, BFo, QH, vn, EAe, MZn, bm, co, np, OI, PZn, Vv, oo, p6e, ii, dic, fic, mic, gic, pQ, Jt, gb, fn, At, yic
((Nic = require("path")), (Nlr = require("child_process")), (qYe = require("crypto")));
$ic();
Yem = new Set();
((Jem = new Set([
  "PreToolUse",
  "PostToolUse",
  "PostToolUseFailure",
  "PermissionRequest",
  "PermissionDenied",
  "UserPromptExpansion",
  "SessionStart",
  "SessionEnd",
  "Setup",
  "PreCompact",
  "PostCompact",
  "Notification",
  "SubagentStart",
  "SubagentStop",
  "Elicitation",
  "ElicitationResult",
  "ConfigChange",
  "InstructionsLoaded",
])),
  (Qem = new Set([
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PermissionRequest",
    "PermissionDenied",
  ])));
U5o = new Set();
function persistWorktreeSession(e) {
  (Eft(e),
    pH((t) => ({
      ...t,
      activeWorktreeSession: e ?? void 0,
    })));
}
function stripGitProgress(e) {
  return e
    .split(/\r\n?|\n/)
    .filter((t) => !/^[^:]+:\s+\d{1,3}% \(\d+\/\d+\)/.test(t))
    .join(
      `
`,
    )
    .trim();
}
function validateWorktreeSlug(e) {
  if (e.length > Yic)
    throw Error(`Invalid worktree name: must be ${Yic} characters or fewer (got ${e.length})`);
  for (let t of e.split("/")) {
    if (t === "." || t === "..")
      throw Error(`Invalid worktree name "${e}": must not contain "." or ".." path segments`);
    if (t.toLowerCase().replace(/\.+$/, "") === ".git")
      throw Error(`Invalid worktree name "${e}": "${t}" is a reserved git directory name`);
    if (!ltm.test(t))
      throw Error(
        `Invalid worktree name "${e}": each "/"-separated segment must be non-empty and contain only letters, digits, dots, underscores, and dashes`,
      );
  }
}
async function ctm(e) {
  await eu.mkdir(e, {
    recursive: !0,
  });
}
function Zic(e) {
  return kae(e) || Bd.isAbsolute(e) || e.split(/[/\\]/).some((t) => /^\.\.[ .]*$/.test(t));
}
async function isWorktreeWriteDestUnsafe(e, t) {
  let n = Bd.dirname(e);
  for (;;)
    try {
      let r = await eu.realpath(n);
      if (u2(r) !== u2(t) && !u2(r).startsWith(u2(t + Bd.sep))) return !0;
      break;
    } catch (r) {
      if (on(r) !== "ENOENT") return !0;
      if ((await eu.lstat(n).catch((i) => (on(i) === "ENOENT" ? null : i))) != null) return !0;
      let s = Bd.dirname(n);
      if (s === n) return !0;
      n = s;
    }
  try {
    if ((await eu.lstat(e)).isSymbolicLink()) return !0;
  } catch (r) {
    if (on(r) !== "ENOENT") return !0;
  }
  return !1;
}
async function symlinkDirectories(e, t, n) {
  let r;
  try {
    r = await eu.realpath(t);
  } catch (o) {
    T(`Skipping symlinkDirectories: realpath(${t}) failed: ${be(o)}`, {
      level: "warn",
    });
    return;
  }
  for (let o of n) {
    if (Zic(o)) {
      T(`Skipping symlink for "${o}": path traversal or absolute path`, {
        level: "warn",
      });
      continue;
    }
    let s = Bd.join(e, o),
      i = Bd.join(t, o);
    if (await isWorktreeWriteDestUnsafe(i, r)) {
      T(`Skipping symlink for "${o}": destination escapes worktree via committed symlink`, {
        level: "warn",
      });
      continue;
    }
    try {
      await eu.lstat(s);
    } catch (a) {
      if (wn(a)) T(`Skipping symlink for "${o}": source does not exist in main repository`);
      else
        T(`Skipping symlink for "${o}": lstat failed (${on(a) ?? "unknown"}): ${be(a)}`, {
          level: "warn",
        });
      continue;
    }
    try {
      (await eu.symlink(s, i, "dir"),
        T(`Symlinked ${o} from main repository to worktree to avoid disk bloat`));
    } catch (a) {
      let l = on(a);
      if (l !== "ENOENT" && l !== "EEXIST")
        T(`Failed to symlink ${o} (${l ?? "unknown"}): ${be(a)}`, {
          level: "warn",
        });
    }
  }
}
function restoreWorktreeSession(e) {
  Eft(e);
}
function generateTmuxSessionName(e, t) {
  return `${Bd.basename(e)}_${t}`.replace(/[/.]/g, "_");
}
function uZt(e) {
  return Bd.join(e, ".claude", "worktrees");
}
function tac(e) {
  return e.replaceAll("/", "+");
}
function worktreeBranchName(e) {
  return `worktree-${tac(e)}`;
}
function nac(e, t) {
  return Bd.join(uZt(e), tac(t));
}
async function zlr(e) {
  try {
    let t = (await eu.readFile(Bd.join(e, ".git"), "utf-8")).trim();
    if (!t.startsWith("gitdir:")) return null;
    return Bd.resolve(e, t.slice(7).trim());
  } catch {
    return null;
  }
}
async function utm(e, t) {
  let n = await zlr(e);
  if (!n) {
    T(`[worktree] cannot write baseline: gitdir unresolvable for ${e}`);
    return;
  }
  try {
    await eu.writeFile(Bd.join(n, rac), t, "utf-8");
  } catch (r) {
    T(`[worktree] failed to write baseline to ${n}: ${r}`);
  }
}
async function oac(e) {
  let t = await zlr(e);
  if (!t) return null;
  try {
    let n = (await eu.readFile(Bd.join(t, rac), "utf-8")).trim();
    return yRt(n) ? n : null;
  } catch {
    return null;
  }
}
async function K5o(e, t, n) {
  let r = nac(e, t),
    o = worktreeBranchName(t),
    s = await mfn(r);
  if (s) {
    let g = await oac(r),
      h = new Date();
    return (
      await eu.utimes(r, h, h).catch(() => {}),
      {
        worktreePath: r,
        worktreeBranch: o,
        headCommit: g ?? s,
        existed: !0,
      }
    );
  }
  let i = await zlr(r);
  if (i) {
    let g = !1;
    try {
      await eu.readdir(i);
    } catch (h) {
      g = wn(h);
    }
    if (g) {
      let h = await Gr(go(), ["remote"], {
        cwd: e,
      });
      if (h.code !== 0)
        throw Error(
          `Orphaned worktree dir at ${r} but \`git remote\` failed (${h.stderr.trim()}) \u2014 refusing to self-heal. Remove ${r} manually if it has no work to keep.`,
        );
      let y = await Gr(go(), ["rev-parse", "--verify", "--quiet", o], {
        cwd: e,
      });
      if (y.code !== 0 && y.stderr.trim().length > 0)
        throw Error(
          `Orphaned worktree dir at ${r} but rev-parse on ${o} failed (${y.stderr.trim()}) \u2014 refusing to self-heal. Remove ${r} manually if it has no work to keep.`,
        );
      if (h.stdout.trim().length > 0 && y.code === 0) {
        let b = await Gr(go(), ["rev-list", "--max-count=1", o, "--not", "--remotes"], {
          cwd: e,
        });
        if (b.code !== 0)
          throw Error(
            `Orphaned worktree dir at ${r} but rev-list on ${o} failed (${b.stderr.trim()}) \u2014 refusing to self-heal. Remove ${r} manually if it has no work to keep.`,
          );
        if (b.stdout.trim().length > 0)
          throw Error(
            `Orphaned worktree dir at ${r} but branch ${o} has unpushed commits \u2014 refusing to self-heal. Push or delete the branch, then retry.`,
          );
      }
      try {
        (await eu.rm(r, {
          recursive: !0,
          force: !0,
        }),
          T(`[worktree] removed orphaned worktree directory at ${r}`));
      } catch (b) {
        throw Error(
          `Cannot self-heal orphaned worktree at ${r}: ${be(b)}. Remove manually to proceed.`,
        );
      }
    }
  }
  await eu.mkdir(uZt(e), {
    recursive: !0,
  });
  let a = R8(),
    l,
    c = null;
  if (n?.fromHead ?? (!n?.prNumber && Dr().worktree?.baseRef === "head")) {
    let { stdout: g, code: h } = await Gr(go(), ["rev-parse", "HEAD"], {
      cwd: n?.fromCwd ?? e,
    });
    if (h !== 0)
      throw (
        Le("git_worktree_create", "git_worktree_create_revparse_failed"),
        Error(`Failed to resolve HEAD in ${n?.fromCwd ?? e}: git rev-parse failed`)
      );
    ((c = g.trim()), (l = c));
  } else if (n?.prNumber) {
    let { code: g, stderr: h } = await Gr(go(), ["fetch", "origin", `pull/${n.prNumber}/head`], {
      cwd: e,
      stdin: "ignore",
      env: a,
    });
    if (g !== 0)
      throw (
        Le("git_worktree_create", "git_worktree_create_pr_fetch_failed"),
        Error(
          `Failed to fetch PR #${n.prNumber}: ${h.trim() || 'PR may not exist or the repository may not have a remote named "origin"'}`,
        )
      );
    l = "FETCH_HEAD";
  } else {
    let [g, h] = await Promise.all([vD(), E0(e)]),
      y = g && !g.startsWith("-") ? g : "HEAD",
      b = `origin/${y}`,
      _ = h ? await Rae(h, `refs/remotes/origin/${y}`) : null;
    if (_) ((l = b), (c = _));
    else {
      let { code: S } = await Gr(go(), ["fetch", "origin", y], {
        cwd: e,
        stdin: "ignore",
        env: a,
      });
      l = S === 0 ? b : "HEAD";
    }
  }
  if (!c) {
    let { stdout: g, code: h } = await Gr(go(), ["rev-parse", l], {
      cwd: e,
    });
    if (h !== 0)
      throw (
        Le("git_worktree_create", "git_worktree_create_revparse_failed"),
        Error(`Failed to resolve base branch "${l}": git rev-parse failed`)
      );
    c = g.trim();
  }
  let d = Dr().worktree?.sparsePaths,
    p = ["worktree", "add"];
  if (d?.length) p.push("--no-checkout");
  p.push("--no-track", "-B", o, r, l);
  let { code: f, stderr: m } = await Gr(go(), p, {
    cwd: e,
    env: {
      ...process.env,
      LC_ALL: "C",
    },
  });
  if (f !== 0) {
    Le("git_worktree_create", "git_worktree_create_add_failed");
    let g = stripGitProgress(m),
      h = g.match(/already used by worktree at ['"]?([^'"\n]+?)['"]?$/m);
    if (h?.[1]) {
      let y = h[1];
      throw new WorktreeIsolationError(
        `branch "${o}" for worktree "${t}" is already checked out in a worktree at ${y}. cd into that directory and run \`claude\`, remove it with \`git worktree remove ${y}\`, or pass a different --worktree name.`,
      );
    }
    if (/^fatal: .* already exists/m.test(g))
      throw new WorktreeIsolationError(
        `worktree "${t}" already exists at ${r} but cannot be reused (${g}). Remove that directory (\`git worktree remove ${r}\` if it's a registered worktree, or \`rm -rf ${r}\` if it's a stray directory) or pass a different --worktree name.`,
      );
    if (await mfn(r))
      (await unlinkWorktreeReparsePoints(r),
        await Gr(go(), ["worktree", "remove", "--force", r], {
          cwd: e,
        }));
    throw new WorktreeIsolationError(`Failed to create worktree: ${g}`);
  }
  if (d?.length) {
    let g = async (S) => {
        throw (
          await Gr(go(), ["worktree", "remove", "--force", r], {
            cwd: e,
          }),
          new WorktreeIsolationError(S)
        );
      },
      { code: h, stderr: y } = await Gr(go(), ["sparse-checkout", "set", "--cone", "--", ...d], {
        cwd: r,
      });
    if (h !== 0)
      (Le("git_worktree_create", "git_worktree_create_sparse_set_failed"),
        await g(`Failed to configure sparse-checkout: ${stripGitProgress(y)}`));
    let { code: b, stderr: _ } = await Gr(go(), ["checkout", "HEAD"], {
      cwd: r,
    });
    if (b !== 0)
      (Le("git_worktree_create", "git_worktree_create_sparse_checkout_failed"),
        await g(`Failed to checkout sparse worktree: ${stripGitProgress(_)}`));
  }
  return (
    await utm(r, c),
    {
      worktreePath: r,
      worktreeBranch: o,
      headCommit: c,
      baseBranch: l,
      existed: !1,
    }
  );
}
async function copyWorktreeIncludeFiles(e, t) {
  let n;
  try {
    n = await eu.readFile(Bd.join(e, ".worktreeinclude"), "utf-8");
  } catch {
    return [];
  }
  let r = n
    .split(/\r?\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0 && !p.startsWith("#"));
  if (r.length === 0) return [];
  let o = await Gr(
    go(),
    ["ls-files", "--others", "--ignored", "--exclude-standard", "--directory"],
    {
      cwd: e,
    },
  );
  if (o.code !== 0 || !o.stdout.trim()) return [];
  let s = o.stdout
      .trim()
      .split(
        `
`,
      )
      .filter(Boolean),
    i = Qic.default().add(n),
    a = s.filter((p) => p.endsWith("/")),
    l = s.filter((p) => !p.endsWith("/") && i.ignores(p)),
    c = a.filter((p) => {
      if (
        r.some((f) => {
          let m = f.startsWith("/") ? f.slice(1) : f;
          if (m.startsWith(p)) return !0;
          let g = m.search(/[*?[]/);
          if (g > 0) {
            let h = m.slice(0, g);
            if (p.startsWith(h)) return !0;
          }
          return !1;
        })
      )
        return !0;
      if (i.ignores(p.slice(0, -1))) return !0;
      return !1;
    });
  if (c.length > 0) {
    let p = await Gr(
      go(),
      ["ls-files", "--others", "--ignored", "--exclude-standard", "--", ...c],
      {
        cwd: e,
      },
    );
    if (p.code === 0 && p.stdout.trim()) {
      for (let f of p.stdout
        .trim()
        .split(
          `
`,
        )
        .filter(Boolean))
        if (i.ignores(f)) l.push(f);
    }
  }
  let u = [],
    d;
  try {
    d = await eu.realpath(t);
  } catch (p) {
    return (
      T(`Skipping .worktreeinclude copy: realpath(${t}) failed: ${be(p)}`, {
        level: "warn",
      }),
      u
    );
  }
  for (let p of l) {
    let f = Bd.join(e, p),
      m = Bd.join(t, p);
    try {
      if ((await eu.lstat(f)).isSymbolicLink()) {
        T(`Skipping symlink in .worktreeinclude: ${p}`, {
          level: "warn",
        });
        continue;
      }
      if (await isWorktreeWriteDestUnsafe(m, d)) {
        T(
          `Skipping .worktreeinclude entry: destination escapes worktree via committed symlink: ${p}`,
          {
            level: "warn",
          },
        );
        continue;
      }
      (await eu.mkdir(Bd.dirname(m), {
        recursive: !0,
      }),
        await eu.copyFile(f, m),
        u.push(p));
    } catch (g) {
      T(`Failed to copy ${p} to worktree: ${be(g)}`, {
        level: "warn",
      });
    }
  }
  if (u.length > 0) T(`Copied ${u.length} files from .worktreeinclude: ${u.join(", ")}`);
  return u;
}
async function Y5o(e, t) {
  let n = await eu.realpath(t).catch(() => null),
    r = kG("localSettings"),
    o = Bd.join(e, r);
  try {
    if ((await eu.lstat(o)).isSymbolicLink())
      T(`Skipping symlinked settings.local.json: ${o}`, {
        level: "warn",
      });
    else {
      let f = Bd.join(t, r);
      if (n == null || (await isWorktreeWriteDestUnsafe(f, n)))
        T("Skipping settings.local.json copy: destination escapes worktree via committed symlink", {
          level: "warn",
        });
      else
        (await ctm(Bd.dirname(f)),
          await eu.copyFile(o, f),
          T(`Copied settings.local.json to worktree: ${f}`));
    }
  } catch (p) {
    if (on(p) !== "ENOENT")
      T(`Failed to copy settings.local.json: ${be(p)}`, {
        level: "warn",
      });
  }
  let s = Bd.join(e, ".husky"),
    i = await E0(e),
    a = i ? ((await HG(i)) ?? i) : null,
    l = a ? await gRt(a, "core", null, "hooksPath") : null,
    c = null;
  if (l) {
    if (((c = Bd.isAbsolute(l) ? l : Bd.resolve(e, l)), l !== c)) {
      let { code: p, stderr: f } = await Gr(go(), ["config", "core.hooksPath", c], {
        cwd: t,
      });
      if (p === 0) T(`Configured worktree to use hooks from main repository: ${c}`);
      else
        T(`Failed to configure hooks path: ${f}`, {
          level: "error",
        });
    }
  }
  let d = Dr().worktree?.symlinkDirectories ?? [];
  if (d.length > 0) await symlinkDirectories(e, t, d);
  await copyWorktreeIncludeFiles(e, t);
}
function parsePRReference(e) {
  let t = e.match(/^https?:\/\/[^/]+\/[^/]+\/[^/]+\/pull\/(\d+)\/?(?:[?#].*)?$/i);
  if (t?.[1]) return parseInt(t[1], 10);
  let n = e.match(/^#(\d+)$/);
  if (n?.[1]) return parseInt(n[1], 10);
  return null;
}
async function isTmuxAvailable() {
  let { code: e } = await $n("tmux", ["-V"]);
  return e === 0;
}
function getTmuxInstallInstructions() {
  switch (Vt()) {
    case "macos":
      return "Install tmux with: brew install tmux";
    case "linux":
    case "wsl":
      return "Install tmux with: sudo apt install tmux (Debian/Ubuntu) or sudo dnf install tmux (Fedora/RHEL)";
    case "windows":
      return "tmux is not natively available on Windows. Consider using WSL or Cygwin.";
    default:
      return "Install tmux using your system package manager.";
  }
}
async function createTmuxSessionForWorktree(e, t) {
  let { code: n, stderr: r } = await $n("tmux", ["new-session", "-d", "-s", e, "-c", t]);
  if (n !== 0)
    return {
      created: !1,
      error: r,
    };
  return {
    created: !0,
  };
}
async function killTmuxSession(e) {
  let { code: t } = await $n("tmux", ["kill-session", "-t", e]);
  return t === 0;
}
async function createWorktreeForSession(e, t, n, r) {
  if (!ad())
    throw Error(
      "Workspace trust not yet accepted. Run `claude` once in this directory and accept the trust dialog, then retry with --worktree.",
    );
  validateWorktreeSlug(t);
  let o = r?.fromCwd ?? $t(),
    s;
  if (Jte()) {
    let i = await WYe(t);
    (T(`Created hook-based worktree at: ${i.worktreePath}`),
      (s = {
        originalCwd: o,
        worktreePath: i.worktreePath,
        worktreeName: t,
        sessionId: e,
        tmuxSessionName: n,
        hookBased: !0,
      }));
  } else {
    let i = Tu($t());
    if (!i)
      throw (
        Le("git_worktree_create", "git_worktree_create_not_git_repo"),
        new WorktreeIsolationError(
          "Cannot create a worktree: not in a git repository and no WorktreeCreate hooks are configured. Configure WorktreeCreate/WorktreeRemove hooks in settings.json to use worktree isolation with other VCS systems.",
        )
      );
    let a = await ub(),
      l = Date.now(),
      { worktreePath: c, worktreeBranch: u, headCommit: d, existed: p } = await K5o(i, t, r),
      f;
    if (p) T(`Resuming existing worktree at: ${c}`);
    else (T(`Created worktree at: ${c} on branch: ${u}`), await Y5o(i, c), (f = Date.now() - l));
    s = {
      originalCwd: o,
      worktreePath: c,
      worktreeName: t,
      worktreeBranch: u,
      originalBranch: a,
      originalHeadCommit: d,
      sessionId: e,
      tmuxSessionName: n,
      creationDurationMs: f,
      usedSparsePaths: (Dr().worktree?.sparsePaths?.length ?? 0) > 0,
    };
  }
  return (persistWorktreeSession(s), xe("git_worktree_create"), s);
}
async function listRegisteredWorktrees(e) {
  let {
    code: t,
    stdout: n,
    stderr: r,
    error: o,
  } = await $n(go(), ["-C", e, "worktree", "list", "--porcelain"], {
    timeout: 1e4,
  });
  if (t !== 0) {
    let a = r.trim(),
      l = `\`git -C ${e} worktree list\` failed: ${a || (o !== void 0 ? be(o) : "") || `exit ${t}`}`;
    if (a === "" && o !== void 0 && /premature close\s*$/i.test(o))
      throw new WorktreeGitTransientError(l);
    throw Error(l);
  }
  let s = [],
    i = null;
  for (let a of n.split(`
`))
    if (a.startsWith("worktree ")) {
      if (i) s.push(i);
      i = {
        worktreePath: a.slice(9),
      };
    } else if (a.startsWith("branch ") && i)
      i.worktreeBranch = a.slice(7).replace(/^refs\/heads\//, "");
    else if ((a === "locked" || a.startsWith("locked ")) && i) i.lockReason = a.slice(6).trim();
    else if ((a === "prunable" || a.startsWith("prunable ")) && i) i.prunable = !0;
  if (i) s.push(i);
  return s;
}
function u2(e) {
  return e
    .toLowerCase()
    .replace(/\u0131/g, "i")
    .replace(/\u017f/g, "s");
}
function V5o(e) {
  let t = e.match(/^[\\/]{2}(?:\?[\\/]unc[\\/])?([^\\/]+)/i)?.[1];
  return t != null ? t.toLowerCase() : null;
}
function Xic(e) {
  return Vt() === "windows" && /^[\\/]{2}/.test(e);
}
async function resolveExistingWorktreeTarget(
  e,
  { requireManagedLocation: t, requireCwdInsideRepo: n = !1 },
) {
  let r = Bd.win32.normalize(e);
  if (Xic(r) || j0(r, !0))
    throw new WorktreeIsolationError(`Cannot enter worktree: ${e} is a UNC network path.`);
  let o = $t(),
    s = qf(o);
  if (!s)
    throw new WorktreeIsolationError(
      "Cannot enter an existing worktree: the current directory is not in a git repository.",
    );
  let i, a, l;
  try {
    ((i = await eu.realpath(Bd.resolve(o, e))),
      (a = await eu.realpath(s)),
      (l = await eu.realpath(o)));
  } catch (f) {
    throw new WorktreeIsolationError(`Cannot enter worktree: ${e}: ${be(f)}`);
  }
  let c = V5o(i);
  if ((Xic(i) || j0(i, !0)) && c !== V5o(a) && c !== V5o(l))
    throw new WorktreeIsolationError(
      `Cannot enter worktree: ${e} resolves to a UNC network path (${i}).`,
    );
  if (i === a)
    throw new WorktreeIsolationError(
      `Cannot enter worktree: ${e} is the main working tree, not a linked worktree.`,
    );
  if (i === l)
    throw new WorktreeIsolationError(
      `Cannot enter worktree: ${e} is the current working directory.`,
    );
  if (n && !u2(l).startsWith(u2(a + Bd.sep)))
    throw new WorktreeIsolationError(
      u2(l) === u2(a)
        ? `Cannot enter worktree: the current working directory ${o} is the repository root, not an isolated worktree \u2014 switching is only available to sessions whose working directory is inside a worktree of this repository.`
        : `Cannot enter worktree: the current working directory ${o} is not inside the repository at ${s}.`,
    );
  if (t) {
    let f = uZt(a),
      m;
    try {
      m = await eu.realpath(f);
    } catch {
      throw new WorktreeIsolationError(
        `Cannot enter worktree: ${f} does not exist, so ${e} cannot be a worktree managed by Claude Code.`,
      );
    }
    if (u2(m) !== u2(f))
      throw new WorktreeIsolationError(
        `Cannot enter worktree: ${f} resolves to ${m}; the managed worktrees directory must not be a symlink.`,
      );
    if (!u2(i).startsWith(u2(f + Bd.sep)))
      throw new WorktreeIsolationError(
        `Cannot enter worktree: ${e} is not under ${f}. Switching from this session is limited to worktrees managed by Claude Code (created under .claude/worktrees/ of this repository).`,
      );
    let g = Bd.join(a, ".git", "worktrees"),
      h = await zlr(i),
      y = null,
      b = null;
    if (h)
      try {
        ((y = await eu.realpath(h)),
          (b = await eu.realpath(
            Bd.resolve(y, (await eu.readFile(Bd.join(y, "gitdir"), "utf-8")).trim()),
          )));
      } catch {}
    if (!y || !b || u2(Bd.dirname(y)) !== u2(g) || u2(b) !== u2(Bd.join(i, ".git")))
      throw new WorktreeIsolationError(
        `Cannot enter worktree: ${e} is not a linked worktree of ${s}.`,
      );
  }
  let u = await listRegisteredWorktrees(s),
    d;
  for (let f of u)
    try {
      if ((await eu.realpath(f.worktreePath)) === i) {
        d = f;
        break;
      }
    } catch {}
  if (!d)
    throw new WorktreeIsolationError(
      `Cannot enter worktree: ${e} is not a registered worktree of ${s}. Run 'git -C ${s} worktree list' to see registered worktrees.`,
    );
  if (d.prunable)
    throw new WorktreeIsolationError(
      `Cannot enter worktree: ${e} is marked prunable by git (its directory or administrative files are missing or broken).`,
    );
  let p = d.lockReason?.match(/^claude agent .+ \(pid (\d+)(?: start (.+))?\)$/);
  if (p) {
    let f = Number(p[1]);
    if (f !== process.pid && zR(f) && (await bv(f, p[2])))
      throw new WorktreeIsolationError(
        `Cannot enter worktree: ${e} belongs to another running Claude Code agent (locked: ${d.lockReason}). Wait for that agent to finish or choose a different worktree.`,
      );
  }
  return {
    worktreePath: i,
    worktreeBranch: d.worktreeBranch,
  };
}
async function enterExistingWorktreeForSession(e, t) {
  let n = Gm(),
    r = n?.originalCwd ?? $t(),
    { worktreePath: o, worktreeBranch: s } = await resolveExistingWorktreeTarget(t, {
      requireManagedLocation: n != null,
    }),
    i = {
      originalCwd: r,
      worktreePath: o,
      worktreeName: Bd.basename(o),
      worktreeBranch: s,
      sessionId: e,
      enteredExisting: !0,
    };
  return (persistWorktreeSession(i), i);
}
async function keepWorktree() {
  let e = Gm();
  if (!e) return;
  try {
    let { worktreePath: t, originalCwd: n, worktreeBranch: r } = e;
    try {
      process.chdir(n);
    } catch (o) {
      T(`Could not chdir to original directory while keeping worktree: ${o}`);
    }
    (persistWorktreeSession(null),
      T(`Linked worktree preserved at: ${t}${r ? ` on branch: ${r}` : ""}`),
      T(`You can continue working there by running: cd ${t}`));
  } catch (t) {
    T(`Error keeping worktree: ${t}`, {
      level: "error",
    });
  }
}
async function unlinkWorktreeReparsePoints(e) {
  if (Vt() !== "windows") return;
  let t = await eu
    .readdir(e, {
      withFileTypes: !0,
    })
    .catch(() => []);
  for (let o of t) {
    if (!o.isSymbolicLink()) continue;
    try {
      (await eu.unlink(Bd.join(e, o.name)),
        T(`[worktree] unlinked top-level reparse point before removal: ${o.name}`));
    } catch {}
  }
  let n = Dr().worktree?.symlinkDirectories ?? [];
  if (n.length === 0) return;
  let r = await eu
    .realpath(e)
    .then((o) => o.toLowerCase())
    .catch(() => null);
  if (r == null) {
    T(`[worktree] realpath(${e}) failed; skipping configured reparse-point cleanup`);
    return;
  }
  for (let o of n) {
    if (Zic(o)) continue;
    let s = Bd.join(e, o);
    try {
      if (!(await eu.lstat(s)).isSymbolicLink()) continue;
      let a = await eu
        .realpath(Bd.dirname(s))
        .then((l) => l.toLowerCase())
        .catch(() => null);
      if (a == null || (a !== r && !a.startsWith(r + Bd.sep))) {
        T(`[worktree] skipping configured reparse point outside worktree: ${o}`);
        continue;
      }
      (await eu.unlink(s), T(`[worktree] unlinked configured reparse point before removal: ${o}`));
    } catch {}
  }
}
async function cleanupWorktree() {
  let e = Gm();
  if (!e) return !0;
  try {
    let { worktreePath: t, originalCwd: n, worktreeBranch: r, hookBased: o } = e;
    try {
      process.chdir(n);
    } catch (i) {
      T(`Could not chdir to original directory while cleaning up worktree: ${i}`);
    }
    if (e.enteredExisting) return (persistWorktreeSession(null), !0);
    let s = !1;
    if (o)
      if (((s = await QHt(t)), s)) T(`Removed hook-based worktree at: ${t}`);
      else if (FKr())
        return (
          T(`WorktreeRemove hook did not remove worktree, kept at: ${t}`, {
            level: "warn",
          }),
          _Ee(),
          persistWorktreeSession(null),
          !1
        );
      else T(`No WorktreeRemove hook configured; falling back to git worktree remove for: ${t}`);
    if (!s) {
      let i = !1;
      if (o && Vt() === "windows") {
        i = !0;
        let c = await eu.realpath(t).catch(() => t);
        for (let u of await listRegisteredWorktrees(n).catch(() => []))
          if (c === (await eu.realpath(u.worktreePath).catch(() => u.worktreePath))) {
            i = !1;
            break;
          }
      }
      if (!i) await unlinkWorktreeReparsePoints(t);
      let { code: a, stderr: l } = await Gr(go(), ["worktree", "remove", "--force", t], {
        cwd: n,
      });
      if (
        a !== 0 &&
        (await eu.lstat(t).then(
          () => !0,
          () => !1,
        ))
      )
        return (
          T(`Failed to remove linked worktree, kept ${t}: ${l.trim()}`, {
            level: "warn",
          }),
          _Ee(),
          persistWorktreeSession(null),
          !1
        );
      T(`Removed linked worktree at: ${t}`);
    }
    if ((_Ee(), persistWorktreeSession(null), !o && r)) {
      await Nn(100);
      let { code: i, stderr: a } = await Gr(go(), ["branch", "-D", r], {
        cwd: n,
      });
      if (i !== 0)
        T(`Could not delete worktree branch: ${a}`, {
          level: "error",
        });
      else T(`Deleted worktree branch: ${r}`);
    }
    return (T("Linked worktree cleaned up completely"), !0);
  } catch (t) {
    return (
      T(`Error cleaning up worktree: ${t}`, {
        level: "error",
      }),
      !1
    );
  }
}
async function Jic(e, t) {
  let n = !1;
  try {
    n = (await eu.stat(e)).isDirectory();
  } catch {}
  if (!n)
    throw (
      Le("git_worktree_create", "git_worktree_create_path_missing"),
      new WorktreeIsolationError(
        t
          ? `WorktreeCreate hook returned a path that is not a directory: ${e}. The hook must create the directory before echoing its path.`
          : `Worktree directory does not exist at ${e} after creation. ` +
              "Refusing to launch agent in parent repo \u2014 check for concurrent worktree cleanup or filesystem errors.",
      )
    );
}
async function createAgentWorktree(e, t) {
  if ((validateWorktreeSlug(e), Jte())) {
    let l = await WYe(e);
    (await Jic(l.worktreePath, !0), T(`Created hook-based agent worktree at: ${l.worktreePath}`));
    let c = await Gr(go(), ["rev-parse", "HEAD"], {
      cwd: l.worktreePath,
    });
    return (
      xe("git_worktree_create"),
      {
        worktreePath: l.worktreePath,
        hookBased: !0,
        headCommit: c.code === 0 ? c.stdout.trim() : void 0,
      }
    );
  }
  let n = t?.fromCwd ?? $t(),
    r = qf(n);
  if (!r)
    throw (
      Le("git_worktree_create", "git_worktree_create_not_git_repo"),
      new WorktreeIsolationError(
        "Cannot create agent worktree: not in a git repository and no WorktreeCreate hooks are configured. Configure WorktreeCreate/WorktreeRemove hooks in settings.json to use worktree isolation with other VCS systems.",
      )
    );
  let {
    worktreePath: o,
    worktreeBranch: s,
    headCommit: i,
    existed: a,
  } = await K5o(r, e, {
    ...t,
    fromCwd: n,
  });
  if (!a) {
    (T(`Created agent worktree at: ${o} on branch: ${s}`), await Y5o(r, o));
    let l = await zPt(),
      c = await Gr(
        go(),
        [
          "worktree",
          "lock",
          "--reason",
          l
            ? `claude agent ${e} (pid ${process.pid} start ${l})`
            : `claude agent ${e} (pid ${process.pid})`,
          o,
        ],
        {
          cwd: r,
        },
      );
    if (c.code !== 0) T(`[worktree] failed to lock ${o}: ${c.stderr.trim()}`);
  } else T(`Resuming existing agent worktree at: ${o}`);
  return (
    await Jic(o, !1),
    xe("git_worktree_create"),
    {
      worktreePath: o,
      worktreeBranch: s,
      headCommit: i,
      gitRoot: r,
    }
  );
}
async function getAgentWorktreeChanges(e, t) {
  let n = await Gr(go(), ["status", "--porcelain"], {
    cwd: e,
  });
  if (n.code !== 0)
    return {
      dirty: !0,
      commitsAhead: 0,
      gitError: !0,
    };
  let r = n.stdout.trim().length > 0;
  if (!t)
    return {
      dirty: r,
      commitsAhead: 0,
    };
  let o = await Gr(go(), ["rev-list", "--count", `${t}..HEAD`], {
    cwd: e,
  });
  if (o.code !== 0)
    return {
      dirty: !0,
      commitsAhead: 0,
      gitError: !0,
    };
  return {
    dirty: r,
    commitsAhead: parseInt(o.stdout.trim(), 10) || 0,
  };
}
async function unlockAgentWorktree(e, t) {
  await Gr(go(), ["worktree", "unlock", e], {
    cwd: t,
  });
}
async function removeAgentWorktree(e, t, n, r, o = "unknown") {
  if (r) {
    let d = await QHt(e);
    if (d)
      (G("tengu_worktree_removed", {
        source: o,
        changed_files: 0,
        commits: 0,
        hook_based: !0,
      }),
        T(`Removed hook-based agent worktree at: ${e}`));
    else
      T(`WorktreeRemove hook did not remove agent worktree, left at: ${e}`, {
        level: "warn",
      });
    return d;
  }
  if (!n)
    return (
      T("Cannot remove agent worktree: no git root provided", {
        level: "error",
      }),
      !1
    );
  await unlockAgentWorktree(e, n);
  let s = await Gr(go(), ["status", "--porcelain"], {
      cwd: e,
    }),
    i =
      s.code === 0 && s.stdout.trim()
        ? hu(
            s.stdout.trim(),
            `
`,
          ) + 1
        : 0;
  if (i > 0 && o !== "exit_tool" && o !== "exit_dialog" && o !== "job_delete_force")
    return (
      T(
        `removeAgentWorktree: aborted ${o} removal \u2014 ${i} changed file(s) would be lost, kept ${e}`,
        {
          level: "warn",
        },
      ),
      G("tengu_worktree_removed", {
        source: o,
        changed_files: i,
        commits: 0,
        aborted: 1,
      }),
      !1
    );
  await unlinkWorktreeReparsePoints(e);
  let { code: a, stderr: l } = await Gr(go(), ["worktree", "remove", "--force", e], {
    cwd: n,
  });
  if (
    a !== 0 &&
    (await eu.lstat(e).then(
      () => !0,
      () => !1,
    ))
  )
    return (
      T(`removeAgentWorktree: git worktree remove failed, kept ${e}: ${l.trim()}`, {
        level: "warn",
      }),
      !1
    );
  if (
    (T(`Removed agent worktree at: ${e}`),
    G("tengu_worktree_removed", {
      source: o,
      changed_files: i,
      commits: 0,
    }),
    !t)
  )
    return !0;
  let { code: c, stderr: u } = await Gr(go(), ["branch", "-D", t], {
    cwd: n,
  });
  if (c !== 0)
    T(`Could not delete agent worktree branch: ${u}`, {
      level: "error",
    });
  return !0;
}
function agentWorktreeSlug(e) {
  return `agent-${e}`;
}
async function ptm(e, t) {
  let n = await Gr(go(), ["symbolic-ref", "-q", "HEAD"], {
      cwd: e,
    }),
    r = n.stdout.trim();
  if (n.code !== 0 || !r) return !1;
  let o = await Gr(go(), ["for-each-ref", "--format=%(upstream:track,nobracket)", r], {
    cwd: e,
  });
  if (o.code !== 0 || o.stdout.trim() !== "gone") return !1;
  let s = await Gr(
    go(),
    ["rev-list", "--cherry-pick", "--right-only", "--no-merges", "--max-count=1", `${t}...HEAD`],
    {
      cwd: e,
    },
  );
  return s.code === 0 && s.stdout.trim().length === 0;
}
async function iac(e) {
  let t = await Gr(go(), ["symbolic-ref", "-q", "--short", "refs/remotes/origin/HEAD"], {
    cwd: e,
  });
  if (t.code === 0 && t.stdout.trim()) return t.stdout.trim();
  for (let n of ["origin/main", "origin/master"])
    if (
      (
        await Gr(go(), ["rev-parse", "--verify", "-q", n], {
          cwd: e,
        })
      ).code === 0
    )
      return n;
  return null;
}
async function aac(e, t) {
  let [n, r] = await Promise.all([
    Gr(go(), ["--no-optional-locks", "status", "--porcelain"], {
      cwd: e,
    }),
    Gr(go(), ["rev-list", "--max-count=1", "HEAD", "--not", "--remotes"], {
      cwd: e,
    }),
  ]);
  if (n.code !== 0 || n.stdout.trim().length > 0) return !1;
  if (r.code !== 0) return !1;
  if (r.stdout.trim().length === 0) return !0;
  let [o, s] = await Promise.all([
    Gr(go(), ["rev-parse", "HEAD"], {
      cwd: e,
    }),
    oac(e),
  ]);
  if (o.code === 0 && s !== null && o.stdout.trim() === s) return !0;
  return t !== null && (await ptm(e, t));
}
async function cleanupStaleAgentWorktrees(e) {
  let t = qf($t());
  if (!t) return 0;
  let n = uZt(t),
    r;
  try {
    r = await eu.readdir(n);
  } catch {
    return 0;
  }
  let o = e.getTime(),
    s = Gm()?.worktreePath,
    i = await iac(t),
    a = 0;
  for (let l of r) {
    if (!dtm.some((d) => d.test(l))) continue;
    let c = Bd.join(n, l);
    if (s === c) continue;
    let u;
    try {
      u = (await eu.stat(c)).mtimeMs;
    } catch {
      continue;
    }
    if (u >= o) continue;
    if (!(await aac(c, i))) continue;
    if (await removeAgentWorktree(c, worktreeBranchName(l), t, !1, "stale_cleanup")) a++;
  }
  if (a > 0)
    (await Gr(go(), ["worktree", "prune"], {
      cwd: t,
    }),
      T(`cleanupStaleAgentWorktrees: removed ${a} stale worktree(s)`));
  return a;
}
async function reapJobWorktreeIfSafe(e, t, n, r, o) {
  if (r) return !1;
  let s = qf(n ?? e);
  if (!s || Bd.resolve(Bd.dirname(e)) !== Bd.resolve(uZt(s))) return !1;
  let i;
  try {
    i = (await eu.stat(e)).mtimeMs;
  } catch {
    return !1;
  }
  if (i >= o.getTime()) return !1;
  let a = await eu.realpath(e).catch(() => e),
    l = Gm()?.worktreePath;
  if (l && a === (await eu.realpath(l).catch(() => l))) return !1;
  let c = await listRegisteredWorktrees(s).catch(() => null),
    u;
  for (let d of c ?? [])
    if (a === (await eu.realpath(d.worktreePath).catch(() => d.worktreePath))) {
      u = d;
      break;
    }
  if (u && u.worktreeBranch !== t) return !1;
  if (!(await aac(e, await iac(s)))) return !1;
  return removeAgentWorktree(e, t, s, !1, "job_retention_sweep");
}
async function hasWorktreeChanges(e, t) {
  let { dirty: n, commitsAhead: r } = await getAgentWorktreeChanges(e, t);
  return n || r > 0;
}
async function execIntoTmuxWorktree(e) {
  if (!ad())
    return {
      handled: !1,
      error:
        "Workspace trust not yet accepted. Run `claude` once in this directory and accept the trust dialog, then retry with --worktree.",
    };
  if ((await $n("tmux", ["-V"])).code !== 0)
    return {
      handled: !1,
      error: "Error: tmux is not installed. Install tmux with: sudo apt install tmux",
    };
  let n,
    r = !1;
  for (let v = 0; v < e.length; v++) {
    let C = e[v];
    if (!C) continue;
    if (C === "-w" || C === "--worktree") {
      let x = e[v + 1];
      if (x && !x.startsWith("-")) n = x;
    } else if (C.startsWith("--worktree=")) n = C.slice(11);
    else if (C === "--tmux=classic") r = !0;
  }
  let o = null;
  if (n) {
    if (((o = parsePRReference(n)), o !== null)) n = `pr-${o}`;
  }
  if (!n) {
    let v = ["swift", "bright", "calm", "keen", "bold"],
      C = ["fox", "owl", "elm", "oak", "ray"],
      x = v[Math.floor(Math.random() * v.length)],
      I = C[Math.floor(Math.random() * C.length)],
      k = Math.random().toString(36).slice(2, 6);
    n = `${x}-${I}-${k}`;
  }
  try {
    validateWorktreeSlug(n);
  } catch (v) {
    return {
      handled: !1,
      error: `Error: ${be(v)}`,
    };
  }
  let s, i;
  if (Jte()) {
    try {
      s = (await WYe(n)).worktreePath;
    } catch (v) {
      return {
        handled: !1,
        error: `Error: ${be(v)}`,
      };
    }
    ((i = Bd.basename(qf($t()) ?? $t())), console.log(`Using worktree via hook: ${s}`));
  } else {
    let v = $t(),
      C = qf(v);
    if (!C)
      return {
        handled: !1,
        error: "Error: --worktree requires a git repository",
      };
    ((i = Bd.basename(C)), (s = nac(C, n)));
    try {
      let x = await K5o(
        C,
        n,
        o !== null
          ? {
              prNumber: o,
              fromCwd: v,
            }
          : {
              fromCwd: v,
            },
      );
      if (!x.existed)
        (console.log(`Created worktree: ${s} (based on ${x.baseBranch})`), await Y5o(C, s));
    } catch (x) {
      return {
        handled: !1,
        error: `Error: ${be(x)}`,
      };
    }
  }
  let a = `${i}_${worktreeBranchName(n)}`.replace(/[/.]/g, "_"),
    l = [];
  for (let v = 0; v < e.length; v++) {
    let C = e[v];
    if (!C) continue;
    if (C === "--tmux" || C === "--tmux=classic") continue;
    if (C === "-w" || C === "--worktree") {
      let x = e[v + 1];
      if (x && !x.startsWith("-")) v++;
      continue;
    }
    if (C.startsWith("--worktree=")) continue;
    l.push(C);
  }
  let c = "C-b",
    u = await $n("tmux", ["show-options", "-g", "prefix"]);
  if (u.code === 0 && u.stdout) {
    let v = u.stdout.match(/prefix\s+(\S+)/);
    if (v?.[1]) c = v[1];
  }
  let p = ["C-b", "C-c", "C-d", "C-t", "C-o", "C-r", "C-s", "C-g", "C-e"].includes(c),
    f = {
      ...process.env,
      CLAUDE_CODE_TMUX_SESSION: a,
      CLAUDE_CODE_TMUX_PREFIX: c,
      CLAUDE_CODE_TMUX_PREFIX_CONFLICTS: p ? "1" : "",
    },
    g = (await $n("tmux", ["has-session", "-t", a])).code === 0,
    h = Boolean(process.env.TMUX),
    y = $6() && !r && !h,
    b = y ? ["-CC"] : [];
  if (y && !g) {
    let v = wt.yellow;
    console.log(`
${v("\u256D\u2500 iTerm2 Tip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E")}
${v("\u2502")} To open as a tab instead of a new window:                           ${v("\u2502")}
${v("\u2502")} iTerm2 > Settings > General > tmux > "Tabs in attaching window"     ${v("\u2502")}
${v("\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F")}
`);
  }
  if (!1) {
    if (
      (await Gr("tmux", ["new-session", "-d", "-s", a, "-c", s, "--", process.execPath, ...l], {
        cwd: s,
        env: f,
      }),
      await Gr("tmux", ["split-window", "-h", "-t", a, "-c", s], {
        cwd: s,
      }),
      await Gr("tmux", ["send-keys", "-t", a, "bun run watch", "Enter"], {
        cwd: s,
      }),
      await Gr("tmux", ["split-window", "-v", "-t", a, "-c", s], {
        cwd: s,
      }),
      await Gr("tmux", ["send-keys", "-t", a, "bun run start"], {
        cwd: s,
      }),
      await Gr("tmux", ["select-pane", "-t", `${a}:0.0`], {
        cwd: s,
      }),
      h)
    )
      await pv("tmux", ["switch-client", "-t", a], {
        stdio: "inherit",
        cwd: s,
        reject: !1,
      });
    else
      await pv("tmux", [...b, "attach-session", "-t", a], {
        stdio: "inherit",
        cwd: s,
        reject: !1,
      });
  } else if (h) {
    if (g)
      await pv("tmux", ["switch-client", "-t", a], {
        stdio: "inherit",
        cwd: s,
        reject: !1,
      });
    else
      (await Gr("tmux", ["new-session", "-d", "-s", a, "-c", s, "--", process.execPath, ...l], {
        cwd: s,
        env: f,
      }),
        await pv("tmux", ["switch-client", "-t", a], {
          stdio: "inherit",
          cwd: s,
          reject: !1,
        }));
  } else {
    let v = [...b, "new-session", "-A", "-s", a, "-c", s, "--", process.execPath, ...l];
    await pv("tmux", v, {
      stdio: "inherit",
      cwd: s,
      env: f,
      reject: !1,
    });
  }
  return {
    handled: !0,
  };
}
var eu,
  Qic,
  Bd,
  ltm,
  Yic = 64,
  WorktreeIsolationError,
  WorktreeGitTransientError,
  rac = "CLAUDE_BASE",
  dtm;
