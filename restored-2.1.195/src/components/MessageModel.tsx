// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m5l
// matched 2.1.88 source: src/components/MessageModel.tsx
// class=modified  jaccard=0.2776  score=0.515  fileCov=0.3759
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module m5l] deps: hooks/useTerminalSize.ts, components/design-system/Ratchet.tsx, marked/lib/marked.esm.js, components/LogoV2/feedConfigs.tsx, utils/profilerBase.ts, components/LogoV2/AnimatedClawd.tsx, components/LogoV2/feedConfigs.tsx, bridge/bridgeApi.ts, utils/config.ts, components/Settings/Config.tsx, utils/signal.ts, utils/appleTerminalBackup.ts, components/Feedback.tsx, components/messages/AttachmentMessage.tsx, components/shell/ShellTimeDisplay.tsx, commands/release-notes/release-notes.ts, main.tsx, context/notifications.tsx, utils/tempfile.ts, utils/plugins/pluginPolicy.ts, utils/agentContext.ts, utils/http.ts
((d5l = R(lt(), 1)), (p5l = R(rt(), 1)), (Qg = R(se(), 1)));
function h5l(e) {
  let t = g5l.c(5),
    { message: n, isTranscriptMode: r } = e;
  if (!(r && n.type === "assistant" && n.message.model && n.message.content.some(n4f))) return null;
  let s = rn(n.message.model) + 8,
    i;
  if (t[0] !== n.message.model)
    ((i = zFo.jsx(w, {
      dimColor: true,
      children: n.message.model,
    })),
      (t[0] = n.message.model),
      (t[1] = i));
  else i = t[1];
  let a;
  if (t[2] !== s || t[3] !== i)
    ((a = zFo.jsx(U, {
      minWidth: s,
      children: i,
    })),
      (t[2] = s),
      (t[3] = i),
      (t[4] = a));
  else a = t[4];
  return a;
}
function n4f(e) {
  return e.type === "text";
}
var g5l, zFo;
