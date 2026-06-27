// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module D6e
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.005  score=0.1982  fileCov=0.0051
// note: nearest: src/cli/print.ts (0.005); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var D6e = E(() => {
  ft();
  je();
  y_();
  Jt();
  h$e = require("fs/promises"), L6e = require("path");
});
function Eml(e) {
  let t = new Map(),
    n = new Map();
  for (let r of e) if (r.type === "result") t.set(r.key, r);else if (r.type === "started") {
    let o = n.get(r.key);
    if (o) o.push(r);else n.set(r.key, [r]);
  }
  return {
    results: t,
    started: n
  };
}
function Kdf(e) {
  if (!e) return "{}";
  let t = {},
    n = ["schema", "model", "effort", "isolation", "agentType"];
  for (let o of n) {
    let s = e[o];
    if (s === void 0 || typeof s === "function") continue;
    t[o] = s;
  }
  let r = o => {
    if (typeof o === "function") return;
    if (Array.isArray(o)) {
      let s = [],
        i = o.length,
        a = Number.isSafeInteger(i) ? i : 0;
      for (let l = 0; l < a; l++) s[l] = r(o[l]);
      return s;
    }
    if (o && typeof o === "object") {
      let s = {};
      for (let i of Object.keys(o).sort()) {
        if (i === "__proto__") continue;
        s[i] = r(o[i]);
      }
      return s;
    }
    return o;
  };
  return JSON.stringify(r(t));
}
function Hml(e, t, n) {
  let r = Aml.createHash("sha256").update(n).update("\x00").update(e).update("\x00").update(Kdf(t)).digest("hex");
  return `${zdf}:${r}`;
}
class Fko {
  path;
  dirReady = false;
  constructor(e) {
    this.path = e7n.join(Foe(e), "journal.jsonl");
  }
  async load() {
    let e;
    try {
      e = await Y_t.readFile(this.path, "utf8");
    } catch (n) {
      if (wn(n)) return Eml([]);
      throw n;
    }
    let t = [];
    for (let n of e.split(`
`)) {
      if (!n) continue;
      try {
        t.push(JSON.parse(n));
      } catch (r) {
        T(`LocalFileJournal: skipping unparseable line in ${this.path}: ${r}`);
      }
    }
    return Eml(t);
  }
  async append(e) {
    if (!this.dirReady) await Y_t.mkdir(e7n.dirname(this.path), {
      recursive: true
    }), this.dirReady = true;
    await Y_t.appendFile(this.path, `${JSON.stringify(e)}
`, "utf8");
  }
}
var Aml,
  Y_t,
  e7n,
  zdf = "v2";