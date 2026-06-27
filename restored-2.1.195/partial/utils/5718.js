// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bLc
// matched 2.1.88 source: src/hooks/usePromptsFromClaudeInChrome.tsx
// class=partial  jaccard=0.1635  score=0.4597  fileCov=0.2024
// note: low-confidence suggestion: src/hooks/usePromptsFromClaudeInChrome.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bLc = E(() => {
  ft();
  KKt();
  ag();
  id();
  je();
  At();
  _a();
  hLc();
  yLc = require("fs"), kYo = R(rt(), 1);
});
function ELc(e, t) {
  let n = SLc.c(6);
  ktn.useRef(void 0);
  let r;
  if (n[0] !== e) r = [e], n[0] = e, n[1] = r;else r = n[1];
  ktn.useEffect(qwm, r);
  let o, s;
  if (n[2] !== e || n[3] !== t) o = () => {
    let i = Vwm(e);
    if (!i) return;
    Rre("set_permission_mode", {
      mode: t === "bypassPermissions" ? "skip_all_permission_checks" : "ask"
    }, i).then(Wwm).catch(Gwm);
  }, s = [e, t], n[2] = e, n[3] = t, n[4] = o, n[5] = s;else o = n[4], s = n[5];
  ktn.useEffect(o, s);
}
function Gwm(e) {
  It("chrome_permission_sync", "set_mode_failed"), T(`claude-in-chrome set_permission_mode failed: ${Zr(e).message}`, {
    level: "error"
  });
}
function Wwm() {
  return xe("chrome_permission_sync");
}
function qwm() {}
function Vwm(e) {
  return e.find(t => t.type === "connected" && t.name === VD);
}
var SLc, ktn, WmH;