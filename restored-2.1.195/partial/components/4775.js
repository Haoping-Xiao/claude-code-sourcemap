// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module c2l
// matched 2.1.88 source: src/utils/transcriptSearch.ts
// class=partial  jaccard=0.1262  score=1  fileCov=0.1262
// note: low-confidence suggestion: src/utils/transcriptSearch.ts; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var c2l = E(() => {
  CBo();
  xBo();
  RBo();
  qnr();
  l2l();
  znr();
  Ynr();
  Xnr();
});
function* d2l(e) {
  for (let t of e) if (t.type === "assistant" && Array.isArray(t.message.content)) {
    for (let n of t.message.content) if (n.type === "tool_use" && W1.includes(n.name)) {
      let {
        input: r
      } = n;
      if (typeof r === "object" && r !== null && "command" in r && typeof r.command === "string") yield r.command;
    }
  }
}
function cXt(e) {
  let t = new Set();
  for (let n of d2l(e)) {
    let r = iNf(n);
    if (r) t.add(r);
  }
  return t;
}
function oNf(e) {
  if (!e) return [];
  let t = [],
    n;
  u2l.lastIndex = 0;
  while ((n = u2l.exec(e)) !== null) {
    let r = n[1].toLowerCase(),
      o = r.lastIndexOf("@");
    if (o !== -1) r = r.slice(o + 1);
    let s = r.indexOf(":");
    if (s !== -1) r = r.slice(0, s);
    if (r) t.push(r);
  }
  return t;
}
function uXt(e) {
  let t = new Set();
  for (let n of d2l(e)) for (let r of oNf(n)) t.add(r);
  return t;
}
function iNf(e) {
  if (!e) return;
  let t = e.trim().split(/\s+/);
  for (let n of t) {
    if (/^[A-Za-z_]\w*=/.test(n)) continue;
    if (sNf.has(n)) continue;
    return n;
  }
  return;
}
var u2l, sNf;