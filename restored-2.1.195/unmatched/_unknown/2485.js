// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $qi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var $qi = Q((voy, Mqi) => {
  var U5d = e => {
    if (e.length < 64) return null;
    if (e.readUInt32BE(0) !== 2135247942) return null;
    if (e.readUInt8(4) !== 2) return null;
    if (e.readUInt8(5) !== 1) return null;
    let t = e.readUInt32LE(32),
      n = e.readUInt16LE(54),
      r = e.readUInt16LE(56);
    for (let o = 0; o < r; o++) {
      let s = t + o * n;
      if (e.readUInt32LE(s) === 3) {
        let a = e.readUInt32LE(s + 8),
          l = e.readUInt32LE(s + 32);
        return e.subarray(a, a + l).toString().replace(/\0.*$/g, "");
      }
    }
    return null;
  };
  Mqi.exports = {
    interpreterPath: U5d
  };
});