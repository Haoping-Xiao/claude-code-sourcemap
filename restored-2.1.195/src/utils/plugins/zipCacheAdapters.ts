// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MUc
// matched 2.1.88 source: src/utils/plugins/zipCacheAdapters.ts
// class=modified  jaccard=0.2245  score=0.9312  fileCov=0.2283
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var MUc = E(() => {
  ft();
  ty();
  Ao();
  I7e();
  _a();
});
async function ALm() {
  try {
    let e = await fXo.readFile(_$o(), "utf-8"),
      t = Pet().safeParse(Ft(e));
    if (!t.success)
      return (
        T(`Invalid known_marketplaces.json in zip cache: ${t.error.message}`, {
          level: "error",
        }),
        {}
      );
    return t.data;
  } catch {
    return {};
  }
}
async function HLm(e) {
  await XZn(_$o(), De(e, null, 2));
}
async function TLm(e, t) {
  let n = wYt();
  if (!n) return;
  let r = await vLm(t);
  if (r !== null) {
    let o = sRl(e);
    await XZn(Rmr.join(n, o), r);
  }
}
async function vLm(e) {
  let t = [Rmr.join(e, ".claude-plugin", "marketplace.json"), Rmr.join(e, "marketplace.json"), e];
  for (let n of t)
    try {
      return await fXo.readFile(n, "utf-8");
    } catch {}
  return null;
}
async function $Uc() {
  let e = await wP();
  for (let [r, o] of Object.entries(e)) {
    if (!o.installLocation) continue;
    try {
      await TLm(r, o.installLocation);
    } catch (s) {
      T(`Failed to save marketplace JSON for ${r}: ${s}`);
    }
  }
  let n = {
    ...(await ALm()),
    ...e,
  };
  await HLm(n);
}
var fXo, Rmr;
