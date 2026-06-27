// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Kit
// matched 2.1.88 source: src/ink/reconciler.ts
// class=modified  jaccard=0.5236  score=0.8885  fileCov=0.5605
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Kit = E(() => {
  pRn();
  wr();
  Wit();
  A3i();
  TXr();
  X_e();
  aGe();
  R3i();
  ((LBt = require("fs")), (O3i = R(V4i(), 1)));
  ((f8 = new vXr()), (Sne = process.env.CLAUDE_CODE_COMMIT_LOG));
  DXr = O3i.default({
    getRootHostContext: () => ({
      isInsideText: false,
    }),
    prepareForCommit: () => {
      if (Sne) RXr = performance.now();
      return null;
    },
    preparePortalMount: () => null,
    clearContainer: () => false,
    resetAfterCommit(e) {
      if ((($Xr = DBt > 0 ? performance.now() - DBt : 0), (DBt = 0), Sne)) {
        let r = performance.now();
        xXr++;
        let o = kXr > 0 ? r - kXr : 0;
        if (o > rLn) rLn = o;
        kXr = r;
        let s = RXr > 0 ? r - RXr : 0;
        if (o > 30 || s > 20 || oLn > 50)
          LBt.appendFileSync(
            Sne,
            `${r.toFixed(1)} gap=${o.toFixed(1)}ms reconcile=${s.toFixed(1)}ms creates=${oLn}
`,
          );
        if (((oLn = 0), r - $3i > 1000))
          (LBt.appendFileSync(
            Sne,
            `${r.toFixed(1)} commits=${xXr}/s maxGap=${rLn.toFixed(1)}ms
`,
          ),
            (xXr = 0),
            (rLn = 0),
            ($3i = r));
      }
      let t = Sne ? performance.now() : 0;
      if (typeof e.onComputeLayout === "function") e.onComputeLayout();
      if (Sne) {
        let r = performance.now() - t;
        if (r > 20) {
          let o = dRn();
          LBt.appendFileSync(
            Sne,
            `${t.toFixed(1)} SLOW_YOGA ${r.toFixed(1)}ms visited=${o.visited} measured=${o.measured} hits=${o.cacheHits} live=${o.live}
`,
          );
        }
      }
      let n = Sne ? performance.now() : 0;
      if ((e.onRender?.(), Sne)) {
        let r = performance.now() - n;
        if (r > 10)
          LBt.appendFileSync(
            Sne,
            `${n.toFixed(1)} SLOW_PAINT ${r.toFixed(1)}ms
`,
          );
      }
    },
    getChildHostContext(e, t) {
      let n = e.isInsideText,
        r = t === "ink-text" || t === "ink-virtual-text" || t === "ink-link";
      if (n === r) return e;
      return {
        isInsideText: r,
      };
    },
    shouldSetTextContent: () => false,
    createInstance(e, t, n, r, o) {
      if (r.isInsideText && e === "ink-box")
        throw Error(`<Box> can't be nested inside <Text> component${M3i(o)}`);
      let s = e === "ink-text" && r.isInsideText ? "ink-virtual-text" : e,
        i = xBt(s);
      if (Sne) oLn++;
      for (let [a, l] of Object.entries(t)) C3d(i, a, l);
      if ((P3i(i, n), PXr())) i.debugOwnerChain = U3i(o);
      return i;
    },
    createTextInstance(e, t, n, r) {
      if (!n.isInsideText)
        throw Error(`Text string "${e}" must be rendered inside <Text> component${M3i(r)}`);
      return y3i(e);
    },
    resetTextContent() {},
    hideTextInstance(e) {
      RBt(e, "");
    },
    unhideTextInstance(e, t) {
      RBt(e, t);
    },
    getPublicInstance: (e) => e,
    hideInstance(e) {
      ((e.isHidden = true), e.yogaNode?.setDisplay(1), NM(e));
    },
    unhideInstance(e) {
      ((e.isHidden = false), e.yogaNode?.setDisplay(0), NM(e));
    },
    appendInitialChild: tLn,
    appendChild: tLn,
    insertBefore: yXr,
    finalizeInitialChildren(e, t, n) {
      return n.autoFocus === true;
    },
    commitMount(e) {
      bne(e).handleAutoFocus(e);
    },
    isPrimaryRenderer: true,
    supportsMutation: true,
    supportsPersistence: false,
    supportsHydration: false,
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    getCurrentUpdatePriority: () => f8.currentUpdatePriority,
    beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur() {},
    detachDeletedInstance() {},
    getInstanceFromNode: () => null,
    prepareScopeUpdate() {},
    getInstanceFromScope: () => null,
    appendChildToContainer: tLn,
    insertInContainerBefore: yXr,
    removeChildFromContainer(e, t) {
      (kBt(e, t), D3i(t), bne(e).handleNodeRemoved(t, e), LXr(t, e));
    },
    commitUpdate(e, t, n, r) {
      let o = L3i(n, r),
        s = L3i(n.style, r.style),
        i = false;
      if (o)
        for (let [a, l] of Object.entries(o)) {
          if (a === "style") {
            SXr(e, l);
            continue;
          }
          if (a === "textStyles") {
            g3i(e, l);
            continue;
          }
          if (a === "accessibility") {
            bXr(e, l);
            continue;
          }
          if (HXr.has(a)) {
            if ((N3i(e, a, l), AXr.has(a))) i = true;
            continue;
          }
          _Xr(e, a, l);
        }
      if (i) P3i(e, zit(e));
      if (o?.autoFocus === true) bne(e).handleAutoFocus(e);
      if (s && e.yogaNode) CXr(e.yogaNode, s, r.style);
    },
    commitTextUpdate(e, t, n) {
      RBt(e, n);
    },
    removeChild(e, t) {
      if ((kBt(e, t), D3i(t), t.nodeName !== "#text")) {
        let n = zit(e);
        (n.focusManager.handleNodeRemoved(t, n), LXr(t, n));
      }
    },
    maySuspendCommit() {
      return false;
    },
    preloadInstance() {
      return true;
    },
    startSuspendingCommit() {},
    suspendInstance() {},
    waitForCommitToBeReady() {
      return null;
    },
    NotPendingTransition: null,
    HostTransitionContext: {
      $$typeof: Symbol.for("react.context"),
      _currentValue: null,
    },
    setCurrentUpdatePriority(e) {
      f8.currentUpdatePriority = e;
    },
    resolveUpdatePriority() {
      return f8.resolveEventPriority();
    },
    resetFormInstance() {},
    requestPostPaintCallback() {},
    shouldAttemptEagerTransition() {
      return false;
    },
    trackSchedulerEvent() {},
    resolveEventType() {
      return f8.currentEvent?.type ?? null;
    },
    resolveEventTimeStamp() {
      return f8.currentEvent?.timeStamp ?? -1.1;
    },
  });
  f8.discreteUpdates = DXr.discreteUpdates.bind(DXr);
  Ene = DXr;
});
function uGe(e, t) {
  let n = Math.min(e.x, t.x),
    r = Math.min(e.y, t.y),
    o = Math.max(e.x + e.width, t.x + t.width),
    s = Math.max(e.y + e.height, t.y + t.height);
  return {
    x: n,
    y: r,
    width: o - n,
    height: s - r,
  };
}
function _b(e, t, n) {
  if (t !== void 0 && e < t) return t;
  if (n !== void 0 && e > n) return n;
  return e;
}
var m8 = () => {};
function TI(e, t) {
  if (e === void 0) return;
  if (Number.isInteger(e)) return;
  T(`${t} should be an integer, got ${e}`, {
    level: "warn",
  });
}
