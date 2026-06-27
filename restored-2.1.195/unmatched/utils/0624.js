// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dEs
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dEs] deps: Fkr, lodash-es/_cloneBuffer.js, lodash-es/_initCloneByTag.js, PEr, lodash-es/_baseIsMap.js, lodash-es/isArguments.js, lodash-es/isArray.js, lodash-es/isPlainObject.js, lodash-es/isBuffer.js, don, lodash-es/isFunction.js, extend/index.js, lodash-es/_arrayLikeKeys.js, jkr, semver/internal/lrucache.js
uEs = qDu;
function pEs(e, t, n, r, o) {
  if (e === t) return;
  ddn(t, function (s, i) {
    if (o || (o = new Pie()), Bb(s)) uEs(e, t, i, n, pEs, r, o);else {
      var a = r ? r(nRt(e, i), s, i + "", e, t, o) : void 0;
      if (a === void 0) a = s;
      tRt(e, i, a);
    }
  }, Zie);
}
var fEs;