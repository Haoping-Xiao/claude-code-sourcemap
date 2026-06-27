// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module R3i
// matched 2.1.88 source: src/ink/reconciler.ts
// class=modified (alt of src/ink/reconciler.ts)  jaccard=0.115  score=0.6667  fileCov=0.122
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module R3i] deps: aGe
CXr = v3d;
function N3i(e, t, n) {
  if (!e._eventHandlers) e._eventHandlers = {};
  e._eventHandlers[t] = n;
}
function w3d(e) {
  let t = e._eventHandlers;
  if (!t) return false;
  for (let n of AXr) if (t[n] != null) return true;
  return false;
}
function B3i(e, t) {
  if (e.setRawMode) e.setRawMode(t > 0);
  else e._pendingRawModeDelta = (e._pendingRawModeDelta ?? 0) + t;
}
function P3i(e, t) {
  let n = w3d(e);
  if (n === !!e._holdsRawModeRef) return;
  ((e._holdsRawModeRef = n), B3i(t, n ? 1 : -1));
}
function LXr(e, t) {
  if (e._holdsRawModeRef) ((e._holdsRawModeRef = false), B3i(t, -1));
  for (let n of e.childNodes) if (n.nodeName !== "#text") LXr(n, t);
}
function C3d(e, t, n) {
  if (t === "children") return;
  if (t === "style") {
    if ((SXr(e, n), e.yogaNode)) CXr(e.yogaNode, n);
    return;
  }
  if (t === "textStyles") {
    e.textStyles = n;
    return;
  }
  if (t === "accessibility") {
    bXr(e, n);
    return;
  }
  if (HXr.has(t)) {
    N3i(e, t, n);
    return;
  }
  _Xr(e, t, n);
}
function U3i(e) {
  let t = [],
    n = new Set(),
    r = e;
  for (let o = 0; r && o < 50; o++) {
    if (n.has(r)) break;
    n.add(r);
    let s = r.elementType,
      i =
        typeof s === "function"
          ? s.displayName || s.name
          : typeof s === "string"
            ? void 0
            : s?.displayName || s?.name;
    if (i && i !== t.at(-1)) t.push(i);
    r = r._debugOwner ?? r.return;
  }
  return t;
}
function M3i(e) {
  try {
    let t = U3i(e);
    return t.length > 0 ? ` (owner chain: ${t.join(" > ")})` : "";
  } catch {
    return "";
  }
}
function PXr() {
  if (IXr === void 0) IXr = Oe.CLAUDE_CODE_DEBUG_REPAINTS;
  return IXr;
}
function F3i(e) {
  MXr = e;
}
function j3i() {
  return MXr;
}
function G3i() {
  DBt = performance.now();
}
function W3i() {
  return $Xr;
}
function q3i() {
  ((MXr = 0), ($Xr = 0), (DBt = 0));
}
var LBt,
  O3i,
  L3i = (e, t) => {
    if (e === t) return;
    if (!e) return t;
    let n = {},
      r = false;
    for (let o of Object.keys(e))
      if (t ? !Object.hasOwn(t, o) : true) ((n[o] = void 0), (r = true));
    if (t) {
      for (let o of Object.keys(t)) if (t[o] !== e[o]) ((n[o] = t[o]), (r = true));
    }
    return r ? n : void 0;
  },
  D3i = (e) => {
    let t = e.yogaNode;
    if (t) (t.unsetMeasureFunc(), EXr(e), t.freeRecursive());
  },
  IXr,
  f8,
  Sne,
  xXr = 0,
  $3i = 0,
  kXr = 0,
  rLn = 0,
  oLn = 0,
  RXr = 0,
  MXr = 0,
  $Xr = 0,
  DBt = 0,
  DXr,
  Ene;
