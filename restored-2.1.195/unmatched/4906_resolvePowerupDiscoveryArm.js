// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QFo
// class=new  (no 2.1.88 match)
// note: 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var QFo = E(() => {
  dr();
});
var R5l = {};
_t(R5l, {
  resolvePowerupDiscoveryArm: () => resolvePowerupDiscoveryArm,
  POWERUP_DISCOVERY_COPY: () => POWERUP_DISCOVERY_COPY
});
function resolvePowerupDiscoveryArm() {
  let e = Oe.CLAUDE_CODE_POWERUP_ONBOARDING;
  if (e === "banner" || e === "step") return e;
  return at("tengu_birch_lantern", "off");
}
var POWERUP_DISCOVERY_COPY;