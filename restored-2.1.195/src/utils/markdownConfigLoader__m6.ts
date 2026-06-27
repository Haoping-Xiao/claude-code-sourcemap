// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U6t
// matched 2.1.88 source: src/utils/markdownConfigLoader.ts
// class=modified (alt of src/utils/markdownConfigLoader.ts)  jaccard=0.0163  score=0.0512  fileCov=0.0233
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module U6t] deps: Qi, LMe, gb, Vko, o7n, Uml
b$e = Cn(
  async (e) => {
    if (lc("workflows")) return [...zko()];
    let [t, n] = await Promise.all([Bml(e), n7n()]),
      r = new Set(t.map((a) => a.name)),
      o = n.filter((a) => !r.has(a.name)),
      s = new Set([...r, ...o.map((a) => a.name)]);
    return [...zko().filter((a) => !s.has(a.name)), ...o, ...t];
  },
  (e) => `${G6()}:${e}`,
);
function Fml(e, t, n, r, o, s, i, a, l, c) {
  let u = Rml(e, t, n, r, o, i, a, l, c),
    d = {
      sanitize: (A) => A,
    },
    p = Uko(
      (A) =>
        n({
          type: "progress",
          toolUseID: "workflow_log",
          data: {
            type: "workflow_log",
            message: A,
          },
        }),
      d,
    ),
    f = Object.freeze({
      __proto__: null,
      total: a?.total ?? null,
      spent: HQ(() => a?.getTurnSpent() ?? 0),
      remaining: HQ(() => (a?.total == null ? 1 / 0 : Math.max(0, a.total - a.getTurnSpent()))),
    }),
    m = e.abortController?.signal,
    g = cml(m),
    h = F6t.createContext(
      {
        __proto__: null,
        log: HQ(u.log),
        phase: HQ(u.phase),
        budget: f,
        console: p,
        setTimeout: g.setTimeout,
        clearTimeout: g.clearTimeout,
      },
      {
        codeGeneration: {
          strings: false,
          wasm: false,
        },
      },
    );
  (KYn(h), x6e(h), g.bindVMInvoke(F6t.runInContext("(fn => { fn() })", h)));
  let y = NYn(h),
    b = hml({
      hooks: u,
      budget: f,
      abortSignal: m,
      timers: g,
      resolveWorkflow: B6t,
      getAllWorkflows: b$e,
      intakeClone: y,
    }),
    _ = BYn(h);
  for (let [A, v] of [
    ["agent", u.agent],
    ["parallel", u.parallel],
    ["pipeline", u.pipeline],
    ["workflow", b],
  ])
    Object.defineProperty(h, A, {
      value: _(FYn(v)),
      writable: true,
      enumerable: true,
      configurable: true,
    });
  {
    let A = s === void 0 ? void 0 : JSON.stringify(s);
    Object.defineProperty(h, "args", {
      value: A === void 0 ? void 0 : F6t.runInContext(`JSON.parse(${JSON.stringify(A)})`, h),
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
  let S = GYn(h);
  return (
    (d.sanitize = S.sanitize),
    u.bindVMAwait({
      settle: z_t(h),
      call: rml(h),
      clone: y,
      sanitize: S.sanitize,
      snapshot: S.snapshot,
      getProp: S.getProp,
    }),
    {
      vmContext: h,
      hooks: u,
    }
  );
}
var F6t;
