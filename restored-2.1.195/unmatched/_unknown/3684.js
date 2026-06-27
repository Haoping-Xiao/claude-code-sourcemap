// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eqt
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var eqt = Q(VWn => {
  Object.defineProperty(VWn, "__esModule", {
    value: true
  });
  VWn.BaseSubchannelWrapper = void 0;
  class HWa {
    constructor(e) {
      this.child = e, this.healthy = true, this.healthListeners = new Set(), this.refcount = 0, this.dataWatchers = new Set(), e.addHealthStateWatcher(t => {
        if (this.healthy) this.updateHealthListeners();
      });
    }
    updateHealthListeners() {
      for (let e of this.healthListeners) e(this.isHealthy());
    }
    getConnectivityState() {
      return this.child.getConnectivityState();
    }
    addConnectivityStateListener(e) {
      this.child.addConnectivityStateListener(e);
    }
    removeConnectivityStateListener(e) {
      this.child.removeConnectivityStateListener(e);
    }
    startConnecting() {
      this.child.startConnecting();
    }
    getAddress() {
      return this.child.getAddress();
    }
    throttleKeepalive(e) {
      this.child.throttleKeepalive(e);
    }
    ref() {
      this.child.ref(), this.refcount += 1;
    }
    unref() {
      if (this.child.unref(), this.refcount -= 1, this.refcount === 0) this.destroy();
    }
    destroy() {
      for (let e of this.dataWatchers) e.destroy();
    }
    getChannelzRef() {
      return this.child.getChannelzRef();
    }
    isHealthy() {
      return this.healthy && this.child.isHealthy();
    }
    addHealthStateWatcher(e) {
      this.healthListeners.add(e);
    }
    removeHealthStateWatcher(e) {
      this.healthListeners.delete(e);
    }
    addDataWatcher(e) {
      e.setSubchannel(this.getRealSubchannel()), this.dataWatchers.add(e);
    }
    setHealthy(e) {
      if (e !== this.healthy) {
        if (this.healthy = e, this.child.isHealthy()) this.updateHealthListeners();
      }
    }
    getRealSubchannel() {
      return this.child.getRealSubchannel();
    }
    realSubchannelEquals(e) {
      return this.getRealSubchannel() === e.getRealSubchannel();
    }
    getCallCredentials() {
      return this.child.getCallCredentials();
    }
    getChannel() {
      return this.child.getChannel();
    }
  }
  VWn.BaseSubchannelWrapper = HWa;
});