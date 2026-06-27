// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VGe
// matched 2.1.88 source: src/main.tsx
// class=modified (alt of src/main.tsx)  jaccard=0.0162  score=0.109  fileCov=0.0186
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module VGe] deps: IB, Rm, je, WGe
((DW = new Set([
  "--exec",
  "--model",
  "-m",
  "--permission-mode",
  "--agent",
  "--agents",
  "--routine",
  "--effort",
  "--add-dir",
  "--mcp-config",
  "--settings",
  "--setting-sources",
  "--system-prompt",
  "--system-prompt-file",
  "--append-system-prompt",
  "--append-system-prompt-file",
  "--fallback-model",
  "--advisor",
  "--channels",
  "--permission-prompt-tool",
  "--allowed-tools",
  "--allowedTools",
  "--disallowed-tools",
  "--disallowedTools",
  "--tools",
  "--session-id",
  "--debug-file",
  "-n",
  "--name",
  "--autocompact",
  "--betas",
  "--file",
  "--max-budget-usd",
  "--max-thinking-tokens",
  "--max-turns",
  "--task-budget",
  "--plan-mode-instructions",
  "--plugin-dir",
  "--plugin-dir-no-mcp",
  "--plugin-url",
  "--resume-session-at",
  "--rewind-files",
  "--thinking",
  "--thinking-display",
  "--remote-control-session-name-prefix",
  "--json-schema",
])),
  (qGe = new Set([
    "--allowed-tools",
    "--allowedTools",
    "--disallowed-tools",
    "--disallowedTools",
    "--tools",
    "--mcp-config",
    "--betas",
    "--add-dir",
    "--file",
    "--channels",
  ])),
  (dKd = new Set(["--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url"])),
  (WUt = new Set([
    "--dangerously-skip-permissions",
    "--allow-dangerously-skip-permissions",
    "--strict-mcp-config",
    "--dangerously-allow-browser-network-access",
    "--disable-slash-commands",
    "--verbose",
    "--reply-on-resume",
    "--ide",
    "--chrome",
    "--no-chrome",
    "--bare",
    "--brief",
    "--remote-control",
    "--rc",
  ])),
  (GZr = [...jZr, ...jzi]),
  (RPn = new Set([
    "CLAUDE_CONFIG_DIR",
    "CLAUDE_INTERNAL_FC_OVERRIDES",
    ...GZr,
    ...UUt,
    "AWS_REGION",
    "AWS_DEFAULT_REGION",
    "AWS_PROFILE",
    "AWS_CONFIG_FILE",
    "AWS_SHARED_CREDENTIALS_FILE",
    "GOOGLE_APPLICATION_CREDENTIALS",
    "GOOGLE_CLOUD_PROJECT",
    "GCLOUD_PROJECT",
    "CLAUDE_SECURESTORAGE_CONFIG_DIR",
  ])));
fKd = new Set([
  "--system-prompt",
  "--append-system-prompt",
  "--plan-mode-instructions",
  "--name",
  "-n",
]);
((GUt = new Set(["-r", "--resume"])), (LPn = new Set(["-c", "-p", "-h", "-v"])));
function VUt(e, t) {
  return (n) => {
    if (t(n)) return n;
    T(`[jobs] dropped malformed ${e} from persisted job state`, {
      level: "warn",
    });
    return;
  };
}
function pL() {
  return oS.join(tr(), "jobs");
}
function _c(e) {
  return oS.join(pL(), e);
}
function XE() {
  let e = Oe.CLAUDE_JOB_DIR;
  if (e) return oS.basename(e);
  return Rt().slice(0, 8);
}
function Xzi(e, t) {
  let n = oS.join(_c(e), VZr),
    r = !1,
    o = Number.NaN;
  function s(u) {
    if (r) return;
    if (Number.isNaN(o)) {
      o = u;
      return;
    }
    if (u === o) return;
    (c(), t());
  }
  function i() {
    fT.lstat(n).then(
      (u) => s(u.mtimeMs),
      () => s(-1),
    );
  }
  i();
  let a = setInterval(i, 200),
    l = setTimeout(c, 1e4);
  function c() {
    if (r) return;
    ((r = !0), clearInterval(a), clearTimeout(l));
  }
  return c;
}
function Jzi() {
  return qZr > 0;
}
async function Kd(e, t) {
  let { pinned: n, sortOrder: r, stateSortOrder: o, ...s } = t;
  qZr++;
  try {
    await eg(oS.join(e, VZr), De(s, null, 2), 384);
  } finally {
    (qZr--, sS(e));
  }
}
function Xf(e) {
  let t = on(e);
  if (t && Jie.has(t)) {
    T(`[jobs] state write failed (${t}): ${be(e)}`, {
      level: "error",
    });
    return;
  }
  ke(e);
}
function W0e(e, t, n) {
  if (!e) return;
  let r = {
    CLAUDE_BRIDGE_REATTACH_SESSION: e,
  };
  if (t !== void 0 && t > 0) r.CLAUDE_BRIDGE_REATTACH_SEQ = String(t);
  if (n !== !1) r.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY = "1";
  return r;
}
function sS(e) {
  Nne.delete(e);
}
async function zi(e) {
  let t = oS.join(e, VZr),
    n = oS.join(e, "order"),
    r = oS.join(e, "stateOrder"),
    o,
    s;
  try {
    let [a, l, c] = await Promise.all([
      fT.lstat(t),
      fT.lstat(n).catch(() => null),
      fT.lstat(r).catch(() => null),
    ]);
    if (!a.isFile() || a.size > WZr) {
      let d = `rejected:${a.mtimeMs}:${a.size}`;
      if (Nne.get(e)?.mtimeKey === d) return null;
      return (
        T(
          `[jobs] skipping ${oS.basename(e)}: state.json is ${a.isFile() ? `too large (${a.size} bytes)` : "not a regular file"}`,
          {
            level: "warn",
          },
        ),
        Nne.set(e, {
          mtimeKey: d,
          state: null,
        }),
        null
      );
    }
    let u = (d) => d !== null && d.isFile() && d.size <= WZr;
    ((s = {
      order: u(l),
      stateOrder: u(c),
    }),
      (o = `${a.mtimeMs}:${s.order ? l.mtimeMs : 0}:${s.stateOrder ? c.mtimeMs : 0}`));
  } catch (a) {
    if (wn(a)) return (Nne.delete(e), G0e.delete(e), null);
    T(
      `[jobs] ${oS.basename(e)}: state.json stat failed \u2014 ${a instanceof Error ? a.message : String(a)}`,
      {
        level: "warn",
      },
    );
    let l = Nne.get(e);
    if (!G0e.has(e))
      (G0e.add(e),
        G("tengu_bg_state_read_transient", {
          errno: xd(a) ?? "unknown",
          had_cache: l !== void 0,
        }));
    return l?.state ?? null;
  }
  let i = Nne.get(e);
  if (i?.mtimeKey === o) return (G0e.delete(e), i.state);
  try {
    let [a, l, c] = await Promise.all([
        fT.readFile(t, "utf-8"),
        s.order ? fT.readFile(n, "utf-8").catch(() => null) : Promise.resolve(null),
        s.stateOrder ? fT.readFile(r, "utf-8").catch(() => null) : Promise.resolve(null),
      ]),
      u = Ft(a),
      d = zzi().safeParse(u);
    if (!d.success)
      return (
        T(
          `[jobs] skipping ${oS.basename(e)}: state.json schema validation failed \u2014 ${d.error.message}`,
          {
            level: "warn",
          },
        ),
        Nne.set(e, {
          mtimeKey: o,
          state: null,
        }),
        null
      );
    let p = l !== null ? Number(l) : void 0,
      f = c !== null ? Number(c) : void 0,
      m = zzi().in.shape,
      g =
        u !== null && typeof u === "object"
          ? Object.entries(u).filter(([y]) => !Object.hasOwn(m, y))
          : [],
      h = {
        ...Object.fromEntries(g),
        ...d.data,
      };
    if (Number.isFinite(p))
      h = {
        ...h,
        sortOrder: p,
      };
    if (Number.isFinite(f))
      h = {
        ...h,
        stateSortOrder: f,
      };
    if (Nne.size > 1000) Nne.clear();
    return (
      Nne.set(e, {
        mtimeKey: o,
        state: h,
      }),
      G0e.delete(e),
      h
    );
  } catch (a) {
    if (wn(a)) return (Nne.delete(e), G0e.delete(e), null);
    if (
      (T(
        `[jobs] ${oS.basename(e)}: state.json read/parse failed \u2014 ${a instanceof Error ? a.message : String(a)}`,
        {
          level: "warn",
        },
      ),
      !G0e.has(e))
    )
      (G0e.add(e),
        G("tengu_bg_state_read_transient", {
          errno: xd(a) ?? "unknown",
          had_cache: i !== void 0,
        }));
    return i?.state ?? null;
  }
}
function zUt() {
  return oS.join(pL(), "pins.json");
}
async function zGe() {
  try {
    let e = await fT.lstat(zUt());
    if (!e.isFile() || e.size > WZr) {
      if (!e.isFile())
        await fT
          .rm(zUt(), {
            recursive: !0,
            force: !0,
          })
          .catch(() => {});
      return new Set();
    }
    let t = await fT.readFile(zUt(), "utf-8"),
      n = Ft(t);
    if (!Array.isArray(n)) return new Set();
    return new Set(n.filter((r) => typeof r === "string"));
  } catch (e) {
    if (wn(e)) return gKd();
    return new Set();
  }
}
async function gKd() {
  let e;
  try {
    e = await fT.readdir(pL(), {
      withFileTypes: !0,
    });
  } catch {
    return new Set();
  }
  let t = pL(),
    n = [];
  await Promise.all(
    e
      .filter((o) => o.isDirectory())
      .map((o) =>
        fT.lstat(oS.join(t, o.name, "pinned")).then(
          (s) => {
            if (s.isFile()) n.push(o.name);
          },
          () => {},
        ),
      ),
  );
  let r = new Set(n);
  return (
    await Qzi(r).catch((o) => {
      if (!wn(o)) Xf(o);
    }),
    r
  );
}
async function Qzi(e) {
  let t = zUt();
  (await fT.mkdir(oS.dirname(t), {
    recursive: !0,
  }),
    await eg(t, De([...e], null, 2)));
}
async function Zce(e, t, n) {
  let r = _c(e),
    o = await zi(r);
  if (!o) return !1;
  if (o.name === t) return !0;
  sS(r);
  let s = (await zi(r)) ?? o;
  if (s.name === t || (n === "auto" && s.name)) return !0;
  return Kd(r, {
    ...s,
    name: t,
    nameSource: n,
    updatedAt: new Date().toISOString(),
  }).then(
    () => !0,
    (i) => {
      if (!wn(i)) Xf(i);
      return !1;
    },
  );
}
async function DPn(e, t) {
  let n = _c(e),
    r = await zi(n);
  if (!r) return !1;
  if (r.color === t) return !0;
  sS(n);
  let o = (await zi(n)) ?? r;
  if (o.color === t) return !0;
  return Kd(n, {
    ...o,
    color: t,
    updatedAt: new Date().toISOString(),
  }).then(
    () => !0,
    (s) => {
      if (!wn(s)) Xf(s);
      return !1;
    },
  );
}
function zZr() {
  return Zzi;
}
async function eKi(e) {
  let t = Oe.CLAUDE_JOB_DIR;
  if (!t || Oe.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  ((Zzi = e), sS(t));
  let n = await zi(t),
    r = n?.worktreePath ? n.originCwd : e;
  if (!n || (n.cwd === e && n.originCwd === r)) return;
  sS(t);
  let o = (await zi(t)) ?? n;
  await Kd(t, {
    ...o,
    cwd: e,
    originCwd: o.worktreePath ? o.originCwd : e,
    updatedAt: new Date().toISOString(),
  }).catch((s) => {
    if (!wn(s)) Xf(s);
  });
}
async function tKi(e, t) {
  let n = Oe.CLAUDE_JOB_DIR;
  if (!n || Oe.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  sS(n);
  let r = await zi(n);
  if (!r || (r.resumeSessionId === e && r.linkScanPath === t)) return;
  sS(n);
  let o = (await zi(n)) ?? r;
  await Kd(n, {
    ...o,
    resumeSessionId: e,
    linkScanPath: t,
    linkScanOffset: 0,
    updatedAt: new Date().toISOString(),
  }).catch((s) => {
    if (!wn(s)) Xf(s);
  });
}
async function q0e(e, t, n) {
  let r = Oe.CLAUDE_JOB_DIR;
  if (!r || Oe.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  sS(r);
  let o = await zi(r);
  if (!o?.respawnFlags) return;
  let s = [e, ...t],
    i = (c) => {
      let u = [];
      for (let d = 0; d < c.length; d++) {
        let p = c[d];
        if (s.some((f) => p === f || p.startsWith(`${f}=`))) {
          if (p.indexOf("=") === -1 && c[d + 1] !== void 0) d++;
          continue;
        }
        u.push(p);
      }
      return n === null ? u : [...u, e, n];
    },
    a = i(o.respawnFlags);
  if (a.length === o.respawnFlags.length && a.every((c, u) => c === o.respawnFlags[u])) return;
  sS(r);
  let l = (await zi(r)) ?? o;
  await Kd(r, {
    ...l,
    respawnFlags: i(l.respawnFlags ?? o.respawnFlags),
    updatedAt: new Date().toISOString(),
  }).catch((c) => {
    if (!wn(c)) Xf(c);
  });
}
async function nKi(e, t) {
  let n = Oe.CLAUDE_JOB_DIR;
  if (!n || Oe.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  sS(n);
  let r = await zi(n);
  if (!r?.respawnFlags) return;
  for (let s = 0; s < r.respawnFlags.length - 1; s++)
    if (r.respawnFlags[s] === e && r.respawnFlags[s + 1] === t) return;
  sS(n);
  let o = (await zi(n)) ?? r;
  await Kd(n, {
    ...o,
    respawnFlags: [...(o.respawnFlags ?? []), e, t],
    updatedAt: new Date().toISOString(),
  }).catch((s) => {
    if (!wn(s)) Xf(s);
  });
}
async function rKi(e, t) {
  (await fT.writeFile(oS.join(e, "order"), String(t), "utf-8"), sS(e));
}
async function oKi(e, t) {
  (await fT.writeFile(oS.join(e, "stateOrder"), String(t), "utf-8"), sS(e));
}
async function sKi(e) {
  let t = oS.join(pL(), ".order");
  await fT.mkdir(pL(), {
    recursive: !0,
  });
  await using n = await Ay(t, {
    realpath: !1,
    stale: 5000,
    retries: {
      retries: 5,
      minTimeout: 20,
    },
    onCompromised: (r) =>
      T(`jobs/.order lock compromised (likely process suspend or slow fs): ${r}`, {
        level: "error",
      }),
  });
  return await e();
}
function iKi(e, t) {
  let n = Kzi.then(async () => {
    let r = zUt();
    await fT.mkdir(oS.dirname(r), {
      recursive: !0,
    });
    await using o = await Ay(r, {
      realpath: !1,
      stale: 5000,
      retries: {
        retries: 5,
        minTimeout: 20,
      },
      onCompromised: (i) =>
        T(`pins.json lock compromised (likely process suspend or slow fs): ${i}`, {
          level: "error",
        }),
    });
    let s = await zGe();
    if (t ? s.has(e) : !s.has(e)) return;
    if (t) s.add(e);
    else s.delete(e);
    await Qzi(s);
  });
  return ((Kzi = n.catch(() => {})), n);
}
async function aX(e) {
  let t;
  try {
    t = await fT.readdir(pL(), {
      withFileTypes: !0,
    });
  } catch {
    return [];
  }
  let [n, r] = await Promise.all([
      zGe(),
      Promise.all(
        t
          .filter((s) => s.isDirectory())
          .map(async (s) => {
            let i = await zi(oS.join(pL(), s.name));
            return i
              ? {
                  id: s.name,
                  state: i,
                }
              : null;
          }),
      ),
    ]),
    o = r
      .filter((s) => s !== null)
      .map((s) =>
        n.has(s.id)
          ? {
              ...s,
              state: {
                ...s.state,
                pinned: !0,
              },
            }
          : s,
      );
  return e ? KUt(o, e) : o;
}
function KUt(e, t) {
  let n = Date.now();
  return e.map((r) => {
    if (Vh(r.state)) return r;
    if (t.has(r.id)) return r;
    if (n - Date.parse(r.state.createdAt) < hKd) return r;
    return {
      ...r,
      state: yKd(r.state),
    };
  });
}
function yKd(e) {
  if (e.state === "blocked" && !V0e(e))
    return {
      ...e,
      tempo: "blocked",
      inFlight: void 0,
    };
  return {
    ...e,
    state: "failed",
    tempo: "idle",
    needs: void 0,
    block: void 0,
    inFlight: void 0,
    detail: e.detail.replace(/; respawning$/, ""),
  };
}
function eue(e) {
  let t = new Date().toISOString();
  return {
    state: "working",
    detail: e.detail !== void 0 ? xc(e.detail) : clt,
    tempo: e.tempo ?? "active",
    needs: e.needs,
    output: null,
    children: null,
    linkScanOffset: 0,
    template: e.template.name,
    routine: e.routine,
    respawnFlags: e.respawnFlags ?? [],
    bgIsolation: e.bgIsolation,
    providerEnv: e.providerEnv,
    sessionPermissionRules: e.sessionPermissionRules,
    memoryToggledOff: e.memoryToggledOff,
    intent: e.intent,
    displayIntent: e.displayIntent,
    name: e.name,
    nameSource: e.nameSource,
    color: e.template.color,
    initialPrompt: e.template.initialPrompt,
    sessionId: e.sessionId,
    resumeSessionId: e.sessionId,
    daemonShort: e.sessionId.slice(0, 8),
    cwd: e.cwd,
    createdAt: t,
    updatedAt: t,
    firstTerminalAt: null,
    worktreePath: e.worktreePath,
    worktreeBranch: e.worktreeBranch,
    worktreeHookBased: e.worktreeHookBased,
    originCwd: e.originCwd,
    backend: "daemon",
  };
}
function aKi(e, t) {
  if (t.length === 0) return e;
  let n = new Set(e.map((s) => s.id)),
    r = t.filter((s) => Yzi.test(s.short) && !n.has(s.short) && s.source !== "spare" && !s.dying);
  if (r.length === 0) return e;
  let o = r.map((s) => {
    let i = {
        ...eue({
          template: {
            name: s.agent ?? "bg",
            description: "",
          },
          routine: s.routine,
          intent: s.intent,
          name: s.name,
          detail: s.detail,
          ...(s.tempo === "active" && (s.state === "running" || llt.includes(s.state))
            ? s.routine
              ? {
                  tempo: "idle",
                }
              : {
                  tempo: "blocked",
                  needs: PW,
                }
            : {
                tempo: s.tempo,
                needs: s.needs,
              }),
          sessionId: tv(s.sessionId),
          cwd: tv(s.cwd),
          worktreePath: s.worktreePath === void 0 ? void 0 : tv(s.worktreePath),
        }),
        createdAt: new Date(s.createdAt ?? s.startedAt).toISOString(),
        daemonShort: s.short,
        state: llt.includes(s.state) ? "working" : s.state,
        ...(B0(s.state) && {
          inFlight: {
            tasks: 0,
            queued: 0,
            kinds: [],
          },
        }),
      },
      a = _c(s.short);
    return (
      fT
        .mkdir(a, {
          recursive: !0,
        })
        .then(() =>
          fT.writeFile(oS.join(a, "state.json"), JSON.stringify(i), {
            flag: "wx",
            mode: 384,
          }),
        )
        .then(() => G("tengu_bg_roster_orphan_adopted", {}))
        .catch((l) => {
          if (on(l) !== "EEXIST") Xf(l);
        }),
      {
        id: s.short,
        state: i,
      }
    );
  });
  return [...e, ...o];
}
function tue(e) {
  if (e === "done") return "success";
  if (e === "failed") return "failure";
  if (e === "stopped") return "stopped";
  return null;
}
function B0(e) {
  return tue(e) !== null;
}
function Vh(e) {
  return B0(e.state) && e.tempo !== "active";
}
function V0e(e) {
  return e.template === "exec" && e.respawnFlags.length === 0;
}
function ybe(e) {
  let t = e.originCwd || (e.cwd.match(/^(.+?)[/\\]\.claude[/\\]worktrees[/\\]/)?.[1] ?? e.cwd);
  return tv(t);
}
function PPn(e, t) {
  if (e.backend === "remote") return !0;
  let n = oS.relative(t, ybe(e));
  return n.split(/[/\\]/, 1)[0] !== ".." && !oS.isAbsolute(n);
}
function YUt(e) {
  let t = (n) => n?.trim().toLowerCase().startsWith("/loop") ?? !1;
  return t(e.intent) || t(e.initialPrompt);
}
function KGe(e) {
  return e.routine !== void 0 || (e.inFlight?.kinds.includes("session_cron") ?? !1) || YUt(e);
}
function YGe(e, t, n) {
  let r = _c(e);
  return zi(r)
    .then((o) => {
      if (!o || Vh(o) || (t === "failed" && o.state === "blocked" && !V0e(o))) return;
      let s = new Date().toISOString();
      return Kd(r, {
        ...o,
        state: t === "crashed" ? "failed" : t,
        detail:
          t === "stopped"
            ? "stopped"
            : t === "failed"
              ? (o.detail || n).replace(/; respawning$/, "")
              : n,
        tempo: "idle",
        inFlight: void 0,
        needs: void 0,
        updatedAt: s,
        firstTerminalAt: o.firstTerminalAt ?? s,
      });
    })
    .catch(Xf);
}
var fT,
  oS,
  qUt = () => H.string().transform(tv),
  Yzi,
  mKd,
  zzi,
  VZr = "state.json",
  WZr = 8388608,
  qZr = 0,
  Nne,
  G0e,
  Zzi,
  Kzi,
  hKd = 5000,
  clt = "starting\u2026",
  PW = "send a prompt to start",
  ult,
  llt;
