// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BPa
// matched 2.1.88 source: src/utils/bash/registry.ts
// class=modified  jaccard=0.3317  score=1  fileCov=0.3317
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BPa] deps: wPa, IPa, kPa, LPa, PPa, $Pa, NPa
$mo = [xPa, OPa, RPa, vPa, CPa, MPa, DPa];
async function loadFigSpec(e) {
  if (!e || e.includes("/") || e.includes("\\")) return null;
  if (e.includes("..")) return null;
  if (e.startsWith("-") && e !== "-") return null;
  if (gG() && dm()) return null;
  try {
    let t = await import(`@withfig/autocomplete/build/${e}.js`);
    return t.default || t;
  } catch {
    return null;
  }
}
var DDe;
