// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GAc
// matched 2.1.88 source: src/components/permissions/AskUserQuestionPermissionRequest/SubmitQuestionsView.tsx
// class=modified  jaccard=0.3783  score=0.5047  fileCov=0.6016
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module GAc] deps: si, Ye, uo, QOe, aE, y3, sr, mE, Bs, LW, Ko, vMe, PWt, UAc, _pr
((FAc = R(lt(), 1)), (itn = R(rt(), 1)), (w_ = R(se(), 1)));
function qAc(e) {
  let t = WAc.c(24),
    {
      questions: n,
      currentQuestionIndex: r,
      answers: o,
      allQuestionsAnswered: s,
      permissionResult: i,
      onFinalResponse: a,
    } = e,
    l;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((l = GP.jsx(qh, {
      color: "inactive",
    })),
      (t[0] = l));
  else l = t[0];
  let c;
  if (t[1] !== o || t[2] !== r || t[3] !== n)
    ((c = GP.jsx(XTt, {
      questions: n,
      currentQuestionIndex: r,
      answers: o,
    })),
      (t[1] = o),
      (t[2] = r),
      (t[3] = n),
      (t[4] = c));
  else c = t[4];
  let u;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((u = GP.jsx(ZDe, {
      title: "Review your answers",
      color: "text",
    })),
      (t[5] = u));
  else u = t[5];
  let d;
  if (t[6] !== s)
    ((d =
      !s &&
      GP.jsx(U, {
        marginBottom: 1,
        children: GP.jsx(qk, {
          status: "warning",
          children: "You have not answered all questions",
        }),
      })),
      (t[6] = s),
      (t[7] = d));
  else d = t[7];
  let p;
  if (t[8] !== o || t[9] !== n)
    ((p =
      Object.keys(o).length > 0 &&
      GP.jsx(U, {
        flexDirection: "column",
        marginBottom: 1,
        children: n
          .filter((b) => b?.question && o[b.question])
          .map((b) => {
            let _ = o[b?.question];
            return GP.jsxs(
              U,
              {
                flexDirection: "column",
                marginLeft: 1,
                children: [
                  GP.jsx(iE, {
                    children: b?.question || "Question",
                  }),
                  GP.jsx(U, {
                    marginLeft: 2,
                    children: GP.jsxs(w, {
                      color: "success",
                      children: [nt.arrowRight, " ", _],
                    }),
                  }),
                ],
              },
              b?.question || "answer",
            );
          }),
      })),
      (t[8] = o),
      (t[9] = n),
      (t[10] = p));
  else p = t[10];
  let f;
  if (t[11] !== i)
    ((f = GP.jsx(_2, {
      permissionResult: i,
      toolType: "tool",
    })),
      (t[11] = i),
      (t[12] = f));
  else f = t[12];
  let m;
  if (t[13] === Symbol.for("react.memo_cache_sentinel"))
    ((m = GP.jsx(w, {
      color: "inactive",
      children: "Ready to submit your answers?",
    })),
      (t[13] = m));
  else m = t[13];
  let g;
  if (t[14] !== a)
    ((g = GP.jsx(U, {
      marginTop: 1,
      children: GP.jsx(Kl, {
        confirmLabel: "Submit answers",
        cancelLabel: "Cancel",
        onConfirm: () => a("submit"),
        onCancel: () => a("cancel"),
      }),
    })),
      (t[14] = a),
      (t[15] = g));
  else g = t[15];
  let h;
  if (t[16] !== d || t[17] !== p || t[18] !== f || t[19] !== g)
    ((h = GP.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [d, p, f, m, g],
    })),
      (t[16] = d),
      (t[17] = p),
      (t[18] = f),
      (t[19] = g),
      (t[20] = h));
  else h = t[20];
  let y;
  if (t[21] !== c || t[22] !== h)
    ((y = GP.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        l,
        GP.jsxs(U, {
          flexDirection: "column",
          borderTop: true,
          borderColor: "inactive",
          paddingTop: 0,
          children: [c, u, h],
        }),
      ],
    })),
      (t[21] = c),
      (t[22] = h),
      (t[23] = y));
  else y = t[23];
  return y;
}
var WAc, GP;
