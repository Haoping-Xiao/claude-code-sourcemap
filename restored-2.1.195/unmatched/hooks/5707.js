// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module GRc
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0101  score=0.2724  fileCov=0.0104
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0101); dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var GRc = E(() => {
  Ye();
  vYo();
  URc();
  wYo = R(se(), 1), jRc = [...(FRc ? [FRc] : []), BRc, {
    id: "marketplace-plugin-suggestion",
    compute: async () => {
      let e = await NRc({
          theme: "dark"
        }),
        t = e?.pluginId;
      if (!e || !t) return null;
      return _fr(e, "startup"), {
        key: "marketplace-plugin-suggestion",
        kind: "upsell",
        jsx: wYo.jsxs(w, {
          color: "suggestion",
          children: ["plugin suggestion: ", t, wYo.jsxs(w, {
            color: "text",
            dimColor: true,
            children: [" ", "\xB7 /plugin"]
          })]
        }),
        priority: "low"
      };
    }
  }];
});
function WRc(e = jRc) {
  let {
      addNotification: t
    } = Li(),
    n = Sfr.useRef(false);
  Sfr.useEffect(() => {
    if (da() || n.current) return;
    n.current = true;
    let r = Dt().seenNotifications ?? {},
      o = [];
    Promise.allSettled(e.map(async s => {
      if (s.maxImpressions !== void 0 && (r[s.id] ?? 0) >= s.maxImpressions) return;
      let i = await s.compute();
      if (!i || Array.isArray(i) && i.length === 0) return;
      for (let a of Array.isArray(i) ? i : [i]) t(a);
      if (s.onShown?.(), s.maxImpressions !== void 0) o.push(s.id);
    })).then(s => {
      for (let i of s) if (i.status === "rejected") ke(i.reason);
      if (o.length === 0) return;
      gn(i => {
        let a = {
          ...(i.seenNotifications ?? {})
        };
        for (let l of o) a[l] = (a[l] ?? 0) + 1;
        return {
          ...i,
          seenNotifications: a
        };
      });
    });
  }, [t, e]);
}
var Sfr;