// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vCo
// matched 2.1.88 source: src/components/CustomSelect/select.tsx
// class=new  jaccard=0.0247  score=0.3538  fileCov=0.0259
// note: nearest: src/components/CustomSelect/select.tsx (0.0247); dir inferred from dep-graph -> services; 2 renamed
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
        dimColor: true,
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