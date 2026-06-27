// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I1l
// matched 2.1.88 source: src/components/ScrollKeybindingHandler.tsx
// class=partial  jaccard=0.0906  score=0.3228  fileCov=0.1118
// note: low-confidence suggestion: src/components/ScrollKeybindingHandler.tsx; dir inferred from dep-graph -> hooks; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var I1l = E(() => {
  Qtr = R(rt(), 1);
});
function x1l(e) {
  if (e.wheelUp || e.wheelDown) return false;
  if (e.pageUp || e.pageDown) return false;
  if ((e.home || e.end) && e.ctrl) return false;
  if ((e.leftArrow || e.rightArrow || e.upArrow || e.downArrow || e.home || e.end) && (e.shift || e.meta || e.super)) return false;
  return true;
}
function wMf(e) {
  if (e.name === "pageup" || e.name === "pagedown") return false;
  if ((e.name === "home" || e.name === "end") && e.ctrl) return false;
  if ((e.name === "left" || e.name === "right" || e.name === "up" || e.name === "down" || e.name === "home" || e.name === "end") && (e.shift || e.meta || e.superKey)) return false;
  return true;
}
function k1l(e, t) {
  return n => {
    if (!e.hasSelection()) return;
    if (n.name === "escape") {
      e.clearSelection(), n.consume();
      return;
    }
    if (n.ctrl && !n.shift && !n.meta && n.key === "c") {
      if (t) e.clearSelection();else e.copySelection();
      n.consume();
      return;
    }
    if (wMf(n)) e.clearSelection();
  };
}
function Ztr(e) {
  let t = JNt(),
    n = TUe(e),
    r = n === 1 ? "char" : "chars",
    o;
  switch (t) {
    case "native":
      o = `copied ${n} ${r} to clipboard`;
      break;
    case "tmux-buffer":
      o = `copied ${n} ${r} to tmux buffer \xB7 paste with prefix + ]`;
      break;
    case "osc52":
      o = `sent ${n} ${r} via OSC 52 \xB7 if paste fails, hold ${V0n()} while selecting for native copy`;
      break;
  }
  let s = z0n(e);
  if (s) o = `\u26A0 ${s} \xB7 ${o}`;
  return {
    key: "selection-copied",
    kind: "feedback",
    text: o,
    color: "suggestion",
    priority: "immediate",
    timeoutMs: s ? 6000 : t === "native" ? 2000 : 4000
  };
}
function enr(e, t, n, r) {
  let o = hEt.useRef(false),
    s = hEt.useRef(n);
  s.current = n, hEt.useEffect(() => {
    if (!t) return;
    return UYr(), e.subscribe(() => {
      let a = e.getState(),
        l = e.hasSelection();
      if (a?.isDragging) {
        if (o.current = false, r) r.current = null;
        return;
      }
      if (!l) {
        if (o.current = false, r) r.current = null;
        return;
      }
      if (o.current) {
        if (r) r.current = null;
        return;
      }
      if (!(Dt().copyOnSelect ?? true)) return;
      let u = e.copySelectionNoClear();
      if (!u || !u.trim()) {
        o.current = true;
        return;
      }
      if (o.current = true, r) r.current = u;
      xe("clipboard_write"), s.current?.(u);
    });
  }, [t, e, r]);
}
function tnr(e) {
  let t = GD();
  hEt.useEffect(() => {
    e.setSelectionBgColor(t.selectionBg);
  }, [e, t.selectionBg]);
}
var hEt;