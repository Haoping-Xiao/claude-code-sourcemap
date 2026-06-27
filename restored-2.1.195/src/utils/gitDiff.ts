// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module a6n
// matched 2.1.88 source: src/utils/gitDiff.ts
// class=modified  jaccard=0.4907  score=0.7785  fileCov=0.5703
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module a6n] deps: utils/debug.ts
Dvo = require("crypto");
async function ftl(e) {
  if (!(await cb())) return null;
  if (await isInTransientGitState()) return null;
  let n = await fetchGitDiff("HEAD", e);
  if (n === null) return null;
  if (n.stats.filesCount > $vo)
    return {
      ...n,
      hunks: new Map(),
      source: {
        kind: "working-tree",
      },
    };
  let r = Mvo - n.perFileStats.size;
  if (r > 0) {
    let i = await fetchUntrackedFiles(r, e);
    if (i) {
      n.stats.filesCount += i.size;
      for (let [a, l] of i) n.perFileStats.set(a, l);
    }
  }
  if (n.stats.filesCount > 0)
    return {
      ...n,
      hunks: new Map(),
      source: {
        kind: "working-tree",
      },
    };
  let o = await getDiffRef(e);
  if (o === null)
    return {
      ...n,
      hunks: new Map(),
      source: {
        kind: "working-tree",
      },
    };
  let s = await fetchGitDiff(o.mergeBase, e);
  if (s === null || s.stats.filesCount === 0)
    return {
      ...n,
      hunks: new Map(),
      source: {
        kind: "working-tree",
      },
    };
  return {
    ...s,
    hunks: new Map(),
    source: {
      kind: "branch",
      baseBranch: o.baseBranch,
      baseRef: o.mergeBase,
    },
  };
}
async function fetchGitDiff(e, t) {
  let { stdout: n, code: r } = await $n(go(), ["--no-optional-locks", "diff", e, "--shortstat"], {
    timeout: nyt,
    preserveOutputOnError: false,
    abortSignal: t,
  });
  if (r === 0) {
    let i = c6n(n);
    if (i && i.filesCount > $vo)
      return {
        stats: i,
        perFileStats: new Map(),
      };
  }
  let { stdout: o, code: s } = await $n(go(), ["--no-optional-locks", "diff", e, "--numstat"], {
    timeout: nyt,
    preserveOutputOnError: false,
    abortSignal: t,
  });
  if (s !== 0) return null;
  return uef(o);
}
async function mtl(e, t = "HEAD") {
  if (!(await cb())) return null;
  if (await isInTransientGitState()) return null;
  let { stdout: r, code: o } = await $n(go(), ["--no-optional-locks", "diff", t, "--shortstat"], {
    timeout: nyt,
    preserveOutputOnError: false,
    abortSignal: e,
  });
  if (o === 0) {
    let a = c6n(r);
    if (a && a.filesCount > $vo)
      return {
        hunks: new Map(),
        skippedLarge: new Set(),
      };
  }
  let { stdout: s, code: i } = await $n(go(), ["--no-optional-locks", "diff", t], {
    timeout: nyt,
    preserveOutputOnError: false,
    abortSignal: e,
  });
  if (i !== 0) return null;
  return parseGitDiff(s);
}
function uef(e) {
  let t = e
      .trim()
      .split(
        `
`,
      )
      .filter(Boolean),
    n = 0,
    r = 0,
    o = 0,
    s = new Map();
  for (let i of t) {
    let a = i.split("\t");
    if (a.length < 3) continue;
    o++;
    let l = a[0],
      c = a[1],
      u = a.slice(2).join("\t"),
      d = l === "-" || c === "-",
      p = d ? 0 : parseInt(l ?? "0", 10) || 0,
      f = d ? 0 : parseInt(c ?? "0", 10) || 0;
    if (((n += p), (r += f), s.size < Mvo))
      s.set(u, {
        added: p,
        removed: f,
        isBinary: d,
        isUntracked: false,
      });
  }
  return {
    stats: {
      filesCount: o,
      linesAdded: n,
      linesRemoved: r,
    },
    perFileStats: s,
  };
}
function parseGitDiff(stdout) {
  let result = new Map(),
    n = new Set();
  if (!stdout.trim())
    return {
      hunks: result,
      skippedLarge: n,
    };
  let r = stdout.split(/^diff --git /m).filter(Boolean);
  for (let o of r) {
    if (result.size + n.size >= Mvo) break;
    let s = o.indexOf(`
`),
      a = (s === -1 ? o : o.slice(0, s)).match(/^a\/(.+?) b\/(.+)$/);
    if (!a) continue;
    let l = a[2] ?? a[1] ?? "";
    if (o.length > ptl) {
      n.add(l);
      continue;
    }
    let c = o.split(`
`),
      u = [],
      d = null,
      p = 0;
    for (let f = 1; f < c.length; f++) {
      let m = c[f] ?? "",
        g = m.match(/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      if (g) {
        if (d) u.push(d);
        d = {
          oldStart: parseInt(g[1] ?? "0", 10),
          oldLines: parseInt(g[2] ?? "1", 10),
          newStart: parseInt(g[3] ?? "0", 10),
          newLines: parseInt(g[4] ?? "1", 10),
          lines: [],
        };
        continue;
      }
      if (
        m.startsWith("index ") ||
        m.startsWith("---") ||
        m.startsWith("+++") ||
        m.startsWith("new file") ||
        m.startsWith("deleted file") ||
        m.startsWith("old mode") ||
        m.startsWith("new mode") ||
        m.startsWith("Binary files")
      )
        continue;
      if (d && (m.startsWith("+") || m.startsWith("-") || m.startsWith(" ") || m === "")) {
        if (p >= cef) continue;
        (d.lines.push("" + m), p++);
      }
    }
    if (d) u.push(d);
    if (u.length > 0) result.set(l, u);
  }
  return {
    hunks: result,
    skippedLarge: n,
  };
}
async function isInTransientGitState() {
  let e = await TRt($t());
  if (!e) return false;
  return (
    await Promise.all(
      ["MERGE_HEAD", "REBASE_HEAD", "CHERRY_PICK_HEAD", "REVERT_HEAD"].map((r) =>
        l6n
          .access(HMe.join(e, r))
          .then(() => true)
          .catch(() => false),
      ),
    )
  ).some(Boolean);
}
async function getDiffRef(gitRoot) {
  let [t, n] = await Promise.all([ub(), vD()]);
  if (!t || t === "HEAD" || t === n) return null;
  if (n.startsWith("-")) return null;
  let r = {
      timeout: nyt,
      preserveOutputOnError: false,
      abortSignal: gitRoot,
    },
    o = "";
  for (let i of [n, `origin/${n}`]) {
    let { stdout: a, code: l } = await $n(
      go(),
      ["--no-optional-locks", "merge-base", "HEAD", i],
      r,
    );
    if (l === 0 && a.trim()) {
      o = a.trim();
      break;
    }
  }
  if (!o) return null;
  let s = await $n(go(), ["--no-optional-locks", "rev-parse", "HEAD"], r);
  if (s.code !== 0 || s.stdout.trim() === o) return null;
  return {
    mergeBase: o,
    baseBranch: n,
  };
}
async function fetchUntrackedFiles(maxFiles, t) {
  let { stdout: n, code: r } = await $n(
    go(),
    ["--no-optional-locks", "ls-files", "--others", "--exclude-standard", "--full-name"],
    {
      timeout: nyt,
      preserveOutputOnError: false,
      abortSignal: t,
    },
  );
  if (r !== 0 || !n.trim()) return null;
  let untrackedPaths = n
    .trim()
    .split(
      `
`,
    )
    .filter(Boolean);
  if (untrackedPaths.length === 0) return null;
  let s = new Map();
  for (let i of untrackedPaths.slice(0, maxFiles))
    s.set(i, {
      added: 0,
      removed: 0,
      isBinary: false,
      isUntracked: true,
    });
  return s;
}
function c6n(e) {
  let t = e.match(
    /(\d+)\s+files?\s+changed(?:,\s+(\d+)\s+insertions?\(\+\))?(?:,\s+(\d+)\s+deletions?\(-\))?/,
  );
  if (!t) return null;
  return {
    filesCount: parseInt(t[1] ?? "0", 10),
    linesAdded: parseInt(t[2] ?? "0", 10),
    linesRemoved: parseInt(t[3] ?? "0", 10),
  };
}
async function fetchSingleFileGitDiff(absoluteFilePath) {
  let t = Tu(HMe.dirname(absoluteFilePath));
  if (!t) return null;
  let n = HMe.relative(t, absoluteFilePath).split(HMe.sep).join("/"),
    r = oRr(),
    { code: o } = await Gr(go(), ["--no-optional-locks", "ls-files", "--error-unmatch", "--", n], {
      cwd: t,
      timeout: Pvo,
    });
  if (o === 0) {
    let i = await gef(t),
      { stdout: a, code: l } = await Gr(go(), ["--no-optional-locks", "diff", i, "--", n], {
        cwd: t,
        timeout: Pvo,
      });
    if (l !== 0) return null;
    if (!a) return null;
    return {
      ...mef(n, a, "modified"),
      repository: r,
    };
  }
  let s = await generateSyntheticDiff(n, absoluteFilePath);
  if (!s) return null;
  return {
    ...s,
    repository: r,
  };
}
function mef(e, t, n) {
  let r = t.split(`
`),
    o = [],
    s = false,
    i = 0,
    a = 0;
  for (let l of r) {
    if (l.startsWith("@@")) s = true;
    if (s) {
      if ((o.push(l), l.startsWith("+") && !l.startsWith("+++"))) i++;
      else if (l.startsWith("-") && !l.startsWith("---")) a++;
    }
  }
  return {
    filename: e,
    status: n,
    additions: i,
    deletions: a,
    changes: i + a,
    patch: o.join(`
`),
  };
}
async function gef(e) {
  let t = iBi(e),
    n = (t !== void 0 ? sBi().get(t) : void 0) || process.env.CLAUDE_CODE_BASE_REF || (await vD()),
    r = n && !n.startsWith("-") ? n : "HEAD",
    { stdout: o, code: s } = await Gr(go(), ["--no-optional-locks", "merge-base", "HEAD", r], {
      cwd: e,
      timeout: Pvo,
    });
  if (s === 0 && o.trim()) return o.trim();
  return "HEAD";
}
async function generateSyntheticDiff(gitPath, absoluteFilePath) {
  try {
    if (!Xpn(absoluteFilePath, ptl)) return null;
    let r = (await l6n.readFile(absoluteFilePath, "utf-8")).split(`
`);
    if (r.length > 0 && r.at(-1) === "") r.pop();
    let o = r.length,
      s = r.map((a) => `+${a}`).join(`
`),
      i = `@@ -0,0 +1,${o} @@
${s}`;
    return {
      filename: gitPath,
      status: "added",
      additions: o,
      deletions: 0,
      changes: o,
      patch: i,
    };
  } catch {
    return null;
  }
}
var l6n,
  HMe,
  nyt = 5000,
  Mvo = 50,
  ptl = 1000000 /* 1e6 */,
  cef = 400,
  $vo = 500,
  Pvo = 3000;
