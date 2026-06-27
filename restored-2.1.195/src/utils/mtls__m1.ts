// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bLt
// matched 2.1.88 source: src/utils/mtls.ts
// class=modified (alt of src/utils/mtls.ts)  jaccard=0.1003  score=1  fileCov=0.1003
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var bLt = E(() => {
  kCs = require("url");
});
function HY() {
  let e = UB(),
    t = DG();
  if (!e && !t) return;
  return {
    ...e,
    ...(t && {
      ca: t,
    }),
  };
}
function Ket() {
  let e = UB(),
    t = DG();
  if (!e && !t) return {};
  return {
    tls: {
      ...e,
      ...(t && {
        ca: t,
      }),
    },
  };
}
function DCs() {
  (UB.cache.clear?.(), qLr.cache.clear?.(), T("Cleared mTLS configuration cache"));
}
function PCs() {
  if (!UB()) return;
  if (process.env.NODE_EXTRA_CA_CERTS)
    T("NODE_EXTRA_CA_CERTS detected - Node.js will automatically append to built-in CAs");
}
var LCs, UB, qLr;
