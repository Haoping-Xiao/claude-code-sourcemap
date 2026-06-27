// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sGn
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sGn = Q(aPe => {
  Object.defineProperty(aPe, "__esModule", {
    value: !0
  });
  aPe.getNodeHttpConfigurationDefaults = aPe.mergeOtlpNodeHttpConfigurationWithDefaults = aPe.httpAgentFactoryFromOptions = void 0;
  var F2a = U2a();
  function j2a(e) {
    return async t => {
      let n = t === "http:",
        r = n ? import("http") : import("https"),
        {
          Agent: o
        } = await r;
      if (n) {
        let {
          ca: s,
          cert: i,
          key: a,
          ...l
        } = e;
        return new o(l);
      }
      return new o(e);
    };
  }
  aPe.httpAgentFactoryFromOptions = j2a;
  function cNp(e, t, n) {
    return {
      ...(0, F2a.mergeOtlpHttpConfigurationWithDefaults)(e, t, n),
      agentFactory: e.agentFactory ?? t.agentFactory ?? n.agentFactory,
      userAgent: e.userAgent
    };
  }
  aPe.mergeOtlpNodeHttpConfigurationWithDefaults = cNp;
  function uNp(e, t) {
    return {
      ...(0, F2a.getHttpConfigurationDefaults)(e, t),
      agentFactory: j2a({
        keepAlive: !0
      })
    };
  }
  aPe.getNodeHttpConfigurationDefaults = uNp;
});