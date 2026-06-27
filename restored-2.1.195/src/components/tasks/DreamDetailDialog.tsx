// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b8l
// matched 2.1.88 source: src/components/tasks/DreamDetailDialog.tsx
// class=modified  jaccard=0.3543  score=0.5037  fileCov=0.5443
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var b8l = E(() => {
  Ye();
  es();
  i6e();
  sr();
  Xa();
  ljo();
  h8l();
  YHe();
  ((y8l = R(lt(), 1)), (jT = R(se(), 1)));
});
function E8l(e) {
  let t = S8l.c(75),
    { task: n, onDone: r, onBack: o, onKill: s } = e,
    i = sQ(n.startTime, n.status === "running", 1000, 0, n.endTime),
    a;
  if (t[0] !== r)
    ((a = {
      "confirm:yes": r,
    }),
      (t[0] = r),
      (t[1] = a));
  else a = t[1];
  let l;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((l = {
      context: "Confirmation",
    }),
      (t[2] = l));
  else l = t[2];
  No(a, l);
  let c;
  if (t[3] !== o || t[4] !== r || t[5] !== s || t[6] !== n.status)
    ((c = (L) => {
      if (L.key === " ") (L.preventDefault(), r());
      else if (L.key === "left" && o) (L.preventDefault(), o());
      else if (L.key === "x" && !L.ctrl && !L.meta && n.status === "running" && s)
        (L.preventDefault(), s());
    }),
      (t[3] = o),
      (t[4] = r),
      (t[5] = s),
      (t[6] = n.status),
      (t[7] = c));
  else c = t[7];
  let u = c,
    d,
    p,
    f,
    m,
    g,
    h,
    y,
    b,
    _,
    S,
    A,
    v,
    C,
    x,
    I,
    k;
  if (
    t[8] !== i ||
    t[9] !== u ||
    t[10] !== o ||
    t[11] !== r ||
    t[12] !== s ||
    t[13] !== n.filesTouched.length ||
    t[14] !== n.sessionsReviewing ||
    t[15] !== n.status ||
    t[16] !== n.turns
  ) {
    let L = n.turns.filter(c5f),
      M = L.slice(-a5f),
      N = L.length - M.length;
    ((f = U), (y = "column"), (b = 0), (_ = true), (S = u), (p = zn), (I = "Memory consolidation"));
    let B = n.sessionsReviewing,
      $;
    if (t[33] !== n.sessionsReviewing)
      (($ = bn(n.sessionsReviewing, "session")), (t[33] = n.sessionsReviewing), (t[34] = $));
    else $ = t[34];
    let q;
    if (t[35] !== n.filesTouched.length)
      ((q =
        n.filesTouched.length > 0 &&
        uw.jsxs(uw.Fragment, {
          children: [
            " ",
            "\xB7 ",
            n.filesTouched.length,
            " ",
            bn(n.filesTouched.length, "file"),
            " touched",
          ],
        })),
        (t[35] = n.filesTouched.length),
        (t[36] = q));
    else q = t[36];
    if (t[37] !== i || t[38] !== $ || t[39] !== q || t[40] !== n.sessionsReviewing)
      ((k = uw.jsxs(w, {
        dimColor: true,
        children: [i, " \xB7 reviewing ", B, " ", $, q],
      })),
        (t[37] = i),
        (t[38] = $),
        (t[39] = q),
        (t[40] = n.sessionsReviewing),
        (t[41] = k));
    else k = t[41];
    ((m = r), (g = "background"));
    let W;
    if (t[42] !== o)
      ((W =
        o &&
        uw.jsx(ht, {
          chord: "left",
          action: "go back",
        })),
        (t[42] = o),
        (t[43] = W));
    else W = t[43];
    let V;
    if (t[44] === Symbol.for("react.memo_cache_sentinel"))
      ((V = uw.jsx(ht, {
        chord: ["escape", "enter", "space"],
        action: "close",
      })),
        (t[44] = V));
    else V = t[44];
    let Y;
    if (t[45] !== s || t[46] !== n.status)
      ((Y =
        n.status === "running" &&
        s &&
        uw.jsx(ht, {
          chord: "x",
          action: "stop",
        })),
        (t[45] = s),
        (t[46] = n.status),
        (t[47] = Y));
    else Y = t[47];
    if (t[48] !== W || t[49] !== Y)
      ((h = uw.jsxs(Tn, {
        children: [W, V, Y],
      })),
        (t[48] = W),
        (t[49] = Y),
        (t[50] = h));
    else h = t[50];
    ((d = U), (A = "column"), (v = 1));
    let z;
    if (t[51] === Symbol.for("react.memo_cache_sentinel"))
      ((z = uw.jsx(w, {
        bold: true,
        children: "Status:",
      })),
        (t[51] = z));
    else z = t[51];
    if (t[52] !== n.status)
      ((C = uw.jsxs(w, {
        children: [
          z,
          " ",
          n.status === "running"
            ? uw.jsx(w, {
                color: "background",
                children: "running",
              })
            : n.status === "completed"
              ? uw.jsx(w, {
                  color: "success",
                  children: n.status,
                })
              : uw.jsx(w, {
                  color: "error",
                  children: n.status,
                }),
        ],
      })),
        (t[52] = n.status),
        (t[53] = C));
    else C = t[53];
    ((x =
      M.length === 0
        ? uw.jsx(w, {
            dimColor: true,
            children: n.status === "running" ? "Starting\u2026" : "(no text output)",
          })
        : uw.jsxs(uw.Fragment, {
            children: [
              N > 0 &&
                uw.jsxs(w, {
                  dimColor: true,
                  children: ["(", N, " earlier ", bn(N, "turn"), ")"],
                }),
              M.map(l5f),
            ],
          })),
      (t[8] = i),
      (t[9] = u),
      (t[10] = o),
      (t[11] = r),
      (t[12] = s),
      (t[13] = n.filesTouched.length),
      (t[14] = n.sessionsReviewing),
      (t[15] = n.status),
      (t[16] = n.turns),
      (t[17] = d),
      (t[18] = p),
      (t[19] = f),
      (t[20] = m),
      (t[21] = g),
      (t[22] = h),
      (t[23] = y),
      (t[24] = b),
      (t[25] = _),
      (t[26] = S),
      (t[27] = A),
      (t[28] = v),
      (t[29] = C),
      (t[30] = x),
      (t[31] = I),
      (t[32] = k));
  } else
    ((d = t[17]),
      (p = t[18]),
      (f = t[19]),
      (m = t[20]),
      (g = t[21]),
      (h = t[22]),
      (y = t[23]),
      (b = t[24]),
      (_ = t[25]),
      (S = t[26]),
      (A = t[27]),
      (v = t[28]),
      (C = t[29]),
      (x = t[30]),
      (I = t[31]),
      (k = t[32]));
  let D;
  if (t[54] !== d || t[55] !== A || t[56] !== v || t[57] !== C || t[58] !== x)
    ((D = uw.jsxs(d, {
      flexDirection: A,
      gap: v,
      children: [C, x],
    })),
      (t[54] = d),
      (t[55] = A),
      (t[56] = v),
      (t[57] = C),
      (t[58] = x),
      (t[59] = D));
  else D = t[59];
  let P;
  if (
    t[60] !== p ||
    t[61] !== m ||
    t[62] !== g ||
    t[63] !== h ||
    t[64] !== D ||
    t[65] !== I ||
    t[66] !== k
  )
    ((P = uw.jsx(p, {
      title: I,
      subtitle: k,
      onCancel: m,
      color: g,
      inputGuide: h,
      children: D,
    })),
      (t[60] = p),
      (t[61] = m),
      (t[62] = g),
      (t[63] = h),
      (t[64] = D),
      (t[65] = I),
      (t[66] = k),
      (t[67] = P));
  else P = t[67];
  let O;
  if (t[68] !== f || t[69] !== y || t[70] !== b || t[71] !== _ || t[72] !== S || t[73] !== P)
    ((O = uw.jsx(f, {
      flexDirection: y,
      tabIndex: b,
      autoFocus: _,
      onKeyDown: S,
      children: P,
    })),
      (t[68] = f),
      (t[69] = y),
      (t[70] = b),
      (t[71] = _),
      (t[72] = S),
      (t[73] = P),
      (t[74] = O));
  else O = t[74];
  return O;
}
function l5f(e, t) {
  return uw.jsxs(
    U,
    {
      flexDirection: "column",
      children: [
        uw.jsx(w, {
          wrap: "wrap",
          children: e.text,
        }),
        e.toolUseCount > 0 &&
          uw.jsxs(w, {
            dimColor: true,
            children: ["  ", "(", e.toolUseCount, " ", bn(e.toolUseCount, "tool"), ")"],
          }),
      ],
    },
    t,
  );
}
function c5f(e) {
  return e.text !== "";
}
var S8l,
  uw,
  a5f = 6;
