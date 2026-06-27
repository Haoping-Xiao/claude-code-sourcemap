// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A$c
// matched 2.1.88 source: src/components/ConsoleOAuthFlow.tsx
// class=new  jaccard=0.0325  score=0.1816  fileCov=0.0381
// note: nearest: src/components/ConsoleOAuthFlow.tsx (0.0325); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var A$c = E(() => {
  kt();
  ft();
  O0();
  Ye();
  ps();
  dn();
  Kv();
  er();
  Lo();
  ys();
  Yp();
  rlt();
  sr();
  Csr();
  Bs();
  Fy();
  Ko();
  gm();
  X0();
  b$c();
  S$c = R(lt(), 1), g7o = require("os"), cmr = R(rt(), 1), AE = R(se(), 1);
});
var v$c = {};
_t(v$c, {
  ProTrialStartScreen: () => ProTrialStartScreen
});
function ProTrialStartScreen(e) {
  let t = H$c.c(9),
    {
      onDone: n
    } = e,
    [r, o] = T$c.useState("idle"),
    s;
  if (t[0] !== n || t[1] !== r) s = {
    "confirm:yes": () => {
      if (r === "starting") return;
      if (r === "error") {
        n();
        return;
      }
      o("starting"), G("tengu_pro_trial_start_pressed", {}), WFo().then(() => {
        G("tengu_pro_trial_start_ok", {}), n();
      }).catch(p => {
        if (R_(p)) T(`Failed to start pro trial: ${be(p)}`, {
          level: "error"
        });else ke(p);
        G("tengu_pro_trial_start_error", {}), o("error");
      });
    }
  }, t[0] = n, t[1] = r, t[2] = s;else s = t[2];
  let i;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) i = {
    context: "Confirmation"
  }, t[3] = i;else i = t[3];
  No(s, i);
  let a;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) a = GFo(), t[4] = a;else a = t[4];
  let l = a,
    c;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) c = $Z.jsx(uNe, {}), t[5] = c;else c = t[5];
  let u;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) u = $Z.jsx(w, {
    children: l !== null ? `Your Pro plan includes ${l} days of Claude Code.` : "Your Pro plan includes a Claude Code trial."
  }), t[6] = u;else u = t[6];
  let d;
  if (t[7] !== r) d = $Z.jsxs(U, {
    flexDirection: "column",
    paddingX: 1,
    gap: 1,
    children: [c, u, r === "starting" ? $Z.jsxs(U, {
      children: [$Z.jsx(Vu, {}), $Z.jsx(w, {
        children: " Starting your trial\u2026"
      })]
    }) : r === "error" ? $Z.jsxs(w, {
      color: "error",
      children: ["Couldn't start your trial. Press ", $Z.jsx(w, {
        bold: true,
        children: "Enter"
      }), " to continue."]
    }) : $Z.jsxs(w, {
      color: "permission",
      children: ["Press ", $Z.jsx(w, {
        bold: true,
        children: "Enter"
      }), " to start your trial"]
    })]
  }), t[7] = r, t[8] = d;else d = t[8];
  return d;
}
var H$c, T$c, $Z;