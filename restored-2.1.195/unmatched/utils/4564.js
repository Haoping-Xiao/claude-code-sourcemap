// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BLl
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0079  score=0.2118  fileCov=0.0081
// note: nearest: src/screens/REPL.tsx (0.0079); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BLl] deps: si, ft, GF, cWt, kt, JJ, WW, er, N8, Lo, At, Bi, sa, Mx, Jt, gP
OLl = {
  checking: "Detecting open PR for current branch\u2026",
  spawning: "Spawning cloud autofix session\u2026",
  subscribing: "Turning on autofix\u2026"
};
var ULl = {};
_t(ULl, {
  call: () => call
});
function Qxf(e) {
  let t = G$o.c(16),
    {
      onDone: n,
      context: r,
      args: o
    } = e,
    s = !1,
    i;
  if (t[0] !== !1) i = () => !Dt().hasSeenAutofixPrChatOpsNotice, t[0] = !1, t[1] = i;else i = t[1];
  let [a, l] = $Q.useState(i);
  if (!a) {
    let g;
    if (t[2] !== o || t[3] !== r || t[4] !== n) g = lR.jsx(ekf, {
      onDone: n,
      context: r,
      args: o
    }), t[2] = o, t[3] = r, t[4] = n, t[5] = g;else g = t[5];
    return g;
  }
  let c;
  if (t[6] !== n) c = () => n("Autofix PR cancelled", {
    display: "system"
  }), t[6] = n, t[7] = c;else c = t[7];
  let u;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) u = lR.jsx(ht, {
    chord: "escape",
    action: "cancel"
  }), t[8] = u;else u = t[8];
  let d;
  if (t[9] === Symbol.for("react.memo_cache_sentinel")) d = lR.jsx(w, {
    children: "Auto-fix monitors the PR and can post comments on your behalf using your GitHub identity."
  }), t[9] = d;else d = t[9];
  let p;
  if (t[10] === Symbol.for("react.memo_cache_sentinel")) p = [{
    value: "continue",
    label: "Continue",
    description: "start monitoring this PR"
  }, {
    value: "cancel",
    label: "Not now"
  }], t[10] = p;else p = t[10];
  let f;
  if (t[11] !== n) f = lR.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [d, lR.jsx(Sr, {
      options: p,
      onChange: g => {
        if (g === "continue") gn(Zxf), l(!1);else n("Autofix PR cancelled", {
          display: "system"
        });
      },
      onCancel: () => n("Autofix PR cancelled", {
        display: "system"
      })
    })]
  }), t[11] = n, t[12] = f;else f = t[12];
  let m;
  if (t[13] !== c || t[14] !== f) m = lR.jsx(zn, {
    title: "Autofix PR",
    subtitle: "Before you start",
    onCancel: c,
    inputGuide: u,
    children: f
  }), t[13] = c, t[14] = f, t[15] = m;else m = t[15];
  return m;
}
function Zxf(e) {
  return e.hasSeenAutofixPrChatOpsNotice ? e : {
    ...e,
    hasSeenAutofixPrChatOpsNotice: !0
  };
}
function ekf(e) {
  let t = G$o.c(30),
    {
      onDone: n,
      context: r,
      args: o
    } = e,
    [s, i] = $Q.useState("checking"),
    [a, l] = $Q.useState(null),
    [c, u] = $Q.useState(null),
    [d, p] = $Q.useState(!1),
    f = $Q.useRef(null),
    m = $Q.useRef(!1),
    g = $Q.useRef(!1),
    h;
  if (t[0] !== n) h = function (...O) {
    let L = O;
    if (g.current) return;
    g.current = !0, n(...L);
  }, t[0] = n, t[1] = h;else h = t[1];
  let y = h,
    b;
  if (t[2] !== o || t[3] !== r || t[4] !== y) b = () => {
    let P = Sl();
    return f.current = P, NLl(o, r, {
      signal: P.signal,
      onProgress: O => {
        if (i(O.step), O.prInfo) l(O.prInfo);
      }
    }).then(O => {
      if (P.signal.aborted && !m.current) return;
      switch (O.kind) {
        case "ok":
          {
            y(O.message, {
              display: O.display
            });
            return;
          }
        case "error":
          {
            if (m.current) y("Autofix PR cancelled");else u(O.message);
            return;
          }
        case "cancelled":
          {
            y("Autofix PR cancelled");
            return;
          }
      }
    }).catch(O => {
      y(`Autofix PR failed: ${O instanceof Error ? O.message : String(O)}`);
    }), () => {
      P.abort();
    };
  }, t[2] = o, t[3] = r, t[4] = y, t[5] = b;else b = t[5];
  let _;
  if (t[6] !== o || t[7] !== r || t[8] !== n) _ = [n, r, o], t[6] = o, t[7] = r, t[8] = n, t[9] = _;else _ = t[9];
  $Q.useEffect(b, _);
  let S;
  if (t[10] !== y || t[11] !== c) S = function () {
    if (c) {
      y(c);
      return;
    }
    if (m.current) {
      y("Autofix PR cancelled");
      return;
    }
    m.current = !0, p(!0), f.current?.abort();
  }, t[10] = y, t[11] = c, t[12] = S;else S = t[12];
  let A = S,
    v;
  if (t[13] !== y || t[14] !== c) v = {
    "confirm:yes": () => {
      if (c) y(c);
    }
  }, t[13] = y, t[14] = c, t[15] = v;else v = t[15];
  let C = c !== null,
    x;
  if (t[16] !== C) x = {
    context: "Confirmation",
    isActive: C
  }, t[16] = C, t[17] = x;else x = t[17];
  No(v, x);
  let I;
  if (t[18] !== d || t[19] !== c) I = c ? lR.jsx(ht, {
    chord: ["escape", "enter"],
    action: "close"
  }) : d ? lR.jsx(ht, {
    chord: "escape",
    action: "dismiss now"
  }) : lR.jsx(ht, {
    chord: "escape",
    action: "cancel"
  }), t[18] = d, t[19] = c, t[20] = I;else I = t[20];
  let k;
  if (t[21] !== d || t[22] !== c || t[23] !== a || t[24] !== s) k = lR.jsx(U, {
    flexDirection: "column",
    gap: 1,
    children: c ? lR.jsx(Va, {
      error: c
    }) : lR.jsxs(lR.Fragment, {
      children: [lR.jsx(Vc, {
        message: d ? "Cancelling\u2026" : OLl[s]
      }), a && lR.jsxs(w, {
        dimColor: !0,
        children: ["PR: ", lR.jsx(xs, {
          url: a.url,
          children: a.ref
        })]
      })]
    })
  }), t[21] = d, t[22] = c, t[23] = a, t[24] = s, t[25] = k;else k = t[25];
  let D;
  if (t[26] !== A || t[27] !== I || t[28] !== k) D = lR.jsx(zn, {
    title: "Autofix PR",
    subtitle: "Monitor and autofix any issues with the current PR",
    onCancel: A,
    inputGuide: I,
    children: k
  }), t[26] = A, t[27] = I, t[28] = k, t[29] = D;else D = t[29];
  return D;
}
var G$o,
  $Q,
  lR,
  call = async (e, t, n) => lR.jsx(Qxf, {
    onDone: e,
    context: t,
    args: n.trim()
  });