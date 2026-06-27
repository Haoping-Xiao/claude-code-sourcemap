// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module utr
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var utr = E(() => {
  O0();
  _i();
  Ye();
  Yj();
  ps();
  nk();
  uo();
  j_e();
  Yp();
  dr();
  mE();
  Bs();
  E8e();
  Ko();
  gBn();
  Kut();
  xMl = R(lt(), 1), kMl = R(rt(), 1), gE = R(se(), 1);
});
function GRf() {
  let e = x0()?.model_notices;
  if (typeof e !== "object" || e === null || Array.isArray(e)) return {};
  let t = {};
  for (let [n, r] of Object.entries(e)) if (n.trim().length > 0 && typeof r === "string" && r.length > 0) t[n] = r;
  return t;
}
function RMl(e) {
  let t = GRf();
  if (Object.keys(t).length === 0) return;
  let n = e.toLowerCase(),
    r = zo(e).toLowerCase(),
    o = mo(r).toLowerCase();
  for (let [s, i] of Object.entries(t)) {
    let a = s.toLowerCase();
    if (a === n || a === r || a === o || r.includes(a)) return i;
  }
  return;
}