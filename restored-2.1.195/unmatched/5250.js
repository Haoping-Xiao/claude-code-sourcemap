// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pWo
// matched 2.1.88 source: src/utils/permissions/filesystem.ts
// class=new  jaccard=0.0132  score=0.0438  fileCov=0.0185
// note: nearest: src/utils/permissions/filesystem.ts (0.0132); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var pWo = E(() => {
  Qi();
  dn();
  je();
  Iv();
  pq();
  Lar();
  qrc = require("path"), A4E = Cn(async function (e) {
    let t = await _q("routines", e),
      n = [...t.filter(s => s.source !== "projectSettings" && s.source !== "policySettings"), ...t.filter(s => s.source === "projectSettings").sort(WSt), ...t.filter(s => s.source === "policySettings")],
      r = new Map(),
      o = null;
    for (let s of n) {
      let i = Frc(s.frontmatter);
      for (let u of i.warnings) T(`[Routines] ${s.filePath}: ${u}`, {
        level: "warn"
      });
      if (i.triggers.length === 0) {
        T(`[Routines] skipping ${s.filePath}: no usable trigger (need at least one of: schedule, on)`, {
          level: "warn"
        }), o ??= "routine_load_no_trigger";
        continue;
      }
      let a = qrc.basename(s.filePath, ".md"),
        l = s.frontmatter.name,
        c = typeof l === "string" && l.trim() !== "" ? l.trim() : a;
      if (c.startsWith("-")) {
        T(`[Routines] skipping ${s.filePath}: name '${c}' must not start with '-'`, {
          level: "error"
        }), o = "routine_load_invalid_name";
        continue;
      }
      r.set(c, {
        name: c,
        description: AU(s.frontmatter.description, c) ?? void 0,
        triggers: i.triggers,
        body: s.content.trim(),
        source: s.source,
        filePath: s.filePath
      });
    }
    if (o !== null) It("routine_load", o);else xe("routine_load");
    return Array.from(r.values());
  });
});
async function hWo(e, t = !1, n = Date.now()) {
  let r = gWo;
  if (!r) {
    fWo ??= (e.source === "shell" ? TQt() : eV({
      forceTransient: !0
    })).finally(() => {
      fWo = null;
    });
    let s = await fWo;
    if (!s.ok) return mWo("daemon-unreachable", s.reason, e.source, n), {
      ok: !1,
      reason: "daemon-unreachable",
      detail: s.reason
    };
  }
  let o = mnr("cli-bg-dispatch");
  try {
    let s = CKe(),
      i = Krc.join(s, `${e.short}.json`),
      a = "ack-timeout",
      l = "no ack",
      c = zrc.randomBytes(4).toString("hex");
    for (let u = 0; u < 3; u++) {
      if (r) {
        let f = await hE({
          proto: hp,
          op: "dispatch",
          d: {
            ...e,
            nonce: c
          },
          timeoutMs: 5000,
          auth: await jfe()
        }, {
          timeoutMs: 6000
        });
        if (f.ok && f.op === "dispatch") return Vrc(e, f.pid, f.messagingSock, n, f.via);
        if ("code" in f && f.code === "EALIVE") return mWo("short-alive", f.error, e.source, n), {
          ok: !1,
          reason: "short-alive",
          detail: f.error,
          nonce: c
        };
        if ("code" in f && f.code === "ESTALE") {
          if (a = "stale-short", l = f.error, u < 2) {
            T(`bg: stale handle for ${e.short}, retrying dispatch (${u + 1}/2)`);
            continue;
          }
          break;
        }
        T(`bg: socket dispatch fell through (${"code" in f ? f.code : "?"}), using file path`);
      }
      try {
        let f = De({
          ...e,
          nonce: c
        });
        await eg(i, f, 384).catch(async m => {
          if (!wn(m)) throw m;
          await Dar.mkdir(s, {
            recursive: !0,
            mode: 448
          }), await eg(i, f, 384);
        });
      } catch (f) {
        a = "dispatch-write", l = be(f);
        break;
      }
      let d = await hE({
        proto: hp,
        op: "await-ack",
        short: e.short,
        nonce: c,
        timeoutMs: 5000
      }, {
        timeoutMs: 6000
      });
      for (let f = 0; !d.ok && d.code === "ESTARTING" && f < 40; f++) await Nn(200), d = await hE({
        proto: hp,
        op: "await-ack",
        short: e.short,
        nonce: c,
        timeoutMs: 5000
      }, {
        timeoutMs: 6000
      });
      if (d.ok && d.op === "await-ack") return Vrc(e, d.pid, d.messagingSock, n, d.via);
      await Dar.unlink(i).catch(() => {});
      let p = "code" in d ? d.code : void 0;
      if (p === "EALIVE") a = "short-alive";else if (p === "ESTALE") a = "stale-short";else if (p === "ENOCONN") a = "enoconn";else if (p === "ESTARTING") a = "estarting";else a = "ack-timeout";
      if (l = p ? `${p}: ${"error" in d ? d.error : "no ack"}` : "error" in d ? d.error : "no ack", u === 2 || a !== "stale-short" && a !== "ack-timeout") break;
      T(`bg: ${a} for ${e.short}, retrying dispatch (${u + 1}/2)`);
    }
    if (!t && (a === "enoconn" || a === "estarting")) return gWo = !1, await hWo(e, !0, n);
    return mWo(a, l, e.source, n), T(`bg: daemon dispatch fallback (${a}): ${l}`, {
      level: "warn"
    }), {
      ok: !1,
      reason: a,
      detail: l,
      nonce: c
    };
  } finally {
    o();
  }
}
function Vrc(e, t, n, r, o) {
  return gWo = !0, G("tengu_bg_dispatch", {
    backend_daemon: !0,
    source_shell: e.source === "shell",
    source_slash: e.source === "slash",
    source_fleet: e.source === "fleet",
    source_spare: e.source === "spare",
    source_respawn: e.source === "respawn",
    has_worktree: e.worktree !== void 0,
    has_agent: e.agent !== void 0,
    ms: Date.now() - r,
    via: Oo(o)
  }), {
    ok: !0,
    pid: t,
    messagingSock: n
  };
}
function mWo(e, t, n, r) {
  let o = Vt(),
    s = [...t.matchAll(/\bE[A-Z]{2,14}\b/g)].filter(a => !"/\\".includes(t[a.index - 1] ?? ".")).map(a => a[0]),
    i = s.length > 0 ? s.join(",") : /[\\/]/.test(t) ? "<path-bearing>" : t.slice(0, 80);
  G("tengu_bg_dispatch_fallback", {
    ms: Date.now() - r,
    reason_unreachable: e === "daemon-unreachable",
    reason_ack_timeout: e === "ack-timeout",
    reason_write: e === "dispatch-write",
    reason_enoconn: e === "enoconn",
    reason_estarting: e === "estarting",
    reason_stale_short: e === "stale-short",
    reason_short_alive: e === "short-alive",
    platform_darwin: o === "macos",
    platform_linux: o === "linux",
    platform_windows: o === "windows",
    source_spare: n === "spare",
    source_respawn: n === "respawn",
    detail: i
  });
}
var zrc,
  Dar,
  Krc,
  gWo = !1,
  fWo = null;