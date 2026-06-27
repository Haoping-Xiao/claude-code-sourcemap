// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mJa
// matched 2.1.88 source: src/components/Spinner/SpinnerAnimationRow.tsx
// class=modified  jaccard=0.1947  score=0.2425  fileCov=0.4971
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mJa = E(() => {
  aJa();
  q9n();
  LUt();
  NVt();
  V9n();
  OHo();
  Pne();
});
function gJa(e) {
  let t = Math.max(0, e) / 1000,
    n = 1 - Math.exp(-t / 90);
  return Math.min(95, Math.round(n * 100));
}
function hJa() {
  return {
    toolWindowStart: null,
    toolWindowEnd: null,
    thinkingBurstStart: null,
    wasThinking: false,
  };
}
function yJa(e, t) {
  let { toolWindowStart: n, toolWindowEnd: r, thinkingBurstStart: o } = e;
  if (t.hasActiveTools) {
    if (n === null || r !== null) n = t.now;
    r = null;
  } else if (n !== null && r === null) r = t.now;
  if (!t.hasActiveTools && t.thinkingStatus !== null) ((n = null), (r = null));
  if (t.isThinking) {
    if (!e.wasThinking) o = t.now;
  } else o = null;
  return {
    toolWindowStart: n,
    toolWindowEnd: r,
    thinkingBurstStart: o,
    wasThinking: t.isThinking,
  };
}
function _Ja(e, t) {
  if (t.showToolCallTimer && t.hasActiveTools && e.toolWindowStart !== null) {
    let n = t.now - e.toolWindowStart;
    if (n >= 2000)
      return {
        kind: "tool-running",
        toolMs: n,
      };
  }
  if (
    t.showToolCallTimer &&
    !t.hasActiveTools &&
    t.thinkingStatus === null &&
    e.toolWindowStart !== null &&
    e.toolWindowEnd !== null
  ) {
    let n = e.toolWindowEnd - e.toolWindowStart;
    if (n >= 2000)
      return {
        kind: "tool-done",
        toolMs: n,
      };
  }
  if (t.thinkingStatus === "thinking" && !t.hasActiveTools)
    return {
      kind: "thinking",
      thinkingMs: e.thinkingBurstStart !== null ? t.now - e.thinkingBurstStart : 0,
    };
  if (typeof t.thinkingStatus === "number")
    return {
      kind: "thought-for",
      thoughtMs: t.thinkingStatus,
    };
  return {
    kind: "none",
  };
}
function bJa(e, t) {
  if (t.hasActiveTools) return 0;
  if (!t.isThinking || e.thinkingBurstStart === null) return 0;
  let n = t.now - e.thinkingBurstStart;
  return Math.min(Math.max((n - 10000) /* 1e4 */ / 10000 /* 1e4 */, 0), 1);
}
function qXp(e) {
  let t = sPn(e, OXp);
  return Math.round(t * (ube().length - 1));
}
function VXp(e) {
  if (e >= WXp) return "almost done thinking";
  if (e >= GXp) return "thinking some more";
  if (e >= jXp) return "thinking more";
  if (e >= FXp) return "still thinking";
  return "thinking";
}
function zXp(e) {
  return GM((Math.sin((e / 1000) * Math.PI) + 1) / 2);
}
function KXp(e, t, n) {
  let r = (e - AJa) / 1000,
    o = e < AJa ? 0 : (Math.sin((r * Math.PI * 2) / UXp) + 1) / 2,
    s = WM(NXp, BXp, GM(o));
  return qM(n && t > 0 ? WM(s, n, GM(t)) : s);
}
function HJa({
  mode: e,
  reducedMotion: t,
  hasActiveTools: n,
  responseLengthRef: r,
  message: o,
  messageColor: s,
  shimmerColor: i,
  overrideColor: a,
  loadingStartTimeRef: l,
  totalPausedMsRef: c,
  pauseStartTimeRef: u,
  spinnerSuffix: d,
  verbose: p,
  columns: f,
  thinkingStatus: m,
  effortSuffix: g,
  isCompacting: h = false,
  compactingStartTime: y = null,
  showToolCallTimer: b = false,
  retryStatus: _ = null,
}) {
  let [S, A] = Kf(t ? null : e === "requesting" ? 50 : 100),
    v = GD(),
    C = Date.now(),
    I = u.current !== null ? u.current - l.current - c.current : C - l.current - c.current,
    k = uoe.useRef(hJa()),
    D = {
      now: C,
      isThinking: e === "thinking",
      hasActiveTools: n,
      thinkingStatus: m,
      showToolCallTimer: b,
    };
  k.current = yJa(k.current, D);
  let P = _Ja(k.current, D),
    O = bJa(k.current, D),
    L = r.current,
    M = n || e === "thinking" || h,
    { isStalled: N, stalledIntensity: B, timeSinceLastToken: $ } = $Ho(A, L, M, t),
    q = uoe.useRef(new Set()),
    W = uoe.useRef(0);
  if ($ === 0) {
    if (q.current.size > 0)
      (G("tengu_spinner_stall_cleared", {
        max_stall_ms: Math.round(W.current),
        mode: $e(e),
        override_color: a != null,
        response_length: L,
        thresholds_fired: q.current.size,
      }),
        (q.current = new Set()),
        (W.current = 0));
  } else {
    if ($ > W.current) W.current = $;
    for (let Ln of $Xp)
      if ($ >= Ln && !q.current.has(Ln))
        (q.current.add(Ln),
          G("tengu_spinner_stalled_ui", {
            threshold_ms: Ln,
            mode: $e(e),
            override_color: a != null,
            time_since_last_token_ms: Math.round($),
            response_length: L,
            render_loop_dark: $ - Ln > 5000,
          }));
  }
  let V = t ? 0 : qXp(A),
    Y = e === "requesting" ? 50 : 200,
    z = uoe.useMemo(() => rn(o), [o]),
    K = z + 20,
    Z = Math.floor(A / Y),
    J = t ? -100 : N ? -100 : e === "requesting" ? (Z % K) - 10 : z + 10 - (Z % K),
    ne = t ? 0 : e === "tool-use" ? zXp(A) : 0,
    oe = uoe.useRef(L),
    re = uoe.useRef(A);
  if (t) ((oe.current = L), (re.current = A));
  else {
    let Ln = Math.floor((A - re.current) / 50);
    if (Ln > 0) {
      re.current += Ln * 50;
      for (let Hn = 0; Hn < Ln; Hn++) {
        let kr = L - oe.current;
        if (kr <= 0) break;
        let Mr;
        if (kr < 70) Mr = 3;
        else if (kr < 200) Mr = Math.max(8, Math.ceil(kr * 0.15));
        else Mr = 50;
        oe.current = Math.min(oe.current + Mr, L);
      }
    }
  }
  let ee = oe.current,
    ce = Math.round(ee / 4),
    ae = uoe.useRef(0),
    de = uoe.useRef(A);
  if (e !== "thinking" || n) ((ae.current = 0), (de.current = A));
  else if (!t && (O > 0 || ae.current > 0)) {
    let Ln = A - de.current;
    if (Ln >= 50) {
      let Hn = Math.floor(Ln / 50),
        kr = ae.current;
      for (let Mr = 0; Mr < Hn; Mr++) {
        let fe = O - kr;
        if (Math.abs(fe) < 0.01) {
          kr = O;
          break;
        }
        kr += fe * 0.1;
      }
      ((ae.current = kr), (de.current = A));
    }
  } else ((ae.current = O), (de.current = A));
  let Ee = t ? O : ae.current,
    me = Yi(I),
    pe = rn(me),
    ge = ce,
    he = ou(ge),
    ie = `${nt.arrowDown} ${he} tokens`,
    le = rn(ie),
    He = P.kind === "thinking" ? VXp(P.thinkingMs) : "thinking",
    ye;
  switch (P.kind) {
    case "tool-running":
      ye = `running tool for ${Yi(P.toolMs)}`;
      break;
    case "tool-done":
      ye = `ran tool for ${Yi(P.toolMs)}`;
      break;
    case "thinking":
      ye = `${He}${g}`;
      break;
    case "thought-for":
      ye = `thought for ${Math.max(1, Math.round(P.thoughtMs / 1000))}s`;
      break;
    case "none":
      ye = null;
      break;
  }
  let ue = ye ? rn(ye) : 0,
    we = uoe.useRef(0),
    Ce = h && y !== null ? Math.max(we.current, gJa(C - y)) : null;
  we.current = Ce ?? 0;
  let Ie = Ce !== null ? `${Ce}%` : null,
    Ve = Math.min(PXp, f - EJa - 6),
    Ze = Ce !== null && Ve >= MXp,
    Be = z + 2,
    Me = LXp,
    Ue = ye !== null,
    tt = p || Ue || ge > 0 || I > DXp,
    bt = f - Be - 5,
    Ke = Ue && bt > ue;
  if (!Ke && Ue && P.kind === "thinking" && (g || He !== "thinking")) {
    if (bt > SJa) ((ye = "thinking"), (ue = SJa), (Ke = true));
  }
  let Et = Ke ? ue + Me : 0,
    ct = tt && bt > Et + pe,
    Je = Et + (ct ? pe + Me : 0),
    gt = tt && ge > 0 && bt > Je + le,
    st = Ke && P.kind === "thinking" && !d && !ct && !gt,
    xt = Ee > 0 ? jU(v.warning) : null,
    vt = KXp(A, Ee, xt),
    jt = !xt && Ee > 0.5 ? "warning" : void 0,
    en = Ee > 0 ? "warning" : void 0,
    Dn = [
      ...(d
        ? [
            Mf.jsx(
              w,
              {
                dimColor: true,
                children: d,
              },
              "suffix",
            ),
          ]
        : []),
      ...(ct
        ? [
            Mf.jsx(
              w,
              {
                dimColor: true,
                children: me,
              },
              "elapsedTime",
            ),
          ]
        : []),
      ...(gt
        ? [
            Mf.jsxs(
              U,
              {
                flexDirection: "row",
                children: [
                  Mf.jsx(YXp, {
                    mode: e,
                  }),
                  Mf.jsxs(w, {
                    dimColor: true,
                    children: [he, " tokens"],
                  }),
                ],
              },
              "tokens",
            ),
          ]
        : []),
      ...(Ke && ye
        ? [
            P.kind === "thinking" && !t
              ? Mf.jsx(
                  w,
                  {
                    color: jt ?? vt,
                    children: st ? `(${ye})` : ye,
                  },
                  "thinking",
                )
              : Mf.jsx(
                  w,
                  {
                    dimColor: !en,
                    color: en,
                    children: ye,
                  },
                  "thinking",
                ),
          ]
        : []),
    ],
    nn =
      Dn.length > 0
        ? st
          ? Mf.jsx(Tn, {
              children: Dn,
            })
          : Mf.jsxs(Mf.Fragment, {
              children: [
                Mf.jsx(w, {
                  dimColor: true,
                  children: "(",
                }),
                Mf.jsx(Tn, {
                  children: Dn,
                }),
                Mf.jsx(w, {
                  dimColor: true,
                  children: ")",
                }),
              ],
            })
        : null;
  return Mf.jsxs(U, {
    ref: S,
    flexDirection: "column",
    width: "100%",
    children: [
      Mf.jsx(U, {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 1,
        width: "100%",
        children: _
          ? Mf.jsx(BHo, {
              status: _,
              columns: f,
            })
          : Mf.jsxs(Mf.Fragment, {
              children: [
                Mf.jsx(eMe, {
                  frame: V,
                  messageColor: s,
                  stalledIntensity: a ? 0 : B,
                  thinkingIntensity: a ? 0 : Ee,
                  reducedMotion: t,
                  time: A,
                }),
                Mf.jsx(OVt, {
                  message: o,
                  mode: e,
                  messageColor: s,
                  glimmerIndex: J,
                  flashOpacity: ne,
                  shimmerColor: i,
                  stalledIntensity: a ? 0 : B,
                  thinkingIntensity: a ? 0 : Ee,
                }),
                nn,
              ],
            }),
      }),
      Ze &&
        Ce !== null &&
        Mf.jsxs(U, {
          flexDirection: "row",
          gap: 1,
          marginLeft: EJa,
          width: "100%",
          children: [
            Mf.jsx(ZW, {
              ratio: Ce / 100,
              width: Ve,
              variant: "pill",
            }),
            Mf.jsx(w, {
              dimColor: true,
              children: Ie,
            }),
          ],
        }),
    ],
  });
}
function BHo(e) {
  let t = NHo.c(23),
    { status: n, columns: r } = e,
    o = Math.max(0, Math.ceil((n.deadline - Date.now()) / 1000)) * 1000,
    s = o >= 300000,
    i;
  if (t[0] !== o || t[1] !== s)
    ((i = Yi(o, {
      mostSignificantOnly: s,
    })),
      (t[0] = o),
      (t[1] = s),
      (t[2] = i));
  else i = t[2];
  let a = i,
    l;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((l = Mf.jsx(U, {
      "aria-hidden": true,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: Mf.jsx(w, {
        color: "error",
        children: Gee,
      }),
    })),
      (t[3] = l));
  else l = t[3];
  let c = l;
  if (n.kind === "stalled") {
    let C;
    if (t[4] === Symbol.for("react.memo_cache_sentinel"))
      ((C = Mf.jsx(w, {
        color: "error",
        children: "Waiting for API response",
      })),
        (t[4] = C));
    else C = t[4];
    let x;
    if (t[5] !== a)
      ((x = Mf.jsxs(Mf.Fragment, {
        children: [
          c,
          Mf.jsxs(U, {
            flexShrink: 1,
            children: [
              C,
              Mf.jsxs(w, {
                dimColor: true,
                children: [" \xB7 will retry in ", a, " \xB7 check your network"],
              }),
            ],
          }),
        ],
      })),
        (t[5] = a),
        (t[6] = x));
    else x = t[6];
    return x;
  }
  let u = n.error.rateLimits,
    d;
  if (t[7] !== u) ((d = u?.resetsAt ? ` (${mee(u.resetsAt)})` : ""), (t[7] = u), (t[8] = d));
  else d = t[8];
  let f = ` \xB7 Retrying in ${a}${d} \xB7 attempt ${n.attempt}/${n.maxRetries}`,
    m = n.attempt >= n.maxRetries || n.error.isNetworkDown || n.error.connection?.isSSLError || u,
    g;
  if (t[9] !== u || t[10] !== m || t[11] !== n.error.formatted) {
    let C = u?.rateLimitType ? xaa(u.rateLimitType) : "usage limit";
    ((g = !m ? "API error" : u ? `${C[0]?.toUpperCase()}${C.slice(1)} reached` : n.error.formatted),
      (t[9] = u),
      (t[10] = m),
      (t[11] = n.error.formatted),
      (t[12] = g));
  } else g = t[12];
  let h = g,
    y = Math.max(10, r - 2 - rn(f) - 2),
    b;
  if (t[13] !== y || t[14] !== h) ((b = Rs(h, y)), (t[13] = y), (t[14] = h), (t[15] = b));
  else b = t[15];
  let _ = b,
    S;
  if (t[16] !== _)
    ((S = Mf.jsx(w, {
      color: "error",
      children: _,
    })),
      (t[16] = _),
      (t[17] = S));
  else S = t[17];
  let A;
  if (t[18] !== f)
    ((A = Mf.jsx(w, {
      dimColor: true,
      children: f,
    })),
      (t[18] = f),
      (t[19] = A));
  else A = t[19];
  let v;
  if (t[20] !== S || t[21] !== A)
    ((v = Mf.jsxs(Mf.Fragment, {
      children: [
        c,
        Mf.jsxs(U, {
          flexShrink: 1,
          children: [S, A],
        }),
      ],
    })),
      (t[20] = S),
      (t[21] = A),
      (t[22] = v));
  else v = t[22];
  return v;
}
function YXp(e) {
  let t = NHo.c(2),
    { mode: n } = e;
  switch (n) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking": {
      let r;
      if (t[0] === Symbol.for("react.memo_cache_sentinel"))
        ((r = Mf.jsx(U, {
          width: 2,
          children: Mf.jsx(w, {
            "aria-hidden": true,
            dimColor: true,
            children: nt.arrowDown,
          }),
        })),
          (t[0] = r));
      else r = t[0];
      return r;
    }
    case "requesting": {
      let r;
      if (t[1] === Symbol.for("react.memo_cache_sentinel"))
        ((r = Mf.jsx(U, {
          width: 2,
          children: Mf.jsx(w, {
            "aria-hidden": true,
            dimColor: true,
            children: nt.arrowUp,
          }),
        })),
          (t[1] = r));
      else r = t[1];
      return r;
    }
  }
}
var NHo,
  uoe,
  Mf,
  LXp,
  SJa,
  DXp = 16000,
  PXp = 40,
  MXp = 8,
  EJa = 2,
  $Xp,
  OXp = 2000,
  NXp,
  BXp,
  AJa = 3000,
  UXp = 2,
  FXp = 10000 /* 1e4 */,
  jXp = 20000,
  GXp = 30000,
  WXp = 45000;
