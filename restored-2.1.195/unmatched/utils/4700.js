// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BNo
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.004  score=0.1318  fileCov=0.0041
// note: nearest: src/screens/REPL.tsx (0.004); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BNo] deps: Ye
LNl = R(lt(), 1), NNo = R(se(), 1);
function FNo(e) {
  let t = e.slice(0, UNo).join(", ");
  return e.length > UNo ? `${t}, +${e.length - UNo} more` : t;
}
function jNo(e) {
  return e >= 1000 ? `${Math.round(e / 1000)}k` : String(e);
}
function GNo(e) {
  let t = Math.round(e * 1000) / 10;
  return t === 0 && e > 0 ? "<0.1%" : `${t}%`;
}
function PNl() {
  let e = DNl.c(57),
    t = Ht(M$f);
  if (!t) return null;
  let n = t.cappedSkills.length,
    r = t.budgetMode !== "fits";
  if (n === 0 && !r) return null;
  let o = t.budgetTruncatedSkills.length,
    s,
    i,
    a,
    l,
    c,
    u,
    d,
    p,
    f,
    m,
    g;
  if (e[0] !== o || e[1] !== n || e[2] !== r || e[3] !== t.budget || e[4] !== t.budgetFromEnv || e[5] !== t.budgetMode || e[6] !== t.budgetTruncatedSkills || e[7] !== t.bytesPerToken || e[8] !== t.cappedSkills || e[9] !== t.maxDescLen || e[10] !== t.rawTotalChars || e[11] !== t.totalChars) {
    let _ = Math.round(t.rawTotalChars / t.bytesPerToken);
    if (e[23] !== o || e[24] !== n || e[25] !== r || e[26] !== t.budget || e[27] !== t.budgetFromEnv || e[28] !== t.budgetMode || e[29] !== t.budgetTruncatedSkills || e[30] !== t.cappedSkills || e[31] !== t.maxDescLen || e[32] !== t.totalChars) {
      let S = Eoo(),
        A = t.budgetFromEnv ? `${jNo(t.totalChars)}/${jNo(t.budget)} chars` : `${GNo(t.totalChars / t.budget * S)}/${GNo(S)} of context`;
      if (a = U, f = "column", m = 1, e[40] === Symbol.for("react.memo_cache_sentinel")) g = QF.jsx(nx, {
        title: "Skills",
        status: "warning"
      }), e[40] = g;else g = e[40];
      i = hs, d = "tree", p = r ? QF.jsxs(hs.Group, {
        children: [QF.jsx(hs.Node, {
          color: "warning",
          children: `${o} skill ${bn(o, "description")} will be ${t.budgetMode === "truncate" ? `shortened to ~${t.maxDescLen} chars` : t.budgetMode === "priority" ? "dropped (full descriptions kept for most-used skills)" : "dropped entirely"} (${A}): ${FNo(t.budgetTruncatedSkills)}`
        }), QF.jsxs(hs.Node, {
          dimColor: true,
          children: ["run ", QF.jsx(w, {
            color: "suggestion",
            children: "/skills"
          }), " to disable some, or raise ", QF.jsx(w, {
            color: "suggestion",
            children: "skillListingBudgetFraction"
          }), " ", "(currently ", GNo(S), ") in settings.json"]
        }), n > 0 && QF.jsx(hs.Node, {
          dimColor: true,
          children: `${n} ${bn(n, "description exceeds", "descriptions exceed")} the per-entry cap: ${FNo(t.cappedSkills)}`
        })]
      }) : QF.jsxs(hs.Group, {
        children: [QF.jsx(hs.Node, {
          color: "warning",
          children: `${n} skill ${bn(n, "description exceeds", "descriptions exceed")} the per-entry cap and will be shortened: ${FNo(t.cappedSkills)}`
        }), QF.jsxs(hs.Node, {
          dimColor: true,
          children: ["raise ", QF.jsx(w, {
            color: "suggestion",
            children: "skillListingMaxDescChars"
          }), " ", "(currently ", WWe(), ") in settings.json"]
        })]
      }), e[23] = o, e[24] = n, e[25] = r, e[26] = t.budget, e[27] = t.budgetFromEnv, e[28] = t.budgetMode, e[29] = t.budgetTruncatedSkills, e[30] = t.cappedSkills, e[31] = t.maxDescLen, e[32] = t.totalChars, e[33] = i, e[34] = a, e[35] = d, e[36] = p, e[37] = f, e[38] = m, e[39] = g;
    } else i = e[33], a = e[34], d = e[35], p = e[36], f = e[37], m = e[38], g = e[39];
    s = hs.Node, l = true, c = "Opting in would cost ~", u = jNo(_), e[0] = o, e[1] = n, e[2] = r, e[3] = t.budget, e[4] = t.budgetFromEnv, e[5] = t.budgetMode, e[6] = t.budgetTruncatedSkills, e[7] = t.bytesPerToken, e[8] = t.cappedSkills, e[9] = t.maxDescLen, e[10] = t.rawTotalChars, e[11] = t.totalChars, e[12] = s, e[13] = i, e[14] = a, e[15] = l, e[16] = c, e[17] = u, e[18] = d, e[19] = p, e[20] = f, e[21] = m, e[22] = g;
  } else s = e[12], i = e[13], a = e[14], l = e[15], c = e[16], u = e[17], d = e[18], p = e[19], f = e[20], m = e[21], g = e[22];
  let h;
  if (e[41] !== s || e[42] !== l || e[43] !== c || e[44] !== u) h = QF.jsxs(s, {
    dimColor: l,
    children: [c, u, " tokens for skills every session and uses rate limits faster"]
  }), e[41] = s, e[42] = l, e[43] = c, e[44] = u, e[45] = h;else h = e[45];
  let y;
  if (e[46] !== i || e[47] !== d || e[48] !== p || e[49] !== h) y = QF.jsxs(i, {
    variant: d,
    children: [p, h]
  }), e[46] = i, e[47] = d, e[48] = p, e[49] = h, e[50] = y;else y = e[50];
  let b;
  if (e[51] !== a || e[52] !== f || e[53] !== m || e[54] !== g || e[55] !== y) b = QF.jsxs(a, {
    flexDirection: f,
    marginTop: m,
    children: [g, y]
  }), e[51] = a, e[52] = f, e[53] = m, e[54] = g, e[55] = y, e[56] = b;else b = e[56];
  return b;
}
function M$f(e) {
  return e.skillTruncationStats;
}
var DNl,
  QF,
  UNo = 3;