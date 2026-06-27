// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aSs
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aSs = E(() => {
  iSs();
  VRu = sSs(function (e, t, n) {
    return e + (n ? "_" : "") + t.toLowerCase();
  }), cpn = VRu;
});
function lSs(e) {
  return `tool_${cpn(e)}`;
}
function cSs(e) {
  return `cmd_${cpn(e)}`;
}
function EFe(e) {
  return `hook_${cpn(e)}`;
}
function xe(e, t) {
  G("tengu_feature_ok", {
    feature_name: $e(e),
    ...t
  });
}
function Le(e, t, n) {
  G("tengu_feature_bad", {
    ...n,
    feature_name: $e(e),
    error_code: t
  });
}
function It(e, t, n) {
  G("tengu_feature_sad", {
    ...n,
    feature_name: $e(e),
    error_code: t
  });
}
async function uv(e, t) {
  await my("tengu_feature_ok", {
    feature_name: $e(e),
    ...t
  });
}
async function Qu(e, t, n) {
  await my("tengu_feature_bad", {
    ...n,
    feature_name: $e(e),
    error_code: t
  });
}
async function iY(e, t) {
  await my("tengu_feature_sad", {
    feature_name: $e(e),
    error_code: t
  });
}
async function yl(e, t, n) {
  try {
    let r = await t();
    return xe(e), r;
  } catch (r) {
    throw Le(e, n?.(r) ?? "error"), r;
  }
}