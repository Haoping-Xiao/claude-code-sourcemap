// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e0o
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0052  score=0.2041  fileCov=0.0053
// note: nearest: src/screens/REPL.tsx (0.0052); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var e0o = E(() => {
  si();
  gm();
  Ye();
  es();
  Ao();
  sr();
  Qko();
  G6t = R(lt(), 1), Yml = R(rt(), 1), ny = R(se(), 1);
});
function Apf(e) {
  let t = S$e.c(2),
    n;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) n = Yvs(), t[0] = n;else n = t[0];
  let r = n,
    [o, s] = t0o.useState(0),
    i = Yce(),
    a;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) a = () => s(l => (l + 1) % r.length), t[1] = a;else a = t[1];
  return Gc(a, e && !i ? Epf : null), r[o % r.length];
}
function Hpf(e) {
  let t = S$e.c(14),
    {
      done: n,
      total: r,
      running: o
    } = e,
    s;
  if (t[0] !== n || t[1] !== r) s = r > 0 ? Math.round(n / r * W6t) : 0, t[0] = n, t[1] = r, t[2] = s;else s = t[2];
  let i = s,
    a = Math.min(o ? W6t - 1 : W6t, Math.max(0, i)),
    l = o ? Math.min(W6t - a, 1) : 0,
    c = W6t - a - l,
    u = Apf(l > 0),
    d;
  if (t[3] !== a) d = a > 0 && rw.jsx(w, {
    color: "success",
    children: BRr.repeat(a)
  }), t[3] = a, t[4] = d;else d = t[4];
  let p;
  if (t[5] !== u || t[6] !== l) p = l > 0 && rw.jsx(w, {
    color: "success",
    children: u
  }), t[5] = u, t[6] = l, t[7] = p;else p = t[7];
  let f;
  if (t[8] !== c) f = c > 0 && rw.jsx(w, {
    color: "subtle",
    dimColor: true,
    children: BRr.repeat(c)
  }), t[8] = c, t[9] = f;else f = t[9];
  let m;
  if (t[10] !== d || t[11] !== p || t[12] !== f) m = rw.jsxs(w, {
    children: [d, p, f]
  }), t[10] = d, t[11] = p, t[12] = f, t[13] = m;else m = t[13];
  return m;
}
function Zml() {
  let e = S$e.c(8),
    t = br(),
    {
      rows: n
    } = bb(t),
    r = YE(),
    o;
  if (e[0] !== r || e[1] !== n) o = !r && lne() ? Math.floor(n / 2) : n, e[0] = r, e[1] = n, e[2] = o;else o = e[2];
  let s = o,
    {
      columns: i
    } = t,
    a = Math.max(24, i - 6),
    l;
  if (e[3] !== s || e[4] !== i || e[5] !== n || e[6] !== a) l = {
    availableRows: s,
    width: a,
    rows: n,
    columns: i
  }, e[3] = s, e[4] = i, e[5] = n, e[6] = a, e[7] = l;else l = e[7];
  return l;
}
function egl(e) {
  let t = S$e.c(1),
    n = e.status === "running",
    [r, o] = t0o.useState(Tpf),
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) s = () => o(Date.now()), t[0] = s;else s = t[0];
  return Gc(s, n ? 1000 : null), Math.max(0, (e.endTime ?? r) - e.startTime - (e.totalPausedMs ?? 0));
}
function Tpf() {
  return Date.now();
}
function tgl(e) {
  let t = S$e.c(28),
    {
      index: n,
      title: r,
      done: o,
      total: s,
      status: i,
      selected: a,
      trailing: l
    } = e,
    c = a === void 0 ? false : a,
    u = l === void 0 ? "" : l,
    d = i === "done",
    p = i === "failed",
    f = d || p,
    m = c ? "permission" : d ? "success" : p ? "error" : "subtle",
    g = c ? nt.pointer : " ",
    h = d ? nt.tick : p ? nt.cross : String(n),
    y = rn(g) + 1 + rn(h) + 1,
    b = Math.max(1, Qml - y),
    _;
  if (t[0] !== r || t[1] !== b) _ = Rs(r, b), t[0] = r, t[1] = b, t[2] = _;else _ = t[2];
  let S = _,
    A = `${g} ${h} ${S}`,
    v = Math.max(0, Qml - rn(A)),
    C = s > 0 ? `${o}/${s}` : "",
    x = c ? "permission" : void 0,
    I;
  if (t[3] !== g || t[4] !== x) I = rw.jsx(w, {
    color: x,
    children: g
  }), t[3] = g, t[4] = x, t[5] = I;else I = t[5];
  let k;
  if (t[6] !== m || t[7] !== h) k = rw.jsx(w, {
    color: m,
    children: h
  }), t[6] = m, t[7] = h, t[8] = k;else k = t[8];
  let D = c ? "permission" : d ? "success" : p ? "error" : void 0,
    P = !c && !f,
    O;
  if (t[9] !== S || t[10] !== D || t[11] !== P) O = rw.jsx(w, {
    color: D,
    dimColor: P,
    children: S
  }), t[9] = S, t[10] = D, t[11] = P, t[12] = O;else O = t[12];
  let L;
  if (t[13] !== v) L = " ".repeat(v), t[13] = v, t[14] = L;else L = t[14];
  let M;
  if (t[15] !== L || t[16] !== I || t[17] !== k || t[18] !== O) M = rw.jsxs(w, {
    wrap: "truncate-end",
    children: [I, " ", k, " ", O, L]
  }), t[15] = L, t[16] = I, t[17] = k, t[18] = O, t[19] = M;else M = t[19];
  let N = c ? "permission" : d ? "success" : p ? "error" : void 0,
    B = !c && !f,
    $ = u ? `  ${u}` : "",
    q;
  if (t[20] !== C || t[21] !== N || t[22] !== B || t[23] !== $) q = rw.jsxs(w, {
    wrap: "truncate-end",
    color: N,
    dimColor: B,
    children: [C, $]
  }), t[20] = C, t[21] = N, t[22] = B, t[23] = $, t[24] = q;else q = t[24];
  let W;
  if (t[25] !== M || t[26] !== q) W = rw.jsxs(U, {
    children: [M, q]
  }), t[25] = M, t[26] = q, t[27] = W;else W = t[27];
  return W;
}
function ngl(e) {
  let t = S$e.c(22),
    {
      name: n,
      done: r,
      total: o,
      running: s,
      elapsedMs: i,
      complete: a,
      dotState: l,
      selected: c
    } = e,
    u = c === void 0 ? false : c,
    d;
  if (t[0] !== i) d = i !== void 0 ? YIt(i) : void 0, t[0] = i, t[1] = d;else d = t[1];
  let p = d,
    f = a ? ` \xB7 ${nt.ellipsis} to view` : "",
    m = l === "failed" ? "error" : "success",
    g;
  if (t[2] !== m) g = rw.jsx(w, {
    color: m,
    children: gc
  }), t[2] = m, t[3] = g;else g = t[3];
  let h;
  if (t[4] !== n || t[5] !== u) h = n ? rw.jsxs(w, {
    color: u ? "claude" : void 0,
    bold: u,
    children: [n, " "]
  }) : null, t[4] = n, t[5] = u, t[6] = h;else h = t[6];
  let y;
  if (t[7] !== r || t[8] !== s || t[9] !== o) y = rw.jsx(Hpf, {
    done: r,
    total: o,
    running: s
  }), t[7] = r, t[8] = s, t[9] = o, t[10] = y;else y = t[10];
  let b = !u,
    _ = ` \xB7 ${r}/${o} agents`,
    S = p ? ` \xB7 ${p}` : "",
    A;
  if (t[11] !== f || t[12] !== u || t[13] !== b || t[14] !== _ || t[15] !== S) A = rw.jsxs(w, {
    dimColor: b,
    bold: u,
    children: [_, S, f]
  }), t[11] = f, t[12] = u, t[13] = b, t[14] = _, t[15] = S, t[16] = A;else A = t[16];
  let v;
  if (t[17] !== g || t[18] !== h || t[19] !== y || t[20] !== A) v = rw.jsxs(w, {
    wrap: "truncate-end",
    children: [g, " ", h, y, A]
  }), t[17] = g, t[18] = h, t[19] = y, t[20] = A, t[21] = v;else v = t[21];
  return v;
}
function a7n(e) {
  let t = S$e.c(18),
    {
      name: n,
      subtext: r,
      stats: o,
      width: s
    } = e,
    i;
  if (t[0] !== s) i = $ae.repeat(Math.max(1, s)), t[0] = s, t[1] = i;else i = t[1];
  let a;
  if (t[2] !== i) a = rw.jsx(w, {
    color: "text",
    wrap: "truncate-end",
    children: i
  }), t[2] = i, t[3] = a;else a = t[3];
  let l;
  if (t[4] !== n) l = rw.jsxs(w, {
    bold: true,
    color: "permission",
    wrap: "truncate-end",
    children: [" ", n]
  }), t[4] = n, t[5] = l;else l = t[5];
  let c;
  if (t[6] !== r) c = rw.jsx(U, {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
    children: rw.jsxs(w, {
      dimColor: true,
      wrap: "truncate-end",
      children: [" ", r]
    })
  }), t[6] = r, t[7] = c;else c = t[7];
  let u;
  if (t[8] !== o) u = o ? rw.jsx(U, {
    flexShrink: 0,
    children: rw.jsxs(w, {
      dimColor: true,
      children: [o, " "]
    })
  }) : null, t[8] = o, t[9] = u;else u = t[9];
  let d;
  if (t[10] !== c || t[11] !== u || t[12] !== s) d = rw.jsxs(U, {
    width: s,
    overflow: "hidden",
    children: [c, u]
  }), t[10] = c, t[11] = u, t[12] = s, t[13] = d;else d = t[13];
  let p;
  if (t[14] !== a || t[15] !== l || t[16] !== d) p = rw.jsxs(U, {
    flexDirection: "column",
    children: [a, l, d]
  }), t[14] = a, t[15] = l, t[16] = d, t[17] = p;else p = t[17];
  return p;
}
var S$e,
  t0o,
  rw,
  W6t = 4,
  Epf = 80,
  Qml = 17;