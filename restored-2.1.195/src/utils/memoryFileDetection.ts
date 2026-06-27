// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M8t
// matched 2.1.88 source: src/utils/memoryFileDetection.ts
// class=modified  jaccard=0.2591  score=0.786  fileCov=0.2787
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function nEf(e) {
  return e.split(q$e.win32.sep).join(q$e.posix.sep);
}
function sHe(e) {
  let t = nEf(e);
  return bDo ? t.toLowerCase() : t;
}
function detectSessionFileType(filePath) {
  let t = tr(),
    normalized = sHe(filePath),
    r = sHe(t);
  if (!normalized.startsWith(r)) return null;
  if (normalized.includes("/projects/") && normalized.endsWith(".jsonl"))
    return "session_transcript";
  return null;
}
function detectSessionPatternType(pattern) {
  let normalized = pattern.split(q$e.win32.sep).join(q$e.posix.sep);
  if (
    normalized.includes(".jsonl") ||
    (normalized.includes("projects") && normalized.includes("*.jsonl"))
  )
    return "session_transcript";
  return null;
}
function Sze(e) {
  if (lu()) return C7(e);
  return false;
}
function memoryScopeForPath(filePath) {
  if (P7(filePath)) return "team";
  if (Sze(filePath)) return "personal";
  return null;
}
function rEf(e) {
  if (lu()) return N3e(e);
  return false;
}
function Eze(e) {
  if (Sze(e)) return true;
  if (P7(e)) return true;
  if (detectSessionFileType(e) !== null) return true;
  if (rEf(e)) return true;
  return false;
}
function isMemoryDirectory(dirPath) {
  let t = q$e.normalize(dirPath),
    normalizedCmp = sHe(t);
  if (
    lu() &&
    (normalizedCmp.includes("/agent-memory/") || normalizedCmp.includes("/agent-memory-local/"))
  )
    return true;
  if (cL() && $_e(t)) return true;
  if (lu()) {
    let a = mm(),
      l = sHe(a.replace(/[/\\]+$/, "")),
      c = sHe(a);
    if (normalizedCmp === l || normalizedCmp.startsWith(c)) return true;
  }
  let r = sHe(tr()),
    o = sHe(ace()),
    s = normalizedCmp.startsWith(r),
    i = normalizedCmp.startsWith(o);
  if (!s && !i) return false;
  if (s && normalizedCmp.includes("/projects/")) return true;
  if (lu() && normalizedCmp.includes("/memory/")) return true;
  return false;
}
function gvl(e) {
  let t = tr(),
    n = ace(),
    r = lu() ? mm().replace(/[/\\]+$/, "") : "",
    o = sHe(e);
  if (
    ![t, n, r].filter(Boolean).some((l) => {
      if (o.includes(sHe(l))) return true;
      if (bDo) return o.includes(TD(l).toLowerCase());
      return false;
    })
  )
    return false;
  let a = e.match(/(?:[A-Za-z]:[/\\]|\/)[^\s'"]+/g);
  if (!a) return false;
  for (let l of a) {
    let c = l.replace(/[,;|&>]+$/, ""),
      u = bDo ? NFe(c) : c;
    if (Eze(u) || isMemoryDirectory(u)) return true;
  }
  return false;
}
function isAutoManagedMemoryPattern(pattern) {
  if (detectSessionPatternType(pattern) !== null) return true;
  if (
    lu() &&
    (pattern.replaceAll("\\", "/").includes("agent-memory/") ||
      pattern.replaceAll("\\", "/").includes("agent-memory-local/"))
  )
    return true;
  return false;
}
var q$e,
  bDo = false;
