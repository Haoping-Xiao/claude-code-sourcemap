// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IBt
// matched 2.1.88 source: src/ink/dom.ts
// class=modified  jaccard=0.2988  score=0.5128  fileCov=0.4173
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function hXr(e) {
  let t = e;
  while (t && !t.hasAbsoluteDescendant) ((t.hasAbsoluteDescendant = true), (t = t.parentNode));
}
function m3i(e, t, n = false) {
  if (t.nodeName === "#text") return;
  let elem = t,
    o = n || elem.style.position === "absolute",
    s = Cy.get(elem);
  if (s) (z4i(e, s, o), Cy.delete(elem));
  for (let i of elem.childNodes) m3i(e, i, o);
}
function n3d(e, t) {
  return h3i(e, t);
}
function h3i(e, t) {
  if (e === t) return true;
  if (e === void 0 || t === void 0) return false;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (let o of n) if (!Object.hasOwn(t, o) || e[o] !== t[o]) return false;
  return true;
}
function s3d(e) {
  return e.nodeName !== "#text";
}
function b3i(e, t) {
  let n = [];
  return (r(e, 0), n);
  function r(o, s) {
    let i = o.yogaNode;
    if (!i || i.getDisplay() === 1) return;
    let a = s + i.getComputedTop(),
      l = i.getComputedHeight();
    if (t < a || t >= a + l) return;
    if (o.debugOwnerChain) n = o.debugOwnerChain;
    for (let c of o.childNodes) if (s3d(c)) r(c, a);
  }
}
var createNode = (nodeName) => {
    let n = {
      nodeName: nodeName,
      attributes: {},
      childNodes: [],
      textStyles: void 0,
      accessibility: void 0,
      onComputeLayout: void 0,
      onRender: void 0,
      onImmediateRender: void 0,
      hasRenderedContent: void 0,
      dirty: false,
      isHidden: void 0,
      _eventHandlers: void 0,
      _holdsRawModeRef: void 0,
      scrollTop: void 0,
      pendingScrollDelta: void 0,
      scrollClampMin: void 0,
      scrollClampMax: void 0,
      scrollHeight: void 0,
      scrollHeightHwm: void 0,
      scrollViewportHeight: void 0,
      scrollViewportTop: void 0,
      scrollTopRendered: void 0,
      stickyScroll: void 0,
      scrollAnchor: void 0,
      focusManager: void 0,
      setRawMode: void 0,
      _pendingRawModeDelta: void 0,
      debugOwnerChain: void 0,
      hasAbsoluteDescendant: void 0,
      parentNode: void 0,
      yogaNode:
        nodeName !== "ink-virtual-text" && nodeName !== "ink-link" && nodeName !== "ink-progress"
          ? GFi.Node.create()
          : void 0,
      style: {},
    };
    if (nodeName === "ink-text") n.yogaNode?.setMeasureFunc(r3d.bind(null, n));
    else if (nodeName === "ink-raw-ansi") n.yogaNode?.setMeasureFunc(o3d.bind(null, n));
    return n;
  },
  tLn = (e, t) => {
    if (t.parentNode) kBt(t.parentNode, t);
    if (((t.parentNode = e), e.childNodes.push(t), t.yogaNode))
      e.yogaNode?.insertChild(t.yogaNode, e.yogaNode.getChildCount());
    if (t.style.position === "absolute" || t.hasAbsoluteDescendant) hXr(e);
    NM(e);
  },
  yXr = (e, t, n) => {
    if (t.parentNode) kBt(t.parentNode, t);
    if (
      ((t.parentNode = e),
      t.style.position === "absolute" || (t.nodeName !== "#text" && t.hasAbsoluteDescendant))
    )
      hXr(e);
    let r = e.childNodes.indexOf(n);
    if (r >= 0) {
      let o = 0;
      if (t.yogaNode && e.yogaNode) {
        for (let s = 0; s < r; s++) if (e.childNodes[s]?.yogaNode) o++;
      }
      if ((e.childNodes.splice(r, 0, t), t.yogaNode && e.yogaNode))
        e.yogaNode.insertChild(t.yogaNode, o);
      NM(e);
      return;
    }
    if ((e.childNodes.push(t), t.yogaNode))
      e.yogaNode?.insertChild(t.yogaNode, e.yogaNode.getChildCount());
    NM(e);
  },
  kBt = (e, t) => {
    if (t.yogaNode) t.parentNode?.yogaNode?.removeChild(t.yogaNode);
    (m3i(e, t), (t.parentNode = void 0));
    let n = e.childNodes.indexOf(t);
    if (n >= 0) e.childNodes.splice(n, 1);
    NM(e);
  },
  _Xr = (e, t, n) => {
    if (t === "children") return;
    if (e.attributes[t] === n) return;
    ((e.attributes[t] = n), NM(e));
  },
  bXr = (e, t) => {
    e.accessibility = t;
  },
  SXr = (e, t) => {
    if (n3d(e.style, t)) return;
    let n = t.position === "absolute" && e.style.position !== "absolute";
    if (((e.style = t), n && e.parentNode)) hXr(e.parentNode);
    NM(e);
  },
  g3i = (e, t) => {
    if (h3i(e.textStyles, t)) return;
    ((e.textStyles = t), NM(e));
  },
  y3i = (e) => {
    let t = {
      nodeName: "#text",
      nodeValue: e,
      yogaNode: void 0,
      parentNode: void 0,
      style: {},
    };
    return (RBt(t, e), t);
  },
  r3d = function (node, t, n) {
    let r = node.nodeName === "#text" ? node.nodeValue : Y4i(node),
      o = X4i(r),
      s = node.style?.textWrap ?? "wrap";
    if (s === "wrap-stream") {
      let l = lGe(C1(o, t, "wrap"), t);
      return {
        width: l.width,
        height: Math.max(0, l.height - 1),
      };
    }
    let i = lGe(o, t);
    if (i.width <= t) return i;
    if (i.width >= 1 && t > 0 && t < 1) return i;
    if (
      o.includes(`
`) &&
      n === 0
    ) {
      let l = Math.max(t, i.width);
      return lGe(o, l);
    }
    let a = C1(o, t, s);
    return lGe(a, t);
  },
  o3d = function (e) {
    return {
      width: e.attributes.rawWidth,
      height: e.attributes.rawHeight,
    };
  },
  NM = (e) => {
    let current = e,
      n = false;
    while (current) {
      if (current.nodeName !== "#text") {
        if (
          ((current.dirty = true),
          !n &&
            (current.nodeName === "ink-text" || current.nodeName === "ink-raw-ansi") &&
            current.yogaNode)
        )
          (current.yogaNode.markDirty(), (n = true));
      }
      current = current.parentNode;
    }
  },
  _3i = (e) => {
    let t = e;
    while (t?.parentNode) t = t.parentNode;
    if (t && t.nodeName !== "#text") t.onRender?.();
  },
  RBt = (e, t) => {
    if (typeof t !== "string") t = String(t);
    if (e.nodeValue === t) return;
    ((e.nodeValue = t), NM(e));
  },
  EXr = (e) => {
    if ("childNodes" in e) for (let t of e.childNodes) EXr(t);
    e.yogaNode = void 0;
  };
