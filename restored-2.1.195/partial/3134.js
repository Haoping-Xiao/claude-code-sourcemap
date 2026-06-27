// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hEa
// matched 2.1.88 source: node_modules/@inquirer/core/dist/esm/lib/create-prompt.mjs
// class=partial  jaccard=0.2198  score=1  fileCov=0.2198
// note: low-confidence suggestion: node_modules/@inquirer/core/dist/esm/lib/create-prompt.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hEa = E(() => {
  xco = class xco extends Promise {
    static withResolver() {
      let e, t;
      return {
        promise: new Promise((r, o) => {
          e = r, t = o;
        }),
        resolve: e,
        reject: t
      };
    }
  };
});
function G5e(e) {
  return (n, r = {}) => {
    let {
        input: o = process.stdin,
        signal: s
      } = r,
      i = new Set(),
      a = new bEa.default();
    a.pipe(r.output ?? process.stdout);
    let l = yEa.createInterface({
        terminal: !0,
        input: o,
        output: a
      }),
      c = new LBn(l),
      {
        promise: u,
        resolve: d,
        reject: p
      } = xco.withResolver(),
      f = () => p(new pco());
    if (s) {
      let g = () => p(new dco({
        cause: s.reason
      }));
      if (s.aborted) return g(), Object.assign(u, {
        cancel: f
      });
      s.addEventListener("abort", g), i.add(() => s.removeEventListener("abort", g));
    }
    i.add(jee((g, h) => {
      p(new fco(`User force closed the prompt with ${g} ${h}`));
    }));
    let m = () => c.checkCursorPos();
    return l.input.on("keypress", m), i.add(() => l.input.removeListener("keypress", m)), uSa(l, g => {
      let h = _Ea.AsyncResource.bind(() => N5e.clearAll());
      return l.on("close", h), i.add(() => l.removeListener("close", h)), g(() => {
        try {
          let y = e(n, S => {
              setImmediate(() => d(S));
            }),
            [b, _] = typeof y === "string" ? [y] : y;
          c.render(b, _), N5e.run();
        } catch (y) {
          p(y);
        }
      }), Object.assign(u.then(y => (N5e.clearAll(), y), y => {
        throw N5e.clearAll(), y;
      }).finally(() => {
        i.forEach(y => y()), c.done({
          clearContent: Boolean(r?.clearPromptOnDone)
        }), a.end();
      }).then(() => u), {
        cancel: f
      });
    });
  };
}
var yEa, _Ea, bEa;