// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rlt
// matched 2.1.88 source: src/hooks/useExitOnCtrlCD.ts
// class=modified  jaccard=0.3116  score=0.6171  fileCov=0.3863
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function hzi(e, t, n, r = true) {
  let { handleInterrupt: o, handleExit: s, exitState: i } = DZr(t, n),
    a = F0e.useMemo(
      () => ({
        "app:interrupt": o,
        "app:exit": s,
      }),
      [o, s],
    );
  return (
    e(a, {
      context: "Global",
      isActive: r,
    }),
    i
  );
}
function DZr(e, t) {
  let { exit: n } = TW(),
    [r, o] = F0e.useState({
      pending: false,
      keyName: null,
    }),
    s = F0e.useMemo(() => t ?? n, [t, n]),
    i = Jj(),
    a = Uu("app:interrupt", "Global", "Ctrl-C"),
    l = Uu("app:exit", "Global", "Ctrl-D"),
    c = i && a ? a : "Ctrl-C",
    u = i && l ? l : "Ctrl-D",
    d = Kj(
      (g) =>
        o({
          pending: g,
          keyName: c,
        }),
      s,
    ),
    p = Kj(
      (g) =>
        o({
          pending: g,
          keyName: u,
        }),
      s,
    ),
    f = F0e.useCallback(() => {
      if (e?.()) return;
      d();
    }, [d, e]),
    m = F0e.useCallback(() => {
      p();
    }, [p]);
  return {
    handleInterrupt: f,
    handleExit: m,
    exitState: r,
  };
}
var F0e;
