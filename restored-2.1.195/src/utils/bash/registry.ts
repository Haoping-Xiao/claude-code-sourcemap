// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BPa
// matched 2.1.88 source: src/utils/bash/registry.ts
// class=modified  jaccard=0.3317  score=1  fileCov=0.3317
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module BPa] deps: utils/bash/specs/alias.ts, utils/bash/specs/nohup.ts, utils/bash/specs/pyright.ts, utils/bash/specs/sleep.ts, utils/bash/specs/srun.ts, utils/bash/specs/time.ts, utils/bash/specs/timeout.ts
$mo = [xPa, OPa, RPa, vPa, CPa, MPa, DPa];
async function loadFigSpec(command) {
  if (!command || command.includes("/") || command.includes("\\")) return null;
  if (command.includes("..")) return null;
  if (command.startsWith("-") && command !== "-") return null;
  if (gG() && dm()) return null;
  try {
    let t = await import(`@withfig/autocomplete/build/${command}.js`);
    return t.default || t;
  } catch {
    return null;
  }
}
var DDe;
