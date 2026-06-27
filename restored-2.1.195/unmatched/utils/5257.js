// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module boc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0047  score=0.2119  fileCov=0.0048
// note: nearest: src/screens/REPL.tsx (0.0047); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module boc]
HQf = {
  type: "local-jsx",
  name: "background",
  aliases: ["bg"],
  description: "Send this session to the background and free the terminal",
  argumentHint: "[prompt]",
  immediate: e => !e.trim(),
  isEnabled: () => true,
  load: () => Promise.resolve().then(() => (IWo(), yoc))
}, TQf = HQf;
function vQf() {
  return process.env.CLAUDE_JOB_DIR;
}
async function Yar(e) {
  G("tengu_bg_agent_action", {
    action: We("stop"),
    source: $e(e),
    jobSessionId: Hr(Rt())
  });
  let t = vQf();
  if (Js() && t) {
    let n = new Date().toISOString(),
      r = await zi(t);
    if (r && !Vh(r)) await Kd(t, {
      ...r,
      state: "stopped",
      detail: "stopped from session",
      tempo: "idle",
      needs: void 0,
      block: void 0,
      inFlight: void 0,
      updatedAt: n,
      firstTerminalAt: r.firstTerminalAt ?? n
    }).catch(Xf);
    if (OAn()) process.stdout.write(kfe("Session stopped."));
  }
  return xe("job_stop_self"), ki(0, "prompt_input_exit", {
    suppressResumeHint: true
  });
}