// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module r$i
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var r$i = Q(jxn => {
  Object.defineProperty(jxn, "__esModule", {
    value: !0
  });
  jxn.osDetector = void 0;
  var e$i = q1t(),
    t$i = require("os"),
    qMd = G6r();
  class n$i {
    detect(e) {
      return {
        attributes: {
          [e$i.ATTR_OS_TYPE]: (0, qMd.normalizeType)((0, t$i.platform)()),
          [e$i.ATTR_OS_VERSION]: (0, t$i.release)()
        }
      };
    }
  }
  jxn.osDetector = new n$i();
});