// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _jc
// matched 2.1.88 source: node_modules/node-forge/lib/util.js
// class=new  jaccard=0.0203  score=0.383  fileCov=0.021
// note: nearest: node_modules/node-forge/lib/util.js (0.0203); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var _jc = E(() => {
  sB();
  YP();
  wm();
  agr();
  cgr();
  hJo = class hJo extends J7e {
    encode() {
      let e = xS(JSON.stringify({
          alg: "none"
        })),
        t = xS(JSON.stringify(this._payload));
      return `${e}.${t}.`;
    }
    static decode(e, t) {
      if (typeof e !== "string") throw new sD("Unsecured JWT must be a string");
      let {
        0: n,
        1: r,
        2: o,
        length: s
      } = e.split(".");
      if (s !== 3 || o !== "") throw new sD("Invalid Unsecured JWT");
      let i;
      try {
        if (i = JSON.parse(fx.decode(VT(n))), i.alg !== "none") throw Error();
      } catch (l) {
        throw new sD("Invalid Unsecured JWT");
      }
      return {
        payload: Wvt(i, VT(r), t),
        header: i
      };
    }
  };
});
var yJo = {};
_t(yJo, {
  encode: () => encode,
  decode: () => decode
});
var encode, decode;