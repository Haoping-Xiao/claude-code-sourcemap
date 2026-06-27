// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hAt
// matched 2.1.88 source: src/components/mcp/MCPToolDetailView.tsx
// class=partial  jaccard=0.0724  score=0.1138  fileCov=0.1659
// note: low-confidence suggestion: src/components/mcp/MCPToolDetailView.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var hAt = E(() => {
  oo();
  er();
  je();
  vn();
  dn();
  c_();
  ole();
  jFo = {
    status: "ineligible",
    daysRemaining: null
  };
});
function mor() {
  return at("tengu_ochre_hollow", !1);
}
function a5l() {
  let e = i5l.c(6);
  switch (Oe.CLAUDE_CODE_TUI_JUST_SWITCHED) {
    case "fullscreen":
      {
        let t, n, r, o;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) t = sZ.jsxs(w, {
          children: [sZ.jsx(Hs, {
            status: "success",
            withSpace: !0
          }), sZ.jsx(w, {
            color: "success",
            children: "Using flicker-free rendering"
          }), sZ.jsx(w, {
            dimColor: !0,
            children: " \xB7 if you want to go back, use /tui default"
          })]
        }), n = sZ.jsxs(w, {
          dimColor: !0,
          children: ["  ", "\xB7 Click to move your cursor in the text input"]
        }), r = sZ.jsxs(w, {
          dimColor: !0,
          children: ["  ", "\xB7 Click to expand collapsed tool results"]
        }), o = sZ.jsxs(w, {
          dimColor: !0,
          children: ["  ", "\xB7 By default, text auto-copies when you select it (/config to change)"]
        }), e[0] = t, e[1] = n, e[2] = r, e[3] = o;else t = e[0], n = e[1], r = e[2], o = e[3];
        let s;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) s = sZ.jsxs(U, {
          flexDirection: "column",
          children: [t, n, r, o, sZ.jsxs(w, {
            dimColor: !0,
            children: ["  ", "\xB7 Hold ", V0n(), " while selecting to use your terminal's native copy instead"]
          })]
        }), e[4] = s;else s = e[4];
        return s;
      }
    case "default":
      {
        let t;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) t = sZ.jsx(w, {
          dimColor: !0,
          children: "Switched back to the classic renderer"
        }), e[5] = t;else t = e[5];
        return t;
      }
    default:
      return null;
  }
}
var i5l, sZ;