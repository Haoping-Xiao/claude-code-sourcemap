// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Rci
// matched 2.1.88 source: node_modules/@smithy/signature-v4/dist-cjs/index.js
// class=new  jaccard=0.0515  score=0.4693  fileCov=0.0546
// note: nearest: node_modules/@smithy/signature-v4/dist-cjs/index.js (0.0515); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Rci = E(() => {
  lMt();
  uMt();
  (function (e) {
    e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid";
  })(xci || (xci = {}));
  Jfd = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
});
var Lci = (e, t) => {
  e = e.toLowerCase();
  for (let n of Object.keys(t)) if (e === n.toLowerCase()) return !0;
  return !1;
};
var HHn = ({
    headers: e,
    query: t,
    ...n
  }) => ({
    ...n,
    headers: {
      ...e
    },
    query: t ? Qfd(t) : void 0
  }),
  Qfd = e => Object.keys(e).reduce((t, n) => {
    let r = e[n];
    return {
      ...t,
      [n]: Array.isArray(r) ? [...r] : r
    };
  }, {});
var l4r = (e, t = {}) => {
  let {
    headers: n,
    query: r = {}
  } = typeof e.clone === "function" ? e.clone() : HHn(e);
  for (let o of Object.keys(n)) {
    let s = o.toLowerCase();
    if (s.slice(0, 6) === "x-amz-" && !t.unhoistableHeaders?.has(s)) r[o] = n[o], delete n[o];
  }
  return {
    ...e,
    headers: n,
    query: r
  };
};
var c4r = () => {};
var THn = e => {
  e = typeof e.clone === "function" ? e.clone() : HHn(e);
  for (let t of Object.keys(e.headers)) if (yci.indexOf(t.toLowerCase()) > -1) delete e.headers[t];
  return e;
};