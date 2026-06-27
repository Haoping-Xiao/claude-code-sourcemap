// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qXt
// matched 2.1.88 source: src/components/Messages.tsx
// class=modified (alt of src/components/Messages.tsx)  jaccard=0.1421  score=0.5065  fileCov=0.165
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var qXt = E(() => {
  iu();
  Xa();
  _i();
  EW();
  Ye();
  nk();
  Un();
  uo();
  ii();
  _oe();
  CWl();
  ZPe();
  wr();
  uf();
  MWl();
  sF();
  co();
  Fh();
  sr();
  BFo();
  UFo();
  LW();
  m5l();
  AN();
  v5l();
  YFo();
  lEe();
  Lql();
  d4t();
  yVl();
  ((I2o = R(lt(), 1)),
    (sJt = R(rt(), 1)),
    (am = R(rt(), 1)),
    (MH = R(se(), 1)),
    (dGf = sJt.memo(function (t) {
      let n = I2o.c(5),
        { agentDefinitions: r, latchAnnouncementSlot: o } = t,
        s,
        i;
      if (n[0] === Symbol.for("react.memo_cache_sentinel"))
        ((s = MH.jsx(f5l, {})), (i = null), (n[0] = s), (n[1] = i));
      else ((s = n[0]), (i = n[1]));
      let a;
      if (n[2] !== r || n[3] !== o)
        ((a = MH.jsx(cP, {
          children: MH.jsxs(U, {
            flexDirection: "column",
            gap: 1,
            children: [
              s,
              i,
              MH.jsx(sJt.Suspense, {
                fallback: null,
                children: MH.jsx(Rql, {
                  agentDefinitions: r,
                  latchAnnouncementSlot: o,
                }),
              }),
            ],
          }),
        })),
          (n[2] = r),
          (n[3] = o),
          (n[4] = a));
      else a = n[4];
      return a;
    })),
    (bVl = (f4(), ro(URe)).BRIEF_TOOL_NAME),
    (pGf = ro(WOn).SEND_USER_FILE_TOOL_NAME),
    (SVl = (l3(), ro(CQ)).isBriefEnabled),
    (fGf = (Bot(), ro(xvi)).isPewterOwlTool));
  TVl = [];
  AGf = sJt.memo(_Gf, (e, t) => {
    let n = Object.keys(e);
    for (let r of n) {
      if (
        r === "onOpenRateLimitOptions" ||
        r === "scrollRef" ||
        r === "trackStickyPrompt" ||
        r === "jumpRef" ||
        r === "onSearchMatchesChange" ||
        r === "scanElement" ||
        r === "setPositions"
      )
        continue;
      if (e[r] !== t[r]) {
        if (r === "streamingToolUses") {
          let o = e.streamingToolUses,
            s = t.streamingToolUses;
          if (o.length === s.length && o.every((i, a) => i.contentBlock === s[a]?.contentBlock))
            continue;
        }
        if (r === "inProgressToolUseIDs") {
          if (bGf(e.inProgressToolUseIDs, t.inProgressToolUseIDs)) continue;
        }
        if (r === "unseenDivider") {
          let o = e.unseenDivider,
            s = t.unseenDivider;
          if (o?.firstUnseenUuid === s?.firstUnseenUuid && o?.count === s?.count) continue;
        }
        if (r === "tools") {
          let o = e.tools,
            s = t.tools;
          if (o.length === s.length && o.every((i, a) => i.name === s[a]?.name)) continue;
        }
        return false;
      }
    }
    return true;
  });
});
function RVl(e) {
  let t = kVl.c(34),
    { log: n, onExit: r, onSelect: o } = e,
    [s, i] = Nor.useState(null),
    a,
    l;
  if (t[0] !== n)
    ((a = () => {
      if ((i(null), doe(n))) sAe(n).then(i);
    }),
      (l = [n]),
      (t[0] = n),
      (t[1] = a),
      (t[2] = l));
  else ((a = t[1]), (l = t[2]));
  Nor.useEffect(a, l);
  let c = doe(n) && s === null,
    u = s ?? n,
    d;
  if (t[3] !== u.messages) ((d = r9t(u.messages)), (t[3] = u.messages), (t[4] = d));
  else d = t[4];
  let p = d,
    f;
  if (t[5] !== u) ((f = qg(u) || ""), (t[5] = u), (t[6] = f));
  else f = t[6];
  let m = f,
    g;
  if (t[7] === Symbol.for("react.memo_cache_sentinel")) ((g = c3()), (t[7] = g));
  else g = t[7];
  let h = g,
    y;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((y = {
      context: "Confirmation",
    }),
      (t[8] = y));
  else y = t[8];
  $r("confirm:no", r, y);
  let b;
  if (t[9] !== s || t[10] !== n || t[11] !== o)
    ((b = () => {
      o(s ?? n);
    }),
      (t[9] = s),
      (t[10] = n),
      (t[11] = o),
      (t[12] = b));
  else b = t[12];
  let _ = b,
    S;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((S = {
      context: "Confirmation",
    }),
      (t[13] = S));
  else S = t[13];
  if (($r("confirm:yes", _, S), c)) {
    let M;
    if (t[14] === Symbol.for("react.memo_cache_sentinel"))
      ((M = S3.jsx(Vc, {
        message: "Loading session\u2026",
      })),
        (t[14] = M));
    else M = t[14];
    let N;
    if (t[15] === Symbol.for("react.memo_cache_sentinel"))
      ((N = S3.jsxs(U, {
        flexDirection: "column",
        padding: 1,
        children: [
          M,
          S3.jsx(w, {
            dimColor: true,
            children: S3.jsx(Tn, {
              children: S3.jsx(mr, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel",
              }),
            }),
          }),
        ],
      })),
        (t[15] = N));
    else N = t[15];
    return N;
  }
  let A;
  if (t[16] === Symbol.for("react.memo_cache_sentinel")) ((A = []), (t[16] = A));
  else A = t[16];
  let v;
  if (t[17] === Symbol.for("react.memo_cache_sentinel")) ((v = new Set()), (t[17] = v));
  else v = t[17];
  let C;
  if (t[18] === Symbol.for("react.memo_cache_sentinel")) ((C = []), (t[18] = C));
  else C = t[18];
  let x;
  if (t[19] !== m || t[20] !== p)
    ((x = S3.jsx(nYe, {
      messages: p,
      tools: h,
      commands: A,
      verbose: true,
      toolJSX: null,
      inProgressToolUseIDs: v,
      isMessageSelectorVisible: false,
      conversationId: m,
      screen: "transcript",
      latchAnnouncementSlot: false,
      streamingToolUses: C,
      showAllInTranscript: true,
      isLoading: false,
    })),
      (t[19] = m),
      (t[20] = p),
      (t[21] = x));
  else x = t[21];
  let I;
  if (t[22] !== u.modified) ((I = WK(u.modified)), (t[22] = u.modified), (t[23] = I));
  else I = t[23];
  let k = u.gitBranch ? ` \xB7 ${u.gitBranch}` : "",
    D;
  if (t[24] !== u.messageCount || t[25] !== I || t[26] !== k)
    ((D = S3.jsxs(w, {
      children: [I, " \xB7", " ", u.messageCount, " messages", k],
    })),
      (t[24] = u.messageCount),
      (t[25] = I),
      (t[26] = k),
      (t[27] = D));
  else D = t[27];
  let P;
  if (t[28] === Symbol.for("react.memo_cache_sentinel"))
    ((P = S3.jsx(w, {
      dimColor: true,
      children: S3.jsxs(Tn, {
        children: [
          S3.jsx(ht, {
            chord: "enter",
            action: "resume",
          }),
          S3.jsx(mr, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel",
          }),
        ],
      }),
    })),
      (t[28] = P));
  else P = t[28];
  let O;
  if (t[29] !== D)
    ((O = S3.jsxs(U, {
      flexShrink: 0,
      flexDirection: "column",
      borderTopDimColor: true,
      borderBottom: false,
      borderLeft: false,
      borderRight: false,
      borderStyle: "single",
      paddingLeft: 2,
      children: [D, P],
    })),
      (t[29] = D),
      (t[30] = O));
  else O = t[30];
  let L;
  if (t[31] !== x || t[32] !== O)
    ((L = S3.jsxs(U, {
      flexDirection: "column",
      children: [x, O],
    })),
      (t[31] = x),
      (t[32] = O),
      (t[33] = L));
  else L = t[33];
  return L;
}
var kVl, Nor, S3;
