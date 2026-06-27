// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RTs
// matched 2.1.88 source: src/utils/git/gitFilesystem.ts
// class=modified  jaccard=0.5437  score=0.7142  fileCov=0.6949
// note: deminified; 25 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: resolveRef, resolveGitDir, resetGitFileWatcher, removeWatchedRepo, reanchorGitFileWatcher, readWorktreeHeadSha, readRawSymref, readGitHead, onRepoBranchChange, isValidGitSha, isShallowClone, getWorktreeCountFromFs, getRemoteUrlForDir, getHeadForDir, getCommonDir, getCachedRemoteUrl, getCachedHead, getCachedDefaultBranch, getCachedBranchForRepo, getCachedBranch, clearResolveGitDirCache, addWatchedRepo
// [unwrapped __esm module RTs]
((ITs = require("fs/promises")), (xTs = require("path")), (w$u = /^[0-9a-f]+$/));
function clearResolveGitDirCache() {
  met.clear();
}
async function resolveGitDir(e) {
  let t = mM.resolve(e ?? $t()),
    n = met.get(t);
  if (n !== void 0) return n;
  let r = Tu(t);
  if (!r) return (met.set(t, null), null);
  let o = mM.join(r, ".git");
  try {
    if ((await fY.stat(o)).isFile()) {
      let i = (await fY.readFile(o, "utf-8")).trim();
      if (i.startsWith("gitdir:")) {
        let a = i.slice(7).trim(),
          l = mM.resolve(r, a);
        return (met.set(t, l), l);
      }
    }
    return (met.set(t, o), o);
  } catch {
    return (met.set(t, null), null);
  }
}
function isValidGitSha(e) {
  return /^[0-9a-f]{40}$/.test(e) || /^[0-9a-f]{64}$/.test(e);
}
async function readGitHead(e) {
  try {
    let t = (await fY.readFile(mM.join(e, "HEAD"), "utf-8")).trim();
    if (t.startsWith("ref:")) {
      let n = t.slice(4).trim();
      if (n.startsWith("refs/heads/")) {
        let o = n.slice(11);
        if (!Uie(o)) return null;
        return {
          type: "branch",
          name: o,
        };
      }
      if (!Uie(n)) return null;
      let r = await resolveRef(e, n);
      return r
        ? {
            type: "detached",
            sha: r,
          }
        : {
            type: "detached",
            sha: "",
          };
    }
    if (!isValidGitSha(t)) return null;
    return {
      type: "detached",
      sha: t,
    };
  } catch {
    return null;
  }
}
async function resolveRef(e, t) {
  let n = await LTs(e, t);
  if (n) return n;
  let r = await getCommonDir(e);
  if (r && r !== e) return LTs(r, t);
  return null;
}
async function LTs(e, t) {
  try {
    let n = (await fY.readFile(mM.join(e, t), "utf-8")).trim();
    if (n.startsWith("ref:")) {
      let r = n.slice(4).trim();
      if (!Uie(r)) return null;
      return resolveRef(e, r);
    }
    if (!isValidGitSha(n)) return null;
    return n;
  } catch {}
  return kTs(e, t);
}
async function getCommonDir(e) {
  try {
    let t = (await fY.readFile(mM.join(e, "commondir"), "utf-8")).trim();
    return mM.resolve(e, t);
  } catch {
    return null;
  }
}
async function readRawSymref(e, t, n) {
  try {
    let r = (await fY.readFile(mM.join(e, t), "utf-8")).trim();
    if (r.startsWith("ref:")) {
      let o = r.slice(4).trim();
      if (o.startsWith(n)) {
        let s = o.slice(n.length);
        if (!Uie(s)) return null;
        return s;
      }
    }
  } catch {}
  return null;
}
class GitFileWatcher {
  gitDir = null;
  commonDir = null;
  initialized = false;
  initPromise = null;
  watchedFiles = [];
  branchRefPath = null;
  generation = 0;
  cache = new Map();
  repoBranches = new Map();
  repoWatchers = new Map();
  repoBranchListeners = [];
  async ensureStarted() {
    if (this.initialized) return;
    if (this.initPromise) return this.initPromise;
    return ((this.initPromise = this.start()), this.initPromise);
  }
  cleanupRegistered = false;
  async start() {
    let e = this.generation;
    if (vl()) {
      ((this.gitDir = null), (this.initialized = true));
      return;
    }
    let t = await resolveGitDir();
    if (e !== this.generation) return;
    if (((this.gitDir = t), (this.initialized = true), !this.cleanupRegistered))
      ((this.cleanupRegistered = true),
        Ci(async () => {
          this.stopWatching();
        }));
    if (!this.gitDir) return;
    let n = await getCommonDir(this.gitDir);
    if (e !== this.generation) return;
    ((this.commonDir = n),
      this.watchPath(mM.join(this.gitDir, "HEAD"), () => {
        this.onHeadChanged();
      }),
      this.watchPath(mM.join(this.commonDir ?? this.gitDir, "config"), () => {
        this.invalidate();
      }),
      await this.watchCurrentBranchRef());
  }
  watchPath(e, t) {
    let n = hRt(
      e,
      {
        interval: DTs,
      },
      t,
    );
    this.watchedFiles.push({
      path: e,
      listener: n,
    });
  }
  async watchCurrentBranchRef() {
    if (!this.gitDir) return;
    let e = this.generation,
      t = await readGitHead(this.gitDir);
    if (e !== this.generation) return;
    let n = this.commonDir ?? this.gitDir,
      r = t?.type === "branch" ? mM.join(n, "refs", "heads", t.name) : null;
    if (r === this.branchRefPath) return;
    if (this.branchRefPath) {
      for (let { path: o, listener: s } of this.watchedFiles)
        if (o === this.branchRefPath) fet.unwatchFile(o, s);
      this.watchedFiles = this.watchedFiles.filter((o) => o.path !== this.branchRefPath);
    }
    if (((this.branchRefPath = r), !r)) return;
    this.watchPath(r, () => {
      this.invalidate();
    });
  }
  async onHeadChanged() {
    (this.invalidate(), await lCt(), await this.watchCurrentBranchRef());
  }
  invalidate() {
    for (let e of this.cache.values()) e.dirty = true;
  }
  stopWatching() {
    for (let { path: e, listener: t } of this.watchedFiles) fet.unwatchFile(e, t);
    for (let { headPath: e, listener: t } of this.repoWatchers.values()) fet.unwatchFile(e, t);
    ((this.watchedFiles = []), (this.branchRefPath = null));
  }
  async get(e, t) {
    for (;;) {
      let n = this.generation;
      await this.ensureStarted();
      let r = this.cache.get(e);
      if (r && !r.dirty) return r.value;
      if (r) r.dirty = false;
      let o = await t();
      if (n !== this.generation) continue;
      let s = this.cache.get(e);
      if (s && !s.dirty) s.value = o;
      if (!s)
        this.cache.set(e, {
          value: o,
          dirty: false,
          compute: t,
        });
      return o;
    }
  }
  async addRepo(e) {
    if (this.repoWatchers.has(e)) return;
    let t = await resolveGitDir(e);
    if (!t) return;
    if (this.repoWatchers.has(e)) return;
    let n = mM.join(t, "HEAD"),
      r = hRt(
        n,
        {
          interval: DTs,
        },
        () => {
          this.repoBranches.delete(e);
          for (let o of this.repoBranchListeners) o();
        },
      );
    this.repoWatchers.set(e, {
      gitDir: t,
      headPath: n,
      listener: r,
    });
  }
  removeRepo(e) {
    let t = this.repoWatchers.get(e);
    if (!t) return;
    (fet.unwatchFile(t.headPath, t.listener),
      this.repoWatchers.delete(e),
      this.repoBranches.delete(e));
  }
  onRepoBranchChange(e) {
    return (
      this.repoBranchListeners.push(e),
      () => {
        let t = this.repoBranchListeners.indexOf(e);
        if (t !== -1) this.repoBranchListeners.splice(t, 1);
      }
    );
  }
  async getBranchForRepo(e) {
    if (this.repoBranches.has(e)) return this.repoBranches.get(e);
    let t = this.repoWatchers.get(e)?.gitDir;
    if (!t) return;
    let n = await readGitHead(t),
      r = n?.type === "branch" ? n.name : null;
    return (this.repoBranches.set(e, r), r);
  }
  reset() {
    (this.generation++,
      this.stopWatching(),
      this.cache.clear(),
      this.repoBranches.clear(),
      this.repoWatchers.clear(),
      (this.repoBranchListeners = []),
      (this.initialized = false),
      (this.initPromise = null),
      (this.gitDir = null),
      (this.commonDir = null));
  }
  reanchor() {
    this.generation++;
    for (let { path: e, listener: t } of this.watchedFiles) fet.unwatchFile(e, t);
    ((this.watchedFiles = []),
      (this.branchRefPath = null),
      this.cache.clear(),
      (this.initialized = false),
      (this.initPromise = null),
      (this.gitDir = null),
      (this.commonDir = null));
  }
}
async function C$u() {
  let e = await resolveGitDir();
  if (!e) return "HEAD";
  let t = await readGitHead(e);
  if (!t) return "HEAD";
  return t.type === "branch" ? t.name : "HEAD";
}
async function I$u() {
  let e = await resolveGitDir();
  if (!e) return "";
  let t = await readGitHead(e);
  if (!t) return "";
  if (t.type === "branch") return (await resolveRef(e, `refs/heads/${t.name}`)) ?? "";
  return t.sha;
}
async function computeRemoteUrl(e) {
  return (await gRt(e, "remote", "origin", "pushurl")) || (await gRt(e, "remote", "origin", "url"));
}
async function x$u() {
  let e = await resolveGitDir();
  if (!e) return null;
  let t = await computeRemoteUrl(e);
  if (t) return t;
  let n = await getCommonDir(e);
  if (n && n !== e) return computeRemoteUrl(n);
  return null;
}
async function computeDefaultBranch() {
  let e = await resolveGitDir();
  if (!e) return "main";
  let t = (await getCommonDir(e)) ?? e,
    n = await readRawSymref(t, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
  if (n && (await resolveRef(t, `refs/remotes/origin/${n}`))) return n;
  for (let r of ["main", "master"]) if (await resolveRef(t, `refs/remotes/origin/${r}`)) return r;
  return "main";
}
function getCachedBranch() {
  return Lae.get("branch", C$u);
}
function getCachedHead() {
  return Lae.get("head", I$u);
}
function getCachedRemoteUrl() {
  return Lae.get("remoteUrl", x$u);
}
function getCachedDefaultBranch() {
  return Lae.get("defaultBranch", computeDefaultBranch);
}
function addWatchedRepo(e) {
  return Lae.addRepo(e);
}
function removeWatchedRepo(e) {
  Lae.removeRepo(e);
}
function onRepoBranchChange(e) {
  return Lae.onRepoBranchChange(e);
}
function getCachedBranchForRepo(e) {
  return Lae.getBranchForRepo(e);
}
function resetGitFileWatcher() {
  Lae.reset();
}
function reanchorGitFileWatcher() {
  Lae.reanchor();
}
async function getHeadForDir(e) {
  let t = await resolveGitDir(e);
  if (!t) return null;
  let n = await readGitHead(t);
  if (!n) return null;
  if (n.type === "branch") return resolveRef(t, `refs/heads/${n.name}`);
  return n.sha;
}
async function readWorktreeHeadSha(e) {
  let t;
  try {
    let r = (await fY.readFile(mM.join(e, ".git"), "utf-8")).trim();
    if (!r.startsWith("gitdir:")) return null;
    t = mM.resolve(e, r.slice(7).trim());
  } catch {
    return null;
  }
  let n = await readGitHead(t);
  if (!n) return null;
  if (n.type === "branch") return resolveRef(t, `refs/heads/${n.name}`);
  return n.sha;
}
async function getRemoteUrlForDir(e) {
  let t = await resolveGitDir(e);
  if (!t) return null;
  let n = await computeRemoteUrl(t);
  if (n) return n;
  let r = await getCommonDir(t);
  if (r && r !== t) return computeRemoteUrl(r);
  return null;
}
async function isShallowClone() {
  let e = await resolveGitDir();
  if (!e) return false;
  let t = (await getCommonDir(e)) ?? e;
  try {
    return (await fY.stat(mM.join(t, "shallow")), true);
  } catch {
    return false;
  }
}
async function getWorktreeCountFromFs() {
  try {
    let e = await resolveGitDir();
    if (!e) return 0;
    let t = (await getCommonDir(e)) ?? e;
    return (await fY.readdir(mM.join(t, "worktrees"))).length + 1;
  } catch {
    return 1;
  }
}
var fet,
  fY,
  mM,
  met,
  DTs = 1000,
  Lae;
