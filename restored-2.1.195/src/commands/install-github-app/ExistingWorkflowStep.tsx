// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eFl
// matched 2.1.88 source: src/commands/install-github-app/ExistingWorkflowStep.tsx
// class=modified  jaccard=0.2925  score=0.3395  fileCov=0.6788
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eFl] deps: lJ, pz, R6, Ye
((QUl = R(lt(), 1)), (KL = R(se(), 1)));
function ExistingWorkflowStep(t0) {
  let t = tFl.c(15),
    { repoName: n, onSelectAction: r } = t0,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = [
      {
        label: "Update workflow file with latest version",
        value: "update",
      },
      {
        label: "Skip workflow update (configure secrets only)",
        value: "skip",
      },
      {
        label: "Exit without making changes",
        value: "exit",
      },
    ]),
      (t[0] = o));
  else o = t[0];
  let s = o,
    i;
  if (t[1] !== r)
    ((i = (h) => {
      r(h);
    }),
      (t[1] = r),
      (t[2] = i));
  else i = t[2];
  let a = i,
    l;
  if (t[3] !== r)
    ((l = () => {
      r("exit");
    }),
      (t[3] = r),
      (t[4] = l));
  else l = t[4];
  let c = l,
    u = `Repository: ${n}`,
    d;
  if (t[5] !== u)
    ((d = Bq.jsx(U, {
      marginBottom: 1,
      children: Bq.jsx(LH, {
        subtitle: u,
        children: "Existing Workflow Found",
      }),
    })),
      (t[5] = u),
      (t[6] = d));
  else d = t[6];
  let p;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((p = Bq.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        Bq.jsxs(w, {
          children: [
            "A Claude workflow file already exists at",
            " ",
            Bq.jsx(w, {
              color: "claude",
              children: ".github/workflows/claude.yml",
            }),
          ],
        }),
        Bq.jsx(w, {
          dimColor: true,
          children: "What would you like to do?",
        }),
      ],
    })),
      (t[7] = p));
  else p = t[7];
  let f;
  if (t[8] !== c || t[9] !== a)
    ((f = Bq.jsx(U, {
      flexDirection: "column",
      children: Bq.jsx(Sr, {
        options: s,
        onChange: a,
        onCancel: c,
      }),
    })),
      (t[8] = c),
      (t[9] = a),
      (t[10] = f));
  else f = t[10];
  let m;
  if (t[11] === Symbol.for("react.memo_cache_sentinel"))
    ((m = Bq.jsx(U, {
      marginTop: 1,
      children: Bq.jsxs(w, {
        dimColor: true,
        children: [
          "View the latest workflow template at:",
          " ",
          Bq.jsx(w, {
            color: "claude",
            children:
              "https://github.com/anthropics/claude-code-action/blob/main/examples/claude.yml",
          }),
        ],
      }),
    })),
      (t[11] = m));
  else m = t[11];
  let g;
  if (t[12] !== d || t[13] !== f)
    ((g = Bq.jsxs(U, {
      flexDirection: "column",
      borderStyle: "round",
      borderDimColor: true,
      paddingX: 1,
      children: [d, p, f, m],
    })),
      (t[12] = d),
      (t[13] = f),
      (t[14] = g));
  else g = t[14];
  return g;
}
var tFl, Bq;
