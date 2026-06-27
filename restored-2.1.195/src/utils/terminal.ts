// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zX
// matched 2.1.88 source: src/utils/terminal.ts
// class=modified  jaccard=0.2833  score=0.9524  fileCov=0.2874
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module zX] deps: Ye, sr, Q8
((Wua = R(lt(), 1)), (D5e = R(se(), 1)));
function $up(e, t) {
  let n = e.split(`
`),
    r = [];
  for (let s of n) {
    let i = rn(s);
    if (i <= t) r.push(s.trimEnd());
    else {
      let a = 0;
      while (a < i) {
        let l = w1(s, a, a + t);
        (r.push(l.trimEnd()), (a += t));
      }
    }
  }
  let o = r.length - CLe;
  if (o === 1)
    return {
      aboveTheFold: r
        .slice(0, CLe + 1)
        .join(
          `
`,
        )
        .trimEnd(),
      remainingLines: 0,
    };
  return {
    aboveTheFold: r
      .slice(0, CLe)
      .join(
        `
`,
      )
      .trimEnd(),
    remainingLines: Math.max(0, o),
  };
}
function Vua(e, t, n = false) {
  let r = e.trimEnd();
  if (!r) return "";
  let o = Math.max(t - qua, 10),
    s = CLe * o * 4,
    i = r.length > s,
    a = i ? r.slice(0, s) : r,
    { aboveTheFold: l, remainingLines: c } = $up(a, o),
    u = c;
  if (i) {
    let d = 0,
      p = -1;
    for (;;) {
      if (
        ((p = r.indexOf(
          `
`,
          p + 1,
        )),
        p === -1)
      )
        break;
      d++;
    }
    let f = Math.max(d + 1, Math.ceil(r.length / o));
    u = Math.max(c, f - CLe);
  }
  return [l, u > 0 ? wt.dim(f4t(u) + (n ? "" : ` ${Gua()}`)) : ""].filter(Boolean).join(`
`);
}
function X1(e, t) {
  if (typeof e !== "string") return false;
  let n = e.trimEnd(),
    r = 0,
    o = 0;
  for (let c = 0; c <= CLe; c++) {
    if (
      ((r = n.indexOf(
        `
`,
        r,
      )),
      r === -1)
    )
      break;
    (o++, r++);
  }
  if (r !== -1 && r < n.length) return true;
  if (t === void 0) return false;
  let s = Math.max(t - qua, 10),
    i = CLe + 1,
    a = CLe * s * 4;
  if (n.length > a) return true;
  if (o === 0) {
    let c = i * s;
    if (n.length <= c) return false;
    return rn(n) > c;
  }
  let l = 0;
  for (let c of n.split(`
`))
    if (((l += Math.max(1, Math.ceil(rn(c) / s))), l > i)) return true;
  return false;
}
var CLe = 3,
  qua = 10;
