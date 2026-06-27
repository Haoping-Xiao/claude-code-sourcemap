// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rle
// matched 2.1.88 source: src/utils/model/bedrock.ts
// class=modified  jaccard=0.212  score=0.7141  fileCov=0.2316
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rle] deps: Qi, ft, oo, wFe, je, fn, Mh, Myn, Myn
j2e = Cn(async function () {
  let [e, { ListInferenceProfilesCommand: t }] = await Promise.all([
      g7s(),
      Promise.resolve().then(() => (NDt(), ODt)),
    ]),
    n = [],
    r;
  try {
    do {
      let o = new t({
          ...(r && {
            nextToken: r,
          }),
          typeEquals: "SYSTEM_DEFINED",
        }),
        s = await e.send(o, {
          abortSignal: AbortSignal.timeout(8000),
        });
      if (s.inferenceProfileSummaries) n.push(...s.inferenceProfileSummaries);
      r = s.nextToken;
    } while (r);
    return n
      .filter((o) => o.inferenceProfileId?.includes("anthropic"))
      .map((o) => o.inferenceProfileId)
      .filter(Boolean);
  } catch (o) {
    throw (
      T(`Bedrock ListInferenceProfiles failed: ${o instanceof Error ? o.message : String(o)}`, {
        level: "error",
      }),
      o
    );
  }
});
DIe = Cn(async function (e) {
  let t = m7s(e),
    n = null;
  try {
    let [r, { GetInferenceProfileCommand: o }] = await Promise.all([
        g7s(),
        Promise.resolve().then(() => (NDt(), ODt)),
      ]),
      i = (
        await r.send(
          new o({
            inferenceProfileIdentifier: t,
          }),
          {
            abortSignal: AbortSignal.timeout(8000),
          },
        )
      ).models?.[0]?.modelArn;
    if (i) {
      let a = i.lastIndexOf("/");
      n = a >= 0 ? i.substring(a + 1) : i;
    }
  } catch (r) {
    T(
      `Failed to resolve Bedrock inference profile backing model for ${t}: ${r instanceof Error ? r.message : String(r)}`,
      {
        level: "error",
      },
    );
  }
  return (cSr(t, n), n);
}, m7s);
function y9(e) {
  let t = e.toLowerCase();
  for (let n of Object.values(yc))
    for (let r of Object.values(n)) if (typeof r === "string" && r.toLowerCase() === t) return n;
  return null;
}
var XBr, JBr, QBr, ZBr, eUr, tUr, nUr, rUr, oUr, sUr, iUr, aUr, lUr, MIe, y7s, yc, cUr, _7s, MSn;
