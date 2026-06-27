// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sjc
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: jose; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sjc] deps: @growthbook/growthbook/dist/esm/GrowthBook.mjs, services/PromptSuggestion/promptSuggestion.ts, node-forge/lib/util.js, cgr
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