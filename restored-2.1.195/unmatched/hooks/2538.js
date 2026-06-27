// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mZr
// matched 2.1.88 source: src/ink/layout/node.ts
// class=new  jaccard=0.0569  score=0.5877  fileCov=0.0593
// note: nearest: src/ink/layout/node.ts (0.0569); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mZr = E(() => {
  Ed();
  R0e();
  FDn();
  zj();
  MGe();
  wr();
  uf();
  Jat();
  N6d = new Set(["insert", "clear", "enter", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
});
function GM(e) {
  return Math.round(e * l6i) / l6i;
}
function oPn(e) {
  return GM(e / 360) * 360;
}
function sPn(e, t) {
  return (1 - Math.cos(2 * Math.PI * e / t)) / 2;
}
function WM(e, t, n) {
  return {
    r: Math.round(e.r + (t.r - e.r) * n),
    g: Math.round(e.g + (t.g - e.g) * n),
    b: Math.round(e.b + (t.b - e.b) * n)
  };
}
function qM(e) {
  return `rgb(${e.r},${e.g},${e.b})`;
}
function iPn(e) {
  let t = (e % 360 + 360) % 360,
    n = 0.7,
    r = 0.6,
    o = (1 - Math.abs(0.19999999999999996)) * 0.7,
    s = o * (1 - Math.abs(t / 60 % 2 - 1)),
    i = 0.6 - o / 2,
    a = 0,
    l = 0,
    c = 0;
  if (t < 60) a = o, l = s;else if (t < 120) a = s, l = o;else if (t < 180) l = o, c = s;else if (t < 240) l = s, c = o;else if (t < 300) a = s, c = o;else a = o, c = s;
  return {
    r: Math.round((a + i) * 255),
    g: Math.round((l + i) * 255),
    b: Math.round((c + i) * 255)
  };
}
function jU(e) {
  let t = c6i.get(e);
  if (t !== void 0) return t;
  let n = e.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/),
    r = n ? {
      r: parseInt(n[1], 10),
      g: parseInt(n[2], 10),
      b: parseInt(n[3], 10)
    } : null;
  return c6i.set(e, r), r;
}
var ube,
  l6i = 8,
  c6i;