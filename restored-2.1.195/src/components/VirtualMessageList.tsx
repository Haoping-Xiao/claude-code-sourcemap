// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module v2o
// matched 2.1.88 source: src/components/VirtualMessageList.tsx
// class=modified  jaccard=0.4576  score=0.6163  fileCov=0.6399
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module v2o] deps: @xmldom/xmldom/lib/entities.js, react/cjs/react.production.js, components/CustomSelect/use-multi-select-state.ts, ink/render-node-to-output.ts, Jql, components/TextInput.tsx, components/design-system/Ratchet.tsx, ink/components/AppContext.ts, utils/sideQuestion.ts, ink/components/App.tsx, HI, hooks/useTerminalSize.ts, nk, @mixmark-io/domino/lib/htmlelts.js, main.tsx, utils/gracefulShutdown.ts, components/Settings/Config.tsx, services/teamMemorySync/secretScanner.ts, zod-to-json-schema/dist/esm/parsers/tuple.js, react/cjs/react.production.js, ink/components/Box.tsx, components/design-system/Dialog.tsx, components/messages/nullRenderingAttachments.ts, components/permissions/rules/AddWorkspaceDirectory.tsx, components/Stats.tsx, components/FullscreenLayout.tsx
((tYe = R(lt(), 1)),
  (oy = R(rt(), 1)),
  (Od = R(se(), 1)),
  ($or = oy.createContext({
    setStickyPrompt: () => {},
  })));
function oGf(e) {
  let t = dVl.get(e);
  if (t !== void 0) return t;
  let n = aor(e);
  return (dVl.set(e, n), n);
}
function w2o(e) {
  if (e === void 0) return null;
  let t = pVl.get(e);
  if (t !== void 0) return t;
  let n = computeStickyPromptText(e);
  return (pVl.set(e, n), n);
}
function computeStickyPromptText(msg) {
  let t = null;
  if (msg.type === "user") {
    if (msg.isMeta || msg.isVisibleInTranscriptOnly) return null;
    let r = msg.message.content[0];
    if (r?.type !== "text") return null;
    t = r.text;
  } else if (
    msg.type === "attachment" &&
    msg.attachment.type === "queued_command" &&
    msg.attachment.commandMode !== "task-notification" &&
    !msg.attachment.isMeta
  ) {
    let r = msg.attachment.prompt;
    t =
      typeof r === "string"
        ? r
        : r.flatMap((o) => (o.type === "text" ? [o.text] : [])).join(`
`);
  }
  if (t === null) return null;
  let n = _Vl(t);
  if (n.startsWith("<") || n === "") return null;
  return n;
}
function VirtualItem({
  itemKey: e,
  msg: t,
  idx: n,
  measureRef: r,
  expanded: o,
  hovered: s,
  clickable: i,
  onClickK: a,
  onEnterK: l,
  onLeaveK: c,
  renderItemRef: u,
}) {
  return Ise.jsx(U, {
    ref: r(e),
    flexDirection: "column",
    backgroundColor: o ? "userMessageBackgroundHover" : void 0,
    paddingBottom: o ? 1 : void 0,
    onClick: i
      ? (d) => {
          if (d.hyperlinkUrl) return d.allowDefault();
          a(t, d.cellIsBlank);
        }
      : void 0,
    onMouseEnter: i ? () => l(e) : void 0,
    onMouseLeave: i ? () => c(e) : void 0,
    hoverIgnoresBlankCells: !o,
    children: Ise.jsx(DJr.Provider, {
      value: s && !o,
      children: u.current(t, n),
    }),
  });
}
function VirtualMessageList({
  messages: e,
  scrollRef: t,
  columns: n,
  itemKey: r,
  renderItem: o,
  onItemClick: s,
  isItemClickable: i,
  isItemExpanded: a,
  extractSearchText: l = oGf,
  trackStickyPrompt: c,
  jumpRef: u,
  onSearchMatchesChange: d,
  scanElement: p,
  setPositions: f,
}) {
  let m = Am.useRef({
      keys: [],
      uuids: [],
      seen: new Map(),
      itemKey: r,
      loggedDups: new Set(),
    }),
    g = Am.useMemo(() => uGf(e, r, m.current, hVl), [e, r]),
    {
      range: h,
      topSpacer: y,
      bottomSpacer: b,
      measureRef: _,
      spacerRef: S,
      offsets: A,
      getItemTop: v,
      getItemElement: C,
      scrollToIndex: x,
    } = Pql(t, g, n),
    [I, k] = h,
    D = Am.useRef({
      offsets: A,
      start: I,
      getItemElement: C,
      getItemTop: v,
      messages: e,
      scrollToIndex: x,
    });
  D.current = {
    offsets: A,
    start: I,
    getItemElement: C,
    getItemTop: v,
    messages: e,
    scrollToIndex: x,
  };
  let P = Am.useRef(null);
  function O(le, He) {
    let { messages: ye } = D.current;
    for (let ue = le + He; ue >= 0 && ue < ye.length; ue += He) if (w2o(ye[ue]) !== null) return ue;
    return -1;
  }
  let L = Am.useRef(null),
    M = Am.useRef({
      msgIdx: -1,
      positions: [],
    }),
    N = Am.useRef(-1),
    B = Am.useRef(0),
    $ = Am.useRef(0),
    q = Am.useRef(() => {}),
    W = Am.useRef(() => {}),
    V = Am.useRef({
      matches: [],
      ptr: 0,
      screenOrd: 0,
      prefixSum: [],
    }),
    Y = Am.useRef(-1),
    z = Am.useRef(false);
  function K(le) {
    let He = D.current.getItemTop(le);
    return Math.max(0, He - Oor);
  }
  function Z(le) {
    let He = t.current,
      { msgIdx: ye, positions: ue } = M.current;
    if (!He || ue.length === 0 || ye < 0) {
      f?.(null);
      return;
    }
    let we = Math.max(0, Math.min(le, ue.length - 1)),
      Ce = ue[we],
      Ie = D.current.getItemTop(ye),
      Ve = He.getViewportTop(),
      Ze = Ie - He.getScrollTop(),
      Be = He.getViewportHeight(),
      Me = Ve + Ze + Ce.row;
    if (Me < Ve || Me >= Ve + Be)
      (He.scrollTo(Math.max(0, Ie + Ce.row - Oor)),
        (Ze = Ie - He.getScrollTop()),
        (Me = Ve + Ze + Ce.row));
    f?.({
      positions: ue,
      rowOffset: Ve + Ze,
      currentIdx: we,
    });
    let Ue = V.current,
      tt = Ue.prefixSum.at(-1) ?? 0,
      bt = (Ue.prefixSum[Ue.ptr] ?? 0) + we + 1;
    (d?.(tt, bt),
      T(
        `highlight(i=${ye}, ord=${we}/${ue.length}): pos={row:${Ce.row},col:${Ce.col}} lo=${Ze} screenRow=${Me} badge=${bt}/${tt}`,
      ));
  }
  W.current = Z;
  let [J, ne] = Am.useState(0),
    oe = Am.useCallback(() => ne((le) => le + 1), []);
  Am.useEffect(() => {
    let le = L.current;
    if (!le) return;
    let { idx: He, wantLast: ye, tries: ue } = le,
      we = t.current;
    if (!we) return;
    let { getItemElement: Ce, getItemTop: Ie, scrollToIndex: Ve } = D.current,
      Ze = Ce(He),
      Be = Ze?.yogaNode?.getComputedHeight() ?? 0;
    if (!Ze || Be === 0) {
      if (ue > 1) {
        ((L.current = null),
          T(`seek(i=${He}): no mount after scrollToIndex, skip`),
          q.current(ye ? -1 : 1));
        return;
      }
      ((L.current = {
        idx: He,
        wantLast: ye,
        tries: ue + 1,
      }),
        Ve(He),
        oe());
      return;
    }
    ((L.current = null), we.scrollTo(Math.max(0, Ie(He) - Oor)));
    let Me = p?.(Ze) ?? [];
    if (
      ((M.current = {
        msgIdx: He,
        positions: Me,
      }),
      T(`seek(i=${He} t=${ue}): ${Me.length} positions`),
      Me.length === 0)
    ) {
      if (++B.current > 20) {
        B.current = 0;
        return;
      }
      q.current(ye ? -1 : 1);
      return;
    }
    B.current = 0;
    let Ue = ye ? Me.length - 1 : 0;
    ((V.current.screenOrd = Ue), (N.current = -1), W.current(Ue));
    let tt = $.current;
    if (tt) (($.current = 0), q.current(tt));
  }, [J]);
  function re(le, He) {
    let ye = t.current;
    if (!ye) return;
    let ue = D.current,
      { getItemElement: we, scrollToIndex: Ce } = ue;
    if (le < 0 || le >= ue.messages.length) return;
    (f?.(null),
      (M.current = {
        msgIdx: -1,
        positions: [],
      }),
      (L.current = {
        idx: le,
        wantLast: He,
        tries: 0,
      }));
    let Ie = we(le),
      Ve = Ie?.yogaNode?.getComputedHeight() ?? 0;
    if (Ie && Ve > 0) ye.scrollTo(K(le));
    else Ce(le);
    oe();
  }
  function ee(le) {
    let He = V.current,
      { matches: ye, prefixSum: ue } = He,
      we = ue.at(-1) ?? 0;
    if (ye.length === 0) return;
    if (L.current) {
      $.current = le;
      return;
    }
    if (N.current < 0) N.current = He.ptr;
    let { positions: Ce } = M.current,
      Ie = He.screenOrd + le;
    if (Ie >= 0 && Ie < Ce.length) {
      ((He.screenOrd = Ie), Z(Ie), (N.current = -1));
      return;
    }
    let Ve = (He.ptr + le + ye.length) % ye.length;
    if (Ve === N.current) {
      (f?.(null),
        (N.current = -1),
        T(`step: wraparound at ptr=${Ve}, all ${ye.length} msgs phantoms`));
      return;
    }
    ((He.ptr = Ve), (He.screenOrd = 0), re(ye[Ve], le < 0));
    let Ze = le < 0 ? (ue[Ve + 1] ?? we) : ue[Ve] + 1;
    d?.(we, Ze);
  }
  q.current = ee;
  function ce() {
    let le = t.current,
      { offsets: He, start: ye, getItemTop: ue, messages: we } = D.current,
      Ce = we.length;
    if (!le || Ce === 0) return -1;
    let Ie = le.getScrollTop() + Oor,
      Ve = ue(ye);
    if (Ve >= 0 && Ve <= Ie) {
      let tt = ye;
      for (let bt = ye; bt < Ce; bt++) {
        let Ke = ue(bt);
        if (Ke < 0 || Ke > Ie) break;
        tt = bt;
      }
      return tt;
    }
    let Ze = Ve >= 0 ? Ve - He[ye] : 0,
      Be = Ie - Ze,
      Me = 0,
      Ue = Ce - 1;
    while (Me < Ue) {
      let tt = (Me + Ue + 1) >> 1;
      if (He[tt] <= Be) Me = tt;
      else Ue = tt - 1;
    }
    return Me;
  }
  function ae(le) {
    let He = t.current,
      { messages: ye, getItemTop: ue, scrollToIndex: we } = D.current;
    if (!He || le < 0 || le >= ye.length) return;
    if (ue(le) >= 0) He.scrollTo(K(le));
    else we(le);
  }
  Am.useImperativeHandle(
    u,
    () => ({
      jumpToIndex: (le) => {
        let He = t.current;
        if (He) He.scrollTo(K(le));
      },
      nextMessage: () => {
        let le = P.current ?? ce();
        if (le < 0) return;
        let He = O(le, 1);
        if (He < 0) return;
        (ae(He), (P.current = He));
      },
      prevMessage: () => {
        let le = P.current,
          He = le ?? ce();
        if (He < 0) return;
        if (le === null && w2o(D.current.messages[He]) === null) {
          let ue = O(He, -1);
          if (ue >= 0) (ae(ue), (P.current = ue));
          return;
        }
        let ye = O(He, -1);
        if (ye < 0) return;
        (ae(ye), (P.current = ye));
      },
      setSearchQuery: (le) => {
        ((L.current = null),
          (M.current = {
            msgIdx: -1,
            positions: [],
          }),
          (N.current = -1),
          f?.(null));
        let He = le.toLowerCase(),
          ye = [],
          ue = [0];
        if (He) {
          let tt = D.current.messages;
          for (let bt = 0; bt < tt.length; bt++) {
            let Ke = tt[bt];
            if (Ke === void 0) continue;
            let Et = l(Ke),
              ct = Et.indexOf(He),
              Je = 0;
            while (ct >= 0) (Je++, (ct = Et.indexOf(He, ct + He.length)));
            if (Je > 0) (ye.push(bt), ue.push(ue.at(-1) + Je));
          }
        }
        let we = ue.at(-1),
          Ce = 0,
          Ie = t.current,
          { offsets: Ve, start: Ze, getItemTop: Be } = D.current,
          Me = Be(Ze),
          Ue = Me >= 0 ? Me - Ve[Ze] : 0;
        if (ye.length > 0 && Ie) {
          let tt = Y.current >= 0 ? Y.current : Ie.getScrollTop(),
            bt = 1 / 0;
          for (let Ke = 0; Ke < ye.length; Ke++) {
            let Et = Math.abs(Ue + Ve[ye[Ke]] - tt);
            if (Et <= bt) ((bt = Et), (Ce = Ke));
          }
          T(
            `setSearchQuery('${le}'): ${ye.length} msgs \xB7 ptr=${Ce} msgIdx=${ye[Ce]} curTop=${tt} origin=${Ue}`,
          );
        }
        if (
          ((V.current = {
            matches: ye,
            ptr: Ce,
            screenOrd: 0,
            prefixSum: ue,
          }),
          ye.length > 0)
        )
          re(ye[Ce], true);
        else if (Y.current >= 0 && Ie) Ie.scrollTo(Y.current);
        d?.(we, ye.length > 0 ? (ue[Ce + 1] ?? we) : 0);
      },
      nextMatch: () => ee(1),
      prevMatch: () => ee(-1),
      setAnchor: () => {
        let le = t.current;
        if (le) Y.current = le.getScrollTop();
      },
      disarmSearch: () => {
        (f?.(null),
          (L.current = null),
          (M.current = {
            msgIdx: -1,
            positions: [],
          }),
          (N.current = -1),
          (P.current = null));
      },
      warmSearchIndex: async () => {
        if (z.current) return 0;
        let le = D.current.messages,
          He = 500,
          ye = 0,
          ue = performance.now();
        for (let Ce = 0; Ce < le.length; Ce += He) {
          await Nn(0);
          let Ie = performance.now(),
            Ve = Math.min(Ce + He, le.length);
          for (let Ze = Ce; Ze < Ve; Ze++) {
            let Be = le[Ze];
            if (Be !== void 0) l(Be);
          }
          ye += performance.now() - Ie;
        }
        let we = Math.round(performance.now() - ue);
        return (
          T(
            `warmSearchIndex: ${le.length} msgs \xB7 work=${Math.round(ye)}ms wall=${we}ms chunks=${Math.ceil(le.length / He)}`,
          ),
          (z.current = true),
          Math.round(ye)
        );
      },
    }),
    [t],
  );
  let [de, Ee] = Am.useState(null),
    me = Am.useRef({
      onItemClick: s,
      setHoveredKey: Ee,
    });
  me.current = {
    onItemClick: s,
    setHoveredKey: Ee,
  };
  let pe = Am.useCallback((le, He) => {
      let ye = me.current;
      if (!He && ye.onItemClick) ye.onItemClick(le);
    }, []),
    ge = Am.useCallback((le) => {
      me.current.setHoveredKey(le);
    }, []),
    he = Am.useCallback((le) => {
      me.current.setHoveredKey((He) => (He === le ? null : He));
    }, []),
    ie = Am.useRef(o);
  return (
    (ie.current = o),
    Ise.jsxs(Ise.Fragment, {
      children: [
        Ise.jsx(U, {
          ref: S,
          height: y,
          flexShrink: 0,
        }),
        e.slice(I, k).map((le, He) => {
          let ye = I + He;
          if (le === void 0) return (gVl(ye, e, `mounted=[${I},${k})`), null);
          let ue = g[ye],
            we = !!s && (i?.(le) ?? true),
            Ce = we && de === ue,
            Ie = a?.(le);
          return Ise.jsx(
            VirtualItem,
            {
              itemKey: ue,
              msg: le,
              idx: ye,
              measureRef: _,
              expanded: Ie,
              hovered: Ce,
              clickable: we,
              onClickK: pe,
              onEnterK: ge,
              onLeaveK: he,
              renderItemRef: ie,
            },
            ue,
          );
        }),
        b > 0 &&
          Ise.jsx(U, {
            height: b,
            flexShrink: 0,
          }),
        c &&
          Ise.jsx(cGf, {
            messages: e,
            start: I,
            end: k,
            offsets: A,
            getItemTop: v,
            getItemElement: C,
            scrollRef: t,
          }),
      ],
    })
  );
}
function gVl(e, t, n) {
  if (fVl) return;
  fVl = true;
  let r = (o) => (o === void 0 ? "undefined" : hVl(o));
  ke(
    new mi(
      `VirtualMessageList: undefined at messages[${e}] (len=${t.length} ${n} neighbors=[${r(t[e - 1])},${r(t[e + 1])}])`,
      "VirtualMessageList: undefined element in messages[]",
    ),
  );
}
function cGf({
  messages: e,
  start: t,
  end: n,
  offsets: r,
  getItemTop: o,
  getItemElement: s,
  scrollRef: i,
}) {
  let { setStickyPrompt: a } = Am.useContext($or),
    l = Am.useCallback((S) => i.current?.subscribe(S) ?? lGf, [i]);
  Am.useSyncExternalStore(l, () => {
    let S = i.current;
    if (!S) return NaN;
    let A = S.getScrollTop() + S.getPendingDelta();
    return S.isSticky() ? -1 - A : A;
  });
  let c = i.current?.isSticky() ?? true,
    u = Math.max(0, (i.current?.getScrollTop() ?? 0) + (i.current?.getPendingDelta() ?? 0)),
    d = t,
    p = -1;
  for (let S = n - 1; S >= t; S--) {
    let A = o(S);
    if (A >= 0) {
      if (A < u) break;
      p = A;
    }
    d = S;
  }
  let f = -1,
    m = null;
  if (d > 0 && !c)
    for (let S = d - 1; S >= 0; S--) {
      let A = e[S];
      if (A === void 0) gVl(S, e, `range=[${t},${n}] firstVisible=${d}`);
      let v = w2o(A);
      if (v === null) continue;
      let C = o(S);
      if (C >= 0 && C + 1 >= u) continue;
      ((f = S), (m = v));
      break;
    }
  let g = p >= 0 ? p - r[d] : 0,
    h = f >= 0 ? Math.max(0, g + r[f]) : -1,
    y = Am.useRef({
      idx: -1,
      tries: 0,
    }),
    b = Am.useRef("none"),
    _ = Am.useRef(-1);
  return (
    Am.useEffect(() => {
      if (y.current.idx >= 0) return;
      if (b.current === "armed") {
        b.current = "force";
        return;
      }
      let S = b.current === "force";
      if (((b.current = "none"), !S && _.current === f)) return;
      if (((_.current = f), m === null)) {
        a(null);
        return;
      }
      let A = m.trimStart(),
        v = A.search(/\n\s*\n/),
        C = (v >= 0 ? A.slice(0, v) : A).slice(0, sGf).replace(/\s+/g, " ").trim();
      if (C === "") {
        a(null);
        return;
      }
      let x = f,
        I = h;
      a({
        text: C,
        scrollTo: () => {
          (a("clicked"), (b.current = "armed"));
          let k = s(x);
          if (k) i.current?.scrollToElement(k, 1);
          else
            (i.current?.scrollTo(I),
              (y.current = {
                idx: x,
                tries: 0,
              }));
        },
      });
    }),
    Am.useEffect(() => {
      if (y.current.idx < 0) return;
      let S = s(y.current.idx);
      if (S)
        (i.current?.scrollToElement(S, 1),
          (y.current = {
            idx: -1,
            tries: 0,
          }));
      else if (++y.current.tries > 5)
        y.current = {
          idx: -1,
          tries: 0,
        };
    }),
    null
  );
}
function hVl(e) {
  switch (e.type) {
    case "user":
    case "assistant":
      return `${e.type}/${e.message.content[0]?.type ?? "?"}`;
    case "system":
      return `system/${e.subtype}`;
    case "attachment":
      return `attachment/${e.attachment.type}`;
    case "grouped_tool_use":
    case "collapsed_read_search":
      return e.type;
    default:
      return e.type;
  }
}
function uGf(e, t, n, r = (o) => o.type ?? "?") {
  let o = 0;
  if (n.itemKey === t && e.length >= n.keys.length) {
    let i = n.keys.length;
    while (o < i && e[o].uuid === n.uuids[o]) o++;
  }
  if (o < n.keys.length) ((n.keys = []), (n.uuids = []), (n.seen = new Map()), (o = 0));
  n.itemKey = t;
  let s = null;
  for (; o < e.length; o++) {
    let i = e[o],
      a = t(i),
      l = n.seen.get(a);
    if (l === void 0) (n.seen.set(a, 1), n.keys.push(a));
    else if ((n.seen.set(a, l + 1), n.keys.push(`${a}#${l}`), !n.loggedDups.has(a)))
      (n.loggedDups.add(a), (s ??= new Map()).set(a, r(i)));
    n.uuids.push(i.uuid);
  }
  if (s) {
    let i = [...s].slice(0, 3).map(([a, l]) => `[${l}] ${a} \xD7${n.seen.get(a)}`);
    ke(
      Error(
        `VirtualMessageList: duplicate sibling itemKeys (deduped via #N suffix; upstream uuid-dup): ${i.join(", ")}`,
      ),
    );
  }
  return n.keys;
}
var Am,
  Ise,
  Oor = 3,
  dVl,
  sGf = 500,
  pVl,
  lGf = () => {},
  fVl = false;
