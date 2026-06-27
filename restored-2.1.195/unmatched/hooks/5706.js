// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module URc
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0065  score=0.22  fileCov=0.0067
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0065); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module URc] deps: Ye, dn, wr, kgt
bfr = R(se(), 1), BRc = {
  id: "sudo-npm-install",
  maxImpressions: 1,
  onShown: () => xe("sudo_npm_install_notice"),
  compute: async () => {
    if (Oe.DISABLE_INSTALLATION_CHECKS) return null;
    let e = await vVn();
    if (e?.path !== "npm-global" || e.outcome !== "failed" || e.status !== Dwm) return null;
    return {
      key: "sudo-npm-install",
      jsx: bfr.jsxs(w, {
        color: "warning",
        children: ["Claude Code can't auto-update", bfr.jsx(w, {
          dimColor: true,
          children: " \xB7 run `/doctor`"
        })]
      }),
      priority: "high",
      timeoutMs: 15000
    };
  }
};
var wYo,
  FRc = null,
  jRc;