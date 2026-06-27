// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module OTt
// matched 2.1.88 source: src/components/HistorySearchDialog.tsx
// class=modified  jaccard=0.258  score=0.4164  fileCov=0.404
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var OTt = E(() => {
  si();
  Xa();
  _i();
  m8();
  Tc();
  Ye();
  nk();
  uo();
  rme();
  gq();
  S_();
  T6o();
  c7n();
  es();
  sr();
  dMe();
  Bs();
  Ko();
  _rr();
  YHe();
  (($Tt = R(lt(), 1)), (xZ = R(rt(), 1)), (Au = R(se(), 1)));
});
function Vyc({ initialQuery: e, onSelect: t, onCancel: n }) {
  Wh("history-search");
  let { columns: r } = br(),
    [o, s] = Jse.useState("everywhere"),
    [i, a] = Jse.useState(null),
    [l, c] = Jse.useState(e ?? ""),
    u = Jse.useRef({});
  (Jse.useEffect(() => {
    xe("history_search_open");
  }, []),
    Jse.useEffect(() => {
      let y = u.current[o];
      if (y) {
        a(y);
        return;
      }
      a(null);
      let b = false;
      return (
        (async () => {
          let _ = Y8i(o),
            S = [];
          for await (let A of _) {
            if (b) {
              _.return(void 0);
              return;
            }
            let v = A.display,
              C = v.indexOf(`
`),
              x = WK(new Date(A.timestamp));
            S.push({
              entry: A,
              display: v,
              lower: v.toLowerCase(),
              firstLine: C === -1 ? v : v.slice(0, C),
              age: x + " ".repeat(Math.max(0, qyc - rn(x))),
            });
          }
          if (!b) ((u.current[o] = S), a(S));
        })(),
        () => {
          b = true;
        }
      );
    }, [o]));
  let d = $0("historySearch:cycleScope", "HistorySearch", "ctrl+s");
  $r(
    "historySearch:cycleScope",
    () => {
      let y = JDn.indexOf(o),
        b = JDn[(y + 1) % JDn.length];
      (s(b),
        G("tengu_history_picker_scope", {
          from: $e(o),
          to: $e(b),
        }));
    },
    {
      context: "HistorySearch",
    },
  );
  let p = Jse.useMemo(() => {
      if (!i) return [];
      let y = l.trim().toLowerCase();
      if (!y) return i;
      let b = [],
        _ = [];
      for (let S of i)
        if (S.lower.includes(y)) b.push(S);
        else if (ofm(S.lower, y)) _.push(S);
      return b.concat(_);
    }, [i, l]),
    f = r >= 100,
    m = f ? Math.floor((r - 6) * 0.5) : r - 6,
    g = Math.max(20, m - qyc - 1),
    h = f ? Math.max(20, r - m - 12) : Math.max(20, r - 10);
  return Vz.jsx(Hsr, {
    title: Vz.jsxs(w, {
      children: [
        "Search prompts ",
        Vz.jsxs(w, {
          color: "suggestion",
          children: ["\xB7 ", o],
        }),
      ],
    }),
    placeholder: "Filter history\u2026",
    initialQuery: e,
    items: p,
    getKey: (y) => String(y.entry.timestamp),
    onQueryChange: c,
    onSelect: (y) => {
      (G("tengu_history_picker_select", {
        result_count: p.length,
        query_length: l.length,
      }),
        y.entry.resolve().then(t));
    },
    onCancel: n,
    resetKey: o,
    extraHints: [
      Vz.jsx(
        ht,
        {
          chord: d,
          action: "scope",
        },
        "scope",
      ),
      V$() &&
        Vz.jsx(
          w,
          {
            children: "Esc i / for slash commands",
          },
          "vim",
        ),
    ],
    emptyMessage: (y) =>
      i === null ? "Loading\u2026" : y ? "No matching prompts" : "No history yet",
    selectAction: "use",
    direction: "up",
    previewPosition: f ? "right" : "bottom",
    renderItem: (y, b) =>
      Vz.jsxs(w, {
        children: [
          Vz.jsx(w, {
            dimColor: true,
            children: y.age,
          }),
          Vz.jsxs(w, {
            color: b ? "suggestion" : void 0,
            children: [" ", Rs(y.firstLine, g)],
          }),
        ],
      }),
    renderPreview: (y) => {
      let b = SB(y.display, h, {
          hard: true,
        })
          .split(
            `
`,
          )
          .filter((v) => v.trim() !== ""),
        _ = b.length > Hdr,
        S = b.slice(0, _ ? Hdr - 1 : Hdr),
        A = b.length - S.length;
      return Vz.jsxs(U, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: true,
        paddingX: 1,
        height: Hdr + 2,
        children: [
          S.map((v, C) =>
            Vz.jsx(
              w,
              {
                dimColor: true,
                children: v,
              },
              C,
            ),
          ),
          Vz.jsx(d$, {
            count: A,
          }),
        ],
      });
    },
  });
}
function ofm(e, t) {
  let n = 0;
  for (let r = 0; r < e.length && n < t.length; r++) if (e[r] === t[n]) n++;
  return n === t.length;
}
var Jse,
  Vz,
  Hdr = 6,
  qyc = 8;
