// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S7t
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0379  score=0.387  fileCov=0.0403
// note: nearest: src/components/Settings/Config.tsx (0.0379); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var S7t = E(() => {
  tne();
  oo();
  er();
  Mm();
  At();
  dr();
  ih();
  dn();
  kt();
  c_();
  sMl();
  b7t = uL(void 0), aMl = Mi(), lMl = b7t.getState, cMl = b7t.subscribe, uMl = aMl.subscribe;
});
function t1o(e) {
  switch (e) {
    case "terminal_bell":
      return "bell";
    case "iterm2_with_bell":
      return "iterm2+bell";
    case "notifications_disabled":
      return "none";
    default:
      return e;
  }
}
function mMl(e) {
  let t = e1o.c(43),
    {
      channel: n,
      showInputNeededRow: r,
      showDoneRow: o,
      inputNeededEnabled: s,
      doneEnabled: i,
      onCycleChannel: a,
      onToggleInputNeeded: l,
      onToggleDone: c,
      onClose: u
    } = e,
    [d, p] = nEt.useState(0),
    f = nEt.useRef(null);
  M0(f, true);
  let m;
  if (t[0] !== n) m = t1o(n), t[0] = n, t[1] = m;else m = t[1];
  let g = `\u2039 ${m} \u203A`,
    h;
  if (t[2] !== a || t[3] !== g) h = {
    id: "channel",
    label: "Channel",
    value: g,
    activate: a
  }, t[2] = a, t[3] = g, t[4] = h;else h = t[4];
  let y;
  if (t[5] !== s || t[6] !== l || t[7] !== r) y = r ? [{
    id: "inputNeeded",
    label: "Notify when Claude needs you",
    value: String(s),
    activate: l
  }] : [], t[5] = s, t[6] = l, t[7] = r, t[8] = y;else y = t[8];
  let b;
  if (t[9] !== i || t[10] !== c || t[11] !== o) b = o ? [{
    id: "done",
    label: "Notify when Claude is done",
    value: String(i),
    activate: c
  }] : [], t[9] = i, t[10] = c, t[11] = o, t[12] = b;else b = t[12];
  let _;
  if (t[13] !== h || t[14] !== y || t[15] !== b) _ = [h, ...y, ...b], t[13] = h, t[14] = y, t[15] = b, t[16] = _;else _ = t[16];
  let S = _,
    A;
  if (t[17] !== d || t[18] !== S) A = function () {
    S[d]?.activate();
  }, t[17] = d, t[18] = S, t[19] = A;else A = t[19];
  let v = A,
    C;
  if (t[20] === Symbol.for("react.memo_cache_sentinel")) C = () => p(Z0f), t[20] = C;else C = t[20];
  let x;
  if (t[21] !== S.length) x = () => p($ => Math.min(S.length - 1, $ + 1)), t[21] = S.length, t[22] = x;else x = t[22];
  let I;
  if (t[23] !== v || t[24] !== x) I = {
    "select:previous": C,
    "select:next": x,
    "select:accept": v
  }, t[23] = v, t[24] = x, t[25] = I;else I = t[25];
  let k;
  if (t[26] === Symbol.for("react.memo_cache_sentinel")) k = {
    context: "Select",
    isActive: true
  }, t[26] = k;else k = t[26];
  No(I, k);
  let D;
  if (t[27] !== v) D = function (q) {
    if (q.key === " ") q.preventDefault(), v();
  }, t[27] = v, t[28] = D;else D = t[28];
  let P = D,
    O;
  if (t[29] === Symbol.for("react.memo_cache_sentinel")) O = m3.jsxs(Tn, {
    children: [m3.jsx(ht, {
      chord: ["up", "down"],
      action: "navigate"
    }), m3.jsx(ht, {
      chord: "enter",
      action: "change"
    }), m3.jsx(mr, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "close"
    })]
  }), t[29] = O;else O = t[29];
  let L;
  if (t[30] !== d || t[31] !== S) L = S.map(($, q) => {
    let W = q === d;
    return m3.jsxs(U, {
      children: [m3.jsx(U, {
        width: 34,
        flexShrink: 0,
        marginRight: 1,
        children: m3.jsxs(w, {
          color: W ? "suggestion" : void 0,
          wrap: "truncate-end",
          children: [W ? nt.pointer : " ", " ", $.label]
        })
      }), m3.jsx(w, {
        color: W ? "suggestion" : void 0,
        wrap: "truncate-end",
        children: $.value
      })]
    }, $.id);
  }), t[30] = d, t[31] = S, t[32] = L;else L = t[32];
  let M;
  if (t[33] !== o || t[34] !== r) M = (r || o) && m3.jsx(ntr, {}), t[33] = o, t[34] = r, t[35] = M;else M = t[35];
  let N;
  if (t[36] !== P || t[37] !== L || t[38] !== M) N = m3.jsxs(U, {
    flexDirection: "column",
    ref: f,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: P,
    children: [L, M]
  }), t[36] = P, t[37] = L, t[38] = M, t[39] = N;else N = t[39];
  let B;
  if (t[40] !== u || t[41] !== N) B = m3.jsx(zn, {
    title: "Notifications",
    onCancel: u,
    hideBorder: true,
    inputGuide: O,
    children: N
  }), t[40] = u, t[41] = N, t[42] = B;else B = t[42];
  return B;
}
function Z0f(e) {
  return Math.max(0, e - 1);
}
function ntr() {
  let e = e1o.c(1);
  if (nEt.useSyncExternalStore(cMl, lMl, eRf)?.has_active_channel !== false) return null;
  let n;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) n = m3.jsxs(w, {
    color: "warning",
    wrap: "truncate-end",
    children: ["  ", URt, " No mobile registered \xB7", " ", m3.jsx(xs, {
      url: "https://claude.com/download#mobile",
      children: "get the app"
    }), " and turn on notif"]
  }), e[0] = n;else n = e[0];
  return n;
}
function eRf() {}
var e1o, nEt, m3, pKe;