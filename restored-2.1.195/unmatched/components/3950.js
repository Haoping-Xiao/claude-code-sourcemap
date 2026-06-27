// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module nQa
// matched 2.1.88 source: node_modules/google-auth-library/build/src/auth/googleauth.js
// class=new  jaccard=0.0299  score=0.1196  fileCov=0.0383
// note: nearest: node_modules/google-auth-library/build/src/auth/googleauth.js (0.0299); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var nQa = E(() => {
  Ye();
  kt();
  Hu();
  dr();
  Fy();
  f_();
  gm();
  wb();
  vH();
  ZJa = R(lt(), 1), eQa = R(rt(), 1), YJ = R(se(), 1);
});
function YHo() {
  return {
    sonnet: yc[_j].vertex,
    opus: yc[VY].vertex,
    haiku: yc[zY].vertex,
    fable: yc[NPt].vertex
  };
}
function rQa(e) {
  let t = new Set();
  for (let n of Object.values(yc)) if (n.vertex.toLowerCase().includes(e)) t.add(n.vertex);
  return [...t].sort().reverse();
}
function oQa(e) {
  if (e.authMethod === "serviceAccount" && e.keyFile) return {
    kind: "keyFile",
    path: e.keyFile
  };
  return {
    kind: "default"
  };
}
async function sQa(e) {
  let t;
  try {
    let o = await Pot(oQa(e), e.projectId),
      s = (async () => {
        await (await o.getClient()).getAccessToken();
      })(),
      i = new Promise((l, c) => setTimeout(u => u(Error("Timed out waiting for GCP credentials")), LJp, c));
    await Promise.race([s, i]);
    let a;
    try {
      a = (await o.getCredentials()).client_email;
    } catch {
      a = void 0;
    }
    t = a ?? (e.authMethod === "serviceAccount" ? `service account (${e.keyFile})` : "Application Default Credentials");
  } catch (o) {
    return {
      status: "error",
      ...PJp(o, e)
    };
  }
  let n = YHo().haiku,
    r = await q9e(e, n);
  if (r.ok) return {
    status: "ok",
    identity: t,
    note: `Test request to ${n} succeeded.`
  };
  switch (r.reason) {
    case "auth":
      return {
        status: "error",
        error: "Got a token, but Vertex AI rejected it. The credential may lack the cloud-platform scope."
      };
    case "permission":
      return {
        status: "error",
        error: `Permission denied calling Vertex AI in project "${e.projectId}". The principal needs the aiplatform.endpoints.predict permission (Vertex AI User role), and the Vertex AI API must be enabled.`
      };
    case "model":
      return {
        status: "ok",
        identity: t,
        note: `Credentials work, but ${n} returned not-found in ${e.region}. Pin a model you have access to on the next step, or try the 'global' region.`
      };
    case "network":
      return {
        status: "error",
        error: `Could not reach Vertex AI in region "${e.region}". Check the region name and your network.`
      };
    case "other":
      return {
        status: "ok",
        identity: t,
        note: `Credentials work, but the test request to ${n} failed. You can pin a different model on the next step.`
      };
  }
}
async function q9e(e, t) {
  let n;
  try {
    n = await DJp(e);
  } catch {
    return {
      ok: false,
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
      ok: true
    };
  } catch (r) {
    let o = r?.status;
    if (o === 401) return {
      ok: false,
      reason: "auth"
    };
    if (o === 403) return {
      ok: false,
      reason: "permission"
    };
    if (o === 400 || o === 404) return {
      ok: false,
      reason: "model"
    };
    if (o === 429) return {
      ok: true
    };
    if (o === void 0) return {
      ok: false,
      reason: "network"
    };
    return {
      ok: false,
      reason: "other"
    };
  }
}
async function DJp(e) {
  let [{
      AnthropicVertex: t
    }, {
      getProxyFetchOptions: n
    }] = await Promise.all([Promise.resolve().then(() => (zOt(), VOt)), Promise.resolve().then(() => (Mh(), k2e))]),
    r = await Pot(oQa(e), e.projectId);
  return new t({
    region: e.region,
    projectId: e.projectId,
    googleAuth: r,
    maxRetries: 0,
    timeout: 15000,
    fetchOptions: n({
      url: process.env.ANTHROPIC_VERTEX_BASE_URL || HJe(e.region)
    })
  });
}
function PJp(e, t) {
  let n = e?.message ?? String(e);
  if (t.authMethod === "serviceAccount" && /ENOENT|no such file/i.test(n)) return {
    error: `Service account key file not found: ${t.keyFile}`
  };
  if (/Could not load the default credentials/i.test(n)) return t.authMethod === "adc" ? {
    error: "No Application Default Credentials found. Run:",
    command: KHo
  } : {
    error: "No GCP credentials found in the environment. Set GOOGLE_APPLICATION_CREDENTIALS or run gcloud auth application-default login."
  };
  if (/invalid_grant|Token has been expired|reauth/i.test(n)) {
    if (t.authMethod === "serviceAccount") return {
      error: "Service account credentials have been revoked or expired. Obtain a new key file from GCP IAM (IAM \u2192 Service Accounts \u2192 Keys \u2192 Add Key)."
    };
    if (t.authMethod === "adc") return {
      error: "GCP credentials expired. Run:",
      command: KHo
    };
    return {
      error: "GCP credentials in the environment have expired or been revoked. Refresh them (gcloud auth application-default login for ADC, or replace the GOOGLE_APPLICATION_CREDENTIALS key file)."
    };
  }
  if (/Unable to detect a Project Id/i.test(n)) return {
    error: "Could not determine a GCP project from the credentials. Go back and set the project ID explicitly."
  };
  if (/Timed out waiting for GCP/i.test(n)) return {
    error: "Timed out resolving GCP credentials (no ADC, no key file, and no GCE metadata server).",
    ...(t.authMethod === "adc" && {
      command: KHo
    })
  };
  return {
    error: n
  };
}
var LJp = 12000,
  KHo = "gcloud auth application-default login";