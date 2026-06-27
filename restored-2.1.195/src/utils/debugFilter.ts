// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fd
// matched 2.1.88 source: src/utils/debugFilter.ts
// class=modified  jaccard=0.2493  score=0.4286  fileCov=0.3735
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module fd]
krs = class krs {
  #e = new Set();
  register(e) {
    let t = xzc(e);
    this.#e.add(t);
    let n = () => {
      this.#e.delete(t);
    };
    return Object.assign(n, {
      [Symbol.dispose]: n,
    });
  }
  async drain() {
    let e = Array.from(this.#e);
    (this.#e.clear(), await Promise.all(e.map(async (t) => t())));
  }
  async [Symbol.asyncDispose]() {
    await this.drain();
  }
  get sizeForTesting() {
    return this.#e.size;
  }
};
Rrs = new krs();
function kzc(e) {
  let t = [],
    n = e.match(/^MCP server ["']([^"']+)["']/);
  if (n && n[1]) (t.push("mcp"), t.push(n[1].toLowerCase()));
  else {
    let s = e.match(/^([^:[]+):/);
    if (s && s[1]) t.push(s[1].trim().toLowerCase());
  }
  let r = e.match(/^\[([^\]]+)]/);
  if (r && r[1]) t.push(r[1].trim().toLowerCase());
  if (e.toLowerCase().includes("1p event:")) t.push("1p");
  let o = e.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (o && o[1]) {
    let s = o[1].trim().toLowerCase();
    if (s.length < 30 && !s.includes(" ")) t.push(s);
  }
  return Array.from(new Set(t));
}
function Rzc(e, t) {
  if (!t) return true;
  if (e.length === 0) return false;
  if (t.isExclusive) return !e.some((n) => t.exclude.includes(n));
  else return e.some((n) => t.include.includes(n));
}
function Drs(e, t) {
  if (!t) return true;
  let n = kzc(e);
  return Rzc(n, t);
}
var Lrs;
