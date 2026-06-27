// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wpe
// matched 2.1.88 source: src/services/api/filesApi.ts
// class=modified  jaccard=0.4905  score=0.6238  fileCov=0.6966
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module wpe] deps: kt, Lo, ft, dn, $S, NB, Vv, je, wr, Y4, QVt, vn, co, KI, _Le, _a, jS, X4, K0
((bht = require("path")),
  (_Qp = (f4(), ro(URe)).BRIEF_TOOL_NAME),
  (bQp = (f4(), ro(URe)).LEGACY_BRIEF_TOOL_NAME),
  (SQp = ro(WOn).SEND_USER_FILE_TOOL_NAME),
  (EQp = new Set([
    "compaction_reminder",
    "companion_intro",
    "echo_activities",
    "pen_mode_enter",
    "pen_mode_exit",
    "verify_plan_reminder",
  ])));
function vZa(e, t) {
  let n = new Set();
  for (let r of e) if (!t.has(r)) n.add(r);
  return n;
}
function wZa(e, t) {
  for (let n of e) if (!t.has(n)) return false;
  return true;
}
function Sc(e) {
  return e;
}
function CZa(e) {
  return e.githubPr == null;
}
function TTo(e, t) {
  if (t?.type === "not_found_error" && t.resource_type === "session_grouping")
    return `Project not found: ${e}. Check the id \u2014 a Project you don't have access to looks the same as one that doesn't exist.`;
  switch (t?.reason) {
    case "public_grouping_hosted_only":
      return `${e} is a public Project, and public Projects run on Anthropic-hosted infrastructure only. Pick an Anthropic-managed cloud environment, or use a private Project.`;
    case "feature_disabled":
      return "Projects are not available for your organization.";
    default:
      return;
  }
}
var b8n = () => {};
function LZa() {
  return (
    process.env.ANTHROPIC_BASE_URL ||
    process.env.CLAUDE_CODE_API_BASE_URL ||
    "https://api.anthropic.com"
  );
}
function DZa() {
  if (fr() !== "firstParty")
    throw Error("Files API is unavailable on third-party providers (data-residency)");
  if (T9("hipaa")) throw Error("Files API is unavailable for HIPAA-regulated organizations");
}
function vTo(e) {
  T(`[files-api] ${e}`, {
    level: "error",
  });
}
function iAe(e) {
  T(`[files-api] ${e}`);
}
async function PZa(e, t) {
  let n = "";
  for (let r = 1; r <= S8n; r++) {
    let o = await t(r);
    if (o.done) return o.value;
    if (((n = o.error || `${e} failed`), iAe(`${e} attempt ${r}/${S8n} failed: ${n}`), r < S8n)) {
      let s = CQp * Math.pow(2, r - 1);
      (iAe(`Retrying ${e} in ${s}ms...`), await Nn(s));
    }
  }
  throw Error(`${n} after ${S8n} attempts`);
}
async function IQp(e, t) {
  DZa();
  let r = `${t.baseUrl || LZa()}/v1/files/${e}/content`,
    o = {
      Authorization: `Bearer ${t.oauthToken}`,
      "anthropic-version": RZa,
      "anthropic-beta": kZa,
    };
  return (
    iAe(`Downloading file ${e} from ${r}`),
    PZa(`Download file ${e}`, async () => {
      try {
        let s = await po.get(r, {
          headers: o,
          responseType: "arraybuffer",
          timeout: 60000,
          validateStatus: (i) => i < 500,
        });
        if (s.status === 200)
          return (
            iAe(`Downloaded file ${e} (${s.data.length} bytes)`),
            {
              done: true,
              value: Buffer.from(s.data),
            }
          );
        if (s.status === 404) throw Error(`File not found: ${e}`);
        if (s.status === 401) throw Error("Authentication failed: invalid or missing API key");
        if (s.status === 403) throw Error(`Access denied to file: ${e}`);
        return {
          done: false,
          error: `status ${s.status}`,
        };
      } catch (s) {
        if (!po.isAxiosError(s)) throw s;
        return {
          done: false,
          error: s.message,
        };
      }
    })
  );
}
function xQp(e, t, n) {
  let r = K5.normalize(n);
  if (r.startsWith(".."))
    return (vTo(`Invalid file path: ${n}. Path must not traverse above workspace`), null);
  let o = K5.join(e, t, "uploads"),
    i = [K5.join(e, t, "uploads") + K5.sep, K5.sep + "uploads" + K5.sep].find((l) =>
      r.startsWith(l),
    ),
    a = i ? r.slice(i.length) : r;
  return K5.join(o, a);
}
async function kQp(e, t) {
  let { fileId: n, relativePath: r } = e,
    o = xQp($t(), t.sessionId, r);
  if (!o)
    return {
      fileId: n,
      path: "",
      success: false,
      error: `Invalid file path: ${r}`,
    };
  try {
    let s = await IQp(n, t),
      i = K5.dirname(o);
    return (
      await Tht.mkdir(i, {
        recursive: true,
      }),
      await Tht.writeFile(o, s),
      iAe(`Saved file ${n} to ${o} (${s.length} bytes)`),
      {
        fileId: n,
        path: o,
        success: true,
        bytesWritten: s.length,
      }
    );
  } catch (s) {
    return (
      vTo(`Failed to download file ${n}: ${be(s)}`),
      {
        fileId: n,
        path: o,
        success: false,
        error: be(s),
      }
    );
  }
}
async function LQp(e, t, n) {
  let r = Array(e.length),
    o = 0;
  async function s() {
    while (o < e.length) {
      let l = o++,
        c = e[l];
      if (c !== void 0) r[l] = await t(c, l);
    }
  }
  let i = [],
    a = Math.min(n, e.length);
  for (let l = 0; l < a; l++) i.push(s());
  return (await Promise.all(i), r);
}
async function MZa(e, t, n = RQp) {
  if (e.length === 0) return [];
  iAe(`Downloading ${e.length} file(s) for session ${t.sessionId}`);
  let r = Date.now(),
    o = await LQp(e, (a) => kQp(a, t), n),
    s = Date.now() - r,
    i = On(o, (a) => a.success);
  if ((iAe(`Downloaded ${i}/${e.length} file(s) in ${s}ms`), i === e.length))
    xe("api_files_download");
  else if (i > 0) It("api_files_download", "partial_failed");
  else Le("api_files_download", "all_failed");
  return o;
}
async function $Za(e, t, n, r) {
  DZa();
  let s = `${n.baseUrl || LZa()}/v1/files`,
    i = {
      Authorization: `Bearer ${n.oauthToken}`,
      "anthropic-version": RZa,
      "anthropic-beta": kZa,
    };
  iAe(`Uploading file ${e} as ${t}`);
  let a;
  try {
    a = await Tht.readFile(e);
  } catch (f) {
    return (
      G("tengu_file_upload_failed", {
        error_type: We("file_read"),
      }),
      {
        path: t,
        error: be(f),
        success: false,
      }
    );
  }
  let l = a.length;
  if (l > IZa)
    return (
      G("tengu_file_upload_failed", {
        error_type: We("file_too_large"),
      }),
      {
        path: t,
        error: `File exceeds maximum size of ${IZa} bytes (actual: ${l})`,
        success: false,
      }
    );
  let c = `----FormBoundary${xZa.randomUUID()}`,
    u = K5.basename(t),
    d = [];
  (d.push(
    Buffer.from(`--${c}\r
Content-Disposition: form-data; name="file"; filename="${u}"\r
Content-Type: application/octet-stream\r
\r
`),
  ),
    d.push(a),
    d.push(
      Buffer.from(`\r
`),
    ),
    d.push(
      Buffer.from(`--${c}\r
Content-Disposition: form-data; name="purpose"\r
\r
user_data\r
`),
    ),
    d.push(
      Buffer.from(`--${c}--\r
`),
    ));
  let p = Buffer.concat(d);
  try {
    return await PZa(`Upload file ${t}`, async () => {
      try {
        let f = await po.post(s, p, {
          headers: {
            ...i,
            "Content-Type": `multipart/form-data; boundary=${c}`,
            "Content-Length": p.length.toString(),
          },
          timeout: 120000,
          signal: r?.signal,
          validateStatus: (m) => m < 500,
        });
        if (f.status === 200 || f.status === 201) {
          let m = f.data?.id;
          if (!m)
            return {
              done: false,
              error: "Upload succeeded but no file ID returned",
            };
          return (
            iAe(`Uploaded file ${e} -> ${m} (${l} bytes)`),
            {
              done: true,
              value: {
                path: t,
                fileId: m,
                size: l,
                success: true,
              },
            }
          );
        }
        if (f.status === 401)
          throw (
            G("tengu_file_upload_failed", {
              error_type: We("auth"),
            }),
            new s8e("Authentication failed: invalid or missing API key")
          );
        if (f.status === 403)
          throw (
            G("tengu_file_upload_failed", {
              error_type: We("forbidden"),
            }),
            new s8e("Access denied for upload")
          );
        if (f.status === 413)
          throw (
            G("tengu_file_upload_failed", {
              error_type: We("size"),
            }),
            new s8e("File too large for upload")
          );
        return {
          done: false,
          error: `status ${f.status}`,
        };
      } catch (f) {
        if (f instanceof s8e) throw f;
        if (po.isCancel(f)) throw new s8e("Upload canceled");
        if (po.isAxiosError(f))
          return {
            done: false,
            error: f.message,
          };
        throw f;
      }
    });
  } catch (f) {
    if (f instanceof s8e)
      return {
        path: t,
        error: f.message,
        success: false,
      };
    return (
      G("tengu_file_upload_failed", {
        error_type: We("network"),
      }),
      {
        path: t,
        error: be(f),
        success: false,
      }
    );
  }
}
function OZa(e) {
  let t = [],
    n = e.flatMap((r) => r.split(" ").filter(Boolean));
  for (let r of n) {
    let o = r.indexOf(":");
    if (o === -1) continue;
    let s = r.substring(0, o),
      i = r.substring(o + 1);
    if (!s || !i) {
      vTo(`Invalid file spec: ${r}. Both file_id and path are required`);
      continue;
    }
    t.push({
      fileId: s,
      relativePath: i,
    });
  }
  return t;
}
var xZa,
  Tht,
  K5,
  kZa,
  RZa = "2023-06-01",
  S8n = 3,
  CQp = 500,
  IZa = 524288000,
  RQp = 5,
  s8e;
