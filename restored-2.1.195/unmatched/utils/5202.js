// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ctc
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var ctc = E(() => {
  iu();
  Xa();
  Tc();
  je();
  loe();
  atc = R(cAt(), 1), OYf = {
    type: "utf8",
    errorCorrectionLevel: "L",
    small: !0
  };
});
function utc(e) {
  let t = new AbortController();
  function n() {
    t.abort(), t = new AbortController();
  }
  function r() {
    let o = new AbortController(),
      s = () => o.abort();
    if (e.aborted || t.signal.aborted) return o.abort(), {
      signal: o.signal,
      cleanup: () => {}
    };
    e.addEventListener("abort", s, {
      once: !0
    });
    let i = t.signal;
    return i.addEventListener("abort", s, {
      once: !0
    }), {
      signal: o.signal,
      cleanup: () => {
        e.removeEventListener("abort", s), i.removeEventListener("abort", s);
      }
    };
  }
  return {
    signal: r,
    wake: n
  };
}
var _Ht;