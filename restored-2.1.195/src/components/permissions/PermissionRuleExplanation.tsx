// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module TEc
// matched 2.1.88 source: src/components/permissions/PermissionRuleExplanation.tsx
// class=modified  jaccard=0.3933  score=0.5253  fileCov=0.6102
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var TEc = E(() => {
  PR();
  kt();
  Du();
  EJt();
  Ed();
  Ye();
  uo();
  S$();
  Il();
  je();
  At();
  vn();
  Gy();
  _m();
  Jt();
  rvo();
  S7n();
  SEc();
  L6t();
  ((AEc = R(lt(), 1)), (wNe = R(se(), 1)));
  HEc = _hm;
});
function bhm(e) {
  if (e?.startsWith("plugin")) return "plugin hooks.json";
  if (e?.startsWith("skill")) return "SKILL.md";
  return "settings.json";
}
function CEc(e) {
  if (e?.type === "rule" && e.rule.ruleBehavior === "ask") return e.rule;
  if (e?.type === "subcommandResults") {
    for (let t of e.reasons.values())
      if (t.behavior === "ask") {
        let n = CEc(t.decisionReason);
        if (n) return n;
      }
  }
  return;
}
function Pzo(e, t, n) {
  if (!e) return null;
  if (e.type === "classifier") {
    if (e.classifier === "auto-mode")
      return {
        reasonString: `Auto mode classifier requires confirmation for this ${t}.
${e.reason}`,
        configString: void 0,
        themeColor: "error",
      };
    return {
      reasonString: `Classifier ${wt.bold(e.classifier)} requires confirmation for this ${t}.
${e.reason}`,
      configString: void 0,
    };
  }
  if (e.type === "subcommandResults") {
    let r = CEc(e);
    if (r)
      return Pzo(
        {
          type: "rule",
          rule: r,
        },
        t,
        n,
      );
    for (let o of e.reasons.values())
      if (o.behavior === "ask" || o.behavior === "passthrough") {
        let s = Pzo(o.decisionReason, t, n);
        if (s) return s;
      }
  }
  switch (e.type) {
    case "rule": {
      let r = wt.bold(Pp(e.rule.ruleValue));
      if (n === "auto" && e.rule.ruleBehavior === "ask" && e.rule.source !== "policySettings")
        return {
          reasonString: `Ask rule ${r} overrides auto mode for this ${t}.`,
          configString: "/permissions to let auto mode decide",
        };
      return {
        reasonString: `Permission rule ${r} requires confirmation for this ${t}.`,
        configString: e.rule.source === "policySettings" ? void 0 : "/permissions to update rules",
      };
    }
    case "hook": {
      let r = e.reason
          ? `:
${e.reason}`
          : ".",
        o = e.hookSource ? ` ${wt.dim(`[${e.hookSource}]`)}` : "";
      return {
        reasonString: `Hook ${wt.bold(e.hookName)} requires confirmation for this ${t}${r}${o}`,
        configString: `${bhm(e.hookSource)} to update hooks`,
      };
    }
    case "safetyCheck":
    case "other":
      return {
        reasonString: e.reason,
        configString: void 0,
      };
    case "workingDir":
      return {
        reasonString: e.reason,
        configString: "/permissions to update rules",
      };
    default:
      return null;
  }
}
function _2(e) {
  let t = wEc.c(12),
    { permissionResult: n, toolType: r } = e,
    o = Ht(Shm),
    s = n?.decisionReason,
    i;
  if (t[0] !== o || t[1] !== s || t[2] !== r)
    ((i = Pzo(s, r, o)), (t[0] = o), (t[1] = s), (t[2] = r), (t[3] = i));
  else i = t[3];
  let a = i;
  if (!a) return null;
  let l = a.themeColor ?? (n?.decisionReason?.type === "hook" && o === "auto" ? "warning" : void 0),
    c;
  if (t[4] !== a.reasonString || t[5] !== l)
    ((c = l
      ? v7e.jsx(w, {
          color: l,
          children: a.reasonString,
        })
      : v7e.jsx(w, {
          children: v7e.jsx(bd, {
            children: a.reasonString,
          }),
        })),
      (t[4] = a.reasonString),
      (t[5] = l),
      (t[6] = c));
  else c = t[6];
  let u;
  if (t[7] !== a.configString)
    ((u =
      a.configString &&
      v7e.jsx(w, {
        dimColor: true,
        children: a.configString,
      })),
      (t[7] = a.configString),
      (t[8] = u));
  else u = t[8];
  let d;
  if (t[9] !== c || t[10] !== u)
    ((d = v7e.jsxs(U, {
      marginBottom: 1,
      flexDirection: "column",
      children: [c, u],
    })),
      (t[9] = c),
      (t[10] = u),
      (t[11] = d));
  else d = t[11];
  return d;
}
function Shm(e) {
  return e.toolPermissionContext.mode;
}
var wEc, v7e;
