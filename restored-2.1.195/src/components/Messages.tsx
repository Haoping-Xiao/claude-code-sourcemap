// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yVl
// matched 2.1.88 source: src/components/Messages.tsx
// class=modified  jaccard=0.257  score=0.5176  fileCov=0.3379
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var yVl = E(() => {
  Mql();
  Ye();
  m0e();
  v2o();
  je();
  At();
  vn();
  co();
  UFo();
  ((Am = R(rt(), 1)), (Ise = R(se(), 1)), (dVl = new WeakMap()));
  pVl = new WeakMap();
});
function mGf(e, t, n) {
  let r = new Set(t),
    o = new Set(n),
    s = new Set(),
    i = [],
    a = 0;
  for (let c = 0; c < e.length; c++) {
    let u = e[c],
      d = u.message?.content[0];
    if (u.type === "user" && d?.type !== "tool_result" && (!u.isMeta || ez(u.origin))) a++;
    else if (
      u.type === "attachment" &&
      u.attachment?.type === "queued_command" &&
      u.attachment.commandMode === "prompt" &&
      (ez(u.attachment.origin) || (!u.attachment.isMeta && Y1(u.attachment.origin)))
    )
      a++;
    else if (u.type === "assistant" && d?.type === "tool_use" && d.name && o.has(d.name)) s.add(a);
    i[c] = a;
  }
  let l = new Set();
  return e.filter((c, u) => {
    if (c.type === "system") return true;
    let d = c.message?.content[0];
    if (c.type === "assistant") {
      if (c.isApiErrorMessage) return true;
      if (d?.type === "tool_use" && d.name && r.has(d.name)) {
        if ("id" in d) l.add(d.id);
        return true;
      }
      if (d?.type === "text" && !s.has(i[u])) return true;
      return false;
    }
    if (c.type === "user") {
      if (d?.type === "tool_result") return d.tool_use_id !== void 0 && l.has(d.tool_use_id);
      return !c.isMeta || ez(c.origin);
    }
    if (c.type === "attachment") {
      let p = c.attachment;
      return (
        p?.type === "queued_command" &&
        p.commandMode === "prompt" &&
        (ez(p.origin) || (!p.isMeta && Y1(p.origin)))
      );
    }
    return false;
  });
}
function gGf(e, t) {
  let n = new Set(t),
    r = new Set(),
    o = new Map(),
    s = [],
    i = 0;
  for (let a = 0; a < e.length; a++) {
    let l = e[a],
      c = l.message?.content[0];
    if (l.type === "user" && c?.type !== "tool_result" && !l.isMeta) {
      i++;
      continue;
    }
    if (l.type === "assistant") {
      if (c?.type === "text") s[a] = i;
      else if (c?.type === "tool_use" && c.name && n.has(c.name) && c.id) o.set(c.id, i);
    } else if (
      l.type === "user" &&
      c?.type === "tool_result" &&
      c.tool_use_id &&
      o.has(c.tool_use_id) &&
      !c.is_error
    )
      r.add(o.get(c.tool_use_id));
  }
  if (r.size === 0) return e;
  return e.filter((a, l) => {
    let c = s[l];
    return c === void 0 || !r.has(c);
  });
}
function yGf(e) {
  return Ns() ? Math.min(EVl, e) : EVl;
}
function AVl(e, t, n, r = hGf) {
  let o = t.current,
    s = o ? (e[o.idx]?.uuid === o.uuid ? o.idx : e.findIndex((l) => l.uuid === o.uuid)) : -1,
    i = s >= 0 ? s : o && o.idx < e.length ? o.idx : 0;
  if (e.length - i > n + r) i = e.length - n;
  let a = e[i];
  if (a && (o?.uuid !== a.uuid || o.idx !== i))
    t.current = {
      uuid: a.uuid,
      idx: i,
    };
  else if (!a && o) t.current = null;
  return i;
}
function HVl(e) {
  return (e.type === "assistant" || e.type === "user" ? jHe(e) : null) ?? e.uuid;
}
function bGf(e, t) {
  if (e.size !== t.size) return false;
  for (let n of e) if (!t.has(n)) return false;
  return true;
}
function SGf(e, t, n, r) {
  let o = new Set(),
    s = [];
  for (let i of t) {
    let a = i.contentBlock.id;
    if (n.has(a) || r.has(a) || o.has(a)) continue;
    (o.add(a), s.push(i));
  }
  if (s.length === 0) return TVl;
  if (s.length === e.length && s.every((i, a) => i === e[a])) return e;
  return s;
}
function EGf(e, t, n) {
  return n && e[0] === t[0] ? e : t;
}
function nYe(e) {
  let t = I2o.c(6),
    { deferMessages: n, placeholderBaseline: r, placeholderElement: o, ...s } = e,
    i = am.useDeferredValue(s.messages),
    a = EGf(i, s.messages, n),
    l;
  if (t[0] !== a || t[1] !== s)
    ((l = MH.jsx(AGf, {
      ...s,
      messages: a,
    })),
      (t[0] = a),
      (t[1] = s),
      (t[2] = l));
  else l = t[2];
  let c = o && r !== void 0 && a.length <= r && o,
    u;
  if (t[3] !== l || t[4] !== c)
    ((u = MH.jsxs(MH.Fragment, {
      children: [l, c],
    })),
      (t[3] = l),
      (t[4] = c),
      (t[5] = u));
  else u = t[5];
  return u;
}
function w5l(e, t, n, r, o, s) {
  if (o === "transcript") return true;
  switch (e.type) {
    case "attachment":
    case "user":
    case "assistant": {
      if (e.type === "assistant") {
        let a = e.message.content[0];
        if (a?.type === "server_tool_use") return s.resolvedToolUseIDs.has(a.id);
      }
      let i = jHe(e);
      if (!i) return true;
      if (t.has(i)) return false;
      if (n.has(i)) return false;
      if (CVl(i, "PostToolUse", s)) return false;
      return wZa(r, s.resolvedToolUseIDs);
    }
    case "system":
      return true;
    case "grouped_tool_use":
      return e.messages.every((a) => {
        let l = a.message.content[0];
        return l?.type === "tool_use" && s.resolvedToolUseIDs.has(l.id);
      });
    case "collapsed_read_search":
      return false;
  }
}
var I2o,
  sJt,
  am,
  MH,
  dGf,
  bVl,
  pGf,
  SVl,
  fGf,
  C2o = 30,
  hGf = 50,
  EVl = 200,
  _Gf = ({
    messages: e,
    tools: t,
    commands: n,
    verbose: r,
    toolJSX: o,
    inProgressToolUseIDs: s,
    isMessageSelectorVisible: i,
    conversationId: a,
    screen: l,
    streamingToolUses: c,
    showAllInTranscript: u = false,
    agentDefinitions: d,
    onOpenRateLimitOptions: p,
    hideLogo: f = false,
    latchAnnouncementSlot: m = true,
    isLoading: g,
    streamingText: h,
    hideStreamingTail: y = false,
    isBriefOnly: b = false,
    unseenDivider: _,
    scrollRef: S,
    trackStickyPrompt: A,
    jumpRef: v,
    onSearchMatchesChange: C,
    scanElement: x,
    setPositions: I,
    disableRenderCap: k = false,
    renderRange: D,
  }) => {
    let P = b && SVl(),
      { columns: O, rows: L } = br(),
      M = Uu("transcript:toggleShowAll", "Transcript", "Ctrl+E"),
      N = am.useMemo(() => Oe.CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL, []),
      B = Ht((Hn) => Hn.briefTranscript),
      q = Ht((Hn) => Hn.showMessageTimestamps) && at("tengu_silk_hinge", false),
      W = Dc(),
      V = false,
      Y = am.useMemo(() => null, [e, false]),
      z = S != null && !N,
      K = yGf(L),
      Z = am.useRef(null),
      J = am.useRef(null),
      ne = am.useRef(a),
      oe = am.useRef(r);
    if (ne.current !== a) ((ne.current = a), (Z.current = null), (J.current = null));
    if (oe.current !== r) ((oe.current = r), (J.current = null));
    let re = !z && !k ? AVl(e, Z, K * 2) : 0,
      ee = am.useRef(null);
    ee.current ??= new WeakMap();
    let ce = ee.current,
      ae = am.useMemo(() => {
        let Hn = re > 0,
          kr = Hn ? e.slice(re) : e;
        return mS(kr, Hn, ce).filter(Koe);
      }, [e, re, ce]),
      de = am.useMemo(() => {
        for (let Hn = ae.length - 1; Hn >= 0; Hn--) {
          let kr = ae[Hn];
          if (kr?.type === "user") {
            let Mr = kr.message.content;
            for (let fe of Mr)
              if (fe.type === "text") {
                let Te = fe.text;
                if (Te.startsWith("<bash-stdout") || Te.startsWith("<bash-stderr")) return kr.uuid;
              }
          }
        }
        return null;
      }, [ae]),
      Ee = am.useMemo(() => IVl(ae), [ae]),
      me = am.useRef(TVl),
      pe = am.useMemo(() => {
        let Hn = SGf(me.current, c, s, Ee);
        return ((me.current = Hn), Hn);
      }, [c, s, Ee]),
      ge = am.useMemo(
        () =>
          pe.flatMap((Hn) => {
            let kr = dE({
              content: [Hn.contentBlock],
            });
            return ((kr.uuid = iJt(Hn.contentBlock.id, 0)), mS([kr]));
          }),
        [pe],
      ),
      he = l === "transcript",
      ie = he && !u && !z,
      {
        collapsedBase: le,
        lookups: He,
        hasTruncatedMessages: ye,
        hiddenMessageCount: ue,
      } = am.useMemo(() => {
        let Hn = r || Ns() ? ae : Py(ae, void 0),
          kr = vVl(
            Hn.filter((Mt) => Mt.type !== "progress")
              .filter((Mt) => !bor(Mt))
              .filter((Mt) => xVl(Mt, he)),
            ge,
          ),
          Mr = [bVl, pGf],
          fe = [bVl],
          Te = !he && (SVl() || !fGf()) ? (P ? mGf(kr, Mr, fe) : gGf(kr, fe)) : kr,
          Re = ie ? Te.slice(-C2o) : Te,
          Ne = ie && Te.length > C2o,
          { messages: it } = PWl(Re, t, r),
          Tt = wWl(xWl(RWl(Rvl(it, t))), r),
          un = wVl(ae, Re),
          ze = kr.length - C2o;
        return {
          collapsedBase: Tt,
          lookups: un,
          hasTruncatedMessages: Ne,
          hiddenMessageCount: ze,
        };
      }, [r, ae, he, ge, ie, t, P]),
      we = am.useMemo(() => {
        if (!(Ns() && B && !he)) return le;
        return Dvl(
          le,
          t,
          (Hn) => {
            let kr = W.getState().tasks[Hn];
            return kr?.type === "local_agent" ? kr.result?.toolStats : void 0;
          },
          g,
        );
      }, [le, t, B, he, W, g]),
      Ce = am.useMemo(() => {
        let kr = !z && !k ? AVl(we, J, K) : 0;
        return D ? we.slice(D[0], D[1]) : kr > 0 ? we.slice(kr) : we;
      }, [we, D, z, k, K]),
      Ie = am.useMemo(() => new Set(c.map((Hn) => Hn.contentBlock.id)), [c]),
      Ve = am.useMemo(() => null, [Ce, Y]),
      Ze = am.useMemo(() => {
        if (!_) return -1;
        let Hn = _.firstUnseenUuid.slice(0, 24);
        return Ce.findIndex((kr) => kr.uuid.slice(0, 24) === Hn);
      }, [_, Ce]),
      [Be, Me] = am.useState(() => new Set()),
      Ue = am.useCallback((Hn) => {
        let kr = HVl(Hn);
        Me((Mr) => {
          let fe = new Set(Mr);
          if (fe.has(kr)) fe.delete(kr);
          else fe.add(kr);
          return fe;
        });
      }, []),
      tt = am.useCallback((Hn) => Be.size > 0 && Be.has(HVl(Hn)), [Be]),
      bt = am.useRef(He);
    bt.current = He;
    let Ke = am.useRef(O);
    Ke.current = O;
    let Et = am.useCallback(
        (Hn) => {
          if (Hn.type === "collapsed_read_search") return true;
          if (Hn.type === "attachment") {
            if (r || he) return false;
            return Hn.attachment?.type === "goal_status" && !!Hn.attachment.reason;
          }
          if (Hn.type === "assistant") {
            let Te = Hn.message.content[0];
            return (
              Te != null &&
              b8e(Te) &&
              Te.type === "advisor_tool_result" &&
              Te.content.type === "advisor_result"
            );
          }
          if (Hn.type !== "user") return false;
          let kr = Hn.message.content[0];
          if (kr?.type !== "tool_result") return false;
          if (kr.is_error) return hMa(kr.content);
          if (!Hn.toolUseResult) return false;
          let Mr = bt.current.toolUseByToolUseID.get(kr.tool_use_id)?.name;
          return (
            (Mr ? _l(t, Mr) : void 0)?.isResultTruncated?.(Hn.toolUseResult, {
              columns: Ke.current,
            }) ?? false
          );
        },
        [t, r, he],
      ),
      ct = (!o || !!o.shouldContinueAnimation) && !i,
      Je = s.size > 0,
      gt = am.useContext(g8);
    am.useEffect(() => {
      if (!gt) return;
      return ($Wl(gt), () => OWl(gt));
    }, [gt]);
    let { progress: st } = Z7(),
      xt = am.useRef(null),
      vt = wc("terminalProgressBarEnabled", true).value;
    (am.useEffect(() => {
      let Hn = TWl({
        enabled: vt,
        isLoading: g,
        hasToolsInProgress: Je,
      });
      if (xt.current === Hn) return;
      ((xt.current = Hn), st(Hn));
    }, [st, vt, g, Je]),
      am.useEffect(() => () => st(null), [st]));
    let jt = am.useCallback((Hn) => `${Hn.uuid}-${a}`, [a]),
      en = (Hn, kr) => {
        let Mr = kr > 0 ? Ce[kr - 1]?.type : void 0,
          fe = Hn.type === "user" && Mr === "user",
          Te = Hn.type === "collapsed_read_search" && (!!h || H5l(Ce, kr, t, Ie)),
          Re = jt(Hn),
          it = MH.jsx(
            T5l,
            {
              message: Hn,
              isUserContinuation: fe,
              hasContentAfter: Te,
              tools: t,
              commands: n,
              verbose: r || tt(Hn),
              showMessageTimestamps: q,
              inProgressToolUseIDs: s,
              streamingToolUseIDs: Ie,
              screen: l,
              canAnimate: ct,
              onOpenRateLimitOptions: p,
              latestBashOutputUUID: de,
              columns: O,
              isLoading: g,
              lookups: He,
            },
            Re,
          );
        if (_ && kr === Ze)
          return [
            MH.jsx(
              U,
              {
                marginTop: 1,
                children: MH.jsx(qh, {
                  title: `${_.count} new ${bn(_.count, "message")}`,
                  width: O,
                  color: "inactive",
                }),
              },
              "unseen-divider",
            ),
            it,
          ];
        return it;
      },
      Dn = am.useRef(null);
    Dn.current ??= new WeakMap();
    let nn = Dn.current,
      Ln = am.useCallback(
        (Hn) => {
          let kr = nn.get(Hn);
          if (kr !== void 0) return kr;
          let Mr = aor(Hn);
          if (Hn.type === "user" && Hn.toolUseResult && Array.isArray(Hn.message.content)) {
            let Te = Hn.message.content.find((Re) => Re.type === "tool_result");
            if (Te && "tool_use_id" in Te) {
              let Re = bt.current.toolUseByToolUseID.get(Te.tool_use_id),
                it = (Re && _l(t, Re.name))?.extractSearchText?.(Hn.toolUseResult);
              if (it !== void 0) Mr = it;
            }
          }
          let fe = Mr.toLowerCase();
          return (nn.set(Hn, fe), fe);
        },
        [t, nn],
      );
    return MH.jsxs(MH.Fragment, {
      children: [
        !f &&
          !(D && D[0] > 0) &&
          MH.jsx(dGf, {
            agentDefinitions: d,
            latchAnnouncementSlot: m,
          }),
        ye &&
          MH.jsx(qh, {
            title: `${M} to show ${wt.bold(ue)} previous messages`,
            width: O,
          }),
        he &&
          u &&
          ue > 0 &&
          !k &&
          MH.jsx(qh, {
            title: `${M} to hide ${wt.bold(ue)} previous messages`,
            width: O,
          }),
        z
          ? MH.jsx(wLe.Provider, {
              value: true,
              children: MH.jsx(mVl, {
                messages: Ce,
                scrollRef: S,
                columns: O,
                itemKey: jt,
                renderItem: en,
                onItemClick: Ue,
                isItemClickable: Et,
                isItemExpanded: tt,
                trackStickyPrompt: A,
                jumpRef: v,
                onSearchMatchesChange: C,
                scanElement: x,
                setPositions: I,
                extractSearchText: Ln,
              }),
            })
          : Ce.flatMap(en),
        h &&
          !P &&
          MH.jsx(U, {
            alignItems: "flex-start",
            flexDirection: "row",
            marginTop: 1,
            width: "100%",
            children: MH.jsxs(U, {
              flexDirection: "row",
              children: [
                MH.jsx(U, {
                  minWidth: 2,
                  children: MH.jsx(w, {
                    "aria-label": "claude:",
                    color: "text",
                    children: gc,
                  }),
                }),
                MH.jsx(U, {
                  flexDirection: "column",
                  children: MH.jsx(jnl, {
                    hideTrailingLine: y,
                    children: h,
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  TVl,
  AGf;
