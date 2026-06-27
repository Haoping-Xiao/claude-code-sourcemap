// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o3o
// matched 2.1.88 source: src/commands/rate-limit-options/rate-limit-options.tsx
// class=partial  jaccard=0.0991  score=0.3456  fileCov=0.1219
// note: low-confidence suggestion: src/commands/rate-limit-options/rate-limit-options.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var o3o = E(() => {
  oo();
  wr();
  d5e();
  F6f = {
    type: "local-jsx",
    name: "upgrade",
    description: "Upgrade to Max for higher rate limits and more Opus",
    availability: ["claude-ai"],
    isEnabled: () => !FX() && !Oe.DISABLE_UPGRADE_COMMAND && Di() !== "enterprise",
    load: () => Promise.resolve().then(() => (BJt(), r3o))
  }, N1e = F6f;
});
function uQl(e) {
  let t = lQl.c(15),
    {
      onDone: n,
      context: r
    } = e,
    [o, s] = cQl.useState(null);
  if (o) return o;
  let i;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) i = [...(FX() ? [] : [{
    label: "Upgrade to Max",
    value: "upgrade"
  }]), {
    label: "Add funds to continue with usage credits",
    value: "extra-usage"
  }], t[0] = i;else i = t[0];
  let a = i,
    l;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) l = SYe.jsx(U, {
    paddingX: 2,
    children: SYe.jsx(w, {
      color: "error",
      children: "Your Claude Code trial has ended."
    })
  }), t[1] = l;else l = t[1];
  let c;
  if (t[2] !== n) c = () => n(), t[2] = n, t[3] = c;else c = t[3];
  let u;
  if (t[4] !== n) u = () => n(), t[4] = n, t[5] = u;else u = t[5];
  let d;
  if (t[6] !== r || t[7] !== n) d = m => {
    if (G("tengu_pro_trial_expired_choice", {
      chose_upgrade: m === "upgrade"
    }), m === "upgrade") NJt(n, r).then(g => s(g));else R8t(n, r).then(g => s(g));
  }, t[6] = r, t[7] = n, t[8] = d;else d = t[8];
  let p;
  if (t[9] !== u || t[10] !== d) p = SYe.jsx(Sr, {
    options: a,
    onCancel: u,
    onChange: d
  }), t[9] = u, t[10] = d, t[11] = p;else p = t[11];
  let f;
  if (t[12] !== c || t[13] !== p) f = SYe.jsxs(U, {
    flexDirection: "column",
    children: [l, SYe.jsx(zn, {
      title: "What do you want to do?",
      onCancel: c,
      children: p
    })]
  }), t[12] = c, t[13] = p, t[14] = f;else f = t[14];
  return f;
}
var lQl, cQl, SYe;