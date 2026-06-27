// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ail
// matched 2.1.88 source: src/components/messages/UserBashInputMessage.tsx
// class=modified  jaccard=0.3556  score=0.4929  fileCov=0.5607
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ail] deps: @xmldom/xmldom/lib/entities.js, hooks/useTerminalSize.ts, utils/profilerBase.ts, utils/messages.ts
((Sil = R(lt(), 1)), (Zyt = R(se(), 1)));
function UserBashInputMessage(t0) {
  let t = Hil.c(8),
    { param: n, addMargin: r } = t0,
    { text: o } = n,
    s;
  if (t[0] !== o) ((s = xl(o, "bash-input")), (t[0] = o), (t[1] = s));
  else s = t[1];
  let i = s;
  if (!i) return null;
  let a = r ? 1 : 0,
    l;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((l = P8t.jsx(w, {
      color: "bashBorder",
      children: "! ",
    })),
      (t[2] = l));
  else l = t[2];
  let c;
  if (t[3] !== i)
    ((c = P8t.jsx(w, {
      color: "text",
      children: i,
    })),
      (t[3] = i),
      (t[4] = c));
  else c = t[4];
  let u;
  if (t[5] !== a || t[6] !== c)
    ((u = P8t.jsxs(U, {
      flexDirection: "row",
      marginTop: a,
      backgroundColor: "bashMessageBackgroundColor",
      paddingRight: 1,
      children: [l, c],
    })),
      (t[5] = a),
      (t[6] = c),
      (t[7] = u));
  else u = t[7];
  return u;
}
var Hil, P8t;
