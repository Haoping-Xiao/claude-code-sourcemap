// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b8t
// matched 2.1.88 source: src/components/CompactSummary.tsx
// class=modified  jaccard=0.4531  score=0.5963  fileCov=0.6537
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var b8t = E(() => {
  Lyt();
  ql();
  ((jol = R(lt(), 1)), (Zwo = R(se(), 1)));
});
function Wol(e) {
  let t = Gol.c(24),
    { message: n, screen: r } = e,
    o = r === "transcript",
    s;
  if (t[0] !== n) ((s = P$(n) || ""), (t[0] = n), (t[1] = s));
  else s = t[1];
  let i = s,
    a = n.summarizeMetadata;
  if (a) {
    let f;
    if (t[2] === Symbol.for("react.memo_cache_sentinel"))
      ((f = DT.jsx(U, {
        minWidth: 2,
        children: DT.jsx(w, {
          "aria-hidden": !0,
          color: "text",
          children: gc,
        }),
      })),
        (t[2] = f));
    else f = t[2];
    let m;
    if (t[3] === Symbol.for("react.memo_cache_sentinel"))
      ((m = DT.jsx(w, {
        bold: !0,
        children: "Summarized conversation",
      })),
        (t[3] = m));
    else m = t[3];
    let g;
    if (t[4] !== o || t[5] !== a)
      ((g =
        !o &&
        DT.jsx(qn, {
          children: DT.jsxs(U, {
            flexDirection: "column",
            children: [
              DT.jsxs(w, {
                dimColor: !0,
                children: [
                  "Summarized ",
                  a.messagesSummarized,
                  " messages",
                  " ",
                  a.direction === "up_to" ? "up to this point" : "from this point",
                ],
              }),
              a.userContext &&
                DT.jsxs(w, {
                  dimColor: !0,
                  children: ["Context: ", "\u201C", a.userContext, "\u201D"],
                }),
              DT.jsx(w, {
                dimColor: !0,
                children: DT.jsx(mr, {
                  action: "app:toggleTranscript",
                  context: "Global",
                  fallback: "ctrl+o",
                  description: "expand history",
                  parens: !0,
                }),
              }),
            ],
          }),
        })),
        (t[4] = o),
        (t[5] = a),
        (t[6] = g));
    else g = t[6];
    let h;
    if (t[7] !== o || t[8] !== i)
      ((h =
        o &&
        DT.jsx(qn, {
          children: DT.jsx(w, {
            children: i,
          }),
        })),
        (t[7] = o),
        (t[8] = i),
        (t[9] = h));
    else h = t[9];
    let y;
    if (t[10] !== g || t[11] !== h)
      ((y = DT.jsx(U, {
        flexDirection: "column",
        marginTop: 1,
        children: DT.jsxs(U, {
          flexDirection: "row",
          children: [
            f,
            DT.jsxs(U, {
              flexDirection: "column",
              children: [m, g, h],
            }),
          ],
        }),
      })),
        (t[10] = g),
        (t[11] = h),
        (t[12] = y));
    else y = t[12];
    return y;
  }
  let l;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((l = DT.jsx(U, {
      minWidth: 2,
      children: DT.jsx(w, {
        "aria-hidden": !0,
        color: "text",
        children: gc,
      }),
    })),
      (t[13] = l));
  else l = t[13];
  let c;
  if (t[14] !== o)
    ((c =
      !o &&
      DT.jsxs(w, {
        dimColor: !0,
        children: [
          " ",
          DT.jsx(mr, {
            action: "app:toggleTranscript",
            context: "Global",
            fallback: "ctrl+o",
            description: "expand",
            parens: !0,
          }),
        ],
      })),
      (t[14] = o),
      (t[15] = c));
  else c = t[15];
  let u;
  if (t[16] !== c)
    ((u = DT.jsxs(U, {
      flexDirection: "row",
      children: [
        l,
        DT.jsx(U, {
          flexDirection: "column",
          children: DT.jsxs(w, {
            bold: !0,
            children: ["Compact summary", c],
          }),
        }),
      ],
    })),
      (t[16] = c),
      (t[17] = u));
  else u = t[17];
  let d;
  if (t[18] !== o || t[19] !== i)
    ((d =
      o &&
      DT.jsx(qn, {
        children: DT.jsx(w, {
          children: i,
        }),
      })),
      (t[18] = o),
      (t[19] = i),
      (t[20] = d));
  else d = t[20];
  let p;
  if (t[21] !== u || t[22] !== d)
    ((p = DT.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [u, d],
    })),
      (t[21] = u),
      (t[22] = d),
      (t[23] = p));
  else p = t[23];
  return p;
}
var Gol, DT;
