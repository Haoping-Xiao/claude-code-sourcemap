// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _k
// matched 2.1.88 source: src/utils/generatedFiles.ts
// class=new  jaccard=0.0447  score=0.2717  fileCov=0.0507
// note: nearest: src/utils/generatedFiles.ts (0.0447); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var _k = E(() => {
  kt();
  Pw();
  je();
  At();
  ys();
  vn();
  Jt();
  B1();
  ZC();
  ft();
  Lo();
  gM();
  vf();
  dr();
  lE();
  $g();
  Xh();
  lz = require("path");
});
async function cer(e) {
  let t;
  try {
    t = await kRl.readdir(e);
  } catch (r) {
    if (Vo(r)) return {
      ran: false
    };
    throw r;
  }
  let n = new Set(t);
  if (!n.has("package.json")) return {
    ran: false
  };
  for (let r of gxf) {
    if (!n.has(r.lockfile)) continue;
    T(`Installing plugin dependencies: ${r.command} ${r.args.join(" ")} in ${e}`);
    let o = await Gr(r.command, r.args, {
      cwd: e,
      timeout: mxf
    });
    if (o.code !== 0) return {
      ran: true,
      error: `Plugin dependency install failed (${r.command}): ${o.stderr || o.stdout || o.error || "no output"}`.slice(0, 500)
    };
    return T(`Plugin dependency install succeeded (${r.command}) in ${e}`), {
      ran: true
    };
  }
  if (n.has("yarn.lock") || n.has("pnpm-lock.yaml")) return {
    ran: false,
    error: "Skipped: yarn/pnpm lockfiles are not supported (resolution-time hooks bypass --ignore-scripts). Use bun or npm."
  };
  return {
    ran: false
  };
}
var kRl,
  mxf = 60000,
  gxf;