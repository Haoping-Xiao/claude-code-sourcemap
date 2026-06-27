// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bzn
// matched 2.1.88 source: src/components/messages/PlanApprovalMessage.tsx
// class=modified  jaccard=0.3245  score=0.4599  fileCov=0.5243
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Bzn = E(() => {
  Ye();
  YI();
  R6();
  ((fil = R(lt(), 1)), (a6e = R(se(), 1)));
});
function Pof(e) {
  let t = qCo.c(8),
    { request: n } = e,
    r = `Plan Approval Request from ${n.from}`,
    o;
  if (t[0] !== n.planContent)
    ((o = AP.jsx(Q4, {
      children: AP.jsx(zg, {
        stripPromptTags: !1,
        children: n.planContent,
      }),
    })),
      (t[0] = n.planContent),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== n.planFilePath)
    ((s = AP.jsxs(w, {
      dimColor: !0,
      children: ["Plan file: ", n.planFilePath],
    })),
      (t[2] = n.planFilePath),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== r || t[5] !== o || t[6] !== s)
    ((i = AP.jsx(U, {
      flexDirection: "column",
      marginY: 1,
      children: AP.jsxs(cA, {
        color: "planMode",
        title: r,
        children: [o, s],
      }),
    })),
      (t[4] = r),
      (t[5] = o),
      (t[6] = s),
      (t[7] = i));
  else i = t[7];
  return i;
}
function Mof(e) {
  let t = qCo.c(12),
    { response: n, senderName: r } = e;
  if (n.approved) {
    let l = `\u2713 Plan Approved by ${r}`,
      c;
    if (t[0] !== n.feedback)
      ((c =
        n.feedback &&
        AP.jsx(Q4, {
          children: AP.jsxs(w, {
            children: ["Feedback: ", n.feedback],
          }),
        })),
        (t[0] = n.feedback),
        (t[1] = c));
    else c = t[1];
    let u;
    if (t[2] === Symbol.for("react.memo_cache_sentinel"))
      ((u = AP.jsx(w, {
        children:
          "You can now proceed with implementation. Your plan mode restrictions have been lifted.",
      })),
        (t[2] = u));
    else u = t[2];
    let d;
    if (t[3] !== l || t[4] !== c)
      ((d = AP.jsx(U, {
        flexDirection: "column",
        marginY: 1,
        children: AP.jsxs(cA, {
          color: "success",
          title: l,
          children: [c, u],
        }),
      })),
        (t[3] = l),
        (t[4] = c),
        (t[5] = d));
    else d = t[5];
    return d;
  }
  let o = `\u2717 Plan Rejected by ${r}`,
    s;
  if (t[6] !== n.feedback)
    ((s =
      n.feedback &&
      AP.jsx(Q4, {
        children: AP.jsxs(w, {
          children: ["Feedback: ", n.feedback],
        }),
      })),
      (t[6] = n.feedback),
      (t[7] = s));
  else s = t[7];
  let i;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((i = AP.jsx(w, {
      dimColor: !0,
      children: "Please revise your plan based on the feedback and call ExitPlanMode again.",
    })),
      (t[8] = i));
  else i = t[8];
  let a;
  if (t[9] !== o || t[10] !== s)
    ((a = AP.jsx(U, {
      flexDirection: "column",
      marginY: 1,
      children: AP.jsxs(cA, {
        color: "error",
        title: o,
        children: [s, i],
      }),
    })),
      (t[9] = o),
      (t[10] = s),
      (t[11] = a));
  else a = t[11];
  return a;
}
function Uzn(e, t) {
  let n = Qv(T9t(), e);
  if (n)
    return AP.jsx(Pof, {
      request: n,
    });
  let r = Qv(v9t(), e);
  if (r)
    return AP.jsx(Mof, {
      response: r,
      senderName: t,
    });
  return null;
}
function $of(e) {
  let t = Qv(T9t(), e);
  if (t) return `[Plan Approval Request from ${t.from}]`;
  let n = Qv(v9t(), e);
  if (n)
    if (n.approved)
      return n.feedback
        ? `[Plan Approved] ${n.feedback}`
        : "[Plan Approved] You can now proceed with implementation";
    else return `[Plan Rejected] ${n.feedback || "Please revise your plan"}`;
  return null;
}
function Oof(e) {
  let t = ["Agent idle"];
  if (e.completedTaskId) {
    let n = e.completedStatus || "completed";
    t.push(`Task ${e.completedTaskId} ${n}`);
  }
  if (e.summary) t.push(`Last DM: ${e.summary}`);
  return t.join(" \xB7 ");
}
function gil(e) {
  let t = $of(e);
  if (t) return t;
  let n = pil(e);
  if (n) return n;
  let r = Qv(m8e(), e);
  if (r) return Oof(r);
  let o = mil(e);
  if (o) return o;
  let s = Qv(h8e(), e);
  if (s) return s.message;
  return e;
}
var qCo, AP;
