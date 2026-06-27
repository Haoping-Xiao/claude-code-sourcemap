// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vyl
// matched 2.1.88 source: src/tools/BriefTool/upload.ts
// class=partial  jaccard=0.1512  score=0.8019  fileCov=0.157
// note: low-confidence suggestion: src/tools/BriefTool/upload.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vyl] deps: Hp, Xr, wQ, Rc, dn, je, Jt
Eyl = require("crypto"), Ayl = require("fs/promises"), V7n = require("path"), imf = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp"
};
cmf = ve(() => H.object({
  file_uuid: H.string()
}));
function wyl(e) {
  return dmf[v$e.extname(e).toLowerCase()];
}
function Cyl(e) {
  return typeof e !== "string";
}
async function pmf(e, t, n) {
  let r = await pY(t);
  if (r) return r;
  if (!v$e.isAbsolute(e)) {
    let [o, ...s] = e.split(/[\\/]+/);
    if (o === v$e.basename(n) && s.length > 0) {
      let i = v$e.join(n, ...s);
      try {
        if ((await z7n.stat(i)).isFile()) return s.join("/");
      } catch {}
    }
  }
  return lCe(t);
}
async function K7n(e) {
  let t = $t();
  for (let n of e) {
    if (Cyl(n)) continue;
    if (/^[a-z][a-z0-9+.-]+:\/\//i.test(n)) return {
      result: false,
      message: `Attachment "${n}" looks like a URL, not a local file path. This tool can only send files that exist on the local filesystem \u2014 download or write the content to a local file first, then pass that path.`,
      errorCode: 1
    };
    let r = ds(n);
    if (r.startsWith("\\\\") || r.startsWith("//")) return {
      result: false,
      message: `Attachment "${n}" is a UNC network path, which is not supported.`,
      errorCode: 1
    };
    try {
      if (!(await z7n.stat(r)).isFile()) return {
        result: false,
        message: `Attachment "${n}" is not a regular file.`,
        errorCode: 1
      };
    } catch (o) {
      let s = on(o);
      if (s === "ENOENT") {
        let i = await pmf(n, r, t);
        return {
          result: false,
          message: `Attachment "${n}" does not exist. Current working directory: ${t}.` + (i ? ` Did you mean "${i}"?` : ""),
          errorCode: 1
        };
      }
      if (gd(o)) return {
        result: false,
        message: `Attachment "${n}" is not accessible (${s}).`,
        errorCode: 1
      };
      throw o;
    }
  }
  return {
    result: true
  };
}
async function Y7n(e, t) {
  let n = [],
    r = [];
  for (let a of e) {
    if (Cyl(a)) {
      n.push({
        path: a.file_name,
        size: a.size,
        isImage: a.is_image,
        file_uuid: a.file_uuid,
        media_type: a.media_type ?? wyl(a.file_name)
      });
      continue;
    }
    let l = ds(a);
    if (l.startsWith("\\\\") || l.startsWith("//")) throw Error(`Attachment "${a}" is a UNC network path, which is not supported.`);
    let c = await z7n.stat(l);
    r.push(n.length), n.push({
      path: l,
      size: c.size,
      isImage: IDn.test(l),
      media_type: wyl(l)
    });
  }
  if (r.length === 0) return n;
  let o = t.replBridgeEnabled || ut(process.env.CLAUDE_CODE_BRIEF_UPLOAD) || !!process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE || ut(process.env.CLAUDE_CODE_REMOTE),
    {
      uploadBriefAttachment: s
    } = await Promise.resolve().then(() => (vyl(), Tyl)),
    i = await Promise.all(r.map(a => s(n[a].path, n[a].size, {
      replBridgeEnabled: o,
      signal: t.signal
    })));
  return r.forEach((a, l) => {
    if (i[l] !== void 0) n[a] = {
      ...n[a],
      file_uuid: i[l]
    };
  }), n;
}
var z7n, v$e, dmf;