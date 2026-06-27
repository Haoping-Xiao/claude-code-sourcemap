// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YHe
// matched 2.1.88 source: src/components/tasks/AsyncAgentDetailDialog.tsx
// class=modified  jaccard=0.3787  score=0.7013  fileCov=0.4516
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var YHe = E(() => {
  si();
  S_();
  jCo();
  ZPe();
});
function p8l(e) {
  let t = d8l.c(63),
    { agent: n, onDone: r, onKillAgent: o, onBack: s, killAllAgentsShortcut: i } = e,
    [a] = na(),
    l;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((l = F$(b1())), (t[0] = l));
  else l = t[0];
  let c = l,
    u = sQ(n.startTime, n.status === "running", 1000, n.totalPausedMs ?? 0, n.endTime),
    d;
  if (t[1] !== r)
    ((d = {
      "confirm:yes": r,
    }),
      (t[1] = r),
      (t[2] = d));
  else d = t[2];
  let p;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((p = {
      context: "Confirmation",
    }),
      (t[3] = p));
  else p = t[3];
  No(d, p);
  let f;
  if (t[4] !== n.status || t[5] !== s || t[6] !== r || t[7] !== o)
    ((f = (Z) => {
      if (Z.key === " ") (Z.preventDefault(), r());
      else if (Z.key === "left" && s) (Z.preventDefault(), s());
      else if (Z.key === "x" && !Z.ctrl && !Z.meta && n.status === "running" && o)
        (Z.preventDefault(), o());
    }),
      (t[4] = n.status),
      (t[5] = s),
      (t[6] = r),
      (t[7] = o),
      (t[8] = f));
  else f = t[8];
  let m = f,
    g;
  if (t[9] !== n.prompt) ((g = xl(n.prompt, "plan")), (t[9] = n.prompt), (t[10] = g));
  else g = t[10];
  let h = g,
    y = n.prompt.length > 300 ? n.prompt.substring(0, 297) + "\u2026" : n.prompt,
    b = n.result?.totalTokens ?? n.progress?.tokenCount,
    _ = n.result?.totalToolUseCount ?? n.progress?.toolUseCount,
    S = n.selectedAgent?.agentType ?? "agent",
    A = n.description || "Async agent",
    v;
  if (t[11] !== S || t[12] !== A)
    ((v = AS.jsxs(w, {
      children: [S, " \u203A", " ", A],
    })),
      (t[11] = S),
      (t[12] = A),
      (t[13] = v));
  else v = t[13];
  let C = v,
    x;
  if (t[14] !== n.status)
    ((x =
      n.status !== "running" &&
      AS.jsxs(w, {
        color: u8l(n.status),
        children: [
          c8l(n.status),
          " ",
          n.status === "completed" ? "Completed" : n.status === "failed" ? "Failed" : "Stopped",
          " \xB7 ",
        ],
      })),
      (t[14] = n.status),
      (t[15] = x));
  else x = t[15];
  let I;
  if (t[16] !== b)
    ((I =
      b !== void 0 &&
      b > 0 &&
      AS.jsxs(AS.Fragment, {
        children: [" \xB7 ", ou(b), " tokens"],
      })),
      (t[16] = b),
      (t[17] = I));
  else I = t[17];
  let k;
  if (t[18] !== _)
    ((k =
      _ !== void 0 &&
      _ > 0 &&
      AS.jsxs(AS.Fragment, {
        children: [" ", "\xB7 ", _, " ", _ === 1 ? "tool" : "tools"],
      })),
      (t[18] = _),
      (t[19] = k));
  else k = t[19];
  let D;
  if (t[20] !== u || t[21] !== I || t[22] !== k)
    ((D = AS.jsxs(w, {
      dimColor: !0,
      children: [u, I, k],
    })),
      (t[20] = u),
      (t[21] = I),
      (t[22] = k),
      (t[23] = D));
  else D = t[23];
  let P;
  if (t[24] !== D || t[25] !== x)
    ((P = AS.jsxs(w, {
      children: [x, D],
    })),
      (t[24] = D),
      (t[25] = x),
      (t[26] = P));
  else P = t[26];
  let O = P,
    L;
  if (t[27] !== s)
    ((L =
      s &&
      AS.jsx(ht, {
        chord: "left",
        action: "go back",
      })),
      (t[27] = s),
      (t[28] = L));
  else L = t[28];
  let M;
  if (t[29] === Symbol.for("react.memo_cache_sentinel"))
    ((M = AS.jsx(ht, {
      chord: ["escape", "enter", "space"],
      action: "close",
    })),
      (t[29] = M));
  else M = t[29];
  let N;
  if (t[30] !== n.status || t[31] !== o)
    ((N =
      n.status === "running" &&
      o &&
      AS.jsx(ht, {
        chord: "x",
        action: "stop",
      })),
      (t[30] = n.status),
      (t[31] = o),
      (t[32] = N));
  else N = t[32];
  let B;
  if (t[33] !== n.status || t[34] !== i)
    ((B =
      n.status === "running" &&
      i &&
      AS.jsx(ht, {
        chord: i,
        action: "stop all agents",
        format: {
          keyCase: "lower",
        },
      })),
      (t[33] = n.status),
      (t[34] = i),
      (t[35] = B));
  else B = t[35];
  let $;
  if (t[36] !== L || t[37] !== N || t[38] !== B)
    (($ = AS.jsxs(Tn, {
      children: [L, M, N, B],
    })),
      (t[36] = L),
      (t[37] = N),
      (t[38] = B),
      (t[39] = $));
  else $ = t[39];
  let q;
  if (t[40] !== n.progress || t[41] !== n.status || t[42] !== a)
    ((q =
      n.status === "running" &&
      n.progress?.recentActivities &&
      n.progress.recentActivities.length > 0 &&
      AS.jsxs(U, {
        flexDirection: "column",
        children: [
          AS.jsx(w, {
            bold: !0,
            dimColor: !0,
            children: "Progress",
          }),
          n.progress.recentActivities.map((Z, J) =>
            AS.jsxs(
              w,
              {
                dimColor: J < n.progress.recentActivities.length - 1,
                wrap: "truncate-end",
                children: [
                  J === n.progress.recentActivities.length - 1 ? "\u203A " : "  ",
                  asr(Z, c, a),
                ],
              },
              J,
            ),
          ),
        ],
      })),
      (t[40] = n.progress),
      (t[41] = n.status),
      (t[42] = a),
      (t[43] = q));
  else q = t[43];
  let W;
  if (t[44] !== y || t[45] !== h)
    ((W = h
      ? AS.jsx(U, {
          marginTop: 1,
          children: AS.jsx(Kzn, {
            addMargin: !1,
            planContent: h,
          }),
        })
      : AS.jsxs(U, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            AS.jsx(w, {
              bold: !0,
              dimColor: !0,
              children: "Prompt",
            }),
            AS.jsx(w, {
              wrap: "wrap",
              children: y,
            }),
          ],
        })),
      (t[44] = y),
      (t[45] = h),
      (t[46] = W));
  else W = t[46];
  let V;
  if (t[47] !== n.error || t[48] !== n.status)
    ((V =
      n.status === "failed" &&
      n.error &&
      AS.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          AS.jsx(w, {
            bold: !0,
            color: "error",
            children: "Error",
          }),
          AS.jsx(w, {
            color: "error",
            wrap: "wrap",
            children: n.error,
          }),
        ],
      })),
      (t[47] = n.error),
      (t[48] = n.status),
      (t[49] = V));
  else V = t[49];
  let Y;
  if (t[50] !== q || t[51] !== W || t[52] !== V)
    ((Y = AS.jsxs(U, {
      flexDirection: "column",
      children: [q, W, V],
    })),
      (t[50] = q),
      (t[51] = W),
      (t[52] = V),
      (t[53] = Y));
  else Y = t[53];
  let z;
  if (t[54] !== r || t[55] !== O || t[56] !== $ || t[57] !== Y || t[58] !== C)
    ((z = AS.jsx(zn, {
      title: C,
      subtitle: O,
      onCancel: r,
      color: "background",
      inputGuide: $,
      children: Y,
    })),
      (t[54] = r),
      (t[55] = O),
      (t[56] = $),
      (t[57] = Y),
      (t[58] = C),
      (t[59] = z));
  else z = t[59];
  let K;
  if (t[60] !== m || t[61] !== z)
    ((K = AS.jsx(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: m,
      children: z,
    })),
      (t[60] = m),
      (t[61] = z),
      (t[62] = K));
  else K = t[62];
  return K;
}
var d8l, AS;
