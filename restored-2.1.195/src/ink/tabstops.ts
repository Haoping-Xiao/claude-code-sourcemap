// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iXr
// matched 2.1.88 source: src/ink/tabstops.ts
// class=modified  jaccard=0.313  score=1  fileCov=0.313
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var iXr = E(() => {
  Y4i = sXr;
});
function X4i(e, t = B4d) {
  if (!e.includes("\t")) return e;
  let n = Qke(),
    r = n.feed(e);
  r.push(...n.flush());
  let o = "",
    s = 0;
  for (let i of r)
    if (i.type === "sequence") o += i.value;
    else {
      let a = i.value.split(/(\t|\n)/);
      for (let l of a)
        if (l === "\t") {
          let c = t - (s % t);
          ((o += " ".repeat(c)), (s += c));
        } else if (
          l ===
          `
`
        )
          ((o += l), (s = 0));
        else ((o += l), (s += rn(l)));
    }
  return o;
}
var B4d = 8;
