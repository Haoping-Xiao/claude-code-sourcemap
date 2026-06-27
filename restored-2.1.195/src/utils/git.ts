// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BR
// matched 2.1.88 source: src/utils/git.ts
// class=modified  jaccard=0.2952  score=0.6301  fileCov=0.3571
// note: deminified; 32 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: stashToCleanState, redactGitRemoteCredentials, preserveGitStateForIssue, normalizeGitRemoteUrl, isLinkedWorktree, isCurrentDirectoryBareGitRepo, isBranchOnOrigin, isAtGitRoot, hasUnpushedCommits, gitExe, getWorktreeCount, getRepoRemoteHash, getRemoteUrlForBridge, getRemoteUrl, getIsHeadOnRemote, getIsGit, getIsClean, getHead, getGithubRepo, getGitWorktreeName, getGitState, getGitDir, getFileStatus, getDefaultBranch, getChangedFiles, getBranch, findRepoRemoteSlug, findRemoteBase, …
// [unwrapped __esm module BR] deps: Lo, je, Bi, sa, Mx, sr
cCe = new Map();
P$u = /^[A-Za-z0-9._-]+$/;
function M$u() {
  function e(t) {
    let n = FTs(t);
    return n === YTs ? null : n;
  }
  return ((e.cache = FTs.cache), e);
}
function isLinkedWorktree(e) {
  let t = findGitRoot(e);
  return t !== null && findCanonicalGitRoot(e) !== t;
}
async function getGitWorktreeName(e) {
  if (vl()) return null;
  let t = await E0(e);
  if (!t || yu.basename(t) === ".git" || yu.basename(yu.dirname(t)) !== "worktrees") return null;
  return yu.basename(t);
}
function $$u() {
  function e(t) {
    let n = findGitRoot(t);
    if (!n) return null;
    return jTs(n);
  }
  return ((e.cache = jTs.cache), e);
}
function getGitDir(e) {
  return E0(e);
}
async function isAtGitRoot() {
  let e = $t(),
    t = findGitRoot(e);
  if (!t) return !1;
  try {
    let [n, r] = await Promise.all([whe.realpath(e), whe.realpath(t)]);
    return n === r;
  } catch {
    return e === t;
  }
}
async function isBranchOnOrigin(e, t) {
  return (
    (
      await Gr(gitExe(), ["show-ref", "--verify", "--quiet", `refs/remotes/origin/${e}`], {
        cwd: t ?? $t(),
        preserveOutputOnError: !1,
      })
    ).code === 0
  );
}
function redactGitRemoteCredentials(e) {
  return e == null ? e : e.replace(/:\/\/[^/]*@/, "://***@");
}
function normalizeGitRemoteUrl(url) {
  let t = url.trim();
  if (!t) return null;
  let n = t.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
  if (n && n[1] && n[2]) return `${n[1]}/${n[2]}`.toLowerCase();
  let r = t.match(/^(?:https?|ssh):\/\/(?:[^@]+@)?([^/]+)\/(.+?)(?:\.git)?$/);
  if (r && r[1] && r[2]) {
    let o = r[1],
      s = r[2];
    if (q$u(o) && s.startsWith("git/")) {
      let i = s.slice(4),
        a = i.split("/");
      if (a.length >= 3 && a[0].includes(".")) return i.toLowerCase();
      return `github.com/${i}`.toLowerCase();
    }
    return `${o}/${s}`.toLowerCase();
  }
  return null;
}
function N$u(e) {
  for (let t of [yu.join(e, ".git", "config"), yu.join(e, "config")])
    try {
      return hM.readFileSync(t, "utf-8");
    } catch {}
  return null;
}
function findRepoRemoteSlug(e) {
  let t = B$u(e);
  return t === iRr ? null : t;
}
async function getRepoRemoteHash() {
  let e = await getRemoteUrl();
  if (!e) return null;
  let t = normalizeGitRemoteUrl(e);
  if (!t) return null;
  return zTs.createHash("sha256").update(t).digest("hex").substring(0, 16);
}
async function getGitState() {
  try {
    let [e, t, n, r, o, s] = await Promise.all([
      getHead(),
      getBranch(),
      getRemoteUrl(),
      getIsHeadOnRemote(),
      getIsClean(),
      getWorktreeCount(),
    ]);
    return (
      xe("git_status_fetch"),
      {
        commitHash: e,
        branchName: t,
        remoteUrl: n,
        isHeadOnRemote: r,
        isClean: o,
        worktreeCount: s,
      }
    );
  } catch (e) {
    return (It("git_status_fetch", "git_status_fetch_failed"), null);
  }
}
async function getGithubRepo() {
  let { parseGitRemote: e } = await Promise.resolve().then(() => (BR(), ARt)),
    t = await getRemoteUrl();
  if (!t) return (T("Local GitHub repo: unknown"), null);
  let n = e(t);
  if (n && $m(n.host)) {
    let r = `${n.owner}/${n.name}`;
    return (T(`Local GitHub repo: ${r}`), r);
  }
  return (T("Local GitHub repo: unknown"), null);
}
async function findRemoteBase() {
  let { stdout: e, code: t } = await $n(
    gitExe(),
    ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"],
    {
      preserveOutputOnError: !1,
    },
  );
  if (t === 0 && e.trim()) return e.trim();
  let { stdout: n, code: r } = await $n(
      gitExe(),
      ["symbolic-ref", "--short", "refs/remotes/origin/HEAD"],
      {
        preserveOutputOnError: !1,
      },
    ),
    o = ["origin/main", "origin/staging", "origin/master"],
    s = n.trim();
  if (r === 0 && s) o.unshift(s);
  for (let i of o) {
    let { code: a } = await $n(gitExe(), ["rev-parse", "--verify", i], {
      preserveOutputOnError: !1,
    });
    if (a === 0) return i;
  }
  return null;
}
function G$u() {
  return eRr();
}
async function captureUntrackedFiles() {
  let { stdout: e, code: t } = await $n(gitExe(), ["ls-files", "--others", "--exclude-standard"], {
      preserveOutputOnError: !1,
    }),
    n = e.trim();
  if (t !== 0 || !n) return [];
  let r = n
      .split(
        `
`,
      )
      .filter(Boolean),
    o = [],
    s = 0;
  for (let i of r) {
    if (o.length >= qTs) {
      T(`Untracked file capture: reached max file count (${qTs})`);
      break;
    }
    if (mRt(i)) continue;
    try {
      let l = (await whe.stat(i)).size;
      if (l > GTs) {
        T(`Untracked file capture: skipping ${i} (exceeds ${GTs} bytes)`);
        continue;
      }
      if (s + l > WTs) {
        T(`Untracked file capture: reached total size limit (${WTs} bytes)`);
        break;
      }
      if (l === 0) {
        o.push({
          path: i,
          content: "",
        });
        continue;
      }
      let c = Math.min(j$u, l),
        u = await whe.open(i, "r");
      try {
        let d = Buffer.alloc(c),
          { bytesRead: p } = await u.read(d, 0, c, 0),
          f = d.subarray(0, p);
        if (j0r(f)) continue;
        let m;
        if (l <= c) m = f.toString("utf-8");
        else m = await whe.readFile(i, "utf-8");
        (o.push({
          path: i,
          content: m,
        }),
          (s += l));
      } finally {
        await u.close();
      }
    } catch (a) {
      T(`Failed to read untracked file ${i}: ${a}`);
    }
  }
  return o;
}
async function preserveGitStateForIssue() {
  try {
    if (!(await getIsGit())) return null;
    if (await G$u()) {
      T("Shallow clone detected, using HEAD-only mode for issue");
      let [{ stdout: f }, m] = await Promise.all([
        $n(gitExe(), ["diff", "HEAD"]),
        captureUntrackedFiles(),
      ]);
      return {
        remote_base_sha: null,
        remote_base: null,
        patch: f || "",
        untracked_files: m,
        format_patch: null,
        head_sha: null,
        branch_name: null,
      };
    }
    let t = await findRemoteBase();
    if (!t) {
      T("No remote found, using HEAD-only mode for issue");
      let [{ stdout: f }, m] = await Promise.all([
        $n(gitExe(), ["diff", "HEAD"]),
        captureUntrackedFiles(),
      ]);
      return {
        remote_base_sha: null,
        remote_base: null,
        patch: f || "",
        untracked_files: m,
        format_patch: null,
        head_sha: null,
        branch_name: null,
      };
    }
    let { stdout: n, code: r } = await $n(gitExe(), ["merge-base", "HEAD", t], {
      preserveOutputOnError: !1,
    });
    if (r !== 0 || !n.trim()) {
      T("Merge-base failed, using HEAD-only mode for issue");
      let [{ stdout: f }, m] = await Promise.all([
        $n(gitExe(), ["diff", "HEAD"]),
        captureUntrackedFiles(),
      ]);
      return {
        remote_base_sha: null,
        remote_base: null,
        patch: f || "",
        untracked_files: m,
        format_patch: null,
        head_sha: null,
        branch_name: null,
      };
    }
    let o = n.trim(),
      [{ stdout: s }, i, { stdout: a, code: l }, { stdout: c }, { stdout: u }] = await Promise.all([
        $n(gitExe(), ["diff", o]),
        captureUntrackedFiles(),
        $n(gitExe(), ["format-patch", `${o}..HEAD`, "--stdout"]),
        $n(gitExe(), ["rev-parse", "HEAD"]),
        $n(gitExe(), ["rev-parse", "--abbrev-ref", "HEAD"]),
      ]),
      d = null;
    if (l === 0 && a && a.trim()) d = a;
    let p = u?.trim();
    return {
      remote_base_sha: o,
      remote_base: t,
      patch: s || "",
      untracked_files: i,
      format_patch: d,
      head_sha: c?.trim() || null,
      branch_name: p && p !== "HEAD" ? p : null,
    };
  } catch (e) {
    return (
      T(`Failed to preserve git state for issue: ${e}`, {
        level: "error",
      }),
      null
    );
  }
}
function q$u(e) {
  let t = bi(e, ":");
  return t === "localhost" || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(t);
}
function VTs(e, t) {
  let n = /\/+/,
    r = t.split(n),
    o = r[0] === "" ? yu.sep : r[0] + yu.sep,
    s = 0;
  for (let i = 1; i < r.length; i++) {
    let a = r[i];
    if (a === "" || a === ".") continue;
    if (a === "..") {
      o = yu.dirname(o);
      continue;
    }
    let l = o.endsWith(yu.sep) ? o + a : o + yu.sep + a,
      c;
    try {
      c = e.lstatSync(l);
    } catch {
      return null;
    }
    if (!c.isSymbolicLink()) {
      o = l;
      continue;
    }
    if (++s > 64) return null;
    let u;
    try {
      u = e.readlinkSync(l);
    } catch {
      return null;
    }
    if (Fc(u)) return null;
    let d = u.split(n);
    if (yu.isAbsolute(u))
      (r.splice(0, i + 1, ...d), (o = d[0] === "" ? yu.sep : d[0] + yu.sep), (i = 0));
    else (r.splice(i, 1, ...d), i--);
  }
  return o;
}
function isCurrentDirectoryBareGitRepo() {
  let e = qt(),
    t = $t(),
    n = VTs(e, t) ?? t;
  n = n.normalize("NFC").toLowerCase();
  let r = n.endsWith(yu.sep) ? n : n + yu.sep,
    o = (p) => {
      let f = p.toLowerCase();
      return f === n || f.startsWith(r);
    };
  function s(p) {
    if (Fc(p)) {
      if (!/^[\\/]{2}wsl(\$|\.localhost)[\\/]/i.test(p)) return null;
      if (!Fc(t))
        return {
          canonical: p.normalize("NFC"),
          crossOs: !0,
        };
    }
    let f = VTs(e, p);
    if (f === null) return null;
    return {
      canonical: f.normalize("NFC"),
      crossOs: !1,
    };
  }
  function i(p, f) {
    if (!f && o(p)) return !0;
    for (let m of p.split(f ? /[\\/]+/ : yu.sep)) if (m.toLowerCase() === ".git") return !1;
    return !0;
  }
  function a(p) {
    try {
      let f = e.lstatSync(yu.join(p, "HEAD"));
      if (!f.isFile() || f.size > 4096) return !1;
      let m = hM.readFileSync(yu.join(p, "HEAD"), "utf8").slice(0, 255);
      return /^ref:[ \t]*refs\//.test(m) || /^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(m);
    } catch {
      return !1;
    }
  }
  function l(p) {
    try {
      let f = yu.join(p, "HEAD"),
        m = e.lstatSync(f);
      if (!m.isFile() || m.size > 4096) return !1;
      let g = hM.readFileSync(f, "utf8").slice(0, 255);
      if (!/^ref:[ \t]*refs\//.test(g) && !/^[0-9a-f]{40}([0-9a-f]{24})?[ \t\n\r]*$/.test(g))
        return !1;
      for (let h of ["objects", "refs"]) {
        let y = yu.join(p, h);
        if (!e.statSync(y).isDirectory()) return !1;
        hM.accessSync(y, hM.constants.X_OK);
      }
      try {
        return (e.statSync(yu.join(p, "commondir")), !1);
      } catch {}
      return !0;
    } catch {
      return !1;
    }
  }
  function c(p) {
    try {
      let f = e.lstatSync(yu.join(p, "HEAD"));
      if (f.isFile() || f.isSymbolicLink()) return !0;
    } catch {}
    for (let f of ["objects", "refs"])
      try {
        return (e.statSync(yu.join(p, f)), !0);
      } catch {}
    return !1;
  }
  function u(p) {
    let f = (m) => {
      let g = s(m);
      if (g === null) return (It("git_bare_repo_gate", "gitdir_target_uncanonical"), "plantable");
      if (i(g.canonical, g.crossOs))
        return (It("git_bare_repo_gate", "gitdir_target_plantable"), "plantable");
      return a(g.canonical) ? "trusted" : "none";
    };
    try {
      let m = e.lstatSync(yu.join(p, ".git"));
      if (m.isSymbolicLink()) {
        let g;
        try {
          g = e.readlinkSync(yu.join(p, ".git"));
        } catch {
          return "plantable";
        }
        return f(yu.isAbsolute(g) ? g : p + yu.sep + g);
      }
      if (m.isFile()) {
        if (m.size > V$u) return "oversized";
        try {
          let g = hM.readFileSync(yu.join(p, ".git"), "utf8");
          if (g.includes("\x00")) return "plantable";
          if (!g.startsWith("gitdir: ")) return "none";
          let h = g.slice(8).replace(/[\r\n]+$/, "");
          return f(yu.isAbsolute(h) ? h : p + yu.sep + h);
        } catch {
          return "none";
        }
      }
      if (m.isDirectory()) return l(yu.join(p, ".git")) ? "trusted" : "none";
    } catch {}
    return "none";
  }
  switch (u(t)) {
    case "plantable":
      return "gitdir-redirect-plantable";
    case "oversized":
      return "gitdir-file-oversized";
    case "trusted":
      return (xe("git_bare_repo_gate"), !1);
    case "none":
      break;
  }
  let d = t;
  for (;;) {
    if (c(d)) return (It("git_bare_repo_gate", "bare_indicators"), "bare-indicators");
    let p = yu.dirname(d);
    if (p === d) break;
    switch (u(p)) {
      case "trusted":
        return (xe("git_bare_repo_gate"), !1);
      case "plantable":
        return "gitdir-redirect-plantable";
      case "oversized":
        return "gitdir-file-oversized";
      case "none":
        break;
    }
    d = p;
  }
  return (xe("git_bare_repo_gate"), !1);
}
var zTs,
  hM,
  whe,
  KTs,
  yu,
  YTs,
  FTs,
  findGitRoot,
  jTs,
  findCanonicalGitRoot,
  gitExe,
  getIsGit,
  dirIsInGitRepo = async (e) => findGitRoot(e) !== null,
  getHead = async () => K0r(),
  getBranch = async (e) => {
    if (e === void 0) return z0r();
    let { stdout: t, code: n } = await Gr(gitExe(), ["rev-parse", "--abbrev-ref", "HEAD"], {
      cwd: e,
      preserveOutputOnError: !1,
    });
    return n === 0 ? t.trim() || "HEAD" : "HEAD";
  },
  getDefaultBranch = async (e) => {
    if (e === void 0) return Y0r();
    let { stdout: t, code: n } = await Gr(
        gitExe(),
        ["symbolic-ref", "--short", "refs/remotes/origin/HEAD"],
        {
          cwd: e,
          preserveOutputOnError: !1,
        },
      ),
      r = n === 0 ? t.trim().replace(/^origin\//, "") : "",
      o = r ? [r, "main", "master"] : ["main", "master"];
    for (let s of o)
      if (
        (
          await Gr(gitExe(), ["show-ref", "--verify", "--quiet", `refs/remotes/origin/${s}`], {
            cwd: e,
            preserveOutputOnError: !1,
          })
        ).code === 0
      )
        return s;
    return "main";
  },
  getRemoteUrl = async () => ffn(),
  getRemoteUrlForBridge = async () => {
    let e = findGitRoot($t());
    if (e === null) return null;
    try {
      let t = KTs.homedir();
      if (t && e === o_(yu.resolve(t))) return null;
    } catch {}
    return ffn();
  },
  iRr,
  B$u,
  getIsHeadOnRemote = async () => {
    let { code: e } = await $n(gitExe(), ["rev-parse", "@{u}"], {
      preserveOutputOnError: !1,
    });
    return e === 0;
  },
  hasUnpushedCommits = async (e) => {
    let { stdout: t, code: n } = await Gr(gitExe(), ["rev-list", "--count", "@{u}..HEAD"], {
      cwd: e,
      preserveOutputOnError: !1,
    });
    return n === 0 && parseInt(t.trim(), 10) > 0;
  },
  getIsClean = async (options) => {
    let t = ["--no-optional-locks", "status", "--porcelain"];
    if (options?.ignoreUntracked) t.push("-uno");
    let { stdout: n } = await $n(gitExe(), t, {
      preserveOutputOnError: !1,
    });
    return n.trim().length === 0;
  },
  getChangedFiles = async () => {
    let { stdout: e } = await $n(gitExe(), ["--no-optional-locks", "status", "--porcelain"], {
      preserveOutputOnError: !1,
    });
    return e
      .trim()
      .split(
        `
`,
      )
      .map((t) => t.trim().split(" ", 2)[1]?.trim())
      .filter((t) => typeof t === "string");
  },
  getFileStatus = async () => {
    let { stdout: e } = await $n(gitExe(), ["--no-optional-locks", "status", "--porcelain"], {
        preserveOutputOnError: !1,
      }),
      t = [],
      n = [];
    return (
      e
        .trim()
        .split(
          `
`,
        )
        .filter((r) => r.length > 0)
        .forEach((r) => {
          let o = r.substring(0, 2),
            s = r.substring(2).trim();
          if (o === "??") n.push(s);
          else if (s) t.push(s);
        }),
      {
        tracked: t,
        untracked: n,
      }
    );
  },
  getWorktreeCount = async () => tRr(),
  stashToCleanState = async (message) => {
    try {
      let t = message || `Claude Code auto-stash - ${new Date().toISOString()}`,
        { untracked: n } = await getFileStatus();
      if (n.length > 0) {
        let { code: o } = await $n(gitExe(), ["add", "--", ...n], {
          preserveOutputOnError: !1,
        });
        if (o !== 0) return !1;
      }
      let { code: r } = await $n(gitExe(), ["stash", "push", "--message", t], {
        preserveOutputOnError: !1,
      });
      return r === 0;
    } catch (t) {
      return !1;
    }
  },
  GTs = 1048576,
  WTs = 52428800,
  qTs = 200,
  j$u = 65536,
  V$u = 4096;
