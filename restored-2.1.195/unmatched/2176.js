// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module E$i
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var E$i = E(() => {
  oce = R(qi(), 1), vst = R(Nh(), 1);
});
class Q6r {
  instrumentationScope;
  _sharedState;
  constructor(e, t) {
    this.instrumentationScope = e, this._sharedState = t;
  }
  emit(e) {
    let t = e.context || A$i.context.active(),
      n = new J6r(this._sharedState, this.instrumentationScope, {
        context: t,
        ...e
      });
    this._sharedState.activeProcessor.onEmit(n, t), n._makeReadonly();
  }
}
var A$i;