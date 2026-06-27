// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module p5c
// matched 2.1.88 source: node_modules/undici/lib/core/constants.js
// class=new  jaccard=0.0362  score=0.0759  fileCov=0.0646
// note: nearest: node_modules/undici/lib/core/constants.js (0.0362); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var p5c = E(() => {
  kgr();
  At();
  DD();
  QO();
  VGc();
  JGc();
  sWc();
  qQo();
  lWc();
  sZo();
  _Wc();
  dZo();
  UWc();
  XWc();
  _Zo();
  BZ();
  ZWc();
  t5c();
  awt();
  l5c();
  sge = require("crypto"), vZo = require("fs/promises"), urn = {
    "Cache-Control": "no-store",
    Pragma: "no-cache"
  };
  UOm = {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "no-referrer",
    "Cross-Origin-Opener-Policy": "same-origin"
  };
  GOm = /^[A-Za-z0-9._-]{1,64}$/;
});
var b5c = {};
_t(b5c, {
  scanHistoryFile: () => scanHistoryFile,
  purgeProjectHandler: () => purgeProjectHandler
});
function wZo(e = "") {
  process.stdout.write(`${e}
`);
}
function f5c(e) {
  let t = () => {},
    n = new Promise(o => {
      t = o;
    }),
    r = ihr.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  return r.question(`${e} [y/N] `, o => {
    r.close();
    let s = o.trim().toLowerCase();
    t(s === "y" || s === "yes");
  }), n;
}
async function uve(e) {
  try {
    return await dve.stat(e), !0;
  } catch {
    return !1;
  }
}
async function g5c(e, t, n) {
  let r = () => {},
    o = new Promise(a => {
      r = a;
    }),
    {
      unmount: s,
      waitUntilExit: i
    } = await b8(cXe.jsx(AH, {
      children: cXe.jsx(TT, {
        children: cXe.jsxs(U, {
          flexDirection: "column",
          gap: 1,
          paddingY: 1,
          children: [cXe.jsx(w, {
            bold: !0,
            children: e
          }), cXe.jsx(Sr, {
            options: t,
            defaultValue: n,
            visibleOptionCount: 10,
            onChange: a => {
              r(a), s();
            },
            onCancel: () => {
              r(null), s();
            }
          })]
        })
      })
    }), {
      exitOnCtrlC: !1
    });
  return await i(), o;
}
function h5c() {
  return Object.keys(Dt().projects ?? {});
}
async function KOm() {
  let e = pO.resolve(yr()),
    t = h5c(),
    n = new Set([e]),
    r = [{
      label: e,
      value: e,
      description: "current directory"
    }];
  for (let o of t) {
    if (n.has(o)) continue;
    n.add(o), r.push({
      label: o,
      value: o
    });
  }
  return g5c("Select a project to purge:", r, e);
}
function y5c(e, t) {
  for (let n of t) if (e === n || e.startsWith(n + pO.sep)) return !0;
  return !1;
}
function YOm(e, t) {
  if (!e) return !1;
  try {
    let n = Ft(e);
    return typeof n.project === "string" && y5c(n.project, t);
  } catch {
    return !1;
  }
}
async function XOm(e, t) {
  let n;
  try {
    n = (await dve.readdir(e)).filter(r => r.endsWith(".jsonl")).sort();
  } catch {
    return !1;
  }
  for (let r of n) {
    let o = xZo.createReadStream(pO.join(e, r), {
        encoding: "utf8"
      }),
      s = ihr.createInterface({
        input: o,
        crlfDelay: 1 / 0
      }),
      i = 0;
    try {
      for await (let a of s) {
        if (++i > 50) break;
        try {
          let l = Ft(a);
          if (typeof l.cwd === "string") return y5c(l.cwd, t);
        } catch {}
      }
    } catch {} finally {
      s.close(), o.close();
    }
  }
  return !1;
}
async function scanHistoryFile(e, t, n) {
  let r = ihr.createInterface({
      input: xZo.createReadStream(e, {
        encoding: "utf8"
      }),
      crlfDelay: 1 / 0
    }),
    o = [],
    s = 0;
  try {
    for await (let i of r) if (YOm(i, t)) s++;else if (n === "filter") o.push(i);
  } catch (i) {
    if (wn(i)) return 0;
    throw i;
  }
  if (n === "filter" && s > 0) await eg(e, o.length ? `${o.join(`
`)}
` : "");
  return s;
}
async function JOm(e) {
  let t;
  try {
    t = await dve.readdir(e);
  } catch {
    return [];
  }
  return t.filter(n => n.endsWith(".jsonl")).map(n => n.slice(0, -6)).filter(n => zOm.test(n));
}
async function QOm(e) {
  let t = tr(),
    n = pO.resolve(e),
    r = await jA(n),
    o = new Set([n, r]),
    s = [];
  try {
    await dve.stat(n);
    for (let _ of o) {
      let S = qf(_);
      if (S) s.push(S);
    }
  } catch {}
  let i = [],
    a = [],
    l = new Set();
  for (let _ of o) for (let S of await Px(_)) l.add(S);
  let c = PO(),
    u = [...o].map(_ => LE(_) + "-");
  try {
    for (let _ of await dve.readdir(c, {
      withFileTypes: !0
    })) {
      let S = pO.join(c, _.name);
      if (_.isDirectory() && !l.has(S) && u.some(A => _.name.startsWith(A)) && (await XOm(S, o))) l.add(S);
    }
  } catch {}
  let d = [...l],
    p = new Set();
  for (let _ of d) for (let S of await JOm(_)) p.add(S);
  for (let _ of p) {
    let S = T5(_);
    if (await uve(S)) i.push({
      path: S,
      kind: "dir",
      reason: `tasks for session ${_}`
    });
    let A = pO.join(t, "debug", `${_}.txt`);
    if (await uve(A)) i.push({
      path: A,
      kind: "file",
      reason: `debug log for session ${_}`
    });
    let v = pO.join(t, "file-history", _);
    if (await uve(v)) i.push({
      path: v,
      kind: "dir",
      reason: `file edit history for session ${_}`
    });
  }
  for (let _ of d) i.push({
    path: _,
    kind: "dir",
    reason: "project transcripts (.jsonl) and memory/"
  });
  let f = _ => t9(_).replace(/\/+$/, "") || "/",
    m = Dt(),
    g = new Set([...o, ...s].map(f));
  for (let _ of Object.keys(m.projects ?? {})) if (g.has(f(_))) i.push({
    path: _,
    kind: "config-key",
    reason: "project entry in ~/.claude.json (trust, history, MCP servers)"
  });
  let h = pO.join(t, "history.jsonl"),
    y = await scanHistoryFile(h, o, "count");
  if (y > 0) i.push({
    path: h,
    kind: "history-lines",
    reason: `${y} prompt(s) typed in this project`,
    matchPaths: o
  });
  if (await uve(pO.join(t, "shell-snapshots"))) a.push("shell-snapshots/ are not project-scoped and will not be touched");
  let b = pO.join(t, "backups");
  if (await uve(b)) a.push(`backups/ may still contain this project entry in old .claude.json snapshots (${b}); at most 5 are kept and they rotate out automatically`);
  return {
    items: i,
    warnings: a
  };
}
async function ZOm() {
  let e = tr(),
    t = [],
    n = [],
    r = [["projects", "all project transcripts (.jsonl) and memory/"], ["tasks", "all session task lists"], ["debug", "all session debug logs"], ["file-history", "all session file edit history"]];
  for (let [i, a] of r) {
    let l = pO.join(e, i);
    if (await uve(l)) t.push({
      path: l,
      kind: "dir",
      reason: a
    });
  }
  let o = pO.join(e, "history.jsonl");
  if (await uve(o)) t.push({
    path: o,
    kind: "file",
    reason: "prompt history across all projects"
  });
  for (let i of h5c()) t.push({
    path: i,
    kind: "config-key",
    reason: "project entry in ~/.claude.json (trust, history, MCP servers)"
  });
  if (await uve(pO.join(e, "shell-snapshots"))) n.push("shell-snapshots/ are not project-scoped and will not be touched");
  let s = pO.join(e, "backups");
  if (await uve(s)) n.push(`backups/ may still contain project entries in old .claude.json snapshots (${s}); at most 5 are kept and they rotate out automatically`);
  return {
    items: t,
    warnings: n
  };
}
async function CZo(e) {
  switch (e.kind) {
    case "config-key":
      if (!WVo(e.path)) return `Failed to remove projects["${e.path}"] from .claude.json \u2014 is your config directory writable?`;
      return null;
    case "history-lines":
      return await scanHistoryFile(e.path, e.matchPaths ?? new Set(), "filter"), null;
    case "file":
    case "dir":
      return await dve.rm(e.path, {
        recursive: e.kind === "dir",
        force: !0
      }), null;
  }
}
function IZo(e, t) {
  if (e.length > 0) Le("cli_purge_project", "config_write_failed"), ws(`${e.length} item(s) failed:
  ${e.join(`
  `)}`);
  xe("cli_purge_project"), _R(t);
}
function _5c(e) {
  let t;
  switch (e.kind) {
    case "config-key":
      t = `config: projects["${e.path}"]`;
      break;
    case "history-lines":
      t = `filter: ${e.path}`;
      break;
    case "file":
    case "dir":
      t = `${e.kind}:    ${e.path}`;
      break;
  }
  return `${t}
           ${e.reason}`;
}
function m5c(e, t, n) {
  wZo(`
Purge plan for ${e}:
`);
  for (let r of t) wZo(`  ${_5c(r)}`);
  if (n.length) {
    wZo();
    for (let r of n) T3(r);
  }
}
async function purgeProjectHandler(e, t) {
  if (t.all) {
    if (e) ws("Cannot specify both a path and --all.");
    if (t.interactive) ws("Cannot use -i/--interactive with --all.");
    let {
      items: i,
      warnings: a
    } = await ZOm();
    if (i.length === 0) Le("cli_purge_project", "cli_purge_project_nothing_found"), ws(`No Claude Code project state found under ${tr()}.`);
    if (m5c("all projects", i, a), t.dryRun) _R(`Dry run: ${i.length} item(s) would be deleted.`);
    if (!t.yes) {
      if (!(await f5c(`Delete ${i.length} item(s) for ALL projects? This cannot be undone.`))) ws("Aborted.");
    }
    let l = [];
    for (let c of i) {
      let u = await CZo(c);
      if (u) l.push(u);
    }
    IZo(l, `Purged ${i.length} item(s) across all projects.`);
  }
  let n;
  if (e) n = pO.resolve(e);else {
    let i = await KOm();
    if (i === null) ws("Aborted.");
    n = i;
  }
  let {
    items: r,
    warnings: o
  } = await QOm(n);
  if (r.length === 0) Le("cli_purge_project", "cli_purge_project_nothing_found"), ws(`No Claude Code project state found for ${n} under ${tr()}.`);
  if (m5c(n, r, o), t.dryRun) _R(`Dry run: ${r.length} item(s) would be deleted.`);
  if (t.interactive) {
    let i = 0,
      a = !1,
      l = [];
    for (let [c, u] of r.entries()) {
      let d = "delete";
      if (!a) d = (await g5c(`[${c + 1}/${r.length}] ${_5c(u)}`, [{
        label: "Delete",
        value: "delete"
      }, {
        label: "Skip",
        value: "skip"
      }, {
        label: "Delete this and all remaining",
        value: "all"
      }, {
        label: "Abort",
        value: "abort"
      }])) ?? "abort";
      if (d === "abort") ws(`Aborted. ${i} item(s) deleted.`);
      if (d === "skip") continue;
      if (d === "all") a = !0;
      let p = await CZo(u);
      if (p) {
        l.push(p);
        continue;
      }
      i++;
    }
    IZo(l, `Purged ${i}/${r.length} item(s) for ${n}.`);
  }
  if (!t.yes) {
    if (!(await f5c(`Delete ${r.length} item(s) for ${n}? This cannot be undone.`))) ws("Aborted.");
  }
  let s = [];
  for (let i of r) {
    let a = await CZo(i);
    if (a) s.push(a);
  }
  IZo(s, `Purged ${r.length} item(s) for ${n}.`);
}
var xZo, dve, pO, ihr, cXe, zOm;