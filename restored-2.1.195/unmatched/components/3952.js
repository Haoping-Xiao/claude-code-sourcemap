// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lQa
// matched 2.1.88 source: src/utils/managedEnvConstants.ts
// class=new  jaccard=0.0253  score=0.1165  fileCov=0.0313
// note: nearest: src/utils/managedEnvConstants.ts (0.0253); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lQa = E(() => {
  Ye();
  BE();
  Vl();
  gm();
  EC();
  wb();
  vH();
  XHo();
  QHo = R(lt(), 1), wF = R(rt(), 1), ey = R(se(), 1), oMe = ["sonnet", "opus", "haiku", "fable"], JHo = {
    sonnet: "Sonnet",
    opus: "Opus",
    haiku: "Haiku",
    fable: "Fable"
  }, MJp = {
    sonnet: "ANTHROPIC_DEFAULT_SONNET_MODEL",
    opus: "ANTHROPIC_DEFAULT_OPUS_MODEL",
    haiku: "ANTHROPIC_DEFAULT_HAIKU_MODEL",
    fable: "ANTHROPIC_DEFAULT_FABLE_MODEL"
  };
  iQa = {
    auth: "auth failed",
    permission: "no aiplatform.endpoints.predict permission",
    model: "not enabled in this project",
    network: "unreachable",
    other: "request failed"
  };
});
async function uQa() {
  let e = new Set(),
    t = process.env.CLOUDSDK_CONFIG ?? UJp();
  try {
    let n = jVt.join(t, "configurations");
    for (let r of await GVt.readdir(n)) {
      if (!r.startsWith("config_")) continue;
      try {
        let o = await GVt.readFile(jVt.join(n, r), "utf8");
        for (let s of o.matchAll(/^project\s*=\s*(\S+)/gm)) {
          let i = s[1]?.trim();
          if (i) e.add(i);
        }
      } catch {}
    }
  } catch {}
  try {
    let n = Ft(await GVt.readFile(jVt.join(t, "application_default_credentials.json"), "utf8"));
    if (n.quota_project_id) e.add(n.quota_project_id);
  } catch {}
  return [...e].sort();
}
function UJp() {
  return jVt.join(cQa.homedir(), ".config", "gcloud");
}
var GVt, cQa, jVt;