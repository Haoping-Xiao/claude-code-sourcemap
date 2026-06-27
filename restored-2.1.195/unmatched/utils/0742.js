// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dr
// matched 2.1.88 source: src/utils/settings/settings.ts
// class=new  jaccard=0.0378  score=0.8507  fileCov=0.0381
// note: nearest: src/utils/settings/settings.ts (0.0378); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dr] deps: xpn, Xr, ft, dn, kt, je, At, oc, PB, ys, mRr, Rd, vn, Is, Jt, sG, vf, Cfn, hY, mCe, RCe, i2e, Sx, Sx, ICe, Smn, lj, ICe, ICe
jae = require("path");
jo = Dr;
U1u = ve(() => H.object({
  allow: H.array(H.string()).optional(),
  soft_deny: H.array(H.string()).optional(),
  hard_deny: H.array(H.string()).optional(),
  deny: H.array(H.string()).optional(),
  environment: H.array(H.string()).optional()
})), fCs = ["userSettings", "localSettings", "flagSettings", "policySettings"];