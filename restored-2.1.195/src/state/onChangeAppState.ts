// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module U9o
// matched 2.1.88 source: src/state/onChangeAppState.ts
// class=modified  jaccard=0.1392  score=0.2007  fileCov=0.3123
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var U9o = E(() => {
  Ed();
  kt();
  yde();
  uo();
  je();
  Mm();
  At();
  vn();
  eer();
  vYt();
  A5e();
  tpc();
  _Gt();
  nDe();
  B9o();
  Arr();
  Xh();
  gz();
  jZt = R(rt(), 1);
});
function rpc(e) {
  return (t) => {
    let n = t.toolPermissionContext;
    if (typeof e.permission_mode === "string") {
      let o = jO(e.permission_mode);
      try {
        if (
          ((n = {
            ...AZ(n.mode, o, n),
            mode: o,
          }),
          o === "auto")
        )
          n = rV(n);
      } catch (s) {
        T(
          `[externalMetadataToAppState] transitionPermissionMode rejected restored mode '${o}': ${Zr(s).message}`,
        );
      }
    }
    let r = _am.safeParse(e.post_turn_summary);
    return {
      ...t,
      toolPermissionContext: n,
      ...(typeof e.is_ultraplan_mode === "boolean" && {
        isUltraplanMode: e.is_ultraplan_mode,
      }),
      ...(r.success && {
        postTurnSummary: r.data,
      }),
    };
  };
}
function opc(e) {
  let t = e.session_allow_rules;
  if (!Array.isArray(t)) return (r) => r;
  let n = t.filter((r) => typeof r === "string" && !r.startsWith("mcp__"));
  if (n.length === 0) return (r) => r;
  return (r) => ({
    ...r,
    toolPermissionContext: {
      ...r.toolPermissionContext,
      alwaysAllowRules: {
        ...r.toolPermissionContext.alwaysAllowRules,
        session: n,
      },
    },
  });
}
function DTe({ newState: e, oldState: t }, n) {
  let r = t.toolPermissionContext.mode,
    o = e.toolPermissionContext.mode;
  if (r !== o) {
    let a = $x(r),
      l = $x(o);
    if (a !== l) {
      let c = l === "plan" && e.isUltraplanMode && !t.isUltraplanMode ? true : null;
      n?.notifyMetadataChanged({
        permission_mode: l,
        is_ultraplan_mode: c,
      });
    }
    (n?.notifyPermissionModeChanged(o), q0e("--permission-mode", [], o));
  }
  if (n && e.tasks !== t.tasks) {
    let a = npc(t),
      l = npc(e);
    if (a.length !== l.length || l.some((c, u) => c.task_id !== a[u]?.task_id))
      n.notifyInternalMetadataChanged({
        running_background_tasks: l,
      });
  }
  let s = t.toolPermissionContext.alwaysAllowRules.session,
    i = e.toolPermissionContext.alwaysAllowRules.session;
  if (s !== i) {
    let a = i?.filter((l) => !l.startsWith("mcp__"));
    n?.notifyInternalMetadataChanged({
      session_allow_rules: a?.length ? a : null,
    });
  }
  if (e.mainLoopModel !== t.mainLoopModel) {
    let a = e.mainLoopModel;
    (py(a),
      Promise.resolve()
        .then(() => (hgt(), iAo))
        .then((l) => l.fetchBootstrapData()),
      n?.notifyMetadataChanged({
        model: a ?? Ey(),
      }),
      q0e("--model", ["-m"], a));
  }
  if (e.effortValue !== t.effortValue) {
    n?.notifyMetadataChanged({
      effort_level: e.effortValue == null ? null : String(e.effortValue),
    });
    let a = e.effortValue;
    if (a === void 0) q0e("--effort", [], null);
    else if (uce(String(a))) q0e("--effort", [], String(a));
  }
  if (e.advisorModel !== t.advisorModel) q0e("--advisor", [], e.advisorModel ?? null);
  if (n && e.frameUrls !== t.frameUrls) {
    let a = Object.values(e.frameUrls);
    if (a.length > 0 || Object.keys(t.frameUrls).length > 0)
      n.notifyMetadataChanged({
        artifacts:
          a.length === 0
            ? null
            : a.map((l) => ({
                url: l.url,
                title: l.title,
                favicon: l.favicon,
                kind: "frame",
                updated_at: new Date(l.updatedAt).toISOString(),
              })),
      });
  }
  if (n && e.activeGoal !== t.activeGoal) {
    let a = e.activeGoal;
    n.notifyMetadataChanged({
      goal: a
        ? {
            condition: a.condition,
            set_at: a.setAt,
            iterations: a.iterations,
            last_reason: a.lastReason ?? null,
            met: false,
          }
        : null,
    });
  }
  if (e.expandedView !== t.expandedView) {
    let a = e.expandedView === "tasks";
    gn((l) => {
      if (l.showExpandedTodos === a) return l;
      return {
        ...l,
        showExpandedTodos: a,
      };
    });
  }
  if (e.verbose !== t.verbose) yI("verbose", e.verbose);
  if (e.settings !== t.settings)
    try {
      if ((zot(), Fle(), Kot(), Zxe(), e.settings.env !== t.settings.env && ad())) e3();
    } catch (a) {
      T(`Failed to apply settings change (clear auth caches / re-apply env): ${Zr(a).message}`, {
        level: "error",
      });
    }
}
function npc(e) {
  return Object.values(e.tasks)
    .filter(
      (t) =>
        wH(t) && (t.type === "local_bash" || t.type === "monitor_mcp" || t.type === "monitor_ws"),
    )
    .map((t) => ({
      task_id: t.id,
      description: t.description,
    }));
}
var _am;
