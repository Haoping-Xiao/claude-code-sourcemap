// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module zH
// matched 2.1.88 source: src/services/teamMemorySync/secretScanner.ts
// class=modified  jaccard=0.779  score=0.7999  fileCov=0.9676
// note: deminified; 15 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var zH = E(() => {
  sr();
  ((gis =
    /api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret/i),
    (b7c = `[^\\s-]{0,4}${his}['"\`]?`),
    (pis = `\\[REDACTED\\]|"[^"]*"|'[^']*'|(?:Bearer|Basic)\\s+(?:\\[REDACTED\\]|${dis})|${b7c}|${dis}`),
    (S7c = ["sk", "ant", "api"].join("-")),
    (E7c = [
      {
        id: "url-userinfo",
        source: ":\\/\\/([^/@\\s]+)@",
        confidence: "low",
      },
      {
        id: "gcp-service-account",
        source: "\\b([a-z0-9-]+@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b",
        flags: "i",
        confidence: "low",
      },
      {
        id: "loose-anthropic-key",
        source: "\\b(sk-ant-?[\\w-]{10,})",
        confidence: "low",
      },
      {
        id: "http-auth-scheme",
        source: "\\b(?:Bearer|Basic)\\s+([A-Za-z0-9+/=._~-]{20,})",
        flags: "i",
        confidence: "low",
      },
      {
        id: "loose-jwt",
        source: "\\b(eyJ[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,})",
        confidence: "low",
      },
      {
        id: "sensitive-assign",
        source: `(?:${gis.source})[\\w.-]*["']?\\s*[=:]\\s*(${pis})`,
        flags: "i",
        confidence: "low",
      },
      {
        id: "cloud-env-var",
        source: `\\b(?:AWS|GOOGLE|GCP|GCLOUD|AZURE)_\\w+\\s*[=:]\\s*(${pis})`,
        flags: "i",
        confidence: "low",
      },
      {
        id: "aws-access-token",
        source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
        confidence: "high",
      },
      {
        id: "gcp-api-key",
        source: `\\b(AIza[\\w-]{35})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "azure-ad-client-secret",
        source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
        confidence: "high",
      },
      {
        id: "digitalocean-pat",
        source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "digitalocean-access-token",
        source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "anthropic-api-key",
        source: `\\b(${S7c}03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "anthropic-admin-api-key",
        source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "openai-api-key",
        source: `\\b(sk-(?:proj|svcacct|admin)-(?:[A-Za-z0-9_-]{74}|[A-Za-z0-9_-]{58})T3BlbkFJ(?:[A-Za-z0-9_-]{74}|[A-Za-z0-9_-]{58})\\b|sk-[a-zA-Z0-9]{20}T3BlbkFJ[a-zA-Z0-9]{20})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "huggingface-access-token",
        source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "github-pat",
        source: "ghp_[0-9a-zA-Z]{36}",
        confidence: "high",
      },
      {
        id: "github-fine-grained-pat",
        source: "github_pat_\\w{82}",
        confidence: "high",
      },
      {
        id: "github-app-token",
        source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}",
        confidence: "high",
      },
      {
        id: "github-oauth",
        source: "gho_[0-9a-zA-Z]{36}",
        confidence: "high",
      },
      {
        id: "github-refresh-token",
        source: "ghr_[0-9a-zA-Z]{36}",
        confidence: "high",
      },
      {
        id: "gitlab-pat",
        source: "glpat-[\\w-]{20}",
        confidence: "high",
      },
      {
        id: "gitlab-deploy-token",
        source: "gldt-[0-9a-zA-Z_\\-]{20}",
        confidence: "high",
      },
      {
        id: "slack-bot-token",
        source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
        confidence: "high",
      },
      {
        id: "slack-user-token",
        source: "xox[pe](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
        confidence: "high",
      },
      {
        id: "slack-app-token",
        source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
        flags: "i",
        confidence: "high",
      },
      {
        id: "twilio-api-key",
        source: "SK[0-9a-fA-F]{32}",
        confidence: "high",
      },
      {
        id: "sendgrid-api-token",
        source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "npm-access-token",
        source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "pypi-upload-token",
        source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}",
        confidence: "high",
      },
      {
        id: "databricks-api-token",
        source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "hashicorp-tf-api-token",
        source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
        confidence: "high",
      },
      {
        id: "pulumi-api-token",
        source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "postman-api-token",
        source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "grafana-api-key",
        source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "grafana-cloud-api-token",
        source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "grafana-service-account-token",
        source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "sentry-user-token",
        source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "sentry-org-token",
        source:
          "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
        confidence: "high",
      },
      {
        id: "stripe-access-token",
        source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
        confidence: "high",
      },
      {
        id: "shopify-access-token",
        source: "shpat_[a-fA-F0-9]{32}",
        confidence: "high",
      },
      {
        id: "shopify-shared-secret",
        source: "shpss_[a-fA-F0-9]{32}",
        confidence: "high",
      },
      {
        id: "private-key",
        source: his,
        flags: "i",
        confidence: "high",
      },
    ]));
  A7c = {
    aws: "AWS",
    gcp: "GCP",
    api: "API",
    pat: "PAT",
    ad: "AD",
    tf: "TF",
    oauth: "OAuth",
    npm: "NPM",
    pypi: "PyPI",
    jwt: "JWT",
    github: "GitHub",
    gitlab: "GitLab",
    openai: "OpenAI",
    digitalocean: "DigitalOcean",
    huggingface: "HuggingFace",
    hashicorp: "HashiCorp",
    sendgrid: "SendGrid",
  };
});
var Eis = {};
_t(Eis, {
  setHasFormattedOutput: () => setHasFormattedOutput,
  resetDebugLogRotationForTest: () => resetDebugLogRotationForTest,
  resetDebugCaches: () => resetDebugCaches,
  maybeRotateDebugLog: () => maybeRotateDebugLog,
  logForDebugging: () => logForDebugging,
  logAntError: () => logAntError,
  isDebugToStdErr: () => isDebugToStdErr,
  isDebugMode: () => isDebugMode,
  getMinDebugLogLevel: () => getMinDebugLogLevel,
  getHasFormattedOutput: () => getHasFormattedOutput,
  getDebugLogPath: () => getDebugLogPath,
  getDebugFilter: () => getDebugFilter,
  getDebugFilePath: () => getDebugFilePath,
  flushDebugLogs: () => flushDebugLogs,
  enableDebugLogging: () => enableDebugLogging,
});
function qin() {
  if (typeof process === "undefined" || !Array.isArray(process.argv)) return [];
  let e = process.argv.indexOf("--");
  return e === -1 ? process.argv : process.argv.slice(0, e);
}
function enableDebugLogging() {
  let e = isDebugMode() || false;
  return ((bis = true), isDebugMode.cache.clear?.(), e);
}
function resetDebugCaches() {
  (getMinDebugLogLevel.cache.clear?.(),
    isDebugMode.cache.clear?.(),
    getDebugFilter.cache.clear?.(),
    isDebugToStdErr.cache.clear?.(),
    getDebugFilePath.cache.clear?.(),
    AUe?.dispose(),
    (AUe = null),
    tAr.cache.clear?.(),
    (EUe = -1),
    (VIt = false),
    (Win = null));
}
function _is(e) {
  return cee(e) ? null : Kge.resolve(e);
}
function T7c(e) {
  if (!isDebugMode()) return false;
  if (
    typeof process === "undefined" ||
    typeof process.versions === "undefined" ||
    typeof process.versions.node === "undefined"
  )
    return false;
  let t = getDebugFilter();
  return Drs(e, t);
}
function setHasFormattedOutput(e) {
  XEr = e;
}
function getHasFormattedOutput() {
  return XEr;
}
async function maybeRotateDebugLog(e, t, n = v7c) {
  if (EUe < 0)
    EUe = await bB
      .stat(e)
      .then((r) => r.size)
      .catch(() => 0);
  else EUe += t;
  if (EUe <= n || VIt) return;
  VIt = true;
  try {
    let r = e.endsWith(".txt") ? `${e.slice(0, -4)}.1.txt` : `${e}.1`;
    try {
      await bB.rename(e, r);
    } catch (o) {
      if (!wn(o))
        (await bB.unlink(r).catch(() => {}),
          await bB.rename(e, r).catch(() => bB.unlink(e).catch(() => {})));
    }
    EUe = 0;
  } finally {
    VIt = false;
  }
}
function resetDebugLogRotationForTest() {
  ((EUe = -1), (VIt = false));
}
function Sis(e) {
  return ((Win = Kge.join(e, `${Rt()}.txt`)), Win);
}
async function C7c(e, t, n, r) {
  if (e)
    await bB
      .mkdir(t, {
        recursive: true,
      })
      .catch(() => {});
  let o = n;
  try {
    await bB.appendFile(n, r);
  } catch (s) {
    if (!Qie(s)) throw s;
    ((o = Sis(n)), await bB.appendFile(o, r));
  }
  (await maybeRotateDebugLog(o, Buffer.byteLength(r)).catch(VEr), tAr());
}
function VEr() {}
function I7c() {
  if (!AUe) {
    let e = null;
    ((AUe = SJe({
      writeFn: (t) => {
        let n = getDebugLogPath(),
          r = Kge.dirname(n),
          o = e !== r;
        if (((e = r), isDebugMode())) {
          if (o)
            try {
              qt().mkdirSync(r);
            } catch {}
          let s = n;
          try {
            qt().appendFileSync(n, t);
          } catch (i) {
            if (!Qie(i)) throw i;
            ((s = Sis(n)), qt().appendFileSync(s, t));
          }
          (maybeRotateDebugLog(s, Buffer.byteLength(t)).catch(VEr), tAr());
          return;
        }
        Gin = Gin.then(C7c.bind(null, o, r, n, t)).catch(VEr);
      },
      flushIntervalMs: 1000,
      maxBufferSize: 100,
      immediateMode: isDebugMode(),
    })),
      Ci(async () => {
        (AUe?.dispose(), await Gin);
      }));
  }
  return AUe;
}
async function flushDebugLogs() {
  (AUe?.flush(), await Gin);
}
function logForDebugging(
  e,
  { level: t } = {
    level: "debug",
  },
) {
  if (qEr[t] < qEr[getMinDebugLogLevel()]) return;
  if (!T7c(e)) return;
  if (
    XEr &&
    e.includes(`
`)
  )
    e = De(e);
  let r = `${new Date().toISOString()} [${t.toUpperCase()}] ${xc(e.trim())}
`;
  if (isDebugToStdErr()) {
    VJe(r);
    return;
  }
  I7c().write(r);
}
function getDebugLogPath() {
  return (
    getDebugFilePath() ??
    Win ??
    process.env.CLAUDE_CODE_DEBUG_LOGS_DIR ??
    Kge.join(tr(), "debug", `${Rt()}.txt`)
  );
}
function logAntError(e, t) {
  return;
}
var bB,
  Kge,
  qEr,
  getMinDebugLogLevel,
  bis = false,
  isDebugMode,
  getDebugFilter,
  isDebugToStdErr,
  getDebugFilePath,
  XEr = false,
  v7c = 10485760,
  AUe = null,
  Gin,
  EUe = -1,
  VIt = false,
  Win = null,
  tAr;
