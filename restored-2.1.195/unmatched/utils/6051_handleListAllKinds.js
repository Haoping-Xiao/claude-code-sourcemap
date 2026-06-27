// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Aqc
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0072  score=0.14  fileCov=0.0076
// note: nearest: src/screens/REPL.tsx (0.0072); dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: parseKindArgs, handleListAllKinds, handleCliKind
// [unwrapped __esm module Aqc] deps: lH, dn, Un, kt, je, At, YS, vn, Is, QEe, Z3o, Gfe, kYe, lqc, WL, q$, CHt, IKe, iQt, VQ, pqc, _qc, YOe, sQt
yhr = require("fs/promises"), cNm = bme + Sqc;
function jZ(e) {
  process.stdout.write(e + `
`);
}
function pNm(e) {
  process.stderr.write(e + `
`);
}
function lD(e) {
  pNm(e), process.exit(1);
}
function parseKindArgs(e, t) {
  let n,
    r = new Map(),
    o = false,
    s = -1;
  for (let c = 0; c < t.length; c++) {
    let u = t[c];
    if (!u.startsWith("-")) {
      s = c;
      break;
    }
    if (u !== "--json" && u.startsWith("--") && !u.includes("=")) c++;
  }
  let i = s === -1 ? void 0 : t[s],
    a;
  if (i === void 0 || i === "list") a = "list";else if (i === "add" || i === "remove") a = i;else lD(`unknown action '${i}' \u2014 expected: claude daemon ${e} <add|remove|list>`);
  let l = s === -1 ? t : [...t.slice(0, s), ...t.slice(s + 1)];
  for (let c = 0; c < l.length; c++) {
    let u = l[c];
    if (u === "--json") o = true;else if (u.startsWith("--")) {
      let d = u.indexOf("="),
        p = d !== -1 ? u.slice(2, d) : u.slice(2);
      if (p === "add" || p === "remove") lD(`'${u}' is no longer supported \u2014 use: claude daemon ${e} <add|remove|list>`);
      r.set(p, d !== -1 ? u.slice(d + 1) : l[++c] ?? "");
    } else if (a === "remove" && n === void 0) n = u;else lD(`unknown option '${u}' \u2014 expected: claude daemon ${e} <add|remove|list>`);
  }
  return {
    action: a,
    removeTarget: n,
    flags: r,
    json: o
  };
}
async function _hr() {
  if (!(await KQ())) lD("daemon service is not installed (service install is disabled in this version; the daemon runs on demand)");
}
async function XZo(e) {
  let t = await IYe(e);
  if (!t.ok) lD(t.error);
  return t.config;
}
async function fNm(e) {
  let t = await XZo(e),
    n = [],
    r = t.remoteControl ?? [];
  for (let s of r) n.push({
    kind: "remote-control",
    dir: s.dir,
    name: s.name ?? uie.basename(s.dir),
    spawnMode: s.spawnMode ?? "same-dir"
  });
  let o = await hHt(e);
  for (let s of o) n.push({
    kind: "scheduled",
    id: s.id,
    dir: s.directory,
    enabled: s.enabled,
    cron: s.cron
  });
  return n;
}
function JZo(e) {
  if (e.length === 0) {
    jZ("(no entries)");
    return;
  }
  let t = ["kind", "name/id", "dir", "extra"],
    n = e.map(s => [s.kind, s.id ?? s.name ?? "", s.dir, s.kind === "scheduled" ? `${s.cron ?? ""}${s.enabled === false ? " (disabled)" : ""}` : s.kind === "remote-control" ? s.spawnMode ?? "" : ""]),
    r = t.map((s, i) => Math.max(s.length, ...n.map(a => a[i].length))),
    o = s => s.map((i, a) => i.padEnd(r[a])).join("  ");
  jZ(o(t)), jZ(r.map(s => "-".repeat(s)).join("  "));
  for (let s of n) jZ(o(s));
}
async function mNm(e, t) {
  if (e.action === "list") {
    let _ = await hHt(t);
    if (e.json) {
      jZ(De(_, null, 2));
      return;
    }
    let S = _.map(A => ({
      kind: "scheduled",
      id: A.id,
      dir: A.directory,
      enabled: A.enabled,
      cron: A.cron
    }));
    JZo(S);
    return;
  }
  if (e.action === "remove") {
    if (!e.removeTarget) lD("usage: claude daemon scheduled remove <task-id>");
    if (await _hr(), !(await JJt(e.removeTarget, t))) lD(`No scheduled task with id "${e.removeTarget}"`);
    jZ(`removed ${e.removeTarget}`);
    return;
  }
  if (await _hr(), e.flags.has("id") && !e.flags.get("id")) lD("--id requires a non-empty value");
  if (e.flags.has("model") && !e.flags.get("model")) lD("--model requires a non-empty value");
  function n(_) {
    return gHt.includes(_);
  }
  if (e.flags.has("permission-mode") && !n(e.flags.get("permission-mode") ?? "")) lD(`--permission-mode must be one of ${gHt.join(", ")}`);
  let r = e.flags.get("prompt"),
    o = e.flags.get("id"),
    s = e.flags.get("dir"),
    i = uie.resolve(s ?? $t());
  if (!o && !r) lD("--prompt is required (or pass --id to update an existing task)");
  let a = o ?? gNm(i, r),
    c = (await hHt(t)).find(_ => _.id === a),
    u = r ?? c?.prompt,
    d = e.flags.get("cron") ?? c?.cron;
  if (!u) lD("--prompt is required");
  if (!d) lD("--cron is required");
  let p = Hct(d);
  if (p.error !== void 0) lD(`invalid --cron '${d}': ${p.error}`);
  let f = p.cron,
    m = s ? uie.resolve(s) : c?.directory ?? uie.resolve($t()),
    g = e.flags.get("permission-mode") ?? c?.permissionMode ?? "dontAsk",
    h = e.flags.get("model") ?? c?.model ?? void 0,
    {
      isPathTrusted: y
    } = await Promise.resolve().then(() => (er(), NQ));
  if (!y(m)) lD(`${m} is not a trusted directory \u2014 run \`claude\` there once and accept the trust dialog.`);
  let b = {
    ...(c && {
      enabled: c.enabled,
      runTimeoutMinutes: c.runTimeoutMinutes,
      maxQueued: c.maxQueued
    }),
    id: a,
    cron: f,
    prompt: u,
    directory: m,
    permissionMode: g,
    ...(h && {
      model: h
    })
  };
  if (await XJt(b, t), c) jZ(`updated scheduled task '${a}'`);else jZ(`added scheduled task '${a}'`);
}
function gNm(e, t) {
  let n = i => i.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40),
    r = n(uie.basename(e)),
    o = n(t.split(/\s+/).slice(0, 4).join(" "));
  return [r, o].filter(Boolean).join("-") || "task";
}
async function hNm(e, t) {
  if (e.action === "list") {
    let l = (await XZo(t)).remoteControl ?? [];
    if (e.json) {
      jZ(De(l, null, 2));
      return;
    }
    JZo(l.map(c => ({
      kind: "remote-control",
      dir: c.dir,
      name: c.name ?? uie.basename(c.dir),
      spawnMode: c.spawnMode ?? "same-dir"
    })));
    return;
  }
  if (e.action === "remove") {
    if (!e.removeTarget) lD("usage: claude daemon remote-control remove <name-or-dir>");
    await _hr();
    let a = await yNm(e.removeTarget, t);
    await Jir(a, t), jZ(`removed ${a}`);
    return;
  }
  await _hr();
  let n = await jA(uie.resolve(e.flags.get("dir") ?? $t())),
    {
      isPathTrusted: r
    } = await Promise.resolve().then(() => (er(), NQ));
  if (!r(n)) lD(`${n} is not a trusted directory \u2014 run \`claude\` there once and accept the trust dialog.`);
  let o = e.flags.get("name"),
    s = e.flags.get("spawn-mode");
  if (s !== void 0 && s !== "same-dir" && s !== "worktree") lD(`--spawn-mode must be same-dir or worktree, got '${s}'`);
  let i = await Xir({
    dir: n,
    name: o,
    spawnMode: s
  }, t);
  jZ(`${i} remote-control server for ${n}`);
}
async function yNm(e, t) {
  let r = (await XZo(t)).remoteControl ?? [],
    o = r.filter(a => (a.name ?? uie.basename(a.dir)) === e);
  if (o.length === 1) return o[0].dir;
  if (o.length > 1) lD(`ambiguous: multiple remote-control servers match name '${e}'. Use a dir instead.`);
  let s = await jA(uie.resolve(e)),
    i = [];
  for (let a of r) if ((await jA(a.dir)) === s) i.push(a);
  if (i.length >= 1) return i[0].dir;
  lD(`no remote-control server matched '${e}'`);
}
async function handleListAllKinds(e, t = Dq()) {
  let n = await fNm(t);
  if (e) {
    jZ(De(n, null, 2));
    return;
  }
  JZo(n);
}
async function handleCliKind(e, t, n = Dq()) {
  let r = parseKindArgs(e, t);
  if (e === "scheduled") return mNm(r, n);
  return hNm(r, n);
}
var uie;