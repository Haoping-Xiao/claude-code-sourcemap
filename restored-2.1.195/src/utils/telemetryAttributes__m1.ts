// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I8
// matched 2.1.88 source: src/utils/telemetryAttributes.ts
// class=modified (alt of src/utils/telemetryAttributes.ts)  jaccard=0.1026  score=0.3341  fileCov=0.129
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var I8 = E(() => {
  er();
  ih();
  ((RKd = Mi()), (X0e = new Map()));
});
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
function WPn() {
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
