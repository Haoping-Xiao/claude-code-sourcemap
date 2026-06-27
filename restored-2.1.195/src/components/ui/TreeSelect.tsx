// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LVl
// matched 2.1.88 source: src/components/ui/TreeSelect.tsx
// class=modified  jaccard=0.4686  score=0.6618  fileCov=0.6161
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module LVl] deps: Ye, ps, LL, wpe, es, _a, Cc, Bs, Ko, CH, qXt
((kVl = R(lt(), 1)), (Nor = R(rt(), 1)), (S3 = R(se(), 1)));
function TreeSelect(e) {
  let t = DVl.c(48),
    {
      nodes: n,
      onSelect: r,
      onCancel: o,
      onFocus: s,
      focusNodeId: i,
      visibleOptionCount: a,
      layout: l,
      isDisabled: c,
      hideIndexes: u,
      isNodeExpanded: d,
      onExpand: p,
      onCollapse: f,
      getParentPrefix: m,
      getChildPrefix: g,
      onUpFromFirstItem: h,
    } = e,
    y = l === void 0 ? "expanded" : l,
    b = c === void 0 ? false : c,
    _ = u === void 0 ? false : u,
    S;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((S = new Set()), (t[0] = S));
  else S = t[0];
  let [A, v] = aJt.useState(S),
    C = aJt.useRef(false),
    x = aJt.useRef(null),
    I;
  if (t[1] !== A || t[2] !== d)
    ((I = (me) => {
      if (d) return d(me);
      return A.has(me);
    }),
      (t[1] = A),
      (t[2] = d),
      (t[3] = I));
  else I = t[3];
  let k = I,
    D;
  if (t[4] !== k || t[5] !== n) {
    let me = function (pe, ge, he) {
      let ie = !!pe.children && pe.children.length > 0,
        le = k(pe.id);
      if (
        (D.push({
          node: pe,
          depth: ge,
          isExpanded: le,
          hasChildren: ie,
          parentId: he,
        }),
        ie && le && pe.children)
      )
        for (let He of pe.children) me(He, ge + 1, pe.id);
    };
    D = [];
    for (let pe of n) me(pe, 0);
    ((t[4] = k), (t[5] = n), (t[6] = D));
  } else D = t[6];
  let P = D,
    O = TGf,
    L = HGf,
    M = m ?? O,
    N = g ?? L,
    B;
  if (t[7] !== N || t[8] !== M)
    ((B = (me) => {
      let pe = "";
      if (me.hasChildren) pe = M(me.isExpanded);
      else if (me.depth > 0) pe = N(me.depth);
      return pe + me.node.label;
    }),
      (t[7] = N),
      (t[8] = M),
      (t[9] = B));
  else B = t[9];
  let $ = B,
    q;
  if (t[10] !== $ || t[11] !== P)
    ((q = P.map((me) => ({
      label: $(me),
      description: me.node.description,
      dimDescription: me.node.dimDescription ?? true,
      value: me.node.id,
    }))),
      (t[10] = $),
      (t[11] = P),
      (t[12] = q));
  else q = t[12];
  let W = q,
    V;
  if (t[13] !== P)
    ((V = new Map()), P.forEach((me) => V.set(me.node.id, me.node)), (t[13] = P), (t[14] = V));
  else V = t[14];
  let Y = V,
    z;
  if (t[15] !== P) ((z = (me) => P.find((pe) => pe.node.id === me)), (t[15] = P), (t[16] = z));
  else z = t[16];
  let K = z,
    Z;
  if (t[17] !== K || t[18] !== f || t[19] !== p)
    ((Z = (me, pe) => {
      let ge = K(me);
      if (!ge || !ge.hasChildren) return;
      if (pe) {
        if (p) p(me);
        else v((he) => new Set(he).add(me));
      } else if (f) f(me);
      else
        v((he) => {
          let ie = new Set(he);
          return (ie.delete(me), ie);
        });
    }),
      (t[17] = K),
      (t[18] = f),
      (t[19] = p),
      (t[20] = Z));
  else Z = t[20];
  let J = Z,
    ne;
  if (t[21] !== K || t[22] !== i || t[23] !== b || t[24] !== Y || t[25] !== s || t[26] !== J)
    ((ne = (me) => {
      if (!i || b) return;
      let pe = K(i);
      if (!pe) return;
      if (me.key === "right" && pe.hasChildren) (me.preventDefault(), J(i, true));
      else if (me.key === "left") {
        if (pe.hasChildren && pe.isExpanded) (me.preventDefault(), J(i, false));
        else if (pe.parentId !== void 0) {
          if ((me.preventDefault(), (C.current = true), J(pe.parentId, false), s)) {
            let ge = Y.get(pe.parentId);
            if (ge) s(ge);
          }
        }
      }
    }),
      (t[21] = K),
      (t[22] = i),
      (t[23] = b),
      (t[24] = Y),
      (t[25] = s),
      (t[26] = J),
      (t[27] = ne));
  else ne = t[27];
  let oe = ne,
    re;
  if (t[28] !== Y || t[29] !== r)
    ((re = (me) => {
      let pe = Y.get(me);
      if (!pe) return;
      r(pe);
    }),
      (t[28] = Y),
      (t[29] = r),
      (t[30] = re));
  else re = t[30];
  let ee = re,
    ce;
  if (t[31] !== Y || t[32] !== s)
    ((ce = (me) => {
      if (C.current) {
        C.current = false;
        return;
      }
      if (x.current === me) return;
      if (((x.current = me), s)) {
        let pe = Y.get(me);
        if (pe) s(pe);
      }
    }),
      (t[31] = Y),
      (t[32] = s),
      (t[33] = ce));
  else ce = t[33];
  let ae = ce,
    de;
  if (
    t[34] !== i ||
    t[35] !== ee ||
    t[36] !== ae ||
    t[37] !== _ ||
    t[38] !== b ||
    t[39] !== y ||
    t[40] !== o ||
    t[41] !== h ||
    t[42] !== W ||
    t[43] !== a
  )
    ((de = x2o.jsx(Sr, {
      options: W,
      onChange: ee,
      onFocus: ae,
      onCancel: o,
      defaultFocusValue: i,
      visibleOptionCount: a,
      layout: y,
      isDisabled: b,
      hideIndexes: _,
      onUpFromFirstItem: h,
    })),
      (t[34] = i),
      (t[35] = ee),
      (t[36] = ae),
      (t[37] = _),
      (t[38] = b),
      (t[39] = y),
      (t[40] = o),
      (t[41] = h),
      (t[42] = W),
      (t[43] = a),
      (t[44] = de));
  else de = t[44];
  let Ee;
  if (t[45] !== oe || t[46] !== de)
    ((Ee = x2o.jsx(U, {
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: oe,
      children: de,
    })),
      (t[45] = oe),
      (t[46] = de),
      (t[47] = Ee));
  else Ee = t[47];
  return Ee;
}
function HGf(e) {
  return "  \u25B8 ";
}
function TGf(e) {
  return e ? "\u25BC " : "\u25B6 ";
}
var DVl, aJt, x2o;
