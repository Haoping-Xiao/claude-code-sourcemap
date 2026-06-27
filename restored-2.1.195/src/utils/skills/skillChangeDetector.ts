// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uAc
// matched 2.1.88 source: src/utils/skills/skillChangeDetector.ts
// class=modified  jaccard=0.4369  score=0.6102  fileCov=0.6061
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var uAc = E(() => {
  dre();
  cAc = R(rt(), 1);
});
async function cym() {
  let e = await yze(rc()),
    t = new Map();
  for (let n of e) t.set(n.name, n.type === "prompt" ? (n.contentHash ?? "") : "");
  return t;
}
function uym(e) {
  let t = e?.stabilityThreshold ?? nym,
    n = e?.pollInterval ?? rym,
    r = e?.reloadDebounce ?? oym,
    o = e?.chokidarInterval ?? sym,
    s = e?.getFingerprint ?? cym,
    i = e?.now ?? Date.now,
    a = e?.lastInteractionTime ?? Ex,
    l = Mi(),
    c = rF.subscribe(() => l.emit()),
    u = null,
    d = null,
    p = null,
    f = !1,
    m = [],
    g = new Set(),
    h = null,
    y = !1,
    b = !1,
    _ = null,
    S = null;
  async function A() {
    if (y || b) return;
    if (((y = !0), !_))
      _ = JTl(() => {
        (w5(), l.emit());
      });
    if (((m = await dym()), m.length === 0)) return;
    ((h = await s().catch(() => null)),
      T(`Watching for changes in skill/command directories: ${m.join(", ")}...`),
      (u = v(o)));
    let D = u;
    if ((await new Promise((P) => D.once("ready", () => P())), dAc))
      ((p = setInterval(C, lym)), p.unref?.());
    S = Ci(x);
  }
  function v(D) {
    let P = S1.watch(m, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 2,
      awaitWriteFinish: {
        stabilityThreshold: t,
        pollInterval: n,
      },
      ignored: (O, L) => {
        if (L && !L.isFile() && !L.isDirectory() && !L.isSymbolicLink()) return !0;
        if (O.split(/[/\\]/).some((M) => M === ".git")) return !0;
        if (L?.isFile()) return !O.endsWith(".md");
        return !1;
      },
      ignorePermissionErrors: !0,
      usePolling: dAc,
      interval: D,
      binaryInterval: D,
      atomic: !0,
    });
    return (
      P.on("add", I),
      P.on("change", I),
      P.on("unlink", I),
      P.on("error", (O) =>
        T(`[skills] watcher error: ${be(O)}`, {
          level: "warn",
        }),
      ),
      P
    );
  }
  function C() {
    if (b || !u) return;
    let D = i() - a() > aym;
    if (D === f) return;
    f = D;
    let P = D ? iym : o;
    if (
      (T(`[skills] ${D ? "idle" : "active"} \u2014 switching poll interval to ${P}ms`),
      u.close(),
      (u = v(P)),
      !D)
    )
      k(Gzo);
  }
  function x() {
    if (((b = !0), S)) (S(), (S = null));
    if (_) (_(), (_ = null));
    if (p) (clearInterval(p), (p = null));
    let D = Promise.resolve();
    if (u) ((D = u.close()), (u = null));
    if (d) (clearTimeout(d), (d = null));
    return (g.clear(), c(), l.clear(), D);
  }
  function I(D) {
    (T(`Detected skill change: ${D}`),
      G("tengu_skill_file_changed", {
        source: We("chokidar"),
      }),
      k(D));
  }
  function k(D) {
    if ((g.add(D), d)) clearTimeout(d);
    d = setTimeout(async () => {
      d = null;
      let P = [...g];
      g.clear();
      let O = P.length === 1 && P[0] === Gzo;
      if (!O) {
        let N = P.find(($) => $ !== Gzo) ?? P[0],
          B = await vRe("skills", N);
        if (act(B)) {
          T(`ConfigChange hook blocked skill reload (${P.length} paths)`);
          return;
        }
      }
      bze();
      let L = await s().catch(() => null);
      if (L === null) {
        (W0(), wq(), l.emit());
        return;
      }
      let M = h !== null && L.size === h.size && [...h].every(([N, B]) => L.get(N) === B);
      if (M && O) {
        wq();
        return;
      }
      if ((W0(), wq(), M))
        T(`[skills] ${P.length} fs event(s) but skill list unchanged \u2014 skipping re-announce`);
      else {
        if (h !== null) {
          let N = [...h].filter(([B, $]) => L.get(B) !== $).map(([B]) => B);
          if (N.length > 0) i$o(N);
        }
        h = L;
      }
      l.emit();
    }, r);
  }
  return {
    initialize: A,
    dispose: x,
    [Symbol.asyncDispose]: x,
    subscribe: l.subscribe,
    _checkIdleTransitionForTest: C,
  };
}
async function dym() {
  let e = qt(),
    t = [],
    n = _ze("userSettings", "skills");
  if (n)
    try {
      (await e.stat(n), t.push(n));
    } catch {}
  let r = _ze("userSettings", "commands");
  if (r)
    try {
      (await e.stat(r), t.push(r));
    } catch {}
  let o = _ze("projectSettings", "skills");
  if (o)
    try {
      let l = zTt.resolve(o);
      (await e.stat(l), t.push(l));
    } catch {}
  let s = _ze("projectSettings", "commands");
  if (s)
    try {
      let l = zTt.resolve(s);
      (await e.stat(l), t.push(l));
    } catch {}
  let i = _ze("userSettings", "agents");
  if (i)
    try {
      (await e.stat(i), t.push(i));
    } catch {}
  let a = _ze("projectSettings", "agents");
  if (a)
    try {
      let l = zTt.resolve(a);
      (await e.stat(l), t.push(l));
    } catch {}
  for (let l of c0()) {
    let c = zTt.join(l, ".claude", "skills");
    try {
      (await e.stat(c), t.push(c));
    } catch {}
  }
  return t;
}
var zTt,
  nym = 1000,
  rym = 500,
  oym = 300,
  sym = 2000,
  iym = 30000,
  aym = 60000,
  Gzo = "<skill-watcher-idle-wake>",
  lym = 1e4,
  dAc = !0,
  KTt;
