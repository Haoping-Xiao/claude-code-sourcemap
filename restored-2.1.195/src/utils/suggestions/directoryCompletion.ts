// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ps
// matched 2.1.88 source: src/utils/suggestions/directoryCompletion.ts
// class=modified  jaccard=0.2715  score=0.5782  fileCov=0.3385
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ps] deps: Yj
O0e = R(rt(), 1);
function N6i(e, t) {
  if (!e)
    return {
      directory: t || $t(),
      prefix: "",
    };
  let n = ds(e, t);
  if (e.endsWith("/") || e.endsWith(iX.sep))
    return {
      directory: n,
      prefix: "",
    };
  let r = iX.dirname(n),
    o = iX.basename(e);
  return {
    directory: r,
    prefix: o,
  };
}
async function Y6d(e) {
  let t = D6i.get(e);
  if (t) return t;
  try {
    let o = (await qt().readdir(e))
      .filter((s) => s.isDirectory() && !s.name.startsWith("."))
      .map((s) => ({
        name: s.name,
        path: iX.join(e, s.name),
        type: "directory",
      }))
      .slice(0, O6i);
    return (D6i.set(e, o), o);
  } catch (n) {
    return (
      T(
        `Directory completion: failed to scan ${e}: ${n instanceof Error ? n.message : String(n)}`,
        {
          level: "error",
        },
      ),
      []
    );
  }
}
async function mPn(e, t = {}) {
  if (vl()) return [];
  let { basePath: n = $t(), maxResults: r = 10 } = t,
    { directory: o, prefix: s } = N6i(e, n),
    i = await Y6d(o),
    a = s.toLowerCase();
  return i
    .filter((c) => c.name.toLowerCase().startsWith(a))
    .slice(0, r)
    .map((c) => ({
      id: c.path,
      displayText: c.name + "/",
      description: "directory",
      metadata: {
        type: "directory",
      },
    }));
}
function AZr(e) {
  return (
    e.startsWith("~/") ||
    e.startsWith("/") ||
    e.startsWith("./") ||
    e.startsWith("../") ||
    e === "~" ||
    e === "." ||
    e === ".."
  );
}
async function X6d(e, t = false) {
  let n = `${e}:${t}`,
    r = P6i.get(n);
  if (r) return r;
  try {
    let i = (await qt().readdir(e))
      .filter((a) => t || !a.name.startsWith("."))
      .map((a) => ({
        name: a.name,
        path: iX.join(e, a.name),
        type: a.isDirectory() ? "directory" : "file",
      }))
      .sort((a, l) => {
        if (a.type === "directory" && l.type !== "directory") return -1;
        if (a.type !== "directory" && l.type === "directory") return 1;
        return a.name.localeCompare(l.name);
      })
      .slice(0, O6i);
    return (P6i.set(n, i), i);
  } catch (o) {
    return (
      T(`Failed to scan directory for path completion: ${o}`, {
        level: "error",
      }),
      []
    );
  }
}
async function HZr(e, t = {}) {
  if (vl()) return [];
  let {
      basePath: n = $t(),
      maxResults: r = 10,
      includeFiles: o = true,
      includeHidden: s = false,
    } = t,
    { directory: i, prefix: a } = N6i(e, n),
    l = await X6d(i, s),
    c = a.toLowerCase(),
    u = l
      .filter((f) => {
        if (!o && f.type === "file") return false;
        return f.name.toLowerCase().startsWith(c);
      })
      .slice(0, r),
    d = e.includes("/") || e.includes(iX.sep),
    p = "";
  if (d) {
    let f = e.lastIndexOf("/"),
      m = e.lastIndexOf(iX.sep),
      g = Math.max(f, m);
    p = e.substring(0, g + 1);
  }
  if (p.startsWith("./") || p.startsWith("." + iX.sep)) p = p.slice(2);
  return u.map((f) => {
    let m = p + f.name;
    return {
      id: m,
      displayText: f.type === "directory" ? m + "/" : m,
      metadata: {
        type: f.type,
      },
    };
  });
}
var iX,
  M6i = 500,
  $6i = 300000,
  O6i = 5000,
  D6i,
  P6i;
