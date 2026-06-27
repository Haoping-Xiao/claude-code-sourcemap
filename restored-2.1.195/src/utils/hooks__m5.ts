// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aKn
// matched 2.1.88 source: src/utils/hooks.ts
// class=modified (alt of src/utils/hooks.ts)  jaccard=0.0086  score=0.0381  fileCov=0.011
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Xal(e) {
  let t = WMe.c(56),
    { message: n, addMargin: r, verbose: o, isTranscriptMode: s } = e;
  if (n.subtype === "turn_duration") {
    let p;
    if (t[0] !== r || t[1] !== n)
      ((p = Xi.jsx(Ysf, {
        message: n,
        addMargin: r,
      })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = p));
    else p = t[2];
    return p;
  }
  if (n.subtype === "memory_saved") {
    let p = o || !!s,
      f;
    if (t[3] !== r || t[4] !== n || t[5] !== p)
      ((f = Xi.jsx(Jsf, {
        message: n,
        addMargin: r,
        verbose: p,
      })),
        (t[3] = r),
        (t[4] = n),
        (t[5] = p),
        (t[6] = f));
    else f = t[6];
    return f;
  }
  if (n.subtype === "away_summary") {
    let p;
    if (t[7] !== r || t[8] !== n.content)
      ((p = Xi.jsx($zn, {
        content: n.content,
        addMargin: r,
      })),
        (t[7] = r),
        (t[8] = n.content),
        (t[9] = p));
    else p = t[9];
    return p;
  }
  if (n.subtype === "agents_killed") {
    let p = r ? 1 : 0,
      f,
      m;
    if (t[10] === Symbol.for("react.memo_cache_sentinel"))
      ((f = Xi.jsx(U, {
        minWidth: 2,
        children: Xi.jsx(w, {
          color: "error",
          children: gc,
        }),
      })),
        (m = Xi.jsx(w, {
          dimColor: true,
          children: "All background agents stopped",
        })),
        (t[10] = f),
        (t[11] = m));
    else ((f = t[10]), (m = t[11]));
    let g;
    if (t[12] !== p)
      ((g = Xi.jsxs(U, {
        flexDirection: "row",
        marginTop: p,
        width: "100%",
        children: [f, m],
      })),
        (t[12] = p),
        (t[13] = g));
    else g = t[13];
    return g;
  }
  if (n.subtype === "thinking") return null;
  if (n.subtype === "model_refusal_no_fallback") return null;
  if (BX() && n.subtype === "model_refusal_fallback") {
    let p = r ? 1 : 0,
      f;
    if (t[14] === Symbol.for("react.memo_cache_sentinel"))
      ((f = Xi.jsx(U, {
        minWidth: 2,
        children: Xi.jsx(w, {
          color: "warning",
          children: gc,
        }),
      })),
        (t[14] = f));
    else f = t[14];
    let m;
    if (t[15] !== n.content)
      ((m = Xi.jsxs(U, {
        flexDirection: "row",
        width: "100%",
        children: [
          f,
          Xi.jsx(sKn, {
            color: "warning",
            bold: true,
            children: n.content,
          }),
        ],
      })),
        (t[15] = n.content),
        (t[16] = m));
    else m = t[16];
    let g;
    if (t[17] === Symbol.for("react.memo_cache_sentinel"))
      ((g = Xi.jsxs(w, {
        dimColor: true,
        children: ["  \u23BF  ", "Tip: You can configure model switch behavior in /config"],
      })),
        (t[17] = g));
    else g = t[17];
    let h;
    if (t[18] !== p || t[19] !== m)
      ((h = Xi.jsxs(U, {
        flexDirection: "column",
        marginTop: p,
        width: "100%",
        children: [m, g],
      })),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h));
    else h = t[20];
    return h;
  }
  if (n.subtype === "model_fallback") {
    let p = n.trigger === "model_not_found" || n.trigger === "permission_denied",
      f = r ? 1 : 0,
      m;
    if (t[21] === Symbol.for("react.memo_cache_sentinel"))
      ((m = Xi.jsx(U, {
        minWidth: 2,
        children: Xi.jsx(w, {
          color: "warning",
          children: gc,
        }),
      })),
        (t[21] = m));
    else m = t[21];
    let g;
    if (t[22] !== p || t[23] !== n.content)
      ((g = Xi.jsx(w, {
        color: "warning",
        bold: p,
        wrap: "wrap",
        children: n.content,
      })),
        (t[22] = p),
        (t[23] = n.content),
        (t[24] = g));
    else g = t[24];
    let h;
    if (t[25] !== f || t[26] !== g)
      ((h = Xi.jsxs(U, {
        flexDirection: "row",
        marginTop: f,
        width: "100%",
        children: [m, g],
      })),
        (t[25] = f),
        (t[26] = g),
        (t[27] = h));
    else h = t[27];
    return h;
  }
  if (n.subtype === "bridge_status") {
    let p;
    if (t[28] !== r || t[29] !== n)
      ((p = Xi.jsx(eif, {
        message: n,
        addMargin: r,
      })),
        (t[28] = r),
        (t[29] = n),
        (t[30] = p));
    else p = t[30];
    return p;
  }
  if (n.subtype === "scheduled_task_fire") {
    let p = r ? 1 : 0,
      f;
    if (t[31] !== n.content)
      ((f = Xi.jsxs(w, {
        dimColor: true,
        children: [Gee, " ", n.content],
      })),
        (t[31] = n.content),
        (t[32] = f));
    else f = t[32];
    let m;
    if (t[33] !== p || t[34] !== f)
      ((m = Xi.jsx(U, {
        marginTop: p,
        width: "100%",
        children: f,
      })),
        (t[33] = p),
        (t[34] = f),
        (t[35] = m));
    else m = t[35];
    return m;
  }
  if (n.subtype === "permission_retry") {
    let p = r ? 1 : 0,
      f,
      m;
    if (t[36] === Symbol.for("react.memo_cache_sentinel"))
      ((f = Xi.jsxs(w, {
        dimColor: true,
        children: [Gee, " "],
      })),
        (m = Xi.jsx(w, {
          children: "Allowed ",
        })),
        (t[36] = f),
        (t[37] = m));
    else ((f = t[36]), (m = t[37]));
    let g;
    if (t[38] !== n.commands) ((g = n.commands.join(", ")), (t[38] = n.commands), (t[39] = g));
    else g = t[39];
    let h;
    if (t[40] !== g)
      ((h = Xi.jsx(w, {
        bold: true,
        children: g,
      })),
        (t[40] = g),
        (t[41] = h));
    else h = t[41];
    let y;
    if (t[42] !== p || t[43] !== h)
      ((y = Xi.jsxs(U, {
        marginTop: p,
        width: "100%",
        children: [f, m, h],
      })),
        (t[42] = p),
        (t[43] = h),
        (t[44] = y));
    else y = t[44];
    return y;
  }
  if (n.subtype !== "stop_hook_summary" && !o && n.level === "info") return null;
  if (n.subtype === "api_error") return null;
  if (n.subtype === "stop_hook_summary") {
    let p;
    if (t[45] !== r || t[46] !== s || t[47] !== n || t[48] !== o)
      ((p = Xi.jsx(getPreToolHookBlockingMessage, {
        message: n,
        addMargin: r,
        verbose: o,
        isTranscriptMode: s,
      })),
        (t[45] = r),
        (t[46] = s),
        (t[47] = n),
        (t[48] = o),
        (t[49] = p));
    else p = t[49];
    return p;
  }
  let a = n.content;
  if (typeof a !== "string") return null;
  let l = n.level !== "info",
    c = n.level === "warning" ? "warning" : n.level === "notice" ? "inactive" : void 0,
    u = n.level === "info",
    d;
  if (t[50] !== r || t[51] !== a || t[52] !== l || t[53] !== c || t[54] !== u)
    ((d = Xi.jsx(U, {
      flexDirection: "row",
      width: "100%",
      children: Xi.jsx(Ksf, {
        content: a,
        addMargin: r,
        dot: l,
        color: c,
        dimColor: u,
      }),
    })),
      (t[50] = r),
      (t[51] = a),
      (t[52] = l),
      (t[53] = c),
      (t[54] = u),
      (t[55] = d));
  else d = t[55];
  return d;
}
function getPreToolHookBlockingMessage(hookName) {
  let t = WMe.c(51),
    { message: n, addMargin: r, verbose: o, isTranscriptMode: s } = hookName,
    {
      hookCount: i,
      hookInfos: a,
      hookErrors: l,
      hookAdditionalContext: c,
      preventedContinuation: u,
      stopReason: d,
    } = n,
    p;
  if (t[0] !== c) ((p = c === void 0 ? [] : c), (t[0] = c), (t[1] = p));
  else p = t[1];
  let f = p,
    { columns: m } = br(),
    g;
  if (t[2] !== a || t[3] !== n.totalDurationMs)
    ((g = n.totalDurationMs ?? a.reduce(zsf, 0)),
      (t[2] = a),
      (t[3] = n.totalDurationMs),
      (t[4] = g));
  else g = t[4];
  let h = g;
  if (l.length === 0 && f.length === 0 && !u && !n.hookLabel) return null;
  let y;
  if (t[5] !== h) ((y = ""), (t[5] = h), (t[6] = y));
  else y = t[6];
  let b = y;
  if (n.hookLabel) {
    let B = i === 1 ? "hook" : "hooks",
      $;
    if (t[7] !== i || t[8] !== n.hookLabel || t[9] !== B || t[10] !== b)
      (($ = Xi.jsxs(w, {
        dimColor: true,
        children: ["  \u23BF  ", "Ran ", i, " ", n.hookLabel, " ", B, b],
      })),
        (t[7] = i),
        (t[8] = n.hookLabel),
        (t[9] = B),
        (t[10] = b),
        (t[11] = $));
    else $ = t[11];
    let q;
    if (t[12] !== a || t[13] !== s) ((q = s && a.map(Vsf)), (t[12] = a), (t[13] = s), (t[14] = q));
    else q = t[14];
    let W;
    if (t[15] !== $ || t[16] !== q)
      ((W = Xi.jsxs(U, {
        flexDirection: "column",
        width: "100%",
        children: [$, q],
      })),
        (t[15] = $),
        (t[16] = q),
        (t[17] = W));
    else W = t[17];
    return W;
  }
  let _ = r ? 1 : 0,
    S;
  if (t[18] === Symbol.for("react.memo_cache_sentinel"))
    ((S = Xi.jsx(U, {
      minWidth: 2,
      children: Xi.jsx(w, {
        children: gc,
      }),
    })),
      (t[18] = S));
  else S = t[18];
  let A = m - 10,
    v;
  if (t[19] !== i)
    ((v = Xi.jsx(w, {
      bold: true,
      children: i,
    })),
      (t[19] = i),
      (t[20] = v));
  else v = t[20];
  let C = n.hookLabel ?? "stop",
    x = i === 1 ? "hook" : "hooks",
    I;
  if (t[21] !== a || t[22] !== o)
    ((I =
      !o &&
      a.length > 0 &&
      Xi.jsxs(Xi.Fragment, {
        children: [" ", Xi.jsx(NI, {})],
      })),
      (t[21] = a),
      (t[22] = o),
      (t[23] = I));
  else I = t[23];
  let k;
  if (t[24] !== x || t[25] !== I || t[26] !== v || t[27] !== C || t[28] !== b)
    ((k = Xi.jsxs(w, {
      children: ["Ran ", v, " ", C, " ", x, b, I],
    })),
      (t[24] = x),
      (t[25] = I),
      (t[26] = v),
      (t[27] = C),
      (t[28] = b),
      (t[29] = k));
  else k = t[29];
  let D;
  if (t[30] !== a || t[31] !== o)
    ((D = o && a.length > 0 && a.map(qsf)), (t[30] = a), (t[31] = o), (t[32] = D));
  else D = t[32];
  let P;
  if (t[33] !== u || t[34] !== d)
    ((P =
      u &&
      d &&
      Xi.jsxs(w, {
        children: [
          Xi.jsx(w, {
            dimColor: true,
            children: "\u23BF \xA0",
          }),
          d,
        ],
      })),
      (t[33] = u),
      (t[34] = d),
      (t[35] = P));
  else P = t[35];
  let O;
  if (t[36] !== l || t[37] !== n.hookLabel)
    ((O =
      l.length > 0 &&
      l.map((B, $) =>
        Xi.jsxs(
          w,
          {
            children: [
              Xi.jsx(w, {
                dimColor: true,
                children: "\u23BF \xA0",
              }),
              n.hookLabel ?? "Stop",
              " hook error: ",
              B,
            ],
          },
          $,
        ),
      )),
      (t[36] = l),
      (t[37] = n.hookLabel),
      (t[38] = O));
  else O = t[38];
  let L;
  if (t[39] !== f) ((L = f.length > 0 && f.map(Wsf)), (t[39] = f), (t[40] = L));
  else L = t[40];
  let M;
  if (t[41] !== k || t[42] !== D || t[43] !== P || t[44] !== O || t[45] !== L || t[46] !== A)
    ((M = Xi.jsxs(U, {
      flexDirection: "column",
      width: A,
      children: [k, D, P, O, L],
    })),
      (t[41] = k),
      (t[42] = D),
      (t[43] = P),
      (t[44] = O),
      (t[45] = L),
      (t[46] = A),
      (t[47] = M));
  else M = t[47];
  let N;
  if (t[48] !== M || t[49] !== _)
    ((N = Xi.jsxs(U, {
      flexDirection: "row",
      marginTop: _,
      width: "100%",
      children: [S, M],
    })),
      (t[48] = M),
      (t[49] = _),
      (t[50] = N));
  else N = t[50];
  return N;
}
function Wsf(e, t) {
  return Xi.jsxs(
    w,
    {
      children: [
        Xi.jsx(w, {
          dimColor: true,
          children: "\u23BF \xA0",
        }),
        "Stop hook feedback: ",
        e,
      ],
    },
    `feedback-${t}`,
  );
}
function qsf(e, t) {
  return Xi.jsxs(
    w,
    {
      dimColor: true,
      children: [
        "\u23BF \xA0",
        e.command === "prompt" ? `prompt: ${e.promptText || ""}` : e.command,
        "",
      ],
    },
    `cmd-${t}`,
  );
}
function Vsf(e, t) {
  return Xi.jsxs(
    w,
    {
      dimColor: true,
      children: [
        "     \u23BF ",
        e.command === "prompt" ? `prompt: ${e.promptText || ""}` : e.command,
        "",
      ],
    },
    `cmd-${t}`,
  );
}
function zsf(e, t) {
  return e + (t.durationMs ?? 0);
}
function Ksf(e) {
  let t = WMe.c(17),
    { content: n, addMargin: r, dot: o, color: s, dimColor: i } = e,
    { columns: a } = br(),
    l = r ? 1 : 0,
    c;
  if (t[0] !== s || t[1] !== i || t[2] !== o)
    ((c =
      o &&
      Xi.jsx(U, {
        minWidth: 2,
        children: Xi.jsx(w, {
          "aria-hidden": true,
          color: s,
          dimColor: i,
          children: gc,
        }),
      })),
      (t[0] = s),
      (t[1] = i),
      (t[2] = o),
      (t[3] = c));
  else c = t[3];
  let u = a - 10,
    d;
  if (t[4] !== n) ((d = n.trim()), (t[4] = n), (t[5] = d));
  else d = t[5];
  let p;
  if (t[6] !== s || t[7] !== i || t[8] !== d)
    ((p = Xi.jsx(w, {
      color: s,
      dimColor: i,
      wrap: "wrap",
      children: d,
    })),
      (t[6] = s),
      (t[7] = i),
      (t[8] = d),
      (t[9] = p));
  else p = t[9];
  let f;
  if (t[10] !== u || t[11] !== p)
    ((f = Xi.jsx(U, {
      flexDirection: "column",
      width: u,
      children: p,
    })),
      (t[10] = u),
      (t[11] = p),
      (t[12] = f));
  else f = t[12];
  let m;
  if (t[13] !== l || t[14] !== c || t[15] !== f)
    ((m = Xi.jsxs(U, {
      flexDirection: "row",
      marginTop: l,
      width: "100%",
      children: [c, f],
    })),
      (t[13] = l),
      (t[14] = c),
      (t[15] = f),
      (t[16] = m));
  else m = t[16];
  return m;
}
function Ysf(e) {
  let t = WMe.c(37),
    { message: n, addMargin: r } = e,
    [o] = lKn.useState(Xsf),
    s = Dc(),
    i;
  if (t[0] !== s)
    ((i = () => {
      let V = s.getState().tasks ?? {},
        Y = Object.values(V).filter(wH),
        z = $8t({
          tasks: V,
          queuedCommands: qX(),
        });
      return {
        backgroundTaskSummary: Y.length > 0 ? l_t(Y) : null,
        hasPendingAgents: z.pendingAgents > 0,
        hasPendingWorkflows: z.pendingWorkflows > 0,
      };
    }),
      (t[0] = s),
      (t[1] = i));
  else i = t[1];
  let [a] = lKn.useState(i),
    { backgroundTaskSummary: l, hasPendingAgents: c, hasPendingWorkflows: u } = a,
    d;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((d = wc("showTurnDuration", true)), (t[2] = d));
  else d = t[2];
  let p = d.value,
    f;
  if (t[3] !== n.durationMs) ((f = Yi(n.durationMs)), (t[3] = n.durationMs), (t[4] = f));
  else f = t[4];
  let m = f,
    g = n.budgetLimit !== void 0,
    h;
  e: {
    if (!g) {
      h = "";
      break e;
    }
    let { budgetTokens: V, budgetLimit: Y } = n,
      z;
    if (t[5] !== Y || t[6] !== V)
      ((z =
        V >= Y
          ? `${ou(V)} used (${ou(Y)} min ${nt.tick})`
          : `${ou(V)} / ${ou(Y)} (${Math.round((V / Y) * 100)}%)`),
        (t[5] = Y),
        (t[6] = V),
        (t[7] = z));
    else z = t[7];
    let K = z,
      Z =
        n.budgetNudges > 0
          ? ` \xB7 ${n.budgetNudges} ${n.budgetNudges === 1 ? "nudge" : "nudges"}`
          : "";
    h = `${p ? " \xB7 " : ""}${K}${Z}`;
  }
  let y = h,
    b = n.briefHiddenCount ?? 0,
    _ =
      b > 0
        ? `${p || g ? " \xB7 " : ""}${b} ${b === 1 ? "message" : "messages"} hidden (/focus to show)`
        : "";
  if (!p && !g && !_) return null;
  let S = c ? (n.pendingBackgroundAgentCount ?? 0) : 0,
    A = u ? (n.pendingWorkflowCount ?? 0) : 0,
    v = S > 0 || A > 0,
    C;
  if (t[8] !== S)
    ((C =
      S > 0 &&
      Xi.jsxs(w, {
        children: [
          " ",
          Xi.jsx(w, {
            bold: true,
            dimColor: true,
            children: S,
          }),
          ` background ${S === 1 ? "agent" : "agents"}`,
        ],
      })),
      (t[8] = S),
      (t[9] = C));
  else C = t[9];
  let x = S > 0 && A > 0 && " and",
    I;
  if (t[10] !== A)
    ((I =
      A > 0 &&
      Xi.jsxs(w, {
        children: [
          " ",
          Xi.jsx(w, {
            bold: true,
            dimColor: true,
            children: A,
          }),
          ` ${A === 1 ? "dynamic workflow" : "dynamic workflows"}`,
        ],
      })),
      (t[10] = A),
      (t[11] = I));
  else I = t[11];
  let k;
  if (t[12] !== C || t[13] !== x || t[14] !== I)
    ((k = Xi.jsxs(w, {
      dimColor: true,
      children: ["Waiting for", C, x, I, " to finish"],
    })),
      (t[12] = C),
      (t[13] = x),
      (t[14] = I),
      (t[15] = k));
  else k = t[15];
  let D = k,
    P = p && v,
    O = r ? 1 : 0,
    L;
  if (t[16] === Symbol.for("react.memo_cache_sentinel"))
    ((L = Xi.jsx(U, {
      minWidth: 2,
      children: Xi.jsx(w, {
        "aria-hidden": true,
        dimColor: true,
        children: Gee,
      }),
    })),
      (t[16] = L));
  else L = t[16];
  let M;
  if (t[17] !== m || t[18] !== v || t[19] !== o || t[20] !== D)
    ((M =
      p &&
      (v
        ? D
        : Xi.jsx(w, {
            dimColor: true,
            children: `${o} for ${m}`,
          }))),
      (t[17] = m),
      (t[18] = v),
      (t[19] = o),
      (t[20] = D),
      (t[21] = M));
  else M = t[21];
  let N;
  if (t[22] !== y)
    ((N =
      y &&
      Xi.jsx(w, {
        dimColor: true,
        children: y,
      })),
      (t[22] = y),
      (t[23] = N));
  else N = t[23];
  let B;
  if (t[24] !== _)
    ((B =
      _ &&
      Xi.jsx(w, {
        dimColor: true,
        children: _,
      })),
      (t[24] = _),
      (t[25] = B));
  else B = t[25];
  let $;
  if (t[26] !== l || t[27] !== P)
    (($ =
      !P &&
      l &&
      Xi.jsx(w, {
        dimColor: true,
        children: ` \xB7 ${l} still running`,
      })),
      (t[26] = l),
      (t[27] = P),
      (t[28] = $));
  else $ = t[28];
  let q;
  if (t[29] !== M || t[30] !== N || t[31] !== B || t[32] !== $)
    ((q = Xi.jsxs(w, {
      children: [M, N, B, $],
    })),
      (t[29] = M),
      (t[30] = N),
      (t[31] = B),
      (t[32] = $),
      (t[33] = q));
  else q = t[33];
  let W;
  if (t[34] !== O || t[35] !== q)
    ((W = Xi.jsxs(U, {
      flexDirection: "row",
      marginTop: O,
      width: "100%",
      children: [L, q],
    })),
      (t[34] = O),
      (t[35] = q),
      (t[36] = W));
  else W = t[36];
  return W;
}
function Xsf() {
  return HL(qal) ?? "Worked";
}
function Jsf(e) {
  let t = WMe.c(16),
    { message: n, addMargin: r, verbose: o } = e,
    { writtenPaths: s } = n,
    i;
  if (t[0] !== n) ((i = Wal(n)), (t[0] = n), (t[1] = i));
  else i = t[1];
  let a = i,
    l = s.length - (a?.count ?? 0),
    c = l > 0 ? `${l} ${l === 1 ? "memory" : "memories"}` : null,
    u = a?.segment,
    d;
  if (t[2] !== c || t[3] !== u) ((d = [c, u].filter(Boolean)), (t[2] = c), (t[3] = u), (t[4] = d));
  else d = t[4];
  let p = d,
    f = r ? 1 : 0,
    m;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((m = Xi.jsx(U, {
      minWidth: 2,
      children: Xi.jsx(w, {
        dimColor: true,
        children: gc,
      }),
    })),
      (t[5] = m));
  else m = t[5];
  let g = n.verb ?? "Saved",
    h = p.join(" \xB7 "),
    y;
  if (t[6] !== g || t[7] !== h)
    ((y = Xi.jsxs(U, {
      flexDirection: "row",
      children: [
        m,
        Xi.jsxs(w, {
          children: [g, " ", h],
        }),
      ],
    })),
      (t[6] = g),
      (t[7] = h),
      (t[8] = y));
  else y = t[8];
  let b;
  if (t[9] !== o || t[10] !== s) ((b = o && s.map(Qsf)), (t[9] = o), (t[10] = s), (t[11] = b));
  else b = t[11];
  let _;
  if (t[12] !== b || t[13] !== f || t[14] !== y)
    ((_ = Xi.jsxs(U, {
      flexDirection: "column",
      marginTop: f,
      children: [y, b],
    })),
      (t[12] = b),
      (t[13] = f),
      (t[14] = y),
      (t[15] = _));
  else _ = t[15];
  return _;
}
function Qsf(e) {
  return Xi.jsx(
    Zsf,
    {
      path: e,
    },
    e,
  );
}
function Zsf(e) {
  let t = WMe.c(16),
    { path: n } = e,
    [r, o] = lKn.useState(false),
    s;
  if (t[0] !== n) ((s = () => void uIn(n)), (t[0] = n), (t[1] = s));
  else s = t[1];
  let i, a;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((i = () => o(true)), (a = () => o(false)), (t[2] = i), (t[3] = a));
  else ((i = t[2]), (a = t[3]));
  let l = !r,
    c;
  if (t[4] !== n) ((c = Yal.basename(n)), (t[4] = n), (t[5] = c));
  else c = t[5];
  let u;
  if (t[6] !== n || t[7] !== c)
    ((u = Xi.jsx(SN, {
      filePath: n,
      children: c,
    })),
      (t[6] = n),
      (t[7] = c),
      (t[8] = u));
  else u = t[8];
  let d;
  if (t[9] !== r || t[10] !== l || t[11] !== u)
    ((d = Xi.jsx(w, {
      dimColor: l,
      underline: r,
      children: u,
    })),
      (t[9] = r),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d));
  else d = t[12];
  let p;
  if (t[13] !== s || t[14] !== d)
    ((p = Xi.jsx(qn, {
      children: Xi.jsx(U, {
        onClick: s,
        onMouseEnter: i,
        onMouseLeave: a,
        children: d,
      }),
    })),
      (t[13] = s),
      (t[14] = d),
      (t[15] = p));
  else p = t[15];
  return p;
}
function eif(e) {
  let t = WMe.c(13),
    { message: n, addMargin: r } = e,
    o;
  if (t[0] !== n)
    ((o = (p) =>
      p.replBridgeConnected && !p.replBridgeOutboundOnly && p.replBridgeSessionUrl === n.url),
      (t[0] = n),
      (t[1] = o));
  else o = t[1];
  if (!Ht(o)) return null;
  let i = r ? 1 : 0,
    a;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((a = Xi.jsx(U, {
      minWidth: 2,
    })),
      (t[2] = a));
  else a = t[2];
  let l;
  if (t[3] !== n.url)
    ((l = Xi.jsxs(w, {
      children: [
        "/remote-control is active",
        Xi.jsxs(w, {
          dimColor: true,
          children: [
            " \xB7 Continue here, on your phone, or at ",
            Xi.jsx(xs, {
              url: n.url,
              children: n.url,
            }),
          ],
        }),
      ],
    })),
      (t[3] = n.url),
      (t[4] = l));
  else l = t[4];
  let c;
  if (t[5] !== n.upgradeNudge)
    ((c =
      n.upgradeNudge &&
      Xi.jsxs(U, {
        flexDirection: "row",
        children: [
          Xi.jsx(w, {
            dimColor: true,
            children: "\u23BF  ",
          }),
          Xi.jsx(w, {
            dimColor: true,
            children: n.upgradeNudge,
          }),
        ],
      })),
      (t[5] = n.upgradeNudge),
      (t[6] = c));
  else c = t[6];
  let u;
  if (t[7] !== l || t[8] !== c)
    ((u = Xi.jsxs(U, {
      flexDirection: "column",
      children: [l, c],
    })),
      (t[7] = l),
      (t[8] = c),
      (t[9] = u));
  else u = t[9];
  let d;
  if (t[10] !== i || t[11] !== u)
    ((d = Xi.jsxs(U, {
      flexDirection: "row",
      marginTop: i,
      width: 999,
      children: [a, u],
    })),
      (t[10] = i),
      (t[11] = u),
      (t[12] = d));
  else d = t[12];
  return d;
}
var WMe, lKn, Yal, Xi;
