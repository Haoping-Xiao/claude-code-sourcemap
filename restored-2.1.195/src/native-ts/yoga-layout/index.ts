// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nRn
// matched 2.1.88 source: src/native-ts/yoga-layout/index.ts
// class=modified  jaccard=0.1972  score=0.962  fileCov=0.1988
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module nRn] (exports=Fzh, module=pFi)
var Fzh = {};
var pFi = {
  exports: Fzh,
};
pFi.exports = dFi();
var XYr = () => {};
function lRn(e) {
  return {
    unit: 1,
    value: e,
  };
}
function U7(e) {
  return {
    unit: 2,
    value: e,
  };
}
function uT(e, t) {
  switch (e.unit) {
    case 1:
      return e.value;
    case 2:
      return isNaN(t) ? NaN : (e.value * t) / 100;
    default:
      return NaN;
  }
}
function d_(e) {
  return !isNaN(e);
}
function IU(e, t) {
  return e === t || (e !== e && t !== t);
}
function JYr(e) {
  return new Float64Array(e).fill(NaN);
}
function fFi() {
  return {
    direction: 0,
    flexDirection: 0,
    justifyContent: 0,
    alignItems: 4,
    alignSelf: 0,
    alignContent: 1,
    flexWrap: 0,
    overflow: 0,
    display: 0,
    positionType: 1,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: q_e,
    margin: [, , , , , , , , ,].fill(u8),
    padding: [, , , , , , , , ,].fill(u8),
    border: [, , , , , , , , ,].fill(u8),
    position: [, , , , , , , , ,].fill(u8),
    gap: [, , ,].fill(u8),
    width: q_e,
    height: q_e,
    minWidth: u8,
    minHeight: u8,
    maxWidth: u8,
    maxHeight: u8,
  };
}
function Wke(e, t, n, r = false) {
  let o = e[t];
  if (o.unit === 0)
    if (t === xU || t === d8) o = e[6];
    else o = e[7];
  if (o.unit === 0) o = e[8];
  if (o.unit === 0) {
    if (t === xU) o = e[4];
    if (t === d8) o = e[5];
  }
  if (o.unit === 0) return 0;
  if (o.unit === 3) return r ? NaN : 0;
  return uT(o, n);
}
function dne(e, t) {
  let n = e[t];
  if (n.unit === 0)
    if (t === xU || t === d8) n = e[6];
    else n = e[7];
  if (n.unit === 0) n = e[8];
  if (n.unit === 0) {
    if (t === xU) n = e[4];
    if (t === d8) n = e[5];
  }
  return n;
}
function vce(e, t) {
  return dne(e, t).unit === 3;
}
function mFi(e) {
  for (let t = 0; t < 9; t++) if (e[t].unit === 3) return true;
  return false;
}
function rRn(e) {
  for (let t = 0; t < 9; t++) if (e[t].unit !== 0) return true;
  return false;
}
function QYr(e, t, n) {
  let r = e[6],
    o = e[7],
    s = e[8],
    i = e[4],
    a = e[5],
    l = isNaN(t) ? NaN : t / 100,
    c = e[0];
  if (c.unit === 0) c = r;
  if (c.unit === 0) c = s;
  if (c.unit === 0) c = i;
  if (((n[0] = oRn(c, l)), (c = e[1]), c.unit === 0)) c = o;
  if (c.unit === 0) c = s;
  if (((n[1] = oRn(c, l)), (c = e[2]), c.unit === 0)) c = r;
  if (c.unit === 0) c = s;
  if (c.unit === 0) c = a;
  if (((n[2] = oRn(c, l)), (c = e[3]), c.unit === 0)) c = o;
  if (c.unit === 0) c = s;
  n[3] = oRn(c, l);
}
function oRn(e, t) {
  let n = e.unit;
  if (n === 1) return e.value;
  if (n === 2) return e.value * t;
  return 0;
}
function rBt(e) {
  return e === 2 || e === 3;
}
function DFi(e) {
  return e === 3 || e === 1;
}
function _Ud(e) {
  return rBt(e) ? 0 : 2;
}
function uRn(e) {
  switch (e) {
    case 2:
      return xU;
    case 3:
      return d8;
    case 0:
      return F7;
    case 1:
      return Cce;
  }
}
function r7r(e) {
  switch (e) {
    case 2:
      return d8;
    case 3:
      return xU;
    case 0:
      return Cce;
    case 1:
      return F7;
  }
}
function PFi() {
  let e = {
    pointScaleFactor: 1,
    errata: 0,
    useWebDefaults: false,
    free() {},
    isExperimentalFeatureEnabled() {
      return false;
    },
    setExperimentalFeatureEnabled() {},
    setPointScaleFactor(t) {
      e.pointScaleFactor = t;
    },
    getErrata() {
      return e.errata;
    },
    setErrata(t) {
      e.errata = t;
    },
    setUseWebDefaults(t) {
      e.useWebDefaults = t;
    },
  };
  return e;
}
class aRn {
  style;
  layout;
  parent;
  children;
  measureFunc;
  config;
  isDirty_;
  isReferenceBaseline_;
  _sz = new Float64Array(3);
  _lineIndex = 0;
  _hasAutoMargin = false;
  _hasPosition = false;
  _hasPadding = false;
  _hasBorder = false;
  _hasMargin = false;
  _lc = JYr(6);
  _lWM = 0;
  _lHM = 0;
  _lFW = false;
  _lFH = false;
  _hasL = false;
  _mc = JYr(6);
  _mWM = 0;
  _mHM = 0;
  _hasM = false;
  _fb = JYr(5);
  _fbCrossMode = 0;
  _fbGen = -1;
  _cIn = null;
  _cOut = null;
  _cGen = -1;
  _cN = 0;
  _cWr = 0;
  _mGen = -1;
  constructor(e) {
    ((this.style = fFi()),
      (this.layout = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        border: new Float64Array(4),
        padding: new Float64Array(4),
        margin: new Float64Array(4),
      }),
      (this.parent = null),
      (this.children = []),
      (this.measureFunc = null),
      (this.config = e ?? bUd),
      (this.isDirty_ = true),
      (this.isReferenceBaseline_ = false),
      t7r++);
  }
  insertChild(e, t) {
    ((e.parent = this), this.children.splice(t, 0, e), this.markDirty());
  }
  removeChild(e) {
    let t = this.children.indexOf(e);
    if (t >= 0) (this.children.splice(t, 1), (e.parent = null), this.markDirty());
  }
  getChild(e) {
    return this.children[e];
  }
  getChildCount() {
    return this.children.length;
  }
  getParent() {
    return this.parent;
  }
  free() {
    ((this.parent = null),
      (this.children = []),
      (this.measureFunc = null),
      (this._cIn = null),
      (this._cOut = null),
      t7r--);
  }
  freeRecursive() {
    let e = this.children;
    for (let t = 0, n = e.length; t < n; t++) e[t].freeRecursive();
    this.free();
  }
  reset() {
    ((this.style = fFi()),
      (this.children = []),
      (this.parent = null),
      (this.measureFunc = null),
      (this.isDirty_ = true),
      (this._hasAutoMargin = false),
      (this._hasPosition = false),
      (this._hasPadding = false),
      (this._hasBorder = false),
      (this._hasMargin = false),
      (this._hasL = false),
      (this._hasM = false),
      (this._cN = 0),
      (this._cWr = 0),
      (this._fb[0] = NaN),
      (this._mGen = -1));
  }
  markDirty() {
    this.isDirty_ = true;
    let e = this.parent;
    if (e && !e.isDirty_) e.markDirty();
  }
  isDirty() {
    return this.isDirty_;
  }
  hasNewLayout() {
    return true;
  }
  markLayoutSeen() {}
  setMeasureFunc(e) {
    ((this.measureFunc = e), this.markDirty());
  }
  unsetMeasureFunc() {
    ((this.measureFunc = null), this.markDirty());
  }
  getComputedLeft() {
    return this.layout.left;
  }
  getComputedTop() {
    return this.layout.top;
  }
  getComputedWidth() {
    return this.layout.width;
  }
  getComputedHeight() {
    return this.layout.height;
  }
  getComputedRight() {
    let e = this.parent;
    if (!e) return 0;
    let t = this.layout;
    return e.layout.width - t.left - t.width;
  }
  getComputedBottom() {
    let e = this.parent;
    if (!e) return 0;
    let t = this.layout;
    return e.layout.height - t.top - t.height;
  }
  getComputedLayout() {
    return {
      left: this.layout.left,
      top: this.layout.top,
      right: this.getComputedRight(),
      bottom: this.getComputedBottom(),
      width: this.layout.width,
      height: this.layout.height,
    };
  }
  getComputedBorder(e) {
    return this.layout.border[e7r(e)];
  }
  getComputedPadding(e) {
    return this.layout.padding[e7r(e)];
  }
  getComputedMargin(e) {
    return this.layout.margin[e7r(e)];
  }
  setWidth(e) {
    ((this.style.width = une(e)), this.markDirty());
  }
  setWidthPercent(e) {
    ((this.style.width = U7(e)), this.markDirty());
  }
  setWidthAuto() {
    ((this.style.width = q_e), this.markDirty());
  }
  setHeight(e) {
    ((this.style.height = une(e)), this.markDirty());
  }
  setHeightPercent(e) {
    ((this.style.height = U7(e)), this.markDirty());
  }
  setHeightAuto() {
    ((this.style.height = q_e), this.markDirty());
  }
  setMinWidth(e) {
    ((this.style.minWidth = une(e)), this.markDirty());
  }
  setMinWidthPercent(e) {
    ((this.style.minWidth = U7(e)), this.markDirty());
  }
  setMinHeight(e) {
    ((this.style.minHeight = une(e)), this.markDirty());
  }
  setMinHeightPercent(e) {
    ((this.style.minHeight = U7(e)), this.markDirty());
  }
  setMaxWidth(e) {
    ((this.style.maxWidth = une(e)), this.markDirty());
  }
  setMaxWidthPercent(e) {
    ((this.style.maxWidth = U7(e)), this.markDirty());
  }
  setMaxHeight(e) {
    ((this.style.maxHeight = une(e)), this.markDirty());
  }
  setMaxHeightPercent(e) {
    ((this.style.maxHeight = U7(e)), this.markDirty());
  }
  setFlexDirection(e) {
    ((this.style.flexDirection = e), this.markDirty());
  }
  setFlexGrow(e) {
    ((this.style.flexGrow = e ?? 0), this.markDirty());
  }
  setFlexShrink(e) {
    ((this.style.flexShrink = e ?? 0), this.markDirty());
  }
  setFlex(e) {
    if (e === void 0 || isNaN(e)) ((this.style.flexGrow = 0), (this.style.flexShrink = 0));
    else if (e > 0)
      ((this.style.flexGrow = e), (this.style.flexShrink = 1), (this.style.flexBasis = lRn(0)));
    else if (e < 0) ((this.style.flexGrow = 0), (this.style.flexShrink = -e));
    else ((this.style.flexGrow = 0), (this.style.flexShrink = 0));
    this.markDirty();
  }
  setFlexBasis(e) {
    ((this.style.flexBasis = une(e)), this.markDirty());
  }
  setFlexBasisPercent(e) {
    ((this.style.flexBasis = U7(e)), this.markDirty());
  }
  setFlexBasisAuto() {
    ((this.style.flexBasis = q_e), this.markDirty());
  }
  setFlexWrap(e) {
    ((this.style.flexWrap = e), this.markDirty());
  }
  setAlignItems(e) {
    ((this.style.alignItems = e), this.markDirty());
  }
  setAlignSelf(e) {
    ((this.style.alignSelf = e), this.markDirty());
  }
  setAlignContent(e) {
    ((this.style.alignContent = e), this.markDirty());
  }
  setJustifyContent(e) {
    ((this.style.justifyContent = e), this.markDirty());
  }
  setDisplay(e) {
    ((this.style.display = e), this.markDirty());
  }
  getDisplay() {
    return this.style.display;
  }
  setPositionType(e) {
    ((this.style.positionType = e), this.markDirty());
  }
  setPosition(e, t) {
    ((this.style.position[e] = une(t)),
      (this._hasPosition = rRn(this.style.position)),
      this.markDirty());
  }
  setPositionPercent(e, t) {
    ((this.style.position[e] = U7(t)), (this._hasPosition = true), this.markDirty());
  }
  setPositionAuto(e) {
    ((this.style.position[e] = q_e), (this._hasPosition = true), this.markDirty());
  }
  setOverflow(e) {
    ((this.style.overflow = e), this.markDirty());
  }
  setDirection(e) {
    ((this.style.direction = e), this.markDirty());
  }
  setBoxSizing(e) {}
  setMargin(e, t) {
    let n = une(t);
    if (((this.style.margin[e] = n), n.unit === 3)) this._hasAutoMargin = true;
    else this._hasAutoMargin = mFi(this.style.margin);
    ((this._hasMargin = this._hasAutoMargin || rRn(this.style.margin)), this.markDirty());
  }
  setMarginPercent(e, t) {
    ((this.style.margin[e] = U7(t)),
      (this._hasAutoMargin = mFi(this.style.margin)),
      (this._hasMargin = true),
      this.markDirty());
  }
  setMarginAuto(e) {
    ((this.style.margin[e] = q_e),
      (this._hasAutoMargin = true),
      (this._hasMargin = true),
      this.markDirty());
  }
  setPadding(e, t) {
    ((this.style.padding[e] = une(t)),
      (this._hasPadding = rRn(this.style.padding)),
      this.markDirty());
  }
  setPaddingPercent(e, t) {
    ((this.style.padding[e] = U7(t)), (this._hasPadding = true), this.markDirty());
  }
  setBorder(e, t) {
    ((this.style.border[e] = t === void 0 ? u8 : lRn(t)),
      (this._hasBorder = rRn(this.style.border)),
      this.markDirty());
  }
  setGap(e, t) {
    ((this.style.gap[e] = une(t)), this.markDirty());
  }
  setGapPercent(e, t) {
    ((this.style.gap[e] = U7(t)), this.markDirty());
  }
  getFlexDirection() {
    return this.style.flexDirection;
  }
  getJustifyContent() {
    return this.style.justifyContent;
  }
  getAlignItems() {
    return this.style.alignItems;
  }
  getAlignSelf() {
    return this.style.alignSelf;
  }
  getAlignContent() {
    return this.style.alignContent;
  }
  getFlexGrow() {
    return this.style.flexGrow;
  }
  getFlexShrink() {
    return this.style.flexShrink;
  }
  getFlexBasis() {
    return this.style.flexBasis;
  }
  getFlexWrap() {
    return this.style.flexWrap;
  }
  getWidth() {
    return this.style.width;
  }
  getHeight() {
    return this.style.height;
  }
  getOverflow() {
    return this.style.overflow;
  }
  getPositionType() {
    return this.style.positionType;
  }
  getDirection() {
    return this.style.direction;
  }
  copyStyle(e) {}
  setDirtiedFunc(e) {}
  unsetDirtiedFunc() {}
  setIsReferenceBaseline(e) {
    ((this.isReferenceBaseline_ = e), this.markDirty());
  }
  isReferenceBaseline() {
    return this.isReferenceBaseline_;
  }
  setAspectRatio(e) {}
  getAspectRatio() {
    return NaN;
  }
  setAlwaysFormsContainingBlock(e) {}
  calculateLayout(e, t, n) {
    ((o7r = 0), (s7r = 0), (eBt = 0), qke++);
    let r = e === void 0 ? NaN : e,
      o = t === void 0 ? NaN : t;
    kit(this, r, o, d_(r) ? 1 : 0, d_(o) ? 1 : 0, r, o, true, false, false);
    let s = this.layout.margin,
      i = uT(dne(this.style.position, xU), d_(r) ? r : 0),
      a = uT(dne(this.style.position, F7), d_(r) ? r : 0);
    ((this.layout.left = s[xU] + (d_(i) ? i : 0)),
      (this.layout.top = s[F7] + (d_(a) ? a : 0)),
      jFi(this, this.config.pointScaleFactor, 0, 0));
  }
}
function SUd(e, t, n, r, o, s, i, a, l, c) {
  if (!e._cIn) ((e._cIn = new Float64Array(sRn * 8)), (e._cOut = new Float64Array(sRn * 2)));
  if (c && e._cGen !== qke) ((e._cN = 0), (e._cWr = 0));
  let u = e._cWr++ % sRn;
  if (e._cN < sRn) e._cN = e._cWr;
  let d = u * 8,
    p = e._cIn;
  ((p[d] = t),
    (p[d + 1] = n),
    (p[d + 2] = r),
    (p[d + 3] = o),
    (p[d + 4] = s),
    (p[d + 5] = i),
    (p[d + 6] = a ? 1 : 0),
    (p[d + 7] = l ? 1 : 0));
  let { _cOut: f, layout: m } = e;
  ((f[u * 2] = m.width), (f[u * 2 + 1] = m.height), (e._cGen = qke));
}
function EUd(e, t) {
  let n = e.layout,
    r = n.width,
    o = n.height;
  if (t) ((e._lc[4] = r), (e._lc[5] = o));
  else ((e._mc[4] = r), (e._mc[5] = o));
}
function dRn() {
  return {
    visited: o7r,
    measured: s7r,
    cacheHits: eBt,
    live: t7r,
  };
}
function AUd(e, t, n, r, o, s, i, a, l, c, u) {
  let d = e._cGen === qke && !l,
    p = l && e._mGen === qke,
    f = e.isDirty_;
  if ((f && !d) || p) return false;
  if (
    !f &&
    e._hasL &&
    e._lWM === o &&
    e._lHM === s &&
    e._lFW === c &&
    e._lFH === u &&
    IU(e._lc[0], n) &&
    IU(e._lc[1], r) &&
    IU(e._lc[2], i) &&
    IU(e._lc[3], a)
  )
    return (eBt++, (t.width = e._lc[4]), (t.height = e._lc[5]), true);
  let m = e._cN;
  if (m > 0 && (d || !f)) {
    let { _cIn: g, _cOut: h } = e,
      y = c ? 1 : 0,
      b = u ? 1 : 0;
    for (let _ = 0; _ < m; _++) {
      let S = _ * 8;
      if (
        g[S + 2] === o &&
        g[S + 3] === s &&
        g[S + 6] === y &&
        g[S + 7] === b &&
        IU(g[S], n) &&
        IU(g[S + 1], r) &&
        IU(g[S + 4], i) &&
        IU(g[S + 5], a)
      )
        return ((t.width = h[_ * 2]), (t.height = h[_ * 2 + 1]), eBt++, true);
    }
  }
  if (
    !f &&
    !l &&
    e._hasM &&
    e._mWM === o &&
    e._mHM === s &&
    IU(e._mc[0], n) &&
    IU(e._mc[1], r) &&
    IU(e._mc[2], i) &&
    IU(e._mc[3], a)
  )
    return ((t.width = e._mc[4]), (t.height = e._mc[5]), eBt++, true);
  return false;
}
function HUd(e, t, n, r, o, s, i, a, l, c) {
  let u = e.isDirty_;
  if (a) {
    if (
      ((e._lc[0] = t),
      (e._lc[1] = n),
      (e._lWM = r),
      (e._lHM = o),
      (e._lc[2] = s),
      (e._lc[3] = i),
      (e._lFW = l),
      (e._lFH = c),
      (e._hasL = true),
      (e.isDirty_ = false),
      u)
    )
      e._hasM = false;
  } else if (
    ((e._mc[0] = t),
    (e._mc[1] = n),
    (e._mWM = r),
    (e._mHM = o),
    (e._mc[2] = s),
    (e._mc[3] = i),
    (e._hasM = true),
    (e._mGen = qke),
    u)
  )
    e._hasL = false;
  return u;
}
function kit(e, t, n, r, o, s, i, a, l, c) {
  o7r++;
  let { style: u, layout: d } = e;
  if (AUd(e, d, t, n, r, o, s, i, a, l, c)) return;
  let p = HUd(e, t, n, r, o, s, i, a, l, c),
    f = d.padding,
    m = d.border,
    g = d.margin;
  if (e._hasPadding) QYr(u.padding, s, f);
  else f[0] = f[1] = f[2] = f[3] = 0;
  if (e._hasBorder) QYr(u.border, s, m);
  else m[0] = m[1] = m[2] = m[3] = 0;
  if (e._hasMargin) QYr(u.margin, s, g);
  else g[0] = g[1] = g[2] = g[3] = 0;
  let h = f[0] + f[2] + m[0] + m[2],
    y = f[1] + f[3] + m[1] + m[3],
    b = l ? NaN : uT(u.width, s),
    _ = c ? NaN : uT(u.height, i),
    S = t,
    A = n,
    v = r,
    C = o;
  if (d_(b)) ((S = b), (v = 1));
  if (d_(_)) ((A = _), (C = 1));
  if (((S = pne(u, true, S, s, i)), (A = pne(u, false, A, s, i)), e.children.length === 0)) {
    if (e.measureFunc) TUd(e, u, d, S, A, v, C, h, y, s, i);
    else
      ((d.width = v === 1 ? S : pne(u, true, h, s, i)),
        (d.height = C === 1 ? A : pne(u, false, y, s, i)));
  } else vUd(e, u, d, S, A, v, C, h, y, s, i, a);
  (EUd(e, a), SUd(e, t, n, r, o, s, i, l, c, p));
}
function TUd(e, t, n, r, o, s, i, a, l, c, u) {
  let d = s === 0 ? NaN : Math.max(0, r - a),
    p = i === 0 ? NaN : Math.max(0, o - l);
  s7r++;
  let f = e.measureFunc(d, s, p, i);
  ((n.width = s === 1 ? r : pne(t, true, (f.width ?? 0) + a, c, u)),
    (n.height = i === 1 ? o : pne(t, false, (f.height ?? 0) + l, c, u)));
}
function vUd(e, t, n, r, o, s, i, a, l, c, u, d) {
  let { padding: p, border: f } = n,
    m = t.flexDirection,
    g = _Ud(m),
    h = rBt(m),
    y = h ? r : o,
    b = h ? o : r,
    _ = h ? s : i,
    S = h ? i : s,
    A = h ? a : l,
    v = h ? l : a,
    C = d_(y) ? Math.max(0, y - A) : NaN,
    x = d_(b) ? Math.max(0, b - v) : NaN,
    I = HFi(t, h ? 0 : 1, C),
    k = [],
    D = [];
  FFi(e, k, D);
  let P = d_(r) ? r : NaN,
    O = d_(o) ? o : NaN,
    L = t.flexWrap !== 0,
    M = HFi(t, h ? 1 : 0, x),
    N = k.length;
  for (let Ue = 0; Ue < N; Ue++) {
    let tt = k[Ue];
    tt._sz[Iit] = MUd(tt, m, C, x, S, P, O);
  }
  let B;
  if (!L || !d_(C) || N === 0) {
    for (let Ue = 0; Ue < N; Ue++) k[Ue]._lineIndex = 0;
    B = [k];
  } else B = xUd(k, C, h, m, P, O, I);
  let $ = B.length,
    q = BUd(e, k),
    W = new Float64Array($),
    V = new Float64Array($),
    Y = q ? new Float64Array($) : wUd,
    z = h ? c : u,
    K = 0,
    Z = 0;
  for (let Ue = 0; Ue < $; Ue++) {
    let tt = B[Ue];
    CUd(tt, t, m, g, h, C, x, S, I, P, O, z, A, L, d);
    let bt = $Fi;
    if (q) bt = kUd(e, tt, P, Y, Ue, bt);
    let Ke = MFi;
    ((W[Ue] = Ke), (V[Ue] = bt), (K = Math.max(K, Ke)), (Z += bt));
  }
  let J = $ > 1 ? M * ($ - 1) : 0;
  Z += J;
  let ne = t.overflow === 2,
    oe = K + A,
    re =
      _ === 1 ? y : _ === 2 && ne ? Math.max(Math.min(y, oe), A) : L && $ > 1 && _ === 2 ? y : oe,
    ee = Z + v,
    ce = S === 1 ? b : S === 2 && ne ? Math.max(Math.min(b, ee), v) : ee,
    ae = pne(t, true, h ? re : ce, c, u),
    de = pne(t, false, h ? ce : re, c, u);
  if (((n.width = ae), (n.height = de), !d)) return;
  let Ee = (h ? ae : de) - A,
    me = (h ? de : ae) - v,
    pe = uRn(m),
    ge = h ? F7 : xU,
    he = h ? Cce : d8,
    ie = DFi(m),
    le = h ? ae : de,
    ye = p[ge] + f[ge],
    ue = M,
    we = me - Z;
  if ($ === 1 && !L && !q) V[0] = me;
  else (RUd(t.alignContent, we, $, V), (ye += Cit), (ue += tGe));
  let Ce = t.flexWrap === 2,
    Ie = h ? de : ae,
    Ve = L || S !== 1,
    Ze = p[pe] + f[pe],
    Be = t.alignItems,
    Me = ye;
  for (let Ue = 0; Ue < $; Ue++) {
    let tt = B[Ue],
      bt = V[Ue];
    if (Ve) LUd(tt, Be, h, g, ge, he, bt, P, O, d);
    (IUd(
      tt,
      t,
      m,
      h,
      bt,
      Ce ? Ie - Me - bt : Me,
      W[Ue],
      Ee,
      Ze,
      le,
      I,
      P,
      ie,
      Ce,
      q,
      q ? Y[Ue] : 0,
    ),
      (Me += bt + ue));
  }
  for (let Ue = 0, tt = D.length; Ue < tt; Ue++) PUd(e, D[Ue], ae, de, p, f);
}
function CUd(e, t, n, r, o, s, i, a, l, c, u, d, p, f, m) {
  let g = e.length,
    h = t.alignItems,
    y = g > 1 ? l * (g - 1) : 0,
    b = y;
  for (let D = 0; D < g; D++) {
    let P = e[D];
    b += P._sz[Iit] + nGe(P, n, c);
  }
  let _ = s;
  if (_ !== _) {
    let D = uT(o ? t.minWidth : t.minHeight, d),
      P = uT(o ? t.maxWidth : t.maxHeight, d);
    if (P === P && b > P - p) _ = Math.max(0, P - p);
    else if (D === D && b < D - p) _ = Math.max(0, D - p);
  }
  NUd(e, _, b, o, c, u);
  let S = o ? F7 : xU,
    A = o ? Cce : d8,
    v = i === i,
    C = 0;
  for (let D = 0; D < g; D++) {
    let P = e[D],
      O = P.style,
      L = O.alignSelf,
      M = L === 0 ? h : L,
      N = nGe(P, r, c),
      B = NaN,
      $ = 0,
      q = uT(o ? O.height : O.width, o ? u : c),
      W = false;
    if (P._hasAutoMargin) {
      let K = O.margin;
      W = vce(K, S) || vce(K, A);
    }
    if (q === q) ((B = q), ($ = 1));
    else if (M === 4 && !W && !f && v && a === 1) ((B = Math.max(0, i - N)), ($ = 1));
    else if (!f && v) ((B = Math.max(0, i - N)), ($ = 2));
    let V = o ? P._sz[wce] : B,
      Y = o ? B : P._sz[wce];
    kit(P, V, Y, o ? 1 : $, o ? $ : 1, c, u, m, o, !o);
    let z = P.layout;
    ((P._sz[nBt] = o ? z.height : z.width), (C = Math.max(C, P._sz[nBt] + N)));
  }
  let x = uRn(n),
    I = r7r(n),
    k = y;
  for (let D = 0; D < g; D++) {
    let P = e[D],
      O = P.layout.margin;
    k += P._sz[wce] + O[x] + O[I];
  }
  ((MFi = k), ($Fi = C));
}
function IUd(e, t, n, r, o, s, i, a, l, c, u, d, p, f, m, g) {
  let h = e.length,
    y = t.alignItems,
    b = uRn(n),
    _ = r7r(n),
    S = r ? F7 : xU,
    A = r ? Cce : d8,
    v = l,
    C = u,
    x = 0;
  for (let O = 0; O < h; O++) {
    let L = e[O];
    if (!L._hasAutoMargin) continue;
    let M = L.style.margin;
    if (vce(M, b)) x++;
    if (vce(M, _)) x++;
  }
  let I = a - i,
    k = Math.max(0, I),
    D = x > 0 && k > 0 ? k / x : 0;
  if (x === 0)
    switch (t.justifyContent) {
      case 0:
        break;
      case 1:
        v += I / 2;
        break;
      case 2:
        v += I;
        break;
      case 3:
        if (h > 1) C += k / (h - 1);
        break;
      case 4:
        if (h > 0) ((C += k / h), (v += k / h / 2));
        break;
      case 5:
        if (h > 0) ((C += k / (h + 1)), (v += k / (h + 1)));
        break;
    }
  let P = v;
  for (let O = 0; O < h; O++) {
    let L = e[O],
      M = L.style,
      N = L.layout,
      B = L._sz[wce],
      $ = M.margin,
      q = N.margin,
      W = false,
      V = false,
      Y = false,
      z = false,
      K,
      Z,
      J,
      ne;
    if (L._hasAutoMargin)
      ((W = vce($, b)),
        (V = vce($, _)),
        (Y = vce($, S)),
        (z = vce($, A)),
        (K = W ? D : q[b]),
        (Z = V ? D : q[_]),
        (J = Y ? 0 : q[S]),
        (ne = z ? 0 : q[A]));
    else ((K = q[b]), (Z = q[_]), (J = q[S]), (ne = q[A]));
    let oe = p ? c - (P + K) - B : P + K,
      re = M.alignSelf,
      ee = re === 0 ? y : re,
      ce = s + J,
      ae = o - L._sz[nBt] - J - ne;
    if (Y && z) ce += Math.max(0, ae) / 2;
    else if (Y) ce += Math.max(0, ae);
    else if (z);
    else
      switch (ee) {
        case 1:
        case 4:
          if (f) ce += ae;
          break;
        case 2:
          ce += ae / 2;
          break;
        case 3:
          if (!f) ce += ae;
          break;
        case 5:
          if (m) ce = s + g - i7r(L);
          break;
        default:
          break;
      }
    let de = r ? oe : ce,
      Ee = r ? ce : oe;
    if (L._hasPosition) DUd(L, d, N, de, Ee);
    else ((N.left = de), (N.top = Ee));
    P += B + K + Z + C;
  }
}
function xUd(e, t, n, r, o, s, i) {
  let a = [],
    l = e.length,
    c = 0,
    u = 0;
  for (let d = 0; d < l; d++) {
    let p = e[d],
      f = pne(p.style, n, p._sz[Iit], o, s),
      m = Math.max(0, f) + nGe(p, r, o),
      g = d > c ? i : 0;
    if (d > c && u + g + m > t) (a.push(e.slice(c, d)), (c = d), (u = m));
    else u += g + m;
    p._lineIndex = a.length;
  }
  return (a.push(e.slice(c)), a);
}
function kUd(e, t, n, r, o, s) {
  let i = 0,
    a = 0;
  for (let c = 0, u = t.length; c < u; c++) {
    let d = t[c];
    if (BFi(e, d) !== 5) continue;
    let p = d.style.margin,
      f = Wke(p, F7, n),
      m = Wke(p, Cce, n),
      g = i7r(d) + f,
      h = d.layout.height + f + m - g;
    if (g > i) i = g;
    if (h > a) a = h;
  }
  r[o] = i;
  let l = i + a;
  return l > s ? l : s;
}
function RUd(e, t, n, r) {
  let o = Math.max(0, t);
  switch (((Cit = 0), (tGe = 0), e)) {
    case 1:
      break;
    case 2:
      Cit = t / 2;
      break;
    case 3:
      Cit = t;
      break;
    case 4:
      if (n > 0 && o > 0) {
        let s = o / n;
        for (let i = 0; i < n; i++) r[i] += s;
      }
      break;
    case 6:
      if (n > 1) tGe = o / (n - 1);
      break;
    case 7:
      if (n > 0) ((tGe = o / n), (Cit = tGe / 2));
      break;
    case 8:
      if (n > 0) ((tGe = o / (n + 1)), (Cit = tGe));
      break;
    default:
      break;
  }
}
function LUd(e, t, n, r, o, s, i, a, l, c) {
  for (let u = 0, d = e.length; u < d; u++) {
    let p = e[u],
      f = p.style,
      m = f.alignSelf;
    if ((m === 0 ? t : m) !== 4) continue;
    if (d_(uT(n ? f.height : f.width, n ? l : a))) continue;
    if (p._hasAutoMargin) {
      let _ = f.margin;
      if (vce(_, o) || vce(_, s)) continue;
    }
    let y = nGe(p, r, a),
      b = Math.max(0, i - y);
    if (p._sz[nBt] !== b) {
      let _ = p._sz[wce];
      (kit(p, n ? _ : b, n ? b : _, 1, 1, a, l, c, n, !n), (p._sz[nBt] = b));
    }
  }
}
function DUd(e, t, n, r, o) {
  let s = e.style.position,
    i = uT(dne(s, xU), t),
    a = uT(dne(s, d8), t),
    l = uT(dne(s, F7), t),
    c = uT(dne(s, Cce), t),
    u = d_(i) ? i : d_(a) ? -a : 0,
    d = d_(l) ? l : d_(c) ? -c : 0;
  ((n.left = r + u), (n.top = o + d));
}
function PUd(e, t, n, r, o, s) {
  let i = t.style,
    a = dne(i.position, xU),
    l = dne(i.position, d8),
    c = dne(i.position, F7),
    u = dne(i.position, Cce),
    d = uT(a, n),
    p = uT(l, n),
    f = uT(c, r),
    m = uT(u, r),
    g = n - s[0] - s[2],
    h = r - s[1] - s[3],
    y = uT(i.width, g),
    b = uT(i.height, h);
  if (!d_(y) && d_(d) && d_(p)) y = g - d - p;
  if (!d_(b) && d_(f) && d_(m)) b = h - f - m;
  kit(t, y, b, d_(y) ? 1 : 0, d_(b) ? 1 : 0, g, h, true, false, false);
  let _ = Wke(i.margin, xU, n),
    S = Wke(i.margin, F7, n),
    A = Wke(i.margin, d8, n),
    v = Wke(i.margin, Cce, n),
    C = e.style,
    x = C.flexDirection,
    I = DFi(x),
    k = rBt(x),
    D = C.flexWrap === 2,
    P = C.justifyContent,
    O = i.alignSelf,
    L = O === 0 ? C.alignItems : O,
    M = t.layout,
    N = M.width,
    B = M.height,
    $;
  if (d_(d)) $ = s[0] + d + _;
  else if (d_(p)) $ = n - s[2] - p - N - A;
  else if (k) {
    let W = o[0] + s[0],
      V = n - o[2] - s[2];
    $ = I ? V - N - A : gFi(P, W, V, N) + _;
  } else $ = hFi(L, o[0] + s[0], n - o[2] - s[2], N, D) + _;
  let q;
  if (d_(f)) q = s[1] + f + S;
  else if (d_(m)) q = r - s[3] - m - B - v;
  else if (k) q = hFi(L, o[1] + s[1], r - o[3] - s[3], B, D) + S;
  else {
    let W = o[1] + s[1],
      V = r - o[3] - s[3];
    q = I ? V - B - v : gFi(P, W, V, B) + S;
  }
  ((M.left = $), (M.top = q));
}
function gFi(e, t, n, r) {
  switch (e) {
    case 1:
      return t + (n - t - r) / 2;
    case 2:
      return n - r;
    default:
      return t;
  }
}
function hFi(e, t, n, r, o) {
  switch (e) {
    case 2:
      return t + (n - t - r) / 2;
    case 3:
      return o ? t : n - r;
    default:
      return o ? n - r : t;
  }
}
function MUd(e, t, n, r, o, s, i) {
  let a = e._fb;
  if (
    (e._fbGen === qke || !e.isDirty_) &&
    e._fbCrossMode === o &&
    IU(a[_Fi], s) &&
    IU(a[bFi], i) &&
    IU(a[SFi], n) &&
    IU(a[EFi], r)
  )
    return a[yFi];
  let l = rBt(t) ? $Ud(e, n, r, o, s, i) : OUd(e, n, r, o, s, i);
  return (
    (a[yFi] = l),
    (a[_Fi] = s),
    (a[bFi] = i),
    (a[SFi] = n),
    (a[EFi] = r),
    (e._fbCrossMode = o),
    (e._fbGen = qke),
    l
  );
}
function $Ud(e, t, n, r, o, s) {
  let i = e.style,
    a = uT(i.flexBasis, t);
  if (a === a) return a > 0 ? a : 0;
  let l = uT(i.width, o);
  if (l === l) return l > 0 ? l : 0;
  let c = uT(i.height, s),
    u;
  if (c === c) u = 1;
  else if (n === n) ((c = n - nGe(e, 0, o)), (u = r === 1 && NFi(e) ? 1 : 2));
  else u = 0;
  let d = NaN,
    p = 0;
  if (t === t && OFi(e)) ((d = t - nGe(e, 2, o)), (p = 2));
  return (kit(e, d, c, p, u, o, s, false, false, false), e.layout.width);
}
function OUd(e, t, n, r, o, s) {
  let i = e.style,
    a = uT(i.flexBasis, t);
  if (a === a) return a > 0 ? a : 0;
  let l = uT(i.height, s);
  if (l === l) return l > 0 ? l : 0;
  let c = uT(i.width, o),
    u;
  if (c === c) u = 1;
  else if (n === n) ((c = n - nGe(e, 2, o)), (u = r === 1 && NFi(e) ? 1 : 2));
  else u = 0;
  return (kit(e, c, NaN, u, 0, o, s, false, false, false), e.layout.height);
}
function OFi(e) {
  if (e.measureFunc) return true;
  let t = e.children;
  for (let n = 0, r = t.length; n < r; n++) if (OFi(t[n])) return true;
  return false;
}
function iRn(e) {
  return tBt[e >>> 5] & (1 << e);
}
function AFi(e) {
  tBt[e >>> 5] |= 1 << e;
}
function NUd(e, t, n, r, o, s) {
  let i = e.length,
    a = (i + 31) >>> 5;
  if (a > tBt.length) tBt = new Int32Array(a * 2);
  if (i > ZYr.length) ZYr = new Float64Array(i * 2);
  let l = ZYr;
  tBt.fill(0, 0, a);
  let c = d_(t) ? t - n : 0;
  for (let u = 0; u < i; u++) {
    let d = e[u],
      p = d.style,
      f = d._sz[Iit],
      m = pne(p, r, f, o, s);
    if (!d_(t) || (c >= 0 ? p.flexGrow === 0 : p.flexShrink === 0))
      ((d._sz[wce] = Math.max(0, m)), AFi(u));
    else d._sz[wce] = f;
  }
  for (let u = 0; u <= i; u++) {
    let d = 0,
      p = 0,
      f = 0,
      m = 0;
    for (let b = 0; b < i; b++) {
      let _ = e[b],
        S = _._sz[Iit];
      if (iRn(b)) d += _._sz[wce] - S;
      else {
        let A = _.style;
        ((p += A.flexGrow), (f += A.flexShrink * S), m++);
      }
    }
    if (m === 0) break;
    let g = c - d;
    if (g > 0 && p > 0 && p < 1) {
      let b = c * p;
      if (b < g) g = b;
    } else if (g < 0 && f > 0) {
      let b = 0;
      for (let _ = 0; _ < i; _++) if (!iRn(_)) b += e[_].style.flexShrink;
      if (b < 1) {
        let _ = c * b;
        if (_ > g) g = _;
      }
    }
    let h = 0;
    for (let b = 0; b < i; b++) {
      if (iRn(b)) continue;
      let _ = e[b],
        S = _.style,
        A = _._sz[Iit],
        v = A;
      if (g > 0 && p > 0) v += (g * S.flexGrow) / p;
      else if (g < 0 && f > 0) v += (g * (S.flexShrink * A)) / f;
      l[b] = v;
      let C = Math.max(0, pne(S, r, v, o, s));
      ((_._sz[wce] = C), (h += C - v));
    }
    if (h === 0) break;
    let y = false;
    for (let b = 0; b < i; b++) {
      if (iRn(b)) continue;
      let _ = e[b]._sz[wce] - l[b];
      if ((h > 0 && _ > 0) || (h < 0 && _ < 0)) (AFi(b), (y = true));
    }
    if (!y) break;
  }
}
function NFi(e) {
  let t = e.parent;
  if (!t) return false;
  let n = e.style.alignSelf;
  return (n === 0 ? t.style.alignItems : n) === 4;
}
function BFi(e, t) {
  let n = t.style.alignSelf;
  return n === 0 ? e.style.alignItems : n;
}
function i7r(e) {
  let t = e.children,
    n = t.length,
    r = -1;
  for (let s = 0; s < n; s++) {
    let i = t[s];
    if (i._lineIndex > 0) break;
    let a = i.style;
    if (a.positionType === 2) continue;
    if (a.display === 1) continue;
    if (BFi(e, i) === 5 || i.isReferenceBaseline_) {
      r = s;
      break;
    }
    if (r === -1) r = s;
  }
  if (r === -1) return e.layout.height;
  let o = t[r];
  return i7r(o) + o.layout.top;
}
function BUd(e, t) {
  let n = e.style;
  if (!rBt(n.flexDirection)) return false;
  if (n.alignItems === 5) return true;
  for (let r = 0, o = t.length; r < o; r++) if (t[r].style.alignSelf === 5) return true;
  return false;
}
function nGe(e, t, n) {
  if (!e._hasMargin) return 0;
  let r = e.style.margin,
    o = Wke(r, uRn(t), n),
    s = Wke(r, r7r(t), n);
  return o + s;
}
function HFi(e, t, n) {
  let r = e.gap,
    o = r[t];
  if (o.unit === 0) o = r[2];
  let s = uT(o, n);
  return d_(s) ? Math.max(0, s) : 0;
}
function pne(e, t, n, r, o) {
  let s = t ? e.minWidth : e.minHeight,
    i = t ? e.maxWidth : e.maxHeight,
    a = s.unit,
    l = i.unit;
  if (a === 0 && l === 0) return n;
  return UUd(n, a, l, s.value, i.value, t ? r : o);
}
function UUd(e, t, n, r, o, s) {
  let i = e;
  if (n === 1) {
    if (i > o) i = o;
  } else if (n === 2) {
    let a = (o * s) / 100;
    if (a === a && i > a) i = a;
  }
  if (t === 1) {
    if (i < r) i = r;
  } else if (t === 2) {
    let a = (r * s) / 100;
    if (a === a && i < a) i = a;
  }
  return i;
}
function n7r(e) {
  ((e.left = 0), (e.top = 0), (e.width = 0), (e.height = 0));
}
function FUd(e) {
  (n7r(e.layout), (e.isDirty_ = true), (e._hasL = false), (e._hasM = false));
}
function UFi(e) {
  let t = e.children;
  for (let n = 0, r = t.length; n < r; n++) {
    let o = t[n];
    (FUd(o), UFi(o));
  }
}
function FFi(e, t, n) {
  let r = e.children;
  for (let o = 0, s = r.length; o < s; o++) {
    let i = r[o],
      a = i.style,
      l = a.display;
    if (l === 1) (n7r(i.layout), UFi(i));
    else if (l === 2) (n7r(i.layout), FFi(i, t, n));
    else if (a.positionType === 2) n.push(i);
    else t.push(i);
  }
}
function jFi(e, t, n, r) {
  if (t === 0) return;
  let o = e.layout,
    s = o.left,
    i = o.top,
    a = o.width,
    l = o.height,
    c = n + s,
    u = r + i,
    d = e.measureFunc !== null;
  ((o.left = wit(s, t, false, d)), (o.top = wit(i, t, false, d)));
  let p = c + a,
    f = u + l,
    m = !TFi(a * t),
    g = !TFi(l * t);
  ((o.width = wit(p, t, d && m, d && !m) - wit(c, t, false, d)),
    (o.height = wit(f, t, d && g, d && !g) - wit(u, t, false, d)));
  let h = e.children;
  for (let y = 0, b = h.length; y < b; y++) jFi(h[y], t, c, u);
}
function TFi(e) {
  let t = e - Math.floor(e);
  return t < 0.0001 || t > 0.9999;
}
function wit(e, t, n, r) {
  let o = e * t,
    s = o - Math.floor(o);
  if (s < 0) s += 1;
  if (s < 0.0001) o = Math.floor(o);
  else if (s > 0.9999) o = Math.ceil(o);
  else if (n) o = Math.ceil(o);
  else if (r) o = Math.floor(o);
  else o = Math.floor(o) + (s >= 0.4999 ? 1 : 0);
  return o / t;
}
function une(e) {
  if (e === void 0) return u8;
  if (e === "auto") return q_e;
  if (typeof e === "number") return Number.isFinite(e) ? lRn(e) : u8;
  if (typeof e === "string" && e.endsWith("%")) return U7(parseFloat(e));
  let t = parseFloat(e);
  return isNaN(t) ? u8 : lRn(t);
}
function e7r(e) {
  switch (e) {
    case 0:
    case 4:
      return xU;
    case 1:
      return F7;
    case 2:
    case 5:
      return d8;
    case 3:
      return Cce;
    default:
      return xU;
  }
}
var u8,
  q_e,
  Iit = 0,
  wce = 1,
  nBt = 2,
  xU = 0,
  F7 = 1,
  d8 = 2,
  Cce = 3,
  bUd,
  sRn = 4,
  qke = 0,
  o7r = 0,
  s7r = 0,
  eBt = 0,
  t7r = 0,
  wUd,
  Cit = 0,
  tGe = 0,
  MFi = 0,
  $Fi = 0,
  yFi = 0,
  _Fi = 1,
  bFi = 2,
  SFi = 3,
  EFi = 4,
  tBt,
  ZYr,
  jUd,
  GFi;
