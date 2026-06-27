// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Amc
// matched 2.1.88 source: src/components/IdleReturnDialog.tsx
// class=modified  jaccard=0.1424  score=0.211  fileCov=0.3047
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Amc] deps: Ye, mE, vi
((Smc = R(lt(), 1)), (n7e = R(se(), 1)));
function Tmc(e, t) {
  if (!at("tengu_gleaming_fair", false)) return null;
  if (Dt().resumeReturnDismissed) return null;
  let n = LK(process.env.CLAUDE_CODE_RESUME_THRESHOLD_MINUTES, 70),
    r = LK(process.env.CLAUDE_CODE_RESUME_TOKEN_THRESHOLD, 100000 /* 1e5 */),
    o = Date.now() - 60000,
    s = e.findLast(
      (l) => (l.type === "user" || l.type === "assistant") && Date.parse(l.timestamp) < o,
    )?.timestamp;
  if (!s) return null;
  let i = (Date.now() - Date.parse(s)) / 60000;
  if (i < n) return null;
  let a = t(e);
  if (a < r) return null;
  return {
    sessionAgeMinutes: i,
    estimatedTokens: a,
  };
}
function vmc(e) {
  let t = Hmc.c(16),
    { sessionAgeMinutes: n, estimatedTokens: r, onDone: o } = e,
    s;
  if (t[0] !== n) ((s = Rcm(n)), (t[0] = n), (t[1] = s));
  else s = t[1];
  let i = s,
    a;
  if (t[2] !== r) ((a = gl(r)), (t[2] = r), (t[3] = a));
  else a = t[3];
  let c = `This session is ${i} old and ${a} tokens.`,
    u;
  if (t[4] !== o) ((u = () => o("dismiss")), (t[4] = o), (t[5] = u));
  else u = t[5];
  let d;
  if (t[6] === Symbol.for("react.memo_cache_sentinel"))
    ((d = STt.jsx(U, {
      flexDirection: "column",
      children: STt.jsx(w, {
        children:
          "Resuming the full session will consume a substantial portion of your usage limits. We recommend resuming from a summary.",
      }),
    })),
      (t[6] = d));
  else d = t[6];
  let p;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((p = {
      value: "compact",
      label: "Resume from summary (recommended)",
    }),
      (t[7] = p));
  else p = t[7];
  let f;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((f = {
      value: "continue",
      label: "Resume full session as-is",
    }),
      (t[8] = f));
  else f = t[8];
  let m;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((m = [
      p,
      f,
      {
        value: "never",
        label: "Don't ask me again",
      },
    ]),
      (t[9] = m));
  else m = t[9];
  let g;
  if (t[10] !== o)
    ((g = STt.jsx(Sr, {
      options: m,
      onChange: (y) => o(y),
    })),
      (t[10] = o),
      (t[11] = g));
  else g = t[11];
  let h;
  if (t[12] !== c || t[13] !== u || t[14] !== g)
    ((h = STt.jsxs(zn, {
      title: c,
      onCancel: u,
      children: [d, g],
    })),
      (t[12] = c),
      (t[13] = u),
      (t[14] = g),
      (t[15] = h));
  else h = t[15];
  return h;
}
function Rcm(e) {
  if (e < 60) return `${Math.floor(e)}m`;
  let t = Math.floor(e / 60);
  if (t < 24) {
    let o = Math.floor(e % 60);
    return o === 0 ? `${t}h` : `${t}h ${o}m`;
  }
  let n = Math.floor(t / 24),
    r = t % 24;
  return r === 0 ? `${n}d` : `${n}d ${r}h`;
}
var Hmc, STt;
