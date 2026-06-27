// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module i4o
// matched 2.1.88 source: src/components/agents/ModelSelector.tsx
// class=modified  jaccard=0.317  score=0.545  fileCov=0.431
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var i4o = E(() => {
  si();
  Ye();
  IL();
  sr();
  Coe();
  ((gYl = R(lt(), 1)), (hYl = R(rt(), 1)), (zq = R(se(), 1)), (zAt = ["automatic", ...Ky]));
});
function Bsr(e) {
  let t = yYl.c(11),
    { initialModel: n, onComplete: r, onCancel: o } = e,
    s;
  if (t[0] !== n) {
    e: {
      let d = ZZa();
      if (n && !d.some((p) => p.value === n)) {
        s = [
          {
            value: n,
            label: n,
            description: "Current model (custom ID)",
          },
          ...d,
        ];
        break e;
      }
      s = d;
    }
    ((t[0] = n), (t[1] = s));
  } else s = t[1];
  let i = s,
    a = n ?? "sonnet",
    l;
  if (t[2] === Symbol.for("react.memo_cache_sentinel"))
    ((l = KAt.jsx(U, {
      marginBottom: 1,
      children: KAt.jsx(w, {
        dimColor: true,
        children: "Model determines the agent's reasoning capabilities and speed.",
      }),
    })),
      (t[2] = l));
  else l = t[2];
  let c;
  if (t[3] !== o || t[4] !== r)
    ((c = () => (o ? o() : r(void 0))), (t[3] = o), (t[4] = r), (t[5] = c));
  else c = t[5];
  let u;
  if (t[6] !== a || t[7] !== i || t[8] !== r || t[9] !== c)
    ((u = KAt.jsxs(U, {
      flexDirection: "column",
      children: [
        l,
        KAt.jsx(Sr, {
          options: i,
          defaultValue: a,
          onChange: r,
          onCancel: c,
        }),
      ],
    })),
      (t[6] = a),
      (t[7] = i),
      (t[8] = r),
      (t[9] = c),
      (t[10] = u));
  else u = t[10];
  return u;
}
var yYl, KAt;
