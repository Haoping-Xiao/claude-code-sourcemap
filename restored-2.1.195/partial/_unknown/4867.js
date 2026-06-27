// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iGl
// matched 2.1.88 source: node_modules/qrcode/lib/renderer/svg.js
// class=partial  jaccard=0.2144  score=0.5632  fileCov=0.2572
// note: low-confidence suggestion: node_modules/qrcode/lib/renderer/svg.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iGl = Q(jrr => {
  var g2f = aFo();
  jrr.render = g2f.render;
  jrr.renderToFile = function (t, n, r, o) {
    if (typeof o === "undefined") o = r, r = void 0;
    let s = require("fs"),
      a = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + jrr.render(n, r);
    s.writeFile(t, a, o);
  };
});