// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aCa
// matched 2.1.88 source: src/utils/plugins/mcpbHandler.ts
// class=modified  jaccard=0.6852  score=0.9369  fileCov=0.7184
// note: deminified; 12 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module aCa] deps: utils/debug.ts, utils/platform.ts
((sCa = require("os")), (tqe = require("path")));
function n6(e) {
  return e.endsWith(".mcpb") || e.endsWith(".dxt");
}
function isUrl(source) {
  return source.startsWith("http://") || source.startsWith("https://");
}
function rTp(e) {
  return SUn.createHash("sha256").update(e).digest("hex").substring(0, 16);
}
function getMcpbCacheDir(pluginPath) {
  return Hre.join(pluginPath, ".mcpb-cache");
}
function getMetadataPath(cacheDir, source) {
  let n = SUn.createHash("md5").update(source).digest("hex").substring(0, 8);
  return Hre.join(cacheDir, `${n}.metadata.json`);
}
function dCa(e, t) {
  return `${e}/${t}`;
}
function loadMcpServerUserConfig(pluginId, serverName) {
  try {
    let r = jo().pluginConfigs?.[pluginId]?.mcpServers?.[serverName],
      o = wl().read()?.pluginSecrets?.[dCa(pluginId, serverName)];
    if (!r && !o) return null;
    return (
      T(`Loaded user config for ${pluginId}/${serverName} (settings + secureStorage)`),
      {
        ...r,
        ...o,
      }
    );
  } catch (n) {
    return (
      T(`Failed to load user config for ${pluginId}/${serverName}: ${n}`, {
        level: "error",
      }),
      null
    );
  }
}
async function saveMcpServerUserConfig(pluginId, serverName, config, schema) {
  try {
    let o = {},
      s = {};
    for (let [f, m] of Object.entries(config))
      if (schema[f]?.sensitive === true) s[f] = String(m);
      else o[f] = m;
    let i = new Set(Object.keys(s)),
      a = new Set(Object.keys(o)),
      l = dCa(pluginId, serverName),
      c = 0,
      u = await wl().mutate((f) => {
        let m = f.pluginSecrets?.[l],
          g = m ? CB(m, (h, y) => a.has(y)) : void 0;
        if (
          ((c = g && m ? Object.keys(m).length - Object.keys(g).length : 0),
          Object.keys(s).length === 0 && c === 0)
        )
          return f;
        return {
          ...f,
          pluginSecrets: {
            ...f.pluginSecrets,
            [l]: {
              ...g,
              ...s,
            },
          },
        };
      });
    if (!u.success) throw Error(`Failed to save sensitive config to secure storage for ${l}`);
    if (u.warning)
      T(`Server secrets save warning: ${u.warning}`, {
        level: "warn",
      });
    if (c > 0)
      T(
        `saveMcpServerUserConfig: scrubbed ${c} stale non-sensitive key(s) from secureStorage for ${l}`,
      );
    let d = jo().pluginConfigs?.[pluginId]?.mcpServers?.[serverName] ?? {},
      p = Object.keys(d).filter((f) => i.has(f));
    if (Object.keys(o).length > 0 || p.length > 0) {
      let f = Object.fromEntries(p.map((g) => [g, void 0])),
        m = io("userSettings", {
          pluginConfigs: {
            [pluginId]: {
              mcpServers: {
                [serverName]: {
                  ...o,
                  ...f,
                },
              },
            },
          },
        });
      if (m.error) throw m.error;
      if (p.length > 0)
        T(
          `saveMcpServerUserConfig: scrubbed ${p.length} plaintext sensitive key(s) from settings.json for ${pluginId}/${serverName}`,
        );
    }
    T(
      `Saved user config for ${pluginId}/${serverName} (${Object.keys(o).length} non-sensitive, ${Object.keys(s).length} sensitive)`,
    );
  } catch (o) {
    let s = Zr(o);
    throw (
      T(`Failed to save user config for ${pluginId}/${serverName}: ${s.message}`, {
        level: "error",
      }),
      Error(`Failed to save user configuration for ${pluginId}/${serverName}: ${s.message}`)
    );
  }
}
function validateUserConfig(values, schema) {
  let n = [];
  for (let [r, o] of Object.entries(schema)) {
    let s = values[r];
    if (o.required && (s === void 0 || s === "")) {
      n.push(`${o.title || r} is required but not provided`);
      continue;
    }
    if (s === void 0 || s === "") continue;
    if (o.type === "string") {
      if (Array.isArray(s)) {
        if (!o.multiple) n.push(`${o.title || r} must be a string, not an array`);
        else if (!s.every((i) => typeof i === "string"))
          n.push(`${o.title || r} must be an array of strings`);
      } else if (typeof s !== "string") n.push(`${o.title || r} must be a string`);
    } else if (o.type === "number" && typeof s !== "number")
      n.push(`${o.title || r} must be a number`);
    else if (o.type === "boolean" && typeof s !== "boolean")
      n.push(`${o.title || r} must be a boolean`);
    else if ((o.type === "file" || o.type === "directory") && typeof s !== "string")
      n.push(`${o.title || r} must be a path string`);
    if (o.type === "number" && typeof s === "number") {
      if (o.min !== void 0 && s < o.min) n.push(`${o.title || r} must be at least ${o.min}`);
      if (o.max !== void 0 && s > o.max) n.push(`${o.title || r} must be at most ${o.max}`);
    }
  }
  return {
    valid: n.length === 0,
    errors: n,
  };
}
async function generateMcpConfig(manifest, extractedPath, n = {}) {
  let { getMcpConfigForManifest: r } = await Promise.resolve().then(() => (ndo(), tdo)),
    o = await r({
      manifest: manifest,
      extensionPath: extractedPath,
      systemDirs: iCa(),
      userConfig: n,
      pathSeparator: "/",
    });
  if (!o) {
    let s = Error(`Failed to generate MCP server configuration from manifest "${manifest.name}"`);
    throw (ke(s), s);
  }
  return o;
}
async function loadCacheMetadata(cacheDir, source) {
  let n = qt(),
    r = getMetadataPath(cacheDir, source);
  try {
    let o = await n.readFile(r, {
      encoding: "utf-8",
    });
    return Ft(o);
  } catch (o) {
    if (on(o) === "ENOENT") return null;
    return (
      T(`Failed to load MCPB cache metadata: ${o}`, {
        level: "error",
      }),
      null
    );
  }
}
async function sdo(e, t, n) {
  let r = getMetadataPath(e, t);
  (await qt().mkdir(e), await nqe.writeFile(r, De(n, null, 2), "utf-8"));
}
async function downloadMcpb(url, destPath, onProgress) {
  if ((T(`Downloading MCPB from ${url}`), onProgress)) onProgress(`Downloading ${url}...`);
  let r = performance.now(),
    o = false;
  try {
    let i = await (SFe(url) ? kSe.get : lb.get)(url, {
        timeout: 120000,
        responseType: "arraybuffer",
        maxRedirects: 5,
        onDownloadProgress: (l) => {
          if (l.total && onProgress) {
            let c = Math.round((l.loaded / l.total) * 100);
            onProgress(`Downloading... ${c}%`);
          }
        },
      }),
      a = new Uint8Array(i.data);
    if (
      (YD("mcpb", url, "success", performance.now() - r),
      (o = true),
      await nqe.writeFile(destPath, Buffer.from(a)),
      T(`Downloaded ${a.length} bytes to ${destPath}`),
      onProgress)
    )
      onProgress("Download complete");
    return a;
  } catch (s) {
    if (!o) YD("mcpb", url, "failure", performance.now() - r, k8(s));
    let i = be(s),
      a = Error(`Failed to download MCPB file from ${url}: ${i}`);
    throw (
      T(`Failed to download MCPB file from ${url}: ${i}`, {
        level: "error",
      }),
      a
    );
  }
}
async function extractMcpbContents(unzipped, extractPath, modes, onProgress) {
  if (onProgress) onProgress("Extracting files...");
  await qt().mkdir(extractPath);
  let o = 0,
    s = Object.entries(unzipped).filter(([a]) => !a.endsWith("/")),
    i = s.length;
  for (let [a, l] of s) {
    let c = Hre.join(extractPath, a),
      u = Hre.dirname(c);
    if (u !== extractPath) await qt().mkdir(u);
    if (
      a.endsWith(".json") ||
      a.endsWith(".js") ||
      a.endsWith(".ts") ||
      a.endsWith(".txt") ||
      a.endsWith(".md") ||
      a.endsWith(".yml") ||
      a.endsWith(".yaml")
    ) {
      let f = new TextDecoder().decode(l);
      await nqe.writeFile(c, f, "utf-8");
    } else await nqe.writeFile(c, Buffer.from(l));
    let p = modes[a];
    if (p && p & 73) await nqe.chmod(c, p & 511).catch(() => {});
    if ((o++, onProgress && o % 10 === 0)) onProgress(`Extracted ${o}/${i} files`);
  }
  if ((T(`Extracted ${o} files to ${extractPath}`), onProgress))
    onProgress(`Extraction complete (${o} files)`);
}
async function checkMcpbChanged(source, pluginPath) {
  let n = qt(),
    r = getMcpbCacheDir(pluginPath),
    o = await loadCacheMetadata(r, source);
  if (!o) return true;
  try {
    await n.stat(o.extractedPath);
  } catch (s) {
    if (on(s) === "ENOENT") T(`MCPB extraction path missing: ${o.extractedPath}`);
    else
      T(`MCPB extraction path inaccessible: ${o.extractedPath}: ${s}`, {
        level: "error",
      });
    return true;
  }
  if (!isUrl(source)) {
    let s = Hre.join(pluginPath, source),
      i;
    try {
      i = await n.stat(s);
    } catch (l) {
      if (on(l) === "ENOENT") T(`MCPB source file missing: ${s}`);
      else
        T(`MCPB source file inaccessible: ${s}: ${l}`, {
          level: "error",
        });
      return true;
    }
    if (o.sourceMtimeMs === void 0) return true;
    let a = Math.floor(i.mtimeMs);
    if (a !== o.sourceMtimeMs)
      return (
        T(
          `MCPB file modified: mtime ${new Date(a).toISOString()} != cached ${new Date(o.sourceMtimeMs).toISOString()}`,
        ),
        true
      );
  }
  return false;
}
async function loadMcpbFile(
  source,
  pluginPath,
  pluginId,
  onProgress,
  providedUserConfig,
  forceConfigDialog,
) {
  let i = qt(),
    a = getMcpbCacheDir(pluginPath);
  (await i.mkdir(a), T(`Loading MCPB from source: ${source}`));
  let l = await loadCacheMetadata(a, source);
  if (l && !(await checkMcpbChanged(source, pluginPath))) {
    T(`Using cached MCPB from ${l.extractedPath} (hash: ${l.contentHash})`);
    let S = Hre.join(l.extractedPath, "manifest.json"),
      A;
    try {
      A = await i.readFile(S, {
        encoding: "utf-8",
      });
    } catch (I) {
      if (wn(I)) {
        let k = Error(`Cached manifest not found: ${S}`);
        throw (ke(k), k);
      }
      throw I;
    }
    let v = new TextEncoder().encode(A),
      C = await rdo(v);
    if (C.user_config && Object.keys(C.user_config).length > 0) {
      let I = C.name,
        k = loadMcpServerUserConfig(pluginId, I),
        D = providedUserConfig || k || {},
        P = validateUserConfig(D, C.user_config);
      if (forceConfigDialog || !P.valid)
        return {
          status: "needs-config",
          manifest: C,
          extractedPath: l.extractedPath,
          contentHash: l.contentHash,
          configSchema: C.user_config,
          existingConfig: k || {},
          validationErrors: P.valid ? [] : P.errors,
        };
      if (providedUserConfig)
        await saveMcpServerUserConfig(pluginId, I, providedUserConfig, C.user_config ?? {});
      let O = await generateMcpConfig(C, l.extractedPath, D);
      return {
        manifest: C,
        mcpConfig: O,
        extractedPath: l.extractedPath,
        contentHash: l.contentHash,
      };
    }
    let x = await generateMcpConfig(C, l.extractedPath);
    return {
      manifest: C,
      mcpConfig: x,
      extractedPath: l.extractedPath,
      contentHash: l.contentHash,
    };
  }
  let c, u, d;
  if (isUrl(source)) {
    let S = SUn.createHash("md5").update(source).digest("hex").substring(0, 8);
    ((u = Hre.join(a, `${S}.mcpb`)), (c = await downloadMcpb(source, u, onProgress)));
  } else {
    let S = Hre.join(pluginPath, source);
    if (onProgress) onProgress(`Loading ${source}...`);
    try {
      ((c = await i.readFileBytes(S)), (u = S), (d = Math.floor((await i.stat(S)).mtimeMs)));
    } catch (A) {
      if (wn(A)) {
        let v = Error(`MCPB file not found: ${S}`);
        throw (
          T(`MCPB file not found: ${S}`, {
            level: "error",
          }),
          v
        );
      }
      throw A;
    }
  }
  let p = rTp(c);
  if ((T(`MCPB content hash: ${p}`), onProgress)) onProgress("Extracting MCPB archive...");
  let f = await nde(Buffer.from(c)),
    m = ZLe(c),
    g = f["manifest.json"];
  if (!g) {
    let S = Error("No manifest.json found in MCPB file");
    throw (
      T(`No manifest.json found in MCPB file: ${u}`, {
        level: "error",
      }),
      S
    );
  }
  let h = await rdo(g);
  if ((T(`MCPB manifest: ${h.name} v${h.version} by ${h.author.name}`), !h.server)) {
    let S = Error(`MCPB manifest for "${h.name}" does not define a server configuration`);
    throw (ke(S), S);
  }
  let y = Hre.join(a, p);
  if (
    (await extractMcpbContents(f, y, m, onProgress),
    h.user_config && Object.keys(h.user_config).length > 0)
  ) {
    let S = h.name,
      A = loadMcpServerUserConfig(pluginId, S),
      v = providedUserConfig || A || {},
      C = validateUserConfig(v, h.user_config);
    if (!C.valid) {
      let k = {
        source: source,
        contentHash: p,
        extractedPath: y,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: d,
      };
      return (
        await sdo(a, source, k),
        {
          status: "needs-config",
          manifest: h,
          extractedPath: y,
          contentHash: p,
          configSchema: h.user_config,
          existingConfig: A || {},
          validationErrors: C.errors,
        }
      );
    }
    if (providedUserConfig)
      await saveMcpServerUserConfig(pluginId, S, providedUserConfig, h.user_config ?? {});
    if (onProgress) onProgress("Generating MCP server configuration...");
    let x = await generateMcpConfig(h, y, v),
      I = {
        source: source,
        contentHash: p,
        extractedPath: y,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: d,
      };
    return (
      await sdo(a, source, I),
      {
        manifest: h,
        mcpConfig: x,
        extractedPath: y,
        contentHash: p,
      }
    );
  }
  if (onProgress) onProgress("Generating MCP server configuration...");
  let b = await generateMcpConfig(h, y),
    _ = {
      source: source,
      contentHash: p,
      extractedPath: y,
      cachedAt: new Date().toISOString(),
      lastChecked: new Date().toISOString(),
      sourceMtimeMs: d,
    };
  return (
    await sdo(a, source, _),
    T(`Successfully loaded MCPB: ${h.name} (extracted to ${y})`),
    {
      manifest: h,
      mcpConfig: b,
      extractedPath: y,
      contentHash: p,
    }
  );
}
var SUn, nqe, Hre;
