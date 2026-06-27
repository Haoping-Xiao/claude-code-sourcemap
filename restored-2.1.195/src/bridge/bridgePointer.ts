// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module qir
// matched 2.1.88 source: src/bridge/bridgePointer.ts
// class=modified  jaccard=0.6655  score=1  fileCov=0.6655
// note: deminified; 6 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var qir = E(() => {
  Hp();
  Jt();
});
var F1e = {};
_t(F1e, {
  writeBridgePointer: () => writeBridgePointer,
  readBridgePointerAcrossWorktrees: () => readBridgePointerAcrossWorktrees,
  readBridgePointer: () => readBridgePointer,
  getBridgePointerPath: () => getBridgePointerPath,
  clearBridgePointer: () => clearBridgePointer,
  BRIDGE_POINTER_TTL_MS: () => BRIDGE_POINTER_TTL_MS,
});
function getBridgePointerPath(e) {
  return Vir.join(PO(), LE(e), "bridge-pointer.json");
}
async function writeBridgePointer(e, t) {
  let n = getBridgePointerPath(e);
  try {
    return (
      await yme.mkdir(Vir.dirname(n), {
        recursive: true,
      }),
      await yme.writeFile(n, De(t), "utf8"),
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
async function readBridgePointer(e) {
  let t = getBridgePointerPath(e),
    n,
    r;
  try {
    ((r = (await yme.stat(t)).mtimeMs), (n = await yme.readFile(t, "utf8")));
  } catch {
    return null;
  }
  let o = zYf().safeParse(XYf(n));
  if (!o.success)
    return (
      T(`[bridge:pointer] invalid schema, clearing: ${t}`),
      await clearBridgePointer(e),
      null
    );
  let s = Math.max(0, Date.now() - r);
  if (s > BRIDGE_POINTER_TTL_MS)
    return (
      T(`[bridge:pointer] stale (>4h mtime), clearing: ${t}`),
      await clearBridgePointer(e),
      null
    );
  return {
    ...o.data,
    ageMs: s,
  };
}
async function readBridgePointerAcrossWorktrees(e) {
  let t = await readBridgePointer(e);
  if (t)
    return {
      pointer: t,
      dir: e,
    };
  let n = await e9(e);
  if (n.length <= 1) return null;
  if (n.length > _tc)
    return (T(`[bridge:pointer] ${n.length} worktrees exceeds fanout cap ${_tc}, skipping`), null);
  let r = LE(e),
    o = n.filter((a) => LE(a) !== r),
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
    i = null;
  for (let a of s) if (a && (!i || a.pointer.ageMs < i.pointer.ageMs)) i = a;
  if (i) T(`[bridge:pointer] fanout found pointer in worktree ${i.dir} (ageMs=${i.pointer.ageMs})`);
  return i;
}
async function clearBridgePointer(e) {
  let t = getBridgePointerPath(e);
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
