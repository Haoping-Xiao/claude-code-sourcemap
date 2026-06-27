// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module aCa
// matched 2.1.88 source: src/utils/plugins/mcpbHandler.ts
// class=modified  jaccard=0.6852  score=0.9369  fileCov=0.7184
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var aCa = E(() => {
  je();
  Is();
  ((sCa = require("os")), (tqe = require("path")));
});
function n6(e) {
  return e.endsWith(".mcpb") || e.endsWith(".dxt");
}
function lCa(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}
function rTp(e) {
  return SUn.createHash("sha256").update(e).digest("hex").substring(0, 16);
}
function cCa(e) {
  return Hre.join(e, ".mcpb-cache");
}
function uCa(e, t) {
  let n = SUn.createHash("md5").update(t).digest("hex").substring(0, 8);
  return Hre.join(e, `${n}.metadata.json`);
}
function dCa(e, t) {
  return `${e}/${t}`;
}
function rqe(e, t) {
  try {
    let r = jo().pluginConfigs?.[e]?.mcpServers?.[t],
      o = wl().read()?.pluginSecrets?.[dCa(e, t)];
    if (!r && !o) return null;
    return (
      T(`Loaded user config for ${e}/${t} (settings + secureStorage)`),
      {
        ...r,
        ...o,
      }
    );
  } catch (n) {
    return (
      T(`Failed to load user config for ${e}/${t}: ${n}`, {
        level: "error",
      }),
      null
    );
  }
}
async function bUn(e, t, n, r) {
  try {
    let o = {},
      s = {};
    for (let [f, m] of Object.entries(n))
      if (r[f]?.sensitive === true) s[f] = String(m);
      else o[f] = m;
    let i = new Set(Object.keys(s)),
      a = new Set(Object.keys(o)),
      l = dCa(e, t),
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
    let d = jo().pluginConfigs?.[e]?.mcpServers?.[t] ?? {},
      p = Object.keys(d).filter((f) => i.has(f));
    if (Object.keys(o).length > 0 || p.length > 0) {
      let f = Object.fromEntries(p.map((g) => [g, void 0])),
        m = io("userSettings", {
          pluginConfigs: {
            [e]: {
              mcpServers: {
                [t]: {
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
          `saveMcpServerUserConfig: scrubbed ${p.length} plaintext sensitive key(s) from settings.json for ${e}/${t}`,
        );
    }
    T(
      `Saved user config for ${e}/${t} (${Object.keys(o).length} non-sensitive, ${Object.keys(s).length} sensitive)`,
    );
  } catch (o) {
    let s = Zr(o);
    throw (
      T(`Failed to save user config for ${e}/${t}: ${s.message}`, {
        level: "error",
      }),
      Error(`Failed to save user configuration for ${e}/${t}: ${s.message}`)
    );
  }
}
function eDe(e, t) {
  let n = [];
  for (let [r, o] of Object.entries(t)) {
    let s = e[r];
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
async function _Un(e, t, n = {}) {
  let { getMcpConfigForManifest: r } = await Promise.resolve().then(() => (ndo(), tdo)),
    o = await r({
      manifest: e,
      extensionPath: t,
      systemDirs: iCa(),
      userConfig: n,
      pathSeparator: "/",
    });
  if (!o) {
    let s = Error(`Failed to generate MCP server configuration from manifest "${e.name}"`);
    throw (ke(s), s);
  }
  return o;
}
async function pCa(e, t) {
  let n = qt(),
    r = uCa(e, t);
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
  let r = uCa(e, t);
  (await qt().mkdir(e), await nqe.writeFile(r, De(n, null, 2), "utf-8"));
}
async function oTp(e, t, n) {
  if ((T(`Downloading MCPB from ${e}`), n)) n(`Downloading ${e}...`);
  let r = performance.now(),
    o = false;
  try {
    let i = await (SFe(e) ? kSe.get : lb.get)(e, {
        timeout: 120000,
        responseType: "arraybuffer",
        maxRedirects: 5,
        onDownloadProgress: (l) => {
          if (l.total && n) {
            let c = Math.round((l.loaded / l.total) * 100);
            n(`Downloading... ${c}%`);
          }
        },
      }),
      a = new Uint8Array(i.data);
    if (
      (YD("mcpb", e, "success", performance.now() - r),
      (o = true),
      await nqe.writeFile(t, Buffer.from(a)),
      T(`Downloaded ${a.length} bytes to ${t}`),
      n)
    )
      n("Download complete");
    return a;
  } catch (s) {
    if (!o) YD("mcpb", e, "failure", performance.now() - r, k8(s));
    let i = be(s),
      a = Error(`Failed to download MCPB file from ${e}: ${i}`);
    throw (
      T(`Failed to download MCPB file from ${e}: ${i}`, {
        level: "error",
      }),
      a
    );
  }
}
async function sTp(e, t, n, r) {
  if (r) r("Extracting files...");
  await qt().mkdir(t);
  let o = 0,
    s = Object.entries(e).filter(([a]) => !a.endsWith("/")),
    i = s.length;
  for (let [a, l] of s) {
    let c = Hre.join(t, a),
      u = Hre.dirname(c);
    if (u !== t) await qt().mkdir(u);
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
    let p = n[a];
    if (p && p & 73) await nqe.chmod(c, p & 511).catch(() => {});
    if ((o++, r && o % 10 === 0)) r(`Extracted ${o}/${i} files`);
  }
  if ((T(`Extracted ${o} files to ${t}`), r)) r(`Extraction complete (${o} files)`);
}
async function iTp(e, t) {
  let n = qt(),
    r = cCa(t),
    o = await pCa(r, e);
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
  if (!lCa(e)) {
    let s = Hre.join(t, e),
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
async function c3t(e, t, n, r, o, s) {
  let i = qt(),
    a = cCa(t);
  (await i.mkdir(a), T(`Loading MCPB from source: ${e}`));
  let l = await pCa(a, e);
  if (l && !(await iTp(e, t))) {
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
        k = rqe(n, I),
        D = o || k || {},
        P = eDe(D, C.user_config);
      if (s || !P.valid)
        return {
          status: "needs-config",
          manifest: C,
          extractedPath: l.extractedPath,
          contentHash: l.contentHash,
          configSchema: C.user_config,
          existingConfig: k || {},
          validationErrors: P.valid ? [] : P.errors,
        };
      if (o) await bUn(n, I, o, C.user_config ?? {});
      let O = await _Un(C, l.extractedPath, D);
      return {
        manifest: C,
        mcpConfig: O,
        extractedPath: l.extractedPath,
        contentHash: l.contentHash,
      };
    }
    let x = await _Un(C, l.extractedPath);
    return {
      manifest: C,
      mcpConfig: x,
      extractedPath: l.extractedPath,
      contentHash: l.contentHash,
    };
  }
  let c, u, d;
  if (lCa(e)) {
    let S = SUn.createHash("md5").update(e).digest("hex").substring(0, 8);
    ((u = Hre.join(a, `${S}.mcpb`)), (c = await oTp(e, u, r)));
  } else {
    let S = Hre.join(t, e);
    if (r) r(`Loading ${e}...`);
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
  if ((T(`MCPB content hash: ${p}`), r)) r("Extracting MCPB archive...");
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
  if ((await sTp(f, y, m, r), h.user_config && Object.keys(h.user_config).length > 0)) {
    let S = h.name,
      A = rqe(n, S),
      v = o || A || {},
      C = eDe(v, h.user_config);
    if (!C.valid) {
      let k = {
        source: e,
        contentHash: p,
        extractedPath: y,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: d,
      };
      return (
        await sdo(a, e, k),
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
    if (o) await bUn(n, S, o, h.user_config ?? {});
    if (r) r("Generating MCP server configuration...");
    let x = await _Un(h, y, v),
      I = {
        source: e,
        contentHash: p,
        extractedPath: y,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: d,
      };
    return (
      await sdo(a, e, I),
      {
        manifest: h,
        mcpConfig: x,
        extractedPath: y,
        contentHash: p,
      }
    );
  }
  if (r) r("Generating MCP server configuration...");
  let b = await _Un(h, y),
    _ = {
      source: e,
      contentHash: p,
      extractedPath: y,
      cachedAt: new Date().toISOString(),
      lastChecked: new Date().toISOString(),
      sourceMtimeMs: d,
    };
  return (
    await sdo(a, e, _),
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
