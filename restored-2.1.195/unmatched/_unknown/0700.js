// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nvs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nvs = E(() => {
  n9 = Array(20).fill(0).map((e, t) => " ".repeat(t)), hRr = {
    " ": {
      "\n": Array(200).fill(0).map((e, t) => `
` + " ".repeat(t)),
      "\r": Array(200).fill(0).map((e, t) => "\r" + " ".repeat(t)),
      "\r\n": Array(200).fill(0).map((e, t) => `\r
` + " ".repeat(t))
    },
    "\t": {
      "\n": Array(200).fill(0).map((e, t) => `
` + "\t".repeat(t)),
      "\r": Array(200).fill(0).map((e, t) => "\r" + "\t".repeat(t)),
      "\r\n": Array(200).fill(0).map((e, t) => `\r
` + "\t".repeat(t))
    }
  }, tvs = [`
`, "\r", `\r
`];
});
function yRr(e, t, n) {
  let r, o, s, i, a;
  if (t) {
    i = t.offset, a = i + t.length, s = i;
    while (s > 0 && !xRt(e, s - 1)) s--;
    let A = a;
    while (A < e.length && !xRt(e, A)) A++;
    o = e.substring(s, A), r = Y$u(o, n);
  } else o = e, r = 0, s = 0, i = 0, a = e.length;
  let l = X$u(n, e),
    c = tvs.includes(l),
    u = 0,
    d = 0,
    p;
  if (n.insertSpaces) p = n9[n.tabSize || 4] ?? bet(n9[1], n.tabSize || 4);else p = "\t";
  let f = p === "\t" ? "\t" : " ",
    m = IRt(o, !1),
    g = !1;
  function h() {
    if (u > 1) return bet(l, u) + bet(p, r + d);
    let A = p.length * (r + d);
    if (!c || A > hRr[f][l].length) return l + bet(p, r + d);
    if (A <= 0) return l;
    return hRr[f][l][A];
  }
  function y() {
    let A = m.scan();
    u = 0;
    while (A === 15 || A === 14) {
      if (A === 14 && n.keepLines) u += 1;else if (A === 14) u = 1;
      A = m.scan();
    }
    return g = A === 16 || m.getTokenError() !== 0, A;
  }
  let b = [];
  function _(A, v, C) {
    if (!g && (!t || v < a && C > i) && e.substring(v, C) !== A) b.push({
      offset: v,
      length: C - v,
      content: A
    });
  }
  let S = y();
  if (n.keepLines && u > 0) _(bet(l, u), 0, 0);
  if (S !== 17) {
    let A = m.getTokenOffset() + s,
      v = p.length * r < 20 && n.insertSpaces ? n9[p.length * r] : bet(p, r);
    _(v, s, A);
  }
  while (S !== 17) {
    let A = m.getTokenOffset() + m.getTokenLength() + s,
      v = y(),
      C = "",
      x = !1;
    while (u === 0 && (v === 12 || v === 13)) {
      let k = m.getTokenOffset() + s;
      _(n9[1], A, k), A = m.getTokenOffset() + m.getTokenLength() + s, x = v === 12, C = x ? h() : "", v = y();
    }
    if (v === 2) {
      if (S !== 1) d--;
      if (n.keepLines && u > 0 || !n.keepLines && S !== 1) C = h();else if (n.keepLines) C = n9[1];
    } else if (v === 4) {
      if (S !== 3) d--;
      if (n.keepLines && u > 0 || !n.keepLines && S !== 3) C = h();else if (n.keepLines) C = n9[1];
    } else {
      switch (S) {
        case 3:
        case 1:
          if (d++, n.keepLines && u > 0 || !n.keepLines) C = h();else C = n9[1];
          break;
        case 5:
          if (n.keepLines && u > 0 || !n.keepLines) C = h();else C = n9[1];
          break;
        case 12:
          C = h();
          break;
        case 13:
          if (u > 0) C = h();else if (!x) C = n9[1];
          break;
        case 6:
          if (n.keepLines && u > 0) C = h();else if (!x) C = n9[1];
          break;
        case 10:
          if (n.keepLines && u > 0) C = h();else if (v === 6 && !x) C = "";
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          if (n.keepLines && u > 0) C = h();else if ((v === 12 || v === 13) && !x) C = n9[1];else if (v !== 5 && v !== 17) g = !0;
          break;
        case 16:
          g = !0;
          break;
      }
      if (u > 0 && (v === 12 || v === 13)) C = h();
    }
    if (v === 17) if (n.keepLines && u > 0) C = h();else C = n.insertFinalNewline ? l : "";
    let I = m.getTokenOffset() + s;
    _(C, A, I), S = v;
  }
  return b;
}
function bet(e, t) {
  let n = "";
  for (let r = 0; r < t; r++) n += e;
  return n;
}
function Y$u(e, t) {
  let n = 0,
    r = 0,
    o = t.tabSize || 4;
  while (n < e.length) {
    let s = e.charAt(n);
    if (s === n9[1]) r++;else if (s === "\t") r += o;else break;
    n++;
  }
  return Math.floor(r / o);
}
function X$u(e, t) {
  for (let n = 0; n < t.length; n++) {
    let r = t.charAt(n);
    if (r === "\r") {
      if (n + 1 < t.length && t.charAt(n + 1) === `
`) return `\r
`;
      return "\r";
    } else if (r === `
`) return `
`;
  }
  return e && e.eol || `
`;
}
function xRt(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}