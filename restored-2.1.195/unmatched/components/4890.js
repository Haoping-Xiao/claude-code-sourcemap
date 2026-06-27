// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MWl
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0053  score=0.7326  fileCov=0.0053
// note: nearest: src/utils/sessionStorage.ts (0.0053); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var MWl = E(() => {
  LWl = new WeakMap();
});
function Bjf(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r >= 32 && r !== 127 && !(r >= 128 && r <= 159)) t += e[n];
  }
  return t;
}
function Ujf(e) {
  if (e.length === 0) return null;
  if (Buffer.byteLength(e, "utf8") > Njf) return null;
  let t = [],
    n = 0;
  while (n < e.length) {
    let r = e[n];
    if (r === $M) {
      t.push({
        kind: "bel"
      }), n++;
      continue;
    }
    if (r !== l8 || e[n + 1] !== "]") return null;
    let o = n + 2,
      s = -1,
      i = 0;
    while (o < e.length) {
      if (e[o] === $M) {
        s = o, i = 1;
        break;
      }
      if (e[o] === l8 && e[o + 1] === "\\") {
        s = o, i = 2;
        break;
      }
      if (e[o] === l8) return null;
      o++;
    }
    if (s === -1) return null;
    let a = e.slice(n + 2, s),
      l = a.indexOf(";"),
      c = l === -1 ? a : a.slice(0, l),
      u = l === -1 ? "" : a.slice(l + 1);
    if (!/^\d+$/.test(c)) return null;
    let d = Number(c);
    if (!Ojf.has(d)) return null;
    t.push({
      kind: "osc",
      ps: d,
      payload: Bjf(u)
    }), n = s + i;
  }
  return t;
}
function OFo(e) {
  let t = Ujf(e);
  if (t === null) return null;
  return t.map(n => n.kind === "bel" ? $M : Qx(QS(n.ps, n.payload))).join("");
}
function $Wl(e) {
  if (e === null) {
    jXt.length = 0;
    return;
  }
  jXt.push(e);
}
function OWl(e) {
  let t = jXt.lastIndexOf(e);
  if (t >= 0) jXt.splice(t, 1);
}
function NFo(e) {
  jXt.at(-1)?.(e);
}
var Ojf,
  Njf = 4096,
  jXt;