// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RFn
// matched 2.1.88 source: src/utils/dxt/zip.ts
// class=modified (alt of src/utils/dxt/zip.ts)  jaccard=0.0442  score=0.0678  fileCov=0.1125
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var RFn = E(() => {
  Xr();
  fn();
  vn();
  Jt();
  ((jka = require("crypto")),
    (YSe = require("fs/promises")),
    (fde = require("path")),
    (aCp = ve(() =>
      H.object({
        url: H.string(),
        cacheKey: H.string(),
        declaredDigest: H.string().optional(),
        fetchedAt: H.number(),
      }),
    )));
});
var dJ = 1e6;
function Lpo(e, t) {
  let n = e?.toLowerCase();
  if (n === "application/gzip" || n === "application/x-gzip") return "tar.gz";
  if (n === "application/zip") return "zip";
  if (t.endsWith(".tar.gz") || t.endsWith(".tgz")) return "tar.gz";
  if (t.endsWith(".zip")) return "zip";
  return null;
}
async function Yka(e, t) {
  let n = await J3t(e.name, t);
  if (n.hit && n.skillMd.length <= dJ)
    return (
      sn(e.name, `Archive skill '${t.name}' cache hit at ${n.dir}`),
      {
        baseDir: n.dir,
        skillMd: n.skillMd,
      }
    );
  let r, o;
  try {
    let g = (
      await e.client.request(
        {
          method: "resources/read",
          params: {
            uri: t.url,
          },
        },
        fae,
        {
          timeout: o6(),
        },
      )
    ).contents?.find((h) => "blob" in h && typeof h.blob === "string");
    if (!g || !("blob" in g))
      return {
        errorCode: "skill_mcp_archive_not_blob",
        message: `Archive resource ${t.url} did not return blob content`,
      };
    ((o = "mimeType" in g && typeof g.mimeType === "string" ? g.mimeType : void 0),
      (r = Buffer.from(String(g.blob), "base64")));
  } catch (m) {
    return {
      errorCode: "skill_mcp_fetch_failed",
      message: `Failed to fetch archive ${t.url}: ${be(m)}`,
    };
  }
  if (r.length > Vka)
    return {
      errorCode: "skill_mcp_archive_too_large",
      message: `Archive ${t.url} is ${Math.round(r.length / 1e6)}MB compressed (max ${Vka / 1e6}MB)`,
    };
  let s = X3t(r),
    i = Aqe(t.digest ?? void 0);
  if (i && i !== s)
    return {
      errorCode: "skill_mcp_archive_digest_mismatch",
      message: `Archive ${t.url} digest mismatch: index declared ${i}, got ${s}`,
    };
  let a = i ?? s,
    l = Lpo(t.mimeType ?? o, t.url);
  if (l === null)
    return {
      errorCode: "skill_mcp_archive_unsupported_format",
      message: `Archive ${t.url} has unsupported format (mimeType=${o ?? "absent"})`,
    };
  let c;
  try {
    c = await cCp(r, l);
  } catch (m) {
    if (
      m instanceof Y3t ||
      m instanceof IFn ||
      (m instanceof Error && /too many files|is too large|compression ratio/i.test(m.message))
    )
      return {
        errorCode: "skill_mcp_archive_too_large",
        message: m.message,
      };
    if (m instanceof wFn)
      return {
        errorCode: "skill_mcp_archive_link_entry",
        message: m.message,
      };
    if (m instanceof CFn)
      return {
        errorCode: "skill_mcp_archive_unsupported_entry",
        message: m.message,
      };
    if (m instanceof K3t)
      return {
        errorCode: "skill_mcp_archive_case_collision",
        message: m.message,
      };
    if (m instanceof z3t || (m instanceof Error && /unsafe file path/i.test(m.message)))
      return {
        errorCode: "skill_mcp_archive_unsafe_entry",
        message: be(m),
      };
    return {
      errorCode: "skill_mcp_archive_unpack_failed",
      message: `Failed to unpack ${t.url}: ${be(m)}`,
    };
  }
  if (!("SKILL.md" in c))
    return {
      errorCode: "skill_mcp_archive_missing_skill_md",
      message: Object.keys(c).some((g) => g.endsWith("/SKILL.md"))
        ? `Archive ${t.url} has no root SKILL.md \u2014 found one inside a wrapper directory. Archive contents must be rooted at SKILL.md, not my-skill/SKILL.md.`
        : `Archive ${t.url} has no SKILL.md at its root`,
    };
  let u = c["SKILL.md"].data;
  if (u.length > dJ)
    return {
      errorCode: "skill_mcp_archive_unpack_failed",
      message: `SKILL.md in ${t.url} exceeds ${dJ / 1e6}MB`,
    };
  let { slugDir: d, keyDir: p, alreadyExtracted: f } = await xFn(e.name, t, a);
  if (!f)
    try {
      await uCp(d, p, c);
    } catch (m) {
      return (
        au(e.name, `Failed to materialize archive ${t.url}: ${be(m)}`),
        {
          errorCode: "skill_mcp_archive_unpack_failed",
          message: be(m),
        }
      );
    }
  return (
    await kFn(d, t, a).catch((m) => {
      sn(e.name, `Non-fatal: failed to write cache meta for ${t.name}: ${be(m)}`);
    }),
    {
      baseDir: p,
      skillMd: Buffer.from(u).toString("utf8"),
    }
  );
}
async function cCp(e, t) {
  if (t === "tar.gz")
    return Uka(e, {
      maxBytes: Rpo,
      maxFiles: zka,
    });
  let n = await nde(e, {
      MAX_FILE_COUNT: zka,
      MAX_TOTAL_SIZE: Rpo,
      MAX_FILE_SIZE: Rpo,
      MAX_COMPRESSION_RATIO: 100,
    }),
    r = ZLe(e),
    o = {},
    s = new Map();
  for (let i of Object.keys(n)) {
    if (i.endsWith("/")) continue;
    let a = Cpo(i),
      l = Ipo(a),
      c = s.get(l);
    if (c !== void 0 && c !== i) throw new K3t(c, i);
    (s.set(l, i),
      (o[a] = {
        data: n[i],
        mode: r[i] ?? 0,
      }));
  }
  return o;
}
async function uCp(e, t, n) {
  let r = Lre.join(e, `.tmp-${process.pid}-${Kka.randomBytes(4).toString("hex")}`),
    o = Lre.resolve(r) + Lre.sep;
  await g5.mkdir(r, {
    recursive: !0,
  });
  try {
    for (let [s, { data: i, mode: a }] of Object.entries(n)) {
      let l = Lre.resolve(r, s);
      if (!(l + Lre.sep).startsWith(o)) throw new z3t(s, "resolves outside the extraction root");
      if (
        (await g5.mkdir(Lre.dirname(l), {
          recursive: !0,
        }),
        await g5.writeFile(l, i),
        a & 73)
      )
        await g5.chmod(l, (a & 493) | 384).catch(() => {});
    }
    try {
      await g5.rename(r, t);
    } catch (s) {
      let i = on(s);
      if (
        (i === "EEXIST" || i === "ENOTEMPTY" || i === "EPERM" || i === "EBUSY") &&
        (await g5
          .stat(Lre.join(t, "SKILL.md"))
          .then((l) => l.isFile())
          .catch(() => !1))
      ) {
        (await g5.rm(r, {
          recursive: !0,
          force: !0,
        }),
          T(
            `mcp-skill-archive: ${t} already exists (concurrent extraction) \u2014 using existing`,
          ));
        return;
      }
      throw s;
    }
  } catch (s) {
    throw (
      await g5
        .rm(r, {
          recursive: !0,
          force: !0,
        })
        .catch(() => {}),
      s
    );
  }
}
var Kka,
  g5,
  Lre,
  Vka = 52428800,
  Rpo = 209715200,
  zka = 5000;
