// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IJo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var IJo = Q((azH, qjc) => {
  var XDm = /(\w+)=("[^"]*")/g;
  qjc.exports = e => {
    let t = {};
    try {
      while (XDm.exec(e) !== null) if (RegExp.$1 && RegExp.$2) t[RegExp.$1] = RegExp.$2.slice(1, -1);
    } catch (n) {}
    return t;
  };
});