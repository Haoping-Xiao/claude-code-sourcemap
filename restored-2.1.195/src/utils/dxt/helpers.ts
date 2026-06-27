// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ndo
// matched 2.1.88 source: src/utils/dxt/helpers.ts
// class=modified  jaccard=0.3426  score=0.8581  fileCov=0.3631
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
async function eTp(e) {
  let { McpbManifestSchema: t } = await Promise.resolve().then(() => (ndo(), tdo)),
    n = t.safeParse(e);
  if (!n.success) {
    let r = n.error.flatten(),
      o = [
        ...Object.entries(r.fieldErrors).map(([s, i]) => `${s}: ${i?.join(", ")}`),
        ...(r.formErrors || []),
      ]
        .filter(Boolean)
        .join("; ");
    throw Error(`Invalid manifest: ${o}`);
  }
  return n.data;
}
async function tTp(e) {
  let t;
  try {
    t = Ft(e);
  } catch (n) {
    throw Error(`Invalid JSON in manifest.json: ${be(n)}`);
  }
  return eTp(t);
}
async function rdo(e) {
  let t = new TextDecoder().decode(e);
  return tTp(t);
}
