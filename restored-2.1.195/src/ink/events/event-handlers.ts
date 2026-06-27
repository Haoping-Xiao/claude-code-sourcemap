// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TXr
// matched 2.1.88 source: src/ink/events/event-handlers.ts
// class=modified  jaccard=0.431  score=0.5253  fileCov=0.7059
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var TXr = E(() => {
  ((S3i = {
    keydown: {
      bubble: "onKeyDown",
      capture: "onKeyDownCapture",
    },
    focus: {
      bubble: "onFocus",
      capture: "onFocusCapture",
    },
    blur: {
      bubble: "onBlur",
      capture: "onBlurCapture",
    },
    paste: {
      bubble: "onPaste",
      capture: "onPasteCapture",
    },
    wheel: {
      bubble: "onWheel",
      capture: "onWheelCapture",
    },
    action: {
      bubble: "onAction",
      capture: "onActionCapture",
    },
    resize: {
      bubble: "onResize",
    },
    click: {
      bubble: "onClick",
    },
  }),
    (AXr = new Set([
      "onKeyDown",
      "onKeyDownCapture",
      "onPaste",
      "onPasteCapture",
      "onWheel",
      "onWheelCapture",
    ])),
    (HXr = new Set([
      "onKeyDown",
      "onKeyDownCapture",
      "onFocus",
      "onFocusCapture",
      "onBlur",
      "onBlurCapture",
      "onPaste",
      "onPasteCapture",
      "onWheel",
      "onWheelCapture",
      "onAction",
      "onActionCapture",
      "onResize",
      "onClick",
      "onMouseEnter",
      "onMouseLeave",
    ])));
});
function E3i(e, t, n) {
  let r = e._eventHandlers;
  if (!r) return;
  let o = S3i[t];
  if (!o) return;
  let s = n ? o.capture : o.bubble;
  if (!s) return;
  return r[s];
}
function a3d(e, t) {
  let n = [],
    r = e;
  while (r) {
    let o = r === e,
      s = E3i(r, t.type, true),
      i = E3i(r, t.type, false);
    if (s)
      n.unshift({
        node: r,
        handler: s,
        phase: o ? "at_target" : "capturing",
      });
    if (i && (t.bubbles || o))
      n.push({
        node: r,
        handler: i,
        phase: o ? "at_target" : "bubbling",
      });
    r = r.parentNode;
  }
  return n;
}
function l3d(e, t) {
  let n;
  for (let { node: r, handler: o, phase: s } of e) {
    if (t._isImmediatePropagationStopped()) break;
    if (t._isPropagationStopped() && r !== n) break;
    (t._setEventPhase(s), t._setCurrentTarget(r), t._prepareForTarget(r));
    try {
      o(t);
    } catch (i) {
      ke(i);
    }
    n = r;
  }
}
function c3d(e) {
  switch (e) {
    case "keydown":
    case "keyup":
    case "click":
    case "focus":
    case "blur":
    case "paste":
    case "action":
      return hne.DiscreteEventPriority;
    case "resize":
    case "scroll":
    case "wheel":
    case "mousemove":
      return hne.ContinuousEventPriority;
    default:
      return hne.DefaultEventPriority;
  }
}
class vXr {
  currentEvent = null;
  currentUpdatePriority = hne.DefaultEventPriority;
  discreteUpdates = null;
  resolveEventPriority() {
    if (this.currentUpdatePriority !== hne.NoEventPriority) return this.currentUpdatePriority;
    if (this.currentEvent) return c3d(this.currentEvent.type);
    return hne.DefaultEventPriority;
  }
  dispatch(e, t) {
    let n = this.currentEvent;
    this.currentEvent = t;
    try {
      t._setTarget(e);
      let r = a3d(e, t);
      return (l3d(r, t), t._setEventPhase("none"), t._setCurrentTarget(null), !t.defaultPrevented);
    } finally {
      this.currentEvent = n;
    }
  }
  dispatchDiscrete(e, t) {
    if (!this.discreteUpdates) return this.dispatch(e, t);
    return this.discreteUpdates((n, r) => this.dispatch(n, r), e, t, void 0, void 0);
  }
  dispatchContinuous(e, t) {
    let n = this.currentUpdatePriority;
    try {
      return ((this.currentUpdatePriority = hne.ContinuousEventPriority), this.dispatch(e, t));
    } finally {
      this.currentUpdatePriority = n;
    }
  }
}
var hne;
