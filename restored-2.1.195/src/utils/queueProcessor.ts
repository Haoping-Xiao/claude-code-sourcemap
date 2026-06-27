// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qEc
// matched 2.1.88 source: src/utils/queueProcessor.ts
// class=modified  jaccard=0.2096  score=0.5944  fileCov=0.2446
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function VEc(e) {
  if (e.skipSlashCommands && e.origin?.kind === "peer") return false;
  if (typeof e.value === "string") return e.value.trim().startsWith("/");
  for (let t of e.value) if (t.type === "text") return t.text.trim().startsWith("/");
  return false;
}
function zEc({ executeInput: e }) {
  let t = x8o(V0);
  if (!t)
    return {
      processed: false,
    };
  if (VEc(t) || t.mode === "bash") {
    let s = [I5e((i) => i === t)];
    return (
      Fao(s),
      e(s).finally(() => jao(s)),
      {
        processed: true,
      }
    );
  }
  let n = t.mode,
    r = ALe((o) => V0(o) && !VEc(o) && o.mode === n);
  if (r.length === 0)
    return {
      processed: false,
    };
  return (
    Fao(r),
    e(r).finally(() => jao(r)),
    {
      processed: true,
    }
  );
}
