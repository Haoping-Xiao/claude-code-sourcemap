// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UHo
// matched 2.1.88 source: src/components/Spinner.tsx
// class=modified  jaccard=0.2256  score=0.4141  fileCov=0.3315
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var UHo = E(() => {
  si();
  Xa();
  Tc();
  Ye();
  kt();
  z1();
  es();
  g0();
  Bs();
  RLe();
  q9n();
  NVt();
  OHo();
  Pne();
  ((NHo = R(lt(), 1)),
    (uoe = R(rt(), 1)),
    (Mf = R(se(), 1)),
    (LXp = rn(" \xB7 ")),
    (SJa = rn("thinking")),
    ($Xp = [10000 /* 1e4 */, 45000, 300000]),
    (NXp = {
      r: 153,
      g: 153,
      b: 153,
    }),
    (BXp = {
      r: 185,
      g: 185,
      b: 185,
    }));
});
function zJ(e) {
  return e.type === "local_agent" || e.type === "local_workflow";
}
function wH(e) {
  if (e.status !== "running" && e.status !== "pending") return false;
  if ("isBackgrounded" in e && e.isBackgrounded === false) return false;
  return true;
}
function wJa(e) {
  let t = FVt.c(15),
    {
      mode: n,
      overrideMessage: r,
      overrideColor: o,
      overrideShimmerColor: s,
      isCompacting: i,
      compactingHintText: a,
      compactingStartTime: l,
      turnEffort: c,
      retryStatus: u,
      defaultVerb: d,
    } = RMa(e.agentId),
    p = Ht(QXp),
    f = Ht(JXp),
    m = Oe.CLAUDE_CODE_BRIEF;
  if (qie() && (m || at("tengu_kairos_brief", false)) && p && !f) {
    let h;
    if (t[0] !== n || t[1] !== r)
      ((h = $f.jsx(eJp, {
        mode: n,
        overrideMessage: r,
      })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = h));
    else h = t[2];
    return h;
  }
  let g;
  if (
    t[3] !== a ||
    t[4] !== l ||
    t[5] !== d ||
    t[6] !== i ||
    t[7] !== n ||
    t[8] !== o ||
    t[9] !== r ||
    t[10] !== s ||
    t[11] !== e ||
    t[12] !== u ||
    t[13] !== c
  )
    ((g = $f.jsx(ZXp, {
      ...e,
      mode: n,
      overrideMessage: r,
      overrideColor: o,
      overrideShimmerColor: s,
      isCompacting: i,
      compactingHintText: a,
      compactingStartTime: l,
      turnEffort: c,
      retryStatus: u,
      defaultVerb: d,
    })),
      (t[3] = a),
      (t[4] = l),
      (t[5] = d),
      (t[6] = i),
      (t[7] = n),
      (t[8] = o),
      (t[9] = r),
      (t[10] = s),
      (t[11] = e),
      (t[12] = u),
      (t[13] = c),
      (t[14] = g));
  else g = t[14];
  return g;
}
function JXp(e) {
  return e.viewingAgentTaskId;
}
function QXp(e) {
  return e.isBriefOnly;
}
function ZXp({
  mode: e,
  loadingStartTimeRef: t,
  totalPausedMsRef: n,
  pauseStartTimeRef: r,
  responseLengthRef: o,
  overrideColor: s,
  overrideShimmerColor: i,
  overrideMessage: a,
  isCompacting: l,
  compactingHintText: c,
  compactingStartTime: u,
  spinnerSuffix: d,
  verbose: p,
  hasActiveTools: f = false,
  turnEffort: m,
  retryStatus: g,
  defaultVerb: h,
  agentId: y,
}) {
  let b = G_(),
    _ = Sd(),
    S = Mv(b.prefersReducedMotion) || _,
    A = Ht((Ee) => Ee.spinnerTip),
    v = Ht((Ee) => Ee.expandedView) === "tasks",
    { columns: C } = br(),
    x = $Vt(),
    [I, k] = KJ.useState(null),
    D = KJ.useRef(null),
    P = KJ.useRef([]),
    O = ks();
  (KJ.useEffect(() => {
    if (e === "thinking") {
      if (D.current === null) {
        for (let Ee of P.current) Ee();
        ((P.current = []), (D.current = Date.now()), k("thinking"));
      }
    } else if (D.current !== null) {
      let Ee = Date.now() - D.current,
        me = Math.max(0, 2000 - Ee);
      D.current = null;
      let pe = () => {
        (k(Ee), P.current.push(O.setTimeout(() => k(null), 2000)));
      };
      if (me > 0) P.current.push(O.setTimeout(pe, me));
      else pe();
    }
  }, [e, O]),
    KJ.useEffect(
      () => () => {
        for (let Ee of P.current) Ee();
        P.current = [];
      },
      [],
    ));
  let L = y === void 0 || y === ls(),
    M = L ? x?.find((Ee) => Ee.status !== "pending" && Ee.status !== "completed") : void 0,
    N = L ? aJp(x) : void 0,
    [B] = KJ.useState(() => HL(zpt())),
    $ = (a ?? M?.activeForm ?? M?.subject ?? (h || B)) + "\u2026";
  KJ.useEffect(() => {
    let Ee = "spinner-" + e;
    return (
      VJ.startCLIActivity(Ee),
      () => {
        VJ.endCLIActivity(Ee);
      }
    );
  }, [e]);
  let q = Ht((Ee) => Ee.effortValue),
    W = Kst(As(), m ?? q),
    V = r.current !== null ? r.current - t.current - n.current : Date.now() - t.current - n.current,
    Y = "claude",
    z = "claudeShimmer",
    K = s ?? Y,
    Z = i ?? z,
    J = at("tengu_shining_fractals", false),
    ne = false,
    oe = false;
  ((ne = DVt()), (oe = Boolean(process.env.CLAUDE_CODE_FORCE_TIP_ID)));
  let re = b.spinnerTipsEnabled !== false,
    ee = re && V > 1800000,
    ce = re && V > 30000 && !Dt().btwUseCount,
    ae = oe
      ? A
      : zPe(b.spinnerTipsOverride)
        ? A
        : ne
          ? void 0
          : ee && !N
            ? "Use /clear to start fresh when switching topics and free up context"
            : ce && !N
              ? "Use /btw to ask a quick side question without interrupting Claude's current work"
              : A,
    de = null;
  return $f.jsxs(U, {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    children: [
      $f.jsx(HJa, {
        mode: e,
        reducedMotion: S,
        hasActiveTools: f,
        responseLengthRef: o,
        message: $,
        messageColor: K,
        shimmerColor: Z,
        overrideColor: s,
        loadingStartTimeRef: t,
        totalPausedMsRef: n,
        pauseStartTimeRef: r,
        spinnerSuffix: d,
        verbose: p,
        columns: C,
        thinkingStatus: I,
        effortSuffix: W,
        isCompacting: l,
        compactingStartTime: u,
        showToolCallTimer: J,
        retryStatus: g,
      }),
      L && v && x && x.length > 0
        ? $f.jsx(U, {
            width: "100%",
            flexDirection: "column",
            children: $f.jsx(qn, {
              children: $f.jsx(F9n, {
                tasks: x,
              }),
            }),
          })
        : l && c
          ? $f.jsx(U, {
              width: "100%",
              flexDirection: "column",
              children: $f.jsx(qn, {
                children: $f.jsx(w, {
                  dimColor: true,
                  children: c,
                }),
              }),
            })
          : N || ae || de
            ? $f.jsxs(U, {
                width: "100%",
                flexDirection: "column",
                children: [
                  de &&
                    $f.jsx(qn, {
                      children: $f.jsx(w, {
                        dimColor: true,
                        children: de,
                      }),
                    }),
                  (N || ae) &&
                    $f.jsx(qn, {
                      children: $f.jsx(w, {
                        dimColor: true,
                        children: N ? `Next: ${N.subject}` : `Tip: ${ae}`,
                      }),
                    }),
                ],
              })
            : null,
    ],
  });
}
function eJp(e) {
  let t = FVt.c(34),
    { mode: n, overrideMessage: r } = e,
    o = G_(),
    s = Sd(),
    i;
  if (t[0] !== s || t[1] !== o.prefersReducedMotion)
    ((i = Mv(o.prefersReducedMotion) || s),
      (t[0] = s),
      (t[1] = o.prefersReducedMotion),
      (t[2] = i));
  else i = t[2];
  let a = i,
    [l] = KJ.useState(rJp),
    c = r ?? l,
    u = Ht(nJp),
    d,
    p;
  if (t[3] !== n)
    ((d = () => {
      let $ = "spinner-" + n;
      return (
        VJ.startCLIActivity($),
        () => {
          VJ.endCLIActivity($);
        }
      );
    }),
      (p = [n]),
      (t[3] = n),
      (t[4] = d),
      (t[5] = p));
  else ((d = t[4]), (p = t[5]));
  KJ.useEffect(d, p);
  let [, f] = Kf(a ? null : 120),
    m = Ht(tJp),
    g = u === "reconnecting" || u === "disconnected",
    h = u === "reconnecting" ? "Reconnecting" : "Disconnected",
    y = Math.floor(f / 300) % 3,
    b;
  if (t[6] !== y || t[7] !== a)
    ((b = a ? "\u2026  " : ".".repeat(y + 1).padEnd(3)), (t[6] = y), (t[7] = a), (t[8] = b));
  else b = t[8];
  let _ = b,
    S;
  if (t[9] !== c) ((S = rn(c)), (t[9] = c), (t[10] = S));
  else S = t[10];
  let A = S,
    v;
  if (t[11] !== a || t[12] !== g || t[13] !== f || t[14] !== c || t[15] !== A) {
    let $ = a || g ? -100 : SXa(Math.floor(f / bXa), A);
    ((v = v9n(c, $)), (t[11] = a), (t[12] = g), (t[13] = f), (t[14] = c), (t[15] = A), (t[16] = v));
  } else v = t[16];
  let { before: C, shimmer: x, after: I } = v,
    { columns: k } = br(),
    D = m > 0 ? `${m} in background` : "",
    P;
  if (t[17] !== h || t[18] !== g || t[19] !== A)
    ((P = g ? rn(h) : A), (t[17] = h), (t[18] = g), (t[19] = A), (t[20] = P));
  else P = t[20];
  let O = P + 3,
    L = Math.max(1, k - 2 - O - rn(D)),
    M;
  if (t[21] !== I || t[22] !== C || t[23] !== h || t[24] !== _ || t[25] !== x || t[26] !== g)
    ((M = g
      ? $f.jsx(w, {
          color: "error",
          children: h + _,
        })
      : $f.jsxs($f.Fragment, {
          children: [
            C
              ? $f.jsx(w, {
                  dimColor: true,
                  children: C,
                })
              : null,
            x
              ? $f.jsx(w, {
                  children: x,
                })
              : null,
            I
              ? $f.jsx(w, {
                  dimColor: true,
                  children: I,
                })
              : null,
            $f.jsx(w, {
              dimColor: true,
              children: _,
            }),
          ],
        })),
      (t[21] = I),
      (t[22] = C),
      (t[23] = h),
      (t[24] = _),
      (t[25] = x),
      (t[26] = g),
      (t[27] = M));
  else M = t[27];
  let N;
  if (t[28] !== L || t[29] !== D)
    ((N = D
      ? $f.jsxs($f.Fragment, {
          children: [
            $f.jsx(w, {
              children: " ".repeat(L),
            }),
            $f.jsx(w, {
              color: "subtle",
              children: D,
            }),
          ],
        })
      : null),
      (t[28] = L),
      (t[29] = D),
      (t[30] = N));
  else N = t[30];
  let B;
  if (t[31] !== M || t[32] !== N)
    ((B = $f.jsxs(U, {
      flexDirection: "row",
      width: "100%",
      marginTop: 1,
      paddingLeft: 2,
      children: [M, N],
    })),
      (t[31] = M),
      (t[32] = N),
      (t[33] = B));
  else B = t[33];
  return B;
}
function tJp(e) {
  return On(Object.values(e.tasks), wH) + e.remoteBackgroundTaskCount;
}
function nJp(e) {
  return e.remoteConnectionStatus;
}
function rJp() {
  return HL(zpt()) ?? "Working";
}
function CJa() {
  let e = FVt.c(9),
    t = Ht(sJp),
    n = Ht(oJp),
    { columns: r } = br(),
    i =
      t === "reconnecting" || t === "disconnected"
        ? t === "reconnecting"
          ? "Reconnecting\u2026"
          : "Disconnected"
        : "",
    a = n > 0 ? `${n} in background` : "";
  if (!i && !a) {
    let p;
    if (e[0] === Symbol.for("react.memo_cache_sentinel"))
      ((p = $f.jsx(U, {
        height: 2,
      })),
        (e[0] = p));
    else p = e[0];
    return p;
  }
  let l = Math.max(1, r - 2 - rn(i) - rn(a)),
    c;
  if (e[1] !== i)
    ((c = i
      ? $f.jsx(w, {
          color: "error",
          children: i,
        })
      : null),
      (e[1] = i),
      (e[2] = c));
  else c = e[2];
  let u;
  if (e[3] !== l || e[4] !== a)
    ((u = a
      ? $f.jsxs($f.Fragment, {
          children: [
            $f.jsx(w, {
              children: " ".repeat(l),
            }),
            $f.jsx(w, {
              color: "subtle",
              children: a,
            }),
          ],
        })
      : null),
      (e[3] = l),
      (e[4] = a),
      (e[5] = u));
  else u = e[5];
  let d;
  if (e[6] !== c || e[7] !== u)
    ((d = $f.jsx(U, {
      marginTop: 1,
      paddingLeft: 2,
      children: $f.jsxs(w, {
        children: [c, u],
      }),
    })),
      (e[6] = c),
      (e[7] = u),
      (e[8] = d));
  else d = e[8];
  return d;
}
function oJp(e) {
  return On(Object.values(e.tasks), wH) + e.remoteBackgroundTaskCount;
}
function sJp(e) {
  return e.remoteConnectionStatus;
}
function Vu() {
  let e = FVt.c(8),
    t = Sd(),
    n = Mv(dT(iJp)) || t,
    [r, o] = Kf(n ? null : 120);
  if (n) {
    let c;
    if (e[0] === Symbol.for("react.memo_cache_sentinel"))
      ((c = $f.jsx(w, {
        color: "text",
        children: "\u25CF",
      })),
        (e[0] = c));
    else c = e[0];
    let u;
    if (e[1] !== r)
      ((u = $f.jsx(U, {
        ref: r,
        "aria-hidden": true,
        flexWrap: "wrap",
        height: 1,
        width: 2,
        children: c,
      })),
        (e[1] = r),
        (e[2] = u));
    else u = e[2];
    return u;
  }
  let s = Math.floor(o / 120) % vJa.length,
    i = vJa[s],
    a;
  if (e[3] !== i)
    ((a = $f.jsx(w, {
      color: "text",
      children: i,
    })),
      (e[3] = i),
      (e[4] = a));
  else a = e[4];
  let l;
  if (e[5] !== r || e[6] !== a)
    ((l = $f.jsx(U, {
      ref: r,
      "aria-hidden": true,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: a,
    })),
      (e[5] = r),
      (e[6] = a),
      (e[7] = l));
  else l = e[7];
  return l;
}
function iJp(e) {
  return e.settings.prefersReducedMotion;
}
function IJa({ entries: e, responseLength: t, event: n }) {
  if (n.type === "start")
    return (
      e.push({
        id: n.id,
        ttftMs: n.ttftMs,
        firstTokenTime: Date.now(),
        lastTokenTime: Date.now(),
        responseLengthBaseline: t,
        endResponseLength: t,
      }),
      t
    );
  let r = n.id != null ? e.find((o) => o.id === n.id) : e.findLast((o) => o.id == null);
  if (!r) return t;
  if (n.type === "content_block_start")
    return (
      (r.thinkingTokenEstimate = 0),
      (r.thinkingBlockBaseline = t),
      (r.sawEstimatedTokensThisBlock = false),
      t
    );
  if (n.type === "thinking_progress") {
    if (
      ((r.sawEstimatedTokensThisBlock = true),
      (r.thinkingTokenEstimate = (r.thinkingTokenEstimate ?? 0) + n.estimatedTokensDelta),
      r.outputTokens == null && n.id == null)
    ) {
      let o = r.thinkingBlockBaseline ?? r.responseLengthBaseline;
      return Math.max(t, o + r.thinkingTokenEstimate * 4);
    }
    return t;
  }
  if (n.type === "thinking_signature") {
    if (n.chars > 0 && r.outputTokens == null) {
      if (((r.lastTokenTime = Date.now()), r.sawEstimatedTokensThisBlock)) {
        r.thinkingTokenEstimate = Math.max(r.thinkingTokenEstimate ?? 0, Math.ceil(n.chars / 4));
        let s = r.thinkingBlockBaseline ?? r.responseLengthBaseline,
          i = Math.max(t, s + r.thinkingTokenEstimate * 4);
        return ((r.endResponseLength = i), i);
      }
      let o = t + n.chars;
      return ((r.endResponseLength = o), o);
    }
    return t;
  }
  if (((r.outputTokens = n.outputTokens), (r.lastTokenTime = Date.now()), n.id == null))
    return Math.max(t, r.responseLengthBaseline + n.outputTokens * 4);
  return t;
}
function aJp(e) {
  if (!e) return;
  let t = e.filter((r) => r.status === "pending");
  if (t.length === 0) return;
  let n = new Set(e.filter((r) => r.status !== "completed").map((r) => r.id));
  return t.find((r) => !r.blockedBy.some((o) => n.has(o))) ?? t[0];
}
var FVt, KJ, $f, TJa, vJa;
