// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nIo
// matched 2.1.88 source: src/utils/formatBriefTimestamp.ts
// class=modified  jaccard=0.3985  score=0.8598  fileCov=0.4261
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nIo] deps: hooks/useTerminalSize.ts
((Uil = R(lt(), 1)),
  (Fil = R(rt(), 1)),
  (jil = R(rt(), 1)),
  (tIo = R(se(), 1)),
  (Gil = Fil.createContext(void 0)));
function Yzn(e, t = new Date()) {
  let n = new Date(e);
  if (Number.isNaN(n.getTime())) return "";
  let r = Zof(),
    o = Vil(t) - Vil(n),
    s = Math.round(o / 86400000);
  if (s === 0) return Kin(r, Xof).format(n);
  if (s > 0 && s < 7) return Kin(r, Jof).format(n);
  return Kin(r, Qof).format(n);
}
function Zof() {
  let e = process.env.LC_ALL || process.env.LC_TIME || process.env.LANG || "";
  if (rIo.has(e)) return rIo.get(e);
  let t = esf(e);
  return (rIo.set(e, t), t);
}
function esf(e) {
  if (!e || e === "C" || e === "POSIX") return;
  let t = bi(bi(e, "."), "@");
  if (!t) return;
  let n = t.replaceAll("_", "-");
  try {
    return (new Intl.DateTimeFormat(n), n);
  } catch {
    return;
  }
}
function Vil(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
}
var Xof, Jof, Qof, rIo;
