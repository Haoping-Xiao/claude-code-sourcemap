// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module e1e
// matched 2.1.88 source: src/utils/plugins/parseMarketplaceInput.ts
// class=modified  jaccard=0.6676  score=0.9317  fileCov=0.7019
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var e1e = E(() => {
  w8();
  je();
  At();
  vbe();
  lE();
  $g();
  vfe();
  Xh();
  WI();
  dNf = ["user", "project", "local"];
});
async function trr(e) {
  let t = e.trim(),
    n = qt(),
    r = t.match(/^([a-zA-Z0-9._-]+@[^:]+:.+?(?:\.git)?)(#(.+))?$/);
  if (r?.[1]) {
    let i = r[1],
      a = r[3];
    return a
      ? {
          source: "git",
          url: i,
          ref: a,
        }
      : {
          source: "git",
          url: i,
        };
  }
  if (t.startsWith("http://") || t.startsWith("https://")) {
    let i = t.match(/^([^#]+)(#(.+))?$/),
      a = i?.[1] || t,
      l = i?.[3];
    if (a.endsWith(".git") || a.includes("/_git/"))
      return l
        ? {
            source: "git",
            url: a,
            ref: l,
          }
        : {
            source: "git",
            url: a,
          };
    let c;
    try {
      c = new URL(a);
    } catch (u) {
      return {
        source: "url",
        url: a,
      };
    }
    if ($m(c.hostname)) {
      if (c.pathname.match(/^\/([^/]+\/[^/]+?)(\/|\.git|$)/)?.[1]) {
        let d = a.endsWith(".git") ? a : `${a}.git`;
        return l
          ? {
              source: "git",
              url: d,
              ref: l,
            }
          : {
              source: "git",
              url: d,
            };
      }
    }
    return {
      source: "url",
      url: a,
    };
  }
  let s = false;
  if (t.startsWith("./") || t.startsWith("../") || t.startsWith("/") || t.startsWith("~") || s) {
    let i = _2l.resolve(t.startsWith("~") ? t.replace(/^~/, y2l.homedir()) : t),
      a;
    try {
      a = await n.stat(i);
    } catch (l) {
      let c = on(l);
      return {
        error:
          c === "ENOENT" ? `Path does not exist: ${i}` : `Cannot access path: ${i} (${c ?? l})`,
      };
    }
    if (a.isFile()) {
      if (i.endsWith(".json"))
        return {
          source: "file",
          path: i,
        };
      else
        return {
          error: `File path must point to a .json file (marketplace.json), but got: ${i}`,
        };
    } else if (a.isDirectory())
      return {
        source: "directory",
        path: i,
      };
    else
      return {
        error: `Path is neither a file nor a directory: ${i}`,
      };
  }
  if (t.includes("/") && !t.startsWith("@")) {
    if (t.includes(":")) return null;
    let i = t.match(/^([^#@]+)(?:[#@](.+))?$/),
      a = i?.[1] || t,
      l = i?.[2];
    return l
      ? {
          source: "github",
          repo: a,
          ref: l,
        }
      : {
          source: "github",
          repo: a,
        };
  }
  return null;
}
var y2l, _2l;
