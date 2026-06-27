// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DCo
// matched 2.1.88 source: src/components/Messages.tsx
// class=new  jaccard=0.0148  score=0.5601  fileCov=0.0149
// note: nearest: src/components/Messages.tsx (0.0148); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function MCo() {
  PCo.clear();
}
function $Co(e, t, n) {
  if (!n || !qpe()) return;
  let r = PCo.get(e);
  if (!r) r = {
    raw: "",
    flushedAt: 0
  }, PCo.set(e, r);
  if (r.raw.length < cof) r.raw += t;
  let o = Date.now();
  if (o - r.flushedAt < lof) return;
  r.flushedAt = o;
  let s = jsl(r.raw).slice(0, Vsl);
  n(i => {
    let a = i.findIndex(l => l.index === e);
    if (a === -1 || i[a].contentBlock.name !== Fm) return i;
    return i.with(a, {
      ...i[a],
      contentBlock: {
        ...i[a].contentBlock,
        input: {
          code: s
        }
      }
    });
  });
}
var lof = 100,
  Vsl = 8192,
  cof,
  PCo;