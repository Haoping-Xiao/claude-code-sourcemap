// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SAc
// matched 2.1.88 source: src/hooks/useIdeSelection.ts
// class=modified  jaccard=0.3349  score=1  fileCov=0.3349
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SAc] deps: hooks/useTerminalSize.ts, context/notifications.tsx, utils/mcpInstructionsDelta.ts, components/DiagnosticsDisplay.tsx, components/ConfigurableShortcutHint.tsx, components/shell/ShellTimeDisplay.tsx
((_Ac = R(lt(), 1)), (Bme = R(se(), 1)));
function EAc(e, t) {
  let n = otn.useRef(false),
    r = otn.useRef(null);
  otn.useEffect(() => {
    let o = p5(e);
    if (r.current !== (o ?? null))
      ((n.current = false),
        (r.current = o || null),
        t({
          lineCount: 0,
          lineStart: void 0,
          text: void 0,
          filePath: void 0,
        }));
    if (n.current || !o) return;
    let s = (i) => {
      if (i.selection?.start && i.selection?.end) {
        let { start: a, end: l } = i.selection,
          c = l.line - a.line + 1;
        if (l.character === 0) c--;
        let u = {
          lineCount: c,
          lineStart: a.line + 1,
          text: i.text,
          filePath: i.filePath,
        };
        t(u);
      }
    };
    (o.client.setNotificationHandler(_ym(), (i) => {
      if (r.current !== o) return;
      try {
        let a = i.params;
        if (a.selection && a.selection.start && a.selection.end) s(a);
        else if (a.text !== void 0)
          s({
            selection: null,
            text: a.text,
            filePath: a.filePath,
          });
      } catch (a) {
        ke(a);
      }
    }),
      (n.current = true));
  }, [e, t]);
}
var otn, _ym;
