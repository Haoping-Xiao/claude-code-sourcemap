// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d8n
// matched 2.1.88 source: src/utils/fileHistory.ts
// class=modified  jaccard=0.5478  score=0.8312  fileCov=0.6164
// note: deminified; 15 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: reduceFileHistoryState, fileHistoryTrackEdit, fileHistoryRewind, fileHistoryRestoreStateFromLog, fileHistoryMakeSnapshot, fileHistoryHasAnyChanges, fileHistoryGetDiffStats, fileHistoryEnabled, fileHistoryCanRestore, copyFileHistoryForResume, checkOriginFileChanged
// [unwrapped __esm module d8n] deps: axios/lib/axios.js, constants/oauth.ts, utils/debug.ts, utils/git/gitConfigParser.ts, @anthropic-ai/sdk/internal/utils/uuid.mjs, utils/errors.ts, utils/sequential.ts, utils/teleport/api.ts, utils/teleport/api.ts, dn
((J9e = new Map()), (iTo = new Map()));
function ZEe(e, t) {
  return e;
}
function iMe(e) {
  return;
}
function fileHistoryMakeSnapshot(captured, messageId) {
  switch (messageId.kind) {
    case "track":
      try {
        let n = captured.snapshots.at(-1);
        if (!n) return captured;
        let r = (captured.trackSequence ?? 0) + 1;
        if (n.trackedFileBackups[messageId.trackingPath])
          return {
            ...captured,
            trackSequence: r,
          };
        let o = captured.trackedFiles.has(messageId.trackingPath)
            ? captured.trackedFiles
            : new Set(captured.trackedFiles).add(messageId.trackingPath),
          s = {
            ...n,
            trackedFileBackups: {
              ...n.trackedFileBackups,
              [messageId.trackingPath]: messageId.backup,
            },
          },
          i = {
            ...captured,
            snapshots: (() => {
              let a = captured.snapshots.slice();
              return ((a[a.length - 1] = s), a);
            })(),
            trackedFiles: o,
            trackSequence: r,
          };
        return (
          FQa(i),
          VVt(messageId.messageId, s, true).catch((a) => {
            ke(Error(`FileHistory: Failed to record snapshot: ${a}`));
          }),
          G("tengu_file_history_track_edit_success", {
            isNewFile: messageId.isAddingFile,
            version: messageId.backup.version,
          }),
          T(`FileHistory: Tracked file modification for ${messageId.filePath}`),
          i
        );
      } catch (n) {
        return (ke(n), G("tengu_file_history_track_edit_failed", {}), captured);
      }
    case "snapshot":
      try {
        let n = {
            ...messageId.trackedFileBackups,
          },
          r = captured.snapshots.at(-1);
        if (r)
          for (let l of captured.trackedFiles) {
            if (l in n) continue;
            let c = r.trackedFileBackups[l];
            if (c) n[l] = c;
          }
        let o = new Date(),
          s = {
            messageId: messageId.messageId,
            trackedFileBackups: n,
            timestamp: o,
          },
          i = [...captured.snapshots, s],
          a = {
            ...captured,
            snapshots: i.length > UQa ? i.slice(-UQa) : i,
            snapshotSequence: (captured.snapshotSequence ?? 0) + 1,
          };
        return (
          FQa(a),
          lQp(captured, a).catch(ke),
          VVt(messageId.messageId, s, false).catch((l) => {
            ke(Error(`FileHistory: Failed to record snapshot: ${l}`));
          }),
          T(
            `FileHistory: Added snapshot for ${messageId.messageId}, tracking ${captured.trackedFiles.size} files`,
          ),
          G("tengu_file_history_snapshot_success", {
            trackedFilesCount: captured.trackedFiles.size,
            snapshotCount: a.snapshots.length,
          }),
          a
        );
      } catch (n) {
        return (ke(n), G("tengu_file_history_snapshot_failed", {}), captured);
      }
    case "touch":
      return {
        ...captured,
        trackSequence: (captured.trackSequence ?? 0) + 1,
      };
  }
}
function fileHistoryEnabled() {
  if (vl()) return false;
  if (Ir()) return tQp();
  return wc("fileCheckpointingEnabled", true).value && !Oe.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING;
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
    a = await createBackup(n, 1);
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
async function Z9e(e, t, n) {
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
            o[i] = await createBackup(a, c);
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
async function fileHistoryRewind(updateFileHistoryState, messageId) {
  if (!fileHistoryEnabled()) return;
  let captured = updateFileHistoryState();
  if (!captured) return;
  let r = captured.snapshots.findLast((o) => o.messageId === messageId);
  if (!r)
    throw (
      ke(Error(`FileHistory: Snapshot for ${messageId} not found`)),
      G("tengu_file_history_rewind_failed", {
        trackedFilesCount: captured.trackedFiles.size,
        snapshotFound: false,
      }),
      Error("The selected snapshot was not found")
    );
  try {
    T(`FileHistory: [Rewind] Rewinding to snapshot for ${messageId}`);
    let o = await applySnapshot(captured, r);
    (T(`FileHistory: [Rewind] Finished rewinding to ${messageId}`),
      G("tengu_file_history_rewind_success", {
        trackedFilesCount: captured.trackedFiles.size,
        filesChangedCount: o.length,
      }));
  } catch (o) {
    throw (
      ke(o),
      G("tengu_file_history_rewind_failed", {
        trackedFilesCount: captured.trackedFiles.size,
        snapshotFound: true,
      }),
      o
    );
  }
}
function fileHistoryCanRestore(e, t) {
  if (!fileHistoryEnabled()) return false;
  return e.snapshots.some((n) => n.messageId === t);
}
async function fileHistoryGetDiffStats(state, messageId) {
  if (!fileHistoryEnabled()) return;
  let targetSnapshot = state.snapshots.findLast((a) => a.messageId === messageId);
  if (!targetSnapshot) return;
  let r = await Promise.all(
      Array.from(state.trackedFiles, async (a) => {
        try {
          let l = YVt(a),
            c = targetSnapshot.trackedFileBackups[a],
            u = c ? c.backupFileName : lTo(a, state);
          if (u === void 0)
            return (
              T("FileHistory: Error finding the backup file to apply", {
                level: "error",
              }),
              G("tengu_file_history_rewind_restore_file_failed", {
                dryRun: true,
              }),
              null
            );
          let d = await computeDiffStatsForFile(l, u === null ? void 0 : u);
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
              dryRun: true,
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
  if (!fileHistoryEnabled()) return false;
  let n = e.snapshots.findLast((r) => r.messageId === t);
  if (!n) return false;
  for (let r of e.trackedFiles)
    try {
      let o = YVt(r),
        s = n.trackedFileBackups[r],
        i = s ? s.backupFileName : lTo(r, e);
      if (i === void 0) continue;
      if (i === null) {
        if (await ed(o)) return true;
        continue;
      }
      if (await checkOriginFileChanged(o, i)) return true;
    } catch (o) {
      ke(o);
    }
  return false;
}
async function applySnapshot(state, targetSnapshot) {
  let n = [];
  for (let r of state.trackedFiles)
    try {
      let o = YVt(r),
        s = targetSnapshot.trackedFileBackups[r],
        i = s ? s.backupFileName : lTo(r, state);
      if (i === void 0) {
        (T("FileHistory: Error finding the backup file to apply", {
          level: "error",
        }),
          G("tengu_file_history_rewind_restore_file_failed", {
            dryRun: false,
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
        (await restoreBackup(o, i), T(`FileHistory: [Rewind] Restored ${o} from ${i}`), n.push(o));
    } catch (o) {
      (T(
        `FileHistory: [Rewind] Failed to restore ${r}: ${o instanceof Error ? o.message : String(o)}`,
        {
          level: "error",
        },
      ),
        G("tengu_file_history_rewind_restore_file_failed", {
          dryRun: false,
        }));
    }
  return n;
}
async function checkOriginFileChanged(e, t, n) {
  let r = resolveBackupPath(t),
    o = n ?? null;
  if (!o)
    try {
      o = await IH.stat(e);
    } catch (i) {
      if (!wn(i)) return true;
    }
  let s = null;
  try {
    s = await IH.stat(r);
  } catch (i) {
    if (!wn(i)) return true;
  }
  return oQp(o, s, async () => {
    try {
      let [i, a] = await Promise.all([IH.readFile(e, "utf-8"), IH.readFile(r, "utf-8")]);
      return i !== a;
    } catch {
      return true;
    }
  });
}
function oQp(e, t, n) {
  if ((e === null) !== (t === null)) return true;
  if (e === null || t === null) return false;
  if (e.mode !== t.mode || e.size !== t.size) return true;
  if (e.mtimeMs < t.mtimeMs) return false;
  return n();
}
async function computeDiffStatsForFile(originalFile, backupFileName) {
  let n = [],
    r = 0,
    o = 0;
  try {
    let s = backupFileName ? resolveBackupPath(backupFileName) : void 0,
      [i, a] = await Promise.all([p8n(originalFile), s ? p8n(s) : null]);
    if (i === null && a === null)
      return {
        filesChanged: n,
        insertions: r,
        deletions: o,
      };
    (n.push(originalFile),
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
function resolveBackupPath(backupFileName, sessionId) {
  let n = tr();
  return U6.join(n, "file-history", sessionId || Rt(), backupFileName);
}
async function createBackup(filePath, version) {
  if (filePath === null)
    return {
      backupFileName: null,
      version: version,
      backupTime: new Date(),
    };
  let n = iQp(filePath, version),
    r = resolveBackupPath(n),
    o;
  try {
    o = await IH.stat(filePath);
  } catch (s) {
    if (wn(s))
      return {
        backupFileName: null,
        version: version,
        backupTime: new Date(),
      };
    throw s;
  }
  try {
    await IH.copyFile(filePath, r);
  } catch (s) {
    if (!wn(s)) throw s;
    (await IH.mkdir(U6.dirname(r), {
      recursive: true,
    }),
      await IH.copyFile(filePath, r));
  }
  return (
    await IH.chmod(r, o.mode),
    G("tengu_file_history_backup_file_created", {
      version: version,
      fileSize: o.size,
    }),
    {
      backupFileName: n,
      version: version,
      backupTime: new Date(),
    }
  );
}
async function restoreBackup(filePath, backupFileName) {
  let n = resolveBackupPath(backupFileName),
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
    await IH.copyFile(n, filePath);
  } catch (o) {
    if (!wn(o)) throw o;
    (await IH.mkdir(U6.dirname(filePath), {
      recursive: true,
    }),
      await IH.copyFile(n, filePath));
  }
  await IH.chmod(filePath, r.mode);
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
async function copyFileHistoryForResume(log, t) {
  if (!fileHistoryEnabled()) return;
  let fileHistorySnapshots = log.fileHistorySnapshots;
  if (!fileHistorySnapshots || log.messages.length === 0) return;
  let o = log.messages.at(-1)?.sessionId;
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
      recursive: true,
    });
    let a = 0;
    if (
      (await Promise.allSettled(
        fileHistorySnapshots.map(async (l) => {
          let c = Object.values(l.trackedFileBackups).filter((p) => p.backupFileName !== null);
          if (
            !(
              await Promise.allSettled(
                c.map(async ({ backupFileName: p }) => {
                  let f = resolveBackupPath(p, o),
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
            VVt(l.messageId, l, false).catch((p) => {
              ke(Error("FileHistory: Failed to record copy backup snapshot"));
            });
          else a++;
        }),
      ),
      a > 0)
    )
      G("tengu_file_history_resume_copy_failed", {
        numSnapshots: fileHistorySnapshots.length,
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
      let u = resolveBackupPath(i.backupFileName);
      l = await p8n(u);
    }
    let c = null;
    if (a?.backupFileName) {
      let u = resolveBackupPath(a.backupFileName);
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
  if (cQp) console.error(GQa.inspect(e, false, 5));
}
var jQa,
  IH,
  U6,
  GQa,
  UQa = 100,
  cQp = false;
