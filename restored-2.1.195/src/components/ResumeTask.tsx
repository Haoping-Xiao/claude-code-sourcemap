// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l6l
// matched 2.1.88 source: src/components/ResumeTask.tsx
// class=modified  jaccard=0.2529  score=0.3979  fileCov=0.4097
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module l6l] deps: ft, kt, dn, At, gP
((i6l = R(lt(), 1)), (Esr = R(rt(), 1)));
function ResumeTask({ onSelect: e, onCancel: t, isEmbedded: n = false }) {
  let { rows: r } = br(),
    [o, s] = kse.useState([]),
    [i, a] = kse.useState(null),
    [l, c] = kse.useState(true),
    [u, d] = kse.useState(null),
    [p, f] = kse.useState(false),
    [m, g] = kse.useState(false),
    [h, y] = kse.useState(1),
    b = Uu("confirm:no", "Confirmation", "Esc"),
    _ = kse.useCallback(async () => {
      try {
        (c(true), d(null));
        let L = await uCe();
        (a(L), T(`Current repository: ${L || "not detected"}`));
        let M = await bzr(),
          N = M;
        if (L)
          ((N = M.filter(($) => {
            if (!$.repo) return false;
            return `${$.repo.owner.login}/${$.repo.name}` === L;
          })),
            T(`Filtered ${N.length} sessions for repo ${L} from ${M.length} total`));
        let B = [...N].sort(($, q) => {
          let W = new Date($.updated_at);
          return new Date(q.updated_at).getTime() - W.getTime();
        });
        s(B);
      } catch (L) {
        let M = L instanceof Error ? L.message : String(L);
        (T(`Error loading code sessions: ${M}`), d(determineErrorType(M)));
      } finally {
        (c(false), f(false));
      }
    }, []),
    S = () => {
      (f(true), _());
    };
  $r("confirm:no", t, {
    context: "Confirmation",
  });
  function A(L) {
    if (L.ctrl && L.key === "c") {
      (L.preventDefault(), t());
      return;
    }
    if (L.ctrl && L.key === "r" && u) {
      (L.preventDefault(), S());
      return;
    }
    if (u !== null && L.key === "return") {
      (L.preventDefault(), t());
      return;
    }
  }
  let v = kse.useCallback(() => {
    (g(true), _());
  }, [g, _]);
  if (!m)
    return Hm.jsx(c8n, {
      onComplete: v,
    });
  if (l)
    return Hm.jsx(U, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: A,
      children: Hm.jsx(Vc, {
        message: "Loading Claude Code sessions\u2026",
        bold: true,
        subtitle: p ? "Retrying\u2026" : "Fetching your Claude Code sessions\u2026",
      }),
    });
  if (u)
    return Hm.jsxs(U, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: A,
      children: [
        Hm.jsx(w, {
          bold: true,
          color: "error",
          children: "Error loading Claude Code sessions",
        }),
        K5f(u),
        Hm.jsxs(w, {
          dimColor: true,
          children: [
            "Press ",
            Hm.jsx(w, {
              bold: true,
              children: "Ctrl+R",
            }),
            " to retry \xB7 Press",
            " ",
            Hm.jsx(w, {
              bold: true,
              children: b,
            }),
            " to cancel",
          ],
        }),
      ],
    });
  if (o.length === 0)
    return Hm.jsxs(U, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: A,
      children: [
        Hm.jsxs(w, {
          bold: true,
          children: [
            "No Claude Code sessions found",
            i &&
              Hm.jsxs(w, {
                children: [" for ", i],
              }),
          ],
        }),
        Hm.jsx(U, {
          marginTop: 1,
          children: Hm.jsxs(w, {
            dimColor: true,
            children: [
              "Press ",
              Hm.jsx(w, {
                bold: true,
                children: b,
              }),
              " to cancel",
            ],
          }),
        }),
      ],
    });
  let C = o.map((L) => ({
      ...L,
      timeString: oae(new Date(L.updated_at)),
    })),
    x = Math.max(c6l.length, ...C.map((L) => L.timeString.length)),
    I = C.map(({ timeString: L, title: M, id: N }) => ({
      label: `${L.padEnd(x, " ")}  ${M}`,
      value: N,
    })),
    k = 7,
    D = Math.max(1, n ? Math.min(o.length, 5, r - 6 - k) : Math.min(o.length, r - 1 - k)),
    P = D + k,
    O = o.length > D;
  return Hm.jsxs(U, {
    flexDirection: "column",
    padding: 1,
    height: P,
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: A,
    children: [
      Hm.jsxs(w, {
        bold: true,
        children: [
          "Select a session to resume",
          O &&
            Hm.jsxs(w, {
              dimColor: true,
              children: [" ", "(", h, " of ", o.length, ")"],
            }),
          i &&
            Hm.jsxs(w, {
              dimColor: true,
              children: [" (", i, ")"],
            }),
          ":",
        ],
      }),
      Hm.jsxs(U, {
        flexDirection: "column",
        marginTop: 1,
        flexGrow: 1,
        children: [
          Hm.jsx(U, {
            marginLeft: 2,
            children: Hm.jsxs(w, {
              bold: true,
              children: [c6l.padEnd(x, " "), V5f, "Session Title"],
            }),
          }),
          Hm.jsx(Sr, {
            visibleOptionCount: D,
            options: I,
            onChange: (L) => {
              let M = o.find((N) => N.id === L);
              if (M) e(M);
            },
            onFocus: (L) => {
              let M = I.findIndex((N) => N.value === L);
              if (M >= 0) y(M + 1);
            },
          }),
        ],
      }),
      Hm.jsx(U, {
        flexDirection: "row",
        children: Hm.jsx(w, {
          dimColor: true,
          children: Hm.jsxs(Tn, {
            children: [
              Hm.jsx(ht, {
                chord: ["up", "down"],
                action: "select",
              }),
              Hm.jsx(ht, {
                chord: "enter",
                action: "confirm",
              }),
              Hm.jsx(mr, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel",
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function determineErrorType(e) {
  let t = e.toLowerCase();
  if (t.includes("fetch") || t.includes("network") || t.includes("timeout")) return "network";
  if (
    t.includes("auth") ||
    t.includes("token") ||
    t.includes("permission") ||
    t.includes("oauth") ||
    t.includes("not authenticated") ||
    t.includes("/login") ||
    t.includes("console account") ||
    t.includes("403")
  )
    return "auth";
  if (t.includes("api") || t.includes("rate limit") || t.includes("500") || t.includes("529"))
    return "api";
  return "other";
}
function K5f(e) {
  switch (e) {
    case "network":
      return Hm.jsx(U, {
        marginY: 1,
        flexDirection: "column",
        children: Hm.jsx(w, {
          dimColor: true,
          children: "Check your internet connection",
        }),
      });
    case "auth":
      return Hm.jsxs(U, {
        marginY: 1,
        flexDirection: "column",
        children: [
          Hm.jsx(w, {
            dimColor: true,
            children: "Teleport requires a Claude account",
          }),
          Hm.jsxs(w, {
            dimColor: true,
            children: [
              "Run ",
              Hm.jsx(w, {
                bold: true,
                children: "/login",
              }),
              ' and select "Claude account with subscription"',
            ],
          }),
        ],
      });
    case "api":
      return Hm.jsx(U, {
        marginY: 1,
        flexDirection: "column",
        children: Hm.jsx(w, {
          dimColor: true,
          children: "Sorry, Claude encountered an error",
        }),
      });
    case "other":
      return Hm.jsx(U, {
        marginY: 1,
        flexDirection: "row",
        children: Hm.jsx(w, {
          dimColor: true,
          children: "Sorry, Claude Code encountered an error",
        }),
      });
  }
}
var kse,
  Hm,
  c6l = "Updated",
  V5f = "  ";
