// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y9a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Y9a = Q(Rqn => {
  Object.defineProperty(Rqn, "__esModule", {
    value: true
  });
  Rqn.osDetector = void 0;
  var V9a = Mqt(),
    z9a = require("os"),
    R8p = $Eo();
  class K9a {
    detect(e) {
      return {
        attributes: {
          [V9a.ATTR_OS_TYPE]: (0, R8p.normalizeType)((0, z9a.platform)()),
          [V9a.ATTR_OS_VERSION]: (0, z9a.release)()
        }
      };
    }
  }
  Rqn.osDetector = new K9a();
});