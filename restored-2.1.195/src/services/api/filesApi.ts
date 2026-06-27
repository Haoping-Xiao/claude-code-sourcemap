// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wpe
// matched 2.1.88 source: src/services/api/filesApi.ts
// class=modified  jaccard=0.4905  score=0.6238  fileCov=0.6966
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module wpe] deps: utils/debug.ts, utils/fsOperations.ts, services/analytics/index.ts, dn, google-auth-library/build/src/crypto/node/crypto.js, types/permissions.ts, services/PromptSuggestion/speculation.ts, utils/debug.ts, main.tsx, utils/getWorktreePaths.ts, services/analytics/metadata.ts, utils/sequential.ts, utils/messages.ts, utils/permissions/filesystem.ts, commands/add-dir/index.ts, utils/plans.ts, utils/path.ts, utils/attachments.ts, utils/mcpOutputStorage.ts
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
function getDefaultApiBaseUrl() {
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
function logDebugError(message) {
  T(`[files-api] ${message}`, {
    level: "error",
  });
}
function iAe(e) {
  T(`[files-api] ${e}`);
}
async function retryWithBackoff(operation, attemptFn) {
  let n = "";
  for (let r = 1; r <= S8n; r++) {
    let o = await attemptFn(r);
    if (o.done) return o.value;
    if (
      ((n = o.error || `${operation} failed`),
      iAe(`${operation} attempt ${r}/${S8n} failed: ${n}`),
      r < S8n)
    ) {
      let s = CQp * Math.pow(2, r - 1);
      (iAe(`Retrying ${operation} in ${s}ms...`), await Nn(s));
    }
  }
  throw Error(`${n} after ${S8n} attempts`);
}
async function downloadFile(fileId, config) {
  DZa();
  let r = `${config.baseUrl || getDefaultApiBaseUrl()}/v1/files/${fileId}/content`,
    o = {
      Authorization: `Bearer ${config.oauthToken}`,
      "anthropic-version": RZa,
      "anthropic-beta": kZa,
    };
  return (
    iAe(`Downloading file ${fileId} from ${r}`),
    retryWithBackoff(`Download file ${fileId}`, async () => {
      try {
        let s = await po.get(r, {
          headers: o,
          responseType: "arraybuffer",
          timeout: 60000,
          validateStatus: (i) => i < 500,
        });
        if (s.status === 200)
          return (
            iAe(`Downloaded file ${fileId} (${s.data.length} bytes)`),
            {
              done: true,
              value: Buffer.from(s.data),
            }
          );
        if (s.status === 404) throw Error(`File not found: ${fileId}`);
        if (s.status === 401) throw Error("Authentication failed: invalid or missing API key");
        if (s.status === 403) throw Error(`Access denied to file: ${fileId}`);
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
function buildDownloadPath(basePath, sessionId, relativePath) {
  let normalized = K5.normalize(relativePath);
  if (normalized.startsWith(".."))
    return (
      logDebugError(`Invalid file path: ${relativePath}. Path must not traverse above workspace`),
      null
    );
  let o = K5.join(basePath, sessionId, "uploads"),
    matchedPrefix = [
      K5.join(basePath, sessionId, "uploads") + K5.sep,
      K5.sep + "uploads" + K5.sep,
    ].find((l) => normalized.startsWith(l)),
    a = matchedPrefix ? normalized.slice(matchedPrefix.length) : normalized;
  return K5.join(o, a);
}
async function downloadAndSaveFile(attachment, config) {
  let { fileId: n, relativePath: r } = attachment,
    o = buildDownloadPath($t(), config.sessionId, r);
  if (!o)
    return {
      fileId: n,
      path: "",
      success: false,
      error: `Invalid file path: ${r}`,
    };
  try {
    let s = await downloadFile(n, config),
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
      logDebugError(`Failed to download file ${n}: ${be(s)}`),
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
async function downloadSessionFiles(files, config, n = RQp) {
  if (files.length === 0) return [];
  iAe(`Downloading ${files.length} file(s) for session ${config.sessionId}`);
  let r = Date.now(),
    o = await LQp(files, (a) => downloadAndSaveFile(a, config), n),
    s = Date.now() - r,
    i = On(o, (a) => a.success);
  if ((iAe(`Downloaded ${i}/${files.length} file(s) in ${s}ms`), i === files.length))
    xe("api_files_download");
  else if (i > 0) It("api_files_download", "partial_failed");
  else Le("api_files_download", "all_failed");
  return o;
}
async function uploadFile(filePath, relativePath, config, opts) {
  DZa();
  let s = `${config.baseUrl || getDefaultApiBaseUrl()}/v1/files`,
    i = {
      Authorization: `Bearer ${config.oauthToken}`,
      "anthropic-version": RZa,
      "anthropic-beta": kZa,
    };
  iAe(`Uploading file ${filePath} as ${relativePath}`);
  let a;
  try {
    a = await Tht.readFile(filePath);
  } catch (f) {
    return (
      G("tengu_file_upload_failed", {
        error_type: We("file_read"),
      }),
      {
        path: relativePath,
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
        path: relativePath,
        error: `File exceeds maximum size of ${IZa} bytes (actual: ${l})`,
        success: false,
      }
    );
  let c = `----FormBoundary${xZa.randomUUID()}`,
    u = K5.basename(relativePath),
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
  let body = Buffer.concat(d);
  try {
    return await retryWithBackoff(`Upload file ${relativePath}`, async () => {
      try {
        let f = await po.post(s, body, {
          headers: {
            ...i,
            "Content-Type": `multipart/form-data; boundary=${c}`,
            "Content-Length": body.length.toString(),
          },
          timeout: 120000,
          signal: opts?.signal,
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
            iAe(`Uploaded file ${filePath} -> ${m} (${l} bytes)`),
            {
              done: true,
              value: {
                path: relativePath,
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
        path: relativePath,
        error: f.message,
        success: false,
      };
    return (
      G("tengu_file_upload_failed", {
        error_type: We("network"),
      }),
      {
        path: relativePath,
        error: be(f),
        success: false,
      }
    );
  }
}
function parseFileSpecs(fileSpecs) {
  let t = [],
    n = fileSpecs.flatMap((r) => r.split(" ").filter(Boolean));
  for (let r of n) {
    let o = r.indexOf(":");
    if (o === -1) continue;
    let s = r.substring(0, o),
      i = r.substring(o + 1);
    if (!s || !i) {
      logDebugError(`Invalid file spec: ${r}. Both file_id and path are required`);
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
