// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $pr
// matched 2.1.88 source: src/utils/sessionState.ts
// class=modified (alt of src/utils/sessionState.ts)  jaccard=0.07  score=0.1085  fileCov=0.1648
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $pr] deps: Ed, tC, nbe, Ye, Yj, xne, H0e, uo, m0, Is, sr, Cen
((gw = R(rt(), 1)), (Cbm = (TTc(), ro(HTc))));
function wTc() {
  return false;
}
async function CTc() {
  return [];
}
function notifySessionStateChanged(state) {
  let { state: t, tempo: n } = $bm(state.worker_status),
    r = state.config?.sources?.find((a) => a.type === "git_repository")?.url,
    o = state.title ?? "",
    s =
      state.worker_status === "requires_action" ? state.external_metadata?.pending_action : void 0,
    i =
      state.worker_status === "requires_action"
        ? s?.tool_name === mf
          ? kYn(s.input).text
          : s?.tool_name === Xx
            ? "approve plan"
            : typeof s?.tool_name === "string" &&
                typeof s.action_description === "string" &&
                s.action_description !== ""
              ? R6t(
                  `approve ${typeof s.display_tool_name === "string" && s.display_tool_name !== "" ? s.display_tool_name : s.tool_name}: ${s.action_description}`,
                )
              : "awaiting input"
        : void 0;
  return {
    state: t,
    detail: o,
    tempo: n,
    needs: i,
    output: null,
    children: null,
    linkScanOffset: 0,
    template: "remote",
    respawnFlags: [],
    name: o || void 0,
    intent: o || state.id,
    sessionId: state.id,
    cwd: r ?? "remote",
    originCwd: r ?? "remote",
    createdAt: state.created_at,
    updatedAt: state.last_event_at ?? state.created_at,
    firstTerminalAt: null,
    backend: "remote",
  };
}
function xTc(e, t) {
  let n = (i) => i.replace(/^(?:session|cse)_/, ""),
    r = new Set(t.map((i) => n(i.state.sessionId))),
    o = e.filter((i) => i.id.startsWith("remote-pending-") && !r.has(n(i.state.sessionId))),
    s = [...t, ...o];
  return e.length === s.length &&
    e.every((i, a) => i.id === s[a].id && i.activity === s[a].activity && Mbm(i.state, s[a].state))
    ? e
    : s;
}
function Mbm(e, t) {
  let n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return false;
  return n.every((r) => {
    let o = e[r],
      s = t[r];
    if (o === s) return true;
    return (
      typeof o === "object" &&
      typeof s === "object" &&
      o !== null &&
      s !== null &&
      Bun.deepEquals(o, s)
    );
  });
}
function $bm(e) {
  switch (e) {
    case "requires_action":
      return {
        state: "blocked",
        tempo: "blocked",
      };
    case "idle":
      return {
        state: "done",
        tempo: "idle",
      };
    default:
      return {
        state: "working",
        tempo: "active",
      };
  }
}
var gtn;
