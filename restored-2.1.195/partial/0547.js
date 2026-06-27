// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wxr
// matched 2.1.88 source: node_modules/axios/lib/helpers/formDataToStream.js
// class=partial  jaccard=0.1241  score=0.2699  fileCov=0.1869
// note: low-confidence suggestion: node_modules/axios/lib/helpers/formDataToStream.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Wxr = E(() => {
  ({
    asyncIterator: Gys
  } = Symbol), qdn = gSu;
});
class Vys {
  constructor(e, t) {
    let {
        escapeName: n
      } = this.constructor,
      r = or.isString(t),
      o = `Content-Disposition: form-data; name="${n(e)}"${!r && t.name ? `; filename="${n(t.name)}"` : ""}${bFe}`;
    if (r) t = B0t.encode(String(t).replace(/\r?\n|\r\n?/g, bFe));else {
      let s = String(t.type || "application/octet-stream").replace(/[\r\n]/g, "");
      o += `Content-Type: ${s}${bFe}`;
    }
    this.headers = B0t.encode(o + bFe), this.contentLength = r ? t.byteLength : t.size, this.size = this.headers.byteLength + this.contentLength + _Su, this.name = e, this.value = t;
  }
  async *encode() {
    yield this.headers;
    let {
      value: e
    } = this;
    if (or.isTypedArray(e)) yield e;else yield* qdn(e);
    yield ySu;
  }
  static escapeName(e) {
    return String(e).replace(/[\r\n"]/g, t => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[t]);
  }
}
var Wys,
  qys,
  hSu,
  B0t,
  bFe = `\r
`,
  ySu,
  _Su = 2,
  bSu = (e, t, n) => {
    let {
      tag: r = "form-data-boundary",
      size: o = 25,
      boundary: s = r + "-" + D_.generateString(o, hSu)
    } = n || {};
    if (!or.isFormData(e)) throw TypeError("FormData instance required");
    if (s.length < 1 || s.length > 70) throw Error("boundary must be 10-70 characters long");
    let i = B0t.encode("--" + s + bFe),
      a = B0t.encode("--" + s + "--" + bFe),
      l = a.byteLength,
      c = Array.from(e.entries()).map(([d, p]) => {
        let f = new Vys(d, p);
        return l += f.size, f;
      });
    l += i.byteLength * c.length, l = or.toFiniteNumber(l);
    let u = {
      "Content-Type": `multipart/form-data; boundary=${s}`
    };
    if (Number.isFinite(l)) u["Content-Length"] = l;
    return t && t(u), qys.Readable.from(async function* () {
      for (let d of c) yield i, yield* d.encode();
      yield a;
    }());
  },
  zys;