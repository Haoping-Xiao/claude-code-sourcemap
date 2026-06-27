// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wjo
// matched 2.1.88 source: src/utils/fastMode.ts
// class=modified (alt of src/utils/fastMode.ts)  jaccard=0.0126  score=0.1383  fileCov=0.0136
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
// [unwrapped __esm module Wjo] deps: Bs, vi, hse, f_, Ko, xsr, Ed, Ye, ps, kt, uo, NE, es, Ao, jG, Gjo
((Uzl = R(lt(), 1)), (Fzl = R(rt(), 1)), (RC = R(se(), 1)));
async function getFastModeUnavailableReason(e, t) {
  if (!sc())
    return {
      type: "text",
      value: lle() ?? "Fast mode is not available",
    };
  await Ynt();
  let n = e.trim().toLowerCase(),
    r;
  if (n === "on") r = true;
  else if (n === "off") r = false;
  else if (n === "") r = !t.options.fastMode;
  else
    return {
      type: "text",
      value: `Unknown argument "${n}". Use: /fast [on|off]`,
    };
  return {
    type: "text",
    value: await Rsr(r, t.getAppState, t.setAppState, "bridge", t.onQueryEvent),
  };
}
