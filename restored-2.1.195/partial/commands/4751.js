// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fFl
// matched 2.1.88 source: src/commands/install-github-app/CreatingStep.tsx
// class=partial  jaccard=0.1086  score=0.1672  fileCov=0.2367
// note: low-confidence suggestion: src/commands/install-github-app/CreatingStep.tsx; dir inferred from dep-graph -> commands; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var fFl = E(() => {
  mE();
  pz();
  Ye();
  dFl = R(lt(), 1), LHe = R(se(), 1);
});
function gFl(e) {
  let t = mFl.c(25),
    {
      secretExists: n,
      useExistingSecret: r,
      secretName: o,
      skipWorkflow: s,
      appOnlyInstall: i
    } = e,
    a = s === void 0 ? false : s;
  if (i === void 0 ? false : i) {
    let b;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) b = im.jsx(U, {
      marginBottom: 1,
      children: im.jsx(LH, {
        subtitle: "Success",
        children: "Install GitHub App"
      })
    }), t[0] = b;else b = t[0];
    let _;
    if (t[1] === Symbol.for("react.memo_cache_sentinel")) _ = im.jsxs(w, {
      color: "success",
      children: [im.jsx(Hs, {
        status: "success",
        withSpace: true
      }), "GitHub App installed"]
    }), t[1] = _;else _ = t[1];
    let S;
    if (t[2] === Symbol.for("react.memo_cache_sentinel")) S = im.jsxs(cA, {
      children: [b, _, im.jsx(U, {
        marginTop: 1,
        children: im.jsx(w, {
          children: "Run /install-github-app again anytime to set up GitHub Actions workflows."
        })
      })]
    }), t[2] = S;else S = t[2];
    let A;
    if (t[3] === Symbol.for("react.memo_cache_sentinel")) A = im.jsxs(im.Fragment, {
      children: [S, im.jsx(U, {
        marginLeft: 3,
        children: im.jsx(w, {
          dimColor: true,
          children: "Press any key to exit"
        })
      })]
    }), t[3] = A;else A = t[3];
    return A;
  }
  let c;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) c = im.jsx(U, {
    marginBottom: 1,
    children: im.jsx(LH, {
      subtitle: "Success",
      children: "Install GitHub App"
    })
  }), t[4] = c;else c = t[4];
  let u;
  if (t[5] !== a) u = !a && im.jsxs(w, {
    color: "success",
    children: [im.jsx(Hs, {
      status: "success",
      withSpace: true
    }), "GitHub Actions workflow created!"]
  }), t[5] = a, t[6] = u;else u = t[6];
  let d;
  if (t[7] !== n || t[8] !== r) d = n && r && im.jsx(U, {
    marginTop: 1,
    children: im.jsxs(w, {
      color: "success",
      children: [im.jsx(Hs, {
        status: "success",
        withSpace: true
      }), "Using existing ANTHROPIC_API_KEY secret"]
    })
  }), t[7] = n, t[8] = r, t[9] = d;else d = t[9];
  let p;
  if (t[10] !== n || t[11] !== o || t[12] !== r) p = (!n || !r) && im.jsx(U, {
    marginTop: 1,
    children: im.jsxs(w, {
      color: "success",
      children: [im.jsx(Hs, {
        status: "success",
        withSpace: true
      }), "API key saved as ", o, " secret"]
    })
  }), t[10] = n, t[11] = o, t[12] = r, t[13] = p;else p = t[13];
  let f;
  if (t[14] === Symbol.for("react.memo_cache_sentinel")) f = im.jsx(U, {
    marginTop: 1,
    children: im.jsx(w, {
      children: "Next steps:"
    })
  }), t[14] = f;else f = t[14];
  let m;
  if (t[15] !== a) m = a ? im.jsxs(im.Fragment, {
    children: [im.jsx(w, {
      children: "1. Install the Claude GitHub App if you haven't already"
    }), im.jsx(w, {
      children: "2. Your workflow file was kept unchanged"
    }), im.jsx(w, {
      children: "3. API key is configured and ready to use"
    })]
  }) : im.jsxs(im.Fragment, {
    children: [im.jsx(w, {
      children: "1. A pre-filled PR page has been created"
    }), im.jsx(w, {
      children: "2. Install the Claude GitHub App if you haven't already"
    }), im.jsx(w, {
      children: "3. Merge the PR to enable Claude PR assistance"
    })]
  }), t[15] = a, t[16] = m;else m = t[16];
  let g;
  if (t[17] !== u || t[18] !== d || t[19] !== p || t[20] !== m) g = im.jsxs(cA, {
    children: [c, u, d, p, f, m]
  }), t[17] = u, t[18] = d, t[19] = p, t[20] = m, t[21] = g;else g = t[21];
  let h;
  if (t[22] === Symbol.for("react.memo_cache_sentinel")) h = im.jsx(U, {
    marginLeft: 3,
    children: im.jsx(w, {
      dimColor: true,
      children: "Press any key to exit"
    })
  }), t[22] = h;else h = t[22];
  let y;
  if (t[23] !== g) y = im.jsxs(im.Fragment, {
    children: [g, h]
  }), t[23] = g, t[24] = y;else y = t[24];
  return y;
}
var mFl, im;