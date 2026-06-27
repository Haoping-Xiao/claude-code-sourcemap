// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gHe
// matched 2.1.88 source: src/utils/plugins/officialMarketplaceGcs.ts
// class=modified  jaccard=0.4636  score=0.5723  fileCov=0.7095
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function xYt(e, t) {
  let n = ose.resolve(t),
    r = ose.resolve(e);
  if (r !== n && !r.startsWith(n + ose.sep))
    return (
      T(`fetchOfficialMarketplaceFromGcs: refusing path outside cache dir: ${e}`, {
        level: "error",
      }),
      null
    );
  await lCt();
  let o = performance.now(),
    s = "failed",
    i,
    a,
    l;
  try {
    let c = await kSe.get(`${dRl}/latest`, {
      responseType: "text",
      timeout: 10000 /* 1e4 */,
    });
    if (((i = String(c.data).trim()), !i)) throw Error("latest pointer returned empty body");
    let u = ose.join(e, ".gcs-sha");
    if (
      (await W$.readFile(u, "utf8").then(
        (_) => _.trim(),
        () => null,
      )) === i
    )
      return ((s = "noop"), i);
    let p = await kSe.get(`${dRl}/${i}.zip`, {
        responseType: "arraybuffer",
        timeout: 60000,
      }),
      f = Buffer.from(p.data);
    a = f.length;
    let m = await nde(f),
      g = ZLe(f),
      h = `${e}.staging`;
    (await W$.rm(h, {
      recursive: true,
      force: true,
    }),
      await W$.mkdir(h, {
        recursive: true,
      }));
    for (let [_, S] of Object.entries(m)) {
      if (!_.startsWith(pRl)) continue;
      let A = _.slice(pRl.length);
      if (!A || A.endsWith("/")) continue;
      let v = ose.join(h, A);
      (await W$.mkdir(ose.dirname(v), {
        recursive: true,
      }),
        await W$.writeFile(v, S));
      let C = g[_];
      if (C && C & 73) await W$.chmod(v, C & 511).catch(() => {});
    }
    await W$.writeFile(ose.join(h, ".gcs-sha"), i);
    let y = `${e}.backup`;
    await W$.rm(y, {
      recursive: true,
      force: true,
    }).catch(() => {});
    let b = false;
    try {
      (await W$.rename(e, y), (b = true));
    } catch (_) {
      if (on(_) !== "ENOENT") throw _;
    }
    try {
      await W$.rename(h, e);
    } catch (_) {
      if (b) await W$.rename(y, e).catch(() => {});
      throw _;
    }
    return (
      await W$.rm(y, {
        recursive: true,
        force: true,
      }).catch(() => {}),
      (s = "updated"),
      i
    );
  } catch (c) {
    return (
      (l = XIf(c)),
      T(`Official marketplace GCS fetch failed: ${be(c)}`, {
        level: "warn",
      }),
      null
    );
  } finally {
    G("tengu_plugin_remote_fetch", {
      source: We("marketplace_gcs"),
      host: We("downloads.claude.ai"),
      is_official: true,
      outcome: s,
      duration_ms: Math.round(performance.now() - o),
      ...(a !== void 0 && {
        bytes: a,
      }),
      ...(i && {
        sha: i,
      }),
      ...(l && {
        error_kind: l,
      }),
    });
  }
}
function XIf(e) {
  if (ab(e)) {
    if (e.code === "ECONNABORTED") return "timeout";
    if (e.response) return `http_${e.response.status}`;
    return "network";
  }
  let t = on(e);
  if (t && /^E[A-Z]+$/.test(t) && !t.startsWith("ERR_")) return YIf.has(t) ? `fs_${t}` : "fs_other";
  if (typeof e?.code === "number") return "zip_parse";
  let n = be(e);
  if (/unzip|invalid zip|central directory/i.test(n)) return "zip_parse";
  if (/empty body/.test(n)) return "empty_latest";
  return "other";
}
var W$,
  ose,
  dRl = "https://downloads.claude.ai/claude-code-releases/plugins/claude-plugins-official",
  pRl = "marketplaces/claude-plugins-official/",
  YIf;
