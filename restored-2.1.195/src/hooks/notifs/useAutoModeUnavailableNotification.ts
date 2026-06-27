// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MLc
// matched 2.1.88 source: src/hooks/notifs/useAutoModeUnavailableNotification.ts
// class=modified  jaccard=0.2768  score=0.5733  fileCov=0.3486
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var MLc = E(() => {
  Ye();
  lg();
  Is();
  ((PLc = R(lt(), 1)), (Ltn = R(rt(), 1)), (ZTe = R(se(), 1)));
});
function $Lc() {
  let { addNotification: e } = Li(),
    t = Ht((s) => s.toolPermissionContext.mode),
    n = Ht((s) => s.toolPermissionContext.isAutoModeAvailable),
    r = Dtn.useRef(!1),
    o = Dtn.useRef(t);
  Dtn.useEffect(() => {
    let s = o.current;
    if (((o.current = t), da())) return;
    if (r.current) return;
    if (!(t === "default" && s !== "default" && s !== "auto" && !n)) return;
    let a = Pz();
    if (!a) return;
    if (a === "provider") return;
    ((r.current = !0),
      e({
        key: "auto-mode-unavailable",
        kind: "feedback",
        text: HZ(a),
        color: "warning",
        priority: "medium",
      }));
  }, [t, n, e]);
}
var Dtn;
