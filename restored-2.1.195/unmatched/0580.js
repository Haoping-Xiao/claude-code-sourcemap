// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ibs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ibs = E(() => {
  Eae();
  e0u = Fe.bool(), t0u = Fe.bool(), n0u = Fe.bool(), r0u = Fe.bool(), o0u = Fe.bool(), s0u = Fe.bool(), i0u = Fe.str(), a0u = Fe.bool(), l0u = Fe.str(), c0u = Fe.str(), u0u = Fe.str(), d0u = Fe.str(), p0u = Fe.str(), f0u = Fe.str(), m0u = Fe.str(), g0u = Fe.str(), h0u = Fe.str(), y0u = Fe.str(), _0u = Fe.str(), b0u = Fe.str(), S0u = Fe.str(), E0u = Fe.str(), A0u = Fe.str(), H0u = Fe.str(), T0u = Fe.str(), v0u = Fe.str(), w0u = Fe.bool(), C0u = Fe.bool(), I0u = Fe.bool(), x0u = Fe.bool(), k0u = Fe.str(), R0u = Fe.bool(), L0u = Fe.str(), D0u = Fe.int(), P0u = Fe.bool(), M0u = Fe.bool(), $0u = Fe.bool(), O0u = Fe.str(), N0u = Fe.bool();
});
function abs(e, t) {
  let n = Object.create(t);
  for (let [r, o] of Object.entries(e)) {
    let s = n,
      i;
    Object.defineProperty(n, r, {
      get: () => {
        let a = process.env[r];
        if (a !== s) i = o.parse(a), s = a;
        return i;
      },
      enumerable: !0,
      configurable: !0
    });
  }
  return Object.defineProperties(n, {
    set: {
      value: (r, o) => {
        process.env[r] = Dms(o);
      }
    },
    unset: {
      value: r => {
        delete process.env[r];
      }
    }
  }), n;
}
var B0u, Oe, U0u, J2;