// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Mil
// matched 2.1.88 source: src/components/messages/UserMemoryInputMessage.tsx
// class=modified  jaccard=0.3882  score=0.5741  fileCov=0.5451
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Mil] deps: Xa, Ye, co, AN
((Vzn = R(lt(), 1)), (vN = R(se(), 1)));
function Kof() {
  return HL(["Got it.", "Good to know.", "Noted."]);
}
function Oil(e) {
  let t = $il.c(10),
    { text: n, addMargin: r } = e,
    o;
  if (t[0] !== n) ((o = xl(n, "user-memory-input")), (t[0] = n), (t[1] = o));
  else o = t[1];
  let s = o,
    i;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((i = Kof()), (t[2] = i));
  else i = t[2];
  let a = i;
  if (!s) return null;
  let l = r ? 1 : 0,
    c;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((c = jMe.jsx(w, {
      color: "remember",
      backgroundColor: "memoryBackgroundColor",
      children: "#",
    })),
      (t[3] = c));
  else c = t[3];
  let u;
  if (t[4] !== s)
    ((u = jMe.jsxs(U, {
      children: [
        c,
        jMe.jsxs(w, {
          backgroundColor: "memoryBackgroundColor",
          color: "text",
          children: [" ", s, " "],
        }),
      ],
    })),
      (t[4] = s),
      (t[5] = u));
  else u = t[5];
  let d;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((d = jMe.jsx(qn, {
      height: 1,
      children: jMe.jsx(w, {
        dimColor: true,
        children: a,
      }),
    })),
      (t[6] = d));
  else d = t[6];
  let p;
  if (t[7] !== l || t[8] !== u)
    ((p = jMe.jsxs(U, {
      flexDirection: "column",
      marginTop: l,
      width: "100%",
      children: [u, d],
    })),
      (t[7] = l),
      (t[8] = u),
      (t[9] = p));
  else p = t[9];
  return p;
}
var $il, jMe;
