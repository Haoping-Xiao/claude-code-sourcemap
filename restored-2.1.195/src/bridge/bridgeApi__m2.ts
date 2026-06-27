// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e1
// matched 2.1.88 source: src/bridge/bridgeApi.ts
// class=modified (alt of src/bridge/bridgeApi.ts)  jaccard=0.0118  score=0.2603  fileCov=0.0122
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function I7s() {
  return null;
}
function x7s(e) {
  let t = I7s();
  if (!t) return e;
  let n = new globalThis.Headers(e);
  return (
    Object.entries(t).forEach(([r, o]) => {
      if (o !== void 0) n.set(r, o);
    }),
    n
  );
}
function wnt() {
  return false;
}
function pUr() {
  return null;
}
function fUr() {
  return null;
}
function mUr() {
  return vnt && C7s !== null && false;
}
function A0() {
  return null;
}
function gUr() {
  return null;
  switch (e) {
    case "not-started":
      return {
        endsAt: null,
      };
    case "expired":
      return {
        endsAt: new Date(Date.now() - t).toISOString(),
      };
    default: {
      let n = Number(e);
      return Number.isFinite(n) && n > 0
        ? {
            endsAt: new Date(Date.now() + n * t).toISOString(),
          }
        : null;
    }
  }
}
function k7s(e) {
  return;
}
var Eld,
  vnt = false,
  C7s = null,
  Ald = null,
  Hld = "max",
  Tld = null,
  USn = null;
