// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kgo
// matched 2.1.88 source: src/services/analytics/firstPartyEventLoggingExporter.ts
// class=new  jaccard=0.0183  score=0.1106  fileCov=0.0215
// note: nearest: src/services/analytics/firstPartyEventLoggingExporter.ts (0.0183); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Kgo = E(() => {
  MOa = require("crypto");
});
function ePp(e) {
  if (e === void 0 || e === null) return "UNSPECIFIED";
  if (typeof e === "number") return ZDp[e] ?? "UNSPECIFIED";
  if (typeof e !== "string") return "UNSPECIFIED";
  let t = e.startsWith($Oa) ? e.slice($Oa.length) : e;
  return QDp.find(n => n === t) ?? "UNSPECIFIED";
}
function tPp(e, t) {
  if (e === "SERVICE_VOUCHED") return !0;
  let n = Ygo.findIndex(r => r === e);
  return n !== -1 && n <= Ygo.indexOf(t);
}
function OOa(e) {
  let t = rPp().safeParse(e);
  return {
    enforce: !0,
    acceptLevel: t.success ? t.data.accept_level : "VERIFIED",
    acceptStatuses: new Set(t.success ? t.data.accept_statuses : [])
  };
}
function bft(e) {
  NOa = e;
}
function Xgo(e) {
  BOa = e;
}
function Yjn(e) {
  let t = typeof e.payload?.type === "string" ? e.payload.type : e.event_type,
    n = t === "user" || t === "control_response",
    r = ePp(e.device_attestation_status),
    o = NOa?.() ?? Kjn;
  if (tPp(r, o.acceptLevel)) {
    if (n) xe("bridge_event_attestation");
    return !1;
  }
  if (!o.enforce) {
    if (r === "UNSPECIFIED") return !1;
    if (n) T(`[bridge:attestation] accepting unverified ${t} event_id=${e.event_id} status=${r}`, {
      level: "info"
    }), It("bridge_event_attestation", `${r.toLowerCase()}_${t}`);
    return !1;
  }
  let s = o.acceptStatuses.has(r);
  if (n) {
    let i = `${r.toLowerCase()}_${t}`;
    if (T(`[bridge:attestation] ${s ? "accepting (config exception)" : "DROPPING"} unverified ${t} event_id=${e.event_id} status=${r}`, {
      level: s ? "info" : "warn"
    }), s) It("bridge_event_attestation", i);else {
      Le("bridge_event_attestation", i);
      try {
        BOa?.({
          status: r,
          payloadType: t
        });
      } catch (a) {
        T(`[bridge:attestation] drop notifier threw: ${be(a)}`, {
          level: "error"
        });
      }
    }
  }
  return !s;
}
var QDp,
  $Oa = "DEVICE_ATTESTATION_STATUS_",
  ZDp,
  Ygo,
  Kjn,
  nPp,
  rPp,
  NOa,
  BOa;