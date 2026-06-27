// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DLc
// matched 2.1.88 source: src/components/SandboxViolationExpandedView.tsx
// class=modified  jaccard=0.4155  score=0.5931  fileCov=0.5812
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DLc] deps: Ye, lg, Vl, X0
((LLc = R(lt(), 1)), (D3 = R(se(), 1)));
function Zwm(e) {
  let t = e.getHours() % 12 || 12,
    n = String(e.getMinutes()).padStart(2, "0"),
    r = String(e.getSeconds()).padStart(2, "0"),
    o = e.getHours() < 12 ? "am" : "pm";
  return `${t}:${n}:${r}${o}`;
}
function LYo() {
  let e = PLc.c(15),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) ((t = []), (e[0] = t));
  else t = e[0];
  let [n, r] = Ltn.useState(t),
    [o, s] = Ltn.useState(0),
    i,
    a;
  if (e[1] === Symbol.for("react.memo_cache_sentinel"))
    ((i = () => {
      let m = xo.getSandboxViolationStore();
      return m.subscribe((h) => {
        (r(h.slice(-10)), s(m.getTotalCount()));
      });
    }),
      (a = []),
      (e[1] = i),
      (e[2] = a));
  else ((i = e[1]), (a = e[2]));
  if ((Ltn.useEffect(i, a), !xo.isSandboxingEnabled() || Vt() === "linux")) return null;
  if (o === 0) return null;
  let l = o === 1 ? "operation" : "operations",
    c;
  if (e[3] !== l || e[4] !== o)
    ((c = ZTe.jsx(U, {
      marginLeft: 0,
      children: ZTe.jsxs(w, {
        color: "permission",
        children: ["\u29C8 Sandbox blocked ", o, " total", " ", l],
      }),
    })),
      (e[3] = l),
      (e[4] = o),
      (e[5] = c));
  else c = e[5];
  let u;
  if (e[6] !== n) ((u = n.map(eCm)), (e[6] = n), (e[7] = u));
  else u = e[7];
  let d = Math.min(10, n.length),
    p;
  if (e[8] !== d || e[9] !== o)
    ((p = ZTe.jsx(U, {
      paddingLeft: 2,
      children: ZTe.jsxs(w, {
        dimColor: true,
        children: ["\u2026 showing last ", d, " of ", o],
      }),
    })),
      (e[8] = d),
      (e[9] = o),
      (e[10] = p));
  else p = e[10];
  let f;
  if (e[11] !== c || e[12] !== u || e[13] !== p)
    ((f = ZTe.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [c, u, p],
    })),
      (e[11] = c),
      (e[12] = u),
      (e[13] = p),
      (e[14] = f));
  else f = e[14];
  return f;
}
function eCm(e, t) {
  return ZTe.jsx(
    U,
    {
      paddingLeft: 2,
      children: ZTe.jsxs(w, {
        dimColor: true,
        children: [Zwm(e.timestamp), e.command ? ` ${e.command}:` : "", " ", e.line],
      }),
    },
    `${e.timestamp.getTime()}-${t}`,
  );
}
var PLc, Ltn, ZTe;
