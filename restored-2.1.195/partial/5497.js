// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bbc
// matched 2.1.88 source: src/components/design-system/Divider.tsx
// class=partial  jaccard=0.2285  score=0.5755  fileCov=0.2748
// note: low-confidence suggestion: src/components/design-system/Divider.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bbc = E(() => {
  Ye();
  Ddr = R(rt(), 1);
});
function Abc(e, t) {
  let n = Yce(),
    [r, o] = Pdr.useState(!1),
    s = ks(),
    [, i] = Kf(r && !n ? Sbc : null);
  if (Pdr.useEffect(() => {
    let u = Ebc === !1 && e;
    if (Ebc = e, !u || n) return;
    o(!0);
    let d = s.setTimeout(() => o(!1), Vmm);
    return () => {
      d(), o(!1);
    };
  }, [e, s, n]), !r || n || t <= 0) return;
  let a = Math.floor(i / Sbc),
    l = mW(wc("theme", "dark").value),
    c = Array.from({
      length: t
    }, (u, d) => Io(q9(d + a), l)("\u2500")).join("");
  return [{
    content: c,
    position: "top",
    align: "start",
    offset: 0
  }, {
    content: c,
    position: "bottom",
    align: "start",
    offset: 0
  }];
}
var Pdr,
  Vmm = 2500,
  Sbc = 150,
  Ebc = null;