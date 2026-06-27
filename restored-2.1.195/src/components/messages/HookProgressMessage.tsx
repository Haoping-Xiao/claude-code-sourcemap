// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pzn
// matched 2.1.88 source: src/components/messages/HookProgressMessage.tsx
// class=modified  jaccard=0.3899  score=0.4899  fileCov=0.6565
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Pzn]
Qsl = R(rt(), 1);
s6e = class s6e extends Qsl.Component {
  constructor(e) {
    super(e);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
};
function Mzn(e) {
  let t = Zsl.c(22),
    { hookEvent: n, lookups: r, toolUseID: o, isTranscriptMode: s } = e,
    i;
  if (t[0] !== n || t[1] !== r.inProgressHookCounts || t[2] !== o)
    ((i = r.inProgressHookCounts.get(o)?.get(n) ?? 0),
      (t[0] = n),
      (t[1] = r.inProgressHookCounts),
      (t[2] = o),
      (t[3] = i));
  else i = t[3];
  let a = i,
    l = r.resolvedHookCounts.get(o)?.get(n) ?? 0;
  if (a === 0) return null;
  if (n === "PreToolUse" || n === "PostToolUse") {
    if (s) {
      let m;
      if (t[4] !== a)
        ((m = iQ.jsxs(w, {
          dimColor: true,
          children: [a, " "],
        })),
          (t[4] = a),
          (t[5] = m));
      else m = t[5];
      let g;
      if (t[6] !== n)
        ((g = iQ.jsx(w, {
          dimColor: true,
          bold: true,
          children: n,
        })),
          (t[6] = n),
          (t[7] = g));
      else g = t[7];
      let h = a === 1 ? " hook" : " hooks",
        y;
      if (t[8] !== h)
        ((y = iQ.jsxs(w, {
          dimColor: true,
          children: [h, " ran"],
        })),
          (t[8] = h),
          (t[9] = y));
      else y = t[9];
      let b;
      if (t[10] !== m || t[11] !== g || t[12] !== y)
        ((b = iQ.jsx(qn, {
          children: iQ.jsxs(U, {
            flexDirection: "row",
            children: [m, g, y],
          }),
        })),
          (t[10] = m),
          (t[11] = g),
          (t[12] = y),
          (t[13] = b));
      else b = t[13];
      return b;
    }
    return null;
  }
  if (l === a) return null;
  let c;
  if (t[14] === Symbol.for("react.memo_cache_sentinel"))
    ((c = iQ.jsx(w, {
      dimColor: true,
      children: "Running ",
    })),
      (t[14] = c));
  else c = t[14];
  let u;
  if (t[15] !== n)
    ((u = iQ.jsx(w, {
      dimColor: true,
      bold: true,
      children: n,
    })),
      (t[15] = n),
      (t[16] = u));
  else u = t[16];
  let d = a === 1 ? " hook\u2026" : " hooks\u2026",
    p;
  if (t[17] !== d)
    ((p = iQ.jsx(w, {
      dimColor: true,
      children: d,
    })),
      (t[17] = d),
      (t[18] = p));
  else p = t[18];
  let f;
  if (t[19] !== u || t[20] !== p)
    ((f = iQ.jsx(qn, {
      children: iQ.jsxs(U, {
        flexDirection: "row",
        children: [c, u, p],
      }),
    })),
      (t[19] = u),
      (t[20] = p),
      (t[21] = f));
  else f = t[21];
  return f;
}
var Zsl, iQ;
