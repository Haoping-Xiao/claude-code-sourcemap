// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module q$
// matched 2.1.88 source: src/entrypoints/sdk/coreSchemas.ts
// class=new  jaccard=0.0188  score=0.1421  fileCov=0.0212
// note: nearest: src/entrypoints/sdk/coreSchemas.ts (0.0188); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module q$] deps: Xr, VGe, Rm, cKe
IOe = /^[a-f0-9]{8}$/;
Xer = ve(() => H.object({
  proto: H.number().int().min(d7t).max(hp),
  short: H.string().regex(IOe),
  nonce: H.string().regex(IOe).optional(),
  sessionId: H.string().transform(tv),
  createdAt: H.number(),
  source: H.enum(["shell", "slash", "fleet", "spare", "respawn"]).catch("fleet"),
  cwd: H.string().transform(tv),
  launch: H.discriminatedUnion("mode", [H.object({
    mode: H.literal("prompt"),
    args: H.array(H.string()).transform(T8)
  }), H.object({
    mode: H.literal("resume"),
    sessionId: H.string().transform(tv),
    transcriptPath: H.string().transform(tv).optional(),
    fork: H.boolean(),
    flagArgs: H.array(H.string()).transform(T8)
  }), H.object({
    mode: H.literal("exec"),
    cmd: H.string().transform(tv),
    args: H.array(H.string()).transform(e => e.map(tv))
  })]),
  env: H.record(H.string(), H.string()).default({}),
  reattachEnv: H.record(H.string(), H.string()).optional(),
  worktree: H.object({
    path: H.string().transform(tv),
    ownershipToken: H.string()
  }).optional(),
  isolation: H.enum(["none", "worktree"]).default("none"),
  respawnFlags: H.array(H.string()).default([]).transform(T8),
  attachStallRespawns: H.number().int().optional(),
  agent: H.string().optional(),
  routine: H.string().optional(),
  seed: H.object({
    intent: H.string(),
    name: H.string().optional()
  }).optional(),
  cols: H.number().int().positive().max(xfe).optional(),
  rows: H.number().int().positive().max(xfe).optional()
})), eEt = /ERESPAWNING|ESTARTING/, p7t = /ESTALLED|EUNVERIFIED/, f7t = /^EKICKED:\s*/;
k0f = ve(() => H.object({
  pid: H.number(),
  procStart: H.string().optional(),
  sessionId: H.string().transform(tv),
  rendezvousSock: POo(),
  ptySock: POo().optional(),
  messagingSock: POo().optional(),
  cliVersion: H.string().optional(),
  startedAt: H.number(),
  attempt: H.number(),
  cwd: H.string().transform(tv),
  worktreePath: H.string().transform(tv).optional(),
  dispatch: Xer(),
  pendingRespawn: H.literal("upgrade").optional(),
  decModes: H.array(H.number()).optional(),
  rvAuth: H.string().optional(),
  ptyAuth: H.string().optional()
})), RPl = ve(() => H.object({
  proto: H.number().int().min(d7t).max(hp),
  supervisorPid: H.number(),
  updatedAt: H.number(),
  workers: H.record(H.string().regex(IOe), k0f())
})), LPl = ve(() => {
  let e = H.string().regex(IOe),
    t = H.number().int().min(d7t).max(hp);
  return H.discriminatedUnion("op", [H.object({
    proto: t,
    op: H.literal("ping")
  }), H.object({
    proto: t,
    op: H.literal("nudge")
  }), H.object({
    proto: t,
    op: H.literal("yield")
  }), H.object({
    proto: t,
    op: H.literal("lease"),
    client: H.object({
      label: H.string(),
      cwd: H.string(),
      pid: H.number()
    }).optional()
  }), H.object({
    proto: t,
    op: H.literal("leases")
  }), H.object({
    proto: t,
    op: H.literal("await-ack"),
    short: e,
    nonce: e.optional(),
    timeoutMs: H.number()
  }), H.object({
    proto: t,
    op: H.literal("dispatch"),
    d: Xer(),
    timeoutMs: H.number(),
    auth: H.string().optional()
  }), H.object({
    proto: t,
    op: H.literal("list")
  }), H.object({
    proto: t,
    op: H.literal("has"),
    short: e
  }), H.object({
    proto: t,
    op: H.literal("kill"),
    short: e,
    signal: H.enum(["SIGTERM", "SIGKILL"]).optional()
  }), H.object({
    proto: t,
    op: H.literal("reply"),
    short: e,
    text: H.string(),
    auth: H.string().optional()
  }), H.object({
    proto: t,
    op: H.literal("subscribe"),
    short: e,
    tail: H.number().optional()
  }), H.object({
    proto: t,
    op: H.literal("attach"),
    short: e,
    auth: H.string().optional(),
    cols: H.number().int().min(1).max(xfe),
    rows: H.number().int().min(1).max(xfe),
    attachId: H.string().optional(),
    caps: H.object({
      terminal: H.string().nullable(),
      mux: H.enum(["tmux", "screen", "zellij"]).nullable(),
      ssh: H.boolean(),
      wheelFlood: H.boolean().optional(),
      hyperlinks: H.boolean().optional(),
      progressReporting: H.boolean().optional(),
      wtSession: H.boolean().optional(),
      isVscodeTerm: H.boolean().optional(),
      browser: H.string().nullable().optional(),
      colorLevel: H.union([H.literal(0), H.literal(1), H.literal(2), H.literal(3)]).optional(),
      syncOutput: H.boolean().optional(),
      editor: H.string().nullable().optional(),
      systemTheme: H.enum(["dark", "light"]).optional()
    }).optional(),
    holdingFrame: H.boolean().optional()
  }), H.object({
    proto: t,
    op: H.literal("resize"),
    short: e,
    cols: H.number().int().min(1).max(xfe),
    rows: H.number().int().min(1).max(xfe),
    attachId: H.string().optional()
  }), H.object({
    proto: t,
    op: H.literal("ensure-spare"),
    cwd: H.string()
  }), H.object({
    proto: t,
    op: H.literal("permission-response"),
    short: e,
    requestId: H.string(),
    allow: H.boolean(),
    auth: H.string().optional()
  }), H.object({
    proto: t,
    op: H.literal("respawn-stale"),
    short: e
  }), H.object({
    proto: t,
    op: H.literal("shutdown"),
    reapWorkers: H.boolean().optional()
  })]);
});
function SHe(e) {
  if (!OAn()) return;
  let t = IPl();
  if (Hq({
    type: "detach-request",
    msg: t,
    broadcast: e?.broadcast
  })) return;
  process.stdout.write(kfe(t));
}