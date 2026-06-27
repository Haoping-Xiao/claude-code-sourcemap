// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uft
// matched 2.1.88 source: src/bridge/debugUtils.ts
// class=modified  jaccard=0.2572  score=0.8041  fileCov=0.2744
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function redactSecrets(e) {
  return e.replace(xDp, (t, n, r) => {
    if (r.length < kDp) return `"${n}":"[REDACTED]"`;
    let o = `${r.slice(0, 8)}...${r.slice(-4)}`;
    return `"${n}":"${o}"`;
  });
}
function Ugo(e) {
  let t = e.replaceAll(
    `
`,
    "\\n",
  );
  if (t.length <= Bjn) return t;
  return t.slice(0, Bjn) + `... (${t.length} chars)`;
}
function debugBody(data) {
  let t = typeof data === "string" ? data : De(data),
    n = redactSecrets(t);
  if (n.length <= Bjn) return n;
  return n.slice(0, Bjn) + `... (${n.length} chars)`;
}
function describeAxiosError(err) {
  let t = be(err);
  if (err && typeof err === "object" && "response" in err) {
    let n = err.response;
    if (n?.data && typeof n.data === "object") {
      let r = n.data,
        o =
          typeof r.message === "string"
            ? r.message
            : typeof r.error === "object" &&
                r.error &&
                "message" in r.error &&
                typeof r.error.message === "string"
              ? r.error.message
              : void 0;
      if (o) return `${t}: ${o}`;
    }
  }
  return t;
}
function Ujn(e, t = Date.now()) {
  if (!e) return;
  let n = Number(e);
  if (Number.isFinite(n) && n >= 0) return n * 1000;
  let r = Date.parse(e);
  if (Number.isFinite(r)) {
    let o = r - t;
    return o > 0 ? o : void 0;
  }
  return;
}
function _J(e) {
  if (!e || typeof e !== "object") return;
  if ("message" in e && typeof e.message === "string") return e.message;
  if (
    "error" in e &&
    e.error !== null &&
    typeof e.error === "object" &&
    "message" in e.error &&
    typeof e.error.message === "string"
  )
    return e.error.message;
  return;
}
function logBridgeSkip(reason, debugMsg, v2) {
  if (debugMsg) T(debugMsg);
  G("tengu_bridge_repl_skipped", {
    reason: reason,
    ...(v2 !== void 0 && {
      v2: v2,
    }),
  });
}
var Bjn = 2000,
  IDp,
  xDp,
  kDp = 16;
