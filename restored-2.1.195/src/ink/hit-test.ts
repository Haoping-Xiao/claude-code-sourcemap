// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lJr
// matched 2.1.88 source: src/ink/hit-test.ts
// class=modified  jaccard=0.4024  score=0.6247  fileCov=0.5306
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lJr]
UBt = class UBt extends Qte {
  col;
  row;
  localCol = 0;
  localRow = 0;
  cellIsBlank;
  hyperlinkUrl;
  defaultAllowed = false;
  allowDefault() {
    this.defaultAllowed = true;
  }
  constructor(e, t, n, r) {
    super();
    ((this.col = e), (this.row = t), (this.cellIsBlank = n), (this.hyperlinkUrl = r));
  }
};
function FBt(e, t, n) {
  let r = Cy.get(e);
  if (!r) return null;
  let o = t >= r.x && t < r.x + r.width && n >= r.y && n < r.y + r.height;
  if (!o && !e.hasAbsoluteDescendant) return null;
  let s = null,
    i = false;
  for (let a = e.childNodes.length - 1; a >= 0; a--) {
    let l = e.childNodes[a];
    if (l.nodeName === "#text") continue;
    let c = Cy.get(l);
    if (!c) continue;
    let u = t >= c.x && t < c.x + c.width && n >= c.y && n < c.y + c.height;
    if (!u && !l.hasAbsoluteDescendant) continue;
    if (s !== null && u) continue;
    let d = FBt(l, t, n);
    if (!d) continue;
    let p = !u;
    if (s === null || (p && !i)) ((s = d), (i = p));
    if (i) break;
  }
  return s ?? (o ? e : null);
}
function JGi(e, t, n, r = false, o) {
  let s = FBt(e, t, n) ?? void 0;
  if (!s) return false;
  if (e.focusManager) {
    let l = s;
    while (l) {
      if (typeof l.attributes.tabIndex === "number") {
        e.focusManager.handleClickFocus(l);
        break;
      }
      l = l.parentNode;
    }
  }
  let i = new UBt(t, n, r, o),
    a = false;
  while (s) {
    let l = s._eventHandlers?.onClick;
    if (l) {
      let c = Cy.get(s);
      if (c) ((i.localCol = t - c.x), (i.localRow = n - c.y));
      if (((i.defaultAllowed = false), l(i), i.didStopImmediatePropagation()))
        return !i.defaultAllowed;
      if (!i.defaultAllowed) a = true;
    }
    s = s.parentNode;
  }
  return a;
}
function QGi(e, t, n, r, o = false) {
  let s = new Set(),
    i = FBt(e, t, n) ?? void 0;
  while (i) {
    let a = i._eventHandlers;
    if ((a?.onMouseEnter || a?.onMouseLeave) && !(o && i.attributes.hoverIgnoresBlankCells))
      s.add(i);
    i = i.parentNode;
  }
  for (let a of r)
    if (!s.has(a)) {
      if ((r.delete(a), a.parentNode)) a._eventHandlers?.onMouseLeave?.();
    }
  for (let a of s) if (!r.has(a)) (r.add(a), a._eventHandlers?.onMouseEnter?.());
}
