// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EC
// matched 2.1.88 source: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js
// class=new  jaccard=0.0015  score=0.0491  fileCov=0.0015
// note: nearest: node_modules/@aws-sdk/client-bedrock/dist-cjs/index.js (0.0015); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var EC = E(() => {
  Ye();
  loe();
  ft();
  Un();
  wr();
  Mne();
  DHo();
  cEe();
  es();
  B9n();
  tgo();
  ql();
  MHo();
  W9n();
  uo();
  _i();
  Tc();
  mJa();
  Hde();
  UHo();
  w4();
  Cp();
  Ao();
  ft();
  Ye();
  er();
  FVt = R(lt(), 1), KJ = R(rt(), 1), $f = R(se(), 1), TJa = ube(), vJa = [...TJa, ...[...TJa].reverse()];
});
function FHo(e) {
  let t = nle(e),
    n = r => ({
      needle: yc[r].firstParty,
      fallback: PIe(yc[r].bedrock, t)
    });
  return {
    sonnet: n(_j),
    opus: n(VY),
    haiku: n(zY),
    fable: n(NPt)
  };
}
async function xJa(e) {
  if (e.authMethod === "bearer") return uJp(e);
  try {
    let t = await kJa(e),
      r = {
        ...(await jtt({
          url: `https://bedrock.${e.region}.amazonaws.com`
        })),
        region: e.region,
        ...(t && {
          credentials: t
        })
      },
      {
        STSClient: o,
        GetCallerIdentityCommand: s
      } = await Promise.resolve().then(() => (eFr(), ZUr)),
      i = await new o(r).send(new s({})),
      a = i.Arn ?? i.UserId ?? "(unknown)",
      {
        BedrockClient: l,
        ListInferenceProfilesCommand: c
      } = await Promise.resolve().then(() => (NDt(), ODt)),
      u = new l(r),
      d = [],
      p;
    do {
      let f = await u.send(new c({
        ...(p && {
          nextToken: p
        }),
        typeEquals: "SYSTEM_DEFINED"
      }));
      for (let m of f.inferenceProfileSummaries ?? []) if (m.inferenceProfileId?.includes("anthropic")) d.push(m.inferenceProfileId);
      p = f.nextToken;
    } while (p);
    return {
      status: "ok",
      identity: a,
      profiles: d
    };
  } catch (t) {
    return {
      status: "error",
      ...dJp(t, e)
    };
  }
}
async function G9e(e, t) {
  let n;
  try {
    n = await lJp(e);
  } catch {
    return {
      ok: !1,
      reason: "auth"
    };
  }
  try {
    return await n.messages.create({
      model: ya(t),
      max_tokens: 1,
      messages: [{
        role: "user",
        content: "."
      }]
    }), {
      ok: !0
    };
  } catch (r) {
    let o = r?.status;
    if (o === 401) return {
      ok: !1,
      reason: "auth"
    };
    if (o === 403) return {
      ok: !1,
      reason: "permission"
    };
    if (o === 400 || o === 404) return {
      ok: !1,
      reason: "model"
    };
    if (o === 429) return {
      ok: !0
    };
    if (o === void 0) return {
      ok: !1,
      reason: "network"
    };
    return {
      ok: !1,
      reason: "other"
    };
  }
}
async function lJp(e) {
  let [{
      AnthropicBedrock: t
    }, {
      getProxyFetchOptions: n
    }] = await Promise.all([Promise.resolve().then(() => (Aje(), Eje)), Promise.resolve().then(() => (Mh(), k2e))]),
    r = {
      awsRegion: e.region,
      maxRetries: 0,
      fetchOptions: n({
        url: process.env.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${e.region}.amazonaws.com`
      })
    },
    o = await cJp(e);
  switch (o.kind) {
    case "bearer":
      return new t({
        ...r,
        apiKey: o.token
      });
    case "sigv4":
      return new t({
        ...r,
        awsAccessKey: o.accessKeyId,
        awsSecretKey: o.secretAccessKey,
        awsSessionToken: o.sessionToken
      });
    case "default":
      return new t(r);
  }
}
async function cJp(e) {
  if (e.authMethod === "bearer") return {
    kind: "bearer",
    token: e.bearerToken
  };
  let t = await kJa(e);
  if (!t) return {
    kind: "default"
  };
  let n = await t();
  return {
    kind: "sigv4",
    accessKeyId: n.accessKeyId,
    secretAccessKey: n.secretAccessKey,
    sessionToken: n.sessionToken
  };
}
async function uJp(e) {
  let t = FHo(e.region).haiku.fallback,
    n = await G9e(e, t);
  if (n.ok) return {
    status: "ok",
    identity: "Bedrock API key",
    profiles: [],
    note: `Test request to ${t} succeeded.`
  };
  switch (n.reason) {
    case "auth":
      return {
        status: "error",
        error: "Invalid Bedrock API key. Check the key and try again."
      };
    case "permission":
      return {
        status: "error",
        error: "API key was rejected. Your IAM policy may be missing bedrock:CallWithBearerToken or bedrock:InvokeModel."
      };
    case "model":
      return {
        status: "ok",
        identity: "Bedrock API key",
        profiles: [],
        note: `The key works, but ${t} is not enabled in your account. Pin a model you have access to on the next step.`
      };
    case "network":
      return {
        status: "error",
        error: `Could not reach Bedrock in region "${e.region}". Check the region name and your network.`
      };
    case "other":
      return {
        status: "error",
        error: "The test request failed. Check the key and region."
      };
  }
}
async function kJa(e) {
  switch (e.authMethod) {
    case "profile":
      {
        let {
          fromNodeProviderChain: t
        } = await Promise.resolve().then(() => (jnt(), Fnt));
        return t({
          profile: e.awsProfile,
          ignoreCache: !0
        });
      }
    case "accessKey":
      return async () => ({
        accessKeyId: e.accessKeyId,
        secretAccessKey: e.secretAccessKey,
        ...(e.sessionToken && {
          sessionToken: e.sessionToken
        })
      });
    case "environment":
      return;
    default:
      return;
  }
}
function dJp(e, t) {
  let n = e,
    r = n?.name ?? "Error",
    o = n?.message ?? String(e),
    s = t.authMethod === "profile" ? `aws sso login --profile ${t.awsProfile}` : void 0;
  switch (r) {
    case "CredentialsProviderError":
      return t.authMethod === "profile" ? {
        error: `Could not load credentials for profile "${t.awsProfile}". If this is an SSO profile, run:`,
        command: s
      } : {
        error: `No AWS credentials found. ${o}`
      };
    case "ExpiredTokenException":
    case "TokenRefreshRequired":
      return t.authMethod === "profile" ? {
        error: "SSO session expired. Run:",
        command: s
      } : {
        error: `Credentials expired. ${o}`
      };
    case "ForbiddenException":
      return t.authMethod === "profile" ? {
        error: `SSO portal denied access to the role for profile "${t.awsProfile}". The permission set may have been revoked \u2014 check your AWS access portal.`
      } : {
        error: `Forbidden. ${o}`
      };
    case "AccessDeniedException":
      return {
        error: `Access denied. Your IAM role needs bedrock:ListInferenceProfiles permission. ${o}`
      };
    case "UnrecognizedClientException":
    case "InvalidSignatureException":
      return {
        error: `Invalid credentials. ${o}`
      };
    case "UnknownEndpoint":
    case "ENOTFOUND":
      return {
        error: `Cannot reach AWS in region "${t.region}". Check the region name and your network.`
      };
    default:
      return {
        error: `${r}: ${o}`
      };
  }
}