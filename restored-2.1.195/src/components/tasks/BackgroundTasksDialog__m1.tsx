// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Oyc
// matched 2.1.88 source: src/components/tasks/BackgroundTasksDialog.tsx
// class=modified (alt of src/components/tasks/BackgroundTasksDialog.tsx)  jaccard=0.0545  score=0.128  fileCov=0.0866
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Oyc] deps: ft, loe, Xa, Ed, tC, Ye, ps, uo, sa, Fh, Bs, vi, f_, Ko
((Myc = require("path")), (y7e = R(rt(), 1)), (FP = R(se(), 1)));
function kZ(e) {
  return MF(e) || uE(e);
}
function Byc(e) {
  return e.type === "in_process_teammate" ? e.identity.agentName : e.agentType;
}
function Npm(e) {
  return e.type === "in_process_teammate" ? e.identity.agentId : e.agentId;
}
function Bpm(e) {
  return e.type === "in_process_teammate" ? e.pendingUserMessages.length : e.pendingMessages.length;
}
function Upm(e, t) {
  return (
    e?.type === "in_process_teammate" &&
    e.isIdle &&
    e.evictAfter !== void 0 &&
    e.evictAfter > 0 &&
    e.evictAfter <= t &&
    e.pendingUserMessages.length === 0 &&
    !e.awaitingPlanApproval
  );
}
function Fpm(e, t) {
  let n = t ? e[t] : void 0,
    r = MF(n) ? n.agentId : void 0,
    o = MF(n) ? Xse(e, n) : void 0,
    s = Uyc(e, t),
    i = Object.values(e).filter(
      (d) =>
        kZ(d) &&
        (d.evictAfter !== 0 || s.has(d.id)) &&
        (Xse(e, d) === r || Xse(e, d) === o || s.has(d.id)),
    ),
    a = new Set(i.map((d) => d.id)),
    l = new Map();
  for (let d of i) {
    let p = Xse(e, d),
      f = p !== void 0 && a.has(p) ? p : void 0,
      m = l.get(f);
    if (m) m.push(d);
    else l.set(f, [d]);
  }
  for (let d of l.values()) d.sort((p, f) => p.startTime - f.startTime);
  let c = [];
  function u(d) {
    for (let p of l.get(d) ?? []) (c.push(p), u(p.id));
  }
  return (u(void 0), c);
}
function Xse(e, t) {
  if (t.type === "in_process_teammate" || !t.parentAgentId) return;
  let n = e[t.parentAgentId];
  return MF(n) && n.evictAfter !== 0 ? t.parentAgentId : void 0;
}
function Uyc(e, t) {
  let n = t ? e[t] : void 0,
    r = new Set();
  for (let o = kZ(n) ? n : void 0; o && !r.has(o.id); ) {
    r.add(o.id);
    let s = Xse(e, o),
      i = s ? e[s] : void 0;
    o = kZ(i) ? i : void 0;
  }
  return r;
}
function jpm(e, t) {
  let n = 0,
    r = new Set(),
    o = Xse(e, t);
  while (o && !r.has(o)) {
    (r.add(o), n++);
    let s = e[o];
    o = MF(s) ? Xse(e, s) : void 0;
  }
  return n;
}
function Gpm(e, t) {
  let n = 0;
  for (let r of Object.values(e)) {
    if (!MF(r) || r.evictAfter === 0) continue;
    let o = Xse(e, r),
      s = new Set();
    while (o && !s.has(o)) {
      if (o === t) {
        n++;
        break;
      }
      s.add(o);
      let i = e[o];
      o = MF(i) ? Xse(e, i) : void 0;
    }
  }
  return n;
}
function Nme(e, t, n) {
  return Fpm(e, n).filter((r) => t[r.id]?.content !== "");
}
function Fyc(e, t, n) {
  if (e < 1) return e;
  for (let r = Math.min(e, t.length) - 1; r >= 0; r--) {
    let o = n.indexOf(t[r]);
    if (o !== -1) return o + 1;
  }
  return 0;
}
function Men() {
  return 2 + Math.max(rn(nt.circle), rn(gc)) + 1;
}
function jyc(e) {
  switch (e) {
    case "completed":
      return "success";
    case "failed":
    case "killed":
      return "error";
    default:
      return;
  }
}
function I6o(e) {
  if (e.type === "in_process_teammate") return !KHe(e.status);
  return !KHe(e.status) || sw(e);
}
function Wpm(e, t, n, r) {
  let o = Bpm(e),
    s = o > 0 ? `${o} queued` : "",
    i = e.progress?.tokenCount,
    a = e.progress?.lastActivity ? nt.arrowDown : nt.arrowUp,
    l = i !== void 0 && i > 0 ? `${a} ${ou(i)} tokens` : "";
  if (e.type === "in_process_teammate") {
    if (e.status === "running" && e.shutdownRequested)
      return {
        elapsed: "stopping",
        tokenText: "",
        queuedText: s,
        queuedCount: o,
      };
    if (e.status === "running" && e.awaitingPlanApproval)
      return {
        elapsed: "awaiting approval",
        tokenText: "",
        queuedText: s,
        queuedCount: o,
      };
    if (e.isIdle)
      return {
        elapsed: "idle",
        tokenText: "",
        queuedText: s,
        queuedCount: o,
      };
    if (KHe(e.status)) {
      let f = n ?? e.startTime,
        m = e.endTime ?? t;
      return {
        elapsed: Yi(Math.max(0, m - f)),
        tokenText: l,
        queuedText: s,
        queuedCount: o,
      };
    }
    let p = n ?? e.startTime;
    return {
      elapsed: Yi(Math.max(0, t - p)),
      tokenText: l,
      queuedText: s,
      queuedCount: o,
    };
  }
  let c = !KHe(e.status);
  if (c && e.isIdle)
    return {
      elapsed: "waiting",
      tokenText: "",
      queuedText: s,
      queuedCount: o,
    };
  if (e.status === "completed" && r && !sw(e))
    return {
      elapsed: "idle",
      tokenText: "",
      queuedText: s,
      queuedCount: o,
    };
  let u = e.totalPausedMs ?? 0,
    d = Math.max(0, c ? t - e.startTime - u : (e.endTime ?? e.startTime) - e.startTime - u);
  return {
    elapsed: Yi(d),
    tokenText: l,
    queuedText: s,
    queuedCount: o,
  };
}
function qpm(e, t, n) {
  let r = KHe(e.status),
    o = r ? (e.endTime ?? e.startTime) : n,
    s = Math.max(0, o - e.startTime - (e.totalPausedMs ?? 0)),
    i = e.totalTokens > 0 ? ` \xB7 ${nt.arrowDown} ${ou(e.totalTokens)} tokens` : "",
    a = t.failedCount > 0 ? ` \xB7 ${t.failedCount} failed` : "",
    l = e.workflowName ?? e.summary ?? e.description ?? "Dynamic workflow",
    c = bi(e.description ?? e.summary ?? "", ":").trim();
  return {
    name: l,
    description: c === l ? "" : c,
    statusText: `${t.done}/${t.total} agents done${a} \xB7 ${Yi(s)}${i}`,
    bulletColor: r ? jyc(e.status) : t.failedCount > 0 ? "error" : void 0,
  };
}
function Gyc({ showWorkflows: e = false } = {}) {
  let t = Ht((z) => z.tasks),
    n = Dc(),
    r = Ht((z) => z.taskDecorations),
    o = Ht((z) => z.viewingAgentTaskId),
    s = Ht((z) => z.agentNameRegistry),
    i = Ht((z) => z.coordinatorTaskIndex),
    a = Ht((z) => z.footerSelection === "tasks"),
    l = Ht((z) => z.footerSelection === "workflows"),
    c = Ht((z) => z.workflowFooterIndex),
    u = a ? i : void 0,
    d = Ho(),
    p = $T(),
    f = Nme(t, r, o),
    m = Object.values(t).some(kZ),
    g = xZ.useMemo(() => (e ? Pen(t) : []), [t, e]),
    h = g.length > 0,
    y = xZ.useMemo(() => g.map((z) => l7n(z.workflowProgress, z.agentCount)), [g]),
    b = xZ.useRef(t);
  b.current = t;
  let _ = xZ.useRef(e);
  _.current = e;
  let [, S] = xZ.useState(0);
  Gc(
    () => {
      let z = Date.now(),
        K = false,
        Z = [];
      for (let J of Object.values(b.current)) {
        if (J.type === "local_workflow") {
          if (J.status === "running") {
            if (_.current) K = true;
          } else if ((J.evictAfter ?? 1 / 0) <= z) p.evictTerminal(J.id);
          continue;
        }
        if (!kZ(J)) continue;
        if (KHe(J.status)) {
          if (J.evictAfter !== void 0 && J.evictAfter <= z) p.evictTerminal(J.id);
        } else if (J.evictAfter !== void 0 && J.evictAfter > 0 && J.evictAfter <= z) Z.push(J.id);
        else if (!KHe(J.status) && !J.isIdle) K = true;
      }
      if (Z.length > 0)
        d((J) => {
          let ne;
          for (let oe of Z) {
            let re = J.tasks[oe];
            if (Upm(re, z))
              ((ne ??= {
                ...J.tasks,
              }),
                (ne[oe] = {
                  ...re,
                  evictAfter: 0,
                }));
          }
          return ne
            ? {
                ...J,
                tasks: ne,
              }
            : J;
        });
      if (K) S((J) => J + 1);
    },
    m || h ? 1000 : null,
  );
  let A = xZ.useMemo(() => {
      let z = new Map();
      for (let [K, Z] of s) z.set(Z, K);
      return z;
    }, [s]),
    v = o !== void 0 && kZ(t[o]);
  if (f.length === 0 && !h && !v) return null;
  let C = Date.now(),
    x = g.map((z, K) => qpm(z, y[K], C)),
    I = u ?? 0,
    k = _b(I >= 1 ? I - 1 : f.findIndex((z) => z.id === o), 0, Math.max(0, f.length - 1)),
    { windowStart: D, windowEnd: P, moreAbove: O, moreBelow: L } = yXt(k, f.length, Nyc),
    M = Uyc(t, o),
    N = f.map((z) => (M.has(z.id) ? 0 : Gpm(t, Npm(z)))),
    B = f.map((z) => jpm(t, z)),
    $ = (z) => (z > 0 ? ` (+${z})` : ""),
    q = Math.min(
      28,
      Math.max(
        4,
        ...f.map((z, K) =>
          r[z.id]?.content === void 0 ? 2 * B[K] + rn(A.get(z.id) ?? Byc(z)) + rn($(N[K])) : 0,
        ),
        ...x.map((z) => rn(z.name)),
      ),
    ),
    W = n.getState().transcripts,
    V = f.map((z) => Wpm(z, C, W[z.id]?.turnStartTime, A.has(z.id))),
    Y = Math.max(
      0,
      ...V.map((z, K) =>
        r[f[K].id]?.content === void 0
          ? rn([z.elapsed, z.tokenText, z.queuedText].filter(Boolean).join(" \xB7 "))
          : 0,
      ),
      ...x.map((z) => rn(z.statusText)),
    );
  return Au.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      (f.length > 0 || v) &&
        Au.jsx(tfm, {
          isSelected: u === 0,
          isViewed: o === void 0,
          labelWidth: q,
          moreAbove: O,
          onClick: () => Wq(d),
        }),
      f.slice(D, P).map((z, K) => {
        let Z = D + K,
          J = B[Z],
          ne = Xse(t, z),
          oe = ne !== void 0 && f.findIndex((ee) => ee.id === ne) >= D,
          re;
        if (J > 0 && oe) {
          let ee = f.slice(Z + 1).some((ce) => Xse(t, ce) === ne);
          re = Ff("  ", J - 1) + (ee ? FO.branch : FO.last) + " ";
        }
        return Au.jsx(
          nfm,
          {
            task: z,
            name: A.get(z.id),
            decoration: r[z.id],
            isSelected: u === Z + 1,
            isViewed: o === z.id,
            treeConnector: re,
            descendantSuffix: $(N[Z]),
            labelWidth: q,
            statusWidth: Y,
            statusParts: V[Z],
            onClick: () => Hz(z.id, d),
          },
          z.id,
        );
      }),
      f.length > Nyc &&
        Au.jsx(U, {
          justifyContent: "flex-end",
          children: Au.jsx(w, {
            dimColor: true,
            children: L > 0 ? `${r9} ${L} more` : " ",
          }),
        }),
      g.map((z, K) =>
        Au.jsx(
          rfm,
          {
            parts: x[K],
            isSelected: l && c === K,
            labelWidth: q,
            statusWidth: Y,
            onClick: () =>
              d((Z) =>
                Z.workflowDetail?.taskId === z.id
                  ? Z
                  : {
                      ...Z,
                      workflowDetail: {
                        taskId: z.id,
                      },
                    },
              ),
          },
          z.id,
        ),
      ),
    ],
  });
}
function Wyc() {
  let e = $Tt.c(12),
    t = Ht(Jpm),
    n = Ht(Xpm),
    r = Ht(Ypm),
    o = Ht(Kpm),
    s = Ht(zpm),
    i = Ht(Vpm),
    a = Uu("chat:killAgents", "Chat", "ctrl+x ctrl+k"),
    { columns: l } = br(),
    c = l >= 90,
    u;
  if (o === "tasks" && s >= 0) {
    let p;
    if (e[0] !== s || e[1] !== a || e[2] !== c || e[3] !== n || e[4] !== t || e[5] !== r) {
      let f = Nme(t, n, r),
        m = s >= 1 ? f[s - 1] : void 0;
      ((p = m
        ? Au.jsxs(Tn, {
            children: [
              Au.jsx(ht, {
                chord: "enter",
                action: "view",
              }),
              Au.jsx(ht, {
                chord: "x",
                action: I6o(m) ? "stop" : "clear",
              }),
              c &&
                On(f, I6o) > 1 &&
                Au.jsx(ht, {
                  chord: a,
                  action: "stop all agents",
                  format: {
                    keyCase: "lower",
                  },
                }),
            ],
          })
        : Au.jsxs(Tn, {
            children: [
              Au.jsx(ht, {
                chord: ["up", "down"],
                action: "select",
              }),
              Au.jsx(ht, {
                chord: "enter",
                action: "view",
              }),
            ],
          })),
        (e[0] = s),
        (e[1] = a),
        (e[2] = c),
        (e[3] = n),
        (e[4] = t),
        (e[5] = r),
        (e[6] = p));
    } else p = e[6];
    u = p;
  } else if (o === "workflows") {
    let p;
    if (e[7] !== t || e[8] !== i) {
      let f = Pen(t)[i];
      ((p = f
        ? Au.jsxs(Tn, {
            children: [
              Au.jsx(ht, {
                chord: "enter",
                action: "view",
              }),
              Au.jsx(ht, {
                chord: "x",
                action: KHe(f.status) ? "clear" : "stop",
              }),
            ],
          })
        : Au.jsxs(Tn, {
            children: [
              Au.jsx(ht, {
                chord: ["up", "down"],
                action: "select",
              }),
              Au.jsx(ht, {
                chord: "enter",
                action: "view",
              }),
            ],
          })),
        (e[7] = t),
        (e[8] = i),
        (e[9] = p));
    } else p = e[9];
    u = p;
  }
  let d;
  if (e[10] !== u)
    ((d =
      u !== void 0
        ? Au.jsx(w, {
            dimColor: true,
            wrap: "truncate",
            children: u,
          })
        : null),
      (e[10] = u),
      (e[11] = d));
  else d = e[11];
  return d;
}
function Vpm(e) {
  return e.workflowFooterIndex;
}
function zpm(e) {
  return e.coordinatorTaskIndex;
}
function Kpm(e) {
  return e.footerSelection;
}
function Ypm(e) {
  return e.viewingAgentTaskId;
}
function Xpm(e) {
  return e.taskDecorations;
}
function Jpm(e) {
  return e.tasks;
}
function Adr() {
  let e = $Tt.c(4),
    t = Ht(efm),
    n = Ht(Zpm),
    r = Ht(Qpm),
    o;
  if (e[0] !== n || e[1] !== t || e[2] !== r)
    ((o = Nme(t, n, r)), (e[0] = n), (e[1] = t), (e[2] = r), (e[3] = o));
  else o = e[3];
  let s = o.length,
    i = r !== void 0 && kZ(t[r]);
  return s > 0 || i ? s + 1 : 0;
}
function Qpm(e) {
  return e.viewingAgentTaskId;
}
function Zpm(e) {
  return e.taskDecorations;
}
function efm(e) {
  return e.tasks;
}
function tfm(e) {
  let t = $Tt.c(16),
    { isSelected: n, isViewed: r, labelWidth: o, moreAbove: s, onClick: i } = e,
    [a, l] = xZ.useState(false),
    c = n || a ? nt.pointer + " " : "  ",
    u = r ? gc : nt.circle,
    d = s > 0 ? `${Wee} ${s} more` : "",
    p,
    f;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((p = () => l(true)), (f = () => l(false)), (t[0] = p), (t[1] = f));
  else ((p = t[0]), (f = t[1]));
  let m = o + Men(),
    g = !n && !r && !a,
    h;
  if (t[2] !== u || t[3] !== r || t[4] !== c || t[5] !== g)
    ((h = Au.jsxs(w, {
      dimColor: g,
      bold: r,
      children: [c, u, " main"],
    })),
      (t[2] = u),
      (t[3] = r),
      (t[4] = c),
      (t[5] = g),
      (t[6] = h));
  else h = t[6];
  let y;
  if (t[7] !== m || t[8] !== h)
    ((y = Au.jsx(U, {
      width: m,
      flexShrink: 0,
      children: h,
    })),
      (t[7] = m),
      (t[8] = h),
      (t[9] = y));
  else y = t[9];
  let b;
  if (t[10] !== d)
    ((b =
      d &&
      Au.jsx(w, {
        dimColor: true,
        children: d,
      })),
      (t[10] = d),
      (t[11] = b));
  else b = t[11];
  let _;
  if (t[12] !== i || t[13] !== y || t[14] !== b)
    ((_ = Au.jsxs(U, {
      justifyContent: "space-between",
      onClick: i,
      onMouseEnter: p,
      onMouseLeave: f,
      children: [y, b],
    })),
      (t[12] = i),
      (t[13] = y),
      (t[14] = b),
      (t[15] = _));
  else _ = t[15];
  return _;
}
function nfm(e) {
  let t = $Tt.c(79),
    {
      task: n,
      name: r,
      decoration: o,
      labelWidth: s,
      statusWidth: i,
      statusParts: a,
      isSelected: l,
      isViewed: c,
      treeConnector: u,
      descendantSuffix: d,
      onClick: p,
    } = e,
    [f, m] = xZ.useState(false),
    { elapsed: g, tokenText: h, queuedText: y, queuedCount: b } = a,
    _ = n.progress?.summary || n.description,
    S = l || f,
    A = S ? nt.pointer + " " : "  ",
    v = c ? gc : nt.circle,
    C;
  if (t[0] !== n) ((C = I6o(n) ? void 0 : jyc(n.status)), (t[0] = n), (t[1] = C));
  else C = t[1];
  let x = C,
    I = !S && !c,
    k;
  if (t[2] !== I || t[3] !== c || t[4] !== A)
    ((k = Au.jsx(w, {
      dimColor: I,
      bold: c,
      children: A,
    })),
      (t[2] = I),
      (t[3] = c),
      (t[4] = A),
      (t[5] = k));
  else k = t[5];
  let D;
  if (t[6] !== I || t[7] !== u)
    ((D =
      u !== void 0 &&
      Au.jsx(w, {
        dimColor: I,
        children: u,
      })),
      (t[6] = I),
      (t[7] = u),
      (t[8] = D));
  else D = t[8];
  let P = !x && I,
    O;
  if (t[9] !== v || t[10] !== x || t[11] !== c || t[12] !== P)
    ((O = Au.jsxs(w, {
      color: x,
      dimColor: P,
      bold: c,
      children: [v, " "],
    })),
      (t[9] = v),
      (t[10] = x),
      (t[11] = c),
      (t[12] = P),
      (t[13] = O));
  else O = t[13];
  let L;
  if (t[14] !== k || t[15] !== D || t[16] !== O)
    ((L = Au.jsxs(Au.Fragment, {
      children: [k, D, O],
    })),
      (t[14] = k),
      (t[15] = D),
      (t[16] = O),
      (t[17] = L));
  else L = t[17];
  let M = L,
    N;
  if (t[18] !== u) ((N = u ? rn(u) : 0), (t[18] = u), (t[19] = N));
  else N = t[19];
  let B = N,
    $ = Men() + B,
    q = Math.max(0, s - B);
  if (o?.content !== void 0) {
    let me, pe;
    if (t[20] === Symbol.for("react.memo_cache_sentinel"))
      ((me = () => m(true)), (pe = () => m(false)), (t[20] = me), (t[21] = pe));
    else ((me = t[20]), (pe = t[21]));
    let ge;
    if (t[22] !== M || t[23] !== $)
      ((ge = Au.jsx(U, {
        width: $,
        flexShrink: 0,
        children: M,
      })),
        (t[22] = M),
        (t[23] = $),
        (t[24] = ge));
    else ge = t[24];
    let he;
    if (t[25] !== o.content)
      ((he = Au.jsx(bd, {
        children: o.content,
      })),
        (t[25] = o.content),
        (t[26] = he));
    else he = t[26];
    let ie;
    if (t[27] !== I || t[28] !== c || t[29] !== he)
      ((ie = Au.jsx(U, {
        flexGrow: 1,
        width: 0,
        children: Au.jsx(w, {
          dimColor: I,
          bold: c,
          wrap: "truncate",
          children: he,
        }),
      })),
        (t[27] = I),
        (t[28] = c),
        (t[29] = he),
        (t[30] = ie));
    else ie = t[30];
    let le;
    if (t[31] !== p || t[32] !== ge || t[33] !== ie)
      ((le = Au.jsxs(U, {
        onClick: p,
        onMouseEnter: me,
        onMouseLeave: pe,
        children: [ge, ie],
      })),
        (t[31] = p),
        (t[32] = ge),
        (t[33] = ie),
        (t[34] = le));
    else le = t[34];
    return le;
  }
  let W, V;
  if (t[35] === Symbol.for("react.memo_cache_sentinel"))
    ((W = () => m(true)), (V = () => m(false)), (t[35] = W), (t[36] = V));
  else ((W = t[35]), (V = t[36]));
  let Y;
  if (t[37] !== M || t[38] !== $)
    ((Y = Au.jsx(U, {
      width: $,
      flexShrink: 0,
      children: M,
    })),
      (t[37] = M),
      (t[38] = $),
      (t[39] = Y));
  else Y = t[39];
  let z = !r && I,
    K;
  if (t[40] !== r || t[41] !== n) ((K = r ?? Byc(n)), (t[40] = r), (t[41] = n), (t[42] = K));
  else K = t[42];
  let Z;
  if (t[43] !== d)
    ((Z =
      d &&
      Au.jsx(w, {
        dimColor: true,
        children: d,
      })),
      (t[43] = d),
      (t[44] = Z));
  else Z = t[44];
  let J;
  if (t[45] !== c || t[46] !== z || t[47] !== K || t[48] !== Z)
    ((J = Au.jsxs(w, {
      bold: c,
      dimColor: z,
      wrap: "truncate",
      children: [K, Z],
    })),
      (t[45] = c),
      (t[46] = z),
      (t[47] = K),
      (t[48] = Z),
      (t[49] = J));
  else J = t[49];
  let ne;
  if (t[50] !== q || t[51] !== J)
    ((ne = Au.jsx(U, {
      width: q,
      flexShrink: 0,
      children: J,
    })),
      (t[50] = q),
      (t[51] = J),
      (t[52] = ne));
  else ne = t[52];
  let oe;
  if (t[53] !== I || t[54] !== _ || t[55] !== c)
    ((oe = Au.jsx(U, {
      flexGrow: 1,
      width: 0,
      paddingLeft: 2,
      children: Au.jsx(w, {
        dimColor: I,
        bold: c,
        wrap: "truncate",
        children: _,
      }),
    })),
      (t[53] = I),
      (t[54] = _),
      (t[55] = c),
      (t[56] = oe));
  else oe = t[56];
  let re;
  if (t[57] !== g || t[58] !== h)
    ((re = [g, h].filter(Boolean)), (t[57] = g), (t[58] = h), (t[59] = re));
  else re = t[59];
  let ee = re.join(" \xB7 "),
    ce;
  if (t[60] !== g || t[61] !== b || t[62] !== y || t[63] !== h)
    ((ce =
      b > 0 &&
      Au.jsxs(w, {
        color: "warning",
        children: [g || h ? " \xB7 " : "", y],
      })),
      (t[60] = g),
      (t[61] = b),
      (t[62] = y),
      (t[63] = h),
      (t[64] = ce));
  else ce = t[64];
  let ae;
  if (t[65] !== I || t[66] !== c || t[67] !== ee || t[68] !== ce)
    ((ae = Au.jsxs(w, {
      dimColor: I,
      bold: c,
      children: [ee, ce],
    })),
      (t[65] = I),
      (t[66] = c),
      (t[67] = ee),
      (t[68] = ce),
      (t[69] = ae));
  else ae = t[69];
  let de;
  if (t[70] !== i || t[71] !== ae)
    ((de = Au.jsx(U, {
      minWidth: i,
      flexShrink: 0,
      marginLeft: 1,
      justifyContent: "flex-end",
      children: ae,
    })),
      (t[70] = i),
      (t[71] = ae),
      (t[72] = de));
  else de = t[72];
  let Ee;
  if (t[73] !== p || t[74] !== Y || t[75] !== ne || t[76] !== oe || t[77] !== de)
    ((Ee = Au.jsxs(U, {
      onClick: p,
      onMouseEnter: W,
      onMouseLeave: V,
      children: [Y, ne, oe, de],
    })),
      (t[73] = p),
      (t[74] = Y),
      (t[75] = ne),
      (t[76] = oe),
      (t[77] = de),
      (t[78] = Ee));
  else Ee = t[78];
  return Ee;
}
function rfm(e) {
  let t = $Tt.c(33),
    { parts: n, labelWidth: r, statusWidth: o, isSelected: s, onClick: i } = e,
    [a, l] = xZ.useState(false),
    c = s || a,
    u = c ? nt.pointer + " " : "  ",
    d = n.bulletColor,
    p = !c,
    f,
    m;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((f = () => l(true)), (m = () => l(false)), (t[0] = f), (t[1] = m));
  else ((f = t[0]), (m = t[1]));
  let g;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((g = Men()), (t[2] = g));
  else g = t[2];
  let h;
  if (t[3] !== p || t[4] !== u)
    ((h = Au.jsx(w, {
      dimColor: p,
      children: u,
    })),
      (t[3] = p),
      (t[4] = u),
      (t[5] = h));
  else h = t[5];
  let y = !d && p,
    b;
  if (t[6] !== d || t[7] !== y)
    ((b = Au.jsxs(w, {
      color: d,
      dimColor: y,
      children: [nt.circle, " "],
    })),
      (t[6] = d),
      (t[7] = y),
      (t[8] = b));
  else b = t[8];
  let _;
  if (t[9] !== h || t[10] !== b)
    ((_ = Au.jsxs(U, {
      width: g,
      flexShrink: 0,
      children: [h, b],
    })),
      (t[9] = h),
      (t[10] = b),
      (t[11] = _));
  else _ = t[11];
  let S;
  if (t[12] !== p || t[13] !== n.name)
    ((S = Au.jsx(w, {
      dimColor: p,
      wrap: "truncate",
      children: n.name,
    })),
      (t[12] = p),
      (t[13] = n.name),
      (t[14] = S));
  else S = t[14];
  let A;
  if (t[15] !== r || t[16] !== S)
    ((A = Au.jsx(U, {
      width: r,
      flexShrink: 0,
      children: S,
    })),
      (t[15] = r),
      (t[16] = S),
      (t[17] = A));
  else A = t[17];
  let v;
  if (t[18] !== p || t[19] !== n.description)
    ((v = Au.jsx(U, {
      flexGrow: 1,
      width: 0,
      paddingLeft: 2,
      children: Au.jsx(w, {
        dimColor: p,
        wrap: "truncate",
        children: n.description,
      }),
    })),
      (t[18] = p),
      (t[19] = n.description),
      (t[20] = v));
  else v = t[20];
  let C;
  if (t[21] !== p || t[22] !== n.statusText)
    ((C = Au.jsx(w, {
      dimColor: p,
      children: n.statusText,
    })),
      (t[21] = p),
      (t[22] = n.statusText),
      (t[23] = C));
  else C = t[23];
  let x;
  if (t[24] !== o || t[25] !== C)
    ((x = Au.jsx(U, {
      minWidth: o,
      flexShrink: 0,
      marginLeft: 1,
      justifyContent: "flex-end",
      children: C,
    })),
      (t[24] = o),
      (t[25] = C),
      (t[26] = x));
  else x = t[26];
  let I;
  if (t[27] !== i || t[28] !== v || t[29] !== x || t[30] !== _ || t[31] !== A)
    ((I = Au.jsxs(U, {
      onClick: i,
      onMouseEnter: f,
      onMouseLeave: m,
      children: [_, A, v, x],
    })),
      (t[27] = i),
      (t[28] = v),
      (t[29] = x),
      (t[30] = _),
      (t[31] = A),
      (t[32] = I));
  else I = t[32];
  return I;
}
var $Tt,
  xZ,
  Au,
  Nyc = 5;
