// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uFl
// matched 2.1.88 source: src/ink/styles.ts
// class=new  jaccard=0.0223  score=0.2641  fileCov=0.0237
// note: nearest: src/ink/styles.ts (0.0223); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uFl] deps: utils/debug.ts, components/ConfigurableShortcutHint.tsx, @smithy/types/dist-cjs/index.js, components/ScrollKeybindingHandler.tsx, constants/oauth.ts, components/design-system/Ratchet.tsx, utils/env.ts, hooks/useTerminalSize.ts, utils/staticRender.tsx, utils/http.ts, utils/debug.ts, utils/errors.ts, utils/permissions/permissionSetup.ts, utils/sequential.ts
aFl = R(lt(), 1), ZF = R(rt(), 1), ry = R(se(), 1);
function pFl(e) {
  let t = dFl.c(8),
    {
      onSelect: n,
      onCancel: r
    } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) o = [{
    label: "Set up GitHub Actions workflows",
    value: "setup"
  }, {
    label: "Skip for now (you can run /install-github-app again later)",
    value: "skip"
  }], t[0] = o;else o = t[0];
  let s = o,
    i;
  if (t[1] !== n) i = d => {
    n(d);
  }, t[1] = n, t[2] = i;else i = t[2];
  let a = i,
    l;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) l = LHe.jsx(U, {
    marginBottom: 1,
    children: LHe.jsx(LH, {
      subtitle: "Set up GitHub Actions",
      children: "GitHub App installed!"
    })
  }), t[3] = l;else l = t[3];
  let c;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) c = LHe.jsx(U, {
    flexDirection: "column",
    marginBottom: 1,
    children: LHe.jsx(w, {
      children: "The Claude GitHub App is now installed. You can optionally set up GitHub Actions workflows so Claude responds to @claude mentions in issues and PRs."
    })
  }), t[4] = c;else c = t[4];
  let u;
  if (t[5] !== a || t[6] !== r) u = LHe.jsxs(U, {
    flexDirection: "column",
    borderStyle: "round",
    borderDimColor: true,
    paddingX: 1,
    children: [l, c, LHe.jsx(U, {
      flexDirection: "column",
      children: LHe.jsx(Sr, {
        options: s,
        onChange: a,
        onCancel: r
      })
    })]
  }), t[5] = a, t[6] = r, t[7] = u;else u = t[7];
  return u;
}
var dFl, LHe;