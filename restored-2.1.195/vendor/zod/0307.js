// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bls
// class=vendor  (no 2.1.88 match)
// note: identified by fingerprint: zod; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module bls] deps: aM, aM, zod/v4/core/util.js
$Qc = Kr("ZodMiniType", (e, t) => {
  if (!e._zod) throw Error("Uninitialized schema in ZodMiniType.");
  tp.init(e, t), e.def = t, e.parse = (n, r) => $Ue(e, n, r, {
    callee: e.parse
  }), e.safeParse = (n, r) => Awe(e, n, r), e.parseAsync = async (n, r) => OUe(e, n, r, {
    callee: e.parseAsync
  }), e.safeParseAsync = async (n, r) => Hwe(e, n, r), e.check = (...n) => e.clone({
    ...t,
    checks: [...(t.checks ?? []), ...n.map(r => typeof r === "function" ? {
      _zod: {
        check: r,
        def: {
          check: "custom"
        },
        onattach: []
      }
    } : r)]
  }), e.clone = (n, r) => AB(e, n, r), e.brand = () => e, e.register = (n, r) => (n.add(e, r), e);
}), OQc = Kr("ZodMiniObject", (e, t) => {
  wxt.init(e, t), $Qc.init(e, t), Zi.defineLazy(e, "shape", () => t.shape);
});
var Sls = () => {};
var Els = () => {};
var Als = () => {};