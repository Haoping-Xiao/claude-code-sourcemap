// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LMl
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0063  score=0.3561  fileCov=0.0064
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0063); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function DMl(e, t, n) {
  if (n || !Kw(t)) return;
  return RM(t, e);
}
function PMl(e, t = false) {
  if (!e) return;
  if (t) return `${Ofn} ultracode \xB7 xhigh effort + dynamic workflows for maximum thoroughness`;
  return `${f1o(e)} ${e} \xB7 /effort`;
}
function f1o(e) {
  switch (e) {
    case "low":
      return Fvs;
    case "medium":
      return $fn;
    case "high":
      return ORr;
    case "xhigh":
      return jvs;
    case "max":
      return Gvs;
    default:
      return ORr;
  }
}
function MMl(e) {
  if (e) {
    let t = mW(wc("theme", "dark").value);
    return Io("effortUltra", t)("ultracode");
  }
  return;
}
function $Ml(e) {
  let t = e.filter(Boolean).join("  ") || void 0;
  return t ? {
    content: ` ${t} `,
    position: "top",
    align: "end",
    offset: 0
  } : void 0;
}