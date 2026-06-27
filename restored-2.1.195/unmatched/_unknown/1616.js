// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W4r
// matched 2.1.88 source: src/utils/bash/ParsedCommand.ts
// class=new  jaccard=0.0246  score=0.1985  fileCov=0.0273
// note: nearest: src/utils/bash/ParsedCommand.ts (0.0246); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module W4r] deps: @anthropic-ai/bedrock-sdk/internal/utils/log.mjs
Mdi = Symbol.for("brand.privateNullableHeaders");
function Odi(e) {
  return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var $di,
  sgd = (e = Odi) => function (n, ...r) {
    if (n.length === 1) return n[0];
    let o = false,
      s = [],
      i = n.reduce((u, d, p) => {
        if (/[?#]/.test(d)) o = true;
        let f = r[p],
          m = (o ? encodeURIComponent : e)("" + f);
        if (p !== r.length && (f == null || typeof f === "object" && f.toString === Object.getPrototypeOf(Object.getPrototypeOf(f.hasOwnProperty ?? $di) ?? $di)?.toString)) m = f + "", s.push({
          start: u.length + d.length,
          length: m.length,
          error: `Value of type ${Object.prototype.toString.call(f).slice(8, -1)} is not a valid path parameter`
        });
        return u + d + (p === r.length ? "" : m);
      }, ""),
      a = i.split(/[?#]/, 1)[0],
      l = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
      c;
    while ((c = l.exec(a)) !== null) s.push({
      start: c.index,
      length: c[0].length,
      error: `Value "${c[0]}" can't be safely passed as a path parameter`
    });
    if (s.sort((u, d) => u.start - d.start), s.length > 0) {
      let u = 0,
        d = s.reduce((p, f) => {
          let m = " ".repeat(f.start - u),
            g = "^".repeat(f.length);
          return u = f.start + f.length, p + m + g;
        }, "");
      throw new ui(`Path parameters result in path with invalid segments:
${s.map(p => p.error).join(`
`)}
${i}
${d}`);
    }
    return i;
  },
  q4r;