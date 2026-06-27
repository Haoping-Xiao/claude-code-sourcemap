// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module H3i
// matched 2.1.88 source: src/ink/focus.ts
// class=modified  jaccard=0.2831  score=0.4778  fileCov=0.4099
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module H3i] deps: qit
n0e = class n0e extends yne {
  relatedTarget;
  constructor(e, t = null) {
    super(e, {
      bubbles: true,
      cancelable: false,
    });
    this.relatedTarget = t;
  }
};
class Vit {
  activeElement = null;
  dispatchFocusEvent;
  focusStack = [];
  autoFocusStack = [];
  listeners = new Set();
  constructor(e) {
    this.dispatchFocusEvent = e;
  }
  subscribe = (e) => (this.listeners.add(e), () => this.listeners.delete(e));
  notify() {
    for (let e of this.listeners) e();
  }
  focus(e) {
    if (e === this.activeElement) return;
    let t = this.activeElement;
    if (t) {
      let n = this.focusStack.indexOf(t);
      if (n !== -1) this.focusStack.splice(n, 1);
      if ((this.focusStack.push(t), this.focusStack.length > T3i)) this.focusStack.shift();
      this.dispatchFocusEvent(t, new n0e("blur", e));
    }
    ((this.activeElement = e), this.dispatchFocusEvent(e, new n0e("focus", t)), this.notify());
  }
  blur() {
    if (!this.activeElement) return;
    let e = this.activeElement;
    ((this.activeElement = null), this.dispatchFocusEvent(e, new n0e("blur", null)), this.notify());
  }
  handleNodeRemoved(e, t) {
    if (
      ((this.focusStack = this.focusStack.filter((o) => o !== e && _ne(o, t))),
      (this.autoFocusStack = this.autoFocusStack.filter((o) => o !== e && _ne(o, t))),
      !this.activeElement)
    )
      return;
    if (this.activeElement !== e && _ne(this.activeElement, t)) return;
    let n = this.activeElement;
    ((this.activeElement = null), this.dispatchFocusEvent(n, new n0e("blur", null)));
    while (this.focusStack.length > 0) {
      let o = this.focusStack.pop();
      if (_ne(o, t)) {
        ((this.activeElement = o), this.dispatchFocusEvent(o, new n0e("focus", n)), this.notify());
        return;
      }
    }
    let r = this.autoFocusStack.at(-1);
    if (r) ((this.activeElement = r), this.dispatchFocusEvent(r, new n0e("focus", n)));
    this.notify();
  }
  pushAutoFocusFallback(e) {
    if (this.autoFocusStack.at(-1) === e) return;
    let t = this.autoFocusStack.indexOf(e);
    if (t !== -1) this.autoFocusStack.splice(t, 1);
    if ((this.autoFocusStack.push(e), this.autoFocusStack.length > T3i))
      this.autoFocusStack.shift();
  }
  handleAutoFocus(e) {
    (this.pushAutoFocusFallback(e), this.focus(e));
  }
  handleClickFocus(e) {
    if (typeof e.attributes.tabIndex !== "number") return;
    this.focus(e);
  }
  focusNext(e) {
    this.moveFocus(1, e);
  }
  focusPrevious(e) {
    this.moveFocus(-1, e);
  }
  focusDirection(e, t) {
    if (!this.activeElement) return (this.moveFocus(1, t), true);
    let n = C3i(this.activeElement);
    if (!n) return false;
    let r = null,
      o = 1 / 0;
    for (let s of wXr(t)) {
      if (s === this.activeElement) continue;
      let i = C3i(s);
      if (!i) continue;
      let a = u3d(n, i, e);
      if (a < o) ((o = a), (r = s));
    }
    if (r) return (this.focus(r), true);
    return false;
  }
  moveFocus(e, t) {
    let n = wXr(t);
    if (n.length === 0) return;
    let r = this.activeElement ? n.indexOf(this.activeElement) : -1,
      o = r === -1 ? (e === 1 ? 0 : n.length - 1) : (r + e + n.length) % n.length,
      s = n[o];
    if (s) this.focus(s);
  }
}
function wXr(e) {
  let t = [];
  return (I3i(e, t), t);
}
function I3i(e, t) {
  let n = e.attributes.tabIndex;
  if (typeof n === "number" && n >= 0) t.push(e);
  for (let r of e.childNodes) if (r.nodeName !== "#text") I3i(r, t);
}
function x3i(e) {
  for (let t of e.childNodes) {
    if (t.nodeName === "#text") continue;
    if (wXr(t).length > 0) return true;
  }
  return false;
}
function u3d(e, t, n) {
  let r = e.x + e.width / 2,
    o = e.y + e.height / 2,
    s = t.x + t.width / 2,
    i = t.y + t.height / 2,
    a = n === "left" || n === "right",
    l = n === "right" || n === "down" ? 1 : -1,
    c = (a ? s - r : i - o) * l;
  if (c <= 0) return 1 / 0;
  let u = a ? v3i(o, t.y, t.height) : v3i(r, t.x, t.width),
    d = a ? w3i(e.y, e.height, t.y, t.height) : w3i(e.x, e.width, t.x, t.width);
  return c + (a ? 2 : 0.5) * u - d;
}
function v3i(e, t, n) {
  if (e < t) return t - e;
  if (e > t + n) return e - (t + n);
  return 0;
}
function w3i(e, t, n, r) {
  return Math.max(0, Math.min(e + t, n + r) - Math.max(e, n));
}
function C3i(e) {
  let t = Cy.get(e);
  if (t) return t;
  let n = e.yogaNode;
  if (!n) return;
  let r = n.getComputedLeft(),
    o = n.getComputedTop(),
    s = e.parentNode;
  while (s) {
    let i = Cy.get(s);
    if (i)
      return {
        x: i.x + r,
        y: i.y + o,
        width: n.getComputedWidth(),
        height: n.getComputedHeight(),
      };
    if (s.yogaNode) ((r += s.yogaNode.getComputedLeft()), (o += s.yogaNode.getComputedTop()));
    s = s.parentNode;
  }
  return;
}
function _ne(e, t) {
  let n = e;
  while (n) {
    if (n === t) return true;
    n = n.parentNode;
  }
  return false;
}
function zit(e) {
  let t = e;
  while (t) {
    if (t.focusManager) return t;
    t = t.parentNode;
  }
  throw Error("Node is not in a tree with a FocusManager");
}
function bne(e) {
  return zit(e).focusManager;
}
var T3i = 32;
