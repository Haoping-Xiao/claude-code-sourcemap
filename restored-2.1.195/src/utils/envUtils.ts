// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Prs
// matched 2.1.88 source: src/utils/envUtils.ts
// class=modified  jaccard=0.1194  score=0.2983  fileCov=0.1661
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Prs] deps: Qi
Lrs = Cn((e) => {
  if (!e || e.trim() === "") return null;
  let t = e
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (t.length === 0) return null;
  let n = t.some((s) => s.startsWith("!")),
    r = t.some((s) => !s.startsWith("!"));
  if (n && r) return null;
  let o = t.map((s) => s.replace(/^!/, "").toLowerCase());
  return {
    include: n ? [] : o,
    exclude: n ? o : [],
    isExclusive: n,
  };
});
function nwe() {
  return hSr.join(tr(), "teams");
}
function AJe(e) {
  let t = process.env.NODE_OPTIONS;
  if (!t) return false;
  return t.split(/\s+/).includes(e);
}
function LK(e, t) {
  if (e === void 0) return t;
  let n = parseInt(e, 10);
  return Number.isNaN(n) ? t : n;
}
function $rs(e) {
  if (e !== void 0) return e;
  let t = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!t) return;
  let n = Number(t);
  if (!Number.isInteger(n) || n <= 0)
    throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${t}"`);
  return n;
}
function Nsn(e) {
  let t = process.argv.indexOf("--");
  return (t === -1 ? process.argv : process.argv.slice(0, t)).includes(e);
}
function md() {
  return ut(process.env.CLAUDE_CODE_SIMPLE) || Nsn("--bare");
}
function Tl() {
  return ut(process.env.CLAUDE_CODE_SAFE_MODE) || Nsn("--safe-mode");
}
function qH() {
  return Nsn("--safe-mode") ? "restart without --safe-mode" : "unset CLAUDE_CODE_SAFE_MODE";
}
function Ors() {
  return Nsn("--bare") ? "restart without --bare" : "unset CLAUDE_CODE_SIMPLE";
}
function parseEnvVars(e) {
  let t = {};
  if (e)
    for (let n of e) {
      let [r, ...o] = n.split("=");
      if (!r || o.length === 0)
        throw Error(
          `Invalid environment variable format: ${n}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`,
        );
      t[r] = o.join("=");
    }
  return t;
}
function getDefaultVertexRegion() {
  return process.env.CLOUD_ML_REGION || "us-east5";
}
function HJe(e) {
  switch (e) {
    case "global":
      return "https://aiplatform.googleapis.com";
    case "us":
    case "eu":
      return `https://aiplatform.${e}.rep.googleapis.com`;
    default:
      return `https://${e}-aiplatform.googleapis.com`;
  }
}
function Brs() {
  return ut(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR);
}
function nv() {
  return false;
}
function $V() {
  return false;
}
function Urs() {
  return {
    namespace: void 0,
    cluster: void 0,
  };
}
function Yie(e) {
  if (e) {
    let t = Lzc.find(([n]) => e.startsWith(n));
    if (t) return process.env[t[1]] || getDefaultVertexRegion();
  }
  return getDefaultVertexRegion();
}
var Mrs, hSr, tr, ySr, Lzc;
