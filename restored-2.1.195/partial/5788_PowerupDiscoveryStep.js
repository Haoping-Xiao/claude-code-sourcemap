// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module w$c
// matched 2.1.88 source: src/components/mcp/MCPAgentServerMenu.tsx
// class=partial  jaccard=0.0645  score=0.2431  fileCov=0.0806
// note: low-confidence suggestion: src/components/mcp/MCPAgentServerMenu.tsx; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var w$c = E(() => {
  Ye();
  ps();
  kt();
  hAt();
  je();
  At();
  vn();
  FZt();
  EC();
  H$c = R(lt(), 1), T$c = R(rt(), 1), $Z = R(se(), 1);
});
var x$c = {};
_t(x$c, {
  PowerupDiscoveryStep: () => PowerupDiscoveryStep
});
function PowerupDiscoveryStep(e) {
  let t = C$c.c(9),
    {
      onDone: n
    } = e,
    [r, o] = I$c.useState(!1);
  if (r) {
    let d;
    if (t[0] !== n) d = nK.jsx(Krr, {
      onExit: n
    }), t[0] = n, t[1] = d;else d = t[1];
    return d;
  }
  let s;
  if (t[2] !== n) s = function (p) {
    if (G("tengu_powerup_discovery_shown", {
      arm: $e("step"),
      action: $e(p)
    }), p === "launch") o(!0);else n();
  }, t[2] = n, t[3] = s;else s = t[3];
  let i = s,
    a;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) a = nK.jsx(uNe, {}), t[4] = a;else a = t[4];
  let l;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) l = nK.jsxs(U, {
    children: [nK.jsx(w, {
      bold: !0,
      children: yAt.heading
    }), nK.jsxs(w, {
      dimColor: !0,
      children: [" 0/", Sz.length, " "]
    }), nK.jsx(ZW, {
      ratio: 0,
      width: 16,
      fillColor: "claude",
      emptyColor: "inactive"
    })]
  }), t[5] = l;else l = t[5];
  let c;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) c = nK.jsx(U, {
    width: 70,
    children: nK.jsx(w, {
      children: yAt.body
    })
  }), t[6] = c;else c = t[6];
  let u;
  if (t[7] !== i) u = nK.jsxs(U, {
    flexDirection: "column",
    children: [a, nK.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1,
      marginTop: 1,
      children: [l, c, nK.jsx(Kl, {
        confirmLabel: "Take the tour",
        cancelLabel: "Skip for now",
        onConfirm: () => i("launch"),
        onCancel: () => i("skip")
      })]
    })]
  }), t[7] = i, t[8] = u;else u = t[8];
  return u;
}
var C$c, I$c, nK;