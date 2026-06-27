// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rAc
// matched 2.1.88 source: src/hooks/useMailboxBridge.ts
// class=modified  jaccard=0.6537  score=1  fileCov=0.6537
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var rAc = E(() => {
  S_();
  vDo();
  qzt();
  At();
  vn();
  fpr = R(rt(), 1);
});
function oAc({ isLoading: e, onSubmitMessage: t }) {
  let n = Q1a(),
    r = INe.useMemo(() => n.subscribe.bind(n), [n]),
    o = INe.useCallback(() => n.revision, [n]),
    s = INe.useSyncExternalStore(r, o);
  INe.useEffect(() => {
    if (e) return;
    let i = n.poll();
    if (i) t(i.content);
  }, [e, s, n, t]);
}
var INe;
