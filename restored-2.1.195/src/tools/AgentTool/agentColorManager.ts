// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module IL
// matched 2.1.88 source: src/tools/AgentTool/agentColorManager.ts
// class=modified  jaccard=0.494  score=0.5415  fileCov=0.8491
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var IL = E(() => {
  ft();
  ((Ky = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"]),
    (C$ = {
      red: "red_FOR_SUBAGENTS_ONLY",
      blue: "blue_FOR_SUBAGENTS_ONLY",
      green: "green_FOR_SUBAGENTS_ONLY",
      yellow: "yellow_FOR_SUBAGENTS_ONLY",
      purple: "purple_FOR_SUBAGENTS_ONLY",
      orange: "orange_FOR_SUBAGENTS_ONLY",
      pink: "pink_FOR_SUBAGENTS_ONLY",
      cyan: "cyan_FOR_SUBAGENTS_ONLY",
    }));
});
function MVt(e, t) {
  let n = parseInt(e.id, 10),
    r = parseInt(t.id, 10);
  if (!isNaN(n) && !isNaN(r)) return n - r;
  return e.id.localeCompare(t.id);
}
function F9n({ tasks: e, isStandalone: t = !1 }) {
  let n = Ht((I) => I.teamContext),
    r = Ht((I) => I.tasks),
    [, o] = j9e.useState(0),
    { rows: s, columns: i } = br(),
    a = ks(),
    l = j9e.useRef(new Map()),
    c = j9e.useRef(null);
  if (c.current === null)
    c.current = new Set(e.filter((I) => I.status === "completed").map((I) => I.id));
  let u = s <= 10 ? 0 : Math.min(5, Math.max(3, s - 14)),
    d = new Set(e.filter((I) => I.status === "completed").map((I) => I.id)),
    p = Date.now();
  for (let I of d) if (!c.current.has(I)) l.current.set(I, p);
  for (let I of l.current.keys()) if (!d.has(I)) l.current.delete(I);
  if (
    ((c.current = d),
    j9e.useEffect(() => {
      if (l.current.size === 0) return;
      let I = Date.now(),
        k = 1 / 0;
      for (let D of l.current.values()) {
        let P = D + tJa;
        if (P > I && P < k) k = P;
      }
      if (k === 1 / 0) return;
      return a.setTimeout(() => o((D) => D + 1), k - I);
    }, [e, a]),
    !EH())
  )
    return null;
  if (e.length === 0) return null;
  let f = {};
  if (el() && n?.teammates) {
    for (let I of Object.values(n.teammates))
      if (I.color) {
        let k = C$[I.color];
        if (k) f[I.name] = k;
      }
  }
  let m = {},
    g = new Set();
  if (el()) {
    for (let I of Object.values(r))
      if (uE(I) && I.status === "running") {
        (g.add(I.identity.agentName), g.add(I.identity.agentId));
        let k = I.progress?.recentActivities,
          D = (k && j9n(k)) ?? I.progress?.lastActivity?.activityDescription;
        if (D) ((m[I.identity.agentName] = D), (m[I.identity.agentId] = D));
      }
  }
  let h = On(e, (I) => I.status === "completed"),
    y = On(e, (I) => I.status === "pending"),
    b = e.length - h - y,
    _ = new Set(e.filter((I) => I.status !== "completed").map((I) => I.id)),
    S = e.length > u,
    A,
    v;
  if (S) {
    let I = [],
      k = [];
    for (let L of e.filter((M) => M.status === "completed")) {
      let M = l.current.get(L.id);
      if (M && p - M < tJa) I.push(L);
      else k.push(L);
    }
    (I.sort(MVt), k.sort(MVt));
    let D = e.filter((L) => L.status === "in_progress").sort(MVt),
      P = e
        .filter((L) => L.status === "pending")
        .sort((L, M) => {
          let N = L.blockedBy.some(($) => _.has($)),
            B = M.blockedBy.some(($) => _.has($));
          if (N !== B) return N ? 1 : -1;
          return MVt(L, M);
        }),
      O = [...I, ...D, ...P, ...k];
    ((A = O.slice(0, u)), (v = O.slice(u)));
  } else ((A = [...e].sort(MVt)), (v = []));
  let C = "";
  if (v.length > 0) {
    let I = [],
      k = On(v, (O) => O.status === "pending"),
      D = On(v, (O) => O.status === "in_progress"),
      P = On(v, (O) => O.status === "completed");
    if (D > 0) I.push(`${D} in progress`);
    if (k > 0) I.push(`${k} pending`);
    if (P > 0) I.push(`${P} completed`);
    C = ` \u2026 +${I.join(", ")}`;
  }
  let x = RT.jsxs(RT.Fragment, {
    children: [
      A.map((I) =>
        RT.jsx(
          mXp,
          {
            task: I,
            ownerColor: I.owner ? f[I.owner] : void 0,
            openBlockers: I.blockedBy.filter((k) => _.has(k)),
            activity: I.owner ? m[I.owner] : void 0,
            ownerActive: I.owner ? g.has(I.owner) : !1,
            columns: i,
          },
          I.id,
        ),
      ),
      u > 0 &&
        C &&
        RT.jsx(w, {
          dimColor: !0,
          children: C,
        }),
    ],
  });
  if (t)
    return RT.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      marginLeft: 2,
      children: [
        RT.jsx(U, {
          children: RT.jsxs(w, {
            dimColor: !0,
            children: [
              RT.jsx(w, {
                bold: !0,
                children: e.length,
              }),
              " tasks (",
              RT.jsx(w, {
                bold: !0,
                children: h,
              }),
              " done, ",
              b > 0 &&
                RT.jsxs(RT.Fragment, {
                  children: [
                    RT.jsx(w, {
                      bold: !0,
                      children: b,
                    }),
                    " in progress, ",
                  ],
                }),
              RT.jsx(w, {
                bold: !0,
                children: y,
              }),
              " open)",
            ],
          }),
        }),
        x,
      ],
    });
  return RT.jsx(U, {
    flexDirection: "column",
    children: x,
  });
}
function fXp(e) {
  switch (e) {
    case "completed":
      return {
        icon: nt.tick,
        color: "success",
      };
    case "in_progress":
      return {
        icon: nt.squareSmallFilled,
        color: "claude",
      };
    case "pending":
      return {
        icon: nt.squareSmall,
        color: void 0,
      };
  }
}
function mXp(e) {
  let t = nJa.c(37),
    { task: n, ownerColor: r, openBlockers: o, activity: s, ownerActive: i, columns: a } = e,
    l = n.status === "completed",
    c = n.status === "in_progress",
    u = o.length > 0,
    d;
  if (t[0] !== n.status) ((d = fXp(n.status)), (t[0] = n.status), (t[1] = d));
  else d = t[1];
  let { icon: p, color: f } = d,
    m = c && !u && s,
    g = a >= 60 && n.owner && i,
    h;
  if (t[2] !== g || t[3] !== n.owner)
    ((h = g ? rn(` (@${n.owner})`) : 0), (t[2] = g), (t[3] = n.owner), (t[4] = h));
  else h = t[4];
  let y = h,
    b = Math.max(15, a - 15 - y),
    _;
  if (t[5] !== b || t[6] !== n.subject)
    ((_ = Rs(n.subject, b)), (t[5] = b), (t[6] = n.subject), (t[7] = _));
  else _ = t[7];
  let S = _,
    A = Math.max(15, a - 15),
    v;
  if (t[8] !== s || t[9] !== A) ((v = s ? Rs(s, A) : void 0), (t[8] = s), (t[9] = A), (t[10] = v));
  else v = t[10];
  let C = v,
    x;
  if (t[11] !== f || t[12] !== p)
    ((x = RT.jsxs(w, {
      color: f,
      children: [p, " "],
    })),
      (t[11] = f),
      (t[12] = p),
      (t[13] = x));
  else x = t[13];
  let I = l || u,
    k;
  if (t[14] !== S || t[15] !== l || t[16] !== c || t[17] !== I)
    ((k = RT.jsx(w, {
      bold: c,
      strikethrough: l,
      dimColor: I,
      children: S,
    })),
      (t[14] = S),
      (t[15] = l),
      (t[16] = c),
      (t[17] = I),
      (t[18] = k));
  else k = t[18];
  let D;
  if (t[19] !== r || t[20] !== g || t[21] !== n.owner)
    ((D =
      g &&
      RT.jsxs(w, {
        dimColor: !0,
        children: [
          " (",
          r
            ? RT.jsxs(w, {
                color: r,
                children: ["@", n.owner],
              })
            : `@${n.owner}`,
          ")",
        ],
      })),
      (t[19] = r),
      (t[20] = g),
      (t[21] = n.owner),
      (t[22] = D));
  else D = t[22];
  let P;
  if (t[23] !== u || t[24] !== o)
    ((P =
      u &&
      RT.jsxs(w, {
        dimColor: !0,
        children: [" ", nt.pointerSmall, " blocked by", " ", [...o].sort(hXp).map(gXp).join(", ")],
      })),
      (t[23] = u),
      (t[24] = o),
      (t[25] = P));
  else P = t[25];
  let O;
  if (t[26] !== x || t[27] !== k || t[28] !== D || t[29] !== P)
    ((O = RT.jsxs(U, {
      children: [x, k, D, P],
    })),
      (t[26] = x),
      (t[27] = k),
      (t[28] = D),
      (t[29] = P),
      (t[30] = O));
  else O = t[30];
  let L;
  if (t[31] !== C || t[32] !== m)
    ((L =
      m &&
      C &&
      RT.jsx(U, {
        children: RT.jsxs(w, {
          dimColor: !0,
          children: ["  ", C, nt.ellipsis],
        }),
      })),
      (t[31] = C),
      (t[32] = m),
      (t[33] = L));
  else L = t[33];
  let M;
  if (t[34] !== O || t[35] !== L)
    ((M = RT.jsxs(U, {
      flexDirection: "column",
      children: [O, L],
    })),
      (t[34] = O),
      (t[35] = L),
      (t[36] = M));
  else M = t[36];
  return M;
}
function gXp(e) {
  return `#${e}`;
}
function hXp(e, t) {
  return parseInt(e, 10) - parseInt(t, 10);
}
var nJa,
  j9e,
  RT,
  tJa = 30000;
