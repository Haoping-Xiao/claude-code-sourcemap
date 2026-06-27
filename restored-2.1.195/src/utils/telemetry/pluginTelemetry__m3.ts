// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wdr
// matched 2.1.88 source: src/utils/telemetry/pluginTelemetry.ts
// class=modified (alt of src/utils/telemetry/pluginTelemetry.ts)  jaccard=0.0127  score=0.0653  fileCov=0.0155
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module wdr] deps: es, gM, sa
((o_c = require("fs/promises")), (s_c = require("os")), (Oen = require("path")));
function u_c() {
  let e = P6o.c(5),
    t = ZIl(),
    { addNotification: n, removeNotification: r } = Li(),
    o,
    s;
  if (e[0] !== n || e[1] !== r || e[2] !== t)
    ((o = () => {
      if (t === null) {
        r(l_c);
        return;
      }
      n({
        key: l_c,
        kind: "warning",
        priority: "immediate",
        pinned: true,
        jsx: S7e.jsx(wfm, {
          warning: t,
        }),
      });
    }),
      (s = [t, n, r]),
      (e[0] = n),
      (e[1] = r),
      (e[2] = t),
      (e[3] = o),
      (e[4] = s));
  else ((o = e[3]), (s = e[4]));
  c_c.useEffect(o, s);
}
function wfm(e) {
  let t = P6o.c(9),
    { warning: n } = e,
    r = n.type === "deep-link" ? "Prompt from an external link" : "Pre-filled prompt",
    o = n.prefillLength > D6o,
    s;
  if (t[0] !== o || t[1] !== n.prefillLength)
    ((s = o ? ` (${n.prefillLength.toLocaleString("en-US")} chars)` : ""),
      (t[0] = o),
      (t[1] = n.prefillLength),
      (t[2] = s));
  else s = t[2];
  let i = o
      ? " \xB7 scroll to review it all before pressing Enter"
      : " \xB7 review before pressing Enter",
    a;
  if (t[3] !== i)
    ((a = S7e.jsx(w, {
      dimColor: true,
      children: i,
    })),
      (t[3] = i),
      (t[4] = a));
  else a = t[4];
  let l;
  if (t[5] !== r || t[6] !== s || t[7] !== a)
    ((l = S7e.jsxs(S7e.Fragment, {
      children: [r, s, a],
    })),
      (t[5] = r),
      (t[6] = s),
      (t[7] = a),
      (t[8] = l));
  else l = t[8];
  return l;
}
var P6o,
  c_c,
  S7e,
  l_c = "launch-prompt-warning";
