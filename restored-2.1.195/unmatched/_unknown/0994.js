// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DFs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DFs = Q(cyn => {
  Object.defineProperty(cyn, "__esModule", {
    value: true
  });
  cyn.resolveRuntimeExtensions = void 0;
  var xFs = Xee(),
    kFs = khn(),
    RFs = fj(),
    LFs = IFs(),
    D8u = (e, t) => {
      let n = Object.assign((0, xFs.getAwsRegionExtensionConfiguration)(e), (0, RFs.getDefaultExtensionConfiguration)(e), (0, kFs.getHttpHandlerExtensionConfiguration)(e), (0, LFs.getHttpAuthExtensionConfiguration)(e));
      return t.forEach(r => r.configure(n)), Object.assign(e, (0, xFs.resolveAwsRegionExtensionConfiguration)(n), (0, RFs.resolveDefaultRuntimeConfig)(n), (0, kFs.resolveHttpHandlerRuntimeConfig)(n), (0, LFs.resolveHttpAuthRuntimeConfig)(n));
    };
  cyn.resolveRuntimeExtensions = D8u;
});