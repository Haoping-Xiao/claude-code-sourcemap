// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KBt
// matched 2.1.88 source: src/ink/dom.ts
// class=partial  jaccard=0.1233  score=0.5363  fileCov=0.138
// note: low-confidence suggestion: src/ink/dom.ts; dir inferred from dep-graph -> ink; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module KBt] deps: je, p8, hWi, aGe, K_e, HWi, bW, gGe, Jke, iXr, mJr, IBt
HLn = new Uint32Array(0);
yGe = vLn;
function createNode(e, t) {
  if (e.nodeName === "#text") return e.nodeValue;
  let n = e.accessibility;
  if (n?.hidden) return "";
  if (e.isHidden || e.yogaNode?.getDisplay() === 1) return "";
  let r = "";
  if (n?.label !== void 0) r = n.label;else if (e.nodeName === "ink-text" || e.nodeName === "ink-virtual-text" || e.nodeName === "ink-link") for (let o of e.childNodes) r += createNode(o, n?.role ?? t);else if (e.nodeName === "ink-box" || e.nodeName === "ink-root") r = sWd(e, n?.role ?? t);
  if (n?.state) {
    let o = Object.keys(n.state).filter(s => n.state[s]);
    if (o.length > 0) r = `(${o.join(", ")}) ${r}`;
  }
  if (n?.role && n.role !== t) r = `${n.role}: ${r}`;
  return r;
}
function sWd(e, t) {
  let n = e.style.flexDirection ?? "row",
    r = n === "column" || n === "column-reverse",
    o = n === "row-reverse" || n === "column-reverse",
    s = r ? `
` : " ",
    i = [];
  for (let a of e.childNodes) {
    let l = createNode(a, t);
    if (l !== "") i.push(l);
  }
  if (o) i.reverse();
  return i.join(s);
}
function wJr(e, t, n) {
  if (e === t) return 0;
  if (e.nodeName === "#text") return null;
  let r = e.accessibility;
  if (r?.hidden) return null;
  if (e.isHidden || e.yogaNode?.getDisplay() === 1) return null;
  if (r?.label !== void 0) return null;
  if (e.nodeName === "ink-text" || e.nodeName === "ink-virtual-text" || e.nodeName === "ink-link") return null;
  if (e.nodeName !== "ink-box" && e.nodeName !== "ink-root") return null;
  let o = r?.role ?? n,
    s = 0;
  if (r?.state) {
    let p = Object.keys(r.state).filter(f => r.state[f]);
    if (p.length > 0) s += `(${p.join(", ")}) `.length;
  }
  if (r?.role && r.role !== n) s += `${r.role}: `.length;
  let i = e.style.flexDirection ?? "row",
    a = i === "column" || i === "column-reverse",
    l = i === "row-reverse" || i === "column-reverse",
    c = a ? 1 : 1,
    u = [];
  for (let p of e.childNodes) {
    let f = createNode(p, o);
    if (f !== "") u.push({
      node: p,
      out: f
    });
  }
  if (l) u.reverse();
  let d = 0;
  for (let p of u) {
    let f = wJr(p.node, t, o);
    if (f !== null) return s + d + f;
    d += p.out.length + c;
  }
  return null;
}