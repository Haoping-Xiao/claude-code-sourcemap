// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vno
// matched 2.1.88 source: node_modules/node-forge/lib/util.js
// class=new  jaccard=0.0393  score=0.2184  fileCov=0.0458
// note: nearest: node_modules/node-forge/lib/util.js (0.0393); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var vno = E(() => {
  Wlt();
  Vlt();
});
function XQi(e, t) {
  let n = e.values.find(r => r.name === t);
  if (!n) throw Error(`cannot parse ${e} default value: ${t}`);
  return n.number;
}
function JQi(e, t) {
  switch (e) {
    case pr.STRING:
      return t;
    case pr.BYTES:
      {
        let n = xZd(t);
        if (n === false) throw Error(`cannot parse ${pr[e]} default value: ${t}`);
        return n;
      }
    case pr.INT64:
    case pr.SFIXED64:
    case pr.SINT64:
      return U_.parse(t);
    case pr.UINT64:
    case pr.FIXED64:
      return U_.uParse(t);
    case pr.DOUBLE:
    case pr.FLOAT:
      switch (t) {
        case "inf":
          return Number.POSITIVE_INFINITY;
        case "-inf":
          return Number.NEGATIVE_INFINITY;
        case "nan":
          return Number.NaN;
        default:
          return parseFloat(t);
      }
    case pr.BOOL:
      return t === "true";
    case pr.INT32:
    case pr.UINT32:
    case pr.SINT32:
    case pr.FIXED32:
    case pr.SFIXED32:
      return parseInt(t, 10);
  }
}
function xZd(e) {
  let t = [],
    n = {
      tail: e,
      c: "",
      next() {
        if (this.tail.length == 0) return false;
        return this.c = this.tail[0], this.tail = this.tail.substring(1), true;
      },
      take(r) {
        if (this.tail.length >= r) {
          let o = this.tail.substring(0, r);
          return this.tail = this.tail.substring(r), o;
        }
        return false;
      }
    };
  while (n.next()) switch (n.c) {
    case "\\":
      if (n.next()) switch (n.c) {
        case "\\":
          t.push(n.c.charCodeAt(0));
          break;
        case "b":
          t.push(8);
          break;
        case "f":
          t.push(12);
          break;
        case "n":
          t.push(10);
          break;
        case "r":
          t.push(13);
          break;
        case "t":
          t.push(9);
          break;
        case "v":
          t.push(11);
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
          {
            let r = n.c,
              o = n.take(2);
            if (o === false) return false;
            let s = parseInt(r + o, 8);
            if (Number.isNaN(s)) return false;
            t.push(s);
            break;
          }
        case "x":
          {
            let r = n.c,
              o = n.take(2);
            if (o === false) return false;
            let s = parseInt(r + o, 16);
            if (Number.isNaN(s)) return false;
            t.push(s);
            break;
          }
        case "u":
          {
            let r = n.c,
              o = n.take(4);
            if (o === false) return false;
            let s = parseInt(r + o, 16);
            if (Number.isNaN(s)) return false;
            let i = new Uint8Array(4);
            new DataView(i.buffer).setInt32(0, s, true), t.push(i[0], i[1], i[2], i[3]);
            break;
          }
        case "U":
          {
            let r = n.c,
              o = n.take(8);
            if (o === false) return false;
            let s = U_.uEnc(r + o),
              i = new Uint8Array(8),
              a = new DataView(i.buffer);
            a.setInt32(0, s.lo, true), a.setInt32(4, s.hi, true), t.push(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7]);
            break;
          }
      }
      break;
    default:
      t.push(n.c.charCodeAt(0));
  }
  return new Uint8Array(t);
}