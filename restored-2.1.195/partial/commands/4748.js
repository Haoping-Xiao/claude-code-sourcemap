// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rFl
// matched 2.1.88 source: src/commands/install-github-app/WarningsStep.tsx
// class=partial  jaccard=0.194  score=0.2496  fileCov=0.4652
// note: low-confidence suggestion: src/commands/install-github-app/WarningsStep.tsx; dir inferred from dep-graph -> commands; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var rFl = E(() => {
  mE();
  pz();
  Ye();
  tFl = R(lt(), 1), Bq = R(se(), 1);
});
function sFl(e) {
  let t = oFl.c(12),
    {
      repoUrl: n,
      onSubmit: r
    } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) o = {
    context: "Confirmation"
  }, t[0] = o;else o = t[0];
  $r("confirm:yes", r, o);
  let s;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) s = mR.jsx(U, {
    flexDirection: "column",
    marginBottom: 1,
    children: mR.jsx(w, {
      bold: !0,
      children: "Install the Claude GitHub App"
    })
  }), t[1] = s;else s = t[1];
  let i;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) i = mR.jsx(U, {
    marginBottom: 1,
    children: mR.jsx(w, {
      children: "Opening browser to install the Claude GitHub App\u2026"
    })
  }), t[2] = i;else i = t[2];
  let a;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) a = mR.jsx(U, {
    marginBottom: 1,
    children: mR.jsx(w, {
      children: "If your browser doesn't open automatically, visit:"
    })
  }), t[3] = a;else a = t[3];
  let l;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) l = mR.jsx(U, {
    marginBottom: 1,
    children: mR.jsx(w, {
      underline: !0,
      children: "https://github.com/apps/claude"
    })
  }), t[4] = l;else l = t[4];
  let c;
  if (t[5] !== n) c = mR.jsx(U, {
    marginBottom: 1,
    children: mR.jsxs(w, {
      children: ["Please install the app for repository: ", mR.jsx(w, {
        bold: !0,
        children: n
      })]
    })
  }), t[5] = n, t[6] = c;else c = t[6];
  let u;
  if (t[7] === Symbol.for("react.memo_cache_sentinel")) u = mR.jsx(U, {
    marginBottom: 1,
    children: mR.jsx(w, {
      dimColor: !0,
      children: "Important: Make sure to grant access to this specific repository"
    })
  }), t[7] = u;else u = t[7];
  let d;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) d = mR.jsx(U, {
    children: mR.jsxs(w, {
      bold: !0,
      color: "permission",
      children: ["Press Enter once you've installed the app", nt.ellipsis]
    })
  }), t[8] = d;else d = t[8];
  let p;
  if (t[9] === Symbol.for("react.memo_cache_sentinel")) p = mR.jsx(U, {
    marginTop: 1,
    children: mR.jsxs(w, {
      dimColor: !0,
      children: ["Having trouble? See manual setup instructions at:", " ", mR.jsx(w, {
        color: "claude",
        children: Vfe
      })]
    })
  }), t[9] = p;else p = t[9];
  let f;
  if (t[10] !== c) f = mR.jsxs(U, {
    flexDirection: "column",
    borderStyle: "round",
    borderDimColor: !0,
    paddingX: 1,
    children: [s, i, a, l, c, u, d, p]
  }), t[10] = c, t[11] = f;else f = t[11];
  return f;
}
var oFl, mR;