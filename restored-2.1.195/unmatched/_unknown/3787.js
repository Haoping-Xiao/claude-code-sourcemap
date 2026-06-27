// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q9a
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var q9a = Q(kqn => {
  Object.defineProperty(kqn, "__esModule", {
    value: true
  });
  kqn.hostDetector = void 0;
  var OEo = Mqt(),
    G9a = require("os"),
    x8p = j9a(),
    k8p = $Eo();
  class W9a {
    detect(e) {
      return {
        attributes: {
          [OEo.ATTR_HOST_NAME]: (0, G9a.hostname)(),
          [OEo.ATTR_HOST_ARCH]: (0, k8p.normalizeArch)((0, G9a.arch)()),
          [OEo.ATTR_HOST_ID]: (0, x8p.getMachineId)()
        }
      };
    }
  }
  kqn.hostDetector = new W9a();
});