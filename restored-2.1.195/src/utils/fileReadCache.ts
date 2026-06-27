// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dpe
// matched 2.1.88 source: src/utils/fileReadCache.ts
// class=modified  jaccard=0.5571  score=1  fileCov=0.5571
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
class Ael {
  cache = new Map();
  maxCacheSize = 1000;
  readFile(e) {
    let t = qt(),
      n;
    try {
      n = t.statSync(e);
    } catch (a) {
      throw (this.cache.delete(e), a);
    }
    let r = e,
      o = this.cache.get(r);
    if (o && o.mtime === n.mtimeMs)
      return {
        content: o.content,
        encoding: o.encoding,
      };
    let s = Kpn(e),
      i = t
        .readFileSync(e, {
          encoding: s,
        })
        .replaceAll(
          `\r
`,
          `
`,
        );
    if (
      (this.cache.set(r, {
        content: i,
        encoding: s,
        mtime: n.mtimeMs,
      }),
      this.cache.size > this.maxCacheSize)
    ) {
      let a = this.cache.keys().next().value;
      if (a) this.cache.delete(a);
    }
    return {
      content: i,
      encoding: s,
    };
  }
  clear() {
    this.cache.clear();
  }
  invalidate(e) {
    this.cache.delete(e);
  }
  getStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys()),
    };
  }
}
function dvo(e) {
  let { content: t } = wZp.readFile(e);
  return t;
}
var wZp;
