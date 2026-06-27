// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bW
// matched 2.1.88 source: src/ink/selection.ts
// class=modified  jaccard=0.1836  score=0.4465  fileCov=0.2377
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bW] deps: jit, je, Rit, m8, one, OXr
((z3i = {
  type: "ansi",
  code: "\x1B[7m",
  endCode: "\x1B[27m",
}),
  (R3d = {
    type: "ansi",
    code: "\x1B[1m",
    endCode: "\x1B[22m",
  }),
  (L3d = {
    type: "ansi",
    code: "\x1B[4m",
    endCode: "\x1B[24m",
  }),
  (D3d = {
    type: "ansi",
    code: "\x1B[33m",
    endCode: "\x1B[39m",
  }));
P3d = new Set(["\x1B[49m", "\x1B[27m", "\x1B[24m", "\x1B[29m", "\x1B[55m"]);
((O3d = (1 << (32 - dGe)) - 1), (UXr = O3d >>> 1));
Ane = {
  HardBreak: 0,
  Continuation: 1,
  ContinuationElidedSep: 2,
};
((eGi = new RegExp(`^${l8}\\]8${$ke}${$ke}([^${$M}]*)${$M}$`)), (s0e = `${l8}]8${$ke}`));
function sGi() {
  return {
    anchor: null,
    focus: null,
    isDragging: false,
    anchorSpan: null,
    scrolledOffAbove: [],
    scrolledOffBelow: [],
    scrolledOffAboveSW: [],
    scrolledOffBelowSW: [],
    lastPressHadAlt: false,
  };
}
function pLn(e, t, n) {
  ((e.anchor = {
    col: t,
    row: n,
  }),
    (e.focus = null),
    (e.isDragging = true),
    (e.anchorSpan = null),
    (e.scrolledOffAbove = []),
    (e.scrolledOffBelow = []),
    (e.scrolledOffAboveSW = []),
    (e.scrolledOffBelowSW = []),
    (e.virtualAnchorRow = void 0),
    (e.virtualFocusRow = void 0),
    (e.virtualAnchorCol = void 0),
    (e.virtualFocusCol = void 0),
    (e.lastPressHadAlt = false));
}
function iGi(e, t, n) {
  if (!e.isDragging) return;
  if (!e.focus && e.anchor && e.anchor.col === t && e.anchor.row === n) return;
  e.focus = {
    col: t,
    row: n,
  };
}
function eat(e) {
  e.isDragging = false;
}
function $Bt(e) {
  ((e.anchor = null),
    (e.focus = null),
    (e.isDragging = false),
    (e.anchorSpan = null),
    (e.scrolledOffAbove = []),
    (e.scrolledOffBelow = []),
    (e.scrolledOffAboveSW = []),
    (e.scrolledOffBelowSW = []),
    (e.virtualAnchorRow = void 0),
    (e.virtualFocusRow = void 0),
    (e.virtualAnchorCol = void 0),
    (e.virtualFocusCol = void 0),
    (e.lastPressHadAlt = false));
}
function dLn(e) {
  if (e === " " || e === "") return 0;
  if (z3d.test(e)) return 1;
  return 2;
}
function aGi(e, t, n) {
  if (n < 0 || n >= e.height) return null;
  let { width: r, noSelect: o } = e,
    s = n * r,
    i = t;
  if (i > 0) {
    let d = Fj(e, i, n);
    if (d && d.width === 2) i -= 1;
  }
  if (i < 0 || i >= r || o[s + i] === 1) return null;
  let a = Fj(e, i, n);
  if (!a) return null;
  let l = dLn(a.char),
    c = i;
  while (c > 0) {
    let d = c - 1;
    if (o[s + d] === 1) break;
    let p = Fj(e, d, n);
    if (!p) break;
    if (p.width === 2) {
      if (d === 0 || o[s + d - 1] === 1) break;
      let f = Fj(e, d - 1, n);
      if (!f || dLn(f.char) !== l) break;
      c = d - 1;
      continue;
    }
    if (dLn(p.char) !== l) break;
    c = d;
  }
  let u = i;
  while (u < r - 1) {
    let d = u + 1;
    if (o[s + d] === 1) break;
    let p = Fj(e, d, n);
    if (!p) break;
    if (p.width === 2) {
      u = d;
      continue;
    }
    if (dLn(p.char) !== l) break;
    u = d;
  }
  return {
    lo: c,
    hi: u,
  };
}
function KXr(e, t) {
  if (e.row !== t.row) return e.row < t.row ? -1 : 1;
  if (e.col !== t.col) return e.col < t.col ? -1 : 1;
  return 0;
}
function lGi(e, t, n, r) {
  let o = aGi(t, n, r);
  if (!o) return;
  let s = {
      col: o.lo,
      row: r,
    },
    i = {
      col: o.hi,
      row: r,
    };
  ((e.anchor = s),
    (e.focus = i),
    (e.isDragging = true),
    (e.anchorSpan = {
      lo: s,
      hi: i,
      kind: "word",
    }));
}
function Y3d(e) {
  if (e.length !== 1) return false;
  let t = e.charCodeAt(0);
  return t >= 33 && t <= 126 && !K3d.has(e);
}
function WXr(e, t, n) {
  if (e.noSelect[n * e.width + t] === 1) return null;
  let r = Fj(e, t, n);
  return r && r.width === 0 && Y3d(r.char) ? r.char : null;
}
function qXr(e, t, n, r, o) {
  if (n < r || n > o) return null;
  let s = WXr(e, n, t);
  if (s === null) return null;
  let i = n,
    a = "";
  while (i > r) {
    let u = WXr(e, i - 1, t);
    if (u === null) break;
    ((a = u + a), i--);
  }
  let l = n,
    c = "";
  while (l < o) {
    let u = WXr(e, l + 1, t);
    if (u === null) break;
    ((c += u), l++);
  }
  return {
    lo: i,
    hi: l,
    text: a + s + c,
  };
}
function VXr(e, t) {
  let n = e.softWrap[t],
    r = t + 1 < e.height ? e.softWrap[t + 1] : 0;
  return {
    start: n !== 0 ? lLn(n) : 0,
    end: r !== 0 ? r >>> 16 : e.width,
  };
}
function cGi(e, t, n) {
  if (n < 0 || n >= e.height) return;
  let r = e.width,
    o = t;
  if (o > 0) {
    let v = Fj(e, o, n);
    if (v && v.width === 2) o -= 1;
  }
  if (o < 0 || o >= r) return;
  let s = e.softWrap,
    i = VXr(e, n),
    a,
    l,
    c = o >= i.start && o < i.end;
  if (c) ((a = i.start), (l = i.end - 1));
  else if (o >= i.end) ((a = i.end), (l = r - 1));
  else ((a = 0), (l = i.start - 1));
  let u = qXr(e, n, o, a, l);
  if (!u) return;
  let d = u.text,
    p = o - u.lo,
    f = n,
    m = u.hi,
    g = n,
    h = u.lo;
  if (c) {
    while (f + 1 < e.height) {
      let v = s[f + 1];
      if (v === 0 || m + 1 !== v >>> 16 || (v & Xit) !== 0) break;
      let C = VXr(e, f + 1),
        x = qXr(e, f + 1, C.start, C.start, C.end - 1);
      if (!x) break;
      ((d += x.text), f++, (m = x.hi));
    }
    while (g > 0) {
      let v = s[g],
        C = v >>> 16;
      if (v === 0 || h !== lLn(v) || C === 0 || (v & Xit) !== 0) break;
      let x = VXr(e, g - 1),
        I = qXr(e, g - 1, C - 1, x.start, C - 1);
      if (!I) break;
      ((d = I.text + d), (p += I.text.length), g--, (h = I.lo));
    }
  }
  let y = /(?:https?|file):\/\//g,
    b = -1,
    _ = d.length;
  for (let v; (v = y.exec(d)); ) {
    if (v.index > p) {
      _ = v.index;
      break;
    }
    b = v.index;
  }
  if (b < 0) return;
  if (_ === d.length && m + 1 < r) {
    if (Fj(e, m + 1, f)?.char === "\u2026") return;
  }
  let S = d.slice(b, _),
    A = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
  while (S.length > 0) {
    let v = S.at(-1);
    if (".,;:!?".includes(v)) {
      S = S.slice(0, -1);
      continue;
    }
    let C = A[v];
    if (!C) break;
    let x = 0,
      I = 0;
    for (let k = 0; k < S.length; k++) {
      let D = S.charAt(k);
      if (D === C) x++;
      else if (D === v) I++;
    }
    if (I > x) S = S.slice(0, -1);
    else break;
  }
  if (p >= b + S.length) return;
  return S;
}
function uGi(e, t, n) {
  if (n < 0 || n >= t.height) return;
  let r = {
      col: 0,
      row: n,
    },
    o = {
      col: t.width - 1,
      row: n,
    };
  ((e.anchor = r),
    (e.focus = o),
    (e.isDragging = true),
    (e.anchorSpan = {
      lo: r,
      hi: o,
      kind: "line",
    }));
}
function dGi(e, t, n, r) {
  if (!e.isDragging || !e.anchorSpan) return;
  let o = e.anchorSpan,
    s,
    i;
  if (o.kind === "word") {
    let a = aGi(t, n, r);
    ((s = {
      col: a ? a.lo : n,
      row: r,
    }),
      (i = {
        col: a ? a.hi : n,
        row: r,
      }));
  } else {
    let a = _b(r, 0, t.height - 1);
    ((s = {
      col: 0,
      row: a,
    }),
      (i = {
        col: t.width - 1,
        row: a,
      }));
  }
  if (KXr(i, o.lo) < 0) ((e.anchor = o.hi), (e.focus = s));
  else if (KXr(s, o.hi) > 0) ((e.anchor = o.lo), (e.focus = i));
  else ((e.anchor = o.lo), (e.focus = o.hi));
}
function pGi(e, t, n) {
  if (!e.focus) return;
  ((e.anchorSpan = null),
    (e.focus = {
      col: t,
      row: n,
    }),
    (e.virtualFocusRow = void 0),
    (e.virtualFocusCol = void 0));
}
function fGi(e, t, n, r, o) {
  if (!e.anchor || !e.focus) return;
  let s = (e.virtualAnchorRow ?? e.anchor.row) + t,
    i = (e.virtualFocusRow ?? e.focus.row) + t,
    a = Math.min(e.virtualAnchorRow ?? e.anchor.row, e.virtualFocusRow ?? e.focus.row),
    l = Math.max(e.virtualAnchorRow ?? e.anchor.row, e.virtualFocusRow ?? e.focus.row),
    c = l - a + 1,
    u = Math.min(c, Math.max(0, n - a)),
    d = Math.min(c, Math.max(0, l - r)),
    p = Math.min(c, Math.max(0, n - Math.min(s, i))),
    f = Math.min(c, Math.max(0, Math.max(s, i) - r));
  if (d === c && p === c)
    ((e.scrolledOffAbove = e.scrolledOffBelow),
      (e.scrolledOffAboveSW = e.scrolledOffBelowSW),
      (e.scrolledOffBelow = []),
      (e.scrolledOffBelowSW = []));
  else if (u === c && f === c)
    ((e.scrolledOffBelow = e.scrolledOffAbove),
      (e.scrolledOffBelowSW = e.scrolledOffAboveSW),
      (e.scrolledOffAbove = []),
      (e.scrolledOffAboveSW = []));
  if (p < u) {
    let _ = Math.min(u - p, e.scrolledOffAbove.length);
    ((e.scrolledOffAbove.length -= _), (e.scrolledOffAboveSW.length = e.scrolledOffAbove.length));
  }
  if (f < d) {
    let _ = d - f;
    (e.scrolledOffBelow.splice(0, _), e.scrolledOffBelowSW.splice(0, _));
  }
  if (e.scrolledOffAbove.length > p)
    ((e.scrolledOffAbove = p > 0 ? e.scrolledOffAbove.slice(-p) : []),
      (e.scrolledOffAboveSW = p > 0 ? e.scrolledOffAboveSW.slice(-p) : []));
  if (e.scrolledOffBelow.length > f)
    ((e.scrolledOffBelow = e.scrolledOffBelow.slice(0, f)),
      (e.scrolledOffBelowSW = e.scrolledOffBelowSW.slice(0, f)));
  let m = (_, S) => {
      if (_ < n)
        return {
          col: 0,
          row: n,
        };
      if (_ > r)
        return {
          col: o - 1,
          row: r,
        };
      return {
        col: S,
        row: _,
      };
    },
    g = e.virtualAnchorCol ?? e.anchor.col,
    h = e.virtualFocusCol ?? e.focus.col;
  ((e.anchor = m(s, g)), (e.focus = m(i, h)));
  let y = s < n || s > r,
    b = i < n || i > r;
  if (
    ((e.virtualAnchorRow = y ? s : void 0),
    (e.virtualAnchorCol = y ? g : void 0),
    (e.virtualFocusRow = b ? i : void 0),
    (e.virtualFocusCol = b ? h : void 0),
    e.anchorSpan)
  ) {
    let _ = (S) => {
      let A = S.row + t;
      if (A < n)
        return {
          col: 0,
          row: n,
        };
      if (A > r)
        return {
          col: o - 1,
          row: r,
        };
      return {
        col: S.col,
        row: A,
      };
    };
    e.anchorSpan = {
      lo: _(e.anchorSpan.lo),
      hi: _(e.anchorSpan.hi),
      kind: e.anchorSpan.kind,
    };
  }
}
function mGi(e, t, n, r) {
  if (!e.anchor) return;
  let o = (e.virtualAnchorRow ?? e.anchor.row) + t,
    s = o < n || o > r,
    i = e.virtualAnchorCol ?? e.anchor.col;
  if (
    ((e.anchor = {
      col: s ? e.anchor.col : i,
      row: _b(o, n, r),
    }),
    (e.virtualAnchorRow = s ? o : void 0),
    (e.virtualAnchorCol = s ? i : void 0),
    e.anchorSpan)
  ) {
    let a = (l) => ({
      col: l.col,
      row: _b(l.row + t, n, r),
    });
    e.anchorSpan = {
      lo: a(e.anchorSpan.lo),
      hi: a(e.anchorSpan.hi),
      kind: e.anchorSpan.kind,
    };
  }
}
function Hne(e) {
  return e.anchor !== null && e.focus !== null;
}
function i0e(e) {
  if (!e.anchor || !e.focus || e.virtualAnchorRow === void 0 || e.virtualFocusRow === void 0)
    return false;
  return (
    (e.virtualAnchorRow < e.anchor.row && e.virtualFocusRow < e.focus.row) ||
    (e.virtualAnchorRow > e.anchor.row && e.virtualFocusRow > e.focus.row)
  );
}
function OBt(e) {
  if (!e.anchor || !e.focus) return null;
  return KXr(e.anchor, e.focus) <= 0
    ? {
        start: e.anchor,
        end: e.focus,
      }
    : {
        start: e.focus,
        end: e.anchor,
      };
}
function gGi(e, t, n, r, o) {
  let s = e.noSelect,
    i = t * e.width,
    a = e.softWrap[t],
    c = (t + 1 < e.height ? e.softWrap[t + 1] : 0) >>> 16,
    u = c > 0 ? Math.min(r, c - 1) : r,
    d = a !== 0 ? lLn(a) : 0,
    p = a !== 0 ? Math.max(n, d) : n,
    f = o && a !== 0 && (a & Xit) !== 0 && n <= d && r >= d ? " " : "";
  for (let m = p; m <= u; m++) {
    if (s[i + m] === 1) continue;
    let g = Fj(e, m, t);
    if (!g) continue;
    if (g.width === 2 || g.width === 3) continue;
    f += g.char;
  }
  return c > 0 ? f : f.replace(/\s+$/, "");
}
function zXr(e, t, n) {
  if (n && e.length > 0) e[e.length - 1] += t;
  else e.push(t);
}
function hGi(e, t) {
  let n = OBt(e);
  if (!n) return "";
  let { start: r, end: o } = n,
    s = t.softWrap,
    i = [];
  for (let a = 0; a < e.scrolledOffAbove.length; a++)
    zXr(i, e.scrolledOffAbove[a], e.scrolledOffAboveSW[a]);
  if (!i0e(e))
    for (let a = r.row; a <= o.row; a++) {
      let l = a === r.row ? r.col : 0,
        c = a === o.row ? o.col : t.width - 1;
      zXr(i, gGi(t, a, l, c, i.length > 0), s[a] > 0);
    }
  for (let a = 0; a < e.scrolledOffBelow.length; a++)
    zXr(i, e.scrolledOffBelow[a], e.scrolledOffBelowSW[a]);
  return i.join(`
`);
}
function YXr(e, t, n, r, o) {
  let s = OBt(e);
  if (!s || n > r || i0e(e)) return;
  let { start: i, end: a } = s,
    l = Math.max(n, i.row),
    c = Math.min(r, a.row);
  if (l > c) return;
  let { width: u, softWrap: d } = t,
    p = [],
    f = [];
  for (let m = l; m <= c; m++) {
    let g = m === i.row ? i.col : 0,
      h = m === a.row ? a.col : u - 1,
      y = m > i.row || e.scrolledOffAbove.length > 0;
    (p.push(gGi(t, m, g, h, y)), f.push(d[m] > 0));
  }
  if (o === "above") {
    if (
      (e.scrolledOffAbove.push(...p),
      e.scrolledOffAboveSW.push(...f),
      e.anchor && e.anchor.row === i.row && l === i.row)
    ) {
      if (
        ((e.virtualAnchorCol ??= e.anchor.col),
        (e.anchor = {
          col: 0,
          row: e.anchor.row,
        }),
        e.anchorSpan)
      )
        e.anchorSpan = {
          kind: e.anchorSpan.kind,
          lo: {
            col: 0,
            row: e.anchorSpan.lo.row,
          },
          hi: {
            col: u - 1,
            row: e.anchorSpan.hi.row,
          },
        };
    }
  } else if (
    (e.scrolledOffBelow.unshift(...p),
    e.scrolledOffBelowSW.unshift(...f),
    e.anchor && e.anchor.row === a.row && c === a.row)
  ) {
    if (
      ((e.virtualAnchorCol ??= e.anchor.col),
      (e.anchor = {
        col: u - 1,
        row: e.anchor.row,
      }),
      e.anchorSpan)
    )
      e.anchorSpan = {
        kind: e.anchorSpan.kind,
        lo: {
          col: 0,
          row: e.anchorSpan.lo.row,
        },
        hi: {
          col: u - 1,
          row: e.anchorSpan.hi.row,
        },
      };
  }
}
function yGi(e, t, n) {
  let r = OBt(t);
  if (!r || i0e(t)) return;
  let { start: o, end: s } = r,
    i = e.width,
    a = e.noSelect;
  for (let l = o.row; l <= s.row && l < e.height; l++) {
    let c = l === o.row ? o.col : 0,
      u = l === s.row ? Math.min(s.col, i - 1) : i - 1,
      d = l * i;
    for (let p = c; p <= u; p++) {
      let f = d + p;
      if (a[f] === 1) continue;
      let m = X7(e, f);
      Qit(e, p, l, n.withSelectionBg(m.styleId));
    }
  }
}
var z3d, K3d;
