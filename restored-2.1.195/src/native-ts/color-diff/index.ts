// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eco
// matched 2.1.88 source: src/native-ts/color-diff/index.ts
// class=modified  jaccard=0.3099  score=0.8691  fileCov=0.3251
// note: deminified; 7 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eco] deps: bda, iba, vn
((Tba = new Set()), (vba = new Set()));
function Nyp() {
  return zut();
}
function Gl(e, t, n) {
  return {
    r: e,
    g: t,
    b: n,
    a: 255,
  };
}
function _L(e) {
  return {
    r: e,
    g: 0,
    b: 0,
    a: 0,
  };
}
function detectColorMode(e) {
  if (e.includes("ansi")) return "ansi";
  return wt.level >= 3 ? "truecolor" : "color256";
}
function Byp(e, t, n) {
  let r = (y) => (y < 48 ? 0 : y < 115 ? 1 : y < 155 ? 2 : y < 195 ? 3 : y < 235 ? 4 : 5),
    o = r(e),
    s = r(t),
    i = r(n),
    a = 16 + 36 * o + 6 * s + i,
    l = Math.round((e + t + n) / 3);
  if (l < 5) return 16;
  if (l > 244 && o === s && s === i) return a;
  let c = Math.max(0, Math.min(23, Math.round((l - 8) / 10))),
    u = 232 + c,
    d = 8 + c * 10,
    p = nco[o],
    f = nco[s],
    m = nco[i],
    g = (e - p) ** 2 + (t - f) ** 2 + (n - m) ** 2;
  return (e - d) ** 2 + (t - d) ** 2 + (n - d) ** 2 < g ? u : a;
}
function wba(e, t, n) {
  if (e.a === 0) {
    let o = e.r;
    if (o < 8) return `\x1B[${(t ? 30 : 40) + o}m`;
    if (o < 16) return `\x1B[${(t ? 90 : 100) + (o - 8)}m`;
    return `\x1B[${t ? 38 : 48};5;${o}m`;
  }
  if (e.a === 1) return t ? "\x1B[39m" : "\x1B[49m";
  let r = t ? 38 : 48;
  if (n === "truecolor") return `\x1B[${r};2;${e.r};${e.g};${e.b}m`;
  return `\x1B[${r};5;${Byp(e.r, e.g, e.b)}m`;
}
function Uyp(e, t, n, r) {
  let o = r ? tco + rco : tco;
  for (let [s, i] of e) {
    if (((o += wba(s.foreground, true, t)), !n)) o += wba(s.background, false, t);
    o += i;
  }
  return o + tco;
}
function defaultSyntaxThemeName(e) {
  if (e.includes("ansi")) return "ansi";
  if (e.includes("dark")) return "Monokai Extended";
  return "GitHub";
}
function buildTheme(e, t) {
  let n = e.includes("dark"),
    r = e.includes("ansi"),
    o = e.includes("daltonized"),
    s = t === "truecolor";
  if (r)
    return {
      addLine: xSe,
      addWord: xSe,
      addDecoration: _L(10),
      deleteLine: xSe,
      deleteWord: xSe,
      deleteDecoration: _L(9),
      foreground: n ? _L(7) : _L(0),
      background: xSe,
      scopes: Gyp,
    };
  if (n) {
    let u = Gl(248, 248, 242),
      d = Gl(61, 1, 0),
      p = Gl(92, 2, 0),
      f = Gl(220, 90, 90);
    if (o)
      return {
        addLine: s ? Gl(0, 27, 41) : _L(17),
        addWord: s ? Gl(0, 48, 71) : _L(24),
        addDecoration: Gl(81, 160, 200),
        deleteLine: d,
        deleteWord: p,
        deleteDecoration: f,
        foreground: u,
        background: xSe,
        scopes: Cba,
      };
    return {
      addLine: s ? Gl(2, 40, 0) : _L(22),
      addWord: s ? Gl(4, 71, 0) : _L(28),
      addDecoration: Gl(80, 200, 80),
      deleteLine: d,
      deleteWord: p,
      deleteDecoration: f,
      foreground: u,
      background: xSe,
      scopes: Cba,
    };
  }
  let i = Gl(51, 51, 51),
    a = Gl(255, 220, 220),
    l = Gl(255, 199, 199),
    c = Gl(207, 34, 46);
  if (o)
    return {
      addLine: Gl(219, 237, 255),
      addWord: Gl(179, 217, 255),
      addDecoration: Gl(36, 87, 138),
      deleteLine: a,
      deleteWord: l,
      deleteDecoration: c,
      foreground: i,
      background: xSe,
      scopes: Iba,
    };
  return {
    addLine: Gl(220, 255, 220),
    addWord: Gl(178, 255, 178),
    addDecoration: Gl(36, 138, 61),
    deleteLine: a,
    deleteWord: l,
    deleteDecoration: c,
    foreground: i,
    background: xSe,
    scopes: Iba,
  };
}
function pBn(e) {
  return {
    foreground: e.foreground,
    background: e.background,
  };
}
function mBn(e, t) {
  switch (e) {
    case "+":
      return t.addLine;
    case "-":
      return t.deleteLine;
    case " ":
      return t.background;
  }
}
function Wyp(e, t) {
  switch (e) {
    case "+":
      return t.addWord;
    case "-":
      return t.deleteWord;
    case " ":
      return t.background;
  }
}
function Mba(e, t) {
  switch (e) {
    case "+":
      return t.addDecoration;
    case "-":
      return t.deleteDecoration;
    case " ":
      return t.foreground;
  }
}
function detectLanguage(e, t) {
  let n = fBn.basename(e),
    r = fBn.extname(e).slice(1),
    o = bi(n, "."),
    s = xba.get(n) ?? xba.get(o);
  if (s) {
    let i = I4(s);
    if (i) return i;
  }
  if (r) {
    let i = I4(r);
    if (i) return i;
  }
  if (t) {
    let i = t.startsWith("\uFEFF") ? t.slice(1) : t;
    if (i.startsWith("#!")) {
      if (i.includes("bash") || i.includes("/sh")) return I4("bash");
      if (i.includes("python")) return I4("python");
      if (i.includes("node")) return I4("javascript");
      if (i.includes("ruby")) return I4("ruby");
      if (i.includes("perl")) return I4("perl");
    }
    if (i.startsWith("<?php")) return I4("php");
    if (i.startsWith("<?xml")) return I4("xml");
  }
  return null;
}
function scopeColor(e, t, n) {
  if (!e) return n.foreground;
  if (e === "keyword" && jyp.has(t.trim())) return n.scopes.get("_storage") ?? n.foreground;
  return n.scopes.get(e) ?? n.scopes.get(bi(e, ".")) ?? n.foreground;
}
function Oba(e, t, n, r) {
  if (typeof e === "string") {
    let s = scopeColor(n, e, t);
    r.push([
      {
        foreground: s,
        background: t.background,
      },
      e,
    ]);
    return;
  }
  let o = e.scope ?? e.kind ?? n;
  for (let s of e.children) Oba(s, t, o, r);
}
function hasRootNode(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "rootNode" in e &&
    typeof e.rootNode === "object" &&
    e.rootNode !== null &&
    "children" in e.rootNode
  );
}
function highlightLine(e, t, n) {
  let r =
    t +
    `
`;
  if (!e.lang) return [[pBn(n), r]];
  let o;
  try {
    o = Nyp().highlight(r, {
      language: e.lang,
      ignoreIllegals: true,
    });
  } catch {
    return [[pBn(n), r]];
  }
  if (!hasRootNode(o.emitter)) {
    if (!kba)
      ((kba = true),
        ke(
          Error(
            `color-diff: hljs emitter shape mismatch (keys: ${Object.keys(o.emitter).join(",")}). Syntax highlighting disabled.`,
          ),
        ));
    return [[pBn(n), r]];
  }
  let s = [];
  return (Oba(o.emitter.rootNode, n, void 0, s), s);
}
function Rba(e) {
  let t = [],
    n = 0;
  while (n < e.length) {
    let r = e[n];
    if (/[\p{L}\p{N}_]/u.test(r)) {
      let o = n + 1;
      while (o < e.length && /[\p{L}\p{N}_]/u.test(e[o])) o++;
      (t.push(e.slice(n, o)), (n = o));
    } else if (/\s/.test(r)) {
      let o = n + 1;
      while (o < e.length && /\s/.test(e[o])) o++;
      (t.push(e.slice(n, o)), (n = o));
    } else {
      let s = e.codePointAt(n) > 65535 ? 2 : 1;
      (t.push(e.slice(n, n + s)), (n += s));
    }
  }
  return t;
}
function Kyp(e) {
  let t = [],
    n = 0;
  while (n < e.length)
    if (e[n] === "-") {
      let r = n,
        o = n;
      while (o < e.length && e[o] === "-") o++;
      let s = o;
      while (s < e.length && e[s] === "+") s++;
      let i = o - r,
        a = s - o;
      if (i > 0 && a > 0) {
        let l = Math.min(i, a);
        for (let c = 0; c < l; c++) t.push([r + c, o + c]);
        n = s;
      } else n = o;
    } else n++;
  return t;
}
function Yyp(e, t) {
  let n = Rba(e),
    r = Rba(t),
    o = lao(n, r),
    s = e.length + t.length,
    i = 0,
    a = [],
    l = [],
    c = 0,
    u = 0;
  for (let d of o) {
    let p = d.value.reduce((f, m) => f + m.length, 0);
    if (d.removed)
      ((i += p),
        a.push({
          start: c,
          end: c + p,
        }),
        (c += p));
    else if (d.added)
      ((i += p),
        l.push({
          start: u,
          end: u + p,
        }),
        (u += p));
    else ((c += p), (u += p));
  }
  if (s > 0 && i / s > zyp) return [[], []];
  return [a, l];
}
function Bba(e) {
  e.lines = e.lines.map((t) =>
    t.flatMap(([n, r]) =>
      r
        .split(
          `
`,
        )
        .filter((o) => o.length > 0)
        .map((o) => [n, o]),
    ),
  );
}
function Xyp(e) {
  return rn(e);
}
function Uba(e, t, n) {
  let r = [];
  for (let o of e.lines) {
    let s = o.slice(),
      i = [],
      a = 0;
    while (s.length > 0) {
      let [l, c] = s.shift(),
        u = rn(c);
      if (a + u <= t) (i.push([l, c]), (a += u));
      else {
        let d = t - a,
          p = 0,
          f = 0;
        for (let m of c) {
          let g = Xyp(m);
          if (f + g > d) break;
          ((f += g), (p += m.length));
        }
        if (p === 0)
          if (a === 0) p = c.codePointAt(0) > 65535 ? 2 : 1;
          else {
            (r.push(i), s.unshift([l, c]), (i = []), (a = 0));
            continue;
          }
        (i.push([l, c.slice(0, p)]), r.push(i), s.unshift([l, c.slice(p)]), (i = []), (a = 0));
      }
    }
    r.push(i);
  }
  if (((e.lines = r), e.marker && e.marker !== " ")) {
    let o = mBn(e.marker, n),
      s = {
        foreground: n.foreground,
        background: o,
      };
    for (let i of e.lines) {
      let a = i.reduce((l, [, c]) => l + rn(c), 0);
      if (a < t) i.push([s, Ff(" ", t - a)]);
    }
  }
}
function Fba(e, t, n, r) {
  let o = {
      foreground: e.marker ? Mba(e.marker, t) : t.foreground,
      background: e.marker ? mBn(e.marker, t) : t.background,
    },
    s = e.marker === null || e.marker === " ";
  for (let i = 0; i < e.lines.length; i++) {
    let a = i === 0 ? ` ${String(e.lineNumber).padStart(n)} ` : " ".repeat(n + 2),
      l = s && !r ? `${rco}${a}${Lba}` : a;
    e.lines[i].unshift([o, l]);
  }
}
function Jyp(e, t) {
  if (!e.marker) return;
  let n = {
    foreground: Mba(e.marker, t),
    background: mBn(e.marker, t),
  };
  for (let r of e.lines) r.unshift([n, e.marker]);
}
function Qyp(e) {
  for (let t of e.lines)
    if (t.length > 0) {
      t[0][1] = rco + t[0][1];
      let n = t.length - 1;
      t[n][1] = t[n][1] + Lba;
    }
}
function Zyp(e, t, n) {
  if (!e.marker) return;
  let r = mBn(e.marker, t),
    o = Wyp(e.marker, t),
    s = 0,
    i = 0;
  for (let a = 0; a < e.lines.length; a++) {
    let l = [];
    for (let [c, u] of e.lines[a]) {
      let d = i,
        p = i + u.length;
      while (s < n.length && n[s].end <= d) s++;
      if (s >= n.length) {
        (l.push([
          {
            ...c,
            background: r,
          },
          u,
        ]),
          (i = p));
        continue;
      }
      let f = u,
        m = d;
      while (f.length > 0 && s < n.length) {
        let g = n[s],
          h = m >= g.start && m < g.end,
          y;
        if (h) y = Math.min(g.end, p);
        else if (g.start > m && g.start < p) y = g.start;
        else y = p;
        let b = y - m,
          _ = f.slice(0, b);
        if (
          (l.push([
            {
              ...c,
              background: h ? o : r,
            },
            _,
          ]),
          (f = f.slice(b)),
          (m = y),
          m >= g.end)
        )
          s++;
      }
      if (f.length > 0)
        l.push([
          {
            ...c,
            background: r,
          },
          f,
        ]);
      i = p;
    }
    e.lines[a] = l;
  }
}
function jba(e, t, n, r) {
  return e.lines.map((o) => Uyp(o, r, n, t));
}
function e_p(e) {
  let t = Math.max(0, e.oldStart + e.oldLines - 1),
    n = Math.max(0, e.newStart + e.newLines - 1);
  return Math.max(t, n);
}
function t_p(e) {
  return e === "+" || e === "-" ? e : " ";
}
class oco {
  hunk;
  filePath;
  firstLine;
  prefixContent;
  constructor(e, t, n, r) {
    ((this.hunk = e), (this.filePath = n), (this.firstLine = t), (this.prefixContent = r ?? null));
  }
  render(e, t, n) {
    let r = detectColorMode(e),
      o = buildTheme(e, r),
      i = {
        lang: detectLanguage(this.filePath, this.firstLine),
        stack: null,
      };
    this.prefixContent;
    let a = String(e_p(this.hunk)).length,
      l = this.hunk.oldStart,
      c = this.hunk.newStart,
      u = Math.max(1, t - a - 2 - 1),
      d = this.hunk.lines.map((m) => {
        let g = t_p(m.slice(0, 1)),
          h = m.slice(1),
          y;
        switch (g) {
          case "+":
            y = c++;
            break;
          case "-":
            y = l++;
            break;
          case " ":
            ((y = c), l++, c++);
            break;
        }
        return {
          lineNumber: y,
          marker: g,
          code: h,
        };
      }),
      p = d.map(() => []);
    if (!n) {
      let m = d.map((g) => g.marker);
      for (let [g, h] of Kyp(m)) {
        let [y, b] = Yyp(d[g].code, d[h].code);
        ((p[g] = y), (p[h] = b));
      }
    }
    let f = [];
    for (let m = 0; m < d.length; m++) {
      let { lineNumber: g, marker: h, code: y } = d[m],
        b = h === "-" ? [[pBn(o), y]] : highlightLine(i, y, o),
        _ = {
          marker: h,
          lineNumber: g,
          lines: [b],
        };
      if ((Bba(_), Zyp(_, o, p[m]), Uba(_, u, o), r === "ansi" && h === "-")) Qyp(_);
      (Jyp(_, o), Fba(_, o, a, n), f.push(...jba(_, n, false, r)));
    }
    return f;
  }
}
class sco {
  code;
  filePath;
  constructor(e, t) {
    ((this.code = e), (this.filePath = t));
  }
  render(e, t, n) {
    let r = detectColorMode(e),
      o = buildTheme(e, r),
      s = this.code.split(`
`);
    if (s.at(-1) === "") s.pop();
    let i = s[0] ?? null,
      l = {
        lang: detectLanguage(this.filePath, i),
        stack: null,
      },
      c = String(s.length).length,
      u = Math.max(1, t - c - 2),
      d = [];
    for (let p = 0; p < s.length; p++) {
      let f = highlightLine(l, s[p], o),
        m = {
          marker: null,
          lineNumber: p + 1,
          lines: [f],
        };
      (Bba(m), Uba(m, u, o), Fba(m, o, c, n), d.push(...jba(m, n, true, r)));
    }
    return d;
  }
}
function Gba(e) {
  let t = process.env.CLAUDE_CODE_SYNTAX_HIGHLIGHT ?? process.env.BAT_THEME;
  return {
    theme: defaultSyntaxThemeName(e),
    source: null,
  };
}
var fBn,
  tco = "\x1B[0m",
  rco = "\x1B[2m",
  Lba = "\x1B[22m",
  xSe,
  nco,
  Cba,
  Iba,
  jyp,
  Gyp,
  xba,
  kba = false,
  zyp = 0.4;
