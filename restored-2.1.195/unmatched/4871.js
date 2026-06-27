// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cAt
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0131  score=0.5025  fileCov=0.0132
// note: nearest: src/components/Settings/Config.tsx (0.0131); 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var cAt = Q((IzS, mGl) => {
  mGl.exports = fGl();
});
var hGl = {};
_t(hGl, {
  call: () => call
});
function T2f(e) {
  let t = fFo.c(19),
    {
      onDone: n
    } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) r = {
    ios: "",
    android: ""
  }, t[0] = r;else r = t[0];
  let [o, s] = Vrr.useState(r),
    i,
    a;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) i = () => {
    (async function () {
      let [S, A] = await Promise.all([pFo.toString(qrr.ios.url, {
        type: "utf8",
        errorCorrectionLevel: "L",
        margin: 2
      }), pFo.toString(qrr.android.url, {
        type: "utf8",
        errorCorrectionLevel: "L",
        margin: 2
      })]);
      s({
        ios: S,
        android: A
      });
    })().catch(v2f);
  }, a = [], t[1] = i, t[2] = a;else i = t[1], a = t[2];
  Vrr.useEffect(i, a);
  let l;
  if (t[3] !== n) l = () => {
    n();
  }, t[3] = n, t[4] = l;else l = t[4];
  let c = l,
    u;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) u = {
    context: "Confirmation"
  }, t[5] = u;else u = t[5];
  $r("confirm:no", c, u);
  let d;
  if (t[6] !== n) d = function (_) {
    if (_.key === "q" && !_.ctrl && !_.meta) _.preventDefault(), n();
  }, t[6] = n, t[7] = d;else d = t[7];
  let p = d,
    f;
  if (t[8] !== o.ios) f = Q$.jsx(sm, {
    title: "iOS",
    id: "ios",
    children: Q$.jsx(gGl, {
      qrCode: o.ios,
      url: qrr.ios.url
    })
  }), t[8] = o.ios, t[9] = f;else f = t[9];
  let m;
  if (t[10] !== o.android) m = Q$.jsx(sm, {
    title: "Android",
    id: "android",
    children: Q$.jsx(gGl, {
      qrCode: o.android,
      url: qrr.android.url
    })
  }), t[10] = o.android, t[11] = m;else m = t[11];
  let g;
  if (t[12] !== f || t[13] !== m) g = Q$.jsxs(cR, {
    title: "Mobile",
    children: [f, m]
  }), t[12] = f, t[13] = m, t[14] = g;else g = t[14];
  let h;
  if (t[15] === Symbol.for("react.memo_cache_sentinel")) h = Q$.jsx(U, {
    marginTop: 1,
    children: Q$.jsx(vb, {
      children: Q$.jsxs(Tn, {
        children: [Q$.jsx(ht, {
          chord: ["left", "right"],
          action: "switch"
        }), Q$.jsx(ht, {
          chord: "escape",
          action: "close"
        })]
      })
    })
  }), t[15] = h;else h = t[15];
  let y;
  if (t[16] !== p || t[17] !== g) y = Q$.jsx(Fu, {
    children: Q$.jsxs(U, {
      flexDirection: "column",
      onKeyDown: p,
      children: [g, h]
    })
  }), t[16] = p, t[17] = g, t[18] = y;else y = t[18];
  return y;
}
function v2f() {}
function gGl(e) {
  let t = fFo.c(11),
    {
      qrCode: n,
      url: r
    } = e,
    o,
    s,
    i;
  if (t[0] !== n) {
    let c = n.split(`
`).filter(C2f);
    o = U, s = "column", i = c.map(w2f), t[0] = n, t[1] = o, t[2] = s, t[3] = i;
  } else o = t[1], s = t[2], i = t[3];
  let a;
  if (t[4] !== r) a = Q$.jsx(w, {
    dimColor: !0,
    children: r
  }), t[4] = r, t[5] = a;else a = t[5];
  let l;
  if (t[6] !== o || t[7] !== s || t[8] !== i || t[9] !== a) l = Q$.jsxs(o, {
    flexDirection: s,
    children: [i, a]
  }), t[6] = o, t[7] = s, t[8] = i, t[9] = a, t[10] = l;else l = t[10];
  return l;
}
function w2f(e, t) {
  return Q$.jsx(w, {
    children: e
  }, t);
}
function C2f(e) {
  return e.length > 0;
}
async function call(e) {
  return Q$.jsx(T2f, {
    onDone: e
  });
}
var fFo, pFo, Vrr, Q$, qrr;