// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XSc
// matched 2.1.88 source: src/hooks/useDeferredHookMessages.ts
// class=modified  jaccard=0.3071  score=1  fileCov=0.3071
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var XSc = E(() => {
  fn();
  KSc = R(rt(), 1);
});
function JSc(e, t) {
  let n = T7e.useRef(e ?? null),
    r = T7e.useRef(!e);
  return (
    T7e.useEffect(() => {
      let o = n.current;
      if (!o) return;
      let s = false;
      return (
        o.then((i) => {
          if (s) return;
          if (((r.current = true), (n.current = null), i.length > 0)) t((a) => [...i, ...a]);
        }),
        () => {
          s = true;
        }
      );
    }, [t]),
    T7e.useCallback(async () => {
      if (r.current || !n.current) return;
      let o = await n.current;
      if (r.current) return;
      if (((r.current = true), (n.current = null), o.length > 0)) t((s) => [...o, ...s]);
    }, [t])
  );
}
var T7e;
