// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module J3l
// matched 2.1.88 source: node_modules/qrcode/lib/renderer/terminal/terminal.js
// class=partial  jaccard=0.2189  score=0.4235  fileCov=0.3118
// note: low-confidence suggestion: node_modules/qrcode/lib/renderer/terminal/terminal.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module J3l] (exports=X3l)
var X3l = {};
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