// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vCo
// matched 2.1.88 source: src/components/ui/OrderedListItem.tsx
// class=partial  jaccard=0.1604  score=0.2322  fileCov=0.3416
// note: low-confidence suggestion: src/components/ui/OrderedListItem.tsx; dir inferred from dep-graph -> services; 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var vCo = E(() => {
  ft();
  Ezn();
});
var wCo = {};
_t(wCo, {
  callNonInteractive: () => callNonInteractive,
  call: () => call
});
var vzn,
  Tzn = "/extra-usage is now /usage-credits",
  call = async (e, t) => {
    let {
        call: n
      } = await Promise.resolve().then(() => (L8t(), HCo)),
      o = await n((s, i) => e(s ? `${Tzn}

${s}` : Tzn, i), t);
    if (o == null) return o;
    return vzn.jsxs(U, {
      flexDirection: "column",
      children: [vzn.jsx(w, {
        dimColor: !0,
        children: Tzn
      }), o]
    });
  },
  callNonInteractive = async () => {
    let {
        call: e
      } = await Promise.resolve().then(() => (vCo(), TCo)),
      t = await e();
    return {
      type: "text",
      value: `${Tzn}

${t.value}`
    };
  };