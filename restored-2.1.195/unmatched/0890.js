// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IMs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var IMs = Q(dhn => {
  Object.defineProperty(dhn, "__esModule", {
    value: !0
  });
  dhn.getEndpointFromConfig = void 0;
  var PGu = RB(),
    MGu = CMs(),
    $Gu = async e => (0, PGu.loadConfig)((0, MGu.getEndpointUrlConfig)(e ?? ""))();
  dhn.getEndpointFromConfig = $Gu;
});