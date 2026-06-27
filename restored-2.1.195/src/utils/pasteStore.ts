// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module FDn
// matched 2.1.88 source: src/utils/pasteStore.ts
// class=modified  jaccard=0.3682  score=0.6874  fileCov=0.4423
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module FDn]
((zat = R(rt(), 1)),
  (N8i = R(se(), 1)),
  (p6d = {
    ring: [],
    mode: {
      type: "idle",
    },
  }));
$8i = zat.createContext(M8i());
function B8i() {
  return h6d ?? g6d;
}
function y6d(e, t) {
  let n = Vce.get(e);
  if (n !== void 0) ((wUt -= n.length), Vce.delete(e));
  if (t.length > B8i()) return;
  (Vce.set(e, t), (wUt += t.length));
  while (wUt > B8i()) {
    let r = Vce.keys().next().value;
    ((wUt -= Vce.get(r).length), Vce.delete(r));
  }
}
function sZr() {
  return GDn.join(tr(), m6d);
}
function F8i(e) {
  return U8i.createHash("sha256").update(e).digest("hex").slice(0, 16);
}
function j8i(e) {
  return GDn.join(sZr(), `${e}.txt`);
}
function G8i(e, t) {
  return (jDn.set(e, t), _6d(e, t));
}
async function _6d(e, t) {
  try {
    let n = qs(),
      r = sZr();
    await n.mkdir(r);
    let o = j8i(e);
    if ((await n.write(o, t, 384), jDn.delete(e), Vce.has(e)))
      ((wUt -= Vce.get(e).length), Vce.delete(e));
    (T(`Stored paste ${e} to ${o}`), xe("paste_store"));
  } catch (n) {
    (jDn.delete(e),
      y6d(e, t),
      T(`Failed to store paste: ${n}`),
      It("paste_store", "paste_store_write_failed"));
  }
}
async function W8i(e) {
  let t = jDn.get(e);
  if (t !== void 0) return t;
  let n = Vce.get(e);
  if (n !== void 0) return n;
  try {
    let r = j8i(e);
    return await qs().read(r);
  } catch (r) {
    if (!wn(r)) T(`Failed to retrieve paste ${e}: ${r}`);
    return null;
  }
}
async function q8i(e) {
  let t = qs(),
    n = sZr(),
    r;
  try {
    r = await t.list(n);
  } catch {
    return;
  }
  let o = e.getTime();
  for (let s of r) {
    if (!s.endsWith(".txt")) continue;
    let i = GDn.join(n, s);
    try {
      if ((await t.stat(i)).mtimeMs < o) (await t.delete(i), T(`Cleaned up old paste: ${i}`));
    } catch {}
  }
}
var U8i,
  GDn,
  m6d = "paste-cache",
  jDn,
  Vce,
  wUt = 0,
  g6d = 10000000 /* 1e7 */,
  h6d = null;
