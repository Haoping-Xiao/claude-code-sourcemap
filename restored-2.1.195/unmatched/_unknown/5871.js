// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xme
// matched 2.1.88 source: node_modules/gtoken/build/src/index.js
// class=new  jaccard=0.0443  score=0.3069  fileCov=0.0493
// note: nearest: node_modules/gtoken/build/src/index.js (0.0443); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module Xme] (exports=VWH, module=QFc)
var VWH = {};
var QFc = {
  exports: VWH
};
var {
  format: YFc
} = require("util");
class XFc extends Error {
  constructor({
    error_description: e,
    error: t,
    error_uri: n,
    session_state: r,
    state: o,
    scope: s
  }, i) {
    super(!e ? t : `${t} (${e})`);
    if (Object.assign(this, {
      error: t
    }, e && {
      error_description: e
    }, n && {
      error_uri: n
    }, o && {
      state: o
    }, s && {
      scope: s
    }, r && {
      session_state: r
    }), i) Object.defineProperty(this, "response", {
      value: i
    });
    this.name = this.constructor.name, Error.captureStackTrace(this, this.constructor);
  }
}
class JFc extends Error {
  constructor(...e) {
    if (typeof e[0] === "string") super(YFc(...e));else {
      let {
        message: t,
        printf: n,
        response: r,
        ...o
      } = e[0];
      if (n) super(YFc(...n));else super(t);
      if (Object.assign(this, o), r) Object.defineProperty(this, "response", {
        value: r
      });
    }
    this.name = this.constructor.name, Error.captureStackTrace(this, this.constructor);
  }
}
QFc.exports = {
  OPError: XFc,
  RPError: JFc
};
var Ru,
  OC = e => e instanceof CryptoKey;