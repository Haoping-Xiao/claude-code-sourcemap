// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I6e
// matched 2.1.88 source: src/services/mcp/channelPermissions.ts
// class=modified  jaccard=0.4174  score=0.6723  fileCov=0.524
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var I6e = E(() => {
  Xr();
  ft();
  np();
  oo();
  je();
  Ls();
  $g();
  dr();
  OI();
  j_t();
  ((G_t = ve(() =>
    H.object({
      method: H.literal("notifications/claude/channel"),
      params: H.object({
        content: H.string(),
        meta: H.record(H.string(), H.string()).optional(),
      }),
    }),
  )),
    (xko = ve(() =>
      H.object({
        method: H.literal(MYn),
        params: H.object({
          request_id: H.string(),
          behavior: H.enum(["allow", "deny"]),
        }),
      }),
    )),
    (Wfl = /^[a-zA-Z_][a-zA-Z0-9_]*$/));
});
function zfl() {
  return at("tengu_harbor_permissions", false);
}
function Vfl(e) {
  let t = 2166136261;
  for (let r = 0; r < e.length; r++) ((t ^= e.charCodeAt(r)), (t = Math.imul(t, 16777619)));
  t = t >>> 0;
  let n = "";
  for (let r = 0; r < 5; r++) ((n += Ldf[t % 25]), (t = Math.floor(t / 25)));
  return n;
}
function Kfl(e) {
  let t = Vfl(e);
  for (let n = 0; n < 10; n++) {
    if (!Ddf.some((r) => t.includes(r))) return t;
    t = Vfl(`${e}:${n}`);
  }
  return t;
}
function Yfl(e) {
  try {
    let t = De(e);
    return t.length > 200 ? t.slice(0, 200) + "\u2026" : t;
  } catch {
    return "(unserializable)";
  }
}
function Xfl(e, t) {
  return e.filter(
    (n) =>
      n.type === "connected" &&
      t(n.name) &&
      n.capabilities?.experimental?.["claude/channel"] !== void 0 &&
      n.capabilities?.experimental?.["claude/channel/permission"] !== void 0,
  );
}
function Jfl() {
  let e = new Map();
  return {
    onResponse(t, n) {
      let r = t.toLowerCase();
      return (
        e.set(r, n),
        () => {
          e.delete(r);
        }
      );
    },
    resolve(t, n, r) {
      let o = t.toLowerCase(),
        s = e.get(o);
      if (!s) return false;
      return (
        e.delete(o),
        s({
          behavior: n,
          fromServer: r,
        }),
        true
      );
    },
  };
}
var Ldf = "abcdefghijkmnopqrstuvwxyz",
  Ddf;
