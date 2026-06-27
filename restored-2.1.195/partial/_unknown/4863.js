// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J3l
// matched 2.1.88 source: node_modules/@typespec/ts-http-runtime/dist/esm/util/typeGuards.js
// class=partial  jaccard=0.1174  score=0.1174  fileCov=1
// note: low-confidence suggestion: node_modules/@typespec/ts-http-runtime/dist/esm/util/typeGuards.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var J3l = Q(X3l => {
  X3l.render = function (e, t, n) {
    let r = e.modules.size,
      o = e.modules.data,
      s = "\x1B[40m  \x1B[0m",
      i = "\x1B[47m  \x1B[0m",
      a = "",
      l = Array(r + 3).join("\x1B[47m  \x1B[0m"),
      c = Array(2).join("\x1B[47m  \x1B[0m");
    a += l + `
`;
    for (let u = 0; u < r; ++u) {
      a += "\x1B[47m  \x1B[0m";
      for (let d = 0; d < r; d++) a += o[u * r + d] ? "\x1B[40m  \x1B[0m" : "\x1B[47m  \x1B[0m";
      a += c + `
`;
    }
    if (a += l + `
`, typeof n === "function") n(null, a);
    return a;
  };
});