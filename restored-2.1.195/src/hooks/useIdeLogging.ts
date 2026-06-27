// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $ur
// matched 2.1.88 source: src/hooks/useIdeLogging.ts
// class=modified  jaccard=0.1916  score=0.7099  fileCov=0.2078
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var $ur = E(() => {
  si();
  _i();
  kt();
  pre();
  uo();
  Y4();
  vn();
  np();
  O0();
  Ye();
  ps();
  jZe();
  es();
  uf();
  co();
  Vl();
  Bs();
  vi();
  gDe();
  B_();
  f_();
  Ko();
  co();
  EC();
  ((Mur = R(lt(), 1)),
    (W8o = require("crypto")),
    (vTt = R(require("path"))),
    (GT = R(rt(), 1)),
    (ul = R(se(), 1)));
});
function jgc(e) {
  Fgc.useEffect(() => {
    if (!e.length) return;
    let t = p5(e);
    if (t)
      t.client.setNotificationHandler(qum(), (n) => {
        let { eventName: r, eventData: o } = n.params;
        G(`tengu_ide_${r}`, o);
      });
  }, [e]);
}
var Fgc, qum;
