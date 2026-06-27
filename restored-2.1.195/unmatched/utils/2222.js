// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mKr
// class=new  (no 2.1.88 match)
// note: dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mKr = E(() => {
  fn();
  Sx();
});
function JS() {
  if (Nkn()) return !1;
  if (!S1i()) return !1;
  let {
    available: e,
    defaultOn: t
  } = hKr();
  if (!e) return !1;
  return VOd() ?? t;
}
function gKr() {
  return hKr().defaultOn;
}
function Ukn() {
  return S1i() && !ut(process.env.CLAUDE_CODE_DISABLE_WORKFLOWS) && hKr().available;
}
function Fkn() {
  return a0()?.settings.workflowKeywordTriggerEnabled ?? !0;
}
function S1i() {
  return Us("allow_workflows");
}
function VOd() {
  return a0()?.settings.enableWorkflows;
}
function hKr() {
  if (Bkn !== void 0) return Bkn;
  return Bkn = zOd(), Bkn;
}
function zOd() {
  if (ut(process.env.CLAUDE_CODE_WORKFLOWS)) {
    let t = at("tengu_workflows_enabled", !0);
    return {
      available: t,
      defaultOn: t
    };
  }
  if (ml(process.env.CLAUDE_CODE_WORKFLOWS)) return {
    available: !1,
    defaultOn: !1
  };
  if (!at("tengu_workflows_enabled", !0)) return {
    available: !1,
    defaultOn: !1
  };
  return {
    available: !0,
    defaultOn: Di() !== "pro"
  };
}
var Bkn;