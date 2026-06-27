// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module s1l
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0036  score=0.1915  fileCov=0.0036
// note: nearest: src/screens/REPL.tsx (0.0036); dir inferred from dep-graph -> components; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var s1l = E(() => {
  ft();
  PPf = {
    aliases: ["settings"],
    type: "local-jsx",
    name: "config",
    description: "Open settings",
    argumentHint: "[key=value]",
    getArgumentCompletions: (e, t) => Promise.resolve().then(() => (str(), yMl)).then(n => n.getConfigArgumentCompletions(e, t)),
    load: () => Promise.resolve().then(() => (t1l(), e1l))
  }, sNo = {
    type: "local",
    name: "config",
    aliases: ["settings"],
    supportsNonInteractive: true,
    description: "Set a setting by key",
    argumentHint: "key=value",
    isEnabled: () => Ir(),
    get isHidden() {
      return !Ir();
    },
    load: () => Promise.resolve().then(() => (r1l(), n1l))
  }, o1l = PPf;
});
var l1l = {};
_t(l1l, {
  redirectMessageFor: () => redirectMessageFor,
  call: () => call
});
function redirectMessageFor(e) {
  let t = e && i1l[e] ? e : "vim";
  return `/${t} moved \u2192 ${i1l[t]} in /config`;
}
var O7t,
  i1l,
  call = async (e, t, n, r) => {
    let o = redirectMessageFor(r);
    return O7t.jsxs(U, {
      flexDirection: "column",
      children: [O7t.jsx(w, {
        color: "suggestion",
        children: o
      }), O7t.jsx(WOe, {
        onClose: () => e(o),
        context: t,
        defaultTab: "Config"
      })]
    });
  };