// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jnt
// matched 2.1.88 source: src/utils/aws.ts
// class=modified  jaccard=0.5618  score=0.9719  fileCov=0.5711
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var jnt = E(() => {
  Cgn();
  xZs();
  Nri();
  Bri();
  Uri();
  Fri();
  jri();
  Wri();
  qri();
  c2r();
  Vri();
  zri();
  noi();
  roi();
  ooi();
});
function ioi(e) {
  return e?.name === "CredentialsProviderError";
}
function soi(e) {
  if (!e || typeof e !== "object") return false;
  let t = e;
  return (
    typeof t.AccessKeyId === "string" &&
    typeof t.SecretAccessKey === "string" &&
    typeof t.SessionToken === "string" &&
    t.AccessKeyId.length > 0 &&
    t.SecretAccessKey.length > 0 &&
    t.SessionToken.length > 0
  );
}
function aoi(e) {
  if (!e || typeof e !== "object") return null;
  let t = e;
  if (soi(t.Credentials)) return t.Credentials;
  if (soi(t)) return t;
  return null;
}
async function loi() {
  let { STSClient: e, GetCallerIdentityCommand: t } = await Promise.resolve().then(
    () => (eFr(), ZUr),
  );
  await new e().send(new t({}));
}
async function coi() {
  try {
    T("Clearing AWS credential provider cache");
    let { fromIni: e } = await Promise.resolve().then(() => (jnt(), Fnt));
    (await e({
      ignoreCache: true,
    })(),
      T("AWS credential provider cache refreshed"));
  } catch (e) {
    T("Failed to clear AWS credential cache (this is expected if no credentials are configured)");
  }
}
