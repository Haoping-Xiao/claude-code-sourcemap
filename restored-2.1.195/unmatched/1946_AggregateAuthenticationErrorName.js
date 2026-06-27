// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module _Ai
// class=new  (no 2.1.88 match)
// note: 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var _Ai = E(() => {
  Hle();
});
var Vqr = {};
_t(Vqr, {
  useIdentityPlugin: () => Iyd,
  serializeAuthenticationRecord: () => cEi,
  logger: () => zG,
  getDefaultAzureCredential: () => getDefaultAzureCredential,
  getBearerTokenProvider: () => yAi,
  deserializeAuthenticationRecord: () => uEi,
  WorkloadIdentityCredential: () => Qye,
  VisualStudioCodeCredential: () => uGr,
  UsernamePasswordCredential: () => IOt,
  OnBehalfOfCredential: () => qqr,
  ManagedIdentityCredential: () => jxe,
  InteractiveBrowserCredential: () => Nqr,
  EnvironmentCredential: () => xOt,
  DeviceCodeCredential: () => Uqr,
  DefaultAzureCredential: () => kOt,
  CredentialUnavailableErrorName: () => u3r,
  CredentialUnavailableError: () => hl,
  ClientSecretCredential: () => COt,
  ClientCertificateCredential: () => wOt,
  ClientAssertionCredential: () => L4e,
  ChainedTokenCredential: () => HOt,
  AzurePowerShellCredential: () => AOt,
  AzurePipelinesCredential: () => Fqr,
  AzureDeveloperCliCredential: () => EOt,
  AzureCliCredential: () => SOt,
  AzureAuthorityHosts: () => _le,
  AuthorizationCodeCredential: () => jqr,
  AuthenticationRequiredError: () => yte,
  AuthenticationErrorName: () => yMt,
  AuthenticationError: () => hte,
  AggregateAuthenticationErrorName: () => d3r,
  AggregateAuthenticationError: () => _Mt
});
function getDefaultAzureCredential() {
  return new kOt();
}