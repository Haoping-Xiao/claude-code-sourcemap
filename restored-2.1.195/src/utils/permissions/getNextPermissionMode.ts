// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module T6o
// matched 2.1.88 source: src/utils/permissions/getNextPermissionMode.ts
// class=modified  jaccard=0.3122  score=0.4844  fileCov=0.4676
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function xyc(e) {
  let t = e.match(/^@([\w-]+)\s+(.+)$/s);
  if (!t) return null;
  let [, n, r] = t;
  if (!n || !r) return null;
  let o = r.trim();
  if (!o) return null;
  return {
    recipientName: n,
    message: o,
  };
}
async function kyc(e, t, n, r) {
  if (!n || !r)
    return {
      success: false,
      error: "no_team_context",
    };
  if (!Object.values(n.teammates ?? {}).find((s) => s.name === e))
    return {
      success: false,
      error: "unknown_recipient",
      recipientName: e,
    };
  return (
    await r(
      e,
      {
        from: "user",
        text: t,
        timestamp: new Date().toISOString(),
      },
      n.teamName,
    ),
    {
      success: true,
      recipientName: e,
    }
  );
}
function _dr(e) {
  {
    let t = Zv(),
      n = v6o(),
      r = !!e.isAutoModeAvailable && t && !n;
    if (!r)
      T(
        `[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${t} dismissed=${n} reason=${Pz()}`,
      );
    return r;
  }
  return false;
}
function v6o() {
  return Boolean(Dt().autoModeOptInDismissed) && !ROe();
}
function bdr(e, t) {
  switch (e.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      if (e.isBypassPermissionsModeAvailable) return "bypassPermissions";
      if (_dr(e)) return "auto";
      return "default";
    case "bypassPermissions":
      if (_dr(e)) return "auto";
      return "default";
    case "dontAsk":
      return "default";
    default:
      return "default";
  }
}
function Ryc(e, t, n) {
  let r = bdr(e, t);
  return {
    nextMode: r,
    context: AZ(e.mode, r, e, n),
  };
}
