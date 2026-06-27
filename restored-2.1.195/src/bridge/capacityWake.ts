// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ctc
// matched 2.1.88 source: src/bridge/capacityWake.ts
// class=modified  jaccard=0.4989  score=0.6518  fileCov=0.6802
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ctc] deps: @mixmark-io/domino/lib/Document.js, @xmldom/xmldom/lib/entities.js, marked/lib/marked.esm.js, utils/debug.ts, utils/swarm/constants.ts
((atc = R(cAt(), 1)),
  (OYf = {
    type: "utf8",
    errorCorrectionLevel: "L",
    small: true,
  }));
function utc(e) {
  let t = new AbortController();
  function n() {
    (t.abort(), (t = new AbortController()));
  }
  function r() {
    let o = new AbortController(),
      s = () => o.abort();
    if (e.aborted || t.signal.aborted)
      return (
        o.abort(),
        {
          signal: o.signal,
          cleanup: () => {},
        }
      );
    e.addEventListener("abort", s, {
      once: true,
    });
    let i = t.signal;
    return (
      i.addEventListener("abort", s, {
        once: true,
      }),
      {
        signal: o.signal,
        cleanup: () => {
          (e.removeEventListener("abort", s), i.removeEventListener("abort", s));
        },
      }
    );
  }
  return {
    signal: r,
    wake: n,
  };
}
var _Ht;
