// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Fl
// matched 2.1.88 source: src/commands/install-github-app/WarningsStep.tsx
// class=modified  jaccard=0.2631  score=0.3421  fileCov=0.5325
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var _Fl = E(() => {
  kt();
  er();
  vy();
  je();
  Bi();
  vn();
});
function SFl(e) {
  let t = bFl.c(9),
    { warnings: n, onContinue: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = {
      context: "Confirmation",
    }),
      (t[0] = o));
  else o = t[0];
  $r("confirm:yes", r, o);
  let s;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((s = Wk.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        Wk.jsxs(w, {
          bold: !0,
          children: [nt.warning, " Setup Warnings"],
        }),
        Wk.jsx(w, {
          dimColor: !0,
          children: "We found some potential issues, but you can continue anyway",
        }),
      ],
    })),
      (t[1] = s));
  else s = t[1];
  let i;
  if (t[2] !== n) ((i = n.map(S1f)), (t[2] = n), (t[3] = i));
  else i = t[3];
  let a;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((a = Wk.jsx(ht, {
      chord: "enter",
      action: "continue anyway",
    })),
      (t[4] = a));
  else a = t[4];
  let l;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((l = Wk.jsx(U, {
      marginTop: 1,
      children: Wk.jsxs(w, {
        bold: !0,
        color: "permission",
        children: [
          "Press",
          " ",
          a,
          ", or",
          " ",
          Wk.jsx(ht, {
            chord: "ctrl+c",
            action: "exit and fix issues",
            format: {
              modCase: "title",
              charCase: "upper",
            },
          }),
        ],
      }),
    })),
      (t[5] = l));
  else l = t[5];
  let c;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((c = Wk.jsx(U, {
      marginTop: 1,
      children: Wk.jsxs(w, {
        dimColor: !0,
        children: [
          "You can also try the manual setup steps if needed:",
          " ",
          Wk.jsx(w, {
            color: "claude",
            children: Vfe,
          }),
        ],
      }),
    })),
      (t[6] = c));
  else c = t[6];
  let u;
  if (t[7] !== i)
    ((u = Wk.jsx(Wk.Fragment, {
      children: Wk.jsxs(cA, {
        children: [s, i, l, c],
      }),
    })),
      (t[7] = i),
      (t[8] = u));
  else u = t[8];
  return u;
}
function S1f(e, t) {
  return Wk.jsxs(
    U,
    {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        Wk.jsx(w, {
          color: "warning",
          bold: !0,
          children: e.title,
        }),
        Wk.jsx(w, {
          children: e.message,
        }),
        e.instructions.length > 0 &&
          Wk.jsx(U, {
            flexDirection: "column",
            marginLeft: 2,
            marginTop: 1,
            children: e.instructions.map(E1f),
          }),
      ],
    },
    t,
  );
}
function E1f(e, t) {
  return Wk.jsx(
    iE,
    {
      children: Wk.jsx(w, {
        dimColor: !0,
        children: e,
      }),
    },
    t,
  );
}
var bFl, Wk;
