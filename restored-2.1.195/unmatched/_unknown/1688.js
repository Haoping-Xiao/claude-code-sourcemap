// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module imi
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var imi = E(() => {
  bte();
});
function ami(e = {}) {
  let t = new xMt(e.parentContext);
  if (e.span) t = t.setValue($rt.span, e.span);
  if (e.namespace) t = t.setValue($rt.namespace, e.namespace);
  return t;
}
class xMt {
  constructor(e) {
    this._contextMap = e instanceof xMt ? new Map(e._contextMap) : new Map();
  }
  setValue(e, t) {
    let n = new xMt(this);
    return n._contextMap.set(e, t), n;
  }
  getValue(e) {
    return this._contextMap.get(e);
  }
  deleteValue(e) {
    let t = new xMt(this);
    return t._contextMap.delete(e), t;
  }
}
var $rt;