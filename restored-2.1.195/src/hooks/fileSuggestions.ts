// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZYt
// matched 2.1.88 source: src/hooks/fileSuggestions.ts
// class=modified  jaccard=0.6449  score=0.838  fileCov=0.7367
// note: deminified; 13 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ZYt = E(() => {
  er();
  dr();
  PM();
});
var YDl = {};
_t(YDl, {
  startBackgroundCacheRefresh: () => startBackgroundCacheRefresh,
  resetFileIndexCache: () => resetFileIndexCache,
  pathListSignature: () => pathListSignature,
  normalizeGitPathsAsync: () => normalizeGitPathsAsync,
  globalFileIndexCache: () => globalFileIndexCache,
  getPathsForSuggestions: () => getPathsForSuggestions,
  getDirectoryNamesAsync: () => getDirectoryNamesAsync,
  getDirectoryNames: () => getDirectoryNames,
  generateFileSuggestions: () => generateFileSuggestions,
  findLongestCommonPrefix: () => findLongestCommonPrefix,
  filterIgnoredAsync: () => filterIgnoredAsync,
  createFileIndexCache: () => createFileIndexCache,
  applyFileSuggestion: () => applyFileSuggestion,
});
function createFileIndexCache() {
  return {
    fileIndex: null,
    fileListRefreshPromise: null,
    cacheGeneration: 0,
    untrackedFetchPromise: null,
    cachedTrackedFiles: [],
    cachedConfigFiles: [],
    cachedTrackedDirs: [],
    ignorePatternsCache: null,
    ignorePatternsCacheKey: null,
    lastRefreshMs: 0,
    lastScanDurationMs: null,
    lastGitIndexMtime: null,
    loadedTrackedSignature: null,
    loadedMergedSignature: null,
    normalizedTrackedInputs: null,
    indexBuildComplete: Mi(),
  };
}
function resetFileIndexCache(e) {
  ((e.fileIndex = null),
    (e.fileListRefreshPromise = null),
    e.cacheGeneration++,
    (e.untrackedFetchPromise = null),
    (e.cachedTrackedFiles = []),
    (e.cachedConfigFiles = []),
    (e.cachedTrackedDirs = []),
    (e.ignorePatternsCache = null),
    (e.ignorePatternsCacheKey = null),
    (e.lastRefreshMs = 0),
    (e.lastScanDurationMs = null),
    (e.lastGitIndexMtime = null),
    (e.loadedTrackedSignature = null),
    (e.loadedMergedSignature = null),
    (e.normalizedTrackedInputs = null));
}
function pathListSignature(e) {
  let t = e.length,
    n = Math.max(1, Math.floor(t / 500)),
    r = -2128831035;
  for (let o = 0; o < t; o += n) {
    let s = e[o];
    for (let i = 0; i < s.length; i++) r = ((r ^ s.charCodeAt(i)) * 16777619) | 0;
    r = (r * 16777619) | 0;
  }
  if (t > 0) {
    let o = e[t - 1];
    for (let s = 0; s < o.length; s++) r = ((r ^ o.charCodeAt(s)) * 16777619) | 0;
  }
  return `${t}:${(r >>> 0).toString(16)}`;
}
function e0f() {
  let e = Tu($t());
  if (!e) return null;
  try {
    return WDl.statSync(jN.join(e, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}
async function normalizeGitPathsAsync(e, t, n) {
  if (n === t) return e;
  let r = Array(e.length),
    o = performance.now();
  for (let s = 0; s < e.length; s++) {
    let i = jN.join(t, e[s]);
    if (((r[s] = jN.relative(n, i)), (s & 255) === 255 && performance.now() - o > Uer))
      (await XSt(), (o = performance.now()));
  }
  return r;
}
async function t0f(e, t) {
  if (t.length === 0) return;
  if (!e.fileIndex) return;
  let n = await getDirectoryNamesAsync(t),
    r = [...e.cachedTrackedFiles, ...e.cachedConfigFiles, ...e.cachedTrackedDirs, ...t, ...n],
    o = pathListSignature(r);
  if (o === e.loadedMergedSignature) {
    T("[FileIndex] skipped index rebuild \u2014 merged paths unchanged");
    return;
  }
  if (await e.fileIndex.loadFromFileListAsync(r).done)
    ((e.loadedMergedSignature = o),
      T(
        `[FileIndex] rebuilt index with ${e.cachedTrackedFiles.length} tracked + ${t.length} untracked files`,
      ));
}
async function GDl(e, t, n) {
  let r = `${t}:${n}`;
  if (e.ignorePatternsCacheKey === r) return e.ignorePatternsCache;
  let o = qt(),
    s = [".ignore", ".rgignore"],
    i = Uo([t, n]),
    a = qDl.default(),
    l = !1,
    c = i.flatMap((p) => s.map((f) => jN.join(p, f))),
    u = await Promise.all(
      c.map((p) =>
        o
          .readFile(p, {
            encoding: "utf8",
          })
          .catch(() => null),
      ),
    );
  for (let [p, f] of u.entries()) {
    if (f === null) continue;
    (a.add(f), (l = !0), T(`[FileIndex] loaded ignore patterns from ${c[p]}`));
  }
  let d = l ? a : null;
  return ((e.ignorePatternsCache = d), (e.ignorePatternsCacheKey = r), d);
}
async function filterIgnoredAsync(e, t) {
  let n = [],
    r = performance.now();
  for (let o = 0; o < t.length; o++) {
    if (!e.ignores(t[o])) n.push(t[o]);
    if ((o & 255) === 255 && performance.now() - r > Uer) (await XSt(), (r = performance.now()));
  }
  return n;
}
async function n0f(e, t, n) {
  let r = Date.now(),
    o = e.cacheGeneration;
  T("[FileIndex] getFilesUsingGit called");
  let s = Tu($t());
  if (!s) return (T("[FileIndex] not a git repo, returning null"), null);
  try {
    let i = $t(),
      a = Date.now(),
      l = await Gr(go(), ["-c", "core.quotepath=false", "ls-files", "--recurse-submodules"], {
        timeout: 5000,
        abortSignal: t,
        cwd: s,
      });
    if ((T(`[FileIndex] git ls-files (tracked) took ${Date.now() - a}ms`), l.code !== 0))
      return (
        T(
          `[FileIndex] git ls-files failed (code=${l.code}, stderr=${l.stderr}), falling back to ripgrep`,
        ),
        null
      );
    let c = e.normalizedTrackedInputs,
      u,
      d = null;
    if (
      c !== null &&
      c.repoRoot === s &&
      c.cwd === i &&
      c.rawStdout === l.stdout &&
      e.cachedTrackedFiles.length > 0
    )
      ((u = e.cachedTrackedFiles),
        T("[FileIndex] skipped path normalization \u2014 raw git paths unchanged"));
    else {
      let f = l.stdout
        .trim()
        .split(
          `
`,
        )
        .filter(Boolean);
      u = await normalizeGitPathsAsync(f, s, i);
      let m = await GDl(e, s, i);
      if (m) {
        let g = u.length;
        ((u = await filterIgnoredAsync(m, u)),
          T(`[FileIndex] applied ignore patterns: ${g} -> ${u.length} files`));
      }
      d = {
        repoRoot: s,
        cwd: i,
        rawStdout: l.stdout,
      };
    }
    if (o !== e.cacheGeneration)
      return (T("[FileIndex] discarding refresh results \u2014 cache was reset mid-refresh"), u);
    if (d !== null) e.normalizedTrackedInputs = d;
    e.cachedTrackedFiles = u;
    let p = Date.now() - r;
    if (
      (T(`[FileIndex] git ls-files: ${u.length} tracked files in ${p}ms`),
      G("tengu_file_suggestions_git_ls_files", {
        file_count: u.length,
        tracked_count: u.length,
        untracked_count: 0,
        duration_ms: p,
      }),
      !e.untrackedFetchPromise)
    ) {
      let f = n
          ? ["-c", "core.quotepath=false", "ls-files", "--others", "--exclude-standard"]
          : ["-c", "core.quotepath=false", "ls-files", "--others"],
        m = e.cacheGeneration;
      e.untrackedFetchPromise = Gr(go(), f, {
        timeout: 1e4,
        cwd: s,
      })
        .then(async (g) => {
          if (m !== e.cacheGeneration) return;
          if (g.code === 0) {
            let h = g.stdout
                .trim()
                .split(
                  `
`,
                )
                .filter(Boolean),
              y = await normalizeGitPathsAsync(h, s, i),
              b = await GDl(e, s, i);
            if (b && y.length > 0) {
              let _ = y.length;
              ((y = await filterIgnoredAsync(b, y)),
                T(`[FileIndex] applied ignore patterns to untracked: ${_} -> ${y.length} files`));
            }
            return (T(`[FileIndex] background untracked fetch: ${y.length} files`), t0f(e, y));
          }
        })
        .catch((g) => {
          T(`[FileIndex] background untracked fetch failed: ${g}`);
        })
        .finally(() => {
          e.untrackedFetchPromise = null;
        });
    }
    return u;
  } catch (i) {
    return (T(`[FileIndex] git ls-files error: ${be(i)}`), null);
  }
}
function getDirectoryNames(e) {
  let t = new Set();
  return (zDl(e, 0, e.length, t), [...t].map((n) => n + jN.sep));
}
async function getDirectoryNamesAsync(e) {
  let t = new Set(),
    n = performance.now();
  for (let r = 0; r < e.length; r++)
    if ((zDl(e, r, r + 1, t), (r & 255) === 255 && performance.now() - n > Uer))
      (await XSt(), (n = performance.now()));
  return [...t].map((r) => r + jN.sep);
}
function zDl(e, t, n, r) {
  for (let o = t; o < n; o++) {
    let s = jN.dirname(e[o]);
    while (s !== "." && !r.has(s)) {
      let i = jN.dirname(s);
      if (i === s) break;
      (r.add(s), (s = i));
    }
  }
}
async function o0f(e) {
  return (await Promise.all(XDl.map((n) => _q(n, e)))).flatMap((n) => n.map((r) => r.filePath));
}
async function s0f(e, t, n) {
  T(`[FileIndex] getProjectFiles called, respectGitignore=${n}`);
  let r = await n0f(e, t, n);
  if (r !== null) return (T(`[FileIndex] using git ls-files result (${r.length} files)`), r);
  T("[FileIndex] git ls-files returned null, falling back to ripgrep");
  let o = Date.now(),
    s = $t(),
    i = null,
    a;
  {
    let u = [
      "--files",
      "--follow",
      "--hidden",
      "--glob",
      "!.git/",
      "--glob",
      "!.svn/",
      "--glob",
      "!.hg/",
      "--glob",
      "!.bzr/",
      "--glob",
      "!.jj/",
      "--glob",
      "!.sl/",
    ];
    if (!n) u.push("--no-ignore-vcs");
    a = await Aue(u, s, t);
  }
  let l = a.map((u) => jN.relative(s, u)),
    c = Date.now() - o;
  return (
    T(`[FileIndex] ripgrep: ${l.length} files in ${c}ms`),
    G("tengu_file_suggestions_ripgrep", {
      file_count: l.length,
      duration_ms: c,
    }),
    l
  );
}
async function getPathsForSuggestions(e) {
  let t = AbortSignal.timeout(1e4),
    n = (e.fileIndex ??= new QYt());
  try {
    let r = Dr(),
      o = Dt(),
      s = r.respectGitignore ?? o.respectGitignore ?? !0,
      i = $t(),
      [a, l] = await Promise.all([s0f(e, t, s), o0f(i)]);
    e.cachedConfigFiles = l;
    let c = [...a, ...l],
      u = await getDirectoryNamesAsync(c);
    e.cachedTrackedDirs = u;
    let d = [...u, ...c],
      p = pathListSignature(d);
    if (p !== e.loadedTrackedSignature) {
      if (await n.loadFromFileListAsync(d).done)
        ((e.loadedTrackedSignature = p), (e.loadedMergedSignature = null));
    } else T("[FileIndex] skipped index rebuild \u2014 tracked paths unchanged");
  } catch (r) {
    T(`[FileIndex] getPathsForSuggestions failed: ${be(r)}`, {
      level: "error",
    });
  }
  return n;
}
function i0f(e, t) {
  let n = Math.min(e.length, t.length),
    r = 0;
  while (r < n && e[r] === t[r]) r++;
  return e.substring(0, r);
}
function findLongestCommonPrefix(e) {
  if (e.length === 0) return "";
  let t = e.map((r) => r.displayText),
    n = t[0];
  for (let r = 1; r < t.length; r++) {
    let o = t[r];
    if (((n = i0f(n, o)), n === "")) return "";
  }
  return n;
}
function jer(e, t) {
  return {
    id: `file-${e}`,
    displayText: e,
    metadata:
      t !== void 0
        ? {
            score: t,
          }
        : void 0,
  };
}
function a0f(e, t) {
  return e.search(t, AOo).map((r) => jer(r.path, r.score));
}
function startBackgroundCacheRefresh(e) {
  if (e.fileListRefreshPromise) return;
  let t = e0f();
  if (e.fileIndex) {
    if (
      t === null &&
      e.lastRefreshMs > 0 &&
      e.lastScanDurationMs !== null &&
      e.lastScanDurationMs > c0f
    )
      return;
    if (!(t !== null && t !== e.lastGitIndexMtime) && Date.now() - e.lastRefreshMs < l0f) return;
  }
  let n = e.cacheGeneration,
    r = Date.now();
  ((e.fileIndex ??= new QYt()),
    (e.fileListRefreshPromise = getPathsForSuggestions(e)
      .then((o) => {
        if (n !== e.cacheGeneration) return o;
        ((e.fileListRefreshPromise = null), e.indexBuildComplete.emit(), (e.lastGitIndexMtime = t));
        let s = Date.now();
        return (
          (e.lastRefreshMs = s),
          (e.lastScanDurationMs = s - r),
          T(`[FileIndex] cache refresh completed in ${e.lastScanDurationMs}ms`),
          o
        );
      })
      .catch((o) => {
        if ((T(`[FileIndex] Cache refresh failed: ${be(o)}`), ke(o), n === e.cacheGeneration))
          e.fileListRefreshPromise = null;
        return (e.fileIndex ??= new QYt());
      })));
}
async function u0f() {
  let e = qt(),
    t = $t();
  try {
    return (await e.readdir(t)).map((r) => {
      let o = jN.join(t, r.name),
        s = jN.relative(t, o);
      return r.isDirectory() ? s + jN.sep : s;
    });
  } catch (n) {
    return (
      T(`[FileSuggestions] readdir failed for cwd: ${be(n)}`, {
        level: "error",
      }),
      []
    );
  }
}
async function generateFileSuggestions(e, t, n = !1) {
  if (vl()) {
    if (!t && !n) return [];
    return d0f(t);
  }
  if (!t && !n) return [];
  if (Fer(Dr().fileSuggestion)?.type === "command") {
    let s = {
      ...Td(),
      query: t,
    };
    return (await COo(s)).slice(0, AOo).map(jer);
  }
  if (t === "" || t === "." || t === "./") {
    let s = await u0f();
    return (startBackgroundCacheRefresh(e), s.slice(0, AOo).map(jer));
  }
  let o = Date.now();
  try {
    let s = e.fileListRefreshPromise !== null;
    startBackgroundCacheRefresh(e);
    let i = t,
      a = "." + jN.sep;
    if (t.startsWith(a)) i = t.substring(2);
    if (i.startsWith("~")) i = ds(i);
    let l = e.fileIndex ? a0f(e.fileIndex, i) : [],
      c = Date.now() - o;
    return (
      T(
        `[FileIndex] generateFileSuggestions: ${l.length} results in ${c}ms (${s ? "partial" : "full"} index)`,
      ),
      G("tengu_file_suggestions_query", {
        duration_ms: c,
        cache_hit: !s,
        result_count: l.length,
        query_length: t.length,
      }),
      l
    );
  } catch (s) {
    return (ke(s), []);
  }
}
async function d0f(e) {
  let t = Ju();
  if (!t || !NA()) return [];
  try {
    return (
      await t.sendControlRequest({
        subtype: "file_suggestions",
        query: e,
      })
    ).suggestions.map((r) => jer(r.path, r.score));
  } catch (n) {
    return (T(`[FileIndex] remote file_suggestions RPC failed: ${be(n)}`), []);
  }
}
function applyFileSuggestion(e, t, n, r, o, s) {
  let i = typeof e === "string" ? e : e.displayText,
    a = t.substring(0, r) + i + t.substring(r + n.length);
  o(a);
  let l = r + i.length;
  return (s(l), a);
}
var WDl,
  qDl,
  jN,
  globalFileIndexCache,
  AOo = 15,
  l0f = 5000,
  c0f = 1000;
