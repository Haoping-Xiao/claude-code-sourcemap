// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sqa
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var sqa = Q(_5n => {
  Object.defineProperty(_5n, "__esModule", {
    value: true
  });
  _5n.createServiceClientConstructor = void 0;
  var j5p = fqt();
  function G5p(e, t) {
    let n = {
      export: {
        path: e,
        requestStream: false,
        responseStream: false,
        requestSerialize: r => r,
        requestDeserialize: r => r,
        responseSerialize: r => r,
        responseDeserialize: r => r
      }
    };
    return j5p.makeGenericClientConstructor(n, t);
  }
  _5n.createServiceClientConstructor = G5p;
});