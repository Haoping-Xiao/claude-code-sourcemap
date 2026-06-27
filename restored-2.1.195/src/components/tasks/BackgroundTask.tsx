// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module h8l
// matched 2.1.88 source: src/components/tasks/BackgroundTask.tsx
// class=modified  jaccard=0.4402  score=0.6269  fileCov=0.5964
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module h8l] deps: Ye
((cjo = R(lt(), 1)), (iYe = R(se(), 1)));
function BackgroundTask(t0) {
  let t = y8l.c(107),
    { task: n, maxActivityWidth: r } = t0,
    o = r ?? 40;
  switch (n.type) {
    case "local_bash": {
      let s = n.kind === "monitor" ? n.description : n.command,
        i;
      if (t[0] !== o || t[1] !== s) ((i = $a(s, o, true)), (t[0] = o), (t[1] = s), (t[2] = i));
      else i = t[2];
      let a;
      if (t[3] !== n)
        ((a = jT.jsx(g8l, {
          shell: n,
        })),
          (t[3] = n),
          (t[4] = a));
      else a = t[4];
      let l;
      if (t[5] !== i || t[6] !== a)
        ((l = jT.jsxs(w, {
          children: [i, " ", a],
        })),
          (t[5] = i),
          (t[6] = a),
          (t[7] = l));
      else l = t[7];
      return l;
    }
    case "remote_agent": {
      if (n.isRemoteReview) {
        let p;
        if (t[8] !== n)
          ((p = jT.jsx(w, {
            children: jT.jsx(pJt, {
              session: n,
            }),
          })),
            (t[8] = n),
            (t[9] = p));
        else p = t[9];
        return p;
      }
      let i = n.status === "running" || n.status === "pending" ? mv : BO,
        a;
      if (t[10] !== i)
        ((a = jT.jsxs(w, {
          dimColor: true,
          children: [i, " "],
        })),
          (t[10] = i),
          (t[11] = a));
      else a = t[11];
      let l;
      if (t[12] !== o || t[13] !== n.title)
        ((l = $a(n.title, o, true)), (t[12] = o), (t[13] = n.title), (t[14] = l));
      else l = t[14];
      let c;
      if (t[15] === Symbol.for("react.memo_cache_sentinel"))
        ((c = jT.jsx(w, {
          dimColor: true,
          children: " \xB7 ",
        })),
          (t[15] = c));
      else c = t[15];
      let u;
      if (t[16] !== n)
        ((u = jT.jsx(pJt, {
          session: n,
        })),
          (t[16] = n),
          (t[17] = u));
      else u = t[17];
      let d;
      if (t[18] !== a || t[19] !== l || t[20] !== u)
        ((d = jT.jsxs(w, {
          children: [a, l, c, u],
        })),
          (t[18] = a),
          (t[19] = l),
          (t[20] = u),
          (t[21] = d));
      else d = t[21];
      return d;
    }
    case "local_agent": {
      let s;
      if (t[22] !== o || t[23] !== n.description)
        ((s = $a(n.description, o, true)), (t[22] = o), (t[23] = n.description), (t[24] = s));
      else s = t[24];
      let i = n.status === "completed" ? "done" : void 0,
        a = n.status === "completed" && !n.notified ? ", unread" : void 0,
        l;
      if (t[25] !== i || t[26] !== a || t[27] !== n.status)
        ((l = jT.jsx(XHe, {
          status: n.status,
          label: i,
          suffix: a,
        })),
          (t[25] = i),
          (t[26] = a),
          (t[27] = n.status),
          (t[28] = l));
      else l = t[28];
      let c;
      if (t[29] !== s || t[30] !== l)
        ((c = jT.jsxs(w, {
          children: [s, " ", l],
        })),
          (t[29] = s),
          (t[30] = l),
          (t[31] = c));
      else c = t[31];
      return c;
    }
    case "in_process_teammate": {
      let s, i, a, l, c, u;
      if (t[32] !== o || t[33] !== n) {
        let f = DAt(n);
        i = w;
        let m;
        if (t[40] !== n.identity.color)
          ((m = V6(n.identity.color)), (t[40] = n.identity.color), (t[41] = m));
        else m = t[41];
        if (t[42] !== m || t[43] !== n.identity.agentName)
          ((u = jT.jsxs(w, {
            color: m,
            children: ["@", n.identity.agentName],
          })),
            (t[42] = m),
            (t[43] = n.identity.agentName),
            (t[44] = u));
        else u = t[44];
        ((s = w),
          (a = true),
          (l = ": "),
          (c = $a(f, o, true)),
          (t[32] = o),
          (t[33] = n),
          (t[34] = s),
          (t[35] = i),
          (t[36] = a),
          (t[37] = l),
          (t[38] = c),
          (t[39] = u));
      } else ((s = t[34]), (i = t[35]), (a = t[36]), (l = t[37]), (c = t[38]), (u = t[39]));
      let d;
      if (t[45] !== s || t[46] !== a || t[47] !== l || t[48] !== c)
        ((d = jT.jsxs(s, {
          dimColor: a,
          children: [l, c],
        })),
          (t[45] = s),
          (t[46] = a),
          (t[47] = l),
          (t[48] = c),
          (t[49] = d));
      else d = t[49];
      let p;
      if (t[50] !== i || t[51] !== u || t[52] !== d)
        ((p = jT.jsxs(i, {
          children: [u, d],
        })),
          (t[50] = i),
          (t[51] = u),
          (t[52] = d),
          (t[53] = p));
      else p = t[53];
      return p;
    }
    case "local_workflow": {
      let s = n.workflowName ?? n.summary ?? n.description,
        i;
      if (t[54] !== o || t[55] !== s) ((i = $a(s, o, true)), (t[54] = o), (t[55] = s), (t[56] = i));
      else i = t[56];
      let a;
      if (t[57] !== n.agentCount || t[58] !== n.status)
        ((a =
          n.status === "running"
            ? `${n.agentCount} ${bn(n.agentCount, "agent")}`
            : n.status === "completed"
              ? "done"
              : void 0),
          (t[57] = n.agentCount),
          (t[58] = n.status),
          (t[59] = a));
      else a = t[59];
      let l = n.status === "completed" && !n.notified ? ", unread" : void 0,
        c;
      if (t[60] !== a || t[61] !== l || t[62] !== n.status)
        ((c = jT.jsx(XHe, {
          status: n.status,
          label: a,
          suffix: l,
        })),
          (t[60] = a),
          (t[61] = l),
          (t[62] = n.status),
          (t[63] = c));
      else c = t[63];
      let u;
      if (t[64] !== i || t[65] !== c)
        ((u = jT.jsxs(w, {
          children: [i, " ", c],
        })),
          (t[64] = i),
          (t[65] = c),
          (t[66] = u));
      else u = t[66];
      return u;
    }
    case "mcp_task": {
      let s;
      if (t[67] !== n.mcpTaskId)
        ((s = n.mcpTaskId.slice(0, 8)), (t[67] = n.mcpTaskId), (t[68] = s));
      else s = t[68];
      let i = s,
        a;
      if (t[69] === Symbol.for("react.memo_cache_sentinel"))
        ((a = jT.jsx(w, {
          dimColor: true,
          children: "\u23F3 ",
        })),
          (t[69] = a));
      else a = t[69];
      let l = `${n.serverName}/${n.toolName}`,
        c;
      if (t[70] !== o || t[71] !== l) ((c = $a(l, o, true)), (t[70] = o), (t[71] = l), (t[72] = c));
      else c = t[72];
      let u;
      if (t[73] !== i || t[74] !== n.mcpStatus)
        ((u = jT.jsxs(w, {
          dimColor: true,
          children: [" ", "\xB7 ", i, " \xB7 ", n.mcpStatus],
        })),
          (t[73] = i),
          (t[74] = n.mcpStatus),
          (t[75] = u));
      else u = t[75];
      let d;
      if (t[76] !== n.statusMessage)
        ((d = n.statusMessage
          ? jT.jsxs(w, {
              dimColor: true,
              children: [" ", n.statusMessage],
            })
          : null),
          (t[76] = n.statusMessage),
          (t[77] = d));
      else d = t[77];
      let p;
      if (t[78] !== c || t[79] !== u || t[80] !== d)
        ((p = jT.jsxs(w, {
          children: [a, c, u, d],
        })),
          (t[78] = c),
          (t[79] = u),
          (t[80] = d),
          (t[81] = p));
      else p = t[81];
      return p;
    }
    case "monitor_mcp":
    case "monitor_ws": {
      let s;
      if (t[82] !== o || t[83] !== n.description)
        ((s = $a(n.description, o, true)), (t[82] = o), (t[83] = n.description), (t[84] = s));
      else s = t[84];
      let i = n.status === "completed" ? "done" : void 0,
        a = n.status === "completed" && !n.notified ? ", unread" : void 0,
        l;
      if (t[85] !== i || t[86] !== a || t[87] !== n.status)
        ((l = jT.jsx(XHe, {
          status: n.status,
          label: i,
          suffix: a,
        })),
          (t[85] = i),
          (t[86] = a),
          (t[87] = n.status),
          (t[88] = l));
      else l = t[88];
      let c;
      if (t[89] !== s || t[90] !== l)
        ((c = jT.jsxs(w, {
          children: [s, " ", l],
        })),
          (t[89] = s),
          (t[90] = l),
          (t[91] = c));
      else c = t[91];
      return c;
    }
    case "dream": {
      let s = n.filesTouched.length,
        i;
      if (t[92] !== s || t[93] !== n.phase || t[94] !== n.sessionsReviewing)
        ((i =
          n.phase === "updating" && s > 0
            ? `${s} ${bn(s, "file")}`
            : `${n.sessionsReviewing} ${bn(n.sessionsReviewing, "session")}`),
          (t[92] = s),
          (t[93] = n.phase),
          (t[94] = n.sessionsReviewing),
          (t[95] = i));
      else i = t[95];
      let a = i,
        l;
      if (t[96] !== a || t[97] !== n.phase)
        ((l = jT.jsxs(w, {
          dimColor: true,
          children: ["\xB7 ", n.phase, " \xB7 ", a],
        })),
          (t[96] = a),
          (t[97] = n.phase),
          (t[98] = l));
      else l = t[98];
      let c = n.status === "completed" ? "done" : void 0,
        u = n.status === "completed" && !n.notified ? ", unread" : void 0,
        d;
      if (t[99] !== c || t[100] !== u || t[101] !== n.status)
        ((d = jT.jsx(XHe, {
          status: n.status,
          label: c,
          suffix: u,
        })),
          (t[99] = c),
          (t[100] = u),
          (t[101] = n.status),
          (t[102] = d));
      else d = t[102];
      let p;
      if (t[103] !== l || t[104] !== d || t[105] !== n.description)
        ((p = jT.jsxs(w, {
          children: [n.description, " ", l, " ", d],
        })),
          (t[103] = l),
          (t[104] = d),
          (t[105] = n.description),
          (t[106] = p));
      else p = t[106];
      return p;
    }
  }
}
var y8l, jT;
