// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module yXa
// matched 2.1.88 source: src/hooks/useReplBridge.tsx
// class=modified (alt of src/hooks/useReplBridge.tsx)  jaccard=0.0109  score=0.0776  fileCov=0.0125
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module yXa] deps: Ye, kt, Hu, dr, Fy, f_, gm, wb, vH
((mXa = R(lt(), 1)), (gXa = R(rt(), 1)), (D6 = R(se(), 1)));
$7p = new Set(["AWS_BEARER_TOKEN_BEDROCK", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN"]);
function VPe() {
  let e = new Date(),
    t = String(e.getHours()).padStart(2, "0"),
    n = String(e.getMinutes()).padStart(2, "0"),
    r = String(e.getSeconds()).padStart(2, "0");
  return `${t}:${n}:${r}`;
}
function vVt(e, t) {
  return `${u4t(void 0, t)}/code?environment=${e}`;
}
function SXa(e, t) {
  let n = t + 20;
  return t + 10 - (e % n);
}
function v9n(e, t) {
  let n = rn(e),
    r = t - 1,
    o = t + 1;
  if (r >= n || o < 0)
    return {
      before: e,
      shimmer: "",
      after: "",
    };
  let s = Math.max(0, r),
    i = 0,
    a = "",
    l = "",
    c = "";
  for (let { segment: u } of BS().segment(e)) {
    let d = rn(u);
    if (i + d <= s) a += u;
    else if (i > o) c += u;
    else l += u;
    i += d;
  }
  return {
    before: a,
    shimmer: l,
    after: c,
  };
}
function w9n({ error: e, connected: t, sessionActive: n, reconnecting: r }) {
  if (e)
    return {
      label: "/rc failed",
      color: "error",
    };
  if (r)
    return {
      label: "/rc reconnecting",
      color: "warning",
    };
  if (n || t)
    return {
      label: "/rc active",
      color: "success",
    };
  return {
    label: "/rc connecting\u2026",
    color: "warning",
  };
}
function C9n(e) {
  return `Code anywhere with the Claude mobile app or ${e}`;
}
function I9n(e) {
  return `Continue coding in the Claude mobile app or ${e}`;
}
function HXa(e, t) {
  return `\x1B]8;;${t}\x07${e}\x1B]8;;\x07`;
}
var _Xa = 30000,
  useReplBridge = "bridge-failed",
  rht = "disabled after repeated failures \xB7 restart to retry",
  bXa = 150,
  EXa = "Run /remote-control to retry",
  AXa = "Re-run `claude remote-control` to try again";
