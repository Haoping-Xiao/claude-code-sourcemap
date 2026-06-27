// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JTr
// matched 2.1.88 source: node_modules/zod/v4/classic/schemas.js
// class=partial  jaccard=0.097  score=0.9557  fileCov=0.0974
// note: low-confidence suggestion: node_modules/zod/v4/classic/schemas.js; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var JTr = E(() => {
  aM();
  VTr();
  zTr = gan(NQe), KTr = han(NQe), YTr = yan(NQe), XTr = _an(NQe);
});
function ar(e) {
  return Cln(fkt, e);
}
function jQc(e) {
  return Lxt(evr, e);
}
function GQc(e) {
  return kQe(ccn, e);
}
function WQc(e) {
  return Dxt(ahe, e);
}
function qQc(e) {
  return Pxt(ahe, e);
}
function VQc(e) {
  return Mxt(ahe, e);
}
function zQc(e) {
  return $xt(ahe, e);
}
function nvr(e) {
  return Oxt(tvr, e);
}
function KQc(e) {
  return Nxt(rvr, e);
}
function YQc(e) {
  return Bxt(ovr, e);
}
function XQc(e) {
  return Uxt(svr, e);
}
function JQc(e) {
  return Fxt(ivr, e);
}
function QQc(e) {
  return jxt(avr, e);
}
function ZQc(e) {
  return Gxt(lvr, e);
}
function eZc(e) {
  return Wxt(cvr, e);
}
function tZc(e) {
  return qxt(uvr, e);
}
function nZc(e) {
  return Vxt(dvr, e);
}
function rZc(e) {
  return zxt(pvr, e);
}
function oZc(e) {
  return Kxt(fvr, e);
}
function sZc(e) {
  return Yxt(mvr, e);
}
function iZc(e) {
  return Xxt(gvr, e);
}
function aZc(e) {
  return Jxt(hvr, e);
}
function lZc(e) {
  return Qxt(yvr, e);
}
function cZc(e, t, n = {}) {
  return Jln(kls, e, t, n);
}
function Lh(e) {
  return xln(mkt, e);
}
function QTr(e) {
  return kln(BQe, e);
}
function uZc(e) {
  return Rln(BQe, e);
}
function dZc(e) {
  return Lln(BQe, e);
}
function pZc(e) {
  return Dln(BQe, e);
}
function fZc(e) {
  return Pln(BQe, e);
}
function US(e) {
  return Mln(gkt, e);
}
function mZc(e) {
  return $ln(hkt, e);
}
function gZc(e) {
  return Oln(_vr, e);
}
function hZc(e) {
  return Nln(_vr, e);
}
function yZc(e) {
  return Bln(Rls, e);
}
function _Zc(e) {
  return Uln(Lls, e);
}
function pcn(e) {
  return Fln(Dls, e);
}
function bvr() {
  return jln(Pls);
}
function iv() {
  return UUe(Mls);
}
function fcn(e) {
  return Gln($ls, e);
}
function bZc(e) {
  return Wln(Ols, e);
}
function SZc(e) {
  return qln(mcn, e);
}
function ga(e, t) {
  return dkt(Nls, e, t);
}
function EZc(e) {
  let t = e._zod.def.shape;
  return kc(Object.keys(t));
}
function Ca(e, t) {
  let n = {
    type: "object",
    get shape() {
      return Zi.assignProp(this, "shape", {
        ...e
      }), this.shape;
    },
    ...Zi.normalizeParams(t)
  };
  return new gcn(n);
}
function AZc(e, t) {
  return new gcn({
    type: "object",
    get shape() {
      return Zi.assignProp(this, "shape", {
        ...e
      }), this.shape;
    },
    catchall: fcn(),
    ...Zi.normalizeParams(t)
  });
}
function $R(e, t) {
  return new gcn({
    type: "object",
    get shape() {
      return Zi.assignProp(this, "shape", {
        ...e
      }), this.shape;
    },
    catchall: iv(),
    ...Zi.normalizeParams(t)
  });
}
function IE(e, t) {
  return new Svr({
    type: "union",
    options: e,
    ...Zi.normalizeParams(t)
  });
}
function hcn(e, t, n) {
  return new Bls({
    type: "union",
    options: t,
    discriminator: e,
    ...Zi.normalizeParams(n)
  });
}
function ykt(e, t) {
  return new Uls({
    type: "intersection",
    left: e,
    right: t
  });
}
function HZc(e, t, n) {
  let r = t instanceof tp,
    o = r ? n : t;
  return new Fls({
    type: "tuple",
    items: e,
    rest: r ? t : null,
    ...Zi.normalizeParams(o)
  });
}
function xE(e, t, n) {
  return new Evr({
    type: "record",
    keyType: e,
    valueType: t,
    ...Zi.normalizeParams(n)
  });
}
function TZc(e, t, n) {
  return new Evr({
    type: "record",
    keyType: IE([e, fcn()]),
    valueType: t,
    ...Zi.normalizeParams(n)
  });
}
function vZc(e, t, n) {
  return new jls({
    type: "map",
    keyType: e,
    valueType: t,
    ...Zi.normalizeParams(n)
  });
}
function wZc(e, t) {
  return new Gls({
    type: "set",
    valueType: e,
    ...Zi.normalizeParams(t)
  });
}
function V2(e, t) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map(r => [r, r])) : e;
  return new pkt({
    type: "enum",
    entries: n,
    ...Zi.normalizeParams(t)
  });
}
function CZc(e, t) {
  return new pkt({
    type: "enum",
    entries: e,
    ...Zi.normalizeParams(t)
  });
}
function kc(e, t) {
  return new Wls({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...Zi.normalizeParams(t)
  });
}
function IZc(e) {
  return zln(qls, e);
}
function Hvr(e) {
  return new Avr({
    type: "transform",
    transform: e
  });
}
function YH(e) {
  return new Tvr({
    type: "optional",
    innerType: e
  });
}
function ucn(e) {
  return new Vls({
    type: "nullable",
    innerType: e
  });
}
function xZc(e) {
  return YH(ucn(e));
}
function Kls(e, t) {
  return new zls({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t === "function" ? t() : t;
    }
  });
}
function Xls(e, t) {
  return new Yls({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t === "function" ? t() : t;
    }
  });
}
function Jls(e, t) {
  return new vvr({
    type: "nonoptional",
    innerType: e,
    ...Zi.normalizeParams(t)
  });
}
function kZc(e) {
  return new Qls({
    type: "success",
    innerType: e
  });
}
function ecs(e, t) {
  return new Zls({
    type: "catch",
    innerType: e,
    catchValue: typeof t === "function" ? t : () => t
  });
}
function RZc(e) {
  return Vln(tcs, e);
}
function dcn(e, t) {
  return new wvr({
    type: "pipe",
    in: e,
    out: t
  });
}
function rcs(e) {
  return new ncs({
    type: "readonly",
    innerType: e
  });
}
function LZc(e, t) {
  return new ocs({
    type: "template_literal",
    parts: e,
    ...Zi.normalizeParams(t)
  });
}
function ics(e) {
  return new scs({
    type: "lazy",
    getter: e
  });
}
function DZc(e) {
  return new acs({
    type: "promise",
    innerType: e
  });
}
function lcs(e, t) {
  let n = new ww({
    check: "custom",
    ...Zi.normalizeParams(t)
  });
  return n._zod.check = e, n;
}
function Cvr(e, t) {
  return Kln(ycn, e ?? (() => true), t);
}
function ccs(e, t = {}) {
  return Yln(ycn, e, t);
}
function ucs(e, t) {
  let n = lcs(r => (r.addIssue = o => {
    if (typeof o === "string") r.issues.push(Zi.issue(o, r.value, n._zod.def));else {
      let s = o;
      if (s.fatal) s.continue = false;
      s.code ?? (s.code = "custom"), s.input ?? (s.input = r.value), s.inst ?? (s.inst = n), s.continue ?? (s.continue = !n._zod.def.abort), r.issues.push(Zi.issue(s));
    }
  }, e(r.value, r)), t);
  return n;
}
function PZc(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  let n = new ycn({
    type: "custom",
    check: "custom",
    fn: r => r instanceof e,
    abort: true,
    ...Zi.normalizeParams(t)
  });
  return n._zod.bag.Class = e, n;
}
function $Zc(e) {
  let t = ics(() => IE([ar(e), Lh(), US(), pcn(), ga(t), xE(ar(), t)]));
  return t;
}
function _cn(e, t) {
  return dcn(Hvr(e), t);
}
var Dm,
  ZTr,
  fkt,
  KH,
  evr,
  ccn,
  ahe,
  tvr,
  rvr,
  ovr,
  svr,
  ivr,
  avr,
  lvr,
  cvr,
  uvr,
  dvr,
  pvr,
  fvr,
  mvr,
  gvr,
  hvr,
  yvr,
  kls,
  mkt,
  BQe,
  gkt,
  hkt,
  _vr,
  Rls,
  Lls,
  Dls,
  Pls,
  Mls,
  $ls,
  Ols,
  mcn,
  Nls,
  gcn,
  Svr,
  Bls,
  Uls,
  Fls,
  Evr,
  jls,
  Gls,
  pkt,
  Wls,
  qls,
  Avr,
  Tvr,
  Vls,
  zls,
  Yls,
  vvr,
  Qls,
  Zls,
  tcs,
  wvr,
  ncs,
  ocs,
  scs,
  acs,
  ycn,
  MZc = (...e) => Xln({
    Pipe: wvr,
    Boolean: gkt,
    String: fkt,
    Transform: Avr
  }, ...e);