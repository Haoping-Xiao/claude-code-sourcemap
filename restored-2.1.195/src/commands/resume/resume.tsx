// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module O2o
// matched 2.1.88 source: src/commands/resume/resume.tsx
// class=modified  jaccard=0.346  score=0.6295  fileCov=0.4344
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: filterResumableSessions, call
// [unwrapped __esm module O2o] deps: ft, Is, _a
BVl = require("path");
function resumeHelpMessage(e) {
  switch (e.resultType) {
    case "sessionNotFound":
      return `Session ${wt.bold(e.arg)} was not found.`;
    case "multipleMatches":
      return `Found ${e.count} sessions matching ${wt.bold(e.arg)}. Please use /resume to pick a specific session.`;
  }
}
function N2o(e) {
  let t = FVl.c(7),
    { message: n, args: r, onDone: o } = e;
  Pd(o, 0);
  let s;
  if (t[0] !== r)
    ((s = E3.jsxs(w, {
      dimColor: true,
      children: [nt.pointer, " /resume ", r],
    })),
      (t[0] = r),
      (t[1] = s));
  else s = t[1];
  let i;
  if (t[2] !== n)
    ((i = E3.jsx(qn, {
      children: E3.jsx(w, {
        children: n,
      }),
    })),
      (t[2] = n),
      (t[3] = i));
  else i = t[3];
  let a;
  if (t[4] !== s || t[5] !== i)
    ((a = E3.jsxs(U, {
      flexDirection: "column",
      children: [s, i],
    })),
      (t[4] = s),
      (t[5] = i),
      (t[6] = a));
  else a = t[6];
  return a;
}
function ResumeCommand({ onDone: e, onResume: t }) {
  let [n, r] = Az.useState([]),
    [o, s] = Az.useState([]),
    [i, a] = Az.useState(true),
    [l, c] = Az.useState(false),
    [u, d] = Az.useState(false),
    { rows: p } = br(),
    f = YE(),
    m = Az.useRef(false),
    g = Az.useCallback(
      async (_, S) => {
        a(true);
        try {
          let A = _ ? await B2o() : await zor(S);
          if (m.current) return;
          let v = filterResumableSessions(A, Rt());
          r(v);
        } catch (A) {
          if (m.current) return;
          e("Failed to load conversations");
        } finally {
          a(false);
        }
      },
      [e],
    );
  Az.useEffect(() => {
    async function _() {
      let S = await tAe(yr());
      if (m.current) return;
      (s(S), g(false, S));
    }
    _();
  }, [g]);
  let h = Az.useCallback(() => {
    let _ = !u;
    (d(_), g(_, o));
  }, [u, g, o]);
  async function y(_) {
    let S = yD(qg(_));
    if (!S) {
      e("Failed to resume conversation");
      return;
    }
    let A = doe(_) ? await sAe(_) : _;
    if (m.current) return;
    let v = Vor(A, u, o);
    if (v.isCrossProject) {
      if (v.isSameRepoWorktree) {
        (c(true), t(S, A, "slash_command_picker"));
        return;
      }
      let C = await AI(v.command);
      if (m.current) return;
      if (C) process.stdout.write(C);
      let x = [
        "",
        "This conversation is from a different directory.",
        "",
        "To resume, run:",
        `  ${v.command}`,
        "",
        "(Command copied to clipboard)",
        "",
      ].join(`
`);
      e(x, {
        display: "user",
      });
      return;
    }
    (c(true), t(S, A, "slash_command_picker"));
  }
  function b() {
    ((m.current = true),
      e("Resume cancelled", {
        display: "system",
      }));
  }
  if (
    ($r("confirm:no", b, {
      context: "Confirmation",
      isActive: i && !l,
    }),
    i || l)
  )
    return E3.jsxs(Fu, {
      color: "suggestion",
      children: [
        E3.jsx(w, {
          bold: true,
          color: "suggestion",
          children: "Resume session",
        }),
        E3.jsx(U, {
          marginTop: 1,
          children: E3.jsx(Vc, {
            message: l ? "Resuming conversation\u2026" : "Loading conversations\u2026",
          }),
        }),
      ],
    });
  return E3.jsx(Bor, {
    logs: n,
    maxHeight: f ? Math.floor(p / 2) : p - 2,
    onCancel: b,
    onSelect: y,
    onLogsChanged: () => g(u, o),
    showAllProjects: u,
    onToggleAllProjects: h,
    onAgenticSearch: qor,
  });
}
function filterResumableSessions(e, t) {
  return e.filter((n) => !n.isSidechain && qg(n) !== t);
}
var FVl,
  Az,
  E3,
  call = async (e, t, n) => {
    let r = async (c, u, d) => {
        if (await Tpe(c)) {
          e(
            "That session is still running as a background agent. Open `claude agents` to attach to it, or stop it there first to resume here.",
            {
              display: "user",
            },
          );
          return;
        }
        try {
          (await t.resume?.(c, u, d),
            e(void 0, {
              display: "skip",
            }));
        } catch (p) {
          (ke(p), e(`Failed to resume: ${be(p)}`));
        }
      },
      o = n?.trim();
    if (!o)
      return E3.jsx(
        ResumeCommand,
        {
          onDone: e,
          onResume: r,
        },
        Date.now(),
      );
    let s = await tAe(yr()),
      i = await zor(s);
    if (i.length === 0)
      return E3.jsx(N2o, {
        message: "No conversations found to resume.",
        args: o,
        onDone: () => e("No conversations found to resume."),
      });
    let a = yD(o);
    if (a) {
      let c = i
        .filter((d) => qg(d) === a)
        .sort((d, p) => p.modified.getTime() - d.modified.getTime());
      if (c.length > 0) {
        let d = c[0],
          p = doe(d) ? await sAe(d) : d;
        return (r(a, p, "slash_command_session_id"), null);
      }
      let u = await rAe(a);
      if (u) return (r(a, u, "slash_command_session_id"), null);
    }
    if (VHe()) {
      let c = await OQ(o, {
        exact: true,
      });
      if (c.length === 1) {
        let u = c[0],
          d = qg(u);
        if (d) {
          let p = doe(u) ? await sAe(u) : u;
          return (r(d, p, "slash_command_title"), null);
        }
      }
      if (c.length > 1) {
        let u = resumeHelpMessage({
          resultType: "multipleMatches",
          arg: o,
          count: c.length,
        });
        return E3.jsx(N2o, {
          message: u,
          args: o,
          onDone: () => e(u),
        });
      }
    }
    let l = resumeHelpMessage({
      resultType: "sessionNotFound",
      arg: o,
    });
    return E3.jsx(N2o, {
      message: l,
      args: o,
      onDone: () => e(l),
    });
  };
