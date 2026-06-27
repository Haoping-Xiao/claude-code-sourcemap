// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e8t
// matched 2.1.88 source: node_modules/@xmldom/xmldom/lib/entities.js
// class=new  jaccard=0.0072  score=0.5108  fileCov=0.0073
// note: nearest: node_modules/@xmldom/xmldom/lib/entities.js (0.0072); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var e8t = E(() => {
  iu();
  Oct();
  f0e();
  Xa();
  Tc();
  AW();
  ZS();
  Lo();
  BR();
  Mx();
  xLe();
  co();
  sr();
  Z9t = require("path"), Mnl = require("url");
  ttf = /(^|[^\w./-])([A-Za-z0-9][\w-]*\/[A-Za-z0-9][\w.-]*)#(\d+)\b/g, ntf = new Set(["gitlab.com", "bitbucket.org", "codeberg.org", "gitea.com", "git.sr.ht", "dev.azure.com"]);
  ctf = [[1000, "m"], [900, "cm"], [500, "d"], [400, "cd"], [100, "c"], [90, "xc"], [50, "l"], [40, "xl"], [10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"]];
});
function n8t(e, t, n) {
  if (t <= 0) return [e];
  let r = e.trimEnd(),
    s = SB(r, t, {
      hard: n?.hard ?? !1,
      trim: !1,
      wordWrap: !0
    }).split(`
`).filter(i => i.length > 0);
  return s.length > 0 ? s : [""];
}
function Bnl({
  token: e,
  highlight: t,
  forceWidth: n,
  linkCap: r
}) {
  let [o] = na(),
    {
      columns: s
    } = br(),
    i = n ?? s;
  function a(D) {
    return D?.map(P => oR(P, o, 0, null, null, t, !1, r)).join("") ?? "";
  }
  function l(D) {
    return Ja(a(D));
  }
  function c(D) {
    let O = l(D).split(/\s+/).filter(L => L.length > 0);
    if (O.length === 0) return t8t;
    return Math.max(...O.map(L => rn(L)), t8t);
  }
  function u(D) {
    return Math.max(rn(l(D)), t8t);
  }
  let d = e.header.map((D, P) => {
      let O = c(D.tokens);
      for (let L of e.rows) O = Math.max(O, c(L[P]?.tokens));
      return O;
    }),
    p = e.header.map((D, P) => {
      let O = u(D.tokens);
      for (let L of e.rows) O = Math.max(O, u(L[P]?.tokens));
      return O;
    }),
    f = e.header.length,
    m = 1 + f * 3,
    g = Math.max(i - m - $nl, f * t8t),
    h = d.reduce((D, P) => D + P, 0),
    y = p.reduce((D, P) => D + P, 0),
    b = !1,
    _;
  if (y <= g) _ = p;else if (h <= g) {
    let D = g - h,
      P = p.map((L, M) => L - d[M]),
      O = P.reduce((L, M) => L + M, 0);
    _ = d.map((L, M) => {
      if (O === 0) return L;
      let N = Math.floor(P[M] / O * D);
      return L + N;
    });
  } else {
    b = !0;
    let D = g / h;
    _ = d.map(P => Math.max(Math.floor(P * D), t8t));
  }
  function S() {
    let D = 1;
    for (let P = 0; P < e.header.length; P++) {
      let O = a(e.header[P].tokens),
        L = n8t(O, _[P], {
          hard: b
        });
      D = Math.max(D, L.length);
    }
    for (let P of e.rows) for (let O = 0; O < P.length; O++) {
      let L = a(P[O]?.tokens),
        M = n8t(L, _[O], {
          hard: b
        });
      D = Math.max(D, M.length);
    }
    return D;
  }
  let v = S() > ptf;
  function C(D, P) {
    let O = D.map((B, $) => {
        let q = a(B.tokens),
          W = _[$];
        return n8t(q, W, {
          hard: b
        });
      }),
      L = Math.max(...O.map(B => B.length), 1),
      M = O.map(B => Math.floor((L - B.length) / 2)),
      N = [];
    for (let B = 0; B < L; B++) {
      let $ = "\u2502";
      for (let q = 0; q < D.length; q++) {
        let W = O[q],
          V = M[q],
          Y = B - V,
          z = Y >= 0 && Y < W.length ? W[Y] : "",
          K = _[q],
          Z = P ? "center" : e.align?.[q] ?? "left";
        $ += " " + _6n(z, rn(z), K, Z) + " \u2502";
      }
      N.push($);
    }
    return N;
  }
  function x(D) {
    let [P, O, L, M] = {
        top: ["\u250C", "\u2500", "\u252C", "\u2510"],
        middle: ["\u251C", "\u2500", "\u253C", "\u2524"],
        bottom: ["\u2514", "\u2500", "\u2534", "\u2518"]
      }[D],
      N = P;
    return _.forEach((B, $) => {
      N += O.repeat(B + 2), N += $ < _.length - 1 ? L : M;
    }), N;
  }
  if (v) return r8t.jsx(Onl, {
    headers: e.header.map(D => l(D.tokens)),
    rows: e.rows.map(D => D.map(P => a(P.tokens))),
    terminalWidth: i
  });
  let I = [];
  if (I.push(x("top")), I.push(...C(e.header, !0)), I.push(x("middle")), e.rows.forEach((D, P) => {
    if (I.push(...C(D, !1)), P < e.rows.length - 1) I.push(x("middle"));
  }), I.push(x("bottom")), Math.max(...I.map(D => rn(Ja(D)))) > i - $nl) return r8t.jsx(Onl, {
    headers: e.header.map(D => l(D.tokens)),
    rows: e.rows.map(D => D.map(P => a(P.tokens))),
    terminalWidth: i
  });
  return r8t.jsx(bd, {
    children: I.join(`
`)
  });
}
function Onl(e) {
  let t = Nnl.c(6),
    {
      headers: n,
      rows: r,
      terminalWidth: o
    } = e,
    s;
  if (t[0] !== n || t[1] !== r || t[2] !== o) {
    s = [];
    let l = Math.min(o - 1, 40),
      c = "\u2500".repeat(l);
    r.forEach(u => {
      let d = [];
      if (u.forEach((p, f) => {
        let m = n[f] || "",
          g = p.trimEnd().replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
        if (!m && !g) return;
        let h = m ? o - rn(m) - 3 : o - 1,
          y = o - 2 - 1,
          b = n8t(g, Math.max(h, 10)),
          _ = b[0] || "",
          S;
        if (b.length <= 1) S = b;else {
          let A = b.slice(1).map(gtf).join(" "),
            v = n8t(A, y);
          S = [_, ...v];
        }
        d.push(m ? `${ftf}${m}:${mtf} ${S[0] || ""}` : S[0] || "");
        for (let A = 1; A < S.length; A++) {
          let v = S[A];
          if (!v.trim()) continue;
          d.push(`  ${v}`);
        }
      }), d.length === 0) return;
      if (s.length > 0) s.push(c);
      s.push(...d);
    }), t[0] = n, t[1] = r, t[2] = o, t[3] = s;
  } else s = t[3];
  let i = s.join(`
`),
    a;
  if (t[4] !== i) a = r8t.jsx(bd, {
    children: i
  }), t[4] = i, t[5] = a;else a = t[5];
  return a;
}
function gtf(e) {
  return e.trim();
}
var Nnl,
  r8t,
  $nl = 4,
  t8t = 3,
  ptf = 4,
  ftf = "\x1B[1m",
  mtf = "\x1B[22m";