// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mKr
// matched 2.1.88 source: src/services/api/overageCreditGrant.ts
// class=new  jaccard=0.0229  score=0.0796  fileCov=0.0311
// note: nearest: src/services/api/overageCreditGrant.ts (0.0229); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mKr = E(() => {
  fn();
  Sx();
});
function JS() {
  if (Nkn()) return false;
  if (!S1i()) return false;
  let {
    available: e,
    defaultOn: t
  } = hKr();
  if (!e) return false;
  return VOd() ?? t;
}
function gKr() {
  return hKr().defaultOn;
}
function Ukn() {
  return S1i() && !ut(process.env.CLAUDE_CODE_DISABLE_WORKFLOWS) && hKr().available;
}
function Fkn() {
  return a0()?.settings.workflowKeywordTriggerEnabled ?? true;
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
    let t = at("tengu_workflows_enabled", true);
    return {
      available: t,
      defaultOn: t
    };
  }
  if (ml(process.env.CLAUDE_CODE_WORKFLOWS)) return {
    available: false,
    defaultOn: false
  };
  if (!at("tengu_workflows_enabled", true)) return {
    available: false,
    defaultOn: false
  };
  return {
    available: true,
    defaultOn: Di() !== "pro"
  };
}
var Bkn;