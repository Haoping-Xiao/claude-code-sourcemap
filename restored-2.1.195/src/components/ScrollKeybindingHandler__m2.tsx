// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HWi
// matched 2.1.88 source: src/components/ScrollKeybindingHandler.tsx
// class=modified (alt of src/components/ScrollKeybindingHandler.tsx)  jaccard=0.0465  score=0.2584  fileCov=0.0537
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HWi] deps: iu, t0e, sr, p8, Tc
((EWi = R(bWi(), 1)),
  (FGd = {
    dashed: {
      top: "\u254C",
      left: "\u254E",
      right: "\u254E",
      bottom: "\u254C",
      topLeft: " ",
      topRight: " ",
      bottomLeft: " ",
      bottomRight: " ",
    },
    quote: {
      top: " ",
      left: "\u258E",
      right: " ",
      bottom: " ",
      topLeft: " ",
      topRight: " ",
      bottomLeft: " ",
      bottomRight: " ",
    },
  }));
AWi = jGd;
function EJr(e, t) {
  let n = e && (t?.demoRuler ?? true);
  if (ELn === e && _Jr === n) return;
  if (((ELn = e), (_Jr = n), !e)) SJr = null;
  for (let r of ALn) r();
}
function cat(e) {
  return (ALn.add(e), () => ALn.delete(e));
}
function TWi() {
  return SJr;
}
function vWi() {
  return ELn;
}
function wWi() {
  return _Jr;
}
function qGd() {
  GGd = {
    enabled: VBt,
    events: lat,
    position: bJr,
  };
  for (let e of WGd) e();
}
function AJr(e, t, n, r) {
  if (ELn) {
    SJr = {
      wheelMode: n.wheelMode,
    };
    for (let s of ALn) s();
  }
  if (!VBt) return;
  let o = yJr === 0 ? 1 / 0 : r - yJr;
  ((yJr = r),
    IWi({
      kind: "in",
      ts: r,
      dir: e,
      step: t,
      flip: n.pendingFlip && t === 0,
      gap: o,
      mult: n.mult,
      wheelMode: n.wheelMode,
      burst: n.burstCount,
      jbBypass: n.jbBypass,
    }));
}
function CWi(e, t, n) {
  if (!VBt) return;
  IWi({
    kind: "out",
    ts: performance.now(),
    applied: e,
    remaining: t,
    algo: n,
  });
}
function HJr(e) {
  if (!VBt) return;
  bJr = {
    top: e.getScrollTop(),
    height: e.getScrollHeight(),
    viewport: e.getViewportHeight(),
  };
}
function IWi(e) {
  ((lat = lat.length >= 256 ? [...lat.slice(-255), e] : [...lat, e]), qGd());
}
var VBt = false,
  lat,
  bJr = null,
  yJr = 0,
  GGd,
  WGd,
  ELn = false,
  _Jr = false,
  SJr = null,
  ALn;
