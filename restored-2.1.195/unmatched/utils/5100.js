// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Z7l
// matched 2.1.88 source: src/components/HelpV2/HelpV2.tsx
// class=new  jaccard=0.0438  score=0.1079  fileCov=0.0686
// note: nearest: src/components/HelpV2/HelpV2.tsx (0.0438); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Z7l]
Q7l = {
  isEnabled: () => false,
  isHidden: true,
  name: "stub"
};
function J9f() {
  let e = `${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.VERSION}${L2()}`;
  return {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.BUILD_TIME ? `${e} (built ${{
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.BUILD_TIME})` : e;
}
function Q9f(e) {
  let t = eXl.c(21),
    {
      onDone: n
    } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) r = Ju(), t[0] = r;else r = t[0];
  let o = r,
    s;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) s = o !== null && LO("controlChannel"), t[1] = s;else s = t[1];
  let i = s,
    a;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) a = i ? {
    state: "loading"
  } : null, t[2] = a;else a = t[2];
  let [l, c] = Jsr.useState(a),
    u,
    d;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) u = () => {
    if (!o || !i) return;
    let v = false;
    return o.sendControlRequest({
      subtype: "get_binary_version"
    }).then(C => {
      if (v) return;
      c({
        state: "ok",
        version: C.version,
        buildTime: C.buildTime
      });
    }).catch(C => {
      if (v) return;
      c({
        state: "error",
        message: be(C)
      });
    }), () => {
      v = true;
    };
  }, d = [o, i], t[3] = u, t[4] = d;else u = t[3], d = t[4];
  Jsr.useEffect(u, d);
  let p;
  if (t[5] !== n) p = function (C) {
    if (C.key === "escape" || C.key === "return" || C.key === " ") C.preventDefault(), n(void 0, {
      display: "skip"
    });
  }, t[5] = n, t[6] = p;else p = t[6];
  let f = p,
    m;
  if (t[7] === Symbol.for("react.memo_cache_sentinel")) m = yR.jsx(LH, {
    children: "Claude Code"
  }), t[7] = m;else m = t[7];
  let g;
  if (t[8] !== l) g = l && yR.jsx(w, {
    dimColor: true,
    children: "Thin client"
  }), t[8] = l, t[9] = g;else g = t[9];
  let h, y;
  if (t[10] === Symbol.for("react.memo_cache_sentinel")) y = yR.jsxs(w, {
    children: [{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION, L2()]
  }), h = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.195",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-06-26T01:00:56Z",
    GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
  }.BUILD_TIME && yR.jsxs(w, {
    dimColor: true,
    children: ["Built ", {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.BUILD_TIME]
  }), t[10] = h, t[11] = y;else h = t[10], y = t[11];
  let b;
  if (t[12] !== l) b = l && yR.jsxs(U, {
    flexDirection: "column",
    marginTop: 1,
    children: [yR.jsx(w, {
      dimColor: true,
      children: "Remote container"
    }), l.state === "loading" && yR.jsx(w, {
      dimColor: true,
      children: "Loading\u2026"
    }), l.state === "ok" && yR.jsxs(yR.Fragment, {
      children: [yR.jsx(w, {
        children: l.version
      }), l.buildTime && yR.jsxs(w, {
        dimColor: true,
        children: ["Built ", l.buildTime]
      })]
    }), l.state === "error" && yR.jsxs(w, {
      dimColor: true,
      children: ["Couldn't fetch: ", l.message]
    })]
  }), t[12] = l, t[13] = b;else b = t[13];
  let _;
  if (t[14] !== b || t[15] !== g) _ = yR.jsxs(U, {
    flexDirection: "column",
    children: [g, y, h, b]
  }), t[14] = b, t[15] = g, t[16] = _;else _ = t[16];
  let S;
  if (t[17] === Symbol.for("react.memo_cache_sentinel")) S = yR.jsx(vb, {
    children: yR.jsx(ht, {
      chord: "escape",
      action: "close"
    })
  }), t[17] = S;else S = t[17];
  let A;
  if (t[18] !== f || t[19] !== _) A = yR.jsx(Fu, {
    children: yR.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: f,
      children: [m, _, S]
    })
  }), t[18] = f, t[19] = _, t[20] = A;else A = t[20];
  return A;
}
var eXl,
  Jsr,
  yR,
  Z9f = async e => yR.jsx(Q9f, {
    onDone: e
  }),
  e8f,
  t8f = async () => ({
    type: "text",
    value: J9f()
  }),
  _4o,
  b4o;