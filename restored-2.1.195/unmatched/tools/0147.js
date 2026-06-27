// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zsn
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> tools; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Zsn = E(() => {
  tIt();
  uee();
  mos();
  hos();
  _os();
});
class swe {
  constructor() {
    OV.set(this, void 0), NV.set(this, void 0), Aa(this, OV, new Uint8Array(), "f"), Aa(this, NV, null, "f");
  }
  decode(e) {
    if (e == null) return [];
    let t = e instanceof ArrayBuffer ? new Uint8Array(e) : typeof e === "string" ? vJe(e) : e;
    Aa(this, OV, ios([no(this, OV, "f"), t]), "f");
    let n = [],
      r;
    while ((r = Kzc(no(this, OV, "f"), no(this, NV, "f"))) != null) {
      if (r.carriage && no(this, NV, "f") == null) {
        Aa(this, NV, r.index, "f");
        continue;
      }
      if (no(this, NV, "f") != null && (r.index !== no(this, NV, "f") + 1 || r.carriage)) {
        n.push(vSr(no(this, OV, "f").subarray(0, no(this, NV, "f") - 1))), Aa(this, OV, no(this, OV, "f").subarray(no(this, NV, "f")), "f"), Aa(this, NV, null, "f");
        continue;
      }
      let o = no(this, NV, "f") !== null ? r.preceding - 1 : r.preceding,
        s = vSr(no(this, OV, "f").subarray(0, o));
      n.push(s), Aa(this, OV, no(this, OV, "f").subarray(r.index), "f"), Aa(this, NV, null, "f");
    }
    return n;
  }
  flush() {
    if (!no(this, OV, "f").length) return [];
    return this.decode(`
`);
  }
}
function Kzc(e, t) {
  for (let o = t ?? 0; o < e.length; o++) {
    if (e[o] === 10) return {
      preceding: o,
      index: o + 1,
      carriage: false
    };
    if (e[o] === 13) return {
      preceding: o,
      index: o + 1,
      carriage: true
    };
  }
  return null;
}
function bos(e) {
  for (let r = 0; r < e.length - 1; r++) {
    if (e[r] === 10 && e[r + 1] === 10) return r + 2;
    if (e[r] === 13 && e[r + 1] === 13) return r + 2;
    if (e[r] === 13 && e[r + 1] === 10 && r + 3 < e.length && e[r + 2] === 13 && e[r + 3] === 10) return r + 4;
  }
  return -1;
}
var OV, NV;