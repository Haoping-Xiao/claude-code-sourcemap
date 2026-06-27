// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zri
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zri = E(() => {
  Jri = R(yd(), 1), u2r = R(by(), 1);
});
var eoi,
  toi,
  $dd = e => Qri(e, l2r, async ({
    profile: t = process.env.AWS_PROFILE
  }) => toi.loadConfig({
    environmentVariableSelector: n => n.AWS_REGION,
    configFileSelector: n => n.region,
    default: () => {
      return;
    }
  }, {
    ...eoi.NODE_REGION_CONFIG_FILE_OPTIONS,
    profile: t
  })());