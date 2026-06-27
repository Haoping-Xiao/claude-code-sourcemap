// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module M8t
// matched 2.1.88 source: src/utils/memoryFileDetection.ts
// class=modified  jaccard=0.4167  score=0.8833  fileCov=0.441
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var M8t = E(() => {
  RN();
  xMe();
  $pe();
  Ppe();
  I8e();
  gAe();
  pyt();
});
function nEf(e) {
  return e.split(q$e.win32.sep).join(q$e.posix.sep);
}
function sHe(e) {
  let t = nEf(e);
  return bDo ? t.toLowerCase() : t;
}
function bKt(e) {
  let t = tr(),
    n = sHe(e),
    r = sHe(t);
  if (!n.startsWith(r)) return null;
  if (n.includes("/projects/") && n.endsWith(".jsonl")) return "session_transcript";
  return null;
}
function vJn(e) {
  let t = e.split(q$e.win32.sep).join(q$e.posix.sep);
  if (t.includes(".jsonl") || (t.includes("projects") && t.includes("*.jsonl")))
    return "session_transcript";
  return null;
}
function Sze(e) {
  if (lu()) return C7(e);
  return !1;
}
function mvl(e) {
  if (P7(e)) return "team";
  if (Sze(e)) return "personal";
  return null;
}
function rEf(e) {
  if (lu()) return N3e(e);
  return !1;
}
function Eze(e) {
  if (Sze(e)) return !0;
  if (P7(e)) return !0;
  if (bKt(e) !== null) return !0;
  if (rEf(e)) return !0;
  return !1;
}
function SDo(e) {
  let t = q$e.normalize(e),
    n = sHe(t);
  if (lu() && (n.includes("/agent-memory/") || n.includes("/agent-memory-local/"))) return !0;
  if (cL() && $_e(t)) return !0;
  if (lu()) {
    let a = mm(),
      l = sHe(a.replace(/[/\\]+$/, "")),
      c = sHe(a);
    if (n === l || n.startsWith(c)) return !0;
  }
  let r = sHe(tr()),
    o = sHe(ace()),
    s = n.startsWith(r),
    i = n.startsWith(o);
  if (!s && !i) return !1;
  if (s && n.includes("/projects/")) return !0;
  if (lu() && n.includes("/memory/")) return !0;
  return !1;
}
function gvl(e) {
  let t = tr(),
    n = ace(),
    r = lu() ? mm().replace(/[/\\]+$/, "") : "",
    o = sHe(e);
  if (
    ![t, n, r].filter(Boolean).some((l) => {
      if (o.includes(sHe(l))) return !0;
      if (bDo) return o.includes(TD(l).toLowerCase());
      return !1;
    })
  )
    return !1;
  let a = e.match(/(?:[A-Za-z]:[/\\]|\/)[^\s'"]+/g);
  if (!a) return !1;
  for (let l of a) {
    let c = l.replace(/[,;|&>]+$/, ""),
      u = bDo ? NFe(c) : c;
    if (Eze(u) || SDo(u)) return !0;
  }
  return !1;
}
function hvl(e) {
  if (vJn(e) !== null) return !0;
  if (
    lu() &&
    (e.replaceAll("\\", "/").includes("agent-memory/") ||
      e.replaceAll("\\", "/").includes("agent-memory-local/"))
  )
    return !0;
  return !1;
}
var q$e,
  bDo = !1;
