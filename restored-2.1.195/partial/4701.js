// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MNl
// matched 2.1.88 source: src/components/permissions/PermissionDecisionDebugInfo.tsx
// class=partial  jaccard=0.0747  score=0.343  fileCov=0.0872
// note: low-confidence suggestion: src/components/permissions/PermissionDecisionDebugInfo.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var MNl = E(() => {
  Ye();
  uo();
  Ect();
  sr();
  bEt();
  xoe();
  DNl = R(lt(), 1), QF = R(se(), 1);
});
function $$f(e) {
  let t = bnr.c(8),
    {
      promise: n
    } = e,
    r = kEt.use(n);
  if (r.inRemoteSession) {
    let a;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) a = pR.jsx(hs.Node, {
      dimColor: !0,
      children: "Inside a cloud session \u2014 Remote Control is unavailable here. Use it from the local session instead."
    }), t[0] = a;else a = t[0];
    return a;
  }
  let o = r.checks,
    s,
    i;
  if (t[1] !== r.checks || t[2] !== r.disabledReason) {
    i = Symbol.for("react.early_return_sentinel");
    e: {
      let a = o.filter(B$f);
      if (r.disabledReason !== null) {
        let c;
        if (t[5] !== r.disabledReason) c = pR.jsx(hs.Node, {
          label: pR.jsx(_nr, {
            color: "warning",
            children: r.disabledReason
          })
        }), t[5] = r.disabledReason, t[6] = c;else c = t[6];
        i = pR.jsxs(hs.Group, {
          children: [c, a.map(N$f)]
        });
        break e;
      }
      let l;
      if (t[7] === Symbol.for("react.memo_cache_sentinel")) l = pR.jsx(hs.Node, {
        dimColor: !0,
        children: "Control this session from claude.ai/code or the Claude mobile app"
      }), t[7] = l;else l = t[7];
      s = pR.jsxs(hs.Group, {
        children: [l, a.map(O$f)]
      });
    }
    t[1] = r.checks, t[2] = r.disabledReason, t[3] = s, t[4] = i;
  } else s = t[3], i = t[4];
  if (i !== Symbol.for("react.early_return_sentinel")) return i;
  return s;
}
function O$f(e) {
  return pR.jsxs(hs.Node, {
    color: "warning",
    children: [e.label, e.detail ? ` (${e.detail})` : ""]
  }, e.label);
}
function N$f(e) {
  return pR.jsxs(hs.Node, {
    dimColor: !0,
    children: [e.label, e.detail ? ` (${e.detail})` : ""]
  }, e.label);
}
function B$f(e) {
  return !e.ok;
}
function $Nl() {
  let e = bnr.c(4),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = WNo(), e[0] = t;else t = e[0];
  let n = t,
    r;
  if (e[1] === Symbol.for("react.memo_cache_sentinel")) r = pR.jsx(w, {
    bold: !0,
    children: "Remote Control"
  }), e[1] = r;else r = e[1];
  let o;
  if (e[2] === Symbol.for("react.memo_cache_sentinel")) o = pR.jsxs(U, {
    children: [r, pR.jsx(kEt.Suspense, {
      fallback: null,
      children: pR.jsx(U$f, {
        promise: n
      })
    })]
  }), e[2] = o;else o = e[2];
  let s;
  if (e[3] === Symbol.for("react.memo_cache_sentinel")) s = pR.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [o, pR.jsx(hs, {
      variant: "tree",
      children: pR.jsx(kEt.Suspense, {
        fallback: pR.jsx(hs.Node, {
          dimColor: !0,
          children: "Checking Remote Control eligibility\u2026"
        }),
        children: pR.jsx($$f, {
          promise: n
        })
      })
    })]
  }), e[3] = s;else s = e[3];
  return s;
}
function U$f(e) {
  let t = bnr.c(2),
    {
      promise: n
    } = e,
    r = kEt.use(n),
    o = r.inRemoteSession ? "info" : r.disabledReason === null && r.checks.every(F$f) ? "success" : "warning",
    s;
  if (t[0] !== o) s = pR.jsxs(w, {
    children: [" ", pR.jsx(Hs, {
      status: o
    })]
  }), t[0] = o, t[1] = s;else s = t[1];
  return s;
}
function F$f(e) {
  return e.ok;
}
var bnr, kEt, pR;