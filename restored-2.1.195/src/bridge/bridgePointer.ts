// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qir
// matched 2.1.88 source: src/bridge/bridgePointer.ts
// class=modified  jaccard=0.5677  score=0.9346  fileCov=0.5911
// note: deminified; 6 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: writeBridgePointer, readBridgePointerAcrossWorktrees, readBridgePointer, getBridgePointerPath, clearBridgePointer, BRIDGE_POINTER_TTL_MS
function getBridgePointerPath(dir) {
  return Vir.join(PO(), LE(dir), "bridge-pointer.json");
}
async function writeBridgePointer(dir, pointer) {
  let n = getBridgePointerPath(dir);
  try {
    return (
      await yme.mkdir(Vir.dirname(n), {
        recursive: true,
      }),
      await yme.writeFile(n, De(pointer), "utf8"),
      T(`[bridge:pointer] wrote ${n}`),
      true
    );
  } catch (r) {
    return (
      T(`[bridge:pointer] write failed: ${r}`, {
        level: "warn",
      }),
      false
    );
  }
}
async function readBridgePointer(dir) {
  let t = getBridgePointerPath(dir),
    n,
    r;
  try {
    ((r = (await yme.stat(t)).mtimeMs), (n = await yme.readFile(t, "utf8")));
  } catch {
    return null;
  }
  let parsed = zYf().safeParse(XYf(n));
  if (!parsed.success)
    return (
      T(`[bridge:pointer] invalid schema, clearing: ${t}`),
      await clearBridgePointer(dir),
      null
    );
  let s = Math.max(0, Date.now() - r);
  if (s > BRIDGE_POINTER_TTL_MS)
    return (
      T(`[bridge:pointer] stale (>4h mtime), clearing: ${t}`),
      await clearBridgePointer(dir),
      null
    );
  return {
    ...parsed.data,
    ageMs: s,
  };
}
async function readBridgePointerAcrossWorktrees(dir) {
  let t = await readBridgePointer(dir);
  if (t)
    return {
      pointer: t,
      dir: dir,
    };
  let worktrees = await e9(dir);
  if (worktrees.length <= 1) return null;
  if (worktrees.length > _tc)
    return (
      T(`[bridge:pointer] ${worktrees.length} worktrees exceeds fanout cap ${_tc}, skipping`),
      null
    );
  let r = LE(dir),
    o = worktrees.filter((a) => LE(a) !== r),
    s = await Promise.all(
      o.map(async (a) => {
        let l = await readBridgePointer(a);
        return l
          ? {
              pointer: l,
              dir: a,
            }
          : null;
      }),
    ),
    freshest = null;
  for (let a of s) if (a && (!freshest || a.pointer.ageMs < freshest.pointer.ageMs)) freshest = a;
  if (freshest)
    T(
      `[bridge:pointer] fanout found pointer in worktree ${freshest.dir} (ageMs=${freshest.pointer.ageMs})`,
    );
  return freshest;
}
async function clearBridgePointer(dir) {
  let t = getBridgePointerPath(dir);
  try {
    (await yme.unlink(t), T(`[bridge:pointer] cleared ${t}`));
  } catch (n) {
    if (!wn(n))
      T(`[bridge:pointer] clear failed: ${n}`, {
        level: "warn",
      });
  }
}
function XYf(e) {
  try {
    return Ft(e);
  } catch {
    return null;
  }
}
var yme,
  Vir,
  _tc = 50,
  BRIDGE_POINTER_TTL_MS = 14400000,
  zYf;
