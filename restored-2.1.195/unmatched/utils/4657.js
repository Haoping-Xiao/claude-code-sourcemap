// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vOl
// matched 2.1.88 source: src/utils/ansiToSvg.ts
// class=new  jaccard=0.0525  score=0.6406  fileCov=0.0541
// note: nearest: src/utils/ansiToSvg.ts (0.0525); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vOl = E(() => {
  iu();
  Q1o();
  FOe = wt.hex("#da7756");
});
function IOl(e) {
  let t = [],
    n = e.split(`
`);
  for (let r of n) {
    let o = [],
      s = TKe,
      i = false,
      a = 0;
    while (a < r.length) {
      if (r[a] === "\x1B" && r[a + 1] === "[") {
        let u = a + 2;
        while (u < r.length && !/[A-Za-z]/.test(r[u])) u++;
        if (r[u] === "m") {
          let d = r.slice(a + 2, u).split(";").map(Number),
            p = 0;
          while (p < d.length) {
            let f = d[p];
            if (f === 0) s = TKe, i = false;else if (f === 1) i = true;else if (f >= 30 && f <= 37) s = wOl[f] || TKe;else if (f >= 90 && f <= 97) s = wOl[f] || TKe;else if (f === 39) s = TKe;else if (f === 38) {
              if (d[p + 1] === 5 && d[p + 2] !== void 0) {
                let m = d[p + 2];
                s = FDf(m), p += 2;
              } else if (d[p + 1] === 2 && d[p + 2] !== void 0 && d[p + 3] !== void 0 && d[p + 4] !== void 0) s = {
                r: d[p + 2],
                g: d[p + 3],
                b: d[p + 4]
              }, p += 4;
            }
            p++;
          }
        }
        a = u + 1;
        continue;
      }
      if (r[a] === "\x1B") {
        if (r[a + 1] === "]") {
          let u = a + 2;
          while (u < r.length && r[u] !== "\x07" && !(r[u] === "\x1B" && r[u + 1] === "\\")) u++;
          a = r[u] === "\x1B" ? u + 2 : u + 1;
        } else a++;
        continue;
      }
      let l = a;
      while (a < r.length && r[a] !== "\x1B") a++;
      let c = r.slice(l, a);
      if (c) o.push({
        text: c,
        color: s,
        bold: i
      });
    }
    if (o.length === 0) o.push({
      text: "",
      color: TKe,
      bold: false
    });
    t.push(o);
  }
  return t;
}
function FDf(e) {
  if (e < 16) return [{
    r: 0,
    g: 0,
    b: 0
  }, {
    r: 128,
    g: 0,
    b: 0
  }, {
    r: 0,
    g: 128,
    b: 0
  }, {
    r: 128,
    g: 128,
    b: 0
  }, {
    r: 0,
    g: 0,
    b: 128
  }, {
    r: 128,
    g: 0,
    b: 128
  }, {
    r: 0,
    g: 128,
    b: 128
  }, {
    r: 192,
    g: 192,
    b: 192
  }, {
    r: 128,
    g: 128,
    b: 128
  }, {
    r: 255,
    g: 0,
    b: 0
  }, {
    r: 0,
    g: 255,
    b: 0
  }, {
    r: 255,
    g: 255,
    b: 0
  }, {
    r: 0,
    g: 0,
    b: 255
  }, {
    r: 255,
    g: 0,
    b: 255
  }, {
    r: 0,
    g: 255,
    b: 255
  }, {
    r: 255,
    g: 255,
    b: 255
  }][e] || TKe;
  if (e < 232) {
    let n = e - 16,
      r = Math.floor(n / 36),
      o = Math.floor(n % 36 / 6),
      s = n % 6;
    return {
      r: r === 0 ? 0 : 55 + r * 40,
      g: o === 0 ? 0 : 55 + o * 40,
      b: s === 0 ? 0 : 55 + s * 40
    };
  }
  let t = (e - 232) * 10 + 8;
  return {
    r: t,
    g: t,
    b: t
  };
}
var wOl, TKe, COl;