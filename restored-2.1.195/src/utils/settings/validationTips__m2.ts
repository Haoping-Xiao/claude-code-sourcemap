// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Xjt
// matched 2.1.88 source: src/utils/settings/validationTips.ts
// class=modified (alt of src/utils/settings/validationTips.ts)  jaccard=0.0521  score=0.0968  fileCov=0.1015
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Xjt = E(() => {
  _1();
  Pca = new Set();
  nup = [
    "SHELL",
    "GIT_EDITOR",
    "CLAUDECODE",
    "AI_AGENT",
    "CLAUDE_CODE_SESSION_ID",
    "CLAUDE_CODE_CHILD_SESSION",
    "TRACEPARENT",
    "CLAUDE_CODE_EXECPATH",
    "TMUX",
    "TMPDIR",
    "CLAUDE_CODE_TMPDIR",
    "TMPPREFIX",
    "BUN_OPTIONS",
    "TEMP",
    "TMP",
    "CLAUDE_EFFORT",
  ];
});
function $ca(e) {
  return `prompt: ${e.trim()}`;
}
function SLe() {
  return false;
}
function Oca(e) {
  return [];
}
function Nca(e) {
  return [];
}
function vNn(e) {
  return [];
}
async function wNn(e, t, n, r, o, s) {
  return {
    matches: false,
    confidence: "high",
    reason: "This feature is disabled",
  };
}
async function Bca(e, t, n) {
  return t || null;
}
var TNn = "prompt:";
function T5e() {
  return yn("policySettings")?.allowManagedPermissionRulesOnly === true;
}
function wut() {
  return !T5e();
}
function oup(e) {
  let t = xg(e);
  if (!t) return null;
  try {
    let { resolvedPath: n } = jd(qt(), t),
      r = XC(n);
    if (r.trim() === "") return {};
    let o = Ia(r, false);
    return o && typeof o === "object" ? o : null;
  } catch {
    return null;
  }
}
function sup(e, t) {
  if (!e || !e.permissions) return [];
  let { permissions: n } = e,
    r = [];
  for (let o of rup) {
    let s = n[o];
    if (s)
      for (let i of s)
        r.push({
          source: t,
          ruleBehavior: o,
          ruleValue: Ig(i),
        });
  }
  return r;
}
function Cut() {
  if (T5e()) return vut("policySettings");
  let e = [];
  for (let t of $w()) e.push(...vut(t));
  if (!CNn()) {
    let t = !Get(),
      n = SSe(),
      r = new Set(),
      o = e.filter((s) => {
        if (s.ruleBehavior !== "allow") return true;
        if (s.source === "projectSettings" && t) return (r.add(".claude/settings.json"), false);
        if (s.source === "localSettings" && n) return (r.add(".claude/settings.local.json"), false);
        return true;
      });
    if (o.length !== e.length) Uca("permissions.allow", e.length - o.length, [...r]);
    return o;
  }
  return e;
}
function Iut() {
  let e = CNn(),
    t = !e && !Get(),
    n = !e && SSe(),
    r = [],
    o = 0,
    s = new Set();
  for (let i of $w()) {
    let a = yn(i)?.permissions?.additionalDirectories ?? [];
    if (t && i === "projectSettings" && a.length > 0) {
      ((o += a.length), s.add(".claude/settings.json"));
      continue;
    }
    if (n && i === "localSettings" && a.length > 0) {
      ((o += a.length), s.add(".claude/settings.local.json"));
      continue;
    }
    r.push(...a);
  }
  if (o > 0) Uca("permissions.additionalDirectories", o, [...s]);
  return r;
}
function Uca(e, t, n) {
  if (((Dao ??= new Set()), Dao.has(e))) return;
  if (
    (Dao.add(e),
    T(
      `Dropped ${t} project-scoped ${e} entr${t === 1 ? "y" : "ies"} \u2014 workspace not yet trusted`,
    ),
    !Ir() && !ad())
  )
    return;
  let r = INn(),
    o = n.length > 0 ? n.join(" and ") : ".claude/ settings";
  console.error(
    `Ignoring ${t} ${e} ${t === 1 ? "entry" : "entries"} from ${o}: this workspace has not been trusted. Run Claude Code interactively here once and accept the trust dialog, or set projects[${De(r)}].hasTrustDialogAccepted: true in ${b0()}.`,
  );
}
function vut(e) {
  let t = yn(e);
  return sup(t, e);
}
function Fca(e) {
  if (!iup.includes(e.source)) return false;
  let t = Pp(e.ruleValue),
    n = yn(e.source);
  if (!n || !n.permissions) return false;
  let r = n.permissions[e.ruleBehavior];
  if (!r) return false;
  let o = (s) => Pp(Ig(s));
  if (!r.some((s) => o(s) === t)) return false;
  try {
    let s = {
        ...n,
        permissions: {
          ...n.permissions,
          [e.ruleBehavior]: r.filter((a) => o(a) !== t),
        },
      },
      { error: i } = io(e.source, s);
    if (i) return false;
    return true;
  } catch (s) {
    return (ke(s), false);
  }
}
function aup() {
  return {
    permissions: {},
  };
}
function jca({ ruleValues: e, ruleBehavior: t }, n) {
  if (T5e()) return false;
  if (e.length < 1) return true;
  let r = e.map(Pp),
    o = yn(n) || oup(n) || aup();
  try {
    let s = o.permissions || {},
      i = s[t] || [],
      a = new Set(i.map((d) => Pp(Ig(d)))),
      l = r.filter((d) => !a.has(d));
    if (l.length === 0) return true;
    let c = {
        ...o,
        permissions: {
          ...s,
          [t]: [...i, ...l],
        },
      },
      u = io(n, c);
    if (u.error) throw u.error;
    return true;
  } catch (s) {
    return (
      T(
        `Failed to add permission rules to ${n} settings: ${s instanceof Error ? s.message : String(s)}`,
        {
          level: "error",
        },
      ),
      false
    );
  }
}
var rup, Dao, iup;
