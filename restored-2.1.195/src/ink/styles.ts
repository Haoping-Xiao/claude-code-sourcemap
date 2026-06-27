// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module X_e
// matched 2.1.88 source: src/ink/styles.ts
// class=modified  jaccard=0.6641  score=0.9862  fileCov=0.6703
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
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
function applyPositionEdge(node, edge, n) {
  if (typeof n === "string") node.setPositionPercent(edge, Number.parseInt(n, 10));
  else if (typeof n === "number") node.setPosition(edge, n);
  else node.setPosition(edge, Number.NaN);
}
var applyPositionStyles = (node, style) => {
    if ("position" in style) node.setPositionType(d3d(style.position));
    if ("top" in style) applyPositionEdge(node, 1, style.top);
    if ("bottom" in style) applyPositionEdge(node, 3, style.bottom);
    if ("left" in style) applyPositionEdge(node, 0, style.left);
    if ("right" in style) applyPositionEdge(node, 2, style.right);
  },
  applyOverflowStyles = (node, style) => {
    let n = style.overflowY ?? style.overflow,
      r = style.overflowX ?? style.overflow;
    if (n === "scroll" || r === "scroll") node.setOverflow(2);
    else if (n === "hidden" || r === "hidden") node.setOverflow(1);
    else if ("overflow" in style || "overflowX" in style || "overflowY" in style)
      node.setOverflow(0);
  },
  applyMarginStyles = (node, style) => {
    if ("margin" in style) node.setMargin(8, style.margin ?? 0);
    if ("marginX" in style) node.setMargin(6, style.marginX ?? 0);
    if ("marginY" in style) node.setMargin(7, style.marginY ?? 0);
    if ("marginLeft" in style) {
      let n = style.marginLeft;
      if (n === "auto") node.setMarginAuto(4);
      else node.setMargin(4, n || 0);
    }
    if ("marginRight" in style) {
      let n = style.marginRight;
      if (n === "auto") node.setMarginAuto(5);
      else node.setMargin(5, n || 0);
    }
    if ("marginTop" in style) node.setMargin(1, style.marginTop || 0);
    if ("marginBottom" in style) node.setMargin(3, style.marginBottom || 0);
  },
  applyPaddingStyles = (node, style) => {
    if ("padding" in style) node.setPadding(8, style.padding ?? 0);
    if ("paddingX" in style) node.setPadding(6, style.paddingX ?? 0);
    if ("paddingY" in style) node.setPadding(7, style.paddingY ?? 0);
    if ("paddingLeft" in style) node.setPadding(0, style.paddingLeft || 0);
    if ("paddingRight" in style) node.setPadding(2, style.paddingRight || 0);
    if ("paddingTop" in style) node.setPadding(1, style.paddingTop || 0);
    if ("paddingBottom" in style) node.setPadding(3, style.paddingBottom || 0);
  },
  applyFlexStyles = (node, style) => {
    if ("flexGrow" in style) node.setFlexGrow(style.flexGrow ?? 0);
    if ("flexShrink" in style) {
      let n = style.flexShrink;
      node.setFlexShrink(typeof n === "number" ? n : 1);
    }
    if ("flexWrap" in style) node.setFlexWrap(f3d(style.flexWrap));
    if ("flexDirection" in style) node.setFlexDirection(m3d(style.flexDirection));
    if ("flexBasis" in style) {
      let n = style.flexBasis;
      if (typeof n === "number") node.setFlexBasis(n);
      else if (typeof n === "string") node.setFlexBasisPercent(Number.parseInt(n, 10));
      else node.setFlexBasis(Number.NaN);
    }
    if ("alignItems" in style) node.setAlignItems(k3i(style.alignItems, 4));
    if ("alignSelf" in style) node.setAlignSelf(k3i(style.alignSelf, 0));
    if ("justifyContent" in style) node.setJustifyContent(g3d(style.justifyContent));
  },
  applyDimensionStyles = (node, style) => {
    if ("width" in style) {
      let n = style.width;
      if (typeof n === "number") node.setWidth(n);
      else if (typeof n === "string") node.setWidthPercent(Number.parseInt(n, 10));
      else node.setWidthAuto();
    }
    if ("height" in style) {
      let n = style.height;
      if (typeof n === "number") node.setHeight(n);
      else if (typeof n === "string") node.setHeightPercent(Number.parseInt(n, 10));
      else node.setHeightAuto();
    }
    if ("minWidth" in style) {
      let n = style.minWidth;
      if (typeof n === "string") node.setMinWidthPercent(Number.parseInt(n, 10));
      else node.setMinWidth(n ?? 0);
    }
    if ("minHeight" in style) {
      let n = style.minHeight;
      if (typeof n === "string") node.setMinHeightPercent(Number.parseInt(n, 10));
      else node.setMinHeight(n ?? 0);
    }
    if ("maxWidth" in style) {
      let n = style.maxWidth;
      if (typeof n === "string") node.setMaxWidthPercent(Number.parseInt(n, 10));
      else node.setMaxWidth(n);
    }
    if ("maxHeight" in style) {
      let n = style.maxHeight;
      if (typeof n === "string") node.setMaxHeightPercent(Number.parseInt(n, 10));
      else node.setMaxHeight(n);
    }
  },
  A3d = (e, t) => {
    if ("display" in t) e.setDisplay(p3d(t.display));
  },
  applyBorderStyles = (node, style, resolvedStyle) => {
    let r = resolvedStyle ?? style;
    if ("borderStyle" in style) {
      let o = style.borderStyle ? 1 : 0;
      (node.setBorder(1, r.borderTop !== false ? o : 0),
        node.setBorder(3, r.borderBottom !== false ? o : 0),
        node.setBorder(0, r.borderLeft !== false ? o : 0),
        node.setBorder(2, r.borderRight !== false ? o : 0));
    } else {
      let o = r.borderStyle ? 1 : 0;
      if ("borderTop" in style) node.setBorder(1, style.borderTop === false ? 0 : o);
      if ("borderBottom" in style) node.setBorder(3, style.borderBottom === false ? 0 : o);
      if ("borderLeft" in style) node.setBorder(0, style.borderLeft === false ? 0 : o);
      if ("borderRight" in style) node.setBorder(2, style.borderRight === false ? 0 : o);
    }
  },
  applyGapStyles = (node, style) => {
    if ("gap" in style) node.setGap(2, style.gap ?? 0);
    if ("columnGap" in style) node.setGap(0, style.columnGap ?? 0);
    if ("rowGap" in style) node.setGap(1, style.rowGap ?? 0);
  },
  v3d = (e, t = {}, n) => {
    (applyPositionStyles(e, t),
      applyOverflowStyles(e, t),
      applyMarginStyles(e, t),
      applyPaddingStyles(e, t),
      applyFlexStyles(e, t),
      applyDimensionStyles(e, t),
      A3d(e, t),
      applyBorderStyles(e, t, n),
      applyGapStyles(e, t));
  },
  CXr;
