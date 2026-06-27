// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mx
// matched 2.1.88 source: src/utils/detectRepository.ts
// class=modified  jaccard=0.5458  score=0.7208  fileCov=0.6921
// note: deminified; 8 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: parseGitRemote, parseGitHubRepository, isCachedGitHubRepo, getCachedRepositoryHost, getCachedRepository, detectCurrentRepositoryWithHost, detectCurrentRepository, clearRepositoryCaches
// [unwrapped __esm module Mx]
L$u = /[:/\\?#@\s]/;
function clearRepositoryCaches() {
  cCe.clear();
}
async function detectCurrentRepository() {
  let e = await detectCurrentRepositoryWithHost();
  if (!e) return null;
  if (!$m(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
async function detectCurrentRepositoryWithHost(e) {
  let t = e ?? $t();
  if (cCe.has(t)) return cCe.get(t) ?? null;
  try {
    let n = e === void 0 ? await gY() : null;
    if (!n) {
      let { stdout: o, code: s } = await Gr(go(), ["config", "--get", "remote.origin.url"], {
        cwd: t,
        preserveOutputOnError: false,
      });
      n = s === 0 ? o.trim() || null : null;
    }
    if ((T(`Git remote URL: ${het(n)}`), !n)) return (T("No git remote URL found"), null);
    let r = parseGitRemote(n);
    if (
      (T(`Parsed repository: ${r ? `${r.host}/${r.owner}/${r.name}` : null} from URL: ${het(n)}`),
      r)
    )
      cCe.set(t, r);
    return r;
  } catch (n) {
    return (T(`Error detecting repository: ${n}`), null);
  }
}
function getCachedRepository() {
  let e = cCe.get($t());
  if (!e || !$m(e.host)) return null;
  return `${e.owner}/${e.name}`;
}
function getCachedRepositoryHost() {
  return cCe.get($t())?.host ?? null;
}
function isCachedGitHubRepo() {
  let e = $t();
  if (!cCe.has(e)) return;
  let t = cCe.get(e);
  return !!t && $m(t.host);
}
function parseGitRemote(e) {
  let t = e.trim(),
    n = t.match(/^git@([^:]+):([^/]+)\/([^/]+?)(?:\.git)?$/);
  if (n?.[1] && n[2] && n[3]) {
    if (!UTs(n[1])) return null;
    if (!get(n[2]) || !get(n[3])) return null;
    return {
      host: n[1],
      owner: n[2],
      name: n[3],
    };
  }
  let r = t.match(
    /^(https?|ssh|git):\/\/(?:[^@]+@)?([^/:]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?$/,
  );
  if (r?.[1] && r[2] && r[3] && r[4]) {
    let o = r[1],
      s = r[2],
      i = bi(s, ":");
    if (!UTs(i)) return null;
    let a = o === "https" || o === "http" ? s : i;
    if (!get(r[3]) || !get(r[4])) return null;
    return {
      host: a,
      owner: r[3],
      name: r[4],
    };
  }
  return null;
}
function parseGitHubRepository(e) {
  let t = e.trim(),
    n = parseGitRemote(t);
  if (n) {
    if (!$m(n.host)) return null;
    return `${n.owner}/${n.name}`;
  }
  if (!t.includes("://") && !t.includes("@") && t.includes("/")) {
    let r = t.split("/");
    if (r.length === 2 && r[0] && r[1]) {
      let o = r[1].replace(/\.git$/, "");
      if (!get(r[0]) || !get(o)) return null;
      return `${r[0]}/${o}`;
    }
  }
  return (T(`Could not parse repository from: ${t}`), null);
}
function get(e) {
  return P$u.test(e) && !e.startsWith("-") && e !== "." && e !== "..";
}
function UTs(e) {
  if (!e.includes(".")) return false;
  let t = e.split(".").pop();
  if (!t) return false;
  return /^[a-zA-Z]+$/.test(t);
}
var cCe, P$u;
