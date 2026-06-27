// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y9l
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.003  score=0.2919  fileCov=0.0031
// note: nearest: src/screens/REPL.tsx (0.003); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Y9l] deps: si, Zf, fH, O0, dse, _i, m8, Ye, ps, nk, rq, fn, es, vf, dr, sr, Cc, vi, B_, nUo, Pfe
V9l = R(lt(), 1), r2 = R(rt(), 1), ix = R(se(), 1), Z2o = ["on", "name-only", "user-invocable-only", "off"], JWf = {
  on: {
    glyph: nt.tick,
    label: "on",
    color: "success"
  },
  "name-only": {
    glyph: nt.bullet,
    label: "name-only"
  },
  "user-invocable-only": {
    glyph: nt.circle,
    label: "user-only",
    color: "warning"
  },
  off: {
    glyph: nt.cross,
    label: "off",
    color: "error"
  }
};
var X9l = {};
_t(X9l, {
  call: () => call
});
async function call(e, t) {
  return J9l.jsx(K9l, {
    onExit: e,
    commands: t.options.commands,
    bytesPerToken: rH(t.options.mainLoopModel)
  });
}
var J9l;