// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gzo
// matched 2.1.88 source: src/utils/cleanup.ts
// class=modified  jaccard=0.1048  score=0.1562  fileCov=0.2414
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var gzo = E(() => {
  Xr();
  dn();
  Pw();
  Hpe();
  Jt();
  ag();
  ((pSc = require("crypto")), (HNe = require("fs/promises")), (mzo = require("path")));
  ySc = ve(() =>
    H.object({
      q: H.string(),
      collapsed: H.array(H.string()).optional(),
      ts: H.number(),
    }),
  );
});
function bgm() {
  if (!Om("userSettings") && jo()?.cleanupPeriodDays === void 0)
    return (
      T(
        "Skipping retention cleanup: userSettings source is disabled (--setting-sources) and no enabled source provides cleanupPeriodDays.",
      ),
      false
    );
  if (yn("policySettings")?.cleanupPeriodDays !== void 0) return true;
  let { errors: e } = OPe();
  if (e.length > 0 && BLr("cleanupPeriodDays"))
    return (
      T(
        "Skipping cleanup: settings have validation errors but cleanupPeriodDays was explicitly set. Fix settings errors to enable cleanup.",
      ),
      false
    );
  return true;
}
function Jz(e) {
  let n = (jo() || {}).cleanupPeriodDays ?? _gm;
  if (n === 0) return null;
  if (e !== void 0 && e < n) n = e;
  let r = n * 24 * 60 * 60 * 1000;
  return new Date(Date.now() - r);
}
function TNe(e, t) {
  return {
    messages: e.messages + t.messages,
    errors: e.errors + t.errors,
  };
}
function Sgm(e) {
  let t = bi(e, ".").replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(t);
}
async function bSc(e, t, n) {
  let r = {
    messages: 0,
    errors: 0,
  };
  try {
    let o = await qt().readdir(e);
    for (let s of o)
      try {
        if (Sgm(s.name) < t)
          if ((await qt().unlink(tu.join(e, s.name)), n)) r.messages++;
          else r.errors++;
      } catch (i) {
        T(`Failed to clean up file ${s.name} in ${e}: ${i}`, {
          level: "error",
        });
      }
  } catch (o) {
    if (wn(o));
    else if (Vo(o))
      T(`cleanup readdir ${e} failed: ${o.code}`, {
        level: "error",
      });
    else ke(o);
  }
  return r;
}
async function Egm() {
  let e = qt(),
    t = Jz();
  if (t === null)
    return {
      messages: 0,
      errors: 0,
    };
  let n = LFe.errors(),
    r = LFe.baseLogs(),
    o = await bSc(n, t, false);
  try {
    let s;
    try {
      s = await e.readdir(r);
    } catch {
      return o;
    }
    let i = s
      .filter((a) => a.isDirectory() && a.name.startsWith("mcp-logs-"))
      .map((a) => tu.join(r, a.name));
    for (let a of i) ((o = TNe(o, await bSc(a, t, true))), await y2(a, e));
  } catch (s) {
    if (wn(s));
    else if (Vo(s))
      T(`cleanup mcp-logs scan failed: ${s.code}`, {
        level: "error",
      });
    else ke(s);
  }
  return o;
}
async function Xz(e, t, n) {
  if ((await n.stat(e)).mtime < t) return (await n.unlink(e), true);
  return false;
}
async function y2(e, t) {
  try {
    await t.rmdir(e);
  } catch {}
}
async function SSc(e, t, n, r) {
  for (let o of await n.readdir(e).catch(() => [])) {
    let s = tu.join(e, o.name);
    if (o.isDirectory()) await SSc(s, t, n, r);
    else if (o.isFile())
      try {
        if (await Xz(s, t, n)) r.messages++;
      } catch {
        r.errors++;
      }
    else
      try {
        if ((await n.lstat(s)).mtime < t) (await n.unlink(s), r.messages++);
      } catch {
        r.errors++;
      }
  }
  await y2(e, n);
}
async function ESc(e, t) {
  let n = -1 / 0;
  for (let r of await t.readdir(e).catch(() => [])) {
    let o = tu.join(e, r.name);
    if (r.isDirectory()) {
      let s = await ESc(o, t);
      if (s !== null) n = Math.max(n, s);
    } else if (r.isFile())
      try {
        let { mtimeMs: s } = await t.stat(o);
        n = Math.max(n, s);
      } catch {}
  }
  return n === -1 / 0 ? null : n;
}
async function Agm() {
  let e = Jz(),
    t = {
      messages: 0,
      errors: 0,
    };
  if (e === null) return t;
  let n = oF(),
    r = qt(),
    o;
  try {
    o = await r.readdir(n);
  } catch {
    return t;
  }
  let s;
  try {
    if (((s = qE()), !(await r.lstat(s)).isDirectory())) s = null;
  } catch {
    s = null;
  }
  for (let i of o) {
    if (!i.isDirectory()) continue;
    let a = tu.join(n, i.name),
      l;
    try {
      l = await r.readdir(a);
    } catch {
      t.errors++;
      continue;
    }
    l.sort((u, d) => Number(d.isDirectory()) - Number(u.isDirectory()));
    let c = new Set(
      l.filter((u) => u.isFile() && u.name.endsWith(".jsonl")).map((u) => u.name.slice(0, -6)),
    );
    for (let u of l)
      if (u.isFile()) {
        if (
          !u.name.endsWith(".jsonl") &&
          !u.name.endsWith(".cast") &&
          !u.name.endsWith(".ccr-tip.json") &&
          !u.name.includes(".ccr-tip.json.tmp.")
        )
          continue;
        try {
          if (await Xz(tu.join(a, u.name), e, r)) {
            if ((t.messages++, u.name.endsWith(".jsonl"))) {
              let d = u.name.slice(0, -6);
              if (d && d !== "." && d !== "..") {
                if (
                  (await r.unlink(tu.join(a, `${d}.ccr-tip.json`)).catch(() => {}),
                  await r
                    .rm(tu.join(a, d), {
                      recursive: true,
                      force: true,
                    })
                    .catch(() => {
                      t.errors++;
                    }),
                  s !== null)
                ) {
                  let p = tu.join(s, i.name);
                  if ((await r.lstat(p).catch(() => null))?.isDirectory())
                    (await r
                      .rm(tu.join(p, d), {
                        recursive: true,
                        force: true,
                      })
                      .catch(() => {
                        t.errors++;
                      }),
                      await y2(p, r));
                }
              }
            }
          }
        } catch (d) {
          if (!wn(d)) t.errors++;
        }
      } else if (u.isDirectory()) {
        let d = tu.join(a, u.name);
        if (u.name === "bagel") {
          let g = await ESc(d, r);
          if (g !== null && g < e.getTime())
            try {
              (await r.rm(d, {
                recursive: true,
                force: true,
              }),
                t.messages++);
            } catch {
              t.errors++;
            }
          continue;
        }
        let p = tu.join(d, Pdo),
          f = await r.readdir(p).catch(() => []);
        for (let g of f)
          if (g.isFile())
            try {
              if (await Xz(tu.join(p, g.name), e, r)) t.messages++;
            } catch {
              t.errors++;
            }
          else if (g.isDirectory()) {
            let h = tu.join(p, g.name),
              y;
            try {
              y = await r.readdir(h);
            } catch {
              continue;
            }
            for (let b of y) {
              if (!b.isFile()) continue;
              try {
                if (await Xz(tu.join(h, b.name), e, r)) t.messages++;
              } catch {
                t.errors++;
              }
            }
            await y2(h, r);
          }
        await y2(p, r);
        let m = tu.join(d, "mcp-tasks");
        for (let g of await r.readdir(m).catch(() => [])) {
          if (!g.isFile() || !g.name.endsWith(".json")) continue;
          try {
            if (await Xz(tu.join(m, g.name), e, r)) t.messages++;
          } catch {
            t.errors++;
          }
        }
        if ((await y2(m, r), !c.has(u.name)))
          for (let g of ["subagents", "workflows", "remote-agents"])
            await SSc(tu.join(d, g), e, r, t);
        await y2(d, r);
      }
    await y2(a, r);
  }
  return t;
}
async function tB(e, t, n = true, r) {
  let o = Jz(r),
    s = {
      messages: 0,
      errors: 0,
    };
  if (o === null) return s;
  let i = qt(),
    a;
  try {
    a = await i.readdir(e);
  } catch {
    return s;
  }
  for (let l of a) {
    if (!l.isFile() || !l.name.endsWith(t)) continue;
    try {
      if (await Xz(tu.join(e, l.name), o, i)) s.messages++;
    } catch {
      s.errors++;
    }
  }
  if (n) await y2(e, i);
  return s;
}
async function Hgm() {
  let e = {
      messages: 0,
      errors: 0,
    },
    t = Jz();
  if (t === null) return e;
  let n = tu.join(tr(), "hfi-auth.json");
  try {
    if (await Xz(n, t, qt())) e.messages++;
  } catch (r) {
    if (!wn(r))
      (T(`Failed to clean up HFI auth file: ${r}`, {
        level: "error",
      }),
        e.errors++);
  }
  return e;
}
async function Tgm() {
  let e = {
      messages: 0,
      errors: 0,
    },
    t = Jz();
  if (t === null) return e;
  let n = tu.join(tr(), "mcp-needs-auth-cache.json");
  try {
    if (await Xz(n, t, qt())) e.messages++;
  } catch (r) {
    if (!wn(r))
      if ((e.errors++, Vo(r)))
        T(`cleanup mcp-auth-cache failed: ${r.code}`, {
          level: "error",
        });
      else ke(r);
  }
  return e;
}
function vgm() {
  let e = tu.join(tr(), "plans");
  return tB(e, ".md");
}
async function A7e(e, t, n) {
  let r = Jz(),
    o = {
      messages: 0,
      errors: 0,
    };
  if (r === null) return o;
  let s = qt(),
    i = tu.join(tr(), e),
    a;
  try {
    a = await s.readdir(i);
  } catch {
    return o;
  }
  for (let l of a) {
    if (!l.isDirectory() || t?.has(l.name)) continue;
    let c = tu.join(i, l.name);
    try {
      if ((await s.stat(c)).mtime < r) {
        if (await n?.(c)) continue;
        (await s.rm(c, {
          recursive: true,
          force: true,
        }),
          o.messages++);
      }
    } catch {
      o.errors++;
    }
  }
  return (await y2(i, s), o);
}
function wgm() {
  return A7e("file-history");
}
function Cgm() {
  return A7e("session-env");
}
function Igm() {
  return A7e("tasks");
}
function xgm() {
  return A7e("uploads");
}
function kgm() {
  return A7e(tu.join("skills", ".staging"));
}
async function Rgm() {
  let e = Jz(),
    t = {
      messages: 0,
      errors: 0,
    };
  if (e === null) return t;
  let n = qt(),
    r = tu.join(tr(), xpo),
    o;
  try {
    o = await n.readdir(r);
  } catch {
    return t;
  }
  for (let s of o) {
    if (!s.isDirectory()) continue;
    let i = tu.join(r, s.name),
      a = (await kpo(i))?.cacheKey ?? null,
      l;
    try {
      l = await n.readdir(i);
    } catch {
      t.errors++;
      continue;
    }
    for (let c of l) {
      if (!c.isDirectory() || c.name === a) continue;
      let u = tu.join(i, c.name);
      try {
        if ((await n.stat(u)).mtime < e)
          (await n.rm(u, {
            recursive: true,
            force: true,
          }),
            t.messages++);
      } catch {
        t.errors++;
      }
    }
    try {
      if ((await n.stat(i)).mtime < e)
        (await n.rm(i, {
          recursive: true,
          force: true,
        }),
          t.messages++);
    } catch {
      t.errors++;
    }
  }
  return (await y2(r, n), t);
}
async function Lgm() {
  let e = tu.join(tr(), "usage-data"),
    t = await tB(tu.join(e, "facets"), ".json");
  return (
    (t = TNe(t, await tB(tu.join(e, "session-meta"), ".json"))),
    (t = TNe(t, await tB(e, ".html", false))),
    await y2(e, qt()),
    t
  );
}
async function Dgm() {
  let e = Jz(),
    t = {
      messages: 0,
      errors: 0,
    };
  if (e === null) return t;
  let n = qt(),
    r;
  try {
    r = qE();
  } catch {
    return t;
  }
  let o;
  try {
    o = await n.readdir(r);
  } catch {
    return t;
  }
  for (let s of o) {
    if (!s.isFile() || !s.name.startsWith("cc-transcript-") || !s.name.endsWith(".txt")) continue;
    try {
      if (await Xz(tu.join(r, s.name), e, n)) t.messages++;
    } catch {
      t.errors++;
    }
  }
  return t;
}
async function Pgm() {
  let e = tu.join(tr(), "shares"),
    t = await A7e("shares");
  return ((t = TNe(t, await tB(e, ".zip", false))), await y2(e, qt()), t);
}
function Mgm() {
  return tB(tu.join(tr(), "telemetry"), ".json");
}
function $gm() {
  return tB(tu.join(tr(), "dump-prompts"), ".jsonl", true, dSc);
}
function Ogm() {
  return tB(tu.join(tr(), "shell-snapshots"), ".sh");
}
async function Ngm() {
  let e = Jz(),
    t = {
      messages: 0,
      errors: 0,
    };
  if (e === null) return t;
  let n = qt(),
    r = nwe();
  for (let o of await n.readdir(r).catch(() => [])) {
    if (!o.isDirectory()) continue;
    let s = tu.join(r, o.name, "inboxes");
    for (let i of await n.readdir(s).catch(() => [])) {
      if (!i.isFile() || !i.name.endsWith(".json")) continue;
      try {
        if (await Xz(tu.join(s, i.name), e, n)) t.messages++;
      } catch {
        t.errors++;
      }
    }
    (await y2(s, n), await y2(tu.join(r, o.name), n));
  }
  return t;
}
async function Bgm() {
  let e = tr(),
    t = await tB(tu.join(e, "jobs", "settled"), ".json");
  ((t = TNe(t, await tB(tu.join(e, "daemon", "dispatch", "rejected"), ".json"))),
    (t = TNe(t, await tB(tu.join(e, "daemon", "dispatch"), ".json", false))),
    (t = TNe(t, await tB(tu.join(e, "daemon", "auth"), ".json"))));
  let n = yn("policySettings")?.cleanupPeriodDays !== void 0,
    r = Jz(),
    o = new Set();
  if (!n) for (let a of await zGe()) o.add(a);
  let s = false,
    i = false;
  try {
    let a = tu.join(e, "daemon", "roster.json"),
      l = await qt().lstat(a);
    if (!l.isFile() || l.size > 8388608) throw Error("not a regular file");
    let c = await qt().readFile(a, {
        encoding: "utf-8",
      }),
      u = Ft(c);
    if (u !== null && typeof u === "object" && "workers" in u) {
      let d = u.workers;
      if (d !== null && typeof d === "object") {
        s = true;
        for (let [p, f] of Object.entries(d))
          if (
            f !== null &&
            typeof f === "object" &&
            "pid" in f &&
            typeof f.pid === "number" &&
            zR(f.pid) &&
            (await bv(
              f.pid,
              "procStart" in f && typeof f.procStart === "string" ? f.procStart : void 0,
            ))
          )
            (o.add(p), (i = true));
      }
    }
  } catch {}
  if (
    ((t = TNe(
      t,
      await A7e("jobs", o, async (a) => {
        let l = await zi(a);
        if (!n && (l === null || !Vh(l))) return true;
        if (l?.worktreePath && Vh(l) && r)
          await eqo(l.worktreePath, l.worktreeBranch, l.originCwd, l.worktreeHookBased, r).catch(
            () => {},
          );
        return false;
      }),
    )),
    r !== null)
  ) {
    let a = qt();
    for (let c of [tu.join(e, "daemon.log"), tu.join(e, "daemon.log.1")])
      try {
        if (await Xz(c, r, a)) t.messages++;
      } catch (u) {
        if (!wn(u)) t.errors++;
      }
    let l = tu.join(e, "daemon", "roster.json");
    try {
      if ((await a.lstat(l)).mtime < r && !i && (s || n)) (await a.unlink(l), t.messages++);
    } catch (c) {
      if (!wn(c)) t.errors++;
    }
    for (let c of await a.readdir(tu.join(e, "daemon")).catch(() => [])) {
      if (!c.isFile() || !c.name.startsWith("roster.json.corrupt.")) continue;
      try {
        if (await Xz(tu.join(e, "daemon", c.name), r, a)) t.messages++;
      } catch {
        t.errors++;
      }
    }
  }
  return (await Qdr(), t);
}
function Ugm() {
  return tB(tu.join(tr(), "backups"), "", false);
}
async function Fgm() {
  let e = Jz(),
    t = {
      messages: 0,
      errors: 0,
    };
  if (e === null) return t;
  let n = qt(),
    r = tu.join(tr(), "debug"),
    o;
  try {
    o = await n.readdir(r);
  } catch {
    return t;
  }
  for (let s of o) {
    if (s.name === "latest" || !s.isFile()) continue;
    try {
      if (await Xz(tu.join(r, s.name), e, n)) t.messages++;
    } catch {
      t.errors++;
    }
  }
  return t;
}
async function jgm() {
  return tB(tu.join(tr(), "feedback-bundles"), ".zip");
}
async function Ggm() {
  let e = await tB(tu.join(tr(), "traces"), ".json"),
    t = await tB(tu.join(tr(), "startup-perf"), ".txt"),
    n = await tB(tu.join(tr(), "startup-perf"), ".json");
  return {
    messages: e.messages + t.messages + n.messages,
    errors: e.errors + t.errors + n.errors,
  };
}
async function Wgm() {
  let e = Jz(),
    t = {
      messages: 0,
      errors: 0,
    };
  if (e === null) return t;
  let n = qt();
  for (let r of ["todos", "statsig", "logs"]) {
    let o = tu.join(tr(), r),
      s;
    try {
      s = await n.readdir(o);
    } catch {
      continue;
    }
    for (let i of s) {
      let a = tu.join(o, i.name);
      try {
        if ((await n.stat(a)).mtime >= e) continue;
        if (i.isDirectory())
          await n.rm(a, {
            recursive: true,
            force: true,
          });
        else await n.unlink(a);
        t.messages++;
      } catch {
        t.errors++;
      }
    }
    await y2(o, n);
  }
  return t;
}
async function ASc() {
  if ((await Ffc(), !bgm())) return;
  (await Egm(),
    await Agm(),
    await vgm(),
    await wgm(),
    await Cgm(),
    await Igm(),
    await xgm(),
    await Lgm(),
    await kgm(),
    await Rgm(),
    await Dgm(),
    await Pgm(),
    await Mgm(),
    await Fgm(),
    await jgm(),
    await Ggm(),
    await $gm(),
    await Ogm(),
    await Ngm(),
    await Bgm(),
    await Ugm(),
    await Hgm(),
    await Tgm(),
    await Wgm());
  let e = Jz();
  if (e !== null) {
    await q8i(e);
    let t = await Z5o(e);
    if (t > 0)
      G("tengu_worktree_cleanup", {
        removed: t,
      });
  }
}
var tu,
  _gm = 30;
