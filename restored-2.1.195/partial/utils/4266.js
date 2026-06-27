// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Uoe
// matched 2.1.88 source: node_modules/lodash-es/_baseUnset.js
// class=partial  jaccard=0.1323  score=0.1586  fileCov=0.4443
// note: low-confidence suggestion: node_modules/lodash-es/_baseUnset.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Uoe = E(() => {
  $7();
  Fdf = new Set(["__proto__", "constructor", "prototype"]);
});
function Uko(e, t = {
  sanitize: n => n
}) {
  function n(o) {
    return o.map(s => {
      if (typeof s === "string") return s;
      if (s === null || typeof s !== "object" && typeof s !== "function") try {
        return De(s);
      } catch {
        return `[${typeof s}]`;
      }
      try {
        return De(t.sanitize(s));
      } catch (i) {
        let a = false;
        try {
          let l = i?.message;
          a = typeof l === "string" && l.includes("exceeds the maximum");
        } catch {}
        return a ? `[${typeof s}: array exceeds the ${f$e}-element logging cap]` : `[${typeof s}]`;
      }
    }).join(" ");
  }
  let r = o => HQ((...s) => e(o + n(s)));
  return {
    __proto__: null,
    log: r(""),
    info: r(""),
    debug: r(""),
    error: r("[error] "),
    warn: r("[warn] ")
  };
}
function hml(e) {
  let t = new Map();
  return m$e(async function (r, o) {
    if (e.abortSignal?.aborted) return new Promise(() => {});
    let s = e.intakeClone(r),
      i,
      a;
    if (typeof s === "string") {
      let g = await e.resolveWorkflow(s, $t());
      if (!g) {
        let y = (await e.getAllWorkflows($t())).map(b => b.name).join(", ");
        throw Error(`workflow('${s}'): no workflow with that name. Available: ${y || "(none)"}`);
      }
      let h = ZI(g.script);
      if ("error" in h) throw Error(`workflow('${s}'): ${h.error}`);
      a = g.name, i = h.scriptBody;
    } else if (s && typeof s === "object" && "scriptPath" in s && typeof s.scriptPath === "string") {
      let g = await U3e(s.scriptPath);
      if ("error" in g) throw Error(`workflow({scriptPath: '${s.scriptPath}'}): ${g.error}`);
      let h = ZI(g.script);
      if ("error" in h) throw Error(`workflow({scriptPath: '${s.scriptPath}'}): ${h.error}`);
      a = h.meta.name, i = h.scriptBody;
    } else throw TypeError("workflow() expects a workflow name (string) or {scriptPath: string}");
    let l = K_t(i);
    if (!l.ok) throw Error(`workflow('${a}'): ${l.error}`);
    let c = (t.get(a) ?? 0) + 1;
    t.set(a, c);
    let u = `${e2e} ${a}${c > 1 ? ` #${c}` : ""}`;
    e.hooks.resolvePhase(u, "child"), e.hooks.log(`${e2e} running dynamic workflow ${a}`);
    let d = `[${a}] `,
      p,
      f = {
        sanitize: g => g
      },
      m = {
        __proto__: null,
        budget: e.budget,
        setTimeout: e.timers.setTimeout,
        clearTimeout: e.timers.clearTimeout,
        phase: HQ(g => {}),
        log: HQ(g => e.hooks.log(d + iml(g))),
        console: Uko(g => e.hooks.log(d + g), f)
      };
    try {
      let g = ZYn.createContext(m, {
        codeGeneration: {
          strings: false,
          wasm: false
        }
      });
      KYn(g), x6e(g), p = OYn(g);
      let h = z_t(g),
        y = NYn(g),
        b = GYn(g);
      f.sanitize = b.sanitize;
      let _ = ZYn.runInContext('(o => { try { const s = o && typeof o === "object" ? o.schema : undefined; return s && typeof s === "object" ? s : undefined } catch { return undefined } })', g),
        S = new WeakMap(),
        A = {
          agent: (I, k) => {
            let D = y(k),
              P = _(k);
            if (D && typeof D === "object" && P) {
              let O = S.get(P);
              if (O !== void 0) D.schema = O;else if (D.schema !== void 0) S.set(P, D.schema);
            }
            return e.hooks.agent(I, {
              ...D,
              phase: u
            });
          },
          parallel: e.hooks.parallel,
          pipeline: e.hooks.pipeline,
          workflow: () => Promise.reject(Error("workflow() cannot be called from within a child workflow \u2014 nesting is limited to one level. Inline the inner script or call its agents directly."))
        },
        v = BYn(g);
      for (let [I, k] of Object.entries(A)) Object.defineProperty(g, I, {
        value: v(FYn(k)),
        writable: true,
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(g, "args", {
        value: o === void 0 ? void 0 : y(o),
        writable: true,
        enumerable: true,
        configurable: true
      });
      let C = await h(l.vmScript.runInContext(g, {
          timeout: YYn
        })),
        x = y(C.v);
      return e.hooks.log(`${e2e} ${a} done`), x;
    } catch (g) {
      let h, y, b;
      if (p) ({
        name: h,
        message: y,
        stack: b
      } = p(g));else h = g instanceof Error ? g.name : "Error", y = g instanceof Error ? g.message : "", b = g instanceof Error ? g.stack : void 0;
      let _;
      if (b) {
        let S = b.split(`
`),
          A = S.slice(1).filter(v => v.trim().startsWith("at "));
        _ = A.length <= 5 ? b : [S[0] ?? "", ...A.slice(0, 5)].join(`
`);
      } else _ = y ? `${h}: ${y}` : h;
      throw e.hooks.recordFailure(`${u}: ${_}`), e.hooks.log(`${e2e} ${a} failed: ${_}`), efe(_, h, b || void 0);
    }
  });
}
var ZYn;