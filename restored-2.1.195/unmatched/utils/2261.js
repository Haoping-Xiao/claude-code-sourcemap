// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iYr
// matched 2.1.88 source: src/utils/config.ts
// class=new  jaccard=0.0054  score=0.2638  fileCov=0.0055
// note: nearest: src/utils/config.ts (0.0054); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function oBi(e) {
  let t = new Map();
  if (!e) return t;
  try {
    let n = Ft(e);
    if (n && typeof n === "object") {
      for (let [r, o] of Object.entries(n)) if (typeof o === "string") t.set(r, o);
    }
  } catch (n) {
    T(`[repo-checkouts] Failed to parse env map: ${be(n)}`, {
      level: "error"
    });
  }
  return t;
}
function aYr() {
  if (mit) return mit;
  let e = process.env.CLAUDE_CODE_REPO_CHECKOUTS;
  if (!e) return mit = new Map([["", $t()]]), mit;
  return mit = oBi(e), mit;
}
function sBi() {
  if (T0n) return T0n;
  return T0n = oBi(process.env.CLAUDE_CODE_BASE_REFS), T0n;
}
function iBi(e) {
  for (let [t, n] of aYr()) if (e === n || e.startsWith(n + rBi.sep)) return t;
  return;
}
async function lBi(e) {
  aBi = e;
  for (let [, t] of aYr()) await X0r(t);
  J0r(() => void lYr());
}
async function lYr() {
  let e = aYr();
  if (e.size === 0) return;
  let t = {};
  for (let [n, r] of e) {
    let o = await Q0r(r);
    if (o !== void 0) t[n] = o;
  }
  if (L_(t, nBi)) return;
  nBi = t, aBi?.({
    current_branches: t
  });
}
var rBi,
  mit = null,
  T0n = null,
  aBi = null,
  nBi;