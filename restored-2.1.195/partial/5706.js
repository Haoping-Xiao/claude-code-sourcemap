// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module URc
// matched 2.1.88 source: src/components/messages/UserAgentNotificationMessage.tsx
// class=partial  jaccard=0.081  score=0.1485  fileCov=0.1511
// note: low-confidence suggestion: src/components/messages/UserAgentNotificationMessage.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var URc = E(() => {
  Ye();
  dn();
  wr();
  kgt();
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
            dimColor: !0,
            children: " \xB7 run `/doctor`"
          })]
        }),
        priority: "high",
        timeoutMs: 15000
      };
    }
  };
});
var wYo,
  FRc = null,
  jRc;