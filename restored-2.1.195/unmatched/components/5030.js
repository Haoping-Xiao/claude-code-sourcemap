// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wjo
// matched 2.1.88 source: src/utils/fastMode.ts
// class=new  jaccard=0.0147  score=0.2591  fileCov=0.0154
// note: nearest: src/utils/fastMode.ts (0.0147); dir inferred from dep-graph -> components; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var Wjo = E(() => {
  Bs();
  vi();
  hse();
  f_();
  Ko();
  xsr();
  Ed();
  Ye();
  ps();
  kt();
  uo();
  NE();
  es();
  Ao();
  jG();
  Gjo();
  Uzl = R(lt(), 1), Fzl = R(rt(), 1), RC = R(se(), 1);
});
var Gzl = {};
_t(Gzl, {
  call: () => call
});
async function call(e, t) {
  if (!sc()) return {
    type: "text",
    value: lle() ?? "Fast mode is not available"
  };
  await Ynt();
  let n = e.trim().toLowerCase(),
    r;
  if (n === "on") r = !0;else if (n === "off") r = !1;else if (n === "") r = !t.options.fastMode;else return {
    type: "text",
    value: `Unknown argument "${n}". Use: /fast [on|off]`
  };
  return {
    type: "text",
    value: await Rsr(r, t.getAppState, t.setAppState, "bridge", t.onQueryEvent)
  };
}