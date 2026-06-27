// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SNc
// matched 2.1.88 source: src/utils/heapDumpService.ts
// class=modified (alt of src/utils/heapDumpService.ts)  jaccard=0.0212  score=0.0653  fileCov=0.0305
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module SNc] deps: zod/v4/classic/schemas.js, utils/git/gitConfigParser.ts, main.tsx, utils/errors.ts, utils/fsOperations.ts, services/mcp/officialRegistry.ts
((pNc = require("fs")),
  (j7e = require("fs/promises")),
  (fNc = require("stream")),
  (mNc = require("stream/promises")));
gNc = ve(() =>
  dt.object({
    error: dt.object({
      type: dt.string().optional(),
    }),
  }),
);
function rnn() {
  return ut(process.env.CLAUDE_CODE_SYNC_PLUGINS);
}
function onn() {
  let e = parseInt(process.env.CLAUDE_CODE_SYNC_PLUGINS_INSTALL_TIMEOUT_MS || "", 10);
  return e > 0 ? e : 30000;
}
function RNc() {
  let e = process.env.CLAUDE_CODE_SYNC_PLUGINS_MCP_TIMEOUT_MS;
  if (e !== void 0 && e !== "") {
    let t = parseInt(e, 10);
    if (Number.isFinite(t) && t >= 0) return t;
  }
  return 10000 /* 1e4 */;
}
function DNc() {
  wvt ??= B7o();
}
function PNc() {
  return ((wvt ??= B7o()), wvt);
}
function MNc() {
  return ((wvt = (wvt ?? Promise.resolve()).catch(() => {}).then(() => B7o())), wvt);
}
function $Nc() {
  return Tmr;
}
function snn() {
  return nB.join(tr(), "plugins", "synced");
}
function ONc() {
  return nB.join(snn(), kNc);
}
async function NNc() {
  try {
    let e = await SR.readFile(ONc(), "utf8");
    return Ft(e);
  } catch {
    return null;
  }
}
async function Ckm(e) {
  (await SR.mkdir(snn(), {
    recursive: true,
  }),
    await eg(ONc(), De(e, null, 2)));
}
function Hmr() {
  return nB.join(snn(), ".staging");
}
function nnn(e) {
  let t = e.replace(/[<>:"|?*\\/]/g, "_"),
    n = t.toLowerCase();
  if (n === kNc || n === ".staging") throw Error("plugin name resolves to reserved path");
  let r = snn(),
    o = nB.join(r, t),
    s = nB.relative(r, o);
  if (!s || nB.isAbsolute(s) || s === ".." || s.startsWith(`..${nB.sep}`))
    throw Error(`invalid plugin name: ${e}`);
  return o;
}
function Ikm(e, t) {
  let n = new Map(t.map((l) => [l.pluginId, l])),
    r = new Set(e.map((l) => l.pluginId)),
    o = new Set(),
    s = [],
    i = [];
  for (let l of e) {
    let c = n.get(l.pluginId),
      u;
    try {
      u = nnn(l.name);
    } catch {
      if ((In("warn", "plugins_sync_invalid_name"), c)) i.push(c);
      continue;
    }
    if (o.has(u)) {
      if ((In("warn", "plugins_sync_name_collision"), c)) i.push(c);
      continue;
    }
    if ((o.add(u), !c || c.updatedAt !== l.updatedAt || c.name !== l.name))
      s.push({
        plugin: l,
        prev: c,
      });
    else i.push(c);
  }
  let a = t.filter((l) => !r.has(l.pluginId));
  return {
    toDownload: s,
    toRemove: a,
    carryover: i,
    liveDirs: o,
  };
}
async function ANc(e, t) {
  let n = nnn(e.name),
    r = nB.join(Hmr(), nB.relative(snn(), n)),
    o = nB.join(vU(), `claude-plugin-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
  try {
    let s = Date.now(),
      i = await _Nc(e.pluginId, o, {
        isBackground: true,
      });
    if ((t.downloadMs.push(Date.now() - s), !i.ok)) return i;
    let a = Date.now();
    try {
      (await SR.rm(r, {
        recursive: true,
        force: true,
      }),
        await SR.mkdir(Hmr(), {
          recursive: true,
        }));
      let l = await $n("unzip", ["-q", "-o", o, "-d", r]),
        c = l.code === 0 ? await Rkm(r).catch(() => "walk_failed") : "unzip_failed";
      if (c !== "ok")
        (In("info", "plugins_sync_unzip_fallback", {
          code: l.code,
          verdict: c,
        }),
          await SR.rm(r, {
            recursive: true,
            force: true,
          }),
          await uOe(o, r));
      let u = await Her(r),
        d = nB.join(Hmr(), `.trash-${process.pid}-${Math.random().toString(36).slice(2)}`);
      try {
        (await SR.rename(n, d),
          LNc.push(
            SR.rm(d, {
              recursive: true,
              force: true,
            }).catch(() => {}),
          ));
      } catch {
        await SR.rm(n, {
          recursive: true,
          force: true,
        });
      }
      return (
        await SR.rename(u, n),
        {
          ok: true,
        }
      );
    } finally {
      t.extractMs.push(Date.now() - a);
    }
  } finally {
    (await SR.rm(o, {
      force: true,
    }).catch(() => {}),
      await SR.rm(r, {
        recursive: true,
        force: true,
      }).catch(() => {}));
  }
}
async function kkm(e, t) {
  try {
    return await ANc(e, t);
  } catch {
    return (In("warn", "plugins_sync_extract_retry"), await Nn(xkm), ANc(e, t));
  }
}
async function Rkm(e, t = wkm) {
  let n = 0,
    r;
  async function o(a) {
    for (let l = 0; l < a.length && !r; l += HNc) {
      let c = a.slice(l, l + HNc);
      for (let u of await Promise.all(c.map((d) => SR.lstat(d))))
        if (((n += u.size), n > t)) {
          r = "oversize";
          return;
        }
    }
  }
  async function s(a) {
    for (let l = 0; l < a.length && !r; l += TNc) await Promise.all(a.slice(l, l + TNc).map(i));
  }
  async function i(a) {
    if (r) return;
    let l = [],
      c = [];
    for (let u of await SR.readdir(a, {
      withFileTypes: true,
    })) {
      if (u.isSymbolicLink()) {
        r = "symlink";
        return;
      }
      if (u.isDirectory()) l.push(nB.join(a, u.name));
      else c.push(nB.join(a, u.name));
    }
    if (r) return;
    await Promise.all([o(c), s(l)]);
  }
  return (await i(e), r ?? "ok");
}
async function vNc(e, t, n) {
  let r = 0,
    o = Array.from(
      {
        length: Math.min(t, e.length),
      },
      async () => {
        while (true) {
          let s = r++;
          if (s >= e.length) return;
          await n(e[s]);
        }
      },
    );
  await Promise.all(o);
}
function wNc(e, t, n) {
  let r = `${e.name}@synced`;
  Tmr.push(
    t === "network-error"
      ? {
          type: t,
          source: r,
          plugin: e.name,
          url: e.pluginId,
          details: n,
        }
      : {
          type: t,
          source: r,
          plugin: e.name,
          error: n,
        },
  );
}
async function B7o() {
  let e = Date.now();
  Tmr = [];
  let t;
  try {
    ((t = xNc.monitorEventLoopDelay({
      resolution: 20,
    })),
      t.enable());
  } catch {}
  let n = () => {
      if (!t) return {};
      return (
        t.disable(),
        {
          loop_lag_p95_ms: Math.round(t.percentile(95) / 1000000 /* 1e6 */),
          loop_lag_max_ms: Math.round(t.max / 1000000 /* 1e6 */),
        }
      );
    },
    r,
    o = {
      downloadMs: [],
      extractMs: [],
    };
  try {
    In("info", "plugins_sync_starting");
    let s = Date.now(),
      i = await yNc({
        isBackground: true,
      });
    if (((r = Date.now() - s), !i.success)) {
      let A = n();
      (In("warn", "plugins_sync_list_failed", {
        duration_ms: Date.now() - e,
        list_ms: r,
        ...A,
      }),
        G("tengu_plugins_sync_list_failed", {
          duration_ms: Date.now() - e,
          list_ms: r,
          ...A,
        }),
        await INc());
      return;
    }
    let a = await NNc(),
      l = a !== null,
      { toDownload: c, toRemove: u, carryover: d, liveDirs: p } = Ikm(i.plugins, a?.plugins ?? []),
      f = async (A) => {
        try {
          let v = nnn(A);
          if (p.has(v)) return;
          await SR.rm(v, {
            recursive: true,
            force: true,
          });
        } catch {}
      };
    if (
      (await Promise.all(LNc.splice(0)),
      await SR.rm(Hmr(), {
        recursive: true,
        force: true,
      }).catch(() => {}),
      c.length === 0 && u.length === 0)
    ) {
      (CCt([...p]),
        In("info", "plugins_sync_no_changes", {
          count: d.length,
          duration_ms: Date.now() - e,
          list_ms: r,
          had_manifest: l,
          ...n(),
        }));
      return;
    }
    let m = [],
      g = [],
      h = Date.now();
    await vNc(c, ENc, async ({ plugin: A, prev: v }) => {
      let C;
      try {
        if (((C = await kkm(A, o)), !C.ok))
          (In("warn", "plugins_sync_download_failed"), wNc(A, "network-error", C.reason));
      } catch (x) {
        ((C = {
          ok: false,
          reason: be(x),
        }),
          In("warn", "plugins_sync_extract_failed"),
          wNc(A, "generic-error", C.reason));
      }
      if (C.ok) {
        if ((m.push(A), v && v.name !== A.name)) await f(v.name);
      } else if (v) g.push(v);
    });
    let y = Date.now() - h,
      b = CNc(o);
    await vNc(u, ENc, (A) => f(A.name));
    let _ = [...d, ...m, ...g];
    (CCt(_.map((A) => nnn(A.name))),
      await Ckm({
        lastUpdated: Date.now(),
        plugins: _,
      }));
    let S = n();
    (In("info", "plugins_sync_complete", {
      downloaded: m.length,
      removed: u.length,
      failed: Tmr.length,
      duration_ms: Date.now() - e,
      list_ms: r,
      download_extract_ms: y,
      had_manifest: l,
      ...b,
      ...S,
    }),
      G("tengu_plugins_sync_success", {
        downloaded: m.length,
        removed: u.length,
        total: i.plugins.length,
        duration_ms: Date.now() - e,
        list_ms: r,
        download_extract_ms: y,
        had_manifest: l,
        ...b,
        ...S,
      }));
  } catch (s) {
    let i = n(),
      a = {
        ...(r !== void 0 && {
          list_ms: r,
        }),
        ...(o.downloadMs.length > 0 && CNc(o)),
      };
    (In("error", "plugins_sync_unexpected_error", {
      kind: s instanceof Error ? s.constructor.name : "unknown",
      duration_ms: Date.now() - e,
      ...a,
      ...i,
    }),
      G("tengu_plugins_sync_error", {
        duration_ms: Date.now() - e,
        ...a,
        ...i,
      }),
      await INc());
  }
}
function CNc(e) {
  return {
    download_ms_sum: e.downloadMs.reduce((t, n) => t + n, 0),
    download_ms_max: Math.max(0, ...e.downloadMs),
    extract_ms_sum: e.extractMs.reduce((t, n) => t + n, 0),
    extract_ms_max: Math.max(0, ...e.extractMs),
  };
}
async function INc() {
  let e = await NNc();
  if (!e) return;
  let t = [];
  for (let n of e.plugins)
    try {
      t.push(nnn(n.name));
    } catch {}
  CCt(t);
}
var SR,
  nB,
  xNc,
  ENc = 6,
  kNc = "manifest.json",
  wkm = 536870912,
  wvt = null,
  Tmr,
  LNc,
  xkm = 500,
  HNc = 256,
  TNc = 16;
