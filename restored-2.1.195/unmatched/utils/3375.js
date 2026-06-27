// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cjn
// matched 2.1.88 source: src/hooks/useVoiceIntegration.tsx
// class=new  jaccard=0.0562  score=0.3227  fileCov=0.0637
// note: nearest: src/hooks/useVoiceIntegration.tsx (0.0562); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module cjn] deps: hooks/useTerminalSize.ts, utils/profilerBase.ts, commands/add-dir/validation.ts, components/shell/ShellTimeDisplay.tsx, tools/BashTool/UI.tsx
SMa = R(lt(), 1), j4 = R(se(), 1);
function fRp(e) {
  for (let t of e) {
    if (t.context !== "Task") continue;
    let n = nX(t.chord);
    if (t.action === "task:background") {
      if (!EMa.has(n)) return true;
    } else if (t.action === null && EMa.has(n)) return true;
  }
  return false;
}
function ujn({
  handler: e,
  isActive: t
}) {
  let n = Jj(),
    r = Uu("task:background", "Task", qGt),
    o = KE(),
    s = o?.bindings,
    i = Vpt.useMemo(() => s ? fRp(s) : false, [s]),
    a = Vpt.useRef(e);
  a.current = e;
  let l = !(n && !i);
  Vpt.useEffect(() => {
    if (!o || !t) return;
    return o.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => a.current(),
      singleKey: l
    });
  }, [o, t, l]);
  let c = i ? r : AMa,
    u = r === "" ? "" : Oe.terminal === "tmux" ? c.split(" ").map(d => d === qGt ? `${qGt} ${qGt}` : d).join(" ") : c;
  return {
    cohesionFixes: n,
    gateOnShortcut: u,
    resolvedShortcut: r
  };
}
var Vpt,
  qGt = "ctrl+b",
  AMa = "ctrl+x ctrl+b",
  EMa;