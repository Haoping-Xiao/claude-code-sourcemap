// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $no
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $no = E(() => {
  Jlt();
  uep = yue("Ch9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvEg9nb29nbGUucHJvdG9idWYiKwoJVGltZXN0YW1wEg8KB3NlY29uZHMYASABKAMSDQoFbmFub3MYAiABKAVChQEKE2NvbS5nb29nbGUucHJvdG9idWZCDlRpbWVzdGFtcFByb3RvUAFaMmdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL3RpbWVzdGFtcHBi+AEBogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM"), M1 = sk(uep, 0);
});
function PZi(e) {
  return new Date(dep(e));
}
function MZi(e) {
  let t = Math.floor(e / 1000);
  return F0(M1, {
    seconds: U_.parse(t),
    nanos: (e - t * 1000) * 1e6
  });
}
function dep(e) {
  return Number(e.seconds) * 1000 + Math.round(e.nanos / 1e6);
}