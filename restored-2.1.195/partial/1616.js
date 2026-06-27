// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module W4r
// matched 2.1.88 source: node_modules/@anthropic-ai/bedrock-sdk/internal/headers.mjs
// class=partial  jaccard=0.1406  score=0.2044  fileCov=0.3108
// note: low-confidence suggestion: node_modules/@anthropic-ai/bedrock-sdk/internal/headers.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var W4r = E(() => {
  mMt();
  Mdi = Symbol.for("brand.privateNullableHeaders");
});
function Odi(e) {
  return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var $di,
  sgd = (e = Odi) => function (n, ...r) {
    if (n.length === 1) return n[0];
    let o = !1,
      s = [],
      i = n.reduce((u, d, p) => {
        if (/[?#]/.test(d)) o = !0;
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