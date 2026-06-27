// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OLc
// matched 2.1.88 source: src/hooks/notifs/useLspInitializationNotification.tsx
// class=modified  jaccard=0.3534  score=0.8419  fileCov=0.3785
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module OLc] deps: Ed, ft, uo, __
Dtn = R(rt(), 1);
function BLc() {
  let e = NLc.c(12),
    t = Ho(),
    [n, r] = pvt.useState(rCm),
    o;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) ((o = new Set()), (e[0] = o));
  else o = e[0];
  let s = pvt.useRef(o),
    i;
  if (e[1] !== t)
    ((i = (m, g) => {
      let h = `${m}:${g}`;
      if (s.current.has(h)) return;
      (s.current.add(h),
        T(`LSP error: ${m} - ${g}`),
        t((y) => {
          let b = new Set(y.plugins.errors.map(nCm)),
            _ = `generic-error:${m}:${g}`;
          if (b.has(_)) return y;
          return {
            ...y,
            plugins: {
              ...y.plugins,
              errors: [
                ...y.plugins.errors,
                {
                  type: "generic-error",
                  source: m,
                  error: g,
                },
              ],
            },
          };
        }));
    }),
      (e[1] = t),
      (e[2] = i));
  else i = e[2];
  let a = i,
    l;
  if (e[3] !== t)
    ((l = (m) => {
      t((g) => {
        if (g.setupIssues.lspFailedCount === m) return g;
        return (
          VL("LSP", m),
          {
            ...g,
            setupIssues: {
              ...g.setupIssues,
              lspFailedCount: m,
            },
          }
        );
      });
    }),
      (e[3] = t),
      (e[4] = l));
  else l = e[4];
  let c = l,
    u;
  if (e[5] !== a || e[6] !== c)
    ((u = () => {
      if (vl()) return;
      if (WBe()) return;
      let m = kpt();
      if (m.status === "failed") {
        (a("lsp-manager", m.error.message), c(1), r(false));
        return;
      }
      if (m.status === "pending" || m.status === "not-started") return;
      let g = IDe();
      if (g) {
        let h = g.getAllServers(),
          y = 0;
        for (let [b, _] of h)
          if (_.state === "error" && _.lastError) (y++, a(b, _.lastError.message));
        c(y);
      }
    }),
      (e[5] = a),
      (e[6] = c),
      (e[7] = u));
  else u = e[7];
  let d = u;
  Gc(d, n ? tCm : null);
  let p, f;
  if (e[8] !== d || e[9] !== n)
    ((p = () => {
      if (vl() || !n) return;
      d();
    }),
      (f = [d, n]),
      (e[8] = d),
      (e[9] = n),
      (e[10] = p),
      (e[11] = f));
  else ((p = e[10]), (f = e[11]));
  pvt.useEffect(p, f);
}
function nCm(e) {
  if (e.type === "generic-error") return `generic-error:${e.source}:${e.error}`;
  return `${e.type}:${e.source}`;
}
function rCm() {
  return ut("true");
}
var NLc,
  pvt,
  tCm = 5000;
