// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Eta
// matched 2.1.88 source: src/utils/plugins/schemas.ts
// class=new  jaccard=0.0071  score=0.3593  fileCov=0.0072
// note: nearest: src/utils/plugins/schemas.ts (0.0071); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Eta] deps: Qne, SX
utp = -62135596800n;
function oct(e, t) {
  if (e === t) return true;
  if ($1(e)) e = e.value;
  if ($1(t)) t = t.value;
  if ((typeof e === "number" || typeof e === "bigint") && (typeof t === "number" || typeof t === "bigint")) return e == t;
  switch (true) {
    case e instanceof Uint8Array:
      return t instanceof Uint8Array && ftp(e, t);
    case Gbe(e):
      return Gbe(t) && dtp(e, t);
    case Fbe(e):
      return Fbe(t) && ptp(e, t);
    case ARe(e):
      return ARe(t) && rro(e, t);
  }
  if (P1(e)) {
    if (!P1(t)) return false;
    if (e.desc.typeName !== t.desc.typeName) return false;
    return Uno(e.desc, e.message, t.message, {
      registry: n2t().registry,
      unpackAny: true,
      unknown: true,
      extensions: true
    });
  }
  return false;
}
function rro(e, t) {
  return e.kind === t.kind && e.name === t.name;
}
function dtp(e, t) {
  if (e.size !== t.size) return false;
  for (let n = 0; n < e.size; n++) if (!oct(e.get(n), t.get(n))) return false;
  return true;
}
function ptp(e, t) {
  if (e.size !== t.size) return false;
  for (let [n, r] of e) {
    let o = t.get(n);
    if (o === void 0 || !oct(r, o)) return false;
  }
  return true;
}
function ftp(e, t) {
  if (e.length !== t.length) return false;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return false;
  return true;
}