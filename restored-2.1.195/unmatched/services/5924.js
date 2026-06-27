// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cJo
// matched 2.1.88 source: node_modules/@growthbook/growthbook/dist/esm/GrowthBook.mjs
// class=new  jaccard=0.0097  score=0.1385  fileCov=0.0103
// note: nearest: node_modules/@growthbook/growthbook/dist/esm/GrowthBook.mjs (0.0097); dir inferred from dep-graph -> services; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
class rjc {
  constructor(e, t, n) {
    this.parent = e, this.key = t, this.options = n;
  }
  setProtectedHeader(e) {
    if (this.protectedHeader) throw TypeError("setProtectedHeader can only be called once");
    return this.protectedHeader = e, this;
  }
  setUnprotectedHeader(e) {
    if (this.unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
    return this.unprotectedHeader = e, this;
  }
  addSignature(...e) {
    return this.parent.addSignature(...e);
  }
  sign(...e) {
    return this.parent.sign(...e);
  }
  done() {
    return this.parent;
  }
}
class uJo {
  constructor(e) {
    this._signatures = [], this._payload = e;
  }
  addSignature(e, t) {
    let n = new rjc(this, e, t);
    return this._signatures.push(n), n;
  }
  async sign() {
    if (!this._signatures.length) throw new wh("at least one signature must be added");
    let e = {
      signatures: [],
      payload: ""
    };
    for (let t = 0; t < this._signatures.length; t++) {
      let n = this._signatures[t],
        r = new X7e(this._payload);
      r.setProtectedHeader(n.protectedHeader), r.setUnprotectedHeader(n.unprotectedHeader);
      let {
        payload: o,
        ...s
      } = await r.sign(n.key, n.options);
      if (t === 0) e.payload = o;else if (e.payload !== o) throw new wh("inconsistent use of JWS Unencoded Payload (RFC7797)");
      e.signatures.push(s);
    }
    return e;
  }
}