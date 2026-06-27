// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hLc
// matched 2.1.88 source: src/utils/cronScheduler.ts
// class=new  jaccard=0.0249  score=0.2942  fileCov=0.0265
// note: nearest: src/utils/cronScheduler.ts (0.0249); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hLc = E(() => {
  ft();
  ft();
  fd();
  je();
  wr();
  At();
  bm();
  Jt();
  kv();
});
function _Lc(e) {
  kYo.useEffect(() => {
    if (vl()) return;
    let t = _c(XE()),
      n,
      r = async () => {
        if (Jzi()) return;
        let o = await zi(t);
        if (!o || !o.name) return;
        if (o.name === KHt() || o.name === Gg(Rt())) return;
        let s = o.nameSource ?? "auto";
        if (lHe(o.name, s), s === "user") e?.(o.name);
      };
    try {
      n = yLc.watch(t, (o, s) => {
        if (s && !s.startsWith("state.json")) return;
        r();
      }), n.on("error", o => T(`[jobStateNameSync] watcher error: ${be(o)}`, {
        level: "warn"
      })), n.unref();
    } catch (o) {
      T(`[jobStateNameSync] watch skipped: ${o}`);
      return;
    }
    return r(), () => n?.close();
  }, [e]), kYo.useEffect(() => {
    if (vl()) return;
    return xYo(t => {
      if (!t || t === KHt()) return;
      lHe(t, "user"), e?.(t);
    }), () => xYo(null);
  }, [e]);
}
var yLc, kYo;