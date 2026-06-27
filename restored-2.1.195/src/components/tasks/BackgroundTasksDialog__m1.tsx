// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vnc
// matched 2.1.88 source: src/components/tasks/BackgroundTasksDialog.tsx
// class=modified (alt of src/components/tasks/BackgroundTasksDialog.tsx)  jaccard=0.0803  score=0.1916  fileCov=0.1214
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vnc] deps: ft
((fXf = {
  type: "local-jsx",
  name: "goal",
  description: "Set a goal Claude checks before stopping",
  argumentHint: "[<condition> | clear]",
  immediate: true,
  load: () => Promise.resolve().then(() => (Enc(), bnc)),
}),
  (mXf = {
    type: "local",
    name: "goal",
    supportsNonInteractive: true,
    thinClientDispatch: "post-text",
    description: "Set a goal \u2014 keep working until the condition is met",
    get isHidden() {
      return !Ir();
    },
    isEnabled: () => Ir() || da(),
    load: () => Promise.resolve().then(() => (Hnc(), Anc)),
  }),
  (gXf = fXf));
function hXf(e) {
  return {
    id: e.taskId,
    type: "local_workflow",
    description: e.summary ?? "Dynamic workflow",
    status: e.status,
    startTime: e.startTime,
    endTime: e.startTime + e.durationMs,
    toolUseId: void 0,
    outputFile: "",
    outputOffset: 0,
    notified: true,
    script: e.script,
    scriptPath: e.scriptPath,
    prompt: e.script,
    summary: e.summary,
    workflowName: e.workflowName,
    phases: e.phases,
    defaultModel: e.defaultModel,
    workflowRunId: e.runId,
    workflowProgress: e.workflowProgress,
    progressVersion: 0,
    agentCount: e.agentCount,
    totalTokens: e.totalTokens ?? 0,
    totalToolCalls: e.totalToolCalls ?? 0,
    logs: e.logs,
    result: e.result,
    error: e.error,
  };
}
function wnc(e) {
  let t = OGo.c(139),
    { onDone: n } = e;
  Wh("workflow-history-dialog");
  let { rows: r } = bb(br()),
    o = Ht(vXf);
  Ho();
  let s = $T(),
    i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((i = []), (t[0] = i));
  else i = t[0];
  let [a, l] = _me.useState(i),
    [c, u] = _me.useState(true),
    d,
    p;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((d = () => {
      let me = false;
      return (
        Sml().then((pe) => {
          if (!me) (l(pe), u(false));
        }),
        () => {
          me = true;
        }
      );
    }),
      (p = []),
      (t[1] = d),
      (t[2] = p));
  else ((d = t[1]), (p = t[2]));
  _me.useEffect(d, p);
  let f;
  if (t[3] !== a || t[4] !== o) {
    let pe = Object.values(o ?? {}).filter(TXf),
      ge = new Set(pe.map(HXf).filter(AXf)),
      he = a.filter((le) => !ge.has(le.runId)).map(EXf);
    ((f = [...pe.map(SXf), ...he].sort(bXf)), (t[3] = a), (t[4] = o), (t[5] = f));
  } else f = t[5];
  let m = f,
    g;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((g = {
      mode: "list",
    }),
      (t[6] = g));
  else g = t[6];
  let [h, y] = _me.useState(g),
    [b, _] = _me.useState(0),
    S = _me.useRef(false),
    A;
  if (t[7] !== c || t[8] !== m[0] || t[9] !== m.length || t[10] !== h.mode)
    ((A = () => {
      if (!c && m.length === 1 && h.mode === "list" && !S.current)
        ((S.current = true),
          y({
            mode: "detail",
            itemId: m[0].task.id,
          }));
    }),
      (t[7] = c),
      (t[8] = m[0]),
      (t[9] = m.length),
      (t[10] = h.mode),
      (t[11] = A));
  else A = t[11];
  let v;
  if (t[12] !== c || t[13] !== m || t[14] !== h.mode)
    ((v = [c, m, h.mode]), (t[12] = c), (t[13] = m), (t[14] = h.mode), (t[15] = v));
  else v = t[15];
  _me.useEffect(A, v);
  let C = m[b],
    x;
  if (t[16] === Symbol.for("react.memo_cache_sentinel")) ((x = () => _(_Xf)), (t[16] = x));
  else x = t[16];
  let I;
  if (t[17] !== m.length)
    ((I = () => _((me) => Math.min(m.length - 1, me + 1))), (t[17] = m.length), (t[18] = I));
  else I = t[18];
  let k;
  if (t[19] !== C)
    ((k = () => {
      if (C)
        y({
          mode: "detail",
          itemId: C.task.id,
        });
    }),
      (t[19] = C),
      (t[20] = k));
  else k = t[20];
  let D;
  if (t[21] !== k || t[22] !== I)
    ((D = {
      "confirm:previous": x,
      "confirm:next": I,
      "confirm:yes": k,
    }),
      (t[21] = k),
      (t[22] = I),
      (t[23] = D));
  else D = t[23];
  let P = h.mode === "list",
    O;
  if (t[24] !== P)
    ((O = {
      context: "Confirmation",
      isActive: P,
    }),
      (t[24] = P),
      (t[25] = O));
  else O = t[25];
  No(D, O);
  let L = C !== void 0 && C.task.script.length > 0,
    M;
  if (t[26] !== C || t[27] !== L || t[28] !== s || t[29] !== h.mode)
    ((M = (me) => {
      if (h.mode !== "list") return;
      if (me.ctrl || me.meta) return;
      if (me.key === "x" && C?.task.status === "running") (me.preventDefault(), qAe(C.task.id, s));
      else if (me.key === "s" && L && C)
        (me.preventDefault(),
          y({
            mode: "save",
            itemId: C.task.id,
          }));
    }),
      (t[26] = C),
      (t[27] = L),
      (t[28] = s),
      (t[29] = h.mode),
      (t[30] = M));
  else M = t[30];
  let N = M,
    B;
  if (t[31] !== m.length || t[32] !== n)
    ((B = () => {
      if (S.current && m.length <= 1)
        n("Dynamic workflows dialog dismissed", {
          display: "system",
        });
      else
        ((S.current = false),
          y({
            mode: "list",
          }));
    }),
      (t[31] = m.length),
      (t[32] = n),
      (t[33] = B));
  else B = t[33];
  let $ = B;
  if (h.mode === "detail") {
    let me;
    if (t[34] !== m || t[35] !== h.itemId) {
      let Ie;
      if (t[37] !== h.itemId)
        ((Ie = (Ve) => Ve.task.id === h.itemId), (t[37] = h.itemId), (t[38] = Ie));
      else Ie = t[38];
      ((me = m.find(Ie)), (t[34] = m), (t[35] = h.itemId), (t[36] = me));
    } else me = t[36];
    let pe = me;
    if (!pe)
      return (
        y({
          mode: "list",
        }),
        null
      );
    let ge = pe.task.status === "running",
      he = pe.task,
      ie;
    if (t[39] !== n)
      ((ie = (Ie) =>
        Ie
          ? n(Ie, {
              display: "system",
            })
          : n()),
        (t[39] = n),
        (t[40] = ie));
    else ie = t[40];
    let le;
    if (t[41] !== ge || t[42] !== pe.task.id || t[43] !== s)
      ((le = ge ? () => qAe(pe.task.id, s) : void 0),
        (t[41] = ge),
        (t[42] = pe.task.id),
        (t[43] = s),
        (t[44] = le));
    else le = t[44];
    let He;
    if (t[45] !== ge || t[46] !== pe.task.id || t[47] !== s)
      ((He = ge ? () => R6e(pe.task.id, s) : void 0),
        (t[45] = ge),
        (t[46] = pe.task.id),
        (t[47] = s),
        (t[48] = He));
    else He = t[48];
    let ye;
    if (t[49] !== n)
      ((ye = (Ie) =>
        n(Ie, {
          shouldQuery: true,
          display: "system",
          metaMessages: [Ie],
        })),
        (t[49] = n),
        (t[50] = ye));
    else ye = t[50];
    let ue;
    if (t[51] !== ge || t[52] !== pe.task.id || t[53] !== s)
      ((ue = ge ? (Ie) => $6t(pe.task.id, Ie, s) : void 0),
        (t[51] = ge),
        (t[52] = pe.task.id),
        (t[53] = s),
        (t[54] = ue));
    else ue = t[54];
    let we;
    if (t[55] !== ge || t[56] !== pe.task.id || t[57] !== s)
      ((we = ge ? (Ie) => O6t(pe.task.id, Ie, s) : void 0),
        (t[55] = ge),
        (t[56] = pe.task.id),
        (t[57] = s),
        (t[58] = we));
    else we = t[58];
    let Ce;
    if (
      t[59] !== $ ||
      t[60] !== pe.task.id ||
      t[61] !== he ||
      t[62] !== ie ||
      t[63] !== le ||
      t[64] !== He ||
      t[65] !== ye ||
      t[66] !== ue ||
      t[67] !== we
    )
      ((Ce = dw.jsx(
        yJt,
        {
          workflow: he,
          onDone: ie,
          onBack: $,
          onKill: le,
          onPause: He,
          onResume: ye,
          onSkipAgent: ue,
          onRetryAgent: we,
        },
        pe.task.id,
      )),
        (t[59] = $),
        (t[60] = pe.task.id),
        (t[61] = he),
        (t[62] = ie),
        (t[63] = le),
        (t[64] = He),
        (t[65] = ye),
        (t[66] = ue),
        (t[67] = we),
        (t[68] = Ce));
    else Ce = t[68];
    return Ce;
  }
  if (h.mode === "save") {
    let me, pe, ge;
    if (t[69] !== m || t[70] !== h.itemId) {
      ge = Symbol.for("react.early_return_sentinel");
      e: {
        let He;
        if (t[74] !== h.itemId)
          ((He = (ue) => ue.task.id === h.itemId), (t[74] = h.itemId), (t[75] = He));
        else He = t[75];
        if (((me = m.find(He)), !me || me.task.script.length === 0)) {
          (y({
            mode: "list",
          }),
            (ge = null));
          break e;
        }
        let ye = ZI(me.task.script);
        pe = !("error" in ye) ? ye.meta.name : N_e(me.task.summary ?? me.task.description);
      }
      ((t[69] = m), (t[70] = h.itemId), (t[71] = me), (t[72] = pe), (t[73] = ge));
    } else ((me = t[71]), (pe = t[72]), (ge = t[73]));
    if (ge !== Symbol.for("react.early_return_sentinel")) return ge;
    let he = pe,
      ie;
    if (t[76] !== n)
      ((ie = (He) => {
        if (He)
          n(He, {
            display: "system",
          });
        else
          y({
            mode: "list",
          });
      }),
        (t[76] = n),
        (t[77] = ie));
    else ie = t[77];
    let le;
    if (t[78] !== he || t[79] !== me.task.script || t[80] !== ie)
      ((le = dw.jsx(psr, {
        script: me.task.script,
        defaultName: he,
        onDone: ie,
      })),
        (t[78] = he),
        (t[79] = me.task.script),
        (t[80] = ie),
        (t[81] = le));
    else le = t[81];
    return le;
  }
  let q = On(m, yXf),
    W = m.length - q,
    V,
    Y,
    z,
    K,
    Z,
    J,
    ne,
    oe,
    re,
    ee,
    ce,
    ae;
  if (
    t[82] !== W ||
    t[83] !== N ||
    t[84] !== c ||
    t[85] !== m ||
    t[86] !== n ||
    t[87] !== r ||
    t[88] !== q ||
    t[89] !== C?.task.status ||
    t[90] !== L ||
    t[91] !== b
  ) {
    let me = _b(r - 7, 3, m.length),
      { windowStart: pe, windowEnd: ge, moreAbove: he, moreBelow: ie } = yXt(b, m.length, me),
      le = m.slice(pe, ge),
      He;
    if (t[104] !== n)
      ((He = () =>
        n("Dynamic workflows dialog dismissed", {
          display: "system",
        })),
        (t[104] = n),
        (t[105] = He));
    else He = t[105];
    let ye = He;
    if (
      ((Y = U),
      (re = "column"),
      (ee = 0),
      (ce = true),
      (ae = N),
      (V = zn),
      (z = "Dynamic workflows"),
      t[106] !== W || t[107] !== m.length || t[108] !== q)
    )
      ((K =
        m.length === 0
          ? void 0
          : dw.jsx(w, {
              dimColor: true,
              children: dw.jsxs(Tn, {
                children: [q > 0 && `${q} running`, W > 0 && `${W} completed`],
              }),
            })),
        (t[106] = W),
        (t[107] = m.length),
        (t[108] = q),
        (t[109] = K));
    else K = t[109];
    ((Z = ye), (J = "background"));
    let ue;
    if (t[110] !== m.length)
      ((ue =
        m.length > 0 &&
        dw.jsx(ht, {
          chord: ["up", "down"],
          action: "select",
        })),
        (t[110] = m.length),
        (t[111] = ue));
    else ue = t[111];
    let we;
    if (t[112] !== m.length)
      ((we =
        m.length > 0 &&
        dw.jsx(ht, {
          chord: "enter",
          action: "view",
        })),
        (t[112] = m.length),
        (t[113] = we));
    else we = t[113];
    let Ce;
    if (t[114] !== C?.task.status)
      ((Ce =
        C?.task.status === "running" &&
        dw.jsx(ht, {
          chord: "x",
          action: "stop",
        })),
        (t[114] = C?.task.status),
        (t[115] = Ce));
    else Ce = t[115];
    let Ie;
    if (t[116] !== L)
      ((Ie =
        L &&
        dw.jsx(ht, {
          chord: "s",
          action: "save",
        })),
        (t[116] = L),
        (t[117] = Ie));
    else Ie = t[117];
    let Ve;
    if (t[118] === Symbol.for("react.memo_cache_sentinel"))
      ((Ve = dw.jsx(ht, {
        chord: "escape",
        action: "close",
      })),
        (t[118] = Ve));
    else Ve = t[118];
    if (t[119] !== ue || t[120] !== we || t[121] !== Ce || t[122] !== Ie)
      ((ne = dw.jsxs(Tn, {
        children: [ue, we, Ce, Ie, Ve],
      })),
        (t[119] = ue),
        (t[120] = we),
        (t[121] = Ce),
        (t[122] = Ie),
        (t[123] = ne));
    else ne = t[123];
    ((oe = c
      ? dw.jsx(Vc, {
          message: "Loading dynamic workflow history\u2026",
          dimColor: true,
        })
      : m.length === 0
        ? dw.jsx(Fl, {
            children: "No dynamic workflows in this session.",
          })
        : dw.jsxs(U, {
            flexDirection: "column",
            children: [
              he > 0 &&
                dw.jsxs(w, {
                  dimColor: true,
                  children: ["  ", nt.arrowUp, " ", he, " more above"],
                }),
              le.map((Ze, Be) =>
                dw.jsx(
                  wXf,
                  {
                    item: Ze,
                    isSelected: pe + Be === b,
                  },
                  Ze.task.id,
                ),
              ),
              ie > 0 &&
                dw.jsxs(w, {
                  dimColor: true,
                  children: ["  ", nt.arrowDown, " ", ie, " more below"],
                }),
            ],
          })),
      (t[82] = W),
      (t[83] = N),
      (t[84] = c),
      (t[85] = m),
      (t[86] = n),
      (t[87] = r),
      (t[88] = q),
      (t[89] = C?.task.status),
      (t[90] = L),
      (t[91] = b),
      (t[92] = V),
      (t[93] = Y),
      (t[94] = z),
      (t[95] = K),
      (t[96] = Z),
      (t[97] = J),
      (t[98] = ne),
      (t[99] = oe),
      (t[100] = re),
      (t[101] = ee),
      (t[102] = ce),
      (t[103] = ae));
  } else
    ((V = t[92]),
      (Y = t[93]),
      (z = t[94]),
      (K = t[95]),
      (Z = t[96]),
      (J = t[97]),
      (ne = t[98]),
      (oe = t[99]),
      (re = t[100]),
      (ee = t[101]),
      (ce = t[102]),
      (ae = t[103]));
  let de;
  if (
    t[124] !== V ||
    t[125] !== z ||
    t[126] !== K ||
    t[127] !== Z ||
    t[128] !== J ||
    t[129] !== ne ||
    t[130] !== oe
  )
    ((de = dw.jsx(V, {
      title: z,
      subtitle: K,
      onCancel: Z,
      color: J,
      inputGuide: ne,
      children: oe,
    })),
      (t[124] = V),
      (t[125] = z),
      (t[126] = K),
      (t[127] = Z),
      (t[128] = J),
      (t[129] = ne),
      (t[130] = oe),
      (t[131] = de));
  else de = t[131];
  let Ee;
  if (
    t[132] !== Y ||
    t[133] !== re ||
    t[134] !== ee ||
    t[135] !== ce ||
    t[136] !== ae ||
    t[137] !== de
  )
    ((Ee = dw.jsx(Y, {
      flexDirection: re,
      tabIndex: ee,
      autoFocus: ce,
      onKeyDown: ae,
      children: de,
    })),
      (t[132] = Y),
      (t[133] = re),
      (t[134] = ee),
      (t[135] = ce),
      (t[136] = ae),
      (t[137] = de),
      (t[138] = Ee));
  else Ee = t[138];
  return Ee;
}
function yXf(e) {
  return e.task.status === "running";
}
function _Xf(e) {
  return Math.max(0, e - 1);
}
function bXf(e, t) {
  return t.task.startTime - e.task.startTime;
}
function SXf(e) {
  return {
    task: e,
  };
}
function EXf(e) {
  return {
    task: hXf(e),
    snapshot: e,
  };
}
function AXf(e) {
  return !!e;
}
function HXf(e) {
  return e.workflowRunId;
}
function TXf(e) {
  return e.type === "local_workflow";
}
function vXf(e) {
  return e.tasks;
}
function wXf(e) {
  let t = OGo.c(27),
    { item: n, isSelected: r } = e,
    o = n.task,
    s = n.snapshot,
    i,
    a;
  e: switch (o.status) {
    case "completed": {
      ((i = nt.tick), (a = "success"));
      break e;
    }
    case "failed":
    case "killed": {
      ((i = nt.cross), (a = "error"));
      break e;
    }
    default:
      ((i = "\u27F3"), (a = void 0));
  }
  let l = s?.totalTokens ?? o.totalTokens ?? 0,
    c;
  if (t[0] !== o.endTime) ((c = o.endTime ?? Date.now()), (t[0] = o.endTime), (t[1] = c));
  else c = t[1];
  let u = Math.max(0, c - o.startTime - (o.totalPausedMs ?? 0)),
    d;
  if (t[2] !== o.agentCount)
    ((d = o.agentCount > 0 ? `${o.agentCount} ${bn(o.agentCount, "agent")}` : null),
      (t[2] = o.agentCount),
      (t[3] = d));
  else d = t[3];
  let p;
  if (t[4] !== l) ((p = l > 0 ? `${gl(l)} tok` : null), (t[4] = l), (t[5] = p));
  else p = t[5];
  let f;
  if (t[6] !== u) ((f = Yi(u)), (t[6] = u), (t[7] = f));
  else f = t[7];
  let m;
  if (t[8] !== d || t[9] !== p || t[10] !== f)
    ((m = [d, p, f].filter(Boolean)), (t[8] = d), (t[9] = p), (t[10] = f), (t[11] = m));
  else m = t[11];
  let g = m,
    h = o.workflowName ?? o.summary ?? o.description,
    y = h.length > 50 ? h.slice(0, 49) + "\u2026" : h,
    b = r ? nt.pointer + " " : "  ",
    _;
  if (t[12] !== b)
    ((_ = dw.jsx(w, {
      children: b,
    })),
      (t[12] = b),
      (t[13] = _));
  else _ = t[13];
  let S = r ? "suggestion" : void 0,
    A;
  if (t[14] !== i || t[15] !== a)
    ((A = dw.jsx(w, {
      color: a,
      children: i,
    })),
      (t[14] = i),
      (t[15] = a),
      (t[16] = A));
  else A = t[16];
  let v = g.join(" \xB7 "),
    C;
  if (t[17] !== v)
    ((C = dw.jsxs(w, {
      dimColor: true,
      children: ["  ", v],
    })),
      (t[17] = v),
      (t[18] = C));
  else C = t[18];
  let x;
  if (t[19] !== y || t[20] !== C || t[21] !== S || t[22] !== A)
    ((x = dw.jsxs(w, {
      color: S,
      children: [A, " ", y, C],
    })),
      (t[19] = y),
      (t[20] = C),
      (t[21] = S),
      (t[22] = A),
      (t[23] = x));
  else x = t[23];
  let I;
  if (t[24] !== x || t[25] !== _)
    ((I = dw.jsxs(U, {
      children: [_, x],
    })),
      (t[24] = x),
      (t[25] = _),
      (t[26] = I));
  else I = t[26];
  return I;
}
var OGo, _me, dw;
