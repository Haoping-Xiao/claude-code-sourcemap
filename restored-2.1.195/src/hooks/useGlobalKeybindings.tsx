// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tEc
// matched 2.1.88 source: src/hooks/useGlobalKeybindings.tsx
// class=modified  jaccard=0.5022  score=0.9084  fileCov=0.529
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var tEc = E(() => {
  ft();
  HI();
  fd();
  Lo();
  je();
  Is();
  sj();
});
function Izo(e) {
  let t = nEc.c(37),
    {
      screen: n,
      setScreen: r,
      showAllInTranscript: o,
      setShowAllInTranscript: s,
      messageCount: i,
      virtualScrollActive: a,
      searchBarOpen: l,
    } = e,
    c = l === void 0 ? false : l,
    u = Ht(hhm),
    d = Ho(),
    { addNotification: p } = Li(),
    f;
  if (t[0] !== u || t[1] !== d)
    ((f = () => {
      (G("tengu_toggle_todos", {
        is_expanded: u === "tasks",
      }),
        xe("todo_toggle_panel"),
        d(ghm));
    }),
      (t[0] = u),
      (t[1] = d),
      (t[2] = f));
  else f = t[2];
  let m = f,
    g = Ht(mhm),
    h,
    y;
  if (t[3] !== d)
    ((h = () => {
      let { isBriefEnabled: z } = (l3(), ro(CQ)),
        K = () => {
          if (z()) return;
          d(fhm);
        };
      return (K(), H7(K));
    }),
      (y = [d]),
      (t[3] = d),
      (t[4] = h),
      (t[5] = y));
  else ((h = t[4]), (y = t[5]));
  rEc.useEffect(h, y);
  let b;
  if (
    t[6] !== g ||
    t[7] !== i ||
    t[8] !== n ||
    t[9] !== d ||
    t[10] !== r ||
    t[11] !== s ||
    t[12] !== o
  )
    ((b = () => {
      let { isBriefEnabled: z } = (l3(), ro(CQ));
      if (!z() && g && n !== "transcript") {
        d(phm);
        return;
      }
      (G("tengu_toggle_transcript", {
        is_entering: n !== "transcript",
        show_all: o,
        message_count: i,
        open_dialog_count: w3.getState().open.length,
      }),
        r(dhm),
        s(false));
    }),
      (t[6] = g),
      (t[7] = i),
      (t[8] = n),
      (t[9] = d),
      (t[10] = r),
      (t[11] = s),
      (t[12] = o),
      (t[13] = b));
  else b = t[13];
  let _ = b,
    S;
  if (t[14] !== i || t[15] !== s || t[16] !== o)
    ((S = () => {
      (G("tengu_transcript_toggle_show_all", {
        is_expanding: !o,
        message_count: i,
      }),
        s(uhm));
    }),
      (t[14] = i),
      (t[15] = s),
      (t[16] = o),
      (t[17] = S));
  else S = t[17];
  let A = S,
    v;
  if (t[18] !== i || t[19] !== r || t[20] !== s || t[21] !== o)
    ((v = () => {
      (G("tengu_transcript_exit", {
        show_all: o,
        message_count: i,
      }),
        r("prompt"),
        s(false));
    }),
      (t[18] = i),
      (t[19] = r),
      (t[20] = s),
      (t[21] = o),
      (t[22] = v));
  else v = t[22];
  let C = v,
    x;
  if (t[23] !== g || t[24] !== d)
    ((x = () => {
      let { isBriefEnabled: z } = (l3(), ro(CQ));
      if (!z() && !g) return;
      let K = !g;
      (G("tengu_brief_mode_toggled", {
        enabled: K,
        gated: false,
        source: We("keybinding"),
      }),
        d((Z) => {
          if (Z.isBriefOnly === K) return Z;
          return {
            ...Z,
            isBriefOnly: K,
          };
        }));
    }),
      (t[23] = g),
      (t[24] = d),
      (t[25] = x));
  else x = t[25];
  let I = x,
    k;
  if (t[26] === Symbol.for("react.memo_cache_sentinel"))
    ((k = {
      context: "Global",
    }),
      (t[26] = k));
  else k = t[26];
  $r("app:toggleTodos", m, k);
  let D;
  if (t[27] === Symbol.for("react.memo_cache_sentinel"))
    ((D = {
      context: "Global",
    }),
      (t[27] = D));
  else D = t[27];
  $r("app:toggleTranscript", _, D);
  let P;
  if (t[28] === Symbol.for("react.memo_cache_sentinel"))
    ((P = {
      context: "Global",
    }),
      (t[28] = P));
  else P = t[28];
  $r("app:toggleBrief", I, P);
  let O;
  if (t[29] !== p) ((O = () => {}), (t[29] = p), (t[30] = O));
  else O = t[30];
  let L = O,
    M;
  if (t[31] === Symbol.for("react.memo_cache_sentinel"))
    ((M = {
      context: "Global",
    }),
      (t[31] = M));
  else M = t[31];
  $r("app:toggleTerminal", L, M);
  let N = chm,
    B;
  if (t[32] === Symbol.for("react.memo_cache_sentinel"))
    ((B = {
      context: "Global",
    }),
      (t[32] = B));
  else B = t[32];
  $r("app:redraw", N, B);
  let $ = n === "transcript",
    q = $ && !a,
    W;
  if (t[33] !== q)
    ((W = {
      context: "Transcript",
      isActive: q,
    }),
      (t[33] = q),
      (t[34] = W));
  else W = t[34];
  $r("transcript:toggleShowAll", A, W);
  let V = $ && !c,
    Y;
  if (t[35] !== V)
    ((Y = {
      context: "Transcript",
      isActive: V,
    }),
      (t[35] = V),
      (t[36] = Y));
  else Y = t[36];
  return ($r("transcript:exit", C, Y), null);
}
function chm() {
  Cu.get(process.stdout)?.forceRedraw();
}
function uhm(e) {
  return !e;
}
function dhm(e) {
  return e === "transcript" ? "prompt" : "transcript";
}
function phm(e) {
  if (!e.isBriefOnly) return e;
  return {
    ...e,
    isBriefOnly: false,
  };
}
function fhm(e) {
  if (!e.isBriefOnly) return e;
  return {
    ...e,
    isBriefOnly: false,
  };
}
function mhm(e) {
  return e.isBriefOnly;
}
function ghm(e) {
  return {
    ...e,
    expandedView: e.expandedView === "tasks" ? "none" : "tasks",
  };
}
function hhm(e) {
  return e.expandedView;
}
var nEc, rEc;
