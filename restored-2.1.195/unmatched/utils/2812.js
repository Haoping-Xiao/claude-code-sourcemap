// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module y1n
// matched 2.1.88 source: src/services/mcp/config.ts
// class=new  jaccard=0.0148  score=0.1664  fileCov=0.016
// note: nearest: src/services/mcp/config.ts (0.0148); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var y1n = E(() => {
  oo();
  er();
  BE();
});
function _ap(e) {
  let t = e.replace(/^(\d{4}-\d{2}-\d{2}) (?=\d{2}:)/, "$1T"),
    n = t.includes("T"),
    r = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(t);
  return Date.parse(n && !r ? `${t}Z` : t);
}
function bap() {
  let e = at("tengu_saffron_lattice", Cia);
  if (_1n === null || _1n.raw !== e) {
    let t = yap().safeParse(e);
    _1n = {
      raw: e,
      parsed: t.success ? t.data : Cia
    };
  }
  return _1n.parsed;
}
function Sap(e) {
  if (e === void 0) return !1;
  if (b1n === null || b1n.value !== e) b1n = {
    value: e,
    ms: _ap(e)
  };
  return Date.now() >= b1n.ms;
}
function dSe() {
  return jue() || P_r();
}
function jue() {
  let e = bap();
  if (e.enabled === !1) return !1;
  return e.overageConsentRequired === !0 || Sap(e.planLimitsEndDate);
}
function eF() {
  return fr() !== "firstParty" || !bo() || Eye() || rW() === "default_claude_zero";
}
function Aap() {
  let e = at("tengu_saffron_credits_only_tiers", Iia);
  if (S1n === null || S1n.raw !== e) {
    let t = Eap().safeParse(e);
    if (!t.success) T("tengu_saffron_credits_only_tiers: unparseable value, using default", {
      level: "warn"
    });
    S1n = {
      raw: e,
      parsed: t.success ? t.data : Iia
    };
  }
  return S1n.parsed;
}
function Hap() {
  return Di() === "enterprise" && !Eye();
}
function Gue() {
  if (Hap()) return !0;
  let e = Di();
  if (e === null) return !1;
  return Aap().includes(e);
}
function xia() {
  return at("tengu_saffron_picker_dim", !1);
}
function kia() {
  let e = Dt().cachedExtraUsageDisabledReason;
  return e === "org_level_disabled" || e === "overage_not_provisioned";
}
function Tap() {
  let e = Dt().cachedExtraUsageDisabledReason;
  return e === "overage_not_provisioned" || e === "org_level_disabled" || e === "out_of_credits";
}
function Ria() {
  let e = Lc();
  if (!e) return null;
  if (e.organizationUuid) return e.organizationUuid;
  return e.accountUuid ? `acct:${e.accountUuid}` : null;
}
function Hjt() {
  if (Ria() === null) return isn();
  let e = Lc();
  if (!e) return isn();
  let t = Dt().fableOverageConsentV2;
  return e.organizationUuid !== void 0 && t?.[e.organizationUuid] === !0 || e.accountUuid !== void 0 && t?.[`acct:${e.accountUuid}`] === !0;
}
function vap(e) {
  if (Dt().fableOverageConsentV2?.[e] === !0) return;
  gn(t => ({
    ...t,
    fableOverageConsentV2: {
      ...t.fableOverageConsentV2,
      [e]: !0
    }
  }));
}
function oLe() {
  let e = Ria();
  if (e === null) {
    B_r(!0);
    return;
  }
  vap(e);
}
function sLe() {
  let e = Dt().cachedExtraUsageDisabledReason;
  if (e === void 0) return !1;
  if (e === null) return !0;
  return PPt(e);
}
function pio() {
  if (Hjt() && sLe()) return !0;
  if (eF()) return !0;
  return !dSe();
}
function Lia(e) {
  if (!hke()) return !1;
  let t = zx("tengu-model-error-overrides", {});
  if (typeof t !== "object" || t === null) return !1;
  let n = t[e];
  if (typeof n !== "object" || n === null) return !1;
  let r = n.block;
  return typeof r === "string" && r.trim() !== "";
}
function Tjt() {
  if (Gue()) return !1;
  return !pio();
}
function Dia() {
  if (Gue()) return !1;
  if (Tjt()) return !0;
  return dSe() && !eF() && Tap();
}
var yap,
  _1n = null,
  Cia,
  b1n = null,
  Eap,
  Iia,
  S1n = null;