// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qGn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qGn = Q(WGn => {
  Object.defineProperty(WGn, "__esModule", {
    value: true
  });
  WGn.registerAdminService = aFp;
  WGn.addAdminServicesToServer = lFp;
  var c4a = [];
  function aFp(e, t) {
    c4a.push({
      getServiceDefinition: e,
      getHandlers: t
    });
  }
  function lFp(e) {
    for (let {
      getServiceDefinition: t,
      getHandlers: n
    } of c4a) e.addService(t(), n());
  }
});