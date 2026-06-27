// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NOe
// matched 2.1.88 source: src/utils/Cursor.ts
// class=partial  jaccard=0.1031  score=0.6438  fileCov=0.1093
// note: low-confidence suggestion: src/utils/Cursor.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module NOe] deps: commands/terminalSetup/terminalSetup.tsx, main.tsx, components/Settings/Config.tsx
sLf = new Set(["escape", "return", "enter", "tab", "backspace", "delete", "up", "down", "left", "right", "pageup", "pagedown", "home", "end", "insert", "clear", "center", "undefined", "mouse", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"]);
function yKe(e, t, n) {
  let r = t;
  for (let o = 0; o < n; o++) {
    let s = iLf(e, r);
    if (s.equals(r)) break;
    r = s;
  }
  return r;
}
function iLf(e, t) {
  switch (e) {
    case "h":
      return t.left();
    case "l":
    case " ":
      return t.right();
    case "j":
      return t.downLogicalLine();
    case "k":
      return t.upLogicalLine();
    case "gj":
      return t.down();
    case "gk":
      return t.up();
    case "w":
      return t.nextVimWord();
    case "b":
      return t.prevVimWord();
    case "e":
      return t.endOfVimWord();
    case "W":
      return t.nextWORD();
    case "B":
      return t.prevWORD();
    case "E":
      return t.endOfWORD();
    case "0":
      return t.startOfLogicalLine();
    case "^":
      return t.firstNonBlankInLogicalLine();
    case "$":
      return t.lastCharInLogicalLine();
    case "G":
      return t.startOfLastLine();
    default:
      return t;
  }
}
function E1o(e) {
  return "eE$".includes(e);
}
function i$l(e) {
  return "jkG".includes(e) || e === "gg";
}
function htr(e, t, n, r) {
  if (n === "w") return a$l(e, t, r, cbe);
  if (n === "W") return a$l(e, t, r, s => !ePn(s));
  let o = aLf[n];
  if (o) {
    let [s, i] = o;
    return s === i ? lLf(e, t, s, r) : cLf(e, t, s, i, r);
  }
  return null;
}
function a$l(e, t, n, r) {
  let o = [];
  for (let {
    segment: f,
    index: m
  } of BS().segment(e)) o.push({
    segment: f,
    index: m
  });
  if (o.length === 0) return null;
  let s = o.length - 1;
  for (let f = 0; f < o.length; f++) {
    let m = o[f],
      g = f + 1 < o.length ? o[f + 1].index : e.length;
    if (t >= m.index && t < g) {
      s = f;
      break;
    }
  }
  let i = f => o[f]?.segment ?? "",
    a = f => f < o.length ? o[f].index : e.length,
    l = f => ePn(i(f)),
    c = f => r(i(f)),
    u = f => D0e(i(f)),
    d = s,
    p = s;
  if (c(s)) {
    while (d > 0 && c(d - 1)) d--;
    while (p < o.length && c(p)) p++;
  } else if (l(s)) {
    while (d > 0 && l(d - 1)) d--;
    while (p < o.length && l(p)) p++;
    return {
      start: a(d),
      end: a(p)
    };
  } else if (u(s)) {
    while (d > 0 && u(d - 1)) d--;
    while (p < o.length && u(p)) p++;
  }
  if (!n) {
    if (p < o.length && l(p)) while (p < o.length && l(p)) p++;else if (d > 0 && l(d - 1)) while (d > 0 && l(d - 1)) d--;
  }
  return {
    start: a(d),
    end: a(p)
  };
}
function lLf(e, t, n, r) {
  let o = e.lastIndexOf(`
`, t - 1) + 1,
    s = e.indexOf(`
`, t),
    i = s === -1 ? e.length : s,
    a = e.slice(o, i),
    l = t - o,
    c = [];
  for (let u = 0; u < a.length; u++) if (a[u] === n) c.push(u);
  for (let u = 0; u < c.length - 1; u += 2) {
    let d = c[u],
      p = c[u + 1];
    if (d <= l && l <= p) return r ? {
      start: o + d + 1,
      end: o + p
    } : {
      start: o + d,
      end: o + p + 1
    };
  }
  return null;
}
function cLf(e, t, n, r, o) {
  let s = 0,
    i = -1;
  for (let l = t; l >= 0; l--) if (e[l] === r && l !== t) s++;else if (e[l] === n) {
    if (s === 0) {
      i = l;
      break;
    }
    s--;
  }
  if (i === -1) return null;
  s = 0;
  let a = -1;
  for (let l = i + 1; l < e.length; l++) if (e[l] === n) s++;else if (e[l] === r) {
    if (s === 0) {
      a = l;
      break;
    }
    s--;
  }
  if (a === -1) return null;
  return o ? {
    start: i + 1,
    end: a
  } : {
    start: i,
    end: a + 1
  };
}
var aLf;