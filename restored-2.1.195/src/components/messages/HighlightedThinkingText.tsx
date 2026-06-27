// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oIo
// matched 2.1.88 source: src/components/messages/HighlightedThinkingText.tsx
// class=modified  jaccard=0.1743  score=0.2431  fileCov=0.3811
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var oIo = E(() => {
  m0();
  sr();
  ((Xof = {
    hour: "numeric",
    minute: "2-digit",
  }),
    (Jof = {
      weekday: "long",
      hour: "numeric",
      minute: "2-digit",
    }),
    (Qof = {
      weekday: "long",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }),
    (rIo = new Map()));
});
function Kil(e) {
  let t = Xzn.c(28),
    { text: n, useBriefLayout: r, timestamp: o } = e,
    s = Wil(),
    i = s?.isQueued ?? false,
    a = typeof n === "object";
  if (r) {
    let p;
    if (t[0] !== o) ((p = o ? Yzn(o) : ""), (t[0] = o), (t[1] = p));
    else p = t[1];
    let f = p,
      m = i ? "subtle" : "text",
      g = s?.selectionHighlight === "on",
      h;
    if (t[2] !== g)
      ((h = g
        ? fE.jsxs(w, {
            "aria-label": "selected:",
            color: "suggestion",
            children: [nt.pointer, " "],
          })
        : null),
        (t[2] = g),
        (t[3] = h));
    else h = t[3];
    let y = g ? "suggestion" : i ? "subtle" : "briefLabelYou",
      b;
    if (t[4] !== y)
      ((b = fE.jsx(w, {
        color: y,
        children: "You",
      })),
        (t[4] = y),
        (t[5] = b));
    else b = t[5];
    let _;
    if (t[6] !== f)
      ((_ = f
        ? fE.jsxs(w, {
            dimColor: true,
            children: [" ", f],
          })
        : null),
        (t[6] = f),
        (t[7] = _));
    else _ = t[7];
    let S;
    if (t[8] !== h || t[9] !== b || t[10] !== _)
      ((S = fE.jsxs(U, {
        flexDirection: "row",
        children: [h, b, _],
      })),
        (t[8] = h),
        (t[9] = b),
        (t[10] = _),
        (t[11] = S));
    else S = t[11];
    let A;
    if (t[12] !== n || t[13] !== m || t[14] !== a)
      ((A = a
        ? fE.jsxs(fE.Fragment, {
            children: [
              fE.jsx(w, {
                color: m,
                children: n.head,
              }),
              fE.jsx(zil, {
                hiddenLines: n.hiddenLines,
                indent: 2,
              }),
              fE.jsx(w, {
                color: m,
                children: n.tail,
              }),
            ],
          })
        : fE.jsx(w, {
            color: m,
            children: n,
          })),
        (t[12] = n),
        (t[13] = m),
        (t[14] = a),
        (t[15] = A));
    else A = t[15];
    let v;
    if (t[16] !== S || t[17] !== A)
      ((v = fE.jsxs(U, {
        flexDirection: "column",
        paddingLeft: 2,
        children: [S, A],
      })),
        (t[16] = S),
        (t[17] = A),
        (t[18] = v));
    else v = t[18];
    return v;
  }
  let l = 3 + (s?.paddingWidth ?? 0),
    c;
  if (t[19] !== s?.selectionHighlight)
    ((c = fE.jsx(U, {
      flexShrink: 0,
      children:
        s?.selectionHighlight === "off"
          ? fE.jsx(w, {
              children: "  ",
            })
          : fE.jsxs(w, {
              "aria-label": s?.selectionHighlight === "on" ? "selected:" : "you:",
              color: s?.selectionHighlight === "on" ? "suggestion" : "subtle",
              children: [nt.pointer, " "],
            }),
    })),
      (t[19] = s?.selectionHighlight),
      (t[20] = c));
  else c = t[20];
  let u;
  if (t[21] !== l || t[22] !== n || t[23] !== a)
    ((u = a
      ? fE.jsxs(U, {
          flexDirection: "column",
          children: [
            fE.jsx(sIo, {
              text: n.head,
            }),
            fE.jsx(zil, {
              hiddenLines: n.hiddenLines,
              indent: l,
            }),
            fE.jsx(sIo, {
              text: n.tail,
            }),
          ],
        })
      : fE.jsx(sIo, {
          text: n,
        })),
      (t[21] = l),
      (t[22] = n),
      (t[23] = a),
      (t[24] = u));
  else u = t[24];
  let d;
  if (t[25] !== c || t[26] !== u)
    ((d = fE.jsxs(U, {
      flexDirection: "row",
      children: [c, u],
    })),
      (t[25] = c),
      (t[26] = u),
      (t[27] = d));
  else d = t[27];
  return d;
}
function zil(e) {
  let t = Xzn.c(3),
    { hiddenLines: n, indent: r } = e,
    o = `(${n} ${n === 1 ? "line" : "lines"} hidden)`,
    s;
  if (t[0] !== r || t[1] !== o)
    ((s = fE.jsx(qh, {
      title: o,
      titleAlign: "start",
      color: "subtle",
      padding: r,
    })),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s));
  else s = t[2];
  return s;
}
function sIo(e) {
  let t = Xzn.c(3),
    { text: n } = e,
    r,
    o;
  if (t[0] !== n) {
    o = Symbol.for("react.early_return_sentinel");
    e: {
      let s = B4e() ? kCn(n) : [];
      if (s.length === 0) {
        o = fE.jsx(w, {
          color: "text",
          children: n,
        });
        break e;
      }
      let i = [],
        a = 0;
      for (let l of s) {
        if (l.start > a)
          i.push(
            fE.jsx(
              w,
              {
                color: "text",
                children: n.slice(a, l.start),
              },
              `plain-${a}`,
            ),
          );
        for (let c = l.start; c < l.end; c++)
          i.push(
            fE.jsx(
              w,
              {
                color: q9(c - l.start),
                children: n[c],
              },
              `rb-${c}`,
            ),
          );
        a = l.end;
      }
      if (a < n.length)
        i.push(
          fE.jsx(
            w,
            {
              color: "text",
              children: n.slice(a),
            },
            `plain-${a}`,
          ),
        );
      r = fE.jsx(w, {
        children: i,
      });
    }
    ((t[0] = n), (t[1] = r), (t[2] = o));
  } else ((r = t[1]), (o = t[2]));
  if (o !== Symbol.for("react.early_return_sentinel")) return o;
  return r;
}
var Xzn, fE;
