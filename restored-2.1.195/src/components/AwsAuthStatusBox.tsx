// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R6
// matched 2.1.88 source: src/components/AwsAuthStatusBox.tsx
// class=modified  jaccard=0.4587  score=0.5786  fileCov=0.6889
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module R6] deps: Ye, RLn, m0e
((Q7a = R(lt(), 1)), (S9n = R(se(), 1)));
function A9n() {
  let e = Z7a.c(10),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = LD.getInstance().getStatus()), (e[0] = t));
  else t = e[0];
  let [n, r] = E9n.useState(t),
    o,
    s;
  if (e[1] === Symbol.for("react.memo_cache_sentinel"))
    ((o = () => LD.getInstance().subscribe(r)), (s = []), (e[1] = o), (e[2] = s));
  else ((o = e[1]), (s = e[2]));
  if ((E9n.useEffect(o, s), !n.isAuthenticating && !n.error && n.output.length === 0)) return null;
  if (!n.isAuthenticating && !n.error) return null;
  let i;
  if (e[3] !== n.output)
    ((i =
      n.output.length > 0 &&
      KEe.jsx(U, {
        flexDirection: "column",
        children: n.output.slice(-5).map(C7p),
      })),
      (e[3] = n.output),
      (e[4] = i));
  else i = e[4];
  let a;
  if (e[5] !== n.error)
    ((a =
      n.error &&
      KEe.jsx(Va, {
        error: n.error,
      })),
      (e[5] = n.error),
      (e[6] = a));
  else a = e[6];
  let l;
  if (e[7] !== i || e[8] !== a)
    ((l = KEe.jsx(U, {
      marginY: 1,
      children: KEe.jsxs(cA, {
        color: "permission",
        title: "Cloud authentication",
        children: [i, a],
      }),
    })),
      (e[7] = i),
      (e[8] = a),
      (e[9] = l));
  else l = e[9];
  return l;
}
function C7p(e, t) {
  let n = e.match(w7p);
  if (!n)
    return KEe.jsx(
      w,
      {
        dimColor: true,
        children: e,
      },
      t,
    );
  let r = n[0],
    o = n.index ?? 0,
    s = e.slice(0, o),
    i = e.slice(o + r.length);
  return KEe.jsxs(
    w,
    {
      dimColor: true,
      children: [
        s,
        KEe.jsx(xs, {
          url: r,
          children: r,
        }),
        i,
      ],
    },
    t,
  );
}
var Z7a, E9n, KEe, w7p;
