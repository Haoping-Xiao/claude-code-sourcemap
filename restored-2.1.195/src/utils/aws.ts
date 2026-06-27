// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jnt
// matched 2.1.88 source: src/utils/aws.ts
// class=modified  jaccard=0.5618  score=0.9719  fileCov=0.5711
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function isAwsCredentialsProviderError(e) {
  return e?.name === "CredentialsProviderError";
}
function isValidAwsStsOutput(e) {
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
  if (isValidAwsStsOutput(t.Credentials)) return t.Credentials;
  if (isValidAwsStsOutput(t)) return t;
  return null;
}
async function loi() {
  let { STSClient: e, GetCallerIdentityCommand: t } = await Promise.resolve().then(
    () => (eFr(), ZUr),
  );
  await new e().send(new t({}));
}
async function clearAwsIniCache() {
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
