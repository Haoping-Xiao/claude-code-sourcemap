// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A8l
// matched 2.1.88 source: src/components/hooks/ViewHookMode.tsx
// class=modified (alt of src/components/hooks/ViewHookMode.tsx)  jaccard=0.0471  score=0.0674  fileCov=0.1355
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module A8l] deps: Yyt, Ye, ps, sr, Bs, vi, Ko
((S8l = R(lt(), 1)), (uw = R(se(), 1)));
function T8l(e) {
  let t = H8l.c(71),
    { teammate: n, onDone: r, onKill: o, onBack: s, onForeground: i } = e,
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
  if (t[4] !== s || t[5] !== r || t[6] !== i || t[7] !== o || t[8] !== n.status)
    ((f = (ne) => {
      if (ne.key === " ") (ne.preventDefault(), r());
      else if (ne.key === "left" && s) (ne.preventDefault(), s());
      else if (ne.key === "x" && !ne.ctrl && !ne.meta && n.status === "running" && o)
        (ne.preventDefault(), o());
      else if (ne.key === "f" && !ne.ctrl && !ne.meta && n.status === "running" && i)
        (ne.preventDefault(), i());
    }),
      (t[4] = s),
      (t[5] = r),
      (t[6] = i),
      (t[7] = o),
      (t[8] = n.status),
      (t[9] = f));
  else f = t[9];
  let m = f,
    g;
  if (t[10] !== n) ((g = DAt(n)), (t[10] = n), (t[11] = g));
  else g = t[11];
  let h = g,
    y = n.result?.totalTokens ?? n.progress?.tokenCount,
    b = n.result?.totalToolUseCount ?? n.progress?.toolUseCount,
    _;
  if (t[12] !== n.prompt) ((_ = Rs(n.prompt, 300)), (t[12] = n.prompt), (t[13] = _));
  else _ = t[13];
  let S = _,
    A;
  if (t[14] !== n.identity.color)
    ((A = V6(n.identity.color)), (t[14] = n.identity.color), (t[15] = A));
  else A = t[15];
  let v;
  if (t[16] !== A || t[17] !== n.identity.agentName)
    ((v = _E.jsxs(w, {
      color: A,
      children: ["@", n.identity.agentName],
    })),
      (t[16] = A),
      (t[17] = n.identity.agentName),
      (t[18] = v));
  else v = t[18];
  let C;
  if (t[19] !== h)
    ((C =
      h &&
      _E.jsxs(w, {
        dimColor: true,
        children: [" (", h, ")"],
      })),
      (t[19] = h),
      (t[20] = C));
  else C = t[20];
  let x;
  if (t[21] !== v || t[22] !== C)
    ((x = _E.jsxs(w, {
      children: [v, C],
    })),
      (t[21] = v),
      (t[22] = C),
      (t[23] = x));
  else x = t[23];
  let I = x,
    k;
  if (t[24] !== n.status)
    ((k =
      n.status !== "running" &&
      _E.jsxs(w, {
        color: n.status === "completed" ? "success" : n.status === "killed" ? "warning" : "error",
        children: [
          n.status === "completed" ? "Completed" : n.status === "failed" ? "Failed" : "Stopped",
          " \xB7 ",
        ],
      })),
      (t[24] = n.status),
      (t[25] = k));
  else k = t[25];
  let D;
  if (t[26] !== y)
    ((D =
      y !== void 0 &&
      y > 0 &&
      _E.jsxs(_E.Fragment, {
        children: [" \xB7 ", ou(y), " tokens"],
      })),
      (t[26] = y),
      (t[27] = D));
  else D = t[27];
  let P;
  if (t[28] !== b)
    ((P =
      b !== void 0 &&
      b > 0 &&
      _E.jsxs(_E.Fragment, {
        children: [" ", "\xB7 ", b, " ", b === 1 ? "tool" : "tools"],
      })),
      (t[28] = b),
      (t[29] = P));
  else P = t[29];
  let O;
  if (t[30] !== u || t[31] !== D || t[32] !== P)
    ((O = _E.jsxs(w, {
      dimColor: true,
      children: [u, D, P],
    })),
      (t[30] = u),
      (t[31] = D),
      (t[32] = P),
      (t[33] = O));
  else O = t[33];
  let L;
  if (t[34] !== k || t[35] !== O)
    ((L = _E.jsxs(w, {
      children: [k, O],
    })),
      (t[34] = k),
      (t[35] = O),
      (t[36] = L));
  else L = t[36];
  let M = L,
    N;
  if (t[37] !== s)
    ((N =
      s &&
      _E.jsx(ht, {
        chord: "left",
        action: "go back",
      })),
      (t[37] = s),
      (t[38] = N));
  else N = t[38];
  let B;
  if (t[39] === Symbol.for("react.memo_cache_sentinel"))
    ((B = _E.jsx(ht, {
      chord: ["escape", "enter", "space"],
      action: "close",
    })),
      (t[39] = B));
  else B = t[39];
  let $;
  if (t[40] !== o || t[41] !== n.status)
    (($ =
      n.status === "running" &&
      o &&
      _E.jsx(ht, {
        chord: "x",
        action: "stop",
      })),
      (t[40] = o),
      (t[41] = n.status),
      (t[42] = $));
  else $ = t[42];
  let q;
  if (t[43] !== i || t[44] !== n.status)
    ((q =
      n.status === "running" &&
      i &&
      _E.jsx(ht, {
        chord: "f",
        action: "foreground",
      })),
      (t[43] = i),
      (t[44] = n.status),
      (t[45] = q));
  else q = t[45];
  let W;
  if (t[46] !== N || t[47] !== $ || t[48] !== q)
    ((W = _E.jsxs(Tn, {
      children: [N, B, $, q],
    })),
      (t[46] = N),
      (t[47] = $),
      (t[48] = q),
      (t[49] = W));
  else W = t[49];
  let V;
  if (t[50] !== n.progress || t[51] !== n.status || t[52] !== a)
    ((V =
      n.status === "running" &&
      n.progress?.recentActivities &&
      n.progress.recentActivities.length > 0 &&
      _E.jsxs(U, {
        flexDirection: "column",
        children: [
          _E.jsx(w, {
            bold: true,
            dimColor: true,
            children: "Progress",
          }),
          n.progress.recentActivities.map((ne, oe) =>
            _E.jsxs(
              w,
              {
                dimColor: oe < n.progress.recentActivities.length - 1,
                wrap: "truncate-end",
                children: [
                  oe === n.progress.recentActivities.length - 1 ? "\u203A " : "  ",
                  asr(ne, c, a),
                ],
              },
              oe,
            ),
          ),
        ],
      })),
      (t[50] = n.progress),
      (t[51] = n.status),
      (t[52] = a),
      (t[53] = V));
  else V = t[53];
  let Y;
  if (t[54] === Symbol.for("react.memo_cache_sentinel"))
    ((Y = _E.jsx(w, {
      bold: true,
      dimColor: true,
      children: "Prompt",
    })),
      (t[54] = Y));
  else Y = t[54];
  let z;
  if (t[55] !== S)
    ((z = _E.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        Y,
        _E.jsx(w, {
          wrap: "wrap",
          children: S,
        }),
      ],
    })),
      (t[55] = S),
      (t[56] = z));
  else z = t[56];
  let K;
  if (t[57] !== n.error || t[58] !== n.status)
    ((K =
      n.status === "failed" &&
      n.error &&
      _E.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          _E.jsx(w, {
            bold: true,
            color: "error",
            children: "Error",
          }),
          _E.jsx(w, {
            color: "error",
            wrap: "wrap",
            children: n.error,
          }),
        ],
      })),
      (t[57] = n.error),
      (t[58] = n.status),
      (t[59] = K));
  else K = t[59];
  let Z;
  if (
    t[60] !== r ||
    t[61] !== M ||
    t[62] !== W ||
    t[63] !== V ||
    t[64] !== z ||
    t[65] !== K ||
    t[66] !== I
  )
    ((Z = _E.jsxs(zn, {
      title: I,
      subtitle: M,
      onCancel: r,
      color: "background",
      inputGuide: W,
      children: [V, z, K],
    })),
      (t[60] = r),
      (t[61] = M),
      (t[62] = W),
      (t[63] = V),
      (t[64] = z),
      (t[65] = K),
      (t[66] = I),
      (t[67] = Z));
  else Z = t[67];
  let J;
  if (t[68] !== m || t[69] !== Z)
    ((J = _E.jsx(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: m,
      children: Z,
    })),
      (t[68] = m),
      (t[69] = Z),
      (t[70] = J));
  else J = t[70];
  return J;
}
var H8l, _E;
