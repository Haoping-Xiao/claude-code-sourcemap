// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pXt
// matched 2.1.88 source: src/utils/plugins/mcpbHandler.ts
// class=new  jaccard=0.0142  score=0.3052  fileCov=0.0147
// note: nearest: src/utils/plugins/mcpbHandler.ts (0.0142); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pXt = E(() => {
  Xr();
  Rx();
  Pw();
  je();
  At();
  ys();
  Jt();
  dFt();
  B1();
  nrr = require("fs/promises"), FBo = require("path"), H2l = ve(() => H.object({
    always_on: H.number(),
    on_invoke: H.number()
  })), NBo = ve(() => H.object({
    name: H.string(),
    chars: H2l().optional()
  }).loose()), gNf = ve(() => H.object({
    plugin: H.string(),
    tokens: H.record(H.string(), H2l()),
    components: H.object({
      commands: H.array(NBo()),
      agents: H.array(NBo()),
      skills: H.array(NBo()),
      hooks: H.array(H.string()).optional(),
      mcpServers: H.array(H.string()).optional(),
      lspServers: H.array(H.string()).optional()
    }).loose(),
    unique_installs: H.number().optional(),
    last_updated: H.string().optional(),
    marketplace_entry: H.record(H.string(), H.unknown())
  }).loose()), T2l = ve(() => H.object({
    generated_at: H.string(),
    installs_generated_at: H.string().optional(),
    marketplace_sha: H.string(),
    models: H.array(H.string()),
    plugins: H.record(H.string(), gNf())
  }).loose()), hNf = ve(() => H.object({
    version: H.number(),
    fetchedAt: H.string(),
    catalog: T2l()
  }));
});
function SNf(e, t, n, r) {
  let o = {};
  for (let s of e) {
    let i = n[s],
      l = ((t[s] ?? "").split(/\r\n|\r|\n/, 1)[0] ?? "").trim();
    if (l === "") {
      if (i?.sensitive === !0 && r?.[s] !== void 0) continue;
      if (i?.type === "number") continue;
      if (i?.required !== !0 && r?.[s] === void 0) continue;
    }
    if (i?.type === "number") {
      let c = Number(l);
      o[s] = Number.isNaN(c) ? l : c;
    } else if (i?.type === "boolean") o[s] = ut(l);else o[s] = l;
  }
  return o;
}
function fXt(e) {
  let t = x2l.c(24),
    {
      title: n,
      subtitle: r,
      configSchema: o,
      initialValues: s,
      onSave: i,
      onCancel: a
    } = e,
    l;
  if (t[0] !== o) l = Object.keys(o), t[0] = o, t[1] = l;else l = t[1];
  let c = l,
    u;
  if (t[2] !== o || t[3] !== c || t[4] !== s) u = () => {
    let b = {};
    for (let _ of c) {
      let S = o[_]?.sensitive === !0 ? void 0 : s?.[_];
      b[_] = S === void 0 ? "" : String(S);
    }
    return b;
  }, t[2] = o, t[3] = c, t[4] = s, t[5] = u;else u = t[5];
  let [d, p] = k2l.useState(u),
    f;
  if (t[6] !== o || t[7] !== c || t[8] !== s) f = c.map(b => {
    let _ = o[b],
      S = _?.sensitive === !0,
      A = S && s?.[b] !== void 0;
    return {
      type: "text",
      key: b,
      label: _?.title || b,
      required: _?.required === !0 && !A,
      mask: S ? "*" : void 0,
      placeholder: A ? "(unchanged)" : void 0,
      hint: () => _?.description
    };
  }), t[6] = o, t[7] = c, t[8] = s, t[9] = f;else f = t[9];
  let m = f;
  if (c.length === 0) return null;
  let g;
  if (t[10] === Symbol.for("react.memo_cache_sentinel")) g = (b, _) => p(S => ({
    ...S,
    [b]: _
  })), t[10] = g;else g = t[10];
  let h;
  if (t[11] !== o || t[12] !== c || t[13] !== s || t[14] !== i || t[15] !== d) h = () => i(SNf(c, d, o, s)), t[11] = o, t[12] = c, t[13] = s, t[14] = i, t[15] = d, t[16] = h;else h = t[16];
  let y;
  if (t[17] !== m || t[18] !== a || t[19] !== r || t[20] !== h || t[21] !== n || t[22] !== d) y = R2l.jsx(qPe, {
    title: n,
    subtitle: r,
    fields: m,
    values: d,
    onChange: g,
    onSubmit: h,
    onCancel: a,
    submitLabel: "Save configuration"
  }), t[17] = m, t[18] = a, t[19] = r, t[20] = h, t[21] = n, t[22] = d, t[23] = y;else y = t[23];
  return y;
}
var x2l, k2l, R2l;