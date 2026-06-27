// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module QJa
// matched 2.1.88 source: src/components/mcp/ElicitationDialog.tsx
// class=new  jaccard=0.0396  score=0.2085  fileCov=0.0466
// note: nearest: src/components/mcp/ElicitationDialog.tsx (0.0396); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var QJa = E(() => {
  Ye();
  Vl();
  wb();
  vH();
  Z9n();
  XJa = R(lt(), 1), hht = R(se(), 1);
});
function xJp(e) {
  let t = {
    CLAUDE_CODE_USE_VERTEX: "1",
    CLAUDE_CODE_USE_BEDROCK: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    CLAUDE_CODE_USE_MANTLE: void 0,
    ANTHROPIC_VERTEX_PROJECT_ID: e.projectId,
    CLOUD_ML_REGION: e.region,
    GOOGLE_APPLICATION_CREDENTIALS: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0
  };
  if (e.authMethod === "serviceAccount") t.GOOGLE_APPLICATION_CREDENTIALS = e.keyFile;
  if (e.pinSonnet) t.ANTHROPIC_DEFAULT_SONNET_MODEL = e.pinSonnet;
  if (e.pinOpus) t.ANTHROPIC_DEFAULT_OPUS_MODEL = e.pinOpus;
  if (e.pinFable) t.ANTHROPIC_DEFAULT_FABLE_MODEL = e.pinFable;
  if (e.pinHaiku) t.ANTHROPIC_DEFAULT_HAIKU_MODEL = e.pinHaiku;
  return t;
}
function tQa(e) {
  let t = ZJa.c(29),
    {
      onComplete: n
    } = e,
    {
      goBack: r,
      wizardData: o
    } = Eu(),
    [s, i] = eQa.useState(null),
    a;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) a = fM(xg("userSettings") ?? "~/.claude/settings.json"), t[0] = a;else a = t[0];
  let l = a,
    c;
  if (t[1] !== o) c = xJp(o), t[1] = o, t[2] = c;else c = t[2];
  let u = c,
    d;
  if (t[3] !== u) d = Object.entries(u).filter(RJp), t[3] = u, t[4] = d;else d = t[4];
  let p = d,
    f;
  if (t[5] !== u || t[6] !== n || t[7] !== o.authMethod || t[8] !== o.pinFable || t[9] !== o.pinHaiku || t[10] !== o.pinOpus || t[11] !== o.pinSonnet || t[12] !== o.verifiedIdentity) f = () => {
    let {
      error: A
    } = io("userSettings", {
      env: u
    });
    if (A) {
      i(A.message);
      return;
    }
    G("tengu_vertex_setup_complete", {
      auth_method: Oo(o.authMethod),
      pinned_models: Boolean(o.pinSonnet || o.pinOpus || o.pinFable || o.pinHaiku),
      verified: Boolean(o.verifiedIdentity)
    }), n(`Vertex AI configuration saved to ${l}.${o.authMethod === "adc" ? " When your ADC token expires, run `gcloud auth application-default login` \u2014 Claude Code picks up refreshed credentials automatically." : ""}`);
  }, t[5] = u, t[6] = n, t[7] = o.authMethod, t[8] = o.pinFable, t[9] = o.pinHaiku, t[10] = o.pinOpus, t[11] = o.pinSonnet, t[12] = o.verifiedIdentity, t[13] = f;else f = t[13];
  let m = f,
    g;
  if (t[14] === Symbol.for("react.memo_cache_sentinel")) g = YJ.jsxs(w, {
    children: ["These will be written to ", l, " under env:"]
  }), t[14] = g;else g = t[14];
  let h;
  if (t[15] !== p) h = YJ.jsx(U, {
    flexDirection: "column",
    children: p.map(kJp)
  }), t[15] = p, t[16] = h;else h = t[16];
  let y;
  if (t[17] !== o.verifiedIdentity) y = o.verifiedIdentity && YJ.jsxs(w, {
    dimColor: true,
    children: [YJ.jsx(Hs, {
      status: "success",
      withSpace: true
    }), "Verified as ", o.verifiedIdentity]
  }), t[17] = o.verifiedIdentity, t[18] = y;else y = t[18];
  let b;
  if (t[19] !== s) b = YJ.jsx(Va, {
    error: s
  }), t[19] = s, t[20] = b;else b = t[20];
  let _;
  if (t[21] !== r || t[22] !== m) _ = YJ.jsx(Kl, {
    confirmLabel: "Save",
    cancelLabel: "Cancel",
    onConfirm: m,
    onCancel: r
  }), t[21] = r, t[22] = m, t[23] = _;else _ = t[23];
  let S;
  if (t[24] !== h || t[25] !== y || t[26] !== b || t[27] !== _) S = YJ.jsx(Pc, {
    subtitle: "Confirm and save",
    children: YJ.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [g, h, y, b, _]
    })
  }), t[24] = h, t[25] = y, t[26] = b, t[27] = _, t[28] = S;else S = t[28];
  return S;
}
function kJp(e) {
  let [t, n] = e;
  return YJ.jsxs(w, {
    children: ["  ", YJ.jsx(w, {
      color: "suggestion",
      children: t
    }), " = ", n]
  }, t);
}
function RJp(e) {
  return e[1] !== void 0;
}
var ZJa, eQa, YJ;