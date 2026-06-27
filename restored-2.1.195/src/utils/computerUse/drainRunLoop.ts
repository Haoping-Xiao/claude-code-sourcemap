// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sRa
// matched 2.1.88 source: src/utils/computerUse/drainRunLoop.ts
// class=modified  jaccard=0.2692  score=0.3967  fileCov=0.4557
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var sRa = Q((xXy, oRa) => {
  var __dirname =
      "/home/runner/work/claude-cli-internal/claude-cli-internal/node_modules/@ant/computer-use-swift/js",
    UIp = require("path");
  throw Error("@ant/computer-use-swift is only available on macOS");
  var FIp = require(
    process.env.COMPUTER_USE_SWIFT_NODE_PATH ??
      UIp.resolve(__dirname, "../prebuilds/computer_use.node"),
  );
  oRa.exports = FIp.computerUse;
});
function U4() {
  throw Error("@ant/computer-use-swift is macOS-only");
}
var jIp;
function GIp(e) {
  e._drainMainRunLoop();
}
function iRa() {
  if ((zFn++, cGt === void 0))
    ((cGt = setInterval(GIp, 1, U4())),
      T("[drainRunLoop] pump started", {
        level: "verbose",
      }));
}
function aRa() {
  if ((zFn--, zFn <= 0 && cGt !== void 0))
    (clearInterval(cGt),
      (cGt = void 0),
      T("[drainRunLoop] pump stopped", {
        level: "verbose",
      }),
      (zFn = 0));
}
function qIp(e, t) {
  e(new lRa(t));
}
async function Dre(e, t = WIp) {
  iRa();
  let n;
  try {
    let r = e();
    r.catch(() => {});
    let o = XY();
    return ((n = setTimeout(qIp, t, o.reject, t)), await Promise.race([r, o.promise]));
  } finally {
    (clearTimeout(n), aRa());
  }
}
var cGt,
  zFn = 0,
  WIp = 30000,
  lRa,
  cRa,
  uRa;
