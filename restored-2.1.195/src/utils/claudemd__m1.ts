// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ik
// matched 2.1.88 source: src/utils/claudemd.ts
// class=modified (alt of src/utils/claudemd.ts)  jaccard=0.1798  score=0.2853  fileCov=0.3272
// note: deminified; 26 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: stripHtmlComments, shouldShowClaudeMdExternalIncludesWarning, resetGetMemoryFilesCache, processMemoryFile, processMdRules, processConditionedMdRules, isSyntheticMemoryPath, isMemoryFilePath, hasExternalClaudeMdIncludes, getMemoryFilesForNestedDirectory, getMemoryFiles, getMaxMemoryCharacterCount, getManagedAndUserConditionalRules, getLargeMemoryFiles, getExternalClaudeMdIncludes, getConditionalRulesForCwdLevelDirectory, getClaudeMds, getAllMemoryFilePaths, filterInjectedMemoryFi …
// [unwrapped __esm module ik] deps: lru-cache/dist/esm/index.js
fjt = require("path");
function isSyntheticMemoryPath(e) {
  return e === RLr || e === MANAGED_SETTINGS_CLAUDEMD_PATH;
}
function getMaxMemoryCharacterCount(e = As()) {
  let t = nH(e, OS()),
    n = Number.isFinite(t) && t > 0 ? t : YOt;
  return Math.max(
    MIN_MEMORY_CHARACTER_COUNT,
    Math.round(n * MAX_CLAUDE_MD_TOKEN_CONTEXT_RATIO * rH(e)),
  );
}
function Msa(e) {
  return dL(e, yr());
}
function Mip(e) {
  let { frontmatter: t, content: n } = Bm(e);
  if (!t.paths)
    return {
      content: n,
    };
  let r = HNt(t.paths)
    .map((o) => (o.endsWith("/**") ? o.slice(0, -3) : o))
    .filter((o) => o.length > 0);
  if (r.length === 0 || r.every((o) => o === "**"))
    return {
      content: n,
    };
  return {
    content: n,
    paths: r,
  };
}
function stripHtmlComments(e) {
  if (!e.includes("<!--"))
    return {
      content: e,
      stripped: false,
    };
  return $sa(
    new b4({
      gfm: false,
    }).lex(e),
  );
}
function $sa(e) {
  let t = "",
    n = false,
    r = /<!--[\s\S]*?-->/g;
  for (let o of e) {
    if (o.type === "html") {
      let s = o.raw.trimStart();
      if (s.startsWith("<!--") && s.includes("-->")) {
        let i = o.raw.replace(r, "");
        if (((n = true), i.trim().length > 0)) t += i;
        continue;
      }
    }
    t += o.raw;
  }
  return {
    content: t,
    stripped: n,
  };
}
function parseMemoryFileContent(rawContent, filePath, type, includeBasePath) {
  let o = bh.extname(filePath).toLowerCase();
  if (o && !Pip.has(o))
    return (
      T(`Skipping non-text file in @include: ${filePath}`),
      {
        info: null,
        includePaths: [],
      }
    );
  let { content: s, paths: i } = Mip(rawContent),
    a = s.includes("<!--"),
    l =
      a || includeBasePath !== void 0
        ? new b4({
            gfm: false,
          }).lex(s)
        : void 0,
    c = a && l ? $sa(l).content : s,
    u = l && includeBasePath !== void 0 ? Uip(l, includeBasePath) : [],
    d = c;
  if (type === "AutoMem") d = FNt(c).content;
  let p = d !== rawContent;
  return {
    info: {
      path: filePath,
      type: type,
      content: d,
      globs: i,
      contentDiffersFromDisk: p,
      rawContent: p ? rawContent : void 0,
    },
    includePaths: u,
  };
}
function Nip(e) {
  let { content: t } = FNt(e);
  return {
    path: T_e(),
    type: "AutoMem",
    content: t,
    contentDiffersFromDisk: true,
    rawContent: e,
  };
}
function handleMemoryFileReadError(error, filePath) {
  let n = on(error);
  if (n === "ENOENT" || n === "EISDIR") return;
  if (n === "EACCES")
    G("tengu_claude_md_permission_error", {
      is_access_error: 1,
      has_home_dir: filePath.includes(tr()) ? 1 : 0,
    });
}
async function Osa(e, t, n) {
  try {
    let o = await qt().readFile(e, {
      encoding: "utf-8",
    });
    return parseMemoryFileContent(o, e, t, n);
  } catch (r) {
    return (
      handleMemoryFileReadError(r, e),
      {
        info: null,
        includePaths: [],
      }
    );
  }
}
function Uip(e, t) {
  let n = new Set();
  function r(s) {
    let i = /(?:^|\s)@((?:[^\s\\]|\\ )+)/g,
      a;
    while ((a = i.exec(s)) !== null) {
      let l = a[1];
      if (!l) continue;
      let c = l.indexOf("#");
      if (c !== -1) l = l.substring(0, c);
      if (!l) continue;
      if (((l = l.replaceAll("\\ ", " ")), l)) {
        if (
          !(Fc(l) && !qp(l)) &&
          !Tw(l) &&
          (l.startsWith("./") ||
            l.startsWith("~/") ||
            (l.startsWith("/") && l !== "/") ||
            (!l.startsWith("@") && !l.match(/^[#%^&*()]+/) && l.match(/^[a-zA-Z0-9._-]/)))
        ) {
          let d = ds(l, bh.dirname(t));
          n.add(d);
        }
      }
    }
  }
  function o(s) {
    for (let i of s) {
      if (i.type === "code" || i.type === "codespan") continue;
      if (i.type === "html") {
        let a = i.raw || "",
          l = a.trimStart();
        if (l.startsWith("<!--") && l.includes("-->")) {
          let c = /<!--[\s\S]*?-->/g,
            u = a.replace(c, "");
          if (u.trim().length > 0) r(u);
        }
        continue;
      }
      if (i.type === "text") r(i.text || "");
      if (i.tokens) o(i.tokens);
      if (i.items) o(i.items);
    }
  }
  return (o(e), [...n]);
}
function jip(e, t) {
  if (t !== "User" && t !== "Project" && t !== "Local") return false;
  let n = Dr().claudeMdExcludes;
  if (!n || n.length === 0) return false;
  let r = {
      dot: true,
    },
    o = e.replaceAll("\\", "/"),
    s = Gip(n).filter((i) => i.length > 0);
  if (s.length === 0) return false;
  return Lsa.default.isMatch(o, s, r);
}
function Gip(e) {
  let t = qt(),
    n = e.map((r) => r.replaceAll("\\", "/"));
  for (let r of n) {
    if (!r.startsWith("/")) continue;
    let o = r.search(/[*?{[]/),
      s = o === -1 ? r : r.slice(0, o),
      i = bh.dirname(s);
    try {
      let { resolvedPath: a } = jd(t, i);
      if ((Fc(a) && !qp(a)) || Tw(a)) continue;
      let l = a.replaceAll("\\", "/");
      if (l !== i) {
        let c = l + r.slice(i.length);
        n.push(c);
      }
    } catch {}
  }
  return n;
}
async function processMemoryFile(e, t, n, r, o = 0, s) {
  let i = dv(e);
  if (n.has(i) || o >= Fip) return [];
  if (jip(e, t)) return [];
  if ((Fc(e) && !qp(e)) || Tw(e)) return [];
  let { resolvedPath: a, isSymlink: l } = jd(qt(), e);
  if ((Fc(a) && !qp(a)) || Tw(a)) return [];
  if (l) {
    let p = dv(a);
    if (n.has(p)) return [];
    n.add(p);
  }
  n.add(i);
  let { info: c, includePaths: u } = await Osa(e, t, a);
  if (!c || !c.content.trim()) return [];
  if (s) c.parent = s;
  let d = [];
  d.push(c);
  for (let p of u) {
    if (!Msa(p) && !r) continue;
    let m = await processMemoryFile(p, t, n, r, o + 1, e);
    d.push(...m);
  }
  return d;
}
async function processMdRules({
  rulesDir: e,
  type: t,
  processedPaths: n,
  includeExternal: r,
  conditionalRule: o,
  visitedDirs: s = new Set(),
}) {
  if (s.has(e)) return [];
  try {
    let i = qt(),
      { resolvedPath: a, isSymlink: l } = jd(i, e);
    if ((Fc(a) && !qp(a)) || Tw(a)) return [];
    if ((s.add(e), l)) s.add(a);
    let c = [],
      u;
    try {
      u = await i.readdir(a);
    } catch (d) {
      let p = on(d);
      if (p === "ENOENT" || p === "EACCES" || p === "ENOTDIR") return [];
      throw d;
    }
    for (let d of u) {
      let p = bh.join(e, d.name),
        { resolvedPath: f, isSymlink: m } = jd(i, p);
      if ((Fc(f) && !qp(f)) || Tw(f)) continue;
      let g = m ? await i.stat(f) : null,
        h = g ? g.isDirectory() : d.isDirectory(),
        y = g ? g.isFile() : d.isFile();
      if (h)
        c.push(
          ...(await processMdRules({
            rulesDir: f,
            type: t,
            processedPaths: n,
            includeExternal: r,
            conditionalRule: o,
            visitedDirs: s,
          })),
        );
      else if (y && d.name.endsWith(".md")) {
        let b = await processMemoryFile(f, t, n, r);
        c.push(...b.filter((_) => (o ? _.globs : !_.globs)));
      }
    }
    return c;
  } catch (i) {
    if (i instanceof Error && i.message.includes("EACCES"))
      G("tengu_claude_rules_md_permission_error", {
        is_access_error: 1,
        has_home_dir: e.includes(tr()) ? 1 : 0,
      });
    return [];
  }
}
function Nsa(e) {
  return e === "User" || e === "Project" || e === "Local" || e === "Managed";
}
function nextEagerLoadReason() {
  if (!Lso) return;
  Lso = false;
  let e = Rso;
  return ((Rso = "session_start"), e);
}
function clearMemoryFileCaches() {
  Wv.cache?.clear?.();
}
function resetGetMemoryFilesCache(e = "session_start") {
  ((Rso = e), (Lso = true), clearMemoryFileCaches());
}
function getLargeMemoryFiles(e) {
  let t = getMaxMemoryCharacterCount();
  return e.filter((n) => !isSyntheticMemoryPath(n.path) && Nsa(n.type) && n.content.length > t);
}
function filterInjectedMemoryFiles(files) {
  if (!at("tengu_moth_copse", false)) return files;
  return files.filter((n) => n.type !== "AutoMem");
}
async function getManagedAndUserConditionalRules(e, t) {
  let n = [],
    r = s1n();
  if (
    (n.push(...(await processConditionedMdRules(e, r, "Managed", t, false))), Om("userSettings"))
  ) {
    let o = i1n();
    n.push(...(await processConditionedMdRules(e, o, "User", t, true)));
  }
  return n;
}
async function getMemoryFiles(e, t, n) {
  if (Oe.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return [];
  let r = [];
  if (Om("projectSettings")) {
    let i = bh.join(e, "CLAUDE.md");
    r.push(...(await processMemoryFile(i, "Project", n, false)));
    let a = bh.join(e, ".claude", "CLAUDE.md");
    r.push(...(await processMemoryFile(a, "Project", n, false)));
  }
  if (Om("localSettings")) {
    let i = bh.join(e, "CLAUDE.local.md");
    r.push(...(await processMemoryFile(i, "Local", n, false)));
  }
  let o = bh.join(e, ".claude", "rules"),
    s = new Set(n);
  (r.push(
    ...(await processMdRules({
      rulesDir: o,
      type: "Project",
      processedPaths: s,
      includeExternal: false,
      conditionalRule: false,
    })),
  ),
    r.push(...(await processConditionedMdRules(t, o, "Project", n, false))));
  for (let i of s) n.add(i);
  return r;
}
async function getConditionalRulesForCwdLevelDirectory(e, t, n) {
  let r = bh.join(e, ".claude", "rules");
  return processConditionedMdRules(t, r, "Project", n, false);
}
async function processConditionedMdRules(e, t, n, r, o) {
  return (
    await processMdRules({
      rulesDir: t,
      type: n,
      processedPaths: r,
      includeExternal: o,
      conditionalRule: true,
    })
  ).filter((i) => {
    if (!i.globs || i.globs.length === 0) return false;
    let a = n === "Project" ? bh.dirname(bh.dirname(t)) : yr(),
      l = bh.isAbsolute(e) ? bh.relative(a, e) : e;
    if (!l || l.startsWith("..") || bh.isAbsolute(l)) return false;
    return Rsa.default().add(i.globs).ignores(l);
  });
}
function getExternalClaudeMdIncludes(e) {
  let t = [];
  for (let n of e)
    if (n.type !== "User" && n.parent && !Msa(n.path))
      t.push({
        path: n.path,
        parent: n.parent,
      });
  return t;
}
function hasExternalClaudeMdIncludes(e) {
  return getExternalClaudeMdIncludes(e).length > 0;
}
async function shouldShowClaudeMdExternalIncludesWarning() {
  let e = Lg();
  if (e.hasClaudeMdExternalIncludesApproved || e.hasClaudeMdExternalIncludesWarningShown)
    return false;
  return hasExternalClaudeMdIncludes(await Wv(true));
}
function isMemoryFilePath(e) {
  let t = bh.basename(e);
  if (t === "CLAUDE.md" || t === "CLAUDE.local.md") return true;
  if (t.endsWith(".md") && e.includes(`${bh.sep}.claude${bh.sep}rules${bh.sep}`)) return true;
  return false;
}
function getAllMemoryFilePaths(e, t) {
  let n = new Set();
  for (let r of e) {
    if (isSyntheticMemoryPath(r.path)) continue;
    if (r.content.trim().length > 0) n.add(r.path);
  }
  for (let r of VRe(t)) if (isMemoryFilePath(r)) n.add(r);
  return Array.from(n);
}
var Rsa,
  bh,
  Lsa,
  ksa = false,
  MANAGED_SETTINGS_CLAUDEMD_PATH = "<managed-settings>",
  MEMORY_INSTRUCTION_PROMPT =
    "Codebase and user instructions are shown below. Be sure to adhere to these instructions. IMPORTANT: These instructions OVERRIDE any default behavior and you MUST follow them exactly as written.",
  MAX_CLAUDE_MD_TOKEN_CONTEXT_RATIO = 0.05,
  MIN_MEMORY_CHARACTER_COUNT = 40000,
  Pip,
  Fip = 5,
  Wv,
  Rso = "session_start",
  Lso = true,
  getClaudeMds = (memoryFiles, filter) => {
    let n = [],
      r = at("tengu_paper_halyard", false);
    for (let o of memoryFiles) {
      if (filter && !filter(o.type)) continue;
      if (r && (o.type === "Project" || o.type === "Local")) continue;
      if (o.content) {
        let s =
            o.type === "Project"
              ? " (project instructions, checked into the codebase)"
              : o.type === "Local"
                ? " (user's private project instructions, not checked in)"
                : o.type === "AutoMem"
                  ? " (user's auto-memory, persists across conversations)"
                  : o.type === "Managed"
                    ? " (organization-managed policy instructions)"
                    : " (user's private global instructions for all projects)",
          i = o.content.trim();
        n.push(`Contents of ${o.path}${s}:

${i}`);
      }
    }
    if (n.length === 0) return "";
    return `${MEMORY_INSTRUCTION_PROMPT}

${n.join(`

`)}`;
  };
