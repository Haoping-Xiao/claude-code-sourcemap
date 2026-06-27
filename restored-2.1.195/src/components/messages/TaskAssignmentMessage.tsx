// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WCo
// matched 2.1.88 source: src/components/messages/TaskAssignmentMessage.tsx
// class=modified  jaccard=0.2403  score=0.4111  fileCov=0.3664
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module WCo] deps: Ye, YI, E8e, R6
((GCo = R(lt(), 1)), (aQ = R(se(), 1)));
function Dof(e) {
  let t = fil.c(8),
    { assignment: n } = e,
    r = `Task #${n.taskId} assigned by ${n.assignedBy}`,
    o;
  if (t[0] !== n.subject)
    ((o = a6e.jsx(w, {
      bold: true,
      children: n.subject,
    })),
      (t[0] = n.subject),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== n.description)
    ((s =
      n.description &&
      a6e.jsx(w, {
        dimColor: true,
        children: n.description,
      })),
      (t[2] = n.description),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== r || t[5] !== o || t[6] !== s)
    ((i = a6e.jsx(U, {
      flexDirection: "column",
      marginY: 1,
      children: a6e.jsxs(cA, {
        color: "cyan_FOR_SUBAGENTS_ONLY",
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
function Nzn(e) {
  let t = O8n(e);
  if (t)
    return a6e.jsx(Dof, {
      assignment: t,
    });
  return null;
}
function mil(e) {
  let t = O8n(e);
  if (t) return `[Task Assigned] #${t.taskId} - ${t.subject}`;
  return null;
}
var fil, a6e;
