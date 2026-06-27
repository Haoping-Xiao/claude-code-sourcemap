// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RQo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var RQo = E(() => {
  AQo();
  F3c();
  q3c();
  Z3c();
  NZ();
  nwt();
  AR();
  oBe();
  Qvt();
  kQo();
  aGc();
  uGc();
});
function iBe(e, t, n, r, o) {
  if (o.crit !== void 0 && r?.crit === void 0) throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
  if (!r || r.crit === void 0) return new Set();
  if (!Array.isArray(r.crit) || r.crit.length === 0 || r.crit.some(i => typeof i !== "string" || i.length === 0)) throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  let s;
  if (n !== void 0) s = new Map([...Object.entries(n), ...t.entries()]);else s = t;
  for (let i of r.crit) {
    if (!s.has(i)) throw new nh(`Extension Header Parameter "${i}" is not recognized`);
    if (o[i] === void 0) throw new e(`Extension Header Parameter "${i}" is missing`);
    if (s.get(i) && r[i] === void 0) throw new e(`Extension Header Parameter "${i}" MUST be integrity protected`);
  }
  return new Set(r.crit);
}