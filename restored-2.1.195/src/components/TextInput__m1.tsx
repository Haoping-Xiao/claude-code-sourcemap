// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mne
// matched 2.1.88 source: src/components/TextInput.tsx
// class=modified (alt of src/components/TextInput.tsx)  jaccard=0.0982  score=0.8941  fileCov=0.0993
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function d6i() {
  ((IUt = 0), (hZr = false));
}
function aPn() {
  let e = Ht((y) => Mv(y.settings.prefersReducedMotion)),
    n = P0((y) => y.voiceState) === "recording";
  if (n && !hZr) IUt = 0;
  hZr = n;
  let r = P0((y) => y.voiceAudioLevels),
    o = n && !e,
    [s, i] = Kf(o ? 50 : null);
  if (!o) return [s, null];
  let a = r.at(-1) ?? 0,
    l = Math.min(a * U6d, 1);
  IUt = IUt * u6i + l * (1 - u6i);
  let c = Math.max(1, Math.min(Math.round(IUt * (gZr.length - 1)), gZr.length - 1)),
    u = a < F6d,
    d = ((i / 1000) * 90) % 360,
    p = yb() ? oPn(d) : d,
    {
      r: f,
      g: m,
      b: g,
    } = u
      ? {
          r: 128,
          g: 128,
          b: 128,
        }
      : iPn(p),
    h = `#${((f << 16) | (m << 8) | g).toString(16).padStart(6, "0")}`;
  return [
    s,
    {
      char: gZr[c],
      hex: h,
    },
  ];
}
var gZr = " \u2581\u2582\u2583\u2584\u2585\u2586\u2587\u2588",
  u6i = 0.7,
  U6d = 1.8,
  F6d = 0.15,
  IUt = 0,
  hZr = false;
