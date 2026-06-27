// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module d9t
// matched 2.1.88 source: src/utils/swarm/teamHelpers.ts
// class=modified  jaccard=0.4781  score=0.7511  fileCov=0.5681
// note: deminified; 25 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: writeTeamFileAsync, updateTeamFile, teamMissingError, syncTeammateMode, setMultipleMemberModes, setMemberMode, setMemberActive, sanitizeName, sanitizeAgentName, removeTeammateFromTeamFile, removeTeamMember, removeMemberFromTeam, removeMemberByAgentId, removeHiddenPaneId, registerTeamForSessionCleanup, readTeamFileAsync, readTeamFile, logTeamFileWriteFailure, getTeamFilePath, getTeamDir, cleanupTeamDirectories, cleanupSessionTeams, addHiddenPaneId
// [unwrapped __esm module d9t]
IF = class IF extends Error {
  constructor(e) {
    super(e);
    this.name = "SwarmPaneError";
  }
};
eel = /\p{Cc}/u;
function sanitizeName(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function sanitizeAgentName(e) {
  return e.replaceAll("@", "-");
}
function getTeamDir(e) {
  return Dht.join(nwe(), sanitizeName(e));
}
function getTeamFilePath(e) {
  return Dht.join(getTeamDir(e), "config.json");
}
function readTeamFile(teamName) {
  try {
    let t = Pht.readFileSync(getTeamFilePath(teamName), "utf-8");
    return Ft(t);
  } catch (t) {
    if (on(t) === "ENOENT") return null;
    return (T(`[TeammateTool] Failed to read team file for ${teamName}: ${be(t)}`), null);
  }
}
async function readTeamFileAsync(e) {
  try {
    let t = await Rpe.readFile(getTeamFilePath(e), "utf-8");
    return Ft(t);
  } catch (t) {
    if (on(t) === "ENOENT") return null;
    return (T(`[TeammateTool] Failed to read team file for ${e}: ${be(t)}`), null);
  }
}
function logTeamFileWriteFailure(e, t) {
  if (gd(t))
    T(`[TeammateTool] Failed to write team file for ${e} (${on(t)}): ${be(t)}`, {
      level: "error",
    });
  else ke(t);
}
function f9t(e, t) {
  try {
    let n = getTeamDir(e);
    (Pht.mkdirSync(n, {
      recursive: true,
    }),
      Pht.writeFileSync(getTeamFilePath(e), De(t, null, 2)));
  } catch (n) {
    logTeamFileWriteFailure(e, n);
  }
}
function teamMissingError(e) {
  return new mi(
    `Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`,
    "Team file missing (session team not initialized)",
  );
}
async function updateTeamFile(e, t) {
  let n = getTeamFilePath(e),
    r;
  try {
    r = await Ay(n, {
      lockfilePath: `${n}.lock`,
      ...lZp,
    });
  } catch (o) {
    if (on(o) === "ENOENT") throw teamMissingError(e);
    throw o;
  }
  try {
    let o = await readTeamFileAsync(e);
    if (!o) throw Error("Team config file unreadable (lock acquired, read failed)");
    let s = t(o);
    if (s === false) return;
    return (await writeTeamFileAsync(e, o), s);
  } finally {
    try {
      await r();
    } catch (o) {
      T(`[TeammateTool] updateTeamFile lock release failed: ${be(o)}`);
    }
  }
}
async function removeTeamMember(e, t) {
  try {
    await updateTeamFile(e, (n) => {
      let r = n.members.findIndex((o) => o.agentId === t);
      if (r === -1) return false;
      n.members.splice(r, 1);
    });
  } catch (n) {
    T(`[TeammateTool] removeTeamMember(${t}) failed: ${be(n)}`);
  }
}
async function writeTeamFileAsync(e, t) {
  let n = getTeamDir(e);
  (await Rpe.mkdir(n, {
    recursive: true,
  }),
    await Rpe.writeFile(getTeamFilePath(e), De(t, null, 2)));
}
function removeTeammateFromTeamFile(teamName, identifier) {
  let n = identifier.agentId || identifier.name;
  if (!n) return (T("[TeammateTool] removeTeammateFromTeamFile called with no identifier"), false);
  let r = readTeamFile(teamName);
  if (!r)
    return (
      T(`[TeammateTool] Cannot remove teammate ${n}: failed to read team file for "${teamName}"`),
      false
    );
  let o = r.members.length;
  if (
    ((r.members = r.members.filter((s) => {
      if (identifier.agentId && s.agentId === identifier.agentId) return false;
      if (identifier.name && s.name === identifier.name) return false;
      return true;
    })),
    r.members.length === o)
  )
    return (T(`[TeammateTool] Teammate ${n} not found in team file for "${teamName}"`), false);
  return (f9t(teamName, r), T(`[TeammateTool] Removed teammate from team file: ${n}`), true);
}
function addHiddenPaneId(teamName, paneId) {
  let n = readTeamFile(teamName);
  if (!n) return false;
  let r = n.hiddenPaneIds ?? [];
  if (!r.includes(paneId))
    (r.push(paneId),
      (n.hiddenPaneIds = r),
      f9t(teamName, n),
      T(`[TeammateTool] Added ${paneId} to hidden panes for team ${teamName}`));
  return true;
}
function removeHiddenPaneId(teamName, paneId) {
  let n = readTeamFile(teamName);
  if (!n) return false;
  let r = n.hiddenPaneIds ?? [],
    o = r.indexOf(paneId);
  if (o !== -1)
    (r.splice(o, 1),
      (n.hiddenPaneIds = r),
      f9t(teamName, n),
      T(`[TeammateTool] Removed ${paneId} from hidden panes for team ${teamName}`));
  return true;
}
function removeMemberFromTeam(teamName, tmuxPaneId) {
  let n = readTeamFile(teamName);
  if (!n) return false;
  let r = n.members.findIndex((o) => o.tmuxPaneId === tmuxPaneId);
  if (r === -1) return false;
  if ((n.members.splice(r, 1), n.hiddenPaneIds)) {
    let o = n.hiddenPaneIds.indexOf(tmuxPaneId);
    if (o !== -1) n.hiddenPaneIds.splice(o, 1);
  }
  return (
    f9t(teamName, n),
    T(`[TeammateTool] Removed member with pane ${tmuxPaneId} from team ${teamName}`),
    true
  );
}
function removeMemberByAgentId(teamName, agentId) {
  let n = readTeamFile(teamName);
  if (!n) return false;
  let r = n.members.findIndex((o) => o.agentId === agentId);
  if (r === -1) return false;
  return (
    n.members.splice(r, 1),
    f9t(teamName, n),
    T(`[TeammateTool] Removed member ${agentId} from team ${teamName}`),
    true
  );
}
async function setMemberMode(teamName, memberName, mode) {
  try {
    await updateTeamFile(teamName, (r) => {
      let o = r.members.find((s) => s.name === memberName);
      if (!o)
        return (
          T(
            `[TeammateTool] Cannot set member mode: member ${memberName} not found in team ${teamName}`,
          ),
          false
        );
      if (o.mode === mode) return false;
      ((o.mode = mode),
        T(`[TeammateTool] Set member ${memberName} in team ${teamName} to mode: ${mode}`));
    });
  } catch (r) {
    T(`[TeammateTool] Cannot set member mode: ${be(r)}`);
  }
}
async function syncTeammateMode(e, t) {
  if (!wf()) return;
  let n = t ?? rp(),
    r = Oh();
  if (n && r) await setMemberMode(n, r, e);
}
async function setMultipleMemberModes(teamName, modeUpdates) {
  try {
    await updateTeamFile(teamName, (n) => {
      let r = new Map(modeUpdates.map((s) => [s.memberName, s.mode])),
        o = false;
      for (let s of n.members) {
        let i = r.get(s.name);
        if (i !== void 0 && s.mode !== i) ((o = true), (s.mode = i));
      }
      if (!o) return false;
      T(`[TeammateTool] Set ${modeUpdates.length} member modes in team ${teamName}`);
    });
  } catch (n) {
    T(`[TeammateTool] Cannot set member modes: ${be(n)}`);
  }
}
async function setMemberActive(teamName, memberName, isActive) {
  try {
    await updateTeamFile(teamName, (r) => {
      let o = r.members.find((s) => s.name === memberName);
      if (!o)
        return (
          T(
            `[TeammateTool] Cannot set member active: member ${memberName} not found in team ${teamName}`,
          ),
          false
        );
      if (o.isActive === isActive) return false;
      ((o.isActive = isActive),
        T(
          `[TeammateTool] Set member ${memberName} in team ${teamName} to ${isActive ? "active" : "idle"}`,
        ));
    });
  } catch (r) {
    T(`[TeammateTool] Cannot set member active: ${be(r)}`);
  }
}
async function destroyWorktree(worktreePath) {
  let t = Dht.join(worktreePath, ".git"),
    n = null;
  try {
    let o = (await Rpe.readFile(t, "utf-8")).trim().match(/^gitdir:\s*(.+)$/);
    if (o && o[1]) {
      let s = o[1],
        i = Dht.join(s, "..", "..");
      n = Dht.join(i, "..");
    }
  } catch {}
  if (n) {
    let r = await Gr(go(), ["worktree", "remove", "--force", worktreePath], {
      cwd: n,
    });
    if (r.code === 0) {
      T(`[TeammateTool] Removed worktree via git: ${worktreePath}`);
      return;
    }
    if (r.stderr?.includes("not a working tree")) {
      T(`[TeammateTool] Worktree already removed: ${worktreePath}`);
      return;
    }
    T(`[TeammateTool] git worktree remove failed, falling back to rm: ${r.stderr}`);
  }
  try {
    (await Rpe.rm(worktreePath, {
      recursive: true,
      force: true,
    }),
      T(`[TeammateTool] Removed worktree directory manually: ${worktreePath}`));
  } catch (r) {
    T(`[TeammateTool] Failed to remove worktree ${worktreePath}: ${be(r)}`);
  }
}
function registerTeamForSessionCleanup(e) {
  wsn().add(e);
}
async function cleanupSessionTeams() {
  return yl("swarm_session_cleanup", async () => {
    let e = wsn();
    if (e.size === 0) return;
    let t = Array.from(e);
    (T(`cleanupSessionTeams: removing ${t.length} orphan team dir(s): ${t.join(", ")}`),
      await Promise.allSettled(t.map((n) => killOrphanedTeammatePanes(n))),
      await Promise.allSettled(t.map((n) => cleanupTeamDirectories(n))),
      e.clear());
  });
}
async function killOrphanedTeammatePanes(teamName) {
  let t = readTeamFile(teamName);
  if (!t) return;
  let n = t.members.filter(
    (a) => a.name !== Hd && a.tmuxPaneId && a.backendType && u9t(a.backendType),
  );
  if (n.length === 0) return;
  let [{ ensureBackendsRegistered: r, getBackendByType: o }, { isInsideTmux: s }] =
    await Promise.all([
      Promise.resolve().then(() => (cAe(), sel)),
      Promise.resolve().then(() => (qJ(), AHo)),
    ]);
  await r();
  let i = !(await s());
  await Promise.allSettled(
    n.map(async (a) => {
      if (!a.tmuxPaneId || !a.backendType || !u9t(a.backendType)) return;
      let l = await o(a.backendType).killPane(a.tmuxPaneId, i);
      T(`cleanupSessionTeams: killPane ${a.name} (${a.backendType} ${a.tmuxPaneId}) \u2192 ${l}`);
    }),
  );
}
async function cleanupTeamDirectories(teamName) {
  return yl("swarm_team_cleanup", async () => {
    let t = readTeamFile(teamName),
      n = [];
    if (t) {
      for (let o of t.members) if (o.worktreePath) n.push(o.worktreePath);
    }
    for (let o of n) await destroyWorktree(o);
    let r = getTeamDir(teamName);
    try {
      (await Rpe.rm(r, {
        recursive: true,
        force: true,
      }),
        T(`[TeammateTool] Cleaned up team directory: ${r}`));
    } catch (o) {
      T(`[TeammateTool] Failed to clean up team directory ${r}: ${be(o)}`);
    }
  });
}
var Pht, Rpe, Dht, lZp;
