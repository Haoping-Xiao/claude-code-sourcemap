// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module dql
// matched 2.1.88 source: src/components/PromptInput/PromptInput.tsx
// class=new  jaccard=0.0043  score=0.107  fileCov=0.0045
// note: nearest: src/components/PromptInput/PromptInput.tsx (0.0043); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module dql] deps: @xmldom/xmldom/lib/entities.js, ink/terminal.ts, hooks/useTerminalSize.ts, components/TextInput.tsx, utils/settings/settings.ts, @xmldom/xmldom/lib/entities.js
JXt = R(rt(), 1), XXt = R(se(), 1), D4f = cql * L4f, P4f = qM({
  r: 153,
  g: 153,
  b: 153
});
function fql() {
  if (Uke() !== "downsell_on") return false;
  return (Dt().fullscreenDownsellSeenCount ?? 0) < pql;
}
function mql() {
  let e = s2o.c(1);
  b6("fullscreen-downsell", M4f);
  let t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = wse.jsx($4f, {}), e[0] = t;else t = e[0];
  return t;
}
function M4f() {
  let e = 0;
  if (gn(t => (e = (t.fullscreenDownsellSeenCount ?? 0) + 1, {
    ...t,
    fullscreenDownsellSeenCount: e
  })), G("tengu_fullscreen_downsell_shown", {
    seen_count: e
  }), e >= pql && Dr().tui === void 0) {
    let {
      error: t
    } = io("userSettings", {
      tui: "fullscreen"
    });
    if (t) {
      T(`fullscreen downsell graduation persist failed: ${t.message}`, {
        level: "error"
      });
      return;
    }
    G("tengu_fullscreen_downsell_persisted", {
      seen_count: e
    });
  }
}
function $4f() {
  let e = s2o.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = wse.jsxs(U, {
    flexDirection: "column",
    children: [wse.jsxs(U, {
      flexDirection: "row",
      children: [wse.jsx(uql, {}), wse.jsx(w, {
        color: "autoAccept",
        children: " Using flicker-free rendering"
      })]
    }), wse.jsxs(w, {
      dimColor: true,
      children: ["  ", "\xB7 Scroll with your trackpad, scroll wheel, or PageUp/PageDown"]
    }), wse.jsxs(w, {
      dimColor: true,
      children: ["  ", "\xB7 Select text to copy \u2014 copying is automatic (/config to disable)"]
    }), wse.jsxs(w, {
      dimColor: true,
      children: ["  ", "\xB7 Click to move your cursor or expand collapsed results"]
    }), wse.jsxs(w, {
      dimColor: true,
      children: ["  ", "\xB7 /tui default to go back (saved to your preferences)"]
    })]
  }), e[0] = t;else t = e[0];
  return t;
}
var s2o,
  wse,
  pql = 5;