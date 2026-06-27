// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eis
// matched 2.1.88 source: src/utils/slowOperations.ts
// class=modified  jaccard=0.2325  score=0.8511  fileCov=0.2424
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eis] deps: lodash-es/_hashGet.js, lss, lodash-es/_equalObjects.js, lodash-es/_freeGlobal.js, hss, lodash-es/_cloneBuffer.js, PEr, Ass, Tss, lodash-es/_equalObjects.js, lodash-es/_initCloneArray.js, lodash-es/_baseIsEqualDeep.js, @smithy/eventstream-codec/dist-cjs/index.js, $ss, lodash-es/_baseIsMap.js, lodash-es/isArray.js, lodash-es/isBuffer.js, lodash-es/_baseIsSet.js, lodash-es/isFunction.js, lodash-es/_baseClone.js, OBe, FJe
VH = {};
VH[Xss] =
  VH[WYc] =
  VH[n7c] =
  VH[r7c] =
  VH[qYc] =
  VH[VYc] =
  VH[o7c] =
  VH[s7c] =
  VH[i7c] =
  VH[a7c] =
  VH[l7c] =
  VH[YYc] =
  VH[XYc] =
  VH[Qss] =
  VH[JYc] =
  VH[QYc] =
  VH[ZYc] =
  VH[e7c] =
  VH[c7c] =
  VH[u7c] =
  VH[d7c] =
  VH[p7c] =
    !0;
VH[zYc] = VH[Jss] = VH[t7c] = !1;
Zss = Din;
function m7c() {
  return f7c;
}
function jsonStringify(value, replacer, space) {
  using r = gy`JSON.stringify(${value})`;
  return JSON.stringify(value, replacer, space);
}
function tis(e) {
  return (
    JSON.stringify(e) +
    `
`
  );
}
function nis(e) {
  using t = gy`jsonlJoin(${e.length})`;
  let n = "";
  for (let r = 0; r < e.length; r++)
    n +=
      JSON.stringify(e[r]) +
      `
`;
  return n;
}
function qge(e) {
  return JSON.parse(e);
}
function clone(value, options) {
  using n = gy`structuredClone(${value})`;
  return structuredClone(value, options);
}
function writeFileSync_DEPRECATED(filePath, data, options) {
  using r = gy`fs.writeFileSync(${filePath}, ${data})`;
  if (
    options !== null &&
    typeof options === "object" &&
    "flush" in options &&
    options.flush === !0
  ) {
    let s = typeof options === "object" && "encoding" in options ? options.encoding : void 0,
      i = typeof options === "object" && "mode" in options ? options.mode : void 0,
      a;
    try {
      ((a = Wge.openSync(filePath, "w", i)),
        Wge.writeFileSync(a, data, {
          encoding: s ?? void 0,
        }),
        Wge.fsyncSync(a));
    } finally {
      if (a !== void 0) Wge.closeSync(a);
    }
  } else Wge.writeFileSync(filePath, data, options);
}
var Wge,
  C8m,
  f7c,
  gy,
  jsonParse = (text, reviver) => {
    using n = gy`JSON.parse(${text})`;
    return typeof reviver > "u" ? JSON.parse(text) : JSON.parse(text, reviver);
  };
