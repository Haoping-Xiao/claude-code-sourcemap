// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module VZl
// matched 2.1.88 source: src/utils/sessionStorage.ts
// class=new  jaccard=0.0136  score=0.2308  fileCov=0.0142
// note: nearest: src/utils/sessionStorage.ts (0.0136); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var VZl = E(() => {
  O7n();
  jS();
});
async function zZl(e, t, n = {}) {
  if (!FS(e)) throw Error(`Invalid sessionId: ${e}`);
  if (!t.trim()) throw Error("title must be non-empty");
  let r = De({
    type: "custom-title",
    customTitle: t.trim(),
    sessionId: e
  }) + `
`;
  await XZl(e, r, n);
}
async function KZl(e, t, n = {}) {
  if (!FS(e)) throw Error(`Invalid sessionId: ${e}`);
  if (t !== null) {
    let o = B4(t).trim();
    if (!o) throw Error("tag must be non-empty (use null to clear)");
    t = o;
  }
  let r = De({
    type: "tag",
    tag: t ?? "",
    sessionId: e
  }) + `
`;
  await XZl(e, r, n);
}
async function YZl(e, t = {}) {
  if (!FS(e)) throw Error(`Invalid sessionId: ${e}`);
  for (let n of await LKf(t)) {
    let r = vYe.join(n, `${e}.jsonl`),
      o;
    try {
      ({
        size: o
      } = await hme.stat(r));
    } catch (s) {
      let i = on(s);
      if (i === "ENOENT" || i === "ENOTDIR") continue;
      throw s;
    }
    if (o === 0) continue;
    await hme.rm(r, {
      force: true
    }), await hme.rm(vYe.join(n, e), {
      recursive: true,
      force: true
    });
    return;
  }
  throw Error(t.dir ? `Session ${e} not found in project directory for ${t.dir}` : `Session ${e} not found in any project directory`);
}
async function LKf(e) {
  if (e.dir) {
    let n = await jA(e.dir),
      r = await Px(n),
      o;
    try {
      o = await e9(n);
    } catch {
      o = [];
    }
    for (let s of o) {
      if (s === n) continue;
      r.push(...(await Px(s)));
    }
    return r;
  }
  let t = PO();
  try {
    return (await hme.readdir(t, {
      withFileTypes: true
    })).filter(r => r.isDirectory() || r.isSymbolicLink()).map(r => vYe.join(t, r.name));
  } catch {
    return [];
  }
}
async function XZl(e, t, n) {
  let r = `${e}.jsonl`;
  if (n.dir) {
    let i = await jA(n.dir);
    for (let l of await Px(i)) if (await O3o(vYe.join(l, r), t)) return;
    let a;
    try {
      a = await e9(i);
    } catch {
      a = [];
    }
    for (let l of a) {
      if (l === i) continue;
      for (let c of await Px(l)) if (await O3o(vYe.join(c, r), t)) return;
    }
    throw Error(`Session ${e} not found in project directory for ${n.dir}`);
  }
  let o = PO(),
    s;
  try {
    s = await hme.readdir(o);
  } catch {
    throw Error(`Session ${e} not found (no projects directory)`);
  }
  for (let i of s) if (await O3o(vYe.join(o, i, r), t)) return;
  throw Error(`Session ${e} not found in any project directory`);
}
async function O3o(e, t) {
  let n;
  try {
    n = await hme.open(e, N3o.constants.O_WRONLY | N3o.constants.O_APPEND);
  } catch (r) {
    let o = on(r);
    if (o === "ENOENT" || o === "ENOTDIR") return false;
    throw r;
  }
  try {
    let {
      size: r
    } = await n.stat();
    if (r === 0) return false;
    let o = void 0;
    return await n.write(t, o, "utf8"), true;
  } finally {
    await n.close();
  }
}
var N3o, hme, vYe;