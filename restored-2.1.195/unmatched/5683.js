// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U0c
// matched 2.1.88 source: src/components/Spinner.tsx
// class=new  jaccard=0.0534  score=0.4234  fileCov=0.0576
// note: nearest: src/components/Spinner.tsx (0.0534); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var U0c = E(() => {
  uo();
  avt = R(rt(), 1);
});
function j0c() {
  let e = uYo.c(22),
    t = Ht(Pvm),
    {
      columns: n
    } = br(),
    [r, o] = F0c.useState(Dvm),
    s;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) s = () => o(Date.now()), e[0] = s;else s = e[0];
  if (Gc(s, 1000), t === null) return null;
  let i = t.queuedCount,
    a;
  if (e[1] !== t.sessionMode) a = Nbc(t.sessionMode), e[1] = t.sessionMode, e[2] = a;else a = e[2];
  let l;
  if (e[3] !== a) l = FH.jsxs(w, {
    bold: !0,
    children: [a, "\u2026"]
  }), e[3] = a, e[4] = l;else l = e[4];
  let c;
  if (e[5] !== n || e[6] !== r || e[7] !== t.sessionMode || e[8] !== t.steps) {
    let f;
    if (e[10] !== n || e[11] !== r || e[12] !== t.sessionMode) f = m => m.status === "skipped" ? null : FH.jsx(Mvm, {
      step: m,
      sessionMode: t.sessionMode,
      now: r,
      columns: n
    }, m.id), e[10] = n, e[11] = r, e[12] = t.sessionMode, e[13] = f;else f = e[13];
    c = t.steps.map(f), e[5] = n, e[6] = r, e[7] = t.sessionMode, e[8] = t.steps, e[9] = c;
  } else c = e[9];
  let u;
  if (e[14] !== i) u = i > 0 ? `${i} ${bn(i, "message")} queued \xB7 sends once the session is ready` : "You can start typing \u2014 messages send once the session is ready", e[14] = i, e[15] = u;else u = e[15];
  let d;
  if (e[16] !== u) d = FH.jsx(U, {
    marginTop: 1,
    children: FH.jsx(w, {
      dimColor: !0,
      children: u
    })
  }), e[16] = u, e[17] = d;else d = e[17];
  let p;
  if (e[18] !== l || e[19] !== c || e[20] !== d) p = FH.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [l, c, d]
  }), e[18] = l, e[19] = c, e[20] = d, e[21] = p;else p = e[21];
  return p;
}
function Dvm() {
  return Date.now();
}
function Pvm(e) {
  return e.remoteBootstrap;
}
function Mvm(e) {
  let t = uYo.c(37),
    {
      step: n,
      sessionMode: r,
      now: o,
      columns: s
    } = e,
    i;
  if (t[0] !== r || t[1] !== n) i = Obc(n, r), t[0] = r, t[1] = n, t[2] = i;else i = t[2];
  let a = i;
  switch (n.status) {
    case "completed":
      {
        let l;
        if (t[3] !== n.completedAt || t[4] !== n.startedAt) l = n.startedAt !== void 0 && n.completedAt !== void 0 ? ` (${ozo(n.completedAt - n.startedAt)})` : "", t[3] = n.completedAt, t[4] = n.startedAt, t[5] = l;else l = t[5];
        let c = l,
          u;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) u = FH.jsx(w, {
          color: "success",
          children: `  ${nt.tick} `
        }), t[6] = u;else u = t[6];
        let d;
        if (t[7] !== c) d = FH.jsx(w, {
          dimColor: !0,
          children: c
        }), t[7] = c, t[8] = d;else d = t[8];
        let p;
        if (t[9] !== a || t[10] !== d) p = FH.jsxs(U, {
          children: [u, FH.jsxs(w, {
            children: [a, d]
          })]
        }), t[9] = a, t[10] = d, t[11] = p;else p = t[11];
        return p;
      }
    case "running":
      {
        let l = n.startedAt !== void 0 ? Math.max(0, o - n.startedAt) : 0,
          c;
        if (t[12] !== l) c = l >= 5000 ? ` (${Math.round(l / 1000)}s)` : "", t[12] = l, t[13] = c;else c = t[13];
        let u = c,
          d;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) d = FH.jsx(U, {
          width: 4,
          paddingLeft: 2,
          children: FH.jsx(Vu, {})
        }), t[14] = d;else d = t[14];
        let p;
        if (t[15] !== u) p = FH.jsx(w, {
          dimColor: !0,
          children: u
        }), t[15] = u, t[16] = p;else p = t[16];
        let f;
        if (t[17] !== a || t[18] !== p) f = FH.jsxs(U, {
          children: [d, FH.jsxs(w, {
            children: [a, "\u2026", p]
          })]
        }), t[17] = a, t[18] = p, t[19] = f;else f = t[19];
        let m;
        if (t[20] !== s || t[21] !== n.detail) m = n.detail !== void 0 && n.detail !== "" && FH.jsx(U, {
          paddingLeft: 6,
          children: FH.jsx(w, {
            dimColor: !0,
            children: Rs(n.detail, Math.max(20, s - 8))
          })
        }), t[20] = s, t[21] = n.detail, t[22] = m;else m = t[22];
        let g;
        if (t[23] !== f || t[24] !== m) g = FH.jsxs(U, {
          flexDirection: "column",
          children: [f, m]
        }), t[23] = f, t[24] = m, t[25] = g;else g = t[25];
        return g;
      }
    case "failed":
      {
        let l;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) l = FH.jsx(w, {
          color: "error",
          children: `  ${nt.cross} `
        }), t[26] = l;else l = t[26];
        let c;
        if (t[27] !== a) c = FH.jsxs(U, {
          children: [l, FH.jsx(w, {
            children: a
          })]
        }), t[27] = a, t[28] = c;else c = t[28];
        let u;
        if (t[29] !== s || t[30] !== n.error) u = n.error !== void 0 && n.error !== "" && FH.jsx(U, {
          paddingLeft: 6,
          children: FH.jsx(w, {
            color: "error",
            children: Rs(n.error, Math.max(20, s - 8))
          })
        }), t[29] = s, t[30] = n.error, t[31] = u;else u = t[31];
        let d;
        if (t[32] !== c || t[33] !== u) d = FH.jsxs(U, {
          flexDirection: "column",
          children: [c, u]
        }), t[32] = c, t[33] = u, t[34] = d;else d = t[34];
        return d;
      }
    case "pending":
      {
        let l = `  ${nt.circle} ${a}`,
          c;
        if (t[35] !== l) c = FH.jsx(U, {
          children: FH.jsx(w, {
            dimColor: !0,
            children: l
          })
        }), t[35] = l, t[36] = c;else c = t[36];
        return c;
      }
    case "skipped":
      return null;
  }
}
var uYo, F0c, FH;