// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X_e
// matched 2.1.88 source: src/ink/styles.ts
// class=modified  jaccard=0.6641  score=0.9862  fileCov=0.6703
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function d3d(e) {
  return e === "absolute" ? 2 : 1;
}
function p3d(e) {
  return e === "none" ? 1 : 0;
}
function f3d(e) {
  switch (e) {
    case "wrap":
      return 1;
    case "wrap-reverse":
      return 2;
    default:
      return 0;
  }
}
function m3d(e) {
  switch (e) {
    case "row":
      return 2;
    case "row-reverse":
      return 3;
    case "column-reverse":
      return 1;
    default:
      return 0;
  }
}
function k3i(e, t) {
  switch (e) {
    case "auto":
      return 0;
    case "stretch":
      return 4;
    case "flex-start":
      return 1;
    case "center":
      return 2;
    case "flex-end":
      return 3;
    default:
      return t;
  }
}
function g3d(e) {
  switch (e) {
    case "center":
      return 1;
    case "flex-end":
      return 2;
    case "space-between":
      return 3;
    case "space-around":
      return 4;
    case "space-evenly":
      return 5;
    default:
      return 0;
  }
}
function nLn(e, t, n) {
  if (typeof n === "string") e.setPositionPercent(t, Number.parseInt(n, 10));
  else if (typeof n === "number") e.setPosition(t, n);
  else e.setPosition(t, Number.NaN);
}
var h3d = (e, t) => {
    if ("position" in t) e.setPositionType(d3d(t.position));
    if ("top" in t) nLn(e, 1, t.top);
    if ("bottom" in t) nLn(e, 3, t.bottom);
    if ("left" in t) nLn(e, 0, t.left);
    if ("right" in t) nLn(e, 2, t.right);
  },
  y3d = (e, t) => {
    let n = t.overflowY ?? t.overflow,
      r = t.overflowX ?? t.overflow;
    if (n === "scroll" || r === "scroll") e.setOverflow(2);
    else if (n === "hidden" || r === "hidden") e.setOverflow(1);
    else if ("overflow" in t || "overflowX" in t || "overflowY" in t) e.setOverflow(0);
  },
  _3d = (e, t) => {
    if ("margin" in t) e.setMargin(8, t.margin ?? 0);
    if ("marginX" in t) e.setMargin(6, t.marginX ?? 0);
    if ("marginY" in t) e.setMargin(7, t.marginY ?? 0);
    if ("marginLeft" in t) {
      let n = t.marginLeft;
      if (n === "auto") e.setMarginAuto(4);
      else e.setMargin(4, n || 0);
    }
    if ("marginRight" in t) {
      let n = t.marginRight;
      if (n === "auto") e.setMarginAuto(5);
      else e.setMargin(5, n || 0);
    }
    if ("marginTop" in t) e.setMargin(1, t.marginTop || 0);
    if ("marginBottom" in t) e.setMargin(3, t.marginBottom || 0);
  },
  b3d = (e, t) => {
    if ("padding" in t) e.setPadding(8, t.padding ?? 0);
    if ("paddingX" in t) e.setPadding(6, t.paddingX ?? 0);
    if ("paddingY" in t) e.setPadding(7, t.paddingY ?? 0);
    if ("paddingLeft" in t) e.setPadding(0, t.paddingLeft || 0);
    if ("paddingRight" in t) e.setPadding(2, t.paddingRight || 0);
    if ("paddingTop" in t) e.setPadding(1, t.paddingTop || 0);
    if ("paddingBottom" in t) e.setPadding(3, t.paddingBottom || 0);
  },
  S3d = (e, t) => {
    if ("flexGrow" in t) e.setFlexGrow(t.flexGrow ?? 0);
    if ("flexShrink" in t) {
      let n = t.flexShrink;
      e.setFlexShrink(typeof n === "number" ? n : 1);
    }
    if ("flexWrap" in t) e.setFlexWrap(f3d(t.flexWrap));
    if ("flexDirection" in t) e.setFlexDirection(m3d(t.flexDirection));
    if ("flexBasis" in t) {
      let n = t.flexBasis;
      if (typeof n === "number") e.setFlexBasis(n);
      else if (typeof n === "string") e.setFlexBasisPercent(Number.parseInt(n, 10));
      else e.setFlexBasis(Number.NaN);
    }
    if ("alignItems" in t) e.setAlignItems(k3i(t.alignItems, 4));
    if ("alignSelf" in t) e.setAlignSelf(k3i(t.alignSelf, 0));
    if ("justifyContent" in t) e.setJustifyContent(g3d(t.justifyContent));
  },
  E3d = (e, t) => {
    if ("width" in t) {
      let n = t.width;
      if (typeof n === "number") e.setWidth(n);
      else if (typeof n === "string") e.setWidthPercent(Number.parseInt(n, 10));
      else e.setWidthAuto();
    }
    if ("height" in t) {
      let n = t.height;
      if (typeof n === "number") e.setHeight(n);
      else if (typeof n === "string") e.setHeightPercent(Number.parseInt(n, 10));
      else e.setHeightAuto();
    }
    if ("minWidth" in t) {
      let n = t.minWidth;
      if (typeof n === "string") e.setMinWidthPercent(Number.parseInt(n, 10));
      else e.setMinWidth(n ?? 0);
    }
    if ("minHeight" in t) {
      let n = t.minHeight;
      if (typeof n === "string") e.setMinHeightPercent(Number.parseInt(n, 10));
      else e.setMinHeight(n ?? 0);
    }
    if ("maxWidth" in t) {
      let n = t.maxWidth;
      if (typeof n === "string") e.setMaxWidthPercent(Number.parseInt(n, 10));
      else e.setMaxWidth(n);
    }
    if ("maxHeight" in t) {
      let n = t.maxHeight;
      if (typeof n === "string") e.setMaxHeightPercent(Number.parseInt(n, 10));
      else e.setMaxHeight(n);
    }
  },
  A3d = (e, t) => {
    if ("display" in t) e.setDisplay(p3d(t.display));
  },
  H3d = (e, t, n) => {
    let r = n ?? t;
    if ("borderStyle" in t) {
      let o = t.borderStyle ? 1 : 0;
      (e.setBorder(1, r.borderTop !== false ? o : 0),
        e.setBorder(3, r.borderBottom !== false ? o : 0),
        e.setBorder(0, r.borderLeft !== false ? o : 0),
        e.setBorder(2, r.borderRight !== false ? o : 0));
    } else {
      let o = r.borderStyle ? 1 : 0;
      if ("borderTop" in t) e.setBorder(1, t.borderTop === false ? 0 : o);
      if ("borderBottom" in t) e.setBorder(3, t.borderBottom === false ? 0 : o);
      if ("borderLeft" in t) e.setBorder(0, t.borderLeft === false ? 0 : o);
      if ("borderRight" in t) e.setBorder(2, t.borderRight === false ? 0 : o);
    }
  },
  T3d = (e, t) => {
    if ("gap" in t) e.setGap(2, t.gap ?? 0);
    if ("columnGap" in t) e.setGap(0, t.columnGap ?? 0);
    if ("rowGap" in t) e.setGap(1, t.rowGap ?? 0);
  },
  v3d = (e, t = {}, n) => {
    (h3d(e, t),
      y3d(e, t),
      _3d(e, t),
      b3d(e, t),
      S3d(e, t),
      E3d(e, t),
      A3d(e, t),
      H3d(e, t, n),
      T3d(e, t));
  },
  CXr;
