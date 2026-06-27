// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T0c
// matched 2.1.88 source: src/hooks/useIDEIntegration.tsx
// class=modified  jaccard=0.3967  score=0.7944  fileCov=0.4421
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module T0c] deps: azo, EW, Ye, HVt, uo, ii, LL, je, co, DE, __, Hoe, Jt, qJ, cAe, hN, J_t, hP, xF, bk, Mp, Sj, YI, sbt
((cYo = require("crypto")), (ONe = R(rt(), 1)));
function C0c(e) {
  let t = v0c.c(7),
    {
      autoConnectIdeFlag: n,
      ideToInstallExtension: r,
      setDynamicMcpConfig: o,
      setShowIdeOnboarding: s,
      setIDEInstallationState: i,
    } = e,
    a,
    l;
  if (t[0] !== n || t[1] !== r || t[2] !== o || t[3] !== i || t[4] !== s)
    ((a = () => {
      if (vl()) return;
      if (Js() && !r) return;
      let c = function (p) {
          if (!p) return;
          if (!Kdt(Boolean(n || r))) return;
          o((m) => {
            if (m?.ide) return m;
            return {
              ...m,
              ide: {
                type: p.url.startsWith("ws:") ? "ws-ide" : "sse-ide",
                url: p.url,
                ideName: p.name,
                authToken: p.authToken,
                ideRunningInWindows: p.ideRunningInWindows,
                scope: "dynamic",
              },
            };
          });
        },
        u = Sl();
      return (
        Axa(
          c,
          r,
          () => s(true),
          (d) => i(d),
          u.signal,
        ),
        () => {
          (u.abort(), dFn());
        }
      );
    }),
      (l = [n, r, o, s, i]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = i),
      (t[4] = s),
      (t[5] = a),
      (t[6] = l));
  else ((a = t[5]), (l = t[6]));
  w0c.useEffect(a, l);
}
var v0c, w0c;
