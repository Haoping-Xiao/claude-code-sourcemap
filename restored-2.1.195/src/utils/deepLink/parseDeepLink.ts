// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HSc
// matched 2.1.88 source: src/utils/deepLink/parseDeepLink.ts
// class=modified  jaccard=0.5593  score=0.7858  fileCov=0.66
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HSc] deps: gzo, ag, kt, RFn, Epn, je, fn, At, ys, YS, _Tt, vn, BJ, iZr, y_, Dgt, vf, dr, Jt, sr, kv, K0, aR
tu = require("path");
function wSc(e, { allowNewlineAndTab: t = false } = {}) {
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r <= 31 || (r >= 127 && r <= 159)) {
      if (t && (r === 10 || r === 9)) continue;
      return true;
    }
  }
  return false;
}
function hzo(e) {
  if (/^[/\\]{2}/.test(e))
    throw Error(`Invalid cwd in deep link: UNC / network paths are not supported, got "${e}"`);
  if (!e.startsWith("/") && !/^[a-zA-Z]:[/\\]/.test(e))
    throw Error(`Invalid cwd in deep link: must be an absolute path, got "${e}"`);
  if (wSc(e)) throw Error("Deep link cwd contains disallowed control characters");
  if (
    /(?![\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}])[\p{Default_Ignorable_Code_Point}\u2028\u2029\u2800\uFFF9-\uFFFB\u{1D173}-\u{1D17A}]/u.test(
      e,
    )
  )
    throw Error("Deep link cwd contains invisible or bidirectional control characters");
  if (e.length > vSc) throw Error(`Deep link cwd exceeds ${vSc} characters (got ${e.length})`);
}
function yzo(e) {
  let t = Ddo(e).replace(
    /\r\n?/g,
    `
`,
  );
  if (
    wSc(t, {
      allowNewlineAndTab: true,
    })
  )
    throw Error("Deep link query contains disallowed control characters");
  if (t.length > TSc) throw Error(`Deep link query exceeds ${TSc} characters (got ${t.length})`);
  return t;
}
function CSc(e) {
  let t = e.startsWith(`${aV}://`)
    ? e
    : e.startsWith(`${aV}:`)
      ? e.replace(`${aV}:`, `${aV}://`)
      : null;
  if (!t) throw Error(`Invalid deep link: expected ${aV}:// scheme, got "${e}"`);
  let n;
  try {
    n = new URL(t);
  } catch {
    throw Error(`Invalid deep link URL: "${e}"`);
  }
  if (n.hostname !== "open") throw Error(`Unknown deep link action: "${n.hostname}"`);
  let r = n.searchParams.get("cwd") ?? void 0,
    o = n.searchParams.get("repo") ?? void 0,
    s = n.searchParams.get("q");
  if (r) hzo(r);
  if (o && !qgm.test(o))
    throw Error(`Invalid repo in deep link: expected "owner/repo", got "${o}"`);
  let i;
  if (s && s.trim().length > 0) i = yzo(s.trim());
  return {
    query: i,
    cwd: r,
    repo: o,
  };
}
var aV = "claude-cli",
  qgm,
  TSc = 5000,
  vSc = 4096;
