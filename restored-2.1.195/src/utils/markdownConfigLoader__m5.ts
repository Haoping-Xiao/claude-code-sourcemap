// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u_
// matched 2.1.88 source: src/utils/markdownConfigLoader.ts
// class=modified (alt of src/utils/markdownConfigLoader.ts)  jaccard=0.0178  score=0.101  fileCov=0.0211
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module u_]
O_e = class O_e extends Error {
  constructor(e) {
    super(e);
    this.name = "FileStateError";
  }
};
function N_e(e) {
  return (
    e
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "workflow"
  );
}
function b0n() {
  return uit.join(aj($t()), Rt(), "workflows", "scripts") + uit.sep;
}
function ENd(e, t) {
  return `${b0n()}${N_e(e)}-${t}.js`;
}
function VNi(e, t, n) {
  let r = b0n(),
    o = ENd(e, t);
  return (
    (async () => {
      try {
        (await _0n.mkdir(r, {
          recursive: true,
          mode: 448,
        }),
          await _0n.writeFile(o, n, {
            encoding: "utf-8",
            mode: 384,
          }));
      } catch (s) {
        T(`Failed to persist workflow script to ${o}: ${s}`, {
          level: "warn",
        });
      }
    })(),
    o
  );
}
async function U3e(e) {
  if (Fc(e))
    return {
      error: `UNC paths are not allowed for workflow scriptPath: ${e}`,
    };
  let t = uit.resolve($t(), e);
  try {
    let n = await qt().readFileBytes(t, Oj + 1);
    if (n.byteLength > Oj)
      return {
        error: `Workflow script file ${t} exceeds ${Oj} bytes`,
      };
    return {
      script: n.toString("utf-8"),
      path: t,
    };
  } catch (n) {
    if (wn(n))
      return {
        error: `Workflow script file not found: ${t}`,
      };
    return {
      error: `Failed to read workflow script file ${t}: ${n}`,
    };
  }
}
var _0n,
  uit,
  Oj = 524288;
