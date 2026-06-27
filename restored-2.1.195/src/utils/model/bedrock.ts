// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DSn
// matched 2.1.88 source: src/utils/model/bedrock.ts
// class=modified  jaccard=0.1984  score=0.3874  fileCov=0.2891
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var DSn = E(() => {
  pSn();
  dSn();
  a7s();
  l7s();
  p7s();
  f7s();
  IBr();
});
function G2e(e, t, n) {
  if (n) {
    let r = e.find((o) => o.startsWith(`${n}.`) && o.includes(t));
    if (r) return r;
  }
  return e.find((r) => r.includes(t)) ?? null;
}
async function g7s() {
  let { BedrockClient: e } = await Promise.resolve().then(() => (NDt(), ODt)),
    t = await nj(),
    n = ut(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH),
    r = {
      region: t,
      ...(process.env.ANTHROPIC_BEDROCK_BASE_URL && {
        endpoint: process.env.ANTHROPIC_BEDROCK_BASE_URL,
      }),
      ...(await jtt({
        url: process.env.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock.${t}.amazonaws.com`,
      })),
      ...(n && {
        requestHandler: new (await Promise.resolve().then(() => R(PG(), 1))).NodeHttpHandler(),
        httpAuthSchemes: [
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: () => async () => ({}),
            signer: new (await Promise.resolve().then(() => R(yd(), 1))).NoAuthSigner(),
          },
        ],
        httpAuthSchemeProvider: () => [
          {
            schemeId: "smithy.api#noAuth",
          },
        ],
      }),
    };
  if (!n && !process.env.AWS_BEARER_TOKEN_BEDROCK) {
    let o = await BG();
    if (o)
      r.credentials = {
        accessKeyId: o.accessKeyId,
        secretAccessKey: o.secretAccessKey,
        sessionToken: o.sessionToken,
      };
  }
  return new e(r);
}
async function h7s() {
  let { BedrockRuntimeClient: e } = await Promise.resolve().then(() => (DSn(), KBr)),
    t = await nj(),
    n = ut(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH),
    r = {
      region: t,
      ...(process.env.ANTHROPIC_BEDROCK_BASE_URL && {
        endpoint: process.env.ANTHROPIC_BEDROCK_BASE_URL,
      }),
      ...(await jtt({
        url: process.env.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${t}.amazonaws.com`,
      })),
      ...(n && {
        requestHandler: new (await Promise.resolve().then(() => R(PG(), 1))).NodeHttpHandler(),
        httpAuthSchemes: [
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: () => async () => ({}),
            signer: new (await Promise.resolve().then(() => R(yd(), 1))).NoAuthSigner(),
          },
        ],
        httpAuthSchemeProvider: () => [
          {
            schemeId: "smithy.api#noAuth",
          },
        ],
      }),
    };
  if (!n && !process.env.AWS_BEARER_TOKEN_BEDROCK) {
    let o = await BG();
    if (o)
      r.credentials = {
        accessKeyId: o.accessKeyId,
        secretAccessKey: o.secretAccessKey,
        sessionToken: o.sessionToken,
      };
  }
  return new e(r);
}
function YBr(e) {
  return e.startsWith("anthropic.");
}
function hld(e) {
  if (!e.startsWith("arn:")) return e;
  let t = e.lastIndexOf("/");
  if (t === -1) return e;
  return e.substring(t + 1);
}
function PSn(e) {
  let t = hld(e);
  for (let n of bDt) if (t.startsWith(`${n}.anthropic.`)) return n;
  return;
}
function PIe(e, t) {
  let n = PSn(e);
  if (n) return e.replace(`${n}.`, `${t}.`);
  if (YBr(e)) return `${t}.${e}`;
  return e;
}
function nle(e) {
  let t = e ?? "";
  if (t.startsWith("us-gov-")) return "us-gov";
  if (t.startsWith("us-")) return "us";
  if (t.startsWith("eu-")) return "eu";
  if (t.startsWith("ap-")) return "apac";
  return "global";
}
var m7s = (e) => e.replace(/\[(1|2)m\]/gi, ""),
  j2e,
  DIe;
