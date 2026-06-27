// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module xJr
// matched 2.1.88 source: src/ink/useTerminalNotification.ts
// class=modified  jaccard=0.766  score=0.9715  fileCov=0.7836
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function XBt(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    t += r < 32 || r === 127 ? " " : e[n];
  }
  return t;
}
function Z7() {
  let e = Q7.useContext(g8);
  if (!e) throw Error("useTerminalNotification must be used within TerminalWriteProvider");
  let t = Q7.useCallback(
      ({ message: i, title: a }) => {
        let l = a ? `${a}: ${i}` : i;
        e(Qx(QS(wy.ITERM2, XBt(l))));
      },
      [e],
    ),
    n = Q7.useCallback(
      ({ message: i, title: a, id: l }) => {
        (e(Qx(QS(wy.KITTY, `i=${l}:d=0:p=title`, XBt(a)))),
          e(Qx(QS(wy.KITTY, `i=${l}:p=body`, XBt(i)))),
          e(Qx(QS(wy.KITTY, `i=${l}:d=1:a=focus`, ""))));
      },
      [e],
    ),
    r = Q7.useCallback(
      ({ message: i, title: a }) => {
        e(Qx(QS(wy.GHOSTTY, "notify", XBt(a), XBt(i))));
      },
      [e],
    ),
    o = Q7.useCallback(() => {
      e($M);
    }, [e]),
    s = Q7.useCallback(
      (i, a) => {
        if (!iGe()) return;
        if (!i) {
          e(Qx(QS(wy.ITERM2, Q3e.PROGRESS, Z3e.CLEAR, "")));
          return;
        }
        let l = Math.max(0, Math.min(100, Math.round(a ?? 0)));
        switch (i) {
          case "completed":
            e(Qx(QS(wy.ITERM2, Q3e.PROGRESS, Z3e.CLEAR, "")));
            break;
          case "error":
            e(Qx(QS(wy.ITERM2, Q3e.PROGRESS, Z3e.ERROR, l)));
            break;
          case "indeterminate":
            e(Qx(QS(wy.ITERM2, Q3e.PROGRESS, Z3e.INDETERMINATE, "")));
            break;
          case "running":
            e(Qx(QS(wy.ITERM2, Q3e.PROGRESS, Z3e.SET, l)));
            break;
          case null:
            break;
        }
      },
      [e],
    );
  return Q7.useMemo(
    () => ({
      notifyITerm2: t,
      notifyKitty: n,
      notifyGhostty: r,
      notifyBell: o,
      progress: s,
    }),
    [t, n, r, o, s],
  );
}
var Q7, g8, CLn;
