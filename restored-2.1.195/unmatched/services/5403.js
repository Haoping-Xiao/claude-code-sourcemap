// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mmc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0029  score=0.7428  fileCov=0.0029
// note: nearest: src/screens/REPL.tsx (0.0029); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Mmc = E(() => {
  ft();
  ih();
});
function $mc(e) {
  let t = false;
  return Lme.setState(n => {
    let r = n.open.filter(i => i.id !== e);
    if (r.length === n.open.length) return n;
    t = true;
    let o = n.open.at(-1)?.id === e,
      s = r.at(-1);
    return {
      open: o && s ? [...r.slice(0, -1), {
        ...s,
        swappedAt: Date.now()
      }] : r
    };
  }), t;
}
function ATt() {
  return w8o.useSyncExternalStore(Lme.subscribe, Omc, Omc);
}
function Omc() {
  return Lme.getState().open.at(-1) ?? null;
}
function o7e() {
  return w8o.useSyncExternalStore(Lme.subscribe, Nmc, Nmc);
}
function Nmc() {
  return Lme.getState().open.length > 0;
}
var w8o, Lme, v8o, w3;