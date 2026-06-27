// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OXr
// matched 2.1.88 source: src/ink/screen.ts
// class=modified  jaccard=0.2722  score=0.6486  fileCov=0.3194
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function I3d(e, t) {
  let n = 0,
    r = 0;
  for (let o of e)
    if (o.code === NXr) n |= 1;
    else if (o.code === BXr) n |= 2;
  for (let o of t)
    if (o.code === NXr) r |= 1;
    else if (o.code === BXr) r |= 2;
  if (n & ~r && r) {
    let o = n & r;
    return "\x1B[22m" + (o & 1 ? NXr : "") + (o & 2 ? BXr : "");
  }
  return "";
}
class iLn {
  strings = [" ", ""];
  stringMap = new Map([
    [" ", 0],
    ["", 1],
  ]);
  ascii = $3d();
  intern(e) {
    if (e.length === 1) {
      let r = e.charCodeAt(0);
      if (r < 128) {
        let o = this.ascii[r];
        if (o !== -1) return o;
        let s = this.strings.length;
        return (this.strings.push(e), (this.ascii[r] = s), s);
      }
    }
    let t = this.stringMap.get(e);
    if (t !== void 0) return t;
    let n = this.strings.length;
    return (this.strings.push(e), this.stringMap.set(e, n), n);
  }
  get(e) {
    return this.strings[e] ?? " ";
  }
  get size() {
    return this.strings.length;
  }
}
class PBt {
  strings = [""];
  stringMap = new Map();
  intern(e) {
    if (!e) return 0;
    let t = this.stringMap.get(e);
    if (t === void 0) ((t = this.strings.length), this.strings.push(e), this.stringMap.set(e, t));
    return t;
  }
  get(e) {
    return e === 0 ? void 0 : this.strings[e];
  }
  get size() {
    return this.strings.length;
  }
}
class aLn {
  ids = new Map();
  styles = [];
  transitionCache = new Map();
  overflowWarned = false;
  generationCount = 0;
  none;
  constructor() {
    this.none = this.intern([]);
  }
  get size() {
    return this.styles.length;
  }
  get overflowed() {
    return this.overflowWarned;
  }
  get transitionCacheSize() {
    return this.transitionCache.size;
  }
  needsCompaction(e) {
    return this.overflowWarned || this.styles.length > Math.max(x3d, 2 * e);
  }
  get generation() {
    return this.generationCount;
  }
  intern(e) {
    let t = e.length === 0 ? "" : e.map((r) => r.code).join("\x00"),
      n = this.ids.get(t);
    if (n === void 0) {
      let r = this.styles.length;
      if (r > UXr) {
        if (!this.overflowWarned)
          ((this.overflowWarned = true),
            T(
              `StylePool exhausted ${UXr} unique styles \u2014 further ` +
                "style combinations render unstyled to avoid packed-cell aliasing",
              {
                level: "warn",
              },
            ));
        return this.none;
      }
      (this.styles.push(e.length === 0 ? [] : e),
        (n = (r << 1) | (e.length > 0 && M3d(e) ? 1 : 0)),
        this.ids.set(t, n));
    }
    return n;
  }
  get(e) {
    return this.styles[e >>> 1] ?? [];
  }
  transition(e, t) {
    if (e === t) return "";
    let n = e * 1048576 + t,
      r = this.transitionCache.get(n);
    if (r === void 0) {
      if (this.transitionCache.size >= k3d) this.transitionCache.clear();
      let o = this.get(e),
        s = this.get(t);
      ((r = I3d(o, s) + v1(cGe(o, s))), this.transitionCache.set(n, r));
    }
    return r;
  }
  inverseCache = new Map();
  withInverse(e) {
    let t = this.inverseCache.get(e);
    if (t === void 0) {
      let n = this.get(e);
      ((t = n.some((o) => o.endCode === "\x1B[27m") ? e : this.intern([...n, z3i])),
        this.inverseCache.set(e, t));
    }
    return t;
  }
  currentMatchCache = new Map();
  withCurrentMatch(e) {
    let t = this.currentMatchCache.get(e);
    if (t === void 0) {
      let n = this.get(e),
        r = n.filter((o) => o.endCode !== "\x1B[39m" && o.endCode !== "\x1B[49m");
      if ((r.push(D3d), !n.some((o) => o.endCode === "\x1B[27m"))) r.push(z3i);
      if (!n.some((o) => o.endCode === "\x1B[22m")) r.push(R3d);
      if (!n.some((o) => o.endCode === "\x1B[24m")) r.push(L3d);
      ((t = this.intern(r)), this.currentMatchCache.set(e, t));
    }
    return t;
  }
  selectionBgCode = null;
  selectionBgCache = new Map();
  setSelectionBg(e) {
    if (this.selectionBgCode?.code === e?.code) return;
    ((this.selectionBgCode = e), this.selectionBgCache.clear());
  }
  withSelectionBg(e) {
    let t = this.selectionBgCode;
    if (t === null) return this.withInverse(e);
    let n = this.selectionBgCache.get(e);
    if (n === void 0) {
      let r = this.get(e).filter((o) => o.endCode !== "\x1B[49m" && o.endCode !== "\x1B[27m");
      (r.push(t), (n = this.intern(r)), this.selectionBgCache.set(e, n));
    }
    return n;
  }
  compact() {
    let e = this.styles;
    ((this.ids = new Map()),
      (this.styles = []),
      this.transitionCache.clear(),
      this.inverseCache.clear(),
      this.currentMatchCache.clear(),
      this.selectionBgCache.clear(),
      (this.overflowWarned = false),
      this.generationCount++,
      this.intern([]));
    let t = new Int32Array(e.length).fill(-1);
    return (n) => {
      let r = n >>> 1,
        o = t[r];
      if (o !== void 0 && o !== -1) return o;
      let s = this.intern(e[r] ?? []);
      if (r < t.length) t[r] = s;
      return s;
    };
  }
}
function M3d(e) {
  for (let t of e) if (P3d.has(t.endCode)) return true;
  return false;
}
function $3d() {
  let e = new Int32Array(128);
  return (e.fill(-1), (e[32] = r0e), e);
}
function K7(e, t, n) {
  return (e << dGe) | (t << Yit) | n;
}
function Y3i(e) {
  let t = e.cells;
  for (let n = 0; n < t.length; n += 2) t[n] = FXr;
}
function X3i(e, t) {
  if (e.width !== t.width || e.height !== t.height) return false;
  let n = e.width * e.height * 2,
    r = e.cells,
    o = t.cells;
  for (let s = 0; s < n; s++) if (r[s] !== o[s]) return false;
  return true;
}
function jXr(e, t) {
  if (t > 32767)
    T(
      `packSoftWrap: start column ${t} exceeds the 15-bit field; bit 15 is reserved for SW_ELIDED_SEP and will be corrupted`,
      {
        level: "error",
      },
    );
  return (e << 16) | (t & 32767);
}
function lLn(e) {
  return e & 32767;
}
function N3d(e, t) {
  let n = t << 1;
  return (e.cells[n] | e.cells[n | 1]) === 0;
}
function pGe(e, t, n) {
  if (t < 0 || n < 0 || t >= e.width || n >= e.height) return true;
  return N3d(e, n * e.width + t);
}
function B3d(e, t) {
  return e.hyperlinkPool.intern(t);
}
function Y7(e, t, n, r, o) {
  if ((TI(e, "createScreen width"), TI(t, "createScreen height"), !Number.isInteger(e) || e < 0))
    e = Math.max(0, Math.floor(e) || 0);
  if (!Number.isInteger(t) || t < 0) t = Math.max(0, Math.floor(t) || 0);
  let s = e * t,
    i = new ArrayBuffer(s << 3),
    a = new Int32Array(i),
    l = new BigInt64Array(i);
  return {
    width: e,
    height: t,
    cells: a,
    cells64: l,
    charPool: r,
    hyperlinkPool: o,
    emptyStyleId: n.none,
    damage: void 0,
    noSelect: new Uint8Array(s),
    softWrap: new Int32Array(t),
  };
}
function GXr(e, t, n) {
  if ((TI(t, "resetScreen width"), TI(n, "resetScreen height"), !Number.isInteger(t) || t < 0))
    t = Math.max(0, Math.floor(t) || 0);
  if (!Number.isInteger(n) || n < 0) n = Math.max(0, Math.floor(n) || 0);
  let r = t * n;
  if (e.cells64.length < r) {
    let o = new ArrayBuffer(r << 3);
    ((e.cells = new Int32Array(o)),
      (e.cells64 = new BigInt64Array(o)),
      (e.noSelect = new Uint8Array(r)));
  }
  if (e.softWrap.length < n) e.softWrap = new Int32Array(n);
  (e.cells64.fill(sLn, 0, r),
    e.noSelect.fill(0, 0, r),
    e.softWrap.fill(0, 0, n),
    (e.width = t),
    (e.height = n),
    (e.damage = void 0));
}
function J3i(e, t, n, r) {
  let { charPool: o, hyperlinkPool: s } = e,
    i = o !== t,
    a = s !== n;
  if (!i && !a && !r) return;
  let l = e.width * e.height,
    c = e.cells;
  for (let u = 0; u < l << 1; u += 2) {
    if (i) {
      let h = c[u];
      c[u] = t.intern(o.get(h));
    }
    let d = c[u + 1],
      p = (d >>> Yit) & MBt,
      f = d >>> dGe,
      m = a && p !== 0 ? n.intern(s.get(p)) : p,
      g = r && f !== 0 ? r(f) : f;
    if (m !== p || g !== f) {
      let h = d & MU;
      c[u + 1] = K7(g, m, h);
    }
  }
  ((e.charPool = t), (e.hyperlinkPool = n));
}
function Fj(e, t, n) {
  if (t < 0 || n < 0 || t >= e.width || n >= e.height) return;
  return X7(e, n * e.width + t);
}
function X7(e, t) {
  let n = t << 1,
    r = e.cells[n + 1],
    o = (r >>> Yit) & MBt;
  return {
    char: e.charPool.get(e.cells[n]),
    styleId: r >>> dGe,
    width: r & MU,
    hyperlink: o === 0 ? void 0 : e.hyperlinkPool.get(o),
  };
}
function Q3i(e, t, n, r, o) {
  let s = r << 1,
    i = e[s];
  if (i === 1) return;
  let a = e[s + 1];
  if (i === 0 && (a & 262140) === 0) {
    let c = a >>> dGe;
    if (c === 0 || c === o) return;
  }
  let l = (a >>> Yit) & MBt;
  return {
    char: t.get(i),
    styleId: a >>> dGe,
    width: a & MU,
    hyperlink: l === 0 ? void 0 : n.get(l),
  };
}
function o0e(e, t, n) {
  let r = t | 1,
    o = e.cells[r];
  ((n.char = e.charPool.get(e.cells[t])), (n.styleId = o >>> dGe), (n.width = o & MU));
  let s = (o >>> Yit) & MBt;
  n.hyperlink = s === 0 ? void 0 : e.hyperlinkPool.get(s);
}
function Z3i(e, t, n) {
  if (t < 0 || n < 0 || t >= e.width || n >= e.height) return;
  let r = (n * e.width + t) << 1;
  return e.charPool.get(e.cells[r]);
}
function Jit(e, t, n, r) {
  if (t < 0 || n < 0 || t >= e.width || n >= e.height) return;
  let o = (n * e.width + t) << 1,
    s = e.cells,
    i = s[o + 1] & MU;
  if (i === 1 && r.width !== 1) {
    if (t + 1 < e.width) {
      let d = o + 2;
      if ((s[d + 1] & MU) === 2) ((s[d] = r0e), (s[d + 1] = K7(e.emptyStyleId, 0, 0)));
    }
  }
  let a = -1;
  if (i === 2 && r.width !== 2) {
    if (t > 0) {
      let u = o - 2;
      if ((s[u + 1] & MU) === 1) ((s[u] = r0e), (s[u + 1] = K7(e.emptyStyleId, 0, 0)), (a = t - 1));
    }
  }
  if (((s[o] = U3d(e, r.char)), (s[o + 1] = K7(r.styleId, B3d(e, r.hyperlink), r.width)), gRn))
    VFi(s[o], r.styleId);
  let l = a >= 0 ? Math.min(t, a) : t,
    c = e.damage;
  if (c) {
    let u = c.x + c.width,
      d = c.y + c.height;
    if (l < c.x) ((c.width += c.x - l), (c.x = l));
    else if (t >= u) c.width = t - c.x + 1;
    if (n < c.y) ((c.height += c.y - n), (c.y = n));
    else if (n >= d) c.height = n - c.y + 1;
  } else
    e.damage = {
      x: l,
      y: n,
      width: t - l + 1,
      height: 1,
    };
  if (r.width === 1) {
    let u = t + 1;
    if (u < e.width) {
      let d = o + 2;
      if ((s[d + 1] & MU) === 1) {
        let f = d + 2;
        if (u + 1 < e.width && (s[f + 1] & MU) === 2)
          ((s[f] = r0e), (s[f + 1] = K7(e.emptyStyleId, 0, 0)));
      }
      ((s[d] = FXr), (s[d + 1] = K7(e.emptyStyleId, 0, 2)));
      let p = e.damage;
      if (p && u >= p.x + p.width) p.width = u - p.x + 1;
    }
  }
}
function Qit(e, t, n, r) {
  if (t < 0 || n < 0 || t >= e.width || n >= e.height) return;
  let o = (n * e.width + t) << 1,
    s = e.cells,
    i = s[o + 1],
    a = i & MU;
  if (a === 2 || a === 3) return;
  let l = (i >>> Yit) & MBt;
  s[o + 1] = K7(r, l, a);
  let c = e.damage;
  if (c) {
    let u = c.x + c.width,
      d = c.y + c.height;
    if (t < c.x) ((c.width += c.x - t), (c.x = t));
    else if (t >= u) c.width = t - c.x + 1;
    if (n < c.y) ((c.height += c.y - n), (c.y = n));
    else if (n >= d) c.height = n - c.y + 1;
  } else
    e.damage = {
      x: t,
      y: n,
      width: 1,
      height: 1,
    };
}
function U3d(e, t) {
  return e.charPool.intern(t);
}
function cLn(e, t, n, r, o, s) {
  if (((n = Math.max(0, n)), (r = Math.max(0, r)), n >= o || r >= s)) return;
  let i = o - n,
    a = t.width << 1,
    l = e.width << 1,
    c = i << 1,
    u = t.cells,
    d = e.cells,
    p = t.noSelect,
    f = e.noSelect;
  if (
    (e.softWrap.set(t.softWrap.subarray(r, s), r), n === 0 && o === t.width && t.width === e.width)
  ) {
    let A = r * a,
      v = (s - r) * a;
    d.set(u.subarray(A, A + v), A);
    let C = r * t.width,
      x = (s - r) * t.width;
    f.set(p.subarray(C, C + x), C);
  } else {
    let A = r * a + (n << 1),
      v = r * l + (n << 1),
      C = r * t.width + n,
      x = r * e.width + n;
    for (let I = r; I < s; I++)
      (d.set(u.subarray(A, A + c), v),
        f.set(p.subarray(C, C + i), x),
        (A += a),
        (v += l),
        (C += t.width),
        (x += e.width));
  }
  let m = n > 0,
    g = o < e.width,
    h = false,
    y = 0;
  if (m || g) {
    let A = (r * e.width + n - 1) << 1,
      v = (r * e.width + o - 1) << 1;
    for (let C = r; C < s; C++) {
      if (m) {
        let x = d[A + 3] & MU;
        if ((d[A + 1] & MU) === 1) {
          if (x !== 2) ((d[A] = r0e), (d[A + 1] = K7(e.emptyStyleId, 0, 0)), (h = true));
        } else if (x === 2) ((d[A + 2] = r0e), (d[A + 3] = K7(e.emptyStyleId, 0, 0)));
      }
      if (g) {
        if ((d[v + 1] & MU) === 1) {
          if (o + 1 < e.width && (d[v + 3] & MU) === 1 && (d[v + 5] & MU) === 2)
            ((d[v + 4] = r0e), (d[v + 5] = K7(e.emptyStyleId, 0, 0)), (y = 2));
          else if (y < 1) y = 1;
          ((d[v + 2] = FXr), (d[v + 3] = K7(e.emptyStyleId, 0, 2)));
        } else if ((d[v + 3] & MU) === 2) {
          if (((d[v + 2] = r0e), (d[v + 3] = K7(e.emptyStyleId, 0, 0)), y < 1)) y = 1;
        }
      }
      ((A += l), (v += l));
    }
  }
  let b = h ? n - 1 : n,
    _ = o + y,
    S = {
      x: b,
      y: r,
      width: _ - b,
      height: s - r,
    };
  if (e.damage) e.damage = uGe(e.damage, S);
  else e.damage = S;
}
function uLn(e, t, n, r) {
  if (r === 0 || t < 0 || n >= e.height || t > n) return;
  let { width: o, cells64: s, noSelect: i, softWrap: a } = e;
  if (Math.abs(r) > n - t) {
    (s.fill(sLn, t * o, (n + 1) * o), i.fill(0, t * o, (n + 1) * o), a.fill(0, t, n + 1));
    return;
  }
  if (r > 0)
    (s.copyWithin(t * o, (t + r) * o, (n + 1) * o),
      i.copyWithin(t * o, (t + r) * o, (n + 1) * o),
      a.copyWithin(t, t + r, n + 1),
      s.fill(sLn, (n - r + 1) * o, (n + 1) * o),
      i.fill(0, (n - r + 1) * o, (n + 1) * o),
      a.fill(0, n - r + 1, n + 1));
  else
    (s.copyWithin((t - r) * o, t * o, (n + r + 1) * o),
      i.copyWithin((t - r) * o, t * o, (n + r + 1) * o),
      a.copyWithin(t - r, t, n + r + 1),
      s.fill(sLn, t * o, (t - r) * o),
      i.fill(0, t * o, (t - r) * o),
      a.fill(0, t, t - r));
}
function tGi(e) {
  for (let t of e) {
    let n = t.code;
    if (n.length < 5 || !n.startsWith(s0e)) continue;
    let r = n.match(eGi);
    if (r) return r[1] || null;
  }
  return null;
}
function nGi(e) {
  return e.filter((t) => !t.code.startsWith(s0e) || !eGi.test(t.code));
}
function rGi(e, t, n) {
  let r = e.width,
    o = t.width,
    s = e.height,
    i = t.height,
    a;
  if (r === 0 && s === 0)
    a = {
      x: 0,
      y: 0,
      width: o,
      height: i,
    };
  else if (t.damage) {
    if (((a = t.damage), e.damage)) a = uGe(a, e.damage);
  } else if (e.damage) a = e.damage;
  else
    a = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  if (s > i)
    a = uGe(a, {
      x: 0,
      y: i,
      width: r,
      height: s - i,
    });
  if (r > o)
    a = uGe(a, {
      x: o,
      y: 0,
      width: r - o,
      height: s,
    });
  let l = Math.max(s, i),
    c = Math.max(r, o),
    u = Math.min(a.y + a.height, l),
    d = Math.min(a.x + a.width, c);
  if (r === o) return q3d(e, t, a.x, d, a.y, u, n);
  return V3d(e, t, a.x, d, a.y, u, n);
}
function F3d(e, t, n, r) {
  for (let o = 0; o < r; o++, n += 2) {
    let s = n | 1;
    if (e[n] !== t[n] || e[s] !== t[s]) return o;
  }
  return r;
}
function j3d(e, t, n, r, o, s, i, a, l, c, u) {
  let d = i;
  while (d < a) {
    let p = F3d(e, t, o, a - d);
    if (((d += p), (o += p << 1), d >= a)) break;
    if ((o0e(n, o, l), o0e(r, o, c), u(d, s, l, c))) return true;
    (d++, (o += 2));
  }
  return false;
}
function G3d(e, t, n, r, o, s, i) {
  for (let a = r; a < o; a++, t += 2) if ((o0e(e, t, s), i(a, n, s, void 0))) return true;
  return false;
}
function W3d(e, t, n, r, o, s, i, a) {
  for (let l = o; l < s; l++, n += 2) {
    if (e[n] === 0 && e[n | 1] === 0) continue;
    if ((o0e(t, n, i), a(l, r, void 0, i))) return true;
  }
  return false;
}
function q3d(e, t, n, r, o, s, i) {
  let a = e.cells,
    l = t.cells,
    c = e.width,
    u = e.height,
    d = t.height,
    p = c << 1,
    f = {
      char: " ",
      styleId: 0,
      width: 0,
      hyperlink: void 0,
    },
    m = {
      char: " ",
      styleId: 0,
      width: 0,
      hyperlink: void 0,
    },
    g = Math.min(r, c),
    h = (o * c + n) << 1;
  for (let y = o; y < s; y++) {
    let b = y < u,
      _ = y < d;
    if (b && _) {
      if (j3d(a, l, e, t, h, y, n, g, f, m, i)) return true;
    } else if (b) {
      if (G3d(e, h, y, n, g, f, i)) return true;
    } else if (_) {
      if (W3d(l, t, h, y, n, g, m, i)) return true;
    }
    h += p;
  }
  return false;
}
function V3d(e, t, n, r, o, s, i) {
  let a = e.width,
    l = t.width,
    c = e.cells,
    u = t.cells,
    d = {
      char: " ",
      styleId: 0,
      width: 0,
      hyperlink: void 0,
    },
    p = {
      char: " ",
      styleId: 0,
      width: 0,
      hyperlink: void 0,
    },
    f = a << 1,
    m = l << 1,
    g = (o * a + n) << 1,
    h = (o * l + n) << 1;
  for (let y = o; y < s; y++) {
    let b = y < e.height,
      _ = y < t.height,
      S = b ? Math.min(r, a) : n,
      A = _ ? Math.min(r, l) : n,
      v = Math.min(S, A),
      C = g,
      x = h;
    for (let I = n; I < v; I++) {
      if (c[C] === u[x] && c[C + 1] === u[x + 1]) {
        ((C += 2), (x += 2));
        continue;
      }
      if ((o0e(e, C, d), o0e(t, x, p), (C += 2), (x += 2), i(I, y, d, p))) return true;
    }
    if (S > v) {
      C = g + ((v - n) << 1);
      for (let I = v; I < S; I++) if ((o0e(e, C, d), (C += 2), i(I, y, d, void 0))) return true;
    }
    if (A > v) {
      x = h + ((v - n) << 1);
      for (let I = v; I < A; I++) {
        if (u[x] === 0 && u[x | 1] === 0) {
          x += 2;
          continue;
        }
        if ((o0e(t, x, p), (x += 2), i(I, y, void 0, p))) return true;
      }
    }
    ((g += f), (h += m));
  }
  return false;
}
function oGi(e, t, n, r, o) {
  let s = Math.min(t + r, e.width),
    i = Math.min(n + o, e.height),
    a = e.noSelect,
    l = e.width;
  for (let c = Math.max(0, n); c < i; c++) {
    let u = c * l;
    a.fill(1, u + Math.max(0, t), u + s);
  }
}
var NXr = "\x1B[1m",
  BXr = "\x1B[2m",
  K3i = 4096,
  x3d = 512,
  k3d = 8192,
  z3i,
  R3d,
  L3d,
  D3d,
  P3d,
  r0e = 0,
  FXr = 1,
  dGe = 17,
  Yit = 2,
  MBt = 32767,
  MU = 3,
  O3d,
  UXr,
  sLn = 0n,
  Xit = 32768,
  Ane,
  eGi,
  s0e;
