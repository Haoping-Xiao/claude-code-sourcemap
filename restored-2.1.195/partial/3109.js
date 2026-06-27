// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yco
// matched 2.1.88 source: node_modules/@inquirer/core/dist/esm/lib/use-prefix.mjs
// class=partial  jaccard=0.1999  score=1  fileCov=0.1999
// note: low-confidence suggestion: node_modules/@inquirer/core/dist/esm/lib/use-prefix.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var yco = E(() => {
  hSa();
});
function F5e({
  status: e = "idle",
  theme: t
}) {
  let [n, r] = Q1(!1),
    [o, s] = Q1(0),
    {
      prefix: i,
      spinner: a
    } = RSe(t);
  if (U5e(() => {
    if (e === "loading") {
      let c,
        u = -1,
        d = setTimeout(_co.AsyncResource.bind(() => {
          r(!0), c = setInterval(_co.AsyncResource.bind(() => {
            u = u + 1, s(u % a.frames.length);
          }), a.interval);
        }), 300);
      return () => {
        clearTimeout(d), clearInterval(c);
      };
    } else r(!1);
  }, [e]), n) return a.frames[o];
  return typeof i === "string" ? i : i[e === "loading" ? "idle" : e];
}
var _co;