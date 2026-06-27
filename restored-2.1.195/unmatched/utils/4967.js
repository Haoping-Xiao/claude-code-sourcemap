// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module B9l
// matched 2.1.88 source: src/commands/export/export.tsx
// class=new  jaccard=0.0405  score=0.2699  fileCov=0.0455
// note: nearest: src/commands/export/export.tsx (0.0405); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module B9l] deps: m8, gGe, Jke, Ye, kt, Du, rpn, vn, Hu, Is, dr, sr, eE
$9l = R(lt(), 1), zHe = R(rt(), 1), hR = R(se(), 1);
var U9l = {};
var F9l,
  KWf = 20,
  call = async (e, t) => {
    let n = t.messages.length < KWf,
      r = await vc(oZr(), 250, "VS Code settings read timed out").catch(() => null);
    return F9l.jsx(N9l, {
      onDone: e,
      showDemoRuler: n,
      editorSensitivity: r
    });
  };