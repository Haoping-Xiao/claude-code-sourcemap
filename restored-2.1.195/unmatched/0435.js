// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rfs
// matched 2.1.88 source: node_modules/@grpc/grpc-js/build/src/transport.js
// class=new  jaccard=0.0181  score=0.4801  fileCov=0.0185
// note: nearest: node_modules/@grpc/grpc-js/build/src/transport.js (0.0181); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rfs = E(() => {
  kfs = {
    ccr: {
      controlChannel: !0,
      modelCatalog: !1,
      setPermissionMode: !0,
      fanout: !0,
      presence: !0,
      catchupReplay: !0,
      bashExec: !0,
      fileRead: !0
    },
    ssh: {
      controlChannel: !0,
      modelCatalog: !1,
      setPermissionMode: !0,
      fanout: !1,
      presence: !1,
      catchupReplay: !1,
      bashExec: !1,
      fileRead: !0
    },
    direct: {
      controlChannel: !1,
      modelCatalog: !1,
      setPermissionMode: !1,
      fanout: !1,
      presence: !1,
      catchupReplay: !1,
      bashExec: !1,
      fileRead: !1
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
  return e?.caps?.controlChannel === !0 && !e.viewerOnly;
}
function LO(e) {
  return Ju()?.caps?.[e] === !0;
}
function Tau(e) {
  return Promise.reject(Error(`sendControlRequest not yet wired for ${e} transport`));
}
function Wun(e, t, n, r) {
  if (!t.isRemoteMode) return yIr;
  return {
    kind: e,
    isRemoteMode: !0,
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