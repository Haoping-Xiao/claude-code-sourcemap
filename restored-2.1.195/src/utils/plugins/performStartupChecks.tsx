// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bDc
// matched 2.1.88 source: src/utils/plugins/performStartupChecks.tsx
// class=modified  jaccard=0.4044  score=1  fileCov=0.4044
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
async function SDc(e) {
  if ((T("performStartupChecks called"), !ad())) {
    T("Trust not accepted for current directory - skipping plugin installations");
    return;
  }
  try {
    if ((T("Starting background plugin installations"), await ser()))
      (gOe(),
        PI("performStartupChecks: seed marketplaces changed"),
        e((n) => {
          if (n.plugins.needsRefresh) return n;
          return {
            ...n,
            plugins: {
              ...n.plugins,
              needsRefresh: true,
            },
          };
        }));
    await _Dc(e);
  } catch (t) {
    T(`Error initiating background plugin installations: ${t}`);
  }
}
