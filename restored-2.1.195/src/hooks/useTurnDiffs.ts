// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gNo
// matched 2.1.88 source: src/hooks/useTurnDiffs.ts
// class=modified  jaccard=0.4338  score=0.7661  fileCov=0.5
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gNo = E(() => {
  l0e();
  G9t();
  ((qQ = R(rt(), 1)),
    (fNo = {
      hunks: new Map(),
      skippedLarge: new Set(),
    }));
});
function AMf(e) {
  if (!e || typeof e !== "object") return !1;
  let t = e,
    n = typeof t.filePath === "string",
    r = Array.isArray(t.structuredPatch) && t.structuredPatch.length > 0,
    o = t.type === "create" && typeof t.content === "string";
  return n && (r || o);
}
function HMf(e) {
  return "type" in e && (e.type === "create" || e.type === "update");
}
function TMf(e) {
  let t = 0,
    n = 0;
  for (let r of e)
    for (let o of r.lines)
      if (o.startsWith("+")) t++;
      else if (o.startsWith("-")) n++;
  return {
    added: t,
    removed: n,
  };
}
function vMf(e) {
  if (e.type !== "user") return "";
  let t = e.message.content,
    n = typeof t === "string" ? t : "";
  if (n.length <= 30) return n;
  return n.slice(0, 29) + "\u2026";
}
function w1l(e) {
  let t = 0,
    n = 0;
  for (let r of e.files.values()) ((t += r.linesAdded), (n += r.linesRemoved));
  e.stats = {
    filesChanged: e.files.size,
    linesAdded: t,
    linesRemoved: n,
  };
}
function C1l(e) {
  let t = Qtr.useRef({
    completedTurns: [],
    currentTurn: null,
    lastProcessedIndex: 0,
    lastTurnIndex: 0,
  });
  return Qtr.useMemo(() => {
    let n = t.current;
    if (e.length < n.lastProcessedIndex)
      ((n.completedTurns = []),
        (n.currentTurn = null),
        (n.lastProcessedIndex = 0),
        (n.lastTurnIndex = 0));
    for (let o = n.lastProcessedIndex; o < e.length; o++) {
      let s = e[o];
      if (!s || s.type !== "user") continue;
      if (
        !(
          s.toolUseResult ||
          (Array.isArray(s.message.content) && s.message.content[0]?.type === "tool_result")
        ) &&
        !s.isMeta
      ) {
        if (n.currentTurn && n.currentTurn.files.size > 0)
          (w1l(n.currentTurn), n.completedTurns.push(n.currentTurn));
        (n.lastTurnIndex++,
          (n.currentTurn = {
            turnIndex: n.lastTurnIndex,
            userPromptPreview: vMf(s),
            timestamp: s.timestamp,
            files: new Map(),
            stats: {
              filesChanged: 0,
              linesAdded: 0,
              linesRemoved: 0,
            },
          }));
      } else if (n.currentTurn && s.toolUseResult) {
        let a = s.toolUseResult;
        if (AMf(a)) {
          let { filePath: l, structuredPatch: c } = a,
            u = "type" in a && a.type === "create",
            d = n.currentTurn.files.get(l);
          if (!d)
            ((d = {
              filePath: l,
              hunks: [],
              isNewFile: u,
              linesAdded: 0,
              linesRemoved: 0,
            }),
              n.currentTurn.files.set(l, d));
          if (u && c.length === 0 && HMf(a)) {
            let f = a.content.split(`
`),
              m = {
                oldStart: 0,
                oldLines: 0,
                newStart: 1,
                newLines: f.length,
                lines: f.map((g) => "+" + g),
              };
            (d.hunks.push(m), (d.linesAdded += f.length));
          } else {
            d.hunks.push(...c);
            let { added: p, removed: f } = TMf(c);
            ((d.linesAdded += p), (d.linesRemoved += f));
          }
          if (u) d.isNewFile = !0;
        }
      }
    }
    n.lastProcessedIndex = e.length;
    let r = [...n.completedTurns];
    if (n.currentTurn && n.currentTurn.files.size > 0) (w1l(n.currentTurn), r.push(n.currentTurn));
    return r.reverse();
  }, [e]);
}
var Qtr;
