// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aXa
// matched 2.1.88 source: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/signin/index.js
// class=new  jaccard=0.0221  score=0.2789  fileCov=0.0235
// note: nearest: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/signin/index.js (0.0221); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module aXa] deps: commands/plugin/PluginOptionsDialog.tsx, @ant/computer-use-mcp/src/toolCalls.ts
rXa = R(lt(), 1), oXa = R(rt(), 1), iXa = R(se(), 1), P7p = [{
  type: "text",
  key: "accessKeyId",
  label: "Access key ID",
  placeholder: "AKIA\u2026",
  required: true
}, {
  type: "text",
  key: "secretAccessKey",
  label: "Secret access key",
  mask: "*",
  required: true
}, {
  type: "text",
  key: "sessionToken",
  label: "Session token",
  mask: "*",
  hint: () => "Only needed for temporary credentials from STS. Leave empty for long-lived keys."
}];
var XEe;