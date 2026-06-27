// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iu
// matched 2.1.88 source: node_modules/chalk/source/index.js
// class=partial  jaccard=0.1868  score=0.3715  fileCov=0.2732
// note: low-confidence suggestion: node_modules/chalk/source/index.js; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var iu = E(() => {
  gbs();
  bbs();
  ({
    stdout: Abs,
    stderr: Hbs
  } = _bs), gkr = Symbol("GENERATOR"), LZe = Symbol("STYLER"), V0t = Symbol("IS_EMPTY"), Tbs = ["ansi", "ansi", "ansi256", "ansi16m"], DZe = Object.create(null);
  Object.setPrototypeOf(z0t.prototype, Function.prototype);
  for (let [e, t] of Object.entries($ee)) DZe[e] = {
    get() {
      let n = lpn(this, ykr(t.open, t.close, this[LZe]), this[V0t]);
      return Object.defineProperty(this, e, {
        value: n
      }), n;
    }
  };
  DZe.visible = {
    get() {
      let e = lpn(this, this[LZe], true);
      return Object.defineProperty(this, "visible", {
        value: e
      }), e;
    }
  };
  Z0u = ["rgb", "hex", "ansi256"];
  for (let e of Z0u) {
    DZe[e] = {
      get() {
        let {
          level: n
        } = this;
        return function (...r) {
          let o = ykr(hkr(e, Tbs[n], "color", ...r), $ee.color.close, this[LZe]);
          return lpn(this, o, this[V0t]);
        };
      }
    };
    let t = "bg" + e[0].toUpperCase() + e.slice(1);
    DZe[t] = {
      get() {
        let {
          level: n
        } = this;
        return function (...r) {
          let o = ykr(hkr(e, Tbs[n], "bgColor", ...r), $ee.bgColor.close, this[LZe]);
          return lpn(this, o, this[V0t]);
        };
      }
    };
  }
  eRu = Object.defineProperties(() => {}, {
    ...DZe,
    level: {
      enumerable: true,
      get() {
        return this[gkr].level;
      },
      set(e) {
        this[gkr].level = e;
      }
    }
  });
  Object.defineProperties(z0t.prototype, DZe);
  nRu = z0t(), Lig = z0t({
    level: Hbs ? Hbs.level : 0
  }), wt = nRu;
});
function rRu(e, t, n, r) {
  var o = -1,
    s = e == null ? 0 : e.length;
  if (r && s) n = e[++o];
  while (++o < s) n = t(n, e[o], o, e);
  return n;
}
var wbs;