// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Bzn
// matched 2.1.88 source: src/components/messages/PlanApprovalMessage.tsx
// class=modified  jaccard=0.3191  score=0.5254  fileCov=0.4483
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Bzn] deps: hooks/useTerminalSize.ts, utils/teammateMailbox.ts, components/AwsAuthStatusBox.tsx
((fil = R(lt(), 1)), (a6e = R(se(), 1)));
function PlanApprovalRequestDisplay(t0) {
  let t = qCo.c(8),
    { request: request } = t0,
    r = `Plan Approval Request from ${request.from}`,
    o;
  if (t[0] !== request.planContent)
    ((o = AP.jsx(Q4, {
      children: AP.jsx(zg, {
        stripPromptTags: false,
        children: request.planContent,
      }),
    })),
      (t[0] = request.planContent),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== request.planFilePath)
    ((s = AP.jsxs(w, {
      dimColor: true,
      children: ["Plan file: ", request.planFilePath],
    })),
      (t[2] = request.planFilePath),
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
function PlanApprovalResponseDisplay(t0) {
  let t = qCo.c(12),
    { response: response, senderName: r } = t0;
  if (response.approved) {
    let l = `\u2713 Plan Approved by ${r}`,
      c;
    if (t[0] !== response.feedback)
      ((c =
        response.feedback &&
        AP.jsx(Q4, {
          children: AP.jsxs(w, {
            children: ["Feedback: ", response.feedback],
          }),
        })),
        (t[0] = response.feedback),
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
  if (t[6] !== response.feedback)
    ((s =
      response.feedback &&
      AP.jsx(Q4, {
        children: AP.jsxs(w, {
          children: ["Feedback: ", response.feedback],
        }),
      })),
      (t[6] = response.feedback),
      (t[7] = s));
  else s = t[7];
  let i;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((i = AP.jsx(w, {
      dimColor: true,
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
    return AP.jsx(PlanApprovalRequestDisplay, {
      request: n,
    });
  let r = Qv(v9t(), e);
  if (r)
    return AP.jsx(PlanApprovalResponseDisplay, {
      response: r,
      senderName: t,
    });
  return null;
}
function getPlanApprovalSummary(content) {
  let t = Qv(T9t(), content);
  if (t) return `[Plan Approval Request from ${t.from}]`;
  let response = Qv(v9t(), content);
  if (response)
    if (response.approved)
      return response.feedback
        ? `[Plan Approved] ${response.feedback}`
        : "[Plan Approved] You can now proceed with implementation";
    else return `[Plan Rejected] ${response.feedback || "Please revise your plan"}`;
  return null;
}
function getIdleNotificationSummary(msg) {
  let parts = ["Agent idle"];
  if (msg.completedTaskId) {
    let n = msg.completedStatus || "completed";
    parts.push(`Task ${msg.completedTaskId} ${n}`);
  }
  if (msg.summary) parts.push(`Last DM: ${msg.summary}`);
  return parts.join(" \xB7 ");
}
function gil(e) {
  let t = getPlanApprovalSummary(e);
  if (t) return t;
  let n = pil(e);
  if (n) return n;
  let r = Qv(m8e(), e);
  if (r) return getIdleNotificationSummary(r);
  let o = mil(e);
  if (o) return o;
  let s = Qv(h8e(), e);
  if (s) return s.message;
  return e;
}
var qCo, AP;
