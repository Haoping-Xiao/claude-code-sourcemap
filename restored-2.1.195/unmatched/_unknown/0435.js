// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rfs
// matched 2.1.88 source: node_modules/@grpc/grpc-js/build/src/transport.js
// class=new  jaccard=0.0181  score=0.4801  fileCov=0.0185
// note: nearest: node_modules/@grpc/grpc-js/build/src/transport.js (0.0181); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rfs = E(() => {
  kfs = {
    ccr: {
      controlChannel: true,
      modelCatalog: false,
      setPermissionMode: true,
      fanout: true,
      presence: true,
      catchupReplay: true,
      bashExec: true,
      fileRead: true
    },
    ssh: {
      controlChannel: true,
      modelCatalog: false,
      setPermissionMode: true,
      fanout: false,
      presence: false,
      catchupReplay: false,
      bashExec: false,
      fileRead: true
    },
    direct: {
      controlChannel: false,
      modelCatalog: false,
      setPermissionMode: false,
      fanout: false,
      presence: false,
      catchupReplay: false,
      bashExec: false,
      fileRead: false
    }
  };
});
function Ju() {
  return nUe().remote;
}
function vl() {
  return da() || Ju() !== null;
}
function NA() {
  let e = Ju();
  return e?.caps?.controlChannel === true && !e.viewerOnly;
}
function LO(e) {
  return Ju()?.caps?.[e] === true;
}
function Tau(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`));
}
function Wun(e, t, n, r) {
  if (!t.isRemoteMode) return yIr;
  return {
    kind: e,
    isRemoteMode: true,
    viewerOnly: n,
    caps: kfs[e],
    sessionId: r,
    sendMessage: t.sendMessage,
    cancelRequest: t.cancelRequest,
    disconnect: t.disconnect,
    sendControlRequest: t.sendControlRequest ?? (() => Tau(e))
  };
}
var yIr;