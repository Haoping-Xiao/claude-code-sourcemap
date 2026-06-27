// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZMi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ZMi = Q(Fxn => {
  Object.defineProperty(Fxn, "__esModule", {
    value: !0
  });
  Fxn.hostDetector = void 0;
  var W6r = q1t(),
    JMi = require("os"),
    GMd = XMi(),
    WMd = G6r();
  class QMi {
    detect(e) {
      return {
        attributes: {
          [W6r.ATTR_HOST_NAME]: (0, JMi.hostname)(),
          [W6r.ATTR_HOST_ARCH]: (0, WMd.normalizeArch)((0, JMi.arch)()),
          [W6r.ATTR_HOST_ID]: (0, GMd.getMachineId)()
        }
      };
    }
  }
  Fxn.hostDetector = new QMi();
});