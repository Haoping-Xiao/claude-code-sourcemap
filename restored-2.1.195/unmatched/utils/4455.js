// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Iwl
// matched 2.1.88 source: src/services/teamMemorySync/index.ts
// class=new  jaccard=0.0363  score=0.074  fileCov=0.0664
// note: nearest: src/services/teamMemorySync/index.ts (0.0363); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Iwl = E(() => {
  Xr();
  Jt();
  vwl = require("string_decoder"), vAf = ve(() => H.looseObject({
    type: H.string()
  })), wAf = ve(() => H.looseObject({
    type: H.literal("memory"),
    id: H.string(),
    path: H.string(),
    content: H.string(),
    content_sha256: H.string()
  })), CAf = ve(() => H.looseObject({
    type: H.literal("complete"),
    memory_count: H.number().int().nonnegative(),
    error_count: H.number().int().nonnegative().optional()
  }));
  OJn = class OJn extends Error {
    constructor(e) {
      super(`NDJSON line exceeds ${e} bytes`);
      this.name = "LineTooLongError";
    }
  };
});
function kAf(e) {
  return xwl.createHash("sha256").update(e, "utf8").digest("hex");
}
function BJn(e, t) {
  if (e.length !== t.length) throw Error("createMultiStoreState: length mismatch");
  let n = cT(),
    r = mm();
  return {
    stores: e.map((o, s) => {
      let i = t[s],
        a = typeof i === "string" ? {
          mount: i,
          scope: "team"
        } : i,
        l = a.scope === "user";
      return {
        backend: o,
        mountName: a.mount,
        scope: a.scope,
        mountDir: l ? r : (zF.join(n, a.mount) + zF.sep).normalize("NFC"),
        excludeKey: l ? oEe : null,
        remoteHashes: new Map(),
        createdAtMs: Date.now(),
        pullWrittenMtimes: new Map(),
        pulled: !1,
        suppressedReason: null,
        invalidatedBasis: null
      };
    }),
    inFlight: null
  };
}
function CKt() {
  return at("tengu_silk_almanac", !1);
}
async function Dwl(e, t) {
  if ((await UJn(e.mountDir))?.partition === e.backend.partitionId) return;
  if (t?.expectPresent) {
    It("team_memory_multistore_conflict", "manifest_changed_mid_pull");
    return;
  }
  let r = De({
    v: Lwl,
    partition: e.backend.partitionId
  });
  await j$.mkdir(e.mountDir, {
    recursive: !0
  }), await j$.writeFile(zF.join(e.mountDir, Rwl), r, "utf8");
}
async function UJn(e) {
  try {
    let t = await j$.readFile(zF.join(e, Rwl), "utf8"),
      n = Ft(t);
    if (n === null || typeof n !== "object" || n.v !== Lwl || typeof n.partition !== "string") return null;
    return n;
  } catch {
    return null;
  }
}
function Pwl(e) {
  if (e.startsWith(".")) return !1;
  return RAf.some(t => e.endsWith(t));
}
function Mwl(e) {
  let t = e.replace(/^\/+/, "").split("/");
  return t.every(n => !n.startsWith(".")) && Pwl(t.at(-1));
}
async function $wl(e, t) {
  let n = new Map(),
    r = new Set(),
    o = [],
    s = !0;
  async function i(a) {
    let l;
    try {
      l = await j$.readdir(a, {
        withFileTypes: !0
      });
    } catch (c) {
      let u = on(c);
      if (u === "ENOENT") return;
      if (u === "EACCES" || u === "EPERM") {
        s = !1;
        return;
      }
      throw c;
    }
    await Promise.all(l.map(async c => {
      let u = zF.join(a, c.name);
      if (c.isDirectory()) {
        if (c.name.startsWith(".")) return;
        if (t) {
          let p = zF.relative(e, u).split(zF.sep).join("/");
          if (t(p)) return;
        }
        await i(u);
        return;
      }
      if (!c.isFile() || !Pwl(c.name)) return;
      let d = "/" + zF.relative(e, u).split(zF.sep).join("/");
      r.add(d);
      try {
        let p = await j$.stat(u);
        if (p.size > kwl) {
          T(`multi-store-sync: skipping oversized ${d} (${p.size}B)`, {
            level: "info"
          });
          return;
        }
        let f = await j$.readFile(u, "utf8");
        if (YJe(f).length > 0) {
          o.push(d), T(`multi-store-sync: skipping ${d} (secret detected)`, {
            level: "warn"
          });
          return;
        }
        n.set(d, {
          content: f,
          sha256: kAf(f)
        });
      } catch (p) {
        let f = on(p);
        if (f === "ENOENT") return;
        if (f === "EACCES" || f === "EPERM") {
          s = !1;
          return;
        }
        throw p;
      }
    }));
  }
  return await i(e), {
    entries: n,
    diskPaths: r,
    diskTrusted: s,
    skippedSecretPaths: o
  };
}
async function FJn(e, t) {
  let n = t.replace(/^\/+/, ""),
    r = e.scope === "user" ? await R2n(n) : await d0n(zF.join(e.mountName, n).split(zF.sep).join("/"));
  if (!r.normalize("NFC").startsWith(e.mountDir)) throw new Yw(`path escapes mount ${e.mountName}: ${t}`);
  return r;
}
async function Owl(e, t, n) {
  let r = await FJn(e, t);
  await j$.mkdir(zF.dirname(r), {
    recursive: !0
  }), await j$.writeFile(r, n, "utf8");
}
async function Nwl(e, t) {
  if (e.pulled) return !1;
  try {
    let n = await FJn(e, t),
      r = await j$.stat(n),
      o = e.pullWrittenMtimes.get(t);
    if (o !== void 0) return r.mtimeMs > o;
    return r.mtimeMs >= e.createdAtMs - 1000;
  } catch {
    return !1;
  }
}
async function Bwl(e, t) {
  try {
    let n = await FJn(e, t),
      r = await j$.stat(n);
    e.pullWrittenMtimes.set(t, r.mtimeMs);
  } catch {}
}
async function Uwl(e, t) {
  try {
    let n = await FJn(e, t);
    await j$.unlink(n);
  } catch (n) {
    if (n instanceof Yw) {
      T(`multi-store-sync[${e.mountName}]: refusing to delete escaping path ${t}`, {
        level: "warn"
      });
      return;
    }
    if (on(n) === "ENOENT") return;
    throw n;
  }
}
async function WDo(e, t, n) {
  let r = 0,
    o = Array.from({
      length: Math.min(t, e.length)
    }, async () => {
      while (r < e.length) {
        let s = r++;
        await n(e[s]);
      }
    });
  await Promise.all(o);
}
async function Fwl(e) {
  if (!CKt()) return !1;
  let t = await UJn(e.mountDir),
    n = t?.partition === e.backend.partitionId;
  if (!e.pulled) return n;
  if (n) return !0;
  if (t !== null && e.scope !== "user") return jwl(e, "midSession"), !1;
  if (e.remoteHashes.size === 0) return !1;
  return T(`multi-store-sync[${e.mountName}]: .memory-sync manifest ${t === null ? "absent" : "partition mismatch"} \u2014 invalidating basis`, {
    level: "warn"
  }), It("team_memory_multistore_conflict", t === null ? "manifest_absent" : "manifest_mismatch"), G("tengu_team_mem_push_manifest_gate", {
    absent: t === null,
    remote_entries: e.remoteHashes.size
  }), e.invalidatedBasis = e.remoteHashes, e.remoteHashes = new Map(), e.pulled = !1, !1;
}
function jwl(e, t) {
  e.suppressedReason = "mount_dir_foreign_partition", e.remoteHashes = new Map(), e.pulled = !1, T(`multi-store-sync[${e.mountName}]: mount dir holds a different partition's .memory-sync \u2014 suppressing sync (remove the dir to re-mount)`, {
    level: "warn"
  }), It("team_memory_multistore_conflict", "foreign_partition_dir"), G("tengu_team_mem_foreign_partition_suppressed", {
    trigger: $e(t)
  });
}
async function LAf(e) {
  if (await Gwl(e)) return {
    success: !1,
    entriesListed: 0,
    filesWritten: 0,
    filesDeleted: 0,
    error: "mount dir canonicity check failed (fail closed)"
  };
  let t = await Fwl(e);
  if (e.suppressedReason !== null) return Wwl;
  let n = await DAf(e, t);
  if (n !== "not-attempted" && n !== "fell-back") return n;
  let r = n === "fell-back",
    o;
  try {
    o = await e.backend.list();
  } catch (h) {
    if (r) Le("team_memory_multistore_bulk_inflate", "fallback_failed");
    return {
      success: !1,
      entriesListed: 0,
      filesWritten: 0,
      filesDeleted: 0,
      permanent: h instanceof $j ? h.reason : void 0,
      error: be(h)
    };
  }
  o = o.filter(h => Mwl(h.path) && !(e.excludeKey && e.excludeKey(h.path.replace(/^\/+/, ""))));
  let s = new Map();
  for (let h of o) s.set(h.path, {
    id: h.id,
    sha256: h.sha256
  });
  let i = await $wl(e.mountDir, e.excludeKey),
    a = e.invalidatedBasis ?? null,
    l = a ?? e.remoteHashes,
    c = o.filter(h => {
      if (i.entries.get(h.path)?.sha256 === h.sha256) return !1;
      if (a !== null && !i.diskPaths.has(h.path)) return !0;
      return l.get(h.path)?.sha256 !== h.sha256;
    }),
    u = i.diskTrusted ? [...i.diskPaths].filter(h => !s.has(h) && l.has(h)) : [],
    d = 0,
    p = 0,
    f = 0,
    m,
    g;
  await WDo(c, NJn, async h => {
    try {
      let y = await e.backend.read(h.id);
      if (!(a !== null && i.diskPaths.has(h.path)) && (await Nwl(e, h.path))) {
        f++;
        return;
      }
      await Owl(e, h.path, y.content), await Bwl(e, h.path), d++;
    } catch (y) {
      if (y instanceof _ce) {
        s.delete(h.path);
        return;
      }
      if (y instanceof Yw) {
        T(`multi-store-sync[${e.mountName}]: refusing to write escaping path ${h.path}`, {
          level: "warn"
        }), s.delete(h.path);
        return;
      }
      if (y instanceof $j) g ??= y.reason;
      m ??= be(y);
    }
  });
  for (let h of u) try {
    await Uwl(e, h), p++;
  } catch (y) {
    m ??= be(y);
  }
  if (m) {
    if (r) Le("team_memory_multistore_bulk_inflate", "fallback_failed");
    return {
      success: !1,
      entriesListed: o.length,
      filesWritten: d,
      filesDeleted: p,
      permanent: g,
      error: m
    };
  }
  if (e.remoteHashes = s, e.pulled = !0, e.invalidatedBasis = null, await Dwl(e, {
    expectPresent: t
  }).catch(h => T(`multi-store-sync[${e.mountName}]: manifest write failed: ${be(h)}`, {
    level: "warn"
  })), f > 0) xe("team_memory_multistore_concurrent_write_preserved"), T(`multi-store-sync[${e.mountName}]: preserved ${f} concurrent local write(s) during first pull`, {
    level: "info"
  });
  return {
    success: !0,
    entriesListed: o.length,
    filesWritten: d,
    filesDeleted: p,
    filesSkippedConcurrent: f
  };
}
async function DAf(e, t) {
  if (e.pulled || e.remoteHashes.size > 0 || (e.invalidatedBasis ?? null) !== null) return "not-attempted";
  let n = e.backend;
  if (!n.exportAll) return "not-attempted";
  if (Oe.CLAUDE_CODE_DISABLE_MEMORY_BULK_INFLATE) return "not-attempted";
  if (!at("tengu_memory_bulk_inflate", !0)) return "not-attempted";
  let r = `multi-store-sync[${e.mountName}]`,
    o;
  try {
    o = await n.exportAll();
  } catch (p) {
    let f = p instanceof _ce ? "not_found" : "http_error";
    return It("team_memory_multistore_bulk_inflate", f), T(`${r}: bulk inflate unavailable (${be(p)}) \u2014 using per-file pull`, {
      level: "debug"
    }), "fell-back";
  }
  let s = new Map(),
    i = new Map(),
    a = 0,
    l = await Cwl({
      source: o,
      maxConcurrentWrites: NJn,
      maxLineLength: xAf,
      handleMemory: async p => {
        let f = $3e(p.path),
          m = Mwl(f) && !(e.excludeKey && e.excludeKey(f.replace(/^\/+/, "")));
        if (i.set(p.memoryId, m ? f : null), !m) return;
        try {
          if (await Nwl(e, f)) a++;else await Owl(e, f, p.content), await Bwl(e, f);
        } catch (g) {
          if (g instanceof Yw) {
            T(`${r}: refusing to write escaping path ${f}`, {
              level: "warn"
            });
            return;
          }
          throw g;
        }
        s.set(f, {
          id: p.memoryId,
          sha256: p.contentSha256
        });
      }
    }),
    c = !1;
  for (let [p, f] of s) if (i.get(f.id) !== p) {
    s.delete(p);
    try {
      await Uwl(e, p);
    } catch (m) {
      T(`${r}: failed to remove superseded ${p} (${be(m)})`, {
        level: "warn"
      }), c = !0;
    }
  }
  let u = s.size - a;
  if (!l.ok || c) {
    let p = l.ok ? "dedupe_unlink_failed" : l.reason;
    return It("team_memory_multistore_bulk_inflate", p), T(`${r}: bulk inflate incomplete (${p}) after ${u} file(s) \u2014 using per-file pull`, {
      level: "warn"
    }), "fell-back";
  }
  let d = On([...i.values()], p => p !== null);
  if (e.remoteHashes = s, e.pulled = !0, await Dwl(e, {
    expectPresent: t
  }).catch(p => T(`${r}: manifest write failed: ${be(p)}`, {
    level: "warn"
  })), xe("team_memory_multistore_bulk_inflate"), a > 0) xe("team_memory_multistore_concurrent_write_preserved");
  return T(`${r}: bulk inflated ${u} file(s) from ${l.memoryLines} exported memory line(s)`, {
    level: "info"
  }), {
    success: !0,
    entriesListed: d,
    filesWritten: u,
    filesDeleted: 0,
    filesSkippedConcurrent: a
  };
}
async function Gwl(e) {
  let t = e.scope === "user" ? [] : ["team", e.mountName];
  if (e.scope === "team" && (await M_e(cT(), "team")) === "escape") return T(`multi-store-sync[${e.mountName}]: team memory root escapes its canonical location \u2014 failing closed`, {
    level: "error"
  }), !0;
  if ((await M_e(e.mountDir, ...t)) === "escape") return T(`multi-store-sync[${e.mountName}]: mount dir escapes its canonical location \u2014 failing closed`, {
    level: "error"
  }), !0;
  return !1;
}
async function jJn(e) {
  if (e.backend.mode === "ro") return wKt;
  if (await Gwl(e)) return It("team_memory_multistore_conflict", "root_escape"), wKt;
  if (await Fwl(e), !e.pulled) return wKt;
  let t = await $wl(e.mountDir, e.excludeKey),
    n = [];
  for (let [p, f] of t.entries) {
    let m = e.remoteHashes.get(p);
    if (m?.sha256 === f.sha256) continue;
    n.push({
      path: p,
      content: f.content,
      known: m
    });
  }
  let r = !0,
    o = !1;
  if (CKt()) {
    let p = await UJn(e.mountDir);
    r = p?.partition === e.backend.partitionId, o = p !== null && !r;
  }
  let s = [];
  if (t.diskTrusted && r) {
    for (let [p, f] of e.remoteHashes) if (!t.diskPaths.has(p)) s.push({
      path: p,
      ref: f
    });
  }
  let i = 0,
    a = 0,
    l = 0,
    c,
    u;
  function d(p) {
    if (p instanceof $j) {
      u ??= p.reason, c ??= p.message;
      return;
    }
    if (p instanceof M3e) {
      c ??= p.message;
      return;
    }
    c ??= be(p);
  }
  return await WDo(o ? [] : n, NJn, async p => {
    try {
      let f;
      if (p.known) f = await e.backend.update(p.known.id, p.content, p.known.sha256);else try {
        f = await e.backend.create(p.path, p.content);
      } catch (m) {
        if (m instanceof D_e && m.existingId) f = await e.backend.update(m.existingId, p.content, null);else throw m;
      }
      e.remoteHashes.set(p.path, f), i++;
    } catch (f) {
      if (f instanceof D_e) {
        if (f.actual && p.known) e.remoteHashes.set(p.path, {
          id: p.known.id,
          sha256: f.actual
        });
        l++;
        return;
      }
      d(f);
    }
  }), await WDo(s, NJn, async p => {
    try {
      await e.backend.delete(p.ref.id, p.ref.sha256), e.remoteHashes.delete(p.path), a++;
    } catch (f) {
      if (f instanceof D_e) {
        if (f.actual) e.remoteHashes.set(p.path, {
          id: p.ref.id,
          sha256: f.actual
        });
        l++;
        return;
      }
      if (f instanceof _ce) {
        e.remoteHashes.delete(p.path);
        return;
      }
      d(f);
    }
  }), {
    success: !c,
    filesWritten: i,
    filesDeleted: a,
    conflicts: l,
    secretsSkipped: t.skippedSecretPaths.length,
    diskTrusted: t.diskTrusted,
    permanent: u,
    error: c
  };
}
function qDo() {
  if (Oe.CLAUDE_CODE_DISABLE_MEMORY_PERIODIC_RESYNC) return 0;
  let e = at("tengu_memory_store_resync_interval_minutes", PAf);
  if (!Number.isFinite(e) || e <= 0) return 0;
  return Math.max(e, MAf) * 60000;
}
async function GJn(e, t = "watch") {
  if (e.inFlight) return e.inFlight;
  let n = $Af(e, t);
  e.inFlight = n;
  try {
    return await n;
  } finally {
    e.inFlight = null;
  }
}
async function $Af(e, t) {
  let n = {},
    r = {},
    s = (await M_e(cT(), "team")) === "escape";
  if (s) T("multi-store-sync: team memory root escapes its canonical location \u2014 failing all stores closed", {
    level: "error"
  });
  await Promise.all(e.stores.map(async a => {
    if (CKt() && a.suppressedReason === null && !a.pulled && a.scope !== "user") {
      let c = await UJn(a.mountDir);
      if (c !== null && c.partition !== a.backend.partitionId) jwl(a, "firstPull");
    }
    if (a.suppressedReason !== null) {
      n[a.mountName] = Wwl;
      return;
    }
    let l = c => {
      n[a.mountName] = {
        success: !1,
        entriesListed: 0,
        filesWritten: 0,
        filesDeleted: 0,
        error: c
      };
    };
    if (s && a.scope === "team") {
      l("team memory root canonicity check failed (fail closed)");
      return;
    }
    try {
      await j$.mkdir(a.mountDir, {
        recursive: !0
      });
      let c = a.scope === "user" ? [] : ["team", a.mountName];
      if ((await M_e(a.mountDir, ...c)) === "escape") {
        T(`multi-store-sync[${a.mountName}]: mount dir escapes its canonical location \u2014 skipping pull+push (fail closed)`, {
          level: "error"
        }), l("mount dir canonicity check failed (fail closed)");
        return;
      }
      n[a.mountName] = await LAf(a);
    } catch (c) {
      n[a.mountName] = {
        success: !1,
        entriesListed: 0,
        filesWritten: 0,
        filesDeleted: 0,
        error: be(c)
      };
    }
  })), await Promise.all(e.stores.map(async a => {
    if (a.suppressedReason !== null) {
      r[a.mountName] = wKt;
      return;
    }
    try {
      r[a.mountName] = await jJn(a);
    } catch (l) {
      r[a.mountName] = {
        ...wKt,
        success: !1,
        error: be(l)
      };
    }
  }));
  for (let a of e.stores) {
    if (a.suppressedReason !== null) continue;
    let l = n[a.mountName]?.permanent ?? r[a.mountName]?.permanent;
    if (l) a.suppressedReason = l, T(`multi-store-sync[${a.mountName}]: suppressing further sync (${l})`, {
      level: "warn"
    });
  }
  let i = {
    stores: e.stores.length,
    stores_suppressed: On(e.stores, a => a.suppressedReason !== null),
    pull_written: Object.values(n).reduce((a, l) => a + l.filesWritten, 0),
    pull_deleted: Object.values(n).reduce((a, l) => a + l.filesDeleted, 0),
    push_written: Object.values(r).reduce((a, l) => a + l.filesWritten, 0),
    push_deleted: Object.values(r).reduce((a, l) => a + l.filesDeleted, 0),
    conflicts: Object.values(r).reduce((a, l) => a + l.conflicts, 0),
    secrets_skipped: Object.values(r).reduce((a, l) => a + l.secretsSkipped, 0),
    pull_failures: On(Object.values(n), a => !a.success),
    push_failures: On(Object.values(r), a => !a.success)
  };
  if (G("tengu_team_mem_multistore_sync", {
    ...i,
    trigger: $e(t)
  }), i.pull_failures === 0) xe("team_memory_multistore_pull");else Le("team_memory_multistore_pull", "multistore_pull_failed");
  if (i.push_failures === 0) xe("team_memory_multistore_push");else Le("team_memory_multistore_push", "multistore_push_failed");
  if (i.conflicts > 0) xe("team_memory_multistore_conflict");
  return T(`multi-store-sync: ${i.stores} store(s) \u2014 ` + `pull \u2193${i.pull_written}/\u2212${i.pull_deleted}, ` + `push \u2191${i.push_written}/\u2212${i.push_deleted}` + (i.conflicts ? `, ${i.conflicts} conflict(s)` : "") + (i.pull_failures || i.push_failures ? `, failures pull=${i.pull_failures} push=${i.push_failures}` : ""), {
    level: "info"
  }), {
    pulls: n,
    pushes: r
  };
}
var xwl,
  j$,
  zF,
  kwl = 102400,
  NJn = 6,
  xAf,
  RAf,
  Rwl = ".memory-sync",
  Lwl = 1,
  wKt,
  PAf = 60,
  MAf = 1,
  Wwl;