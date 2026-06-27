// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V4
// matched 2.1.88 source: node_modules/@grpc/grpc-js/build/src/channelz.js
// class=new  jaccard=0.0382  score=1  fileCov=0.0382
// note: nearest: node_modules/@grpc/grpc-js/build/src/channelz.js (0.0382); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module V4] (exports=$Gn)
var $Gn = {};
Object.defineProperty($Gn, "__esModule", {
  value: true
});
$Gn.ConnectivityState = void 0;
var jja;
(function (e) {
  e[e.IDLE = 0] = "IDLE", e[e.CONNECTING = 1] = "CONNECTING", e[e.READY = 2] = "READY", e[e.TRANSIENT_FAILURE = 3] = "TRANSIENT_FAILURE", e[e.SHUTDOWN = 4] = "SHUTDOWN";
})(jja || ($Gn.ConnectivityState = jja = {}));