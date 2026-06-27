// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m8o
// matched 2.1.88 source: src/context/stats.tsx
// class=modified  jaccard=0.4307  score=0.9324  fileCov=0.4446
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var m8o = E(() => {
  ((Zfc = R(lt(), 1)), (Tur = R(rt(), 1)), (rmc = R(se(), 1)), (emc = Tur.createContext(void 0)));
});
function g8o(e, t) {
  let n = (t / 100) * (e.length - 1),
    r = Math.floor(n),
    o = Math.ceil(n);
  if (r === o) return e[r];
  return e[r] + (e[o] - e[r]) * (n - r);
}
function h8o() {
  let e = new Map(),
    t = new Map(),
    n = new Map();
  return {
    increment(r, o = 1) {
      e.set(r, (e.get(r) ?? 0) + o);
    },
    set(r, o) {
      e.set(r, o);
    },
    observe(r, o) {
      let s = t.get(r);
      if (!s)
        ((s = {
          reservoir: [],
          count: 0,
          sum: 0,
          min: o,
          max: o,
        }),
          t.set(r, s));
      if ((s.count++, (s.sum += o), o < s.min)) s.min = o;
      if (o > s.max) s.max = o;
      if (s.reservoir.length < omc) s.reservoir.push(o);
      else {
        let i = Math.floor(Math.random() * s.count);
        if (i < omc) s.reservoir[i] = o;
      }
    },
    add(r, o) {
      let s = n.get(r);
      if (!s) ((s = new Set()), n.set(r, s));
      s.add(o);
    },
    getAll() {
      let r = Object.fromEntries(e);
      for (let [o, s] of t) {
        if (s.count === 0) continue;
        ((r[`${o}_count`] = s.count),
          (r[`${o}_min`] = s.min),
          (r[`${o}_max`] = s.max),
          (r[`${o}_avg`] = s.sum / s.count));
        let i = [...s.reservoir].sort((a, l) => a - l);
        ((r[`${o}_p50`] = g8o(i, 50)), (r[`${o}_p95`] = g8o(i, 95)), (r[`${o}_p99`] = g8o(i, 99)));
      }
      for (let [o, s] of n) r[o] = s.size;
      return r;
    },
  };
}
function imc(e) {
  let t = smc.c(7),
    { store: n, children: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((o = h8o()), (t[0] = o));
  else o = t[0];
  let i = n ?? o,
    a,
    l;
  if (t[1] !== i)
    ((a = () => {
      let u = () => {
        let d = i.getAll();
        if (Object.keys(d).length > 0)
          pH((p) => ({
            ...p,
            lastSessionMetrics: d,
          }));
      };
      return (
        process.on("exit", u),
        () => {
          process.off("exit", u);
        }
      );
    }),
      (l = [i]),
      (t[1] = i),
      (t[2] = a),
      (t[3] = l));
  else ((a = t[2]), (l = t[3]));
  ten.useEffect(a, l);
  let c;
  if (t[4] !== r || t[5] !== i)
    ((c = amc.jsx(Ecm.Provider, {
      value: i,
      children: r,
    })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c));
  else c = t[6];
  return c;
}
var smc,
  ten,
  amc,
  omc = 1024,
  Ecm;
