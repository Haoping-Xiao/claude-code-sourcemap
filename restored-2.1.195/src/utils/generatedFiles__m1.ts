// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module x$o
// matched 2.1.88 source: src/utils/generatedFiles.ts
// class=modified (alt of src/utils/generatedFiles.ts)  jaccard=0.0789  score=0.2485  fileCov=0.1037
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module x$o] deps: je, At, Bi
((kRl = require("fs/promises")),
  (gxf = [
    {
      lockfile: "bun.lock",
      command: "bun",
      args: ["install", "--frozen-lockfile", "--ignore-scripts"],
    },
    {
      lockfile: "bun.lockb",
      command: "bun",
      args: ["install", "--frozen-lockfile", "--ignore-scripts"],
    },
    {
      lockfile: "npm-shrinkwrap.json",
      command: "npm",
      args: ["ci", "--ignore-scripts"],
    },
    {
      lockfile: "package-lock.json",
      command: "npm",
      args: ["ci", "--ignore-scripts"],
    },
  ]));
async function lse(e, t, n, r, o, s) {
  if (n?.version) return (T(`Using manifest version for ${e}: ${n.version}`), n.version);
  if (o) return (T(`Using provided version for ${e}: ${o}`), o);
  if (s) {
    let i = s.substring(0, 12);
    if (typeof t === "object" && t.source === "git-subdir") {
      let a = t.path.replaceAll("\\", "/").replace(/^\.\//, "").replace(/\/+$/, ""),
        l = RRl.createHash("sha256").update(a).digest("hex").substring(0, 8),
        c = `${i}-${l}`;
      return (T(`Using git-subdir SHA+path version for ${e}: ${c} (path=${a})`), c);
    }
    return (T(`Using pre-resolved git SHA for ${e}: ${i}`), i);
  }
  if (r) {
    let i = await R$o(r);
    if (i) {
      let a = i.substring(0, 12);
      return (T(`Using git SHA for ${e}: ${a}`), a);
    }
  }
  return (T(`No version found for ${e}, using 'unknown'`), "unknown");
}
function R$o(e) {
  return _Rt(e);
}
function der(e) {
  if (typeof e === "string") return null;
  switch (e.source) {
    case "github":
      return k$o(e.repo);
    case "url":
      return e.url;
    case "git-subdir":
      return /^[a-zA-Z0-9-_.]+\/[a-zA-Z0-9-_.]+$/.test(e.url) ? k$o(e.url) : e.url;
    default:
      return null;
  }
}
function k$o(e) {
  return eRe() ? `https://github.com/${e}.git` : `git@${JH}:${e}.git`;
}
function $Yt(e) {
  if (!e) return null;
  switch (e.source) {
    case "github":
      return k$o(e.repo);
    case "git":
      return e.url;
    default:
      return null;
  }
}
function per(e, t) {
  let n = $Yt(e);
  if (n === null || !e) return null;
  let r = t.replace(/^\.(?:\/|$)/, "");
  if (r === "")
    return e.source === "github"
      ? {
          source: "github",
          repo: e.repo,
        }
      : {
          source: "url",
          url: n,
        };
  return {
    source: "git-subdir",
    url: n,
    path: r,
  };
}
function DRl(e, t) {
  return `${e}${LRl}${t}`;
}
async function fer(e, t, n, r) {
  if (!hxf(e)) return (T(`resolveVersionRange: rejected unsafe URL ${e}`), null);
  let o = r?.get(e);
  if (o === void 0)
    ((o = $n("git", [...Fne, "ls-remote", "--tags", "--", e], {
      env: R8(),
    }).then((u) => (u.code !== 0 ? Promise.reject(Error(`ls-remote exit ${u.code}`)) : u.stdout))),
      r?.set(e, o));
  let s;
  try {
    s = await o;
  } catch (u) {
    return (
      r?.delete(e),
      T(
        `resolveVersionRange: ls-remote failed for ${e}: ${u instanceof Error ? u.message : String(u)}`,
      ),
      null
    );
  }
  let i = `${t}${LRl}`,
    a = new Map();
  for (let u of s.split(`
`)) {
    let d = u.indexOf("\t");
    if (d === -1) continue;
    let p = u.slice(0, d),
      f = u.slice(d + 1);
    if (!f.startsWith("refs/tags/")) continue;
    let m = f.slice(10),
      g = m.endsWith("^{}");
    if (g) m = m.slice(0, -3);
    if (!m.startsWith(i)) continue;
    let h = uer.clean(m.slice(i.length));
    if (h === null) continue;
    if (!g && a.has(m)) continue;
    a.set(m, {
      version: h,
      ref: m,
      sha: p,
    });
  }
  if (a.size === 0) return null;
  let l = [...a.values()],
    c = uer.maxSatisfying(
      l.map((u) => u.version),
      n,
    );
  if (c === null) return null;
  return l.find((u) => u.version === c) ?? null;
}
function hxf(e) {
  if (/^git@[a-zA-Z0-9.-]+:/.test(e)) return true;
  try {
    return ["https:", "http:", "file:"].includes(new URL(e).protocol);
  } catch {
    return false;
  }
}
var RRl,
  uer,
  LRl = "--v";
