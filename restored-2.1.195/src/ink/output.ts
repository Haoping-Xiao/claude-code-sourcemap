// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mJr
// matched 2.1.88 source: src/ink/output.ts
// class=modified  jaccard=0.299  score=0.7201  fileCov=0.3383
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function MGd(e, t) {
  if (!e) return t;
  return {
    x1: dWi(e.x1, t.x1),
    x2: pWi(e.x2, t.x2),
    y1: dWi(e.y1, t.y1),
    y2: pWi(e.y2, t.y2),
  };
}
function dWi(e, t) {
  if (e === void 0) return t;
  if (t === void 0) return e;
  return Math.max(e, t);
}
function pWi(e, t) {
  if (e === void 0) return t;
  if (t === void 0) return e;
  return Math.min(e, t);
}
class Q_e {
  width;
  height;
  stylePool;
  screen;
  operations = [];
  charCache = new Map();
  charCacheGeneration;
  charCacheChalkGeneration;
  constructor(e) {
    let { width: t, height: n, stylePool: r, screen: o } = e;
    ((this.width = t),
      (this.height = n),
      (this.stylePool = r),
      (this.screen = o),
      (this.charCacheGeneration = r.generation),
      (this.charCacheChalkGeneration = hRn()),
      GXr(o, t, n));
  }
  reset(e, t, n) {
    if (
      ((this.width = e),
      (this.height = t),
      (this.screen = n),
      (this.operations.length = 0),
      GXr(n, e, t),
      this.stylePool.generation !== this.charCacheGeneration ||
        hRn() !== this.charCacheChalkGeneration)
    )
      ((this.charCacheGeneration = this.stylePool.generation),
        (this.charCacheChalkGeneration = hRn()),
        this.charCache.clear());
    else if (this.charCache.size > fWi) {
      let r = this.charCache.size - fWi;
      for (let o of this.charCache.keys()) {
        if (r-- <= 0) break;
        this.charCache.delete(o);
      }
    }
  }
  blit(e, t, n, r, o) {
    this.operations.push({
      type: "blit",
      src: e,
      x: t,
      y: n,
      width: r,
      height: o,
    });
  }
  shift(e, t, n) {
    this.operations.push({
      type: "shift",
      top: e,
      bottom: t,
      n,
    });
  }
  clear(e, t) {
    this.operations.push({
      type: "clear",
      region: e,
      fromAbsolute: t,
    });
  }
  noSelect(e) {
    this.operations.push({
      type: "noSelect",
      region: e,
    });
  }
  write(e, t, n, r) {
    if (!n) return;
    this.operations.push({
      type: "write",
      x: e,
      y: t,
      text: n,
      softWrap: r,
    });
  }
  clip(e) {
    this.operations.push({
      type: "clip",
      clip: e,
    });
  }
  unclip() {
    this.operations.push({
      type: "unclip",
    });
  }
  get() {
    let e = this.screen,
      t = this.width,
      n = this.height,
      r = 0,
      o = 0,
      s = [];
    for (let l = 0; l < this.operations.length; l++) {
      let c = this.operations[l];
      if (c.type !== "clear") continue;
      let { x: u, y: d, width: p, height: f } = c.region,
        m = Math.max(0, u),
        g = Math.max(0, d),
        h = Math.min(u + p, t),
        y = Math.min(d + f, n);
      if (m >= h || g >= y) continue;
      let b = {
        x: m,
        y: g,
        width: h - m,
        height: y - g,
      };
      if (((e.damage = e.damage ? uGe(e.damage, b) : b), c.fromAbsolute))
        s.push({
          rect: b,
          opIndex: l,
        });
    }
    let i = [];
    for (let l = 0; l < this.operations.length; l++) {
      let c = this.operations[l];
      switch (c.type) {
        case "clear":
          continue;
        case "clip":
          i.push(MGd(i.at(-1), c.clip));
          continue;
        case "unclip":
          i.pop();
          continue;
        case "blit": {
          let { src: u, x: d, y: p, width: f, height: m } = c,
            g = i.at(-1),
            h = Math.max(d, g?.x1 ?? 0),
            y = Math.max(p, g?.y1 ?? 0),
            b = Math.min(p + m, n, u.height, g?.y2 ?? 1 / 0),
            _ = Math.min(d + f, t, u.width, g?.x2 ?? 1 / 0);
          if (h >= _ || y >= b) continue;
          if (s.length === 0) {
            (cLn(e, u, h, y, _, b), (r += (b - y) * (_ - h)));
            continue;
          }
          let S = s.filter((v) => v.opIndex > l);
          if (S.length === 0) {
            (cLn(e, u, h, y, _, b), (r += (b - y) * (_ - h)));
            continue;
          }
          let A = y;
          for (let v = y; v <= b; v++)
            if (
              (v < b &&
                S.some(
                  ({ rect: x }) => v >= x.y && v < x.y + x.height && h >= x.x && _ <= x.x + x.width,
                )) ||
              v === b
            ) {
              if (v > A) (cLn(e, u, h, A, _, v), (r += (v - A) * (_ - h)));
              A = v + 1;
            }
          continue;
        }
        case "shift": {
          uLn(e, c.top, c.bottom, c.n);
          continue;
        }
        case "write": {
          let { text: u, softWrap: d } = c,
            { x: p, y: f } = c,
            m = u.split(`
`),
            g = 0,
            h = 0,
            y = i.at(-1);
          if (y) {
            let S = typeof y?.x1 === "number" && typeof y?.x2 === "number",
              A = typeof y?.y1 === "number" && typeof y?.y2 === "number";
            if (S) {
              let v = WBt(u);
              if (p + v < y.x1 || p > y.x2) continue;
            }
            if (A) {
              let v = m.length;
              if (f + v < y.y1 || f > y.y2) continue;
            }
            if (S) {
              if (
                ((m = m.map((v) => {
                  let C = p < y.x1 ? y.x1 - p : 0,
                    x = rn(v),
                    I = p + x > y.x2 ? y.x2 - p : x;
                  if (C === 0 && I >= x) return v;
                  let k = w1(v, C, I);
                  while (rn(k) > I - C && I > C) (I--, (k = w1(v, C, I)));
                  return k;
                })),
                p < y.x1)
              )
                p = y.x1;
            }
            if (A) {
              let v = f < y.y1 ? y.y1 - f : 0,
                C = m.length,
                x = f + C > y.y2 ? y.y2 - f : C;
              if (d && v > 0 && (d[v] ?? Ane.HardBreak) !== Ane.HardBreak)
                h = jXr(p + rn(m[v - 1]), p);
              if (((m = m.slice(v, x)), (g = v), f < y.y1)) f = y.y1;
            }
          }
          let b = e.softWrap,
            _ = 0;
          for (let S of m) {
            let A = f + _;
            if (A >= n) break;
            let v = NGd(e, S, p, A, t, this.stylePool, this.charCache);
            if (((o += v - p), d)) {
              let C = d[g + _];
              ((b[A] =
                C === Ane.HardBreak || C === void 0
                  ? 0
                  : C === Ane.ContinuationElidedSep
                    ? h | Xit
                    : h),
                (h = jXr(v, p)));
            }
            _++;
          }
          continue;
        }
      }
    }
    for (let l of this.operations)
      if (l.type === "noSelect") {
        let { x: c, y: u, width: d, height: p } = l.region;
        oGi(e, c, u, d, p);
      }
    let a = r + o;
    if (a > 1000 && o > r)
      T(
        `High write ratio: blit=${r}, write=${o} (${((o / a) * 100).toFixed(1)}% writes), screen=${n}x${t}`,
      );
    return e;
  }
}
function $Gd(e, t) {
  if (e === t) return true;
  let n = e.length;
  if (n !== t.length) return false;
  if (n === 0) return true;
  for (let r = 0; r < n; r++) if (e[r].code !== t[r].code) return false;
  return true;
}
function OGd(e, t) {
  let n = e.length;
  if (n === 0) return [];
  let r = [],
    o = [],
    s = e[0].styles;
  for (let i = 0; i < n; i++) {
    let a = e[i],
      l = a.styles;
    if (o.length > 0 && !$Gd(l, s)) (mWi(o.join(""), s, t, r), (o.length = 0));
    (o.push(a.value), (s = l));
  }
  if (o.length > 0) mWi(o.join(""), s, t, r);
  return r;
}
function mWi(e, t, n, r) {
  let o = tGi(t) ?? void 0,
    i =
      o !== void 0 || t.some((l) => l.code.length >= s0e.length && l.code.startsWith(s0e))
        ? nGi(t)
        : t,
    a = n.intern(l2i(i));
  for (let { segment: l } of BS().segment(e))
    r.push({
      value: l,
      width: rn(l),
      styleId: a,
      hyperlink: o,
    });
}
function NGd(e, t, n, r, o, s, i) {
  let a = i.get(t);
  if (a) (i.delete(t), i.set(t, a));
  else ((a = cWi(OGd(s3i(Fit(t)), s))), i.set(t, a));
  let l = n,
    c = {
      char: " ",
      styleId: s.none,
      width: 0,
      hyperlink: void 0,
    };
  for (let u = 0; u < a.length; u++) {
    let d = a[u],
      p = d.value.codePointAt(0);
    if (p !== void 0 && p <= 31) {
      if (p === 9) {
        let h = 8 - (l % 8);
        ((c.char = " "), (c.styleId = s.none), (c.width = 0), (c.hyperlink = void 0));
        for (let y = 0; y < h && l < o; y++) (Jit(e, l, r, c), l++);
      } else if (p === 27) {
        let g = a[u + 1]?.value,
          h = g?.codePointAt(0);
        if (g === "(" || g === ")" || g === "*" || g === "+") u += 2;
        else if (g === "[") {
          u++;
          while (u < a.length - 1) {
            u++;
            let y = a[u]?.value.codePointAt(0);
            if (y !== void 0 && y >= 64 && y <= 126) break;
          }
        } else if (g === "]" || g === "P" || g === "_" || g === "^" || g === "X") {
          u++;
          while (u < a.length - 1) {
            u++;
            let y = a[u]?.value;
            if (y === "\x07") break;
            if (y === "\x1B") {
              if (a[u + 1]?.value === "\\") {
                u++;
                break;
              }
            }
          }
        } else if (h !== void 0 && h >= 48 && h <= 126) u++;
      }
      continue;
    }
    if (
      p !== void 0 &&
      d.value.length === 1 &&
      (p === 1564 || (p >= 8234 && p <= 8238) || (p >= 8294 && p <= 8297))
    ) {
      ((c.char = "\uFFFD"),
        (c.styleId = d.styleId),
        (c.width = 0),
        (c.hyperlink = d.hyperlink),
        Jit(e, l, r, c),
        l++);
      continue;
    }
    let f = d.width;
    if (f === 0) continue;
    let m = f >= 2;
    if (m && l + f > o) {
      ((c.char = " "),
        (c.styleId = s.none),
        (c.width = 3),
        (c.hyperlink = void 0),
        Jit(e, l, r, c),
        l++);
      continue;
    }
    ((c.char = d.value),
      (c.styleId = d.styleId),
      (c.width = m ? 1 : 0),
      (c.hyperlink = d.hyperlink),
      Jit(e, l, r, c));
    for (let g = 2; g < f; g++) ((c.char = ""), (c.width = 2), Jit(e, l + g, r, c));
    l += m ? f : 1;
  }
  return l;
}
var fWi = 512;
