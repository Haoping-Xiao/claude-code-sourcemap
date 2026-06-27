// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aXa
// matched 2.1.88 source: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/signin/index.js
// class=new  jaccard=0.0452  score=0.337  fileCov=0.0496
// note: nearest: node_modules/@aws-sdk/nested-clients/dist-cjs/submodules/signin/index.js (0.0452); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var aXa = E(() => {
  TVt();
  wb();
  rXa = R(lt(), 1), oXa = R(rt(), 1), iXa = R(se(), 1), P7p = [{
    type: "text",
    key: "accessKeyId",
    label: "Access key ID",
    placeholder: "AKIA\u2026",
    required: !0
  }, {
    type: "text",
    key: "secretAccessKey",
    label: "Secret access key",
    mask: "*",
    required: !0
  }, {
    type: "text",
    key: "sessionToken",
    label: "Session token",
    mask: "*",
    hint: () => "Only needed for temporary credentials from STS. Leave empty for long-lived keys."
  }];
});
var XEe;