// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vta
// matched 2.1.88 source: src/utils/format.ts
// class=modified (alt of src/utils/format.ts)  jaccard=0.2572  score=0.4883  fileCov=0.3521
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Vta = E(() => {
  _ue();
  oro();
  xWe();
  ((wtp = [
    /\\[1-9]/,
    /\\k<.>/,
    /\(\?\=/,
    /\(\?\!/,
    /\(\?\<\=/,
    /\(\?\<\!/,
    /\\c[A-Z]/,
    /\\u[0-9a-fA-F]{4}/,
    /\\0(?!\d)/,
    /\[\\b.*\]/,
  ]),
    (Ctp = new RegExp(/^\(\?(?<flags>[ims\-]+)\)/)));
  (({ BOOL: va, BYTES: bue, DOUBLE: Bv, DYN: c2t, INT: g_, STRING: JD, UINT: Uv } = Pu),
    (gro = $8(Pu.DYN)),
    (RWe = tct(Pu.DYN, Pu.DYN)),
    (qta = [
      Do(ita, [va], va, (e) => !e),
      Do(sta, [c2t, c2t], va, oct),
      Do(ata, [c2t, c2t], va, (e, t) => !oct(e, t)),
      Do(l4, [va, va], va, (e, t) => e < t),
      Do(l4, [bue, bue], va, (e, t) => z$n(e, t) < 0),
      Do(l4, [Bv, Bv], va, (e, t) => e < t),
      Do(l4, [JD, JD], va, (e, t) => e < t),
      Do(l4, [g_, g_], va, (e, t) => e < t),
      Do(l4, [g_, Uv], va, (e, t) => e < t.value),
      Do(l4, [Uv, g_], va, (e, t) => e.value < t),
      Do(l4, [Uv, Uv], va, (e, t) => e.value < t.value),
      Do(l4, [g_, Bv], va, (e, t) => Number(e) < t),
      Do(l4, [Bv, g_], va, (e, t) => e < Number(t)),
      Do(l4, [Bv, Uv], va, (e, t) => e < Number(t.value)),
      Do(l4, [Uv, Bv], va, (e, t) => Number(e.value) < t),
      Do(l4, [F_, F_], va, (e, t) => q$n(e, t) < 0),
      Do(l4, [QE, QE], va, (e, t) => V$n(e, t) < 0),
      Do(c4, [va, va], va, (e, t) => e <= t),
      Do(c4, [bue, bue], va, (e, t) => z$n(e, t) <= 0),
      Do(c4, [Bv, Bv], va, (e, t) => e <= t),
      Do(c4, [JD, JD], va, (e, t) => e <= t),
      Do(c4, [g_, g_], va, (e, t) => e <= t),
      Do(c4, [g_, Uv], va, (e, t) => e <= t.value),
      Do(c4, [Uv, g_], va, (e, t) => e.value <= t),
      Do(c4, [Uv, Uv], va, (e, t) => e.value <= t.value),
      Do(c4, [g_, Bv], va, (e, t) => Number(e) <= t),
      Do(c4, [Bv, g_], va, (e, t) => e <= Number(t)),
      Do(c4, [Bv, Uv], va, (e, t) => e <= Number(t.value)),
      Do(c4, [Uv, Bv], va, (e, t) => Number(e.value) <= t),
      Do(c4, [F_, F_], va, (e, t) => q$n(e, t) <= 0),
      Do(c4, [QE, QE], va, (e, t) => V$n(e, t) <= 0),
      Do(i4, [va, va], va, (e, t) => e > t),
      Do(i4, [bue, bue], va, (e, t) => z$n(e, t) > 0),
      Do(i4, [Bv, Bv], va, (e, t) => e > t),
      Do(i4, [JD, JD], va, (e, t) => e > t),
      Do(i4, [g_, g_], va, (e, t) => e > t),
      Do(i4, [g_, Uv], va, (e, t) => e > t.value),
      Do(i4, [Uv, g_], va, (e, t) => e.value > t),
      Do(i4, [Uv, Uv], va, (e, t) => e.value > t.value),
      Do(i4, [g_, Bv], va, (e, t) => Number(e) > t),
      Do(i4, [Bv, g_], va, (e, t) => e > Number(t)),
      Do(i4, [Bv, Uv], va, (e, t) => e > Number(t.value)),
      Do(i4, [Uv, Bv], va, (e, t) => Number(e.value) > t),
      Do(i4, [F_, F_], va, (e, t) => q$n(e, t) > 0),
      Do(i4, [QE, QE], va, (e, t) => V$n(e, t) > 0),
      Do(a4, [va, va], va, (e, t) => e >= t),
      Do(a4, [bue, bue], va, (e, t) => z$n(e, t) >= 0),
      Do(a4, [Bv, Bv], va, (e, t) => e >= t),
      Do(a4, [JD, JD], va, (e, t) => e >= t),
      Do(a4, [g_, g_], va, (e, t) => e >= t),
      Do(a4, [g_, Uv], va, (e, t) => e >= t.value),
      Do(a4, [Uv, g_], va, (e, t) => e.value >= t),
      Do(a4, [Uv, Uv], va, (e, t) => e.value >= t.value),
      Do(a4, [g_, Bv], va, (e, t) => Number(e) >= t),
      Do(a4, [Bv, g_], va, (e, t) => e >= Number(t)),
      Do(a4, [Bv, Uv], va, (e, t) => e >= Number(t.value)),
      Do(a4, [Uv, Bv], va, (e, t) => Number(e.value) >= t),
      Do(a4, [F_, F_], va, (e, t) => q$n(e, t) >= 0),
      Do(a4, [QE, QE], va, (e, t) => V$n(e, t) >= 0),
      Do(Vbe, [bue], g_, (e) => BigInt(e.length)),
      Do(Vbe, [gro], g_, (e) => BigInt(e.size)),
      Do(Vbe, [JD], g_, (e) => BigInt([...e].length)),
      Do(Vbe, [RWe], g_, (e) => BigInt(e.size)),
      Kh(Vbe, bue, [], g_, function () {
        return BigInt(this.length);
      }),
      Kh(Vbe, gro, [], g_, function () {
        return BigInt(this.size);
      }),
      Kh(Vbe, JD, [], g_, function () {
        return BigInt([...this].length);
      }),
      Kh(Vbe, RWe, [], g_, function () {
        return BigInt(this.size);
      }),
      Do(IWe, [c2t, gro], va, xtp),
      Do(IWe, [JD, RWe], va, l2t),
      Do(IWe, [Bv, RWe], va, l2t),
      Do(IWe, [g_, RWe], va, l2t),
      Do(IWe, [va, RWe], va, l2t),
      Do(IWe, [Uv, RWe], va, l2t),
      Kh(Pta, JD, [JD], va, String.prototype.includes),
      Kh(Mta, JD, [JD], va, String.prototype.endsWith),
      Kh(Ota, JD, [JD], va, String.prototype.startsWith),
      Kh($ta, JD, [JD], va, Itp),
    ]));
});
function ktp(e) {
  let t = new Date(0, 0, 1);
  t.setFullYear(e.getFullYear());
  let n = e.getTime() - t.getTime();
  return Math.floor(n / 86400000);
}
function Rtp(e, t) {
  let n = e.message,
    r = PZi(n);
  if (t === void 0)
    return new Date(
      r.getUTCFullYear(),
      r.getUTCMonth(),
      r.getUTCDate(),
      r.getUTCHours(),
      r.getUTCMinutes(),
      r.getUTCSeconds(),
      r.getUTCMilliseconds(),
    );
  let o = t.match(/^(?<sign>[+-]?)(?<hours>\d\d):(?<minutes>\d\d)$/);
  if (o?.groups) {
    let p = o.groups.sign == "-" ? 1 : -1,
      f = parseInt(o.groups.hours),
      m = parseInt(o.groups.minutes),
      g = p * (f * 60 * 60 * 1000 + m * 60 * 1000);
    return (
      (r = new Date(r.getTime() - g)),
      new Date(
        r.getUTCFullYear(),
        r.getUTCMonth(),
        r.getUTCDate(),
        r.getUTCHours(),
        r.getUTCMinutes(),
        r.getUTCSeconds(),
        r.getUTCMilliseconds(),
      )
    );
  }
  let s = new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      hour12: !1,
      timeZone: t,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    i,
    a,
    l,
    c,
    u,
    d;
  for (let p of s.formatToParts(r))
    switch (p.type) {
      case "year":
        i = parseInt(p.value);
        break;
      case "month":
        a = parseInt(p.value) - 1;
        break;
      case "day":
        l = parseInt(p.value);
        break;
      case "hour":
        c = parseInt(p.value);
        break;
      case "minute":
        u = parseInt(p.value);
        break;
      case "second":
        d = parseInt(p.value);
        break;
    }
  if (i === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0 || d === void 0)
    throw Error(`Error converting ${Bbe(M1, n)} to IANA timezone ${t}`);
  return new Date(i, a, l, c, u, d, r.getUTCMilliseconds());
}
function Sue(e, t) {
  function n(r) {
    let o = Rtp(this, r),
      s = t(o);
    try {
      return BigInt(s);
    } catch (i) {
      throw Error(`Error converting ${s} of ${String(o)} of ${Bbe(M1, this.message)} to BigInt`);
    }
  }
  return [Kh(e, QE, [], sct, n), Kh(e, QE, [Ltp], sct, n)];
}
var Ltp, sct, zta;
