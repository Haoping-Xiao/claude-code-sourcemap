// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qwl
// matched 2.1.88 source: src/services/teamMemorySync/watcher.ts
// class=new  jaccard=0.0544  score=0.0754  fileCov=0.163
// note: nearest: src/services/teamMemorySync/watcher.ts (0.0544); dir inferred from dep-graph -> utils; 7 renamed
// ─────────────────────────────────────────────────────────────────────────
var qwl = E(() => {
  Uh();
  vGt();
  MM();
  je();
  wr();
  At();
  zH();
  Jt();
  dn();
  Un();
  kt();
  i0n();
  WKr();
  Iwl();
  xwl = require("crypto"), j$ = require("fs/promises"), zF = require("path"), xAf = kwl * 6 + 16384;
  RAf = [".md", ".txt", ".json", ".jsonl"];
  wKt = {
    success: !0,
    filesWritten: 0,
    filesDeleted: 0,
    conflicts: 0,
    secretsSkipped: 0
  };
  Wwl = {
    success: !0,
    entriesListed: 0,
    filesWritten: 0,
    filesDeleted: 0
  };
});
var KJn = {};
_t(KJn, {
  stopMemoryWatcher: () => stopMemoryWatcher,
  startMemoryWatcher: () => startMemoryWatcher,
  rebuildStoreSet: () => rebuildStoreSet,
  notifyMemoryWrite: () => notifyMemoryWrite,
  maybeResyncStaleStores: () => maybeResyncStaleStores,
  isPermanentFailure: () => isPermanentFailure,
  _startFileWatcherForTesting: () => VAf,
  _resyncTimerForTesting: () => KAf,
  _resetWatcherStateForTesting: () => qAf,
  _multiStoreStateForTesting: () => YAf,
  _lastSyncCompletedAtForTesting: () => zAf,
  _armResyncTimerForTesting: () => XAf,
  UNLINK_RECOVERABLE_REASONS_BY_SCOPE: () => UNLINK_RECOVERABLE_REASONS_BY_SCOPE
});
function WJn() {
  return {
    syncState: null,
    debounceTimer: null,
    pushInProgress: !1,
    hasPendingChanges: !1,
    changeSeq: 0,
    currentPushPromise: null,
    pushSuppressedReason: null,
    lastSyncCompletedAt: null
  };
}
function Ywl(e, t) {
  return UNLINK_RECOVERABLE_REASONS_BY_SCOPE[e].has(t);
}
function isPermanentFailure(e) {
  if (e.errorType === "no_oauth" || e.errorType === "server_unavailable") return !0;
  if (e.httpStatus !== void 0 && e.httpStatus >= 400 && e.httpStatus < 500 && e.httpStatus !== 409 && e.httpStatus !== 429) return !0;
  return !1;
}
function VDo(e) {
  let t = mm(),
    n = tSt.relative(t, e).replaceAll(tSt.sep, "/");
  if (n === "" || n.startsWith("..")) return null;
  let r = n.split("/");
  if (k2n(r[0]) === "team") return "team";
  if (oEe(n)) return null;
  return "user";
}
function Vwl(e, t, n) {
  let r = kb[e];
  if (r.pushSuppressedReason !== null) return;
  r.pushSuppressedReason = t;
  let o = Ywl(e, t) ? " (recoverable via file deletion)" : "";
  if (T(`memory-watcher[${e}]: suppressing retry for the rest of this session (${t})${o}`, {
    level: "warn"
  }), e === "team") G("tengu_team_mem_push_suppressed", {
    reason: t,
    ...n
  });
}
async function Jwl(e, t = "watch") {
  let n = kb[e],
    r = e === "team" ? p3 : e === "user" ? bq : null;
  if (r) {
    n.pushInProgress = !0;
    let s = n.changeSeq;
    try {
      let i = r.stores,
        a = new Set(i.filter(d => d.suppressedReason !== null).map(d => d.mountName)),
        l = await GJn(r, t);
      if (!Object.values(l.pushes).some(d => !d.success) && n.changeSeq === s) n.hasPendingChanges = !1;
      if (e === "team") {
        for (let d of i) if (d.suppressedReason !== null && !a.has(d.mountName)) G("tengu_team_mem_push_suppressed", {
          reason: d.suppressedReason,
          multistore: !0,
          mount: d.mountName
        });
      }
      if (i.length > 0 && i.every(d => d.suppressedReason !== null)) Vwl(e, i[0].suppressedReason, {
        multistore: !0,
        stores: i.length
      });
    } catch (i) {
      T(`memory-watcher[${e}]: multi-store sync error: ${be(i)}`, {
        level: "warn"
      });
    } finally {
      n.lastSyncCompletedAt = Date.now(), n.pushInProgress = !1, n.currentPushPromise = null, nSt();
    }
    return;
  }
  if (!n.syncState) return;
  n.pushInProgress = !0;
  let o = n.changeSeq;
  try {
    let s = await GDo(n.syncState);
    if (s.success) {
      if (e !== "user" || n.changeSeq === o) n.hasPendingChanges = !1;
    }
    if (s.success && s.filesUploaded > 0) T(`memory-watcher[${e}]: pushed ${s.filesUploaded} files`, {
      level: "info"
    });else if (!s.success) {
      if (T(`memory-watcher[${e}]: push failed: ${s.error}`, {
        level: "warn"
      }), isPermanentFailure(s)) {
        if (s.serverErrorCode === "team_memory_group_acl_denied" || s.serverErrorCode === "team_memory_group_acl_unconfigured") T(`memory-watcher[${e}]: ${s.serverMessage || "Team memory is restricted to specific groups for your organization."} Contact your administrator for access.`, {
          level: "warn"
        });
        Vwl(e, s.serverErrorCode ?? (s.httpStatus !== void 0 ? `http_${s.httpStatus}` : s.errorType ?? "unknown"), {
          ...(s.httpStatus && {
            status: s.httpStatus
          }),
          ...(s.serverMessage !== void 0 && {
            server_message: s.serverMessage
          }),
          ...(s.serverErrorCode !== void 0 && {
            server_error_code: s.serverErrorCode
          }),
          ...(s.serverErrorType !== void 0 && {
            server_error_type: s.serverErrorType
          })
        });
      }
    }
  } catch (s) {
    T(`memory-watcher[${e}]: push error: ${be(s)}`, {
      level: "warn"
    });
  } finally {
    n.pushInProgress = !1, n.currentPushPromise = null;
  }
}
function qJn(e) {
  let t = kb[e];
  if (t.pushSuppressedReason !== null) return;
  if (t.hasPendingChanges = !0, t.changeSeq++, t.debounceTimer) clearTimeout(t.debounceTimer);
  t.debounceTimer = setTimeout(FAf, OAf, e);
}
function YDo() {
  return bq ? vKt() : Nqe();
}
function Qwl(e) {
  return e === "user" ? YDo() : vKt();
}
function FAf(e) {
  let t = kb[e];
  if (e === "user" && !YDo()) {
    if (t.debounceTimer) clearTimeout(t.debounceTimer), t.debounceTimer = null;
    if (t.syncState) t.syncState.aborted = !0;
    T("memory-watcher[user]: personal sync disabled mid-session \u2014 pausing (reversible)", {
      level: "info"
    });
    return;
  }
  if (e === "user" && !t.pushInProgress && t.syncState?.aborted) t.syncState.aborted = !1;
  if (t.pushInProgress) {
    qJn(e);
    return;
  }
  if (t.pushSuppressedReason !== null) return;
  if (!t.hasPendingChanges) return;
  t.currentPushPromise = Jwl(e);
}
function maybeResyncStaleStores() {
  try {
    if (!eSt) return;
    let e = qDo();
    if (e <= 0) return;
    let t = Date.now();
    for (let n of ["team", "user"]) {
      if (!(n === "team" ? p3 : bq)) continue;
      let o = kb[n];
      if (o.pushSuppressedReason !== null || o.pushInProgress) continue;
      if (o.lastSyncCompletedAt === null || t - o.lastSyncCompletedAt <= e) continue;
      if (!Qwl(n)) continue;
      o.currentPushPromise = Jwl(n, "periodic");
    }
  } catch (e) {
    T(`memory-watcher: stale-store check failed: ${be(e)}`, {
      level: "warn"
    });
  }
}
function nSt() {
  if (d3) clearTimeout(d3), d3 = null;
  if (!eSt) return;
  let e = qDo();
  if (e <= 0) return;
  let t = Date.now(),
    n = null;
  for (let s of ["team", "user"]) {
    if (!(s === "team" ? p3 : bq)) continue;
    let a = kb[s];
    if (a.pushSuppressedReason !== null || a.pushInProgress || a.lastSyncCompletedAt === null) continue;
    let l = Qwl(s) ? a.lastSyncCompletedAt + e : t + e;
    if (n === null || l < n) n = l;
  }
  if (n === null) return;
  let r = Math.max(n - t, UAf),
    o = setTimeout(() => {
      d3 = null, maybeResyncStaleStores(), nSt();
    }, r);
  o.unref?.(), d3 = o;
}
function zDo(e) {
  if (e === "team" && p3) return !0;
  if (e === "user" && bq) return !0;
  return kb[e].syncState !== null;
}
async function KDo(e) {
  if (eSt) return;
  eSt = !0, await VJn.mkdir(e, {
    recursive: !0
  }).catch(r => T(`memory-watcher: mkdir ${e} failed: ${be(r)}`, {
    level: "warn"
  }));
  let t = r => {
      let o = VDo(r);
      if (o === null || !zDo(o)) return;
      qJn(o);
    },
    n = r => {
      let o = VDo(r);
      if (o === null || !zDo(o)) return;
      let s = kb[o];
      if (s.pushSuppressedReason !== null && Ywl(o, s.pushSuppressedReason)) T(`memory-watcher[${o}]: unlink cleared suppression (was: ${s.pushSuppressedReason})`, {
        level: "info"
      }), s.pushSuppressedReason = null;
      qJn(o);
    };
  iHe = S1.watch(e, {
    persistent: !0,
    ignoreInitial: !0,
    usePolling: NAf,
    interval: BAf,
    ignorePermissionErrors: !0,
    ignored: r => {
      let o = tSt.relative(mm(), r).replaceAll(tSt.sep, "/");
      if (o === "" || o.startsWith("..")) return !1;
      let s = o.split("/");
      if (k2n(s[0]) === "team") return s.at(-1) === ".memory-sync";
      return oEe(o);
    }
  }), iHe.on("add", t), iHe.on("change", t), iHe.on("unlink", n), iHe.on("error", r => {
    T(`memory-watcher: watcher error: ${be(r)}`, {
      level: "warn"
    });
  }), T(`memory-watcher: watching ${e}`, {
    level: "debug"
  }), nSt();
}
async function startMemoryWatcher() {
  try {
    await GAf();
  } finally {
    uwl();
  }
}
async function GAf() {
  if (!ad()) return;
  let e = process.env.CLAUDE_MEMORY_STORES?.trim() ? vKt() : cL() && FDo("team"),
    t = Nqe() && FDo("user");
  if (!e && !t) return;
  Ci(async () => stopMemoryWatcher());
  let n = null,
    r = !1;
  if (e) try {
    n = yce();
  } catch (s) {
    T(`memory-watcher: CLAUDE_MEMORY_STORES invalid, disabling team sync: ${be(s)}`, {
      level: "error"
    }), G("tengu_team_mem_multistore_config_invalid", {
      error: be(s)
    }), Le("team_memory_sync_watcher_start", "config_invalid"), n = null, r = !0;
  }
  let o = await XFe();
  if (t && o) kb.user.syncState = BDo("user", o);
  if (n !== null) {
    let s = n.filter(l => l.scope === "team"),
      i = n.filter(l => l.scope === "user");
    if (s.length > 0) p3 = BJn(s0n(s), s.map(l => ({
      mount: l.mount,
      scope: l.scope
    })));
    if (i.length > 0) bq = BJn(s0n(i), i.map(l => ({
      mount: l.mount,
      scope: l.scope
    }))), kb.user.syncState = null;
    let a = async (l, c) => {
      if (!c) return;
      let u = kb[l];
      u.pushInProgress = !0;
      let d = GJn(c, "startup");
      u.currentPushPromise = d.then(() => {
        return;
      }).catch(() => {
        return;
      });
      try {
        await d;
      } catch (p) {
        T(`memory-watcher[${l}]: multi-store initial sync failed: ${be(p)}`, {
          level: "warn"
        });
      } finally {
        u.lastSyncCompletedAt = Date.now(), u.pushInProgress = !1, u.currentPushPromise = null, nSt();
      }
    };
    if (await a("team", p3), await a("user", bq), p3) xe("team_memory_sync_watcher_start"), G("tengu_team_mem_sync_started", {
      multistore: !0,
      stores: p3.stores.length,
      watcher_started: !0
    });
    if (bq) xe("personal_memory_sync_watcher_start"), G("tengu_personal_mem_sync_started", {
      multistore: !0,
      watcher_started: !0
    });
  }
  if (!o) {
    if (T("memory-watcher: no github.com remote, skipping sync", {
      level: "debug"
    }), p3 || bq) await KDo(bq ? mm() : cT());
    return;
  }
  if (e && n === null && !r) kb.team.syncState = BDo("team", o);
  if (kb.team.syncState) await zwl("team");
  if (kb.user.syncState) await zwl("user");
  if (kb.team.syncState || kb.user.syncState || p3 || bq) {
    let s = kb.user.syncState || bq;
    await KDo(s ? mm() : cT());
  }
}
async function zwl(e) {
  let t = kb[e];
  if (!t.syncState) return;
  if (t.syncState.pulled) {
    if (T(`memory-watcher[${e}]: initial pull skipped \u2014 basis already established by lazy pull-on-first-push`, {
      level: "debug"
    }), e === "team") xe("team_memory_sync_watcher_start"), G("tengu_team_mem_sync_started", {
      initial_pull_success: !0,
      initial_files_pulled: 0,
      initial_files_reaped: 0,
      watcher_started: !0,
      server_has_content: t.syncState.serverChecksums.size > 0
    });else xe("personal_memory_sync_watcher_start");
    return;
  }
  let n = !1,
    r = 0,
    o = 0,
    s = !1;
  try {
    let i = await jDo(t.syncState, {
      skipEtagCache: !0
    });
    if (n = i.success, s = i.entryCount > 0, i.success && (i.filesWritten > 0 || i.filesReaped > 0)) r = i.filesWritten, o = i.filesReaped, T(`memory-watcher[${e}]: initial pull got ${i.filesWritten} files` + (i.filesReaped > 0 ? `, reaped ${i.filesReaped} tombstoned` : ""), {
      level: "info"
    });
  } catch (i) {
    T(`memory-watcher[${e}]: initial pull failed: ${be(i)}`, {
      level: "warn"
    });
  }
  if (e === "team") xe("team_memory_sync_watcher_start"), G("tengu_team_mem_sync_started", {
    initial_pull_success: n,
    initial_files_pulled: r,
    initial_files_reaped: o,
    watcher_started: !0,
    server_has_content: s
  });else xe("personal_memory_sync_watcher_start");
}
async function notifyMemoryWrite(e) {
  let t = VDo(e);
  if (t === null || !zDo(t)) return;
  qJn(t);
}
async function stopMemoryWatcher() {
  if (d3) clearTimeout(d3), d3 = null;
  for (let e of ["team", "user"]) {
    let t = kb[e];
    if (t.debounceTimer) clearTimeout(t.debounceTimer), t.debounceTimer = null;
  }
  if (iHe) await iHe.close().catch(() => {}), iHe = null;
  if (await Promise.all(["team", "user"].map(async e => {
    let t = kb[e];
    if (t.currentPushPromise) try {
      await t.currentPushPromise;
    } catch {}
  })), d3) clearTimeout(d3), d3 = null;
  await Promise.all(["team", "user"].map(async e => {
    let t = kb[e];
    if (!t.hasPendingChanges || t.pushSuppressedReason !== null) return;
    if (e === "user" && !YDo()) {
      if (t.hasPendingChanges = !1, t.syncState) t.syncState.aborted = !0;
      T("memory-watcher[user]: personal sync disabled \u2014 skipping shutdown flush", {
        level: "info"
      });
      return;
    }
    try {
      let n = e === "team" ? p3 : e === "user" ? bq : null;
      if (n) await Promise.all(n.stores.filter(r => r.suppressedReason === null).map(r => jJn(r)));else if (t.syncState) {
        if (e === "user") t.syncState.aborted = !1;
        await GDo(t.syncState);
      }
    } catch {}
  }));
}
async function rebuildStoreSet(e) {
  if (!eSt) return;
  if (!vKt() || !CKt()) return;
  let t = kb.team;
  if (t.syncState !== null) return;
  let n = !1;
  while (t.currentPushPromise) {
    n = !0;
    let a = t.currentPushPromise;
    if (await a.catch(() => {}), t.currentPushPromise === a) t.currentPushPromise = null;
  }
  if (t.pushInProgress) return;
  if (t.pushInProgress = !0, t.debounceTimer) clearTimeout(t.debounceTimer), t.debounceTimer = null;
  let r = p3,
    o = t.hasPendingChanges,
    s = t.changeSeq,
    i = (async () => {
      let a = new Set((r?.stores ?? []).filter(f => f.suppressedReason !== null || !f.pulled || f.backend.mode === "ro").map(f => f.mountName));
      if (r) await Promise.all(r.stores.filter(f => !a.has(f.mountName)).map(async f => {
        let m = await jJn(f).catch(() => null);
        if (m === null || !m.success || !f.pulled || m.secretsSkipped > 0 || m.conflicts > 0 || m.diskTrusted === !1) a.add(f.mountName);
      }));
      let l = (e ?? []).filter(f => f.scope !== "user"),
        c = l.length > 0 ? BJn(s0n(l), l.map(f => ({
          mount: f.mount,
          scope: f.scope
        }))) : null,
        u = new Set();
      if (c && r) {
        let f = new Map(r.stores.map(m => [m.mountDir, m]));
        c.stores = c.stores.map(m => {
          let g = f.get(m.mountDir);
          if (g?.backend.partitionId !== m.backend.partitionId) return m;
          return u.add(m.mountDir), {
            ...m,
            remoteHashes: g.remoteHashes,
            pulled: g.pulled,
            createdAtMs: g.createdAtMs,
            pullWrittenMtimes: g.pullWrittenMtimes,
            suppressedReason: g.suppressedReason,
            invalidatedBasis: g.invalidatedBasis
          };
        });
      }
      if (t.changeSeq !== s) for (let f of r?.stores ?? []) a.add(f.mountName);
      if (p3 = c, t.changeSeq === s) t.hasPendingChanges = !1;
      t.pushSuppressedReason = null, t.lastSyncCompletedAt = null;
      let d = (r?.stores ?? []).filter(f => f.scope !== "user" && /^[A-Za-z0-9_-]+$/.test(f.mountName) && !u.has(f.mountDir) && !a.has(f.mountName)),
        p = [];
      for (let f of d) if ((await M_e(f.mountDir, "team", f.mountName)) === "ok") p.push(f);
      if (await Promise.all(p.map(f => VJn.rm(f.mountDir, {
        recursive: !0,
        force: !0
      }).catch(m => T(`memory-watcher: reap ${f.mountName} failed: ${be(m)}`, {
        level: "warn"
      })))), G("tengu_team_mem_store_set_rebuilt", {
        old_stores: r?.stores.length ?? 0,
        new_stores: c?.stores.length ?? 0,
        dirs_reaped: p.length,
        flush_failed_stores: a.size,
        had_in_flight: n,
        had_pending_flush: o
      }), c) {
        try {
          await GJn(c, "rebuild");
        } catch (f) {
          T(`memory-watcher: rebuild initial sync failed: ${be(f)}`, {
            level: "warn"
          });
        }
        t.lastSyncCompletedAt = Date.now();
      }
    })();
  t.currentPushPromise = i.catch(() => {});
  try {
    await i;
  } finally {
    t.pushInProgress = !1, t.currentPushPromise = null, nSt();
  }
}
function qAf(e) {
  if (iHe = null, d3) clearTimeout(d3), d3 = null;
  eSt = e?.skipWatcher ?? !1, p3 = e?.multiStoreState ?? null, bq = e?.userMultiStoreState ?? null, kb.team = WJn(), kb.team.syncState = e?.teamSyncState ?? null, kb.team.pushSuppressedReason = e?.teamPushSuppressedReason ?? null, kb.team.lastSyncCompletedAt = e?.teamLastSyncCompletedAt ?? null, kb.user = WJn(), kb.user.syncState = e?.userSyncState ?? null, kb.user.pushSuppressedReason = e?.userPushSuppressedReason ?? null, kb.user.lastSyncCompletedAt = e?.userLastSyncCompletedAt ?? null;
}
function VAf(e) {
  return KDo(e);
}
function zAf(e) {
  return kb[e].lastSyncCompletedAt;
}
function KAf() {
  return d3;
}
function YAf() {
  return p3;
}
function XAf() {
  nSt();
}
var VJn,
  tSt,
  OAf = 2000,
  NAf,
  BAf = 2000,
  iHe = null,
  eSt = !1,
  d3 = null,
  UAf = 1000,
  kb,
  p3 = null,
  bq = null,
  UNLINK_RECOVERABLE_REASONS_BY_SCOPE;