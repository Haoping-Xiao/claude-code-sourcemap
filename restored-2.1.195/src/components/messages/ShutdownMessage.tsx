// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uil
// matched 2.1.88 source: src/components/messages/ShutdownMessage.tsx
// class=modified  jaccard=0.2895  score=0.4625  fileCov=0.4364
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module uil] deps: Ye, Pqe, Lo, sr, ql
((iil = R(lt(), 1)), (ail = require("path")), (lil = R(rt(), 1)), (z6 = R(se(), 1)));
function Rof(e) {
  let t = GCo.c(5),
    { request: n } = e,
    r = `Shutdown request from ${n.from}`,
    o;
  if (t[0] !== n.reason)
    ((o =
      n.reason &&
      aQ.jsxs(w, {
        children: ["Reason: ", n.reason],
      })),
      (t[0] = n.reason),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== r || t[3] !== o)
    ((s = aQ.jsx(U, {
      flexDirection: "column",
      marginY: 1,
      children: aQ.jsx(cA, {
        color: "warning",
        title: r,
        children: o,
      }),
    })),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s));
  else s = t[4];
  return s;
}
function Lof(e) {
  let t = GCo.c(6),
    { response: n } = e,
    r = `Shutdown rejected by ${n.from}`,
    o;
  if (t[0] !== n.reason)
    ((o = aQ.jsx(Q4, {
      children: aQ.jsxs(w, {
        children: ["Reason: ", n.reason],
      }),
    })),
      (t[0] = n.reason),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((s = aQ.jsx(w, {
      dimColor: true,
      children: "Teammate is continuing to work. You may request shutdown again later.",
    })),
      (t[2] = s));
  else s = t[2];
  let i;
  if (t[3] !== r || t[4] !== o)
    ((i = aQ.jsx(U, {
      flexDirection: "column",
      marginY: 1,
      children: aQ.jsxs(cA, {
        color: "subtle",
        title: r,
        children: [o, s],
      }),
    })),
      (t[3] = r),
      (t[4] = o),
      (t[5] = i));
  else i = t[5];
  return i;
}
function dil(e) {
  let t = Qv(w9t(), e);
  if (t)
    return aQ.jsx(Rof, {
      request: t,
    });
  if (Qv(pAe(), e)) return null;
  let n = Qv($8n(), e);
  if (n)
    return aQ.jsx(Lof, {
      response: n,
    });
  return null;
}
function pil(e) {
  let t = Qv(w9t(), e);
  if (t) return `[Shutdown Request from ${t.from}]${t.reason ? ` ${t.reason}` : ""}`;
  let n = Qv(pAe(), e);
  if (n) return `[Shutdown Approved] ${n.from} is now exiting`;
  let r = Qv($8n(), e);
  if (r) return `[Shutdown Rejected] ${r.from}: ${r.reason}`;
  return null;
}
var GCo, aQ;
