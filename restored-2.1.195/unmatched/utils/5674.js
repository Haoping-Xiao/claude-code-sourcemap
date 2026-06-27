// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module l0c
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0131  score=0.0867  fileCov=0.0152
// note: nearest: src/utils/sessionStorage.ts (0.0131); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function cvm(e) {
  return {
    permissionMode: e
  };
}
async function d0c(e, t, n, r, o, s, i, a) {
  T("[PERF:bg-leftarrow-start]");
  let l = Kar(e, "");
  if (l !== null && u3()) return G("tengu_left_arrow_blocked", {
    reason: We("persistence"),
    inflight_count: a?.inflightCount ?? 0,
    inflight_kinds: HK(a?.inflightKinds ?? [])
  }), "Cannot open agents \u2014 session persistence is disabled, so this conversation cannot be backgrounded.";
  if (l && !l.name && i) l.name = i, l.nameSource = "auto";
  let c = l ?? {
      intent: ""
    },
    u = nYo(),
    d = c0c.randomUUID(),
    p = Gm(),
    f = Boolean(p && !p.enteredExisting),
    m,
    g;
  try {
    ({
      short: m,
      jobDir: g
    } = await AWo(d, {
      ...c,
      cwd: p?.worktreePath ?? yr(),
      worktree: f ? {
        path: p.worktreePath,
        branch: p.worktreeBranch,
        hookBased: p.hookBased ?? false,
        originCwd: p.originalCwd
      } : void 0,
      sessionPermissionRules: (o.session?.length ?? 0) > 0 || (s.session?.length ?? 0) > 0 ? {
        allow: [...(o.session ?? [])],
        deny: [...(s.session ?? [])]
      } : void 0,
      memoryToggledOff: bD() || void 0
    }));
  } catch (x) {
    return `Cannot open agents \u2014 ${x instanceof Error ? x.message : String(x)}`;
  }
  let h = null;
  if (a?.taskRegistry) h = await Bar(a.taskRegistry.all());
  let y = bS(),
    b = 16384,
    _ = a?.partialText?.trimEnd() ?? "",
    S = _.length > b ? _.slice(-b) : _,
    A = a?.via === "abort-then-fork" && S.length > 0 && !y && !h?.payload?.agents?.length ? {
      text: S,
      boundaryUuid: a?.boundaryUuid
    } : void 0,
    v = false;
  if (h || A) try {
    if (await Uar(g, {
      ...(h?.payload ?? {
        writtenAtMs: Date.now(),
        shells: [],
        cron: []
      }),
      ...(A && {
        prefill: A
      })
    }), v = A !== void 0, h && a?.taskRegistry) await h.checkpointAgents(a.taskRegistry), h.disown(a.taskRegistry);
  } catch (x) {
    T(`[adopt] write failed: ${x}`, {
      level: "warn"
    }), h = null;
  }
  if (G("tengu_open_agents_via_left", {
    was_empty: l === null,
    via: $e(a?.via ?? "idle-fork"),
    confirmed_interstitial: a?.confirmedInterstitial ?? false,
    inflight_count: a?.inflightCount ?? 0,
    inflight_kinds: HK(a?.inflightKinds ?? []),
    restartable_count: a?.restartableCount ?? 0,
    partial_chars: a?.partialChars ?? 0,
    has_prefill: v,
    has_boundary_uuid: v && a?.boundaryUuid !== void 0,
    prefill_truncated: _.length > b,
    defer_wait_ms: a?.deferWaitMs ?? 0,
    defer_cap_fired: a?.deferCapFired ?? false,
    ...War(h?.payload)
  }), y) {
    let x = a?.replyOnResume ? 5000 : 2000;
    await vc(y.flush(), x, "bridge flush").catch(() => {
      G("tengu_bg_bridge_flush_truncated", {
        via: $e(a?.via ?? "idle-fork"),
        cap_ms: x
      });
    }), y.teardown({
      skipArchive: true
    });
  }
  if (a?.abortAfterFlush) await vc(IC(), 2000, "flush timeout").catch(() => {});
  zar(c, null, t, n, r, o, s, "left_arrow", e, {
    providedSessionId: d,
    replyOnResume: a?.replyOnResume,
    extraEnv: W0e(y?.bridgeSessionId, y?.getLastSequenceNum(), y?.outboundOnly)
  }).then(x => {
    if (!x.ok) {
      if (!x.queued) h?.abandon(), rvt.rm(g, {
        recursive: true,
        force: true
      }).catch(() => {});else if (h) {
        let I = u0c.join(g, "adopt.json"),
          k = () => rvt.rename(I, `${I}.expired`).then(() => (h?.abandon(), rvt.unlink(`${I}.expired`).then(() => {}, () => {})), () => {}),
          D = Math.max(0, NQt - 5000 - (Date.now() - h.payload.writtenAtMs)),
          P = Ci(k);
        setTimeout((O, L) => {
          O(), L();
        }, D, P, k).unref();
      }
      if (x.reason === void 0 || x.reason === "spawn_failed_unknown" || x.reason.startsWith("spawn_failed_ERR_")) ke(Rh(Error(`background spawn failed: ${x.error}`), `background spawn failed: ${x.reason ?? "unclassified"}`));else T(`background spawn failed: ${x.error}`, {
        level: "warn"
      });
    }
  }).catch(ke), a?.abortAfterFlush?.abort("background");
  let C = cvm(n);
  if (at("tengu_bg_leftarrow_inprocess", true)) try {
    return await a0c(m, u, {
      dispatchDefaults: C
    });
  } catch (x) {
    ke(x);
  }
  return w1e({
    args: ["agents", ...kQt(C)],
    env: {
      CLAUDE_AGENTS_SELECT: m,
      ...tke()
    }
  });
}
var c0c, rvt, u0c;