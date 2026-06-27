// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FXo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var dDm = (...e) => {
    let t = e.filter(Boolean);
    if (t.length === 0 || t.length === 1) return true;
    let n;
    for (let r of t) {
      let o = Object.keys(r);
      if (!n || n.size === 0) {
        n = new Set(o);
        continue;
      }
      for (let s of o) {
        if (n.has(s)) return false;
        n.add(s);
      }
    }
    return true;
  },
  Jme;