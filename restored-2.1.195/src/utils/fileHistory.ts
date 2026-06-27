// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d8n
// matched 2.1.88 source: src/utils/fileHistory.ts
// class=modified  jaccard=0.672  score=0.8004  fileCov=0.8073
// note: deminified; 11 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var d8n = E(() => {
  Hp();
  Rc();
  je();
  Mm();
  fn();
  At();
  vn();
  kM();
  Cv();
  dn();
  ((J9e = new Map()), (iTo = new Map()));
});
function ZEe(e, t) {
  return e;
}
function iMe(e) {
  return;
}
var VQa = {};
_t(VQa, {
  reduceFileHistoryState: () => reduceFileHistoryState,
  fileHistoryTrackEdit: () => fileHistoryTrackEdit,
  fileHistoryRewind: () => fileHistoryRewind,
  fileHistoryRestoreStateFromLog: () => fileHistoryRestoreStateFromLog,
  fileHistoryMakeSnapshot: () => fileHistoryMakeSnapshot,
  fileHistoryHasAnyChanges: () => fileHistoryHasAnyChanges,
  fileHistoryGetDiffStats: () => fileHistoryGetDiffStats,
  fileHistoryEnabled: () => fileHistoryEnabled,
  fileHistoryCanRestore: () => fileHistoryCanRestore,
  copyFileHistoryForResume: () => copyFileHistoryForResume,
  checkOriginFileChanged: () => checkOriginFileChanged,
});
function reduceFileHistoryState(e, t) {
  switch (t.kind) {
    case "track":
      try {
        let n = e.snapshots.at(-1);
        if (!n) return e;
        let r = (e.trackSequence ?? 0) + 1;
        if (n.trackedFileBackups[t.trackingPath])
          return {
            ...e,
            trackSequence: r,
          };
        let o = e.trackedFiles.has(t.trackingPath)
            ? e.trackedFiles
            : new Set(e.trackedFiles).add(t.trackingPath),
          s = {
            ...n,
            trackedFileBackups: {
              ...n.trackedFileBackups,
              [t.trackingPath]: t.backup,
            },
          },
          i = {
            ...e,
            snapshots: (() => {
              let a = e.snapshots.slice();
              return ((a[a.length - 1] = s), a);
            })(),
            trackedFiles: o,
            trackSequence: r,
          };
        return (
          FQa(i),
          VVt(t.messageId, s, !0).catch((a) => {
            ke(Error(`FileHistory: Failed to record snapshot: ${a}`));
          }),
          G("tengu_file_history_track_edit_success", {
            isNewFile: t.isAddingFile,
            version: t.backup.version,
          }),
          T(`FileHistory: Tracked file modification for ${t.filePath}`),
          i
        );
      } catch (n) {
        return (ke(n), G("tengu_file_history_track_edit_failed", {}), e);
      }
    case "snapshot":
      try {
        let n = {
            ...t.trackedFileBackups,
          },
          r = e.snapshots.at(-1);
        if (r)
          for (let l of e.trackedFiles) {
            if (l in n) continue;
            let c = r.trackedFileBackups[l];
            if (c) n[l] = c;
          }
        let o = new Date(),
          s = {
            messageId: t.messageId,
            trackedFileBackups: n,
            timestamp: o,
          },
          i = [...e.snapshots, s],
          a = {
            ...e,
            snapshots: i.length > UQa ? i.slice(-UQa) : i,
            snapshotSequence: (e.snapshotSequence ?? 0) + 1,
          };
        return (
          FQa(a),
          lQp(e, a).catch(ke),
          VVt(t.messageId, s, !1).catch((l) => {
            ke(Error(`FileHistory: Failed to record snapshot: ${l}`));
          }),
          T(
            `FileHistory: Added snapshot for ${t.messageId}, tracking ${e.trackedFiles.size} files`,
          ),
          G("tengu_file_history_snapshot_success", {
            trackedFilesCount: e.trackedFiles.size,
            snapshotCount: a.snapshots.length,
          }),
          a
        );
      } catch (n) {
        return (ke(n), G("tengu_file_history_snapshot_failed", {}), e);
      }
    case "touch":
      return {
        ...e,
        trackSequence: (e.trackSequence ?? 0) + 1,
      };
  }
}
function fileHistoryEnabled() {
  if (vl()) return !1;
  if (Ir()) return tQp();
  return wc("fileCheckpointingEnabled", !0).value && !Oe.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING;
}
function tQp() {
  return (
    ut(process.env.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING) &&
    !Oe.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING
  );
}
async function fileHistoryTrackEdit(e, t, n, r) {
  if (!fileHistoryEnabled()) return;
  let o = qQa(n),
    s = e();
  if (!s) return;
  let i = s.snapshots.at(-1);
  if (!i) {
    (T("FileHistory: Missing most recent snapshot", {
      level: "error",
    }),
      G("tengu_file_history_track_edit_failed", {}));
    return;
  }
  if (i.trackedFileBackups[o]) {
    t({
      kind: "touch",
    });
    return;
  }
  let a;
  try {
    a = await WQa(n, 1);
  } catch (c) {
    (T(`FileHistory: failed to back up ${n}: ${c instanceof Error ? c.message : String(c)}`, {
      level: "error",
    }),
      G("tengu_file_history_track_edit_failed", {}));
    return;
  }
  let l = a.backupFileName === null;
  t({
    kind: "track",
    trackingPath: o,
    filePath: n,
    backup: a,
    messageId: r,
    isAddingFile: l,
  });
}
async function fileHistoryMakeSnapshot(e, t, n) {
  if (!fileHistoryEnabled()) return;
  let r = e();
  if (!r) return;
  let o = {},
    s = r.snapshots.at(-1);
  if (s)
    (T(`FileHistory: Making snapshot for message ${n}`),
      await Promise.all(
        Array.from(r.trackedFiles, async (i) => {
          try {
            let a = YVt(i),
              l = s.trackedFileBackups[i],
              c = l ? l.version + 1 : 1,
              u;
            try {
              u = await IH.stat(a);
            } catch (d) {
              if (!wn(d)) throw d;
            }
            if (!u) {
              ((o[i] = {
                backupFileName: null,
                version: c,
                backupTime: new Date(),
              }),
                G("tengu_file_history_backup_deleted_file", {
                  version: c,
                }),
                T(`FileHistory: Missing tracked file: ${i}`));
              return;
            }
            if (
              l &&
              l.backupFileName !== null &&
              !(await checkOriginFileChanged(a, l.backupFileName, u))
            ) {
              o[i] = l;
              return;
            }
            o[i] = await WQa(a, c);
          } catch (a) {
            (T(`FileHistory: Failed to back up ${i}: ${a}`, {
              level: "error",
            }),
              G("tengu_file_history_backup_file_failed", {}));
          }
        }),
      ));
  t({
    kind: "snapshot",
    messageId: n,
    trackedFileBackups: o,
  });
}
async function fileHistoryRewind(e, t) {
  if (!fileHistoryEnabled()) return;
  let n = e();
  if (!n) return;
  let r = n.snapshots.findLast((o) => o.messageId === t);
  if (!r)
    throw (
      ke(Error(`FileHistory: Snapshot for ${t} not found`)),
      G("tengu_file_history_rewind_failed", {
        trackedFilesCount: n.trackedFiles.size,
        snapshotFound: !1,
      }),
      Error("The selected snapshot was not found")
    );
  try {
    T(`FileHistory: [Rewind] Rewinding to snapshot for ${t}`);
    let o = await rQp(n, r);
    (T(`FileHistory: [Rewind] Finished rewinding to ${t}`),
      G("tengu_file_history_rewind_success", {
        trackedFilesCount: n.trackedFiles.size,
        filesChangedCount: o.length,
      }));
  } catch (o) {
    throw (
      ke(o),
      G("tengu_file_history_rewind_failed", {
        trackedFilesCount: n.trackedFiles.size,
        snapshotFound: !0,
      }),
      o
    );
  }
}
function fileHistoryCanRestore(e, t) {
  if (!fileHistoryEnabled()) return !1;
  return e.snapshots.some((n) => n.messageId === t);
}
async function fileHistoryGetDiffStats(e, t) {
  if (!fileHistoryEnabled()) return;
  let n = e.snapshots.findLast((a) => a.messageId === t);
  if (!n) return;
  let r = await Promise.all(
      Array.from(e.trackedFiles, async (a) => {
        try {
          let l = YVt(a),
            c = n.trackedFileBackups[a],
            u = c ? c.backupFileName : lTo(a, e);
          if (u === void 0)
            return (
              T("FileHistory: Error finding the backup file to apply", {
                level: "error",
              }),
              G("tengu_file_history_rewind_restore_file_failed", {
                dryRun: !0,
              }),
              null
            );
          let d = await sQp(l, u === null ? void 0 : u);
          if (d?.insertions || d?.deletions)
            return {
              filePath: l,
              stats: d,
            };
          if (u === null && (await ed(l)))
            return {
              filePath: l,
              stats: d,
            };
          return null;
        } catch (l) {
          return (
            ke(l),
            G("tengu_file_history_rewind_restore_file_failed", {
              dryRun: !0,
            }),
            null
          );
        }
      }),
    ),
    o = [],
    s = 0,
    i = 0;
  for (let a of r) {
    if (!a) continue;
    (o.push(a.filePath), (s += a.stats?.insertions || 0), (i += a.stats?.deletions || 0));
  }
  return {
    filesChanged: o,
    insertions: s,
    deletions: i,
  };
}
async function fileHistoryHasAnyChanges(e, t) {
  if (!fileHistoryEnabled()) return !1;
  let n = e.snapshots.findLast((r) => r.messageId === t);
  if (!n) return !1;
  for (let r of e.trackedFiles)
    try {
      let o = YVt(r),
        s = n.trackedFileBackups[r],
        i = s ? s.backupFileName : lTo(r, e);
      if (i === void 0) continue;
      if (i === null) {
        if (await ed(o)) return !0;
        continue;
      }
      if (await checkOriginFileChanged(o, i)) return !0;
    } catch (o) {
      ke(o);
    }
  return !1;
}
async function rQp(e, t) {
  let n = [];
  for (let r of e.trackedFiles)
    try {
      let o = YVt(r),
        s = t.trackedFileBackups[r],
        i = s ? s.backupFileName : lTo(r, e);
      if (i === void 0) {
        (T("FileHistory: Error finding the backup file to apply", {
          level: "error",
        }),
          G("tengu_file_history_rewind_restore_file_failed", {
            dryRun: !1,
          }));
        continue;
      }
      if (i === null) {
        try {
          (await IH.unlink(o), T(`FileHistory: [Rewind] Deleted ${o}`), n.push(o));
        } catch (a) {
          if (!wn(a)) throw a;
        }
        continue;
      }
      if (await checkOriginFileChanged(o, i))
        (await aQp(o, i), T(`FileHistory: [Rewind] Restored ${o} from ${i}`), n.push(o));
    } catch (o) {
      (T(
        `FileHistory: [Rewind] Failed to restore ${r}: ${o instanceof Error ? o.message : String(o)}`,
        {
          level: "error",
        },
      ),
        G("tengu_file_history_rewind_restore_file_failed", {
          dryRun: !1,
        }));
    }
  return n;
}
async function checkOriginFileChanged(e, t, n) {
  let r = Q9e(t),
    o = n ?? null;
  if (!o)
    try {
      o = await IH.stat(e);
    } catch (i) {
      if (!wn(i)) return !0;
    }
  let s = null;
  try {
    s = await IH.stat(r);
  } catch (i) {
    if (!wn(i)) return !0;
  }
  return oQp(o, s, async () => {
    try {
      let [i, a] = await Promise.all([IH.readFile(e, "utf-8"), IH.readFile(r, "utf-8")]);
      return i !== a;
    } catch {
      return !0;
    }
  });
}
function oQp(e, t, n) {
  if ((e === null) !== (t === null)) return !0;
  if (e === null || t === null) return !1;
  if (e.mode !== t.mode || e.size !== t.size) return !0;
  if (e.mtimeMs < t.mtimeMs) return !1;
  return n();
}
async function sQp(e, t) {
  let n = [],
    r = 0,
    o = 0;
  try {
    let s = t ? Q9e(t) : void 0,
      [i, a] = await Promise.all([p8n(e), s ? p8n(s) : null]);
    if (i === null && a === null)
      return {
        filesChanged: n,
        insertions: r,
        deletions: o,
      };
    (n.push(e),
      fLe(i ?? "", a ?? "").forEach((c) => {
        if (c.added) r += c.count || 0;
        if (c.removed) o += c.count || 0;
      }));
  } catch (s) {
    ke(Error(`FileHistory: Error generating diffStats: ${s}`));
  }
  return {
    filesChanged: n,
    insertions: r,
    deletions: o,
  };
}
function iQp(e, t) {
  return `${jQa.createHash("sha256").update(e).digest("hex").slice(0, 16)}@v${t}`;
}
function Q9e(e, t) {
  let n = tr();
  return U6.join(n, "file-history", t || Rt(), e);
}
async function WQa(e, t) {
  if (e === null)
    return {
      backupFileName: null,
      version: t,
      backupTime: new Date(),
    };
  let n = iQp(e, t),
    r = Q9e(n),
    o;
  try {
    o = await IH.stat(e);
  } catch (s) {
    if (wn(s))
      return {
        backupFileName: null,
        version: t,
        backupTime: new Date(),
      };
    throw s;
  }
  try {
    await IH.copyFile(e, r);
  } catch (s) {
    if (!wn(s)) throw s;
    (await IH.mkdir(U6.dirname(r), {
      recursive: !0,
    }),
      await IH.copyFile(e, r));
  }
  return (
    await IH.chmod(r, o.mode),
    G("tengu_file_history_backup_file_created", {
      version: t,
      fileSize: o.size,
    }),
    {
      backupFileName: n,
      version: t,
      backupTime: new Date(),
    }
  );
}
async function aQp(e, t) {
  let n = Q9e(t),
    r;
  try {
    r = await IH.stat(n);
  } catch (o) {
    if (wn(o)) {
      (G("tengu_file_history_rewind_restore_file_failed", {}),
        T(`FileHistory: [Rewind] Backup file not found: ${n}`, {
          level: "error",
        }));
      return;
    }
    throw o;
  }
  try {
    await IH.copyFile(n, e);
  } catch (o) {
    if (!wn(o)) throw o;
    (await IH.mkdir(U6.dirname(e), {
      recursive: !0,
    }),
      await IH.copyFile(n, e));
  }
  await IH.chmod(e, r.mode);
}
function lTo(e, t) {
  for (let n of t.snapshots) {
    let r = n.trackedFileBackups[e];
    if (r !== void 0 && r.version === 1) return r.backupFileName;
  }
  return;
}
function qQa(e) {
  if (!U6.isAbsolute(e)) return e;
  let t = yr();
  if (e.startsWith(t)) return U6.relative(t, e);
  return e;
}
function YVt(e) {
  if (U6.isAbsolute(e)) return e;
  return U6.join(yr(), e);
}
function fileHistoryRestoreStateFromLog(e, t) {
  if (!fileHistoryEnabled()) return;
  let n = [],
    r = new Set();
  for (let o of e) {
    let s = {};
    for (let [i, a] of Object.entries(o.trackedFileBackups)) {
      let l = qQa(i);
      (r.add(l), (s[l] = a));
    }
    n.push({
      ...o,
      trackedFileBackups: s,
    });
  }
  t({
    snapshots: n,
    trackedFiles: r,
    snapshotSequence: n.length,
  });
}
async function copyFileHistoryForResume(e, t) {
  if (!fileHistoryEnabled()) return;
  let n = e.fileHistorySnapshots;
  if (!n || e.messages.length === 0) return;
  let o = e.messages.at(-1)?.sessionId;
  if (!o) {
    ke(Error("FileHistory: Failed to copy backups on restore (no previous session id)"));
    return;
  }
  let s = t ?? Rt();
  if (o === s) {
    T(`FileHistory: No need to copy file history for resuming with same session id: ${s}`);
    return;
  }
  try {
    let i = U6.join(tr(), "file-history", s);
    await IH.mkdir(i, {
      recursive: !0,
    });
    let a = 0;
    if (
      (await Promise.allSettled(
        n.map(async (l) => {
          let c = Object.values(l.trackedFileBackups).filter((p) => p.backupFileName !== null);
          if (
            !(
              await Promise.allSettled(
                c.map(async ({ backupFileName: p }) => {
                  let f = Q9e(p, o),
                    m = U6.join(i, p);
                  try {
                    await IH.link(f, m);
                  } catch (g) {
                    let h = on(g);
                    if (h === "EEXIST") return;
                    if (h === "ENOENT")
                      throw (
                        T(
                          `FileHistory: Failed to copy backup ${p} on restore (backup file does not exist in ${o})`,
                          {
                            level: "error",
                          },
                        ),
                        g
                      );
                    T(`FileHistory: hard link failed (${h}), falling back to copy: ${f} -> ${m}`, {
                      level: "error",
                    });
                    try {
                      await IH.copyFile(f, m);
                    } catch (y) {
                      if (Vo(y)) throw (T(`FileHistory: copy fallback failed for ${f}: ${y}`), y);
                      throw (
                        ke(Error("FileHistory: Error copying over backup from previous session")),
                        y
                      );
                    }
                  }
                  T(`FileHistory: Copied backup ${p} from session ${o} to ${s}`);
                }),
              )
            ).some((p) => p.status === "rejected")
          )
            VVt(l.messageId, l, !1).catch((p) => {
              ke(Error("FileHistory: Failed to record copy backup snapshot"));
            });
          else a++;
        }),
      ),
      a > 0)
    )
      G("tengu_file_history_resume_copy_failed", {
        numSnapshots: n.length,
        failedSnapshots: a,
      });
  } catch (i) {
    if (Vo(i)) {
      T(`FileHistory: backup-dir mkdir failed for session ${s}: ${i}`);
      return;
    }
    ke(i);
  }
}
async function lQp(e, t) {
  let n = e.snapshots.at(-1),
    r = t.snapshots.at(-1);
  if (!r) return;
  for (let o of t.trackedFiles) {
    let s = YVt(o),
      i = n?.trackedFileBackups[o],
      a = r.trackedFileBackups[o];
    if (i?.backupFileName === a?.backupFileName && i?.version === a?.version) continue;
    let l = null;
    if (i?.backupFileName) {
      let u = Q9e(i.backupFileName);
      l = await p8n(u);
    }
    let c = null;
    if (a?.backupFileName) {
      let u = Q9e(a.backupFileName);
      c = await p8n(u);
    }
    if (l !== c) ELe(s, l, c);
  }
}
async function p8n(e) {
  try {
    return await IH.readFile(e, "utf-8");
  } catch {
    return null;
  }
}
function FQa(e) {
  if (cQp) console.error(GQa.inspect(e, !1, 5));
}
var jQa,
  IH,
  U6,
  GQa,
  UQa = 100,
  cQp = !1;
