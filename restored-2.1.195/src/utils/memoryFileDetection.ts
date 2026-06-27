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
function detectSessionFileType(e) {
  let t = tr(),
    n = sHe(e),
    r = sHe(t);
  if (!n.startsWith(r)) return null;
  if (n.includes("/projects/") && n.endsWith(".jsonl")) return "session_transcript";
  return null;
}
function detectSessionPatternType(e) {
  let t = e.split(q$e.win32.sep).join(q$e.posix.sep);
  if (t.includes(".jsonl") || (t.includes("projects") && t.includes("*.jsonl")))
    return "session_transcript";
  return null;
}
function Sze(e) {
  if (lu()) return C7(e);
  return false;
}
function memoryScopeForPath(e) {
  if (P7(e)) return "team";
  if (Sze(e)) return "personal";
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
function isMemoryDirectory(e) {
  let t = q$e.normalize(e),
    n = sHe(t);
  if (lu() && (n.includes("/agent-memory/") || n.includes("/agent-memory-local/"))) return true;
  if (cL() && $_e(t)) return true;
  if (lu()) {
    let a = mm(),
      l = sHe(a.replace(/[/\\]+$/, "")),
      c = sHe(a);
    if (n === l || n.startsWith(c)) return true;
  }
  let r = sHe(tr()),
    o = sHe(ace()),
    s = n.startsWith(r),
    i = n.startsWith(o);
  if (!s && !i) return false;
  if (s && n.includes("/projects/")) return true;
  if (lu() && n.includes("/memory/")) return true;
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
function isAutoManagedMemoryPattern(e) {
  if (detectSessionPatternType(e) !== null) return true;
  if (
    lu() &&
    (e.replaceAll("\\", "/").includes("agent-memory/") ||
      e.replaceAll("\\", "/").includes("agent-memory-local/"))
  )
    return true;
  return false;
}
var q$e,
  bDo = false;
