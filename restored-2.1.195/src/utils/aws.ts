// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jnt
// matched 2.1.88 source: src/utils/aws.ts
// class=modified  jaccard=0.5618  score=0.9719  fileCov=0.5711
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function isAwsCredentialsProviderError(err) {
  return err?.name === "CredentialsProviderError";
}
function isValidAwsStsOutput(obj) {
  if (!obj || typeof obj !== "object") return false;
  let credentials = obj;
  return (
    typeof credentials.AccessKeyId === "string" &&
    typeof credentials.SecretAccessKey === "string" &&
    typeof credentials.SessionToken === "string" &&
    credentials.AccessKeyId.length > 0 &&
    credentials.SecretAccessKey.length > 0 &&
    credentials.SessionToken.length > 0
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
