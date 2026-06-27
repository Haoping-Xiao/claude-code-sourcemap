// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I8
// matched 2.1.88 source: src/utils/telemetryAttributes.ts
// class=modified (alt of src/utils/telemetryAttributes.ts)  jaccard=0.0538  score=0.2055  fileCov=0.0679
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module I8] deps: utils/config.ts, bootstrap/state.ts
((RKd = Mi()), (X0e = new Map()));
function DKd(e) {
  let t = e.indexOf("."),
    n = e.indexOf(".", t + 1);
  if (t < 0 || n < 0) return null;
  try {
    let r = LKd().safeParse(Ft(Buffer.from(e.slice(t + 1, n), "base64url").toString("utf8")));
    return r.success ? r.data : null;
  } catch {
    return null;
  }
}
function getTelemetryAttributes() {
  let e = km(),
    t = ZBe(e) ? e.jwt : void 0;
  if (t === kKi) return GPn;
  if (((kKi = t), !t)) return (GPn = deo);
  let n = DKd(t);
  if (!n) return (GPn = deo);
  let r = {
    "identity.source": "gateway-oidc",
  };
  if (n.sub) r["user.id"] = n.sub;
  if (n.email) r["user.email"] = n.email;
  if (n.groups && n.groups.length > 0) r["user.groups"] = n.groups.join(",");
  return (GPn = Object.freeze(r));
}
var LKd, deo, kKi, GPn;
