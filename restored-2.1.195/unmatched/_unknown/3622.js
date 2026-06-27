// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jVe
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jVe = Q(FVe => {
  Object.defineProperty(FVe, "__esModule", {
    value: !0
  });
  FVe.InterceptingListenerImpl = void 0;
  FVe.statusOrFromValue = pFp;
  FVe.statusOrFromError = fFp;
  FVe.isInterceptingListener = mFp;
  var dFp = A$();
  function pFp(e) {
    return {
      ok: !0,
      value: e
    };
  }
  function fFp(e) {
    var t;
    return {
      ok: !1,
      error: Object.assign(Object.assign({}, e), {
        metadata: (t = e.metadata) !== null && t !== void 0 ? t : new dFp.Metadata()
      })
    };
  }
  function mFp(e) {
    return e.onReceiveMetadata !== void 0 && e.onReceiveMetadata.length === 1;
  }
  class g4a {
    constructor(e, t) {
      this.listener = e, this.nextListener = t, this.processingMetadata = !1, this.hasPendingMessage = !1, this.processingMessage = !1, this.pendingStatus = null;
    }
    processPendingMessage() {
      if (this.hasPendingMessage) this.nextListener.onReceiveMessage(this.pendingMessage), this.pendingMessage = null, this.hasPendingMessage = !1;
    }
    processPendingStatus() {
      if (this.pendingStatus) this.nextListener.onReceiveStatus(this.pendingStatus);
    }
    onReceiveMetadata(e) {
      this.processingMetadata = !0, this.listener.onReceiveMetadata(e, t => {
        this.processingMetadata = !1, this.nextListener.onReceiveMetadata(t), this.processPendingMessage(), this.processPendingStatus();
      });
    }
    onReceiveMessage(e) {
      this.processingMessage = !0, this.listener.onReceiveMessage(e, t => {
        if (this.processingMessage = !1, this.processingMetadata) this.pendingMessage = t, this.hasPendingMessage = !0;else this.nextListener.onReceiveMessage(t), this.processPendingStatus();
      });
    }
    onReceiveStatus(e) {
      this.listener.onReceiveStatus(e, t => {
        if (this.processingMetadata || this.processingMessage) this.pendingStatus = t;else this.nextListener.onReceiveStatus(t);
      });
    }
  }
  FVe.InterceptingListenerImpl = g4a;
});