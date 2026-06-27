// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lwo
// matched 2.1.88 source: src/tools/ExitPlanModeTool/UI.tsx
// class=partial  jaccard=0.0763  score=0.149  fileCov=0.1353
// note: low-confidence suggestion: src/tools/ExitPlanModeTool/UI.tsx; dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lwo = E(() => {
  AN();
  ql();
  Ye();
  Gnl = R(lt(), 1), k8e = R(se(), 1);
});
function Wnl() {
  return null;
}
function qnl(e, t, {
  theme: n
}) {
  let {
      plan: r,
      filePath: o
    } = e,
    s = !r || r.trim() === "",
    i = o ? kd(o) : "",
    a = e.awaitingLeaderApproval;
  if (s) return HC.jsx(U, {
    flexDirection: "column",
    marginTop: 1,
    children: HC.jsxs(U, {
      flexDirection: "row",
      children: [HC.jsx(w, {
        color: BB("plan"),
        children: gc
      }), HC.jsx(w, {
        children: " Exited plan mode"
      })]
    })
  });
  if (a) return HC.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [HC.jsxs(U, {
      flexDirection: "row",
      children: [HC.jsx(w, {
        color: BB("plan"),
        children: gc
      }), HC.jsx(w, {
        children: " Plan submitted for team lead approval"
      })]
    }), HC.jsx(qn, {
      children: HC.jsxs(U, {
        flexDirection: "column",
        children: [o && HC.jsxs(w, {
          dimColor: !0,
          children: ["Plan file: ", i]
        }), HC.jsx(w, {
          dimColor: !0,
          children: "Waiting for team lead to review and approve..."
        })]
      })
    })]
  });
  return HC.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [HC.jsxs(U, {
      flexDirection: "row",
      children: [HC.jsx(w, {
        color: BB("plan"),
        children: gc
      }), HC.jsx(w, {
        children: " User approved Claude's plan"
      })]
    }), HC.jsx(qn, {
      children: HC.jsxs(U, {
        flexDirection: "column",
        children: [o && HC.jsxs(w, {
          dimColor: !0,
          children: ["Plan saved to: ", i, " \xB7 /plan to edit"]
        }), HC.jsx(zg, {
          children: r
        })]
      })
    })]
  });
}
function Vnl({
  plan: e
}, {
  theme: t
}) {
  let n = e ?? bP() ?? "No plan found";
  return HC.jsx(U, {
    flexDirection: "column",
    children: HC.jsx(A6n, {
      plan: n
    })
  });
}
var HC;