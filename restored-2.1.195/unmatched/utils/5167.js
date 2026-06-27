// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KQl
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.0038  score=0.2207  fileCov=0.0039
// note: nearest: src/cli/print.ts (0.0038); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var KQl = E(() => {
  id();
  er();
  rit();
  uf();
  vn();
  dr();
  Nzf = {
    type: "local-jsx",
    name: "focus",
    description: "Toggle focus view: just your prompt, summary, and response",
    immediate: !0,
    requires: {
      ink: !0
    },
    load: () => Promise.resolve({
      async call(e, t) {
        if (!Ns()) {
          if (Dr().viewMode === "focus") return e(`Focus view is set by "viewMode": "focus" in settings.json \u2014 remove it there and restart Claude Code to turn it off. ${"Focus view needs the fullscreen renderer. Run /tui fullscreen to switch (this restarts and resumes your session), or set CLAUDE_CODE_NO_FLICKER=1 and restart."}`, {
            display: "system"
          }), null;
          if (t.getAppState().briefTranscript || Dt().briefTranscript) {
            if (t.onQueryEvent?.({
              type: "apply_flag_settings",
              settings: {
                briefTranscript: !1
              }
            }), Dt().briefTranscript) gn(a => ({
              ...a,
              briefTranscript: !1
            }));
            RNt();
            let i = zQl(!1);
            return e(`Focus view disabled.${i ?? ""} Focus view needs the fullscreen renderer. Run /tui fullscreen to switch (this restarts and resumes your session), or set CLAUDE_CODE_NO_FLICKER=1 and restart.`, {
              display: "system"
            }), null;
          }
          return e("Focus view needs the fullscreen renderer. Run /tui fullscreen to switch (this restarts and resumes your session), or set CLAUDE_CODE_NO_FLICKER=1 and restart.", {
            display: "system"
          }), null;
        }
        let r = !t.getAppState().briefTranscript;
        if (t.onQueryEvent?.({
          type: "apply_flag_settings",
          settings: {
            briefTranscript: r
          }
        }), Dt().briefTranscript !== r) gn(i => ({
          ...i,
          briefTranscript: r
        }));
        RNt();
        let o = Dr().viewMode,
          s = zQl(o ? o === "focus" : r);
        return e(`${r ? "Focus view enabled" : "Focus view disabled"}${s ?? ""}`, {
          display: "system"
        }), null;
      }
    })
  }, h3o = Nzf;
});
var YQl;