// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kLe
// matched 2.1.88 source: src/components/messages/AttachmentMessage.tsx
// class=new  jaccard=0.0117  score=0.2891  fileCov=0.012
// note: nearest: src/components/messages/AttachmentMessage.tsx (0.0117); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module kLe] deps: components/design-system/Ratchet.tsx, ink/selection.ts, hooks/useTerminalSize.ts, context/stats.tsx, utils/fsOperations.ts, tools/ListMcpResourcesTool/prompt.ts, components/design-system/ThemeProvider.tsx, commands/add-dir/validation.ts, components/CtrlOToExpand.tsx, components/PromptInput/PromptInput.tsx
oda = R(lt(), 1), sda = R(rt(), 1), zNn = R(se(), 1);
Uup = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g;
function ada(e) {
  return e.server ? `List MCP resources from server "${e.server}"` : "List all MCP resources";
}
function lda(e, t, {
  verbose: n
}) {
  if (!e || e.length === 0) return YNn.jsx(qn, {
    height: 1,
    children: YNn.jsx(Fl, {
      children: "(No resources found)"
    })
  });
  let r = De(e, null, 2);
  return YNn.jsx(J1, {
    content: r,
    verbose: n
  });
}
var YNn;