// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d_c
// matched 2.1.88 source: src/components/PromptInput/Notifications.tsx
// class=new  jaccard=0.0331  score=0.4006  fileCov=0.0348
// note: nearest: src/components/PromptInput/Notifications.tsx (0.0331); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module d_c] deps: context/notifications.tsx, hooks/useTerminalSize.ts, utils/telemetry/pluginTelemetry.ts, jwa/index.js
P6o = R(lt(), 1), c_c = R(rt(), 1), S7e = R(se(), 1);
function p_c() {
  let e = M6o.c(10);
  u_c();
  let t = Ht(xfm);
  if (t.length === 0) return null;
  let n, r, o, s;
  if (e[0] !== t) {
    let a = t.slice().sort(Ifm);
    n = U, r = "column", o = 2, s = a.map(Cfm), e[0] = t, e[1] = n, e[2] = r, e[3] = o, e[4] = s;
  } else n = e[1], r = e[2], o = e[3], s = e[4];
  let i;
  if (e[5] !== n || e[6] !== r || e[7] !== o || e[8] !== s) i = NTt.jsx(n, {
    flexDirection: r,
    paddingLeft: o,
    children: s
  }), e[5] = n, e[6] = r, e[7] = o, e[8] = s, e[9] = i;else i = e[9];
  return i;
}
function Cfm(e) {
  return NTt.jsx(kfm, {
    notice: e
  }, e.key);
}
function Ifm(e, t) {
  return sUt[e.priority] - sUt[t.priority];
}
function xfm(e) {
  return e.notifications.pinned;
}
function kfm(e) {
  let t = M6o.c(5),
    {
      notice: n
    } = e;
  if ("jsx" in n) {
    let s;
    if (t[0] !== n.jsx) s = NTt.jsxs(w, {
      color: "warning",
      wrap: "truncate",
      children: [URt, " ", n.jsx]
    }), t[0] = n.jsx, t[1] = s;else s = t[1];
    return s;
  }
  let r = n.color ?? "warning",
    o;
  if (t[2] !== n.text || t[3] !== r) o = NTt.jsxs(w, {
    color: r,
    wrap: "truncate",
    children: [URt, " ", n.text]
  }), t[2] = n.text, t[3] = r, t[4] = o;else o = t[4];
  return o;
}
var M6o, NTt;