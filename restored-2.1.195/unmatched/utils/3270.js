// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m5
// matched 2.1.88 source: node_modules/@smithy/core/dist-cjs/submodules/cbor/index.js
// class=new  jaccard=0.0133  score=0.1599  fileCov=0.0144
// note: nearest: node_modules/@smithy/core/dist-cjs/submodules/cbor/index.js (0.0133); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var m5 = E(() => {
  ft();
  Du();
  og();
  fn();
  qPn();
  WSe();
  rpo();
  Xdt();
  dg = R(qi(), 1), Zxa = R(Nh(), 1), yDe = new WeakMap(), hDe = dg.createContextKey("cc.interaction_state"), bqe = dg.createContextKey("cc.tool_state"), M3t = dg.createContextKey("cc.blocked_state"), apo = dg.createContextKey("cc.execution_state"), eka = dg.createContextKey("cc.subagent_state");
  Mwp = new Zxa.W3CTraceContextPropagator();
});
class mka {
  capBytes;
  onOverflow;
  chunks = [];
  byteLength = 0;
  overflowed = false;
  overflowThrown = false;
  constructor(e, t) {
    this.capBytes = e;
    this.onOverflow = t;
  }
  append(e) {
    if (this.overflowed) return;
    if (this.byteLength + e.length > this.capBytes) {
      this.chunks = [], this.byteLength = 0, this.overflowed = true, this.onOverflow(new U3t(this.capBytes));
      return;
    }
    this.chunks.push(e), this.byteLength += e.length;
  }
  readMessage() {
    if (this.overflowed) {
      if (this.overflowThrown) return null;
      throw this.overflowThrown = true, new U3t(this.capBytes);
    }
    if (this.chunks.length === 0) return null;
    let e = this.chunks.at(-1),
      t = e.indexOf(10);
    if (t === -1) return null;
    let n = this.chunks.length === 1 ? e : Buffer.concat(this.chunks),
      r = n.length - e.length + t,
      o = n.toString("utf8", 0, r).replace(/\r$/, ""),
      s = n.subarray(r + 1);
    return this.chunks = s.length > 0 ? [s] : [], this.byteLength = s.length, mIr(o);
  }
  clear() {
    this.chunks = [], this.byteLength = 0;
  }
}
var ppo = 16777216,
  U3t,
  F3t;