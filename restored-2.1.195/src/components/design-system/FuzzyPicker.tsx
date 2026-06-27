// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module N6l
// matched 2.1.88 source: src/components/design-system/FuzzyPicker.tsx
// class=modified  jaccard=0.2627  score=0.3266  fileCov=0.5731
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module N6l] deps: services/analytics/index.ts
((Cjo = {
  type: "local-jsx",
  name: "usage",
  aliases: ["cost", "stats"],
  description: "Show session cost, plan usage, and activity stats",
  thinClientDispatch: "control-request",
  immediate: true,
  requires: {
    ink: true,
  },
  load: () => Promise.resolve().then(() => (R6l(), x6l)),
}),
  (Ijo = {
    type: "local",
    name: "usage",
    aliases: ["cost", "stats"],
    supportsNonInteractive: true,
    description: "Show session cost, plan usage, and what's contributing to your limits",
    isEnabled: () => Ir(),
    get isHidden() {
      return !Ir();
    },
    load: () => Promise.resolve().then(() => (O6l(), $6l)),
  }));
function FuzzyPicker({
  title: e,
  placeholder: t = "Type to search\u2026",
  initialQuery: n,
  items: r,
  getKey: o,
  renderItem: s,
  renderPreview: i,
  previewPosition: a = "bottom",
  visibleCount: l = oqf,
  direction: c = "down",
  onQueryChange: u,
  onSelect: d,
  onSelectMany: p,
  onTab: f,
  onShiftTab: m,
  onFocus: g,
  onCancel: h,
  resetKey: y,
  emptyMessage: b = "No results",
  matchLabel: _,
  selectAction: S = "select",
  cancelAction: A = "cancel",
  extraHints: v,
}) {
  let C = Pg(),
    { rows: x, columns: I } = br(),
    [k, D] = QHe.useState({
      focus: 0,
      window: 0,
    }),
    { focus: P, window: O } = k,
    [L, M] = QHe.useState(void 0),
    [N, B] = QHe.useState(new Map()),
    $ = p !== void 0,
    q = Boolean(_) || $,
    W = Math.max(iqf, Math.min(l, x - sqf - (q ? 1 : 0))),
    V = I < 120,
    Y = Math.max(0, r.length - W),
    z = (ue) => {
      (M(void 0),
        D(({ focus: we, window: Ce }) => {
          let Ie = _b(we + ue, 0, r.length - 1);
          return {
            focus: Ie,
            window: Ie < Ce ? Ie : Ie >= Ce + W ? Ie - W + 1 : Ce,
          };
        }));
    },
    K = (ue) => {
      if (ue === void 0) return;
      let we = o(ue);
      B((Ce) => {
        let Ie = new Map(Ce);
        if (Ie.has(we)) Ie.delete(we);
        else Ie.set(we, ue);
        return Ie;
      });
    },
    Z = (ue) => {
      D((we) => ({
        ...we,
        window: _b(we.window + ue, 0, Y),
      }));
    },
    J = (ue) => {
      if (ue.deltaY === 0) return;
      let we = ue.deltaY > 0;
      if (c === "up") Z(we ? -1 : 1);
      else Z(we ? 1 : -1);
      ue.stopImmediatePropagation();
    },
    {
      query: ne,
      cursorOffset: oe,
      handleKeyDown: re,
      handlePaste: ee,
    } = Uk({
      isActive: true,
      onExit: () => {},
      onCancel: h,
      initialQuery: n,
      backspaceExitsOnEmpty: false,
    }),
    ce = (ue) => {
      if (ue.key === "up" || (ue.ctrl && ue.key === "p")) {
        (ue.preventDefault(), ue.stopImmediatePropagation(), z(c === "up" ? 1 : -1));
        return;
      }
      if (ue.key === "down" || (ue.ctrl && ue.key === "n")) {
        (ue.preventDefault(), ue.stopImmediatePropagation(), z(c === "up" ? -1 : 1));
        return;
      }
      if (ue.key === "pageup" || ue.key === "pagedown") {
        (ue.preventDefault(), ue.stopImmediatePropagation());
        let we = ue.key === "pagedown" ? 1 : -1;
        z((c === "up" ? -we : we) * W);
        return;
      }
      if (ue.key === "return") {
        if ((ue.preventDefault(), ue.stopImmediatePropagation(), $ && N.size > 0)) {
          p([...N.values()]);
          return;
        }
        let we = r[P];
        if (we) d(we);
        return;
      }
      if (ue.key === "tab") {
        (ue.preventDefault(), ue.stopImmediatePropagation());
        let we = r[P];
        if ($) {
          (K(we), z(ue.shift ? -1 : 1));
          return;
        }
        let Ce = ue.shift ? (m ?? f) : f;
        if (Ce) Ce.handler(we);
        else if (we) d(we);
        return;
      }
      re(ue);
    };
  (QHe.useEffect(() => {
    (u(ne),
      D({
        focus: 0,
        window: 0,
      }),
      M(void 0));
  }, [ne]),
    QHe.useEffect(() => {
      (D((ue) => ({
        focus: _b(ue.focus, 0, r.length - 1),
        window: _b(ue.window, 0, Y),
      })),
        M(void 0));
    }, [r.length, Y]),
    QHe.useEffect(() => {
      if (y === void 0) return;
      (D({
        focus: 0,
        window: 0,
      }),
        M(void 0));
    }, [y]));
  let ae = r[P],
    de = L ?? ae;
  QHe.useEffect(() => {
    g?.(de);
  }, [de]);
  let Ee = r.slice(O, O + W),
    me = (ue) => {
      if ($ && N.size > 0) K(ue);
      else d(ue);
    },
    pe = typeof b === "function" ? b(ne) : b,
    ge = q
      ? OH.jsxs(w, {
          dimColor: true,
          children: [
            _,
            _ && N.size > 0 ? " \xB7 " : null,
            N.size > 0
              ? OH.jsxs(w, {
                  children: [
                    OH.jsx(w, {
                      color: "success",
                      children: N.size,
                    }),
                    " selected",
                  ],
                })
              : null,
            !_ && N.size === 0 ? " " : null,
          ],
        })
      : null,
    he = OH.jsx(LP, {
      query: ne,
      cursorOffset: oe,
      placeholder: t,
      isFocused: true,
      isTerminalFocused: C,
    }),
    ie = OH.jsx(List, {
      visible: Ee,
      windowStart: O,
      visibleCount: W,
      total: r.length,
      focusedIndex: P,
      direction: c,
      getKey: o,
      renderItem: s,
      emptyText: pe,
      marked: N,
      onItemClick: me,
      onItemHover: M,
    }),
    le =
      i && de
        ? OH.jsx(U, {
            flexDirection: "column",
            flexGrow: 1,
            children: i(de),
          })
        : null,
    He =
      i && a === "right"
        ? OH.jsxs(U, {
            flexDirection: "row",
            gap: 2,
            height: W + (ge ? 1 : 0),
            children: [
              OH.jsxs(U, {
                flexDirection: "column",
                flexShrink: 0,
                children: [ie, ge],
              }),
              le ??
                OH.jsx(U, {
                  flexGrow: 1,
                }),
            ],
          })
        : OH.jsxs(U, {
            flexDirection: "column",
            children: [ie, ge, le],
          }),
    ye = c !== "up";
  return OH.jsx(Fu, {
    color: "permission",
    children: OH.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: ce,
      onPaste: ee,
      onWheel: J,
      children: [
        OH.jsx(w, {
          bold: true,
          color: "permission",
          children: e,
        }),
        ye && he,
        He,
        !ye && he,
        OH.jsx(w, {
          dimColor: true,
          children: OH.jsxs(Tn, {
            children: [
              OH.jsx(ht, {
                chord: ["up", "down"],
                action: V ? "nav" : "navigate",
              }),
              OH.jsx(ht, {
                chord: "enter",
                action: $ && N.size > 0 ? `accept ${N.size}` : V ? lqf(S) : S,
              }),
              $ &&
                OH.jsx(ht, {
                  chord: "tab",
                  action: "mark",
                }),
              !$ &&
                f &&
                OH.jsx(ht, {
                  chord: "tab",
                  action: f.action,
                }),
              !$ &&
                m &&
                !V &&
                OH.jsx(ht, {
                  chord: "shift+tab",
                  action: m.action,
                  format: {
                    keyCase: "lower",
                  },
                }),
              OH.jsx(ht, {
                chord: "escape",
                action: A,
              }),
              v,
            ],
          }),
        }),
      ],
    }),
  });
}
function List(t0) {
  let t = B6l.c(36),
    {
      visible: n,
      windowStart: r,
      visibleCount: o,
      total: s,
      focusedIndex: i,
      direction: a,
      getKey: l,
      renderItem: c,
      emptyText: u,
      marked: d,
      onItemClick: p,
      onItemHover: f,
    } = t0;
  if (n.length === 0) {
    let _;
    if (t[0] !== u)
      ((_ = OH.jsx(Fl, {
        children: u,
      })),
        (t[0] = u),
        (t[1] = _));
    else _ = t[1];
    let S;
    if (t[2] !== _ || t[3] !== o)
      ((S = OH.jsx(U, {
        height: o,
        flexShrink: 0,
        children: _,
      })),
        (t[2] = _),
        (t[3] = o),
        (t[4] = S));
    else S = t[4];
    return S;
  }
  let m;
  if (
    t[5] !== a ||
    t[6] !== i ||
    t[7] !== l ||
    t[8] !== d ||
    t[9] !== p ||
    t[10] !== f ||
    t[11] !== c ||
    t[12] !== s ||
    t[13] !== n ||
    t[14] !== o ||
    t[15] !== r
  ) {
    let _;
    if (
      t[17] !== a ||
      t[18] !== i ||
      t[19] !== l ||
      t[20] !== d ||
      t[21] !== p ||
      t[22] !== f ||
      t[23] !== c ||
      t[24] !== s ||
      t[25] !== n.length ||
      t[26] !== o ||
      t[27] !== r
    )
      ((_ = (S, A) => {
        let v = l(S),
          x = r + A === i,
          I = d.has(v),
          k = A === 0 && r > 0,
          D = A === n.length - 1 && r + o < s;
        return OH.jsx(
          mH,
          {
            isFocused: x,
            isSelected: I,
            showScrollUp: a === "up" ? D : k,
            showScrollDown: a === "up" ? k : D,
            styled: false,
            onClick: () => p(S),
            onHoverChange: (P) => P && f(S),
            children: c(S, x, I),
          },
          v,
        );
      }),
        (t[17] = a),
        (t[18] = i),
        (t[19] = l),
        (t[20] = d),
        (t[21] = p),
        (t[22] = f),
        (t[23] = c),
        (t[24] = s),
        (t[25] = n.length),
        (t[26] = o),
        (t[27] = r),
        (t[28] = _));
    else _ = t[28];
    ((m = n.map(_)),
      (t[5] = a),
      (t[6] = i),
      (t[7] = l),
      (t[8] = d),
      (t[9] = p),
      (t[10] = f),
      (t[11] = c),
      (t[12] = s),
      (t[13] = n),
      (t[14] = o),
      (t[15] = r),
      (t[16] = m));
  } else m = t[16];
  let g = m,
    h = a === "up" ? "column-reverse" : "column",
    y;
  if (t[29] !== f) ((y = () => f(void 0)), (t[29] = f), (t[30] = y));
  else y = t[30];
  let b;
  if (t[31] !== g || t[32] !== h || t[33] !== y || t[34] !== o)
    ((b = OH.jsx(U, {
      height: o,
      flexShrink: 0,
      flexDirection: h,
      onMouseLeave: y,
      children: g,
    })),
      (t[31] = g),
      (t[32] = h),
      (t[33] = y),
      (t[34] = o),
      (t[35] = b));
  else b = t[35];
  return b;
}
function lqf(e) {
  let t = e.indexOf(" ");
  return t === -1 ? e : e.slice(0, t);
}
var B6l,
  QHe,
  OH,
  oqf = 8,
  sqf = 10,
  iqf = 2;
