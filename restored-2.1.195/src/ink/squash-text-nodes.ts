// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module K_e
// matched 2.1.88 source: src/ink/squash-text-nodes.ts
// class=modified  jaccard=0.6371  score=1  fileCov=0.6371
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var K_e = E(() => {
  ((Cy = new WeakMap()), (wBt = new WeakMap()));
});
function KRn(e, t = {}, n, r = []) {
  let o = e.textStyles
    ? {
        ...t,
        ...e.textStyles,
      }
    : t;
  for (let s of e.childNodes) {
    if (s === void 0) continue;
    if (s.nodeName === "#text") {
      if (s.nodeValue.length > 0)
        r.push({
          text: s.nodeValue,
          styles: o,
          hyperlink: n,
        });
    } else if (s.nodeName === "ink-text" || s.nodeName === "ink-virtual-text") KRn(s, o, n, r);
    else if (s.nodeName === "ink-link") {
      let i = s.attributes.href;
      KRn(s, o, i || n, r);
    }
  }
  return r;
}
function sXr(e) {
  let t = "";
  for (let n of e.childNodes) {
    if (n === void 0) continue;
    if (n.nodeName === "#text") t += n.nodeValue;
    else if (n.nodeName === "ink-text" || n.nodeName === "ink-virtual-text") t += sXr(n);
    else if (n.nodeName === "ink-link") t += sXr(n);
  }
  return t;
}
var Y4i;
