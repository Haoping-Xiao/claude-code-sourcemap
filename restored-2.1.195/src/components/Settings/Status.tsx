// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gKe
// matched 2.1.88 source: src/components/Settings/Status.tsx
// class=modified  jaccard=0.0948  score=0.2015  fileCov=0.1518
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gKe] deps: components/design-system/Ratchet.tsx, m8, marked/lib/marked.esm.js, hooks/useTerminalSize.ts, components/design-system/StatusIcon.tsx
((mKe = R(lt(), 1)),
  (c1o = R(rt(), 1)),
  (DOe = R(rt(), 1)),
  (gA = R(se(), 1)),
  (mRf = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
  }));
Km = Object.assign(HRf, {
  Row: ARf,
});
function buildPrimarySection() {
  let e = Rt(),
    t = Oe.CLAUDE_CODE_TMUX_SESSION,
    r =
      Gg(e) ??
      dz(e) ??
      hA.jsx(w, {
        dimColor: true,
        children: "/rename to add a name",
      }),
    o = MA(),
    s = "";
  if (o.length > 0) {
    let i = o
        .map((l) =>
          l.kind === "plugin" ? `plugin:${l.name}@${l.marketplace}` : `server:${l.name}`,
        )
        .join(", "),
      a =
        fr() !== "firstParty"
          ? "not available on third-party providers"
          : !GAe()
            ? "not currently available"
            : q_t(yn("policySettings"))
              ? "blocked by org policy"
              : void 0;
    s = a ? `Configured but not active (${a}): ${i}` : `Listening for messages from ${i}`;
  }
  return [
    {
      label: "Version",
      value: `${
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION
      }${L2()}`,
    },
    ...[],
    {
      label: "Session name",
      value: r,
    },
    {
      label: "Session ID",
      value: e,
    },
    ...(t
      ? [
          {
            label: "tmux session",
            value: t,
          },
        ]
      : []),
    ...(s
      ? [
          {
            label: "Channels",
            value: s,
          },
        ]
      : []),
    ...[],
    ...(bD()
      ? [
          {
            label: "Memory",
            value: "Paused for this session \xB7 /pause-memory to resume",
          },
        ]
      : []),
    {
      label: "cwd",
      value: $t(),
    },
    ...NVn(),
    ...IRf(),
    ...BVn(),
  ];
}
function IRf() {
  let e = ale();
  return e.length > 0
    ? [
        {
          label: "Compliance",
          value: e.map(aEt),
        },
      ]
    : [];
}
function xRf({ mainLoopModel: e, mcp: t, theme: n, context: r }) {
  return [
    {
      label: "Model",
      value: uKa(e),
    },
    ...oKa(t.clients, r.options.ideInstallationStatus, n),
    ...sKa(t.clients, n),
    ...rKa(),
    ...aKa(),
  ];
}
async function AMl() {
  return [...(await lKa()), ...(await cKa()), ...(await iKa())];
}
function kRf(e) {
  let t = ltr.c(8),
    { value: value } = e;
  if (Array.isArray(value)) {
    let r;
    if (t[0] !== value) {
      let s;
      if (t[2] !== value.length)
        ((s = (i, a) =>
          hA.jsxs(
            w,
            {
              children: [i, a < value.length - 1 ? "," : ""],
            },
            a,
          )),
          (t[2] = value.length),
          (t[3] = s));
      else s = t[3];
      ((r = value.map(s)), (t[0] = value), (t[1] = r));
    } else r = t[1];
    let o;
    if (t[4] !== r)
      ((o = hA.jsx(U, {
        flexWrap: "wrap",
        columnGap: 1,
        flexShrink: 99,
        children: r,
      })),
        (t[4] = r),
        (t[5] = o));
    else o = t[5];
    return o;
  }
  if (typeof value === "string") {
    let r;
    if (t[6] !== value)
      ((r = hA.jsx(w, {
        children: value,
      })),
        (t[6] = value),
        (t[7] = r));
    else r = t[7];
    return r;
  }
  return value;
}
function Status(t0) {
  let t = ltr.c(20),
    { context: n, diagnosticsPromise: r } = t0,
    o = Ht(PRf),
    s = Ht(DRf),
    [i] = na(),
    a;
  if (t[0] !== n || t[1] !== o || t[2] !== s || t[3] !== i)
    ((a = OVn([
      buildPrimarySection(),
      xRf({
        mainLoopModel: o,
        mcp: s,
        theme: i,
        context: n,
      }),
    ])),
      (t[0] = n),
      (t[1] = o),
      (t[2] = s),
      (t[3] = i),
      (t[4] = a));
  else a = t[4];
  let l = a,
    c = YE() ? 1 : void 0,
    u;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((u = [
      {
        bold: true,
      },
      {},
    ]),
      (t[5] = u));
  else u = t[5];
  let d;
  if (t[6] !== l) ((d = l.filter(LRf).flatMap(RRf)), (t[6] = l), (t[7] = d));
  else d = t[7];
  let p;
  if (t[8] !== d)
    ((p = hA.jsx(Km, {
      box: "plain",
      columns: u,
      children: d,
    })),
      (t[8] = d),
      (t[9] = p));
  else p = t[9];
  let f;
  if (t[10] !== r)
    ((f = hA.jsx(ctr.Suspense, {
      fallback: null,
      children: hA.jsx(MRf, {
        promise: r,
      }),
    })),
      (t[10] = r),
      (t[11] = f));
  else f = t[11];
  let m;
  if (t[12] !== c || t[13] !== p || t[14] !== f)
    ((m = hA.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      flexGrow: c,
      children: [p, f],
    })),
      (t[12] = c),
      (t[13] = p),
      (t[14] = f),
      (t[15] = m));
  else m = t[15];
  let g;
  if (t[16] === Symbol.for("react.memo_cache_sentinel"))
    ((g = hA.jsx(w, {
      dimColor: true,
      children: hA.jsx(mr, {
        action: "confirm:no",
        context: "Settings",
        fallback: "Esc",
        description: "cancel",
      }),
    })),
      (t[16] = g));
  else g = t[16];
  let h;
  if (t[17] !== c || t[18] !== m)
    ((h = hA.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      flexGrow: c,
      children: [m, g],
    })),
      (t[17] = c),
      (t[18] = m),
      (t[19] = h));
  else h = t[19];
  return h;
}
function RRf(e, t) {
  return [
    t > 0 &&
      hA.jsxs(
        Km.Row,
        {
          children: [
            hA.jsx(hA.Fragment, {
              children: " ",
            }),
            hA.jsx(hA.Fragment, {
              children: "",
            }),
          ],
        },
        `gap-${t}`,
      ),
    ...e.map((n, r) => {
      let { label: o, value: s } = n;
      return hA.jsxs(
        Km.Row,
        {
          children: [
            hA.jsx(hA.Fragment, {
              children: o !== void 0 ? `${o}:` : "",
            }),
            hA.jsx(kRf, {
              value: s,
            }),
          ],
        },
        `${t}-${r}`,
      );
    }),
  ];
}
function LRf(e) {
  return e.length > 0;
}
function DRf(e) {
  return e.mcp;
}
function PRf(e) {
  return e.mainLoopModel;
}
function MRf(e) {
  let t = ltr.c(5),
    { promise: n } = e,
    r = ctr.use(n);
  if (r.length === 0) return null;
  let o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = hA.jsx(w, {
      bold: true,
      children: "System diagnostics",
    })),
      (t[0] = o));
  else o = t[0];
  let s;
  if (t[1] !== r) ((s = r.map($Rf)), (t[1] = r), (t[2] = s));
  else s = t[2];
  let i;
  if (t[3] !== s)
    ((i = hA.jsxs(U, {
      flexDirection: "column",
      paddingBottom: 1,
      children: [o, s],
    })),
      (t[3] = s),
      (t[4] = i));
  else i = t[4];
  return i;
}
function $Rf(e, t) {
  return hA.jsxs(
    U,
    {
      flexDirection: "row",
      gap: 1,
      paddingX: 1,
      children: [
        hA.jsx(Hs, {
          status: "warning",
        }),
        typeof e === "string"
          ? hA.jsx(w, {
              wrap: "wrap",
              children: e,
            })
          : e,
      ],
    },
    t,
  );
}
var ltr, ctr, hA;
