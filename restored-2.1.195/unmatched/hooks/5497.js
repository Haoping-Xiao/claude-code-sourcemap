// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bbc
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0093  score=0.7259  fileCov=0.0093
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0093); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bbc = E(() => {
  Ye();
  Ddr = R(rt(), 1);
});
function Abc(e, t) {
  let n = Yce(),
    [r, o] = Pdr.useState(false),
    s = ks(),
    [, i] = Kf(r && !n ? Sbc : null);
  if (Pdr.useEffect(() => {
    let u = Ebc === false && e;
    if (Ebc = e, !u || n) return;
    o(true);
    let d = s.setTimeout(() => o(false), Vmm);
    return () => {
      d(), o(false);
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