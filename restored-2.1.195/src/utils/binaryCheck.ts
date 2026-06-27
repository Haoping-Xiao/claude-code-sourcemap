// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ULc
// matched 2.1.88 source: src/utils/binaryCheck.ts
// class=modified  jaccard=0.3624  score=0.7481  fileCov=0.4128
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ULc] deps: ft, Ye, id, yde, uo, je, fn, gz
((NLc = R(lt(), 1)), (pvt = R(rt(), 1)));
async function isBinaryInstalled(command) {
  if (!command || !command.trim())
    return (T("[binaryCheck] Empty command provided, returning false"), false);
  let t = command.trim();
  if (!oCm.test(t))
    return (T(`[binaryCheck] Rejected command with unsafe characters: '${t}'`), false);
  let n = FLc.get(t);
  if (n !== void 0) return (T(`[binaryCheck] Cache hit for '${t}': ${n}`), n);
  let r = false;
  if (await Gf(t).catch(() => null)) r = true;
  return (FLc.set(t, r), T(`[binaryCheck] Binary '${t}' ${r ? "found" : "not found"}`), r);
}
var FLc, oCm;
