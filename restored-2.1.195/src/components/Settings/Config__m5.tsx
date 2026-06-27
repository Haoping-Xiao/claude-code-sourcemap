// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module str
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=modified (alt of src/components/Settings/Config.tsx)  jaccard=0.0121  score=0.1018  fileCov=0.0135
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module str] deps: components/Settings/Config.tsx, constants/outputStyles.ts, utils/debug.ts, highlight.js/lib/languages/mathematica.js, utils/effort.ts, utils/http.ts, utils/config.ts, main.tsx, utils/permissions/permissionSetup.ts, utils/modelCost.ts, utils/ide.ts, utils/markdownConfigLoader.ts, utils/log.ts, components/Settings/Config.tsx, utils/settings/settings.ts
oRf = new Map([
  ["agentsView", "/config (Agents view row)"],
  ["autoUpdatesChannel", "/channel"],
  ["showExternalIncludesDialog", "/config (External CLAUDE.md row)"],
]);
function NotifChannelLabel(t0) {
  let t = v7t.c(46),
    {
      title: n,
      color: r,
      defaultTab: o,
      children: s,
      hidden: i,
      useFullWidth: a,
      selectedTab: l,
      onTabChange: c,
      banner: u,
      disableNavigation: d,
      initialHeaderFocused: p,
      contentHeight: f,
      navFromContent: m,
    } = t0,
    g = p === void 0 ? true : p,
    h = m === void 0 ? false : m,
    { columns: y } = br(),
    b = s.map(pRf),
    _ = o ? b.findIndex((nn) => o === nn[0]) : 0,
    S = l !== void 0,
    [A, v] = FL.useState(_ !== -1 ? _ : 0),
    C = S ? b.findIndex((nn) => nn[0] === l) : -1,
    x = S ? (C !== -1 ? C : 0) : A,
    I = FL.useContext(Xj),
    k = elt(),
    D = bPn(),
    P = FL.useRef(null),
    [O, L] = FL.useState(0),
    M;
  if (t[0] !== O)
    ((M = () => {
      let nn = P.current ? tX(P.current).height : 0;
      if (nn !== O) L(nn);
    }),
      (t[0] = O),
      (t[1] = M));
  else M = t[1];
  FL.useLayoutEffect(M);
  let N = (i ? 0 : 2) + O,
    B,
    $;
  if (t[2] !== D || t[3] !== N)
    ((B = () => {
      if (!D) return;
      return (D(N), () => D(null));
    }),
      ($ = [D, N]),
      (t[2] = D),
      (t[3] = N),
      (t[4] = B),
      (t[5] = $));
  else ((B = t[4]), ($ = t[5]));
  FL.useLayoutEffect(B, $);
  let q;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((q = {
      rows: 0,
      columns: 0,
    }),
      (t[6] = q));
  else q = t[6];
  let { rows: W } = bb(q),
    V = D !== null && k !== null,
    Y = V ? W - N : void 0,
    z;
  if (t[7] !== I || t[8] !== V)
    ((z =
      I && V
        ? {
            ...I,
            claimScrollBox: null,
          }
        : null),
      (t[7] = I),
      (t[8] = V),
      (t[9] = z));
  else z = t[9];
  let K = z,
    Z = false,
    J = FL.useRef(null),
    { focus: ne, focusDirection: oe, blur: re } = yat(),
    [ee, ce] = FL.useState(g),
    ae;
  if (t[10] !== ne)
    ((ae = () => {
      if (Z && J.current) ne(J.current);
      ce(true);
    }),
      (t[10] = ne),
      (t[11] = ae));
  else ae = t[11];
  let de = ae,
    Ee;
  if (t[12] !== re)
    ((Ee = () => {
      if (Z) re();
      ce(false);
    }),
      (t[12] = re),
      (t[13] = Ee));
  else Ee = t[13];
  let me = Ee,
    [pe, ge] = FL.useState(0),
    he;
  if (t[14] === Symbol.for("react.memo_cache_sentinel"))
    ((he = () => (ge(dRf), () => ge(uRf))), (t[14] = he));
  else he = t[14];
  let ie = he,
    le = pe > 0,
    He = ee || !le,
    ye = (nn) => {
      let Ln = b[nn]?.[0];
      if (S && c && Ln) c(Ln);
      else v(nn);
      de();
    },
    ue = (nn) => {
      ye((x + b.length + nn) % b.length);
    },
    we = !i && !d && He,
    Ce;
  if (t[15] !== we)
    ((Ce = {
      context: "Tabs",
      isActive: we,
    }),
      (t[15] = we),
      (t[16] = Ce));
  else Ce = t[16];
  No(
    {
      "tabs:next": () => ue(1),
      "tabs:previous": () => ue(-1),
    },
    Ce,
  );
  let Ie;
  if (t[17] !== d || t[18] !== oe || t[19] !== ee || t[20] !== i || t[21] !== le)
    ((Ie = (nn) => {
      if (i || d) return;
      if (Z) {
        if (!ee) {
          if (
            nn.key === "left" ||
            nn.key === "right" ||
            nn.key === "tab" ||
            (le && (nn.key === "up" || nn.key === "down"))
          )
            nn.preventDefault();
          return;
        }
        if (nn.key === "left" || nn.key === "right" || nn.key === "tab") nn.preventDefault();
        else if (nn.key === "down" && le) (nn.preventDefault(), oe("down"), ce(false));
        return;
      }
      if (!le) return;
      if (nn.key === "up" || nn.key === "down") {
        if ((nn.preventDefault(), ee && nn.key === "down")) ce(false);
      }
    }),
      (t[17] = d),
      (t[18] = oe),
      (t[19] = ee),
      (t[20] = i),
      (t[21] = le),
      (t[22] = Ie));
  else Ie = t[22];
  let Ve = Ie,
    Ze = !Z && h && !ee && le && !i && !d,
    Be;
  if (t[23] !== Ze)
    ((Be = {
      context: "Tabs",
      isActive: Ze,
    }),
      (t[23] = Ze),
      (t[24] = Be));
  else Be = t[24];
  No(
    {
      "tabs:next": () => ue(1),
      "tabs:previous": () => ue(-1),
    },
    Be,
  );
  let Me = n ? rn(n) + 1 : 0,
    Ue = b.reduce(cRf, 0),
    tt = Me + Ue,
    bt = a ? Math.max(0, y - tt) : 0,
    Ke = a ? y : void 0,
    Et = U,
    ct = "column",
    Je = Z ? void 0 : 0,
    gt = Z ? void 0 : g,
    st = Z ? void 0 : Ve,
    xt = k ? 0 : void 0,
    vt =
      !i &&
      GN.jsxs(U, {
        ref: Z ? J : void 0,
        tabIndex: Z ? 0 : void 0,
        autoFocus: Z ? g : void 0,
        onFocus: Z ? () => ce(true) : void 0,
        onBlur: Z ? () => ce(false) : void 0,
        onKeyDown: Z ? Ve : void 0,
        flexDirection: "row",
        gap: 1,
        flexShrink: k ? 0 : void 0,
        alignSelf: Z && !a ? "flex-start" : void 0,
        children: [
          n !== void 0 &&
            GN.jsx(w, {
              bold: true,
              color: r,
              children: n,
            }),
          b.map((nn, Ln) => {
            let [Hn, kr] = nn;
            return GN.jsx(
              fRf,
              {
                title: kr,
                isCurrent: x === Ln,
                headerFocused: He && !d,
                color: r,
                onClick: d ? void 0 : () => ye(Ln),
              },
              Hn,
            );
          }),
          bt > 0 &&
            GN.jsx(w, {
              children: " ".repeat(bt),
            }),
        ],
      }),
    jt;
  if (t[25] !== u)
    ((jt =
      u != null &&
      GN.jsx(U, {
        ref: P,
        flexDirection: "column",
        flexShrink: 0,
        children: u,
      })),
      (t[25] = u),
      (t[26] = jt));
  else jt = t[26];
  let en;
  if (
    t[27] !== K ||
    t[28] !== s ||
    t[29] !== f ||
    t[30] !== Ke ||
    t[31] !== i ||
    t[32] !== k ||
    t[33] !== V ||
    t[34] !== Y ||
    t[35] !== x
  )
    ((en = V
      ? GN.jsx(U, {
          width: Ke,
          marginTop: i ? 0 : 1,
          flexShrink: 0,
          children: GN.jsx(
            Rq,
            {
              ref: k,
              flexDirection: "column",
              flexShrink: 0,
              maxHeight: Y,
              stickyScroll: false,
              children: GN.jsx(Xj, {
                value: K,
                children: s,
              }),
            },
            x,
          ),
        })
      : GN.jsx(U, {
          width: Ke,
          marginTop: i ? 0 : 1,
          height: f,
          overflowY: f !== void 0 ? "hidden" : void 0,
          flexShrink: k ? 0 : void 0,
          children: s,
        })),
      (t[27] = K),
      (t[28] = s),
      (t[29] = f),
      (t[30] = Ke),
      (t[31] = i),
      (t[32] = k),
      (t[33] = V),
      (t[34] = Y),
      (t[35] = x),
      (t[36] = en));
  else en = t[36];
  let Dn;
  if (
    t[37] !== Et ||
    t[38] !== Je ||
    t[39] !== gt ||
    t[40] !== st ||
    t[41] !== xt ||
    t[42] !== vt ||
    t[43] !== jt ||
    t[44] !== en
  )
    ((Dn = GN.jsxs(Et, {
      flexDirection: ct,
      tabIndex: Je,
      autoFocus: gt,
      onKeyDown: st,
      flexShrink: xt,
      children: [vt, jt, en],
    })),
      (t[37] = Et),
      (t[38] = Je),
      (t[39] = gt),
      (t[40] = st),
      (t[41] = xt),
      (t[42] = vt),
      (t[43] = jt),
      (t[44] = en),
      (t[45] = Dn));
  else Dn = t[45];
  return GN.jsx(itr.Provider, {
    value: {
      selectedTab: b[x][0],
      width: Ke,
      headerFocused: ee,
      focusHeader: de,
      blurHeader: me,
      registerOptIn: ie,
    },
    children: Dn,
  });
}
function cRf(e, t) {
  let [, n] = t;
  return e + (n ? rn(n) : 0) + 2 + 1;
}
function uRf(e) {
  return e - 1;
}
function dRf(e) {
  return e + 1;
}
function pRf(e) {
  return [e.props.id ?? e.props.title, e.props.title];
}
function fRf(e) {
  let t = v7t.c(15),
    { title: n, isCurrent: r, headerFocused: o, color: s, onClick: i } = e,
    [a, l] = FL.useState(false),
    c = i !== void 0,
    u = r && o,
    d;
  if (t[0] !== u)
    ((d = {
      line: 0,
      column: 1,
      active: u,
    }),
      (t[0] = u),
      (t[1] = d));
  else d = t[1];
  let p = RW(d),
    f = s && r && o,
    m,
    g;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((m = () => l(true)), (g = () => l(false)), (t[2] = m), (t[3] = g));
  else ((m = t[2]), (g = t[3]));
  let h;
  if (t[4] !== c || t[5] !== s || t[6] !== f || t[7] !== a || t[8] !== r || t[9] !== n)
    ((h = f
      ? GN.jsx(pE, {
          color: s,
          bold: true,
          padded: true,
          children: n,
        })
      : GN.jsxs(w, {
          inverse: r,
          bold: r,
          underline: a && c,
          children: [" ", n, " "],
        })),
      (t[4] = c),
      (t[5] = s),
      (t[6] = f),
      (t[7] = a),
      (t[8] = r),
      (t[9] = n),
      (t[10] = h));
  else h = t[10];
  let y;
  if (t[11] !== p || t[12] !== i || t[13] !== h)
    ((y = GN.jsx(U, {
      ref: p,
      onClick: i,
      onMouseEnter: m,
      onMouseLeave: g,
      children: h,
    })),
      (t[11] = p),
      (t[12] = i),
      (t[13] = h),
      (t[14] = y));
  else y = t[14];
  return y;
}
function sm(e) {
  let t = v7t.c(4),
    { title: n, id: r, children: o } = e,
    { selectedTab: s, width: i } = FL.useContext(itr),
    a = YE();
  if (s !== (r ?? n)) return null;
  let l = a ? 0 : void 0,
    c;
  if (t[0] !== o || t[1] !== l || t[2] !== i)
    ((c = GN.jsx(U, {
      width: i,
      flexShrink: l,
      children: o,
    })),
      (t[0] = o),
      (t[1] = l),
      (t[2] = i),
      (t[3] = c));
  else c = t[3];
  return c;
}
function _Ml() {
  let { width: e } = FL.useContext(itr);
  return e;
}
function tx() {
  let e = v7t.c(6),
    { headerFocused: t, focusHeader: n, blurHeader: r, registerOptIn: o } = FL.useContext(itr),
    s;
  if (e[0] !== o) ((s = [o]), (e[0] = o), (e[1] = s));
  else s = e[1];
  FL.useLayoutEffect(o, s);
  let i;
  if (e[2] !== r || e[3] !== n || e[4] !== t)
    ((i = {
      headerFocused: t,
      focusHeader: n,
      blurHeader: r,
    }),
      (e[2] = r),
      (e[3] = n),
      (e[4] = t),
      (e[5] = i));
  else i = e[5];
  return i;
}
var v7t, FL, GN, itr;
