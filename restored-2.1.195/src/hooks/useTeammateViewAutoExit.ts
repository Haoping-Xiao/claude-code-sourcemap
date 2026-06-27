// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hEc
// matched 2.1.88 source: src/hooks/useTeammateViewAutoExit.ts
// class=modified  jaccard=0.5538  score=1  fileCov=0.5538
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var hEc = E(() => {
  ft();
  sA();
  Lzo();
  hP();
  fEc();
  Mp();
  mEc = R(rt(), 1);
});
function yEc() {
  let e = Ho(),
    t = Ht((c) => c.viewingAgentTaskId),
    n = Ht((c) => (c.viewingAgentTaskId ? c.tasks[c.viewingAgentTaskId] : void 0)),
    r = n && uE(n) ? n : void 0,
    o = r?.status,
    s = r?.error,
    i = n !== void 0,
    a = spr.useRef(void 0);
  if (El(n)) a.current = n.parentAgentId;
  else if (n !== void 0) a.current = void 0;
  let l = Ht((c) => (a.current ? c.tasks[a.current] !== void 0 : !1));
  spr.useEffect(() => {
    if (!t) return;
    if (!i) {
      let c = a.current;
      if (((a.current = void 0), c && l)) Hz(c, e);
      else Wq(e);
      return;
    }
    if (!r) return;
    if (
      o === "killed" ||
      o === "failed" ||
      s ||
      (o !== "running" && o !== "completed" && o !== "pending")
    ) {
      Wq(e);
      return;
    }
  }, [t, i, l, r, o, s, e]);
}
var spr;
