// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mMt
// matched 2.1.88 source: node_modules/@anthropic-ai/bedrock-sdk/internal/utils/log.mjs
// class=partial  jaccard=0.1217  score=1  fileCov=0.1217
// note: low-confidence suggestion: node_modules/@anthropic-ai/bedrock-sdk/internal/utils/log.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module mMt] deps: UHn
F4r = U4r;
function gMt() {}
function jHn(e, t, n) {
  if (!t || kdi[e] > kdi[n]) return gMt;else return t[e].bind(t);
}
function GHn(e) {
  let t = e.logger,
    n = e.logLevel ?? "off";
  if (!t) return tgd;
  let r = Rdi.get(t);
  if (r && r[0] === n) return r[1];
  let o = {
    error: jHn("error", t, n),
    warn: jHn("warn", t, n),
    info: jHn("info", t, n),
    debug: jHn("debug", t, n)
  };
  return Rdi.set(t, [n, o]), o;
}
var kdi, tgd, Rdi;