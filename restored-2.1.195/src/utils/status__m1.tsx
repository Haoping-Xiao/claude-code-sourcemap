// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ls
// matched 2.1.88 source: src/utils/status.tsx
// class=modified (alt of src/utils/status.tsx)  jaccard=0.0359  score=0.3308  fileCov=0.0388
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Ls = E(() => {
  ft();
  RE();
  fn();
  QO();
  ote = {
    bedrock: "Amazon Bedrock",
    vertex: "Google Vertex AI",
    foundry: "Microsoft Foundry",
    anthropicAws: "Claude Platform on AWS",
    mantle: "Amazon Bedrock (Mantle)",
    gateway: "Cloud gateway",
  };
});
function iI(e) {
  return e;
}
function ePt(e, t) {
  let n = uUr.find((s) => yc[s][e] !== null),
    r = e === "bedrock" ? nle(t ?? zSs()) : void 0,
    o = {};
  for (let s of uUr) {
    let i = yc[s][e] ?? (n ? yc[n][e] : yc[s].firstParty);
    o[s] = iI(r ? PIe(i, r) : i);
  }
  return o;
}
async function _ld() {
  let e = await nj(),
    t = ePt("bedrock", e),
    n;
  try {
    n = await j2e();
  } catch (s) {
    return (
      T(
        `Failed to list Bedrock inference profiles, falling back to hardcoded models: ${s instanceof Error ? s.message : String(s)}`,
        {
          level: "error",
        },
      ),
      t
    );
  }
  if (!n?.length) return t;
  let r = nle(e),
    o = {};
  for (let s of uUr) {
    let i = yc[s].firstParty;
    o[s] = iI(G2e(n, i, r) || t[s]);
  }
  return o;
}
function S7s(e) {
  let t = Dr().modelOverrides;
  if (!t) return e;
  let n = {
    ...e,
  };
  for (let [r, o] of Object.entries(t)) {
    let s = MSn[r];
    if (s && o) n[s] = iI(o);
  }
  return n;
}
function Hnt(e) {
  let t;
  try {
    t = Dr().modelOverrides;
  } catch {
    return e;
  }
  if (!t) return e;
  for (let [n, r] of Object.entries(t)) if (r === e) return n;
  return e;
}
function A7s() {
  if (KBe() !== null) return;
  if (fr() !== "bedrock") {
    pCt(ePt(fr()));
    return;
  }
  E7s();
}
function Vp() {
  let e = KBe();
  if (e === null) return (A7s(), S7s(ePt(fr())));
  return S7s(e);
}
function $Ie() {
  let e = KBe();
  if (e === null) return (A7s(), ePt(fr()));
  return e;
}
async function OSn() {
  if (KBe() !== null) return;
  if (fr() !== "bedrock") {
    pCt(ePt(fr()));
    return;
  }
  await E7s();
}
var uUr, E7s;
