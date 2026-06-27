// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JVl
// matched 2.1.88 source: src/commands/install-github-app/CheckExistingSecretStep.tsx
// class=partial  jaccard=0.1354  score=0.2368  fileCov=0.2402
// note: low-confidence suggestion: src/commands/install-github-app/CheckExistingSecretStep.tsx; dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var JVl = E(() => {
  fn();
  XVl = {
    type: "local-jsx",
    name: "setup-bedrock",
    description: "Reconfigure Amazon Bedrock authentication, region, or model pins",
    get isHidden() {
      return !ut(process.env.CLAUDE_CODE_USE_BEDROCK);
    },
    load: () => Promise.resolve().then(() => (YVl(), KVl))
  };
});
var ZVl = {};
_t(ZVl, {
  call: () => call
});
async function call(e) {
  return G("tengu_vertex_setup_started", {}), S1e.jsx(XGf, {
    onDone: e
  });
}
function XGf({
  onDone: e
}) {
  let t = TW(),
    [n, r] = QVl.useState(null);
  if ($r("confirm:yes", () => {
    t.exit(), Promise.resolve().then(() => (K9e(), z9e)).then(o => o.execRelaunch());
  }, {
    context: "Confirmation",
    isActive: n !== null
  }), n !== null) return S1e.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    marginTop: 1,
    children: [S1e.jsx(w, {
      color: "success",
      children: n
    }), S1e.jsxs(w, {
      dimColor: true,
      children: ["Press ", S1e.jsx(w, {
        bold: true,
        children: "Enter"
      }), " to restart Claude Code."]
    })]
  });
  return S1e.jsx(o8n, {
    onComplete: o => r(o),
    onCancel: () => {
      G("tengu_vertex_setup_cancelled", {}), e();
    }
  });
}
var QVl, S1e;