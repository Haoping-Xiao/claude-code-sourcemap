// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nWi
// matched 2.1.88 source: src/ink/log-update.ts
// class=modified  jaccard=0.4008  score=0.8041  fileCov=0.4442
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module nWi]
((TGd = []), (vGd = []));
class cJr {
  options;
  state;
  constructor(e) {
    this.options = e;
    this.state = {
      previousOutput: "",
    };
  }
  renderPreviousOutput_DEPRECATED(e) {
    if (!this.options.isTTY) return [SLn];
    return this.getRenderOpsForDone(e);
  }
  reset() {
    ((this.state.previousOutput = ""), (this.forceReset = false));
  }
  forceReset = false;
  forceFullReset() {
    this.forceReset = true;
  }
  renderFullFrame(e) {
    let { screen: t } = e,
      n = [],
      r = [],
      o = void 0;
    for (let s = 0; s < t.height; s++) {
      let i = "";
      for (let l = 0; l < t.width; l++) {
        let c = Fj(t, l, s);
        if (c && c.width !== 2) {
          if (c.hyperlink !== o) {
            if (o !== void 0) i += J3e;
            if (c.hyperlink !== void 0) i += Hit(c.hyperlink);
            o = c.hyperlink;
          }
          let u = this.options.stylePool.get(c.styleId),
            d = cGe(r, u);
          if (d.length > 0) ((i += v1(d)), (r = u));
          i += c.char;
        }
      }
      if (o !== void 0) ((i += J3e), (o = void 0));
      let a = cGe(r, []);
      if (a.length > 0) ((i += v1(a)), (r = []));
      n.push(i.trimEnd());
    }
    if (n.length === 0) return [];
    return [
      {
        type: "stdout",
        content: n.join(`
`),
      },
    ];
  }
  getRenderOpsForDone(e) {
    if (((this.state.previousOutput = ""), !e.cursor.visible))
      return [
        {
          type: "cursorShow",
        },
      ];
    return [];
  }
  render(e, t, n = false, r = true) {
    if (!this.options.isTTY) {
      if (X3i(e.screen, t.screen)) return [];
      return this.renderFullFrame(t);
    }
    let o = performance.now(),
      s = this.options.stylePool,
      a = e.cursor.y >= e.screen.height && e.screen.height >= e.viewport.height,
      l = Math.max(0, e.screen.height - Math.min(e.viewport.height, t.viewport.height)),
      c = e.screen.height >= e.viewport.height ? 1 : 0,
      u = l + c;
    if (this.forceReset) return ((this.forceReset = false), jBt(t, "clear", s, n, u));
    if (
      t.viewport.height < e.viewport.height ||
      (t.viewport.height > e.viewport.height && a) ||
      (e.viewport.width !== 0 && t.viewport.width !== e.viewport.width)
    )
      return jBt(t, "resize", s, n, u);
    let d = [];
    if (n && t.scrollHint && r) {
      let { top: O, bottom: L, delta: M } = t.scrollHint;
      if (O >= 0 && L < e.screen.height && L < t.screen.height)
        (uLn(e.screen, O, L, M),
          (d = [
            {
              type: "stdout",
              content: B7(O + 1, L + 1) + (M > 0 ? TUi(M) : vUi(-M)) + c8 + dH,
            },
          ]));
    }
    let p = t.screen.height < e.screen.height,
      f = t.screen.height <= e.viewport.height;
    if (a && f && p)
      return (
        T(
          `Full reset (shrink->below): prevHeight=${e.screen.height}, nextHeight=${t.screen.height}, viewport=${e.viewport.height}`,
        ),
        jBt(t, "offscreen", s, n, u)
      );
    let m = new uJr(e.cursor, t.viewport.width),
      g = Math.max(t.screen.height, 1) - Math.max(e.screen.height, 1),
      h = g < 0,
      y = g > 0;
    if (h) {
      let O = e.screen.height - t.screen.height;
      if (O > e.viewport.height) return jBt(t, "offscreen", this.options.stylePool, n, u);
      m.txn((L) => [
        [
          {
            type: "clear",
            count: O,
          },
          {
            type: "cursorMove",
            x: 0,
            y: -1,
          },
        ],
        {
          dx: -L.x,
          dy: -O,
        },
      ]);
    }
    let b = a ? 1 : 0,
      _ = y
        ? Math.max(0, e.screen.height - e.viewport.height + b)
        : Math.max(e.screen.height, t.screen.height) - t.viewport.height + b,
      S = s.none,
      A = void 0,
      v = -1,
      C = -1,
      x = false,
      I = false,
      k = false,
      D = -1;
    if (
      (rGi(e.screen, t.screen, (O, L, M, N) => {
        if (y && L >= e.screen.height) return;
        if (N && (N.width === 2 || N.width === 3)) return;
        if (M && (M.width === 2 || M.width === 3) && !N) return;
        if (N && pGe(t.screen, O, L) && !M) return;
        if (L < _) {
          if (n || h) return ((k = true), (D = L), true);
          return;
        }
        if (L !== v) ((A = d0e(m.diff, A, void 0)), (v = L), (C = -1), (x = false), (I = false));
        if (M && pGe(t.screen, O, L)) {
          if (!x) {
            if (((x = true), L < t.screen.height)) {
              for (let B = t.screen.width - 1; B > O; B--)
                if (!pGe(t.screen, B, L)) {
                  C = B;
                  break;
                }
            }
          }
          if (O > C) {
            if (I) return;
            ((I = true), bLn(m, O, L));
            let B = S,
              $ = A;
            ((S = s.none),
              (A = void 0),
              m.txn(() => {
                let q = [];
                return (
                  GBt(q, s, B, s.none),
                  d0e(q, $, void 0),
                  q.push(wGd),
                  [
                    q,
                    {
                      dx: 0,
                      dy: 0,
                    },
                  ]
                );
              }));
            return;
          }
        }
        if ((bLn(m, O, L), N)) {
          let B = N.hyperlink;
          A = d0e(m.diff, A, B);
          let $ = s.transition(S, N.styleId);
          if (sWi(m, N, $)) S = N.styleId;
        } else if (M) {
          let B = S,
            $ = A;
          ((S = s.none),
            (A = void 0),
            m.txn(() => {
              let q = [];
              return (
                GBt(q, s, B, s.none),
                d0e(q, $, void 0),
                q.push({
                  type: "stdout",
                  content: " ",
                }),
                [
                  q,
                  {
                    dx: 1,
                    dy: 0,
                  },
                ]
              );
            }));
        }
      }),
      k)
    )
      return jBt(t, "offscreen", s, n, u, {
        triggerY: D,
        prevLine: rWi(e.screen, D),
        nextLine: rWi(t.screen, D),
      });
    if (((S = GBt(m.diff, s, S, s.none)), (A = d0e(m.diff, A, void 0)), y))
      oWi(m, t, e.screen.height, t.screen.height, s);
    if (n);
    else if (t.cursor.y >= t.screen.height)
      m.txn((O) => {
        let L = t.cursor.y - O.y;
        if (L > 0) {
          let N = Array(1 + L);
          N[0] = iat;
          for (let B = 0; B < L; B++) N[1 + B] = SLn;
          return [
            N,
            {
              dx: -O.x,
              dy: L,
            },
          ];
        }
        let M = t.cursor.y - O.y;
        if (M !== 0 || O.x !== t.cursor.x) {
          let N = [iat];
          return (
            N.push({
              type: "cursorMove",
              x: t.cursor.x,
              y: M,
            }),
            [
              N,
              {
                dx: t.cursor.x - O.x,
                dy: M,
              },
            ]
          );
        }
        return [
          [],
          {
            dx: 0,
            dy: 0,
          },
        ];
      });
    else bLn(m, t.cursor.x, t.cursor.y);
    let P = performance.now() - o;
    if (P > 50) {
      let O = t.screen.damage,
        L = O ? `${O.width}x${O.height} at (${O.x},${O.y})` : "none";
      T(
        `Slow render: ${P.toFixed(1)}ms, screen: ${t.screen.height}x${t.screen.width}, damage: ${L}, changes: ${m.diff.length}`,
      );
    }
    return d.length > 0 ? [...d, ...m.diff] : m.diff;
  }
}
function d0e(e, t, n) {
  if (t !== n)
    return (
      e.push({
        type: "hyperlink",
        uri: n ?? "",
      }),
      n
    );
  return t;
}
function GBt(e, t, n, r) {
  let o = t.transition(n, r);
  if (o.length > 0)
    e.push({
      type: "styleStr",
      str: o,
    });
  return r;
}
function rWi(e, t) {
  let n = "";
  for (let r = 0; r < e.width; r++) n += Z3i(e, r, t) ?? " ";
  return n.trimEnd();
}
function jBt(e, t, n, r, o, s) {
  let i = r ? 0 : Math.min(o, Math.max(0, e.screen.height - e.viewport.height + 1)),
    a = new uJr(
      {
        x: 0,
        y: i,
      },
      e.viewport.width,
    );
  return (
    oWi(a, e, i, e.screen.height, n),
    [
      {
        type: "clearTerminal",
        reason: t,
        altScreen: r,
        viewportRows: e.viewport.height,
        debug: s,
      },
      ...a.diff,
    ]
  );
}
function oWi(e, t, n, r, o) {
  let s = o.none,
    i = void 0,
    a = -1,
    { width: l, cells: c, charPool: u, hyperlinkPool: d } = t.screen,
    p = n * l;
  for (let f = n; f < r; f += 1) {
    if (e.cursor.y < f) {
      let m = f - e.cursor.y;
      e.txn((g) => {
        let h = Array(1 + m);
        h[0] = iat;
        for (let y = 0; y < m; y++) h[1 + y] = SLn;
        return [
          h,
          {
            dx: -g.x,
            dy: m,
          },
        ];
      });
    }
    a = -1;
    for (let m = 0; m < l; m += 1, p += 1) {
      let g = Q3i(c, u, d, p, a);
      if (!g) continue;
      bLn(e, m, f);
      let h = g.hyperlink;
      i = d0e(e.diff, i, h);
      let y = o.transition(s, g.styleId);
      if (sWi(e, g, y)) ((s = g.styleId), (a = g.styleId));
    }
    ((s = GBt(e.diff, o, s, o.none)),
      (i = d0e(e.diff, i, void 0)),
      e.txn((m) => [
        [iat, SLn],
        {
          dx: -m.x,
          dy: 1,
        },
      ]));
  }
  return (GBt(e.diff, o, s, o.none), d0e(e.diff, i, void 0), e);
}
function sWi(e, t, n) {
  let r = t.width === 1 ? Math.max(2, rn(t.char)) : 1,
    o = e.cursor.x,
    s = e.viewportWidth;
  if (r >= 2 && o < s) {
    let l = t.char.length > 2 ? s : s + 1;
    if (o + r >= l) return false;
  }
  let i = e.diff;
  if (n.length > 0)
    i.push({
      type: "styleStr",
      str: n,
    });
  let a = r >= 3 || (r === 2 && CGd(t.char));
  if (a && o + 1 < s)
    (i.push({
      type: "cursorTo",
      col: o + 2,
    }),
      i.push({
        type: "stdout",
        content: Ff(" ", r - 1),
      }),
      i.push({
        type: "cursorTo",
        col: o + 1,
      }));
  if (
    (i.push({
      type: "stdout",
      content: t.char,
    }),
    a)
  )
    i.push({
      type: "cursorTo",
      col: o + r + 1,
    });
  if (o >= s) ((e.cursor.x = r), e.cursor.y++);
  else e.cursor.x = o + r;
  return true;
}
function bLn(e, t, n) {
  e.txn((r) => {
    let o = t - r.x,
      s = n - r.y;
    if (r.x >= e.viewportWidth)
      return [
        [
          iat,
          {
            type: "cursorMove",
            x: t,
            y: s,
          },
        ],
        {
          dx: o,
          dy: s,
        },
      ];
    if (s !== 0)
      return [
        [
          iat,
          {
            type: "cursorMove",
            x: t,
            y: s,
          },
        ],
        {
          dx: o,
          dy: s,
        },
      ];
    if (o !== 0)
      return [
        [
          {
            type: "cursorTo",
            col: t + 1,
          },
        ],
        {
          dx: o,
          dy: s,
        },
      ];
    return [
      [],
      {
        dx: 0,
        dy: 0,
      },
    ];
  });
}
function CGd(e) {
  let t = e.codePointAt(0);
  if (t === void 0) return false;
  if ((t >= 129648 && t <= 129791) || (t >= 129792 && t <= 130047)) return true;
  if (e.length >= 2) {
    for (let n = 0; n < e.length; n++) if (e.charCodeAt(n) === 65039) return true;
  }
  return false;
}
class uJr {
  viewportWidth;
  cursor;
  diff = [];
  constructor(e, t) {
    this.viewportWidth = t;
    this.cursor = {
      ...e,
    };
  }
  txn(e) {
    let [t, n] = e(this.cursor);
    for (let r of t) this.diff.push(r);
    ((this.cursor.x += n.dx), (this.cursor.y += n.dy));
  }
}
var iat, SLn, wGd;
