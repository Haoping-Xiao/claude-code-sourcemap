// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s_o
// matched 2.1.88 source: node_modules/protobufjs/src/index-minimal.js
// class=partial  jaccard=0.1525  score=1  fileCov=0.1525
// note: low-confidence suggestion: node_modules/protobufjs/src/index-minimal.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var s_o = Q(ZFa => {
  var D5 = ZFa;
  D5.build = "minimal";
  D5.Writer = N3n();
  D5.BufferWriter = NFa();
  D5.Reader = U3n();
  D5.BufferReader = zFa();
  D5.util = Ode();
  D5.rpc = r_o();
  D5.roots = o_o();
  D5.configure = QFa;
  function QFa() {
    D5.util._configure(), D5.Writer._configure(D5.BufferWriter), D5.Reader._configure(D5.BufferReader);
  }
  QFa();
});