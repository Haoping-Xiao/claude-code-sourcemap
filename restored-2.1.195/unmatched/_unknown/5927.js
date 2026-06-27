// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sjc
// matched 2.1.88 source: node_modules/@growthbook/growthbook/dist/esm/GrowthBook.mjs
// class=new  jaccard=0.0077  score=0.2803  fileCov=0.0079
// note: nearest: node_modules/@growthbook/growthbook/dist/esm/GrowthBook.mjs (0.0077); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sjc] deps: cJo, wm, YP, cgr
dJo = class dJo extends J7e {
  setProtectedHeader(e) {
    return this._protectedHeader = e, this;
  }
  async sign(e, t) {
    var n;
    let r = new xnn(IS.encode(JSON.stringify(this._payload)));
    if (r.setProtectedHeader(this._protectedHeader), Array.isArray((n = this._protectedHeader) === null || n === void 0 ? void 0 : n.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) throw new sD("JWTs MUST NOT use unencoded payload");
    return r.sign(e, t);
  }
};
var pJo;