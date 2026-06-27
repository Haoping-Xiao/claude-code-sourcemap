// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qEc
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var qEc = E(() => {
  ghe();
  ft();
  dn();
  kt();
  rir();
  Zf();
  $ur();
  zj();
  fp();
  je();
  Cp();
  Y4();
  Ozo();
  Yp();
  sF();
  bm();
  co();
  Ao();
  e$e();
  yur();
  Rze();
  m5();
  oje();
});
function VEc(e) {
  if (e.skipSlashCommands && e.origin?.kind === "peer") return !1;
  if (typeof e.value === "string") return e.value.trim().startsWith("/");
  for (let t of e.value) if (t.type === "text") return t.text.trim().startsWith("/");
  return !1;
}
function zEc({
  executeInput: e
}) {
  let t = x8o(V0);
  if (!t) return {
    processed: !1
  };
  if (VEc(t) || t.mode === "bash") {
    let s = [I5e(i => i === t)];
    return Fao(s), e(s).finally(() => jao(s)), {
      processed: !0
    };
  }
  let n = t.mode,
    r = ALe(o => V0(o) && !VEc(o) && o.mode === n);
  if (r.length === 0) return {
    processed: !1
  };
  return Fao(r), e(r).finally(() => jao(r)), {
    processed: !0
  };
}